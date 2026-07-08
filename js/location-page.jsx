/* Poly Concreting — Location landing pages (shared component) */
const { Reveal:LR, Ph:LPh, Eyebrow:LEb, Arrow:LAr, Icon:LIc } = window.PC_UI;
const LD = window.PC_DATA;
const LL = window.PC_LOCATIONS;
const LNav    = window.PC_HERO.Nav;
const LFooter = window.PC_S2.Footer;

function getLocation(){
  const slug = document.getElementById("root").dataset.location;
  return LL.find(l=>l.id===slug) || LL[0];
}

function LocationPage(){
  const loc = getLocation();
  const [quote,setQuote] = React.useState(false);
  const [faqOpen,setFaqOpen] = React.useState(0);

  const nearby = LD.projects.filter(p=>
    loc.projectIds && loc.projectIds.includes(p.id)
  );

  return (
    <div id="top">
      <LNav phone={LD.phone} onQuote={()=>setQuote(true)}/>
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
            <LR><LEb n="—">{loc.region} · {loc.state}</LEb></LR>
            <LR d="1" as="h1" className="display" style={{fontSize:"clamp(44px,7.5vw,116px)",margin:"20px 0 0",lineHeight:.93}}>
              {loc.heading}
            </LR>
            <LR d="2">
              <div style={{display:"flex",gap:"clamp(28px,5vw,72px)",marginTop:"32px",alignItems:"flex-end",flexWrap:"wrap"}}>
                <p style={{margin:0,color:"var(--muted)",fontSize:"clamp(16px,1.35vw,20px)",maxWidth:"46ch",lineHeight:1.65}}>
                  {loc.tagline}
                </p>
                <div style={{display:"flex",gap:"12px",flexWrap:"wrap",flexShrink:0}}>
                  <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Get a free quote <LAr/></button>
                  <a className="btn btn--ghost btn--lg" href={`tel:${LD.phone.replace(/\s/g,"")}`}><LIc name="phone" s={16}/> {LD.phone}</a>
                </div>
              </div>
            </LR>
            <LR d="3">
              <div style={{display:"flex",marginTop:"clamp(44px,5vw,64px)",borderTop:"1px solid var(--line)",flexWrap:"wrap"}}>
                {LD.metrics.map((m,i)=>(
                  <div key={i} style={{flex:"1 1 120px",borderRight:i<LD.metrics.length-1?"1px solid var(--line)":"none",padding:"clamp(18px,2vw,26px) clamp(16px,2vw,28px)"}}>
                    <div className="display chrome-text" style={{fontSize:"clamp(24px,3vw,42px)",lineHeight:.95}}>{m.prefix||""}{m.value}{m.suffix}</div>
                    <div className="mono" style={{fontSize:"11px",letterSpacing:".06em",color:"var(--muted)",marginTop:"6px"}}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </LR>
          </div>
        </section>

        {/* ── INTRO ────────────────────────────────────── */}
        <section className="section">
          <div className="wrap">
            <div style={{display:"grid",gridTemplateColumns:"1.3fr .7fr",gap:"clamp(32px,5vw,80px)",alignItems:"start"}}>
              <div>
                <LR><LEb n="01">Why {loc.name}</LEb></LR>
                <LR d="1" as="h2" className="display" style={{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}}>
                  Local knowledge.<br/>Better concrete.
                </LR>
                <div style={{marginTop:"clamp(24px,3vw,36px)",display:"flex",flexDirection:"column",gap:"20px"}}>
                  {loc.intro.map((p,i)=>(
                    <LR key={i} d={String(i+2)} as="p" style={{fontSize:"clamp(16px,1.35vw,19px)",lineHeight:1.7,color:i===0?"var(--text)":"var(--muted)"}}>{p}</LR>
                  ))}
                </div>
              </div>
              <LR d="1" style={{position:"sticky",top:"100px"}}>
                <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(24px,2.6vw,36px)"}}>
                  <div className="mono" style={{fontSize:"10px",letterSpacing:".16em",color:"var(--faint)",marginBottom:"16px"}}>NEARBY SUBURBS WE SERVICE</div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"8px"}}>
                    {loc.nearbySuburbs.map(s=>(
                      <span key={s} className="mono" style={{fontSize:"12px",letterSpacing:".04em",color:"var(--muted)",border:"1px solid var(--line-2)",borderRadius:"40px",padding:"6px 12px"}}>{s}</span>
                    ))}
                  </div>
                  <div style={{marginTop:"22px",paddingTop:"18px",borderTop:"1px solid var(--line)"}}>
                    <button className="btn btn--solid" style={{width:"100%",justifyContent:"center"}} onClick={()=>setQuote(true)}>
                      Get a free quote in {loc.name} <LAr/>
                    </button>
                  </div>
                </div>
              </LR>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────── */}
        <section className="section" style={{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <LR><LEb n="02">What we do in {loc.name}</LEb></LR>
            <LR d="1" as="h2" className="display" style={{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}}>
              Every concrete job,<br/>done right.
            </LR>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"clamp(10px,1.2vw,14px)",marginTop:"clamp(32px,4vw,52px)"}}>
              {loc.services.map((svc,i)=>(
                <LR key={svc.name} d={String(i)}>
                  <a href={svc.href} style={{display:"block",background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(22px,2.4vw,32px)",textDecoration:"none",transition:"border-color .25s"}}
                    onMouseEnter={e=>e.currentTarget.style.borderColor="var(--line-3)"}
                    onMouseLeave={e=>e.currentTarget.style.borderColor="var(--line)"}>
                    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"12px",marginBottom:"12px"}}>
                      <h3 className="display" style={{fontSize:"clamp(18px,1.7vw,22px)",lineHeight:1,margin:0}}>{svc.name}</h3>
                      <LAr/>
                    </div>
                    <p style={{margin:0,fontSize:"14px",color:"var(--muted)",lineHeight:1.6}}>{svc.desc}</p>
                  </a>
                </LR>
              ))}
            </div>
          </div>
        </section>

        {/* ── LOCAL PROJECTS ───────────────────────────── */}
        {nearby.length > 0 && (
          <section className="section">
            <div className="wrap">
              <LR><LEb n="03">Recent work nearby</LEb></LR>
              <LR d="1" as="h2" className="display" style={{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}}>
                Work on the ground.
              </LR>
              <div style={{display:"grid",gridTemplateColumns:`repeat(${nearby.length},1fr)`,gap:"clamp(10px,1.2vw,14px)",marginTop:"clamp(28px,3.5vw,44px)"}}>
                {nearby.map((p,i)=>(
                  <LR key={p.id} d={String(i)}>
                    <a href={`Projects#${p.id}`} style={{display:"block",position:"relative",aspectRatio:"4/3",borderRadius:"var(--r-lg)",overflow:"hidden",border:"1px solid var(--line)",textDecoration:"none"}}>
                      <LPh label={null} src={p.img} pos={p.pos||"center"} style={{position:"absolute",inset:0}}/>
                      <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.9) 20%,rgba(8,8,10,.2) 65%,transparent)"}}/>
                      <div style={{position:"absolute",bottom:0,left:0,right:0,padding:"clamp(14px,1.8vw,20px)"}}>
                        <span className="mono" style={{fontSize:"10px",letterSpacing:".1em",color:"var(--muted)"}}>{p.cat} · {p.loc}</span>
                        <div className="display" style={{fontSize:"clamp(16px,1.5vw,20px)",marginTop:"4px"}}>{p.title}</div>
                      </div>
                    </a>
                  </LR>
                ))}
              </div>
              <LR d="2" style={{marginTop:"22px",textAlign:"center"}}>
                <a href="Projects" className="btn btn--ghost">View all projects <LAr/></a>
              </LR>
            </div>
          </section>
        )}

        {/* ── FAQS ─────────────────────────────────────── */}
        <section className="section" style={{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <LR><LEb n={nearby.length>0?"04":"03"}>Common questions</LEb></LR>
            <LR d="1" as="h2" className="display" style={{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}}>
              {loc.name} concreting<br/>FAQs.
            </LR>
            <div style={{maxWidth:"760px",marginTop:"clamp(32px,4vw,52px)"}}>
              <div style={{borderTop:"1px solid var(--line)"}}>
                {loc.faqs.map((f,i)=>(
                  <LR key={i} d={String(i)}>
                    <div style={{borderBottom:"1px solid var(--line)"}}>
                      <button
                        onClick={()=>setFaqOpen(faqOpen===i?-1:i)}
                        style={{width:"100%",textAlign:"left",background:"none",border:"none",cursor:"pointer",
                          padding:"22px 0",display:"flex",justifyContent:"space-between",alignItems:"center",
                          gap:"20px",color:"var(--text)"}}
                      >
                        <span style={{fontSize:"clamp(15px,1.3vw,18px)",fontWeight:600}}>{f.q}</span>
                        <span style={{flexShrink:0,width:"30px",height:"30px",borderRadius:"50%",
                          border:"1px solid var(--line-2)",display:"grid",placeItems:"center",
                          transition:"transform .3s",transform:faqOpen===i?"rotate(45deg)":"none",color:"var(--muted)"}}>
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M7 1v12M1 7h12"/></svg>
                        </span>
                      </button>
                      <div style={{maxHeight:faqOpen===i?"300px":"0",overflow:"hidden",transition:"max-height .4s var(--ease)"}}>
                        <p style={{margin:"0 0 24px",color:"var(--muted)",fontSize:"16px",lineHeight:1.65,maxWidth:"62ch",paddingRight:"40px"}}>{f.a}</p>
                      </div>
                    </div>
                  </LR>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────── */}
        <section className="section">
          <div className="wrap">
            <LR><LEb n={nearby.length>0?"05":"04"}>What clients say</LEb></LR>
            <LR d="1" as="h2" className="display" style={{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}}>
              The results speak.
            </LR>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(12px,1.4vw,18px)",marginTop:"clamp(36px,4vw,54px)"}}>
              {LD.testimonials.slice(0,3).map((t,i)=>(
                <LR key={i} d={String(i)}>
                  <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(20px,2.2vw,26px)",display:"flex",flexDirection:"column",gap:"12px"}}>
                    <div style={{display:"flex",gap:"2px"}}>
                      {Array(5).fill(0).map((_,k)=>(
                        <svg key={k} width="13" height="13" viewBox="0 0 14 14" fill="#f5c542"><path d="M7 1l1.8 3.6L13 5.2l-3 2.9.7 4.1L7 10.1l-3.7 2 .7-4.1-3-2.9 4.2-.6z"/></svg>
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
                </LR>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section style={{borderTop:"1px solid var(--line)",background:"var(--panel-2)",padding:"clamp(70px,9vw,110px) 0"}}>
          <div className="wrap">
            <div style={{maxWidth:"720px"}}>
              <LR><LEb n={nearby.length>0?"06":"05"}>Ready to start</LEb></LR>
              <LR d="1" as="h2" className="display" style={{fontSize:"clamp(38px,5.5vw,86px)",margin:"20px 0 0",lineHeight:.93}}>
                Get a fixed quote<br/>in {loc.name} today.
              </LR>
              <LR d="2" as="p" style={{margin:"22px 0 0",color:"var(--muted)",fontSize:"clamp(16px,1.3vw,19px)",maxWidth:"44ch",lineHeight:1.65}}>
                Tell us about your site and we'll come back with a locked price, same day. No obligation. No follow-up calls unless you want them.
              </LR>
              <LR d="3" style={{display:"flex",gap:"14px",marginTop:"36px",flexWrap:"wrap"}}>
                <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Start my quote <LAr/></button>
                <a className="btn btn--ghost btn--lg" href={`tel:${LD.phone.replace(/\s/g,"")}`}><LIc name="phone" s={16}/> {LD.phone}</a>
              </LR>
            </div>
          </div>
        </section>

      </main>
      <LFooter/>
      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<LocationPage/>);
