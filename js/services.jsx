/* Poly Concreting — Services page */
const { Reveal:SR, Ph:SPh, Eyebrow:SEb, Arrow:SAr, Icon:SIc } = window.PC_UI;
const SVC = window.PC_SERVICES;
const SD  = window.PC_DATA;
const SNav    = window.PC_HERO.Nav;
const SFooter = window.PC_S2.Footer;
const SVC_SLUGS = {driveways:"driveways",slabs:"slabs",pathways:"pathways",patios:"outdoor",pools:"pools",commercial:"commercial",resurfacing:"resurfacing",trowel:"trowel",broom:"broom",swirl:"swirl",exposed:"exposedaggregate",coloured:"coloured",stamped:"stamped",covercrete:"covercrete"};
const serviceHref = s => SVC_SLUGS[s.id] || s.id;

/* ── service card ── */
function ServiceCard({ s }){
  const [hov, setHov] = React.useState(false);
  const href = serviceHref(s);
  return (
    <div
      className="svc-card"
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        position:"relative", borderRadius:"var(--r-lg)", overflow:"hidden",
        border:`1px solid ${hov?"var(--line-3)":"var(--line)"}`,
        display:"flex", flexDirection:"column",
        minHeight:"clamp(340px,30vw,440px)",
        transition:"border-color .3s, transform .3s var(--ease-out)",
        transform: hov ? "translateY(-4px)" : "none",
      }}
    >
      {/* photo */}
      <SPh label={null} src={s.hero} pos={s.pos} style={{position:"absolute",inset:0}}/>
      {/* gradient */}
      <div style={{
        position:"absolute", inset:0,
        background: hov
          ? "linear-gradient(0deg,rgba(8,8,10,1) 28%,rgba(8,8,10,.65) 60%,rgba(8,8,10,.25))"
          : "linear-gradient(0deg,rgba(8,8,10,.97) 32%,rgba(8,8,10,.5) 65%,rgba(8,8,10,.15))",
        transition:"background .4s",
      }}/>

      {/* full-card link — sits behind content, makes whole card clickable */}
      <a
        href={href}
        aria-label={`View ${s.name} service details`}
        style={{position:"absolute",inset:0,zIndex:1}}
      />

      {/* content */}
      <div style={{position:"relative",marginTop:"auto",padding:"clamp(18px,2vw,26px)",zIndex:2}}>
        {/* "View details" indicator — top right corner */}
        <div style={{
          position:"absolute",top:"clamp(14px,1.5vw,18px)",right:"clamp(14px,1.5vw,18px)",
          display:"flex",alignItems:"center",gap:"5px",
          fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",fontFamily:"var(--font-mono)",
          opacity:hov?1:0,transform:hov?"translateY(0)":"translateY(3px)",
          transition:"opacity .25s,transform .25s",
        }}>
          VIEW <SAr/>
        </div>

        <h3 className="display" style={{fontSize:"clamp(20px,1.9vw,26px)",lineHeight:.95,margin:"0 0 8px"}}>
          {s.name}
        </h3>
        <p style={{margin:"0 0 14px",fontSize:"13px",color:"var(--muted)",lineHeight:1.5,maxWidth:"28ch"}}>
          {s.tag}
        </p>
        <div style={{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"18px"}}>
          {s.benefits.slice(0,3).map(b=>(
            <div key={b.t} style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"12.5px",color:"var(--text)"}}>
              <SIc name="check" s={13}/>
              {b.t}
            </div>
          ))}
        </div>
        {/* Visible service link — z-index keeps it above the full-card link */}
        <a
          href={href}
          className="btn btn--solid"
          style={{width:"100%",justifyContent:"center",fontSize:"12px",padding:"13px 20px",position:"relative",zIndex:3}}
        >
          View {s.short.toLowerCase()} <SAr/>
        </a>
      </div>
    </div>
  );
}

/* ── process step ── */
function Step({ n, t, d }){
  return (
    <div style={{borderTop:"2px solid var(--line-2)",paddingTop:"20px"}}>
      <div className="mono chrome-text display" style={{fontSize:"28px",lineHeight:1}}>{n}</div>
      <h4 style={{margin:"14px 0 0",fontSize:"16px",fontWeight:700,letterSpacing:".005em"}}>{t}</h4>
      <p style={{margin:"8px 0 0",color:"var(--muted)",fontSize:"14px",lineHeight:1.55}}>{d}</p>
    </div>
  );
}

/* ── testimonial card ── */
function TCard({ q, n, r }){
  return (
    <div style={{
      background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",
      padding:"clamp(22px,2.4vw,30px)",display:"flex",flexDirection:"column",gap:"14px",
    }}>
      <div style={{color:"var(--faint)"}}><SIc name="quote" s={20}/></div>
      <p style={{margin:0,fontSize:"clamp(14px,1.2vw,16px)",lineHeight:1.65,color:"var(--text)",flex:1}}>
        {q}
      </p>
      <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"auto"}}>
        <div style={{
          width:"32px",height:"32px",borderRadius:"50%",background:"var(--panel-3)",
          border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0,
        }}>
          <span style={{fontSize:"13px",fontWeight:700,color:"var(--text)"}}>{n[0]}</span>
        </div>
        <div>
          <div style={{fontSize:"13.5px",fontWeight:600}}>{n}</div>
          <div className="mono" style={{fontSize:"10.5px",color:"var(--muted)",letterSpacing:".04em"}}>{r}</div>
        </div>
      </div>
    </div>
  );
}

function GoogleMark(){
  return (
    <svg width="34" height="34" viewBox="0 0 48 48" aria-hidden="true" style={{flexShrink:0}}>
      <path fill="#4285F4" d="M44.5 20H24v8h11.7C34 33.5 29.5 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20-7.9 20-21 0-1.3-.1-2.7-.5-4z"/>
      <path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.6 15.4 19 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3c-7.7 0-14.4 4.5-17.7 11.7z"/>
      <path fill="#FBBC05" d="M24 45c5.4 0 10.3-1.9 14.1-5l-6.5-5.3C29.5 36.2 26.9 37 24 37c-5.5 0-10.1-3.5-11.7-8.3l-6.6 5C9.4 40.5 16.2 45 24 45z"/>
      <path fill="#EA4335" d="M44.5 20H24v8h11.7c-.8 2.4-2.4 4.4-4.5 5.8l6.5 5.3C41.8 35.7 45 30.3 45 24c0-1.3-.1-2.7-.5-4z"/>
    </svg>
  );
}

function Stars({ size=17 }){
  const star = "M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
  return (
    <span aria-label="5 star review" style={{display:"inline-flex",gap:"3px",color:"#FBBC04"}}>
      {[0,1,2,3,4].map(i=>(
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d={star}/>
        </svg>
      ))}
    </span>
  );
}

function ReviewCarousel({ reviews }){
  const [idx, setIdx] = React.useState(0);
  const total = reviews.length;
  const go = step => setIdx(i => (i + step + total) % total);

  React.useEffect(()=>{
    if(total < 2) return;
    const timer = setInterval(()=>go(1), 5200);
    return ()=>clearInterval(timer);
  }, [total]);

  const featured = reviews[idx] || reviews[0];

  return (
    <div className="services-review-carousel" style={{
      display:"flex",
      alignItems:"stretch",
      gap:"0",
      marginTop:"clamp(28px,3.5vw,44px)",
      background:"var(--base)",
      border:"1px solid var(--line)",
      borderRadius:"var(--r)",
      overflow:"hidden",
    }}>
      <SR d="2">
        <div style={{
          height:"100%",
          background:"var(--panel)",
          borderRight:"1px solid var(--line)",
          padding:"clamp(18px,2vw,24px)",
          width:"clamp(250px,24vw,330px)",
          display:"flex",
          flexDirection:"column",
          justifyContent:"space-between",
          gap:"18px",
        }}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:"14px"}}>
              <GoogleMark/>
              <div>
                <div className="mono" style={{fontSize:"11px",letterSpacing:".14em",color:"var(--muted)"}}>GOOGLE REVIEWS</div>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"5px"}}>
                  <strong style={{fontSize:"32px",lineHeight:1}}>4.8</strong>
                  <Stars/>
                </div>
              </div>
            </div>
            <p style={{margin:"22px 0 0",color:"var(--muted)",fontSize:"15px",lineHeight:1.65,maxWidth:"34ch"}}>
              Public client feedback from homeowners and builders across South East Queensland.
            </p>
          </div>
          <div className="mono" style={{fontSize:"10.5px",letterSpacing:".09em",color:"var(--faint)",borderTop:"1px solid var(--line)",paddingTop:"14px"}}>
            {SD.googleReviewCount}+ REVIEWS · MORAYFIELD BASED
          </div>
        </div>
      </SR>

      <SR d="3" style={{flex:1,minWidth:0}}>
        <div style={{
          height:"100%",
          display:"flex",
          alignItems:"stretch",
          minWidth:0,
        }}>
          <div key={idx} className="rise" style={{padding:"clamp(20px,2.4vw,30px)",flex:1,minWidth:0}}>
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",flexWrap:"wrap"}}>
              <Stars size={18}/>
              <span className="mono" style={{fontSize:"10.5px",letterSpacing:".12em",color:"var(--muted)"}}>GOOGLE REVIEW</span>
            </div>
            <p style={{margin:"clamp(16px,1.8vw,22px) 0 0",fontSize:"clamp(16px,1.35vw,21px)",lineHeight:1.5,maxWidth:"72ch",color:"var(--text)"}}>
              "{featured.q}"
            </p>
            <div style={{display:"flex",alignItems:"center",gap:"12px",marginTop:"clamp(16px,1.8vw,22px)"}}>
              <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"var(--panel-3)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",fontWeight:800}}>
                {featured.n[0]}
              </div>
              <div>
                <div style={{fontWeight:700}}>{featured.n}</div>
                <div className="mono" style={{fontSize:"11px",color:"var(--muted)",letterSpacing:".05em"}}>{featured.r} · Google</div>
              </div>
            </div>
          </div>

          <div style={{borderLeft:"1px solid var(--line)",padding:"clamp(18px,2vw,24px)",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"14px",background:"var(--panel)",width:"clamp(118px,10vw,150px)",flexShrink:0}}>
            <div className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",whiteSpace:"nowrap"}}>
              {idx + 1} / {total}
            </div>
            <div style={{display:"flex",gap:"8px"}}>
              <button type="button" aria-label="Previous review" onClick={()=>go(-1)} style={{width:"38px",height:"38px",borderRadius:"50%",border:"1px solid var(--line-2)",background:"transparent",color:"var(--text)"}}>‹</button>
              <button type="button" aria-label="Next review" onClick={()=>go(1)} style={{width:"38px",height:"38px",borderRadius:"50%",border:"1px solid var(--line-2)",background:"transparent",color:"var(--text)"}}>›</button>
            </div>
          </div>
        </div>
      </SR>
    </div>
  );
}

/* ── app ── */
function ServicesApp(){
  const [quote, setQuote] = React.useState(false);
  const openQuote = () => setQuote(true);

  React.useEffect(()=>{
    const usePopup = ()=> window.matchMedia("(max-width: 760px)").matches;
    const interceptQuotePage = e=>{
      const link = e.target.closest?.('a[href]');
      if(!link || !usePopup()) return;
      const href = link.getAttribute("href") || "";
      if(href === "Quote" || href.endsWith("/Quote")){
        e.preventDefault();
        setQuote(true);
      }
    };
    document.addEventListener("click",interceptQuotePage);
    return ()=>document.removeEventListener("click",interceptQuotePage);
  },[]);

  const steps = [
    { n:"01", t:"Tell us about the job",      d:"Quick message or call. Describe the site, size, finish and timing. Five minutes is enough." },
    { n:"02", t:"Fixed quote, in writing",     d:"We assess the site and send a locked price. No surprises, no variations buried in fine print." },
    { n:"03", t:"We show up and do it right",  d:"Prep, reinforce, pour and finish to the standard you hired us for — on the date we committed to." },
    { n:"04", t:"Cured, sealed, handed over",  d:"Proper curing, sealed where needed. Site left clean. Written workmanship warranty on every job." },
  ];
  const byId = id => SVC.find(s => s.id === id);
  const coreServices = ["driveways","slabs","pathways","patios","pools","commercial","resurfacing"].map(byId).filter(Boolean);
  const standardFinishes = ["broom","trowel","swirl"].map(byId).filter(Boolean);
  const decorativeFinishes = ["exposed","coloured","stamped","covercrete"].map(byId).filter(Boolean);

  return (
    <div id="top">
      <SNav phone={SD.phone} onQuote={openQuote}/>
      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <section className="svc-hero" style={{
          paddingTop:"clamp(180px,22vh,220px)",
          paddingBottom:"clamp(60px,8vh,96px)",
          borderBottom:"1px solid var(--line)",
          position:"relative", overflow:"hidden",
        }}>
          <div style={{
            position:"absolute",inset:0,
            background:"radial-gradient(ellipse 70% 50% at 25% 50%,rgba(200,200,210,.04),transparent 70%)",
            pointerEvents:"none",
          }}/>
          <div className="wrap" style={{position:"relative"}}>

            <SR><SEb n="—">Services</SEb></SR>

            <SR d="1" as="h1" className="display" style={{
              fontSize:"clamp(46px,8vw,124px)", margin:"20px 0 0", lineHeight:.93,
            }}>
              Every concrete<br/>job, done right.
            </SR>

            <SR d="2">
              <div style={{
                display:"flex",gap:"clamp(28px,5vw,72px)",
                marginTop:"32px",alignItems:"flex-end",flexWrap:"wrap",
              }}>
                <p style={{
                  margin:0,color:"var(--muted)",
                  fontSize:"clamp(16px,1.35vw,20px)",
                  maxWidth:"46ch",lineHeight:1.65,
                }}>
                  Driveways, slabs, exposed aggregate, pool surrounds and more — one crew, one standard, fixed price. Across all of South East Queensland.
                </p>
                <div className="svc-cta-row" style={{display:"flex",gap:"12px",flexWrap:"wrap",flexShrink:0}}>
                  <button className="btn btn--solid btn--lg" onClick={openQuote}>
                    Get a free quote <SAr/>
                  </button>
                  <a className="btn btn--ghost btn--lg" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                    <SIc name="phone" s={16}/> {SD.phone}
                  </a>
                </div>
              </div>
            </SR>

            {/* trust bar */}
            <SR d="3">
              <div className="svc-trust-strip" style={{
                display:"flex",marginTop:"clamp(44px,5vw,64px)",
                borderTop:"1px solid var(--line)",flexWrap:"wrap",
              }}>
                {SD.metrics.map((m,i)=>(
                  <div key={i} style={{
                    flex:"1 1 120px",
                    borderRight: i<SD.metrics.length-1 ? "1px solid var(--line)" : "none",
                    padding:"clamp(18px,2vw,26px) clamp(16px,2vw,28px)",
                  }}>
                    <div className="display chrome-text" style={{fontSize:"clamp(24px,3vw,42px)",lineHeight:.95}}>
                      {m.prefix||""}{m.value}{m.suffix}
                    </div>
                    <div className="mono" style={{
                      fontSize:"11px",letterSpacing:".06em",color:"var(--muted)",marginTop:"6px",
                    }}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </SR>

          </div>
        </section>

        {/* ── SERVICES GRID ─────────────────────────────── */}
        <section className="section">
          <div className="wrap">

            <SR><SEb n="01">What we do</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95,
            }}>
              Pick your project
            </SR>
            <SR d="2" as="p" style={{
              margin:"18px 0 0",color:"var(--muted)",
              fontSize:"clamp(15px,1.2vw,18px)",maxWidth:"48ch",
            }}>
              Residential, commercial and decorative — one crew, one standard, fixed price. Click any service to see more details.
            </SR>

            {/* structural services */}
            <div className="svc-card-grid" style={{
              display:"grid",
              gridTemplateColumns:"repeat(4,1fr)",
              gap:"clamp(10px,1.2vw,14px)",
              marginTop:"clamp(36px,4vw,54px)",
            }}>
              {coreServices.map((s,i)=>(
                <SR key={s.id} d={String(i%4)}>
                  <ServiceCard s={s}/>
                </SR>
              ))}
            </div>

            {/* standard finishes divider */}
            <SR>
              <div style={{
                display:"flex",alignItems:"center",gap:"24px",
                marginTop:"clamp(44px,5vw,64px)",paddingTop:"clamp(28px,3.5vw,44px)",
                borderTop:"1px solid var(--line)",
              }}>
                <div style={{flexShrink:0}}>
                  <div className="eyebrow" style={{marginBottom:"8px"}}>Standard Finishes</div>
                  <p style={{margin:0,fontSize:"clamp(14px,1.1vw,16px)",color:"var(--muted)",maxWidth:"44ch",lineHeight:1.55}}>
                    The surface texture applied to any concrete job — choose the one that suits the use and the look.
                  </p>
                </div>
                <div style={{flex:1,height:"1px",background:"var(--line)",minWidth:"20px"}}/>
              </div>
            </SR>

            {/* standard finishes grid */}
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(4,1fr)",
              gap:"clamp(10px,1.2vw,14px)",
              marginTop:"clamp(20px,2.5vw,28px)",
            }}>
              {standardFinishes.map((s,i)=>(
                <SR key={s.id} d={String(i%4)}>
                  <ServiceCard s={s}/>
                </SR>
              ))}
            </div>

            {/* decorative finishes divider */}
            <SR>
              <div style={{
                display:"flex",alignItems:"center",gap:"24px",
                marginTop:"clamp(36px,4vw,52px)",paddingTop:"clamp(28px,3.5vw,44px)",
                borderTop:"1px solid var(--line)",
              }}>
                <div style={{flexShrink:0}}>
                  <div className="eyebrow" style={{marginBottom:"8px"}}>Decorative Finishes</div>
                  <p style={{margin:0,fontSize:"clamp(14px,1.1vw,16px)",color:"var(--muted)",maxWidth:"44ch",lineHeight:1.55}}>
                    Pattern, colour and texture that turns a functional slab into a feature.
                  </p>
                </div>
                <div style={{flex:1,height:"1px",background:"var(--line)",minWidth:"20px"}}/>
              </div>
            </SR>

            {/* decorative finishes grid */}
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(4,1fr)",
              gap:"clamp(10px,1.2vw,14px)",
              marginTop:"clamp(20px,2.5vw,28px)",
            }}>
              {decorativeFinishes.map((s,i)=>(
                <SR key={s.id} d={String(i%4)}>
                  <ServiceCard s={s}/>
                </SR>
              ))}
            </div>

          </div>
        </section>

        {/* ── PROCESS ───────────────────────────────────── */}
        <section className="section" style={{
          background:"var(--panel)",
          borderTop:"1px solid var(--line)",
          borderBottom:"1px solid var(--line)",
        }}>
          <div className="wrap">

            <SR><SEb n="02">How it works</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95,
            }}>
              Simple from first call<br/>to handover.
            </SR>

            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
              gap:"clamp(20px,3vw,44px)",
              marginTop:"clamp(44px,5vw,68px)",
            }}>
              {steps.map(st=>(
                <SR key={st.n} d={st.n}>
                  <Step {...st}/>
                </SR>
              ))}
            </div>

          </div>
        </section>

        {window.PC_REVIEWS && <window.PC_REVIEWS/>}

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section style={{
          borderTop:"1px solid var(--line)",
          background:"var(--panel-2)",
          padding:"clamp(70px,9vw,110px) 0",
        }}>
          <div className="wrap">
            <div style={{maxWidth:"720px"}}>
              <SR><SEb n="04">Ready to start</SEb></SR>
              <SR d="1" as="h2" className="display" style={{
                fontSize:"clamp(38px,5.5vw,86px)",margin:"20px 0 0",lineHeight:.93,
              }}>
                Get a fixed quote<br/>today.
              </SR>
              <SR d="2" as="p" style={{
                margin:"22px 0 0",color:"var(--muted)",
                fontSize:"clamp(16px,1.3vw,19px)",maxWidth:"44ch",lineHeight:1.65,
              }}>
                Tell us about your site and we'll come back with a locked price, same day. No obligation. No follow-up calls unless you want them.
              </SR>
            <SR d="3" className="svc-cta-row" style={{display:"flex",gap:"14px",marginTop:"36px",flexWrap:"wrap"}}>
                <button className="btn btn--solid btn--lg" onClick={openQuote}>
                  Start my quote <SAr/>
                </button>
                <a className="btn btn--ghost btn--lg" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                  <SIc name="phone" s={16}/> {SD.phone}
                </a>
              </SR>
            </div>
          </div>
        </section>

      </main>

      <SFooter/>
      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ServicesApp/>);
