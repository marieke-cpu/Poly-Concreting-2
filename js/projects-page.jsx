/* Poly Concreting — Projects portfolio page */
const { Reveal:PR, Ph:PPh, Eyebrow:PEb, Arrow:PAr, Icon:PIc } = window.PC_UI;
const PJ = window.PC_DATA;
const CS = window.PC_CASESTUDIES;
const PNav    = window.PC_HERO.Nav;
const PFooter = window.PC_S2.Footer;
const PROJ = PJ.projects;

function projFromHash(){
  const h=(location.hash||"").replace("#","");
  return PROJ.find(p=>p.id===h) ? h : null;
}

/* ---------- project card ---------- */
function PCard({ p, d, onOpen }){
  const [hov,setHov]=React.useState(false);
  return (
    <PR d={d}>
      <div
        onMouseEnter={()=>setHov(true)}
        onMouseLeave={()=>setHov(false)}
        style={{
          position:"relative",borderRadius:"var(--r-lg)",overflow:"hidden",
          border:`1px solid ${hov?"var(--line-3)":"var(--line)"}`,
          display:"flex",flexDirection:"column",
          minHeight:"clamp(340px,30vw,440px)",
          transition:"border-color .3s, transform .3s var(--ease-out)",
          transform:hov?"translateY(-4px)":"none",
        }}
      >
        <PPh label={null} src={p.img} pos={p.pos||"center"} style={{position:"absolute",inset:0}}/>
        <div style={{
          position:"absolute",inset:0,
          background:hov
            ?"linear-gradient(0deg,rgba(8,8,10,1) 28%,rgba(8,8,10,.65) 60%,rgba(8,8,10,.25))"
            :"linear-gradient(0deg,rgba(8,8,10,.97) 32%,rgba(8,8,10,.5) 65%,rgba(8,8,10,.15))",
          transition:"background .4s",
        }}/>
        <a href={`#${p.id}`} onClick={e=>{e.preventDefault();onOpen(p.id);}}
          style={{position:"absolute",inset:0,zIndex:1}} aria-label={`View ${p.title}`}/>

        {/* category badge */}
        <div style={{position:"absolute",top:"clamp(14px,1.5vw,18px)",left:"clamp(14px,1.5vw,18px)",zIndex:2}}>
          <span className="mono" style={{
            fontSize:"10px",letterSpacing:".14em",textTransform:"uppercase",
            background:"rgba(8,8,10,.55)",backdropFilter:"blur(6px)",
            border:"1px solid var(--line-2)",borderRadius:"40px",padding:"6px 12px",
          }}>{Array.isArray(p.cat) ? p.cat[0] : p.cat}</span>
        </div>

        {/* VIEW indicator */}
        <div style={{
          position:"absolute",top:"clamp(14px,1.5vw,18px)",right:"clamp(14px,1.5vw,18px)",zIndex:2,
          display:"flex",alignItems:"center",gap:"5px",
          fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",fontFamily:"var(--font-mono)",
          opacity:hov?1:0,transform:hov?"translateY(0)":"translateY(3px)",transition:"opacity .25s,transform .25s",
        }}>
          VIEW <PAr/>
        </div>

        {/* content */}
        <div style={{position:"relative",marginTop:"auto",padding:"clamp(18px,2vw,26px)",zIndex:2}}>
          <div style={{display:"flex",alignItems:"center",gap:"7px",color:"var(--muted)",marginBottom:"8px"}}>
            <PIc name="pin" s={13}/>
            <span className="mono" style={{fontSize:"11px",letterSpacing:".07em"}}>{p.loc}</span>
            <span className="mono" style={{fontSize:"11px",color:"var(--faint)",marginLeft:"4px"}}>{p.year}</span>
          </div>
          <h3 className="display" style={{fontSize:"clamp(20px,1.9vw,26px)",lineHeight:.95,margin:"0 0 8px"}}>{p.title}</h3>
          <p style={{margin:"0 0 14px",fontSize:"13px",color:"var(--muted)",lineHeight:1.5,maxWidth:"28ch"}}>{p.scope}</p>
          <div style={{display:"flex",flexDirection:"column",gap:"6px",marginBottom:"18px"}}>
            {p.stat.slice(0,3).map(s=>(
              <div key={s} style={{display:"flex",alignItems:"center",gap:"8px",fontSize:"12.5px",color:"var(--text)"}}>
                <PIc name="check" s={13}/>{s}
              </div>
            ))}
          </div>
          <button
            className="btn btn--solid"
            onClick={e=>{e.preventDefault();onOpen(p.id);}}
            style={{width:"100%",justifyContent:"center",fontSize:"12px",padding:"13px 20px",position:"relative",zIndex:3}}
          >
            View image <PAr/>
          </button>
        </div>
      </div>
    </PR>
  );
}

/* ---------- lightbox ---------- */
function Lightbox({ id, onClose }){
  const p = PROJ.find(x=>x.id===id);
  React.useEffect(()=>{
    const k=(e)=>{ if(e.key==="Escape") onClose(); };
    document.addEventListener("keydown",k);
    document.body.style.overflow="hidden";
    return ()=>{ document.removeEventListener("keydown",k); document.body.style.overflow=""; };
  },[]);
  if(!p) return null;
  return (
    <div onClick={onClose} style={{
      position:"fixed",inset:0,zIndex:150,
      background:"rgba(8,8,10,.92)",backdropFilter:"blur(8px)",
      display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",
      padding:"clamp(16px,3vw,40px)",
    }}>
      <button onClick={onClose} aria-label="Close" style={{
        position:"fixed",top:"20px",right:"20px",
        width:"40px",height:"40px",borderRadius:"50%",
        border:"1px solid var(--line-2)",background:"rgba(8,8,10,.7)",
        color:"var(--text)",cursor:"pointer",display:"grid",placeItems:"center",zIndex:2,
      }}><PIc name="x" s={18}/></button>

      <img
        src={p.img}
        alt={p.title}
        onClick={e=>e.stopPropagation()}
        style={{
          maxWidth:"100%",maxHeight:"85vh",
          objectFit:"contain",borderRadius:"var(--r)",
          boxShadow:"0 24px 64px rgba(0,0,0,.6)",
        }}
      />
      <div onClick={e=>e.stopPropagation()} style={{marginTop:"16px",textAlign:"center"}}>
        <div className="display" style={{fontSize:"clamp(16px,1.6vw,22px)",margin:0}}>{p.title}</div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:"8px",marginTop:"6px",color:"var(--muted)"}}>
          <PIc name="pin" s={13}/>
          <span className="mono" style={{fontSize:"12px",letterSpacing:".07em"}}>{p.loc}</span>
          <span className="mono" style={{fontSize:"12px",color:"var(--faint)"}}>{p.year}</span>
        </div>
      </div>
    </div>
  );
}

/* ---------- page ---------- */
function ProjectsApp(){
  const [f,setF]=React.useState("All");
  const [open,setOpen]=React.useState(projFromHash());
  const [quote,setQuote]=React.useState(false);
  const list = PROJ.filter(p=> f==="All" || (Array.isArray(p.cat) ? p.cat.includes(f) : p.cat===f));
  const select=(id)=>{ setOpen(id); history.replaceState(null,"",id?`#${id}`:" "); };
  React.useEffect(()=>{
    const onHash=()=>setOpen(projFromHash());
    window.addEventListener("hashchange",onHash);
    return ()=>window.removeEventListener("hashchange",onHash);
  },[]);

  return (
    <div id="top">
      <PNav phone={PJ.phone} onQuote={()=>setQuote(true)}/>
      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <section style={{
          paddingTop:"clamp(180px,22vh,220px)",
          paddingBottom:"clamp(60px,8vh,96px)",
          borderBottom:"1px solid var(--line)",
          position:"relative",overflow:"hidden",
        }}>
          <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 50% at 25% 50%,rgba(200,200,210,.04),transparent 70%)",pointerEvents:"none"}}/>
          <div className="wrap" style={{position:"relative"}}>
            <PR><PEb n="—">Projects</PEb></PR>
            <PR d="1" as="h1" className="display" style={{fontSize:"clamp(46px,8vw,124px)",margin:"20px 0 0",lineHeight:.93}}>
              Work that speaks<br/>for itself.
            </PR>
            <PR d="2">
              <div style={{display:"flex",gap:"clamp(28px,5vw,72px)",marginTop:"32px",alignItems:"flex-end",flexWrap:"wrap"}}>
                <p style={{margin:0,color:"var(--muted)",fontSize:"clamp(16px,1.35vw,20px)",maxWidth:"46ch",lineHeight:1.65}}>
                  {PROJ.length} recent jobs across South East Queensland — driveways, slabs, pathways and decorative finishes. Tap any project to see it up close.
                </p>
                <div style={{display:"flex",gap:"12px",flexWrap:"wrap",flexShrink:0}}>
                  <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Get a free quote <PAr/></button>
                  <a className="btn btn--ghost btn--lg" href={`tel:${PJ.phone.replace(/\s/g,"")}`}><PIc name="phone" s={16}/> {PJ.phone}</a>
                </div>
              </div>
            </PR>
            <PR d="3">
              <div style={{display:"flex",marginTop:"clamp(44px,5vw,64px)",borderTop:"1px solid var(--line)",flexWrap:"wrap"}}>
                {PJ.metrics.map((m,i)=>(
                  <div key={i} style={{flex:"1 1 120px",borderRight:i<PJ.metrics.length-1?"1px solid var(--line)":"none",padding:"clamp(18px,2vw,26px) clamp(16px,2vw,28px)"}}>
                    <div className="display chrome-text" style={{fontSize:"clamp(24px,3vw,42px)",lineHeight:.95}}>{m.prefix||""}{m.value}{m.suffix}</div>
                    <div className="mono" style={{fontSize:"11px",letterSpacing:".06em",color:"var(--muted)",marginTop:"6px"}}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </PR>
          </div>
        </section>

        {/* ── PROJECTS GRID ─────────────────────────────── */}
        <section className="section">
          <div className="wrap">
            <PR><PEb n="01">Recent work</PEb></PR>
            <PR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95}}>
              Real jobs. Real results.
            </PR>
            <PR d="2" style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",flexWrap:"wrap",marginTop:"clamp(28px,3.5vw,40px)"}}>
              <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                {PJ.projectFilters.map(ff=>(
                  <button key={ff} onClick={()=>setF(ff)} className="mono"
                    style={{fontSize:"12px",letterSpacing:".1em",textTransform:"uppercase",padding:"10px 16px",borderRadius:"40px",cursor:"pointer",
                      border:`1px solid ${f===ff?"var(--text)":"var(--line-2)"}`,background:f===ff?"var(--text)":"transparent",
                      color:f===ff?"#0a0a0b":"var(--muted)",transition:"all .25s"}}>{ff}</button>
                ))}
              </div>
              <span className="mono" style={{fontSize:"12px",color:"var(--faint)",letterSpacing:".08em"}}>{list.length} {list.length===1?"project":"projects"}</span>
            </PR>
            <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"clamp(10px,1.2vw,14px)",marginTop:"clamp(20px,2.5vw,28px)"}}>
              {list.map((p,i)=><PCard key={p.id} p={p} d={String(i%4)} onOpen={select}/>)}
            </div>
          </div>
        </section>

        {window.PC_REVIEWS && <window.PC_REVIEWS/>}

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section style={{borderTop:"1px solid var(--line)",background:"var(--panel-2)",padding:"clamp(70px,9vw,110px) 0"}}>
          <div className="wrap">
            <div style={{maxWidth:"720px"}}>
              <PR><PEb n="03">Ready to start</PEb></PR>
              <PR d="1" as="h2" className="display" style={{fontSize:"clamp(38px,5.5vw,86px)",margin:"20px 0 0",lineHeight:.93}}>
                Get a fixed quote<br/>today.
              </PR>
              <PR d="2" as="p" style={{margin:"22px 0 0",color:"var(--muted)",fontSize:"clamp(16px,1.3vw,19px)",maxWidth:"44ch",lineHeight:1.65}}>
                Tell us about your site and we'll come back with a locked price, same day. No obligation. No follow-up calls unless you want them.
              </PR>
              <PR d="3" style={{display:"flex",gap:"14px",marginTop:"36px",flexWrap:"wrap"}}>
                <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Start my quote <PAr/></button>
                <a className="btn btn--ghost btn--lg" href={`tel:${PJ.phone.replace(/\s/g,"")}`}><PIc name="phone" s={16}/> {PJ.phone}</a>
              </PR>
            </div>
          </div>
        </section>

      </main>
      <PFooter/>

      {open && <Lightbox id={open} onClose={()=>select(null)}/>}
      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProjectsApp/>);
