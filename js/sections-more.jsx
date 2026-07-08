/* Poly Concreting — sections more: Areas/Map, Before&After, Testimonials, Final CTA, Footer */
const { Reveal:Rw, Ph:Pm, Eyebrow:Ew, Arrow:Aw, Icon:Iw } = window.PC_UI;
const PDm = window.PC_DATA;
const { SectionHead:SH, TatauBand:TB } = window.PC_S;

/* ====================== SECTION 6 — SERVICE AREAS (Leaflet map) ====================== */
const GEO = {
  moretonbay: [-27.11, 152.97],
  brisbane:   [-27.47, 153.03],
  sunshine:   [-26.65, 153.06],
  ipswich:    [-27.61, 152.76],
  logan:      [-27.64, 153.11],
  toowoomba:  [-27.56, 151.95],
  lockyer:    [-27.55, 152.34],
  somerset:   [-27.00, 152.51],
};

function LeafletMap({ regions, act, onSelect }){
  const containerRef = React.useRef(null);
  const mapRef       = React.useRef(null);
  const markersRef   = React.useRef({});
  const linesRef     = React.useRef({});

  React.useEffect(()=>{
    const L = window.L;
    if(!L || mapRef.current) return;
    const map = L.map(containerRef.current, {
      center: [-27.35, 152.72], zoom: 8,
      zoomControl: false, attributionControl: false, scrollWheelZoom: false,
    });
    mapRef.current = map;

    /* zoom control \u2014 bottom right */
    L.control.zoom({ position:"bottomright" }).addTo(map);

    L.tileLayer("https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",{
      subdomains:"abcd", maxZoom:19
    }).addTo(map);
    L.control.attribution({ prefix:false })
      .addAttribution('\u00a9 <a href="https://openstreetmap.org">OSM</a> \u00b7 <a href="https://carto.com/">CARTO</a>')
      .addTo(map);

    const home = GEO.moretonbay;

    /* connector lines from Morayfield to each region */
    regions.forEach(r=>{
      const coords = GEO[r.id];
      if(!coords || r.id==="moretonbay") return;
      const isAct = r.id === act;
      const line = L.polyline([home, coords],{
        color:"#c8c8ce", weight: isAct ? 1.5 : 0.8,
        opacity: isAct ? 0.55 : 0.18, dashArray:"4 6",
      }).addTo(map);
      linesRef.current[r.id] = line;
    });

    /* markers \u2014 drawn on top of lines */
    regions.forEach(r=>{
      const coords = GEO[r.id];
      if(!coords) return;
      const isAct = r.id === act;
      const m = L.circleMarker(coords,{
        radius: isAct ? 13 : 8,
        fillColor: isAct ? "#c8c8ce" : "#3a3a44",
        fillOpacity: 1,
        color: isAct ? "#fff" : "#666",
        weight: isAct ? 2 : 1,
      }).addTo(map);
      m.bindTooltip(r.name + (r.home ? " \u2605" : ""),{
        className:"leaflet-poly-tip", direction:"top", offset:[0,-6]
      });
      m.on("click",()=> onSelect(r.id));
      markersRef.current[r.id] = m;
    });

    return ()=>{ map.remove(); mapRef.current = null; markersRef.current = {}; linesRef.current = {}; };
  },[]);

  /* update markers + lines + fly to region when act changes */
  React.useEffect(()=>{
    const map = mapRef.current;
    Object.entries(markersRef.current).forEach(([id,m])=>{
      const isAct = id === act;
      m.setStyle({ fillColor: isAct?"#c8c8ce":"#3a3a44", color: isAct?"#fff":"#666", weight: isAct?2:1 });
      m.setRadius(isAct ? 13 : 8);
    });
    Object.entries(linesRef.current).forEach(([id,line])=>{
      const isAct = id === act;
      line.setStyle({ weight: isAct?1.5:0.8, opacity: isAct?0.55:0.18 });
    });
    if(map && GEO[act]){
      map.flyTo(GEO[act], act==="moretonbay"?8:10, { duration:1.2, easeLinearity:0.4 });
    }
  },[act]);

  return <div ref={containerRef} style={{position:"absolute",inset:0,borderRadius:"var(--r-lg)"}}/>;
}

function Areas(){
  const regions = PDm.regions;
  const [act,setAct]=React.useState("moretonbay");
  const cur = regions.find(r=>r.id===act);
  return (
    <section id="areas" className="section" style={{background:"var(--base-2)",borderBlock:"1px solid var(--line)"}}>
      <div className="wrap">
        <SH n="06" kicker="Service areas" title={<>One crew standard,<br/>all of South East QLD.</>}
          sub="Morayfield is home base — but we pour from the Sunshine Coast through Brisbane, Ipswich and west to Toowoomba. Tap a region to see where we work."/>
        <div className="areas-grid" style={{display:"grid",gridTemplateColumns:"1.15fr .85fr",gap:"clamp(24px,3vw,48px)",marginTop:"clamp(40px,5vw,68px)",alignItems:"stretch"}}>
          {/* MAP */}
          <Rw className="areas-map" style={{position:"relative",borderRadius:"var(--r-lg)",overflow:"hidden",border:"1px solid var(--line)",minHeight:"440px",isolation:"isolate"}}>
            <LeafletMap regions={regions} act={act} onSelect={setAct}/>
            <div className="mono" style={{position:"absolute",top:"12px",left:"12px",fontSize:"9.5px",letterSpacing:".16em",color:"rgba(255,255,255,.6)",zIndex:500,pointerEvents:"none",background:"rgba(8,8,10,.65)",padding:"5px 10px",borderRadius:"4px",backdropFilter:"blur(4px)"}}>SEQ · COVERAGE MAP</div>
          </Rw>
          {/* DETAIL */}
          <Rw d="1" style={{display:"flex",flexDirection:"column"}}>
            <div key={act} className="rise" style={{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(26px,2.6vw,38px)",flex:1,display:"flex",flexDirection:"column"}}>
              <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
                <div>
                  {cur.home && <div className="mono" style={{fontSize:"10.5px",letterSpacing:".16em",color:"var(--muted)",marginBottom:"10px"}}>★ HOME BASE</div>}
                  <h3 className="display" style={{fontSize:"clamp(30px,3.4vw,46px)"}}>{cur.name}</h3>
                </div>
                <div style={{textAlign:"right"}}>
                  <div className="display chrome-text" style={{fontSize:"clamp(30px,3.4vw,44px)",lineHeight:1}}>{cur.count}</div>
                  <div className="mono" style={{fontSize:"10px",letterSpacing:".1em",color:"var(--faint)"}}>PROJECTS</div>
                </div>
              </div>
              <div className="divider" style={{margin:"22px 0"}}></div>
              <div className="mono" style={{fontSize:"11px",letterSpacing:".14em",color:"var(--faint)",marginBottom:"12px"}}>SUBURBS SERVICED</div>
              <p style={{color:"var(--text)",fontSize:"clamp(16px,1.4vw,19px)",lineHeight:1.7,margin:0}}>{cur.towns}</p>
              <div style={{flex:1}}></div>
              <a className="link-sweep" href={cur.locationPages ? cur.locationPages[0][1] : "ServiceAreas"} style={{marginTop:"28px"}}>{cur.name} concreting <Aw d="e"/></a>
            </div>
            <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"14px"}}>
              {regions.map(r=>(
                <button key={r.id} onClick={()=>setAct(r.id)} className="mono"
                  style={{fontSize:"11px",letterSpacing:".06em",padding:"8px 12px",borderRadius:"40px",cursor:"pointer",
                    border:`1px solid ${act===r.id?"var(--text)":"var(--line-2)"}`,background:act===r.id?"var(--text)":"transparent",color:act===r.id?"#0a0a0b":"var(--muted)",transition:"all .2s"}}>{r.name}</button>
              ))}
            </div>
          </Rw>
        </div>
      </div>
    </section>
  );
}

/* ====================== SECTION 7 — BEFORE & AFTER ====================== */
const BA_PAIRS = [
  { before:"assets/img/ba/ba-plain-before.webp", after:"assets/img/ba/ba-plain-after.webp", label:"Plain Concrete Driveway" },
  { before:"assets/img/ba/ba03.webp", after:"assets/img/ba/ba05.webp", label:"Concrete Driveway" },
  { before:"assets/img/ba/ba09.webp", after:"assets/img/ba/ba07.webp", label:"Acreage Slab" },
  { before:"assets/img/ba/ba12.webp", after:"assets/img/ba/ba13.webp", label:"Patio Replacement" },
  { before:"assets/img/ba/ba10.webp", after:"assets/img/ba/ba11.webp", label:"Concrete Crossover" },
  { before:"assets/img/optimized/photos-before-afters-ex1.webp", after:"assets/img/optimized/photos-before-afters-ex2.webp", label:"Exposed Aggregate Driveway" },
];

function BASlider({ before, after }){
  const [pos,setPos]=React.useState(50);
  const ref=React.useRef(null);
  const drag=React.useRef(false);
  const move=(clientX)=>{
    const el=ref.current; if(!el) return;
    const r=el.getBoundingClientRect();
    let p=((clientX-r.left)/r.width)*100;
    setPos(Math.max(2,Math.min(98,p)));
  };
  React.useEffect(()=>{
    const mm=(e)=>{ if(drag.current) move(e.touches?e.touches[0].clientX:e.clientX); };
    const mu=()=>{ drag.current=false; document.body.style.userSelect=""; };
    window.addEventListener("mousemove",mm); window.addEventListener("touchmove",mm,{passive:false});
    window.addEventListener("mouseup",mu); window.addEventListener("touchend",mu);
    return ()=>{ window.removeEventListener("mousemove",mm); window.removeEventListener("touchmove",mm); window.removeEventListener("mouseup",mu); window.removeEventListener("touchend",mu); };
  },[]);
  const start=(e)=>{ drag.current=true; document.body.style.userSelect="none"; move(e.touches?e.touches[0].clientX:e.clientX); };
  return (
    <div ref={ref} onMouseDown={start} onTouchStart={start}
      style={{position:"relative",width:"100%",height:"100%",cursor:"ew-resize",touchAction:"none",userSelect:"none",borderRadius:"var(--r-lg)",overflow:"hidden"}}>
      <Pm label={null} src={after} pos="center" style={{position:"absolute",inset:0}}/>
      <div style={{position:"absolute",inset:0,width:pos+"%",overflow:"hidden",borderRight:"2px solid rgba(255,255,255,.8)"}}>
        <Pm label={null} src={before} pos="center" style={{position:"absolute",inset:0,width:`${100/(pos/100)}%`}}/>
      </div>
      <span className="mono" style={{position:"absolute",left:"10px",bottom:"10px",fontSize:"10px",letterSpacing:".12em",background:"rgba(8,8,10,.6)",backdropFilter:"blur(6px)",padding:"5px 10px",borderRadius:"40px",border:"1px solid var(--line-2)",zIndex:4,pointerEvents:"none"}}>BEFORE</span>
      <span className="mono" style={{position:"absolute",right:"10px",top:"10px",fontSize:"10px",letterSpacing:".12em",background:"rgba(236,235,234,.9)",color:"#0a0a0b",padding:"5px 10px",borderRadius:"40px",zIndex:4,pointerEvents:"none"}}>AFTER</span>
      <div style={{position:"absolute",top:0,bottom:0,left:pos+"%",transform:"translateX(-50%)",width:"2px",background:"#ececea",zIndex:5,pointerEvents:"none"}}>
        <div style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"38px",height:"38px",borderRadius:"50%",background:"var(--chrome)",display:"grid",placeItems:"center",boxShadow:"0 4px 16px rgba(0,0,0,.5)"}}>
          <svg width="20" height="14" viewBox="0 0 26 18" fill="none" stroke="#0a0a0b" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 4 3 9l6 5M17 4l6 5-6 5"/></svg>
        </div>
      </div>
    </div>
  );
}

function BeforeAfter(){
  const [active,setActive]=React.useState(0);
  const cur=BA_PAIRS[active];
  return (
    <section id="transform" className="section section--tight">
      <div className="wrap">
        <div style={{display:"flex",alignItems:"flex-end",justifyContent:"space-between",flexWrap:"wrap",gap:"16px"}}>
          <SH n="07" kicker="Before &amp; after" title={<>Drag the line.<br/>Watch it transform.</>}/>
          {/* pair selector tabs */}
          <div style={{display:"flex",gap:"8px",flexWrap:"wrap",paddingBottom:"4px"}}>
            {BA_PAIRS.map((p,i)=>(
              <button key={i} onClick={()=>setActive(i)} className="mono"
                style={{fontSize:"10.5px",letterSpacing:".08em",padding:"6px 12px",borderRadius:"40px",cursor:"pointer",transition:"all .2s",
                  border:`1px solid ${active===i?"var(--text)":"var(--line-2)"}`,
                  background:active===i?"var(--text)":"transparent",
                  color:active===i?"#0a0a0b":"var(--muted)"}}>{p.label}</button>
            ))}
          </div>
        </div>

        {/* main slider */}
        <Rw d="1" style={{marginTop:"24px",aspectRatio:"16/7",border:"1px solid var(--line-2)",borderRadius:"var(--r-lg)",overflow:"hidden"}}>
          <BASlider key={active} before={cur.before} after={cur.after}/>
        </Rw>

        <Rw d="2" style={{marginTop:"clamp(28px,3vw,40px)",display:"flex",alignItems:"center",gap:"16px",flexWrap:"wrap"}}>
          <a href="#quote" className="btn btn--solid btn--lg">Get a free quote <Aw d="e"/></a>
          <a href="Projects" className="btn btn--ghost">See all projects <Aw d="e"/></a>
        </Rw>
      </div>
    </section>
  );
}

/* ====================== SECTION 8 — TESTIMONIALS ====================== */
function Testimonials(){
  const list=PDm.testimonials;
  const StarPath="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z";
  const Stars=({rating=5})=>{
    const uid="sr"+Math.random().toString(36).slice(2,7);
    return (
      <span style={{display:"inline-flex",gap:"2px"}}>
        {[0,1,2,3,4].map(i=>{
          const fill=Math.min(1,Math.max(0,rating-i));
          if(fill>=1) return <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FBBC04"><path d={StarPath}/></svg>;
          if(fill<=0) return <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#d1d5db"><path d={StarPath}/></svg>;
          const id=`${uid}_${i}`;
          return (
            <svg key={i} width="14" height="14" viewBox="0 0 24 24">
              <defs><linearGradient id={id}><stop offset={`${fill*100}%`} stopColor="#FBBC04"/><stop offset={`${fill*100}%`} stopColor="#d1d5db"/></linearGradient></defs>
              <path d={StarPath} fill={`url(#${id})`}/>
            </svg>
          );
        })}
      </span>
    );
  };
  return (
    <section id="reviews" style={{background:"var(--base-2)",borderBottom:"1px solid var(--line)",padding:"clamp(22px,2.8vw,36px) 0"}}>
      <div className="wrap">
        <div style={{display:"flex",alignItems:"center",gap:"clamp(20px,4vw,48px)",flexWrap:"wrap",justifyContent:"space-between"}}>
          {/* hook text */}
          <div style={{flexShrink:0,maxWidth:"220px"}}>
            <div className="display" style={{fontSize:"clamp(18px,2vw,26px)",lineHeight:.95,letterSpacing:".01em"}}>
              Don't take our<br/>word for it.
            </div>
            <p className="mono" style={{margin:"8px 0 0",fontSize:"11px",letterSpacing:".06em",color:"var(--muted)",lineHeight:1.5}}>
              150+ JOBS ACROSS SEQ.<br/>HERE'S WHAT CLIENTS SAY.
            </p>
          </div>
          {/* divider */}
          <div style={{width:"1px",height:"48px",background:"var(--line)",flexShrink:0}}/>
          {/* Google badge */}
          <div style={{display:"flex",alignItems:"center",gap:"14px",flexShrink:0}}>
            <svg width="28" height="28" viewBox="0 0 48 48"><path fill="#4285F4" d="M44.5 20H24v8h11.7C34 33.5 29.5 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3 12.4 3 3 12.4 3 24s9.4 21 21 21c10.9 0 20-7.9 20-21 0-1.3-.1-2.7-.5-4z"/><path fill="#34A853" d="M6.3 14.7l6.6 4.8C14.6 15.4 19 12 24 12c3.1 0 5.9 1.1 8.1 2.9l6-6C34.6 5.1 29.6 3 24 3c-7.7 0-14.4 4.5-17.7 11.7z"/><path fill="#FBBC05" d="M24 45c5.4 0 10.3-1.9 14.1-5l-6.5-5.3C29.5 36.2 26.9 37 24 37c-5.5 0-10.1-3.5-11.7-8.3l-6.6 5C9.4 40.5 16.2 45 24 45z"/><path fill="#EA4335" d="M44.5 20H24v8h11.7c-.8 2.4-2.4 4.4-4.5 5.8l6.5 5.3C41.8 35.7 45 30.3 45 24c0-1.3-.1-2.7-.5-4z"/></svg>
            <div>
              <div style={{display:"flex",alignItems:"center",gap:"8px"}}>
                <span style={{fontWeight:700,fontSize:"22px",lineHeight:1}}>4.8</span>
                <Stars rating={4.8}/>
              </div>
              <div className="mono" style={{fontSize:"11px",color:"var(--muted)",letterSpacing:".05em",marginTop:"3px"}}>{PDm.googleReviewCount}+ GOOGLE, FACEBOOK &amp; INSTAGRAM REVIEWS</div>
            </div>
          </div>
          {/* divider */}
          <div style={{width:"1px",height:"48px",background:"var(--line)",flexShrink:0}}/>
          {/* review cards */}
          <div style={{display:"flex",gap:"clamp(14px,2vw,24px)",flex:1,minWidth:0,overflowX:"auto",scrollbarWidth:"none"}}>
            {list.map((t,idx)=>(
              <div key={idx} style={{flexShrink:0,background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r)",padding:"16px 18px",maxWidth:"260px",minWidth:"200px"}}>
                <Stars rating={5}/>
                <p style={{margin:"8px 0 10px",fontSize:"13px",lineHeight:1.5,color:"var(--muted)",display:"-webkit-box",WebkitLineClamp:3,WebkitBoxOrient:"vertical",overflow:"hidden"}}>
                  &ldquo;{t.q}&rdquo;
                </p>
                <div style={{fontSize:"12px",fontWeight:600,color:"var(--muted)"}}>{t.n}</div>
                <div className="mono" style={{fontSize:"10.5px",color:"var(--faint)",marginTop:"2px",letterSpacing:".03em"}}>{t.r}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ====================== PHOTO STRIP ====================== */
const STRIP_PHOTOS = [
  "assets/img/optimized/photos-driveways-exposed1.webp",
  "assets/img/optimized/photos-before-afters-ex2.webp",
  "assets/img/optimized/photos-driveways-plain4.webp",
  "assets/img/optimized/photos-trowel-slab1.webp",
  "assets/img/optimized/photos-rest-of-photos-vids-out1.webp",
  "assets/img/optimized/photos-rest-of-photos-vids-pool1.webp",
  "assets/img/optimized/photos-driveways-plain7.webp",
  "assets/img/optimized/photos-rest-of-photos-vids-outdoor10.webp",
];

function PhotoStrip(){
  return (
    <div style={{width:"100%",overflow:"hidden",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}}>
      <div style={{display:"flex",height:"clamp(120px,16vw,200px)"}}>
        {STRIP_PHOTOS.map((src,i)=>(
          <div key={i} style={{flex:"1 0 0",position:"relative",overflow:"hidden",borderRight:i<STRIP_PHOTOS.length-1?"1px solid var(--line)":"none"}}>
            <Pm label={null} src={src} pos="center" style={{position:"absolute",inset:0,transition:"transform .6s var(--ease-out)"}}/>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ====================== FAQ ====================== */
function FAQ(){
  const [open,setOpen]=React.useState(null);
  const faqs=PDm.faqs;
  return (
    <section id="faq" className="section section--tight" style={{background:"var(--base-2)",borderTop:"1px solid var(--line)"}}>
      <div className="wrap">
        <SH n="08" kicker="Questions" title={<>Things people<br/>always ask.</>}
          sub="The stuff worth knowing before you sign off on a pour."/>
        <div style={{marginTop:"clamp(32px,4vw,52px)",maxWidth:"760px"}}>
          {faqs.map((item,i)=>(
            <Rw key={i} d={String(i%3)}>
              <div style={{borderBottom:"1px solid var(--line)"}}>
                <button onClick={()=>setOpen(open===i?null:i)}
                  style={{width:"100%",background:"none",border:"none",cursor:"pointer",padding:"clamp(18px,2vw,24px) 0",display:"flex",alignItems:"center",justifyContent:"space-between",gap:"20px",textAlign:"left",color:"var(--text)"}}>
                  <span className="display" style={{fontSize:"clamp(17px,1.6vw,22px)"}}>{item.q}</span>
                  <span style={{width:"28px",height:"28px",borderRadius:"50%",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",flexShrink:0,transition:"transform .3s",transform:open===i?"rotate(45deg)":"none"}}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 1v10M1 6h10"/></svg>
                  </span>
                </button>
                <div style={{maxHeight:open===i?"400px":"0",overflow:"hidden",transition:"max-height .4s var(--ease-out)"}}>
                  <p style={{margin:"0 0 24px",color:"var(--muted)",fontSize:"clamp(14px,1.25vw,17px)",lineHeight:1.7,paddingRight:"48px"}}>{item.a}</p>
                </div>
              </div>
            </Rw>
          ))}
        </div>
        <Rw d="2" style={{marginTop:"clamp(28px,3vw,40px)",display:"flex",gap:"14px",flexWrap:"wrap"}}>
          <a href="#quote" className="btn btn--solid btn--lg">Get a free quote <Aw d="e"/></a>
          <a href={`tel:${PDm.phone.replace(/\s/g,"")}`} className="btn btn--ghost"><Iw name="phone" s={15}/> {PDm.phone}</a>
        </Rw>
      </div>
    </section>
  );
}

/* ====================== SECTION 9 — FINAL CTA ====================== */
function FinalCTA({ onQuote }){
  return (
    <section id="quote" className="section" style={{position:"relative",overflow:"hidden",textAlign:"center"}}>
      <img src="Logo's/1logo.png" alt="" aria-hidden="true" loading="lazy" decoding="async"
        style={{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%,-50%)",width:"min(1100px,150%)",maxWidth:"none",opacity:.05,pointerEvents:"none"}}/>
      <div className="wrap" style={{position:"relative",zIndex:2}}>
        <Rw><div className="eyebrow" style={{justifyContent:"center"}}>Let&rsquo;s build</div></Rw>
        <Rw d="1" as="h2" className="display" style={{fontSize:"clamp(44px,8vw,128px)",margin:"22px 0 0",lineHeight:.92}}>
          Pour something<br/>that <span className="chrome-text">outlasts</span> us.
        </Rw>
        <Rw d="2" as="p" style={{margin:"26px auto 0",maxWidth:"54ch",color:"var(--muted)",fontSize:"clamp(16px,1.4vw,20px)"}}>
          Fixed quotes, locked dates, and a finish you&rsquo;ll point out to visitors. Tell us about your site and we&rsquo;ll come back the same day.
        </Rw>
        <Rw d="3" style={{display:"flex",gap:"14px",justifyContent:"center",marginTop:"40px",flexWrap:"wrap"}}>
          <button className="btn btn--solid btn--lg" onClick={onQuote}>Get a free quote <Aw/></button>
          <a className="btn btn--ghost btn--lg" href={`tel:${PDm.phone.replace(/\s/g,"")}`}><Iw name="phone" s={16}/> {PDm.phone}</a>
        </Rw>
        <Rw d="4" style={{display:"flex",gap:"28px",justifyContent:"center",marginTop:"40px",flexWrap:"wrap"}}>
          {["Fully licensed & insured","Written workmanship warranty","Free on-site consult","Same-day response"].map(s=>(
            <span key={s} className="mono" style={{fontSize:"12px",letterSpacing:".05em",color:"var(--muted)",display:"flex",alignItems:"center",gap:"9px"}}><Iw name="check" s={15}/>{s}</span>
          ))}
        </Rw>
      </div>
    </section>
  );
}

/* ====================== FOOTER ====================== */
function Footer(){
  return (
    <footer style={{background:"var(--ink)",borderTop:"1px solid var(--line)"}}>
      <TB style={{opacity:.22}}/>
      <div className="wrap" style={{paddingBlock:"clamp(50px,6vw,84px)"}}>
        <div className="foot-grid" style={{display:"grid",gridTemplateColumns:"1.6fr 1fr 1fr 1.2fr",gap:"clamp(30px,4vw,56px)"}}>
          <div className="foot-brand">
            <img className="foot-logo" src="Logo's/1logo.png" alt="Poly Concreting" loading="lazy" decoding="async" width="280" height="70" style={{width:"min(280px,80%)",marginBottom:"22px"}}/>
            <p className="foot-brand-copy" style={{color:"var(--muted)",maxWidth:"34ch",fontSize:"15px"}}>Quality residential and small commercial concreting. Proudly Australian Polynesian-owned, Morayfield based, serving South East Queensland.</p>
          </div>
          <div>
            <div className="mono foot-h">SERVICES</div>
            <div style={{display:"flex",flexDirection:"column",gap:"11px",marginTop:"18px"}}>
              {PDm.services.map(([name,id])=> <a key={id} href={`Services#${id}`} className="foot-l">{name}</a>)}
            </div>
          </div>
          <div>
            <div className="mono foot-h">SERVICE AREAS</div>
            <div style={{display:"flex",flexDirection:"column",gap:"11px",marginTop:"18px"}}>
              {PDm.regions.map(r=> <a key={r.id} href="ServiceAreas" className="foot-l">{r.name}</a>)}
            </div>
          </div>
          <div>
            <div className="mono foot-h">GET IN TOUCH</div>
            <div style={{display:"flex",flexDirection:"column",gap:"16px",marginTop:"18px"}}>
              <a href={`tel:${PDm.phone.replace(/\s/g,"")}`} className="display" style={{fontSize:"26px"}}>{PDm.phone}</a>
              <a href={`mailto:${PDm.email}`} className="foot-l" style={{fontSize:"15px"}}>{PDm.email}</a>
              <div style={{color:"var(--muted)",fontSize:"15px",display:"flex",gap:"9px",alignItems:"flex-start"}}><Iw name="pin" s={16}/> Morayfield QLD 4506<br/>Servicing all of SEQ</div>
              <div style={{display:"flex",gap:"10px",marginTop:"4px"}}>
                <a href="https://www.instagram.com/poly_concreting/" target="_blank" rel="noopener noreferrer" className="mono" style={{width:"38px",height:"38px",borderRadius:"50%",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",fontSize:"11px",color:"var(--muted)",textDecoration:"none"}}>IG</a>
              <a href="https://www.facebook.com/people/Poly-concreting/100091605109959/" target="_blank" rel="noopener noreferrer" className="mono" style={{width:"38px",height:"38px",borderRadius:"50%",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",fontSize:"11px",color:"var(--muted)",textDecoration:"none"}}>FB</a>
              </div>
            </div>
          </div>
        </div>
        <div className="foot-bottom" style={{display:"flex",justifyContent:"space-between",alignItems:"center",flexWrap:"wrap",gap:"14px",marginTop:"clamp(40px,5vw,64px)",paddingTop:"26px",borderTop:"1px solid var(--line)"}}>
          <span className="mono" style={{fontSize:"11.5px",color:"var(--faint)",letterSpacing:".05em"}}>© {new Date().getFullYear()} Poly Concreting · QBCC 15393395 · ABN 25 669 696 673</span>
          <span className="mono" style={{fontSize:"11.5px",color:"var(--faint)",letterSpacing:".05em"}}>Privacy · Terms · Sitemap · Website built by <a href="https://www.rastrick.com.au" target="_blank" rel="noopener noreferrer" style={{color:"var(--faint)",textDecoration:"underline"}}>RASTRICK. MADE</a></span>
        </div>
      </div>
    </footer>
  );
}

/* ====================== COMPOSER ====================== */
function PC_SECTIONS({ t, onQuote }){
  const { Metrics, WhyPoly, Process } = window.PC_S;
  const { JobConfigurator, FinishVisualiser, ProjectReel } = window.PC_INTERACTIVE;
  return (
    <React.Fragment>
      <Metrics/>
      <Testimonials/>
      {t.patternBands && <TB/>}
      <JobConfigurator onQuote={onQuote}/>
      <WhyPoly/>
      <FinishVisualiser/>
      <ProjectReel onQuote={onQuote}/>
      <Process/>
      {t.patternBands && <TB/>}
      <Areas/>
      <BeforeAfter/>
      <FinalCTA onQuote={onQuote}/>
      <Footer/>
    </React.Fragment>
  );
}
window.PC_SECTIONS = PC_SECTIONS;
window.PC_S2 = { Areas, BeforeAfter, Testimonials, FinalCTA, Footer };
