// Lenguaje: TypeScript
import { defineBlogConfig } from 'astro-blog-kit';

export default defineBlogConfig({
  wpUrl: import.meta.env.WP_API_URL || 'https://landing.mequipo.com',
  postsPerPage: 5,
  defaultLayout: 'magazine',
  locale: 'en',

  theme: {
    // Sincronizado con var(--color-accent)
    accent:      '#E07B39', 
    // Sincronizado con var(--color-bg)
    background:  '#F7F8FA', 
    // Superficie blanca para las tarjetas del grid (var(--color-white))
    surface:     '#FFFFFF', 
    // Sincronizado con var(--color-text)
    text:        '#1A202C', 
    // Sincronizado con var(--color-muted)
    muted:       '#718096', 
    // Sincronizado con var(--color-steel) para textos secundarios intermedios
    mutedLight:  '#4A5568', 
    // Sincronizado con var(--color-border)
    border:      '#E2E8F0', 
    // Mapeado al texto oscuro de tu app para mantener consistencia
    black:       '#1A202C', 
    white:       '#FFFFFF', 
    // Tipografía unificada bajo tu variable única var(--font-sans)
    fontHeading: '"Inter", sans-serif',
    fontBody:    '"Inter", sans-serif',
    fontMono:    'monospace', 
    fontDisplay: '"Inter", sans-serif',
    // Sincronizado con var(--max-width) -> 80rem = 1280px
    containerMax: '1280px',
  },

  hero: {
    tagline:     'Our Blog',
    titleLine1:  'Latest',
    titleLine2:  'Articles',
    description: 'Welcome to our blog.',
  },

  ui: {
    readMoreLabel:          'Read more',
    btnPrev:                'Previous',
    btnNext:                'Next',
    commentButtonColor:     'var(--bk-accent)',
    commentButtonTextColor: 'var(--bk-white)',
    paginationStyle:        'minimal',
    
    // Integración de paginación con el ecosistema de botones de tu app
    paginationBtnBg:         '#1C3557',  // var(--color-primary)
    paginationBtnText:       '#FFFFFF',  
    paginationBtnHoverBg:    '#142740',  // var(--color-primary-hover)
    paginationBtnHoverText:  '#FFFFFF',  
    paginationActiveBg:      '#E07B39',  // Estado activo usando tu var(--color-accent)
    paginationActiveText:    '#FFFFFF',  
  },
});