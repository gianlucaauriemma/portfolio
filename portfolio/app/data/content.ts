import type { Lang } from "../providers";

export type ProjectStatus = "shipped" | "in-progress" | "concept";
export type Platform = "iOS" | "iPadOS" | "macOS" | "watchOS" | "Web";

export type LocalizedString = Record<Lang, string>;
export type LocalizedArray = Record<Lang, string[]>;

export type Project = {
  slug: string;
  name: string;
  tagline: LocalizedString;
  year: string;
  status: ProjectStatus;
  platforms: Platform[];
  stack: string[];
  links: {
    appStore?: string;
    testflight?: string;
    github?: string;
    website?: string;
  };
  cover: string;
  accent: "orange" | "red" | "yellow" | "magenta";
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  features: LocalizedArray;
  steps?: LocalizedArray;
  requirements?: LocalizedArray;
  screenshots: string[];
};

export const projects: Project[] = [
  {
    slug: "betteraudio",
    name: "BetterAudio",
    tagline: {
      en: "The room is the first loudspeaker.",
      it: "La stanza è il primo diffusore.",
    },
    year: "2026",
    status: "shipped",
    platforms: ["iOS", "iPadOS"],
    stack: ["SwiftUI", "RoomPlan", "ARKit", "LiDAR", "AVFoundation"],
    links: {
      appStore:
        "https://apps.apple.com/it/app/betteraudio-room-acustics/id6763579225?l=en-GB",
    },
    cover: "/projects/betteraudio/cover.png",
    accent: "orange",
    shortDescription: {
      en: "Turn your iPhone or iPad into an acoustic measurement tool. Scan the room with LiDAR, measure noise with the mic, and place your speakers exactly where they should be.",
      it: "Trasforma iPhone o iPad in uno strumento di misurazione acustica. Scansiona la stanza con il LiDAR, misura il rumore con il microfono e posiziona i diffusori esattamente dove dovrebbero stare.",
    },
    longDescription: {
      en: "Most of what you hear from a pair of speakers is your room, not the speakers. A 5-degree turn, twenty centimeters from a wall, the wrong seat position — any of these will smear imaging, exaggerate bass, and kill detail. Studios spend thousands on treatment for a reason. BetterAudio gives you the same starting point in a few minutes, for free. The scan and the audio analysis run entirely on device. No room data, no audio, and no measurements ever leave your iPhone.",
      it: "Quello che senti dai diffusori è in gran parte la stanza, non i diffusori stessi. 5 gradi di rotazione, venti centimetri da un muro, una posizione di ascolto sbagliata: tutto questo distrugge l'imaging, esagera i bassi e uccide il dettaglio. Gli studi spendono migliaia di euro in trattamento acustico per una ragione. BetterAudio ti dà lo stesso punto di partenza in pochi minuti, gratis. Scansione e analisi audio vivono interamente sul device. Nessun dato lascia il tuo iPhone.",
    },
    features: {
      en: [
        "Full 3D model of your room captured with Apple RoomPlan + LiDAR.",
        "Records ambient noise and broadband acoustic energy through the mic during the scan.",
        "Computes optimal speaker positions using the 38% rule and equilateral-triangle geometry.",
        "Identifies first-reflection points on each side wall — exactly where to place absorbers or diffusers.",
        "Reports noise floor, peak SPL, bass/treble energy balance, environment classification.",
        "Interactive 3D scene with walls, ceiling, furniture, recommended L/R speakers, sweet spot, listening triangle.",
        "Plain-language recommendations: aspect-ratio warnings, low-ceiling alerts, bass-rumble flags, toe-in guidance.",
      ],
      it: [
        "Modello 3D completo della stanza con Apple RoomPlan + LiDAR.",
        "Registrazione di rumore ambientale ed energia acustica a banda larga durante la scansione.",
        "Calcolo della posizione ottimale dei diffusori con la regola del 38% e la geometria del triangolo equilatero.",
        "Identifica i punti di prima riflessione su ogni parete laterale — dove mettere assorbitori o diffusori.",
        "Riporta noise floor, SPL di picco, bilanciamento bassi/alti e classificazione dell'ambiente.",
        "Scena 3D interattiva con muri, soffitto, mobili, diffusori L/R consigliati, sweet spot, triangolo d'ascolto.",
        "Raccomandazioni in linguaggio naturale: rapporti dimensionali, soffitti bassi, rumble nei bassi, toe-in.",
      ],
    },
    steps: {
      en: [
        "Tap BEGIN SCAN.",
        "Walk slowly around the room. The app guides you with on-screen prompts.",
        "Tap END SCAN.",
        "Read the analysis. Move your speakers and your seat. Listen to the difference.",
      ],
      it: [
        "Tocca BEGIN SCAN.",
        "Cammina lentamente per la stanza. L'app ti guida con prompt a schermo.",
        "Tocca END SCAN.",
        "Leggi l'analisi. Sposta diffusori e poltrona. Ascolta la differenza.",
      ],
    },
    requirements: {
      en: [
        "A device with a LiDAR scanner (iPhone 12 Pro / Pro Max and later Pro models, iPad Pro 2020 and later).",
        "Microphone access (used only during scanning, never recorded to disk).",
        "iOS 26 or later.",
      ],
      it: [
        "Dispositivo con scanner LiDAR (iPhone 12 Pro / Pro Max e Pro successivi, iPad Pro 2020 in poi).",
        "Accesso al microfono (solo durante la scansione, mai salvato su disco).",
        "iOS 26 o successivo.",
      ],
    },
    screenshots: ["01.png", "02.png", "03.png", "iPad01.png", "iPad02.png"],
  },
  {
    slug: "filmdirector",
    name: "FilmDirector",
    tagline: {
      en: "Your iPhone, a cine camera.",
      it: "Il tuo iPhone, una cine camera.",
    },
    year: "2026",
    status: "shipped",
    platforms: ["iOS", "iPadOS", "watchOS"],
    stack: [
      "SwiftUI",
      "AVFoundation",
      "CoreMedia",
      "WatchConnectivity",
      "StoreKit",
    ],
    links: {
      appStore:
        "https://apps.apple.com/it/app/filmdirector-pro-camera/id6762784891?l=en-GB",
    },
    cover: "/projects/filmdirector/cover.png",
    accent: "red",
    shortDescription: {
      en: "Pro cine camera for iPhone. Full manual control, cinematic video, custom presets, Apple Watch companion. No subscription, no compromise.",
      it: "Cine camera professionale per iPhone. Controllo manuale completo, video cinematografico, preset personalizzati, companion Apple Watch. Senza abbonamento, senza compromessi.",
    },
    longDescription: {
      en: "FilmDirector turns your iPhone into a professional cine camera. Built for filmmakers, content creators and photographers who want full manual control with zero compromises. ISO across the sensor's full supported range, logarithmic shutter slider, exposure compensation, manual focus with tap-to-focus, white balance with Kelvin temperature and tint, continuous zoom with shortcuts to real optical focal lengths.",
      it: "FilmDirector trasforma il tuo iPhone in una cine camera professionale. Pensato per filmmaker, content creator e fotografi che vogliono controllo manuale totale, senza compromessi. ISO su tutto il range del sensore, slider logaritmico per lo shutter, compensazione di esposizione, fuoco manuale con tap-to-focus, bilanciamento del bianco con Kelvin e tinta, zoom continuo con scorciatoie alle focali ottiche reali.",
    },
    features: {
      en: [
        "Full manual: ISO, shutter, EV, focus, white balance, zoom.",
        "Frame rate up to 60 fps with HDR where supported.",
        "Selectable cinematic stabilization, smooth front/back camera switch.",
        "High-res photo with flash and adjustable torch.",
        "Custom presets — 3 free, unlimited with Pro.",
        "Apple Watch companion: start/stop, switch presets, live readout.",
        "Compact HUD, dedicated panels for every parameter.",
        "One-time Pro unlock. No subscription, no ads.",
      ],
      it: [
        "Manuale completo: ISO, shutter, EV, focus, white balance, zoom.",
        "Frame rate fino a 60 fps con HDR sui device che lo supportano.",
        "Stabilizzazione cinematografica selezionabile, switch frontale/posteriore fluido.",
        "Foto in alta risoluzione con flash e torcia regolabile.",
        "Preset personalizzati — 3 gratis, illimitati con Pro.",
        "Companion Apple Watch: REC, switch preset, lettura live.",
        "HUD compatto, pannelli dedicati per ogni parametro.",
        "Sblocco Pro one-time. Niente abbonamenti, niente pubblicità.",
      ],
    },
    requirements: {
      en: [
        "iPhone with iOS 17 or later.",
        "Apple Watch optional for the companion app.",
      ],
      it: [
        "iPhone con iOS 17 o successivo.",
        "Apple Watch opzionale per l'app companion.",
      ],
    },
    screenshots: [
      "01.png",
      "02.png",
      "03.png",
      "04.png",
      "05.png",
      "06.png",
      "07.png",
      "08.png",
      "iPad1.png",
      "iPad2.png",
      "iPad3.png",
      "iPad4.png",
      "iPad5.png",
    ],
  },
  {
    slug: "trustme",
    name: "TrustMe",
    tagline: {
      en: "Know what's inside, before you open it.",
      it: "Sai cosa contiene, prima di aprirlo.",
    },
    year: "2026",
    status: "in-progress",
    platforms: ["macOS"],
    stack: ["SwiftUI", "AppKit", "CryptoKit", "Virtualization", "Observation"],
    links: { testflight: "https://testflight.apple.com/join/Kbqfs25r" },
    cover: "/projects/trustme/cover.png",
    accent: "magenta",
    shortDescription: {
      en: "macOS file analysis tool. Drop a file in, get a verdict — Safe, Suspicious, or Dangerous — before you ever double-click it.",
      it: "Strumento di analisi file per macOS. Trascini un file, ottieni un verdetto — Safe, Suspicious, Dangerous — prima ancora di farci doppio clic.",
    },
    longDescription: {
      en: "TrustMe is a macOS file analysis tool that tells you whether a file is safe to open — before you open it. Drop a file into the window (or pick from the menu bar) and TrustMe runs static analysis on real content (not just the extension), gives an instant verdict, and optionally runs a deep scan inside a disposable Linux VM powered by Apple Virtualization.framework. Built for developers, security researchers, and curious users. Not a replacement for antivirus — a fast triage tool.",
      it: "TrustMe è un tool di analisi file per macOS che ti dice se un file è sicuro da aprire — prima di aprirlo. Trascina un file nella finestra (o scegli dal menu bar) e TrustMe esegue analisi statica sul contenuto reale (non solo l'estensione), restituisce un verdetto immediato e opzionalmente fa un deep scan in una VM Linux usa-e-getta basata su Apple Virtualization.framework. Pensato per sviluppatori, ricercatori di sicurezza e utenti curiosi. Non sostituisce un antivirus — è un tool di triage rapido.",
    },
    features: {
      en: [
        "Static analysis: detects Mach-O binaries, scripts, archives, macro-laden Office docs, polyglot files, masquerading types.",
        "Instant verdict: three clear states — Safe, Suspicious, Dangerous — with findings ranked by severity.",
        "Deep Scan: runs the file inside a disposable Linux VM (Apple Virtualization.framework) and watches behavior.",
        "Watches suspicious syscalls, writes to sensitive paths, network attempts, persistence.",
        "Fully private: no uploads, no cloud, no telemetry. Everything stays on your Mac.",
        "Menu bar icon shows last-scan status. Scan without opening the main window.",
      ],
      it: [
        "Analisi statica: rileva binari Mach-O, script, archivi, documenti Office con macro, file poliglotti, tipi mascherati.",
        "Verdetto immediato: tre stati — Safe, Suspicious, Dangerous — con findings ordinati per severità.",
        "Deep Scan: esegue il file in una VM Linux usa-e-getta (Apple Virtualization.framework) osservandone il comportamento.",
        "Monitora syscall sospette, scritture su path sensibili, tentativi di rete, persistenza.",
        "Completamente privato: niente upload, niente cloud, niente telemetria. Tutto resta sul Mac.",
        "Icona nel menu bar con lo stato dell'ultima scansione. Scansiona senza aprire la finestra principale.",
      ],
    },
    requirements: {
      en: [
        "macOS 14 or later.",
        "Deep Scan requires a Mac that supports Apple Virtualization.framework.",
      ],
      it: [
        "macOS 14 o successivo.",
        "Il Deep Scan richiede un Mac che supporti Apple Virtualization.framework.",
      ],
    },
    screenshots: ["01.png", "02.png", "03.png", "04.png"],
  },
];

export const ui = {
  nav: {
    home: { en: "Index", it: "Indice" },
    work: { en: "Work", it: "Lavori" },
    about: { en: "About", it: "Chi sono" },
    contact: { en: "Contact", it: "Contatti" },
  },
  hero: {
    available: {
      en: "Available for new opportunities",
      it: "Disponibile per nuovi progetti",
    },
    role: {
      en: "iOS / macOS & Frontend Developer",
      it: "iOS / macOS & Frontend Developer",
    },
    based: {
      en: "Naples, Italy — open worldwide",
      it: "Napoli, Italia — aperto a opportunità ovunque",
    },
    bio: {
      en: "I design and ship native Apple apps with Swift and SwiftUI. Web in my back pocket. I care about details that nobody notices until they're missing.",
      it: "Progetto e pubblico app native Apple con Swift e SwiftUI. Il web nella tasca posteriore. Mi prendo cura dei dettagli che nessuno nota finché non mancano.",
    },
    sayHi: { en: "Say hello", it: "Scrivimi" },
    cv: { en: "Download CV", it: "Scarica CV" },
  },
  helpYou: {
    label: { en: "I can help you build", it: "Posso aiutarti a costruire" },
    items: {
      en: [
        "iOS & iPadOS apps",
        "macOS apps",
        "watchOS companions",
        "Web apps & marketing sites",
        "Design systems",
      ],
      it: [
        "App iOS e iPadOS",
        "App macOS",
        "Companion watchOS",
        "Web app e siti marketing",
        "Design system",
      ],
    },
  },
  work: {
    eyebrow: { en: "Selected Work", it: "Lavori Selezionati" },
    title: {
      en: "Things I've built lately.",
      it: "Cose costruite di recente.",
    },
    subtitle: {
      en: "iOS, iPadOS, macOS. Each project is a self-contained idea, shipped on the App Store or in active development.",
      it: "iOS, iPadOS, macOS. Ogni progetto è un'idea autonoma, pubblicata sull'App Store o in sviluppo attivo.",
    },
    seeCase: { en: "Read case study", it: "Leggi case study" },
  },
  stats: {
    eyebrow: { en: "By the numbers", it: "In numeri" },
    items: {
      en: [
        { k: "Apps shipped", v: "2" },
        { k: "In progress", v: "1" },
        { k: "Years coding", v: "3+" },
        { k: "Based in", v: "Naples" },
      ],
      it: [
        { k: "App pubblicate", v: "2" },
        { k: "In sviluppo", v: "1" },
        { k: "Anni di codice", v: "3+" },
        { k: "Sede", v: "Napoli" },
      ],
    },
  },
  about: {
    eyebrow: { en: "About", it: "Chi sono" },
    title: {
      en: "Two years of mobile craft, sharp interfaces, and relentless development discipline.",
      it: "Due anni di mobile, interfacce nette e disciplina senza compromessi.",
    },
    body: {
      en: "Enthusiastic iOS & Frontend Developer with a strong foundation in Swift, UIKit, and modern web frameworks. I combine technical skills with problem-solving to contribute from concept to App Store deployment and pixel-perfect web interfaces.",
      it: "Sviluppatore iOS e Frontend appassionato, con basi solide in Swift, UIKit e i moderni framework web. Unisco competenze tecniche e problem-solving per contribuire dal concept al rilascio in App Store e a interfacce web pixel-perfect.",
    },
  },
  skills: {
    eyebrow: { en: "Stack", it: "Stack" },
    title: { en: "What I work with.", it: "Con cosa lavoro." },
    items: [
      {
        id: "01",
        name: "Swift & SwiftUI",
        desc: {
          en: "Native iOS development with modern declarative UI, animations, and full Apple ecosystem integration.",
          it: "Sviluppo iOS nativo con UI dichiarativa, animazioni e integrazione completa nell'ecosistema Apple.",
        },
      },
      {
        id: "02",
        name: "UIKit & Xcode",
        desc: {
          en: "Component-based development, Auto Layout, and the full Xcode toolchain for production-ready apps.",
          it: "Sviluppo a componenti, Auto Layout e toolchain Xcode completa per app pronte alla produzione.",
        },
      },
      {
        id: "03",
        name: "SwiftData & CloudKit",
        desc: {
          en: "Local-first persistence with cloud sync — offline-capable apps that scale across Apple devices.",
          it: "Persistenza locale con sync cloud — app offline-first che scalano su tutti i dispositivi Apple.",
        },
      },
      {
        id: "04",
        name: "Vue.js & Nuxt.js",
        desc: {
          en: "Reactive frontend development with performant SPAs and SSR applications using Tailwind CSS.",
          it: "Frontend reattivo con SPA performanti e applicazioni SSR con Tailwind CSS.",
        },
      },
      {
        id: "05",
        name: "Angular",
        desc: {
          en: "Enterprise-grade frontend applications with component architecture, routing, and RxJS.",
          it: "Applicazioni frontend enterprise con architettura a componenti, routing e RxJS.",
        },
      },
      {
        id: "06",
        name: "Java EE & REST APIs",
        desc: {
          en: "Backend services, API design, and full-stack integration across web and mobile platforms.",
          it: "Servizi backend, progettazione API e integrazione full-stack tra web e mobile.",
        },
      },
    ],
  },
  experience: {
    eyebrow: { en: "Experience", it: "Esperienza" },
    title: { en: "Where I've worked.", it: "Dove ho lavorato." },
    items: [
      {
        company: "Mediacom S.r.l.",
        period: { en: "Sep 2023 – May 2024", it: "Set 2023 – Mag 2024" },
        role: { en: "Full Stack Developer", it: "Full Stack Developer" },
        location: "Teverola",
      },
      {
        company: "Imperium Solutions S.r.l.s.",
        period: { en: "Jun 2024 – Oct 2024", it: "Giu 2024 – Ott 2024" },
        role: { en: "Frontend Developer", it: "Frontend Developer" },
        location: "Naples",
      },
      {
        company: "Dotit S.r.l.",
        period: { en: "Oct 2024", it: "Ott 2024" },
        role: { en: "Frontend Developer", it: "Frontend Developer" },
        location: "Naples",
      },
    ],
  },
  contact: {
    eyebrow: { en: "Get in touch", it: "Contatti" },
    title: { en: "Let's build something.", it: "Costruiamo qualcosa." },
    subtitle: {
      en: "Open to full-time roles, contracts, and collaboration on iOS / macOS apps. Replies within 24 hours.",
      it: "Aperto a posizioni full-time, contratti e collaborazioni su app iOS / macOS. Rispondo entro 24 ore.",
    },
    cta: {
      en: "gianluca.auriemma4@gmail.com",
      it: "gianluca.auriemma4@gmail.com",
    },
  },
  project: {
    overview: { en: "Overview", it: "Panoramica" },
    features: { en: "Highlights", it: "Punti chiave" },
    steps: { en: "How it works", it: "Come funziona" },
    requirements: { en: "Requirements", it: "Requisiti" },
    stack: { en: "Stack", it: "Stack" },
    platforms: { en: "Platforms", it: "Piattaforme" },
    year: { en: "Year", it: "Anno" },
    status: { en: "Status", it: "Stato" },
    backToWork: { en: "Back to all work", it: "Torna ai lavori" },
    nextProject: { en: "Next project", it: "Prossimo progetto" },
    visitAppStore: { en: "View on App Store", it: "Vedi su App Store" },
    joinTestflight: {
      en: "Join TestFlight beta",
      it: "Entra nella beta TestFlight",
    },
    statusLabels: {
      shipped: { en: "Shipped", it: "Pubblicato" },
      "in-progress": { en: "In progress", it: "In sviluppo" },
      concept: { en: "Concept", it: "Concept" },
    },
  },
} as const;

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function getNextProject(slug: string) {
  const i = projects.findIndex((p) => p.slug === slug);
  return projects[(i + 1) % projects.length];
}
