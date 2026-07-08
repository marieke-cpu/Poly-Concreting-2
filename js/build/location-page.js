(()=>{
const {Reveal:LR,Ph:LPh,Eyebrow:LEb,Arrow:LAr,Icon:LIc}=window.PC_UI;
const LD=window.PC_DATA;
const LL=window.PC_LOCATIONS;
const LNav=window.PC_HERO.Nav;
const LFooter=window.PC_S2.Footer;
const h=React.createElement;
const LOCATION_HERO_VIDEOS=["assets/video/hero.mp4","assets/video/hero3.mp4","assets/video/hero4.mp4","assets/video/hero1.mp4"];

function getLocation(){
  const slug=document.getElementById("root").dataset.location;
  return LL.find(l=>l.id===slug)||LL[0];
}

function playLocationHeroVideo(video){
  if(!video) return;
  video.muted=true;
  video.playsInline=true;
  video.play()?.catch?.(()=>{});
}

function LocationHero({loc,onQuote}){
  const [videoIdx,setVideoIdx]=React.useState(0);
  const videoRef=React.useRef(null);
  const topServices=(loc.services||[]).slice(0,4);
  const suburbPreview=(loc.nearbySuburbs||[]).slice(0,4).join(", ");
  const proofPoints=[
    "Site prep, drainage and reinforcement checked before pour",
    "Driveways, slabs, patios, paths and decorative finishes",
    `Working across ${loc.name}${suburbPreview?`, ${suburbPreview}`:""}`,
  ];

  React.useEffect(()=>{
    const resume=()=>playLocationHeroVideo(videoRef.current);
    resume();
    const id=window.setInterval(resume,2200);
    const events=["pageshow","focus","scroll","touchend","pointerup"];
    events.forEach(ev=>window.addEventListener(ev,resume,{passive:true}));
    document.addEventListener("visibilitychange",resume);
    return ()=>{
      window.clearInterval(id);
      events.forEach(ev=>window.removeEventListener(ev,resume));
      document.removeEventListener("visibilitychange",resume);
    };
  },[videoIdx]);

  const nextVideo=()=>setVideoIdx(i=>(i+1)%LOCATION_HERO_VIDEOS.length);

  return h("section",{className:"hero hero--cinematic location-video-hero loc-hero",style:{minHeight:"100svh",display:"flex",alignItems:"flex-end",position:"relative",overflow:"hidden",borderBottom:"1px solid var(--line)"}},
    h("div",{className:"hero-media",style:{position:"absolute",inset:0,overflow:"hidden"}},
      h("video",{ref:videoRef,key:videoIdx,className:"hero-bg-video",autoPlay:true,muted:true,playsInline:true,preload:"metadata",poster:"assets/img/hero-poster.webp",onLoadedMetadata:e=>playLocationHeroVideo(e.currentTarget),onCanPlay:e=>playLocationHeroVideo(e.currentTarget),onPause:e=>window.setTimeout(()=>playLocationHeroVideo(e.currentTarget),120),onEnded:nextVideo,style:{position:"absolute",inset:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},src:LOCATION_HERO_VIDEOS[videoIdx]}),
      h("div",{className:"hero-media__shade",style:{position:"absolute",inset:0,background:"linear-gradient(90deg,rgba(8,8,10,.9) 0%,rgba(8,8,10,.66) 42%,rgba(8,8,10,.32) 72%,rgba(8,8,10,.6) 100%)"}}),
      h("div",{className:"hero-media__fade",style:{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.95) 0%,rgba(8,8,10,.2) 46%,rgba(8,8,10,.7) 100%)"}})
    ),
    h("div",{className:"wrap",style:{position:"relative",zIndex:3,width:"100%",paddingTop:"clamp(170px,21vh,220px)",paddingBottom:"clamp(42px,8vh,86px)"}},
      h("div",{className:"loc-hero__content"},
        h("div",{className:"hero-copy loc-hero__copy"},
          h(LR,null,h(LEb,{n:"-"},loc.region," · ",loc.state," ",loc.postcode)),
          h(LR,{d:"1",as:"h1",className:"display",style:{fontSize:"clamp(46px,7.4vw,116px)",margin:"20px 0 0",lineHeight:.9,maxWidth:"11ch"}},loc.heading),
          h(LR,{d:"2",as:"p",style:{margin:"26px 0 0",color:"#f4f3ef",fontSize:"clamp(17px,1.35vw,21px)",maxWidth:"52ch",lineHeight:1.58,textShadow:"0 2px 18px rgba(0,0,0,.72)"}},loc.tagline," Built with proper base preparation, clean drainage and finishes that suit local homes."),
          h(LR,{d:"3"},
            h("div",{className:"loc-hero__chips",style:{display:"flex",flexWrap:"wrap",gap:"8px",marginTop:"24px"}},
              ["Local crew","Fixed written quotes","Google reviewed","Residential & small commercial"].map(label=>
                h("span",{key:label,className:"mono",style:{fontSize:"11px",letterSpacing:".08em",textTransform:"uppercase",color:"var(--text)",border:"1px solid rgba(255,255,255,.22)",background:"rgba(8,8,10,.34)",backdropFilter:"blur(10px)",padding:"7px 10px",borderRadius:"4px"}},label)
              )
            )
          ),
          h(LR,{d:"4"},
            h("div",{className:"svc-cta-row",style:{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"32px"}},
              h("button",{className:"btn btn--solid btn--lg",onClick:onQuote},"Get a free quote ",h(LAr,null)),
              h("a",{className:"btn btn--ghost btn--lg",href:`tel:${LD.phone.replace(/\s/g,"")}`},h(LIc,{name:"phone",s:16})," ",LD.phone)
            )
          )
        ),
        h(LR,{d:"2",className:"loc-hero__panel-wrap"},
          h("aside",{className:"loc-hero__panel"},
            h("div",{className:"mono",style:{fontSize:"10px",letterSpacing:".18em",textTransform:"uppercase",color:"var(--faint)"}},"Quote-ready concreting in ",loc.name),
            h("h2",{className:"display",style:{fontSize:"clamp(24px,2.2vw,34px)",lineHeight:.96,margin:"14px 0 0"}},"Tell us the job.",h("br"),"We handle the rest."),
            h("div",{style:{display:"grid",gap:"10px",marginTop:"20px"}},
              proofPoints.map((point,i)=>
                h("div",{key:point,style:{display:"grid",gridTemplateColumns:"28px 1fr",gap:"10px",alignItems:"start"}},
                  h("span",{className:"mono",style:{width:"28px",height:"28px",display:"grid",placeItems:"center",border:"1px solid var(--line-2)",borderRadius:"50%",fontSize:"10px",color:"var(--text)"}},String(i+1).padStart(2,"0")),
                  h("p",{style:{margin:"2px 0 0",fontSize:"13.5px",lineHeight:1.5,color:"var(--muted)"}},point)
                )
              )
            ),
            h("div",{style:{borderTop:"1px solid var(--line)",marginTop:"20px",paddingTop:"18px"}},
              h("div",{className:"mono",style:{fontSize:"10px",letterSpacing:".15em",textTransform:"uppercase",color:"var(--faint)",marginBottom:"10px"}},"Popular locally"),
              h("div",{style:{display:"grid",gridTemplateColumns:"repeat(2,minmax(0,1fr))",gap:"8px"}},
                topServices.map(svc=>h("a",{key:svc.name,href:svc.href,style:{border:"1px solid var(--line)",background:"rgba(255,255,255,.04)",borderRadius:"var(--r)",padding:"10px 11px",fontSize:"13px",fontWeight:700,lineHeight:1.2}},svc.name))
              )
            ),
            h("button",{className:"btn btn--solid",onClick:onQuote,style:{width:"100%",justifyContent:"center",marginTop:"20px"}},"Check availability ",h(LAr,null))
          )
        )
      ),
      h(LR,{d:"5"},
        h("div",{className:"hero-stats loc-hero__stats",style:{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",marginTop:"clamp(30px,4vw,48px)",border:"1px solid rgba(255,255,255,.16)",background:"rgba(8,8,10,.32)",backdropFilter:"blur(12px)",borderRadius:"var(--r)",overflow:"hidden"}},
          LD.metrics.map((m,i)=>
            h("div",{key:i,style:{borderRight:i<LD.metrics.length-1?"1px solid rgba(255,255,255,.12)":"none",padding:"clamp(15px,1.7vw,22px)"}},
              h("div",{className:"display chrome-text",style:{fontSize:"clamp(22px,2.5vw,36px)",lineHeight:.95}},m.prefix||"",m.value,m.suffix),
              h("div",{className:"mono",style:{fontSize:"10.5px",letterSpacing:".06em",color:"var(--muted)",marginTop:"6px"}},m.sub)
            )
          )
        )
      )
    )
  );
}

function LocationPage(){
  const loc=getLocation();
  const [quote,setQuote]=React.useState(false);
  const [faqOpen,setFaqOpen]=React.useState(0);
  const nearby=LD.projects.filter(p=>loc.projectIds&&loc.projectIds.includes(p.id));

  return h("div",{id:"top"},
    h(LNav,{phone:LD.phone,onQuote:()=>setQuote(true)}),
    h("main",null,
      h(LocationHero,{loc,onQuote:()=>setQuote(true)}),
      h("section",{className:"section"},
        h("div",{className:"wrap"},
          h("div",{style:{display:"grid",gridTemplateColumns:"1.3fr .7fr",gap:"clamp(32px,5vw,80px)",alignItems:"start"}},
            h("div",null,
              h(LR,null,h(LEb,{n:"01"},"Why ",loc.name)),
              h(LR,{d:"1",as:"h2",className:"display",style:{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}},"Local knowledge.",h("br"),"Better concrete."),
              h("div",{style:{marginTop:"clamp(24px,3vw,36px)",display:"flex",flexDirection:"column",gap:"20px"}},
                loc.intro.map((p,i)=>h(LR,{key:i,d:String(i+2),as:"p",style:{fontSize:"clamp(16px,1.35vw,19px)",lineHeight:1.7,color:i===0?"var(--text)":"var(--muted)"}},p))
              )
            ),
            h(LR,{d:"1",style:{position:"sticky",top:"100px"}},
              h("div",{style:{background:"var(--panel)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",padding:"clamp(24px,2.6vw,36px)"}},
                h("div",{className:"mono",style:{fontSize:"10px",letterSpacing:".16em",color:"var(--faint)",marginBottom:"16px"}},"NEARBY SUBURBS WE SERVICE"),
                h("div",{style:{display:"flex",flexWrap:"wrap",gap:"8px"}},
                  loc.nearbySuburbs.map(s=>h("span",{key:s,className:"mono",style:{fontSize:"12px",letterSpacing:".04em",color:"var(--muted)",border:"1px solid var(--line-2)",borderRadius:"40px",padding:"6px 12px"}},s))
                ),
                h("div",{style:{marginTop:"22px",paddingTop:"18px",borderTop:"1px solid var(--line)"}},
                  h("button",{className:"btn btn--solid",style:{width:"100%",justifyContent:"center"},onClick:()=>setQuote(true)},"Get a free quote in ",loc.name," ",h(LAr,null))
                )
              )
            )
          )
        )
      ),
      h("section",{className:"section",style:{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}},
        h("div",{className:"wrap"},
          h(LR,null,h(LEb,{n:"02"},"What we do in ",loc.name)),
          h(LR,{d:"1",as:"h2",className:"display",style:{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}},"Every concrete job,",h("br"),"done right."),
          h("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(260px,1fr))",gap:"clamp(10px,1.2vw,14px)",marginTop:"clamp(32px,4vw,52px)"}},
            loc.services.map((svc,i)=>
              h(LR,{key:svc.name,d:String(i)},
                h("a",{href:svc.href,style:{display:"flex",flexDirection:"column",background:"var(--base)",border:"1px solid var(--line)",borderRadius:"var(--r-lg)",overflow:"hidden",textDecoration:"none",transition:"border-color .25s, transform .25s var(--ease-out)",height:"100%"},onMouseEnter:e=>e.currentTarget.style.borderColor="var(--line-3)",onMouseLeave:e=>e.currentTarget.style.borderColor="var(--line)"},
                  h("div",{style:{position:"relative",aspectRatio:"16/10",background:"var(--panel)",overflow:"hidden",borderBottom:"1px solid var(--line)"}},
                    h(LPh,{label:null,src:svc.img,pos:svc.pos||"center",style:{position:"absolute",inset:0}}),
                    h("div",{style:{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.68),rgba(8,8,10,.08) 58%)"}})
                  ),
                  h("div",{style:{padding:"clamp(18px,2vw,24px)",display:"flex",flexDirection:"column",gap:"10px",flex:1}},
                    h("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"flex-start",gap:"12px"}},
                      h("h3",{className:"display",style:{fontSize:"clamp(18px,1.7vw,22px)",lineHeight:1,margin:0}},svc.name),
                      h(LAr,null)
                    ),
                    h("p",{style:{margin:0,fontSize:"14px",color:"var(--muted)",lineHeight:1.6}},svc.desc)
                  )
                )
              )
            )
          )
        )
      ),
      nearby.length>0&&h("section",{className:"section"},
        h("div",{className:"wrap"},
          h(LR,null,h(LEb,{n:"03"},"Recent work nearby")),
          h(LR,{d:"1",as:"h2",className:"display",style:{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}},"Work on the ground."),
          h("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(min(100%,260px),1fr))",gap:"clamp(10px,1.2vw,14px)",marginTop:"clamp(28px,3.5vw,44px)"}},
            nearby.map((p,i)=>h(LR,{key:p.id,d:String(i)},
              h("a",{href:`Projects#${p.id}`,style:{display:"block",position:"relative",aspectRatio:"4/3",borderRadius:"var(--r-lg)",overflow:"hidden",border:"1px solid var(--line)",textDecoration:"none"}},
                h(LPh,{label:null,src:p.img,pos:p.pos||"center",style:{position:"absolute",inset:0}}),
                h("div",{style:{position:"absolute",inset:0,background:"linear-gradient(0deg,rgba(8,8,10,.9) 20%,rgba(8,8,10,.2) 65%,transparent)"}}),
                h("div",{style:{position:"absolute",bottom:0,left:0,right:0,padding:"clamp(14px,1.8vw,20px)"}},
                  h("span",{className:"mono",style:{fontSize:"10px",letterSpacing:".1em",color:"var(--muted)"}},p.cat," · ",p.loc),
                  h("div",{className:"display",style:{fontSize:"clamp(16px,1.5vw,20px)",marginTop:"4px"}},p.title)
                )
              )
            ))
          ),
          h(LR,{d:"2",style:{marginTop:"22px",textAlign:"center"}},h("a",{href:"Projects",className:"btn btn--ghost"},"View all projects ",h(LAr,null)))
        )
      ),
      h("section",{className:"section",style:{background:"var(--panel)",borderTop:"1px solid var(--line)",borderBottom:"1px solid var(--line)"}},
        h("div",{className:"wrap"},
          h(LR,null,h(LEb,{n:nearby.length>0?"04":"03"},"Common questions")),
          h(LR,{d:"1",as:"h2",className:"display",style:{fontSize:"clamp(30px,3.8vw,56px)",margin:"20px 0 0",lineHeight:.95}},loc.name," concreting",h("br"),"FAQs."),
          h("div",{style:{maxWidth:"760px",marginTop:"clamp(32px,4vw,52px)"}},
            h("div",{style:{borderTop:"1px solid var(--line)"}},
              loc.faqs.map((f,i)=>h(LR,{key:i,d:String(i)},
                h("div",{style:{borderBottom:"1px solid var(--line)"}},
                  h("button",{onClick:()=>setFaqOpen(faqOpen===i?-1:i),style:{width:"100%",textAlign:"left",background:"none",border:"none",cursor:"pointer",padding:"22px 0",display:"flex",justifyContent:"space-between",alignItems:"center",gap:"20px",color:"var(--text)"}},
                    h("span",{style:{fontSize:"clamp(15px,1.3vw,18px)",fontWeight:600}},f.q),
                    h("span",{style:{flexShrink:0,width:"30px",height:"30px",borderRadius:"50%",border:"1px solid var(--line-2)",display:"grid",placeItems:"center",transition:"transform .3s",transform:faqOpen===i?"rotate(45deg)":"none",color:"var(--muted)"}},
                      h("svg",{width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",stroke:"currentColor",strokeWidth:"1.5"},h("path",{d:"M7 1v12M1 7h12"}))
                    )
                  ),
                  h("div",{style:{maxHeight:faqOpen===i?"300px":"0",overflow:"hidden",transition:"max-height .4s var(--ease)"}},
                    h("p",{style:{margin:"0 0 24px",color:"var(--muted)",fontSize:"16px",lineHeight:1.65,maxWidth:"62ch",paddingRight:"40px"}},f.a)
                  )
                )
              ))
            )
          )
        )
      ),
      window.PC_REVIEWS&&h(window.PC_REVIEWS,null),
      h("section",{style:{borderTop:"1px solid var(--line)",background:"var(--panel-2)",padding:"clamp(70px,9vw,110px) 0"}},
        h("div",{className:"wrap"},
          h("div",{style:{maxWidth:"720px"}},
            h(LR,null,h(LEb,{n:nearby.length>0?"06":"05"},"Ready to start")),
            h(LR,{d:"1",as:"h2",className:"display",style:{fontSize:"clamp(38px,5.5vw,86px)",margin:"20px 0 0",lineHeight:.93}},"Get a fixed quote",h("br"),"in ",loc.name," today."),
            h(LR,{d:"2",as:"p",style:{margin:"22px 0 0",color:"var(--muted)",fontSize:"clamp(16px,1.3vw,19px)",maxWidth:"44ch",lineHeight:1.65}},"Tell us about your site and we'll come back with a locked price, same day. No obligation. No follow-up calls unless you want them."),
            h(LR,{d:"3",style:{display:"flex",gap:"14px",marginTop:"36px",flexWrap:"wrap"}},
              h("button",{className:"btn btn--solid btn--lg",onClick:()=>setQuote(true)},"Start my quote ",h(LAr,null)),
              h("a",{className:"btn btn--ghost btn--lg",href:`tel:${LD.phone.replace(/\s/g,"")}`},h(LIc,{name:"phone",s:16})," ",LD.phone)
            )
          )
        )
      )
    ),
    h(LFooter,null),
    window.PC_QUOTE&&h(window.PC_QUOTE,{open:quote,onClose:()=>setQuote(false)})
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(h(LocationPage,null));
})();
