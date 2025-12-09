import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { CookieConsent } from "@/components/layout/cookie-consent"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  title: {
    default: "Loli Construct - Montaj și Reparații Acoperișuri Timișoara | Servicii Premium",
    template: "%s | Loli Construct - Acoperișuri Timișoara",
  },
  description:
    "Servicii profesionale de montaj și reparații acoperișuri în Timișoara și împrejurimi. Standarde germane de calitate, echipă experimentată, garanție extinsă. Disponibili 24/7. Solicită ofertă gratuită!",
  keywords: [
    "acoperișuri Timișoara",
    "montaj acoperiș",
    "reparații acoperiș",
    "dulgherie acoperiș",
    "învelitoare",
    "țiglă metalică",
    "jgheaburi",
    "acoperiș casă",
    "renovare acoperiș",
    "construcții acoperișuri",
    "firma acoperișuri Timișoara",
    "Loli Construct",
  ],
  authors: [{ name: "Loli Construct" }],
  creator: "Loli Construct",
  publisher: "Loli Construct",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ro_RO",
    url: "https://loliconstruct.ro",
    siteName: "Loli Construct",
    title: "Loli Construct - Montaj și Reparații Acoperișuri Timișoara",
    description:
      "Servicii profesionale de montaj și reparații acoperișuri în Timișoara. Standarde germane, echipă experimentată, garanție extinsă.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Loli Construct - Acoperișuri Premium Timișoara",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Loli Construct - Acoperișuri Premium Timișoara",
    description: "Servicii profesionale de montaj și reparații acoperișuri în Timișoara și împrejurimi.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://loliconstruct.ro",
    languages: {
      "ro-RO": "https://loliconstruct.ro",
    },
  },
  category: "Construcții",
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#242f40",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

// JSON-LD structured data for local business
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  name: "Loli Construct",
  image: "https://loliconstruct.ro/logo.png",
  "@id": "https://loliconstruct.ro",
  url: "https://loliconstruct.ro",
  telephone: "+40759614930",
  email: "231321@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Timișoara",
    addressRegion: "Timiș",
    addressCountry: "RO",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 45.7489,
    longitude: 21.2087,
  },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  sameAs: [],
  priceRange: "$$",
  areaServed: [
    { "@type": "City", name: "Timișoara" },
    { "@type": "City", name: "Lugoj" },
    { "@type": "City", name: "Arad" },
    { "@type": "City", name: "Reșița" },
    { "@type": "City", name: "Deva" },
  ],
  description:
    "Servicii profesionale de montaj și reparații acoperișuri în Timișoara și împrejurimi. Standarde germane de calitate.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ro">
      <head>
        {/* GTM Script Placeholder */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              // GTM Container ID will be added here
              // (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              // new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              // j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              // 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              // })(window,document,'script','dataLayer','GTM-XXXXXX');
            `,
          }}
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        {/* GTM noscript placeholder */}
        <noscript>
          {/* <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX" height="0" width="0" style="display:none;visibility:hidden"></iframe> */}
        </noscript>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  )
}
