/* Poly Concreting — Nav + Hero (with hero-style variants) */
const { Reveal, Ph, Eyebrow, Arrow, Icon } = window.PC_UI;
const { useState:uS, useEffect:uE, useRef:uR } = React;

function Logo({ light=true, h=34 }){
  return (
    <img src="Logo's/1logo.png" alt="Poly Concreting" className="nav-logo-img" width="280" height="70" decoding="async" style={{height:h,width:"auto",filter:"drop-shadow(0 1px 6px rgba(0,0,0,.5))"}}/>
  );
}

const ND = window.PC_DATA;
const HERE = (typeof location!=="undefined" ? (location.pathname.split("/").pop()||"Poly Concreting.html") : "");
const fileOf = (h)=> (h||"").split("#")[0];

function MegaPanel(){
  const mm = ND.megaMenu;
  return (
    <div className="mega-inner">
      <div className="mega-cols">
        {Object.keys(mm).map(group=>(
          <div key={group} className="mega-col">
            <div className="mega-h">{group}</div>
            <div className="mega-links">
              {mm[group].map(([t,h])=>(
                <a key={t+h} href={h} className="mega-link">{t}<span className="mega-ar"><Icon name="arrowR" s={14}/></span></a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Nav({ phone, onQuote }){
  const [solid,setSolid]=uS(false);
  const [open,setOpen]=uS(false);
  const [mega,setMega]=uS(false);
  const [mAcc,setMAcc]=uS(false);
  uE(()=>{
    const f=()=>setSolid(window.scrollY>40);
    f(); window.addEventListener("scroll",f,{passive:true});
    return ()=>window.removeEventListener("scroll",f);
  },[]);
  uE(()=>{ document.body.style.overflow = open?"hidden":""; return ()=>{document.body.style.overflow="";}; },[open]);
  const tel = phone.replace(/\s/g,"");

  return (
    <header style={{
      position:"fixed",top:0,left:0,right:0,zIndex:60,
      transition:"background .4s,border-color .4s,backdrop-filter .4s",
      background: (solid||mega)? "rgba(8,8,10,.86)":"linear-gradient(180deg,rgba(0,0,0,.55),transparent)",
      backdropFilter: (solid||mega)?"blur(16px) saturate(140%)":"none",
      borderBottom:`1px solid ${(solid||mega)?"var(--line)":"transparent"}`
    }} onMouseLeave={()=>setMega(false)}>
      {/* urgency bar */}
      <div className="urgency-topbar" style={{background:"var(--chrome)",color:"#0a0a0b",textAlign:"center",padding:"8px var(--pad)",display:"flex",alignItems:"center",justifyContent:"center",gap:"14px",flexWrap:"wrap"}}>
        <span className="mono urg-full-text" style={{fontSize:"11.5px",letterSpacing:".08em",fontWeight:600}}>
          LIMITED POUR DATES OPEN - CLAIM A PROPER QUOTE THIS WEEK
        </span>
        <span className="mono urg-mobile-text" style={{fontSize:"11.5px",letterSpacing:".08em",fontWeight:700}}>
          LIMITED DATES OPEN
        </span>
        <a href="Quote.html" className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"#0a0a0b",textDecoration:"none",borderBottom:"1px solid rgba(0,0,0,.4)",whiteSpace:"nowrap",fontWeight:700}}>
          <span className="urg-desktop-cta">SECURE YOUR SITE VISIT →</span><span className="urg-mobile-cta">SECURE YOUR PROJECT NOW →</span>
        </a>
      </div>
      <div className="wrap nav-inner" style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",height:"100px"}}>
        {/* left — nav links */}
        <nav className="nav-links" style={{display:"flex",gap:"30px",alignItems:"center",height:"100%"}}>
          {ND.nav.map(([t,h,kind])=>{
            const active = fileOf(h)===HERE;
            if(kind==="mega"){
              return (
                <div key={t} className="nav-mega-trigger" style={{height:"100%",display:"flex",alignItems:"center"}} onMouseEnter={()=>setMega(true)}>
                  <a href={h} className={`mono nav-link ${active?"is-active":""}`} style={{display:"flex",alignItems:"center",gap:"6px"}}>
                    {t}<span style={{transform:mega?"rotate(180deg)":"none",transition:"transform .3s",display:"inline-flex"}}><svg width="9" height="6" viewBox="0 0 9 6" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M1 1l3.5 3.5L8 1"/></svg></span>
                  </a>
                </div>
              );
            }
            return <a key={t} href={h} className={`mono nav-link ${active?"is-active":""}`} onMouseEnter={()=>setMega(false)}>{t}</a>;
          })}
        </nav>

        {/* centre — logo */}
        <a href="Poly Concreting.html" style={{position:"relative",zIndex:2,justifySelf:"center"}}>
          <Logo h={80}/>
        </a>

        {/* right — CTAs + mobile burger */}
        <div style={{display:"flex",alignItems:"center",gap:"16px",justifyContent:"flex-end"}}>
          <div className="nav-cta" style={{display:"flex",alignItems:"center",gap:"16px"}}>
            <a href={`tel:${tel}`} className="mono nav-phone" style={{fontSize:"13px",letterSpacing:".06em",color:"var(--text)",display:"flex",alignItems:"center",gap:"8px",whiteSpace:"nowrap"}}>
              <Icon name="phone" s={15}/> {phone}
            </a>
            <a href="Quote.html" className="btn btn--solid nav-quote">Get a Quote <Arrow/></a>
          </div>
          <button className="nav-burger" onClick={()=>setOpen(o=>!o)} aria-label="Menu" aria-expanded={open}
            style={{display:"none",background:"none",border:"none",padding:"8px",color:"var(--text)",position:"relative",zIndex:120}}>
            <span className={`burger ${open?"burger--x":""}`}><i></i><i></i><i></i></span>
          </button>
        </div>
      </div>

      {/* desktop mega menu */}
      <div className={`mega ${mega?"mega--open":""}`} onMouseEnter={()=>setMega(true)}>
        <MegaPanel/>
      </div>

      {/* premium mobile menu */}
      <div className={`mnav ${open?"mnav--open":""}`}>
        <div className="mnav-head">
          <span className="mono">Menu</span>
          <span className="mono">Choose a page</span>
        </div>
        <div className="mnav-scroll">
          {ND.nav.map(([t,h,kind],i)=>(
            kind==="mega" ? (
              <div key={t} className="mnav-group" style={{transitionDelay:`${0.04*i+0.05}s`}}>
                <button className="mnav-link mnav-acc" onClick={()=>setMAcc(a=>!a)}>
                  <span>{t}</span>
                  <span style={{transform:mAcc?"rotate(45deg)":"none",transition:"transform .3s",color:"var(--muted)"}}><svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M8 1v14M1 8h14"/></svg></span>
                </button>
                <div className="mnav-sub" style={{maxHeight:mAcc?"640px":"0"}}>
                  {Object.keys(ND.megaMenu).map(group=>(
                    <div key={group} style={{marginTop:"6px"}}>
                      <div className="mono" style={{fontSize:"10.5px",letterSpacing:".18em",color:"var(--faint)",padding:"10px 0 6px"}}>{group.toUpperCase()}</div>
                      {ND.megaMenu[group].map(([st,sh])=>(
                        <a key={st+sh} href={sh} onClick={()=>setOpen(false)} className="mnav-sublink">{st}</a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <a key={t} href={h} onClick={()=>setOpen(false)} className="mnav-link mnav-stagger" style={{transitionDelay:`${0.04*i+0.05}s`}}>{t}</a>
            )
          ))}
        </div>
        <div className="mnav-foot">
          <a href="Quote.html" className="btn btn--solid btn--lg" style={{width:"100%",justifyContent:"center"}}>Get a Quote <Arrow/></a>
        </div>
      </div>
      <div className="mobile-urgency-cta" role="region" aria-label="Quick quote and contact actions">
        <a href="Quote.html" className="mobile-urgency-cta__quote">Get quote</a>
        <a href={`tel:${tel}`} className="mobile-urgency-cta__call"><Icon name="phone" s={15}/> Call now</a>
      </div>
    </header>
  );
}

/* showreel modal */
function ReelModal({ onClose }){
  uE(()=>{
    const k = e=>{ if(e.key==="Escape") onClose(); };
    document.addEventListener("keydown",k);
    document.body.style.overflow="hidden";
    return ()=>{ document.removeEventListener("keydown",k); document.body.style.overflow=""; };
  },[]);
  return (
    <div onClick={onClose} style={{position:"fixed",inset:0,zIndex:200,background:"rgba(8,8,10,.95)",backdropFilter:"blur(12px)",display:"flex",alignItems:"center",justifyContent:"center",padding:"clamp(16px,3vw,40px)"}}>
      <button onClick={onClose} aria-label="Close" style={{position:"fixed",top:"20px",right:"20px",width:"40px",height:"40px",borderRadius:"50%",border:"1px solid var(--line-2)",background:"rgba(8,8,10,.7)",color:"var(--text)",cursor:"pointer",display:"grid",placeItems:"center",zIndex:2,fontSize:"18px"}}>✕</button>
      <video onClick={e=>e.stopPropagation()} controls playsInline preload="metadata" poster="assets/img/hero-poster.webp"
        style={{maxWidth:"100%",maxHeight:"85vh",borderRadius:"var(--r-lg)",outline:"none",boxShadow:"0 24px 64px rgba(0,0,0,.7)"}}
        src="assets/video/hero.mp4"/>
    </div>
  );
}

/* cinematic media block reused across variants */
function HeroMedia({ motion, tall=false, label="DRONE SHOWREEL — 0:42", onReel }){
  return (
    <div className="hero-media" style={{position:"absolute",inset:0,overflow:"hidden"}}>
      <video autoPlay muted loop playsInline preload="metadata" poster="assets/img/hero-poster.webp" onLoadedMetadata={e=>e.currentTarget.play()}
        style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}
        src="assets/video/hero.mp4"/>
      <div style={{position:"absolute",inset:0}}></div>
      {/* cinematic gradients */}
      <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(8,8,10,.94) 0%,rgba(8,8,10,.6) 40%,rgba(8,8,10,.25) 72%,rgba(8,8,10,.6) 100%)"}}></div>
      <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.96) 2%,transparent 40%,transparent 68%,rgba(8,8,10,.72) 100%)"}}></div>
      {/* showreel chip */}
      <button onClick={onReel} className="reel-chip" style={{position:"absolute",right:"clamp(20px,4vw,54px)",top:"46%",display:"flex",alignItems:"center",gap:"12px",background:"rgba(20,20,23,.5)",border:"1px solid var(--line-2)",backdropFilter:"blur(8px)",borderRadius:"40px",padding:"9px 9px 9px 18px",color:"var(--text)",cursor:"pointer"}}>
        <span className="mono" style={{fontSize:"11px",letterSpacing:".16em"}}>{label}</span>
        <span style={{width:"34px",height:"34px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center"}}><Icon name="play" s={13}/></span>
      </button>
    </div>
  );
}

function HeroContent({ accent, onQuote, big }){
  const Chrome = ({children}) => accent==="chrome"
    ? <span className="chrome-text">{children}</span>
    : <span style={{color:"#fff"}}>{children}</span>;
  return (
    <div className="hero-copy" style={{maxWidth: big? "min(100%,900px)":"min(100%,820px)"}}>
      
      <Reveal d="1" as="h1" className="display" style={{fontSize: big?"clamp(52px,8.2vw,138px)":"clamp(44px,6.4vw,104px)",margin:"24px 0 0",letterSpacing:".002em"}}>
        Concrete done<br/>once.<br/><Chrome>Done properly.</Chrome>
      </Reveal>
      <Reveal d="2" as="p" style={{maxWidth:"46ch",margin:"30px 0 0",fontSize:"clamp(16px,1.3vw,19px)",color:"var(--muted)",lineHeight:1.65}}>
        Driveways, exposed aggregate, slabs and patios built by a licensed, insured crew with 10+ years on the tools. Clear quotes, locked-in dates, tidy sites and finishes made to lift the value of your home.
      </Reveal>
      <Reveal d="3" style={{display:"flex",gap:"14px",marginTop:"38px",flexWrap:"wrap"}}>
        <button className="btn btn--solid btn--lg" onClick={onQuote}>Get my quote <Arrow/></button>
        <a className="btn btn--ghost btn--lg" href="Projects.html">View projects <Arrow d="e"/></a>
      </Reveal>
      <Reveal d="3" style={{display:"flex",gap:"clamp(14px,2.5vw,28px)",marginTop:"20px",flexWrap:"wrap",alignItems:"center"}}>
        {[["shield","QBCC Licensed"],["check","Fully Insured"],["doc","Fixed Quotes"],["star","Written Warranty"]].map(([ico,txt])=>(
          <div key={txt} style={{display:"flex",alignItems:"center",gap:"7px"}}>
            <span style={{width:"18px",height:"18px",borderRadius:"50%",background:"rgba(200,200,180,.1)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
              <Icon name={ico==="shield"?"check":ico==="doc"?"arrowR":ico} s={9}/>
            </span>
            <span className="mono" style={{fontSize:"10px",letterSpacing:".1em",textTransform:"uppercase",color:"var(--faint)"}}>{txt}</span>
          </div>
        ))}
      </Reveal>
      <Reveal d="4" style={{display:"flex",gap:"30px",marginTop:"44px",flexWrap:"wrap"}}>
        {[["150+","Projects placed"],["10+ yrs","Industry experience"],["9","Regions covered"]].map(([a,b])=>(
          <div key={b} style={{display:"flex",flexDirection:"column",gap:"4px"}}>
            <span className="display" style={{fontSize:"26px"}}>{a}</span>
            <span className="mono" style={{fontSize:"10.5px",letterSpacing:".14em",textTransform:"uppercase",color:"var(--faint)"}}>{b}</span>
          </div>
        ))}
      </Reveal>
    </div>
  );
}

const HERO_VIDEOS = ["assets/video/hero.mp4","assets/video/hero3.mp4","assets/video/hero4.mp4","assets/video/hero1.mp4"];

function SplitVideo({ motion }){
  const [idx, setIdx] = uS(0);
  const next = ()=> setIdx(i=>(i+1)%HERO_VIDEOS.length);
  return (
    <div style={{position:"relative"}}>
      <div style={{position:"absolute",inset:0,overflow:"hidden"}}>
        <video key={idx} autoPlay muted playsInline preload="metadata" poster="assets/img/hero-poster.webp" onLoadedMetadata={e=>e.currentTarget.play()} onEnded={next}
          style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"}}
          src={HERO_VIDEOS[idx]}/>
        {/* bottom fade */}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.7),transparent 40%)"}}></div>
        {/* left edge fade — blends into content panel */}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(8,8,10,1) 0%,rgba(8,8,10,0.4) 18%,transparent 45%)"}}></div>
      </div>
    </div>
  );
}

function Hero({ variant="cinematic", accent="chrome", motion=true, onQuote }){
  /* ---- SPLIT ---- */
  if(variant==="split"){
    return (
      <section id="top" className="hero hero--split" style={{minHeight:"100svh",display:"grid",gridTemplateColumns:"1.05fr .95fr",position:"relative"}}>
        <div style={{display:"flex",alignItems:"center",padding:"clamp(170px,20vh,200px) var(--pad) 80px",position:"relative",zIndex:2}}>
          <HeroContent accent={accent} onQuote={onQuote}/>
        </div>
        <SplitVideo motion={motion}/>
        <ScrollCue/>
      </section>
    );
  }
  /* ---- EDITORIAL ---- */
  if(variant==="editorial"){
    return (
      <section id="top" className="hero hero--editorial" style={{minHeight:"100svh",display:"flex",flexDirection:"column",justifyContent:"center",position:"relative",paddingTop:"clamp(170px,20vh,200px)"}}>
        <div className="wrap" style={{position:"relative",zIndex:2,width:"100%"}}>
          
          <Reveal d="1" as="h1" className="display" style={{fontSize:"clamp(54px,11vw,200px)",margin:"26px 0 0"}}>
            We pour the<br/>ground SEQ is<br/>{accent==="chrome"?<span className="chrome-text">built on.</span>:<span>built on.</span>}
          </Reveal>
          <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:"40px",flexWrap:"wrap",marginTop:"44px"}}>
            <Reveal d="2" as="p" style={{maxWidth:"42ch",fontSize:"clamp(16px,1.3vw,19px)",color:"var(--muted)"}}>
              Driveways, exposed aggregate, house slabs and patios. 10+ years, 150+ pours, one
              standard across the whole of South East Queensland.
            </Reveal>
            <Reveal d="3" style={{display:"flex",gap:"14px",flexWrap:"wrap"}}>
              <button className="btn btn--solid btn--lg" onClick={onQuote}>Get a quote <Arrow/></button>
              <a className="btn btn--ghost btn--lg" href="Projects.html">View projects <Arrow d="e"/></a>
            </Reveal>
          </div>
          <Reveal d="3" style={{marginTop:"40px",height:"clamp(180px,26vh,300px)",position:"relative",borderRadius:"var(--r)",overflow:"hidden",border:"1px solid var(--line)"}}>
            <Ph label="HERO FILM — concrete pour · drone · finishing  (replace with showreel)" src="assets/img/slab-powerfloat.webp" pos="center 58%" style={{position:"absolute",inset:0}}/>
            <div style={{position:"absolute",inset:0,display:"grid",placeItems:"center"}}>
              <span style={{width:"56px",height:"56px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center"}}><Icon name="play" s={20}/></span>
            </div>
          </Reveal>
        </div>
      </section>
    );
  }
  /* ---- CINEMATIC (default) ---- */
  const [reel,setReel]=uS(false);
  return (
    <section id="top" className="hero hero--cinematic" style={{minHeight:"100svh",display:"flex",alignItems:"flex-end",position:"relative"}}>
      <HeroMedia motion={motion} onReel={()=>setReel(true)}/>
      <div className="wrap" style={{position:"relative",zIndex:3,paddingBottom:"clamp(80px,12vh,140px)",paddingTop:"clamp(180px,22vh,220px)",width:"100%"}}>
        <HeroContent accent={accent} onQuote={onQuote} big/>
      </div>
      <ScrollCue/>
      {reel && <ReelModal onClose={()=>setReel(false)}/>}
    </section>
  );
}

function ScrollCue(){
  return (
    <a href="#metrics" className="mono" style={{position:"absolute",left:"var(--pad)",bottom:"26px",zIndex:4,display:"flex",alignItems:"center",gap:"10px",fontSize:"10.5px",letterSpacing:".22em",color:"var(--faint)"}}>
      <span style={{width:"1px",height:"34px",background:"linear-gradient(var(--faint),transparent)",animation:"scrolldown 2.2s var(--ease) infinite"}}></span>
      SCROLL
    </a>
  );
}

window.PC_HERO = { Nav, Hero, Logo };
