/* Poly Concreting — shared components */
const { useState, useEffect, useRef, useCallback } = React;

/* reveal-on-scroll hook — rect-based (IntersectionObserver is unreliable in sandbox) */
const _revealReg = new Set();
function _checkReveals(){
  const vh = window.innerHeight || document.documentElement.clientHeight;
  _revealReg.forEach(entry=>{
    const el = entry.el; if(!el){ _revealReg.delete(entry); return; }
    const r = el.getBoundingClientRect();
    if(r.top < vh*0.9 && r.bottom > 0){ entry.cb(); _revealReg.delete(entry); }
  });
}
if(typeof window!=="undefined" && !window._revealBound){
  window._revealBound = true;
  window.addEventListener("scroll", _checkReveals, {passive:true});
  window.addEventListener("resize", _checkReveals);
  // re-check as layout settles (fonts load late and reflow positions)
  [60,250,500,900,1500].forEach(ms=> setTimeout(_checkReveals, ms));
  if(document.fonts && document.fonts.ready){ document.fonts.ready.then(()=>{ _checkReveals(); setTimeout(_checkReveals,120); }); }
}
function useInView(){
  const ref = useRef(null);
  const [seen, setSeen] = useState(false);
  useEffect(()=>{
    const el = ref.current; if(!el) return;
    const entry = { el, cb: ()=>setSeen(true) };
    const r = el.getBoundingClientRect();
    const vh = window.innerHeight || 800;
    if(r.top < vh*0.95 && r.bottom > 0){ setSeen(true); return; }
    _revealReg.add(entry);
    const t = setTimeout(_checkReveals, 100);
    // robustness: some embed/preview contexts are host-scrolled and never fire
    // scroll events — guarantee content reveals shortly after load regardless.
    const fallback = setTimeout(()=>{ setSeen(true); _revealReg.delete(entry); }, 1100);
    return ()=>{ _revealReg.delete(entry); clearTimeout(t); clearTimeout(fallback); };
  },[]);
  return [ref, seen];
}

function Reveal({ children, d, as="div", className="", style }){
  const [ref, seen] = useInView();
  useEffect(()=>{
    if(!seen) return;
    const el = ref.current; if(!el) return;
    // self-heal: after the entrance window, lock the final state so content is
    // never stuck mid-transition (some embed/capture contexts freeze transitions)
    const id = setTimeout(()=>{ if(el) el.style.transition = "none"; }, 1050);
    return ()=> clearTimeout(id);
  },[seen]);
  const Tag = as;
  return (
    <Tag ref={ref} data-d={d} className={`reveal ${seen?"in":""} ${className}`} style={style}>
      {children}
    </Tag>
  );
}

/* count-up number */
function Counter({ value, prefix="", suffix="", dur=1700 }){
  const [ref, seen] = useInView();
  const [n, setN] = useState(0);
  useEffect(()=>{
    if(!seen) return;
    if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){ setN(value); return; }
    let raf, start;
    const tick = (t)=>{
      if(!start) start = t;
      const p = Math.min((t-start)/dur, 1);
      const eased = 1 - Math.pow(1-p, 3);
      setN(value * eased);
      if(p<1) raf = requestAnimationFrame(tick);
      else setN(value);
    };
    raf = requestAnimationFrame(tick);
    // fallback: guarantee final value even if rAF is throttled/frozen
    const fb = setTimeout(()=> setN(value), dur + 400);
    return ()=>{ cancelAnimationFrame(raf); clearTimeout(fb); };
  },[seen,value]);
  const display = Number.isInteger(value) ? Math.round(n) : n.toFixed(1);
  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}

/* image / striped placeholder */
function Ph({ label, className="", style, bone=false, src, alt="", pos="center", children }){
  return (
    <div className={`ph ${bone?"ph--bone":""} ${className}`} style={style}>
      {src && <img src={src} alt={alt} loading="lazy" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:pos}}/>}
      {children}
      {label && <div className="ph__tag" style={src?{background:"rgba(8,8,10,.5)",backdropFilter:"blur(4px)",borderRadius:"3px",margin:"10px"}:undefined}>{label}</div>}
    </div>
  );
}

function Eyebrow({ children, n, style }){
  return (
    <div className="eyebrow" style={{display:"flex",alignItems:"center",gap:"12px",...style}}>
      {n && <span style={{color:"var(--faint)"}}>{n}</span>}
      {n && <span style={{width:"26px",height:"1px",background:"var(--line-2)"}}></span>}
      <span>{children}</span>
    </div>
  );
}

function Arrow({ d="ne" }){
  // ne = up-right, e = right
  if(d==="e") return <span className="ar" aria-hidden="true">&#8594;</span>;
  return <span className="ar" aria-hidden="true">&#8599;</span>;
}

/* simple line icons (stroke) for process / services */
function Icon({ name, s=22 }){
  const p = { width:s, height:s, viewBox:"0 0 24 24", fill:"none", stroke:"currentColor",
    strokeWidth:1.4, strokeLinecap:"round", strokeLinejoin:"round" };
  const paths = {
    phone:<path d="M5 4h3l1.5 4-2 1.5a11 11 0 0 0 5 5l1.5-2 4 1.5v3a2 2 0 0 1-2.2 2A16 16 0 0 1 3 6.2 2 2 0 0 1 5 4Z"/>,
    pin:<g><path d="M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Z"/><circle cx="12" cy="10" r="2.5"/></g>,
    check:<path d="M4 12.5 9.5 18 20 6.5"/>,
    x:<path d="M6 6l12 12M18 6 6 18"/>,
    play:<path d="M8 5.5v13l11-6.5-11-6.5Z"/>,
    arrowR:<path d="M5 12h14M13 6l6 6-6 6"/>,
    quote:<path d="M9 6H6a3 3 0 0 0-3 3v6h6V9M21 6h-3a3 3 0 0 0-3 3v6h6V9"/>,
    chat:<path d="M4 5h16v11H8l-4 3V5Z"/>,
    survey:<g><path d="M4 4h16v16H4z"/><path d="M8 9h8M8 13h5"/></g>,
    clipboard:<g><rect x="5" y="4" width="14" height="17" rx="1.5"/><path d="M9 4V3h6v1M8 10h8M8 14h6"/></g>,
    truck:<g><path d="M3 7h11v8H3zM14 10h4l3 3v2h-7"/><circle cx="7" cy="17" r="1.6"/><circle cx="17.5" cy="17" r="1.6"/></g>,
    trowel:<path d="M14 3 21 10l-5 2-3-3 1-6ZM11 12 4 19l-1-1 6-8"/>,
    sparkle:<path d="M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/>,
    flag:<path d="M6 21V4M6 5h11l-2 3 2 3H6"/>,
    drive:<g><path d="M3 20 9 4h6l6 16M8 9h8M7 14h10"/></g>,
    slab:<g><path d="M3 8l9-4 9 4-9 4-9-4Z"/><path d="M3 8v6l9 4 9-4V8"/></g>,
    agg:<g><circle cx="7" cy="8" r="2"/><circle cx="14" cy="7" r="1.5"/><circle cx="17" cy="13" r="2"/><circle cx="9" cy="15" r="1.6"/><circle cx="13" cy="17" r="1.3"/></g>,
    path:<path d="M8 21c0-5 8-7 8-12a4 4 0 0 0-8 0M6 9h6M9 15h6"/>,
    comm:<g><rect x="4" y="4" width="16" height="16"/><path d="M9 4v16M4 9h16M4 14h16"/></g>,
    civil:<g><path d="M3 19h18M5 19V9l7-5 7 5v10M9 19v-5h6v5"/></g>,
    star:<path d="m12 4 2.3 5 5.2.5-3.9 3.5 1.2 5.3L12 20.8 7.2 23.3 8.4 18 4.5 14.5 9.7 14 12 4Z"/>,
  };
  return <svg {...p} aria-hidden="true">{paths[name]||paths.check}</svg>;
}

window.PC_UI = { useInView, Reveal, Counter, Ph, Eyebrow, Arrow, Icon,
  useState, useEffect, useRef, useCallback };
