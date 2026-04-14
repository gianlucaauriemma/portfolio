"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Mail, Globe, Check, FileText } from "lucide-react";

type Language = "en" | "it";

const translations = {
  en: {
    nav: {
      quickLinks: "Quick Links",
      based: "Based in Naples",
      role: "iOS & Frontend Developer",
    },
    hero: {
      available: "Available for work",
      headline1: "Clean Code and",
      headline2: "Apps that Ship",
      headline3: "and Scale.",
      ticker: ["iOS Development", "Swift & SwiftUI", "Vue.js", "Angular", "React", "Full Stack"],
      label_left: "© GIANLUCA AURIEMMA",
      label_center: "(GA — 01)",
      label_right: "DIGITAL CRAFT",
    },
    about: {
      sectionLabel_left: "© ABOUT ME",
      sectionLabel_center: "(GA — 02)",
      sectionLabel_right: "DEVELOPER",
      title: "About Me",
      cols: ["Detail-Oriented", "Full Lifecycle", "Bilingual Code"],
      headline: "2+ years of mobile craft, sharp interfaces, and relentless development discipline.",
      body: "Enthusiastic iOS & Frontend Developer with a strong foundation in Swift, UIKit, and modern web frameworks. I combine technical skills with problem-solving to contribute from concept to App Store deployment and pixel-perfect web interfaces.",
      cta: "CONTACT",
      prevRole: "Previously",
      prevDesc: "Full Stack Developer at Mediacom, Imperium Solutions & Dotit — building products with Vue.js, Angular, Nuxt.js, Tailwind CSS and Java EE.",
    },
    projects: {
      sectionLabel_left: "© FEATURED PROJECTS",
      sectionLabel_center: "(GA — 03)",
      sectionLabel_right: "CREATIVE DEVELOPMENT",
      title: "Featured Works",
      subtitle: "Every project is a chance to blend design and development, shaping ideas into",
      subtitleBold: "sleek digital realities — built with",
      subtitleEnd: "intent, speed, and visual clarity.",
      cta: "SEE WORKS",
      items: [
        {
          id: "01",
          title: "Write It!",
          tags: ["SwiftUI", "SwiftData", "CloudKit", "Notifications"],
          description: "A habit planner app that helps users build and maintain a productive routine through structured tracking and reminders.",
          // testflight: "https://testflight.apple.com/join/ZBgw3Wmq",
          appStore: "https://apps.apple.com/it/app/write-it/id6758155251?l=en-GB"
        },
        {
          id: "02",
          title: "CashIt!",
          tags: ["SwiftUI", "SwiftData", "SwiftCharts", "Foundation Models"],
          description: "Track expenses and income with easy-to-read charts and an integrated AI assistant to help achieve financial goals.",
          appStore: "https://apps.apple.com/it/app/cashit/id6760191917?l=en-GB",
        },
        {
          id: "03",
          title: "Empathy",
          tags: ["SwiftUI", "Accessibility", "Haptics", "AVFoundation"],
          description: "Educational app simulating disabilities (dyslexia, tremors, protanopia, tinnitus, ADHD) to foster accessibility awareness.",
        },
      ],
    },
    skills: {
      sectionLabel_left: "© SKILLS",
      sectionLabel_center: "(GA — 04)",
      sectionLabel_right: "TECH STACK",
      title: "Skills",
      cols: ["No.", "Skill", "Description"],
      items: [
        { id: "01", name: "Swift & SwiftUI", desc: "Native iOS development with modern declarative UI, animations, and full Apple ecosystem integration." },
        { id: "02", name: "UIKit & Xcode", desc: "Component-based development, Auto Layout, and the full Xcode toolchain for production-ready apps." },
        { id: "03", name: "SwiftData & CloudKit", desc: "Local-first persistence with cloud sync — offline-capable apps that scale across Apple devices." },
        { id: "04", name: "Vue.js & Nuxt.js", desc: "Reactive frontend development with performant SPAs and SSR applications using Tailwind CSS." },
        { id: "05", name: "Angular", desc: "Enterprise-grade frontend applications with component architecture, routing, and RxJS." },
        { id: "06", name: "Java EE & REST APIs", desc: "Backend services, API design, and full-stack integration across web and mobile platforms." },
      ],
    },
    experience: {
      sectionLabel_left: "© EXPERIENCE",
      sectionLabel_center: "(GA — 05)",
      sectionLabel_right: "DIGITAL CRAFT",
      title: "Experience",
      cols: ["Company", "Period", "Role", "Location"],
      items: [
        { company: "Mediacom S.r.l.", period: "Sep 2023 – May 2024", role: "Full Stack Developer", location: "Teverola" },
        { company: "Imperium Solutions S.r.l.s.", period: "Jun 2024 – Oct 2024", role: "Frontend Developer", location: "Naples" },
        { company: "Dotit S.r.l.", period: "Oct 2024", role: "Frontend Developer", location: "Naples" },
      ],
    },
    contact: {
      sectionLabel_left: "© CONTACT",
      sectionLabel_center: "(GA — 06)",
      sectionLabel_right: "GET IN TOUCH",
      title: "Contact",
      cta: "GET IN TOUCH",
      cv: "Download CV",
    },
  },
  it: {
    nav: {
      quickLinks: "Link Rapidi",
      based: "Based in Napoli",
      role: "iOS & Frontend Developer",
    },
    hero: {
      available: "Disponibile per nuovi progetti",
      headline1: "Codice Pulito e",
      headline2: "App che Arrivano",
      headline3: "allo Store.",
      ticker: ["Sviluppo iOS", "Swift & SwiftUI", "Vue.js", "Angular", "React", "Full Stack"],
      label_left: "© GIANLUCA AURIEMMA",
      label_center: "(GA — 01)",
      label_right: "DIGITAL CRAFT",
    },
    about: {
      sectionLabel_left: "© CHI SONO",
      sectionLabel_center: "(GA — 02)",
      sectionLabel_right: "SVILUPPATORE",
      title: "Chi Sono.",
      cols: ["Precisione", "Ciclo Completo", "Codice Bilingue"],
      headline: "2+ anni di sviluppo mobile, interfacce curate e disciplina creativa senza compromessi.",
      body: "Sviluppatore iOS e Frontend entusiasta con una solida base in Swift, UIKit e framework web moderni. Unisco competenze tecniche e problem-solving per contribuire dall'ideazione al rilascio sull'App Store e a interfacce web curate.",
      cta: "CONTATTAMI",
      prevRole: "Precedentemente",
      prevDesc: "Full Stack Developer presso Mediacom, Imperium Solutions e Dotit — sviluppo di prodotti con Vue.js, Angular, Nuxt.js, Tailwind CSS e Java EE.",
    },
    projects: {
      sectionLabel_left: "© PROGETTI SELEZIONATI",
      sectionLabel_center: "(GA — 03)",
      sectionLabel_right: "SVILUPPO CREATIVO",
      title: "Lavori in Evidenza",
      subtitle: "Ogni progetto è un'opportunità di fondere design e sviluppo, trasformando idee in",
      subtitleBold: "realtà digitali curate — costruite con",
      subtitleEnd: "intenzione, velocità e chiarezza visiva.",
      cta: "VEDI LAVORI",
      items: [
        {
          id: "01",
          title: "Write It!",
          tags: ["SwiftUI", "SwiftData", "CloudKit", "Notifiche"],
          description: "Un pianificatore di abitudini per costruire e mantenere una routine produttiva attraverso tracciamento strutturato e promemoria.",
          testflight: "https://testflight.apple.com/join/ZBgw3Wmq",
        },
        {
          id: "02",
          title: "CashIt!",
          tags: ["SwiftUI", "SwiftData", "SwiftCharts", "Foundation Models"],
          description: "Tieni traccia di spese ed entrate con grafici chiari e un assistente AI integrato per raggiungere i tuoi obiettivi finanziari.",
          appStore: "https://apps.apple.com/it/app/cashit/id6760191917?l=en-GB",
        },
        {
          id: "03",
          title: "Empathy",
          tags: ["SwiftUI", "Accessibilità", "Haptics", "AVFoundation"],
          description: "App educativa che simula disabilità (dislessia, tremore, protanopia, acufene, ADHD) per promuovere la consapevolezza sull'accessibilità.",
        },
      ],
    },
    skills: {
      sectionLabel_left: "© COMPETENZE",
      sectionLabel_center: "(GA — 04)",
      sectionLabel_right: "TECH STACK",
      title: "Competenze.",
      cols: ["No.", "Competenza", "Descrizione"],
      items: [
        { id: "01", name: "Swift & SwiftUI", desc: "Sviluppo iOS nativo con UI dichiarativa, animazioni e integrazione completa nell'ecosistema Apple." },
        { id: "02", name: "UIKit & Xcode", desc: "Sviluppo a componenti, Auto Layout e toolchain Xcode completa per app pronte alla produzione." },
        { id: "03", name: "SwiftData & CloudKit", desc: "Persistenza locale con sync cloud — app offline-first che scalano su tutti i dispositivi Apple." },
        { id: "04", name: "Vue.js & Nuxt.js", desc: "Sviluppo frontend reattivo con SPA performanti e applicazioni SSR con Tailwind CSS." },
        { id: "05", name: "Angular", desc: "Applicazioni frontend enterprise con architettura a componenti, routing e RxJS." },
        { id: "06", name: "Java EE & REST API", desc: "Servizi backend, progettazione API e integrazione full-stack tra piattaforme web e mobile." },
      ],
    },
    experience: {
      sectionLabel_left: "© ESPERIENZA",
      sectionLabel_center: "(GA — 05)",
      sectionLabel_right: "DIGITAL CRAFT",
      title: "Esperienza.",
      cols: ["Azienda", "Periodo", "Ruolo", "Sede"],
      items: [
        { company: "Mediacom S.r.l.", period: "Set 2023 – Mag 2024", role: "Full Stack Developer", location: "Teverola" },
        { company: "Imperium Solutions S.r.l.s.", period: "Giu 2024 – Ott 2024", role: "Frontend Developer", location: "Napoli" },
        { company: "Dotit S.r.l.", period: "Ott 2024", role: "Frontend Developer", location: "Napoli" },
      ],
    },
    contact: {
      sectionLabel_left: "© CONTATTI",
      sectionLabel_center: "(GA — 06)",
      sectionLabel_right: "METTITI IN CONTATTO",
      title: "Contatti",
      cta: "METTITI IN CONTATTO",
      cv: "Scarica CV",
    },
  },
};

// ── Ticker (sottile, solo per la hero) ──
function Ticker({ items }: { items: string[] }) {
  const text = items.join("  ·  ") + "  ·  ";
  return (
    <div className="overflow-hidden border-t border-b border-white/10 py-3">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {[...Array(6)].map((_, i) => (
          <span key={i} className="text-xs font-medium tracking-widest uppercase text-white/35 mr-16">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

// ── Section label bar ──
function SectionBar({ left, center, right }: { left: string; center: string; right: string }) {
  return (
    <div className="flex justify-between items-center text-[9px] uppercase tracking-widest text-white/25 border-t border-white/10 py-3">
      <span className="hidden sm:block">{left}</span>
      <span>{center}</span>
      <span className="hidden sm:block">{right}</span>
    </div>
  );
}

export default function Portfolio() {
  const [lang, setLang] = useState<Language>("en");
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const t = translations[lang];
  const cvLink = lang === "en" ? "/Auriemma_Gianluca_Translation.pdf" : "/Auriemma_Gianluca_Curriculum.pdf";

  return (
    <main
      className="min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black"
      style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}
    >
      {/* ── NAVBAR ── */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#0a0a0a]/90 backdrop-blur-sm" : "bg-transparent"}`}>
        <div className="grid grid-cols-3 items-center px-5 md:px-10 py-4 border-b border-white/10">

          {/* Logo */}
          <a href="#" className="text-sm font-bold tracking-tight">GA</a>

          {/* Nav links — nascosti su mobile */}
          <div className="hidden md:block text-center">
            <div className="text-[9px] uppercase tracking-widest text-white/25 mb-1">{t.nav.quickLinks}</div>
            <div className="flex justify-center gap-4 text-xs text-white/55">
              {[
                { href: "#about",      en: "About",      it: "Chi Sono" },
                { href: "#projects",   en: "Projects",   it: "Progetti" },
                { href: "#experience", en: "Experience", it: "Esperienza" },
                { href: "#contact",    en: "Contact",    it: "Contatti" },
              ].map((link, i, arr) => (
                <React.Fragment key={link.href}>
                  <a href={link.href} className="relative group text-white/55 hover:text-white transition-colors duration-200">
                    {lang === "en" ? link.en : link.it}
                    <span className="absolute left-0 -bottom-0.5 h-px w-0 bg-white group-hover:w-full transition-all duration-300 ease-out" />
                  </a>
                  {i < arr.length - 1 && <span className="text-white/15">,</span>}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Destra: location + lang switcher */}
          <div className="flex flex-col items-end gap-1">
            <div className="hidden md:block text-[10px] text-white/40">{t.nav.based}</div>
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-white/35 hover:text-white transition-colors"
              >
                <Globe size={10} />
                {lang}
              </button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="absolute right-0 top-full mt-1 bg-[#111] border border-white/10 rounded-md overflow-hidden z-50 min-w-[110px]"
                  >
                    {(["en", "it"] as Language[]).map((l) => (
                      <button
                        key={l}
                        onClick={() => { setLang(l); setIsLangOpen(false); }}
                        className="flex items-center justify-between gap-4 px-4 py-2 text-[10px] uppercase tracking-widest hover:bg-white/5 w-full text-left"
                      >
                        <span>{l === "en" ? "English" : "Italiano"}</span>
                        {lang === l && <Check size={8} />}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="pt-24 md:pt-28 pb-0 px-5 md:px-10">
        <SectionBar left={t.hero.label_left} center={t.hero.label_center} right={t.hero.label_right} />

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 pt-8 pb-8 md:items-end">

          {/* Headline */}
          <div>
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 border border-white/15 rounded-full text-[10px] text-white/45 uppercase tracking-widest">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              {t.hero.available}
            </div>
            <h1
              className="font-black leading-[1.05] tracking-tight text-white"
              style={{ fontSize: "clamp(2.4rem, 6vw, 5rem)" }}
            >
              {t.hero.headline1}<br />
              {t.hero.headline2}<br />
              {t.hero.headline3}
            </h1>
          </div>

          {/* Tagline + CTA */}
          <div className="flex flex-col gap-5 md:items-end md:justify-end md:pb-1">
            <p className="text-white/35 text-sm max-w-xs md:text-right leading-relaxed">
              iOS & Frontend Developer — Swift, SwiftUI, Vue, Angular, React. Based in Naples, open worldwide.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-5 py-2.5 border border-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              >
                {t.about.cta}
              </a>
              <a
                href={cvLink}
                download
                className="px-5 py-2.5 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white/45 hover:border-white hover:text-white transition-colors flex items-center gap-2"
              >
                <FileText size={12} />
                {t.contact.cv}
              </a>
            </div>
          </div>
        </div>

        <Ticker items={t.hero.ticker} />

        {/* Nome grande — statico, nessun marquee */}
        <div className="py-6 md:py-10 overflow-hidden">
          <p
            className="font-black tracking-tight text-white select-none"
            style={{ fontSize: "clamp(2.8rem, 9vw, 8.5rem)", lineHeight: 1 }}
          >
            Gianluca Auriemma
          </p>
        </div>

        <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/20 border-t border-white/10 py-3">
          <span>© GIANLUCA AURIEMMA</span>
          <span>(GA — 02)</span>
          <span className="hidden sm:block">DIGITAL DESIGN</span>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className="px-5 md:px-10 pt-2">
        <SectionBar left={t.about.sectionLabel_left} center={t.about.sectionLabel_center} right={t.about.sectionLabel_right} />

        <h2
          className="font-black tracking-tight leading-none mt-6 mb-8 text-white"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
        >
          {t.about.title}
        </h2>

        {/* Due colonne — stacked su mobile, side-by-side su desktop, STESSO top alignment */}
        <div className="grid md:grid-cols-2 gap-5 pb-14 items-start">

          {/* Sinistra: bio card */}
          <div className="border border-white/10 rounded-xl overflow-hidden">
            <div className="grid grid-cols-3 border-b border-white/10">
              {t.about.cols.map((c, i) => (
                <div key={i} className={`text-[9px] uppercase tracking-widest text-white/25 px-4 py-3 ${i < 2 ? "border-r border-white/10" : ""}`}>
                  {c}
                </div>
              ))}
            </div>
            <div className="px-4 py-6">
              <p className="text-base font-bold leading-snug mb-3 text-white">
                {t.about.headline}
              </p>
              <p className="text-sm text-white/45 leading-relaxed">{t.about.body}</p>
            </div>
          </div>

          {/* Destra: due card — allineate in cima come la sinistra, NO padding-top extra */}
          <div className="flex flex-col gap-4">
            <div className="border border-white/10 rounded-xl p-5">
              <div className="text-[9px] uppercase tracking-widest text-white/25 mb-2">{t.about.prevRole}</div>
              <p className="text-sm text-white/50 leading-relaxed">{t.about.prevDesc}</p>
            </div>
            <div className="border border-white/10 rounded-xl p-5">
              <div className="text-[9px] uppercase tracking-widest text-white/25 mb-3">Contact</div>
              <div className="flex flex-wrap gap-2">
                <a href="https://www.linkedin.com/in/gianluca-auriemma-b1b65429b" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full text-xs text-white/45 hover:text-white hover:border-white transition-colors">
                  <Linkedin size={11} /> LinkedIn
                </a>
                <a href="mailto:gianluca.auriemma4@gmail.com"
                  className="flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full text-xs text-white/45 hover:text-white hover:border-white transition-colors">
                  <Mail size={11} /> Email
                </a>
                <a href="https://github.com/gianlucaauriemma" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-3 py-1.5 border border-white/15 rounded-full text-xs text-white/45 hover:text-white hover:border-white transition-colors">
                  <Github size={11} /> GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" className="px-5 md:px-10 pt-2">
        <SectionBar left={t.projects.sectionLabel_left} center={t.projects.sectionLabel_center} right={t.projects.sectionLabel_right} />

        <h2
          className="font-black tracking-tight leading-none mt-6 mb-3 text-white"
          style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)" }}
        >
          {t.projects.title}
        </h2>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <p className="text-sm text-white/45 leading-relaxed max-w-md">
            {t.projects.subtitle} <strong className="text-white/70">{t.projects.subtitleBold}</strong> {t.projects.subtitleEnd}
          </p>
          <a href="#contact" className="self-start md:self-auto px-5 py-2.5 border border-white rounded-full text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-colors shrink-0">
            {t.projects.cta}
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/8 border border-white/10 rounded-2xl overflow-hidden mb-10">
          {t.projects.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.35 }}
              className={`bg-[#0f0f0f] p-6 flex flex-col gap-4 hover:bg-[#141414] transition-colors ${i === 2 ? "md:col-span-2" : ""}`}
            >
              <div className="flex justify-between items-start gap-3">
                <span className="text-[10px] uppercase tracking-widest text-white/20">({project.id})</span>
                <div className="flex gap-1.5 flex-wrap justify-end">
                  {project.tags.map((tag, ti) => (
                    <span key={ti} className="text-[9px] px-2 py-0.5 border border-white/10 rounded-full text-white/30 uppercase tracking-widest">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-black tracking-tight leading-none">{project.title}</h3>
              <p className="text-sm text-white/40 leading-relaxed flex-1">{project.description}</p>
              <div className="flex gap-2 flex-wrap mt-1">
                {"testflight" in project && project.testflight && (
                  <a href={project.testflight} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-1.5 border border-white/15 rounded-full text-xs font-semibold text-white/45 hover:text-white hover:border-white transition-colors uppercase tracking-widest">
                    TestFlight ↗
                  </a>
                )}
                {"appStore" in project && project.appStore && (
                  <a href={project.appStore} target="_blank" rel="noopener noreferrer"
                    className="px-4 py-1.5 border border-white/15 rounded-full text-xs font-semibold text-white/45 hover:text-white hover:border-white transition-colors uppercase tracking-widest">
                    App Store ↗
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section id="skills" className="px-5 md:px-10 pt-2">
        <SectionBar left={t.skills.sectionLabel_left} center={t.skills.sectionLabel_center} right={t.skills.sectionLabel_right} />

        <h2
          className="font-black tracking-tight leading-none mt-6 mb-6 text-white"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
        >
          {t.skills.title}
        </h2>

        <div className="hidden md:grid grid-cols-[60px_1fr_2fr] border-t border-white/10">
          {t.skills.cols.map((c, i) => (
            <div key={i} className="text-[9px] uppercase tracking-widest text-white/25 py-2">{c}</div>
          ))}
        </div>

        <div className="border-t border-white/10">
          {t.skills.items.map((skill, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.3 }}
              className="flex flex-col md:grid md:grid-cols-[60px_1fr_2fr] gap-0.5 md:gap-10 border-b border-white/10 py-4 md:py-5 hover:bg-white/[0.02] transition-colors"
            >
              <span className="text-white/20 text-xs">{skill.id}</span>
              <span className="font-bold text-sm md:text-base">{skill.name}</span>
              <span className="text-xs md:text-sm text-white/38 leading-relaxed">{skill.desc}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── EXPERIENCE ── */}
      <section id="experience" className="px-5 md:px-10 pt-10">
        <SectionBar left={t.experience.sectionLabel_left} center={t.experience.sectionLabel_center} right={t.experience.sectionLabel_right} />

        <h2
          className="font-black tracking-tight leading-none mt-6 mb-6 text-white"
          style={{ fontSize: "clamp(2.8rem, 7vw, 6rem)" }}
        >
          {t.experience.title}
        </h2>

        <div className="hidden md:grid grid-cols-4 border-t border-white/10">
          {t.experience.cols.map((c, i) => (
            <div key={i} className="text-[9px] uppercase tracking-widest text-white/25 py-2">{c}</div>
          ))}
        </div>

        <div className="border-t border-white/10">
          {t.experience.items.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.3 }}
              className="border-b border-white/10 py-5 hover:bg-white/[0.02] transition-colors"
            >
              {/* Mobile */}
              <div className="flex flex-col gap-1 md:hidden">
                <span className="font-bold text-sm">{exp.company}</span>
                <span className="text-xs text-white/40">{exp.role} · {exp.period} · {exp.location}</span>
              </div>
              {/* Desktop */}
              <div className="hidden md:grid grid-cols-4">
                <span className="font-bold text-sm">{exp.company}</span>
                <span className="text-white/38 text-sm">{exp.period}</span>
                <span className="text-sm">{exp.role}</span>
                <span className="text-white/38 text-sm text-right">{exp.location}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className="px-5 md:px-10 pt-10">
        <SectionBar left={t.contact.sectionLabel_left} center={t.contact.sectionLabel_center} right={t.contact.sectionLabel_right} />

        <div className="py-16 md:py-24 flex flex-col items-center text-center gap-8">
          <h2
            className="font-black tracking-tight leading-none text-white"
            style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
          >
            {t.contact.title}
          </h2>
          <a
            href="mailto:gianluca.auriemma4@gmail.com"
            className="px-8 py-3.5 border-2 border-white rounded-full text-xs font-black uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
          >
            {t.contact.cta}
          </a>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/gianluca-auriemma-b1b65429b" target="_blank" rel="noopener noreferrer"
              className="p-3 border border-white/15 rounded-full hover:border-white transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="https://github.com/gianlucaauriemma" target="_blank" rel="noopener noreferrer"
              className="p-3 border border-white/15 rounded-full hover:border-white transition-colors">
              <Github size={16} />
            </a>
            <a href="mailto:gianluca.auriemma4@gmail.com"
              className="p-3 border border-white/15 rounded-full hover:border-white transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>

        <div className="flex justify-between text-[9px] uppercase tracking-widest text-white/20 border-t border-white/10 py-4">
          <span>© {new Date().getFullYear()} Gianluca Auriemma</span>
          <span>(GA — END)</span>
          <span className="hidden sm:block">ALL RIGHTS RESERVED</span>
        </div>
      </section>
    </main>
  );
}