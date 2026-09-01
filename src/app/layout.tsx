import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
import { AmbientGlow } from "@/components/ui/AmbientGlow";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { profileData } from "@/data/profile";
import { contactInfo } from "@/data/socials";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${profileData.preferredName} Tran (${profileData.fullName}) — AI Builder, Developer, Consultant & Educator`,
  description:
    "Personal command center and portfolio of Tran Thai Son (Tyson) — building AI agents, modern web applications, automation pipelines, and teaching AI-assisted software development.",
  keywords: [
    "Tyson Tran",
    "Tran Thai Son",
    "AI Developer",
    "AI Systems Builder",
    "Vibe Coding",
    "AI Automation Consultant",
    "Next.js Full-Stack Developer",
    "AI Mentorship",
    "AI Infrastructure",
    "Vietnam AI Developer",
    "Autonomous Agents",
  ],
  authors: [{ name: "Tran Thai Son (Tyson)" }],
  creator: "Tran Thai Son",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tysontran.dev",
    title: `${profileData.preferredName} Tran — AI Builder & Full-Stack Engineer`,
    description: profileData.heroLead,
    siteName: `${profileData.preferredName} Tran Portfolio & CV`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.preferredName} Tran — AI Systems Builder`,
    description: profileData.heroLead,
    creator: "@tysontran_ai",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profileData.fullName,
    alternateName: profileData.preferredName,
    jobTitle: profileData.title,
    description: profileData.heroLead,
    email: contactInfo.email,
    knowsAbout: [
      "Artificial Intelligence",
      "Large Language Models",
      "Autonomous AI Agents",
      "Full-Stack Web Development",
      "Next.js",
      "TypeScript",
      "Cloud Infrastructure",
      "AI Coding Tools & Vibe Coding",
    ],
  };

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${instrumentSerif.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-black text-foreground selection:bg-emerald-500/25 selection:text-emerald-300 antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ToastProvider>
            <AmbientGlow />
            <div className="relative flex min-h-screen flex-col">
              <Navbar />
              <main className="flex-1">{children}</main>
              <Footer />
            </div>
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
