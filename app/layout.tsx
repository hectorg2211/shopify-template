import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist_Mono, Ubuntu } from "next/font/google";
import { Providers } from "./providers";
import "./globals.css";

const ubuntu = Ubuntu({
  variable: "--font-ubuntu",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
});

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Heladería y yogur helado",
  description:
    "Helados, yogur helado y postres frescos. Ingredientes naturales, sabores únicos y el mejor sabor en cada bocado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${ubuntu.variable} ${bricolageGrotesque.variable} ${geistMono.variable}`}
    >
      <body className="font-sans antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
