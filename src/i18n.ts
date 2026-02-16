import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "../public/locales/ar.json";
import en from "../public/locales/en.json";

const resources = {
  en: { common: en },
  ar: { common: ar },
};

const Dlng = localStorage.getItem("lng") || "en";
document.body.dir = Dlng === "en" ? "ltr" : "rtl";

i18next.use(initReactI18next).init({
  resources,
  lng: Dlng,
  fallbackLng: Dlng,
  interpolation: { escapeValue: false },
});
i18next.on("languageChanged", (lng) => {
  document.body.dir = lng === "en" ? "ltr" : "rtl";
  localStorage.setItem("lng", lng);
});
