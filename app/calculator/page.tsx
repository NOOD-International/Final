import { VideoBackground } from "@/components/video-background"
import { Footer } from "@/components/footer"
import { ROICalculator } from "@/components/calculator/ROICalculator"

const BRAND = {
  tortoiseBlue: "var(--nood-accent)",
  subOnDark: "rgba(255,255,255,0.7)",
}

export default function CalculatorPage() {
  return (
    <div className="min-h-screen">
      <VideoBackground role="calculator" className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1
                className="text-4xl sm:text-6xl font-bold mb-8 leading-tight"
                style={{ color: BRAND.tortoiseBlue }}
              >
                ROI Calculator
              </h1>
              <p
                className="text-xl max-w-3xl mx-auto mb-12"
                style={{ color: BRAND.subOnDark }}
              >
                Calculate your potential returns on international property investments
              </p>
            </div>

            {/* New ROI Calculator Component */}
            <ROICalculator />
          </div>
        </section>
      </VideoBackground>

      <Footer />
    </div>
  )
}
