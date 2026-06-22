"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Nav } from "../../components/Nav";
import { useApp } from "../../providers";
import { getProject, getNextProject, ui } from "../../data/content";

export function ProjectClient({
  slug,
  screenshots = [],
}: {
  slug: string;
  screenshots?: string[];
}) {
  const { lang } = useApp();
  const project = getProject(slug);
  const next = getNextProject(slug);

  if (!project) return null;
  const shots = screenshots.length ? screenshots : project.screenshots;
  const phoneShots = shots.filter((s) => !/ipad/i.test(s));
  const padShots = shots.filter((s) => /ipad/i.test(s));
  const cover = phoneShots[0] ?? shots[0];

  const accentColor = {
    orange: "#ff5b1f",
    red: "#e8331a",
    yellow: "#ffc73a",
    magenta: "#ff3d88",
  }[project.accent];

  return (
    <main className="bg-bg text-fg overflow-x-hidden">
      <Nav />

      {/* HEADER */}
      <section className="px-4 md:px-6 pt-28 md:pt-36 pb-10">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 mb-10 text-sm text-fg-soft hover:text-fg transition-colors"
        >
          <ArrowLeft size={14} /> {ui.project.backToWork[lang]}
        </Link>

        <div className="grid md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1
              className="font-display leading-[0.85] tracking-tight"
              style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)" }}
            >
              {project.name}
            </h1>
            <p className="mt-5 font-display italic text-fg-soft leading-tight max-w-xl"
              style={{ fontSize: "clamp(1.4rem, 3vw, 2.2rem)" }}
            >
              {project.tagline[lang]}
            </p>
          </div>
          <div className="md:col-span-4 flex flex-wrap gap-3 md:justify-end">
            {project.links.appStore && (
              <a
                href={project.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-fg text-bg text-sm font-medium hover:opacity-90 transition-opacity"
              >
                {ui.project.visitAppStore[lang]} <ExternalLink size={14} />
              </a>
            )}
            {project.links.testflight && (
              <a
                href={project.links.testflight}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-line-strong text-sm font-medium hover:bg-bg-alt transition-colors"
              >
                {ui.project.joinTestflight[lang]} <ExternalLink size={14} />
              </a>
            )}
          </div>
        </div>

        {/* Narrative meta — inline, no boxes */}
        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
          {[
            { k: ui.project.year[lang], v: project.year },
            { k: ui.project.role[lang], v: project.role[lang] },
            { k: ui.project.timeframe[lang], v: project.timeframe[lang] },
            { k: ui.project.platforms[lang], v: project.platforms.join(" · ") },
          ].map((m) => (
            <div key={m.k}>
              <div className="text-xs text-fg-mute mb-1">{m.k}</div>
              <div className="text-base">{m.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* COVER — shows the actual project, no gradient */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <div
          className="relative rounded-[24px] md:rounded-[32px] overflow-hidden flex items-center justify-center p-6 md:p-16"
          style={{ backgroundColor: accentColor }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={cover}
            alt={project.name}
            className="max-h-[70svh] w-auto rounded-[18px] shadow-2xl"
          />
        </div>
      </section>

      {/* OVERVIEW — one sentence */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <p
          className="font-display leading-[1.05] tracking-tight max-w-4xl"
          style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
        >
          {project.shortDescription[lang]}
        </p>
      </section>

      {/* NARRATIVE: problem → process → solution */}
      <section className="px-4 md:px-6 pb-16 md:pb-24 flex flex-col gap-14 md:gap-20">
        {[
          { k: ui.project.problem[lang], v: project.problem[lang] },
          { k: ui.project.process[lang], v: project.process[lang] },
          { k: ui.project.solution[lang], v: project.solution[lang] },
        ].map((b) => (
          <div key={b.k} className="grid md:grid-cols-12 gap-4 md:gap-10">
            <h2
              className="md:col-span-4 font-display leading-none tracking-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
            >
              {b.k}
            </h2>
            <p className="md:col-span-8 text-xl md:text-2xl text-fg-soft leading-relaxed">
              {b.v}
            </p>
          </div>
        ))}
      </section>

      {/* HIGHLIGHTS — data, not a numbered list / box */}
      <section className="px-4 md:px-6 pb-16 md:pb-24">
        <h2
          className="font-display leading-none tracking-tight mb-8 md:mb-12"
          style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
        >
          {ui.project.features[lang]}
        </h2>
        <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-5xl">
          {project.features[lang].map((f, i) => (
            <p
              key={i}
              className="text-lg leading-snug text-fg-soft border-l-2 pl-4"
              style={{ borderColor: accentColor }}
            >
              {f}
            </p>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS + SCREENS — merged */}
      {(project.steps || phoneShots.length > 0) && (
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          {project.steps && (
            <div className="grid md:grid-cols-12 gap-4 md:gap-10 mb-12 md:mb-16">
              <h2
                className="md:col-span-4 font-display leading-none tracking-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                {ui.project.steps[lang]}
              </h2>
              <ol className="md:col-span-8 flex flex-col gap-5">
                {project.steps[lang].map((s, i) => (
                  <li key={i} className="flex gap-4 items-baseline">
                    <span
                      className="font-display text-2xl leading-none shrink-0 w-7"
                      style={{ color: accentColor }}
                    >
                      {i + 1}
                    </span>
                    <span className="text-lg md:text-xl text-fg-soft leading-snug">
                      {s}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          )}

          {phoneShots.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {phoneShots.map((src, i) => (
                <motion.img
                  key={src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: (i % 4) * 0.06 }}
                  src={src}
                  alt={`${project.name} ${i + 1}`}
                  className="w-full h-auto rounded-[18px] bg-bg-alt"
                />
              ))}
            </div>
          )}

          {padShots.length > 0 && (
            <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mt-4 md:mt-6">
              {padShots.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${project.name} iPad ${i + 1}`}
                  className="w-full h-auto rounded-[18px] bg-bg-alt"
                />
              ))}
            </div>
          )}
        </section>
      )}

      {/* REQUIREMENTS — disclaimer, de-emphasized */}
      {project.requirements && (
        <section className="px-4 md:px-6 pb-16 md:pb-24">
          <div className="border-t border-line pt-5 max-w-3xl">
            <span className="text-xs text-fg-mute">
              {ui.project.requirements[lang]}
            </span>
            <p className="mt-2 text-sm text-fg-mute leading-relaxed">
              {project.requirements[lang].join(" · ")}
            </p>
          </div>
        </section>
      )}

      {/* NEXT PROJECT */}
      {next && next.slug !== project.slug && (
        <section className="px-4 md:px-6 pb-16">
          <Link
            href={`/projects/${next.slug}`}
            className="group flex items-center justify-between gap-6 border-t border-line pt-8"
          >
            <div>
              <div className="text-sm text-fg-mute mb-2">
                {ui.project.nextProject[lang]}
              </div>
              <h3
                className="font-display leading-none tracking-tight group-hover:text-[#ff5b1f] transition-colors"
                style={{ fontSize: "clamp(2.4rem, 8vw, 6rem)" }}
              >
                {next.name}
              </h3>
            </div>
            <ArrowUpRight
              size={48}
              className="shrink-0 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </section>
      )}

      <footer className="px-4 md:px-6 py-8 border-t border-line flex flex-col md:flex-row gap-2 md:items-center md:justify-between text-sm text-fg-mute">
        <span>© {new Date().getFullYear()} Gianluca Auriemma</span>
        <span>Naples, Italy</span>
      </footer>
    </main>
  );
}
