/* Poly Concreting — Get a Quote modal + live cost estimator (lead-gen) */
const { Icon:Iq, Arrow:Aq } = window.PC_UI;
const PDq = window.PC_DATA;
const { useState:qS, useEffect:qE } = React;

function fmt(n){ return "$" + Math.round(n).toLocaleString("en-AU"); }
function round(n,step){ return Math.round(n/step)*step; }

function QuoteModal({ open, onClose }){
  const [step,setStep]=qS(0);
  const [type,setType]=qS(null);
  const [area,setArea]=qS(60);
  const [finish,setFinish]=qS("plain");
  const [region,setRegion]=qS("");
  const [contact,setContact]=qS({name:"",phone:"",email:"",msg:""});
  const [done,setDone]=qS(false); // kept for safety; redirect is primary path

  qE(()=>{
    const k=(e)=>{ if(e.key==="Escape") onClose(); };
    if(open){ document.addEventListener("keydown",k); document.body.style.overflow="hidden"; }
    return ()=>{ document.removeEventListener("keydown",k); document.body.style.overflow=""; };
  },[open]);
  qE(()=>{ if(open){ setStep(0); setDone(false); } },[open]);

  if(!open) return null;
  const T = PDq.estimator.types.find(t=>t.id===type);
  const F = PDq.estimator.finishes.find(f=>f.id===finish);
  const estLow  = T ? round(T.rate[0]*area*F.mult, 100) : 0;
  const estHigh = T ? round(T.rate[1]*area*F.mult, 100) : 0;
  const steps=["Service","Size & finish","Your details"];
  const canNext = step===0 ? !!type : step===1 ? area>0 : (contact.name && contact.phone);

  const submit=async ()=>{
    const payload = {
      name:    contact.name,
      phone:   contact.phone,
      email:   contact.email,
      suburb:  region,
      type:    T ? T.label : null,
      area:    area,
      finish:  F ? F.label : null,
      estLow:  T ? estLow  : null,
      estHigh: T ? estHigh : null,
      message: contact.msg,
      source: "Quote modal",
    };
    if(window.PC_SUBMIT_QUOTE) await window.PC_SUBMIT_QUOTE(payload);
    sessionStorage.setItem("pc_quote", JSON.stringify(payload));
    window.location.href = "thankyou.html";
  };

  return (
    <div onMouseDown={onClose} style={{position:"fixed",inset:0,zIndex:200,background:"rgba(4,4,6,.72)",backdropFilter:"blur(8px)",display:"grid",placeItems:"center",padding:"clamp(12px,3vw,28px)",overflowY:"auto"}}>
      <div onMouseDown={e=>e.stopPropagation()} className="rise"
        style={{width:"min(720px,100%)",background:"linear-gradient(180deg,#161619,#101012)",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",overflow:"hidden",boxShadow:"0 40px 120px rgba(0,0,0,.6)",margin:"auto"}}>
        {/* header */}
        <div className="quote-modal-head" style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"20px clamp(22px,3vw,34px)",borderBottom:"1px solid var(--line)"}}>
          <div className="quote-modal-brand" style={{display:"flex",alignItems:"center",gap:"12px"}}>
            <img className="quote-modal-logo" src="Logo's/1logo.png" alt="Poly Concreting" decoding="async" width="180" height="45" style={{height:"36px",width:"auto"}}/>
            <span className="mono" style={{fontSize:"12px",letterSpacing:".16em",color:"var(--muted)"}}>{done?"REQUEST SENT":"GET A QUOTE"}</span>
          </div>
          <button onClick={onClose} aria-label="Close" style={{width:"36px",height:"36px",borderRadius:"50%",border:"1px solid var(--line-2)",background:"none",color:"var(--muted)",cursor:"pointer",display:"grid",placeItems:"center"}}><Iq name="x" s={16}/></button>
        </div>

        {done ? (
          <div style={{padding:"clamp(34px,5vw,64px)",textAlign:"center"}}>
            <div style={{width:"64px",height:"64px",borderRadius:"50%",background:"var(--chrome)",color:"#0a0a0b",display:"grid",placeItems:"center",margin:"0 auto"}}><Iq name="check" s={30}/></div>
            <h3 className="display" style={{fontSize:"clamp(28px,4vw,44px)",margin:"24px 0 0"}}>Thanks, {contact.name.split(" ")[0]||"mate"}.</h3>
            <p style={{color:"var(--muted)",margin:"16px auto 0",maxWidth:"42ch"}}>Your request is in. A Poly project lead will call you on <span style={{color:"var(--text)"}}>{contact.phone}</span> the same day to lock in a site visit.</p>
            <button className="btn btn--solid btn--lg" onClick={onClose} style={{marginTop:"32px"}}>Done</button>
          </div>
        ) : (
          <React.Fragment>
            {/* progress */}
            <div style={{display:"flex",gap:"8px",padding:"18px clamp(22px,3vw,34px) 0"}}>
              {steps.map((s,i)=>(
                <div key={s} style={{flex:1}}>
                  <div style={{height:"3px",borderRadius:"3px",background: i<=step?"var(--chrome)":"var(--line-2)",transition:"background .3s"}}></div>
                  <div className="mono" style={{fontSize:"10px",letterSpacing:".1em",marginTop:"8px",color:i===step?"var(--text)":"var(--faint)"}}>{String(i+1).padStart(2,"0")} {s}</div>
                </div>
              ))}
            </div>

            <div style={{padding:"clamp(22px,3vw,34px)",minHeight:"300px"}}>
              {step===0 && (
                <div key="s0" className="rise">
                  <h3 className="display" style={{fontSize:"clamp(24px,3vw,34px)"}}>What are we pouring?</h3>
                  <p className="muted" style={{marginTop:"8px",fontSize:"15px"}}>Pick the closest match — you can tell us more in a moment.</p>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(150px,1fr))",gap:"10px",marginTop:"22px"}} className="q-types">
                    {PDq.estimator.types.map(t=>(
                      <button key={t.id} onClick={()=>setType(t.id)}
                        style={{textAlign:"left",padding:"18px 16px",borderRadius:"var(--r)",cursor:"pointer",transition:"all .2s",
                          background: type===t.id?"rgba(255,255,255,.06)":"var(--panel)",
                          border:`1px solid ${type===t.id?"var(--text)":"var(--line)"}`,color:"var(--text)"}}>
                        <span style={{color:type===t.id?"var(--text)":"var(--muted)"}}><Iq name={t.icon} s={24}/></span>
                        <div style={{fontWeight:600,marginTop:"12px",fontSize:"15px"}}>{t.label}</div>
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step===1 && (
                <div key="s1" className="rise">
                  <h3 className="display" style={{fontSize:"clamp(24px,3vw,34px)"}}>Size &amp; finish</h3>
                  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",marginTop:"24px"}}>
                    <span className="mono" style={{fontSize:"12px",letterSpacing:".1em",color:"var(--muted)"}}>APPROX. AREA</span>
                    <span className="display chrome-text" style={{fontSize:"30px"}}>{area} m²</span>
                  </div>
                  <input type="range" min="10" max="600" step="5" value={area} onChange={e=>setArea(+e.target.value)} className="q-range" style={{width:"100%",marginTop:"12px"}}/>
                  <div className="mono" style={{display:"flex",justifyContent:"space-between",fontSize:"10.5px",color:"var(--faint)"}}><span>10m²</span><span>600m²</span></div>

                  <div className="mono" style={{fontSize:"12px",letterSpacing:".1em",color:"var(--muted)",marginTop:"28px"}}>FINISH</div>
                  <div style={{display:"grid",gridTemplateColumns:"repeat(2,1fr)",gap:"10px",marginTop:"12px"}}>
                    {PDq.estimator.finishes.map(f=>(
                      <button key={f.id} onClick={()=>setFinish(f.id)}
                        style={{textAlign:"left",padding:"14px 16px",borderRadius:"var(--r)",cursor:"pointer",transition:"all .2s",display:"flex",justifyContent:"space-between",alignItems:"center",
                          background: finish===f.id?"rgba(255,255,255,.06)":"var(--panel)",border:`1px solid ${finish===f.id?"var(--text)":"var(--line)"}`,color:"var(--text)"}}>
                        <span style={{fontSize:"14.5px",fontWeight:600}}>{f.label}</span>
                        {finish===f.id && <Iq name="check" s={16}/>}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              {step===2 && (
                <div key="s2" className="rise">
                  <h3 className="display" style={{fontSize:"clamp(24px,3vw,34px)"}}>Where do we send it?</h3>
                  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:"12px",marginTop:"22px"}} className="q-fields">
                    <Field label="Full name *" v={contact.name} on={v=>setContact({...contact,name:v})} ph="Jane Smith"/>
                    <Field label="Phone *" v={contact.phone} on={v=>setContact({...contact,phone:v})} ph="0400 000 000"/>
                    <Field label="Email" v={contact.email} on={v=>setContact({...contact,email:v})} ph="jane@email.com"/>
                    <Field label="Suburb" v={region} on={setRegion} ph="e.g. Morayfield"/>
                  </div>
                  <label className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--muted)",display:"block",marginTop:"16px"}}>ANYTHING ELSE?</label>
                  <textarea value={contact.msg} onChange={e=>setContact({...contact,msg:e.target.value})} rows="3" placeholder="Access, timing, the finish you're after…" className="q-input" style={{width:"100%",marginTop:"8px",resize:"vertical"}}/>
                  {T && <div className="mono" style={{marginTop:"18px",fontSize:"11.5px",color:"var(--faint)"}}>Summary: {T.label} · {area}m² · {F.label}</div>}
                </div>
              )}
            </div>

            {/* footer nav */}
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"18px clamp(22px,3vw,34px)",borderTop:"1px solid var(--line)"}}>
              <button onClick={()=> step===0?onClose():setStep(step-1)} className="btn btn--ghost">{step===0?"Cancel":"← Back"}</button>
              {step<2
                ? <button className="btn btn--solid" disabled={!canNext} style={{opacity:canNext?1:.4,pointerEvents:canNext?"auto":"none"}} onClick={()=>setStep(step+1)}>Continue <Aq d="e"/></button>
                : <button className="btn btn--solid" disabled={!canNext} style={{opacity:canNext?1:.4,pointerEvents:canNext?"auto":"none"}} onClick={submit}>Send request <Aq/></button>}
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

function Field({ label, v, on, ph }){
  return (
    <div>
      <label className="mono" style={{fontSize:"11px",letterSpacing:".1em",color:"var(--muted)"}}>{label}</label>
      <input value={v} onChange={e=>on(e.target.value)} placeholder={ph} className="q-input" style={{width:"100%",marginTop:"8px"}}/>
    </div>
  );
}

window.PC_QUOTE = QuoteModal;
