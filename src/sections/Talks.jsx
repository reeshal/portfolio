import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { Presentation, Users, ChevronRight } from "lucide-react";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55 } } };

function TalkCard({ talk, index }) {
  return (
    <motion.div variants={cardVariants}
      whileHover={{ y: -6, boxShadow: "0 20px 48px rgba(91,106,240,0.14)", borderColor: "var(--border-accent)" }}
      style={{ background: "var(--bg-card)", backdropFilter: "var(--blur-glass)", WebkitBackdropFilter: "var(--blur-glass)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-lg)", padding: "28px", display: "flex", flexDirection: "column", gap: "16px", transition: "var(--transition)", position: "relative", overflow: "hidden", boxShadow: "var(--shadow-card)" }}
    >
      {/* Number watermark */}
      <span style={{ position: "absolute", top: "12px", right: "18px", fontFamily: "var(--font-display)", fontSize: "4.5rem", fontWeight: 700, color: "rgba(91,106,240,0.06)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
        {String(index + 1).padStart(2, "0")}
      </span>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "2rem", lineHeight: 1 }}>{talk.icon}</span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: "5px", fontFamily: "var(--font-mono)", fontSize: "0.63rem", letterSpacing: "0.08em", color: "var(--text-muted)", padding: "4px 10px", border: "1px solid var(--border-card)", borderRadius: "100px", background: "rgba(255,255,255,0.5)" }}>
          <Users size={9} />{talk.venue}
        </span>
      </div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.1rem,3vw,1.3rem)", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{talk.title}</h3>
      <p style={{ fontSize: "0.87rem", color: "var(--text-secondary)", lineHeight: 1.78, flex: 1, fontWeight: 300 }}>{talk.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px" }}>
        {talk.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      {/* Bottom gradient accent */}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(to right, var(--accent-primary), var(--accent-secondary))", opacity: 0, transition: "opacity var(--transition)" }} className="talk-line" />
    </motion.div>
  );
}

export default function Talks() {
  const { data } = useContent();
  const { talks, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="talks" className="section">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "48px" }}>
          <p className="section-label">{ui.talks.label}</p>
          <h2 className="section-title">{ui.talks.title}</h2>
          <p className="section-subtitle">{ui.talks.subtitle}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="talks-grid">
          {talks.map((talk, i) => <TalkCard key={talk.title} talk={talk} index={i} />)}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }}
          style={{ marginTop: "40px", display: "flex", alignItems: "center", gap: "8px", color: "var(--text-muted)" }}
        >
          <Presentation size={14} />
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.06em" }}>{ui.talks.moreComing}</span>
          <ChevronRight size={12} />
        </motion.div>
      </div>
      <style>{`
        .talks-grid{display:grid;grid-template-columns:1fr;gap:16px;}
        @media(min-width:640px){.talks-grid{grid-template-columns:repeat(2,1fr);gap:18px;}}
        @media(min-width:900px){.talks-grid{grid-template-columns:repeat(3,1fr);gap:20px;}}
        .talk-line{opacity:0;} div:hover > .talk-line{opacity:1;}
      `}</style>
    </section>
  );
}
