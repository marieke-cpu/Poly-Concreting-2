/* Poly Concreting — Get a Quote page */
const { Reveal:QR, Eyebrow:QEb, Arrow:QArr, Icon:QIc, Ph:QPh } = window.PC_UI;
const QD = window.PC_DATA;
const QP = window.PC_PAGES;
const QNav = window.PC_HERO.Nav;
const QFooter = window.PC_S2.Footer;

function QStars({ n=5, size=15 }){
  return (
    <span style={{display:"flex",gap:"2px"}}>
      {Array(n).fill(0).map((_,i)=>(
        <svg key={i} width={size} height={size} viewBox="0 0 14 14" fill="#f5c542">
          <path d="M7 1l1.8 3.6L13 5.2l-3 2.9.7 4.1L7 10.1l-3.7 2 .7-4.1-3-2.9 4.2-.6z"/>
        </svg>
      ))}
    </span>
  );
}

function QField({ label, type="text", value, onChange, placeholder, required, full }){
  return (
    <div style={{display:"flex",flexDirection:"column",gridColumn:full?"1 / -1":"auto"}}>
      <label className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",marginBottom:"8px"}}>
        {label}{required && <span style={{color:"var(--text)"}}> *</span>}
      </label>
      <input type={type} value={value} onChange={e=>onChange(e.target.value)} placeholder={placeholder} className="q-input"/>
    </div>
  );
}

function QuoteForm(){
  const [d,setD] = React.useState({name:"",phone:"",email:"",service:"",location:"",details:""});
  const [sent,setSent] = React.useState(false);
  const set = k => v => setD({...d,[k]:v});
  const ok = d.name && d.phone && d.service;

  if(sent){
    return (
      <div className="rise" style={{background:"linear-gradient(180deg,#161619,#101012)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",padding:"clamp(34px,5vw,56px)",textAlign:"center"}}>
        <div style={{width:"60px",height:"60px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",margin:"0 auto"}}>
          <QIc name="check" s={28}/>
        </div>
        <h3 className="display" style={{fontSize:"clamp(26px,3.4vw,40px)",margin:"22px 0 0"}}>Thanks, {d.name.split(" ")[0]}.</h3>
        <p style={{color:"var(--muted)",margin:"14px auto 0",maxWidth:"40ch",lineHeight:1.65}}>
          Your request is in. A Poly owner will call you on <span style={{color:"var(--text)"}}>{d.phone}</span> the same day to book your free site visit.
        </p>
        <a href="Poly Concreting.html" className="btn btn--ghost" style={{marginTop:"28px"}}>Back to home</a>
      </div>
    );
  }

  return (
    <form onSubmit={e=>{e.preventDefault(); if(ok) setSent(true);}}
      style={{background:"linear-gradient(180deg,#161619,#101012)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",padding:"clamp(26px,3.4vw,44px)"}}>
      <h2 className="display" style={{fontSize:"clamp(22px,2.4vw,30px)",margin:"0 0 24px"}}>Tell us about your project</h2>
      <div className="q-form-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"18px"}}>
        <QField label="Full name" value={d.name} onChange={set("name")} placeholder="Jane Smith" required/>
        <QField label="Phone" type="tel" value={d.phone} onChange={set("phone")} placeholder="0400 000 000" required/>
        <QField label="Email" type="email" value={d.email} onChange={set("email")} placeholder="jane@email.com"/>
        <div style={{display:"flex",flexDirection:"column"}}>
          <label className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",marginBottom:"8px"}}>
            Service required <span style={{color:"var(--text)"}}>*</span>
          </label>
          <select value={d.service} onChange={e=>set("service")(e.target.value)} className="q-input" style={{cursor:"pointer"}}>
            <option value="" style={{background:"#161619"}}>Select a service…</option>
            {QD.services.filter(([,id])=>!["trowel","broom","swirl","exposed","coloured","stamped","covercrete"].includes(id))
              .map(([name,id])=><option key={id} value={name} style={{background:"#161619"}}>{name}</option>)}
            <option value="Decorative finish" style={{background:"#161619"}}>Decorative finish</option>
            <option value="Not sure yet" style={{background:"#161619"}}>Not sure yet</option>
          </select>
        </div>
        <div style={{display:"flex",flexDirection:"column"}}>
          <label className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",marginBottom:"8px"}}>Suburb / location</label>
          <input value={d.location} onChange={e=>set("location")(e.target.value)} placeholder="e.g. Morayfield" className="q-input"/>
        </div>
        <div style={{display:"flex",flexDirection:"column",gridColumn:"1 / -1"}}>
          <label className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",marginBottom:"8px"}}>Project details</label>
          <textarea value={d.details} onChange={e=>set("details")(e.target.value)} rows="4"
            placeholder="Approx size, the finish you're after, any access or timing requirements…"
            className="q-input" style={{resize:"vertical"}}/>
        </div>
      </div>
      <button type="submit" className="btn btn--solid btn--lg" disabled={!ok}
        style={{width:"100%",justifyContent:"center",marginTop:"22px",opacity:ok?1:.45,pointerEvents:ok?"auto":"none"}}>
        Request my free quote <QArr/>
      </button>
      <p className="mono" style={{fontSize:"11px",color:"var(--faint)",textAlign:"center",marginTop:"16px",letterSpacing:".04em"}}>
        No obligation · Same-day response · QBCC Licensed &amp; Fully Insured
      </p>
    </form>
  );
}

function QuotePage(){
  return (
    <div id="top">
      <QNav phone={QD.phone} onQuote={()=>{}}/>
      <main>

        {/* ── HERO ─────────────────────────────────────── */}
        <section style={{paddingTop:"clamp(180px,22vh,220px)",paddingBottom:"clamp(40px,5vw,72px)",borderBottom:"1px solid var(--line)",position:"relative",overflow:"hidden"}}>
          <img src="assets/img/agg-joint.jpg" alt="" aria-hidden="true" style={{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",opacity:.12}}/>
          <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg,rgba(8,8,10,.7),var(--ink))"}}/>
          <div className="wrap" style={{position:"relative"}}>
            <QR><QEb n="—">Get a Quote</QEb></QR>
            <QR d="1" as="h1" className="display" style={{fontSize:"clamp(40px,7vw,104px)",margin:"20px 0 0",lineHeight:.94}}>
              Let&rsquo;s price your<br/><span className="chrome-text">concrete</span>, properly.
            </QR>
            <QR d="2" as="p" style={{margin:"22px 0 0",color:"var(--muted)",fontSize:"clamp(16px,1.3vw,20px)",maxWidth:"52ch",lineHeight:1.65}}>
              Free, no-obligation quotes across South East Queensland. Fill in the form and a Poly owner — not a call centre — gets back to you the same day.
            </QR>
          </div>
        </section>

        {/* ── HOW IT WORKS ─────────────────────────────── */}
        <section className="section--tight">
          <div className="wrap">
            <div className="q-steps" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"clamp(16px,2vw,28px)"}}>
              {QP.quoteSteps.map(s=>(
                <QR key={s.n} style={{borderTop:"1px solid var(--line-2)",paddingTop:"20px"}}>
                  <div className="display chrome-text" style={{fontSize:"30px"}}>{s.n}</div>
                  <h3 className="display" style={{fontSize:"clamp(19px,1.8vw,24px)",margin:"12px 0 0"}}>{s.t}</h3>
                  <p style={{margin:"10px 0 0",color:"var(--muted)",fontSize:"15px",lineHeight:1.6}}>{s.d}</p>
                </QR>
              ))}
            </div>
          </div>
        </section>

        {/* ── FORM + TRUST SIDEBAR ─────────────────────── */}
        <section className="section" style={{paddingTop:0}}>
          <div className="wrap">
            <div className="q-layout" style={{display:"grid",gridTemplateColumns:"1fr 340px",gap:"clamp(28px,4vw,56px)",alignItems:"start"}}>

              <QR><QuoteForm/></QR>

              <QR d="1" className="q-trust" style={{display:"flex",flexDirection:"column",gap:"12px"}}>

                {/* rating block */}
                <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(20px,2.4vw,28px)"}}>
                  <QStars n={5} size={16}/>
                  <div style={{display:"flex",alignItems:"baseline",gap:"10px",marginTop:"12px"}}>
                    <span className="display" style={{fontSize:"34px",lineHeight:1}}>{QP.reviewSummary.rating}</span>
                    <span style={{color:"var(--muted)",fontSize:"14px"}}>/ 5 rating</span>
                  </div>
                  <p className="mono" style={{fontSize:"11px",color:"var(--muted)",marginTop:"6px",letterSpacing:".04em"}}>
                    {QD.googleReviewCount}+ reviews across Google, Facebook &amp; Instagram
                  </p>
                </div>

                {/* featured review */}
                <div style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(18px,2.2vw,24px)"}}>
                  <QStars n={5} size={13}/>
                  <p style={{margin:"12px 0 0",fontSize:"13.5px",lineHeight:1.6,color:"var(--text)"}}>
                    "{QD.testimonials[1].q}"
                  </p>
                  <div style={{display:"flex",alignItems:"center",gap:"10px",marginTop:"14px"}}>
                    <div style={{width:"30px",height:"30px",borderRadius:"50%",background:"var(--panel-2)",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0}}>
                      <span style={{fontSize:"11px",fontWeight:700}}>{QD.testimonials[1].n[0]}</span>
                    </div>
                    <div>
                      <div style={{fontSize:"12px",fontWeight:600}}>{QD.testimonials[1].n}</div>
                      <div className="mono" style={{fontSize:"10px",color:"var(--muted)"}}>{QD.testimonials[1].r}</div>
                    </div>
                  </div>
                </div>

                {/* trust items */}
                {[
                  ["check","QBCC Licensed & Insured","White-card crews, full WHS, public liability covered on every job."],
                  ["check","Owner-operated","You deal with the people on the tools, from quote to clean-up."],
                  ["check","Fixed price, written quote","No variations, no surprises. Your price is locked before we lift a shovel."],
                  ["check","Serving SEQ","Moreton Bay · Brisbane · Sunshine Coast · Ipswich · Toowoomba."],
                ].map(([icon,t,dd])=>(
                  <div key={t} style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r)",padding:"18px 20px",display:"flex",gap:"12px",alignItems:"flex-start"}}>
                    <span style={{color:"var(--text)",flexShrink:0,marginTop:"1px"}}><QIc name={icon} s={18}/></span>
                    <div>
                      <div style={{fontWeight:700,fontSize:"14px"}}>{t}</div>
                      <p style={{margin:"5px 0 0",color:"var(--muted)",fontSize:"13px",lineHeight:1.5}}>{dd}</p>
                    </div>
                  </div>
                ))}

                <a href={`tel:${QD.phone.replace(/\s/g,"")}`} className="btn btn--ghost btn--lg" style={{justifyContent:"center"}}>
                  <QIc name="phone" s={16}/> {QD.phone}
                </a>

              </QR>
            </div>
          </div>
        </section>

      </main>
      <QFooter/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<QuotePage/>);
