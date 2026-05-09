import { Analytics } from "@vercel/analytics/next";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "GCTERAPIA - Giovanna Costa | Massoterapia e Fisioterapia",
  description:
    "Sessões de massagem relaxante, terapia anti dor, fisioterapia e ventosaterapia. Atendimento humanizado com foco no bem-estar físico e emocional.",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.svg",
        type: "image/svg+xml",
        sizes: "32x32",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.svg",
        type: "image/svg+xml",
        sizes: "32x32",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
