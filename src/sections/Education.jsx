import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { GraduationCap } from "lucide-react";

export default function Education() {
  const { data } = useContent();
  const { education, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section style={{ padding: "0 0 80px" }}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "28px" }}>
          <p className="section-label">{ui.education.label}</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem,4vw,2rem)" }}>{ui.education.title}</h2>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "720px" }}>
          {education.map((edu, i) => (
            <motion.div key={edu.institution} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(91,106,240,0.1)", borderColor: "var(--border-accent)" }}
              style={{ display: "flex", alignItems: "flex-start", gap: "16px", background: "var(--bg-card)", backdropFilter: "var(--blur-glass)", WebkitBackdropFilter: "var(--blur-glass)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-md)", padding: "18px 20px", transition: "var(--transition)", boxShadow: "var(--shadow-card)" }}
            >
              <div style={{ width: "38px", height: "38px", borderRadius: "50%", background: "linear-gradient(135deg,rgba(91,106,240,0.12),rgba(192,132,252,0.12))", border: "1px solid var(--border-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "2px" }}>
                <GraduationCap size={17} color="var(--accent-primary)" />
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "2px" }}>{edu.institution}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.76rem", color: "var(--text-secondary)" }}>{edu.degree}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.67rem", color: "var(--text-muted)", whiteSpace: "nowrap" }}>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
