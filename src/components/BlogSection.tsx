import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const articles = [
  {
    title: "Social Engineering: The Art of Hacking Humans",
    desc: "Understanding the psychology behind social engineering attacks and how to defend against them.",
    url: "https://www.linkedin.com/in/surya-sadanala-78036123b/recent-activity/all/",
    tag: "Social Engineering",
  },
  {
    title: "Practical Ethical Hacking Syllabus",
    desc: "A comprehensive syllabus for crafting cybersecurity masters in the real world with hands-on labs.",
    url: "https://suryasadanala.medium.com/practical-ethical-hacking-syllabus-crafting-cybersecurity-masters-in-the-real-world-27838c6ad716",
    tag: "Training",
  },
  {
    title: "Basic Hacking: Subdomain Takeover",
    desc: "Deep dive into subdomain takeover vulnerabilities — how they work and how to exploit them ethically.",
    url: "https://suryasadanala.medium.com/basic-hacking-subdomain-takeover-762efbf0719b",
    tag: "Bug Hunting",
  },
  {
    title: "Mastering OSCP: A 30-Day Journey",
    desc: "A structured 30-day plan to prepare for the OSCP certification with daily tasks and resources.",
    url: "https://suryasadanala.medium.com/mastering-oscp-a-30-day-journey-to-cybersecurity-proficiency-069bd51fe4a1",
    tag: "OSCP",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="relative py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">[</span>04<span className="text-primary">]</span>
            <div className="h-px flex-1 bg-border max-w-[100px]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary text-glow mb-12 tracking-wider">
            BLOG_POSTS
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.a
              key={article.title}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cyber-border bg-card/40 p-6 hover:bg-card/70 transition-all duration-500 block"
            >
              <div className="flex items-start justify-between mb-3">
                <span className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary border border-primary/20">
                  {article.tag}
                </span>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display text-lg font-bold text-card-foreground tracking-wide mb-2 group-hover:text-primary transition-colors">
                {article.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">{article.desc}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
