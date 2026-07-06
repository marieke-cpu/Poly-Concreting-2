/* Poly Concreting — sections core: Metrics, Why, Projects, Process */
const { Reveal:Rv, Counter:Cnt, Ph:Im, Eyebrow:Eb, Arrow:Ar, Icon:Ic } = window.PC_UI;
const PD = window.PC_DATA;

function TatauBand(){ return null; }

function SectionHead({ n, kicker, title, sub, align="left", chrome }){
  return (
    <div style={{maxWidth:"760px", marginInline: align==="center"?"auto":undefined, textAlign:align}}>
      <Rv><Eb n={n} style={{justifyContent: align==="center"?"center":"flex-start"}}>{kicker}</Eb></Rv>
      <Rv d="1" as="h2" className="display" style={{fontSize:"clamp(34px,4.6vw,64px)",margin:"20px 0 0",lineHeight:.98}}>
        {title}
      </Rv>
      {sub && <Rv d="2" as="p" style={{margin:"22px 0 0",color:"var(--muted)",fontSize:"clamp(16px,1.2vw,18.5px)",maxWidth:"58ch",marginInline:align==="center"?"auto":undefined}}>{sub}</Rv>}
    </div>
  );
}

/* ====================== SECTION 2 — METRICS ====================== */
function Metrics({ bands }){
  return (
    <section id="metrics" className="section--tight" style={{background:"var(--ink)",borderTop:"3px solid var(--chrome)",borderBottom:"1px solid var(--line)",position:"relative",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 60% at 50% 50%,rgba(200,200,210,0.09) 0%,transparent 70%)",pointerEvents:"none"}}/>
      <div className="wrap" style={{position:"relative",zIndex:1}}>
        <Rv><Eb n="02">By the numbers</Eb></Rv>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"1px",background:"rgba(255,255,255,0.06)",marginTop:"24px",border:"1px solid rgba(255,255,255,0.08)"}} className="metrics-grid">
          {PD.metrics.map((m,i)=>(
            <Rv key={m.label} d={String(i%4)} style={{background:"var(--ink)",padding:"clamp(22px,2.6vw,36px) clamp(18px,2vw,28px)"}}>
              <div className="display chrome-text" style={{fontSize:"clamp(38px,4.5vw,64px)",lineHeight:.88}}>
                <Cnt value={m.value} prefix={m.prefix||""} suffix={m.suffix||""}/>
              </div>
              <div style={{marginTop:"12px",fontSize:"15px",fontWeight:600,letterSpacing:".01em"}}>{m.label}</div>
              <div className="mono" style={{marginTop:"6px",fontSize:"11px",letterSpacing:".06em",color:"var(--faint)"}}>{m.sub}</div>
            </Rv>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ====================== SECTION 3 — WHY POLY (comparison) ====================== */
function WhyPoly(){
  const [i,setI]=React.useState(0);
  const items = PD.why;
  const cur = items[i];
  return (
    <section id="why" className="section" style={{position:"relative"}}>
      <div className="wrap">
        <SectionHead n="03" kicker="Why Poly" title={<>The difference is in<br/>the part you can&rsquo;t see.</>}
          sub="Anyone can pour grey. We compete on the things that decide whether concrete lasts twenty years or cracks by the first wet season."/>
        <div className="why-grid" style={{display:"grid",gridTemplateColumns:"minmax(220px,280px) 1fr",gap:"clamp(24px,4vw,64px)",marginTop:"clamp(40px,5vw,72px)",alignItems:"start"}}>
          {/* criteria list */}
          <div style={{display:"flex",flexDirection:"column",borderTop:"1px solid var(--line)"}}>
            {items.map((it,idx)=>(
              <button key={it.k} onMouseEnter={()=>setI(idx)} onClick={()=>setI(idx)}
                style={{textAlign:"left",background:"none",border:"none",borderBottom:"1px solid var(--line)",
                  padding:"16px 8px 16px 0",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"12px",
                  color: idx===i?"var(--text)":"var(--faint)",transition:"color .2s",cursor:"pointer",
                  borderLeft: idx===i?"3px solid var(--chrome)":"3px solid transparent",paddingLeft: idx===i?"12px":"0",
                  marginLeft:"-3px"}}>
                <span style={{display:"flex",alignItems:"center",gap:"14px"}}>
                  <span className="mono" style={{fontSize:"11px",color: idx===i?"var(--muted)":"var(--faint)",flexShrink:0}}>{String(idx+1).padStart(2,"0")}</span>
                  <span className="display" style={{fontSize:"clamp(17px,1.6vw,22px)",letterSpacing:".01em"}}>{it.k}</span>
                </span>
                <span style={{opacity: idx===i?1:0,transition:"opacity .2s",color:"var(--muted)",flexShrink:0}}><Ic name="arrowR" s={16}/></span>
              </button>
            ))}
          </div>
          {/* compare panel */}
          <div className="why-compare" style={{display:"grid",gridTemplateColumns:"1fr auto 1fr",gap:"0",alignItems:"stretch"}}>
            {/* Poly card */}
            <div key={"p"+i} className="rise why-poly-col" style={{position:"relative",background:"linear-gradient(160deg,#1e1e23,#141417)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg) 0 0 var(--r-lg)",padding:"clamp(24px,2.6vw,40px)",overflow:"hidden"}}>
              <div style={{position:"absolute",inset:0,background:"radial-gradient(110% 70% at 0% 0%,rgba(255,255,255,.055),transparent 60%)",pointerEvents:"none"}}/>
              <div style={{position:"relative"}}>
                <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"}}>
                  <span style={{width:"28px",height:"28px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",flexShrink:0}}><Ic name="check" s={14}/></span>
                  <span className="display" style={{fontSize:"17px",letterSpacing:".01em"}}>Poly Concreting</span>
                </div>
                <p style={{fontSize:"clamp(15px,1.35vw,19px)",lineHeight:1.65,color:"var(--text)",margin:0}}>{cur.poly}</p>
              </div>
            </div>
            {/* VS divider */}
            <div className="why-vs-col" style={{display:"flex",alignItems:"center",justifyContent:"center",width:"48px",background:"var(--base-2)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)",flexShrink:0}}>
              <span className="mono" style={{fontSize:"11px",letterSpacing:".12em",color:"var(--faint)",writingMode:"vertical-rl",textOrientation:"mixed"}}>VS</span>
            </div>
            {/* Them card */}
            <div key={"t"+i} className="rise why-them-col" style={{background:"rgba(12,12,14,.6)",border:"1px solid var(--line)",borderRadius:"0 var(--r-lg) var(--r-lg) 0",padding:"clamp(24px,2.6vw,40px)",opacity:.7}}>
              <div style={{display:"flex",alignItems:"center",gap:"10px",marginBottom:"20px"}}>
                <span style={{width:"28px",height:"28px",borderRadius:"50%",border:"1px solid var(--line-3)",color:"var(--faint)",display:"grid",placeItems:"center",flexShrink:0}}><Ic name="x" s={13}/></span>
                <span className="mono" style={{fontSize:"12px",letterSpacing:".12em",textTransform:"uppercase",color:"var(--faint)"}}>The other guy</span>
              </div>
              <p style={{fontSize:"clamp(14px,1.25vw,17px)",lineHeight:1.65,color:"var(--faint)",margin:0,fontStyle:"italic"}}>{cur.them}</p>
            </div>
          </div>
        </div>
        <Rv d="2" style={{marginTop:"clamp(36px,4vw,56px)",display:"flex",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
          <a href="Quote.html" className="btn btn--solid btn--lg">Get a free quote <Ar d="e"/></a>
          <a href={`tel:${PD.phone.replace(/\s/g,"")}`} className="btn btn--ghost">Call Angelo — {PD.phone}</a>
        </Rv>
      </div>
    </section>
  );
}

/* ====================== SECTION 4 — FEATURED PROJECTS ====================== */
function Projects({ onQuote }){
  const [f,setF]=React.useState("All");
  const list = PD.projects.filter(p=> f==="All" || (Array.isArray(p.cat) ? p.cat.includes(f) : p.cat===f));
  return (
    <section id="projects" className="section section--tight" style={{background:"var(--base-2)",borderTop:"1px solid var(--line)"}}>
      <div className="wrap">
        <Rv style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",flexWrap:"wrap"}}>
          <Eb n="04">Featured work</Eb>
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap"}}>
            {PD.projectFilters.map(ff=>(
              <button key={ff} onClick={()=>setF(ff)} className="mono"
                style={{fontSize:"11px",letterSpacing:".1em",textTransform:"uppercase",padding:"7px 13px",borderRadius:"40px",cursor:"pointer",
                  border:`1px solid ${f===ff?"var(--text)":"var(--line-2)"}`,
                  background: f===ff?"var(--text)":"transparent", color: f===ff?"#0a0a0b":"var(--muted)",transition:"all .25s"}}>{ff}</button>
            ))}
          </div>
          <a className="link-sweep" href="Projects.html" style={{flexShrink:0,fontSize:"14px"}}>View all projects <Ar d="e"/></a>
        </Rv>
        <div className="proj-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(12px,1.2vw,18px)",marginTop:"20px"}}>
          {list.map((p,idx)=> <ProjectCard key={p.id} p={p} d={String(idx%3)} feature={false}/> )}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ p, d, feature }){
  const [h,setH]=React.useState(false);
  return (
    <Rv d={d} className="proj-card" style={{gridColumn: feature?"1 / -1":"auto"}}>
      <a href={`Projects.html#${p.id}`} onMouseEnter={()=>setH(true)} onMouseLeave={()=>setH(false)}
        style={{display:"block",position:"relative",borderRadius:"var(--r-lg)",overflow:"hidden",border:"1px solid var(--line)",background:"var(--panel)"}}>
        <div style={{position:"relative",aspectRatio:"16/9",overflow:"hidden"}}>
          <Im label={`${p.cat.toUpperCase()} — ${p.loc.toUpperCase()}`} src={p.img} pos={p.pos||"center"} style={{position:"absolute",inset:0,transform:h?"scale(1.05)":"scale(1)",transition:"transform .8s var(--ease-out)"}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.88) 4%,rgba(8,8,10,.1) 55%,transparent)"}}></div>
          {/* top row */}
          <div style={{position:"absolute",top:"12px",left:"12px",right:"12px",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
            <span className="mono" style={{fontSize:"9.5px",letterSpacing:".12em",textTransform:"uppercase",background:"rgba(8,8,10,.55)",backdropFilter:"blur(6px)",border:"1px solid var(--line-2)",borderRadius:"40px",padding:"5px 10px"}}>{Array.isArray(p.cat) ? p.cat[0] : p.cat}</span>
            <span className="mono" style={{fontSize:"9.5px",letterSpacing:".1em",color:"var(--muted)"}}>{p.year}</span>
          </div>
          {/* bottom content */}
          <div style={{position:"absolute",left:0,right:0,bottom:0,padding:"clamp(12px,1.4vw,18px)"}}>
            <div style={{display:"flex",alignItems:"center",gap:"6px",color:"var(--muted)"}}>
              <Ic name="pin" s={12}/><span className="mono" style={{fontSize:"10.5px",letterSpacing:".06em"}}>{p.loc}</span>
            </div>
            <h3 className="display" style={{fontSize:"clamp(16px,1.6vw,22px)",margin:"6px 0 0"}}>{p.title}</h3>
          </div>
        </div>
      </a>
    </Rv>
  );
}

/* ====================== SECTION 5 — PROCESS ====================== */
function Process(){
  const [s,setS]=React.useState(0);
  const steps = PD.process;
  return (
    <section id="process" className="section--tight">
      <div className="wrap">
        <SectionHead n="05" kicker="How we work" title={<>Seven steps. No surprises.</>}
          sub="The same sequence on every job. Click through the program."/>
        <div className="proc-wrap" style={{marginTop:"clamp(28px,3.5vw,48px)"}}>
          {/* stepper track */}
          <div className="proc-track" style={{display:"grid",gridTemplateColumns:`repeat(${steps.length},1fr)`,gap:"0",position:"relative"}}>
            <div style={{position:"absolute",top:"19px",left:"4%",right:"4%",height:"1px",background:"var(--line-2)"}}></div>
            <div style={{position:"absolute",top:"19px",left:"4%",height:"1px",background:"var(--chrome)",width:`calc(${(s/(steps.length-1))*92}%)`,transition:"width .5s var(--ease-out)"}}></div>
            {steps.map((st,idx)=>(
              <button key={st.n} onClick={()=>setS(idx)} style={{background:"none",border:"none",cursor:"pointer",display:"flex",flexDirection:"column",alignItems:"center",gap:"10px",padding:"0",position:"relative",zIndex:2}}>
                <span style={{width:"36px",height:"36px",borderRadius:"50%",display:"grid",placeItems:"center",
                  background: idx<=s?"var(--chrome)":"var(--panel)", color: idx<=s?"#0a0a0b":"var(--faint)",
                  border:`1px solid ${idx<=s?"transparent":"var(--line-2)"}`,transition:"all .35s",
                  fontFamily:"var(--font-mono)",fontSize:"12px",fontWeight:600}}>{st.n}</span>
                <span className="mono proc-label" style={{fontSize:"10px",letterSpacing:".08em",textTransform:"uppercase",color: idx===s?"var(--text)":"var(--faint)",transition:"color .3s",textAlign:"center"}}>{st.t}</span>
              </button>
            ))}
          </div>
          {/* detail */}
          <div key={s} className="rise proc-detail" style={{marginTop:"clamp(24px,3vw,40px)",display:"grid",gridTemplateColumns:"1fr 1.1fr",gap:"clamp(20px,3.5vw,44px)",alignItems:"center"}}>
            <div>
              <div className="display chrome-text" style={{fontSize:"clamp(44px,6vw,88px)",lineHeight:1,overflow:"visible"}}>{steps[s].n}</div>
              <h3 className="display" style={{fontSize:"clamp(22px,2.4vw,34px)",margin:"10px 0 0"}}>{steps[s].t}</h3>
              <p style={{margin:"12px 0 0",color:"var(--muted)",fontSize:"clamp(14px,1.2vw,17px)",maxWidth:"46ch"}}>{steps[s].d}</p>
              <div style={{display:"flex",gap:"10px",marginTop:"20px"}}>
                <button className="btn btn--ghost" onClick={()=>setS(Math.max(0,s-1))} disabled={s===0} style={{opacity:s===0?.4:1}}>Prev</button>
                <button className="btn btn--solid" onClick={()=>setS(Math.min(steps.length-1,s+1))} disabled={s===steps.length-1} style={{opacity:s===steps.length-1?.4:1}}>Next step <Ar d="e"/></button>
              </div>
            </div>
            <div style={{position:"relative",aspectRatio:"4/3",borderRadius:"var(--r-lg)",overflow:"hidden",border:"1px solid var(--line)"}}>
              <Im label={`STEP ${steps[s].n} — ${steps[s].t.toUpperCase()}`} src={steps[s].img} style={{position:"absolute",inset:0}}/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

window.PC_S = { TatauBand, SectionHead, Metrics, WhyPoly, Projects, Process };
