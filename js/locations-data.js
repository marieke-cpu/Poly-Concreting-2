/* ============================================================
   Poly Concreting — Location Pages Data
   window.PC_LOCATIONS
   ============================================================ */

const LOCATION_SERVICES = [
  { name: "Driveways", href: "driveways", img: "assets/img/optimized/photos-driveways-plain4.webp", pos: "center 58%", desc: "Plain, broom, coloured and exposed aggregate driveways built with proper base prep and drainage." },
  { name: "House & Shed Slabs", href: "slabs", img: "assets/img/optimized/photos-trowel-slab1.webp", pos: "center", desc: "Reinforced house, garage, shed and workshop slabs prepared to the right specification." },
  { name: "Pathways", href: "pathways", img: "assets/img/path-side-drain.webp", pos: "center 55%", desc: "Side access, garden paths and connecting walkways with clean falls and tidy edges." },
  { name: "Outdoor Entertaining", href: "outdoor", img: "assets/img/patio-broom.webp", pos: "center 55%", desc: "Patio and alfresco concrete shaped, drained and finished for Queensland outdoor living." },
  { name: "Pool Surrounds", href: "pools", img: "assets/img/pool-coping.webp", pos: "center", desc: "Slip-resistant pool surrounds, coping tie-ins and wet-zone drainage details." },
  { name: "Small Commercial", href: "commercial", img: "assets/img/optimized/photos-trowel-slab2.webp", pos: "center 55%", desc: "Shopfront slabs, hardstand, small commercial floors and documented pours." },
  { name: "Concrete Resurfacing", href: "resurfacing", img: "assets/img/slab-float-bush.webp", pos: "center", desc: "Refresh tired existing concrete with a new decorative surface where the slab is sound." },
  { name: "Trowel Finish", href: "trowel", img: "assets/img/trowel-IMG_0262.webp", pos: "center", desc: "Smooth, dense concrete finish for slabs, garages and covered spaces." },
  { name: "Broom Finish", href: "broom", img: "assets/img/broom1.webp", pos: "center", desc: "Practical textured finish for driveways, paths and outdoor concrete that needs grip." },
  { name: "Swirl Finish", href: "swirl", img: "assets/img/place-broom.webp", pos: "center", desc: "Decorative hand-finished texture that adds movement and grip to plain concrete." },
  { name: "Exposed Aggregate", href: "exposedaggregate", img: "assets/img/exposed1.webp", pos: "center 60%", desc: "Decorative stone finish for premium driveways, paths, patios and pool surrounds." },
  { name: "Coloured Concrete", href: "coloured", img: "assets/img/coloured3.webp", pos: "center", desc: "Integral colour options to match your home, landscape and street appeal." },
  { name: "Stamped Concrete", href: "stamped", img: "assets/img/stamped-hero.webp", pos: "center", desc: "Patterned concrete with stone, slate, cobble and tile-style surface impressions." },
  { name: "Covercrete", href: "covercrete", img: "assets/img/covercrete-hero.webp", pos: "center", desc: "Spray-on decorative overlay for resurfacing existing concrete with colour and stencil options." },
];

window.PC_LOCATIONS = [

  /* ── 1. MORAYFIELD ─────────────────────────────────────── */
  {
    id: "morayfield",
    name: "Morayfield",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4506",
    heading: "Concreting in Morayfield",
    tagline: "Local concreters who know the ground beneath your feet.",
    intro: [
      "Morayfield is home base for Poly Concreting, and after years of working across North Morayfield, Oakwood Estate and the acreage pockets along Morayfield Road, we know this area like the back of our hand. The reactive clay soils here are no secret — they shrink in dry summers and swell significantly after rain, which means concrete work has to be done right from the sub-base up. We always compact the formation layer thoroughly and use the correct steel reinforcement to give your slab or driveway the longevity it deserves.",
      "Acreage blocks are common throughout Morayfield, and that brings a specific mix of jobs: large shed slabs, long double-width driveways, concrete pathways between the house and the shed, and outdoor entertaining areas that need to stand up to heavy use. In the established residential streets closer to the town centre, we regularly replace driveways that have cracked and lifted over decades of clay movement, upgrading them to exposed aggregate or coloured concrete to lift the whole street appeal.",
      "Being local means we can respond quickly, avoid long travel fees, and take real pride in work that our neighbours will see every day. Whether you need a simple broom-finished pathway or a full decorative driveway with feature borders, Poly Concreting is your Morayfield concreter."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Caboolture", "Burpengary", "Narangba", "Dakabin", "Kallangur",
      "Elimbah", "Wamuran", "Moorina", "Upper Caboolture", "Moodlu"
    ],
    faqs: [
      {
        q: "Do you service all of Morayfield including North Morayfield and Oakwood Estate?",
        a: "Yes — Morayfield is our home suburb and we cover every street, from the newer estates in North Morayfield through to acreage properties further out. No travel surcharge applies."
      },
      {
        q: "My driveway keeps cracking. Is that a Morayfield soil problem?",
        a: "Very likely yes. Morayfield has reactive clay soils that move with moisture changes, and older driveways often weren't built with the sub-base preparation needed to handle it. We compact the formation layer and use appropriate reinforcement so your new driveway won't repeat the pattern."
      },
      {
        q: "What affects the quote for a new concrete driveway in Morayfield?",
        a: "The final quote depends on access, driveway size, finish, drainage, excavation and site preparation. We measure the site properly and send a fixed written quote, so there are no public guesswork figures or surprises."
      },
      {
        q: "Can you pour a shed slab on my acreage block?",
        a: "Absolutely — shed and garage slabs are a big part of what we do in Morayfield. We handle the boxing, compaction, steel reinforcement, and pour, and can advise on slab thickness based on the intended load."
      },
      {
        q: "How long does a concrete driveway take to cure before I can drive on it?",
        a: "We recommend keeping vehicles off for at least 7 days. The concrete reaches most of its structural strength by 28 days. We'll walk you through care instructions after the pour."
      }
    ],
    metaTitle: "Concreting Morayfield | Poly Concreting",
    metaDesc: "Local Morayfield concreters — driveways, shed slabs, patios & pathways. Experts in reactive clay soils. Free quotes. Call Poly Concreting today.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["morayfield-patio", "caboolture-drive", "plain-broom-drive", "wamuran-drive", "wamuran-pathway", "side-drain", "acreage", "commercial"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Morayfield",
      "description": "Professional concreting services in Morayfield QLD including driveways, shed slabs, patios, pathways and pool surrounds.",
      "url": "https://polyconcretingqld.com.au/morayfield-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Morayfield",
        "addressRegion": "QLD",
        "postalCode": "4506",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.11,
        "longitude": 152.97
      },
      "areaServed": [
        "Morayfield", "North Morayfield", "Caboolture", "Burpengary", "Narangba", "Dakabin"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 2. CABOOLTURE ──────────────────────────────────────── */
  {
    id: "caboolture",
    name: "Caboolture",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4510",
    heading: "Concreting in Caboolture",
    tagline: "Solid concrete work for a suburb that's constantly growing.",
    intro: [
      "Caboolture has been one of Queensland's fastest-growing local areas for over a decade, and with that growth comes enormous demand for quality concreting. The soils throughout Caboolture — particularly in older residential streets and the new Caboolture South development corridor — are predominantly clay-heavy, which requires careful site preparation to prevent the cracking and heaving that plague poorly-built concrete work. Poly Concreting understands the local ground conditions and works to the standards that Caboolture homes and yards demand.",
      "The job mix in Caboolture reflects the area's diversity: newer homes in Caboolture South getting their first driveways poured, older properties on the western side of town replacing crumbling original slabs, and acreage properties along Pumicestone Road needing large shed slabs and concrete hardstand areas. We handle them all. Exposed aggregate driveways are particularly popular in the newer estates as homeowners look to lift their street appeal from the start, while practical broom-finish concrete remains the go-to for utility areas and shed floors.",
      "Poly Concreting is based just down the road in Morayfield, meaning fast response times, no excess travel costs, and a genuine commitment to the Caboolture community. We've built a strong reputation here through consistent, honest work — and we intend to keep it that way."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Morayfield", "Upper Caboolture", "Caboolture South", "Wamuran",
      "Elimbah", "Burpengary East", "Moorina", "Moodlu", "Rocksberg", "Bellmere"
    ],
    faqs: [
      {
        q: "Do you service Caboolture South and the newer development areas?",
        a: "Yes, we regularly work throughout Caboolture South and the surrounding growth corridors. These newer estates are a large part of our work — first-time driveway pours on new builds and decorative finishes for homes wanting to stand out."
      },
      {
        q: "I have a clay soil backyard in Caboolture. What concrete finish is best for a patio?",
        a: "On clay-heavy sites we always compact the sub-base thoroughly and may recommend a slightly thicker slab. For finish, broom or exposed aggregate both work well — exposed aggregate adds texture that also helps with grip in wet weather."
      },
      {
        q: "Can you remove and replace my existing cracked driveway?",
        a: "Absolutely. Demo and removal of the old slab is included in our driveway replacement service. We haul away the broken concrete, prepare the sub-base correctly, and pour fresh."
      },
      {
        q: "What affects a shed slab quote in Caboolture?",
        a: "Shed slab quotes depend on size, thickness, reinforcement, access, excavation and the intended load. We'll measure the site and provide a firm, itemised quote after the scope is clear."
      },
      {
        q: "Are you available for urgent or time-sensitive jobs in Caboolture?",
        a: "Being based nearby in Morayfield, we can often accommodate shorter lead times than contractors travelling from Brisbane. Call us and we'll do our best to fit you in."
      }
    ],
    metaTitle: "Concreting Caboolture | Poly Concreting",
    metaDesc: "Expert concreting in Caboolture — driveways, slabs, patios & exposed aggregate. Clay soil specialists. Fast local response. Free quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["plain-broom-drive", "caboolture-drive", "side-drain", "wamuran-drive", "wamuran-pathway", "wamuran-pathway-2", "acreage", "commercial"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Caboolture",
      "description": "Professional concreting in Caboolture QLD — driveways, shed slabs, patios, exposed aggregate and resurfacing.",
      "url": "https://polyconcretingqld.com.au/caboolture-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Caboolture",
        "addressRegion": "QLD",
        "postalCode": "4510",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.07,
        "longitude": 152.95
      },
      "areaServed": [
        "Caboolture", "Caboolture South", "Upper Caboolture", "Wamuran", "Elimbah", "Moorina"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 3. NORTH LAKES ─────────────────────────────────────── */
  {
    id: "north-lakes",
    name: "North Lakes",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4509",
    heading: "Concreting in North Lakes",
    tagline: "Decorative concrete for North Lakes' modern homes.",
    intro: [
      "North Lakes is a planned master-planned community built largely over the last two decades, and that shows in the types of concrete work we're called to do here. Many homes in estates like Mango Hill and Mango Hill East were built with builder-grade driveways that homeowners are now looking to upgrade. Exposed aggregate and coloured concrete are the dominant choices — the modern rendered facades and contemporary landscaping of North Lakes homes demand a finish that matches their street appeal. Poly Concreting has completed dozens of driveway upgrades across the suburb.",
      "Pool surrounds are another major job category in North Lakes. With block sizes typically in the small-to-medium range, pools and outdoor entertaining areas are squeezed for space, which means careful formwork and precise finishing. We specialise in exposed aggregate pool surrounds and coping that look sharp while providing the slip resistance required around water. Alfresco areas joining seamlessly to the pool deck are a popular request, and we coordinate the whole pour to keep it cohesive.",
      "The sandy loam soils around North Lakes are more workable than the heavy clays further north, but they still need proper compaction to avoid subsidence under slabs. Our sub-base preparation is thorough regardless of soil type, and we use steel mesh reinforcement as standard across all residential slabs and driveways in the area."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Mango Hill", "Mango Hill East", "Kallangur", "Narangba", "Dakabin",
      "Burpengary", "Griffin", "Kurwongbah", "Petrie", "Lawnton"
    ],
    faqs: [
      {
        q: "We want to upgrade our builder driveway to exposed aggregate. How does the process work?",
        a: "We cut out and demolish the existing slab, prepare the sub-base, form up the new driveway, pour the concrete, seed the aggregate, and wash it back to the finish you've chosen. Most residential driveways in North Lakes take one day to pour, then 7 days before you can drive on it."
      },
      {
        q: "Can you match our pool surround to our existing paving or rendered walls?",
        a: "Yes — we work through the colour and aggregate options with you before the pour. We can match tones to existing rendered walls, feature tiles, or landscaping. Bring photos to your quote appointment and we'll find the right match."
      },
      {
        q: "What's the best concrete finish for a pool surround in North Lakes?",
        a: "Exposed aggregate is our most popular recommendation for pool surrounds — the texture provides natural grip when wet, it looks great, and it holds its appearance over time without the maintenance some other finishes need."
      },
      {
        q: "Do you work in the Mango Hill estates as well?",
        a: "Yes. Mango Hill and Mango Hill East are effectively part of the same growth corridor as North Lakes, and we cover both regularly. Same team, same standard."
      },
      {
        q: "How long does a driveway upgrade take from quote to completion?",
        a: "We typically get quotes turned around within 48 hours. Lead times for scheduling are usually 1–3 weeks depending on the season. The pour itself is usually done in a single day for standard residential driveways."
      }
    ],
    metaTitle: "Concreting North Lakes | Poly Concreting",
    metaDesc: "North Lakes concreting specialists — exposed aggregate driveways, pool surrounds & patios. Modern finishes for contemporary homes. Free quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["side-path", "commercial", "pool", "pool-deck", "strathpine-exposed", "agg-drive", "patio-agg", "outdoor-patio-10"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — North Lakes",
      "description": "Concreting services in North Lakes QLD — driveway upgrades, pool surrounds, alfresco areas and decorative concrete finishes.",
      "url": "https://polyconcretingqld.com.au/north-lakes-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "North Lakes",
        "addressRegion": "QLD",
        "postalCode": "4509",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.22,
        "longitude": 153.02
      },
      "areaServed": [
        "North Lakes", "Mango Hill", "Kallangur", "Narangba", "Dakabin", "Griffin"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 4. BRISBANE (NORTHSIDE) ────────────────────────────── */
  {
    id: "brisbane",
    name: "Brisbane",
    region: "Brisbane Northside",
    state: "QLD",
    postcode: "4000",
    heading: "Concreting in Brisbane",
    tagline: "Northside Brisbane concreters with attention to detail.",
    intro: [
      "Poly Concreting regularly services Brisbane's northside — the Chermside, Aspley, Mitchelton, The Gap, and Everton Park corridor that sits between the city and our Moreton Bay home base. These are largely established suburbs built from the 1950s through to the 1980s, and that means a very specific type of work dominates: driveway replacements. Original driveways in these areas are decades old, often narrow by today's standards, and cracked from decades of tree root pressure and soil movement. Replacing them is one of the most impactful upgrades a northside Brisbane homeowner can make.",
      "Tight blocks and narrow street frontages are the reality in suburbs like Mitchelton and Everton Park, which requires precise formwork and sometimes creative solutions to get the pour right. We're experienced working within these constraints and take care not to damage existing garden edges, fences, or paths during demolition and construction. Heritage-adjacent suburbs like The Gap and Keperra sometimes bring additional considerations around driveway width and surface treatment, and we're happy to discuss what works for your specific street.",
      "Pool surrounds and backyard entertaining slabs are also popular in northside Brisbane as homeowners maximise their smaller blocks. A well-finished concrete entertaining area or pool surround can dramatically expand your usable outdoor space. We offer coloured and exposed aggregate finishes that sit beautifully next to the established gardens and timber houses typical of these Brisbane suburbs."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Chermside", "Aspley", "Mitchelton", "The Gap", "Everton Park",
      "Keperra", "Stafford", "Geebung", "Zillmere", "Bridgeman Downs"
    ],
    faqs: [
      {
        q: "Do you travel to inner northside Brisbane suburbs like Chermside and Aspley?",
        a: "Yes — Brisbane's northside is well within our regular service area. We work in Chermside, Aspley, Mitchelton, The Gap, Everton Park, and surrounding suburbs frequently. Travel time from our base is straightforward via the Bruce Highway corridor."
      },
      {
        q: "My driveway is very narrow — only room for one car. Can you replace it and widen it slightly?",
        a: "Widening a driveway is very achievable during a replacement. We assess the available space, check council requirements for your suburb, and form up to the maximum practical width. Most northside Brisbane properties can accommodate at least a standard 3m wide single car driveway."
      },
      {
        q: "What concrete finishes suit an older Queenslander-style home?",
        a: "For homes with heritage character, subtle finishes tend to work best. Brushed or broom finish in a warm grey, or a light earthy coloured concrete, blends well with weatherboard and Queenslander aesthetics. We can also match existing path tones if you're extending rather than replacing."
      },
      {
        q: "What affects a driveway replacement quote in northside Brisbane?",
        a: "The quote depends on demolition, access, driveway size, drainage, finish and how much base preparation is needed. We assess the site first and give a fixed written quote before work starts."
      },
      {
        q: "Do you handle tree root damage? My old driveway has been lifted by a large tree.",
        a: "Yes, this is very common in Brisbane's established suburbs. We remove the old slab, address the root situation (which may involve trimming surface roots in consultation with you), compact the base, and pour fresh. Proper expansion joints in the new slab also help manage future root pressure."
      }
    ],
    metaTitle: "Concreting Brisbane Northside | Poly Concreting",
    metaDesc: "Brisbane northside concreting — driveway replacements, patios, pool surrounds. Chermside, Aspley, Mitchelton & The Gap. Free quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["strathpine-exposed", "patio-agg", "pool-deck", "pool", "side-path", "outdoor-patio-10", "agg-drive", "morayfield-patio"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Brisbane",
      "description": "Concreting services across Brisbane's northside — driveway replacements, pool surrounds, patios and pathways in Chermside, Aspley, Mitchelton and surrounds.",
      "url": "https://polyconcretingqld.com.au/brisbane-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Brisbane",
        "addressRegion": "QLD",
        "postalCode": "4000",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.47,
        "longitude": 153.03
      },
      "areaServed": [
        "Chermside", "Aspley", "Mitchelton", "The Gap", "Everton Park",
        "Keperra", "Stafford", "Geebung", "Bridgeman Downs", "Brisbane Northside"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 5. SUNSHINE COAST ──────────────────────────────────── */
  {
    id: "sunshine-coast",
    name: "Sunshine Coast",
    region: "Sunshine Coast",
    state: "QLD",
    postcode: "4558",
    heading: "Concreting on the Sunshine Coast",
    tagline: "Outdoor concrete work built for the Sunshine Coast lifestyle.",
    intro: [
      "From Caloundra in the south to Maroochydore and beyond, the Sunshine Coast is defined by outdoor living — and quality concrete is at the heart of it. Pool surrounds, alfresco entertaining slabs, and statement driveways are in constant demand across the coastal corridor. Poly Concreting services the full Caloundra to Maroochydore stretch, bringing the same high standard of workmanship that has earned us a strong reputation in Moreton Bay. The coastal climate here means UV-stable finishes and proper sealing matter more than inland, and we factor that into every project.",
      "The soils across the Sunshine Coast vary noticeably: sandy, free-draining profiles dominate the beachside suburbs, while heavier clay soils appear further inland toward the hinterland edge. For beachside properties in Mooloolaba, Buddina, and Bokarina, concrete pool surrounds are an everyday request — homeowners want slip-resistant exposed aggregate coping that complements their tropical landscaping. Alfresco areas that flow from the living room to the pool are a signature of the Sunshine Coast new-build and renovation market, and we design the pour to flow seamlessly.",
      "We also do solid foundational work in the Sunshine Coast's newer residential estates around Birtinya, Bokarina, and Mountain Creek — driveways, paths, and patio slabs for homes in the 5–10 year range that are now at the stage of completing their outdoor areas properly. If you're on the Sunshine Coast and want concrete work done properly and on time, Poly Concreting makes the trip regularly."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Caloundra", "Maroochydore", "Mooloolaba", "Buddina", "Bokarina",
      "Mountain Creek", "Birtinya", "Kawana Waters", "Sippy Downs", "Currimundi"
    ],
    faqs: [
      {
        q: "Do you travel to the Sunshine Coast from Moreton Bay?",
        a: "Yes — we service the Caloundra to Maroochydore corridor regularly. Caloundra is less than an hour from our base and Maroochydore around 90 minutes. We plan Sunshine Coast jobs carefully so the timing, crew and site access are clear before we lock in the work."
      },
      {
        q: "What's the best pool surround finish for a coastal Sunshine Coast home?",
        a: "Exposed aggregate is the top pick — the natural stone texture provides grip when wet, handles the UV well, and suits the organic look of coastal landscaping. For a more refined look, we can do a smooth finish with saw cuts and a UV-stable sealer. We'll bring samples to your quote."
      },
      {
        q: "Our beachside property has sandy soil. Does that affect the concrete slab?",
        a: "Sandy soils drain well but can be loose, so compaction of the sub-base is critical before we pour. We ensure the formation is firm and stable before forming up. Proper steel reinforcement handles any residual flex in the base."
      },
      {
        q: "Can you match our existing pavers or tiles with a concrete finish?",
        a: "We can get very close with coloured concrete and the right aggregate. Bring photos or a sample to the quote and we'll select from our colour and aggregate range to complement what you have. A perfect match isn't always achievable but a harmonious blend always is."
      },
      {
        q: "How far in advance do I need to book for Sunshine Coast work?",
        a: "We'd suggest booking 2–4 weeks out for Sunshine Coast jobs, a little more in the busy summer season. Call us early and we'll lock in a date that suits both the schedule and the weather window."
      }
    ],
    metaTitle: "Concreting Sunshine Coast | Poly Concreting",
    metaDesc: "Sunshine Coast concreting — pool surrounds, driveways & alfresco slabs from Caloundra to Maroochydore. Coastal specialists. Free quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["pool-deck", "pool", "gatton-pool", "patio-agg", "outdoor-patio-10", "agg-drive", "strathpine-exposed", "side-path"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Sunshine Coast",
      "description": "Concreting services on the Sunshine Coast QLD — pool surrounds, driveways, alfresco slabs from Caloundra to Maroochydore.",
      "url": "https://polyconcretingqld.com.au/sunshine-coast-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Maroochydore",
        "addressRegion": "QLD",
        "postalCode": "4558",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.65,
        "longitude": 153.06
      },
      "areaServed": [
        "Caloundra", "Maroochydore", "Mooloolaba", "Buddina", "Mountain Creek",
        "Bokarina", "Birtinya", "Kawana Waters", "Sippy Downs"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 6. IPSWICH ─────────────────────────────────────────── */
  {
    id: "ipswich",
    name: "Ipswich",
    region: "Ipswich",
    state: "QLD",
    postcode: "4305",
    heading: "Concreting in Ipswich",
    tagline: "Ipswich's growth corridor demands quality concrete foundations.",
    intro: [
      "The Ipswich region — and Springfield Lakes in particular — has been one of Queensland's active building and development corridors. New estates are releasing land constantly, and with them comes a wave of demand for concrete work: house slabs, garage floors, driveways, pathways, and shed pads for the large acreage blocks on the city's outer fringe. Poly Concreting services Ipswich and the Springfield Lakes growth corridor, delivering the same level of workmanship we're known for in Moreton Bay to a market that badly needs reliable, quality-focused tradies.",
      "Soil conditions in Ipswich are varied but broadly clay-dominant, particularly in the older residential suburbs toward the city centre. The Springfield and Springfield Lakes estates are built on compacted fill in many areas, which requires close attention during sub-base preparation to ensure slabs and driveways don't settle unevenly over time. For acreage properties in Ripley, Deebing Heights, and the Scenic Rim edge, large shed slabs and hardstand areas are the most common request — properties that are setting up seriously for equestrian use, home businesses, or just genuine rural life.",
      "In Springfield Lakes itself, the newer residential streets show a preference for neat, clean concrete — broom finish or honed driveways that match the contemporary townhouse and family home streetscape. We see a lot of new builds coming to us for their first driveway pour, and we take care to get the finish exactly right the first time."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Springfield Lakes", "Springfield", "Ripley", "Deebing Heights",
      "Redbank Plains", "Collingwood Park", "Goodna", "Leichhardt", "Brassall", "Camira"
    ],
    faqs: [
      {
        q: "Do you service Springfield Lakes and the new Ripley Valley estates?",
        a: "Yes — Springfield Lakes and the Ripley growth corridor are a significant part of our Ipswich work. New builds, first driveways, shed slabs, and entertaining areas. We're on site in that area regularly."
      },
      {
        q: "I need a large shed slab on an acreage block near Ipswich. Can you do that?",
        a: "Absolutely. Large shed slabs on acreage are right in our wheelhouse. We handle the site prep, boxing, compaction, steel reinforcement, pour, and finish. Tell us the slab dimensions and intended use and we'll quote accordingly."
      },
      {
        q: "What thickness should a house slab be in Ipswich?",
        a: "Residential slab thickness is governed by the engineer's design based on your soil classification. In Ipswich's clay soils, you'll typically see 100mm waffle pods or a thickened-edge slab to handle soil reactivity. We work to the engineer's spec — if you don't have one yet we can point you in the right direction."
      },
      {
        q: "We're building in Springfield Lakes and need concrete for the driveway and alfresco. Can you quote both together?",
        a: "Yes — doing both at the same time is actually more efficient. We can quote the driveway, alfresco, and any paths as a combined package. One mobilisation, one coordination effort."
      },
      {
        q: "How far does Poly Concreting travel for Ipswich jobs?",
        a: "We travel the full Ipswich region including Springfield, Ripley, Goodna, Redbank Plains, and inner Ipswich suburbs. We confirm the service area, access and scope upfront and include any travel requirements clearly in the written quote."
      }
    ],
    metaTitle: "Concreting Ipswich | Poly Concreting",
    metaDesc: "Ipswich concreting — shed slabs, house slabs, driveways & patios. Springfield Lakes & Ripley specialists. Acreage & new builds. Free quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["springfield-shed", "ipswich-drive", "ipswich-pathway", "ipswich-pathway-2", "goodna-drive", "goodna-trowel-drive", "redbank-coloured-path", "redbank-coloured-path-2", "bellbird-patio"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Ipswich",
      "description": "Concreting services in Ipswich QLD — shed slabs, house slabs, driveways and patios in Springfield Lakes, Ripley and across the Ipswich region.",
      "url": "https://polyconcretingqld.com.au/ipswich-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ipswich",
        "addressRegion": "QLD",
        "postalCode": "4305",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.61,
        "longitude": 152.76
      },
      "areaServed": [
        "Ipswich", "Springfield Lakes", "Springfield", "Ripley", "Deebing Heights",
        "Redbank Plains", "Collingwood Park", "Goodna"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 7. GOLD COAST ──────────────────────────────────────── */
  {
    id: "gold-coast",
    name: "Gold Coast",
    region: "Gold Coast North",
    state: "QLD",
    postcode: "4209",
    heading: "Concreting on the Gold Coast",
    tagline: "Modern concrete finishes for the Gold Coast's newest estates.",
    intro: [
      "Coomera and Upper Coomera have become the engine room of Gold Coast residential growth, and the demand for quality concrete work in these estates is constant. New homes are being completed every week across estates like Coomera Waters, Coomera Shores, and Creekwood, and most require first-time driveway pours, alfresco slabs, and pool surrounds. Poly Concreting has been servicing the northern Gold Coast corridor regularly and we understand what the market demands here: decorative, high-quality finishes that match the ambitions of these contemporary homes.",
      "Exposed aggregate driveways are the finish of choice in the majority of Gold Coast's newer estates, particularly Coomera — the aggregate texture and natural look complements rendered facades beautifully, and it holds its colour and appearance far better than plain concrete in Queensland's intense UV environment. Pool surrounds in exposed aggregate or smooth coloured concrete are equally popular, as families set up their outdoor spaces to make the most of the Gold Coast's year-round warm weather.",
      "The soils in the Coomera and Upper Coomera area are typically compacted fill over clay, which requires careful sub-base preparation to prevent differential settlement. We always assess conditions on site and prepare the formation to the appropriate standard before any concrete is placed. Getting the base right is the difference between a driveway that lasts 30 years and one that's lifting and cracking in five."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Coomera", "Upper Coomera", "Ormeau", "Pimpama", "Oxenford",
      "Helensvale", "Hope Island", "Coombabah", "Arundel", "Parkwood"
    ],
    faqs: [
      {
        q: "Do you service Coomera and Upper Coomera on the Gold Coast?",
        a: "Yes — the Coomera corridor is the primary Gold Coast area we service. It's within practical reach from our base and the volume of new builds in that area makes it worthwhile to be there regularly. We also cover Ormeau, Pimpama, and Oxenford."
      },
      {
        q: "What's the most popular driveway finish in the Gold Coast's new estates?",
        a: "Exposed aggregate is by far the most popular choice in estates like Coomera Waters and Creekwood. The natural stone look suits contemporary facades, it handles Queensland UV well, and it provides good traction. Coloured concrete is the second most popular choice."
      },
      {
        q: "Can you do a combined driveway and pool surround in exposed aggregate?",
        a: "Absolutely, and it often makes sense to do both at once. We can match the aggregate across both surfaces so the whole property has a cohesive look. This is a very common request on the northern Gold Coast."
      },
      {
        q: "Our block has compacted fill over clay. Will that affect our driveway?",
        a: "It can if the sub-base isn't prepared correctly. We assess the formation, compact thoroughly, and use appropriate reinforcement for fill sites. This is standard practice for us in the Coomera area where fill sites are common."
      },
      {
        q: "What affects a driveway quote in the Gold Coast area?",
        a: "Driveway quotes depend on size, finish, access, site preparation, drainage and whether demolition is required. We inspect the site and give a fixed written quote with the full scope set out clearly."
      }
    ],
    metaTitle: "Concreting Gold Coast | Poly Concreting",
    metaDesc: "Gold Coast concreting — exposed aggregate driveways, pool surrounds & alfresco slabs. Coomera & northern Gold Coast specialists. Free quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["agg-drive", "pool-deck", "pool", "patio-agg", "outdoor-patio-10", "strathpine-exposed", "side-path", "redbank-coloured-path-2"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Gold Coast",
      "description": "Concreting services on the Gold Coast QLD — driveways, pool surrounds, alfresco slabs in Coomera, Upper Coomera, Ormeau and surrounds.",
      "url": "https://polyconcretingqld.com.au/gold-coast-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Coomera",
        "addressRegion": "QLD",
        "postalCode": "4209",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.99,
        "longitude": 153.36
      },
      "areaServed": [
        "Coomera", "Upper Coomera", "Ormeau", "Pimpama", "Oxenford",
        "Helensvale", "Hope Island", "Parkwood"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 8. WAMURAN ─────────────────────────────────────────── */
  {
    id: "wamuran",
    name: "Wamuran",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4512",
    heading: "Concreting in Wamuran",
    tagline: "Reliable concrete work for Wamuran's acreage and rural properties.",
    intro: [
      "Wamuran sits about 30 kilometres west of Caboolture and is home to a mix of rural lifestyle properties, hobby farms, and long-established acreage blocks. The concrete work here reflects that — shed slabs and hardstand areas are the most common request, along with long driveways that connect rural homes to the road, and concrete paths through established gardens. Poly Concreting is based in Morayfield and services Wamuran regularly, bringing the same standard of sub-base preparation and reinforcement that acreage jobs demand.",
      "The soils in and around Wamuran are generally clay-rich, with significant moisture variation between wet and dry seasons. This makes proper site preparation essential — we compact the formation layer thoroughly and specify appropriate steel reinforcement to ensure your slab or driveway won't lift or crack as the ground moves. For large shed slabs on acreage, we coordinate the boxing and steel placement carefully so the pour finishes level and at the right thickness for the load it needs to carry.",
      "Getting concrete trucks out to Wamuran requires coordination — we plan our Wamuran pours so the truck turnaround, access, and site conditions are all considered upfront. There are no surprises on pour day. If you're on an acreage block in Wamuran and need a shed slab, driveway, or concrete path quoted, call Angelo for a same-day response."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Caboolture", "Upper Caboolture", "Woodford", "Moorina", "Moodlu",
      "Rocksberg", "Elimbah", "Morayfield", "Beerwah", "Glass House Mountains"
    ],
    faqs: [
      {
        q: "Do you pour concrete on acreage blocks in Wamuran?",
        a: "Yes — acreage and rural properties in Wamuran are a regular part of our work. Shed slabs, long driveways, hardstand areas and concrete paths are the most common jobs we quote out here. We plan truck access upfront so there are no issues on pour day."
      },
      {
        q: "What size shed slab can you pour in Wamuran?",
        a: "We pour shed slabs of any size — from single-car garages to large open-span sheds. We'll advise on slab thickness based on the shed size and intended load, handle the boxing and steel, and get the pour done right in one hit."
      },
      {
        q: "Does the clay soil in Wamuran cause problems for concrete driveways?",
        a: "Clay soils that shrink and swell with moisture are the primary cause of driveway cracking in this area. We compact the formation layer thoroughly and use proper steel reinforcement to manage soil movement. A correctly built driveway on clay will hold up well for decades."
      },
      {
        q: "How do I get a quote for a concrete job in Wamuran?",
        a: "Call or message Angelo directly. He'll come out to Wamuran, walk the site, confirm the scope, and give you a fixed written price before anything starts. No guesswork, no per-metre estimates that change at handover."
      },
      {
        q: "How long does a driveway or slab take to organise in Wamuran?",
        a: "Same-day response to your enquiry. Site visit within a few days. Pour scheduling depends on current workload — typically 1–3 weeks out. We'll confirm a realistic pour date when we come out to measure up."
      }
    ],
    metaTitle: "Concreting Wamuran | Driveways, Shed Slabs & Acreage Concrete | Poly Concreting",
    metaDesc: "Wamuran concreting — shed slabs, long driveways, hardstand and acreage concrete. Clay soil specialists. Owner-operated, fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["wamuran-drive", "wamuran-pathway", "wamuran-pathway-2", "acreage", "plain-broom-drive", "side-drain", "commercial", "morayfield-patio"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Wamuran",
      "description": "Concreting services in Wamuran QLD — shed slabs, driveways, hardstand and acreage concrete work.",
      "url": "https://polyconcretingqld.com.au/wamuran-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Wamuran",
        "addressRegion": "QLD",
        "postalCode": "4512",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.03,
        "longitude": 152.73
      },
      "areaServed": [
        "Wamuran", "Upper Caboolture", "Moorina", "Moodlu", "Rocksberg", "Caboolture"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 9. ELIMBAH ──────────────────────────────────────────── */
  {
    id: "elimbah",
    name: "Elimbah",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4516",
    heading: "Concreting in Elimbah",
    tagline: "Dependable concrete work for Elimbah's lifestyle and rural blocks.",
    intro: [
      "Elimbah is a quiet, semi-rural locality sitting between Caboolture and the Pumicestone Passage coast, roughly 15 kilometres east of Caboolture. It's an area of lifestyle properties, hobby farms, and large residential blocks, with concrete needs that reflect that character — driveways, shed slabs, concrete paths, and hardstand areas are the jobs we're most often called out for. Poly Concreting services Elimbah regularly from our Morayfield base, and the straightforward access via the Bruce Highway makes it an easy run.",
      "Like much of the Moreton Bay hinterland, Elimbah sits on clay-heavy soil that expands and contracts significantly with seasonal rainfall. Getting the sub-base right before any pour is non-negotiable in these conditions — we compact the formation layer and use correct steel reinforcement so the finished concrete moves with the ground rather than cracking under it. For shed slabs on lifestyle blocks, we take the time to get the steel placement and boxing spot on before any concrete is poured.",
      "If you're in Elimbah and need concrete work quoted, Angelo will come out to the site, walk through the scope, and give you a fixed written price. No per-metre guesswork. No surprises when the invoice arrives."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Caboolture", "Wamuran", "Toorbul", "Ningi", "Banksia Beach",
      "Burpengary East", "Morayfield", "Glass House Mountains", "Beerwah", "Rocksberg"
    ],
    faqs: [
      {
        q: "Do you service Elimbah for concrete work?",
        a: "Yes — Elimbah is well within our regular service area. We quote and pour driveways, shed slabs, paths and hardstand areas for lifestyle and rural properties throughout the suburb."
      },
      {
        q: "What types of concrete jobs do you do in Elimbah?",
        a: "Driveways, shed slabs, garage pads, concrete paths and hardstand areas are the most common in Elimbah. We handle all finishes — broom, plain, exposed aggregate and coloured — and advise on what suits each job."
      },
      {
        q: "The soil on my Elimbah block seems very clayey. Will that affect my slab?",
        a: "Clay soil that moves with moisture is the main challenge for concrete in this area. We compact the formation layer and use appropriate steel reinforcement to manage soil movement. Properly built concrete on reactive clay holds up well for decades."
      },
      {
        q: "Can you pour a long driveway on a rural Elimbah block?",
        a: "Yes — long rural driveways are something we do regularly in the Moreton Bay hinterland. We plan truck access, set up batter boards, and pour in sections if needed. Contact us with the approximate dimensions and we'll give you a fixed price."
      },
      {
        q: "How soon can you come out to quote in Elimbah?",
        a: "Same-day response to your enquiry. Site visits typically scheduled within 48–72 hours. We give you a fixed written price at the quote — no back-and-forth."
      }
    ],
    metaTitle: "Concreting Elimbah QLD | Driveways, Sheds & Rural Concrete | Poly Concreting",
    metaDesc: "Elimbah concreting — driveways, shed slabs, paths and hardstand for lifestyle and rural properties. Fixed written quotes. Owner on every job.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["wamuran-drive", "wamuran-pathway", "acreage", "plain-broom-drive", "side-drain", "caboolture-drive", "side-path", "morayfield-patio"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Elimbah",
      "description": "Concreting services in Elimbah QLD — driveways, shed slabs, paths and hardstand for lifestyle and rural properties.",
      "url": "https://polyconcretingqld.com.au/elimbah-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Elimbah",
        "addressRegion": "QLD",
        "postalCode": "4516",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.05,
        "longitude": 152.99
      },
      "areaServed": [
        "Elimbah", "Caboolture", "Wamuran", "Toorbul", "Ningi", "Burpengary East"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 10. BURPENGARY ─────────────────────────────────────── */
  {
    id: "burpengary",
    name: "Burpengary",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4505",
    heading: "Concreting in Burpengary",
    tagline: "Local concrete work for Burpengary's growing residential community.",
    intro: [
      "Burpengary has grown into one of North Moreton Bay's more substantial residential suburbs, with established streets closer to the Bruce Highway mixing with newer estates like Burpengary East and the Burpengary Meadows development corridor. The concrete demand here spans the full residential range — driveways for new builds and first-time upgrades, exposed aggregate for homeowners lifting street appeal, and outdoor entertaining slabs for families making the most of their Burpengary yards. Poly Concreting is based nearby in Morayfield and services Burpengary regularly.",
      "The clay content in Burpengary soils increases as you move west from the Bruce Highway — a factor that matters significantly for concrete longevity. We compact every sub-base thoroughly and use appropriate steel reinforcement across all jobs, so you're not dealing with cracked slabs in five years when the ground shifts. For newer builds in Burpengary East, first-time driveway pours are common and we take care to match the home's style with the right finish — exposed aggregate, broom, or coloured concrete.",
      "Outdoor entertaining areas are increasingly popular in Burpengary as families invest in their outdoor space. Alfresco slabs connecting to the living area, concrete paths running side access to the back yard, and garage floors are all jobs we quote in Burpengary regularly. Get in touch and Angelo will come out to your block, scope the job, and give you a fixed price."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Morayfield", "Caboolture", "Narangba", "Burpengary East", "Dakabin",
      "Bellmere", "Deception Bay", "Kallangur", "Griffin", "Upper Caboolture"
    ],
    faqs: [
      {
        q: "Do you service Burpengary East and the newer estates?",
        a: "Yes — Burpengary East and the surrounding new estate corridors are a regular part of our Burpengary work. New builds needing their first driveway, alfresco slabs, and side access paths are all common requests out there."
      },
      {
        q: "What concrete finish is best for a new driveway in Burpengary?",
        a: "It depends on the home's style and budget. Exposed aggregate is the popular choice for street appeal — it suits contemporary facades and holds its look well long-term. Broom finish is the practical, solid option for those who want a clean standard driveway. We'll advise on both when we come out to quote."
      },
      {
        q: "My old Burpengary driveway keeps cracking. What's causing it?",
        a: "Reactive clay soil movement is usually the culprit in Burpengary. Driveways built without adequate sub-base compaction or reinforcement crack and lift as the ground moves seasonally. We demolish the old slab, prepare the base correctly, and pour fresh with proper reinforcement to stop the cycle."
      },
      {
        q: "Can you pour an alfresco slab in Burpengary?",
        a: "Yes — alfresco areas are one of the most common jobs we do in Burpengary. We'll scope the area, plan the drainage, and advise on the right finish for outdoor use. Broom, exposed aggregate, or coloured concrete all work well for outdoor entertaining areas."
      },
      {
        q: "How quickly can you start a concrete job in Burpengary?",
        a: "We respond same day to all enquiries. Site visits typically happen within 48–72 hours. Pour scheduling is usually 1–3 weeks out depending on the season and current workload."
      }
    ],
    metaTitle: "Concreting Burpengary | Driveways, Slabs & Outdoor Concrete | Poly Concreting",
    metaDesc: "Burpengary concreting — driveways, alfresco slabs, exposed aggregate and outdoor areas. Local Moreton Bay crew. Fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["caboolture-drive", "plain-broom-drive", "agg-drive", "morayfield-patio", "patio-agg", "outdoor-patio-10", "side-path", "side-drain"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Burpengary",
      "description": "Concreting services in Burpengary QLD — driveways, alfresco slabs, exposed aggregate and outdoor areas.",
      "url": "https://polyconcretingqld.com.au/burpengary-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Burpengary",
        "addressRegion": "QLD",
        "postalCode": "4505",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.16,
        "longitude": 152.96
      },
      "areaServed": [
        "Burpengary", "Burpengary East", "Narangba", "Morayfield", "Dakabin", "Bellmere"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 11. UPPER CABOOLTURE ───────────────────────────────── */
  {
    id: "upper-caboolture",
    name: "Upper Caboolture",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4510",
    heading: "Concreting in Upper Caboolture",
    tagline: "Acreage and rural concrete work done right on Caboolture's western fringe.",
    intro: [
      "Upper Caboolture stretches along the acreage corridors west and north of Caboolture township — large lifestyle blocks, hobby farms, and rural residential properties that have been here for decades. The concrete work matches the landscape: long gravel-to-concrete driveway upgrades, shed slabs built to carry real loads, hardstand areas for machinery and vehicles, and concrete paths connecting buildings across working properties. Poly Concreting services Upper Caboolture regularly and understands what acreage concrete work actually requires.",
      "Clay soil dominates across Upper Caboolture and the surrounding rural fringe. Moisture variation is significant — properties on low-lying ground or near creek lines can see soil that's very active in wet seasons. We take sub-base preparation seriously: thorough compaction, correct depth, and appropriate steel reinforcement are non-negotiable on every pour. Acreage jobs sometimes involve uneven terrain and access challenges that suburban concrete work doesn't, and we plan for those factors upfront.",
      "Being based in Morayfield means we're close and can coordinate Upper Caboolture jobs without the travel overhead that brings Brisbane concreters out here. Fixed written quotes, same-day response, Angelo on every job. Call us for a no-obligation site visit and price."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Caboolture", "Wamuran", "Moorina", "Moodlu", "Rocksberg",
      "Morayfield", "Elimbah", "Bellmere", "Boogaree", "Woodford"
    ],
    faqs: [
      {
        q: "Do you pour concrete on acreage and rural properties in Upper Caboolture?",
        a: "Yes — Upper Caboolture acreage is a regular part of our work. Shed slabs, long driveways, hardstand areas and concrete paths are the most common jobs we quote in the area."
      },
      {
        q: "Can you pour a large shed slab in Upper Caboolture?",
        a: "Absolutely. Large shed slabs are a speciality — we handle the site prep, boxing, steel reinforcement, pour and finish. We'll advise on slab thickness based on the intended load and span, and can coordinate truck access on rural properties."
      },
      {
        q: "The clay in Upper Caboolture is very reactive. How do you manage that?",
        a: "Reactive clay is manageable when the sub-base is prepared correctly. We compact the formation layer thoroughly and use appropriate steel reinforcement so the slab can accommodate ground movement without cracking. It's a different standard than urban concrete work and we know the difference."
      },
      {
        q: "I want to upgrade my gravel driveway to concrete in Upper Caboolture. Can you quote that?",
        a: "Yes — gravel to concrete upgrades are common in Upper Caboolture. We'll measure the driveway, advise on the finish, and give you a fixed price for the full job including boxing, compaction, steel, concrete supply, pour and finish."
      },
      {
        q: "How do I book Poly Concreting for a job in Upper Caboolture?",
        a: "Call or message Angelo directly. He'll respond same day and come out to your property to walk the site and give you a fixed written price. No travel fees, no runaround."
      }
    ],
    metaTitle: "Concreting Upper Caboolture | Shed Slabs, Driveways & Acreage Concrete | Poly Concreting",
    metaDesc: "Upper Caboolture concreting — shed slabs, long driveways and hardstand for acreage properties. Clay soil specialists. Fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["wamuran-drive", "wamuran-pathway", "acreage", "plain-broom-drive", "caboolture-drive", "side-drain", "commercial", "wamuran-pathway-2"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Upper Caboolture",
      "description": "Concreting services in Upper Caboolture QLD — shed slabs, driveways and acreage concrete work.",
      "url": "https://polyconcretingqld.com.au/upper-caboolture-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Upper Caboolture",
        "addressRegion": "QLD",
        "postalCode": "4510",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.04,
        "longitude": 152.88
      },
      "areaServed": [
        "Upper Caboolture", "Caboolture", "Wamuran", "Moorina", "Moodlu", "Rocksberg"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 12. BOOGAREE ───────────────────────────────────────── */
  {
    id: "boogaree",
    name: "Boogaree",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4510",
    heading: "Concreting in Boogaree",
    tagline: "Concrete work for rural Boogaree properties done properly.",
    intro: [
      "Boogaree is a small rural locality tucked between Caboolture and the western acreage corridors, sharing much of the character of Upper Caboolture and the Caboolture hinterland. Lifestyle blocks, rural residential properties, and hobby farms are the norm here, and the concrete work reflects it — shed slabs, concrete driveways, hardstand for vehicles and equipment, and paths between structures are what we're typically called out for. Poly Concreting services Boogaree from our Morayfield base with no travel loading.",
      "The soils in the Boogaree and surrounds area are clay-heavy and reactive, meaning moisture variation through the year drives significant ground movement. Concrete work that isn't properly reinforced and built on a well-compacted sub-base won't last. We do the prep work properly every time — formation compaction, correct steel placement, and an appropriate mix design for the job. It's the difference between concrete that holds up for 30 years and work that's cracking in three.",
      "For smaller communities like Boogaree, access and logistics require more planning than urban work. We coordinate concrete trucks, site access, and timing so the pour day goes smoothly without delays. Angelo quotes every job in person and gives you a fixed written price. Call for a same-day response."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Caboolture", "Upper Caboolture", "Morayfield", "Wamuran", "Bellmere",
      "Moorina", "Moodlu", "Rocksberg", "Elimbah", "Burpengary"
    ],
    faqs: [
      {
        q: "Do you concrete in Boogaree?",
        a: "Yes — Boogaree and the surrounding rural localities are within our regular service area. We quote and pour shed slabs, driveways, hardstand and paths for rural residential properties in the area."
      },
      {
        q: "What's the most common concrete job in Boogaree?",
        a: "Shed slabs and driveway upgrades are the most frequent requests. Rural properties in this area often have large sheds needing a proper concrete floor, or older gravel driveways that owners want upgraded to concrete."
      },
      {
        q: "How do you handle truck access on rural Boogaree properties?",
        a: "We scope truck access when we come out to quote — gate widths, overhead clearances, surface conditions and turning space are all assessed upfront. If there are access constraints we work them into the pour plan so there are no surprises."
      },
      {
        q: "What concrete finish works best for a rural driveway in Boogaree?",
        a: "Broom finish is the practical standard for rural driveways — it provides grip, handles light vehicle use well, and is cost-effective for longer runs. Exposed aggregate is an option for the section closest to the home if street appeal matters. We'll advise on both."
      },
      {
        q: "How do I get a quote for a shed slab in Boogaree?",
        a: "Call or message Angelo directly. He'll respond same day and come out to your property to measure up and give you a fixed written price before any work starts."
      }
    ],
    metaTitle: "Concreting Boogaree QLD | Shed Slabs, Driveways & Rural Concrete | Poly Concreting",
    metaDesc: "Boogaree concreting — shed slabs, driveways and rural concrete work near Caboolture. Fixed written quotes. Owner on every job.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["wamuran-drive", "acreage", "plain-broom-drive", "wamuran-pathway", "caboolture-drive", "side-drain", "commercial", "morayfield-patio"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Boogaree",
      "description": "Concreting services in Boogaree QLD — shed slabs, driveways and rural concrete near Caboolture.",
      "url": "https://polyconcretingqld.com.au/boogaree-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Boogaree",
        "addressRegion": "QLD",
        "postalCode": "4510",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.05,
        "longitude": 152.92
      },
      "areaServed": [
        "Boogaree", "Caboolture", "Upper Caboolture", "Moorina", "Moodlu", "Morayfield"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 13. WOODFORD ───────────────────────────────────────── */
  {
    id: "woodford",
    name: "Woodford",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4514",
    heading: "Concreting in Woodford",
    tagline: "Solid concrete work in the D'Aguilar hinterland.",
    intro: [
      "Woodford is a hinterland town about 30 kilometres north-west of Caboolture, at the foot of the D'Aguilar Range. It's a community of rural lifestyle properties, small farms, and established residential blocks with a distinctly relaxed character. Concrete work in Woodford centres on the practical needs of rural living — shed slabs, concrete driveways, hardstand areas, and farm tracks. Poly Concreting travels out to Woodford regularly and plans these jobs with the additional logistics that hinterland work demands.",
      "Woodford's soil profile is typically clay-based with some variation as you move toward the range edge. Reactive clay in the lowland sections can cause significant ground movement with seasonal moisture change, making proper sub-base preparation and reinforcement essential. We compact the formation layer thoroughly on every job and use appropriate steel mesh and bar to ensure the concrete can accommodate normal ground movement without cracking.",
      "Getting concrete trucks to Woodford takes planning — particularly for properties on hinterland roads with access restrictions. We scope this out at the quote stage so there are no delays on pour day. Angelo quotes every job in person, gives you a fixed written price, and is on site for the pour. No subcontracting, no surprises."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Caboolture", "Wamuran", "Beerwah", "Glass House Mountains", "Kilcoy",
      "D'Aguilar", "Jimna", "Neurum", "Mount Mee", "Stanley River"
    ],
    faqs: [
      {
        q: "Do you concrete in Woodford and the surrounding hinterland?",
        a: "Yes — we service Woodford and the D'Aguilar hinterland regularly. Shed slabs, driveways, hardstand areas and rural paths are the most common jobs. We plan logistics for hinterland work upfront so pour day runs smoothly."
      },
      {
        q: "Can you pour a shed slab at a rural property near Woodford?",
        a: "Yes — rural shed slabs in the Woodford area are standard work for us. We assess site access and truck clearances at the quote stage, handle boxing and steel, and pour to the right thickness for the load and span."
      },
      {
        q: "What affect does the D'Aguilar climate have on concrete in Woodford?",
        a: "Woodford gets more rainfall than the coast and soils can be quite active. We use appropriate mix design and curing procedures for higher-moisture environments. The result is concrete that holds up through wet winters and dry summers alike."
      },
      {
        q: "What concrete finish suits a Woodford rural driveway?",
        a: "Broom finish is the practical choice for rural driveways — it grips well in mud and rain, handles vehicle use, and is cost-effective for longer runs. Exposed aggregate is an option for the section near the house if appearance matters. We'll give you an honest recommendation."
      },
      {
        q: "Is there a travel fee for Woodford?",
        a: "We give a single fixed written quote that covers everything — there are no separate travel fees bolted on later. When Angelo comes out to quote, the price he leaves you with is the price you pay."
      }
    ],
    metaTitle: "Concreting Woodford QLD | Shed Slabs, Driveways & Hinterland Concrete | Poly Concreting",
    metaDesc: "Woodford concreting — shed slabs, rural driveways and hardstand in the D'Aguilar hinterland. Owner-operated, fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["wamuran-drive", "acreage", "plain-broom-drive", "wamuran-pathway", "rural-drive", "side-drain", "commercial", "wamuran-pathway-2"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Woodford",
      "description": "Concreting services in Woodford QLD — shed slabs, rural driveways and hardstand in the D'Aguilar hinterland.",
      "url": "https://polyconcretingqld.com.au/woodford-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Woodford",
        "addressRegion": "QLD",
        "postalCode": "4514",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -26.95,
        "longitude": 152.77
      },
      "areaServed": [
        "Woodford", "Wamuran", "Caboolture", "D'Aguilar", "Neurum", "Glass House Mountains"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 14. TOORBUL ────────────────────────────────────────── */
  {
    id: "toorbul",
    name: "Toorbul",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4510",
    heading: "Concreting in Toorbul",
    tagline: "Coastal concrete for Toorbul's Pumicestone Passage properties.",
    intro: [
      "Toorbul is a small coastal community on the western shore of Pumicestone Passage, with a mix of permanent residences, holiday homes, and fishing shacks facing the water. It's a relaxed, low-density area where property owners are increasingly upgrading concrete for driveways, outdoor entertaining areas, and paths that connect buildings across their blocks. Poly Concreting services Toorbul from Morayfield and understands what coastal concrete work requires — the right mix design, sealer, and finish for a salt-air environment.",
      "Salt air and humidity on Pumicestone Passage accelerate surface deterioration on concrete that isn't correctly specified. We use appropriate mix design and apply quality sealer on exposed surfaces so your concrete holds up long-term at Toorbul. Pool surrounds, alfresco areas, and driveways near the waterfront are all jobs where this matters — and we factor it in from the quote, not as an afterthought.",
      "Access to Toorbul requires some planning — it's at the end of a road and concrete trucks need clear access and turning space. We scope all of this at the quote stage so the pour day runs without delays. Angelo comes out to every job personally, gives a fixed written price, and is on site when the concrete goes in."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Ningi", "Elimbah", "Caboolture", "Banksia Beach", "Sandstone Point",
      "Beachmere", "Donnybrook", "Morayfield", "Burpengary", "Narangba"
    ],
    faqs: [
      {
        q: "Do you concrete in Toorbul?",
        a: "Yes — Toorbul and the Pumicestone Passage coastal area are within our service area. Driveways, outdoor entertaining areas, pool surrounds and paths are common jobs we quote there."
      },
      {
        q: "Does salt air affect concrete at Toorbul?",
        a: "Yes — coastal humidity and salt spray can affect concrete longevity if the wrong mix or sealer is used. We specify the right mix design and apply quality sealer on exposed surfaces so your concrete holds up in the Pumicestone Passage environment."
      },
      {
        q: "What concrete finish is best for outdoor entertaining areas in Toorbul?",
        a: "Exposed aggregate is a popular choice — the texture provides natural grip on wet surfaces, handles coastal UV well, and looks great alongside coastal landscaping. Broom finish is the practical option for driveways and working surfaces."
      },
      {
        q: "Can you pour a pool surround at a Toorbul property?",
        a: "Yes — pool surrounds with appropriate slip-resistant finish are something we do regularly in coastal areas. We advise on the right finish and drainage detail for poolside concrete and factor the coastal environment into the specification."
      },
      {
        q: "How do you manage truck access in Toorbul?",
        a: "We scope truck access when we come out to quote — gate widths, turning space, road access and surface conditions are all assessed upfront. If there are constraints we work them into the pour plan."
      }
    ],
    metaTitle: "Concreting Toorbul QLD | Driveways, Pool Surrounds & Coastal Concrete | Poly Concreting",
    metaDesc: "Toorbul concreting — driveways, pool surrounds and outdoor areas on Pumicestone Passage. Coastal concrete specialists. Fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["pool", "pool-deck", "agg-drive", "patio-agg", "outdoor-patio-10", "plain-broom-drive", "side-path", "wamuran-pathway"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Toorbul",
      "description": "Concreting services in Toorbul QLD — driveways, pool surrounds and outdoor areas on Pumicestone Passage.",
      "url": "https://polyconcretingqld.com.au/toorbul-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toorbul",
        "addressRegion": "QLD",
        "postalCode": "4510",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.02,
        "longitude": 153.00
      },
      "areaServed": [
        "Toorbul", "Ningi", "Elimbah", "Caboolture", "Banksia Beach", "Beachmere"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 15. BELLMERE ───────────────────────────────────────── */
  {
    id: "bellmere",
    name: "Bellmere",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4510",
    heading: "Concreting in Bellmere",
    tagline: "Close to Morayfield, fast response, quality concrete every time.",
    intro: [
      "Bellmere is a residential suburb sitting just north of Morayfield — Poly Concreting's home base — which makes it one of the easiest areas for us to service quickly and without travel overhead. The suburb has a mix of established residential streets and larger blocks on its northern fringe, and the concrete work reflects that mix: driveways, alfresco entertaining slabs, concrete paths, and garage pads are all common requests. Because we're so close, we can often fit Bellmere jobs in quickly when a date opens up.",
      "Like most of the Caboolture-Morayfield corridor, Bellmere sits on reactive clay soils that move significantly with moisture changes through the year. Driveways built without adequate sub-base compaction or reinforcement tend to crack and lift over time — it's a very common complaint in established streets throughout the area. When we replace or upgrade a driveway in Bellmere, we compact the formation correctly and use appropriate steel reinforcement so the new slab lasts decades, not years.",
      "Being close to our base means lower mobilisation overhead and flexibility on scheduling. Get in touch with Angelo for a same-day response, a site visit within a couple of days, and a fixed written price before anything starts."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Morayfield", "Caboolture", "Burpengary", "Upper Caboolture", "Narangba",
      "Dakabin", "Elimbah", "Boogaree", "Caboolture South", "Moodlu"
    ],
    faqs: [
      {
        q: "Do you service Bellmere for residential concrete work?",
        a: "Yes — Bellmere is right next door to our Morayfield base. Driveways, alfresco areas, paths and garage pads are all jobs we quote in Bellmere regularly. Fast response and no travel overhead."
      },
      {
        q: "What concrete finishes are popular in Bellmere?",
        a: "Exposed aggregate is the most popular choice for driveways in Bellmere — it lifts street appeal and holds up well long-term. Broom finish is the solid practical option for paths and working areas. We'll advise on the right choice for your property."
      },
      {
        q: "Can you replace my cracked driveway in Bellmere?",
        a: "Yes — driveway replacements are one of the most common jobs we do in established Moreton Bay suburbs like Bellmere. We demo the old slab, prep the base correctly, and pour fresh with proper reinforcement to stop the cracking cycle."
      },
      {
        q: "How quickly can you quote and schedule a job in Bellmere?",
        a: "Being based next door in Morayfield, we can often get to Bellmere for a quote within 24–48 hours of your call. Scheduling depends on current workload but we'll give you a realistic pour date at the quote."
      },
      {
        q: "Do you do small jobs like a single concrete path in Bellmere?",
        a: "Yes — we quote all sizes of work. A concrete path, a single car driveway, a small alfresco slab — if it's concrete, we'll price it up honestly and do it properly."
      }
    ],
    metaTitle: "Concreting Bellmere QLD | Driveways, Alfresco & Concrete Paths | Poly Concreting",
    metaDesc: "Bellmere concreting — driveways, alfresco slabs and concrete paths next door to Morayfield. Fast response, fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["caboolture-drive", "plain-broom-drive", "morayfield-patio", "agg-drive", "patio-agg", "outdoor-patio-10", "side-path", "side-drain"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Bellmere",
      "description": "Concreting services in Bellmere QLD — driveways, alfresco slabs and concrete paths near Morayfield.",
      "url": "https://polyconcretingqld.com.au/bellmere-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Bellmere",
        "addressRegion": "QLD",
        "postalCode": "4510",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.09,
        "longitude": 152.93
      },
      "areaServed": [
        "Bellmere", "Morayfield", "Caboolture", "Burpengary", "Upper Caboolture", "Narangba"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 16. BANKSIA BEACH ──────────────────────────────────── */
  {
    id: "banksia-beach",
    name: "Banksia Beach",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4507",
    heading: "Concreting in Banksia Beach",
    tagline: "Quality concrete for Bribie Island's Banksia Beach properties.",
    intro: [
      "Banksia Beach is one of Bribie Island's primary residential suburbs — a low-density coastal community with a mix of permanent homes and holiday properties facing the Pumicestone Passage and Moreton Bay. Driveways, exposed aggregate alfresco areas, pool surrounds, and concrete paths are the most common jobs we're called out for on Bribie Island, and we service Banksia Beach regularly. The coastal environment here means specification matters — salt air, high UV, and coastal humidity all affect concrete long-term if it's not built right.",
      "We use appropriate mix design and quality sealer on all Banksia Beach pours, particularly for exposed surfaces and pool surrounds. Exposed aggregate is the most popular finish on Bribie Island — the texture provides natural slip resistance on wet surfaces, it handles UV well, and it suits the relaxed coastal aesthetic of Banksia Beach properties. The natural aggregate colour palette also complements the coastal landscaping and light timber character typical of the island.",
      "Getting to Banksia Beach requires driving across the Bribie Island bridge, which we factor into our scheduling so timing and truck logistics are sorted before pour day. Angelo quotes every Banksia Beach job in person and gives a fixed written price. Same-day response to all enquiries."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Woorim", "Bribie Island", "Ningi", "Sandstone Point", "Toorbul",
      "Elimbah", "Caboolture", "Morayfield", "Beachmere", "Donnybrook"
    ],
    faqs: [
      {
        q: "Do you concrete on Bribie Island — Banksia Beach?",
        a: "Yes — we service Banksia Beach and the broader Bribie Island area regularly. Driveways, exposed aggregate alfresco areas, pool surrounds and paths are the most common jobs we quote there."
      },
      {
        q: "What concrete finish is best for Banksia Beach properties?",
        a: "Exposed aggregate is the most popular choice on Bribie Island — it holds up well to coastal UV, humidity and foot traffic, looks good long-term, and provides natural grip for alfresco and pool surround areas. We'll advise on the right aggregate and sealer combination when we come out to quote."
      },
      {
        q: "Does the coastal environment affect concrete in Banksia Beach?",
        a: "Salt air and humidity can affect concrete surface quality long-term if the wrong mix or sealer is used. We specify the right mix design and apply a quality sealer on exposed surfaces so your concrete holds up in the Bribie Island environment — it's factored in from the start."
      },
      {
        q: "Can you pour a pool surround at a Banksia Beach property?",
        a: "Yes — pool surrounds in coastal areas are a regular part of our work. We advise on the right slip-resistant finish, handle drainage details correctly, and apply appropriate sealer for the coastal environment."
      },
      {
        q: "How do you manage getting concrete trucks to Banksia Beach?",
        a: "We plan truck access to Bribie Island carefully — bridge access, timing relative to traffic and tides, and on-site turning space are all scoped at the quote. There are no surprises on pour day."
      }
    ],
    metaTitle: "Concreting Banksia Beach | Bribie Island Driveways, Pool Surrounds & Concrete | Poly Concreting",
    metaDesc: "Banksia Beach concreting — driveways, pool surrounds and exposed aggregate for Bribie Island properties. Coastal specialists. Fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["agg-drive", "pool", "pool-deck", "patio-agg", "outdoor-patio-10", "strathpine-exposed", "plain-broom-drive", "side-path"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Banksia Beach",
      "description": "Concreting services in Banksia Beach QLD — driveways, pool surrounds and exposed aggregate for Bribie Island properties.",
      "url": "https://polyconcretingqld.com.au/banksia-beach-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Banksia Beach",
        "addressRegion": "QLD",
        "postalCode": "4507",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.08,
        "longitude": 153.17
      },
      "areaServed": [
        "Banksia Beach", "Woorim", "Bribie Island", "Ningi", "Sandstone Point", "Toorbul"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 17. NINGI ──────────────────────────────────────────── */
  {
    id: "ningi",
    name: "Ningi",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4511",
    heading: "Concreting in Ningi",
    tagline: "Coastal lifestyle concrete for Ningi and the Pumicestone Passage area.",
    intro: [
      "Ningi sits on the mainland side of Pumicestone Passage, across from Bribie Island's northern end. It's a quiet coastal lifestyle area with residential and acreage properties, and the concrete work here reflects that character — driveways, shed slabs, outdoor entertaining areas, and concrete paths are the most common requests. Poly Concreting services Ningi from Morayfield and understands the coastal environment's demands on concrete work.",
      "Coastal humidity and salt air reach Ningi properties, particularly those facing Pumicestone Passage. For exposed surfaces and outdoor areas, the right mix design and quality sealer matter long-term. We factor this into every Ningi pour upfront — not as an add-on at the end. Whether it's an alfresco slab, pool surround, or driveway, we specify the concrete appropriately for the coastal environment.",
      "The soils in Ningi vary from sandy coastal profiles close to the water to heavier clay further inland. Both need careful sub-base preparation — sandy profiles require thorough compaction to prevent subsidence, while clay-heavy soils need to be managed for seasonal movement. We assess site conditions when we come out to quote and build the preparation approach into the price. Angelo gives a fixed written quote and is on site for every pour."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Banksia Beach", "Sandstone Point", "Toorbul", "Elimbah", "Beachmere",
      "Caboolture", "Morayfield", "Donnybrook", "Narangba", "Burpengary"
    ],
    faqs: [
      {
        q: "Do you concrete in Ningi?",
        a: "Yes — Ningi and the surrounding Pumicestone Passage area are within our regular service area. Driveways, shed slabs, alfresco areas and pool surrounds are common jobs we quote there."
      },
      {
        q: "What concrete services do you offer in Ningi?",
        a: "We pour driveways, shed slabs, alfresco areas, pool surrounds, paths and garage pads in Ningi. All finishes available — broom, plain, exposed aggregate, coloured and trowel."
      },
      {
        q: "Does the coastal environment affect concrete in Ningi?",
        a: "Coastal humidity and salt air are factors for Pumicestone Passage properties. We use appropriate mix design and apply quality sealer on exposed surfaces to ensure longevity. This is factored into our quote upfront."
      },
      {
        q: "What's the best concrete finish for a Ningi driveway?",
        a: "Broom finish is the practical standard for driveways. Exposed aggregate is popular for front driveways where street appeal matters and provides good traction year-round. We'll advise on the right choice for your property when we come out to quote."
      },
      {
        q: "How quickly can you quote a concrete job in Ningi?",
        a: "Same-day response to all enquiries. Site visits typically within 48–72 hours. We give you a fixed written price at the quote — no back-and-forth."
      }
    ],
    metaTitle: "Concreting Ningi QLD | Driveways, Slabs & Coastal Concrete | Poly Concreting",
    metaDesc: "Ningi concreting — driveways, shed slabs and outdoor concrete for coastal lifestyle properties near Pumicestone Passage. Fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["agg-drive", "plain-broom-drive", "acreage", "patio-agg", "outdoor-patio-10", "pool", "side-path", "wamuran-drive"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Ningi",
      "description": "Concreting services in Ningi QLD — driveways, shed slabs and outdoor concrete near Pumicestone Passage.",
      "url": "https://polyconcretingqld.com.au/ningi-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Ningi",
        "addressRegion": "QLD",
        "postalCode": "4511",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.07,
        "longitude": 153.08
      },
      "areaServed": [
        "Ningi", "Banksia Beach", "Sandstone Point", "Toorbul", "Elimbah", "Beachmere"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 18. SANDSTONE POINT ────────────────────────────────── */
  {
    id: "sandstone-point",
    name: "Sandstone Point",
    region: "Moreton Bay",
    state: "QLD",
    postcode: "4511",
    heading: "Concreting in Sandstone Point",
    tagline: "Waterside concrete for Sandstone Point's Pumicestone Passage homes.",
    intro: [
      "Sandstone Point sits at the base of the Bribie Island bridge on the mainland side of Pumicestone Passage — a small residential community with a strong waterside character. Homeowners here invest in concrete that complements the lifestyle: driveways that work, alfresco areas that face the passage, pool surrounds that handle barefoot traffic year-round, and paths that connect buildings across well-kept blocks. Poly Concreting services Sandstone Point and understands what coastal concrete requires in this environment.",
      "Properties facing Pumicestone Passage are exposed to salt air and coastal humidity year-round. Concrete that isn't correctly specified deteriorates faster in this environment — surface scaling, sealer failure, and carbonation can all be accelerated by a salt-air exposure if the wrong mix or surface treatment is used. We specify appropriate mix design and apply quality sealer on every Sandstone Point pour so the concrete holds up for decades in this coastal setting.",
      "Exposed aggregate is the most popular finish in Sandstone Point — the texture provides natural grip for wet surfaces, it handles coastal UV without fading, and it suits the relaxed waterside aesthetic of the area. Pool surrounds, alfresco areas, and driveways in exposed aggregate are all jobs we quote and pour at Sandstone Point regularly. Fixed written quotes. Angelo on every job."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Ningi", "Banksia Beach", "Toorbul", "Elimbah", "Beachmere",
      "Donnybrook", "Caboolture", "Morayfield", "Narangba", "Burpengary"
    ],
    faqs: [
      {
        q: "Do you concrete in Sandstone Point?",
        a: "Yes — Sandstone Point and the surrounding Pumicestone Passage area are within our service area. Driveways, exposed aggregate alfresco areas, pool surrounds and paths are common jobs we quote there."
      },
      {
        q: "What concrete finish is best for a Sandstone Point property?",
        a: "Exposed aggregate is a strong choice for coastal Sandstone Point properties — it handles UV, coastal humidity and bare feet year-round without the maintenance burden of some other finishes. Broom finish is the practical option for working driveways and paths. We advise on both when we come out to quote."
      },
      {
        q: "Does the Pumicestone Passage environment affect concrete at Sandstone Point?",
        a: "Salt air and humidity are significant factors on passage-side properties. We use the right mix design and apply quality sealer on exposed surfaces. This is specified upfront in the quote — not added as an extra at handover."
      },
      {
        q: "Can you pour a pool surround at a Sandstone Point property?",
        a: "Yes — pool surrounds with appropriate slip-resistant finish are a regular part of our coastal work. We handle drainage details, specify the right sealer for the coastal environment, and advise on the best finish for your specific site."
      },
      {
        q: "How quickly can you quote a job in Sandstone Point?",
        a: "Same-day response to all enquiries. Site visits to Sandstone Point typically within 48–72 hours. Fixed written price at the quote. No back-and-forth."
      }
    ],
    metaTitle: "Concreting Sandstone Point QLD | Driveways, Pool Surrounds & Coastal Concrete | Poly Concreting",
    metaDesc: "Sandstone Point concreting — driveways, pool surrounds and exposed aggregate for Pumicestone Passage properties. Coastal specialists. Fixed written quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["agg-drive", "pool", "pool-deck", "patio-agg", "strathpine-exposed", "outdoor-patio-10", "plain-broom-drive", "side-path"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Sandstone Point",
      "description": "Concreting services in Sandstone Point QLD — driveways, pool surrounds and coastal concrete on Pumicestone Passage.",
      "url": "https://polyconcretingqld.com.au/sandstone-point-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Sandstone Point",
        "addressRegion": "QLD",
        "postalCode": "4511",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.10,
        "longitude": 153.14
      },
      "areaServed": [
        "Sandstone Point", "Ningi", "Banksia Beach", "Toorbul", "Elimbah", "Beachmere"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  },

  /* ── 19. TOOWOOMBA ───────────────────────────────────────── */
  {
    id: "toowoomba",
    name: "Toowoomba",
    region: "Darling Downs",
    state: "QLD",
    postcode: "4350",
    heading: "Concreting in Toowoomba",
    tagline: "Built to handle Toowoomba's climate — from frost to summer storms.",
    intro: [
      "Toowoomba's position on the Darling Downs escarpment creates a climate unlike the coastal and Moreton Bay suburbs. Cold winters with occasional frosts, hot dry summers, and rapid temperature swings put unique demands on concrete work. Freeze-thaw cycles — while mild by alpine standards — still cause surface scaling on concrete that isn't mixed and finished correctly. Poly Concreting specifies the appropriate cement-to-water ratio and uses quality admixtures for Toowoomba pours, giving you concrete that holds its integrity through the full seasonal cycle year after year.",
      "Toowoomba is an established city with a strong residential and commercial base, and the demand here centres on driveway replacements for older properties, patio slabs for homes taking advantage of the city's famous gardens and outdoor culture, and practical slabs for the city's active farming and rural services community. The Garden City lifestyle means outdoor entertaining areas, pathways through established gardens, and decorative concrete that sits sympathetically within beautiful landscaped properties. We get a lot of requests for coloured concrete and trowel finishes that work within these classic Toowoomba garden settings.",
      "We also do commercial and industrial slabs for Toowoomba's significant industrial and logistics sector around the Charlton Wellcamp precinct. If you need a hardstand, workshop floor, or commercial driveway in the Toowoomba area, Poly Concreting can deliver. Distance means scheduling is planned ahead — we block out Toowoomba work in focused runs to make the trip worthwhile for everyone."
    ],
    services: LOCATION_SERVICES,
    nearbySuburbs: [
      "Harristown", "Newtown", "Rangeville", "Highfields", "Kearneys Spring",
      "Darling Heights", "Centenary Heights", "Wilsonton", "North Toowoomba", "Drayton"
    ],
    faqs: [
      {
        q: "Does the cold climate in Toowoomba affect concrete differently than Brisbane?",
        a: "Yes — Toowoomba's cooler winters and frost risk mean we take extra care with mix design and curing. We use concrete with the appropriate water-cement ratio to resist surface scaling and apply curing compounds to protect the surface during temperature swings. The result is concrete that lasts just as long as anywhere else."
      },
      {
        q: "Do you travel to Toowoomba for residential jobs?",
        a: "Yes — we service Toowoomba for both residential and commercial work. We schedule Toowoomba jobs in planned runs, so book ahead and we'll lock in a date. The drive is well worth it for quality work we're proud to put our name on."
      },
      {
        q: "What concrete finish suits the garden city aesthetic of Toowoomba?",
        a: "Coloured concrete in warm earthy tones works beautifully in Toowoomba's garden-rich suburbs. Smooth trowel or broom finishes in a heritage-appropriate grey or sandstone colour are popular choices for driveways and paths adjacent to established gardens."
      },
      {
        q: "I need a large workshop slab near the Wellcamp industrial area. Can you quote that?",
        a: "Absolutely — commercial and industrial slabs in the Wellcamp and Charlton area are something we quote on request. We'll need the slab dimensions, load requirements, and site access details to prepare an accurate commercial quote."
      },
      {
        q: "How much lead time do you need for Toowoomba bookings?",
        a: "We ask for at least 3–4 weeks notice for Toowoomba work so we can plan the run effectively. In peak season it may be longer. Call us early and we'll find a date that works. We don't rush Toowoomba jobs — when we're there we do it properly."
      }
    ],
    metaTitle: "Concreting Toowoomba | Poly Concreting",
    metaDesc: "Toowoomba concreting — driveways, patios, slabs & garden paths. Climate-appropriate mix design. Residential & commercial. Free quotes.",
    ogImage: "assets/img/agg-driveway.webp",
    projectIds: ["rural-drive", "gatton-drive-ext", "gatton-pool", "acreage", "commercial", "outdoor-patio-10", "wamuran-drive", "redbank-coloured-path"],
    schema: {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Poly Concreting — Toowoomba",
      "description": "Concreting services in Toowoomba QLD — driveways, patios, slabs and commercial concrete built for Toowoomba's climate.",
      "url": "https://polyconcretingqld.com.au/toowoomba-concreting",
      "telephone": "+61481445041",
      "email": "info@polyconcretingqld.com.au",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Toowoomba",
        "addressRegion": "QLD",
        "postalCode": "4350",
        "addressCountry": "AU"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -27.56,
        "longitude": 151.95
      },
      "areaServed": [
        "Toowoomba", "Highfields", "Harristown", "Newtown", "Rangeville",
        "Kearneys Spring", "Centenary Heights", "Wilsonton", "Darling Heights"
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
        "opens": "07:00",
        "closes": "17:00"
      }
    }
  }

];
