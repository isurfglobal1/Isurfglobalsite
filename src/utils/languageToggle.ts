// src/utils/languageToggle.ts

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
    LanguageToggle: {
      init: (config: any) => void;
    };
    resetGoogleTranslate: () => void;
  }
}

export const supportedLanguages = [
  { code: "en", label: "English", nativeName: "English" },
  { code: "am", label: "Amharic", nativeName: "አማርኛ" },
  { code: "ru", label: "Russian", nativeName: "Русский" },
  { code: "es", label: "Spanish", nativeName: "Español" },
];

// Check if we're in the browser
const isBrowser = typeof window !== "undefined";

// Track if Google Translate is ready
let isGoogleTranslateReady = false;
let pendingLanguageChange: string | null = null;
let isTranslating = false;

// Load Google Translate and LanguageToggle
export const loadLanguageToggle = () => {
  // Only run in browser
  if (!isBrowser) {
    return Promise.resolve(false);
  }

  // If already loaded, return resolved
  if (document.querySelector("#language-toggle-script") && isGoogleTranslateReady) {
    return Promise.resolve(true);
  }

  return new Promise((resolve) => {
    // Check if already loaded but not ready
    if (document.querySelector("#language-toggle-script")) {
      waitForGoogleTranslate().then(resolve);
      return;
    }

    // Load Google Translate first
    const googleScript = document.createElement("script");
    googleScript.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    googleScript.async = true;
    document.body.appendChild(googleScript);

    // Load LanguageToggle script
    const toggleScript = document.createElement("script");
    toggleScript.id = "language-toggle-script";
    toggleScript.src = "https://cdn.jsdelivr.net/gh/Sarin-jacob/LanguageToggle/translate-toggle.js";
    toggleScript.async = true;
    document.body.appendChild(toggleScript);

    // Initialize when both scripts are loaded
    let scriptsLoaded = 0;
    const checkScripts = () => {
      scriptsLoaded++;
      if (scriptsLoaded === 2) {
        // Initialize Google Translate
        window.googleTranslateElementInit = () => {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              autoDisplay: false,
            },
            "google_translate_element",
          );

          setTimeout(() => {
            isGoogleTranslateReady = true;
            if (pendingLanguageChange) {
              switchLanguage(pendingLanguageChange);
              pendingLanguageChange = null;
            }
          }, 500);
        };

        // Initialize LanguageToggle
        setTimeout(() => {
          if (window.LanguageToggle) {
            window.LanguageToggle.init({
              sourceLang: "en",
              targetLang: "en",
              sourceSymbol: "🇬🇧",
              targetSymbol: "🌍",
            });
          }
          resolve(true);
        }, 500);
      }
    };

    googleScript.onload = checkScripts;
    toggleScript.onload = checkScripts;

    // Fallback
    setTimeout(() => {
      resolve(true);
    }, 5000);
  });
};

// Wait for Google Translate to be ready
const waitForGoogleTranslate = (): Promise<boolean> => {
  return new Promise((resolve) => {
    if (isGoogleTranslateReady) {
      resolve(true);
      return;
    }

    let attempts = 0;
    const maxAttempts = 30;

    const checkReady = setInterval(() => {
      attempts++;

      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select && isGoogleTranslateReady) {
        clearInterval(checkReady);
        resolve(true);
        return;
      }

      if (window.google && window.google.translate) {
        isGoogleTranslateReady = true;
        clearInterval(checkReady);
        resolve(true);
        return;
      }

      if (attempts >= maxAttempts) {
        clearInterval(checkReady);
        resolve(false);
      }
    }, 100);
  });
};

// Reset translation to original language
export const resetToEnglish = () => {
  if (!isBrowser) return;

  // Method 1: Try to use the Google Translate reset function
  try {
    // Find and click the "Show original" button if it exists
    const originalButton = document.querySelector(
      ".goog-te-gadget-simple .goog-te-menu-value",
    ) as HTMLElement;
    if (originalButton) {
      // Try to reset via the dropdown
      const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
      if (select) {
        select.value = "en";
        select.dispatchEvent(new Event("change"));
        localStorage.setItem("preferredLanguage", "en");
        return;
      }
    }
  } catch (e) {
    console.log("Reset via dropdown failed, trying alternative...");
  }

  // Method 2: Remove the translation iframe and reinitialize
  try {
    // Remove Google Translate banner
    const banner = document.querySelector(".goog-te-banner-frame");
    if (banner) {
      banner.remove();
    }

    // Reset body position
    document.body.style.top = "0px";
    document.body.style.position = "static";

    // Remove translation iframes
    const iframes = document.querySelectorAll(
      'iframe.goog-te-banner-frame, iframe[src*="translate"]',
    );
    iframes.forEach((iframe) => iframe.remove());

    // Reset the select
    const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
    if (select) {
      select.value = "en";
      select.dispatchEvent(new Event("change"));
    }

    localStorage.setItem("preferredLanguage", "en");
  } catch (e) {
    console.log("Alternative reset failed, trying final method...");
  }

  // Method 3: Refresh the page without reload (reinitialize translation)
  // This is the nuclear option but works
  if (
    !document.querySelector(".goog-te-combo") ||
    (document.querySelector(".goog-te-combo") as HTMLSelectElement)?.value !== "en"
  ) {
    // Force reload as last resort
    localStorage.setItem("preferredLanguage", "en");
    window.location.reload();
  }
};

// Switch language programmatically
export const switchLanguage = async (langCode: string) => {
  if (!isBrowser) return;

  if (isTranslating) {
    pendingLanguageChange = langCode;
    return;
  }

  // If switching to English, use the reset method
  if (langCode === "en") {
    setLanguagePreference("en");
    resetToEnglish();
    return;
  }

  isTranslating = true;

  if (!isGoogleTranslateReady) {
    pendingLanguageChange = langCode;
    await waitForGoogleTranslate();
    if (!isGoogleTranslateReady) {
      setLanguagePreference(langCode);
      window.location.reload();
      return;
    }
  }

  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (select) {
    select.value = langCode;
    select.dispatchEvent(new Event("change"));
    select.dispatchEvent(new Event("click"));

    if (typeof select.onchange === "function") {
      select.onchange(new Event("change"));
    }

    setLanguagePreference(langCode);

    setTimeout(() => {
      isTranslating = false;
      if (pendingLanguageChange && pendingLanguageChange !== langCode) {
        const pending = pendingLanguageChange;
        pendingLanguageChange = null;
        switchLanguage(pending);
      }
    }, 1500);
  } else {
    pendingLanguageChange = langCode;
    setLanguagePreference(langCode);
    setTimeout(() => {
      isTranslating = false;
      window.location.reload();
    }, 300);
  }
};

// Get current language
export const getCurrentLanguage = () => {
  if (!isBrowser) return "en";

  const select = document.querySelector(".goog-te-combo") as HTMLSelectElement;
  if (select && select.value) {
    return select.value;
  }
  return localStorage.getItem("preferredLanguage") || "en";
};

// Store language preference
export const setLanguagePreference = (langCode: string) => {
  if (!isBrowser) return;
  localStorage.setItem("preferredLanguage", langCode);
};

export const getLanguagePreference = () => {
  if (!isBrowser) return "en";
  return localStorage.getItem("preferredLanguage") || "en";
};
