import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import { ThemeProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"

const inter = Inter({ subsets: ["latin"] })

export const dynamic = "force-dynamic"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  
  return {
    title: "NOOD International Properties - Global Real Estate Investment",
    description: "Discover premium international properties and investment opportunities with NOOD International Properties. Expert guidance for UAE, UK, USA, and Pakistan markets.",
    keywords: "international properties, real estate investment, UAE properties, UK properties, USA properties, Pakistan properties, property investment, ROI calculator",
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
      canonical: `/${locale}`,
    },
    openGraph: {
      title: "NOOD International Properties - Global Real Estate Investment",
      description: "Discover premium international properties and investment opportunities worldwide.",
      url: `https://nood-international.com/${locale}`,
      siteName: "NOOD International Properties",
      images: [
        {
          url: "/images/nood-official-logo.png",
          width: 1200,
          height: 630,
          alt: "NOOD International Properties",
        },
      ],
      locale: locale === "en" ? "en_US" : locale,
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
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  // const messages = await getMessages()
  const dir = "ltr" // isRTL(locale) ? "rtl" : "ltr"

  return (
    <html lang={locale} dir={dir} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
