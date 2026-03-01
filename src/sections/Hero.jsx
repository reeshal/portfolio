import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const MAILTO = "mailto:rreeshal@gmail.com?subject=Job%20Opportunity%20%E2%80%94%20Let%27s%20Work%20Together&body=Hi%20Reeshal%2C%0A%0AI%20came%20across%20your%20portfolio%20and%20I%27d%20love%20to%20discuss%20a%20potential%20opportunity%20with%20you.%0A%0ARole%3A%20%5BPosition%5D%0ACompany%3A%20%5BYour%20Company%5D%0ADetails%3A%20%5BAdd%20any%20relevant%20details%5D%0A%0ALooking%20forward%20to%20hearing%20from%20you%21";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.3 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.4, 0, 0.2, 1] } },
};

export default function Hero() {
  const { data } = useContent();
  const { name, role, bio, github, linkedin, phone, ui } = data;
  const canvasRef = useRef(null);

  // Light floating orbs instead of dark particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;
    const orbs = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);

    const count = window.innerWidth < 640 ? 8 : 14;
    for (let i = 0; i < count; i++) {
      orbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 160 + 80,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        hue: Math.random() > 0.5 ? 240 : 270, // blue or violet
        opacity: Math.random() * 0.06 + 0.03,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      orbs.forEach((o) => {
        const grad = ctx.createRadialGradient(o.x, o.y, 0, o.x, o.y, o.r);
        grad.addColorStop(0, `hsla(${o.hue}, 80%, 65%, ${o.opacity})`);
        grad.addColorStop(1, `hsla(${o.hue}, 80%, 65%, 0)`);
        ctx.beginPath();
        ctx.arc(o.x, o.y, o.r, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
        o.x += o.vx; o.y += o.vy;
        if (o.x < -o.r) o.x = canvas.width + o.r;
        if (o.x > canvas.width + o.r) o.x = -o.r;
        if (o.y < -o.r) o.y = canvas.height + o.r;
        if (o.y > canvas.height + o.r) o.y = -o.r;
      });
      animId = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(animId); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100svh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      <canvas ref={canvasRef} style={{ position: "absolute", inset: 0, pointerEvents: "none", zIndex: 0 }} />

      <div className="container" style={{ position: "relative", zIndex: 1, width: "100%" }}>
        <motion.div variants={containerVariants} initial="hidden" animate="visible"
          style={{ maxWidth: "820px", paddingTop: "calc(var(--header-height) + 56px)", paddingBottom: "80px" }}
        >
          {/* Status badge */}
          <motion.div variants={itemVariants} style={{ marginBottom: "28px" }}>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.1em",
              color: "var(--accent-primary)", padding: "6px 16px",
              border: "1px solid var(--border-accent)", borderRadius: "100px",
              background: "rgba(91,106,240,0.06)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 2px 12px rgba(91,106,240,0.08)",
            }}>
              <span style={{ width: "6px", height: "6px", background: "var(--accent-primary)", borderRadius: "50%", animation: "pulse-soft 2s ease-in-out infinite", flexShrink: 0 }} />
              {ui.hero.available}
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p variants={itemVariants} style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "6px", letterSpacing: "0.04em" }}>
            {ui.hero.greeting}
          </motion.p>

          {/* Name */}
          <motion.h1 variants={itemVariants} style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3.5rem, 14vw, 8rem)", fontWeight: 700, lineHeight: 0.95, marginBottom: "16px", letterSpacing: "-0.02em" }}>
            <span className="gradient-text">{name}</span>
          </motion.h1>

          {/* Role */}
          <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "14px", marginBottom: "24px", flexWrap: "wrap" }}>
            <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1rem, 4vw, 1.9rem)", fontWeight: 300, fontStyle: "italic", color: "var(--text-secondary)" }}>
              {role}
            </h2>
            <div style={{ height: "1px", width: "48px", background: "linear-gradient(to right, var(--accent-primary), transparent)", flexShrink: 0 }} />
          </motion.div>

          {/* Bio */}
          <motion.p variants={itemVariants} style={{ fontSize: "clamp(0.9rem, 2.5vw, 1.05rem)", color: "var(--text-secondary)", lineHeight: 1.8, maxWidth: "560px", marginBottom: "44px", fontWeight: 300 }}>
            {bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={itemVariants} style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
            <a href={MAILTO}
              style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "13px 30px", background: "linear-gradient(135deg, var(--accent-primary), var(--accent-secondary))", color: "#fff", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem", boxShadow: "0 6px 20px rgba(91,106,240,0.3)", minHeight: "48px", transition: "transform var(--transition), box-shadow var(--transition)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 28px rgba(91,106,240,0.38)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(91,106,240,0.3)"; }}
            >
              {ui.nav.hireMe}
            </a>

            <a href="#experience"
              style={{ display: "inline-flex", alignItems: "center", padding: "13px 26px", background: "var(--bg-card)", border: "1px solid var(--border-card)", color: "var(--text-primary)", borderRadius: "var(--radius-sm)", fontFamily: "var(--font-body)", fontWeight: 500, fontSize: "0.9rem", backdropFilter: "blur(10px)", minHeight: "48px", boxShadow: "var(--shadow-sm)", transition: "var(--transition)" }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.color = "var(--accent-primary)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-card)"; e.currentTarget.style.color = "var(--text-primary)"; }}
            >
              {ui.hero.cta}
            </a>

            {/* Social icons */}
            <div style={{ display: "flex", gap: "4px", marginLeft: "4px" }}>
              {[
                { icon: Github, href: github, label: "GitHub" },
                { icon: Linkedin, href: linkedin, label: "LinkedIn" },
                { icon: Mail, href: MAILTO, label: "Email" },
                { icon: Phone, href: `tel:${phone}`, label: "Phone" },
              ].map(({ icon: Icon, href, label }) => (
                <motion.a key={label} href={href} target={label === "GitHub" || label === "LinkedIn" ? "_blank" : undefined} rel="noopener noreferrer" aria-label={label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  style={{ color: "var(--text-muted)", transition: "color var(--transition)", width: "44px", height: "44px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "var(--radius-sm)", background: "var(--bg-card)", border: "1px solid var(--border-card)", backdropFilter: "blur(8px)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
