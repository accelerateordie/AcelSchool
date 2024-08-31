import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "./shared-components/header";
import Footer from "./shared-components/footer";
import { Helvetica_Neue } from "@/app/fonts"

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACEL school",
  description: "ACEL school website",
  metadataBase: new URL("https://www.acel.school"),
  keywords: ['ACEL', 'ACEL school', 'ACELschool'],
  authors: [{ name: 'ACEL' }, { name: 'ACEL', url: 'https://www.acel.school' }],
  openGraph: {
    siteName: 'ACEL school',
    title: "ACEL school",
    description: "ACEL school website",
    url: 'https://www.acel.school',
    type: "website",
    images: 'https://www.acel.school/img/acel-school-thumbnail.png',
  },
  twitter: {
    site: "https://www.acel.school",
    card: "summary_large_image",
    title: "ACEL school",
    description: "ACEL school website",
    images: "https://www.acel.school/img/acel-school-thumbnail.png"
  },
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: 'favicon-light.svg',
        href: 'favicon-light.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: 'favicon-dark.svg',
        href: 'favicon-dark.svg',
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
    <html lang="en">
      <body className={Helvetica_Neue.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
