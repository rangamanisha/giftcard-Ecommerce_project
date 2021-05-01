import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEn from "./en.json";
i18n.use(initReactI18next).init({
  debug: false,
  ns: ["common"],
  defaultNS: "common",
  resources: {
    en: {
      common: translationEn.translation,
    },
  },
  lng: "en",
  interpolation: { escapeValue: false },
});
export default i18n;
