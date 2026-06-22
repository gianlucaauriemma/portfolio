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
  role: LocalizedString;
  timeframe: LocalizedString;
  shortDescription: LocalizedString;
  longDescription: LocalizedString;
  problem: LocalizedString;
  process: LocalizedString;
  solution: LocalizedString;
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
    role: {
      en: "Solo — concept, design, Swift, App Store",
      it: "Da solo — concept, design, Swift, App Store",
    },
    timeframe: { en: "~3 weeks", it: "~3 settimane" },
    shortDescription: {
      en: "Scan your room with LiDAR and get the exact spots to put your speakers.",
      it: "Scansiona la stanza col LiDAR e scopri dove mettere esattamente i diffusori.",
    },
    problem: {
      en: "Most of what you hear from a pair of speakers is the room, not the speakers. Measuring it properly takes a calibrated mic, software and a day of work almost nobody will do.",
      it: "Quello che senti dai diffusori è in gran parte la stanza, non i diffusori. Misurarla come si deve richiede un microfono calibrato, software e una giornata di lavoro che quasi nessuno farà.",
    },
    process: {
      en: "I already knew RoomPlan and LiDAR from earlier experiments, so the hard part — turning a 3D scan into speaker geometry — came together fast. A weekend for the math, two weeks to make it feel like a real instrument.",
      it: "Conoscevo già RoomPlan e il LiDAR da esperimenti precedenti, così la parte difficile — trasformare una scansione 3D in geometria dei diffusori — è venuta in fretta. Un weekend per i calcoli, due settimane per farlo sembrare uno strumento vero.",
    },
    solution: {
      en: "Scan, measure the noise, get speaker positions and first-reflection points in minutes. Everything runs on device, and it's free.",
      it: "Scansiona, misura il rumore, ottieni posizioni dei diffusori e punti di prima riflessione in pochi minuti. Tutto sul dispositivo, e gratis.",
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
    role: {
      en: "Solo — design, Swift, watchOS, App Store",
      it: "Da solo — design, Swift, watchOS, App Store",
    },
    timeframe: { en: "~4 weeks", it: "~4 settimane" },
    shortDescription: {
      en: "Full manual control over your iPhone camera, with an Apple Watch remote. No subscription.",
      it: "Controllo manuale totale sulla fotocamera dell'iPhone, con telecomando Apple Watch. Senza abbonamento.",
    },
    problem: {
      en: "iPhone cameras are great until you want manual control. The pro apps that give it to you lock the basics behind a subscription.",
      it: "Le fotocamere iPhone sono ottime finché non vuoi il controllo manuale. Le app pro che te lo danno mettono le basi dietro un abbonamento.",
    },
    process: {
      en: "I'd built a camera pipeline before, so I wasn't starting from zero. Most of the time went into the HUD and the Watch companion — making full manual control feel calm instead of cluttered.",
      it: "Avevo già costruito una pipeline per la fotocamera, quindi non partivo da zero. Gran parte del tempo è andata nell'HUD e nel companion Watch — far sembrare il controllo manuale calmo invece che affollato.",
    },
    solution: {
      en: "Manual ISO, shutter, focus, white balance and zoom, a Watch remote, one-time unlock. Shoots like a real camera.",
      it: "ISO, shutter, fuoco, bilanciamento del bianco e zoom manuali, telecomando Watch, sblocco una tantum. Scatta come una fotocamera vera.",
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
    links: {
      appStore:
        "https://apps.apple.com/us/app/trustme-disposable-sandbox/id6763646863",
    },
    cover: "/projects/trustme/cover.png",
    accent: "magenta",
    role: {
      en: "Solo — design, Swift, in progress",
      it: "Da solo — design, Swift, in sviluppo",
    },
    timeframe: { en: "~2 weeks of nights", it: "~2 settimane di serate" },
    shortDescription: {
      en: "Drop a file on your Mac and know if it's safe — before you open it.",
      it: "Trascini un file sul Mac e sai se è sicuro — prima di aprirlo.",
    },
    problem: {
      en: "You download a file and have no idea what it actually is until you open it — which is exactly when it's too late.",
      it: "Scarichi un file e non hai idea di cosa sia davvero finché non lo apri — cioè quando è già troppo tardi.",
    },
    process: {
      en: "Static analysis was quick to wire up. The interesting part was the disposable Linux VM on Virtualization.framework — once that clicked, the rest was UI.",
      it: "L'analisi statica è stata veloce da mettere su. La parte interessante è stata la VM Linux usa-e-getta su Virtualization.framework — una volta capita quella, il resto era UI.",
    },
    solution: {
      en: "Drop a file, get a Safe / Suspicious / Dangerous verdict in seconds, or run a deep scan in a throwaway VM. Nothing leaves your Mac.",
      it: "Trascini un file, ottieni un verdetto Safe / Suspicious / Dangerous in pochi secondi, o lanci un deep scan in una VM usa-e-getta. Niente lascia il Mac.",
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
      en: "I design and ship native Apple apps — solo, end to end, fast. Three on the App Store this year. The hard part is usually finding the idea; I'm quick at the rest.",
      it: "Progetto e pubblico app native Apple — da solo, dall'inizio alla fine, in fretta. Tre sull'App Store quest'anno. La parte difficile è trovare l'idea; sul resto sono veloce.",
    },
    seeWork: { en: "See the apps", it: "Guarda le app" },
    sayHi: { en: "Email me", it: "Scrivimi una mail" },
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
    title: {
      en: "Three apps, shipped solo.",
      it: "Tre app, pubblicate da solo.",
    },
    subtitle: {
      en: "Each one from idea to App Store in a few weeks. Tap any to read how it came together.",
      it: "Ognuna dall'idea all'App Store in poche settimane. Tocca per leggere com'è nata.",
    },
  },
  stats: {
    items: {
      en: [
        { k: "On the App Store", v: "3" },
        { k: "Avg. idea → ship", v: "3 wks" },
        { k: "Team size", v: "1" },
        { k: "Based in", v: "Naples" },
      ],
      it: [
        { k: "Sull'App Store", v: "3" },
        { k: "Media idea → store", v: "3 set" },
        { k: "Persone nel team", v: "1" },
        { k: "Sede", v: "Napoli" },
      ],
    },
  },
  about: {
    title: {
      en: "I'm Gianluca. I build iOS, iPadOS and macOS apps on my own — and I ship them fast.",
      it: "Sono Gianluca. Costruisco app iOS, iPadOS e macOS da solo — e le pubblico in fretta.",
    },
    body: {
      en: "I work in Swift and SwiftUI, with web (React, Vue, Angular) when a project needs it. I'm comfortable owning a whole product: the idea, the design, the code, the App Store listing. What I'm proud of isn't the framework list — it's how little time it takes me to go from a rough idea to something real you can download.",
      it: "Lavoro in Swift e SwiftUI, con il web (React, Vue, Angular) quando serve. Mi trovo a mio agio a possedere un prodotto intero: l'idea, il design, il codice, la pubblicazione. Quello di cui vado fiero non è la lista di framework — è quanto poco tempo mi serve per passare da un'idea grezza a qualcosa di reale che puoi scaricare.",
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
    problem: { en: "The problem", it: "Il problema" },
    process: { en: "How I built it", it: "Come l'ho fatta" },
    solution: { en: "What it does", it: "Cosa fa" },
    features: { en: "Highlights", it: "Punti chiave" },
    steps: { en: "How it works", it: "Come funziona" },
    requirements: { en: "Requirements", it: "Requisiti" },
    stack: { en: "Built with", it: "Costruita con" },
    platforms: { en: "Platforms", it: "Piattaforme" },
    role: { en: "Role", it: "Ruolo" },
    timeframe: { en: "Time to ship", it: "Tempo di sviluppo" },
    year: { en: "Year", it: "Anno" },
    status: { en: "Status", it: "Stato" },
    backToWork: { en: "All apps", it: "Tutte le app" },
    nextProject: { en: "Next project", it: "Prossimo progetto" },
    visitAppStore: { en: "Download free on the App Store", it: "Scarica gratis sull'App Store" },
    joinTestflight: {
      en: "Try the TestFlight beta",
      it: "Prova la beta TestFlight",
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
