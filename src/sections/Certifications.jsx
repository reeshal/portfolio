import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { BadgeCheck } from "lucide-react";
import styles from "../styles/modules/Certifications.module.css";

export default function Certifications() {
  const { data } = useContent();
  const { certifications, ui } = data;
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  return (
    <section className={styles.wrapper}>
      <div className="container">
        <motion.div ref={ref} initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">{ui.certifications.label}</p>
          <h2 className="section-title">{ui.certifications.title}</h2>
        </motion.div>
        <div className={styles.grid}>
          {certifications.map((cert, i) => (
            <motion.div key={cert.credentialId} initial={{ opacity: 0, x: -16 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ delay: i * 0.1, duration: 0.5 }} className={styles.card}>
              <div className={styles.icon}>
                <BadgeCheck size={18} color="var(--accent-primary)" />
              </div>
              <div className={styles.info}>
                <p className={styles.title}>{cert.title}</p>
                <p className={styles.meta}>{cert.issuer} · {cert.date}</p>
              </div>
              <span className={styles.credentialId}>ID: {cert.credentialId}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
