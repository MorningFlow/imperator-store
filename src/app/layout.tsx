import { Inter, Cinzel } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import LoadingWrapper from "@/components/LoadingWrapper";
import { BuildModalProvider } from "@/context/BuildModalContext";
import BuildModal from "@/components/ui/BuildModal";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Imperator Bows | Where Legacy Meets the Kill Shot",
  description: "Handcrafted bows that honor the tradition of the hunt. Premium Roman-inspired bows made in Texas.",
  icons: {
    icon: [
      { url: "/favicon-96x96.png?v=1", sizes: "96x96", type: "image/png" },
      { url: "/favicon.ico?v=1" },
      { url: "/favicon.svg?v=1", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png?v=1", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest?v=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cinzel.variable} h-full antialiased bg-obsidian text-offwhite`}
    >
    <body className="min-h-full flex flex-col font-sans overflow-x-hidden selection:bg-gold/30 selection:text-gold-light">
      <BuildModalProvider>
        <LoadingWrapper>
          {children}
        </LoadingWrapper>
        <BuildModal />
      </BuildModalProvider>
    </body>
    </html>
  );
}
