'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Animation variants
const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const containerVariants = {
  animate: { transition: { staggerChildren: 0.2 } }
}

const floatingAnimation = {
  animate: {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
  }
}

interface GlowingButtonProps {
  children: React.ReactNode
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ children }) => (
  <motion.button
    variants={floatingAnimation}
    animate="animate"
    className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold 
               hover:from-purple-500 hover:to-pink-500 transition-all duration-300
               shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
  >
    {children}
  </motion.button>
)

const MusicWaves = () => {
  const circles = Array.from({ length: 10 }, (_, i) => ({
    delay: i * 0.5,
    scale: 1 + i * 0.6,
  }))

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64">
      {circles.map(({ delay, scale }, index) => (
        <motion.div
          key={index}
          className="absolute inset-0 rounded-full border-2 border-purple-500/20"
          initial={{ scale: 1, opacity: 0 }}
          animate={{
            scale: [1, scale],
            opacity: [0.6, 0],
          }}
          transition={{
            duration: 4,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "loop",
          }}
        />
      ))}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src="/music_lady.webp"
          alt="Person listening to music"
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default function WhyChooseSection() {
  const reasons = [
    { title: "Innovative", description: "Pioneering the future of creative media with AI." },
    { title: "Efficient", description: "Save time, reduce costs, and automate processes with AI." },
    { title: "Immersive", description: "Enhance storytelling and user experiences with advanced AI technologies." },
    { title: "Versatile", description: "From films to ads and audiobooks, our AI solutions adapt to every creative need." },
  ]

  return (
    <section className="py-20 px-4 bg-[#050211] relative overflow-hidden">
      <MusicWaves />
      <motion.div 
        className="max-w-4xl mx-auto text-center relative z-10"
        variants={containerVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
      >
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
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div className="bg-[#1A103C]/80 backdrop-blur-sm border border-purple-500/20 rounded-lg p-6 
                            transition-all duration-300
                            hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]
                            hover:border-purple-500/30">
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
      </motion.div>
    </section>
  )
}

