import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "../public/static/locales/en/default.json";
import de from "../public/static/locales/de/default.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: en
      },
      de: {
        translation: de
      }
    },
    lng: "en",

    interpolation: {
      escapeValue: false
    }
  });

export default i18n;