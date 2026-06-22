"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Download } from "lucide-react";
import { Github, Linkedin } from "lucide-react";
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

      {/* HERO — straightforward */}
      <section className="px-4 md:px-6 pt-32 md:pt-44 pb-16 md:pb-24">
        <div className="flex items-center gap-2.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#ff5b1f] animate-pulse" />
          <span className="text-sm text-fg-soft">{ui.hero.available[lang]}</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-[0.85] tracking-tight"
          style={{ fontSize: "clamp(3.2rem, 12vw, 12rem)" }}
        >
          Gianluca{" "}
          <span className="italic">
            Auriemma<span className="text-[#ff5b1f]">.</span>
          </span>
        </motion.h1>

        <div className="mt-10 md:mt-14 grid md:grid-cols-12 gap-8 items-end">
          <p className="md:col-span-7 text-xl md:text-2xl leading-relaxed text-fg-soft">
            {ui.hero.bio[lang]}
          </p>
          <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
            <Link
              href="#work"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-fg text-bg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {ui.hero.seeWork[lang]} <ArrowUpRight size={16} />
            </Link>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-line-strong text-sm font-medium hover:bg-bg-alt transition-colors"
            >
              {ui.hero.sayHi[lang]}
            </Link>
            <a
              href={cvLink}
              download
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full border border-line-strong text-sm font-medium hover:bg-bg-alt transition-colors"
            >
              <Download size={15} /> {ui.hero.cv[lang]}
            </a>
          </div>
        </div>
      </section>

      {/* WORK — editorial alternating rows, no boxes */}
      <section id="work" className="px-4 md:px-6 pt-12 md:pt-20 pb-8">
        <div className="max-w-3xl mb-14 md:mb-20">
          <h2
            className="font-display leading-[0.95] tracking-tight"
            style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)" }}
          >
            {ui.work.title[lang]}
          </h2>
          <p className="mt-5 text-lg text-fg-soft leading-relaxed max-w-xl">
            {ui.work.subtitle[lang]}
          </p>
        </div>

        <div className="flex flex-col gap-20 md:gap-32">
          {projects.map((p, i) => {
            const accentColor = {
              orange: "#ff5b1f",
              red: "#e8331a",
              yellow: "#ffc73a",
              magenta: "#ff3d88",
            }[p.accent];
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={p.slug}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link
                  href={`/projects/${p.slug}`}
                  className="group grid md:grid-cols-2 gap-8 md:gap-14 items-center"
                >
                  {/* Cover */}
                  <div
                    className={`relative overflow-hidden rounded-[24px] aspect-[4/3] ${
                      flip ? "md:order-2" : ""
                    }`}
                    style={{ backgroundColor: accentColor }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/projects/${p.slug}/01.png`}
                      alt={p.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).style.opacity =
                          "0";
                      }}
                    />
                  </div>

                  {/* Text */}
                  <div className={flip ? "md:order-1" : ""}>
                    <div className="flex items-baseline gap-4 mb-4 text-fg-soft">
                      <span className="text-sm">{p.year}</span>
                      <span className="w-1 h-1 rounded-full bg-fg-mute" />
                      <span className="text-sm">
                        {p.platforms.join(" · ")}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-fg-mute" />
                      <span className="text-sm">
                        {ui.project.statusLabels[p.status][lang]}
                      </span>
                    </div>
                    <h3
                      className="font-display leading-[0.9] tracking-tight"
                      style={{ fontSize: "clamp(2.4rem, 5vw, 4.5rem)" }}
                    >
                      {p.name}
                    </h3>
                    <p className="mt-4 font-display italic text-xl md:text-2xl text-fg-soft leading-tight max-w-md">
                      {p.tagline[lang]}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-base font-medium border-b-2 border-transparent group-hover:border-fg transition-colors">
                      {lang === "en"
                        ? `See how I built ${p.name}`
                        : `Scopri come ho fatto ${p.name}`}
                      <ArrowUpRight
                        size={18}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STATS */}
      <section className="px-4 md:px-6 py-20 md:py-28">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6 border-y border-line py-10 md:py-14">
          {ui.stats.items[lang].map((s) => (
            <div key={s.k}>
              <div
                className="font-display leading-none"
                style={{ fontSize: "clamp(2.6rem, 5vw, 4rem)" }}
              >
                {s.v}
              </div>
              <div className="mt-2 text-sm text-fg-soft">{s.k}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT — new layout */}
      <section id="about" className="px-4 md:px-6 py-12 md:py-20">
        <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
          <div className="md:col-span-5 lg:col-span-4">
            <div className="aspect-[4/5] rounded-[24px] overflow-hidden bg-bg-alt relative">
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
          <div className="md:col-span-7 lg:col-span-8">
            <h2
              className="font-display leading-[1.02] tracking-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
            >
              {ui.about.title[lang]}
            </h2>
            <p className="mt-7 text-lg text-fg-soft leading-relaxed max-w-2xl">
              {ui.about.body[lang]}
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS — plain, not link-like */}
      <section className="px-4 md:px-6 py-12 md:py-20">
        <h2
          className="font-display leading-[0.95] tracking-tight mb-10 md:mb-14"
          style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
        >
          {ui.skills.title[lang]}
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-10">
          {ui.skills.items.map((s) => (
            <div key={s.id}>
              <h3 className="font-display text-2xl md:text-3xl leading-none">
                {s.name}
              </h3>
              <p className="mt-3 text-fg-soft leading-relaxed">
                {s.desc[lang]}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-4 md:px-6 py-12 md:py-20">
        <h2
          className="font-display leading-[0.95] tracking-tight mb-8 md:mb-12"
          style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}
        >
          {ui.experience.title[lang]}
        </h2>
        <div>
          {ui.experience.items.map((exp, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 md:gap-8 border-t border-line py-6 md:py-8 items-baseline"
            >
              <span className="col-span-12 md:col-span-5 font-display text-2xl md:text-3xl leading-none">
                {exp.company}
              </span>
              <span className="col-span-6 md:col-span-3 text-fg-soft">
                {exp.period[lang]}
              </span>
              <span className="col-span-6 md:col-span-3 text-fg-soft">
                {exp.role[lang]}
              </span>
              <span className="col-span-12 md:col-span-1 text-fg-mute md:text-right">
                {exp.location}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-4 md:px-6 pt-12 md:pt-24 pb-16">
        <h2
          className="font-display leading-[0.9] tracking-tight"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          {ui.contact.title[lang]}
        </h2>
        <p className="mt-6 text-lg md:text-xl text-fg-soft max-w-xl leading-relaxed">
          {ui.contact.subtitle[lang]}
        </p>

        <a
          href={`mailto:${ui.contact.cta[lang]}`}
          className="group mt-10 inline-flex items-center gap-3 font-display italic break-all hover:text-[#ff5b1f] transition-colors"
          style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)" }}
        >
          {ui.contact.cta[lang]}
          <ArrowUpRight
            size={36}
            className="shrink-0 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </a>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
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
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-fg-soft hover:text-fg transition-colors"
            >
              <Icon size={16} /> {label}
            </a>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-4 md:px-6 py-8 border-t border-line flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-sm text-fg-mute">
        <span>© {new Date().getFullYear()} Gianluca Auriemma</span>
        <span>Naples, Italy</span>
      </footer>
    </main>
  );
}
