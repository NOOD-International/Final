"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
// Removed duplicate NavBar - using FluidNavigation from layout
import { Footer } from "@/components/footer"
import { TranslatableComponent } from "@/components/translatable-component"
import { Building2, Users, Award, Globe, Star, MapPin, Calendar } from "lucide-react"

const clientCategories = [
  {
    title: "High Net Worth Individuals",
    description: "Ultra-wealthy clients seeking premium investment opportunities",
    count: "150+",
    icon: Users,
    color: "bg-gradient-to-r from-silver-600 to-silver-800",
  },
  {
    title: "Institutional Investors",
    description: "Pension funds, sovereign wealth funds, and investment firms",
    count: "25+",
    icon: Building2,
    color: "bg-gradient-to-r from-silver-700 to-silver-900",
  },
  {
    title: "Family Offices",
    description: "Multi-generational wealth management entities",
    count: "40+",
    icon: Award,
    color: "bg-gradient-to-r from-silver-600 to-silver-800",
  },
  {
    title: "International Corporations",
    description: "Global companies expanding their real estate portfolios",
    count: "30+",
    icon: Globe,
    color: "bg-gradient-to-r from-silver-700 to-silver-900",
  },
]


const globalReach = [
  { region: "Middle East", clients: "120+", flag: "🇦🇪" },
  { region: "United Kingdom", clients: "85+", flag: "🇬🇧" },
  { region: "North America", clients: "45+", flag: "🇺🇸" },
  { region: "Asia Pacific", clients: "65+", flag: "🇵🇰" },
]

export default function ClientelePage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-black text-silver-100">
      {/* Navigation handled by FluidNavigation in layout */}

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <TranslatableComponent>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-silver-200 to-silver-400 bg-clip-text text-transparent">
              Our Distinguished Clientele
            </h1>
            <p className="text-xl md:text-2xl text-silver-300 mb-8 max-w-4xl mx-auto">
              Serving the world's most sophisticated investors with premium real estate investment solutions for UAE realestate market across global markets
            </p>
          </TranslatableComponent>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-silver-200 mb-2">500+</div>
              <div className="text-silver-400">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-silver-200 mb-2">$2.5B+</div>
              <div className="text-silver-400">Transaction Volume</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-silver-200 mb-2">98%</div>
              <div className="text-silver-400">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-silver-200 mb-2">25+</div>
              <div className="text-silver-400">Countries Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <TranslatableComponent>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-silver-200">Client Categories</h2>
          </TranslatableComponent>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {clientCategories.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card
                  key={index}
                  className={`bg-silver-900/20 border-silver-800/50 hover:bg-silver-800/30 transition-all duration-300 cursor-pointer ${
                    selectedCategory === category.title ? "ring-2 ring-silver-400" : ""
                  }`}
                  onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)}
                >
                  <CardHeader className="text-center">
                    <div
                      className={`w-16 h-16 mx-auto rounded-full ${category.color} flex items-center justify-center mb-4`}
                    >
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-silver-200 text-lg">{category.title}</CardTitle>
                    <div className="text-2xl font-bold text-silver-300">{category.count}</div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-silver-400 text-center">{category.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Global Reach */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-silver-950/20">
        <div className="max-w-7xl mx-auto">
          <TranslatableComponent>
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-silver-200">
              Global Client Distribution
            </h2>
          </TranslatableComponent>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {globalReach.map((region, index) => (
              <Card key={index} className="bg-silver-900/30 border-silver-800/50 text-center">
                <CardContent className="pt-6">
                  <div className="text-4xl mb-3">{region.flag}</div>
                  <h3 className="text-lg font-semibold text-silver-200 mb-2">{region.region}</h3>
                  <div className="text-2xl font-bold text-silver-300">{region.clients}</div>
                  <div className="text-sm text-silver-400">Active Clients</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-silver-900/30 to-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <TranslatableComponent>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-silver-200">
              Join Our Distinguished Client Network
            </h2>
            <p className="text-xl text-silver-300 mb-8">
              Experience the NOOD International Properties difference with personalized service and exclusive
              opportunities
            </p>
          </TranslatableComponent>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-silver-600 hover:bg-silver-700 text-white">
              Schedule Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-silver-600 text-silver-300 hover:bg-silver-800/50 bg-transparent"
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
