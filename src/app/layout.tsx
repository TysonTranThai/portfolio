import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, EB_Garamond, Cinzel } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { ToastProvider } from "@/components/ui/Toast";
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

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-classical",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#1b64be" },
    { media: "(prefers-color-scheme: dark)", color: "#060a12" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: `${profileData.preferredName} Tran (${profileData.fullName}) — AI Builder, Developer & Architect`,
  description:
    "Personal command center and portfolio of Tran Thai Son (Tyson) — architecting autonomous AI agents, self-hosted LLM infrastructure, and modern software products.",
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
    title: `${profileData.preferredName} Tran — AI Builder & Architect`,
    description: profileData.heroLead,
    siteName: `${profileData.preferredName} Tran Portfolio & CV`,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profileData.preferredName} Tran — AI Systems Builder`,
    description: profileData.heroLead,
    creator: "@tysontran_ai",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${ebGaramond.variable} ${cinzel.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen bg-[#070b14] text-slate-100 selection:bg-amber-400/30 selection:text-amber-200 antialiased font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange={false}
        >
          <ToastProvider>
            <div className="relative flex min-h-screen flex-col bg-[#070b14]">
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
