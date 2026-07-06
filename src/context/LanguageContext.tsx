// src/context/LanguageContext.tsx
import { createContext, ReactNode, useContext, useEffect, useState } from "react";

import { getLanguagePreference, loadLanguageToggle, switchLanguage } from "@/utils/languageToggle";

const isBrowser = typeof window !== "undefined";

interface LanguageContextType {
  currentLanguage: string;
  setLanguage: (lang: string) => void;
  isLanguageReady: boolean;
  isTranslating: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const [isLanguageReady, setIsLanguageReady] = useState(false);
  const [isTranslating, setIsTranslating] = useState(false);

  useEffect(() => {
    if (!isBrowser) return;

    const initLanguage = async () => {
      await loadLanguageToggle();
      setIsLanguageReady(true);

      const savedLang = getLanguagePreference();
      if (savedLang && savedLang !== "en") {
        setCurrentLanguage(savedLang);
        setTimeout(() => {
          setIsTranslating(true);
          switchLanguage(savedLang);
          setTimeout(() => {
            setIsTranslating(false);
          }, 2000);
        }, 500);
      } else {
        setCurrentLanguage("en");
        localStorage.setItem("preferredLanguage", "en");
      }
    };

    initLanguage();
  }, []);

  const setLanguage = async (lang: string) => {
    if (lang === currentLanguage) return;

    setCurrentLanguage(lang);
    setIsTranslating(true);

    if (isBrowser) {
      if (!isLanguageReady) {
        await loadLanguageToggle();
        setIsLanguageReady(true);
      }
      switchLanguage(lang);

      setTimeout(() => {
        setIsTranslating(false);
      }, 2000);
    }
  };

  return (
    <LanguageContext.Provider
      value={{ currentLanguage, setLanguage, isLanguageReady, isTranslating }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
