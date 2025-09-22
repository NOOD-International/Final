import Link from "next/link"
import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { Footer } from "@/components/footer"

const BRAND = {
  tortoiseBlue: "var(--nood-accent)",
  subOnDark: "rgba(255,255,255,0.7)",
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="homepage" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className="text-4xl sm:text-6xl font-bold mb-8 leading-tight"
                style={{ color: BRAND.tortoiseBlue }}
              >
                NOOD International Properties
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto mb-12"
                style={{ color: BRAND.subOnDark }}
              >
                Discover premium international properties and investment opportunities with expert guidance for UAE, UK, USA, and Pakistan markets.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/services"
                  className="inline-block px-8 py-4 rounded-lg text-lg font-medium transition-colors hover:opacity-80"
                  style={{
                    backgroundColor: BRAND.tortoiseBlue,
                    color: 'white'
                  }}
                >
                  Explore Services
                </Link>
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-lg text-lg font-medium transition-colors hover:opacity-80 border-2"
                  style={{
                    borderColor: BRAND.tortoiseBlue,
                    color: BRAND.tortoiseBlue
                  }}
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2
                className="text-3xl sm:text-4xl font-bold mb-4"
                style={{ color: BRAND.tortoiseBlue }}
              >
                Our Services
              </h2>
              <p
                className="text-lg"
                style={{ color: BRAND.subOnDark }}
              >
                Comprehensive real estate solutions tailored to your investment goals
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Property Investment</h3>
                <p style={{ color: BRAND.subOnDark }}>Expert guidance for international property investments</p>
              </div>
              <div className="text-center p-6 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>ROI Calculator</h3>
                <p style={{ color: BRAND.subOnDark }}>Calculate potential returns on your investments</p>
              </div>
              <div className="text-center p-6 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Consultation</h3>
                <p style={{ color: BRAND.subOnDark }}>Free consultation with our property experts</p>
              </div>
            </div>
          </div>
        </section>
      </VideoBackground>

      <Footer />
    </div>
  )
}