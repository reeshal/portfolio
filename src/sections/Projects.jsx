import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function ProjectCard({ project }) {
  return (
    <motion.div variants={cardVariants}
      whileHover={{ y: -5, boxShadow: "0 16px 40px rgba(91,106,240,0.13)", borderColor: "var(--border-accent)" }}
      style={{ background: "var(--bg-card)", backdropFilter: "var(--blur-glass)", WebkitBackdropFilter: "var(--blur-glass)", border: "1px solid var(--border-card)", borderRadius: "var(--radius-lg)", padding: "24px", display: "flex", flexDirection: "column", gap: "12px", transition: "var(--transition)", height: "100%", boxShadow: "var(--shadow-card)" }}
    >
      {project.association && <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.63rem", color: "var(--accent-primary)", letterSpacing: "0.08em" }}>{project.association}</span>}
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.3 }}>{project.title}</h3>
      <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)", lineHeight: 1.75, flex: 1, fontWeight: 300 }}>{project.description}</p>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
        {project.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const { data } = useContent();
  const { projects, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} style={{ marginBottom: "40px" }}>
          <p className="section-label">{ui.projects.label}</p>
          <h2 className="section-title">{ui.projects.title}</h2>
          <p className="section-subtitle">{ui.projects.subtitle}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className="projects-grid">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </motion.div>
      </div>
      <style>{`
        .projects-grid{display:grid;grid-template-columns:1fr;gap:14px;}
        @media(min-width:560px){.projects-grid{grid-template-columns:repeat(2,1fr);gap:16px;}}
        @media(min-width:900px){.projects-grid{grid-template-columns:repeat(3,1fr);gap:18px;}}
      `}</style>
    </section>
  );
}
