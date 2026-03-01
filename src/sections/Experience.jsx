import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { Briefcase } from "lucide-react";
import styles from "../styles/modules/Experience.module.css";

function ExperienceCard({ exp, index, isLast }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.1 }} className={styles.entry}>
      <div className={styles.nodeCol}>
        <motion.div initial={{ scale: 0 }} animate={inView ? { scale: 1 } : {}} transition={{ duration: 0.35, delay: index * 0.1 + 0.15, type: "spring", stiffness: 220 }} className={styles.node}>
          <Briefcase size={14} color="var(--accent-primary)" />
        </motion.div>
        {!isLast && (
          <motion.div initial={{ scaleY: 0 }} animate={inView ? { scaleY: 1 } : {}} transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }} className={styles.line} />
        )}
      </div>
      <div className={styles.card}>
        <div>
          <span className={styles.company}>{exp.company}</span>
          <span className={styles.period}>{exp.period}</span>
        </div>
        <h3 className={styles.role}>{exp.role}</h3>
        <p className={styles.description}>{exp.description}</p>
        <div className={styles.tags}>
          {exp.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { data } = useContent();
  const { experience, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <section id="experience" className={`section ${styles.section}`}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">{ui.experience.label}</p>
          <h2 className="section-title">{ui.experience.title}</h2>
          <p className="section-subtitle">{ui.experience.subtitle}</p>
        </motion.div>
        <div className={styles.timeline}>
          {experience.map((exp, i) => <ExperienceCard key={i} exp={exp} index={i} isLast={i === experience.length - 1} />)}
        </div>
      </div>
    </section>
  );
}
