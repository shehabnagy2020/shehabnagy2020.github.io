import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shehab Nagy | Software Engineer",
  description: "Software Engineer based in Cairo, Egypt. Building scalable systems and optimizing performance.",
  keywords: ["Software Engineer", "Developer", "Cairo", "Egypt", "Backend", "Full Stack"],
  authors: [{ name: "Shehab Nagy" }],
  openGraph: {
    title: "Shehab Nagy | Software Engineer",
    description: "Software Engineer based in Cairo, Egypt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-zinc-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
