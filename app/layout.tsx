import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://albergues-dosquebradas.vercel.app";
const TITLE = "Albergues Oficiales de Dosquebradas";
const DESCRIPTION =
  "Consulta los albergues oficiales disponibles en Dosquebradas, Risaralda, sus ubicaciones y cómo llegar.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: `%s · ${TITLE}`,
  },
  description: DESCRIPTION,
  keywords: [
    "albergues Dosquebradas",
    "albergues oficiales Risaralda",
    "emergencia Dosquebradas",
    "gestión del riesgo Dosquebradas",
    "Alcaldía de Dosquebradas",
    "puntos de albergue Colombia",
  ],
  applicationName: TITLE,
  authors: [{ name: "Edil Jhon Stiven Sanpedro Osorio" }],
  category: "government",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: TITLE,
    locale: "es_CO",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#186339",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GovernmentService",
  name: TITLE,
  description: DESCRIPTION,
  areaServed: {
    "@type": "City",
    name: "Dosquebradas",
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Risaralda, Colombia",
    },
  },
  provider: {
    "@type": "GovernmentOrganization",
    name: "Alcaldía de Dosquebradas",
    url: "https://www.dosquebradas.gov.co/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#contenido" className="skip-link">
          Saltar al contenido principal
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
