"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FluidNavigation } from "@/components/fluid-navigation"
import { VideoBackground } from "@/components/video-background"
import { FluidTextReveal } from "@/components/fluid-text-reveal"
import { GlassmorphicCard, FluidGlassContainer } from "@/components/glassmorphic-card"
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Bot,
  User,
  Sparkles,
  Linkedin,
  Github,
  Globe,
  MessageSquare,
} from "lucide-react"

interface Message {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ContactPage() {
  const offices = [
    {
      country: "UAE",
      flag: "🇦🇪",
      city: "Abu Dhabi",
      address: "Al Maqam Tower, Al Maryah Island",
      phone: "+971 56 75 75 075",
      email: "admin@noodproperties.com",
    },
    {
      country: "UK",
      flag: "🇬🇧",
      city: "London",
      address: "71-75 Shelton Street",
      phone: "+44 20 4524 7923",
      email: "admin@noodproperties.com",
    },
    {
      country: "USA",
      flag: "🇺🇸",
      city: "San Jose",
      address: "San Jose, CA",
      phone: "+1 559 514 4516",
      email: "admin@noodproperties.com",
    },
    {
      country: "Pakistan",
      flag: "🇵🇰",
      city: "Islamabad",
      address: "Emirates Tower, F7 Markaz, Islamabad",
      phone: "+92 305 962 4131",
      email: "admin@noodproperties.com",
    },
    {
      country: "Russia",
      flag: "🇷🇺",
      city: "Moscow",
      address: "Moscow & St. Petersburg",
      phone: "+7 495 123 4567",
      email: "admin@noodproperties.com",
    },
  ]

  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: "Hello! I'm NOOD's AI assistant. How can I help you with real estate investment today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateBotResponse = async (userMessage: string): Promise<string> => {
    const lowerMessage = userMessage.toLowerCase()

    if (lowerMessage.includes("price") || lowerMessage.includes("cost") || lowerMessage.includes("budget")) {
      return "Property prices vary by location and type. Our team provides detailed market analysis and ROI projections. Would you like me to connect you with our investment specialists for personalized pricing?"
    }

    if (lowerMessage.includes("investment") || lowerMessage.includes("roi") || lowerMessage.includes("return")) {
      return "We offer excellent investment opportunities with strong rental yields and capital appreciation. Our ROI calculator can help you analyze specific properties. Would you like me to arrange a detailed investment presentation?"
    }

    if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
      return "Hello! Welcome to NOOD International Properties. I'm here to help you navigate the real estate market. Whether you're looking for investment properties, luxury homes, or commercial spaces, our team provides trusted access to the best opportunities. What type of property investment interests you?"
    }

    return "That's a great question about real estate! Our experienced team can provide detailed, personalized guidance for your specific situation. You can reach us directly at info@noodproperties.com or schedule a free consultation. What specific aspect of property investment would you like to explore further?"
  }

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputMessage("")
    setIsTyping(true)

    setTimeout(async () => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: await generateBotResponse(inputMessage),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "info@noodproperties.com",
      description: "Send us an email anytime",
      href: "mailto:info@noodproperties.com",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+971 56 7575 075",
      description: "Direct line to Abu Dhabi HQ",
      href: "tel:+971567575075",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "Al Maryah Island, Abu Dhabi",
      description: "Visit our headquarters",
      href: "https://maps.google.com/?q=Al+Maryah+Island+Abu+Dhabi",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 hours",
      description: "We'll get back to you quickly",
      href: "#",
    },
  ]

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/nood-international-properties-5156a136b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app", label: "LinkedIn" },
    { icon: Globe, href: "https://www.noodproperties.com", label: "Website" },
    { icon: MessageSquare, href: "https://wa.me/971567575075", label: "WhatsApp" },
  ]

  return (
    <div className="min-h-screen">
      <FluidNavigation />

      <VideoBackground role="contact" className="min-h-screen">
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-6xl mx-auto">
            <FluidTextReveal>
              <div className="text-center mb-16">
                <motion.h1
                  className="text-4xl sm:text-6xl font-bold mb-8 leading-tight text-white"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  Contact Us
                </motion.h1>
                <motion.p
                  className="text-xl text-white/70 max-w-3xl mx-auto mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Connect with our global team of real estate experts
                </motion.p>
              </div>
            </FluidTextReveal>

            <FluidGlassContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {offices.map((office, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassmorphicCard className="h-full">
                      <div className="flex items-center space-x-3 mb-6">
                        <span className="text-3xl">{office.flag}</span>
                        <div>
                          <h3 className="text-xl font-bold text-white">{office.country}</h3>
                          <p className="text-white/70">{office.city}</p>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <MapPin className="w-5 h-5 text-white/60 mt-1" />
                          <span className="text-white/80">{office.address}</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Phone className="w-5 h-5 text-white/60" />
                          <a href={`tel:${office.phone}`} className="text-white/80 hover:text-white transition-colors">
                            {office.phone}
                          </a>
                        </div>
                        <div className="flex items-center space-x-3">
                          <Mail className="w-5 h-5 text-white/60" />
                          <a
                            href={`mailto:${office.email}`}
                            className="text-white/80 hover:text-white transition-colors"
                          >
                            {office.email}
                          </a>
                        </div>
                      </div>
                    </GlassmorphicCard>
                  </motion.div>
                ))}
              </div>

              {/* AI Chat Section */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-3">
                  <motion.div
                    className="bg-black/30 border border-white/20 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-md"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                  >
                    {/* Chat Header */}
                    <div className="bg-gradient-to-r from-white/10 to-white/5 border-b border-white/20 p-6">
                      <div className="flex items-center space-x-4">
                        <motion.div
                          className="w-14 h-14 bg-gradient-to-r from-gray-600 to-gray-800 rounded-full flex items-center justify-center shadow-lg"
                          animate={{
                            boxShadow: [
                              "0 0 20px rgba(156,163,175,0.3)",
                              "0 0 30px rgba(156,163,175,0.5)",
                              "0 0 20px rgba(156,163,175,0.3)",
                            ],
                          }}
                          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                        >
                          <Bot className="w-7 h-7 text-white" />
                        </motion.div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <h3 className="text-xl font-bold text-white">NOOD AI Assistant</h3>
                            <motion.div
                              animate={{ scale: [1, 1.2, 1] }}
                              transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
                            >
                              <Sparkles className="w-5 h-5 text-gray-400" />
                            </motion.div>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                            <p className="text-sm text-white/70">Online • Responds instantly</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Messages */}
                    <div className="h-[500px] overflow-y-auto p-6 space-y-6 bg-gradient-to-b from-black/20 to-black/40">
                      <AnimatePresence>
                        {messages.map((message) => (
                          <motion.div
                            key={message.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -20, scale: 0.95 }}
                            transition={{ duration: 0.3 }}
                            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[80%] px-6 py-4 rounded-2xl shadow-lg ${
                                message.sender === "user"
                                  ? "bg-gradient-to-r from-gray-600 to-gray-800 text-white"
                                  : "bg-gradient-to-r from-white/10 to-white/5 text-white border border-white/20 backdrop-blur-md"
                              }`}
                            >
                              <div className="flex items-start space-x-3">
                                {message.sender === "bot" && (
                                  <motion.div
                                    animate={{ rotate: [0, 10, -10, 0] }}
                                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                                  >
                                    <Bot className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1" />
                                  </motion.div>
                                )}
                                {message.sender === "user" && (
                                  <User className="w-5 h-5 text-white flex-shrink-0 mt-1" />
                                )}
                                <div className="flex-1">
                                  <p className="text-sm leading-relaxed">{message.content}</p>
                                  <p className="text-xs mt-2 text-white/50">
                                    {message.timestamp.toLocaleTimeString([], {
                                      hour: "2-digit",
                                      minute: "2-digit",
                                    })}
                                  </p>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </AnimatePresence>

                      {/* Typing Indicator */}
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-start"
                        >
                          <div className="bg-gradient-to-r from-white/10 to-white/5 px-6 py-4 rounded-2xl border border-white/20 shadow-lg backdrop-blur-md">
                            <div className="flex items-center space-x-3">
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                              >
                                <Bot className="w-5 h-5 text-gray-400" />
                              </motion.div>
                              <div className="flex space-x-1">
                                {[0, 1, 2].map((i) => (
                                  <motion.div
                                    key={i}
                                    className="w-2 h-2 bg-gray-400 rounded-full"
                                    animate={{ y: [0, -8, 0] }}
                                    transition={{
                                      duration: 0.6,
                                      repeat: Number.POSITIVE_INFINITY,
                                      delay: i * 0.2,
                                    }}
                                  />
                                ))}
                              </div>
                              <span className="text-xs text-white/70">AI is thinking...</span>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      <div ref={messagesEndRef} />
                    </div>

                    {/* Message Input */}
                    <div className="border-t border-white/20 p-6 bg-black/40 backdrop-blur-md">
                      <form onSubmit={handleSendMessage} className="flex space-x-4">
                        <div className="flex-1 relative">
                          <input
                            type="text"
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            placeholder="Ask about properties..."
                            className="w-full px-6 py-4 bg-black/50 border border-white/20 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-400 focus:border-transparent text-sm shadow-inner text-white placeholder-white/50 backdrop-blur-md"
                          />
                        </div>
                        <motion.button
                          type="submit"
                          disabled={!inputMessage.trim()}
                          className="px-6 py-4 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-500 hover:to-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Send className="w-5 h-5" />
                        </motion.button>
                      </form>
                    </div>
                  </motion.div>
                </div>

                {/* Contact Methods */}
                <div className="lg:col-span-1 space-y-6">
                  <motion.div
                    className="space-y-4"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                  >
                    <h3 className="text-lg font-semibold text-white">Contact Methods</h3>
                    <div className="space-y-3">
                      {contactInfo.map((info, index) => (
                        <motion.a
                          key={index}
                          href={info.href}
                          className="flex items-center justify-between w-full p-4 bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/20 border border-white/20 hover:border-white/40 rounded-xl transition-all duration-300 group shadow-sm hover:shadow-md backdrop-blur-md"
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                        >
                          <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gray-600 to-gray-800 rounded-lg flex items-center justify-center group-hover:shadow-lg transition-all duration-300">
                              <info.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h4 className="font-medium text-white text-sm">{info.title}</h4>
                              <p className="text-xs text-white/70">{info.description}</p>
                            </div>
                          </div>
                          <div className="text-gray-400 font-semibold text-xs bg-white/10 px-2 py-1 rounded-full">
                            {info.value}
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>

                  {/* Follow Us */}
                  <motion.div
                    className="bg-black/30 border border-white/20 rounded-xl p-6 backdrop-blur-md"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    <h3 className="font-medium mb-4 text-white">Follow Us</h3>
                    <div className="flex space-x-3">
                      {socialLinks.map((social, index) => (
                        <motion.a
                          key={index}
                          href={social.href}
                          className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 hover:text-white transition-all duration-300 text-white/70"
                          aria-label={social.label}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <social.icon className="w-5 h-5" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </FluidGlassContainer>
          </div>
        </section>
      </VideoBackground>
    </div>
  )
}
