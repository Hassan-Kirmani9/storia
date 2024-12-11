'use client'

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight } from 'lucide-react'
import GlowingButton from "@/components/ui/glowing-button"
import "./button.css"

export default function Home() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null)

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <div className="min-h-screen bg-[#050211] text-white">
      {/* Hero Section */}
      <motion.section
        className="relative h-screen flex items-center justify-center overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A103C] to-[#050211]" />
        <Image
          src="/bgimg.webp"
          alt="AI-powered media creation"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          priority
        />
        <motion.div
          className="relative z-10 text-center px-4 max-w-4xl mx-auto"
          variants={fadeInUp}
          initial="initial"
          animate="animate"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Unleashing AI Creativity for the Digital Era
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Stoira is a cutting-edge AI media house that blends technology and creativity to produce innovative and immersive experiences.
          </p>
          <button className="button-64 mx-auto flex justify-center  items-center text-center" role="button"><span className="text">Get Started</span></button>

        </motion.div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-[#0A0320]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Explore Our AI-Powered Offerings
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-12"
            variants={fadeInUp}
          >
            Discover the possibilities with Stoira's suite of AI-powered services and products.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={fadeInUp}
          >
            {[
              {
                title: "AI Film Making",
                description: "Create cinematic masterpieces with AI tools that automate production, enhance storytelling, and optimize editing for filmmakers at any level.",
              },
              {
                title: "AI Ad Films",
                description: "Bring your brand's vision to life with AI-driven advertisements. Our technology automates and elevates creativity, producing high-quality ads at lightning speed.",
              },
              {
                title: "Graphic Audiobooks",
                description: "Experience audiobooks like never before. Our graphic audiobooks combine immersive sound effects and narration to create a unique listening experience.",
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredService(index)}
                onHoverEnd={() => setHoveredService(null)}
              >
                <div className={`bg-[#1A103C] border border-purple-500/20 rounded-lg p-6 transition-all duration-300 ${hoveredService === index ? 'shadow-glow' : ''}`}>
                  <h3 className="text-2xl font-bold text-purple-400 mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <button className="w-full py-2 px-4 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center group">
                    Learn More <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#0A0320] to-[#050211]">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Powerful AI Tools at Your Fingertips
          </motion.h2>
          <motion.p
            className="text-center text-gray-400 mb-12"
            variants={fadeInUp}
          >
            Elevate your creative projects with our cutting-edge products.
          </motion.p>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={fadeInUp}
          >
            {[
              {
                title: "Audiobook App",
                description: "Enjoy a wide range of audiobooks with dynamic narration and effects. Our app enhances your listening experience, bringing stories to life.",
                action: "Explore the App",
              },
              {
                title: "AI Image Upscaling Tool",
                description: "Boost your image quality instantly with AI-driven upscaling. Improve clarity and resolution without losing detail, perfect for creatives and professionals.",
                action: "Learn More",
              },
              {
                title: "AI Music Creator",
                description: "Compose original music with ease. Our AI music creator helps you generate high-quality tracks for any project, all powered by AI.",
                action: "Try It Now",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                onHoverStart={() => setHoveredProduct(index)}
                onHoverEnd={() => setHoveredProduct(null)}
              >
                <div className={`bg-[#1A103C] border border-purple-500/20 rounded-lg p-6 transition-all duration-300 ${hoveredProduct === index ? 'shadow-glow' : ''}`}>
                  <h3 className="text-2xl font-bold text-pink-400 mb-4">{product.title}</h3>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <button className="w-full py-2 px-4 bg-pink-600 text-white rounded-md hover:bg-pink-700 transition-colors duration-300 flex items-center justify-center group">
                    {product.action} <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Stoira Section */}
      <section className="py-20 px-4 bg-[#050211]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Why Choose Stoira?
          </motion.h2>
          <motion.div
            className="grid sm:grid-cols-2 gap-6"
            variants={fadeInUp}
          >
            {[
              { title: "Innovative", description: "Pioneering the future of creative media with AI." },
              { title: "Efficient", description: "Save time, reduce costs, and automate processes with AI." },
              { title: "Immersive", description: "Enhance storytelling and user experiences with advanced AI technologies." },
              { title: "Versatile", description: "From films to ads and audiobooks, our AI solutions adapt to every creative need." },
            ].map((reason, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#1A103C] border border-purple-500/20 rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                  <h3 className="text-xl font-bold text-purple-400 mb-2">{reason.title}</h3>
                  <p className="text-gray-300">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            className="mt-12"
            variants={fadeInUp}
          >
            <GlowingButton>Experience AI Creativity in Action</GlowingButton>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-[#050211] to-[#0A0320]">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
            variants={fadeInUp}
          >
            Trusted by Creatives, Innovators, and Brands Worldwide
          </motion.h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={fadeInUp}
          >
            {[
              {
                quote: "Stoira's AI tools have revolutionized our filmmaking process. We're creating better content faster than ever before.",
                author: "Jane Doe, Independent Filmmaker",
              },
              {
                quote: "The AI-driven ad creation platform saved us countless hours and delivered stunning results for our clients.",
                author: "John Smith, Creative Director",
              },
              {
                quote: "Stoira's graphic audiobooks have taken our storytelling to a whole new level. Our listeners are hooked!",
                author: "Emily Brown, Audiobook Publisher",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-[#1A103C] border border-purple-500/20 rounded-lg p-6 hover:shadow-glow transition-all duration-300">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <p className="text-purple-400 font-semibold">{testimonial.author}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-[#0A0320]">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Ready to Elevate Your Creative Projects?
          </h2>
          <p className="text-gray-300 mb-8 text-lg">Join Stoira today and experience the future of AI-driven media.</p>
          <GlowingButton>Get Started Now</GlowingButton>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050211] border-t border-purple-500/20 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full" />
                <span className="font-bold text-xl">STOIRA</span>
              </div>
              <p className="text-gray-400">Unleashing AI Creativity for the Digital Era</p>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-400">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">AI Film Making</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">AI Ad Films</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Graphic Audiobooks</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-400">Products</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Audiobook App</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">AI Image Upscaling Tool</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">AI Music Creator</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg mb-4 text-purple-400">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-purple-500/20 text-center text-gray-400">
            <p>&copy; 2023 Stoira. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

