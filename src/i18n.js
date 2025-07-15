import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import translationEN from "./locales/en.json";
import translationIT from "./locales/it.json";

const resources = {
  en: {
    translation: translationEN,
  },
  it: {
    translation: translationIT,
  },
};

i18n
  .use(LanguageDetector) // optional: auto-detect user language
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: "en", // fallback language
    debug: true, // logs language events in console

    interpolation: {
      escapeValue: false, // react already protects from xss
    },
  });

export default i18n;
