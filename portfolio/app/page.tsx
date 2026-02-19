"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  ChevronDown,
  Smartphone,
  Layers,
  Database,
  Code2,
  ExternalLink,
  Globe,
  FileText,
  Check,
} from "lucide-react";

// --- TYPES ---
type Language = "en" | "it";

// --- TRANSLATIONS ---
const translations = {
  en: {
    nav: {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cv: "Download CV",
    },
    hero: {
      available: "Available for work",
      role: "Junior iOS Developer",
      tagline: "iOS Developer | Swift & SwiftUI Enthusiast",
      cta_contact: "Contact Me",
      cta_work: "View Work",
    },
    about: {
      title: "About Me",
      bio: "Enthusiastic and detail-oriented Junior iOS Developer with a strong foundation in Swift and UIKit. I combine technical skills with problem-solving abilities to contribute to the full app development lifecycle, from concept to App Store deployment.",
      background_title: "Background",
      background_role: "Web Developer",
      background_period: "Past",
      background_desc:
        "Gained solid experience in web technologies, teamwork, and software development lifecycles before transitioning to mobile development.",
      tech_stack: "Tech Stack",
    },
    projects: {
      title: "Selected Projects",
      iNote: {
        description:
          "A fully functional noting app that replicates the Apple Notes UI. Created to master PencilKit and Scribble API integrations.",
      },
      tequila: {
        description:
          "A social drink selector app featuring a database of cocktails and in-app mini-games to enjoy nights out with friends.",
      },
      writeIt: {
        title: "Write It!",
        description:
          "A habit planner app that helps users build and maintain a productive routine through structured tracking and reminders.",
        tags: ["SwiftUI", "CoreData", "Notifications"],
      },
      empathy: {
        title: "Empathy",
        description:
          "An educational app simulating specific disabilities (dyslexia, hand tremors, protanopia, tinnitus, ADHD) to foster understanding and accessibility awareness.",
        tags: ["SwiftUI", "Accessibility", "Haptics", "AVFoundation"],
      },
    },
    contact: {
      title: "Let's work together.",
      subtitle:
        "I'm currently open to new opportunities. Feel free to reach out via LinkedIn or Email.",
      footer: `© ${new Date().getFullYear()} Gianluca Auriemma. All rights reserved.`,
    },
  },
  it: {
    nav: {
      about: "Chi Sono",
      projects: "Progetti",
      contact: "Contatti",
      cv: "Scarica CV",
    },
    hero: {
      available: "Disponibile per nuovi progetti",
      role: "Junior iOS Developer",
      tagline: "Sviluppatore iOS | Appassionato di Swift & SwiftUI",
      cta_contact: "Contattami",
      cta_work: "I Miei Lavori",
    },
    about: {
      title: "Chi Sono",
      bio: "Sviluppatore iOS Junior entusiasta e attento ai dettagli con una solida base in Swift e UIKit. Unisco competenze tecniche e capacità di problem-solving per contribuire all'intero ciclo di vita dello sviluppo delle app, dall'ideazione al rilascio sull'App Store.",
      background_title: "Background",
      background_role: "Sviluppatore Web",
      background_period: "Passato",
      background_desc:
        "Ho acquisito solida esperienza nelle tecnologie web, nel lavoro di squadra e nei cicli di vita dello sviluppo software prima di passare allo sviluppo mobile.",
      tech_stack: "Competenze Tecniche",
    },
    projects: {
      title: "Progetti Selezionati",
      iNote: {
        description:
          "Un'app per prendere appunti completamente funzionale che replica l'interfaccia utente di Apple Notes. Creata per padroneggiare le integrazioni di PencilKit e Scribble API.",
      },
      tequila: {
        description:
          "Un'app selettore di drink sociale con un database di cocktail e mini-giochi in-app per divertirsi con gli amici.",
      },
      writeIt: {
        title: "Write It!",
        description:
          "Un pianificatore di abitudini che aiuta gli utenti a costruire e mantenere una routine produttiva attraverso tracciamento strutturato e promemoria.",
        tags: ["SwiftUI", "CoreData", "Notifications"],
      },
      empathy: {
        title: "Empathy",
        description:
          "Un'app educativa che simula disabilità specifiche (dislessia, tremore delle mani, protanopia, acufene, ADHD) per favorire la comprensione e la consapevolezza sull'accessibilità.",
        tags: ["SwiftUI", "Accessibility", "Haptics", "AVFoundation"],
      },
    },
    contact: {
      title: "Lavoriamo insieme.",
      subtitle:
        "Sono attualmente disponibile per nuove opportunità. Sentiti libero di contattarmi via LinkedIn o Email.",
      footer: `© ${new Date().getFullYear()} Gianluca Auriemma. Tutti i diritti riservati.`,
    },
  },
};

// --- DATA CONFIGURATION ---
const getPortfolioData = (lang: Language) => {
  const t = translations[lang];
  return {
    personal: {
      name: "Gianluca Auriemma",
      email: "gianluca.auriemma4@gmail.com",
      linkedin: "https://www.linkedin.com/in/gianluca-auriemma-b1b65429b",
      github: "https://github.com/gianlucaauriemma",
      cvLink: "#", // Placeholder for CV link
    },
    skills: [
      { name: "Swift & Xcode", icon: Code2 },
      { name: "SwiftUI & UIKit", icon: Layers },
      { name: "Core Data & SwiftData", icon: Database },
      { name: "MVC & MVVM Patterns", icon: Layers },
      { name: "REST APIs & JSON", icon: Database },
      { name: "Git & Version Control", icon: Code2 },
      { name: "Auto Layout", icon: Smartphone },
      { name: "Unit & UI Testing", icon: Code2 },
      // Web Skills
      { name: "React", icon: Code2 },
      { name: "Vue.js", icon: Code2 },
      { name: "Angular", icon: Code2 },
      { name: "Java", icon: Code2 },
      { name: "PHP", icon: Database },
      { name: "Python", icon: Code2 },
    ],
    projects: [
      {
        title: t.projects.writeIt.title,
        description: t.projects.writeIt.description,
        tags: t.projects.writeIt.tags,
        link: "#", // Add link if available
      },
      {
        title: t.projects.empathy.title,
        description: t.projects.empathy.description,
        tags: t.projects.empathy.tags,
        link: "#", // Add link if available
      },
      {
        title: "iNote",
        description: t.projects.iNote.description,
        tags: ["SwiftUI", "SwiftData", "PencilKit", "ScribbleAPI"],
        link: "https://github.com/gianlucaauriemma/iNote.git",
      },
      {
        title: "Tequila",
        description: t.projects.tequila.description,
        tags: ["SwiftUI", "UserDefaults", "Game Logic"],
        link: "https://github.com/gianlucaauriemma/Tequila.git",
      },
    ],
  };
};

// --- REUSABLE COMPONENTS ---

const Section = ({
  children,
  id,
  className = "",
}: {
  children: React.ReactNode;
  id?: string;
  className?: string;
}) => (
  <section
    id={id}
    className={`py-20 px-6 md:px-12 max-w-6xl mx-auto ${className}`}
  >
    {children}
  </section>
);

const GlassCard = ({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`
    backdrop-blur-xl 
    bg-white/40 dark:bg-black/40 
    border border-white/20 dark:border-white/10 
    shadow-xl shadow-black/5 dark:shadow-black/20
    rounded-2xl p-6 
    transition-all duration-300 hover:scale-[1.02]
    ${className}
  `}
  >
    {children}
  </div>
);

const Badge = ({ text }: { text: string }) => (
  <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/5 dark:bg-white/10 text-black dark:text-white border border-black/5 dark:border-white/5">
    {text}
  </span>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SocialButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  label: string;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-3 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
    aria-label={label}
  >
    <Icon size={20} />
  </a>
);

// --- MAIN PAGE COMPONENT ---

export default function Portfolio() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<Language>("en");
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const t = translations[lang];
  const data = getPortfolioData(lang);

  const toggleLanguage = (newLang: Language) => {
    setLang(newLang);
    setIsLangMenuOpen(false);
  };

  return (
    <main className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-gray-100 selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300 font-sans">
      {/* Navbar Glassmorphism */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-4 backdrop-blur-md bg-white/60 dark:bg-black/60 border-b border-black/5 dark:border-white/5"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <span className="text-xl font-bold tracking-tighter">GA.</span>
          <div className="flex items-center gap-6 text-sm font-medium">
            <div className="hidden md:flex gap-6">
              <a href="#about" className="hover:opacity-60 transition-opacity">
                {t.nav.about}
              </a>
              <a
                href="#projects"
                className="hover:opacity-60 transition-opacity"
              >
                {t.nav.projects}
              </a>
              <a href="#contact" className="hover:opacity-60 transition-opacity">
                {t.nav.contact}
              </a>
            </div>

            {/* Language Picker */}
            <div className="relative">
              <button
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/5 dark:bg-white/10 hover:bg-black/10 dark:hover:bg-white/20 transition-colors"
              >
                <Globe size={14} />
                <span className="uppercase text-xs font-bold tracking-wide">
                  {lang}
                </span>
                <ChevronDown
                  size={12}
                  className={`transition-transform duration-200 ${
                    isLangMenuOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {isLangMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute right-0 top-full mt-2 w-32 bg-white dark:bg-black border border-black/10 dark:border-white/10 rounded-xl shadow-xl overflow-hidden backdrop-blur-xl"
                  >
                    <button
                      onClick={() => toggleLanguage("en")}
                      className="w-full flex items-center justify-between px-4 py-2 text-left hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs"
                    >
                      <span className="font-medium">English</span>
                      {lang === "en" && <Check size={12} />}
                    </button>
                    <button
                      onClick={() => toggleLanguage("it")}
                      className="w-full flex items-center justify-between px-4 py-2 text-left hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-xs"
                    >
                      <span className="font-medium">Italiano</span>
                      {lang === "it" && <Check size={12} />}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <Section className="min-h-screen flex flex-col justify-center pt-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            <span className="text-sm font-medium">{t.hero.available}</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight">
            {t.hero.role}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            {t.hero.tagline}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href={data.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              {t.hero.cta_contact}
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border border-black/20 dark:border-white/20 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              {t.hero.cta_work}
            </a>
            <a
              href={data.personal.cvLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 flex items-center gap-2 bg-transparent border border-black/20 dark:border-white/20 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              <FileText size={18} />
              {t.nav.cv}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
        >
          <ChevronDown className="opacity-50" />
        </motion.div>
      </Section>

      {/* About & Skills */}
      <Section id="about">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">{t.about.title}</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {t.about.bio}
            </p>

            {/* Background / Previous Experience Snippet */}
            <div className="mt-8 p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">
                {t.about.background_title}
              </h3>
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">
                    {t.about.background_role}
                  </span>
                  <span className="text-sm opacity-60">
                    {t.about.background_period}
                  </span>
                </div>
                <p className="text-sm opacity-70">{t.about.background_desc}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">{t.about.tech_stack}</h2>
            <div className="grid grid-cols-2 gap-4">
              {data.skills.map((skill, index) => (
                <GlassCard
                  key={index}
                  className="flex items-center gap-3 p-4 !rounded-xl"
                >
                  <skill.icon size={20} className="opacity-70" />
                  <span className="font-medium text-sm">{skill.name}</span>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <h2 className="text-3xl font-bold mb-12">{t.projects.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {data.projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col justify-between group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-black/5 dark:bg-white/10 rounded-xl">
                      <Smartphone size={24} />
                    </div>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, tIndex) => (
                    <Badge key={tIndex} text={tag} />
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Contact / Footer */}
      <Section id="contact" className="text-center py-32">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            {t.contact.subtitle}
          </p>

          <div className="flex justify-center gap-6">
            <SocialButton
              href={data.personal.linkedin}
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialButton
              href={data.personal.github}
              icon={Github}
              label="GitHub"
            />
            <SocialButton
              href={`mailto:${data.personal.email}`}
              icon={Mail}
              label="Email"
            />
          </div>

          <footer className="mt-20 text-sm opacity-50">
            {t.contact.footer}
          </footer>
        </motion.div>
      </Section>
    </main>
  );
}
