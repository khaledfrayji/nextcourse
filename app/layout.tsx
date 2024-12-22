import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Tajawal } from 'next/font/google';
import { Montserrat } from 'next/font/google';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ['arabic'],
  weight: ['400', '700'],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ['latin'],
  weight: ['400', '700'],
});


export const metadata: Metadata = {
  title: "Khaled Frayji - Expert Web Designer & Developer",
  description:
    "Khaled Frayji is a skilled web designer and developer specializing in creating secure and aesthetically pleasing websites. Explore my portfolio and contact me for your web design needs.",
  other: {
    "theme-color": "#0d1117",
    "color-scheme": "dark only",
    "og:url": "khaledfrayji.com", //main url
    "og:image": "/joker.jpg", //when u share the link on apps the img would be displayed
    "og:type": "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${tajawal.variable} ${montserrat.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
