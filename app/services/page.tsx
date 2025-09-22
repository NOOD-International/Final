import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { Footer } from "@/components/footer"

const BRAND = {
  tortoiseBlue: "var(--nood-accent)",
  subOnDark: "rgba(255,255,255,0.7)",
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="services" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className="text-4xl sm:text-6xl font-bold mb-8 leading-tight"
                style={{ color: BRAND.tortoiseBlue }}
              >
                Our Services
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto mb-12"
                style={{ color: BRAND.subOnDark }}
              >
                Comprehensive real estate solutions tailored to your investment goals
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Property Investment</h3>
                <p style={{ color: BRAND.subOnDark }}>Expert guidance for international property investments with comprehensive market analysis</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>ROI Calculator</h3>
                <p style={{ color: BRAND.subOnDark }}>Calculate potential returns on your investments with our advanced calculator</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Consultation</h3>
                <p style={{ color: BRAND.subOnDark }}>Free consultation with our property experts to plan your investment strategy</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Market Analysis</h3>
                <p style={{ color: BRAND.subOnDark }}>In-depth market research and property valuation for informed decisions</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Legal Support</h3>
                <p style={{ color: BRAND.subOnDark }}>Complete legal assistance for property transactions and documentation</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Property Management</h3>
                <p style={{ color: BRAND.subOnDark }}>Professional property management services for your investments</p>
              </div>
            </div>
          </div>
        </section>
      </VideoBackground>

      <Footer />
    </div>
  )
}
