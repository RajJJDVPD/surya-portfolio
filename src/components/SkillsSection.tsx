import { motion } from "framer-motion";

const skills = [
  { name: "Penetration Testing", level: 95 },
  { name: "Network Security", level: 90 },
  { name: "Web App Security", level: 92 },
  { name: "Digital Forensics", level: 85 },
  { name: "Malware Analysis", level: 80 },
  { name: "Social Engineering", level: 88 },
  { name: "OSINT", level: 87 },
  { name: "Reverse Engineering", level: 78 },
];

const tools = [
  "Kali Linux", "Burp Suite", "Metasploit", "Nmap", "Wireshark",
  "John the Ripper", "Hashcat", "Ghidra", "SQLMap", "Hydra",
  "Aircrack-ng", "Nikto", "OWASP ZAP", "Maltego", "Cobalt Strike",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="relative py-24 bg-card/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">[</span>02<span className="text-primary">]</span>
            <div className="h-px flex-1 bg-border max-w-[100px]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary text-glow mb-12 tracking-wider">
            SKILL_SET
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-5">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="flex justify-between mb-1">
                  <span className="font-mono text-sm text-card-foreground">{skill.name}</span>
                  <span className="font-mono text-xs text-primary">{skill.level}%</span>
                </div>
                <div className="h-2 bg-muted rounded-sm overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.08 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="font-mono text-xs text-muted-foreground mb-4">
              <span className="text-primary">$</span> ls ~/tools/
            </div>
            <div className="flex flex-wrap gap-2">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 cyber-border bg-card/60 font-mono text-xs text-card-foreground hover:text-primary hover:border-primary/60 transition-all duration-300 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>

            <div className="mt-8 cyber-border bg-card/40 p-5">
              <div className="font-mono text-xs text-muted-foreground mb-3">// certifications.json</div>
              <div className="space-y-2 font-mono text-sm">
                {[
                  "Certified Ethical Hacker (CEH)",
                  "Offensive Security (OSCP Path)",
                  "CompTIA Security+",
                  "Bug Bounty Hunter",
                ].map((cert) => (
                  <div key={cert} className="flex items-center gap-2 text-card-foreground">
                    <span className="text-primary">✓</span> {cert}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
