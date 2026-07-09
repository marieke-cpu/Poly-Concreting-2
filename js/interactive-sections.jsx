/* Poly Concreting — Interactive homepage sections */
const { Reveal:IR, Ph:IPh, Eyebrow:IEb, Arrow:IAr, Icon:IIc } = window.PC_UI;
const SVC = window.PC_SERVICES;
const SD  = window.PC_DATA;

const SVC_SLUGS = {driveways:"driveways",slabs:"slabs",pathways:"pathways",patios:"outdoor",pools:"pools",commercial:"commercial",resurfacing:"resurfacing",trowel:"trowel",broom:"broom",swirl:"swirl",exposed:"exposedaggregate",coloured:"coloured",stamped:"stamped",covercrete:"covercrete"};
const svcHref = id => SVC_SLUGS[id] || id;
const JOB_TYPES = SVC.slice(0,6);  /* driveways → commercial */
const STANDARD_FINISHES = ["broom", "trowel", "swirl"].map(id => SVC.find(s => s.id === id)).filter(Boolean);
const DECORATIVE_FINISHES = ["exposed", "coloured", "stamped", "covercrete"].map(id => SVC.find(s => s.id === id)).filter(Boolean);
const FINISHES = [...STANDARD_FINISHES, ...DECORATIVE_FINISHES];

/* ═══════════════════════════════════════════════════════════════
   A — WHAT ARE YOU BUILDING?  (job configurator)
═══════════════════════════════════════════════════════════════ */
function JobConfigurator({ onQuote }){
  const [active,setActive] = React.useState(0);
  const cur = JOB_TYPES[active];

  return (
    <section className="section--tight" style={{
      background:"var(--panel)",
      borderTop:"1px solid var(--line)",
      borderBottom:"1px solid var(--line)",
    }}>
      <div className="wrap">
        <IR><IEb>What are you building?</IEb></IR>
        <IR d="1" as="h2" className="display" style={{
          fontSize:"clamp(32px,4.5vw,70px)",margin:"16px 0 0",lineHeight:.92,
        }}>
          Find the right solution<br/>for your site.
        </IR>

        {/* job cards */}
        <div className="jc-card-grid">
          {JOB_TYPES.map((s,i)=>(
            <button
              key={s.id}
              type="button"
              onClick={()=>setActive(i)}
              className={`jc-card ${active===i ? "jc-card--active" : ""}`}
              aria-pressed={active===i}
              aria-label={`Show ${s.short} concrete options`}
            >
              <span
                className="jc-card-photo"
                aria-hidden="true"
                style={{backgroundImage:`url("${s.hero}")`,backgroundPosition:s.pos||"center"}}
              />
              <span className="jc-card-overlay" aria-hidden="true" />
              <span className="jc-card-content">
                <span className="jc-card-kicker mono">{String(i+1).padStart(2,"0")}</span>
                <span className="jc-card-title display">{s.short}</span>
              </span>
            </button>
          ))}
        </div>

        {/* animated detail panel */}
        <div key={cur.id} className="rise jc-detail" style={{
          display:"grid",
          gridTemplateColumns:"minmax(0,1fr) minmax(0,1fr)",
          gap:"0",
          marginTop:"clamp(20px,2.8vw,32px)",
          background:"var(--base)",
          border:"1px solid var(--line)",
          borderRadius:"var(--r-lg)",
          overflow:"hidden",
          minHeight:"clamp(280px,32vw,400px)",
        }}>
          {/* photo */}
          <div className="jc-photo" style={{position:"relative"}}>
            <IPh label={null} src={cur.hero} pos={cur.pos||"center"}
              style={{position:"absolute",inset:0}}/>
            <div style={{
              position:"absolute",inset:0,
              background:"linear-gradient(90deg,transparent 55%,rgba(8,8,10,.7))",
            }}/>
            {/* stat pills */}
            <div style={{
              position:"absolute",bottom:"clamp(16px,2vw,24px)",left:"clamp(16px,2vw,24px)",
              display:"flex",gap:"6px",flexWrap:"wrap",
            }}>
              {cur.stat.map(s=>(
                <span key={s} className="mono" style={{
                  fontSize:"10px",letterSpacing:".07em",
                  background:"rgba(8,8,10,.7)",backdropFilter:"blur(6px)",
                  border:"1px solid var(--line-2)",
                  color:"var(--text)",padding:"4px 10px",borderRadius:"40px",
                }}>{s}</span>
              ))}
            </div>
          </div>

          {/* content */}
          <div style={{padding:"clamp(28px,3.5vw,48px)"}}>
            <h3 className="display" style={{
              fontSize:"clamp(22px,2.6vw,38px)",lineHeight:.93,margin:0,
            }}>{cur.name}</h3>
            <p style={{
              margin:"14px 0 0",color:"var(--muted)",
              fontSize:"clamp(13px,1.1vw,16px)",lineHeight:1.65,maxWidth:"36ch",
            }}>{cur.intro}</p>
            <div style={{display:"flex",flexDirection:"column",gap:"10px",marginTop:"20px"}}>
              {cur.benefits.slice(0,3).map(b=>(
                <div key={b.t} style={{display:"flex",alignItems:"flex-start",gap:"10px"}}>
                  <span style={{
                    width:"20px",height:"20px",borderRadius:"50%",flexShrink:0,
                    border:"1px solid var(--line-2)",display:"grid",placeItems:"center",
                    marginTop:"1px",color:"var(--muted)",
                  }}><IIc name="check" s={11}/></span>
                  <span style={{fontSize:"14px",color:"var(--text)",lineHeight:1.4}}>{b.t}</span>
                </div>
              ))}
            </div>
            <div style={{display:"flex",gap:"10px",marginTop:"clamp(20px,2.5vw,28px)",flexWrap:"wrap"}}>
              <button className="btn btn--solid" onClick={onQuote}>
                Quote my {cur.short.toLowerCase()} <IAr/>
              </button>
              <a href={svcHref(cur.id)}
                className="btn btn--ghost">
                Learn more <IAr/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════════
   B — SEE IT BEFORE WE POUR IT  (finish visualiser)
═══════════════════════════════════════════════════════════════ */
function FinishVisualiser(){
  const [active,setActive] = React.useState(3); /* default: exposed aggregate */
  const cur = FINISHES[active];

  return (
    <section className="section--tight" style={{
      background:"var(--ink)",
      borderTop:"1px solid var(--line)",
      borderBottom:"1px solid var(--line)",
    }}>
      <div className="wrap">
        <IR><IEb>Choose your finish</IEb></IR>
        <IR d="1">
          <div style={{
            display:"flex",alignItems:"flex-end",
            justifyContent:"space-between",gap:"20px",flexWrap:"wrap",
            marginTop:"16px",
          }}>
            <h2 className="display" style={{
              fontSize:"clamp(32px,4.5vw,70px)",lineHeight:.92,margin:0,
            }}>
              See it before<br/>we pour it.
            </h2>
            <p style={{
              color:"var(--muted)",fontSize:"clamp(13px,1.1vw,16px)",
              maxWidth:"40ch",lineHeight:1.6,margin:0,
            }}>
              Every finish can go on driveways, patios, paths and pool surrounds. Click any option to see real site photos.
            </p>
          </div>
        </IR>
      </div>

      {/* full-width interactive panel */}
      <div className="fv-panel" style={{
        display:"grid",
        gridTemplateColumns:"clamp(180px,18vw,240px) 1fr",
        marginTop:"clamp(24px,3vw,36px)",
        height:"clamp(360px,44vw,540px)",
        borderTop:"1px solid var(--line)",
        borderBottom:"1px solid var(--line)",
      }}>
        {/* left list */}
        <div className="fv-list" style={{
          borderRight:"1px solid var(--line)",
          display:"flex",flexDirection:"column",
          overflowY:"auto",scrollbarWidth:"none",
          background:"var(--base)",
        }}>
          {/* standard */}
          <div className="mono" style={{
            fontSize:"9.5px",letterSpacing:".18em",color:"var(--faint)",
            padding:"12px 16px 8px",borderBottom:"1px solid var(--line)",
          }}>STANDARD</div>
          {STANDARD_FINISHES.map((f,i)=>(
            <FinishTab key={f.id} f={f} active={active===i} onClick={()=>setActive(i)}/>
          ))}
          {/* decorative */}
          <div className="mono" style={{
            fontSize:"9.5px",letterSpacing:".18em",color:"var(--faint)",
            padding:"12px 16px 8px",borderBottom:"1px solid var(--line)",
          }}>DECORATIVE</div>
          {DECORATIVE_FINISHES.map((f,i)=>(
            <FinishTab key={f.id} f={f} active={active===i+STANDARD_FINISHES.length} onClick={()=>setActive(i+STANDARD_FINISHES.length)}/>
          ))}
        </div>

        {/* right photo */}
        <div key={cur.id} className="rise fv-photo" style={{position:"relative",overflow:"hidden"}}>
          <IPh label={null} src={cur.hero} pos={cur.pos||"center"}
            style={{position:"absolute",inset:0}}/>
          <div style={{
            position:"absolute",inset:0,
            background:"linear-gradient(0deg,rgba(8,8,10,.95) 0%,rgba(8,8,10,.5) 38%,rgba(8,8,10,.1) 70%)",
          }}/>
          <div style={{
            position:"absolute",bottom:0,left:0,right:0,
            padding:"clamp(24px,3vw,44px)",
          }}>
            <div className="mono" style={{fontSize:"10px",letterSpacing:".14em",color:"var(--muted)"}}>
              FINISH
            </div>
            <h3 className="display" style={{
              fontSize:"clamp(26px,3.2vw,52px)",margin:"8px 0 0",lineHeight:.93,
            }}>{cur.name}</h3>
            <p style={{
              margin:"12px 0 0",color:"var(--muted)",
              fontSize:"clamp(13px,1.1vw,15px)",maxWidth:"52ch",lineHeight:1.6,
            }}>{cur.intro}</p>
            <a href={svcHref(cur.id)}
              className="btn btn--ghost"
              style={{marginTop:"18px",display:"inline-flex"}}>
              View full details <IAr/>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinishTab({ f, active, onClick }){
  return (
    <button onClick={onClick} style={{
      textAlign:"left",
      padding:"14px 16px",
      background:active?"rgba(255,255,255,.06)":"transparent",
      border:"none",
      borderBottom:"1px solid var(--line)",
      borderLeft:`3px solid ${active?"var(--chrome)":"transparent"}`,
      cursor:"pointer",transition:"all .2s",width:"100%",
    }}>
      <div style={{
        fontWeight:600,fontSize:"14px",
        color:active?"var(--text)":"var(--muted)",
        transition:"color .2s",
      }}>{f.name}</div>
    </button>
  );
}

/* ═══════════════════════════════════════════════════════════════
   C — PROJECT REEL  (drag-scroll horizontal gallery)
═══════════════════════════════════════════════════════════════ */
function ProjectReel({ onQuote }){
  const projects = SD.projects;
  const trackRef = React.useRef(null);
  const state    = React.useRef({ down:false, startX:0, scrollLeft:0, moved:false });
  const [dragging,setDragging] = React.useState(false);

  const start=(clientX)=>{
    const el=trackRef.current; if(!el) return;
    state.current={ down:true, startX:clientX-el.offsetLeft, scrollLeft:el.scrollLeft, moved:false };
    setDragging(false);
    document.body.style.userSelect="none";
  };
  const move=(clientX)=>{
    const s=state.current; if(!s.down) return;
    const x=clientX-trackRef.current.offsetLeft;
    const walk=(x-s.startX)*1.5;
    if(Math.abs(walk)>5){ s.moved=true; setDragging(true); }
    trackRef.current.scrollLeft=s.scrollLeft-walk;
  };
  const end=()=>{ state.current.down=false; document.body.style.userSelect=""; };

  React.useEffect(()=>{
    window.addEventListener("mouseup",end);
    window.addEventListener("touchend",end);
    return()=>{ window.removeEventListener("mouseup",end); window.removeEventListener("touchend",end); };
  },[]);

  return (
    <section className="section--tight" style={{
      background:"var(--panel-2)",
      borderTop:"1px solid var(--line)",
      borderBottom:"1px solid var(--line)",
      overflow:"hidden",
    }}>
      <div className="wrap" style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",gap:"20px",flexWrap:"wrap"}}>
        <div>
          <IR><IEb>Our work</IEb></IR>
          <IR d="1" as="h2" className="display" style={{
            fontSize:"clamp(32px,4.5vw,70px)",margin:"16px 0 0",lineHeight:.92,
          }}>
            Built across SEQ.
          </IR>
        </div>
        <IR d="2" style={{display:"flex",alignItems:"center",gap:"clamp(14px,2vw,24px)"}}>
          <span className="mono" style={{
            fontSize:"11px",letterSpacing:".1em",color:"var(--faint)",
            display:"flex",alignItems:"center",gap:"8px",
          }}>
            <svg width="18" height="10" viewBox="0 0 18 10" fill="none" stroke="currentColor" strokeWidth="1.3">
              <path d="M1 5h16M11 1l5 4-5 4M7 1L2 5l5 4"/>
            </svg>
            DRAG TO EXPLORE
          </span>
          <a href="Projects" className="btn btn--ghost" style={{fontSize:"12px"}}>
            All projects <IAr/>
          </a>
        </IR>
      </div>

      {/* reel track */}
      <div
        ref={trackRef}
        onMouseDown={e=>start(e.pageX)}
        onMouseMove={e=>move(e.pageX)}
        onTouchStart={e=>start(e.touches[0].clientX)}
        onTouchMove={e=>move(e.touches[0].clientX)}
        style={{
          display:"flex",
          gap:"12px",
          overflowX:"auto",
          scrollbarWidth:"none",
          cursor:dragging?"grabbing":"grab",
          padding:`clamp(24px,3vw,36px) clamp(20px,5vw,80px) clamp(24px,3vw,36px)`,
          WebkitOverflowScrolling:"touch",
        }}
      >
        {projects.map((p,i)=>(
          <ReelCard key={p.id} p={p} i={i} dragging={dragging}/>
        ))}
        {/* trailing CTA card */}
        <div style={{
          flexShrink:0,
          width:"clamp(220px,22vw,280px)",
          height:"clamp(240px,24vw,320px)",
          borderRadius:"var(--r-lg)",
          border:"1px solid var(--line-2)",
          display:"flex",flexDirection:"column",
          alignItems:"center",justifyContent:"center",
          gap:"16px",padding:"32px",
          background:"var(--base)",
        }}>
          <div className="display" style={{fontSize:"clamp(18px,2vw,26px)",textAlign:"center",lineHeight:1.1}}>
            Want to see your job here?
          </div>
          <button className="btn btn--solid" onClick={onQuote} style={{width:"100%",justifyContent:"center"}}>
            Get a quote <IAr/>
          </button>
          <a href="Projects" className="btn btn--ghost" style={{width:"100%",justifyContent:"center",fontSize:"12px"}}>
            All projects <IAr/>
          </a>
        </div>
      </div>
    </section>
  );
}

function ReelCard({ p, i, dragging }){
  const [hov,setHov]=React.useState(false);
  return (
    <div
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        flexShrink:0,
        position:"relative",
        width:"clamp(260px,26vw,360px)",
        height:"clamp(240px,24vw,320px)",
        borderRadius:"var(--r-lg)",
        overflow:"hidden",
        border:`1px solid ${hov?"var(--line-3)":"var(--line)"}`,
        transition:"border-color .3s, transform .3s var(--ease-out)",
        transform:hov&&!dragging?"translateY(-5px)":"none",
      }}
    >
      <IPh label={null} src={p.img} pos={p.pos||"center"} style={{position:"absolute",inset:0}}/>
      <div style={{
        position:"absolute",inset:0,
        background:hov
          ?"linear-gradient(0deg,rgba(8,8,10,.97) 0%,rgba(8,8,10,.55) 52%,rgba(8,8,10,.15))"
          :"linear-gradient(0deg,rgba(8,8,10,.92) 0%,rgba(8,8,10,.3) 55%,rgba(8,8,10,.05))",
        transition:"background .4s",
      }}/>
      {/* index chip */}
      <div className="mono" style={{
        position:"absolute",top:"14px",left:"14px",
        fontSize:"10px",letterSpacing:".12em",color:"var(--faint)",
        background:"rgba(8,8,10,.65)",backdropFilter:"blur(6px)",
        padding:"4px 10px",borderRadius:"40px",
        border:"1px solid var(--line)",
      }}>{String(i+1).padStart(2,"0")}</div>
      {/* category chip */}
      <div className="mono" style={{
        position:"absolute",top:"14px",right:"14px",
        fontSize:"10px",letterSpacing:".08em",color:"var(--muted)",
        background:"rgba(8,8,10,.65)",backdropFilter:"blur(6px)",
        padding:"4px 10px",borderRadius:"40px",
        border:"1px solid var(--line)",
      }}>{p.cat}</div>
      {/* info */}
      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"clamp(14px,1.8vw,20px)"}}>
        <div className="mono" style={{fontSize:"10px",letterSpacing:".1em",color:"var(--muted)",marginBottom:"6px"}}>
          {p.loc} · {p.year}
        </div>
        <h4 className="display" style={{
          fontSize:"clamp(15px,1.5vw,19px)",lineHeight:.95,margin:0,
        }}>{p.title}</h4>
        <div style={{display:"flex",flexWrap:"wrap",gap:"5px",marginTop:"8px"}}>
          {p.stat.map(s=>(
            <span key={s} className="mono" style={{
              fontSize:"9.5px",letterSpacing:".05em",color:"var(--faint)",
              background:"rgba(255,255,255,.05)",border:"1px solid var(--line)",
              padding:"3px 7px",borderRadius:"40px",
            }}>{s}</span>
          ))}
        </div>
        <div style={{
          marginTop:"10px",fontSize:"11px",letterSpacing:".1em",
          fontFamily:"var(--font-mono)",color:"var(--muted)",
          display:"flex",alignItems:"center",gap:"5px",
          opacity:hov?1:0,transform:hov?"translateY(0)":"translateY(4px)",
          transition:"opacity .25s,transform .25s",
        }}>VIEW PROJECT <IAr/></div>
      </div>
    </div>
  );
}

window.PC_INTERACTIVE = { JobConfigurator, FinishVisualiser, ProjectReel };
