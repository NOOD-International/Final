import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/providers/ThemeProvider"
import { MainNav } from "@/components/navigation/MainNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "NOOD International Properties - Global Real Estate Investment",
  description:
    "Discover premium international properties and investment opportunities with NOOD International Properties. Expert guidance for UAE, UK, USA, and Pakistan markets.",
  keywords:
    "international properties, real estate investment, UAE properties, UK properties, USA properties, Pakistan properties, property investment, ROI calculator",
  authors: [{ name: "NOOD International Properties" }],
  creator: "NOOD International Properties",
  publisher: "NOOD International Properties",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://nood-international.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "NOOD International Properties - Global Real Estate Investment",
    description: "Discover premium international properties and investment opportunities worldwide.",
    url: "https://nood-international.com",
    siteName: "NOOD International Properties",
    images: [
      {
        url: "/images/nood-official-logo.png",
        width: 1200,
        height: 630,
        alt: "NOOD International Properties",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NOOD International Properties - Global Real Estate Investment",
    description: "Discover premium international properties and investment opportunities worldwide.",
    images: ["/images/nood-official-logo.png"],
  },
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
  verification: {
    google: "your-google-verification-code",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <MainNav />
          <main className="min-h-screen">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
