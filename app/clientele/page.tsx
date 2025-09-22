import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { Footer } from "@/components/footer"

const BRAND = {
  tortoiseBlue: "var(--nood-accent)",
  subOnDark: "rgba(255,255,255,0.7)",
}

export default function ClientelePage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="clientele" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className="text-4xl sm:text-6xl font-bold mb-8 leading-tight"
                style={{ color: BRAND.tortoiseBlue }}
              >
                Our Clientele
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto mb-12"
                style={{ color: BRAND.subOnDark }}
              >
                Trusted by investors worldwide for premium property investment solutions
              </p>
            </div>
          </div>
        </section>

        {/* Client Testimonials */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>International Investors</h3>
                <p style={{ color: BRAND.subOnDark }}>High-net-worth individuals and families seeking premium international property investments</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Corporate Clients</h3>
                <p style={{ color: BRAND.subOnDark }}>Businesses and corporations looking for strategic property investments and portfolio diversification</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>First-time Investors</h3>
                <p style={{ color: BRAND.subOnDark }}>New investors seeking expert guidance for their first international property investment</p>
              </div>
            </div>
          </div>
        </section>
      </VideoBackground>

      <Footer />
    </div>
  )
}
