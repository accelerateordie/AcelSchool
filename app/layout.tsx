import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "./globals.scss";
import Header from "./shared-components/header";
import Footer from "./shared-components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ACEL schools",
  description: "ACEL schools website",
  metadataBase: new URL("https://acel.school"),
  keywords: ['ACEL', 'ACEL schools','ACELschools'],
  authors: [{ name: 'ACEL' }, { name: 'ACEL', url: 'https://acel.school' }],
  openGraph: {
    siteName: 'ACEL schools',
    title: "ACEL schools",
    description: "ACEL schools website",
    url: 'https://acel.school',
    type: "website",
    images: 'https://acelschool.org/img/acel-school-thumbnail.png',
  },
  twitter: {
    site: "https://acel.school",
    card: "summary_large_image",
    title: "ACEL schools",
    description: "ACEL schools website",
    images: "https://acel.school/img/acel-school-thumbnail.png"
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
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
        </body>
    </html>
  );
}
