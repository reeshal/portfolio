import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import styles from "../styles/modules/Projects.module.css";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function ProjectCard({ project }) {
  return (
    <motion.div variants={cardVariants} className={styles.card}>
      {project.association && <span className={styles.association}>{project.association}</span>}
      <h3 className={styles.title}>{project.title}</h3>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.tags}>
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
    <section id="projects" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">{ui.projects.label}</p>
          <h2 className="section-title">{ui.projects.title}</h2>
          <p className="section-subtitle">{ui.projects.subtitle}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className={styles.grid}>
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </motion.div>
      </div>
    </section>
  );
}
