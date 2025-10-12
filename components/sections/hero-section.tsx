"use client"

import { motion } from "framer-motion"
// import { DotLottieReact } from "@lottiefiles/dotlottie-react"
import { Button } from "@mui/material"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"

export default function HeroSection() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta com a nutricionista Rafaella Oliveira.",
  )
  const whatsappLink = `https://wa.me/5551992450130?text=${whatsappMessage}`

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_background.jpeg"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={85}
        />
        <div className="absolute inset-0 bg-background/70"></div>
      </div>

      {/* Lottie Background Animation - Temporarily disabled */}
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none">
        <DotLottieReact src="https://lottie.host/embed/health-wellness.json" loop autoplay className="w-full h-full" />
      </div> */}

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center h-auto lg:h-screen max-w-6xl mx-auto">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 max-w-lg text-center lg:text-left relative z-20 mb-8 lg:mb-0"
          >
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="mb-6 flex justify-center lg:justify-start"
            >
              <Image
                src="/rafaella_logo_comprida_transparente.png"
                alt="Rafaella Oliveira Logo"
                width={360}
                height={96}
                className="h-20 w-auto object-contain"
                priority
              />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight text-balance relative"
              style={{
                fontFamily: '"Inter", "Helvetica Neue", system-ui, -apple-system, sans-serif',
                fontWeight: '800',
                letterSpacing: '-0.025em',
                textShadow: '0 8px 24px rgba(0,0,0,0.12)',
                background: 'linear-gradient(135deg, #0f0f0f 0%, #2a2a2a 30%, #4a4a4a 70%, #1a1a1a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
              }}
            >
              NUTRICIONISTA ESPECIALISTA EM{' '}
              <span 
                className="text-primary block md:inline relative"
                style={{
                  background: 'linear-gradient(135deg, #7b1336 0%, #b8245a 25%, #d63384 50%, #b8245a 75%, #7b1336 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  backgroundSize: '200% 200%',
                  animation: 'gradientShift 4s ease-in-out infinite',
                  textShadow: '0 6px 20px rgba(123, 19, 54, 0.4)',
                  fontWeight: '900',
                  letterSpacing: '-0.01em',
                  filter: 'drop-shadow(0 4px 8px rgba(123, 19, 54, 0.2))',
                }}
              >
                NUTRIÇÃO ESPORTIVA
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed text-pretty"
            >
              Transforme sua relação com a alimentação através de um atendimento personalizado, acolhedor e baseado em
              evidências científicas.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                variant="contained"
                size="large"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                startIcon={<FaWhatsapp size={24} />}
                sx={{
                  backgroundColor: "var(--primary)",
                  color: "var(--primary-foreground)",
                  padding: "20px 48px",
                  fontSize: "1.35rem",
                  fontWeight: 600,
                  borderRadius: "100px",
                  textTransform: "none",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "var(--primary)",
                    transform: "translateY(-2px)",
                    boxShadow: "0 12px 32px rgba(0,0,0,0.18)",
                  },
                }}
              >
                Agendar Consulta
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full lg:absolute lg:top-0 lg:right-0 lg:h-full lg:w-1/2 z-10 flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:w-full lg:max-w-none lg:h-full">
              {/* Box decorativa apenas no mobile */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl transform rotate-3 lg:hidden"></div>
              
              {/* Imagem Mobile */}
              <Image
                src="/hero_section_image_1.jpg"
                alt="Rafaella Oliveira - Nutricionista"
                width={400}
                height={500}
                className="object-cover object-center w-full h-auto rounded-3xl relative z-10 lg:hidden"
                priority
              />
              
              {/* Imagem Desktop */}
              <Image
                src="/hero_image_certa.png"
                alt="Rafaella Oliveira - Nutricionista"
                width={600}
                height={700}
                className="object-cover object-right h-full w-auto rounded-none hidden lg:block"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
