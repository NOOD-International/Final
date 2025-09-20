"use client"

import { NavBar } from "@/components/nav-bar"
import { Footer } from "@/components/footer"
import { motion } from "framer-motion"
import { Building2, MapPin, TrendingUp, Star, Eye } from "lucide-react"
import { Property3DSlider } from "@/components/property-3d-slider"
import { GalaxyBackground } from "@/components/galaxy-background"

const portfolioStats = [
  { label: "Total Portfolio Value", value: "AED 2.5B+", icon: TrendingUp },
  { label: "Properties Managed", value: "150+", icon: Building2 },
  { label: "Average ROI", value: "12.5%", icon: Star },
  { label: "Client Satisfaction", value: "98%", icon: Eye },
]

const featuredProjects = [
  {
    id: 1,
    title: "Saadiyat Cultural District",
    location: "Saadiyat Island, Abu Dhabi",
    type: "Residential Luxury 2bedroom Apartment",
    value: "AED 12.5M",
    completion: "2022",
    roi: "14%",
    image: "/saadiyat-cultural-district.png",
    description:
      "Luxury residential and commercial development adjacent to world-class museums and cultural institutions.",
    features: ["Beachfront Access", "Cultural Proximity", "Premium Amenities", "Investment Grade"],
  },
  {
    id: 2,
    title: "Al Reem Central Park",
    location: "Al Reem Island, Abu Dhabi",
    type: "Residential Complex",
    value: "AED 650M",
    completion: "2025",
    roi: "11%",
    image: "/al-reem-central-park.png",
    description: "Modern residential towers with panoramic city and sea views in the heart of Al Reem Island.",
    features: ["City Views", "Modern Design", "Transport Links", "Family Friendly"],
  },
  {
    id: 3,
    title: "Yas Marina Residences",
    location: "Yas Island, Abu Dhabi",
    type: "Waterfront Villas",
    value: "AED 4.2M",
    completion: "2023",
    roi: "13%",
    image: "/yas-marina-residences.png",
    description: "Exclusive waterfront villas with private marina access and world-class entertainment nearby.",
    features: ["Marina Access", "Entertainment Hub", "Luxury Finishes", "High ROI"],
  },
]

export default function Portfolio() {
  return (
    <main className="relative min-h-screen bg-black text-foreground overflow-x-hidden">
      {/* Galaxy Background */}
      <GalaxyBackground />

      {/* Content container */}
      <div className="relative z-10">
        <NavBar />

        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl sm:text-6xl font-bold mb-6">
                <span className="text-foreground">Luxury </span>
                <span className="metallic-text">Portfolio</span>
              </h1>
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-silver-400 to-transparent mx-auto mb-6" />
              <p className="text-xl text-silver-300 max-w-3xl mx-auto leading-relaxed">
                Discover our exclusive collection of premium Abu Dhabi properties, delivering exceptional returns and
                unparalleled luxury for discerning global investors.
              </p>
            </motion.div>

            {/* Portfolio Stats */}
            <motion.div
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {portfolioStats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/60 backdrop-blur-sm border border-silver-800/50 rounded-xl p-6 text-center"
                >
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-3" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-silver-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* YouTube Video Section */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">Portfolio </span>
                <span className="metallic-text">Showcase</span>
              </h2>
              <p className="text-lg text-silver-300 max-w-2xl mx-auto">
                Take a virtual tour of our luxury properties and see why NOOD is the preferred choice for premium real
                estate investment.
              </p>
            </motion.div>

            <motion.div
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/IeHfB8tn-7s?si=cfiwPuy3-TH2TSvd&autoplay=1&mute=1&loop=1&playlist=IeHfB8tn-7s&controls=1&rel=0"
                title="NOOD Portfolio "
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </motion.div>
          </div>
        </section>

        {/* 3D Property Slider */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">Featured </span>
                <span className="metallic-text">Properties</span>
              </h2>
              <p className="text-lg text-silver-300 max-w-2xl mx-auto">
                Explore our handpicked selection of premium properties with interactive 3D presentation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Property3DSlider />
            </motion.div>
          </div>
        </section>

        {/* Featured Projects Grid */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-4">
                <span className="text-foreground">Signature </span>
                <span className="metallic-text">Projects</span>
              </h2>
              <p className="text-lg text-silver-300 max-w-2xl mx-auto">
                Our flagship developments represent the pinnacle of luxury living and investment excellence in Abu
                Dhabi.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="bg-black/60 backdrop-blur-sm border border-silver-800/50 rounded-2xl overflow-hidden group hover:border-orange-500/50 transition-all duration-500"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-2">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{project.location}</span>
                        </div>
                        <div className="bg-green-500/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          <span className="text-green-400 text-sm font-semibold">{project.roi} ROI</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-silver-300 text-sm mb-3">{project.description}</p>
                      <div className="flex items-center justify-between text-sm text-silver-400">
                        <span>{project.type}</span>
                        <span>Completion: {project.completion}</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="text-2xl font-bold text-orange-500 mb-2">{project.value}</div>
                      <div className="flex flex-wrap gap-2">
                        {project.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-2 py-1 bg-silver-800/50 text-silver-300 text-xs rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <motion.button
                      className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3 px-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Project Details
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Investment Opportunity CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                <span className="text-foreground">Ready to </span>
                <span className="metallic-text">Invest?</span>
              </h2>
              <p className="text-lg text-silver-300 mb-8 max-w-2xl mx-auto">
                Join our exclusive network of global investors and secure your position in Abu Dhabi's most prestigious
                developments.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-lg font-semibold text-lg hover:from-orange-600 hover:to-red-700 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Schedule Consultation
                </motion.button>
                <motion.button
                  className="px-8 py-4 bg-transparent border-2 border-silver-600 text-silver-300 rounded-lg font-semibold text-lg hover:border-silver-400 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Download Portfolio
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  )
}
