// src/i18n/utils.ts
import { en } from './en';
import { es } from './es';
import type { TranslationKeys } from './en';

export type Lang = 'en' | 'es';

export const languages = ['en', 'es'] as const;
export const defaultLang: Lang = 'en';

const translations: Record<Lang, TranslationKeys> = { en, es };

export function getLang(url: URL, base: string = '/'): Lang {
  const path = url.pathname.replace(base, '');
  if (path.startsWith('es')) return 'es';
  return 'en';
}

export function useTranslations(lang: Lang): TranslationKeys {
  return translations[lang];
}

export function getAlternatePath(url: URL, base: string = '/'): string {
  const pathname = url.pathname.replace(base, "").replace(/^es\//, "");

  const isEs = pathname.includes('es');

  if (isEs) {
    const withoutEs = pathname.replace(/^es\/?/, '') || '';
    return `${base}${withoutEs}`;
  } else {
    return `${base}es/${pathname}`;
  }
}