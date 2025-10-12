"use client"

import { motion } from "framer-motion"
import { Button } from "@mui/material"
import { FaWhatsapp } from "react-icons/fa"
// import { DotLottieReact } from "@lottiefiles/dotlottie-react"

export default function CtaSection() {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de agendar uma consulta com a nutricionista Rafaella Oliveira.",
  )
  const whatsappLink = `https://wa.me/5551992450130?text=${whatsappMessage}`

  return (
    <section className="py-24 bg-gradient-to-br from-primary/10 via-accent/20 to-secondary/30 relative overflow-hidden">
      {/* Background Animation - Temporarily disabled */}
      {/* <div className="absolute inset-0 opacity-20 pointer-events-none">
        <DotLottieReact src="https://lottie.host/embed/wellness-leaves.json" loop autoplay className="w-full h-full" />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-balance section-title">
            Vamos Juntos?
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed text-pretty">
            Você merece um caminho só seu, leve e com apoio de verdade.{" "}
            <span className="text-primary font-semibold">Conte comigo!</span>
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button
              variant="contained"
              size="large"
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<FaWhatsapp size={28} />}
              sx={{
                backgroundColor: "var(--primary)",
                color: "var(--primary-foreground)",
                padding: "20px 48px",
                fontSize: "1.25rem",
                fontWeight: 600,
                borderRadius: "100px",
                textTransform: "none",
                boxShadow: "0 12px 32px rgba(0,0,0,0.15)",
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: "var(--primary)",
                  transform: "translateY(-4px)",
                  boxShadow: "0 16px 48px rgba(0,0,0,0.25)",
                },
              }}
            >
              Agende sua consulta
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
