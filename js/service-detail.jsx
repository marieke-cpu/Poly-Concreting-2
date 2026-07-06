/* Poly Concreting — Individual service detail page */
const { Reveal:SR, Ph:SPh, Eyebrow:SEb, Arrow:SAr, Icon:SIc } = window.PC_UI;
const SVC     = window.PC_SERVICES;
const SD      = window.PC_DATA;
const SNav    = window.PC_HERO.Nav;
const SFooter = window.PC_S2.Footer;

function svcFromHash(){
  const h = (location.hash||"").replace("#","");
  return SVC.find(s=>s.id===h) || SVC[0];
}

/* ── FAQ accordion ── */
function FAQList({ faqs }){
  const [open,setOpen] = React.useState(0);
  return (
    <div style={{borderTop:"1px solid var(--line)"}}>
      {faqs.map((f,i)=>(
        <div key={i} style={{borderBottom:"1px solid var(--line)"}}>
          <button
            onClick={()=>setOpen(open===i?-1:i)}
            style={{width:"100%",textAlign:"left",background:"none",border:"none",cursor:"pointer",
              padding:"22px 0",display:"flex",justifyContent:"space-between",alignItems:"center",
              gap:"20px",color:"var(--text)"}}
          >
            <span style={{fontSize:"clamp(15px,1.3vw,18px)",fontWeight:600,letterSpacing:".005em"}}>{f.q}</span>
            <span style={{flexShrink:0,width:"30px",height:"30px",borderRadius:"50%",
              border:"1px solid var(--line-2)",display:"grid",placeItems:"center",
              transition:"transform .3s",transform:open===i?"rotate(45deg)":"none",color:"var(--muted)"}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M7 1v12M1 7h12"/>
              </svg>
            </span>
          </button>
          <div style={{maxHeight:open===i?"260px":"0",overflow:"hidden",transition:"max-height .4s var(--ease)"}}>
            <p style={{margin:"0 0 24px",color:"var(--muted)",fontSize:"16px",lineHeight:1.65,maxWidth:"62ch",paddingRight:"40px"}}>{f.a}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── services that show a finishes section ── */
const SHOWS_FINISHES = new Set(["driveways","slabs","patios","pools","pathways"]);
const STANDARD_FINISHES    = window.PC_SERVICES.slice(8,11);  /* trowel, broom, swirl */
const DECORATIVE_FINISHES  = window.PC_SERVICES.slice(11);    /* exposed, coloured, stamped, covercrete */
const FINISH_IDS = new Set(["trowel","broom","swirl","exposed","coloured","stamped","covercrete"]);

/* ── compact finish card ── */
function FinishCard({ s }){
  const [hov,setHov]=React.useState(false);
  return (
    <a
      href={`service-detail.html#${s.id}`}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display:"flex",flexDirection:"column",position:"relative",
        borderRadius:"var(--r-lg)",overflow:"hidden",minHeight:"clamp(180px,18vw,220px)",
        border:`1px solid ${hov?"var(--line-3)":"var(--line)"}`,textDecoration:"none",
        transition:"border-color .3s, transform .3s var(--ease-out)",
        transform:hov?"translateY(-3px)":"none",
      }}
    >
      <SPh label={null} src={s.hero} pos={s.pos} style={{position:"absolute",inset:0}}/>
      <div style={{
        position:"absolute",inset:0,
        background:hov
          ?"linear-gradient(0deg,rgba(8,8,10,.98) 25%,rgba(8,8,10,.6) 65%,rgba(8,8,10,.2))"
          :"linear-gradient(0deg,rgba(8,8,10,.95) 25%,rgba(8,8,10,.45) 65%,rgba(8,8,10,.1))",
        transition:"background .4s",
      }}/>
      <div style={{position:"relative",marginTop:"auto",padding:"clamp(14px,1.6vw,20px)"}}>
        <div className="display" style={{fontSize:"clamp(16px,1.5vw,19px)",lineHeight:.95}}>{s.name}</div>
        <div style={{margin:"6px 0 0",fontSize:"12px",color:"var(--muted)",lineHeight:1.4,maxWidth:"24ch"}}>{s.tag}</div>
        <div style={{
          marginTop:"10px",display:"flex",alignItems:"center",gap:"5px",
          fontSize:"10.5px",letterSpacing:".1em",color:"var(--muted)",fontFamily:"var(--font-mono)",
          opacity:hov?1:0,transform:hov?"translateY(0)":"translateY(3px)",
          transition:"opacity .25s,transform .25s",
        }}>
          VIEW FINISH <SAr/>
        </div>
      </div>
    </a>
  );
}

/* ── related service card ── */
function RelatedCard({ s }){
  const [hov,setHov]=React.useState(false);
  return (
    <a
      href={`service-detail.html#${s.id}`}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display:"block",position:"relative",borderRadius:"var(--r-lg)",overflow:"hidden",
        minHeight:"200px",border:`1px solid ${hov?"var(--line-3)":"var(--line)"}`,
        textDecoration:"none",
        transition:"border-color .3s, transform .3s var(--ease-out)",
        transform:hov?"translateY(-3px)":"none",
      }}
    >
      <SPh label={null} src={s.hero} pos={s.pos} style={{position:"absolute",inset:0}}/>
      <div style={{
        position:"absolute",inset:0,
        background:hov
          ?"linear-gradient(0deg,rgba(8,8,10,.97) 20%,rgba(8,8,10,.5) 65%)"
          :"linear-gradient(0deg,rgba(8,8,10,.92) 20%,rgba(8,8,10,.35) 65%)",
        transition:"background .4s",
      }}/>
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"clamp(16px,2vw,22px)"}}>
        <div className="display" style={{fontSize:"clamp(16px,1.6vw,20px)",lineHeight:.95}}>{s.name}</div>
        <div style={{marginTop:"6px",fontSize:"12.5px",color:"var(--muted)",lineHeight:1.4}}>{s.tag}</div>
        <div style={{
          marginTop:"12px",display:"flex",alignItems:"center",gap:"6px",
          fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",fontFamily:"var(--font-mono)",
          opacity:hov?1:0,transform:hov?"translateY(0)":"translateY(4px)",transition:"opacity .25s,transform .25s",
        }}>
          VIEW SERVICE <SAr/>
        </div>
      </div>
    </a>
  );
}

/* ── sticky quote bar ── */
function StickyBar({ s, onQuote }){
  const [show,setShow]=React.useState(false);
  React.useEffect(()=>{
    const f=()=>setShow(window.scrollY>700);
    f();
    window.addEventListener("scroll",f,{passive:true});
    return ()=>window.removeEventListener("scroll",f);
  },[]);
  return (
    <div style={{
      position:"fixed",bottom:0,left:0,right:0,zIndex:50,
      background:"rgba(8,8,10,.94)",backdropFilter:"blur(14px) saturate(140%)",
      borderTop:"1px solid var(--line-2)",
      padding:"14px var(--pad)",
      display:"flex",alignItems:"center",justifyContent:"space-between",
      gap:"16px",flexWrap:"wrap",
      transform:show?"translateY(0)":"translateY(100%)",
      transition:"transform .45s var(--ease-out)",
    }}>
      <div>
        <span style={{fontSize:"15px",fontWeight:600}}>Get a fixed quote on your {s.short.toLowerCase()}</span>
        <span className="mono" style={{fontSize:"11px",color:"var(--muted)",marginLeft:"14px",letterSpacing:".07em"}}>SAME-DAY REPLY · NO OBLIGATION</span>
      </div>
      <div style={{display:"flex",gap:"10px",flexShrink:0}}>
        <button className="btn btn--solid" onClick={onQuote}>Free quote <SAr/></button>
        <a className="btn btn--ghost" href={`tel:${SD.phone.replace(/\s/g,"")}`}><SIc name="phone" s={15}/> {SD.phone}</a>
      </div>
    </div>
  );
}

/* ── colour lightbox ── */
function ColourLightbox({ mixes, startIdx, onClose }){
  const [idx, setIdx] = React.useState(startIdx);
  const mix = mixes[idx];
  const prev = () => setIdx(i => (i - 1 + mixes.length) % mixes.length);
  const next = () => setIdx(i => (i + 1) % mixes.length);

  React.useEffect(()=>{
    const onKey = e => {
      if(e.key==="Escape")      onClose();
      if(e.key==="ArrowLeft")   setIdx(i=>(i-1+mixes.length)%mixes.length);
      if(e.key==="ArrowRight")  setIdx(i=>(i+1)%mixes.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return ()=>{ document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  },[]);

  return (
    <div onClick={onClose} style={{
      position:"fixed",inset:0,zIndex:9000,
      background:"rgba(4,4,6,.92)",backdropFilter:"blur(8px)",
      display:"flex",alignItems:"center",justifyContent:"center",
      padding:"clamp(16px,4vw,48px)",
    }}>
      <div onClick={e=>e.stopPropagation()} style={{
        position:"relative",maxWidth:"min(860px,94vw)",width:"100%",
        borderRadius:"var(--r-lg)",overflow:"hidden",
        border:"1px solid var(--line-2)",background:"var(--panel)",
        boxShadow:"0 32px 80px rgba(0,0,0,.7)",
      }}>
        <img src={mix.img} alt={mix.name} loading="lazy" decoding="async" style={{
          display:"block",width:"100%",maxHeight:"72vh",objectFit:"contain",
          background:"var(--base)",
        }}/>
        <div style={{
          padding:"clamp(12px,1.4vw,18px) clamp(18px,2vw,26px)",
          borderTop:"1px solid var(--line)",
          display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",
          flexWrap:"wrap",
        }}>
          <div>
            <div className="display" style={{fontSize:"clamp(17px,1.8vw,24px)",lineHeight:1}}>{mix.name}</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"5px"}}>
              <span className="mono" style={{fontSize:"11px",letterSpacing:".12em",color:"var(--faint)",textTransform:"uppercase"}}>{mix.supplier}</span>
              <span style={{width:"3px",height:"3px",borderRadius:"50%",background:"var(--faint)",flexShrink:0}}/>
              <span className="mono" style={{fontSize:"11px",color:"var(--faint)",letterSpacing:".08em"}}>{idx+1} / {mixes.length}</span>
            </div>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"8px",flexShrink:0}}>
            <button onClick={prev} className="btn btn--ghost" style={{padding:"0 18px",height:"38px",display:"flex",alignItems:"center",gap:"7px",fontSize:"13px"}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 2L4 7l5 5"/></svg>
              Prev
            </button>
            <button onClick={next} className="btn btn--solid" style={{padding:"0 18px",height:"38px",display:"flex",alignItems:"center",gap:"7px",fontSize:"13px"}}>
              Next
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 2l5 5-5 5"/></svg>
            </button>
            <button onClick={onClose} style={{
              background:"none",border:"1px solid var(--line-2)",borderRadius:"50%",
              width:"38px",height:"38px",flexShrink:0,cursor:"pointer",color:"var(--muted)",
              display:"grid",placeItems:"center",marginLeft:"4px",
            }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M1 1l11 11M12 1L1 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── aggregate lightbox ── */
function AggLightbox({ mixes, startIdx, onClose }){
  const [idx, setIdx] = React.useState(startIdx);
  const mix = mixes[idx];
  const prev = () => setIdx(i => (i - 1 + mixes.length) % mixes.length);
  const next = () => setIdx(i => (i + 1) % mixes.length);

  React.useEffect(()=>{
    const onKey = e => {
      if(e.key==="Escape")      onClose();
      if(e.key==="ArrowLeft")   setIdx(i=>(i-1+mixes.length)%mixes.length);
      if(e.key==="ArrowRight")  setIdx(i=>(i+1)%mixes.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return ()=>{ document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  },[]);

  return (
    <div onClick={onClose} style={{
      position:"fixed",inset:0,zIndex:9000,
      background:"rgba(4,4,6,.92)",backdropFilter:"blur(8px)",
      display:"flex",alignItems:"center",justifyContent:"center",
      padding:"clamp(16px,4vw,48px)",
    }}>
      <div onClick={e=>e.stopPropagation()} style={{
        position:"relative",maxWidth:"min(860px,94vw)",width:"100%",
        borderRadius:"var(--r-lg)",overflow:"hidden",
        border:"1px solid var(--line-2)",background:"var(--panel)",
        boxShadow:"0 32px 80px rgba(0,0,0,.7)",
      }}>
        <img src={mix.img} alt={mix.name} loading="lazy" decoding="async" style={{
          display:"block",width:"100%",maxHeight:"72vh",objectFit:"contain",
          background:"var(--base)",
        }}/>
        <div style={{
          padding:"clamp(12px,1.4vw,18px) clamp(18px,2vw,26px)",
          borderTop:"1px solid var(--line)",
          display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",
          flexWrap:"wrap",
        }}>
          {/* name + counter */}
          <div>
            <div className="display" style={{fontSize:"clamp(17px,1.8vw,24px)",lineHeight:1}}>{mix.name}</div>
            <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"5px"}}>
              <span className="mono" style={{fontSize:"11px",letterSpacing:".12em",color:"var(--faint)",textTransform:"uppercase"}}>{mix.supplier}</span>
              <span style={{width:"3px",height:"3px",borderRadius:"50%",background:"var(--faint)",flexShrink:0}}/>
              <span className="mono" style={{fontSize:"11px",color:"var(--faint)",letterSpacing:".08em"}}>{idx+1} / {mixes.length}</span>
            </div>
          </div>
          {/* nav + close */}
          <div style={{display:"flex",alignItems:"center",gap:"8px",flexShrink:0}}>
            <button onClick={prev} className="btn btn--ghost" style={{padding:"0 18px",height:"38px",display:"flex",alignItems:"center",gap:"7px",fontSize:"13px"}}>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 2L4 7l5 5"/></svg>
              Prev
            </button>
            <button onClick={next} className="btn btn--solid" style={{padding:"0 18px",height:"38px",display:"flex",alignItems:"center",gap:"7px",fontSize:"13px"}}>
              Next
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 2l5 5-5 5"/></svg>
            </button>
            <button onClick={onClose} style={{
              background:"none",border:"1px solid var(--line-2)",borderRadius:"50%",
              width:"38px",height:"38px",flexShrink:0,cursor:"pointer",color:"var(--muted)",
              display:"grid",placeItems:"center",marginLeft:"4px",
            }}>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M1 1l11 11M12 1L1 12"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── testimonials — shared stars ── */
function TStars(){
  return (
    <div style={{display:"flex",gap:"2px"}}>
      {Array(5).fill(0).map((_,k)=>(
        <svg key={k} width="12" height="12" viewBox="0 0 14 14" fill="#f5c542">
          <path d="M7 1l1.8 3.6L13 5.2l-3 2.9.7 4.1L7 10.1l-3.7 2 .7-4.1-3-2.9 4.2-.6z"/>
        </svg>
      ))}
    </div>
  );
}

/* ── slabs: featured + rotating compact list ── */
function TestimonialsSlabs(){
  const list = SD.testimonials;
  const [featIdx, setFeatIdx] = React.useState(0);
  React.useEffect(()=>{
    const t = setInterval(()=> setFeatIdx(i=>(i+1)%list.length), 5000);
    return ()=> clearInterval(t);
  },[list.length]);
  const featured = list[featIdx];
  const others = list.filter((_,i)=>i!==featIdx).slice(0,4);
  return (
    <section className="section--tight" style={{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
      <div className="wrap">
        <SR style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"16px",flexWrap:"wrap",marginBottom:"clamp(28px,3.5vw,44px)"}}>
          <h2 className="display" style={{fontSize:"clamp(28px,3.6vw,52px)",margin:0,lineHeight:.95}}>What clients say.</h2>
          <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
            <svg width="22" height="22" viewBox="0 0 48 48"><path fill="#4285F4" d="M44.5 20H24v8h11.7C34 33.5 29.5 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20-7.9 20-21 0-1.3-.1-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.6 15.4 19 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3c-7.7 0-14.4 4.5-17.7 11.7z"/><path fill="#FBBC05" d="M24 45c5.4 0 10.3-1.9 14.1-5l-6.5-5.3C29.5 36.2 26.9 37 24 37c-5.5 0-10.1-3.5-11.7-8.3l-6.6 5C9.4 40.5 16.2 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8h11.7c-.8 2.4-2.4 4.4-4.5 5.8l6.5 5.3C41.8 35.7 45 30.3 45 24c0-1.3-.1-2.7-.5-4z"/></svg>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:"6px"}}><span style={{fontWeight:700,fontSize:"17px",lineHeight:1}}>4.8</span><TStars/></div>
              <div className="mono" style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".05em",marginTop:"2px"}}>{SD.googleReviewCount}+ REVIEWS</div>
            </div>
          </div>
        </SR>
        <div style={{display:"grid",gridTemplateColumns:"1.2fr 1fr",gap:"clamp(16px,3vw,40px)",alignItems:"start"}} className="reviews-split">
          <SR d="0">
            <div key={featIdx} className="rise" style={{background:"var(--base)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",padding:"clamp(28px,3vw,44px)",display:"flex",flexDirection:"column",gap:"20px",position:"relative",overflow:"hidden"}}>
              <div style={{position:"absolute",top:"clamp(20px,2.5vw,32px)",right:"clamp(20px,2.5vw,32px)",opacity:.07}}>
                <svg width="64" height="48" viewBox="0 0 64 48" fill="currentColor"><path d="M0 48V29.3C0 12.3 10.7 3.2 32 0l4 6.7C24.5 8.5 19 13.2 18 21.3H28V48H0zm36 0V29.3C36 12.3 46.7 3.2 68 0l4 6.7C60.5 8.5 55 13.2 54 21.3H64V48H36z"/></svg>
              </div>
              <TStars/>
              <p style={{margin:0,fontSize:"clamp(16px,1.6vw,22px)",lineHeight:1.6,color:"var(--text)",flex:1,fontStyle:"italic"}}>"{featured.q}"</p>
              <div style={{display:"flex",alignItems:"center",gap:"12px",borderTop:"1px solid var(--line)",paddingTop:"18px"}}>
                <div style={{width:"40px",height:"40px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",flexShrink:0}}>
                  <span style={{fontSize:"15px",fontWeight:700}}>{featured.n[0]}</span>
                </div>
                <div>
                  <div style={{fontSize:"14px",fontWeight:600}}>{featured.n}</div>
                  <div className="mono" style={{fontSize:"10px",color:"var(--muted)",marginTop:"2px"}}>{featured.r}</div>
                </div>
              </div>
              <div style={{position:"absolute",bottom:0,left:0,right:0,height:"2px",background:"var(--line)"}}>
                <div key={featIdx} style={{height:"100%",background:"var(--chrome)",animation:"reviewProgress 5s linear forwards"}}/>
              </div>
            </div>
          </SR>
          <SR d="1">
            <div style={{display:"flex",flexDirection:"column",gap:"10px"}}>
              {others.map((t,i)=>{
                const origIdx = list.indexOf(t);
                return (
                  <div key={origIdx} onClick={()=>setFeatIdx(origIdx)} style={{background:"var(--base)",border:`1px solid ${origIdx===featIdx?"var(--chrome)":"var(--line)"}`,borderRadius:"var(--r)",padding:"clamp(14px,1.6vw,20px)",display:"flex",gap:"14px",alignItems:"flex-start",cursor:"pointer",transition:"border-color .25s"}}>
                    <div style={{width:"34px",height:"34px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                      <span style={{fontSize:"12px",fontWeight:700}}>{t.n[0]}</span>
                    </div>
                    <div style={{flex:1,minWidth:0}}>
                      <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:"8px",marginBottom:"6px"}}>
                        <span style={{fontSize:"13px",fontWeight:600}}>{t.n}</span><TStars/>
                      </div>
                      <p style={{margin:0,fontSize:"clamp(12px,1vw,13.5px)",lineHeight:1.55,color:"var(--muted)",display:"-webkit-box",WebkitLineClamp:2,WebkitBoxOrient:"vertical",overflow:"hidden"}}>"{t.q}"</p>
                      <div className="mono" style={{fontSize:"10px",color:"var(--faint)",marginTop:"5px"}}>{t.r}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SR>
        </div>
      </div>
    </section>
  );
}

/* ── pathways: numbered editorial list ── */
function TestimonialsPathways(){
  const list = SD.testimonials.slice(0,6);
  return (
    <section className="section--tight" style={{borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
      <div className="wrap">
        <SR style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"16px",flexWrap:"wrap"}}>
          <div>
            <SEb n="04">What clients say</SEb>
            <h2 className="display" style={{fontSize:"clamp(28px,3.6vw,52px)",margin:"14px 0 0",lineHeight:.95}}>
              In their own words.
            </h2>
          </div>
          <div className="mono" style={{fontSize:"12px",color:"var(--muted)",letterSpacing:".07em",paddingBottom:"6px"}}>
            4.8★ · {SD.googleReviewCount}+ Google, Facebook &amp; Instagram Reviews
          </div>
        </SR>
        <div style={{marginTop:"clamp(32px,4vw,52px)"}}>
          {list.map((t,i)=>(
            <SR key={i} d={String(i%3)}>
              <div style={{
                display:"grid",
                gridTemplateColumns:"clamp(40px,5vw,72px) 1fr auto",
                gap:"clamp(16px,2.5vw,36px)",
                alignItems:"start",
                padding:"clamp(20px,2.5vw,32px) 0",
                borderBottom:"1px solid var(--line)",
              }}>
                {/* number */}
                <div className="display chrome-text" style={{fontSize:"clamp(28px,3.5vw,48px)",lineHeight:1,opacity:.5}}>
                  {String(i+1).padStart(2,"0")}
                </div>
                {/* quote */}
                <div>
                  <p style={{margin:"0 0 14px",fontSize:"clamp(14px,1.3vw,18px)",lineHeight:1.65,color:"var(--text)"}}>
                    "{t.q}"
                  </p>
                  <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                    <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                      <span style={{fontSize:"10px",fontWeight:700}}>{t.n[0]}</span>
                    </div>
                    <span style={{fontSize:"13px",fontWeight:600}}>{t.n}</span>
                    <span className="mono" style={{fontSize:"10px",color:"var(--faint)"}}>{t.r}</span>
                  </div>
                </div>
                {/* stars */}
                <TStars/>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── outdoor/patios: centered spotlight ── */
function TestimonialsOutdoor(){
  const list = SD.testimonials;
  const [idx, setIdx] = React.useState(0);
  const [fade, setFade] = React.useState(true);

  React.useEffect(()=>{
    const t = setInterval(()=>{
      setFade(false);
      setTimeout(()=>{ setIdx(i=>(i+1)%list.length); setFade(true); }, 350);
    }, 5500);
    return ()=> clearInterval(t);
  },[list.length]);

  const select = (i)=>{ setFade(false); setTimeout(()=>{ setIdx(i); setFade(true); },300); };
  const cur = list[idx];

  return (
    <section className="section--tight" style={{background:"var(--ink)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)",textAlign:"center",overflow:"hidden",position:"relative"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 70% at 50% 50%,rgba(200,200,180,.05),transparent 70%)",pointerEvents:"none"}}/>
      <div className="wrap" style={{position:"relative",maxWidth:"780px"}}>
        <SR>
          <SEb n="04" style={{justifyContent:"center"}}>What clients say</SEb>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"12px"}}>
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M44.5 20H24v8h11.7C34 33.5 29.5 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20-7.9 20-21 0-1.3-.1-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.6 15.4 19 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3c-7.7 0-14.4 4.5-17.7 11.7z"/><path fill="#FBBC05" d="M24 45c5.4 0 10.3-1.9 14.1-5l-6.5-5.3C29.5 36.2 26.9 37 24 37c-5.5 0-10.1-3.5-11.7-8.3l-6.6 5C9.4 40.5 16.2 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8h11.7c-.8 2.4-2.4 4.4-4.5 5.8l6.5 5.3C41.8 35.7 45 30.3 45 24c0-1.3-.1-2.7-.5-4z"/></svg>
            <span className="mono" style={{fontSize:"11px",color:"var(--muted)",letterSpacing:".07em"}}>4.8 · {SD.googleReviewCount}+ REVIEWS</span>
          </div>
        </SR>

        {/* quote */}
        <div style={{
          margin:"clamp(36px,5vw,64px) 0 clamp(28px,4vw,48px)",
          opacity: fade?1:0, transition:"opacity .35s ease",
          minHeight:"clamp(120px,16vw,180px)",
          display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"24px",
        }}>
          <svg width="36" height="28" viewBox="0 0 48 36" fill="var(--chrome)" opacity=".4"><path d="M0 36V22C0 9.2 8 2.4 24 0l3 5C13.8 6.4 9.8 9.9 9 16h8v20H0zm25 0V22C25 9.2 33 2.4 49 0l3 5C38.8 6.4 34.8 9.9 34 16h8v20H25z"/></svg>
          <p className="display" style={{margin:0,fontSize:"clamp(18px,2.2vw,30px)",lineHeight:1.5,color:"var(--text)",fontStyle:"italic",maxWidth:"64ch"}}>
            "{cur.q}"
          </p>
          <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"10px"}}>
            <div style={{width:"36px",height:"36px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",flexShrink:0}}>
              <span style={{fontSize:"13px",fontWeight:700}}>{cur.n[0]}</span>
            </div>
            <div style={{textAlign:"left"}}>
              <div style={{fontSize:"14px",fontWeight:600}}>{cur.n}</div>
              <div className="mono" style={{fontSize:"10px",color:"var(--muted)",marginTop:"2px"}}>{cur.r}</div>
            </div>
          </div>
        </div>

        {/* avatar nav */}
        <div style={{display:"flex",justifyContent:"center",gap:"10px",flexWrap:"wrap",paddingBottom:"4px"}}>
          {list.map((t,i)=>(
            <button key={i} onClick={()=>select(i)} title={t.n} style={{
              width: i===idx?"34px":"26px",
              height: i===idx?"34px":"26px",
              borderRadius:"50%",
              border:`2px solid ${i===idx?"var(--chrome)":"var(--line-2)"}`,
              background: i===idx?"var(--chrome)":"var(--panel)",
              color: i===idx?"#0a0a0b":"var(--faint)",
              cursor:"pointer",fontSize:"10px",fontWeight:700,
              transition:"all .3s var(--ease-out)",
              display:"grid",placeItems:"center",flexShrink:0,
            }}>{t.n[0]}</button>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── pool surrounds: alternating zigzag ── */
function TestimonialsPools(){
  const list = SD.testimonials.slice(0,6);
  return (
    <section className="section--tight" style={{background:"var(--base-2)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
      <div className="wrap">
        <SR style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"16px",flexWrap:"wrap",marginBottom:"clamp(32px,4vw,52px)"}}>
          <div>
            <SEb n="04">What clients say</SEb>
            <h2 className="display" style={{fontSize:"clamp(28px,3.6vw,52px)",margin:"14px 0 0",lineHeight:.95}}>Real results,<br/>real people.</h2>
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"8px",paddingBottom:"6px"}}>
            <svg width="18" height="18" viewBox="0 0 48 48"><path fill="#4285F4" d="M44.5 20H24v8h11.7C34 33.5 29.5 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20-7.9 20-21 0-1.3-.1-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.6 15.4 19 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3c-7.7 0-14.4 4.5-17.7 11.7z"/><path fill="#FBBC05" d="M24 45c5.4 0 10.3-1.9 14.1-5l-6.5-5.3C29.5 36.2 26.9 37 24 37c-5.5 0-10.1-3.5-11.7-8.3l-6.6 5C9.4 40.5 16.2 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8h11.7c-.8 2.4-2.4 4.4-4.5 5.8l6.5 5.3C41.8 35.7 45 30.3 45 24c0-1.3-.1-2.7-.5-4z"/></svg>
            <span className="mono" style={{fontSize:"11px",color:"var(--muted)",letterSpacing:".07em"}}>4.8 · {SD.googleReviewCount}+ REVIEWS</span>
          </div>
        </SR>

        {/* zigzag */}
        <div style={{position:"relative"}}>
          {/* centre line */}
          <div style={{position:"absolute",left:"50%",top:0,bottom:0,width:"1px",background:"var(--line)",transform:"translateX(-50%)"}} className="review-zigzag-line"/>

          {list.map((t,i)=>{
            const isLeft = i%2===0;
            return (
              <SR key={i} d={String(i%3)}>
                <div style={{
                  display:"grid",
                  gridTemplateColumns:"1fr 48px 1fr",
                  gap:"0",
                  marginBottom:"clamp(16px,2.5vw,28px)",
                  alignItems:"center",
                }}>
                  {/* left slot */}
                  <div style={{padding:"0 clamp(16px,2.5vw,32px) 0 0"}}>
                    {isLeft && (
                      <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,28px)",marginLeft:"auto",maxWidth:"440px"}}>
                        <TStars/>
                        <p style={{margin:"10px 0 14px",fontSize:"clamp(13px,1.2vw,16px)",lineHeight:1.65,color:"var(--text)"}}>"{t.q}"</p>
                        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                          <div style={{width:"30px",height:"30px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",flexShrink:0}}>
                            <span style={{fontSize:"11px",fontWeight:700}}>{t.n[0]}</span>
                          </div>
                          <div>
                            <div style={{fontSize:"13px",fontWeight:600}}>{t.n}</div>
                            <div className="mono" style={{fontSize:"10px",color:"var(--muted)"}}>{t.r}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* centre dot */}
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center",zIndex:1}}>
                    <div style={{width:"12px",height:"12px",borderRadius:"50%",background:"var(--chrome)",border:"2px solid var(--base-2)",flexShrink:0}}/>
                  </div>

                  {/* right slot */}
                  <div style={{padding:"0 0 0 clamp(16px,2.5vw,32px)"}}>
                    {!isLeft && (
                      <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,28px)",maxWidth:"440px"}}>
                        <TStars/>
                        <p style={{margin:"10px 0 14px",fontSize:"clamp(13px,1.2vw,16px)",lineHeight:1.65,color:"var(--text)"}}>"{t.q}"</p>
                        <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                          <div style={{width:"30px",height:"30px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",flexShrink:0}}>
                            <span style={{fontSize:"11px",fontWeight:700}}>{t.n[0]}</span>
                          </div>
                          <div>
                            <div style={{fontSize:"13px",fontWeight:600}}>{t.n}</div>
                            <div className="mono" style={{fontSize:"10px",color:"var(--muted)"}}>{t.r}</div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </SR>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ── resurfacing: bento-box mosaic ── */
function TestimonialsResurfacing(){
  const list = SD.testimonials;
  const picks = list.slice(0,5);

  return (
    <section className="section--tight" style={{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
      <div className="wrap">
        <SR style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"16px",flexWrap:"wrap",marginBottom:"clamp(24px,3vw,40px)"}}>
          <div>
            <SEb n="04">What clients say</SEb>
            <h2 className="display" style={{fontSize:"clamp(28px,3.6vw,52px)",margin:"14px 0 0",lineHeight:.95}}>The proof<br/>is in the finish.</h2>
          </div>
          <div style={{textAlign:"right"}}>
            <div style={{display:"flex",alignItems:"center",gap:"6px",justifyContent:"flex-end"}}>
              <span style={{fontWeight:700,fontSize:"28px",lineHeight:1,fontFamily:"var(--font-display)"}}>4.8</span>
              <div style={{display:"flex",gap:"2px"}}>
                {Array(5).fill(0).map((_,k)=><svg key={k} width="14" height="14" viewBox="0 0 14 14" fill="#f5c542"><path d="M7 1l1.8 3.6L13 5.2l-3 2.9.7 4.1L7 10.1l-3.7 2 .7-4.1-3-2.9 4.2-.6z"/></svg>)}
              </div>
            </div>
            <div className="mono" style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".07em",marginTop:"4px"}}>{SD.googleReviewCount}+ GOOGLE, FACEBOOK &amp; INSTAGRAM</div>
          </div>
        </SR>

        {/* bento grid */}
        <div style={{
          display:"grid",
          gridTemplateColumns:"1.4fr 1fr 1fr",
          gridTemplateRows:"auto auto",
          gap:"10px",
        }}>
          {/* Card 0 — wide, row 1 col 1 */}
          <SR d="0">
            <div style={{
              background:"var(--ink)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",
              padding:"clamp(22px,2.5vw,36px)",display:"flex",flexDirection:"column",gap:"16px",
              position:"relative",overflow:"hidden",
            }}>
              <div style={{position:"absolute",top:0,right:0,width:"120px",height:"120px",background:"radial-gradient(circle,rgba(200,200,180,.06),transparent 70%)",pointerEvents:"none"}}/>
              <TStars/>
              <p style={{margin:0,fontSize:"clamp(15px,1.4vw,19px)",lineHeight:1.65,color:"var(--text)",flex:1,fontStyle:"italic"}}>"{picks[0].q}"</p>
              <div style={{display:"flex",alignItems:"center",gap:"10px",borderTop:"1px solid var(--line)",paddingTop:"14px"}}>
                <div style={{width:"34px",height:"34px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",flexShrink:0}}>
                  <span style={{fontSize:"12px",fontWeight:700}}>{picks[0].n[0]}</span>
                </div>
                <div>
                  <div style={{fontSize:"13px",fontWeight:600}}>{picks[0].n}</div>
                  <div className="mono" style={{fontSize:"10px",color:"var(--muted)"}}>{picks[0].r}</div>
                </div>
              </div>
            </div>
          </SR>

          {/* Card 1 — top right col 2 */}
          <SR d="1">
            <div style={{background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,26px)",display:"flex",flexDirection:"column",gap:"12px"}}>
              <TStars/>
              <p style={{margin:0,fontSize:"clamp(13px,1.1vw,15px)",lineHeight:1.6,color:"var(--text)",flex:1}}>"{picks[1].q}"</p>
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                  <span style={{fontSize:"10px",fontWeight:700}}>{picks[1].n[0]}</span>
                </div>
                <div style={{fontSize:"12px",fontWeight:600}}>{picks[1].n}</div>
              </div>
            </div>
          </SR>

          {/* Card 2 — top right col 3 */}
          <SR d="1">
            <div style={{background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,26px)",display:"flex",flexDirection:"column",gap:"12px"}}>
              <TStars/>
              <p style={{margin:0,fontSize:"clamp(13px,1.1vw,15px)",lineHeight:1.6,color:"var(--text)",flex:1}}>"{picks[2].q}"</p>
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                  <span style={{fontSize:"10px",fontWeight:700}}>{picks[2].n[0]}</span>
                </div>
                <div style={{fontSize:"12px",fontWeight:600}}>{picks[2].n}</div>
              </div>
            </div>
          </SR>

          {/* Card 3 — bottom col 1 */}
          <SR d="2">
            <div style={{background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,26px)",display:"flex",flexDirection:"column",gap:"12px"}}>
              <TStars/>
              <p style={{margin:0,fontSize:"clamp(13px,1.1vw,15px)",lineHeight:1.6,color:"var(--text)",flex:1}}>"{picks[3].q}"</p>
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                  <span style={{fontSize:"10px",fontWeight:700}}>{picks[3].n[0]}</span>
                </div>
                <div style={{fontSize:"12px",fontWeight:600}}>{picks[3].n}</div>
              </div>
            </div>
          </SR>

          {/* Card 4 — bottom col 2-3 (spans 2) */}
          <SR d="2" style={{gridColumn:"span 2"}}>
            <div style={{background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,26px)",display:"flex",alignItems:"center",gap:"clamp(16px,2.5vw,32px)"}}>
              <div style={{flexShrink:0,opacity:.15}}>
                <svg width="48" height="36" viewBox="0 0 48 36" fill="currentColor"><path d="M0 36V22C0 9.2 8 2.4 24 0l3 5C13.8 6.4 9.8 9.9 9 16h8v20H0zm25 0V22C25 9.2 33 2.4 49 0l3 5C38.8 6.4 34.8 9.9 34 16h8v20H25z"/></svg>
              </div>
              <div style={{flex:1}}>
                <TStars/>
                <p style={{margin:"8px 0 12px",fontSize:"clamp(13px,1.2vw,16px)",lineHeight:1.6,color:"var(--text)"}}>"{picks[4].q}"</p>
                <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                  <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                    <span style={{fontSize:"10px",fontWeight:700}}>{picks[4].n[0]}</span>
                  </div>
                  <span style={{fontSize:"12px",fontWeight:600}}>{picks[4].n}</span>
                  <span className="mono" style={{fontSize:"10px",color:"var(--faint)"}}>{picks[4].r}</span>
                </div>
              </div>
            </div>
          </SR>
        </div>
      </div>
    </section>
  );
}

/* ── commercial: trust signals + testimonials ── */
function TestimonialsCommercial(){
  const list = SD.testimonials;
  const commercial = { q:"Poured our shopfront slab over a weekend so we opened on time. Numbers landed exactly where quoted.", n:"Priya N.", r:"Narangba — Commercial Client" };
  const supporting = list.slice(0,3);

  const TRUST = [
    { value:"QBCC", label:"Licensed", sub:"No. 15393395" },
    { value:"4.8★", label:"Avg. rating", sub:"50+ reviews" },
    { value:"100%", label:"Fixed quotes", sub:"No variations" },
    { value:"✓",    label:"Fully Insured", sub:"Public liability covered" },
  ];

  return (
    <section className="section--tight" style={{borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
      {/* trust bar */}
      <div style={{background:"var(--ink)",borderBottom:"1px solid var(--line)"}}>
        <div className="wrap" style={{paddingBlock:"clamp(20px,2.5vw,32px)"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"rgba(255,255,255,.06)"}} className="comm-trust-grid">
            {TRUST.map((t,i)=>(
              <div key={i} style={{background:"var(--ink)",padding:"clamp(16px,2vw,24px)",textAlign:"center"}}>
                <div className="display chrome-text" style={{fontSize:"clamp(22px,2.8vw,36px)",lineHeight:1}}>{t.value}</div>
                <div style={{fontSize:"13px",fontWeight:600,marginTop:"6px"}}>{t.label}</div>
                <div className="mono" style={{fontSize:"10px",color:"var(--faint)",letterSpacing:".06em",marginTop:"3px"}}>{t.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="wrap" style={{paddingTop:"clamp(36px,4.5vw,60px)"}}>
        <SR style={{marginBottom:"clamp(28px,3.5vw,44px)"}}>
          <SEb n="05">What clients say</SEb>
          <h2 className="display" style={{fontSize:"clamp(28px,3.6vw,52px)",margin:"14px 0 0",lineHeight:.95}}>
            On time.<br/>On budget.<br/>Documented.
          </h2>
        </SR>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(14px,2vw,24px)",alignItems:"start"}} className="reviews-split">
          {/* commercial featured */}
          <SR d="0" style={{gridColumn:"1 / -1"}}>
            <div style={{
              background:"var(--ink)",border:"1px solid var(--chrome)",borderRadius:"var(--r-lg)",
              padding:"clamp(24px,3vw,44px)",display:"grid",gridTemplateColumns:"1fr auto",
              gap:"clamp(20px,3vw,48px)",alignItems:"center",position:"relative",overflow:"hidden",
            }} className="comm-featured-review">
              <div style={{position:"absolute",top:0,right:0,width:"200px",height:"200px",background:"radial-gradient(circle,rgba(200,200,180,.05),transparent 70%)",pointerEvents:"none"}}/>
              <div>
                <div style={{display:"inline-flex",alignItems:"center",gap:"7px",background:"rgba(200,200,180,.1)",border:"1px solid var(--line-2)",borderRadius:"40px",padding:"5px 12px",marginBottom:"18px"}}>
                  <span style={{width:"6px",height:"6px",borderRadius:"50%",background:"var(--chrome)",display:"inline-block"}}/>
                  <span className="mono" style={{fontSize:"10px",letterSpacing:".12em",color:"var(--muted)"}}>COMMERCIAL CLIENT</span>
                </div>
                <TStars/>
                <p style={{margin:"12px 0 20px",fontSize:"clamp(16px,1.7vw,22px)",lineHeight:1.6,color:"var(--text)",fontStyle:"italic"}}>
                  "{commercial.q}"
                </p>
                <div style={{display:"flex",alignItems:"center",gap:"10px"}}>
                  <div style={{width:"38px",height:"38px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",flexShrink:0}}>
                    <span style={{fontSize:"14px",fontWeight:700}}>{commercial.n[0]}</span>
                  </div>
                  <div>
                    <div style={{fontSize:"14px",fontWeight:600}}>{commercial.n}</div>
                    <div className="mono" style={{fontSize:"10px",color:"var(--muted)",marginTop:"2px"}}>{commercial.r}</div>
                  </div>
                </div>
              </div>
              <div style={{flexShrink:0,textAlign:"center",borderLeft:"1px solid var(--line)",paddingLeft:"clamp(20px,3vw,48px)"}} className="comm-quote-right">
                <div className="display chrome-text" style={{fontSize:"clamp(40px,6vw,80px)",lineHeight:1}}>4.8</div>
                <TStars/>
                <div className="mono" style={{fontSize:"10px",color:"var(--muted)",letterSpacing:".07em",marginTop:"8px"}}>{SD.googleReviewCount}+ REVIEWS</div>
              </div>
            </div>
          </SR>

          {/* supporting residential */}
          {supporting.map((t,i)=>(
            <SR key={i} d={String(i+1)}>
              <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,26px)",display:"flex",flexDirection:"column",gap:"12px",height:"100%"}}>
                <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                  <TStars/>
                  <span className="mono" style={{fontSize:"9px",letterSpacing:".1em",color:"var(--faint)"}}>RESIDENTIAL</span>
                </div>
                <p style={{margin:0,fontSize:"clamp(13px,1.1vw,15px)",lineHeight:1.6,color:"var(--text)",flex:1}}>"{t.q}"</p>
                <div style={{display:"flex",alignItems:"center",gap:"8px",borderTop:"1px solid var(--line)",paddingTop:"12px"}}>
                  <div style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                    <span style={{fontSize:"10px",fontWeight:700}}>{t.n[0]}</span>
                  </div>
                  <div>
                    <div style={{fontSize:"12px",fontWeight:600}}>{t.n}</div>
                    <div className="mono" style={{fontSize:"10px",color:"var(--faint)"}}>{t.r}</div>
                  </div>
                </div>
              </div>
            </SR>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── dispatcher ── */
function ServiceTestimonials({ serviceId }){
  if(serviceId==="pathways")    return <TestimonialsPathways/>;
  if(serviceId==="patios")      return <TestimonialsOutdoor/>;
  if(serviceId==="pools")       return <TestimonialsPools/>;
  if(serviceId==="resurfacing") return <TestimonialsResurfacing/>;
  if(serviceId==="commercial")  return <TestimonialsCommercial/>;
  return <TestimonialsSlabs/>;
}

/* ── main app ── */
function ServiceDetailApp(){
  const [s,   setS]   = React.useState(svcFromHash);
  const [quote,setQuote] = React.useState(false);
  const [lightbox, setLightbox] = React.useState(null);
  const [colourLightbox, setColourLightbox] = React.useState(null);
  const allAggMixes    = s.aggRanges    ? s.aggRanges.flatMap(r=>r.mixes.map(m=>({...m,supplier:r.supplier}))) : [];
  const allColourMixes = s.colourRanges ? s.colourRanges.flatMap(r=>r.mixes.filter(m=>m.img).map(m=>({...m,supplier:r.supplier}))) : [];
  const openQuote = () => setQuote(true);
  const isResidential = !FINISH_IDS.has(s.id);

  const updateMeta = (svc)=>{
    const title = `${svc.name} South East QLD | Poly Concreting`;
    const desc = svc.metaDesc || `Professional ${svc.name.toLowerCase()} across South East Queensland. Owner-operated, fixed price, same-day quotes. Based in Morayfield.`;
    const url = `https://www.polyconcreting.com.au/service-detail.html#${svc.id}`;
    document.title = title;
    const setMeta = (sel,attr,val)=>{ const el=document.querySelector(sel); if(el) el.setAttribute(attr,val); };
    setMeta('meta[name="description"]','content',desc);
    setMeta('meta[property="og:title"]','content',title);
    setMeta('meta[property="og:description"]','content',desc);
    setMeta('meta[property="og:url"]','content',url);
    let canon = document.querySelector('link[rel="canonical"]');
    if(!canon){ canon=document.createElement('link'); canon.rel='canonical'; document.head.appendChild(canon); }
    canon.href = url;
  };

  React.useEffect(()=>{
    updateMeta(s);
    const onHash = ()=>{
      const svc = svcFromHash();
      setS(svc);
      updateMeta(svc);
      window.scrollTo({top:0,behavior:"smooth"});
    };
    window.addEventListener("hashchange", onHash);
    return ()=>window.removeEventListener("hashchange", onHash);
  },[]);

  /* 3 adjacent services (wrapping), excluding current */
  const idx     = SVC.findIndex(sv=>sv.id===s.id);
  const related = [1,2,3].map(n=>SVC[(idx+n)%SVC.length]);

  return (
    <div id="top">
      <SNav phone={SD.phone} onQuote={openQuote}/>
      {isResidential && <StickyBar s={s} onQuote={openQuote}/>}
      <main>

        {/* ── HERO ─────────────────────────────────────────── */}
        <section style={{
          position:"relative",
          minHeight: isResidential ? "100svh" : "clamp(520px,65vh,720px)",
          display:"flex",alignItems:"flex-end",overflow:"hidden",
        }}>
          <SPh label={null} src={s.hero} pos={s.pos} style={{position:"absolute",inset:0}}/>
          <div style={{
            position:"absolute",inset:0,
            background: isResidential
              ? "linear-gradient(105deg,rgba(8,8,10,.97) 0%,rgba(8,8,10,.75) 42%,rgba(8,8,10,.3) 100%)"
              : "linear-gradient(0deg,rgba(8,8,10,.97) 0%,rgba(8,8,10,.55) 45%,rgba(8,8,10,.22) 100%)",
          }}/>

          <div className="wrap" style={{
            position:"relative",width:"100%",
            paddingTop:"clamp(180px,22vh,220px)",
            paddingBottom:"clamp(52px,7vw,90px)",
          }}>
            <SR d="1" as="h1" className="display" style={{
              fontSize:"clamp(46px,8vw,118px)",lineHeight:.92,margin:0,maxWidth:"14ch",
            }}>
              {s.headline
                ? <>{s.headline[0]} <span className="chrome-text">{s.headline[1]}</span></>
                : <span className="chrome-text">{s.name}</span>
              }
            </SR>
            <SR d="2" as="p" style={{
              margin:"18px 0 0",fontSize:"clamp(16px,1.45vw,22px)",
              color:"var(--text)",maxWidth:"46ch",lineHeight:1.5,
            }}>
              {s.tag}
            </SR>
            <SR d="3" style={{display:"flex",gap:"clamp(18px,2.5vw,36px)",marginTop:"20px",flexWrap:"wrap"}}>
              {s.stat.map(x=>(
                <span key={x} className="mono" style={{
                  fontSize:"12px",letterSpacing:".06em",color:"var(--text)",
                  display:"flex",alignItems:"center",gap:"8px",
                }}>
                  <span style={{width:"5px",height:"5px",background:"#9a9aa0"}}/>
                  {x}
                </span>
              ))}
            </SR>
            <SR d="4" style={{display:"flex",gap:"12px",marginTop:"32px",flexWrap:"wrap"}}>
              <button className="btn btn--solid btn--lg" onClick={openQuote}>
                Quote my {s.short.toLowerCase()} <SAr/>
              </button>
              {!s.aggRanges && !s.colourRanges && !s.stampPatterns && !s.coverColours && (
                <a className="btn btn--ghost btn--lg" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                  <SIc name="phone" s={16}/> {SD.phone}
                </a>
              )}
              {s.aggRanges && (
                <a className="btn btn--ghost btn--lg" href="#stone-ranges"
                  onClick={e=>{e.preventDefault();document.getElementById("stone-ranges").scrollIntoView({behavior:"smooth"});}}>
                  View stone ranges <SAr/>
                </a>
              )}
              {s.colourRanges && (
                <a className="btn btn--ghost btn--lg" href="#colour-ranges"
                  onClick={e=>{e.preventDefault();document.getElementById("colour-ranges").scrollIntoView({behavior:"smooth"});}}>
                  View colour ranges <SAr/>
                </a>
              )}
              {s.stampPatterns && (
                <a className="btn btn--ghost btn--lg" href="#stamp-patterns"
                  onClick={e=>{e.preventDefault();document.getElementById("stamp-patterns").scrollIntoView({behavior:"smooth"});}}>
                  View stamp patterns <SAr/>
                </a>
              )}
              {s.coverColours && (
                <a className="btn btn--ghost btn--lg" href="#cover-colours"
                  onClick={e=>{e.preventDefault();document.getElementById("cover-colours").scrollIntoView({behavior:"smooth"});}}>
                  View colours &amp; patterns <SAr/>
                </a>
              )}
            </SR>
            {isResidential && (
              <SR d="5">
                <div style={{
                  display:"flex",flexWrap:"wrap",gap:"0",
                  marginTop:"clamp(48px,6vw,72px)",
                  borderTop:"1px solid rgba(255,255,255,.12)",
                }}>
                  {[
                    {v:"150+",  l:"Jobs completed"},
                    {v:"10+",   l:"Years in SEQ"},
                    {v:"4.8★",  l:"Google rating"},
                    {v:"Fixed", l:"No-surprise quotes"},
                  ].map((t,i,arr)=>(
                    <div key={t.v} style={{
                      padding:"clamp(16px,2vw,24px) clamp(18px,2.4vw,32px)",
                      borderRight:i<arr.length-1?"1px solid rgba(255,255,255,.12)":"none",
                    }}>
                      <div style={{fontSize:"clamp(20px,2.2vw,30px)",fontWeight:800,letterSpacing:"-.01em"}}>{t.v}</div>
                      <div className="mono" style={{fontSize:"11px",letterSpacing:".07em",color:"var(--muted)",marginTop:"4px"}}>{t.l}</div>
                    </div>
                  ))}
                </div>
              </SR>
            )}
          </div>
        </section>

        {/* ── DESCRIPTION ──────────────────────────────────── */}
        {["trowel","broom","swirl","exposed","coloured","stamped","covercrete","resurfacing"].includes(s.id) && (
          <section className="section--tight" style={{borderBottom:"1px solid var(--line)"}}>
            <div className="wrap">
              <div style={{
                display:"grid",
                gridTemplateColumns:"clamp(2px,4px,4px) 1fr",
                gap:"clamp(20px,3vw,40px)",
                alignItems:"start",
              }}>
                <div style={{width:"3px",background:"var(--chrome)",borderRadius:"2px",height:"100%",minHeight:"60px"}}/>
                <SR d="1" as="p" style={{
                  fontSize:"clamp(17px,1.7vw,24px)",lineHeight:1.6,margin:0,
                  color:"var(--text)",maxWidth:"72ch",
                }}>
                  {s.intro}
                </SR>
              </div>
            </div>
          </section>
        )}

        {/* ── INTRO + CTA CARD ─────────────────────────────── */}
        {s.id !== "exposed" && s.id !== "coloured" && s.id !== "stamped" && s.id !== "covercrete" && s.id !== "swirl" && s.id !== "broom" && s.id !== "trowel" && s.id !== "resurfacing" && s.id !== "slabs" && s.id !== "pathways" && s.id !== "patios" && s.id !== "pools" && <section className="section--tight" style={{borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <div style={{
              display:"grid",
              gridTemplateColumns:"1fr clamp(220px,22vw,260px)",
              gap:"clamp(32px,5vw,80px)",
              alignItems:"start",
            }}>
              <SR d="1" as="p" style={{
                fontSize:"clamp(19px,2vw,28px)",lineHeight:1.45,margin:0,
                fontFamily:"var(--font-display)",textTransform:"none",
                letterSpacing:".005em",fontWeight:400,
              }}>
                {s.intro}
              </SR>
              <SR d="2">
                <div style={{
                  background:"var(--panel)",border:"1px solid var(--text)",
                  borderRadius:"var(--r-lg)",padding:"clamp(20px,2.4vw,28px)",
                }}>
                  <div className="mono" style={{fontSize:"10.5px",letterSpacing:".14em",color:"var(--text)",marginBottom:"10px"}}>
                    READY TO START?
                  </div>
                  <p style={{margin:"0 0 4px",fontSize:"15px",fontWeight:600}}>Fixed price. Same-day reply.</p>
                  <p style={{margin:"0 0 18px",fontSize:"13px",color:"var(--muted)",lineHeight:1.5}}>No obligation. No pushy follow-ups.</p>
                  <button className="btn btn--solid" onClick={openQuote} style={{width:"100%",justifyContent:"center"}}>
                    Quote my {s.short.toLowerCase()} <SAr/>
                  </button>
                  <a href={`tel:${SD.phone.replace(/\s/g,"")}`} style={{
                    display:"flex",alignItems:"center",justifyContent:"center",
                    gap:"7px",marginTop:"12px",fontSize:"13px",color:"var(--muted)",textDecoration:"none",
                  }}>
                    <SIc name="phone" s={14}/> {SD.phone}
                  </a>
                </div>
              </SR>
            </div>
          </div>
        </section>}

        {/* ── COMMON MISTAKES ──────────────────────────────── */}
        {s.mistakes && (
          <section className="section" style={{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
            <div className="wrap">
              <SR><SEb n="01">The common mistakes</SEb></SR>
              <SR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,maxWidth:"22ch"}}>
                Most problems start before the concrete arrives.
              </SR>
              <SR d="2" as="p" style={{margin:"18px 0 0",color:"var(--muted)",fontSize:"clamp(15px,1.2vw,18px)",maxWidth:"50ch",lineHeight:1.65}}>
                Bad concrete isn't usually a concrete problem — it's a preparation problem. Here's what goes wrong, and what we do instead.
              </SR>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"1px",background:"var(--line)",border:"1px solid var(--line)",marginTop:"clamp(36px,4vw,56px)"}}>
                {s.mistakes.map((item,i)=>(
                  <SR key={i} d={String(i)}>
                    <div style={{background:"var(--base)",padding:"clamp(24px,2.6vw,36px)"}}>
                      <span style={{color:"var(--faint)"}}><SIc name={item.icon} s={24}/></span>
                      <div style={{marginTop:"20px",padding:"14px 16px",borderRadius:"var(--r)",background:"rgba(255,80,80,.05)",border:"1px solid rgba(255,80,80,.1)"}}>
                        <div style={{fontSize:"11px",fontWeight:700,color:"rgba(255,130,130,.75)",letterSpacing:".05em",marginBottom:"6px"}}>THE PROBLEM</div>
                        <div style={{fontWeight:600,fontSize:"15px",marginBottom:"6px"}}>{item.prob}</div>
                        <p style={{margin:0,fontSize:"13.5px",color:"var(--muted)",lineHeight:1.55}}>{item.probD}</p>
                      </div>
                      <div style={{marginTop:"8px",padding:"14px 16px",borderRadius:"var(--r)",background:"rgba(80,200,120,.04)",border:"1px solid rgba(80,200,120,.1)"}}>
                        <div style={{fontSize:"11px",fontWeight:700,color:"rgba(100,220,140,.7)",letterSpacing:".05em",marginBottom:"6px"}}>WHAT WE DO</div>
                        <p style={{margin:0,fontSize:"13.5px",color:"var(--muted)",lineHeight:1.55}}>{item.fixD}</p>
                      </div>
                    </div>
                  </SR>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── BENEFITS ─────────────────────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb n={s.mistakes ? "02" : "01"}>Why it lasts</SEb></SR>
            {isResidential && <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,maxWidth:"18ch",
            }}>What you get.</SR>}
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
              gap:"1px",background:"var(--line)",border:"1px solid var(--line)",
              marginTop:"clamp(28px,3vw,44px)",
            }}>
              {s.benefits.map((b,i)=>(
                <SR key={b.t} d={String(i)}>
                  <div style={{background:"var(--base)",padding:"clamp(24px,2.6vw,36px)"}}>
                    <span style={{color:"var(--text)"}}><SIc name={b.icon} s={26}/></span>
                    <h3 style={{margin:"18px 0 0",fontSize:"18px",fontWeight:700}}>{b.t}</h3>
                    <p style={{margin:"10px 0 0",color:"var(--muted)",fontSize:"15px",lineHeight:1.6}}>{b.d}</p>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY ──────────────────────────────────────── */}
        {(()=>{
          const catProjects = SD.projects.filter(p=>
            p.cat===s.short || (Array.isArray(p.cat) && p.cat.includes(s.short))
          );
          const useProjects = catProjects.length > 0;
          if(!useProjects && !s.gallery) return null;
          return (
            <section className="section--tight" style={{
              background:"var(--panel)",
              borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)",
            }}>
              <div className="wrap">
                <SR><SEb n="02">Recent work</SEb></SR>
                <SR d="1" as="h2" className="display" style={{
                  fontSize:"clamp(28px,3.5vw,54px)",lineHeight:.94,margin:"16px 0 0",
                }}>Work on the ground.</SR>
                {useProjects ? (
                  <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fill,minmax(clamp(200px,22vw,300px),1fr))",
                    gap:"10px",
                    marginTop:"clamp(24px,3vw,36px)",
                  }}>
                    {catProjects.map((p,i)=>(
                      <SR key={p.id} d={String(i%4)}>
                        <div style={{position:"relative",aspectRatio:"4/3",borderRadius:"var(--r)",overflow:"hidden",border:"1px solid var(--line)"}}>
                          <SPh label={null} src={p.img} pos={p.pos||"center"} style={{position:"absolute",inset:0}}/>
                          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.72) 0%,transparent 45%)"}}/>
                          <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"12px 14px"}}>
                            <div className="display" style={{fontSize:"clamp(13px,1.2vw,16px)",lineHeight:1.1}}>{p.title}</div>
                            <div className="mono" style={{fontSize:"10px",letterSpacing:".07em",color:"var(--muted)",marginTop:"3px"}}>{p.loc} · {p.year}</div>
                          </div>
                        </div>
                      </SR>
                    ))}
                  </div>
                ) : (
                  <div style={{
                    display:"grid",
                    gridTemplateColumns: s.gallery.length===8 ? "1fr 1fr 1fr 1fr" : s.gallery.length===6 ? "1fr 1fr 1fr" : s.gallery.length===4 ? "1fr 1fr" : s.gallery.length===2 ? "1fr 1fr" : "2fr 1fr 1fr",
                    gridTemplateRows:    s.gallery.length===8 ? "1fr 1fr" : s.gallery.length===6 ? "1fr 1fr" : s.gallery.length===4 ? "1fr 1fr" : "1fr",
                    gap:"10px",
                    height: s.gallery.length===8 ? "clamp(320px,40vw,520px)" : s.gallery.length===6 ? "clamp(360px,46vw,580px)" : s.gallery.length===4 ? "clamp(400px,50vw,640px)" : s.gallery.length===2 ? "clamp(320px,38vw,480px)" : "clamp(260px,32vw,420px)",
                    marginTop:"clamp(24px,3vw,36px)",
                  }}>
                    {s.gallery.map((g,i)=>{
                      const isVideo = /\.(mov|mp4|webm)$/i.test(g);
                      return (
                        <SR key={i} d={String(i)} style={{height:"100%"}}>
                          <div style={{position:"relative",borderRadius:"var(--r)",overflow:"hidden",border:"1px solid var(--line)",height:"100%"}}>
                            {isVideo ? (
                              <video autoPlay muted loop playsInline
                                style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover"}}
                                src={g}/>
                            ) : (
                              <SPh label={null} src={g} style={{position:"absolute",inset:0}}/>
                            )}
                            {s.galleryLabels?.[i] && (
                              <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"10px 14px",background:"linear-gradient(0deg,rgba(8,8,10,.82),transparent)"}}>
                                <span className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--text)",textTransform:"uppercase"}}>
                                  {s.galleryLabels[i]}
                                </span>
                              </div>
                            )}
                          </div>
                        </SR>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          );
        })()}

        {/* ── AGG RANGES (exposed aggregate only) ─────────── */}
        {s.aggRanges && (
          <section id="stone-ranges" className="section--tight" style={{borderTop:"1px solid var(--line)"}}>
            <div className="wrap">
              <SR><SEb>Stone ranges</SEb></SR>
              <SR d="1" as="h2" className="display" style={{
                fontSize:"clamp(28px,3.6vw,52px)",margin:"20px 0 0",lineHeight:.95,
              }}>
                Choose your aggregate.
              </SR>
              <SR d="2" as="p" style={{
                margin:"14px 0 0",color:"var(--muted)",
                fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"54ch",lineHeight:1.6,
              }}>
                We work with both the Boral and Nielsens exposed aggregate ranges. Browse the full colour range below — then we'll walk you through your options at the site visit.
              </SR>

              {s.aggRanges.map((range,ri)=>(
                <div key={range.supplier} style={{marginTop: ri===0 ? "clamp(40px,5vw,64px)" : "clamp(36px,4.5vw,56px)"}}>
                  <SR d={String(ri)}>
                    <div style={{display:"flex",alignItems:"center",gap:"20px",marginBottom:"clamp(10px,1.5vw,16px)"}}>
                      <div style={{
                        fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".22em",
                        textTransform:"uppercase",color:"var(--text)",fontWeight:600,whiteSpace:"nowrap",
                      }}>{range.supplier} Range</div>
                      <div style={{flex:1,height:"1px",background:"var(--line)"}}/>
                    </div>
                    <p style={{
                      margin:"0 0 clamp(18px,2.2vw,28px)",color:"var(--muted)",
                      fontSize:"clamp(13px,1.1vw,16px)",maxWidth:"60ch",lineHeight:1.65,
                    }}>{range.intro}</p>
                  </SR>
                  <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fill,minmax(clamp(200px,20vw,240px),1fr))",
                    gap:"clamp(8px,1vw,12px)",
                  }}>
                    {range.mixes.map((m,mi)=>(
                      <SR key={m.name} d={String(mi%4)}>
                        <div onClick={()=>m.img && setLightbox({ mixes:allAggMixes, startIdx:allAggMixes.findIndex(mx=>mx.name===m.name&&mx.supplier===range.supplier) })} style={{
                          background:"var(--panel)",border:"1px solid var(--line)",
                          borderRadius:"var(--r-lg)",
                          display:"flex",flexDirection:"column",height:"100%",
                          overflow:"hidden",cursor:m.img?"pointer":"default",
                          transition:"border-color .2s, transform .2s var(--ease-out)",
                        }}
                          onMouseEnter={e=>{ if(m.img){ e.currentTarget.style.borderColor="var(--line-3)"; e.currentTarget.style.transform="translateY(-2px)"; }}}
                          onMouseLeave={e=>{ e.currentTarget.style.borderColor="var(--line)"; e.currentTarget.style.transform="none"; }}
                        >
                          {m.img && (
                            <div style={{height:"160px",overflow:"hidden",flexShrink:0}}>
                              <img src={m.img} alt={m.name} loading="lazy" decoding="async" style={{
                                width:"100%",height:"100%",objectFit:"cover",
                                objectPosition:"center top",display:"block",
                              }}/>
                            </div>
                          )}
                          <div style={{
                            padding:"clamp(16px,1.8vw,22px)",
                            display:"flex",flexDirection:"column",gap:"8px",flex:1,
                            borderTop:"2px solid var(--line-2)",
                          }}>
                            <div className="display" style={{
                              fontSize:"clamp(16px,1.5vw,20px)",lineHeight:.95,
                            }}>{m.name}</div>
                            <p style={{
                              margin:0,fontSize:"clamp(13px,1.1vw,14.5px)",
                              color:"var(--muted)",lineHeight:1.6,flex:1,
                            }}>{m.desc}</p>
                          </div>
                        </div>
                      </SR>
                    ))}
                  </div>
                </div>
              ))}

              <SR d="3" style={{marginTop:"clamp(28px,3.5vw,44px)"}}>
                <div style={{
                  background:"var(--base)",border:"1px solid var(--line-2)",
                  borderRadius:"var(--r-lg)",padding:"clamp(20px,2.4vw,30px)",
                  display:"flex",alignItems:"center",justifyContent:"space-between",
                  gap:"20px",flexWrap:"wrap",
                }}>
                  <div>
                    <div className="mono" style={{fontSize:"11px",letterSpacing:".14em",color:"var(--muted)"}}>CHOOSE YOUR STONE</div>
                    <p style={{margin:"6px 0 0",fontSize:"clamp(14px,1.2vw,16px)",lineHeight:1.5}}>
                      Ready to choose? Book a site visit and we'll walk you through the full Boral and Nielsens ranges in person.
                    </p>
                  </div>
                  <button className="btn btn--solid" onClick={openQuote} style={{flexShrink:0}}>
                    Book a site visit <SAr/>
                  </button>
                </div>
              </SR>
            </div>
          </section>
        )}

        {/* ── COLOUR RANGES (coloured concrete only) ──────── */}
        {s.colourRanges && (
          <section id="colour-ranges" className="section--tight" style={{borderTop:"1px solid var(--line)"}}>
            <div className="wrap">
              <SR><SEb>Colour ranges</SEb></SR>
              <SR d="1" as="h2" className="display" style={{
                fontSize:"clamp(28px,3.6vw,52px)",margin:"20px 0 0",lineHeight:.95,
              }}>
                Choose your colour.
              </SR>
              <SR d="2" as="p" style={{
                margin:"14px 0 0",color:"var(--muted)",
                fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"54ch",lineHeight:1.6,
              }}>
                We work with both the Boral and Nielsens oxide ranges. Browse the full palette below — then we'll walk you through your options at the site visit.
              </SR>

              {s.colourRanges.map((range,ri)=>(
                <div key={range.supplier} style={{marginTop: ri===0 ? "clamp(40px,5vw,64px)" : "clamp(36px,4.5vw,56px)"}}>
                  <SR d={String(ri)}>
                    <div style={{display:"flex",alignItems:"center",gap:"20px",marginBottom:"clamp(10px,1.5vw,16px)"}}>
                      <div style={{
                        fontFamily:"var(--font-mono)",fontSize:"11px",letterSpacing:".22em",
                        textTransform:"uppercase",color:"var(--text)",fontWeight:600,whiteSpace:"nowrap",
                      }}>{range.supplier} Range</div>
                      <div style={{flex:1,height:"1px",background:"var(--line)"}}/>
                    </div>
                    <p style={{
                      margin:"0 0 clamp(18px,2.2vw,28px)",color:"var(--muted)",
                      fontSize:"clamp(13px,1.1vw,16px)",maxWidth:"60ch",lineHeight:1.65,
                    }}>{range.intro}</p>
                  </SR>
                  <div style={{
                    display:"grid",
                    gridTemplateColumns:"repeat(auto-fill,minmax(clamp(140px,16vw,180px),1fr))",
                    gap:"clamp(8px,1vw,12px)",
                  }}>
                    {range.mixes.map((m,mi)=>(
                      <SR key={m.name} d={String(mi%4)}>
                        <div
                          onClick={m.img ? ()=>setColourLightbox({mixes:allColourMixes,startIdx:allColourMixes.findIndex(mx=>mx.name===m.name&&mx.supplier===range.supplier)}) : undefined}
                          style={{
                            background:"var(--panel)",border:"1px solid var(--line)",
                            borderRadius:"var(--r-lg)",
                            display:"flex",flexDirection:"column",height:"100%",
                            overflow:"hidden",
                            cursor: m.img ? "pointer" : "default",
                            transition:"border-color .2s,transform .2s",
                          }}
                          onMouseEnter={m.img ? e=>{e.currentTarget.style.borderColor="var(--line-3)";e.currentTarget.style.transform="translateY(-2px)"} : undefined}
                          onMouseLeave={m.img ? e=>{e.currentTarget.style.borderColor="var(--line)";e.currentTarget.style.transform="none"} : undefined}
                        >
                          {m.img
                            ? <div style={{height:"96px",flexShrink:0,overflow:"hidden",position:"relative"}}>
                                <img src={m.img} alt={m.name} loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}/>
                                <div style={{position:"absolute",inset:0,display:"grid",placeItems:"center",opacity:0,transition:"opacity .2s",background:"rgba(0,0,0,.35)"}}
                                  onMouseEnter={e=>{e.currentTarget.style.opacity=1}} onMouseLeave={e=>{e.currentTarget.style.opacity=0}}>
                                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="white" strokeWidth="1.6"><circle cx="10" cy="10" r="7"/><path d="M15 15l4 4"/><path d="M10 7v6M7 10h6"/></svg>
                                </div>
                              </div>
                            : <div style={{height:"72px",background:m.hex,flexShrink:0}}/>
                          }
                          <div style={{
                            padding:"clamp(14px,1.6vw,18px)",
                            display:"flex",flexDirection:"column",gap:"6px",flex:1,
                            borderTop:"2px solid rgba(255,255,255,.06)",
                          }}>
                            <div className="display" style={{fontSize:"clamp(14px,1.3vw,17px)",lineHeight:.95}}>{m.name}</div>
                            <p style={{
                              margin:0,fontSize:"clamp(12px,1vw,13.5px)",
                              color:"var(--muted)",lineHeight:1.55,flex:1,
                            }}>{m.desc}</p>
                          </div>
                        </div>
                      </SR>
                    ))}
                  </div>
                </div>
              ))}

              <SR d="3" style={{marginTop:"clamp(28px,3.5vw,44px)"}}>
                <div style={{
                  background:"var(--base)",border:"1px solid var(--line-2)",
                  borderRadius:"var(--r-lg)",padding:"clamp(20px,2.4vw,30px)",
                  display:"flex",alignItems:"center",justifyContent:"space-between",
                  gap:"20px",flexWrap:"wrap",
                }}>
                  <div>
                    <div className="mono" style={{fontSize:"11px",letterSpacing:".14em",color:"var(--muted)"}}>CHOOSE YOUR COLOUR</div>
                    <p style={{margin:"6px 0 0",fontSize:"clamp(14px,1.2vw,16px)",lineHeight:1.5}}>
                      Ready to choose? Book a site visit and we'll walk you through the full Boral and Nielsens oxide ranges in person.
                    </p>
                  </div>
                  <button className="btn btn--solid" onClick={openQuote} style={{flexShrink:0}}>
                    Book a site visit <SAr/>
                  </button>
                </div>
              </SR>
            </div>
          </section>
        )}

        {/* ── STAMP PATTERNS (stamped concrete only) ──────── */}
        {s.stampPatterns && (
          <section id="stamp-patterns" className="section--tight" style={{borderTop:"1px solid var(--line)"}}>
            <div className="wrap">
              <SR><SEb>Stamp patterns</SEb></SR>
              <SR d="1" as="h2" className="display" style={{
                fontSize:"clamp(28px,3.6vw,52px)",margin:"20px 0 0",lineHeight:.95,
              }}>
                Choose your pattern.
              </SR>
              <SR d="2" as="p" style={{
                margin:"14px 0 0",color:"var(--muted)",
                fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"54ch",lineHeight:1.6,
              }}>
                We use the Dulux Avista stamp range. Browse the patterns below — we'll bring physical samples to the site visit so you can see the depth and texture in person.
              </SR>
              <div style={{
                display:"grid",
                gridTemplateColumns:"repeat(auto-fill,minmax(clamp(160px,18vw,210px),1fr))",
                gap:"clamp(8px,1vw,12px)",
                marginTop:"clamp(32px,4vw,48px)",
              }}>
                {s.stampPatterns.map((p,pi)=>(
                  <SR key={p.name} d={String(pi%4)}>
                    <div style={{
                      background:"var(--panel)",border:"1px solid var(--line)",
                      borderRadius:"var(--r-lg)",overflow:"hidden",
                      display:"flex",flexDirection:"column",height:"100%",
                    }}>
                      {p.img
                        ? <div style={{height:"96px",flexShrink:0,overflow:"hidden"}}><img src={p.img} alt={p.name} loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover"}}/></div>
                        : <div style={{height:"72px",flexShrink:0,background:"linear-gradient(135deg,var(--panel-3) 25%,transparent 25%,transparent 50%,var(--panel-3) 50%,var(--panel-3) 75%,transparent 75%)",backgroundSize:"12px 12px",borderBottom:"1px solid var(--line)"}}/>
                      }
                      <div style={{padding:"clamp(14px,1.6vw,18px)",display:"flex",flexDirection:"column",gap:"6px",flex:1}}>
                        <div className="display" style={{fontSize:"clamp(14px,1.3vw,17px)",lineHeight:.95}}>{p.name}</div>
                        <p style={{margin:0,fontSize:"clamp(12px,1vw,13.5px)",color:"var(--muted)",lineHeight:1.55,flex:1}}>{p.desc}</p>
                      </div>
                    </div>
                  </SR>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── COVERCRETE COLOURS ───────────────────────────── */}
        {s.coverColours && (
          <section id="cover-colours" className="section--tight" style={{borderTop:"1px solid var(--line)"}}>
            <div className="wrap">
              <SR><SEb>Colour range</SEb></SR>
              <SR d="1" as="h2" className="display" style={{fontSize:"clamp(28px,3.6vw,52px)",margin:"20px 0 0",lineHeight:.95}}>
                Choose your colour.
              </SR>
              <SR d="2" as="p" style={{margin:"14px 0 0",color:"var(--muted)",fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"54ch",lineHeight:1.6}}>
                20 colours from the Dulux Avista range. We'll bring samples to the site visit so you can see them in natural light against your home.
              </SR>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(clamp(140px,16vw,180px),1fr))",gap:"clamp(8px,1vw,12px)",marginTop:"clamp(32px,4vw,48px)"}}>
                {s.coverColours.map((c,ci)=>(
                  <SR key={c.name} d={String(ci%4)}>
                    <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"}}>
                      <div style={{height:"96px",flexShrink:0,overflow:"hidden"}}>
                        <img src={c.img} alt={c.name} loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                      </div>
                      <div style={{padding:"clamp(14px,1.6vw,18px)",display:"flex",flexDirection:"column",gap:"6px",flex:1,borderTop:"2px solid rgba(255,255,255,.06)"}}>
                        <div className="display" style={{fontSize:"clamp(14px,1.3vw,17px)",lineHeight:.95}}>{c.name}</div>
                        <p style={{margin:0,fontSize:"clamp(12px,1vw,13.5px)",color:"var(--muted)",lineHeight:1.55,flex:1}}>{c.desc}</p>
                      </div>
                    </div>
                  </SR>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── COVERCRETE STENCIL PATTERNS ───────────────────── */}
        {s.coverPatterns && (
          <section id="cover-patterns" className="section--tight" style={{borderTop:"1px solid var(--line)"}}>
            <div className="wrap">
              <SR><SEb>Stencil patterns</SEb></SR>
              <SR d="1" as="h2" className="display" style={{fontSize:"clamp(28px,3.6vw,52px)",margin:"20px 0 0",lineHeight:.95}}>
                Choose your pattern.
              </SR>
              <SR d="2" as="p" style={{margin:"14px 0 0",color:"var(--muted)",fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"54ch",lineHeight:1.6}}>
                27 Dulux Avista stencil patterns, available in any colour from the range above. Mix colour and pattern to suit your home and streetscape.
                {s.id==="resurfacing" && " Stencil is completely optional — a plain colour finish looks just as sharp. Add a pattern if you want to give the surface more character."}
              </SR>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(clamp(160px,18vw,210px),1fr))",gap:"clamp(8px,1vw,12px)",marginTop:"clamp(32px,4vw,48px)"}}>
                {s.coverPatterns.map((p,pi)=>(
                  <SR key={p.name} d={String(pi%4)}>
                    <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",overflow:"hidden",display:"flex",flexDirection:"column",height:"100%"}}>
                      <div style={{height:"96px",flexShrink:0,overflow:"hidden"}}>
                        <img src={p.img} alt={p.name} loading="lazy" decoding="async" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                      </div>
                      <div style={{padding:"clamp(14px,1.6vw,18px)",display:"flex",flexDirection:"column",gap:"6px",flex:1,borderTop:"2px solid rgba(255,255,255,.06)"}}>
                        <div className="display" style={{fontSize:"clamp(14px,1.3vw,17px)",lineHeight:.95}}>{p.name}</div>
                        <p style={{margin:0,fontSize:"clamp(12px,1vw,13.5px)",color:"var(--muted)",lineHeight:1.55,flex:1}}>{p.desc}</p>
                      </div>
                    </div>
                  </SR>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── PROCESS ──────────────────────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb n="03">How we do it</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(30px,4vw,58px)",margin:"20px 0 0",lineHeight:.95,
            }}>
              Step by step.
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
              gap:"clamp(20px,3vw,44px)",
              marginTop:"clamp(40px,5vw,64px)",
            }}>
              {s.steps.map((st,i)=>(
                <SR key={i} d={String(i)}>
                  <div style={{borderTop:"2px solid var(--line-2)",paddingTop:"20px"}}>
                    <div className="mono chrome-text display" style={{fontSize:"30px",lineHeight:1}}>
                      {String(i+1).padStart(2,"0")}
                    </div>
                    <h4 style={{margin:"14px 0 0",fontSize:"16.5px",fontWeight:700}}>{st.t}</h4>
                    <p style={{margin:"8px 0 0",color:"var(--muted)",fontSize:"14px",lineHeight:1.55}}>{st.d}</p>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINISHES (conditional) ───────────────────────── */}
        {SHOWS_FINISHES.has(s.id) && (()=>{
          const isComm = s.id==="commercial";
          const stdFinishes  = isComm
            ? STANDARD_FINISHES.filter(f=>f.id==="trowel"||f.id==="broom")
            : STANDARD_FINISHES;
          const decFinishes  = isComm
            ? DECORATIVE_FINISHES.filter(f=>f.id==="coloured"||f.id==="exposed")
            : DECORATIVE_FINISHES;
          return (
            <section className="section--tight" style={{
              background:"var(--panel-2)",
              borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)",
            }}>
              <div className="wrap">

                <SR><SEb n="04">Available finishes</SEb></SR>
                <SR d="1" as="h2" className="display" style={{
                  fontSize:"clamp(28px,3.6vw,52px)",margin:"20px 0 0",lineHeight:.95,
                }}>
                  {isComm ? <>Spec the right<br/>surface.</> : <>Choose your surface.</>}
                </SR>
                <SR d="2" as="p" style={{
                  margin:"14px 0 0",color:"var(--muted)",
                  fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"50ch",lineHeight:1.6,
                }}>
                  {isComm
                    ? "We advise on the right finish for your use — foot traffic, machinery loads and aesthetic requirements all factor in. Power float is the base for most commercial floors; broom for external areas."
                    : `Every finish below can be applied to your ${s.short.toLowerCase()}. Click any to see the full detail, or ask us what suits your site best.`
                  }
                </SR>

                {/* standard finishes */}
                <SR d="3">
                  <div style={{display:"flex",alignItems:"center",gap:"20px",marginTop:"clamp(36px,4vw,52px)"}}>
                    <div className="eyebrow">{isComm ? "Primary Finishes" : "Standard Finishes"}</div>
                    <div style={{flex:1,height:"1px",background:"var(--line)"}}/>
                  </div>
                </SR>
                <div style={{
                  display:"grid",
                  gridTemplateColumns:"repeat(auto-fill,minmax(clamp(180px,18vw,220px),1fr))",
                  gap:"clamp(8px,1vw,12px)",
                  marginTop:"clamp(16px,2vw,22px)",
                }}>
                  {stdFinishes.map((f,i)=>(
                    <SR key={f.id} d={String(i)}><FinishCard s={f}/></SR>
                  ))}
                </div>

                {/* decorative finishes */}
                <SR d="3">
                  <div style={{display:"flex",alignItems:"center",gap:"20px",marginTop:"clamp(28px,3.5vw,44px)"}}>
                    <div className="eyebrow">{isComm ? "Premium Finishes" : "Decorative Finishes"}</div>
                    <div style={{flex:1,height:"1px",background:"var(--line)"}}/>
                  </div>
                </SR>
                <div style={{
                  display:"grid",
                  gridTemplateColumns:"repeat(auto-fill,minmax(clamp(180px,18vw,220px),1fr))",
                  gap:"clamp(8px,1vw,12px)",
                  marginTop:"clamp(16px,2vw,22px)",
                }}>
                  {decFinishes.map((f,i)=>(
                    <SR key={f.id} d={String(i)}><FinishCard s={f}/></SR>
                  ))}
                </div>

              </div>
            </section>
          );
        })()}

        {/* ── PRICING ──────────────────────────────────────── */}
        {s.pricingFactors && (
          <section className="section--tight">
            <div className="wrap">
              <SR><SEb>Pricing</SEb></SR>
              <SR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93}}>
                What affects the cost.
              </SR>
              <SR d="2" as="p" style={{margin:"16px 0 0",color:"var(--muted)",fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"52ch",lineHeight:1.65}}>
                We give fixed quotes — not estimates. Here's what we look at when we put one together for you.
              </SR>
              <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",gap:"clamp(12px,1.6vw,20px)",marginTop:"clamp(32px,4vw,52px)"}}>
                {s.pricingFactors.map((pf,i)=>(
                  <SR key={i} d={String(i)}>
                    <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(22px,2.4vw,30px)"}}>
                      <span style={{color:"var(--text)"}}><SIc name={pf.icon} s={24}/></span>
                      <h4 style={{margin:"16px 0 0",fontSize:"17px",fontWeight:700}}>{pf.t}</h4>
                      <p style={{margin:"10px 0 0",color:"var(--muted)",fontSize:"14px",lineHeight:1.6}}>{pf.d}</p>
                    </div>
                  </SR>
                ))}
              </div>
              <SR d="4" style={{marginTop:"clamp(28px,3vw,40px)"}}>
                <div style={{background:"var(--panel)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",padding:"clamp(22px,2.4vw,30px)",display:"flex",gap:"clamp(16px,2.5vw,40px)",alignItems:"center",flexWrap:"wrap"}}>
                  <div style={{flex:1,minWidth:"200px"}}>
                    <p style={{margin:"0 0 4px",fontWeight:600,fontSize:"16px"}}>Want to know where your job sits?</p>
                    <p style={{margin:0,fontSize:"14px",color:"var(--muted)",maxWidth:"44ch"}}>Give us the size, finish and site details — we'll come back with a locked price the same day.</p>
                  </div>
                  <button className="btn btn--solid" onClick={openQuote} style={{flexShrink:0}}>Get a fixed quote <SAr/></button>
                </div>
              </SR>
            </div>
          </section>
        )}

        {/* ── TESTIMONIALS ─────────────────────────────────── */}
        <ServiceTestimonials serviceId={s.id}/>

        {/* ── FAQs ─────────────────────────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb n="05">Common questions</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(30px,4vw,58px)",margin:"20px 0 0",lineHeight:.95,
            }}>
              Good to know.
            </SR>
            <div style={{marginTop:"clamp(28px,3.5vw,48px)",maxWidth:"800px"}}>
              <FAQList faqs={s.faqs}/>
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ──────────────────────────────────── */}
        {isResidential ? (
          <section style={{
            borderTop:"3px solid var(--chrome)",background:"var(--ink)",
            padding:"clamp(80px,11vw,130px) 0",position:"relative",overflow:"hidden",
          }}>
            <div style={{
              position:"absolute",inset:0,
              background:"radial-gradient(ellipse 55% 45% at 50% 100%,rgba(200,200,215,.07),transparent 70%)",
              pointerEvents:"none",
            }}/>
            <div className="wrap" style={{position:"relative",textAlign:"center"}}>
              <SR>
                <div className="mono" style={{fontSize:"11px",letterSpacing:".14em",color:"var(--muted)",marginBottom:"20px"}}>
                  ⚡ LIMITED BOOKINGS AVAILABLE — FILL FAST
                </div>
              </SR>
              <SR d="1" as="h2" className="display" style={{fontSize:"clamp(44px,7.5vw,116px)",margin:"0",lineHeight:.9}}>
                Get your fixed<br/><span className="chrome-text">quote today.</span>
              </SR>
              <SR d="2" as="p" style={{
                margin:"26px auto 0",color:"var(--muted)",
                fontSize:"clamp(16px,1.3vw,20px)",maxWidth:"44ch",lineHeight:1.65,
              }}>
                Tell us the size, the finish you're after and the site details. We'll come back with a locked price — same day. No obligation to proceed.
              </SR>
              <SR d="3" style={{display:"flex",gap:"14px",marginTop:"40px",justifyContent:"center",flexWrap:"wrap"}}>
                <button className="btn btn--solid btn--lg" onClick={openQuote}>
                  Quote my {s.short.toLowerCase()} <SAr/>
                </button>
                <a className="btn btn--ghost btn--lg" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                  <SIc name="phone" s={16}/> {SD.phone}
                </a>
              </SR>
              <SR d="4" style={{marginTop:"24px"}}>
                <div className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--faint)"}}>
                  FIXED PRICE · SAME-DAY REPLY · WRITTEN WORKMANSHIP WARRANTY
                </div>
              </SR>
            </div>
          </section>
        ) : (
          <section style={{
            borderTop:"1px solid var(--line)",background:"var(--panel-2)",
            padding:"clamp(64px,9vw,110px) 0",
          }}>
            <div className="wrap">
              <div style={{
                display:"flex",gap:"clamp(28px,5vw,80px)",
                alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",
              }}>
                <div>
                  <SR><SEb n="06">Next step</SEb></SR>
                  <SR d="1" as="h2" className="display" style={{
                    fontSize:"clamp(34px,5vw,78px)",margin:"20px 0 0",lineHeight:.93,
                  }}>
                    Get a fixed<br/>quote today.
                  </SR>
                  <SR d="2" as="p" style={{
                    margin:"20px 0 0",color:"var(--muted)",
                    fontSize:"clamp(15px,1.2vw,18px)",maxWidth:"40ch",lineHeight:1.65,
                  }}>
                    Tell us about your site and we'll send a locked price, same day. No obligation to proceed.
                  </SR>
                </div>
                <SR d="3" style={{display:"flex",gap:"12px",flexWrap:"wrap",flexShrink:0}}>
                  <button className="btn btn--solid btn--lg" onClick={openQuote}>
                    Quote my {s.short.toLowerCase()} <SAr/>
                  </button>
                  <a className="btn btn--ghost btn--lg" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                    <SIc name="phone" s={16}/> {SD.phone}
                  </a>
                </SR>
              </div>
            </div>
          </section>
        )}

        {/* ── RELATED SERVICES ─────────────────────────────── */}
        <section className="section--tight" style={{borderTop:"1px solid var(--line)"}}>
          <div className="wrap">
            <SR><SEb>Also consider</SEb></SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
              gap:"clamp(10px,1.2vw,14px)",
              marginTop:"clamp(24px,3vw,36px)",
            }}>
              {related.map((sv,i)=>(
                <SR key={sv.id} d={String(i)}>
                  <RelatedCard s={sv}/>
                </SR>
              ))}
            </div>
            <SR d="3" style={{marginTop:"28px",textAlign:"center"}}>
              <a href="Services.html" className="btn btn--ghost" style={{fontSize:"12px"}}>
                View all services <SAr/>
              </a>
            </SR>
          </div>
        </section>

      </main>

      <SFooter/>
      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}
      {lightbox && <AggLightbox mixes={lightbox.mixes} startIdx={lightbox.startIdx} onClose={()=>setLightbox(null)}/>}
      {colourLightbox && <ColourLightbox mixes={colourLightbox.mixes} startIdx={colourLightbox.startIdx} onClose={()=>setColourLightbox(null)}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ServiceDetailApp/>);
