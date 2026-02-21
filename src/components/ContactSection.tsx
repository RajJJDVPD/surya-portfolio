import { motion } from "framer-motion";
import { Mail, Linkedin, Globe, Terminal } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">[</span>05<span className="text-primary">]</span>
            <div className="h-px flex-1 bg-border max-w-[100px]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary text-glow mb-12 tracking-wider">
            CONTACT
          </h2>
        </motion.div>

        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="cyber-border bg-card/50 backdrop-blur-sm p-8"
          >
            <div className="font-mono text-xs text-muted-foreground mb-6">
              <Terminal className="h-4 w-4 text-primary inline mr-2" />
              <span className="text-primary">surya@kali</span>:~$ <span className="text-secondary">./connect.sh</span>
            </div>

            <p className="font-body text-lg text-card-foreground mb-8 leading-relaxed">
              Ready to secure your digital assets? Whether you need a security audit,
              training, or just want to discuss cybersecurity — let's connect.
            </p>

            <div className="space-y-4">
              <a
                href="https://www.linkedin.com/in/surya-sadanala-78036123b/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-card-foreground hover:text-primary transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-primary" />
                <span className="group-hover:text-glow">linkedin.com/in/surya-sadanala</span>
              </a>
              <a
                href="https://suryasadanala.medium.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 font-mono text-sm text-card-foreground hover:text-primary transition-colors group"
              >
                <Globe className="h-5 w-5 text-primary" />
                <span className="group-hover:text-glow">suryasadanala.medium.com</span>
              </a>
              <a
                href="mailto:contact@suryasadanala.com"
                className="flex items-center gap-3 font-mono text-sm text-card-foreground hover:text-primary transition-colors group"
              >
                <Mail className="h-5 w-5 text-primary" />
                <span className="group-hover:text-glow">contact@suryasadanala.com</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-6 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">&gt;</span> © 2025 Surya Sadanala. All rights reserved.
          </div>
          <div className="font-mono text-xs text-muted-foreground">
            <span className="text-primary">STATUS:</span> <span className="text-secondary">ONLINE</span>
            <span className="inline-block w-2 h-2 bg-secondary rounded-full ml-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
