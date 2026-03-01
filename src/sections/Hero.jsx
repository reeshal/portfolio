import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import styles from "../styles/modules/Hero.module.css";

const MAILTO = "mailto:rreeshal@gmail.com?subject=Job%20Opportunity%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Reeshal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ARole%3A%20%5BPosition%5D%0ACompany%3A%20%5BYour%20Company%5D%0ADetails%3A%20%5BAdd%20any%20relevant%20details%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you%21";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  const { data } = useContent();
  const { name, role, bio, github, linkedin, phone, ui } = data;
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const particles = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    const count = window.innerWidth < 640 ? 30 : 60;
    for (let i = 0; i < count; i++) {
      particles.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: Math.random() * 1.4 + 0.3, vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3, opacity: Math.random() * 0.45 + 0.1 });
    }
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p, i) => {
        particles.slice(i + 1).forEach((q) => {
          const dx = p.x - q.x, dy = p.y - q.y, dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 110) { ctx.beginPath(); ctx.strokeStyle = `rgba(232,162,58,${0.055 * (1 - dist / 110)})`; ctx.lineWidth = 0.5; ctx.moveTo(p.x, p.y); ctx.lineTo(q.x, q.y); ctx.stroke(); }
        });
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(232,162,58,${p.opacity})`; ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" className={styles.hero}>
      <canvas ref={canvasRef} className={styles.canvas} />
      <div className={styles.glowLeft} />
      <div className={styles.glowRight} />

      <div className={`container ${styles.content}`}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className={styles.inner}>

          <motion.div variants={itemVariants}>
            <span className={styles.badge}>
              <span className={styles.badgeDot} />
              {ui.hero.available}
            </span>
          </motion.div>

          <motion.p variants={itemVariants} className={styles.greeting}>{ui.hero.greeting}</motion.p>

          <motion.h1 variants={itemVariants} className={styles.name}>
            <span className="gradient-text">{name}</span>
          </motion.h1>

          <motion.div variants={itemVariants} className={styles.roleRow}>
            <h2 className={styles.role}>{role}</h2>
            <div className={styles.roleDivider} />
          </motion.div>

          <motion.p variants={itemVariants} className={styles.bio}>{bio}</motion.p>

          <motion.div variants={itemVariants} className={styles.ctas}>
            <a href="#experience" className={styles.viewWorkBtn}>{ui.hero.cta}</a>

            <div className={styles.socialIcons}>
              {[
                { icon: Github, href: github, label: "GitHub" },
                { icon: Linkedin, href: linkedin, label: "LinkedIn" },
                { icon: Mail, href: MAILTO, label: "Email" },
                { icon: Phone, href: `tel:${phone}`, label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label} href={href}
                  target={label === "GitHub" || label === "LinkedIn" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.15 }}
                  className={styles.socialIcon}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
