"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Github, Linkedin, Mail } from "lucide-react";
import { SiBluesky } from "@icons-pack/react-simple-icons";

import { Nav } from "./components/Nav";
import { useApp } from "./providers";
import { projects, ui } from "./data/content";

export default function HomePage() {
  const { lang } = useApp();
  const cvLink =
    lang === "en"
      ? "/Gianluca_Auriemma_Curriculum_2025_ENG.pdf"
      : "/Gianluca_Auriemma_Curriculum_2025_ITA.pdf";

  return (
    <main className="relative bg-bg text-fg overflow-x-hidden">
      <Nav />

      {/* HERO — Swiss grid */}
      <section className="relative pt-24 pb-10 px-4 md:px-6">
        <article className="rounded-[28px] overflow-hidden border border-line-strong bg-card text-fg">
          {/* Top meta bar */}
          <div className="grid grid-cols-12 border-b border-line">
            <div className="col-span-12 md:col-span-6 p-4 md:p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute">
              Gianluca Auriemma — Portfolio · {new Date().getFullYear()}
            </div>
            <div className="col-span-12 md:col-span-6 p-4 md:p-5 md:border-l border-t md:border-t-0 border-line flex items-center gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#ff5b1f] animate-pulse" />
              <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute">
                {ui.hero.available[lang]}
              </span>
            </div>
          </div>

          {/* Main row: name + side panel */}
          <div className="grid grid-cols-12 min-h-[60svh] md:min-h-[68svh]">
            {/* Name cell */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="col-span-12 md:col-span-8 p-6 md:p-12 lg:p-16 flex flex-col justify-end"
            >
              <h1
                className="font-display leading-[0.82] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)" }}
              >
                Gianluca
                <br />
                <span className="italic">
                  Auriemma<span className="text-[#ff5b1f]">.</span>
                </span>
              </h1>
            </motion.div>

            {/* Side panel */}
            <div className="col-span-12 md:col-span-4 grid grid-rows-[auto_1fr_auto] md:border-l border-t md:border-t-0 border-line">
              {/* Accent block */}
              <div
                className="relative aspect-[5/3] md:aspect-auto md:h-48 lg:h-56 border-b border-line overflow-hidden"
                style={{ backgroundColor: "#ff5b1f" }}
              >
                <div className="absolute inset-0 grain opacity-50 pointer-events-none" />
                <div className="relative h-full p-5 flex flex-col justify-between text-[#1a1410]">
                  <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
                    ✦ 2026
                  </span>
                  <span
                    className="font-display italic leading-[0.9]"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
                  >
                    Hello World.
                  </span>
                </div>
              </div>

              {/* Bio */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="p-5 md:p-6 border-b border-line"
              >
                <p className="text-sm md:text-base leading-snug">
                  {ui.hero.bio[lang]}
                </p>
              </motion.div>

              {/* Say hello CTA */}
              <Link
                href="#contact"
                className="p-5 md:p-6 flex items-center justify-between gap-3 font-mono text-xs uppercase tracking-[0.25em] hover:bg-bg-alt transition-colors"
              >
                <span>{ui.hero.sayHi[lang]}</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          {/* Footer row */}
          <div className="grid grid-cols-12 border-t border-line">
            <div className="col-span-12 md:col-span-5 p-4 md:p-5 font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute">
              {ui.hero.role[lang]}
            </div>
            <div className="col-span-12 md:col-span-4 p-4 md:p-5 md:border-l border-t md:border-t-0 border-line font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute">
              {ui.hero.based[lang]}
            </div>
            <a
              href={cvLink}
              download
              className="col-span-12 md:col-span-3 p-4 md:p-5 md:border-l border-t md:border-t-0 border-line flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em] hover:bg-bg-alt transition-colors"
            >
              <span className="inline-flex items-center gap-2">
                <Download size={12} /> {ui.hero.cv[lang]}
              </span>
              <ArrowUpRight size={12} />
            </a>
          </div>
        </article>
      </section>

      {/* WORK */}
      <section id="work" className="px-4 md:px-6 pt-20 md:pt-28 pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-3">
              ✦ {ui.work.eyebrow[lang]} — 0{projects.length}
            </div>
            <h2
              className="font-display leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.6rem, 7vw, 6rem)" }}
            >
              {ui.work.title[lang]}
            </h2>
          </div>
          <p className="text-fg-soft max-w-md leading-relaxed">
            {ui.work.subtitle[lang]}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {projects.map((p, i) => {
            const span =
              i === 0
                ? "md:col-span-7"
                : i === 1
                  ? "md:col-span-5"
                  : "md:col-span-12";
            const accentColor = {
              orange: "#ff5b1f",
              red: "#e8331a",
              yellow: "#ffc73a",
              magenta: "#ff3d88",
            }[p.accent];
            const fallback = `/projects/${p.slug}/01.png`;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className={span}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group relative block rounded-[24px] overflow-hidden border border-line-strong bg-card hover:border-fg transition-colors"
                >
                  {/* Cover */}
                  <div className="relative h-64 md:h-80 overflow-hidden bg-[#1a1410]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={fallback}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover [filter:grayscale(1)_brightness(0.85)_contrast(1.25)] group-hover:[filter:none] transition-[filter] duration-700"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.display =
                          "none";
                      }}
                    />
                    {/* Accent tint */}
                    <div
                      aria-hidden
                      className="absolute inset-0 mix-blend-multiply opacity-80 group-hover:opacity-0 transition-opacity duration-700"
                      style={{ backgroundColor: accentColor }}
                    />
                    {/* Legibility scrim — top + bottom */}
                    <div
                      aria-hidden
                      className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/75 via-black/10 to-black/40"
                    />
                    <div className="absolute inset-0 grain opacity-50 pointer-events-none" />

                    {/* Top-left meta */}
                    <div className="absolute top-4 left-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5f0e6]">
                      <span
                        className="w-1.5 h-1.5 rounded-full"
                        style={{ backgroundColor: accentColor }}
                      />
                      {String(i + 1).padStart(2, "0")} / {p.year}
                    </div>
                    {/* Top-right status */}
                    <div className="absolute top-4 right-4 font-mono text-[10px] uppercase tracking-[0.25em] text-[#f5f0e6]">
                      {ui.project.statusLabels[p.status][lang]}
                    </div>

                    {/* Bottom name */}
                    <h3
                      className="absolute bottom-4 left-4 right-4 font-display leading-[0.85] tracking-tight text-[#f5f0e6] truncate"
                      style={{ fontSize: "clamp(1.8rem, 4vw, 3.2rem)" }}
                    >
                      {p.name}
                    </h3>
                  </div>

                  {/* Meta grid */}
                  <div className="grid grid-cols-12 border-t border-line">
                    <div className="col-span-12 md:col-span-8 p-5 md:p-6 md:border-r border-line border-b md:border-b-0">
                      <p className="font-display italic text-lg md:text-2xl leading-tight max-w-xl">
                        {p.tagline[lang]}
                      </p>
                    </div>
                    <div className="col-span-12 md:col-span-4 p-5 md:p-6 flex flex-col gap-3">
                      <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute">
                        {ui.project.platforms[lang]}
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {p.platforms.map((pl) => (
                          <span
                            key={pl}
                            className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 border border-line"
                          >
                            {pl}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer row */}
                  <div className="grid grid-cols-12 border-t border-line">
                    <div className="col-span-12 md:col-span-9 p-4 md:p-5 md:border-r border-line border-b md:border-b-0 flex flex-wrap gap-x-4 gap-y-1">
                      {p.stack.slice(0, 5).map((s) => (
                        <span
                          key={s}
                          className="font-mono text-[10px] uppercase tracking-widest text-fg-mute"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="col-span-12 md:col-span-3 p-4 md:p-5 flex items-center justify-between gap-2 font-mono text-[10px] uppercase tracking-[0.25em]">
                      <span>{ui.work.seeCase[lang]}</span>
                      <ArrowUpRight
                        size={14}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 md:px-6 py-16 md:py-24">
        <div className="rounded-[28px] border border-line-strong bg-card overflow-hidden">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute px-6 md:px-8 py-4 border-b border-line">
            ✦ {ui.stats.eyebrow[lang]}
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4">
            {ui.stats.items[lang].map((s, i) => (
              <div
                key={s.k}
                className={`p-6 md:p-8 ${i < 3 ? "md:border-r" : ""} ${i < 2 ? "border-b md:border-b-0" : ""} border-line`}
              >
                <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-3">
                  {s.k}
                </div>
                <div
                  className="font-display leading-none"
                  style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
                >
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-start">
          <div className="md:col-span-5">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-3">
              ✦ {ui.about.eyebrow[lang]}
            </div>
            <h2
              className="font-display leading-[0.9] tracking-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}
            >
              {ui.about.title[lang]}
            </h2>
          </div>
          <div className="md:col-span-7 md:pt-2">
            <p className="text-fg-soft text-lg leading-relaxed mb-8">
              {ui.about.body[lang]}
            </p>
            <div className="aspect-[4/5] md:aspect-[5/3] rounded-[24px] border border-line-strong overflow-hidden bg-bg-alt grain relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me.jpg"
                alt="Gianluca Auriemma"
                className="absolute inset-0 w-full h-full object-cover"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-3">
          ✦ {ui.skills.eyebrow[lang]}
        </div>
        <h2
          className="font-display leading-[0.9] tracking-tight mb-10"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}
        >
          {ui.skills.title[lang]}
        </h2>
        <div className="border-t border-line">
          {ui.skills.items.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-12 gap-4 md:gap-8 border-b border-line py-5 md:py-7 hover:bg-bg-alt transition-colors group"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-fg-mute pt-1">
                {s.id}
              </span>
              <span className="col-span-10 md:col-span-4 font-display text-2xl md:text-3xl leading-none">
                {s.name}
              </span>
              <span className="col-span-12 md:col-span-7 text-fg-soft leading-relaxed">
                {s.desc[lang]}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-3">
          ✦ {ui.experience.eyebrow[lang]}
        </div>
        <h2
          className="font-display leading-[0.9] tracking-tight mb-10"
          style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}
        >
          {ui.experience.title[lang]}
        </h2>
        <div className="border-t border-line">
          {ui.experience.items.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 md:gap-8 border-b border-line py-5 md:py-7 hover:bg-bg-alt transition-colors"
            >
              <span className="col-span-12 md:col-span-5 font-display text-2xl md:text-3xl leading-none">
                {exp.company}
              </span>
              <span className="col-span-6 md:col-span-3 font-mono text-xs uppercase tracking-widest text-fg-mute pt-2">
                {exp.period[lang]}
              </span>
              <span className="col-span-6 md:col-span-3 text-fg-soft pt-2">
                {exp.role[lang]}
              </span>
              <span className="col-span-12 md:col-span-1 font-mono text-xs uppercase tracking-widest text-fg-mute pt-2 md:text-right">
                {exp.location}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT — Swiss accent block */}
      <section id="contact" className="px-4 md:px-6 pb-6">
        <article
          className="relative rounded-[28px] overflow-hidden border-2 grain text-[#1a1410]"
          style={{ backgroundColor: "#e8331a", borderColor: "#1a1410" }}
        >
          {/* Top meta bar */}
          <div
            className="grid grid-cols-12 border-b-2"
            style={{ borderColor: "#1a1410" }}
          >
            <div className="col-span-6 p-4 md:p-5 font-mono text-[10px] uppercase tracking-[0.25em]">
              ✦ {ui.contact.eyebrow[lang]}
            </div>
            <div
              className="col-span-6 p-4 md:p-5 border-l-2 font-mono text-[10px] uppercase tracking-[0.25em] text-right"
              style={{ borderColor: "#1a1410" }}
            >
              {new Date().getFullYear()} · Naples
            </div>
          </div>

          {/* Title */}
          <div
            className="p-6 md:p-12 lg:p-16 border-b-2"
            style={{ borderColor: "#1a1410" }}
          >
            <h2
              className="font-display leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(3rem, 11vw, 11rem)" }}
            >
              {ui.contact.title[lang]}
            </h2>
            <p className="mt-6 text-base md:text-lg max-w-xl leading-relaxed">
              {ui.contact.subtitle[lang]}
            </p>
          </div>

          {/* Email + socials grid */}
          <div className="grid grid-cols-12">
            <a
              href={`mailto:${ui.contact.cta[lang]}`}
              className="col-span-12 md:col-span-8 p-6 md:p-12 group flex items-center justify-between gap-4 hover:bg-[#1a1410] hover:text-[#e8331a] transition-colors"
            >
              <span
                className="font-display italic break-all"
                style={{ fontSize: "clamp(1.4rem, 4vw, 2.8rem)" }}
              >
                {ui.contact.cta[lang]}
              </span>
              <ArrowUpRight
                size={32}
                className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            <div
              className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 border-t-2 md:border-t-0 md:border-l-2"
              style={{ borderColor: "#1a1410" }}
            >
              {[
                {
                  href: "https://www.linkedin.com/in/gianluca-auriemma-b1b65429b",
                  icon: Linkedin,
                  label: "LinkedIn",
                },
                {
                  href: "https://github.com/gianlucaauriemma",
                  icon: Github,
                  label: "GitHub",
                },
                {
                  href: "https://bsky.app/profile/gianlucaauriemma.bsky.social",
                  icon: SiBluesky,
                  label: "Bluesky",
                },
                {
                  href: "mailto:gianluca.auriemma4@gmail.com",
                  icon: Mail,
                  label: "Email",
                },
              ].map(({ href, icon: Icon, label }, i) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-4 md:p-5 flex items-center justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.25em] hover:bg-[#1a1410] hover:text-[#e8331a] transition-colors ${
                    i % 2 === 1 ? "border-l-2 md:border-l-0" : ""
                  } ${i > 0 ? "md:border-t-2" : ""} ${
                    i > 1 ? "border-t-2 md:border-t-2" : ""
                  }`}
                  style={{ borderColor: "#1a1410" }}
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon size={14} /> {label}
                  </span>
                  <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </article>
      </section>

      {/* FOOTER */}
      <footer className="px-4 md:px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute">
        <span>
          © {new Date().getFullYear()} Gianluca Auriemma · All rights reserved
        </span>
        <span>Made in Naples · Coffee fueled</span>
      </footer>
    </main>
  );
}
