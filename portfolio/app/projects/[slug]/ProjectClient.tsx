"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink } from "lucide-react";
import { Nav } from "../../components/Nav";
import { MeshGradient } from "../../components/MeshGradient";
import { useApp } from "../../providers";
import { getProject, getNextProject, ui } from "../../data/content";

export function ProjectClient({ slug, screenshots = [] }: { slug: string; screenshots?: string[] }) {
  const { lang } = useApp();
  const project = getProject(slug);
  const next = getNextProject(slug);

  if (!project) return null;
  const shots = screenshots.length ? screenshots : project.screenshots;

  return (
    <main className="bg-bg text-fg overflow-x-hidden">
      <Nav />

      {/* HERO */}
      <section className="px-4 md:px-6 pt-24 pb-6">
        <Link
          href="/#work"
          className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-line-strong bg-card font-mono text-[10px] uppercase tracking-widest hover:bg-bg-alt transition-colors"
        >
          <ArrowLeft size={12} /> {ui.project.backToWork[lang]}
        </Link>

        <div className="relative rounded-[28px] overflow-hidden border border-line-strong grain">
          <MeshGradient variant={project.accent} />
          <div className="relative p-6 md:p-12 lg:p-16 min-h-[80svh] flex flex-col justify-between text-[#1a1410]">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {project.platforms.map((pl) => (
                  <span
                    key={pl}
                    className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full bg-[#1a1410]/10 backdrop-blur-sm"
                  >
                    {pl}
                  </span>
                ))}
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                {project.year} · {ui.project.statusLabels[project.status][lang]}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mt-auto pt-12"
            >
              <p className="font-display italic text-xl md:text-3xl mb-4 max-w-2xl leading-tight">
                {project.tagline[lang]}
              </p>
              <h1
                className="font-display leading-[0.82] tracking-tight"
                style={{ fontSize: "clamp(3.5rem, 14vw, 14rem)" }}
              >
                {project.name}
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.links.appStore && (
                  <a
                    href={project.links.appStore}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#1a1410] text-[#f5f0e6] text-xs uppercase tracking-widest font-mono hover:bg-[#2a201a] transition-colors"
                  >
                    {ui.project.visitAppStore[lang]} <ExternalLink size={12} />
                  </a>
                )}
                {project.links.testflight && (
                  <a
                    href={project.links.testflight}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-[#1a1410]/30 text-xs uppercase tracking-widest font-mono hover:bg-[#1a1410] hover:text-[#f5f0e6] transition-colors"
                  >
                    {ui.project.joinTestflight[lang]} <ExternalLink size={12} />
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* META */}
      <section className="px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line border border-line-strong rounded-[24px] overflow-hidden">
          {[
            { k: ui.project.year[lang], v: project.year },
            {
              k: ui.project.status[lang],
              v: ui.project.statusLabels[project.status][lang],
            },
            { k: ui.project.platforms[lang], v: project.platforms.join(" · ") },
            { k: ui.project.stack[lang], v: project.stack.join(", ") },
          ].map((it) => (
            <div key={it.k} className="bg-card p-5 md:p-6">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-2">
                {it.k}
              </div>
              <div className="text-fg leading-snug">{it.v}</div>
            </div>
          ))}
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="px-4 md:px-6 py-12 md:py-20 grid md:grid-cols-12 gap-6 md:gap-10 items-start">
        <div className="md:col-span-4">
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-3">
            ✦ {ui.project.overview[lang]}
          </div>
          <h2 className="font-display leading-[0.9] tracking-tight" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.6rem)" }}>
            {project.shortDescription[lang]}
          </h2>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <p className="text-fg-soft text-lg leading-relaxed">{project.longDescription[lang]}</p>
        </div>
      </section>

      {/* SCREENSHOTS */}
      {shots.length === 0 ? (
        <section className="px-4 md:px-6 pb-12">
          <div className="rounded-[24px] border-2 border-dashed border-line-strong bg-bg-alt p-10 text-center">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-2">
              Screenshots placeholder
            </div>
            <div className="text-fg-soft">
              Drop images at <code className="font-mono">/public/projects/{project.slug}/01.png …</code>
            </div>
          </div>
        </section>
      ) : (
        <section className="pb-12">
          <div className="flex gap-4 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth px-4 md:px-6 pb-4 [scrollbar-width:thin]">
            {shots.map((src, i) => {
              const isPad = /ipad/i.test(src);
              return (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={src}
                  src={src}
                  alt={`${project.name} screenshot ${i + 1}`}
                  className={`snap-start shrink-0 h-[420px] md:h-[560px] w-auto rounded-[20px] border border-line bg-bg-alt object-contain ${isPad ? "" : ""}`}
                />
              );
            })}
          </div>
        </section>
      )}

      {/* FEATURES */}
      <section className="px-4 md:px-6 py-12 md:py-20">
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-3">
          ✦ {ui.project.features[lang]}
        </div>
        <h2 className="font-display leading-[0.9] tracking-tight mb-10" style={{ fontSize: "clamp(2.4rem, 5vw, 4.4rem)" }}>
          {ui.project.features[lang]}.
        </h2>
        <div className="border-t border-line">
          {project.features[lang].map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid grid-cols-12 gap-4 md:gap-8 border-b border-line py-5 md:py-7"
            >
              <span className="col-span-2 md:col-span-1 font-mono text-xs text-fg-mute pt-1">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="col-span-10 md:col-span-11 text-lg md:text-xl leading-snug text-fg">
                {f}
              </span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STEPS + REQUIREMENTS */}
      <section className="px-4 md:px-6 pb-16 md:pb-24 grid md:grid-cols-2 gap-6">
        {project.steps && (
          <div className="rounded-[24px] border border-line-strong bg-card p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-4">
              ✦ {ui.project.steps[lang]}
            </div>
            <ol className="space-y-4">
              {project.steps[lang].map((s, i) => (
                <li key={i} className="flex gap-4">
                  <span className="font-display text-3xl text-orange leading-none shrink-0 w-8">
                    {i + 1}
                  </span>
                  <span className="text-fg-soft pt-1.5">{s}</span>
                </li>
              ))}
            </ol>
          </div>
        )}
        {project.requirements && (
          <div className="rounded-[24px] border border-line-strong bg-card p-6 md:p-8">
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute mb-4">
              ✦ {ui.project.requirements[lang]}
            </div>
            <ul className="space-y-3">
              {project.requirements[lang].map((r, i) => (
                <li key={i} className="flex gap-3 text-fg-soft">
                  <span className="text-red mt-1.5">●</span>
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* NEXT PROJECT */}
      {next && next.slug !== project.slug && (
        <section className="px-4 md:px-6 pb-6">
          <Link
            href={`/projects/${next.slug}`}
            className="group relative block rounded-[28px] overflow-hidden border border-line-strong grain"
          >
            <MeshGradient variant={next.accent} />
            <div className="relative p-8 md:p-16 min-h-[50svh] flex flex-col justify-between text-[#1a1410]">
              <div className="font-mono text-[10px] uppercase tracking-[0.25em] opacity-70">
                ✦ {ui.project.nextProject[lang]}
              </div>
              <div className="flex flex-wrap items-end justify-between gap-6">
                <h3
                  className="font-display leading-[0.85] tracking-tight"
                  style={{ fontSize: "clamp(3rem, 10vw, 10rem)" }}
                >
                  {next.name}
                </h3>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#1a1410] text-[#f5f0e6] px-5 py-3 text-xs uppercase tracking-widest font-mono group-hover:bg-[#2a201a] transition-colors">
                  Continue <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </Link>
        </section>
      )}

      <footer className="px-4 md:px-6 py-8 flex flex-col md:flex-row gap-3 md:items-center md:justify-between font-mono text-[10px] uppercase tracking-[0.25em] text-fg-mute">
        <span>© {new Date().getFullYear()} Gianluca Auriemma</span>
        <span>Made in Naples · Coffee fueled</span>
      </footer>
    </main>
  );
}
