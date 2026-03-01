import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useContent } from "../hooks/useLanguage.jsx";
import { Presentation, Users, ChevronRight } from "lucide-react";
import styles from "../styles/modules/Talks.module.css";

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const cardVariants = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } } };

function TalkCard({ talk, index }) {
  return (
    <motion.div variants={cardVariants} className={styles.card}>
      <span className={styles.watermark}>{String(index + 1).padStart(2, "0")}</span>
      <div className={styles.topRow}>
        <span className={styles.icon}>{talk.icon}</span>
        <span className={styles.venueBadge}>
          <Users size={10} />{talk.venue}
        </span>
      </div>
      <h3 className={styles.title}>{talk.title}</h3>
      <p className={styles.description}>{talk.description}</p>
      <div className={styles.tags}>
        {talk.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <div className={styles.bottomLine} />
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
        <motion.div ref={ref} initial={{ opacity: 0, y: 24 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className={styles.header}>
          <p className="section-label">{ui.talks.label}</p>
          <h2 className="section-title">{ui.talks.title}</h2>
          <p className="section-subtitle">{ui.talks.subtitle}</p>
        </motion.div>
        <motion.div variants={containerVariants} initial="hidden" animate={inView ? "visible" : "hidden"} className={styles.grid}>
          {talks.map((talk, i) => <TalkCard key={talk.title} talk={talk} index={i} />)}
        </motion.div>
        <motion.div initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ delay: 0.55 }} className={styles.footer}>
          <Presentation size={15} />
          <span className={styles.footerText}>{ui.talks.moreComing}</span>
          <ChevronRight size={13} />
        </motion.div>
      </div>
    </section>
  );
}
