// src/i18n/es.ts
import type { TranslationKeys } from './en';

export const es: TranslationKeys = {
  site: {
    title: 'Euro Sandwich Panels | Guía Técnica del Comprador & Soluciones de Aislamiento',
    description:
      'Descubre Euro Sandwich Panels: qué son, cómo elegir el grosor correcto y por qué los paneles PIR, PUR y Rockwool de ingeniería europea lideran en eficiencia energética y construcción sostenible.',
  },
  nav: {
    what: '¿Qué es un Panel?',
    materials: 'Materiales del Núcleo',
    calculator: 'Calculadora U-Value',
    technical: 'Especificaciones',
    sample: 'Caja de Muestras',
    cta: 'Pedir Muestra Gratis',
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
  sample: {
    eyebrow: 'Muestras Físicas Táctiles',
    title: 'Personaliza tu Caja de Muestras Técnicas Gratuita',
    subtitle:
      'Verifica los acabados de los materiales de primera mano. Selecciona hasta tres muestras de núcleo de panel y muestras de color de superficie. Las enviaremos directamente a tu oficina de arquitectura.',
    step1: 'Paso 1: Selección del Tipo de Núcleo',
    step2: 'Paso 2: Textura del Perfil de Chapa Metálica',
    step3: 'Paso 3: Revestimiento de Color RAL Exterior',
    cores: [
      { value: 'PIR 60mm', label: 'PIR 60mm', badge: 'Ultra-Delgado' },
      { value: 'PIR 100mm', label: 'PIR 100mm', badge: 'Recomendado' },
      { value: 'Rockwool 120', label: 'Rockwool 120', badge: 'Ignífugo' },
    ],
    finishes: [
      { value: 'Micro-Ribbed', label: 'Microacanalado', sub: 'Estándar' },
      { value: 'Smooth (Flat)', label: 'Liso Plano', sub: 'Arquitectónico' },
      { value: 'Deep Box Rib', label: 'Caja Acanalada Profunda', sub: 'Estilo Cubierta' },
    ],
    colors: [
      { value: 'RAL 9002', label: 'RAL 9002', hex: '#EAE6DF' },
      { value: 'RAL 9006', label: 'RAL 9006', hex: '#D1D5DB' },
      { value: 'RAL 7016', label: 'RAL 7016', hex: '#374151' },
      { value: 'RAL 8004', label: 'RAL 8004', hex: '#A15033' },
    ],
    addBtn: 'Añadir Muestra a Mi Caja',
    boxTitle: 'Tu Caja de Muestras Técnicas',
    previewLabel: 'Vista Previa en Vivo',
    emptyNotice: '¡Aún no hay muestras seleccionadas. Añade hasta tres arriba!',
    formName: 'Nombre del Jefe de Proyecto',
    formEmail: 'Dirección de Email Profesional',
    formCompany: 'Empresa de Arquitectura / Construcción',
    formSubmit: 'Solicitar Entrega de Mi Caja de Muestras',
    hint: 'Haz clic en la configuración para generar automáticamente el bloque de vista previa.',
    toasts: {
      added: { title: 'Muestra Añadida', body: 'Ranura inicializada correctamente en tu caja virtual.' },
      full: { title: 'Caja Llena', body: 'Tu caja de muestras puede contener un máximo de 3 configuraciones.' },
      removed: { title: 'Muestra Eliminada', body: 'Ranura liberada en el constructor de secuencias de muestras.' },
      submitted: { title: 'Pedido Realizado', body: 'Envío iniciado. Revisa la confirmación en tu email.' },
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
};