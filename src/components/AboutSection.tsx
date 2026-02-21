import { motion } from "framer-motion";
import { Shield, Target, Bug, Cpu, Fingerprint, Radio } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">[</span>
            <span>01</span>
            <span className="text-primary">]</span>
            <div className="h-px flex-1 bg-border max-w-[100px]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary text-glow mb-12 tracking-wider">
            ABOUT_ME
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="cyber-border bg-card/60 backdrop-blur-sm p-6 md:p-8">
              <div className="font-mono text-xs text-muted-foreground mb-4">
                <span className="text-primary">$</span> cat about.txt
              </div>
              <p className="font-body text-lg text-card-foreground leading-relaxed mb-4">
                I'm an <span className="text-primary font-semibold">Ethical Hacker</span> and{" "}
                <span className="text-secondary font-semibold">Offensive Security Specialist</span>{" "}
                with a passion for breaking into systems — legally — to make them stronger.
              </p>
              <p className="font-body text-lg text-card-foreground leading-relaxed mb-4">
                As an <span className="text-primary">Information Security Specialist</span> and{" "}
                <span className="text-secondary">Digital Forensics Expert</span>, I specialize in
                penetration testing, vulnerability assessment, and security training.
              </p>
              <p className="font-body text-lg text-card-foreground leading-relaxed">
                I've trained over <span className="text-primary font-bold">5000+ students</span> in
                cybersecurity, empowering the next generation of defenders. I also actively participate
                in bug bounty programs and speak at security conferences.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { icon: Shield, label: "Ethical Hacking", desc: "White-hat security testing" },
              { icon: Target, label: "Pentesting", desc: "Offensive security assessments" },
              { icon: Bug, label: "Bug Hunting", desc: "Vulnerability discovery" },
              { icon: Cpu, label: "OSCP Path", desc: "Advanced exploit development" },
              { icon: Fingerprint, label: "Digital Forensics", desc: "Evidence & investigation" },
              { icon: Radio, label: "Public Speaker", desc: "Conference presentations" },
            ].map((item, i) => (
              <div
                key={item.label}
                className="cyber-border bg-card/40 p-4 hover:bg-primary/5 transition-all duration-300 group"
              >
                <item.icon className="h-6 w-6 text-primary mb-2 group-hover:text-secondary transition-colors" />
                <div className="font-display text-sm font-bold text-card-foreground tracking-wide">{item.label}</div>
                <div className="font-mono text-xs text-muted-foreground mt-1">{item.desc}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
