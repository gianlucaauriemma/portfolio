"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
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
  Moon,
  Sun,
} from "lucide-react";

// --- DATA CONFIGURATION ---
// Qui puoi modificare facilmente i testi in futuro
const portfolioData = {
  personal: {
    name: "Gianluca Auriemma",
    role: "Junior iOS Developer",
    tagline: "iOS Developer | Swift & SwiftUI Enthusiast",
    bio: "Enthusiastic and detail-oriented Junior iOS Developer with a strong foundation in Swift and UIKit. I combine technical skills with problem-solving abilities to contribute to the full app development lifecycle, from concept to App Store deployment.",
    email: "gianluca.auriemma4@gmail.com",
    linkedin: "https://www.linkedin.com/in/gianluca-auriemma-b1b65429b",
    github: "https://github.com/gianlucaauriemma",
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
  ],
  projects: [
    {
      title: "iNote",
      description:
        "A fully functional noting app that replicates the Apple Notes UI. Created to master PencilKit and Scribble API integrations.",
      tags: ["SwiftUI", "SwiftData", "PencilKit", "ScribbleAPI"],
      link: "https://github.com/gianlucaauriemma/iNote.git",
    },
    {
      title: "Tequila",
      description:
        "A social drink selector app featuring a database of cocktails and in-app mini-games to enjoy nights out with friends.",
      tags: ["SwiftUI", "UserDefaults", "Game Logic"],
      link: "https://github.com/gianlucaauriemma/Tequila.git",
    },
  ],
  experience: [
    {
      role: "Web Developer",
      company: "Previous Experience",
      period: "Past",
      description:
        "Gained solid experience in web technologies, teamwork, and software development lifecycles before transitioning to mobile development.",
    },
  ],
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

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="flex gap-6 text-sm font-medium">
            <a href="#about" className="hover:opacity-60 transition-opacity">
              About
            </a>
            <a href="#projects" className="hover:opacity-60 transition-opacity">
              Projects
            </a>
            <a href="#contact" className="hover:opacity-60 transition-opacity">
              Contact
            </a>
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
            <span className="text-sm font-medium">Available for work</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter leading-tight">
            {portfolioData.personal.role}
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 max-w-2xl font-light">
            {portfolioData.personal.tagline}
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href={portfolioData.personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-black dark:bg-white text-white dark:text-black rounded-full font-semibold hover:opacity-90 transition-opacity"
            >
              Contact Me
            </a>
            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border border-black/20 dark:border-white/20 rounded-full font-semibold hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
            >
              View Work
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
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {portfolioData.personal.bio}
            </p>

            {/* Background / Previous Experience Snippet */}
            <div className="mt-8 p-6 rounded-xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-3 opacity-70">
                Background
              </h3>
              {portfolioData.experience.map((exp, idx) => (
                <div key={idx}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium">{exp.role}</span>
                    <span className="text-sm opacity-60">{exp.period}</span>
                  </div>
                  <p className="text-sm opacity-70">{exp.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Tech Stack</h2>
            <div className="grid grid-cols-2 gap-4">
              {portfolioData.skills.map((skill, index) => (
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
        <h2 className="text-3xl font-bold mb-12">Selected Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {portfolioData.projects.map((project, index) => (
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
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <ExternalLink size={20} />
                    </a>
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
            Let's work together.
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 max-w-xl mx-auto">
            I'm currently open to new opportunities. Feel free to reach out via
            LinkedIn or Email.
          </p>

          <div className="flex justify-center gap-6">
            <SocialButton
              href={portfolioData.personal.linkedin}
              icon={Linkedin}
              label="LinkedIn"
            />
            <SocialButton
              href={portfolioData.personal.github}
              icon={Github}
              label="GitHub"
            />
            <SocialButton
              href={`mailto:${portfolioData.personal.email}`}
              icon={Mail}
              label="Email"
            />
          </div>

          <footer className="mt-20 text-sm opacity-50">
            © {new Date().getFullYear()} Gianluca Auriemma. All rights reserved.
          </footer>
        </motion.div>
      </Section>
    </main>
  );
}
