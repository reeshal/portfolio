import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useContent } from "../hooks/useLanguage.jsx";
import styles from "../styles/modules/Navbar.module.css";

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

  const headerClass = [
    styles.header,
    scrolled ? styles.scrolled : "",
    menuOpen ? styles.menuOpen : "",
  ].join(" ");

  const LangToggle = ({ mobile = false }) => (
    <motion.button
      onClick={toggle}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${styles.langToggle} ${mobile ? styles.langToggleMobile : ""}`}
      title={lang === "en" ? "Passer en français" : "Switch to English"}
    >
      <span className={lang === "fr" ? styles.langActive : styles.langInactive}>FR</span>
      <span className={styles.langDivider}>/</span>
      <span className={lang === "en" ? styles.langActive : styles.langInactive}>EN</span>
    </motion.button>
  );

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
        className={headerClass}
      >
        <div className={`container ${styles.inner}`}>
          <motion.a href="#hero" onClick={closeMenu} whileHover={{ scale: 1.05 }} className={styles.logo}>
            <span className={styles.logoAccent}>&lt;</span>R<span className={styles.logoAccent}>/&gt;</span>
          </motion.a>

          <nav className={styles.desktopNav}>
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>{link.label}</a>
            ))}
            <a href={MAILTO} className={styles.hireBtn}>{ui.nav.hireMe}</a>
          </nav>

          <div className={styles.mobileControls}>
            <LangToggle />
            <button onClick={() => setMenuOpen((p) => !p)} aria-label="Toggle menu" className={styles.hamburger}>
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={menuOpen ? "x" : "m"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                  style={{ display: "flex" }}
                >
                  {menuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.25 }}
            className={styles.mobileMenu}
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06 + 0.05 }}
                className={styles.mobileNavLink}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href={MAILTO}
              onClick={closeMenu}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38 }}
              className={styles.mobileHireBtn}
            >
              {ui.nav.hireMe}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
