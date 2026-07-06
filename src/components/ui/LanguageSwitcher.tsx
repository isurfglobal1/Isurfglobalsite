// src/components/LanguageSwitcher.tsx
import { Check, ChevronDown, Globe } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import { useLanguage } from "@/context/LanguageContext";
import { supportedLanguages } from "@/utils/languageToggle";

const isBrowser = typeof window !== "undefined";

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { currentLanguage, setLanguage, isLanguageReady, isTranslating } = useLanguage();

  // Close dropdown when clicking outside
  useEffect(() => {
    if (!isBrowser) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = async (langCode: string) => {
    if (langCode === currentLanguage) {
      setIsOpen(false);
      return;
    }

    // Close dropdown immediately
    setIsOpen(false);

    // Set the language
    setLanguage(langCode);
  };

  const currentLanguageObj =
    supportedLanguages.find((lang) => lang.code === currentLanguage) || supportedLanguages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        disabled={isTranslating || !isLanguageReady}
        className={`flex items-center gap-1.5 text-sm text-foreground/70 hover:text-foreground transition-colors px-3 py-1.5 rounded-lg hover:bg-accent ${
          isTranslating ? "opacity-50 cursor-wait" : ""
        }`}
        aria-label="Switch language"
      >
        <Globe className="size-4" />
        <span className="hidden md:inline">
          {isTranslating ? "Translating..." : currentLanguageObj.nativeName}
        </span>
        <span className="md:hidden">{currentLanguageObj.code.toUpperCase()}</span>
        <ChevronDown className={`size-3.5 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-56 rounded-xl border border-border bg-background shadow-card py-1 z-50 animate-float-in">
          <div className="px-3 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider border-b border-border">
            Select Language
          </div>
          {supportedLanguages.map((lang) => {
            const isActive = lang.code === currentLanguage;
            return (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                disabled={isTranslating}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-accent transition-colors flex items-center justify-between ${
                  isActive ? "text-primary font-semibold bg-accent/50" : "text-foreground"
                } ${isTranslating ? "opacity-50 cursor-wait" : ""}`}
              >
                <span>{lang.nativeName}</span>
                <span className="text-xs text-muted-foreground">{lang.code.toUpperCase()}</span>
                {isActive && <Check className="size-4 text-primary" />}
              </button>
            );
          })}
        </div>
      )}

      {/* Hidden container for Google Translate */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}
