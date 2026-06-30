// src/i18n/en.ts
export const en = {
  site: {
    title: 'Euro Sandwich Panels | Technical Buyer\'s Guide & Insulation Solutions',
    description:
      'Discover Euro Sandwich Panels: what they are, how to choose the right thickness, and why European-engineered PIR, PUR and Rockwool panels lead in energy efficiency and sustainable construction.',
  },
  nav: {
    what: 'What is it?',
    menu: 'Menu',
    materials: 'Core Materials',
    calculator: 'Calculator',
    technical: 'Specifications',
    quote: 'Get a Quote',
    applications: 'Applications',   // 👈
    installation: 'Installation',   // 👈
    blog: 'Blog',
    cta: 'Free Sample Pack',
    faq: 'FAQ',
    langs: {
      en: 'EN',
      es: 'ES',
    },
  },
  hero: {
    badge: 'EU Standards EN 14509 Certified Technical Guide',
    title: 'European Quality Insulation Solutions & Structural Panels',
    subtitle:
      'Euro Sandwich Panels deliver continuous thermal envelopes, advanced fire containment, and rapid building assembly. Learn how PIR, PUR, and Rockwool core innovations define modern building design.',
    cardCalculator: {
      title: 'U-Value Calculator',
      desc: 'Calculate thickness relative to localized European thermal zones.',
    },
    cardMaterials: {
      title: 'Compare Chemistry Cores',
      desc: 'Analyze structural density, acoustic insulation, and reaction to fire.',
    },
    badges: {
      fire: 'Class A1 Non-Combustible Option',
      eco: 'Zero ODP & GWP Ecological Cores',
      thermal: 'Low Thermal Bridges Profiles',
    },
    svgLabel: 'Engineering Concept Model',
    svgCaption:
      'Continuous cross-sectional composite system: galvanized external profiles bound to zero-ozone-depletion molecular foam.',
    svgCore: 'HIGH-DENSITY CORE',
    svgSkin: 'PROTECTIVE STEEL SKIN',
    svgJoint: 'THERM-JOINT INTERLOCK',
  },
  anatomy: {
    eyebrow: 'Anatomy of an Envelope',
    title: 'What is a Sandwich Panel?',
    subtitle:
      'Unlike traditional multilayered wall structures assembled sequentially on a job site, sandwich panels are high-efficiency, composite cladding units engineered inside controlled manufacturing centers.',
    cards: [
      {
        number: '01',
        title: 'External Steel Facings',
        desc: 'Galvanized structural sheet steel coated with high-durability polymer finishes (like Polyester, PVDF, or Plastisol). These facings resist mechanical impacts, UV degradation, corrosive wind pressures, and structural static loads.',
        specs: [
          'Standard thicknesses: 0.50mm to 0.70mm',
          'Highly structural micro-ribbed finishes',
        ],
      },
      {
        number: '02',
        title: 'Insulation Chemistry Core',
        desc: 'The composite core delivers structural shear strength and determines thermal capabilities. Modern formulations include PIR (Polyisocyanurate) polymers, PUR (Polyurethane) foams, and high-density, non-combustible Mineral Rockwool layers.',
        specs: [
          'Outstanding Lambda rating (as low as 0.022 W/mK)',
          'Solid continuous thermal profile',
        ],
      },
      {
        number: '03',
        title: 'Hermetic Joint Profiles',
        desc: 'The architectural interface of modern insulated structures. Male-female interlocking geometries designed with embedded compression rubber seals prevent atmospheric air seepage, vapor transfer, water leaks, and thermal bridge loss.',
        specs: [
          'Prevents air leakage and mold growth',
          'Quick modular locking alignment',
        ],
      },
    ],
  },
  materials: {
    eyebrow: 'Physics & Fire Dynamics',
    title: 'Compare Core Materials: PIR vs. Rockwool vs. PUR',
    subtitle:
      'Selecting the right panel core depends on three elements: thermal resistance, fire rating compliance, and structural weight profiles.',
    tabs: {
      pir: {
        label: 'PIR Core Insulation',
        badge: 'Optimal Efficiency',
        tagline: 'Rigid thermoset foam containing cross-linked polyisocyanurate polymers for high insulation performance.',
      },
      rockwool: {
        label: 'Mineral Rockwool',
        badge: 'Maximum Fire Shield',
        tagline: 'Dense natural volcanic rock fibers tailored for zero combustibility safety layouts.',
      },
      pur: {
        label: 'PUR Core Insulation',
        badge: 'Standard Budget',
        tagline: 'Classic Polyurethane polymer foam delivering versatile and economical structural control.',
      },
    },
    detail: {
      cert: 'STANDARD CERTIFICATE EN 13501-1',
      lambdaLabel: 'Thermal Conductivity (λ)',
      fireLabel: 'Fire Performance',
      weightLabel: 'Structural Weight',
      acousticLabel: 'Acoustic Absorption',
      prosTitle: 'Architectural Advantages',
      consTitle: 'Known Technical Trade-offs',
    },
    data: {
      pir: {
        title: 'PIR Core (Polyisocyanurate)',
        lambda: '0.022 W/m·K',
        desc: 'PIR core sandwich panels are the definitive industrial choice for general cold storage, massive food distribution networks, and premium temperature-controlled structural projects. Due to its rigid, closed-cell construction matrix, water retention is virtually zero, preventing internal rot, condensation cycles, and decay.',
        fire: 'Class B-s1, d0 (Hardly flammable, zero droplets)',
        weight: 'Ultra-Light (~11.4 kg/m²)',
        acoustic: 'R_w ≈ 24 dB',
        pros: [
          'Best thermal performance per millimeter thickness',
          'Lightweight core significantly reduces foundation loads',
          'Rigid cellular memory preserves absolute structural alignment',
        ],
        cons: [
          'Lower maximum temperature thresholds than Rockwool',
          'Reduced sound isolation profiles compared to heavy fibers',
        ],
      },
      rockwool: {
        title: 'Mineral Rockwool Core',
        lambda: '0.038 W/m·K',
        desc: 'Mineral Rockwool panels represent the ultimate option for extreme fire defense layouts. Spun volcanic fiber cores do not propagate active fires or fuel smoke expansion. These are ideal for high-risk industrial facilities, complex data centers, partition fire barriers, and public assembly buildings.',
        fire: 'Class A1 / A2-s1, d0 (Totally Non-combustible)',
        weight: 'High-Density (~19.2 kg/m²)',
        acoustic: 'R_w ≈ 32 dB (Outstanding Isolation)',
        pros: [
          'Highest fire protection rating (completely non-combustible)',
          'Excellent acoustic attenuation prevents exterior noise penetration',
          'High resistance to sustained temperatures and thermal stress',
        ],
        cons: [
          'Requires higher thickness profiles to match PIR thermal performance',
          'Increased structural load (requires stronger foundations and supports)',
        ],
      },
      pur: {
        title: 'PUR Core (Polyurethane)',
        lambda: '0.024 W/m·K',
        desc: 'Polyurethane sandwich panels deliver highly reliable and versatile insulation performance with a lower overall price profile. While largely replaced by PIR in high-risk zones, standard PUR remains effective for ambient warehouses, agricultural buildings, and budget-oriented developments.',
        fire: 'Class C-s2, d0 (Flammable, moderate smoke release)',
        weight: 'Lightweight (~11.1 kg/m²)',
        acoustic: 'R_w ≈ 23 dB',
        pros: [
          'Cost-effective insulation solution for agricultural applications',
          'Rapid assembly timelines with simple locking joint details',
          'Good moisture rejection characteristics over life span',
        ],
        cons: [
          'Lower fire safety rating compared to modern PIR polymers',
          'Limited application scope within highly regulated public buildings',
        ],
      },
    },
  },
  calculator: {
    eyebrow: 'Interactive Engineering Tool',
    title: 'U-Value & Thickness Advisor',
    subtitle:
      'Identify insulation dimensions matching your targeted energy targets. Toggle your project profiles to compute custom architectural specifications.',
    climateLabel: '1. Regional Climate Context',
    climates: {
      nordic: { label: 'Nordic', sub: 'Extreme Cold' },
      central: { label: 'Central EU', sub: 'Moderate' },
      south: { label: 'Mediterranean', sub: 'Hot/Warm' },
    },
    appLabel: '2. Building Application Purpose',
    apps: {
      cold: 'High-Security Cold Storage Facility (Sub-Zero)',
      logistics: 'Standard Logistics & Distribution Center (Ambient)',
      production: 'Light Industrial Manufacturing & Assembly Plant',
      office: 'Commercial Office Building Envelope',
    },
    coreLabel: '3. Primary Material Choice',
    thicknessLabel: '4. Recommended Core Thickness',
    disclaimer: 'Calculations are calculated under static air coefficients according to ISO 6946.',
    output: {
      label: 'ESTIMATED THERMAL OUTPUT',
      uvalue: 'U-Value (Heat Transfer)',
      rvalue: 'R-Value (Thermal Resistance)',
      acoustic: 'Acoustic Shielding',
      fire: 'Fire Threshold',
      weight: 'Weight / SqM',
      ctaDesc: 'Need architectural project validation?',
      ctaLink: 'Download our technical blueprint guides.',
      cta: 'Select Specimen Config',
    },
  },
  technical: {
    eyebrow: 'European Performance Norms',
    title: 'Standardized Structural Verification',
    intro:
      'To guarantee high mechanical stability, fire containment, and thermal permanence, sandwich panels specified across the EU must meet standard EN 14509. This prevents cladding collapses, thermal degradation, and dangerous fire propagation.',
    items: [
      {
        title: 'Long-Term Thermal Degradation (Aging)',
        desc: 'Rigid foam blowing agents tend to age over decades. Quality panels utilize diffusion-tight steel facings that preserve pure insulating gases inside cellular compartments, ensuring R-values are sustained for over 40 years.',
      },
      {
        title: 'Pressure Deflection & Mechanical Span Limits',
        desc: 'Wind loads create dynamic internal tension and outer compression forces. Standard deflection tables limit sandwich panels to clear span lengths, preventing core separation or surface skin buckling.',
      },
      {
        title: 'Micro-Capillary Joint Leakage Prevention',
        desc: 'Humid conditions cause moisture to search for structural bypass points. Integrated capillary breaks inside double-tongue joints route surface condensation outward, bypassing core elements.',
      },
    ],
    tableTitle: 'Engineering Reference Standards',
    tableNote:
      'Sound absorption varies significantly between sandwich panel models. While standard PIR provides R_w around 24 dB, dense Rockwool cores with perforated profiles can exceed 33 dB.',
    tableNoteLabel: 'Note on Sound Transmission Loss:',
    rows: [
      { label: 'General Product Standard', value: 'EN 14509' },
      { label: 'Reaction to Fire (Rockwool)', value: 'Class A1 / A2-s1, d0' },
      { label: 'Reaction to Fire (PIR)', value: 'Class B-s1, d0 / B-s2, d0' },
      { label: 'Core Density (Rockwool)', value: '100 - 120 kg/m³' },
      { label: 'Core Density (PIR)', value: '38 - 42 kg/m³' },
      { label: 'Water Absorption (Closed Cell)', value: '< 1.0 % (Vol)' },
      { label: 'Standard Color Coding Standard', value: 'RAL Color Palette' },
    ],
  },
  quote: {
    eyebrow: 'Get a Quote',
    title: 'Request a Project Quote',
    subtitle:
      'Configure your panel requirements and submit your project details. Our technical team will respond within 24 hours with a tailored specification and price estimate.',
    step1: 'Step 1: Core Type',
    step2: 'Step 2: Panel Thickness',
    step3: 'Step 3: External Color',
    cores: [
      { value: 'PIR 60mm', label: 'PIR 60mm', badge: 'Ultra-Slim' },
      { value: 'PIR 100mm', label: 'PIR 100mm', badge: 'Recommended' },
      { value: 'Rockwool 120', label: 'Rockwool 120', badge: 'Fireproof' },
    ],
    thicknesses: [
      { value: '60mm', label: '60 mm' },
      { value: '100mm', label: '100 mm' },
      { value: '120mm', label: '120 mm' },
      { value: '160mm', label: '160 mm' },
      { value: '200mm', label: '200 mm' },
    ],
    colors: [
      { value: 'RAL 9002', label: 'RAL 9002', hex: '#EAE6DF' },
      { value: 'RAL 9006', label: 'RAL 9006', hex: '#D1D5DB' },
      { value: 'RAL 7016', label: 'RAL 7016', hex: '#374151' },
      { value: 'RAL 8004', label: 'RAL 8004', hex: '#A15033' },
    ],
    summaryTitle: 'Your Configuration',
    summaryEmpty: 'Complete the steps on the left to see your configuration summary.',
    previewLabel: 'Live Preview',
    formTitle: 'Project Details',
    formArea: 'Estimated Area (m²)',
    formSector: 'Building Sector',
    formSectors: [
      { value: 'cold', label: 'Cold Storage' },
      { value: 'logistics', label: 'Logistics & Warehouse' },
      { value: 'food', label: 'Food Processing' },
      { value: 'office', label: 'Commercial Office' },
      { value: 'agriculture', label: 'Agriculture' },
      { value: 'other', label: 'Other' },
    ],
    formName: 'Full Name',
    formEmail: 'Professional Email',
    formCompany: 'Company Name',
    formNotes: 'Additional project notes (optional)',
    formSubmit: 'Request Quote',
    hint: 'No commitment required. We respond within 24 hours.',
    toasts: {
      submitted: {
        title: 'Quote Request Sent',
        body: 'Our team will contact you within 24 hours with your tailored estimate.',
      },
    },
  },
  faq: {
    meta: {
      title: 'Sandwich Panel FAQ | Euro Sandwich Panels – PIR, PUR & Rockwool Guide',
      description:
        'Expert answers to the most common questions about insulated sandwich panels: U-values, fire ratings, EN 14509, PIR vs Rockwool, installation, and procurement.',
    },
    hero: {
      eyebrow: 'Technical Knowledge Base',
      title: 'Frequently Asked Questions',
      subtitle:
        'Clear, specification-grade answers to the questions engineers, contractors, and procurement managers ask most about insulated sandwich panels.',
    },
    items: [
      // ── THERMAL ──────────────────────────────────────────────────────────
      {
        q: 'What U-value do sandwich panels achieve, and how is it calculated?',
        a: 'Sandwich panels achieve U-values between 0.10 and 0.50 W/m²K depending on core material and thickness. The U-value is calculated as U = 1 / (Rsi + d/λ + Rse), where d is core thickness in metres, λ is the core thermal conductivity (0.022 W/mK for PIR, 0.038 W/mK for Rockwool), and surface resistances Rsi = 0.13 and Rse = 0.04 m²K/W per ISO 6946. A 100mm PIR panel yields approximately U = 0.21 W/m²K. Use our U-Value Calculator to compute the exact specification for your project climate zone.',
      },
      {
        q: 'What thickness of PIR sandwich panel do I need for a cold storage facility?',
        a: 'Sub-zero cold rooms operating below −18 °C typically require 150–200 mm PIR panels (U ≤ 0.12 W/m²K). Positive-temperature chillers (0–8 °C) generally use 100–120 mm PIR (U ≤ 0.18 W/m²K). These thicknesses prevent condensation cycling on the cold face and minimise compressor overload. The exact specification depends on internal setpoint, external ambient temperature, and building area; our technical team can provide a full energy load calculation on request.',
      },
      {
        q: 'How long does the thermal performance of sandwich panels last?',
        a: 'High-quality PIR and PUR sandwich panels maintain ≥ 90% of their initial thermal resistance for 40 to 50 years when installed correctly. This is achieved through diffusion-tight galvanised steel facings that retain the low-conductivity blowing gases inside closed cells over time. Rockwool panels have indefinite thermal stability because mineral fibre conductivity does not degrade with age. Independent long-term aging tests are conducted under EN 14509 Annex D.',
      },
      // ── FIRE ─────────────────────────────────────────────────────────────
      {
        q: 'What fire rating does a sandwich panel have? PIR vs Rockwool vs PUR.',
        a: 'Fire reaction classes under EN 13501-1 are: Rockwool core — Class A1 or A2-s1, d0 (non-combustible, zero flaming droplets); PIR core — Class B-s1, d0 (hardly flammable, zero droplets); PUR core — Class C-s2, d0 (limited combustibility, moderate smoke). For fire compartmentation walls, fire division barriers, and buildings with an occupancy load requiring EI 60/90/120 ratings, Rockwool is the mandatory engineering choice. PIR satisfies most warehouse, logistics, and commercial facade building codes.',
      },
      {
        q: 'Can sandwich panels be used as fire compartmentation barriers?',
        a: 'Yes, but only Rockwool-core panels with a Class A1 or A2 rating are suitable for fire compartmentation (EI-rated assemblies). The panel system — including fixings, joints, and interface details — must be tested as a complete assembly under EN 1365 or EN 1364 to achieve the required EI (Integrity and Insulation) classification. PIR and PUR core panels must not be specified for fire walls without a full assembly fire test certificate.',
      },
      // ── STANDARDS ────────────────────────────────────────────────────────
      {
        q: 'What does EN 14509 certification mean for sandwich panels?',
        a: 'EN 14509 is the European harmonised product standard for double-skin metal-faced insulating sandwich panels. It mandates factory production control, CE marking, and third-party testing across: structural load tables (wind, snow, point loads), thermal transmittance (U-value), reaction to fire, water tightness, and dimensional tolerances. Panels bearing a CE mark under EN 14509 provide a Declaration of Performance that can be submitted directly for building permit compliance in EU and EEA countries. Always request the current DoP document from your supplier.',
      },
      {
        q: 'Are sandwich panels suitable for BREEAM or LEED certified buildings?',
        a: 'Yes. PIR and Rockwool core panels can contribute credits in BREEAM (Energy, Materials, Health & Wellbeing) and LEED (Energy & Atmosphere, Indoor Environmental Quality) schemes. PIR panels with zero-ODP and low-GWP blowing agents qualify for Materials credits. Rockwool mineral core contains high percentages of recycled content. Specific credit allocation depends on the applicable scheme version and assessor verification; request Environmental Product Declarations (EPDs) from your supplier for documentation.',
      },
      // ── MATERIALS ────────────────────────────────────────────────────────
      {
        q: 'What is the difference between PIR and PUR core sandwich panels?',
        a: 'PIR (Polyisocyanurate) and PUR (Polyurethane) are both closed-cell rigid foam cores, but PIR undergoes additional crosslinking that produces a higher char residue on exposure to flame, improving its fire performance from Class C (PUR) to Class B (PIR). PIR also achieves a slightly lower lambda value (0.022 vs 0.024 W/mK), meaning thinner profiles for the same U-value. For most commercial and industrial applications in regulated markets, PIR has largely replaced PUR. PUR remains cost-effective for ambient agricultural and budget warehouse projects where strict fire codes do not apply.',
      },
      {
        q: 'What steel facing coatings are available and which should I specify for coastal sites?',
        a: 'Standard coating systems from innermost to most durable are: Polyester (PE) 25 µm — general interior use; High-Durability Polyester (HDP) 35 µm — standard exterior; PVDF 27 µm — premium UV and chemical resistance; PURAL (Polyurethane + Polyamide beads) 50 µm — highest impact and scratch resistance. For marine or coastal sites within 1–5 km of saltwater, specify either PVDF or PURAL with a minimum Z275 galvanised base steel (275 g/m² zinc coating). Stainless steel facings are available for aggressive food processing and pharmaceutical environments.',
      },
      // ── INSTALLATION ─────────────────────────────────────────────────────
      {
        q: 'How are sandwich panels fixed to the supporting structure?',
        a: "Panels are fixed with self-drilling fasteners that penetrate the supporting steel structure (purlins, rails, or girts) by a minimum of 20 mm. Fasteners are driven at the joint rib for concealed fixing or through the panel face for exposed fixing. Torque must be set to 4–6 Nm to prevent skin dimpling, which would create thermal bridges at each fixing point. Neoprene-bonded stainless washers are mandatory on all exposed fixings. Fixing centres are derived from the manufacturer's span tables for the design wind uplift zone.",
      },
      {
        q: 'What are the most common installation errors and how do I avoid them?',
        a: 'The six most reported errors are: (1) leaving protective film on after installation — UV heat fuses it permanently to the coating; (2) misaligning the first panel — errors compound across the elevation; (3) over-torquing fasteners — dimples the skin and creates thermal bridges; (4) incomplete tongue-and-groove engagement — allows air infiltration and moisture ingress; (5) using carbon steel fasteners on coastal sites — causes rust bleed and corrosion spread; (6) unsealed flashing laps — over 60% of post-installation water ingress originates at flashings. See our full Step-by-Step Installation Guide for corrective procedures.',
      },
      // ── PROCUREMENT ──────────────────────────────────────────────────────
      {
        q: 'How do I request a technical quote for a sandwich panel project?',
        a: 'To receive an accurate specification and price estimate, provide: (1) panel application (wall / roof / cold room); (2) core material preference; (3) required U-value or minimum thickness; (4) total area in m²; (5) building sector and location. Use our online Quote Configurator for same-day indicative pricing, or contact our technical team directly for complex projects requiring structural load verification or custom coating specifications. We respond to all enquiries within 24 hours.',
      },
    ],
    cta: {
      eyebrow: 'Ready to Specify?',
      title: 'Configure Your Panel Requirements',
      body: 'Use our interactive Quote Configurator to select core type, thickness, and color, then submit your project details for a tailored estimate within 24 hours.',
      btn: 'Get a Quote',
      href: '/#quote',
      secondary: 'Explore Applications',
      secondaryHref: '/applications/',
    },
  },
  footer: {
    tagline: 'European Quality Insulation Solutions. Educational resources, structural performance catalogs, and technical parameters dedicated to building envelopes.',
    cols: {
      cores: {
        title: 'Engineering Cores',
        links: [
          { label: 'PIR Insulating Panels', href: '#materials' },
          { label: 'Mineral Rockwool (A1)', href: '#materials' },
          { label: 'PUR Polyurethane Cores', href: '#materials' },
          { label: 'Anti-Corrosive Coatings', href: '#technical' },
        ],
      },
      tools: {
        title: 'Technical Tools',
        links: [
          { label: 'U-Value & R-Value Advisor', href: '#calculator' },
          { label: 'Virtual Specimen Designer', href: '#sample-builder' },
          { label: 'Deflection Capacity Tables', href: '#technical' },
          { label: 'Capillary Leakage Analysis', href: '#what-is-it' },
        ],
      },
      standards: {
        title: 'Regulatory Standards',
        desc: 'Our technical calculations strictly follow standard EN 14509 specifications for double skin metal faced insulating panels.',
        badge: 'EN ISO 6946 compliant',
      },
    },
    legal: {
      copyright: '© 2026 Euro Sandwich Panels. All rights reserved.',
      imprint: 'Imprint & Legal Notice',
      privacy: 'Privacy Policy',
      cookies: 'Cookie Settings',
    },
  },
  applications: {
    meta: {
      title: 'Sandwich Panel Applications by Industry | Euro Sandwich Panels',
      description: 'Discover the right sandwich panel for your industry. Technical recommendations for cold storage, logistics, food processing, offices and agriculture.',
    },
    hero: {
      eyebrow: 'Industry Applications',
      title: 'The Right Panel for Every Building Type',
      subtitle: 'Each sector has unique thermal, fire and structural demands. Find the engineered solution that matches your project requirements.',
    },
    sectors: {
      cold: {
        label: 'Cold Storage',
        title: 'Cold Storage & Refrigeration Facilities',
        desc: 'Sub-zero environments demand the highest thermal resistance available. Any thermal bridge or inadequate U-value directly translates into compressor overload, energy waste and product spoilage.',
        panel: 'PIR Core',
        thickness: '120 – 200 mm',
        uvalue: '≤ 0.12 W/m²K',
        why: 'PIR closed-cell structure virtually eliminates moisture ingress, which is critical in freeze-thaw cycling environments. Its lambda of 0.022 W/mK achieves sub-zero compliance at thinner profiles than any alternative.',
        specs: [
          'Continuous vapour barrier eliminates condensation risk',
          'Stainless steel or food-grade coatings available',
          'Floor-to-ceiling hermetic joint profiles prevent cold air loss',
        ],
      },
      logistics: {
        label: 'Logistics',
        title: 'Logistics & Distribution Centers',
        desc: 'Large-span warehouses prioritize fast installation, structural efficiency and ambient temperature control. Panel systems must span wide bays without intermediate supports while meeting building regulation U-values.',
        panel: 'PIR or PUR Core',
        thickness: '80 – 120 mm',
        uvalue: '≤ 0.25 W/m²K',
        why: 'Both PIR and PUR offer the lightweight profiles needed for long-span purlins and fast modular assembly. PIR is preferred when stricter fire codes apply; PUR suits budget-driven ambient warehouses.',
        specs: [
          'Spans up to 6m without intermediate support',
          'Micro-ribbed profiles handle forklift impact loads',
          'Available in full RAL palette for branding requirements',
        ],
      },
      food: {
        label: 'Food Industry',
        title: 'Food Processing & Production Plants',
        desc: 'Food environments combine sub-zero storage, high-humidity processing zones and strict hygiene regulations. Panels must resist chemical cleaning agents, prevent bacterial growth and meet fire compartmentation rules.',
        panel: 'PIR Core with hygienic liner',
        thickness: '100 – 160 mm',
        uvalue: '≤ 0.18 W/m²K',
        why: 'PIR closed-cell foam resists water absorption below 1% by volume, preventing bacterial colonisation inside the core. Smooth flat steel liners with sealed joints eliminate crevices where contaminants accumulate.',
        specs: [
          'Smooth flat inner liner rated for pressure washing',
          'Joint profiles sealed with food-safe EPDM gaskets',
          'Certified for HACCP and BRC storage environments',
        ],
      },
      office: {
        label: 'Commercial Office',
        title: 'Commercial Office & Facade Systems',
        desc: 'Office and commercial envelopes balance aesthetics, acoustic comfort and energy performance. Facade panels must achieve low U-values for BREEAM or LEED compliance while delivering architectural finish quality.',
        panel: 'Rockwool Core',
        thickness: '100 – 150 mm',
        uvalue: '≤ 0.20 W/m²K',
        why: 'Rockwool mineral fibre provides superior acoustic attenuation (Rw ≥ 32 dB) essential for urban office environments, combined with non-combustible Class A1 fire rating required by most commercial building codes.',
        specs: [
          'Class A1 non-combustible — no fire suppression penalty',
          'Rw ≥ 32 dB acoustic attenuation for open-plan comfort',
          'PVDF coatings retain colour for 25+ years on facades',
        ],
      },
      agriculture: {
        label: 'Agriculture',
        title: 'Agricultural & Rural Buildings',
        desc: 'Agricultural buildings require durable, cost-effective enclosures that handle humidity, animal waste vapours and wide temperature swings. Long service life with minimal maintenance is the primary driver.',
        panel: 'PUR Core',
        thickness: '60 – 100 mm',
        uvalue: '≤ 0.35 W/m²K',
        why: 'PUR offers the best cost-per-thermal-unit for ambient agricultural applications where extreme fire ratings are not mandatory. Its moisture rejection characteristics handle the high-humidity conditions typical of livestock and grain storage facilities.',
        specs: [
          'Polyester coatings resist ammonia and fertiliser corrosion',
          'Lightweight panels reduce structural steel requirements',
          'Fast dry-assembly cuts on-site labour costs significantly',
        ],
      },
    },
  },
  installation: {
    meta: {
      title: 'Sandwich Panel Installation Guide | Euro Sandwich Panels',
      description: 'Step-by-step technical guide for installing insulated sandwich panels. Joint details, common errors, tools required and maintenance tips.',
    },
    hero: {
      eyebrow: 'Installation Guide',
      title: 'How to Install Sandwich Panels Correctly',
      subtitle: 'A correct installation preserves the thermal, structural and fire performance engineered into every panel. Follow this technical sequence to avoid the most common on-site errors.',
    },
    // Cada step es una etapa del proceso. Se muestran en timeline.
    // connector: texto que aparece entre steps en el timeline horizontal
    steps: [
      {
        number: '01',
        title: 'Site Preparation & Structural Check',
        desc: 'Verify that the supporting structure — purlins, rails or concrete slab — meets the deflection and bearing capacity requirements specified in the panel load tables. Any misalignment exceeding 5mm per 3m span must be corrected before panel installation begins.',
        details: [
          'Check purlin alignment with a laser level across the full span',
          'Confirm steel support surface is clean, dry and free of mill scale',
          'Verify fixing centres match the panel span table for the wind load zone',
        ],
        warning: 'Never install panels on a structure that has not been signed off by a structural engineer.',
      },
      {
        number: '02',
        title: 'Panel Handling & Storage',
        desc: 'Improper handling is the leading cause of surface damage before installation. Panels must be lifted from both ends simultaneously using a spreader beam. Never drag panels across each other or allow point loads on the steel skin.',
        details: [
          'Store panels flat on level bearers, never on edge',
          'Keep protective film on until immediately before installation',
          'Limit stack height to 2.5m to prevent core compression',
        ],
        warning: 'Protective film left on after installation traps UV heat and permanently bonds to the coating.',
      },
      {
        number: '03',
        title: 'First Panel Positioning',
        desc: 'The first panel sets the reference line for the entire elevation. Position it plumb and square using string lines on both axes. Any error at this stage is multiplied across every subsequent panel in the run.',
        details: [
          'Start from a fixed reference corner — never from an opening',
          'Use temporary clamps to hold position before final fixing',
          'Confirm panel is perpendicular to the structural grid before drilling',
        ],
        warning: 'A 2mm error on the first panel can create a 20mm misalignment by panel 10.',
      },
      {
        number: '04',
        title: 'Joint Assembly & Sealing',
        desc: 'The male-female tongue-and-groove joint is the thermal and structural heart of the panel system. The joint must be engaged fully along its entire length before fixings are applied. Partial engagement creates thermal bridges and allows water ingress.',
        details: [
          'Apply EPDM compression seal to the female groove before engagement',
          'Drive joint home with a rubber mallet — never a steel hammer',
          'Check joint is fully closed with a feeler gauge before fixing',
        ],
        warning: 'Gap at joint exceeding 0.5mm voids the thermal certification of the assembly.',
      },
      {
        number: '05',
        title: 'Fixing & Fastener Torque',
        desc: 'Self-drilling fasteners must penetrate the supporting steel by a minimum of 20mm. Over-torquing compresses the panel skin and creates a thermal bridge at every fixing point. Under-torquing allows uplift under wind load.',
        details: [
          'Use manufacturer-specified fastener type for the support material',
          'Set torque driver to 4–6 Nm for standard 0.5mm steel skin panels',
          'Apply neoprene-bonded washers to all exposed fixings',
        ],
        warning: 'Never use bare steel fasteners on coastal or high-humidity sites — use stainless or hot-dip galvanised.',
      },
      {
        number: '06',
        title: 'Flashing, Trim & Final Inspection',
        desc: 'Flashings seal all panel terminations — eaves, verges, corners and openings. They are the last line of defence against wind-driven rain and must be fixed with sufficient laps and sealed with compatible sealant.',
        details: [
          'Minimum 150mm flashing lap at all horizontal joints',
          'Apply polyurethane sealant to all flashing-to-panel interfaces',
          'Inspect every joint and fixing from inside for light gaps before handover',
        ],
        warning: 'Unsealed flashing terminations account for over 60% of post-installation water ingress complaints.',
      },
    ],
    // Errores comunes — sección adicional debajo del timeline
    errors: {
      eyebrow: 'Common Mistakes',
      title: 'What Goes Wrong on Site',
      subtitle: 'These are the six most reported installation errors and how to avoid them.',
      items: [
        {
          title: 'Leaving protective film on after installation',
          desc: 'UV heat builds under the film and permanently fuses it to the coating, requiring mechanical removal that damages the surface.',
        },
        {
          title: 'Misaligned first panel',
          desc: 'Errors compound across the run. A misaligned start creates gaps, joint failures and aesthetic defects that are expensive to correct.',
        },
        {
          title: 'Over-torqued fasteners',
          desc: 'Dimpling the steel skin creates a direct thermal bridge at every fixing point, degrading the certified U-value of the assembly.',
        },
        {
          title: 'Incomplete joint engagement',
          desc: 'Partial tongue-and-groove engagement allows air movement, moisture ingress and reduces the shear strength of the panel system.',
        },
        {
          title: 'Wrong fastener specification',
          desc: 'Using carbon steel fasteners in coastal environments causes rust bleed that stains the facade and corrodes the panel skin from the fixing point outward.',
        },
        {
          title: 'Unsealed flashing laps',
          desc: 'Wind-driven rain exploits any unsealed termination. Most post-installation water ingress originates at flashings, not at panel joints.',
        },
      ],
    },
  },
} as const;

export type TranslationKeys = DeepString<typeof en>;

type DeepString<T> = {
  [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};