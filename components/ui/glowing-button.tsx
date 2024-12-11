import React from 'react'
import { motion } from 'framer-motion'

interface GlowingButtonProps {
  children: React.ReactNode
  className?: string
}

const GlowingButton: React.FC<GlowingButtonProps> = ({ children, className = '' }) => {
  return (
    <motion.button
      className={`relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-full overflow-hidden ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="absolute inset-0 bg-white opacity-25"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 0.25 }}
        transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
        style={{ borderRadius: '100%' }}
      />
    </motion.button>
  )
}

export default GlowingButton

