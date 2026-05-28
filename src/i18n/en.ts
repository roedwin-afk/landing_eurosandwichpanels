// src/i18n/en.ts
export const en = {
  site: {
    title: 'Euro Sandwich Panels | Technical Buyer\'s Guide & Insulation Solutions',
    description:
      'Discover Euro Sandwich Panels: what they are, how to choose the right thickness, and why European-engineered PIR, PUR and Rockwool panels lead in energy efficiency and sustainable construction.',
  },
  nav: {
    what: 'What is a Panel?',
    materials: 'Core Materials',
    calculator: 'U-Value Calculator',
    technical: 'Specifications',
    sample: 'Specimen Box',
    cta: 'Order Free Sample Pack',
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
  sample: {
    eyebrow: 'Tactile Physical Samples',
    title: 'Customize Your Free Technical Sample Box',
    subtitle:
      'Verify material finishes firsthand. Select up to three panel core samples and surface color swatches. We will ship them directly to your architectural office.',
    step1: 'Step 1: Core Type Selection',
    step2: 'Step 2: Sheet Metal Profile Texture',
    step3: 'Step 3: External RAL Color Coating',
    cores: [
      { value: 'PIR 60mm', label: 'PIR 60mm', badge: 'Ultra-Slim' },
      { value: 'PIR 100mm', label: 'PIR 100mm', badge: 'Recommended' },
      { value: 'Rockwool 120', label: 'Rockwool 120', badge: 'Fireproof' },
    ],
    finishes: [
      { value: 'Micro-Ribbed', label: 'Micro-Ribbed', sub: 'Standard' },
      { value: 'Smooth (Flat)', label: 'Smooth Flat', sub: 'Architectural' },
      { value: 'Deep Box Rib', label: 'Deep Box Rib', sub: 'Roof Style' },
    ],
    colors: [
      { value: 'RAL 9002', label: 'RAL 9002', hex: '#EAE6DF' },
      { value: 'RAL 9006', label: 'RAL 9006', hex: '#D1D5DB' },
      { value: 'RAL 7016', label: 'RAL 7016', hex: '#374151' },
      { value: 'RAL 8004', label: 'RAL 8004', hex: '#A15033' },
    ],
    addBtn: 'Add Sample to My Box',
    boxTitle: 'Your Technical Sample Box',
    previewLabel: 'Live Component Preview',
    emptyNotice: 'No samples selected yet. Add up to three above!',
    formName: 'Project Manager Name',
    formEmail: 'Professional Email Address',
    formCompany: 'Architectural / Construction Company',
    formSubmit: 'Request Delivery of My Sample Box',
    hint: 'Click configuration to automatically build preview block.',
    toasts: {
      added: { title: 'Sample Configuration Added', body: 'Slot successfully initialized inside your virtual box.' },
      full: { title: 'Box Capacity Full', body: 'Your technical specimen box can hold a maximum of 3 configurations.' },
      removed: { title: 'Sample Removed', body: 'Slot liberated in sample sequence builder.' },
      submitted: { title: 'Order Placed Successfully', body: 'Shipment initialized. Check confirmation at your email.' },
    },
  },
  faq: {
    eyebrow: 'Educational Resources',
    title: 'Frequently Asked Engineering Questions',
    subtitle: 'Crucial structural, chemical, and building science fundamentals simplified for project planners.',
    items: [
      {
        q: 'What is the difference between PIR and Rockwool cores?',
        a: [
          'PIR (Polyisocyanurate) is a lightweight closed-cell foam with remarkable thermal performance. With a lambda value of roughly 0.022 W/mK, you need thinner profiles to hit environmental compliance. It is ideal for general warehousing, commercial facades, and refrigeration systems.',
          'Rockwool (Mineral Wool) is made from volcanic mineral materials. It is physically heavier and has a higher thermal conductivity (approx. 0.038 W/mK). However, Rockwool is completely non-combustible (Class A1), making it the primary engineering option for fire division barriers, high-safety assembly structures, and loud production centers requiring extreme acoustic isolation.',
        ],
      },
      {
        q: 'How is the thermal U-value of a sandwich panel calculated?',
        a: [
          'The overall heat transfer coefficient (U-value) measures how much heat escapes through a structural square meter per degree of temperature difference.',
          'Formula: U = 1 / (R_internal_surface + R_core_insulation + R_external_surface)',
          'Because steel skins offer negligible thermal resistance, the computation matches the core insulation thickness (meters) divided by its specific Lambda value. Example: U = 1 / (0.13 + (0.10 / 0.022) + 0.04) ≈ 0.21 W/m²K',
        ],
      },
      {
        q: 'Are Euro Sandwich Panels certified under European standards?',
        a: [
          'Absolutely. European sandwich panels must strictly adhere to the standard EN 14509. This standard dictates structural testing criteria, wind resistance tolerances, load capacity profiles, weathering behaviors, water penetration safety rules, and strict combustion performance ratings.',
        ],
      },
      {
        q: 'How long do insulated sandwich panels last in extreme conditions?',
        a: [
          'High-quality architectural panels maintain structural and thermal performance standards for 40 to 50+ years. High-durability exterior steel coatings (such as Polyurethane with Polyamide beads - PURAL) resist corrosion from marine environments, acidic elements, and intensive ultraviolet exposure.',
        ],
      },
    ],
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
} as const;

export type TranslationKeys = DeepString<typeof en>;

type DeepString<T> = {
  [K in keyof T]: T[K] extends object ? DeepString<T[K]> : string;
};