"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ModeToggle } from "@/components/mode-toggle"
import { GraduationCap, HeartHandshake, User2, Users2, Zap } from "lucide-react"
import Link from "next/link"
import { Icons } from "@/components/icons"
import Image from "next/image"

const features = [
  {
    name: "Engaging Learning Experience",
    description: "Interactive lessons and real-world projects make learning fun and effective.",
    icon: GraduationCap,
  },
  {
    name: "Personalized Mentorship",
    description: "Receive guidance and support from experienced mentors to achieve your goals.",
    icon: User2,
  },
  {
    name: "Collaborative Community",
    description: "Connect with fellow learners, share ideas, and build lasting relationships.",
    icon: Users2,
  },
  {
    name: "Career Advancement",
    description: "Gain in-demand skills and access career resources to unlock new opportunities.",
    icon: HeartHandshake,
  },
]

// Testimonials removed - will be added when verifiable client reviews are available

export default function DashboardPage() {
  return (
    <div className="container relative">
      <header className="flex items-center justify-between py-10">
        <Link href="#" className="flex items-center space-x-2">
          <Icons.logo className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">Acme Corp</span>
        </Link>

        <div className="flex items-center space-x-2">
          <ModeToggle />

          {/* Use Button asChild to style Links correctly */}
          <Button variant="secondary" asChild>
            <Link href="/login">Login</Link>
          </Button>

          <Button asChild>
            <Link href="/sign-up">Sign Up</Link>
          </Button>
        </div>
      </header>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container grid items-center gap-6 lg:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Unlock Your Potential with Expert-Led Courses
              </h1>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Transform your career with our comprehensive online courses. Learn from industry experts and gain
                in-demand skills.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800 px-8 py-3" asChild>
                <Link href="/services">Services</Link>
              </Button>

              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-green-500 hover:from-emerald-600 hover:to-green-600 text-white font-medium px-8 py-3" asChild>
                <Link href="/consultation">
                  <span className="inline-flex items-center">
                    <Zap className="w-5 h-5 mr-2" />
                    Free Consultation
                  </span>
                </Link>
              </Button>
            </div>
          </div>

          <div className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              width={1280}
              height={720}
              className="h-full w-full object-cover object-center"
              priority
            />
          </div>
        </div>
      </section>

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {features.map((feature, index) => (
              <Card key={index} className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <feature.icon className="h-5 w-5 text-primary" />
                    <span>{feature.name}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials section removed - will be added when verifiable client reviews are available */}

      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="grid items-center gap-6 lg:grid-cols-2">
            <div className="mx-auto aspect-video overflow-hidden rounded-xl sm:w-full">
              <Image
                src="/cta-image.png"
                alt="CTA Image"
                width={1280}
                height={720}
                className="h-full w-full object-cover object-center"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Transform Your Career?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join our community of learners and start your journey towards a brighter future.
                </p>
              </div>

              <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-medium" asChild>
                <Link href="/sign-up">Get Started Today</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t py-12">
        <div className="container flex flex-col items-center justify-between md:flex-row">
          <p className="text-gray-500">&copy; {new Date().getFullYear()} Acme Corp. All rights reserved.</p>
          <div className="mt-4 flex space-x-4 md:mt-0">
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-500 hover:text-gray-700">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
