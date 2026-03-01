import { createContext, useContext, useState } from "react";
import { portfolioData } from "../data/portfolio";
import { portfolioDataFr } from "../data/portfolio.fr";

export const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState("en");
  const toggle = () => setLang((l) => (l === "en" ? "fr" : "en"));
  const data = lang === "en" ? portfolioData : portfolioDataFr;

  return (
    <LanguageContext.Provider value={{ lang, toggle, data }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useContent() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useContent must be used inside LanguageProvider");
  return ctx;
}
