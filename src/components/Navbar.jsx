import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContent } from "../hooks/useLanguage.jsx";

const MAILTO = "mailto:rreeshal@gmail.com?subject=Job%20Opportunity%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Reeshal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ARole%3A%20%5BPosition%5D%0ACompany%3A%20%5BYour%20Company%5D%0ADetails%3A%20%5BAdd%20any%20relevant%20details%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you%21";

export default function Navbar() {
  const { lang, toggle, data } = useContent();
  const { ui } = data;
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: ui.nav.home, href: "#hero" },
    { label: ui.nav.skills, href: "#skills" },
    { label: ui.nav.experience, href: "#experience" },
    { label: ui.nav.projects, href: "#projects" },
    { label: ui.nav.talks, href: "#talks" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const LangToggle = ({ mobile = false }) => (
    <motion.button onClick={toggle} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
      title={lang === "en" ? "Passer en français" : "Switch to English"}
      style={{ fontFamily: "var(--font-mono)", fontSize: mobile ? "0.9rem" : "0.75rem", letterSpacing: "0.1em", padding: mobile ? "10px 24px" : "6px 12px", borderRadius: "100px", border: "1px solid var(--border-accent)", background: "rgba(232,162,58,0.08)", color: "var(--accent-primary)", cursor: "pointer", minHeight: "36px", display: "flex", alignItems: "center", gap: "5px" }}
      onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(232,162,58,0.18)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(232,162,58,0.08)"; }}
    >
      <span style={{ opacity: lang === "en" ? 0.45 : 1, transition: "opacity 0.2s" }}>FR</span>
      <span style={{ opacity: 0.3 }}>/</span>
      <span style={{ opacity: lang === "fr" ? 0.45 : 1, transition: "opacity 0.2s" }}>EN</span>
    </motion.button>
  );

  return (
    <>
      <motion.header initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 200, height: "var(--header-height)", background: scrolled || menuOpen ? "rgba(8,12,20,0.97)" : "transparent", backdropFilter: scrolled ? "blur(20px)" : "none", borderBottom: scrolled && !menuOpen ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent", transition: "background 0.3s ease, border-color 0.3s ease" }}
      >
        <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%" }}>
          <motion.a href="#hero" onClick={closeMenu} whileHover={{ scale: 1.05 }}
            style={{ fontFamily: "var(--font-display)", fontSize: "1.3rem", fontWeight: 700, color: "var(--text-primary)", display: "inline-flex", alignItems: "center", gap: "6px", minHeight: "44px" }}
          >
            <span style={{ color: "var(--accent-primary)" }}>&lt;</span>R<span style={{ color: "var(--accent-primary)" }}>/&gt;</span>
          </motion.a>

          <nav className="desktop-nav" style={{ display: "none", alignItems: "center", gap: "4px" }}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href}
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.82rem", letterSpacing: "0.05em", color: "var(--text-secondary)", padding: "8px 14px", borderRadius: "var(--radius-sm)", transition: "color var(--transition)", minHeight: "44px", display: "inline-flex", alignItems: "center" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >{link.label}</a>
            ))}
            <LangToggle />
            <a href={MAILTO}
              style={{ marginLeft: "8px", padding: "9px 20px", background: "transparent", border: "1px solid var(--accent-primary)", color: "var(--accent-primary)", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.08em", transition: "background var(--transition), color var(--transition)", minHeight: "44px", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "var(--accent-primary)"; e.currentTarget.style.color = "var(--bg-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--accent-primary)"; }}
            >{ui.nav.hireMe}</a>
          </nav>

          <div className="mobile-controls" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <LangToggle />
            <button onClick={() => setMenuOpen((p) => !p)} aria-label="Toggle menu" className="hamburger-btn"
              style={{ width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-primary)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-subtle)", background: "rgba(255,255,255,0.04)", cursor: "pointer" }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span key={menuOpen ? "x" : "m"} initial={{ opacity: 0, rotate: -90, scale: 0.6 }} animate={{ opacity: 1, rotate: 0, scale: 1 }} exit={{ opacity: 0, rotate: 90, scale: 0.6 }} transition={{ duration: 0.2 }} style={{ display: "flex" }}>
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }} transition={{ duration: 0.25 }}
            style={{ position: "fixed", top: "var(--header-height)", left: 0, right: 0, bottom: 0, background: "rgba(8,12,20,0.98)", backdropFilter: "blur(24px)", zIndex: 190, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "4px" }}
          >
            {navLinks.map((link, i) => (
              <motion.a key={link.label} href={link.href} onClick={closeMenu}
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.06 + 0.05 }}
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.6rem,8vw,2.2rem)", fontWeight: 700, color: "var(--text-secondary)", padding: "14px 32px", width: "100%", textAlign: "center", minHeight: "60px", display: "flex", alignItems: "center", justifyContent: "center", transition: "color var(--transition)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >{link.label}</motion.a>
            ))}
            <motion.a href={MAILTO} onClick={closeMenu} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.38 }}
              style={{ marginTop: "28px", padding: "14px 44px", background: "var(--accent-primary)", color: "var(--bg-primary)", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-mono)", fontWeight: 500, fontSize: "0.9rem", letterSpacing: "0.08em", display: "inline-flex", alignItems: "center", minHeight: "52px" }}
            >{ui.nav.hireMe}</motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-nav { display: flex !important; }
          .mobile-controls .hamburger-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}
