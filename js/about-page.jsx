/* Poly Concreting — About page */
const { Reveal:BR, Eyebrow:BEb, Arrow:BArr, Icon:BIc, Ph:BPh } = window.PC_UI;
const BD = window.PC_DATA;
const BA = window.PC_PAGES.about;
const BNav    = window.PC_HERO.Nav;
const BFooter = window.PC_S2.Footer;

const CREDS = [
  { icon:"check",     label:"QBCC Licensed"     },
  { icon:"check",     label:"Fully Insured"      },
  { icon:"sparkle",   label:"50+ Reviews"        },
  { icon:"clipboard", label:"Written Warranty"   },
  { icon:"flag",      label:"Owner-Operated"     },
];

function AboutPage(){
  const [quote,setQuote]   = React.useState(false);
  const [featIdx,setFeatIdx] = React.useState(0);

  React.useEffect(()=>{
    const t = setInterval(()=>setFeatIdx(i=>(i+1)%BD.testimonials.length),6000);
    return ()=>clearInterval(t);
  },[]);

  const feat = BD.testimonials[featIdx];

  return (
    <div id="top">
      <BNav phone={BD.phone} onQuote={()=>setQuote(true)}/>
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
            <BR><BEb n="—">About Poly Concreting</BEb></BR>
            <BR d="1" as="h1" className="display" style={{fontSize:"clamp(46px,8vw,124px)",margin:"20px 0 0",lineHeight:.93}}>
              A local crew that<br/>takes it <span className="chrome-text">personally.</span>
            </BR>
            <BR d="2">
              <div style={{display:"flex",gap:"clamp(28px,5vw,72px)",marginTop:"32px",alignItems:"flex-end",flexWrap:"wrap"}}>
                <p style={{margin:0,color:"var(--muted)",fontSize:"clamp(16px,1.35vw,20px)",maxWidth:"46ch",lineHeight:1.65}}>
                  {BA.lede}
                </p>
                <div style={{display:"flex",gap:"12px",flexWrap:"wrap",flexShrink:0}}>
                  <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Get a free quote <BArr/></button>
                  <a className="btn btn--ghost btn--lg" href={`tel:${BD.phone.replace(/\s/g,"")}`}><BIc name="phone" s={16}/> {BD.phone}</a>
                </div>
              </div>
            </BR>
            <BR d="3">
              <div style={{display:"flex",marginTop:"clamp(44px,5vw,64px)",borderTop:"1px solid var(--line)",flexWrap:"wrap"}}>
                {BA.stats.map(([v,l],i)=>(
                  <div key={l} style={{flex:"1 1 120px",borderRight:i<BA.stats.length-1?"1px solid var(--line)":"none",padding:"clamp(18px,2vw,26px) clamp(16px,2vw,28px)"}}>
                    <div className="display chrome-text" style={{fontSize:"clamp(24px,3vw,42px)",lineHeight:.95}}>{v}</div>
                    <div className="mono" style={{fontSize:"11px",letterSpacing:".06em",color:"var(--muted)",marginTop:"6px"}}>{l}</div>
                  </div>
                ))}
              </div>
            </BR>
          </div>
        </section>

        {/* ── WHO WE ARE ────────────────────────────────── */}
        <section className="section" style={{borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(32px,6vw,80px)",alignItems:"center"}}>
              <div>
                <BR><BEb n="01">Who We Are</BEb></BR>
                <BR d="1" as="h2" className="display" style={{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}}>
                  Residential &amp; Commercial<br/>Concreting You Can Count On.
                </BR>
                <div style={{marginTop:"clamp(24px,3vw,36px)",display:"flex",flexDirection:"column",gap:"18px"}}>
                  {BA.intro.map((p,i)=>(
                    <BR key={i} d={String(i+2)} as="p" style={{fontSize:"clamp(15px,1.3vw,18px)",lineHeight:1.7,color:i===0?"var(--text)":"var(--muted)"}}>{p}</BR>
                  ))}
                </div>
              </div>
              <BR d="1" style={{position:"relative",borderRadius:"var(--r-lg)",overflow:"hidden",border:"1px solid var(--line)",aspectRatio:"4/3",minHeight:"220px"}}>
                <BPh label={null} src="assets/img/team.jpg" pos="center 38%" style={{position:"absolute",inset:0}}/>
                <div style={{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.55),transparent 55%)"}}/>
                <div className="ph__tag" style={{position:"absolute",left:0,bottom:0}}>THE POLY CREW · MORAYFIELD, SEQ</div>
              </BR>
            </div>
          </div>
        </section>

        {/* ── CREDENTIALS BAR ──────────────────────────── */}
        <section style={{borderBottom:"1px solid var(--line)",background:"var(--panel)",padding:"clamp(16px,2vw,22px) 0"}}>
          <div className="wrap">
            <div style={{display:"flex",gap:"clamp(12px,2.5vw,36px)",flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>
              {CREDS.map(({icon,label},i)=>(
                <React.Fragment key={label}>
                  {i>0 && <span style={{width:"1px",height:"13px",background:"var(--line)",flexShrink:0}}/>}
                  <div style={{display:"flex",alignItems:"center",gap:"7px",flexShrink:0}}>
                    <span style={{opacity:.55,lineHeight:0}}><BIc name={icon} s={13}/></span>
                    <span className="mono" style={{fontSize:"11px",letterSpacing:".07em",color:"var(--muted)"}}>{label}</span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR STORY ─────────────────────────────────── */}
        <section className="section" style={{borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1.3fr .7fr",gap:"clamp(28px,5vw,72px)",alignItems:"start"}}>
              <div>
                <BR><BEb n="02">Our Story</BEb></BR>
                <BR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95}}>
                  Built from the<br/>ground up.
                </BR>
                <div style={{marginTop:"clamp(28px,3.5vw,40px)",display:"flex",flexDirection:"column",gap:"22px"}}>
                  {BA.story.map((p,i)=>(
                    <BR key={i} d={String(i+2)} as="p" style={{fontSize:"clamp(15px,1.35vw,19px)",lineHeight:1.7,color:i===0?"var(--text)":"var(--muted)"}}>{p}</BR>
                  ))}
                </div>
              </div>
              <BR d="1" style={{position:"sticky",top:"100px"}}>
                <div style={{background:"linear-gradient(160deg,#141418,#0e0e12)",border:"1px solid rgba(255,255,255,.07)",borderRadius:"var(--r-lg)",padding:"clamp(28px,3vw,44px)"}}>
                  <svg width="28" height="22" viewBox="0 0 32 24" fill="none" style={{marginBottom:"18px",opacity:.2}}><path d="M0 24V14.4C0 8.4 3.2 3.6 9.6 0l2.4 3.6C8.8 5.6 7.2 8 7.2 11.2H12V24H0zm16 0V14.4C16 8.4 19.2 3.6 25.6 0L28 3.6C24.8 5.6 23.2 8 23.2 11.2H28V24H16z" fill="white"/></svg>
                  <p className="display" style={{fontSize:"clamp(17px,1.8vw,24px)",lineHeight:1.3,margin:0,color:"rgba(232,232,239,.9)"}}>
                    "We're not here to be the biggest crew in SEQ. We're here to be the one you call back."
                  </p>
                  <div style={{marginTop:"24px",paddingTop:"18px",borderTop:"1px solid rgba(255,255,255,.07)"}}>
                    <div style={{fontSize:"13px",fontWeight:600,color:"rgba(232,232,239,.85)"}}>Angelo</div>
                    <div className="mono" style={{fontSize:"10px",letterSpacing:".07em",color:"rgba(232,232,239,.3)",marginTop:"4px"}}>FOUNDER · POLY CONCRETING</div>
                  </div>
                </div>
                {/* Polynesian heritage badge */}
                <div style={{marginTop:"12px",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2vw,24px)",display:"flex",gap:"14px",alignItems:"flex-start"}}>
                  <span style={{fontSize:"24px",lineHeight:1,flexShrink:0}}>🌊</span>
                  <div>
                    <div style={{fontSize:"12px",fontWeight:700,letterSpacing:".05em",color:"var(--text)",marginBottom:"6px"}}>POLYNESIAN HERITAGE</div>
                    <p style={{margin:0,fontSize:"13px",lineHeight:1.6,color:"var(--muted)"}}>Community, resilience, and an unmatched work ethic — values we carry onto every job site.</p>
                  </div>
                </div>
              </BR>
            </div>
          </div>
        </section>

        {/* ── OUR MISSION ───────────────────────────────── */}
        <section style={{background:"linear-gradient(180deg,#0c0c10,#0e0e14)",borderTop:"1px solid rgba(255,255,255,.06)",borderBottom:"1px solid rgba(255,255,255,.06)",padding:"clamp(60px,7vw,90px) 0"}}>
          <div className="wrap">
            <div className="about-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"clamp(32px,6vw,80px)",alignItems:"start"}}>
              <div>
                <BR><BEb n="03">Our Mission</BEb></BR>
                <BR d="1" as="h2" className="display" style={{fontSize:"clamp(30px,3.8vw,54px)",margin:"20px 0 0",lineHeight:.95,color:"rgba(232,232,239,.92)"}}>
                  Built for results.<br/>Built for every client.
                </BR>
                <BR d="2" as="p" style={{margin:"clamp(20px,2.5vw,28px) 0 0",fontSize:"clamp(15px,1.3vw,18px)",lineHeight:1.7,color:"rgba(232,232,239,.5)",maxWidth:"48ch"}}>
                  {BA.mission}
                </BR>
              </div>
              <BR d="1" style={{display:"flex",flexDirection:"column",gap:"1px",background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.06)",borderRadius:"var(--r-lg)",overflow:"hidden",marginTop:"clamp(0px,2vw,8px)"}}>
                {[
                  ["Residential","Driveways, slabs, paths, patios & pool surrounds"],
                  ["Commercial","Hardstands, warehouse floors & shopfront slabs"],
                  ["Decorative","Exposed aggregate, coloured, stamped & covercrete"],
                ].map(([t,d])=>(
                  <div key={t} style={{padding:"clamp(20px,2.4vw,30px) clamp(20px,2.4vw,30px)",background:"rgba(255,255,255,.02)",borderBottom:"1px solid rgba(255,255,255,.05)"}}>
                    <div className="mono" style={{fontSize:"10px",fontWeight:700,letterSpacing:".09em",color:"rgba(232,232,239,.4)",marginBottom:"8px"}}>{t.toUpperCase()}</div>
                    <div style={{fontSize:"clamp(13px,1.2vw,15px)",color:"rgba(232,232,239,.6)",lineHeight:1.55}}>{d}</div>
                  </div>
                ))}
              </BR>
            </div>
          </div>
        </section>

        {/* ── VALUES ────────────────────────────────────── */}
        <section className="section" style={{background:"var(--panel)",borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <BR><BEb n="04">What We Stand For</BEb></BR>
            <BR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95}}>
              Why clients choose Poly.
            </BR>
            <div className="about-values" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"1px",background:"var(--line)",border:"1px solid var(--line)",marginTop:"clamp(34px,4vw,56px)"}}>
              {BA.values.map(v=>(
                <BR key={v.t} style={{background:"var(--panel)",padding:"clamp(26px,2.8vw,40px)"}}>
                  <span style={{color:"var(--text)"}}><BIc name={v.icon} s={26}/></span>
                  <h3 className="display" style={{fontSize:"clamp(20px,2vw,26px)",margin:"16px 0 0"}}>{v.t}</h3>
                  <p style={{margin:"10px 0 0",color:"var(--muted)",fontSize:"15.5px",lineHeight:1.6,maxWidth:"40ch"}}>{v.d}</p>
                </BR>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE OPERATE ────────────────────────────── */}
        <section className="section" style={{borderBottom:"1px solid var(--line)"}}>
          <div className="wrap">
            <BR><BEb n="05">How We Operate</BEb></BR>
            <BR d="1" as="h2" className="display" style={{fontSize:"clamp(32px,4.2vw,62px)",margin:"20px 0 0",lineHeight:.95}}>
              No shortcuts.<br/>Full stop.
            </BR>
            <div className="about-safety" style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"clamp(12px,1.4vw,18px)",marginTop:"clamp(34px,4vw,52px)"}}>
              <BR d="2" style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(28px,3.4vw,44px)"}}>
                <span style={{color:"var(--text)"}}><BIc name="check" s={26}/></span>
                <h3 className="display" style={{fontSize:"clamp(22px,2.4vw,32px)",margin:"16px 0 0"}}>Safety, no shortcuts</h3>
                <p style={{margin:"14px 0 0",color:"var(--muted)",fontSize:"clamp(15px,1.3vw,18px)",lineHeight:1.65}}>{BA.safety}</p>
              </BR>
              <BR d="3" style={{background:"linear-gradient(180deg,#1b1b1f,#141417)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",padding:"clamp(28px,3.4vw,44px)",display:"flex",flexDirection:"column"}}>
                <span style={{color:"var(--text)"}}><BIc name="flag" s={26}/></span>
                <h3 className="display" style={{fontSize:"clamp(22px,2.4vw,32px)",margin:"16px 0 0"}}>Our promise</h3>
                <p style={{margin:"14px 0 0",color:"var(--muted)",fontSize:"clamp(15px,1.3vw,18px)",lineHeight:1.65}}>Do fewer jobs, do them properly, and leave every client glad they called us. If it's not right, we make it right.</p>
                <div style={{flex:1}}/>
                <button className="btn btn--solid" style={{marginTop:"26px",alignSelf:"flex-start"}} onClick={()=>setQuote(true)}>Work with us <BArr/></button>
              </BR>
            </div>
          </div>
        </section>

        {/* ── TESTIMONIALS ──────────────────────────────── */}
        <section style={{background:"linear-gradient(180deg,#0c0c10,#0e0e14)",borderBottom:"1px solid rgba(255,255,255,.06)",padding:"clamp(70px,8vw,100px) 0",overflow:"hidden"}}>
          <div className="wrap">
            <div style={{display:"flex",gap:"16px",marginBottom:"clamp(32px,4vw,48px)",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap"}}>
              <BR style={{display:"flex",gap:"3px"}}>
                {Array(5).fill(0).map((_,k)=>(
                  <svg key={k} width="16" height="16" viewBox="0 0 14 14" fill="#f5c542"><path d="M7 1l1.8 3.6L13 5.2l-3 2.9.7 4.1L7 10.1l-3.7 2 .7-4.1-3-2.9 4.2-.6z"/></svg>
                ))}
              </BR>
              <BR d="1"><span className="mono" style={{fontSize:"11px",letterSpacing:".08em",color:"rgba(232,232,239,.3)"}}>{BD.googleReviewCount}+ GOOGLE, FACEBOOK &amp; INSTAGRAM REVIEWS</span></BR>
            </div>
            <BR d="2">
              <blockquote key={featIdx} className="rise" style={{margin:0,border:0,padding:0}}>
                <p className="display" style={{fontSize:"clamp(22px,3.5vw,52px)",lineHeight:1.08,margin:0,color:"rgba(232,232,239,.95)",maxWidth:"26ch"}}>
                  "{feat.q}"
                </p>
                <footer style={{marginTop:"clamp(24px,3vw,40px)",display:"flex",alignItems:"center",gap:"14px"}}>
                  <div style={{width:"44px",height:"44px",borderRadius:"50%",background:"rgba(255,255,255,.06)",border:"1px solid rgba(255,255,255,.1)",display:"grid",placeItems:"center",flexShrink:0}}>
                    <span style={{fontSize:"16px",fontWeight:700,color:"rgba(232,232,239,.9)"}}>{feat.n[0]}</span>
                  </div>
                  <div>
                    <div style={{fontSize:"14px",fontWeight:600,color:"rgba(232,232,239,.9)"}}>{feat.n}</div>
                    <div className="mono" style={{fontSize:"10px",letterSpacing:".06em",color:"rgba(232,232,239,.3)",marginTop:"3px"}}>{feat.r}</div>
                  </div>
                </footer>
              </blockquote>
            </BR>
            <div style={{display:"flex",gap:"6px",marginTop:"clamp(36px,4vw,52px)"}}>
              {BD.testimonials.map((_,i)=>(
                <button key={i} onClick={()=>setFeatIdx(i)} style={{width:i===featIdx?24:6,height:6,borderRadius:3,background:i===featIdx?"rgba(232,232,239,.8)":"rgba(255,255,255,.12)",border:0,padding:0,cursor:"pointer",transition:"width .3s ease"}}/>
              ))}
            </div>
          </div>
        </section>

        {/* ── FINAL CTA ─────────────────────────────────── */}
        <section style={{borderTop:"1px solid var(--line)",background:"var(--panel-2)",padding:"clamp(70px,9vw,110px) 0"}}>
          <div className="wrap">
            <div style={{maxWidth:"720px"}}>
              <BR><BEb n="06">Ready to Start</BEb></BR>
              <BR d="1" as="h2" className="display" style={{fontSize:"clamp(38px,5.5vw,86px)",margin:"20px 0 0",lineHeight:.93}}>
                Get a fixed quote<br/>today.
              </BR>
              <BR d="2" as="p" style={{margin:"22px 0 0",color:"var(--muted)",fontSize:"clamp(16px,1.3vw,19px)",maxWidth:"44ch",lineHeight:1.65}}>
                Tell us about your site and we'll come back with a locked price, same day. No obligation. No follow-up calls unless you want them.
              </BR>
              <BR d="3" style={{display:"flex",gap:"14px",marginTop:"36px",flexWrap:"wrap"}}>
                <button className="btn btn--solid btn--lg" onClick={()=>setQuote(true)}>Start my quote <BArr/></button>
                <a className="btn btn--ghost btn--lg" href={`tel:${BD.phone.replace(/\s/g,"")}`}><BIc name="phone" s={16}/> {BD.phone}</a>
              </BR>
            </div>
          </div>
        </section>

      </main>
      <BFooter/>
      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<AboutPage/>);
