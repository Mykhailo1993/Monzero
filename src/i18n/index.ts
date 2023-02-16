import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from './en.json';
import ua from './ua.json';

const resources = {
  en: {
    translation: en,
  },
  ua: {
    translation: ua,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'ua',
  fallbackLng: 'en',
  compatibilityJSON: 'v3',
  interpolation: {
    escapeValue: false,
  },
});
