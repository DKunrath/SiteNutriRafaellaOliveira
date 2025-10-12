"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

interface SplashScreenProps {
  onComplete: () => void
}

export default function SplashScreen({ onComplete }: SplashScreenProps) {
  const [dotIndex, setDotIndex] = useState(0)

  useEffect(() => {
    // Animação dos pontos: muda a cor a cada 1 segundo
    const dotInterval = setInterval(() => {
      setDotIndex(prev => (prev + 1) % 3)
    }, 1000)

    // Remove splash screen após 3 segundos
    const splashTimeout = setTimeout(() => {
      onComplete()
    }, 3000)

    return () => {
      clearInterval(dotInterval)
      clearTimeout(splashTimeout)
    }
  }, [onComplete])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-primary/5"
        style={{
          background: `
            radial-gradient(circle at 20% 80%, rgba(123, 19, 54, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 20%, rgba(255, 255, 255, 0.15) 0%, transparent 50%),
            linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(250, 248, 246, 0.98) 100%)
          `
        }}
      >
        <div className="flex flex-col items-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ 
              duration: 0.8, 
              ease: "easeOut",
              type: "spring",
              stiffness: 100
            }}
            className="relative w-80 h-32 md:w-96 md:h-40"
          >
            <Image
              src="/rafaella_logo_comprida_transparente.png"
              alt="Rafaella Oliveira - Nutricionista"
              fill
              className="object-contain drop-shadow-lg"
              priority
            />
          </motion.div>

          {/* Loading Dots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center space-x-3"
          >
            {[0, 1, 2].map((index) => (
              <motion.div
                key={index}
                className="w-4 h-4 rounded-full transition-all duration-300"
                style={{
                  backgroundColor: dotIndex === index 
                    ? '#7b1336' 
                    : dotIndex < index 
                      ? '#e5e7eb' 
                      : '#a61e4d'
                }}
                animate={{
                  scale: dotIndex === index ? 1.2 : 1,
                  opacity: dotIndex === index ? 1 : 0.7
                }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 30
                }}
              />
            ))}
          </motion.div>

          {/* Loading Text */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="text-muted-foreground text-sm font-medium tracking-wide"
          >
            Carregando...
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}