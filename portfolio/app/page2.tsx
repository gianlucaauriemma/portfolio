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
  Download,
  Plane,
} from "lucide-react";
import { SiAppstore } from "@icons-pack/react-simple-icons";

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
      tagline: "iOS Developer | Swift & SwiftUI Enthusiast | Web Developer",
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
        "Leveraging a versatile background in full-stack web development (React, Vue, Angular, Java, Python), I bring a holistic approach to software engineering. My experience in building complex systems and mastering development lifecycles now drives my passion for creating intuitive, high-performance iOS applications using Swift, SwiftUI, and advanced frameworks like CloudKit and SwiftData.",
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
        tags: ["SwiftUI", "SwiftData", "Notifications"],
      },
      empathy: {
        title: "Empathy",
        description:
          "An educational app simulating specific disabilities (dyslexia, hand tremors, protanopia, tinnitus, ADHD) to foster understanding and accessibility awareness.",
        tags: ["SwiftUI", "Accessibility", "Haptics", "AVFoundation"],
      },
      cashit:{
        title: "CashIt!",
        description: "An app to keep track of all the user's expenses and income with easy-to-read charts and an integrated AI assistant to help with saving and achieving their goals.",
        tags: ["SwiftUI", "SwiftData", "SwiftCharts", "Foundation Models", ]
      }
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
      tagline: "Sviluppatore iOS | Appassionato di Swift & SwiftUI | Web Developer",
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
        "Sfruttando un background versatile nello sviluppo web full-stack (React, Vue, Angular, Java, Python), porto un approccio olistico all'ingegneria del software. La mia esperienza nella costruzione di sistemi complessi e la padronanza dei cicli di sviluppo guidano ora la mia passione per la creazione di applicazioni iOS intuitive e performanti utilizzando Swift, SwiftUI e framework avanzati come CloudKit e SwiftData.",
      tech_stack: "Competenze Tecniche",
    },
    projects: {
      title: "Progetti Selezionati",
      iNote: {
        description:
          "Un'app per prendere appunti completamente funzionale che replica l'interfaccia utente di Apple Notes. Creata per padroneggiare le integrazioni di PencilKit e Scribble API.",
        tags: ["SwiftUI", "SwiftData", "PencilKit", "ScribbleAPI"],
      },
      tequila: {
        description:
          "Un'app selettore di drink sociale con un database di cocktail e mini-giochi in-app per divertirsi con gli amici.",
        tags: ["SwiftUI", "SwiftData", "UserDefaults", "Game Logic"],
      },
      writeIt: {
        title: "Write It!",
        description:
          "Un pianificatore di abitudini che aiuta gli utenti a costruire e mantenere una routine produttiva attraverso tracciamento strutturato e promemoria.",
        tags: ["SwiftUI", "SwiftData", "CloudKit", "Notifications"],
      },
      empathy: {
        title: "Empathy",
        description:
          "Un'app educativa che simula disabilità specifiche (dislessia, tremore delle mani, protanopia, acufene, ADHD) per favorire la comprensione e la consapevolezza sull'accessibilità.",
        tags: ["SwiftUI", "Accessibility", "Haptics", "AVFoundation"],
      },
      cashit:{
        title: "CashIt!",
        description: "Un'app per tenere traccia di tutte le spese ed entrate dell'utente con grafici comodi da leggere e un assistente AI integrato per aiutare nel risparmio e per riuscire a raggiungere i propri obiettivi.",
        tags: ["SwiftUI", "SwiftData", "SwiftCharts", "Foundation Models", ]
      }
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
      cvLink: lang === "en" ? "/Auriemma_Gianluca_Translation.pdf" : "/Auriemma_Gianluca_Curriculum.pdf",
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
        link: "#",
        testflight: "https://testflight.apple.com/join/ZBgw3Wmq",
        // appStore: "https://apps.apple.com/",
      },
      {
        title: t.projects.empathy.title,
        description: t.projects.empathy.description,
        tags: t.projects.empathy.tags,
        link: "#",
        // testflight: "#",
      },
      {
        title: "iNote",
        description: t.projects.iNote.description,
        tags: ["SwiftUI", "SwiftData", "PencilKit", "ScribbleAPI"],
        link: "https://github.com/gianlucaauriemma/iNote.git",
      },
      {
        title: t.projects.cashit.title,
        description: t.projects.cashit.description,
        tags: t.projects.cashit.tags,
        link: "#",
        // testflight: "#",
        appStore: "https://apps.apple.com/it/app/cashit/id6760191917?l=en-GB",
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

const TestFlightIcon = ({ size = 20, className = "" }: { size?: number, className?: string }) => (
  <svg height={size} width={size} viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" className={className}>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <image id="url" x="0" y="0" width="512" height="512" xlinkHref="data:image/png;base64,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" />
    </g>
  </svg>
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
              download
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
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {data.projects.map((project: any, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <GlassCard className="h-full flex flex-col group">
                <div>
                  <div className="flex justify-between items-start mb-4">
                    <div className="p-3 bg-black/5 dark:bg-white/10 rounded-xl">
                      <Smartphone size={24} />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-col gap-5 mt-auto pt-4">
                  <div className="flex flex-wrap gap-2">
                    {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
                    {project.tags.map((tag: any, tIndex: any) => (
                      <Badge key={tIndex} text={tag} />
                    ))}
                  </div>

                  {/* Move links here, visible always, hover to white accent */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.testflight && (
                      <a
                        href={project.testflight}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-black/5 dark:bg-white/10 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors font-semibold shadow-sm"
                        title="TestFlight"
                      >
                        <TestFlightIcon size={16} />
                        TestFlight
                      </a>
                    )}
                    {project.appStore && (
                      <a
                        href={project.appStore}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-black/5 dark:bg-white/10 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors font-semibold shadow-sm"
                        title="App Store"
                      >
                        <SiAppstore size={16} />
                        App Store
                      </a>
                    )}
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm rounded-lg bg-black/5 dark:bg-white/10 hover:bg-white hover:text-black dark:hover:bg-white dark:hover:text-black transition-colors font-semibold shadow-sm"
                        title="GitHub"
                      >
                        <Github size={16} />
                        GitHub Repo
                      </a>
                    )}
                  </div>
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
