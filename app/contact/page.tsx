import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { Footer } from "@/components/footer"

const BRAND = {
  tortoiseBlue: "var(--nood-accent)",
  subOnDark: "rgba(255,255,255,0.7)",
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="contact" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className="text-4xl sm:text-6xl font-bold mb-8 leading-tight"
                style={{ color: BRAND.tortoiseBlue }}
              >
                Contact Us
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto mb-12"
                style={{ color: BRAND.subOnDark }}
              >
                Get in touch with our expert team for personalized property investment guidance
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>UAE Office</h3>
                <p className="mb-2" style={{ color: BRAND.subOnDark }}>Al Maryah Island, Abu Dhabi</p>
                <p className="mb-2" style={{ color: BRAND.subOnDark }}>+971 56 7575 075</p>
                <p style={{ color: BRAND.subOnDark }}>info@noodproperties.com</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>UK Office</h3>
                <p className="mb-2" style={{ color: BRAND.subOnDark }}>Canary Wharf, London</p>
                <p className="mb-2" style={{ color: BRAND.subOnDark }}>+44 20 7946 0958</p>
                <p style={{ color: BRAND.subOnDark }}>london@noodproperties.com</p>
              </div>
              <div className="text-center p-8 rounded-xl backdrop-blur-sm border border-opacity-20" style={{ backgroundColor: 'rgba(31,111,95,0.05)', borderColor: BRAND.tortoiseBlue }}>
                <h3 className="text-2xl font-semibold mb-4" style={{ color: BRAND.tortoiseBlue }}>Pakistan Office</h3>
                <p className="mb-2" style={{ color: BRAND.subOnDark }}>Emirates Tower, F7 Markaz, Islamabad</p>
                <p className="mb-2" style={{ color: BRAND.subOnDark }}>+92 305 962 4131</p>
                <p style={{ color: BRAND.subOnDark }}>islamabad@noodproperties.com</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-16 text-center">
              <h3 className="text-2xl font-semibold mb-8" style={{ color: BRAND.tortoiseBlue }}>
                Follow Us
              </h3>
              <div className="flex justify-center space-x-6">
                <a href="https://www.facebook.com/share/1SYK2GjyMZ/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                  Facebook
                </a>
                <a href="https://www.instagram.com/nood.uae?igsh=eThtdGticHEwcnhj&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                  Instagram
                </a>
                <a href="https://x.com/nood_ae?s=21" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                  X (Twitter)
                </a>
                <a href="https://www.linkedin.com/in/nood-international-properties-5156a136b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </section>
      </VideoBackground>

      <Footer />
    </div>
  )
}
