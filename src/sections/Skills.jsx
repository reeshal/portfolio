import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const cardVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const categoryIcons = {
  "Backend": "⚙️", "Frontend": "🖥️", "Data": "🗄️", "Données": "🗄️",
  "DevOps": "🚀", "Other": "🔧", "Autre": "🔧",
};

function SkillCard({ name, category }) {
  return (
    <motion.div variants={cardVariants}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(91,106,240,0.14)", borderColor: "var(--border-accent)" }}
      style={{ background: "var(--bg-card)", backdropFilter: "var(--blur-glass)", WebkitBackdropFilter: "var(--blur-glass)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-md)", padding: "14px 16px", display: "flex", alignItems: "center", gap: "10px", transition: "var(--transition)", cursor: "default", boxShadow: "var(--shadow-card)" }}
    >
      <span style={{ fontSize: "1rem", lineHeight: 1, flexShrink: 0 }}>{categoryIcons[category] ?? "💡"}</span>
      <span style={{ fontWeight: 500, fontSize: "0.88rem", color: "var(--text-primary)", lineHeight: 1.3 }}>{name}</span>
    </motion.div>
  );
}

export default function Skills() {
  const { data } = useContent();
  const { skills, skillCategories, ui } = data;
  const [activeCategory, setActiveCategory] = useState(ui.skills.filterAll);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const categories = [ui.skills.filterAll, ...skillCategories];
  const filtered = activeCategory === ui.skills.filterAll ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "40px" }}>
          <p className="section-label">{ui.skills.label}</p>
          <h2 className="section-title">{ui.skills.title}</h2>
          <p className="section-subtitle">{ui.skills.subtitle}</p>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }}
          style={{ display: "flex", gap: "8px", marginBottom: "32px", overflowX: "auto", paddingBottom: "8px", scrollbarWidth: "none" }}
        >
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", letterSpacing: "0.07em", padding: "8px 16px", borderRadius: "100px", border: "1px solid", borderColor: activeCategory === cat ? "var(--accent-primary)" : "var(--border-card)", background: activeCategory === cat ? "rgba(91,106,240,0.1)" : "var(--bg-card)", backdropFilter: "blur(10px)", color: activeCategory === cat ? "var(--accent-primary)" : "var(--text-muted)", transition: "var(--transition)", cursor: "pointer", whiteSpace: "nowrap", flexShrink: 0, minHeight: "44px", boxShadow: "var(--shadow-sm)" }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div key={activeCategory} variants={containerVariants} initial="hidden" animate="visible" className="skills-grid">
          {filtered.map((skill) => <SkillCard key={skill.name} {...skill} />)}
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.35 }}
          className="stats-grid"
          style={{ display: "grid", gap: "12px", marginTop: "56px" }}
        >
          {ui.skills.stats.map(({ value, label }) => (
            <div key={label} style={{ background: "var(--bg-card)", backdropFilter: "var(--blur-glass)", WebkitBackdropFilter: "var(--blur-glass)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-lg)", padding: "28px 16px", textAlign: "center", boxShadow: "var(--shadow-card)" }}>
              <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem, 5vw, 2.4rem)", fontWeight: 600, background: "linear-gradient(135deg,var(--accent-primary),var(--accent-secondary))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", marginBottom: "6px", lineHeight: 1 }}>{value}</p>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase" }}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
      <style>{`
        .skills-grid { display:grid; grid-template-columns:1fr; gap:10px; }
        @media(min-width:420px){ .skills-grid{grid-template-columns:repeat(2,1fr);} }
        @media(min-width:700px){ .skills-grid{grid-template-columns:repeat(3,1fr);gap:12px;} }
        @media(min-width:960px){ .skills-grid{grid-template-columns:repeat(4,1fr);gap:14px;} }
        .stats-grid{grid-template-columns:repeat(2,1fr);}
        @media(min-width:640px){.stats-grid{grid-template-columns:repeat(4,1fr);}}
        div::-webkit-scrollbar{display:none;}
      `}</style>
    </section>
  );
}
