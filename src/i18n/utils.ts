// src/i18n/utils.ts
import { en } from './en';
import { es } from './es';
import type { TranslationKeys } from './en';

export type Lang = 'en' | 'es';

export const languages = ['en', 'es'] as const;
export const defaultLang: Lang = 'en';

const translations: Record<Lang, TranslationKeys> = { en, es };

export function getLang(url: URL, base: string = '/'): Lang {
  // Elimina el base del pathname antes de detectar idioma
  // pathname: /landing_eurosandwichpanels/es/ → strip base → es/
  const path = url.pathname.replace(base, '');
  if (path === 'es' || path.startsWith('es/') || path === 'es/') return 'es';
  return 'en';
}

export function useTranslations(lang: Lang): TranslationKeys {
  return translations[lang];
}

export function getAlternatePath(url: URL, base: string = '/'): string {
  const pathname = url.pathname.replace(base, '');
  const isEs = pathname === 'es' || pathname.startsWith('es/') || pathname === 'es/';

  if (isEs) {
    const withoutEs = pathname.replace(/^es\/?/, '') || '';
    return `${base}${withoutEs}`;
  } else {
    return `${base}es/${pathname}`;
  }
}

export function getPageI18n(url: URL, base: string) {
  const lang = getLang(url, base);
  const t = useTranslations(lang);
  const canonicalURL = url.href;
  const alternatePath = getAlternatePath(url, base);
  const alternateURL = new URL(alternatePath, url).href;
  return { lang, t, canonicalURL, alternateURL };
}