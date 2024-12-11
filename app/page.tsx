'use client'

import Image from "next/image"
import "./button.css"

export default function Home() {

  return (
    <div className="min-h-screen bg-[#050211] text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A103C] to-[#050211]" />
        <Image
          src="/bgimg.webp"
          alt="AI-powered media creation"
          width={1920}
          height={1080}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          priority
        />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            Unleashing AI Creativity for the Digital Era
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Stoira is a cutting-edge AI media house that blends technogy and creativity to produce innovative and immersive experiences.
          </p>
          <button className="button-64 mx-auto flex justify-center items-center text-center" role="button">
            <span className="text">Get Started</span>
          </button>
        </div>
      </section>
      {/* Services Section */}
     
    </div>
  )
}

