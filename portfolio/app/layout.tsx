import type { Metadata } from "next";
import { Instrument_Serif, Geist, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
});

const SITE_URL = "https://gianlucaauriemma.altervista.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Gianluca Auriemma — iOS & Frontend Developer",
    template: "%s | Gianluca Auriemma",
  },
  description:
    "Portfolio of Gianluca Auriemma. iOS, iPadOS and macOS apps built with Swift and SwiftUI. Based in Naples, available worldwide.",
  applicationName: "Gianluca Auriemma Portfolio",
  keywords: [
    "Gianluca Auriemma",
    "Gianluca Auriemma portfolio",
    "Gianluca Auriemma developer",
    "iOS Developer",
    "iPadOS Developer",
    "macOS Developer",
    "SwiftUI",
    "Swift",
    "Frontend Developer",
    "React Developer",
    "Next.js",
    "Naples",
    "Napoli",
    "Italy",
  ],
  authors: [{ name: "Gianluca Auriemma", url: SITE_URL }],
  creator: "Gianluca Auriemma",
  publisher: "Gianluca Auriemma",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["it_IT"],
    url: SITE_URL,
    siteName: "Gianluca Auriemma",
    title: "Gianluca Auriemma — iOS & Frontend Developer",
    description:
      "Portfolio of Gianluca Auriemma. iOS, iPadOS and macOS apps built with Swift and SwiftUI. Based in Naples, available worldwide.",
    images: [
      {
        url: "/me.jpg",
        width: 1200,
        height: 1200,
        alt: "Gianluca Auriemma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Gianluca Auriemma — iOS & Frontend Developer",
    description:
      "Portfolio of Gianluca Auriemma. iOS, iPadOS and macOS apps built with Swift and SwiftUI.",
    images: ["/me.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  category: "technology",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Gianluca Auriemma",
  alternateName: "Gianluca Auriemma Developer",
  url: SITE_URL,
  image: `${SITE_URL}/me.jpg`,
  jobTitle: "iOS & Frontend Developer",
  description:
    "iOS, iPadOS and macOS apps built with Swift and SwiftUI. Frontend development with React and Next.js.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Naples",
    addressRegion: "Campania",
    addressCountry: "IT",
  },
  knowsAbout: [
    "Swift",
    "SwiftUI",
    "iOS Development",
    "iPadOS Development",
    "macOS Development",
    "React",
    "Next.js",
    "TypeScript",
    "Frontend Development",
  ],
  sameAs: [
    "https://github.com/gianlucaauriemma",
    "https://www.linkedin.com/in/gianluca-auriemma-b1b65429b",
    "https://bsky.app/profile/gianlucaauriemma.bsky.social",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Gianluca Auriemma",
  url: SITE_URL,
  author: { "@type": "Person", name: "Gianluca Auriemma" },
  inLanguage: ["en", "it"],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${geist.variable} ${jetbrains.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||(!t&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
