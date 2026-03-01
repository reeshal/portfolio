import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import styles from "../styles/modules/Skills.module.css";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.05 } } };
const cardVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } };

const categoryIcons = {
  "Backend": "⚙️", "Frontend": "🖥️", "Data": "🗄️", "Données": "🗄️",
  "DevOps": "🚀", "Other": "🔧", "Autre": "🔧",
};

function SkillCard({ name, category }) {
  return (
    <motion.div variants={cardVariants} className={styles.card}>
      <span className={styles.cardIcon}>{categoryIcons[category] ?? "💡"}</span>
      <span className={styles.cardName}>{name}</span>
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
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">{ui.skills.label}</p>
          <h2 className="section-title">{ui.skills.title}</h2>
          <p className="section-subtitle">{ui.skills.subtitle}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: 0.15 }} className={styles.filters}>
          {categories.map((cat) => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ""}`}
            >{cat}</button>
          ))}
        </motion.div>

        <motion.div key={activeCategory} variants={containerVariants} initial="hidden" animate="visible" className={styles.grid}>
          {filtered.map((skill) => <SkillCard key={skill.name} {...skill} />)}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.35 }} className={styles.statsGrid}>
          {ui.skills.stats.map(({ value, label }) => (
            <div key={label} className={styles.statItem}>
              <p className={styles.statValue}>{value}</p>
              <p className={styles.statLabel}>{label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
