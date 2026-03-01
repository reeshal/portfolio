import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { Briefcase } from "lucide-react";

function ExperienceCard({ exp, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }}
      style={{ display: "flex", gap: "16px", paddingBottom: isLast ? 0 : "28px" }}
    >
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0 }}>
        <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.35, delay: index * 0.1 + 0.15, type: "spring", stiffness: 220 }}
          style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 14px rgba(91,106,240,0.3)" }}
        >
          <Briefcase size={15} color="#fff" />
        </motion.div>
        {!isLast && (
          <div style={{ flex: 1, width: "1px", minHeight: "28px", background: "linear-gradient(to bottom, rgba(91,106,240,0.4), rgba(91,106,240,0.05))", marginTop: "8px" }} />
        )}
      </div>
      <motion.div whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(91,106,240,0.1)", borderColor: "var(--border-accent)" }}
        style={{ flex: 1, background: "var(--bg-card)", backdropFilter: "var(--blur-glass)", WebkitBackdropFilter: "var(--blur-glass)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-md)", padding: "20px 22px", transition: "var(--transition)", boxShadow: "var(--shadow-card)" }}
      >
        <div style={{ marginBottom: "4px" }}>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--accent-primary)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{exp.company}</span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.63rem", color: "var(--text-muted)", marginLeft: "10px" }}>{exp.period}</span>
        </div>
        <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.05rem, 3vw, 1.25rem)", fontWeight: 600, color: "var(--text-primary)", margin: "6px 0 10px", lineHeight: 1.3 }}>{exp.role}</h3>
        <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.78, marginBottom: "16px", fontWeight: 300 }}>{exp.description}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
          {exp.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Experience() {
  const { data } = useContent();
  const { experience, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="experience" className="section" style={{ background: "linear-gradient(180deg,transparent,rgba(91,106,240,0.02),transparent)" }}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "48px" }}>
          <p className="section-label">{ui.experience.label}</p>
          <h2 className="section-title">{ui.experience.title}</h2>
          <p className="section-subtitle">{ui.experience.subtitle}</p>
        </motion.div>
        <div style={{ maxWidth: "720px" }}>
          {experience.map((exp, i) => <ExperienceCard key={i} exp={exp} index={i} isLast={i === experience.length - 1} />)}
        </div>
      </div>
    </section>
  );
}
