/* Poly Concreting — Concrete Driveways conversion page */
const { Reveal:SR, Ph:SPh, Eyebrow:SEb, Arrow:SAr, Icon:SIc } = window.PC_UI;
const SVC = window.PC_SERVICES;
const SD  = window.PC_DATA;
const SNav    = window.PC_HERO.Nav;
const SFooter = window.PC_S2.Footer;

const DRV = SVC.find(s=>s.id==="driveways");
const byServiceId = id => SVC.find(s=>s.id===id);
const STD_FINISHES = ["broom","trowel","swirl"].map(byServiceId).filter(Boolean);
const DEC_FINISHES = ["exposed","coloured","stamped","covercrete"].map(byServiceId).filter(Boolean);

/* ── small finish card ── */
function FinishCard({ s }){
  const [hov,setHov]=React.useState(false);
  return (
    <a
      href={`service-detail#${s.id}`}
      onMouseEnter={()=>setHov(true)}
      onMouseLeave={()=>setHov(false)}
      style={{
        display:"flex",flexDirection:"column",position:"relative",
        borderRadius:"var(--r-lg)",overflow:"hidden",
        minHeight:"clamp(160px,16vw,200px)",
        border:`1px solid ${hov?"var(--line-3)":"var(--line)"}`,
        textDecoration:"none",
        transition:"border-color .3s, transform .3s var(--ease-out)",
        transform:hov?"translateY(-3px)":"none",
      }}
    >
      <SPh label={null} src={s.hero} pos={s.pos} style={{position:"absolute",inset:0}}/>
      <div style={{
        position:"absolute",inset:0,
        background:hov
          ?"linear-gradient(0deg,rgba(8,8,10,.98) 28%,rgba(8,8,10,.6) 65%,rgba(8,8,10,.2))"
          :"linear-gradient(0deg,rgba(8,8,10,.95) 28%,rgba(8,8,10,.45) 65%,rgba(8,8,10,.1))",
        transition:"background .4s",
      }}/>
      <div style={{position:"relative",marginTop:"auto",padding:"clamp(14px,1.6vw,20px)"}}>
        <div className="display" style={{fontSize:"clamp(15px,1.4vw,18px)",lineHeight:.95}}>{s.name}</div>
        <div style={{
          marginTop:"8px",display:"flex",alignItems:"center",gap:"5px",
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

/* ── faq accordion ── */
function FAQList({ faqs }){
  const [open,setOpen]=React.useState(0);
  return (
    <div style={{borderTop:"1px solid var(--line)"}}>
      {faqs.map((f,i)=>(
        <div key={i} style={{borderBottom:"1px solid var(--line)"}}>
          <button onClick={()=>setOpen(open===i?-1:i)} style={{
            width:"100%",textAlign:"left",background:"none",border:"none",cursor:"pointer",
            padding:"22px 0",display:"flex",justifyContent:"space-between",alignItems:"center",
            gap:"20px",color:"var(--text)",
          }}>
            <span style={{fontSize:"clamp(15px,1.3vw,18px)",fontWeight:600,letterSpacing:".005em"}}>{f.q}</span>
            <span style={{
              flexShrink:0,width:"30px",height:"30px",borderRadius:"50%",
              border:"1px solid var(--line-2)",display:"grid",placeItems:"center",
              transition:"transform .3s",transform:open===i?"rotate(45deg)":"none",color:"var(--muted)",
            }}>
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

/* ── sticky quote bar ── */
function StickyBar({ onQuote }){
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
        <span style={{fontSize:"15px",fontWeight:600}}>Get a fixed quote on your driveway</span>
        <span className="mono" style={{
          fontSize:"11px",color:"var(--muted)",marginLeft:"14px",letterSpacing:".07em",
        }}>SAME-DAY REPLY · NO OBLIGATION</span>
      </div>
      <div style={{display:"flex",gap:"10px",flexShrink:0}}>
        <button className="btn btn--solid" onClick={onQuote}>Free quote <SAr/></button>
        <a className="btn btn--ghost" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
          <SIc name="phone" s={15}/> {SD.phone}
        </a>
      </div>
    </div>
  );
}

/* ── review card ── */
function ReviewCard({ t }){
  return (
    <div style={{
      flexShrink:0,width:"clamp(280px,30vw,360px)",
      background:"var(--base)",border:"1px solid var(--line)",
      borderRadius:"var(--r-lg)",padding:"clamp(20px,2.2vw,28px)",
      display:"flex",flexDirection:"column",gap:"12px",
    }}>
      <div style={{display:"flex",gap:"2px"}}>
        {Array(5).fill(0).map((_,k)=>(
          <svg key={k} width="13" height="13" viewBox="0 0 14 14" fill="#f5c542">
            <path d="M7 1l1.8 3.6L13 5.2l-3 2.9.7 4.1L7 10.1l-3.7 2 .7-4.1-3-2.9 4.2-.6z"/>
          </svg>
        ))}
      </div>
      <p style={{margin:0,fontSize:"clamp(13px,1.1vw,15px)",lineHeight:1.65,color:"var(--text)",flex:1}}>"{t.q}"</p>
      <div style={{display:"flex",alignItems:"center",gap:"10px",paddingTop:"4px"}}>
        <div style={{width:"32px",height:"32px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
          <span style={{fontSize:"12px",fontWeight:700}}>{t.n[0]}</span>
        </div>
        <div>
          <div style={{fontSize:"13px",fontWeight:600}}>{t.n}</div>
          <div className="mono" style={{fontSize:"10px",color:"var(--muted)"}}>{t.r}</div>
        </div>
      </div>
    </div>
  );
}

function ReviewCarousel({ testimonials }){
  const [idx,setIdx]=React.useState(0);
  const trackRef=React.useRef(null);
  const VISIBLE=3;
  const max=Math.max(0,testimonials.length-VISIBLE);

  const scrollTo=(i)=>{
    const clamped=Math.max(0,Math.min(i,max));
    setIdx(clamped);
    const track=trackRef.current;
    if(!track) return;
    const card=track.children[clamped];
    if(card) track.scrollTo({left:card.offsetLeft,behavior:"smooth"});
  };

  React.useEffect(()=>{
    const track=trackRef.current;
    if(!track) return;
    const onScroll=()=>{
      const card=track.children[0];
      if(!card) return;
      setIdx(Math.round(track.scrollLeft/(card.offsetWidth+10)));
    };
    track.addEventListener("scroll",onScroll,{passive:true});
    return ()=>track.removeEventListener("scroll",onScroll);
  },[]);

  return (
    <div style={{position:"relative",marginTop:"clamp(24px,3vw,36px)"}}>
      <div ref={trackRef} className="drv-review-track" style={{
        display:"flex",gap:"10px",
        overflowX:"auto",scrollbarWidth:"none",
        padding:"4px var(--pad) clamp(20px,3vw,32px)",
        scrollSnapType:"x mandatory",
      }}>
        {testimonials.map((t,i)=>(
          <div key={i} style={{scrollSnapAlign:"start",flexShrink:0}}>
            <ReviewCard t={t}/>
          </div>
        ))}
      </div>
      {/* dot indicators */}
      <div style={{display:"flex",justifyContent:"center",gap:"7px",paddingBottom:"4px"}}>
        {Array(max+1).fill(0).map((_,i)=>(
          <button key={i} onClick={()=>scrollTo(i)} style={{
            width:i===idx?"22px":"7px",height:"7px",borderRadius:"40px",border:"none",cursor:"pointer",
            background:i===idx?"var(--chrome)":"var(--line-3)",
            transition:"all .3s var(--ease-out)",padding:0,
          }}/>
        ))}
      </div>
    </div>
  );
}

function ReviewCarouselControls({ testimonials }){
  return (
    <div style={{display:"flex",gap:"8px"}}>
      {[["‹","prev"],["›","next"]].map(([label,dir])=>(
        <button key={dir} onClick={()=>{
          const track=document.querySelector(".drv-review-track");
          if(!track) return;
          const card=track.children[0];
          const w=(card?.offsetWidth||280)+10;
          track.scrollBy({left:dir==="next"?w:-w,behavior:"smooth"});
        }} style={{
          width:"40px",height:"40px",borderRadius:"50%",
          border:"1px solid var(--line-2)",background:"transparent",
          color:"var(--text)",cursor:"pointer",fontSize:"20px",
          display:"grid",placeItems:"center",transition:"border-color .2s",
        }}>{label}</button>
      ))}
    </div>
  );
}

/* ── main ── */
function DrivewayApp(){
  const [quote,setQuote]=React.useState(false);
  const open=()=>setQuote(true);

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

  const testimonials = SD.testimonials;

  const failures=[
    {
      icon:"slab",
      prob:"Wrong base depth",
      probD:"Contractors skip excavation to save time. Six months later the slab sinks in the middle — and the contractor has moved on.",
      fix:"What we do",
      fixD:"Excavate to the correct depth, compact a stable sub-base, and order the truck only when the ground is ready.",
    },
    {
      icon:"path",
      prob:"No drainage plan",
      probD:"If falls aren't set before the pour, water runs toward your garage, your footings, or pools in the middle of the slab.",
      fix:"What we do",
      fixD:"We set out crossfall before formwork goes up. Every driveway we pour drains the way it's supposed to.",
    },
    {
      icon:"truck",
      prob:"Under-reinforced",
      probD:"F62 mesh flat on the ground gives almost no protection against load. Cars, caravans and delivery trucks are heavy — your concrete needs to handle it.",
      fix:"What we do",
      fixD:"Correct mesh grade on chairs to the right cover depth, every pour — not cut to save money on material.",
    },
  ];

  const pricingFactors=[
    {icon:"slab",     t:"Size & shape",       d:"Larger areas spread fixed costs further. Tight curves and island gardens add formwork time — we price the actual layout, not a rough m²."},
    {icon:"sparkle",  t:"Finish choice",       d:"Plain broom is the base rate. Exposed aggregate adds material and labour. We itemise the difference so you know exactly what you're paying for."},
    {icon:"truck",    t:"Site access",         d:"Straight truck access is ideal. If the truck can't reach the pour point we pump or barrow — that adds time. We assess this before quoting."},
    {icon:"path",     t:"Drainage & crossover",d:"Standard crossfall grading is included. Channel drains, pit connections and council crossover works are scoped and priced separately."},
  ];

  return (
    <div id="top">
      <SNav phone={SD.phone} onQuote={open}/>
      <StickyBar onQuote={open}/>
      <main>

        {/* ─── HERO ─────────────────────────────────────────── */}
        <section style={{
          position:"relative",minHeight:"100svh",
          display:"flex",alignItems:"flex-end",overflow:"hidden",
        }}>
          <SPh label={null} src="assets/img/agg-driveway.webp" pos="center 58%"
            style={{position:"absolute",inset:0}}/>
          <div style={{
            position:"absolute",inset:0,
            background:"linear-gradient(105deg,rgba(8,8,10,.97) 0%,rgba(8,8,10,.75) 42%,rgba(8,8,10,.3) 100%)",
          }}/>
          <div className="wrap" style={{
            position:"relative",width:"100%",
            paddingTop:"clamp(180px,22vh,220px)",paddingBottom:"clamp(70px,10vw,120px)",
          }}>
            <SR d="1" as="h1" className="display" style={{
              fontSize:"clamp(48px,8.5vw,128px)",lineHeight:.9,
              margin:0,maxWidth:"14ch",
            }}>
              The last driveway you'll ever <span className="chrome-text">pour.</span>
            </SR>
            <SR d="2" as="p" style={{
              margin:"28px 0 0",fontSize:"clamp(16px,1.4vw,21px)",
              color:"var(--text)",maxWidth:"44ch",lineHeight:1.6,
            }}>
              Reinforced, drained and finished to spec. Fixed price, one crew, across all of South East Queensland.
            </SR>
            <SR d="3" className="svc-cta-row" style={{display:"flex",gap:"12px",marginTop:"36px",flexWrap:"wrap"}}>
              <button className="btn btn--solid btn--lg" onClick={open}>
                Get a free quote <SAr/>
              </button>
              <a className="btn btn--ghost btn--lg" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                <SIc name="phone" s={16}/> {SD.phone}
              </a>
            </SR>
            <SR d="4">
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
          </div>
        </section>

        {/* ─── WHY DRIVEWAYS FAIL ───────────────────────────── */}
        <section className="section" style={{
          background:"var(--panel)",
          borderTop:"1px solid var(--line)",
          borderBottom:"1px solid var(--line)",
        }}>
          <div className="wrap">
            <SR><SEb n="01">The common mistakes</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,maxWidth:"18ch",
            }}>
              Most problems start before the concrete arrives.
            </SR>
            <SR d="2" as="p" style={{
              margin:"18px 0 0",color:"var(--muted)",
              fontSize:"clamp(15px,1.2vw,18px)",maxWidth:"50ch",lineHeight:1.65,
            }}>
              Bad driveways aren't usually a concrete problem — they're a preparation problem. Here's what goes wrong, and what we do instead.
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
              gap:"1px",background:"var(--line)",
              border:"1px solid var(--line)",
              marginTop:"clamp(36px,4vw,56px)",
            }}>
              {failures.map((item,i)=>(
                <SR key={i} d={String(i)}>
                  <div style={{background:"var(--base)",padding:"clamp(24px,2.6vw,36px)"}}>
                    <span style={{color:"var(--faint)"}}><SIc name={item.icon} s={24}/></span>
                    <div style={{
                      marginTop:"20px",padding:"14px 16px",borderRadius:"var(--r)",
                      background:"rgba(255,80,80,.05)",border:"1px solid rgba(255,80,80,.1)",
                    }}>
                      <div style={{
                        fontSize:"11px",fontWeight:700,color:"rgba(255,130,130,.75)",
                        letterSpacing:".05em",marginBottom:"6px",
                      }}>THE PROBLEM</div>
                      <div style={{fontWeight:600,fontSize:"15px",marginBottom:"6px"}}>{item.prob}</div>
                      <p style={{margin:0,fontSize:"13.5px",color:"var(--muted)",lineHeight:1.55}}>{item.probD}</p>
                    </div>
                    <div style={{
                      marginTop:"8px",padding:"14px 16px",borderRadius:"var(--r)",
                      background:"rgba(80,200,120,.04)",border:"1px solid rgba(80,200,120,.1)",
                    }}>
                      <div style={{
                        fontSize:"11px",fontWeight:700,color:"rgba(100,220,140,.7)",
                        letterSpacing:".05em",marginBottom:"6px",
                      }}>WHAT WE DO</div>
                      <p style={{margin:0,fontSize:"13.5px",color:"var(--muted)",lineHeight:1.55}}>{item.fixD}</p>
                    </div>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ─── WHAT YOU GET ────────────────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb n="02">What you get</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,
            }}>
              Built to last decades.
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",
              gap:"1px",background:"var(--line)",
              border:"1px solid var(--line)",
              marginTop:"clamp(28px,3.5vw,48px)",
            }}>
              {DRV.benefits.map((b,i)=>(
                <SR key={b.t} d={String(i)}>
                  <div style={{background:"var(--base)",padding:"clamp(24px,2.6vw,36px)"}}>
                    <span style={{color:"var(--text)"}}><SIc name={b.icon} s={26}/></span>
                    <h3 style={{margin:"18px 0 0",fontSize:"18px",fontWeight:700}}>{b.t}</h3>
                    <p style={{margin:"10px 0 0",color:"var(--muted)",fontSize:"15px",lineHeight:1.6}}>{b.d}</p>
                  </div>
                </SR>
              ))}
            </div>
            <SR d="4" className="svc-cta-row" style={{marginTop:"clamp(28px,3vw,40px)",display:"flex",gap:"12px",flexWrap:"wrap"}}>
              <button className="btn btn--solid btn--lg" onClick={open}>
                Quote my driveway <SAr/>
              </button>
              <a href="Projects" className="btn btn--ghost btn--lg">
                See our work <SAr/>
              </a>
            </SR>
          </div>
        </section>

        {/* ─── GALLERY ─────────────────────────────────────── */}
        <section className="section--tight" style={{
          background:"var(--panel)",
          borderTop:"1px solid var(--line)",
          borderBottom:"1px solid var(--line)",
        }}>
          <div className="wrap">
            <SR><SEb n="03">Recent work</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,
            }}>
              See the standard.
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill,minmax(clamp(200px,22vw,300px),1fr))",
              gap:"10px",
              marginTop:"clamp(24px,3vw,40px)",
            }}>
              {SD.projects.filter(p=> p.cat==="Driveways" || (Array.isArray(p.cat) && p.cat.includes("Driveways"))).map((p,i)=>(
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
            <SR d="3" style={{marginTop:"clamp(20px,2.5vw,32px)",textAlign:"center"}}>
              <a href="Projects" className="btn btn--ghost">View all projects <SAr/></a>
            </SR>
          </div>
        </section>

        {/* ─── PROCESS ─────────────────────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb n="04">How we do it</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,
            }}>
              Step by step.
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(200px,1fr))",
              gap:"clamp(20px,3vw,44px)",
              marginTop:"clamp(40px,5vw,64px)",
            }}>
              {DRV.steps.map((st,i)=>(
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

        {/* ─── FINISHES ────────────────────────────────────── */}
        <section className="section--tight" style={{
          background:"var(--panel-2)",
          borderTop:"1px solid var(--line)",
          borderBottom:"1px solid var(--line)",
        }}>
          <div className="wrap">
            <SR><SEb n="05">Surface options</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,
            }}>
              Choose your finish.
            </SR>
            <SR d="2" as="p" style={{
              margin:"14px 0 0",color:"var(--muted)",
              fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"50ch",lineHeight:1.6,
            }}>
              Every finish below can go on your driveway. Click any card for full details and examples, or tell us what you like and we'll advise what suits your property and street.
            </SR>

            <SR d="3">
              <div style={{
                display:"flex",alignItems:"center",gap:"20px",
                marginTop:"clamp(36px,4vw,52px)",
              }}>
                <div className="eyebrow">Standard Finishes</div>
                <div style={{flex:1,height:"1px",background:"var(--line)"}}/>
              </div>
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill,minmax(clamp(160px,18vw,210px),1fr))",
              gap:"clamp(8px,1vw,12px)",
              marginTop:"clamp(16px,2vw,22px)",
            }}>
              {STD_FINISHES.map((f,i)=>(
                <SR key={f.id} d={String(i)}><FinishCard s={f}/></SR>
              ))}
            </div>

            <SR d="6">
              <div style={{
                display:"flex",alignItems:"center",gap:"20px",
                marginTop:"clamp(28px,3.5vw,44px)",
              }}>
                <div className="eyebrow">Decorative Finishes</div>
                <div style={{flex:1,height:"1px",background:"var(--line)"}}/>
              </div>
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fill,minmax(clamp(160px,18vw,210px),1fr))",
              gap:"clamp(8px,1vw,12px)",
              marginTop:"clamp(16px,2vw,22px)",
            }}>
              {DEC_FINISHES.map((f,i)=>(
                <SR key={f.id} d={String(i)}><FinishCard s={f}/></SR>
              ))}
            </div>

            <SR d="10" style={{marginTop:"clamp(28px,3vw,40px)"}}>
              <div style={{
                background:"var(--base)",border:"1px solid var(--line-2)",
                borderRadius:"var(--r-lg)",padding:"clamp(20px,2.2vw,28px)",
                display:"flex",gap:"clamp(16px,2.5vw,32px)",
                alignItems:"center",flexWrap:"wrap",
              }}>
                <div style={{flex:1,minWidth:"200px"}}>
                  <p style={{margin:"0 0 4px",fontWeight:600,fontSize:"16px"}}>Not sure which finish suits your home?</p>
                  <p style={{margin:0,fontSize:"14px",color:"var(--muted)"}}>Tell us the style and we'll recommend what works with your street, driveway size and budget.</p>
                </div>
                <button className="btn btn--solid" onClick={open} style={{flexShrink:0}}>
                  Ask about finishes <SAr/>
                </button>
              </div>
            </SR>
          </div>
        </section>

        {/* ─── WHAT AFFECTS THE PRICE ──────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb n="06">Pricing</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,
            }}>
              What affects the cost.
            </SR>
            <SR d="2" as="p" style={{
              margin:"16px 0 0",color:"var(--muted)",
              fontSize:"clamp(14px,1.1vw,17px)",maxWidth:"52ch",lineHeight:1.65,
            }}>
              We give fixed quotes — not estimates. Here's what we look at when we put one together for you.
            </SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(240px,1fr))",
              gap:"clamp(12px,1.6vw,20px)",
              marginTop:"clamp(32px,4vw,52px)",
            }}>
              {pricingFactors.map((pf,i)=>(
                <SR key={i} d={String(i)}>
                  <div style={{
                    background:"var(--panel)",border:"1px solid var(--line)",
                    borderRadius:"var(--r-lg)",padding:"clamp(22px,2.4vw,30px)",
                  }}>
                    <span style={{color:"var(--text)"}}><SIc name={pf.icon} s={24}/></span>
                    <h4 style={{margin:"16px 0 0",fontSize:"17px",fontWeight:700}}>{pf.t}</h4>
                    <p style={{margin:"10px 0 0",color:"var(--muted)",fontSize:"14px",lineHeight:1.6}}>{pf.d}</p>
                  </div>
                </SR>
              ))}
            </div>
            <SR d="4" style={{marginTop:"clamp(28px,3vw,40px)"}}>
              <div style={{
                background:"var(--panel)",border:"1px solid var(--line-2)",
                borderRadius:"var(--r-lg)",padding:"clamp(22px,2.4vw,30px)",
                display:"flex",gap:"clamp(16px,2.5vw,40px)",
                alignItems:"center",flexWrap:"wrap",
              }}>
                <div style={{flex:1,minWidth:"200px"}}>
                  <p style={{margin:"0 0 4px",fontWeight:600,fontSize:"16px"}}>Want to know where your job sits?</p>
                  <p style={{margin:0,fontSize:"14px",color:"var(--muted)",maxWidth:"44ch"}}>
                    Give us the size, finish and site details — we'll come back with a locked price the same day.
                  </p>
                </div>
                <button className="btn btn--solid" onClick={open} style={{flexShrink:0}}>
                  Get a fixed quote <SAr/>
                </button>
              </div>
            </SR>
          </div>
        </section>

        {window.PC_REVIEWS && <window.PC_REVIEWS/>}

        {/* ─── FAQ ─────────────────────────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb n="08">Common questions</SEb></SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(32px,4.5vw,66px)",margin:"20px 0 0",lineHeight:.93,
            }}>
              Good to know.
            </SR>
            <div style={{marginTop:"clamp(28px,3.5vw,48px)",maxWidth:"800px"}}>
              <FAQList faqs={DRV.faqs}/>
            </div>
          </div>
        </section>

        {/* ─── FINAL CTA ───────────────────────────────────── */}
        <section style={{
          borderTop:"3px solid var(--chrome)",
          background:"var(--ink)",
          padding:"clamp(80px,11vw,130px) 0",
          position:"relative",overflow:"hidden",
        }}>
          <div style={{
            position:"absolute",inset:0,
            background:"radial-gradient(ellipse 55% 45% at 50% 100%,rgba(200,200,215,.07),transparent 70%)",
            pointerEvents:"none",
          }}/>
          <div className="wrap" style={{position:"relative",textAlign:"center"}}>
            <SR>
              <div className="mono" style={{
                fontSize:"11px",letterSpacing:".14em",color:"var(--muted)",
                marginBottom:"20px",
              }}>
                ⚡ LIMITED BOOKINGS AVAILABLE — FILL FAST
              </div>
            </SR>
            <SR d="1" as="h2" className="display" style={{
              fontSize:"clamp(44px,7.5vw,116px)",margin:"0",lineHeight:.9,
            }}>
              Get your fixed<br/><span className="chrome-text">quote today.</span>
            </SR>
            <SR d="2" as="p" style={{
              margin:"26px auto 0",color:"var(--muted)",
              fontSize:"clamp(16px,1.3vw,20px)",maxWidth:"44ch",lineHeight:1.65,
            }}>
              Tell us the size, the finish you're after and the site details. We'll come back with a locked price — same day. No obligation to proceed.
            </SR>
            <SR d="3" className="svc-cta-row" style={{
              display:"flex",gap:"14px",marginTop:"40px",
              justifyContent:"center",flexWrap:"wrap",
            }}>
              <button className="btn btn--solid btn--lg" onClick={open}>
                Get a free quote <SAr/>
              </button>
              <a className="btn btn--ghost btn--lg" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                <SIc name="phone" s={16}/> {SD.phone}
              </a>
            </SR>
            <SR d="4" style={{marginTop:"24px"}}>
              <div className="mono" style={{
                fontSize:"11px",letterSpacing:".1em",color:"var(--faint)",
              }}>
                FIXED PRICE · SAME-DAY REPLY · WRITTEN WORKMANSHIP WARRANTY
              </div>
            </SR>
          </div>
        </section>

      </main>
      <SFooter/>

      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<DrivewayApp/>);
