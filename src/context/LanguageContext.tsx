import { createContext, useState, ReactNode } from "react";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import englishTranslation from "context/translations/en.json";
import frenchTranslation from "context/translations/fr.json";
import arabicTranslation from "context/translations/ar.json";

export type ILanguage = "en" | "fr" | "ar";

interface LanguageContextType {
  language: ILanguage;
  changeLanguage: (lang: ILanguage) => void;
}

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: englishTranslation,
    },
    fr: {
      translation: frenchTranslation,
    },
    ar: {
      translation: arabicTranslation,
    },
  },
  lng: localStorage.getItem("lang") || "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});
export default i18n;

export const LanguageContext = createContext<Partial<LanguageContextType>>({});

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<ILanguage>(i18n.language as ILanguage);

  function changeLanguage(lang: ILanguage) {
    setLanguage(lang);
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
