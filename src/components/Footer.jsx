import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, Phone } from "lucide-react";
import { useContent } from "../hooks/useLanguage.jsx";
import styles from "../styles/modules/Footer.module.css";

const MAILTO = "mailto:rreeshal@gmail.com?subject=Job%20Opportunity%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Reeshal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ARole%3A%20%5BPosition%5D%0ACompany%3A%20%5BYour%20Company%5D%0ADetails%3A%20%5BAdd%20any%20relevant%20details%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you%21";

export default function Footer() {
  const { data } = useContent();
  const { name, github, linkedin, phone, ui } = data;
  const navLabels = [ui.nav.home, ui.nav.skills, ui.nav.experience, ui.nav.projects, ui.nav.talks];
  const navHrefs = ["#hero", "#skills", "#experience", "#projects", "#talks"];

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <a href="#hero" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>{name}<span className={styles.logoAccent}>/&gt;</span>
        </a>
        <nav className={styles.nav}>
          {navLabels.map((label, i) => (
            <a key={label} href={navHrefs[i]} className={styles.navLink}>{label}</a>
          ))}
        </nav>
        <div className={styles.socials}>
          {[
            { icon: Github, href: github, label: "GitHub" },
            { icon: Linkedin, href: linkedin, label: "LinkedIn" },
            { icon: Mail, href: MAILTO, label: "Email" },
            { icon: Phone, href: `tel:${phone}`, label: "Phone" },
          ].map(({ icon: Icon, href, label }) => (
            <motion.a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
              whileHover={{ scale: 1.2, y: -2 }}
              className={styles.socialIcon}
            >
              <Icon size={19} />
            </motion.a>
          ))}
        </div>
        <p className={styles.credit}>
          {ui.footer.builtIn} <Heart size={11} color="var(--accent-primary)" fill="var(--accent-primary)" /> {ui.footer.inLocation} · {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
