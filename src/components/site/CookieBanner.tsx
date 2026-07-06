import { useEffect, useState } from "react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined" && !localStorage.getItem("isg-cookies")) {
      const t = setTimeout(() => setVisible(true), 800);
      return () => clearTimeout(t);
    }
  }, []);
  if (!visible) return null;
  const dismiss = (v: string) => {
    localStorage.setItem("isg-cookies", v);
    setVisible(false);
  };
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md z-50 animate-float-in">
      <div className="rounded-2xl bg-background border border-border shadow-card p-5">
        <h4 className="font-semibold text-sm">We value your privacy</h4>
        <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
          We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. Choose your preferences below.
        </p>
        <div className="flex items-center gap-2 mt-4">
          <button onClick={() => dismiss("rejected")} className="flex-1 rounded-full border border-border px-4 py-2 text-xs font-medium hover:bg-muted">
            Reject all
          </button>
          <button onClick={() => dismiss("accepted")} className="flex-1 rounded-full bg-primary text-primary-foreground px-4 py-2 text-xs font-semibold hover:bg-brand-600">
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}
