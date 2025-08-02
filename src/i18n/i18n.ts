// src/i18n/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './en/translation.json';
import translationTR from './tr/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  tr: {
    translation: translationTR,
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'tr',
    supportedLngs: ['en', 'tr'],
    detection: {
      order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
      caches: ['cookie', 'localStorage'],
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;