// src/i18n/es.ts
import type { TranslationKeys } from './en';

export const es: TranslationKeys = {
  site: {
    title: 'Euro Sandwich Panels | Guía Técnica del Comprador & Soluciones de Aislamiento',
    description:
      'Descubre Euro Sandwich Panels: qué son, cómo elegir el grosor correcto y por qué los paneles PIR, PUR y Rockwool de ingeniería europea lideran en eficiencia energética y construcción sostenible.',
  },
  nav: {
    what: '¿Qué es?',
    menu: 'Menú',
    materials: 'Materiales',
    calculator: 'Calculadora',
    technical: 'Especificaciones',
    quote: 'Presupuesto',
    applications: 'Aplicaciones',   // 👈
    installation: 'Instalación',    // 👈
    blog: 'Blog',
    cta: 'Muestra Gratis',
    langs: {
      en: 'EN',
      es: 'ES',
    },
  },
  hero: {
    badge: 'Guía Técnica Certificada bajo Norma EU EN 14509',
    title: 'Soluciones Europeas de Aislamiento y Paneles Estructurales de Calidad',
    subtitle:
      'Los paneles sándwich de Euro ofrecen envolventes térmicas continuas, contención avanzada contra incendios y montaje rápido de edificios. Descubre cómo las innovaciones en núcleos PIR, PUR y Rockwool definen el diseño moderno.',
    cardCalculator: {
      title: 'Calculadora U-Value',
      desc: 'Calcula el grosor en relación a las zonas térmicas europeas localizadas.',
    },
    cardMaterials: {
      title: 'Comparar Núcleos',
      desc: 'Analiza densidad estructural, aislamiento acústico y reacción al fuego.',
    },
    badges: {
      fire: 'Opción No Combustible Clase A1',
      eco: 'Núcleos Ecológicos con ODP y GWP Cero',
      thermal: 'Perfiles de Baja Transmisión Térmica',
    },
    svgLabel: 'Modelo de Concepto de Ingeniería',
    svgCaption:
      'Sistema compuesto de sección transversal continua: perfiles externos galvanizados unidos a espuma molecular de cero agotamiento del ozono.',
    svgCore: 'NÚCLEO DE ALTA DENSIDAD',
    svgSkin: 'PIEL DE ACERO PROTECTORA',
    svgJoint: 'UNIÓN THERM-JOINT',
  },
  anatomy: {
    eyebrow: 'Anatomía de una Envolvente',
    title: '¿Qué es un Panel Sándwich?',
    subtitle:
      'A diferencia de las estructuras de pared multicapa tradicionales ensambladas en obra, los paneles sándwich son unidades de revestimiento compuesto de alta eficiencia diseñadas en centros de fabricación controlados.',
    cards: [
      {
        number: '01',
        title: 'Caras Exteriores de Acero',
        desc: 'Chapa de acero estructural galvanizado recubierta con acabados poliméricos de alta durabilidad (como Poliéster, PVDF o Plastisol). Estas caras resisten impactos mecánicos, degradación UV, presiones de viento corrosivas y cargas estáticas estructurales.',
        specs: [
          'Espesores estándar: 0,50 mm a 0,70 mm',
          'Acabados microacanalados altamente estructurales',
        ],
      },
      {
        number: '02',
        title: 'Núcleo de Aislamiento',
        desc: 'El núcleo compuesto proporciona resistencia estructural al corte y determina las capacidades térmicas. Las formulaciones modernas incluyen polímeros PIR (Poliisocianurato), espumas PUR (Poliuretano) y capas de Lana de Roca Mineral no combustible de alta densidad.',
        specs: [
          'Excelente índice Lambda (tan bajo como 0,022 W/mK)',
          'Perfil térmico continuo sólido',
        ],
      },
      {
        number: '03',
        title: 'Perfiles de Unión Hermética',
        desc: 'La interfaz arquitectónica de las estructuras aisladas modernas. Las geometrías de encaje macho-hembra diseñadas con juntas de goma de compresión integradas evitan la filtración de aire atmosférico, la transferencia de vapor, las fugas de agua y la pérdida de puentes térmicos.',
        specs: [
          'Evita fugas de aire y crecimiento de moho',
          'Alineación de bloqueo modular rápida',
        ],
      },
    ],
  },
  materials: {
    eyebrow: 'Física y Dinámica del Fuego',
    title: 'Comparar Materiales: PIR vs. Rockwool vs. PUR',
    subtitle:
      'La selección del núcleo correcto depende de tres elementos: resistencia térmica, cumplimiento de clasificación contra incendios y perfiles de peso estructural.',
    tabs: {
      pir: {
        label: 'Aislamiento PIR',
        badge: 'Eficiencia Óptima',
        tagline: 'Espuma termoestable rígida con polímeros de poliisocianurato reticulados para alto rendimiento de aislamiento.',
      },
      rockwool: {
        label: 'Lana de Roca Mineral',
        badge: 'Máxima Protección contra Incendios',
        tagline: 'Densas fibras de roca volcánica natural diseñadas para diseños de seguridad con cero combustibilidad.',
      },
      pur: {
        label: 'Aislamiento PUR',
        badge: 'Presupuesto Estándar',
        tagline: 'Espuma clásica de polímero de poliuretano que ofrece un control estructural versátil y económico.',
      },
    },
    detail: {
      cert: 'CERTIFICADO ESTÁNDAR EN 13501-1',
      lambdaLabel: 'Conductividad Térmica (λ)',
      fireLabel: 'Rendimiento contra Incendios',
      weightLabel: 'Peso Estructural',
      acousticLabel: 'Absorción Acústica',
      prosTitle: 'Ventajas Arquitectónicas',
      consTitle: 'Limitaciones Técnicas Conocidas',
    },
    data: {
      pir: {
        title: 'Núcleo PIR (Poliisocianurato)',
        lambda: '0,022 W/m·K',
        desc: 'Los paneles sándwich con núcleo PIR son la opción industrial definitiva para almacenamiento en frío general, grandes redes de distribución de alimentos y proyectos estructurales de control de temperatura premium. Debido a su matriz de construcción de celda cerrada rígida, la retención de agua es prácticamente nula.',
        fire: 'Clase B-s1, d0 (Difícilmente inflamable, sin gotas)',
        weight: 'Ultra-Ligero (~11,4 kg/m²)',
        acoustic: 'R_w ≈ 24 dB',
        pros: [
          'Mejor rendimiento térmico por milímetro de grosor',
          'Núcleo ligero reduce significativamente las cargas de cimentación',
          'La memoria celular rígida preserva la alineación estructural absoluta',
        ],
        cons: [
          'Umbrales de temperatura máxima más bajos que la Lana de Roca',
          'Perfiles de aislamiento sonoro reducidos en comparación con fibras densas',
        ],
      },
      rockwool: {
        title: 'Núcleo de Lana de Roca Mineral',
        lambda: '0,038 W/m·K',
        desc: 'Los paneles de Lana de Roca Mineral representan la opción definitiva para diseños de defensa extrema contra incendios. Los núcleos de fibra volcánica hilada no propagan incendios activos ni alimentan la expansión de humo. Son ideales para instalaciones industriales de alto riesgo, centros de datos y barreras cortafuegos.',
        fire: 'Clase A1 / A2-s1, d0 (Totalmente no combustible)',
        weight: 'Alta Densidad (~19,2 kg/m²)',
        acoustic: 'R_w ≈ 32 dB (Aislamiento Sobresaliente)',
        pros: [
          'Mayor clasificación de protección contra incendios (completamente no combustible)',
          'Excelente atenuación acústica que evita la penetración de ruido exterior',
          'Alta resistencia a temperaturas sostenidas y estrés térmico',
        ],
        cons: [
          'Requiere perfiles de mayor grosor para igualar el rendimiento térmico del PIR',
          'Mayor carga estructural (requiere cimientos y soportes más robustos)',
        ],
      },
      pur: {
        title: 'Núcleo PUR (Poliuretano)',
        lambda: '0,024 W/m·K',
        desc: 'Los paneles sándwich de poliuretano ofrecen un rendimiento de aislamiento muy fiable y versátil con un perfil de precio general más bajo. Aunque ha sido ampliamente reemplazado por PIR en zonas de alto riesgo, el PUR estándar sigue siendo eficaz para almacenes, edificios agrícolas y proyectos orientados al presupuesto.',
        fire: 'Clase C-s2, d0 (Inflamable, liberación moderada de humo)',
        weight: 'Ligero (~11,1 kg/m²)',
        acoustic: 'R_w ≈ 23 dB',
        pros: [
          'Solución de aislamiento rentable para aplicaciones agrícolas',
          'Cronogramas de montaje rápidos con detalles de unión simples',
          'Buenas características de rechazo de humedad a lo largo de la vida útil',
        ],
        cons: [
          'Clasificación de seguridad contra incendios más baja que los polímeros PIR modernos',
          'Alcance de aplicación limitado en edificios públicos altamente regulados',
        ],
      },
    },
  },
  calculator: {
    eyebrow: 'Herramienta de Ingeniería Interactiva',
    title: 'Asesor de U-Value y Grosor',
    subtitle:
      'Identifica las dimensiones de aislamiento que coincidan con tus objetivos energéticos. Alterna los perfiles de tu proyecto para calcular especificaciones arquitectónicas personalizadas.',
    climateLabel: '1. Contexto Climático Regional',
    climates: {
      nordic: { label: 'Nórdico', sub: 'Frío Extremo' },
      central: { label: 'Europa Central', sub: 'Moderado' },
      south: { label: 'Mediterráneo', sub: 'Cálido/Caliente' },
    },
    appLabel: '2. Propósito de la Aplicación del Edificio',
    apps: {
      cold: 'Instalación de Almacenamiento en Frío de Alta Seguridad (Bajo Cero)',
      logistics: 'Centro Estándar de Logística y Distribución (Ambiente)',
      production: 'Planta de Fabricación y Ensamblaje Industrial Ligero',
      office: 'Envolvente de Edificio de Oficinas Comercial',
    },
    coreLabel: '3. Elección de Material Principal',
    thicknessLabel: '4. Grosor de Núcleo Recomendado',
    disclaimer: 'Los cálculos se realizan bajo coeficientes de aire estático según la norma ISO 6946.',
    output: {
      label: 'SALIDA TÉRMICA ESTIMADA',
      uvalue: 'U-Value (Transferencia de Calor)',
      rvalue: 'R-Value (Resistencia Térmica)',
      acoustic: 'Blindaje Acústico',
      fire: 'Umbral de Incendio',
      weight: 'Peso / m²',
      ctaDesc: '¿Necesitas validación para tu proyecto arquitectónico?',
      ctaLink: 'Descarga nuestras guías técnicas de planos.',
      cta: 'Seleccionar Configuración',
    },
  },
  technical: {
    eyebrow: 'Normas Europeas de Rendimiento',
    title: 'Verificación Estructural Estandarizada',
    intro:
      'Para garantizar alta estabilidad mecánica, contención de incendios y permanencia térmica, los paneles sándwich especificados en la UE deben cumplir la norma EN 14509. Esto previene colapsos de revestimiento, degradación térmica y propagación peligrosa del fuego.',
    items: [
      {
        title: 'Degradación Térmica a Largo Plazo (Envejecimiento)',
        desc: 'Los agentes de soplado de espuma rígida tienden a envejecer con el paso de las décadas. Los paneles de calidad utilizan caras de acero herméticas a la difusión que preservan los gases aislantes puros dentro de los compartimentos celulares, garantizando que los valores R se mantengan durante más de 40 años.',
      },
      {
        title: 'Deflexión por Presión y Límites de Vano Mecánico',
        desc: 'Las cargas de viento crean tensión interna dinámica y fuerzas de compresión externas. Las tablas estándar de deflexión limitan los paneles sándwich a longitudes de vano libre, evitando la separación del núcleo o el pandeo de la piel superficial.',
      },
      {
        title: 'Prevención de Fugas en Juntas Microcapilares',
        desc: 'Las condiciones húmedas hacen que la humedad busque puntos de paso estructural. Las rupturas capilares integradas dentro de las juntas de doble lengüeta dirigen la condensación superficial hacia el exterior, evitando los elementos del núcleo.',
      },
    ],
    tableTitle: 'Estándares de Referencia de Ingeniería',
    tableNote:
      'La absorción acústica varía significativamente entre los modelos de paneles sándwich. Mientras que el PIR estándar proporciona R_w de alrededor de 24 dB, los núcleos densos de Rockwool con perfiles perforados pueden superar los 33 dB.',
    tableNoteLabel: 'Nota sobre Pérdida de Transmisión Sonora:',
    rows: [
      { label: 'Norma General del Producto', value: 'EN 14509' },
      { label: 'Reacción al Fuego (Rockwool)', value: 'Clase A1 / A2-s1, d0' },
      { label: 'Reacción al Fuego (PIR)', value: 'Clase B-s1, d0 / B-s2, d0' },
      { label: 'Densidad del Núcleo (Rockwool)', value: '100 - 120 kg/m³' },
      { label: 'Densidad del Núcleo (PIR)', value: '38 - 42 kg/m³' },
      { label: 'Absorción de Agua (Celda Cerrada)', value: '< 1,0 % (Vol)' },
      { label: 'Estándar de Codificación de Color', value: 'Paleta de Colores RAL' },
    ],
  },
  quote: {
    eyebrow: 'Solicitar Presupuesto',
    title: 'Solicita un Presupuesto para tu Proyecto',
    subtitle:
      'Configura los requisitos de tu panel y envía los detalles del proyecto. Nuestro equipo técnico responderá en 24 horas con una especificación y estimación de precio personalizada.',
    step1: 'Paso 1: Tipo de Núcleo',
    step2: 'Paso 2: Espesor del Panel',
    step3: 'Paso 3: Color Exterior',
    cores: [
      { value: 'PIR 60mm', label: 'PIR 60mm', badge: 'Ultra-Fino' },
      { value: 'PIR 100mm', label: 'PIR 100mm', badge: 'Recomendado' },
      { value: 'Rockwool 120', label: 'Rockwool 120', badge: 'Ignífugo' },
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
    summaryTitle: 'Tu Configuración',
    summaryEmpty: 'Completa los pasos de la izquierda para ver el resumen de tu configuración.',
    previewLabel: 'Vista Previa',
    formTitle: 'Detalles del Proyecto',
    formArea: 'Área Estimada (m²)',
    formSector: 'Sector del Edificio',
    formSectors: [
      { value: 'cold', label: 'Cámara Frigorífica' },
      { value: 'logistics', label: 'Logística y Almacén' },
      { value: 'food', label: 'Industria Alimentaria' },
      { value: 'office', label: 'Oficina Comercial' },
      { value: 'agriculture', label: 'Agricultura' },
      { value: 'other', label: 'Otro' },
    ],
    formName: 'Nombre Completo',
    formEmail: 'Email Profesional',
    formCompany: 'Nombre de la Empresa',
    formNotes: 'Notas adicionales del proyecto (opcional)',
    formSubmit: 'Solicitar Presupuesto',
    hint: 'Sin compromiso. Respondemos en 24 horas.',
    toasts: {
      submitted: {
        title: 'Solicitud Enviada',
        body: 'Nuestro equipo se pondrá en contacto en 24 horas con tu estimación personalizada.',
      },
    },
  },
  faq: {
    eyebrow: 'Recursos Educativos',
    title: 'Preguntas Frecuentes de Ingeniería',
    subtitle: 'Fundamentos estructurales, químicos y de ciencias de la construcción simplificados para planificadores de proyectos.',
    items: [
      {
        q: '¿Cuál es la diferencia entre los núcleos PIR y Rockwool?',
        a: [
          'El PIR (Poliisocianurato) es una espuma de celda cerrada ligera con un rendimiento térmico notable. Con un valor lambda de aproximadamente 0,022 W/mK, necesitas perfiles más delgados para alcanzar el cumplimiento ambiental. Es ideal para almacenes generales, fachadas comerciales y sistemas de refrigeración.',
          'La Lana de Roca (Mineral Wool) está fabricada con materiales minerales volcánicos. Es físicamente más pesada y tiene una conductividad térmica más alta (aprox. 0,038 W/mK). Sin embargo, la Lana de Roca es completamente no combustible (Clase A1), lo que la convierte en la opción de ingeniería principal para barreras de división contra incendios.',
        ],
      },
      {
        q: '¿Cómo se calcula el U-value térmico de un panel sándwich?',
        a: [
          'El coeficiente global de transferencia de calor (U-value) mide cuánto calor escapa a través de un metro cuadrado estructural por grado de diferencia de temperatura.',
          'Fórmula: U = 1 / (R_superficie_interna + R_aislamiento_núcleo + R_superficie_externa)',
          'Como las pieles de acero ofrecen una resistencia térmica despreciable, el cálculo se corresponde con el grosor del aislamiento del núcleo (metros) dividido por su valor Lambda específico. Ejemplo: U = 1 / (0,13 + (0,10 / 0,022) + 0,04) ≈ 0,21 W/m²K',
        ],
      },
      {
        q: '¿Están certificados los Euro Sandwich Panels bajo normas europeas?',
        a: [
          'Absolutamente. Los paneles sándwich europeos deben adherirse estrictamente a la norma EN 14509. Esta norma dicta criterios de prueba estructural, tolerancias de resistencia al viento, perfiles de capacidad de carga, comportamientos de meteorización, reglas de seguridad frente a la penetración de agua y clasificaciones estrictas de rendimiento de combustión.',
        ],
      },
      {
        q: '¿Cuánto duran los paneles sándwich aislados en condiciones extremas?',
        a: [
          'Los paneles arquitectónicos de alta calidad mantienen los estándares de rendimiento estructural y térmico durante 40 a 50+ años. Los recubrimientos exteriores de acero de alta durabilidad (como el Poliuretano con perlas de Poliamida - PURAL) resisten la corrosión de entornos marinos, elementos ácidos y exposición ultravioleta intensiva.',
        ],
      },
    ],
  },
  footer: {
    tagline: 'Soluciones Europeas de Aislamiento de Calidad. Recursos educativos, catálogos de rendimiento estructural y parámetros técnicos dedicados a envolventes de edificios.',
    cols: {
      cores: {
        title: 'Núcleos de Ingeniería',
        links: [
          { label: 'Paneles Aislantes PIR', href: '#materials' },
          { label: 'Lana de Roca Mineral (A1)', href: '#materials' },
          { label: 'Núcleos de Poliuretano PUR', href: '#materials' },
          { label: 'Recubrimientos Anticorrosivos', href: '#technical' },
        ],
      },
      tools: {
        title: 'Herramientas Técnicas',
        links: [
          { label: 'Asesor U-Value y R-Value', href: '#calculator' },
          { label: 'Diseñador Virtual de Muestras', href: '#sample-builder' },
          { label: 'Tablas de Capacidad de Deflexión', href: '#technical' },
          { label: 'Análisis de Fugas Capilares', href: '#what-is-it' },
        ],
      },
      standards: {
        title: 'Normas Regulatorias',
        desc: 'Nuestros cálculos técnicos siguen estrictamente las especificaciones de la norma EN 14509 para paneles aislantes de doble piel metálica.',
        badge: 'Conforme a EN ISO 6946',
      },
    },
    legal: {
      copyright: '© 2026 Euro Sandwich Panels. Todos los derechos reservados.',
      imprint: 'Aviso Legal',
      privacy: 'Política de Privacidad',
      cookies: 'Configuración de Cookies',
    },
  },
  applications: {
    meta: {
      title: 'Aplicaciones de Paneles Sándwich por Industria | Euro Sandwich Panels',
      description: 'Descubre el panel sándwich adecuado para tu industria. Recomendaciones técnicas para cámaras frigoríficas, logística, industria alimentaria, oficinas y agricultura.',
    },
    hero: {
      eyebrow: 'Aplicaciones por Sector',
      title: 'El Panel Adecuado para Cada Tipo de Edificio',
      subtitle: 'Cada sector tiene exigencias térmicas, contra incendios y estructurales únicas. Encuentra la solución diseñada que se adapta a los requisitos de tu proyecto.',
    },
    sectors: {
      cold: {
        label: 'Cámaras Frigoríficas',
        title: 'Cámaras Frigoríficas e Instalaciones de Refrigeración',
        desc: 'Los entornos bajo cero exigen la mayor resistencia térmica disponible. Cualquier puente térmico o U-value inadecuado se traduce directamente en sobrecarga del compresor, desperdicio de energía y deterioro del producto.',
        panel: 'Núcleo PIR',
        thickness: '120 – 200 mm',
        uvalue: '≤ 0,12 W/m²K',
        why: 'La estructura de celda cerrada del PIR elimina virtualmente la entrada de humedad, algo crítico en entornos con ciclos de congelación y descongelación. Su lambda de 0,022 W/mK alcanza el cumplimiento bajo cero con perfiles más delgados que cualquier alternativa.',
        specs: [
          'Barrera de vapor continua que elimina el riesgo de condensación',
          'Disponible con recubrimientos de acero inoxidable o grado alimentario',
          'Perfiles de junta hermética de suelo a techo que evitan la pérdida de aire frío',
        ],
      },
      logistics: {
        label: 'Logística',
        title: 'Centros de Logística y Distribución',
        desc: 'Los almacenes de grandes luces priorizan la instalación rápida, la eficiencia estructural y el control de temperatura ambiente. Los sistemas de paneles deben salvar grandes vanos sin apoyos intermedios, cumpliendo los U-values normativos.',
        panel: 'Núcleo PIR o PUR',
        thickness: '80 – 120 mm',
        uvalue: '≤ 0,25 W/m²K',
        why: 'Tanto PIR como PUR ofrecen los perfiles ligeros necesarios para correas de gran luz y montaje modular rápido. Se prefiere PIR cuando se aplican normativas contra incendios más estrictas; PUR es adecuado para almacenes de ambiente con presupuesto ajustado.',
        specs: [
          'Luces de hasta 6 m sin soporte intermedio',
          'Perfiles microacanalados resisten cargas de impacto de carretillas elevadoras',
          'Disponible en toda la paleta RAL para requisitos de imagen corporativa',
        ],
      },
      food: {
        label: 'Industria Alimentaria',
        title: 'Plantas de Procesado y Producción Alimentaria',
        desc: 'Los entornos alimentarios combinan almacenamiento bajo cero, zonas de procesado de alta humedad y estrictas normativas higiénicas. Los paneles deben resistir agentes de limpieza químicos, prevenir el crecimiento bacteriano y cumplir las reglas de compartimentación contra incendios.',
        panel: 'Núcleo PIR con liner higiénico',
        thickness: '100 – 160 mm',
        uvalue: '≤ 0,18 W/m²K',
        why: 'La espuma de celda cerrada del PIR resiste la absorción de agua por debajo del 1% en volumen, previniendo la colonización bacteriana dentro del núcleo. Los liners de acero liso con juntas selladas eliminan las grietas donde se acumulan los contaminantes.',
        specs: [
          'Liner interior liso homologado para lavado a presión',
          'Perfiles de junta sellados con juntas EPDM de grado alimentario',
          'Certificado para entornos de almacenamiento HACCP y BRC',
        ],
      },
      office: {
        label: 'Oficinas Comerciales',
        title: 'Oficinas Comerciales y Sistemas de Fachada',
        desc: 'Las envolventes de oficinas y locales comerciales equilibran estética, confort acústico y eficiencia energética. Los paneles de fachada deben alcanzar bajos U-values para el cumplimiento de BREEAM o LEED, ofreciendo a la vez calidad de acabado arquitectónico.',
        panel: 'Núcleo Rockwool',
        thickness: '100 – 150 mm',
        uvalue: '≤ 0,20 W/m²K',
        why: 'La fibra mineral Rockwool proporciona una atenuación acústica superior (Rw ≥ 32 dB), esencial para oficinas urbanas, combinada con la clasificación de fuego no combustible Clase A1 requerida por la mayoría de los códigos de edificación comercial.',
        specs: [
          'Clase A1 no combustible — sin penalización en sistemas de supresión de incendios',
          'Atenuación acústica Rw ≥ 32 dB para el confort en planta abierta',
          'Recubrimientos PVDF que mantienen el color durante 25+ años en fachadas',
        ],
      },
      agriculture: {
        label: 'Agricultura',
        title: 'Edificios Agrícolas y Rurales',
        desc: 'Los edificios agrícolas requieren cerramientos duraderos y rentables que soporten la humedad, los vapores de residuos animales y las amplias variaciones de temperatura. La larga vida útil con mantenimiento mínimo es el factor determinante.',
        panel: 'Núcleo PUR',
        thickness: '60 – 100 mm',
        uvalue: '≤ 0,35 W/m²K',
        why: 'El PUR ofrece el mejor coste por unidad térmica para aplicaciones agrícolas de ambiente donde no son obligatorias clasificaciones extremas contra incendios. Sus características de rechazo de humedad gestionan las condiciones de alta humedad típicas de las instalaciones de ganado y almacenamiento de grano.',
        specs: [
          'Recubrimientos de poliéster resistentes a la corrosión por amoniaco y fertilizantes',
          'Paneles ligeros que reducen los requisitos de acero estructural',
          'El montaje en seco rápido reduce significativamente los costes de mano de obra en obra',
        ],
      },
    },
  },
  installation: {
    meta: {
      title: 'Guía de Instalación de Paneles Sándwich | Euro Sandwich Panels',
      description: 'Guía técnica paso a paso para instalar paneles sándwich aislantes. Detalles de juntas, errores comunes, herramientas necesarias y consejos de mantenimiento.',
    },
    hero: {
      eyebrow: 'Guía de Instalación',
      title: 'Cómo Instalar Paneles Sándwich Correctamente',
      subtitle: 'Una instalación correcta preserva el rendimiento térmico, estructural y contra incendios diseñado en cada panel. Sigue esta secuencia técnica para evitar los errores más comunes en obra.',
    },
    steps: [
      {
        number: '01',
        title: 'Preparación del Emplazamiento y Verificación Estructural',
        desc: 'Verifica que la estructura de soporte — correas, raíles o solera de hormigón — cumple los requisitos de deflexión y capacidad portante especificados en las tablas de cargas del panel. Cualquier desalineación superior a 5 mm por cada 3 m de luz debe corregirse antes de comenzar la instalación.',
        details: [
          'Comprobar la alineación de las correas con nivel láser en toda la luz',
          'Confirmar que la superficie de apoyo de acero está limpia, seca y libre de cascarilla',
          'Verificar que los centros de fijación coinciden con la tabla de luces del panel para la zona de carga de viento',
        ],
        warning: 'Nunca instales paneles sobre una estructura que no haya sido aprobada por un ingeniero estructural.',
      },
      {
        number: '02',
        title: 'Manipulación y Almacenamiento de Paneles',
        desc: 'La manipulación incorrecta es la principal causa de daños en la superficie antes de la instalación. Los paneles deben levantarse desde ambos extremos simultáneamente usando una viga de reparto. Nunca arrastres los paneles unos sobre otros ni permitas cargas puntuales sobre la piel de acero.',
        details: [
          'Almacenar los paneles en horizontal sobre apoyos nivelados, nunca de canto',
          'Mantener el film protector hasta inmediatamente antes de la instalación',
          'Limitar la altura de apilado a 2,5 m para evitar la compresión del núcleo',
        ],
        warning: 'El film protector dejado tras la instalación atrapa el calor UV y se adhiere permanentemente al recubrimiento.',
      },
      {
        number: '03',
        title: 'Posicionamiento del Primer Panel',
        desc: 'El primer panel establece la línea de referencia para toda la elevación. Colócalo a plomo y en escuadra usando hilos de referencia en ambos ejes. Cualquier error en esta etapa se multiplica en cada panel posterior de la hilada.',
        details: [
          'Comenzar desde una esquina de referencia fija, nunca desde un hueco',
          'Usar abrazaderas temporales para mantener la posición antes del fijado definitivo',
          'Confirmar que el panel es perpendicular a la cuadrícula estructural antes de taladrar',
        ],
        warning: 'Un error de 2 mm en el primer panel puede crear una desalineación de 20 mm en el panel 10.',
      },
      {
        number: '04',
        title: 'Ensamblaje y Sellado de Juntas',
        desc: 'La junta macho-hembra de lengüeta y ranura es el corazón térmico y estructural del sistema de paneles. La junta debe encajarse completamente en toda su longitud antes de aplicar las fijaciones. Un encaje parcial crea puentes térmicos y permite la entrada de agua.',
        details: [
          'Aplicar junta de compresión EPDM en la ranura hembra antes del encaje',
          'Introducir la junta con un mazo de goma, nunca con un martillo de acero',
          'Comprobar que la junta está completamente cerrada con un calibre de espesores antes de fijar',
        ],
        warning: 'Una separación en la junta superior a 0,5 mm anula la certificación térmica del conjunto.',
      },
      {
        number: '05',
        title: 'Fijación y Par de Apriete de los Tornillos',
        desc: 'Los tornillos autorroscantes deben penetrar el acero de soporte un mínimo de 20 mm. Un par de apriete excesivo comprime la piel del panel y crea un puente térmico en cada punto de fijación. Un par insuficiente permite el levantamiento bajo carga de viento.',
        details: [
          'Usar el tipo de fijación especificado por el fabricante para el material de soporte',
          'Ajustar el atornillador a 4–6 Nm para paneles estándar con piel de acero de 0,5 mm',
          'Aplicar arandelas con junta de neopreno en todas las fijaciones vistas',
        ],
        warning: 'Nunca uses fijaciones de acero al carbono en entornos costeros o de alta humedad — usa acero inoxidable o galvanizado en caliente.',
      },
      {
        number: '06',
        title: 'Remates, Piezas de Cierre e Inspección Final',
        desc: 'Los remates sellan todas las terminaciones del panel — aleros, hastiales, esquinas y huecos. Son la última línea de defensa contra la lluvia impulsada por el viento y deben fijarse con los solapes suficientes y sellarse con sellante compatible.',
        details: [
          'Solape mínimo de 150 mm en todas las juntas horizontales de remate',
          'Aplicar sellante de poliuretano en todas las interfaces remate-panel',
          'Inspeccionar cada junta y fijación desde el interior buscando filtraciones de luz antes de la entrega',
        ],
        warning: 'Las terminaciones de remate sin sellar representan más del 60% de las reclamaciones por entrada de agua tras la instalación.',
      },
    ],
    errors: {
      eyebrow: 'Errores Comunes',
      title: 'Qué Sale Mal en Obra',
      subtitle: 'Estos son los seis errores de instalación más reportados y cómo evitarlos.',
      items: [
        {
          title: 'Dejar el film protector tras la instalación',
          desc: 'El calor UV se acumula bajo el film y lo fusiona permanentemente al recubrimiento, requiriendo extracción mecánica que daña la superficie.',
        },
        {
          title: 'Primer panel desalineado',
          desc: 'Los errores se acumulan a lo largo de la hilada. Un inicio desalineado crea huecos, fallos en las juntas y defectos estéticos costosos de corregir.',
        },
        {
          title: 'Tornillos con exceso de apriete',
          desc: 'La abolladura de la piel de acero crea un puente térmico directo en cada punto de fijación, degradando el U-value certificado del conjunto.',
        },
        {
          title: 'Encaje incompleto de la junta',
          desc: 'Un encaje parcial de la lengüeta y ranura permite el movimiento de aire, la entrada de humedad y reduce la resistencia al corte del sistema de paneles.',
        },
        {
          title: 'Especificación incorrecta de fijaciones',
          desc: 'El uso de fijaciones de acero al carbono en entornos costeros provoca manchas de óxido que ensucian la fachada y corroen la piel del panel desde el punto de fijación hacia afuera.',
        },
        {
          title: 'Solapes de remate sin sellar',
          desc: 'La lluvia impulsada por el viento aprovecha cualquier terminación sin sellar. La mayoría de las entradas de agua tras la instalación se originan en los remates, no en las juntas de los paneles.',
        },
      ],
    },
  },
};