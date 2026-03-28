import type { Metadata } from "next";
import { Inter, Cinzel } from "next/font/google";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
