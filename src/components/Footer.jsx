import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Phone } from "lucide-react";
import { useContent } from "../hooks/useLanguage.jsx";

const MAILTO = "mailto:rreeshal@gmail.com?subject=Job%20Opportunity%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Reeshal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ARole%3A%20%5BPosition%5D%0ACompany%3A%20%5BYour%20Company%5D%0ADetails%3A%20%5BAdd%20any%20relevant%20details%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you%21";

export default function Footer() {
  const { data } = useContent();
  const { name, github, linkedin, phone, ui } = data;
  const navLabels = [ui.nav.home, ui.nav.skills, ui.nav.experience, ui.nav.projects, ui.nav.talks];
  const navHrefs = ["#hero","#skills","#experience","#projects","#talks"];

  return (
    <footer style={{ borderTop: "1px solid var(--border-card)", padding: "48px 0", background: "rgba(255,255,255,0.45)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)" }}>
      <div className="container" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "24px", textAlign: "center" }}>
        <a href="#hero" style={{ fontFamily: "var(--font-display)", fontSize: "1.8rem", fontWeight: 700, color: "var(--text-primary)", display: "inline-flex", alignItems: "center", minHeight: "44px", letterSpacing: "-0.01em" }}>
          <span style={{ background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{name}</span>
        </a>
        <nav style={{ display: "flex", gap: "4px", flexWrap: "wrap", justifyContent: "center" }}>
          {navLabels.map((label, i) => (
            <a key={label} href={navHrefs[i]}
              style={{ fontFamily: "var(--font-body)", fontSize: "0.85rem", fontWeight: 400, color: "var(--text-muted)", padding: "8px 12px", transition: "color var(--transition)", minHeight: "44px", display: "inline-flex", alignItems: "center" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              {label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: "8px" }}>
          {[{ icon: Github, href: github }, { icon: Linkedin, href: linkedin }, { icon: Mail, href: MAILTO }, { icon: Phone, href: `tel:${phone}` }].map(({ icon: Icon, href }) => (
            <motion.a key={href} href={href} target="_blank" rel="noopener noreferrer"
              whileHover={{ scale: 1.15, y: -2 }}
              style={{ color: "var(--text-muted)", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-sm)", background: "var(--bg-card)", border: "1px solid var(--border-card)", transition: "color var(--transition)", backdropFilter: "blur(8px)", boxShadow: "var(--shadow-sm)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              <Icon size={17} />
            </motion.a>
          ))}
        </div>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.05em", display: "flex", alignItems: "center", gap: "6px" }}>
          {ui.footer.builtIn} <Heart size={11} color="var(--accent-primary)" fill="var(--accent-primary)" /> {ui.footer.inLocation} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
