import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "../data/portfolio";
import { ArrowUpRight, Clock } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

function BlogCard({ post, isFeatured }) {
  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -4 }}
      style={{
        background: "var(--bg-card)",
        border: "1px solid var(--border-subtle)",
        borderRadius: "var(--radius-lg)",
        padding: isFeatured ? "24px" : "20px",
        cursor: "pointer",
        transition: "border-color var(--transition), background var(--transition)",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
      }}
      onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--border-accent)"; e.currentTarget.style.background = "var(--bg-card-hover)"; }}
      onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border-subtle)"; e.currentTarget.style.background = "var(--bg-card)"; }}
    >
      {/* Featured left border accent */}
      {isFeatured && (
        <div style={{ position: "absolute", top: 0, left: 0, width: "3px", height: "100%", background: "linear-gradient(to bottom, var(--accent-primary), transparent)", borderRadius: "3px 0 0 3px" }} />
      )}

      {/* Tags row */}
      <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", alignItems: "center" }}>
        {post.tags.map((tag) => <span key={tag} className="tag">{tag}</span>)}
        {isFeatured && (
          <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.65rem", padding: "3px 8px", borderRadius: "4px", background: "rgba(232,162,58,0.18)", color: "var(--accent-primary)", border: "1px solid var(--accent-primary)", letterSpacing: "0.08em" }}>
            FEATURED
          </span>
        )}
      </div>

      {/* Title */}
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: isFeatured ? "clamp(1.1rem, 3.5vw, 1.4rem)" : "clamp(1rem, 3vw, 1.1rem)", fontWeight: 700, color: "var(--text-primary)", lineHeight: 1.35 }}>
        {post.title}
      </h3>

      {/* Excerpt */}
      <p style={{ fontSize: "0.88rem", color: "var(--text-secondary)", lineHeight: 1.75, flex: 1 }}>
        {post.excerpt}
      </p>

      {/* Meta + arrow */}
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px", fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--text-muted)" }}>
          <span>{post.date}</span>
          <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <Clock size={11} />{post.readTime}
          </span>
        </div>
        <motion.div whileHover={{ scale: 1.2, rotate: 10 }} style={{ color: "var(--accent-primary)" }}>
          <ArrowUpRight size={17} />
        </motion.div>
      </div>
    </motion.article>
  );
}

export default function Blog() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { blog } = portfolioData;

  return (
    <section id="blog" className="section">
      <div className="container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "40px" }}
        >
          <p className="section-label">Thoughts & Writing</p>
          <h2 className="section-title">Blog</h2>
          <p className="section-subtitle">Notes from the trenches — real-world engineering challenges, solutions, and lessons I wish I'd had earlier.</p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="blog-grid"
        >
          {blog.map((post, i) => (
            <BlogCard key={post.title} post={post} isFeatured={i === 0} />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{ textAlign: "center", marginTop: "52px" }}
        >
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-muted)", marginBottom: "12px", letterSpacing: "0.05em" }}>
            More posts coming soon — stay tuned
          </p>
          <div style={{ display: "inline-block", width: "50px", height: "1px", background: "linear-gradient(to right, transparent, var(--accent-primary), transparent)" }} />
        </motion.div>
      </div>

      <style>{`
        .blog-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }
        @media (min-width: 640px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 18px;
          }
        }
        @media (min-width: 900px) {
          .blog-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
      `}</style>
    </section>
  );
}
