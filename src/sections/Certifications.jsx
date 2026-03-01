import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { BadgeCheck } from "lucide-react";

export default function Certifications() {
  const { data } = useContent();
  const { certifications, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section style={{ padding: "0 0 80px" }}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "28px" }}>
          <p className="section-label">{ui.certifications.label}</p>
          <h2 className="section-title" style={{ fontSize: "clamp(1.4rem,4vw,2rem)" }}>{ui.certifications.title}</h2>
        </motion.div>
        <div className="certs-grid">
          {certifications.map((cert, i) => (
            <motion.div key={cert.credentialId} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, boxShadow: "0 12px 32px rgba(91,106,240,0.1)", borderColor: "var(--border-accent)" }}
              style={{ display: "flex", alignItems: "center", gap: "16px", background: "var(--bg-card)", backdropFilter: "var(--blur-glass)", WebkitBackdropFilter: "var(--blur-glass)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-md)", padding: "18px 20px", transition: "var(--transition)", boxShadow: "var(--shadow-card)" }}
            >
              <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg,rgba(91,106,240,0.12),rgba(192,132,252,0.12))", border: "1px solid var(--border-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <BadgeCheck size={18} color="var(--accent-primary)" />
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ fontWeight: 600, fontSize: "0.95rem", color: "var(--text-primary)", marginBottom: "2px" }}>{cert.title}</p>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>{cert.issuer} · {cert.date}</p>
              </div>
              <span className="cert-id" style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", color: "var(--text-muted)", display: "none" }}>ID: {cert.credentialId}</span>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .certs-grid{display:grid;grid-template-columns:1fr;gap:12px;}
        @media(min-width:640px){.certs-grid{grid-template-columns:repeat(2,1fr);} .cert-id{display:block!important;}}
      `}</style>
    </section>
  );
}
