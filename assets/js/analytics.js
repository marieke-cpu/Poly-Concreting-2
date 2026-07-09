/**
 * Poly Concreting analytics dataLayer contract.
 *
 * GTM should listen for these custom event names:
 * - hero_cta_click: primary hero quote CTA clicks.
 * - cta_click: quote/contact/call/project CTA clicks across the site.
 * - phone_click: tel: link clicks.
 * - email_click: mailto: link clicks.
 * - quote_form_start: first interaction with a quote/contact form field.
 * - quote_form_submit: successful quote submission only.
 * - quote_form_error: failed validation or failed quote submission.
 * - menu_click: header, mobile menu, mega menu and footer navigation clicks.
 * - service_view: service detail page views.
 * - project_view: project card/detail views.
 * - faq_open: FAQ accordion/details item opened.
 * - video_start, video_25, video_50, video_75, video_complete: video engagement.
 * - scroll_50, scroll_90: one-time page scroll depth milestones.
 * - outbound_click: clicks to external websites.
 *
 * This file never calls GA4, Google Ads, Clarity, or any analytics vendor.
 * It only pushes structured events to window.dataLayer for GTM to consume.
 */

window.dataLayer = window.dataLayer || [];

const ANALYTICS_VERSION = "20260708-data-layer-v1";
const quoteFormStarted = new WeakSet();
const virtualFormStarted = new Set();
const trackedVideos = new WeakMap();
const trackedServiceViews = new Set();
const trackedProjectViews = new Set();
const scrollMarks = { 50: false, 90: false };
let initialized = false;
let submitterWrapped = false;

function isDevelopment(){
  const host = window.location.hostname;
  const debug = new URLSearchParams(window.location.search).get("analytics_debug");
  return debug === "1" || host === "localhost" || host === "127.0.0.1" || host === "" || window.location.protocol === "file:";
}

function cleanText(value){
  return String(value || "").replace(/\s+/g, " ").trim();
}

function normalisePath(){
  return window.location.pathname || "/";
}

function getHrefDestination(el){
  const href = el && el.getAttribute && el.getAttribute("href");
  if(!href) return "";
  try {
    return new URL(href, window.location.href).href;
  } catch {
    return href;
  }
}

function getSectionName(el){
  const section = el && el.closest && el.closest("section, header, footer, main, [id]");
  if(!section) return "unknown";
  if(section.id) return section.id;
  if(section.classList.contains("hero") || section.className.toString().includes("hero")) return "hero";
  const heading = section.querySelector && section.querySelector("h1,h2,.eyebrow");
  return cleanText(heading && heading.textContent).toLowerCase() || section.tagName.toLowerCase();
}

function inferServiceName(){
  const path = normalisePath().replace(/^\/+|\/+$/g, "");
  const hash = window.location.hash.replace("#", "");
  const services = window.PC_SERVICES || [];
  const dataServices = (window.PC_DATA && window.PC_DATA.services) || [];
  const fromServices = services.find(s => s.id === hash || s.id === path);
  if(fromServices) return fromServices.name || fromServices.short || fromServices.id;
  const fromData = dataServices.find(([, id]) => id === hash || id === path);
  if(fromData) return fromData[0];
  if(path === "driveways" || path.endsWith("/driveways")) return "Driveways";
  if(path === "service-detail" && hash) return cleanText(hash.replace(/[-_]+/g, " "));
  if(/concreting$/.test(path)) return cleanText(path.replace(/-/g, " "));
  return "";
}

function getProjectById(id){
  const projects = (window.PC_DATA && window.PC_DATA.projects) || [];
  return projects.find(project => project.id === id);
}

function getFormName(form){
  if(!form) return "unknown_form";
  return form.getAttribute("data-form-name") || form.getAttribute("aria-label") || form.id || form.name || "quote_form";
}

function getServiceSelected(form, fallbackData){
  if(fallbackData && (fallbackData.service_selected || fallbackData.service || fallbackData.type || fallbackData.finish)){
    return fallbackData.service_selected || fallbackData.service || fallbackData.type || fallbackData.finish;
  }
  if(!form) return "";
  const field = form.querySelector('[name="service"],[name="type"],[name="finish"],select');
  return field ? cleanText(field.value || field.options?.[field.selectedIndex]?.text || "") : "";
}

function isQuoteLikeForm(form){
  if(!form) return false;
  const label = `${form.id || ""} ${form.className || ""} ${form.getAttribute("action") || ""} ${cleanText(form.textContent).slice(0, 180)}`.toLowerCase();
  return /quote|contact|web3forms|request|project/.test(label);
}

function isCTA(el, text){
  const href = el && el.getAttribute && (el.getAttribute("href") || "");
  const cls = el && el.className ? String(el.className) : "";
  return /\bbtn\b|cta|quote|contact|call|project/i.test(cls) ||
    /get.*quote|request.*quote|free quote|fixed quote|quote my|call now|call angelo|contact|view projects|view all projects|see our work|start my quote|price my|request free quote/i.test(text) ||
    /^tel:|^mailto:|#quote|\/?Quote|\?quote=open/i.test(href);
}

function isHeroCTA(el, text){
  const hero = el && el.closest && el.closest(".hero, .ads-hero, .svc-sales-hero, .loc-hero, #top section, section:first-of-type");
  return !!hero && /get.*quote|my quote|free quote|fixed quote|price my|request/i.test(text);
}

function isNavigationClick(el){
  return !!(el && el.closest && el.closest("nav, .mega, .mnav, footer, .nav-links, .mnav-scroll, .foot-grid"));
}

function isExternalUrl(url){
  return url && /^https?:/i.test(url.protocol) && url.hostname !== window.location.hostname;
}

export function trackEvent(eventName, data = {}){
  const payload = {
    event: eventName,
    page: normalisePath(),
    timestamp: Date.now(),
    analytics_version: ANALYTICS_VERSION,
    ...data,
  };
  window.dataLayer.push(payload);
  if(isDevelopment()){
    console.info("Analytics", eventName, payload);
  }
  return payload;
}

function trackQuoteFormSubmit(data = {}){
  sessionStorage.setItem("pc_quote_submit_tracked", "1");
  return trackEvent("quote_form_submit", {
    form_name: data.form_name || data.source || "quote_form",
    service_selected: data.service_selected || data.service || data.type || data.finish || "",
  });
}

function trackQuoteFormError(data = {}){
  return trackEvent("quote_form_error", {
    form_name: data.form_name || data.source || "quote_form",
    service_selected: data.service_selected || data.service || data.type || data.finish || "",
    error_message: data.error_message || data.message || "Quote form error",
  });
}

function trackFAQOpen(question){
  if(!question) return;
  trackEvent("faq_open", { question });
}

function onDocumentClick(event){
  const clickable = event.target.closest && event.target.closest("a[href], button, [role='button'], summary");
  if(!clickable) return;

  const text = cleanText(clickable.innerText || clickable.textContent || clickable.getAttribute("aria-label"));
  const destination = getHrefDestination(clickable);
  const rawHref = clickable.getAttribute && clickable.getAttribute("href");
  const section = getSectionName(clickable);

  if(rawHref && rawHref.startsWith("tel:")){
    trackEvent("phone_click", {
      phone_number: rawHref.replace(/^tel:/i, ""),
      location: section,
    });
  }

  if(rawHref && rawHref.startsWith("mailto:")){
    trackEvent("email_click", {
      email: rawHref.replace(/^mailto:/i, "").split("?")[0],
    });
  }

  if(isNavigationClick(clickable) && rawHref){
    trackEvent("menu_click", {
      menu_item: text,
      destination,
    });
  }

  if(clickable.tagName === "BUTTON"){
    const faqSection = clickable.closest("section");
    const sectionText = cleanText(faqSection && faqSection.textContent).toLowerCase();
    const isFAQButton = /common questions|good to know|faq/.test(sectionText);
    const isCurrentlyOpen = !!clickable.querySelector('[style*="rotate(45deg)"]');
    if(isFAQButton && !isCurrentlyOpen){
      trackFAQOpen(text);
    }
  }

  if(isHeroCTA(clickable, text)){
    trackEvent("hero_cta_click", {
      cta_text: text,
      section: "hero",
      service: inferServiceName(),
    });
  }

  if(isCTA(clickable, text)){
    trackEvent("cta_click", {
      cta_text: text,
      section,
      destination: destination || "button",
    });
  }

  if(rawHref){
    try {
      const url = new URL(rawHref, window.location.href);
      if(isExternalUrl(url)){
        trackEvent("outbound_click", {
          destination: url.href,
        });
      }
    } catch {}
  }
}

function onFormFieldInteraction(event){
  const field = event.target;
  if(!field || !/INPUT|SELECT|TEXTAREA/.test(field.tagName)) return;
  const form = field.closest("form");
  if(form){
    if(!isQuoteLikeForm(form) || quoteFormStarted.has(form)) return;
    quoteFormStarted.add(form);
    trackEvent("quote_form_start", {
      form_name: getFormName(form),
      service_selected: getServiceSelected(form),
    });
    return;
  }

  if(field.closest(".q-input, .q-range") || field.classList.contains("q-input") || field.classList.contains("q-range")){
    const key = "Quote modal";
    if(virtualFormStarted.has(key)) return;
    virtualFormStarted.add(key);
    trackEvent("quote_form_start", {
      form_name: key,
      service_selected: inferServiceName(),
    });
  }
}

function onFormSubmit(event){
  const form = event.target;
  if(!form || !isQuoteLikeForm(form)) return;
  if(form.checkValidity && !form.checkValidity()){
    trackEvent("quote_form_error", {
      form_name: getFormName(form),
      service_selected: getServiceSelected(form),
      error_message: "Browser validation failed",
    });
  }
}

function wrapQuoteSubmitter(){
  if(submitterWrapped || typeof window.PC_SUBMIT_QUOTE !== "function") return;
  submitterWrapped = true;
  const originalSubmit = window.PC_SUBMIT_QUOTE;
  window.PC_SUBMIT_QUOTE = async function analyticsSubmitQuote(payload = {}){
    const result = await originalSubmit.apply(this, arguments);
    if(result && (result.success || result.ok)){
      trackQuoteFormSubmit({
        ...payload,
        form_name: payload.source || "Quote modal",
      });
    } else {
      trackQuoteFormError({
        ...payload,
        form_name: payload.source || "Quote modal",
        error_message: (result && result.message) || "Quote submission failed",
      });
    }
    return result;
  };
}

function watchQuoteSubmitter(){
  wrapQuoteSubmitter();
  if(submitterWrapped) return;
  let attempts = 0;
  const timer = window.setInterval(() => {
    attempts += 1;
    wrapQuoteSubmitter();
    if(submitterWrapped || attempts >= 20) window.clearInterval(timer);
  }, 250);
}

function trackThankYouSubmitFallback(){
  if(!/thankyou/i.test(normalisePath())) return;
  if(sessionStorage.getItem("pc_quote_submit_tracked") === "1") return;
  const raw = sessionStorage.getItem("pc_quote");
  if(!raw) return;
  try {
    const payload = JSON.parse(raw);
    trackQuoteFormSubmit({
      ...payload,
      form_name: payload.source || "Thank you page",
    });
  } catch {}
}

function trackServiceView(){
  const serviceName = inferServiceName();
  const path = normalisePath();
  const shouldTrack = serviceName && (
    /driveways|service-detail|concreting/.test(path) ||
    window.location.hash
  );
  if(!shouldTrack) return;
  const key = `${path}${window.location.hash}:${serviceName}`;
  if(trackedServiceViews.has(key)) return;
  trackedServiceViews.add(key);
  trackEvent("service_view", {
    service_name: serviceName,
  });
}

function trackProjectFromHash(){
  if(!/Projects/i.test(normalisePath())) return;
  const id = window.location.hash.replace("#", "");
  if(!id || trackedProjectViews.has(id)) return;
  const project = getProjectById(id);
  if(!project) return;
  trackedProjectViews.add(id);
  trackEvent("project_view", {
    project_name: project.title,
    project_category: Array.isArray(project.cat) ? project.cat.join(", ") : project.cat,
  });
}

function onDetailsToggle(event){
  const details = event.target;
  if(details && details.tagName === "DETAILS" && details.open){
    const question = cleanText(details.querySelector("summary")?.textContent);
    trackFAQOpen(question);
  }
}

function getVideoName(video){
  const src = video.currentSrc || video.getAttribute("src") || "";
  if(video.classList.contains("hero-bg-video") || video.closest(".hero, .ads-hero, .loc-hero")) return `hero:${src}`;
  return src || "video";
}

function bindVideo(video){
  if(!video || trackedVideos.has(video)) return;
  const state = { start:false, 25:false, 50:false, 75:false, complete:false };
  trackedVideos.set(video, state);

  const baseData = () => ({
    video_src: video.currentSrc || video.getAttribute("src") || "",
    video_name: getVideoName(video),
  });

  const onStart = () => {
    if(state.start) return;
    state.start = true;
    trackEvent("video_start", baseData());
  };

  const onTime = () => {
    if(!video.duration || !Number.isFinite(video.duration)) return;
    const pct = (video.currentTime / video.duration) * 100;
    [25, 50, 75].forEach(mark => {
      if(pct >= mark && !state[mark]){
        state[mark] = true;
        trackEvent(`video_${mark}`, baseData());
      }
    });
  };

  const onComplete = () => {
    if(state.complete) return;
    state.complete = true;
    trackEvent("video_complete", baseData());
  };

  video.addEventListener("play", onStart, { passive:true });
  video.addEventListener("playing", onStart, { passive:true });
  video.addEventListener("timeupdate", onTime, { passive:true });
  video.addEventListener("ended", onComplete, { passive:true });
}

function bindExistingVideos(){
  document.querySelectorAll("video").forEach(bindVideo);
}

function observeVideos(){
  bindExistingVideos();
  const observer = new MutationObserver(mutations => {
    for(const mutation of mutations){
      mutation.addedNodes.forEach(node => {
        if(node.nodeType !== 1) return;
        if(node.tagName === "VIDEO") bindVideo(node);
        node.querySelectorAll && node.querySelectorAll("video").forEach(bindVideo);
      });
    }
  });
  observer.observe(document.documentElement, { childList:true, subtree:true });
}

function onScroll(){
  if(onScroll._timer) return;
  onScroll._timer = window.setTimeout(() => {
    onScroll._timer = null;
    const doc = document.documentElement;
    const scrollable = Math.max(1, doc.scrollHeight - window.innerHeight);
    const pct = ((window.scrollY || doc.scrollTop || 0) / scrollable) * 100;
    if(pct >= 50 && !scrollMarks[50]){
      scrollMarks[50] = true;
      trackEvent("scroll_50");
    }
    if(pct >= 90 && !scrollMarks[90]){
      scrollMarks[90] = true;
      trackEvent("scroll_90");
    }
    if(scrollMarks[50] && scrollMarks[90]){
      window.removeEventListener("scroll", onScroll);
    }
  }, 160);
}

export function initAnalytics(){
  if(initialized) return;
  initialized = true;

  document.addEventListener("click", onDocumentClick, true);
  document.addEventListener("focusin", onFormFieldInteraction, true);
  document.addEventListener("change", onFormFieldInteraction, true);
  document.addEventListener("submit", onFormSubmit, true);
  document.addEventListener("toggle", onDetailsToggle, true);
  window.addEventListener("scroll", onScroll, { passive:true });
  window.addEventListener("hashchange", () => {
    window.setTimeout(trackServiceView, 80);
    window.setTimeout(trackProjectFromHash, 80);
  }, { passive:true });

  watchQuoteSubmitter();
  observeVideos();

  window.setTimeout(trackServiceView, 120);
  window.setTimeout(trackProjectFromHash, 120);
  window.setTimeout(trackThankYouSubmitFallback, 120);
}

window.PCAnalytics = {
  trackEvent,
  initAnalytics,
  trackFAQOpen,
  trackQuoteFormSubmit,
  trackQuoteFormError,
};

if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded", initAnalytics, { once:true });
}else{
  initAnalytics();
}
