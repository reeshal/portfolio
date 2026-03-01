import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { GraduationCap } from "lucide-react";
import styles from "../styles/modules/Education.module.css";

export default function Education() {
  const { data } = useContent();
  const { education, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">{ui.education.label}</p>
          <h2 className="section-title">{ui.education.title}</h2>
        </motion.div>
        <div className={styles.list}>
          {education.map((edu, i) => (
            <motion.div key={edu.institution} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className={styles.card}>
              <div className={styles.icon}>
                <GraduationCap size={17} color="var(--accent-primary)" />
              </div>
              <div className={styles.info}>
                <div className={styles.row}>
                  <div>
                    <p className={styles.institution}>{edu.institution}</p>
                    <p className={styles.degree}>{edu.degree}</p>
                  </div>
                  <span className={styles.period}>{edu.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
