import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Terminal, ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "Ethical Hacker",
  "Penetration Tester",
  "Cyber Security Trainer",
  "Bug Hunter",
  "Digital Forensics Expert",
  "Public Speaker",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          setText(current.slice(0, text.length + 1));
          if (text.length === current.length) {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length === 0) {
            setIsDeleting(false);
            setRoleIndex((prev) => (prev + 1) % roles.length);
          }
        }
      },
      isDeleting ? 40 : 80
    );
    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      <div className="absolute inset-0 scanline pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-2 mb-6 font-mono text-sm text-muted-foreground">
            <Terminal className="h-4 w-4 text-primary" />
            <span className="text-primary">root@kali</span>
            <span>:~$</span>
            <span className="text-secondary">whoami</span>
          </div>

          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 glitch-text">
            <span className="text-primary text-glow">SURYA</span>
            <br />
            <span className="text-card-foreground">SADANALA</span>
          </h1>

          <div className="h-12 flex items-center font-mono text-lg md:text-2xl text-secondary mb-8">
            <ChevronRight className="h-5 w-5 mr-1 text-primary" />
            <span>{text}</span>
            <span className="animate-pulse ml-0.5 text-primary">█</span>
          </div>

          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Offensive Security Specialist & Cyber Security Trainer who has trained{" "}
            <span className="text-primary font-semibold">5000+</span> students.
            Breaking systems to make them stronger.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-display text-sm font-bold tracking-wider hover:bg-primary/90 transition-all duration-300 animate-pulse-glow"
            >
              INITIATE CONTACT
              <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-8 py-3 cyber-border text-primary font-display text-sm font-bold tracking-wider hover:bg-primary/10 transition-all duration-300"
            >
              VIEW SERVICES
            </a>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl"
        >
          {[
            { label: "Students Trained", value: "5000+" },
            { label: "Bug Bounties", value: "100+" },
            { label: "Security Audits", value: "200+" },
            { label: "Years Experience", value: "5+" },
          ].map((stat) => (
            <div key={stat.label} className="cyber-border p-4 bg-card/50 backdrop-blur-sm">
              <div className="font-display text-2xl md:text-3xl font-bold text-primary text-glow">{stat.value}</div>
              <div className="font-mono text-xs text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
