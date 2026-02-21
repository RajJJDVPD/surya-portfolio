import { motion } from "framer-motion";
import { ShieldCheck, Search, GraduationCap, FileSearch, Globe, Lock } from "lucide-react";
import servicePentest from "@/assets/service-pentest.jpg";
import serviceVuln from "@/assets/service-vuln.jpg";
import serviceTraining from "@/assets/service-training.jpg";
import serviceForensics from "@/assets/service-forensics.jpg";
import serviceBugbounty from "@/assets/service-bugbounty.jpg";
import serviceAudit from "@/assets/service-audit.jpg";

const services = [
  {
    icon: ShieldCheck,
    title: "Penetration Testing",
    desc: "Comprehensive security assessments of your infrastructure, web applications, and networks to identify vulnerabilities before attackers do.",
    image: servicePentest,
  },
  {
    icon: Search,
    title: "Vulnerability Assessment",
    desc: "Systematic evaluation of security weaknesses in your systems with detailed reports and remediation strategies.",
    image: serviceVuln,
  },
  {
    icon: GraduationCap,
    title: "Security Training",
    desc: "Hands-on cybersecurity training programs for individuals and organizations. From beginner to advanced offensive security.",
    image: serviceTraining,
  },
  {
    icon: FileSearch,
    title: "Digital Forensics",
    desc: "Investigation and analysis of digital evidence for incident response, data breaches, and cyber crime cases.",
    image: serviceForensics,
  },
  {
    icon: Globe,
    title: "Bug Bounty Consulting",
    desc: "Guidance on setting up and optimizing bug bounty programs. Active bug hunter with proven track record.",
    image: serviceBugbounty,
  },
  {
    icon: Lock,
    title: "Security Audits",
    desc: "End-to-end security auditing for compliance, risk assessment, and security posture improvement.",
    image: serviceAudit,
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 mb-3 font-mono text-sm text-muted-foreground">
            <span className="text-primary">[</span>03<span className="text-primary">]</span>
            <div className="h-px flex-1 bg-border max-w-[100px]" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary text-glow mb-12 tracking-wider">
            SERVICES
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group cyber-border bg-card/40 hover:bg-card/70 transition-all duration-500 relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative h-40 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 group-hover:scale-110 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-card" />
                <service.icon className="absolute bottom-3 left-4 h-8 w-8 text-primary group-hover:text-secondary transition-colors duration-300 drop-shadow-lg" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold text-card-foreground tracking-wide mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
