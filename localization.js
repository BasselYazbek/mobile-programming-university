// localization.js

import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

// Import localization resources (translation files)
import en from './res/locales/strings.json';
import uk from './res/locales/strings-uk.json';

// Initialize i18next
i18next
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk },
    },
    lng: 'en', // Set default language here
    fallbackLng: 'en', // Fallback language if translation not found
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
