/* Poly Concreting — app root */
const { Nav, Hero } = window.PC_HERO;
const D = window.PC_DATA;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroStyle": "split",
  "accent": "chrome",
  "motion": true,
  "patternBands": true
}/*EDITMODE-END*/;

function App(){
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [quote, setQuote] = React.useState(false);
  const openQuote = ()=> setQuote(true);

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

  return (
    <div id="top">
      <Nav phone={D.phone} onQuote={openQuote}/>
      <main>
        <Hero variant={t.heroStyle} accent={t.accent} motion={t.motion} onQuote={openQuote}/>
        {window.PC_SECTIONS && <window.PC_SECTIONS t={t} onQuote={openQuote}/>}
      </main>

      {window.PC_QUOTE && <window.PC_QUOTE open={quote} onClose={()=>setQuote(false)}/>}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero treatment"/>
        <TweakRadio label="Layout" value={t.heroStyle}
          options={["cinematic","editorial","split"]}
          onChange={(v)=>setTweak("heroStyle",v)}/>
        <TweakRadio label="Headline accent" value={t.accent}
          options={["chrome","white"]}
          onChange={(v)=>setTweak("accent",v)}/>
        <TweakSection label="Motion & texture"/>
        <TweakToggle label="Cinematic motion" value={t.motion}
          onChange={(v)=>setTweak("motion",v)}/>
        <TweakToggle label="Tatau pattern bands" value={t.patternBands}
          onChange={(v)=>setTweak("patternBands",v)}/>
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
