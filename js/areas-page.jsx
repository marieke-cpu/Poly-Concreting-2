/* Poly Concreting — Service Areas page */
const { Reveal:AR, Eyebrow:AEb, Arrow:AArr, Icon:AIc } = window.PC_UI;
const AD = window.PC_DATA;
const AP = window.PC_PAGES;
const ANav    = window.PC_HERO.Nav;
const AFooter = window.PC_S2.Footer;
const AAreas  = window.PC_S2.Areas;

function AreasPage(){
  const [quote,setQuote]=React.useState(false);
  return (
    <div id="top">
      <ANav phone={AD.phone} onQuote={()=>setQuote(true)}/>
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
            <AR><AEb n="—">Service areas</AEb></AR>
            <AR d="1" as="h1" className="display" style={{fontSize:"clamp(46px,8vw,124px)",margin:"20px 0 0",lineHeight:.93}}>
              We pour right across<br/>South East QLD.
            </AR>
            <AR d="2">
              <div style={{display:"flex",gap:"clamp(28px,5vw,72px)",marginTop:"32px",alignItems:"flex-end",flexWrap:"wrap"}}>
                <p style={{margin:0,color:"var(--muted)",fontSize:"clamp(16px,1.35vw,20px)",maxWidth:"46ch",lineHeight:1.65}}>
                  Based in Morayfield and working from the Sunshine Coast through Brisbane, Ipswich and west to Toowoomba. If you're in SEQ, chances are we're already pouring near you.
                </p>
                <div style={{display:"flex",gap:"12px",flexWrap:"wrap",flexShrink:0}}>
                  <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Get a free quote <AArr/></button>
                  <a className="btn btn--ghost btn--lg" href={`tel:${AD.phone.replace(/\s/g,"")}`}><AIc name="phone" s={16}/> {AD.phone}</a>
                </div>
              </div>
            </AR>
            <AR d="3">
              <div style={{display:"flex",marginTop:"clamp(44px,5vw,64px)",borderTop:"1px solid var(--line)",flexWrap:"wrap"}}>
                {AD.metrics.map((m,i)=>(
                  <div key={i} style={{flex:"1 1 120px",borderRight:i<AD.metrics.length-1?"1px solid var(--line)":"none",padding:"clamp(18px,2vw,26px) clamp(16px,2vw,28px)"}}>
                    <div className="display chrome-text" style={{fontSize:"clamp(24px,3vw,42px)",lineHeight:.95}}>{m.prefix||""}{m.value}{m.suffix}</div>
                    <div className="mono" style={{fontSize:"11px",letterSpacing:".06em",color:"var(--muted)",marginTop:"6px"}}>{m.sub}</div>
                  </div>
                ))}
              </div>
            </AR>
          </div>
        </section>

        {/* ── MAP ──────────────────────────────────────── */}
        <AAreas/>

        {/* ── SUBURB DIRECTORY ─────────────────────────── */}
        <section className="section">
          <div className="wrap">
            <AR><AEb n="01">Suburbs we service</AEb></AR>
            <AR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95}}>
              A local crew,<br/>suburb by suburb.
            </AR>
            <div className="areas-dir" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1px",background:"var(--line)",border:"1px solid var(--line)",marginTop:"clamp(34px,4vw,52px)"}}>
              {AD.regions.map((r,i)=>(
                <AR key={r.id} d={String(i%2)} style={{background:"var(--base)",padding:"clamp(24px,2.6vw,36px)"}}>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:"12px"}}>
                    <h3 className="display" style={{fontSize:"clamp(22px,2.2vw,30px)"}}>
                      {r.name}
                      {r.home && <span className="mono" style={{fontSize:"10px",letterSpacing:".14em",color:"var(--muted)",marginLeft:"10px"}}>★ HOME BASE</span>}
                    </h3>
                    <span className="mono chrome-text display" style={{fontSize:"20px"}}>{r.count}</span>
                  </div>
                  <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"18px"}}>
                    {(AP.areaSuburbs[r.id]||[]).map(s=>(
                      <a key={s} href="Quote.html" className="mono"
                        style={{fontSize:"12px",letterSpacing:".04em",color:"var(--muted)",border:"1px solid var(--line-2)",borderRadius:"40px",padding:"7px 13px",transition:"all .2s"}}
                        onMouseEnter={e=>{e.currentTarget.style.color="var(--text)";e.currentTarget.style.borderColor="var(--line-3)";}}
                        onMouseLeave={e=>{e.currentTarget.style.color="var(--muted)";e.currentTarget.style.borderColor="var(--line-2)";}}>
                        {s}
                      </a>
                    ))}
                  </div>
                  {r.locationPages && (
                    <div style={{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"16px",paddingTop:"14px",borderTop:"1px solid var(--line)"}}>
                      {r.locationPages.map(([label,href])=>(
                        <a key={href} href={href} className="mono"
                          style={{fontSize:"11px",letterSpacing:".06em",color:"var(--accent)",border:"1px solid var(--accent)",borderRadius:"40px",padding:"6px 14px",display:"inline-flex",alignItems:"center",gap:"5px",transition:"all .2s",textDecoration:"none"}}
                          onMouseEnter={e=>{e.currentTarget.style.background="var(--accent)";e.currentTarget.style.color="var(--base)";}}
                          onMouseLeave={e=>{e.currentTarget.style.background="transparent";e.currentTarget.style.color="var(--accent)";}}>
                          {label} <AArr d="e"/>
                        </a>
                      ))}
                    </div>
                  )}
                </AR>
              ))}
            </div>
            <AR d="2" as="p" className="mono" style={{marginTop:"22px",fontSize:"12.5px",color:"var(--faint)",letterSpacing:".03em"}}>
              Don't see your suburb? We cover the whole of SEQ — <a href="Quote.html" className="link-sweep" style={{display:"inline-flex"}}>ask us about your area <AArr d="e"/></a>
            </AR>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────── */}
        <section className="section" style={{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <AR><AEb n="02">What clients say</AEb></AR>
            <AR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95}}>
              Locals, every one.
            </AR>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(280px,1fr))",gap:"clamp(12px,1.4vw,18px)",marginTop:"clamp(36px,4vw,54px)"}}>
              {AD.testimonials.slice(0,3).map((t,i)=>(
                <AR key={i} d={String(i)}>
                  <div style={{background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(20px,2.2vw,26px)",display:"flex",flexDirection:"column",gap:"12px"}}>
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
                </AR>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section style={{borderTop:"1px solid var(--line)",background:"var(--panel-2)",padding:"clamp(70px,9vw,110px) 0"}}>
          <div className="wrap">
            <div style={{maxWidth:"720px"}}>
              <AR><AEb n="03">Ready to start</AEb></AR>
              <AR d="1" as="h2" className="display" style={{fontSize:"clamp(38px,5.5vw,86px)",margin:"20px 0 0",lineHeight:.93}}>
                Get a fixed quote<br/>today.
              </AR>
              <AR d="2" as="p" style={{margin:"22px 0 0",color:"var(--muted)",fontSize:"clamp(16px,1.3vw,19px)",maxWidth:"44ch",lineHeight:1.65}}>
                Tell us about your site and we'll come back with a locked price, same day. No obligation. No follow-up calls unless you want them.
              </AR>
              <AR d="3" style={{display:"flex",gap:"14px",marginTop:"36px",flexWrap:"wrap"}}>
                <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Start my quote <AArr/></button>
                <a className="btn btn--ghost btn--lg" href={`tel:${AD.phone.replace(/\s/g,"")}`}><AIc name="phone" s={16}/> {AD.phone}</a>
              </AR>
            </div>
          </div>
        </section>

      </main>
      <AFooter/>
      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AreasPage/>);
