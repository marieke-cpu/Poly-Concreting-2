/* Poly Concreting — Thank You page */
const { Reveal:SR, Eyebrow:SEb, Arrow:SAr, Icon:SIc } = window.PC_UI;
const SD      = window.PC_DATA;
const SNav    = window.PC_HERO.Nav;
const SFooter = window.PC_S2.Footer;

function fmt(n){ return "$" + Math.round(n).toLocaleString("en-AU"); }

function ThankYouApp(){
  const raw  = sessionStorage.getItem("pc_quote");
  const data = raw ? JSON.parse(raw) : null;
  const firstName = data?.name ? data.name.trim().split(" ")[0] : null;

  const steps = [
    {
      n:"01", icon:"phone",
      t:"We'll call you",
      d:"Angelo will call you the same day to confirm the details and answer any questions.",
    },
    {
      n:"02", icon:"flag",
      t:"Free site visit",
      d:"We come out, assess the site, check access and drainage — all at no cost or obligation.",
    },
    {
      n:"03", icon:"clipboard",
      t:"Fixed quote in writing",
      d:"You'll receive a locked, itemised price. No variations, no surprises — just a clear number to say yes or no to.",
    },
  ];

  return (
    <div>
      <SNav phone={SD.phone} onQuote={()=>{}}/>
      <main>

        {/* ── HERO ── */}
        <section style={{
          padding:"clamp(130px,16vw,200px) 0 clamp(80px,10vw,120px)",
          borderBottom:"1px solid var(--line)",
          position:"relative",overflow:"hidden",
        }}>
          <div style={{
            position:"absolute",inset:0,
            background:"radial-gradient(ellipse 55% 50% at 50% 0%,rgba(200,200,215,.07),transparent 65%)",
            pointerEvents:"none",
          }}/>
          <div className="wrap" style={{position:"relative",textAlign:"center",maxWidth:"680px"}}>
            <SR>
              <div style={{
                width:"72px",height:"72px",borderRadius:"50%",
                background:"var(--chrome)",color:"#08080a",
                display:"grid",placeItems:"center",margin:"0 auto",
              }}>
                <SIc name="check" s={32}/>
              </div>
            </SR>
            <SR d="1" as="h1" className="display" style={{
              fontSize:"clamp(44px,7vw,100px)",margin:"28px 0 0",lineHeight:.9,
            }}>
              {firstName ? `Thanks, ${firstName}.` : "Request received."}
            </SR>
            <SR d="2" as="p" style={{
              margin:"24px 0 0",fontSize:"clamp(16px,1.4vw,21px)",
              color:"var(--text)",lineHeight:1.6,
            }}>
              Your quote request is in.{" "}
              {data?.phone
                ? <>Angelo will call you on <span style={{color:"var(--text)",fontWeight:600}}>{data.phone}</span> the same day.</>
                : "Angelo will be in touch the same day."
              }
            </SR>


            <SR d="4" style={{
              display:"flex",gap:"12px",marginTop:"36px",
              justifyContent:"center",flexWrap:"wrap",
            }}>
              <a href="/" className="btn btn--solid btn--lg">
                Back to home <SAr/>
              </a>
              <a href="Services" className="btn btn--ghost btn--lg">
                View all services
              </a>
            </SR>
          </div>
        </section>

        {/* ── WHAT HAPPENS NEXT ── */}
        <section className="section--tight">
          <div className="wrap">
            <SR><SEb>What happens next</SEb></SR>
            <div style={{
              display:"grid",
              gridTemplateColumns:"repeat(auto-fit,minmax(220px,1fr))",
              gap:"clamp(20px,3vw,44px)",
              marginTop:"clamp(40px,5vw,64px)",
            }}>
              {steps.map((st,i)=>(
                <SR key={i} d={String(i)}>
                  <div style={{borderTop:"2px solid var(--line-2)",paddingTop:"20px"}}>
                    <div className="mono chrome-text display" style={{fontSize:"30px",lineHeight:1}}>{st.n}</div>
                    <div style={{marginTop:"16px",color:"var(--text)"}}><SIc name={st.icon} s={22}/></div>
                    <h3 style={{margin:"14px 0 0",fontSize:"17px",fontWeight:700}}>{st.t}</h3>
                    <p style={{margin:"8px 0 0",color:"var(--muted)",fontSize:"14px",lineHeight:1.6}}>{st.d}</p>
                  </div>
                </SR>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT DIRECT ── */}
        <section className="section--tight" style={{
          background:"var(--panel)",
          borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)",
        }}>
          <div className="wrap" style={{textAlign:"center",maxWidth:"560px"}}>
            <SR as="p" style={{
              fontSize:"clamp(15px,1.2vw,18px)",
              color:"var(--muted)",lineHeight:1.65,margin:0,
            }}>
              Need to reach us sooner? Call or email directly.
            </SR>
            <SR d="1" style={{
              display:"flex",gap:"12px",marginTop:"22px",
              justifyContent:"center",flexWrap:"wrap",
            }}>
              <a className="btn btn--solid" href={`tel:${SD.phone.replace(/\s/g,"")}`}>
                <SIc name="phone" s={15}/> {SD.phone}
              </a>
              <a className="btn btn--ghost" href={`mailto:${SD.email}`}>
                {SD.email}
              </a>
            </SR>
          </div>
        </section>

      </main>
      <SFooter/>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ThankYouApp/>);
