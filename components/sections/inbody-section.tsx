"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Activity, TrendingUp, Heart, Zap, Scale, Target, ChevronLeft, ChevronRight } from "lucide-react"
import { IconButton } from "@mui/material"
// import { DotLottieReact } from "@lottiefiles/dotlottie-react"

const metrics = [
  { icon: Scale, label: "IMC" },
  { icon: Activity, label: "Peso corporal" },
  { icon: Zap, label: "Metabolismo basal" },
  { icon: TrendingUp, label: "Percentual de gordura" },
  { icon: Target, label: "Massa muscular esquelética" },
  { icon: Heart, label: "Gordura visceral" },
]

const evolutionPhotos = [
  {
    id: 1,
    image: "/evolução_1.jpg",
    alt: "Evolução de paciente com bioimpedância InBody - Caso 1",
    description: "Transformação corporal acompanhada com precisão"
  },
  {
    id: 2,
    image: "/evolucao_2.jpg",
    alt: "Evolução de paciente com bioimpedância InBody - Caso 2",
    description: "Resultados mensuráveis e motivadores"
  },
  {
    id: 3,
    image: "/evolucao_3.jpg",
    alt: "Evolução de paciente com bioimpedância InBody - Caso 3",
    description: "Acompanhamento detalhado da composição corporal"
  },
]

export default function InBodySection() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0)

  const handlePrevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === 0 ? evolutionPhotos.length - 1 : prev - 1))
  }

  const handleNextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev === evolutionPhotos.length - 1 ? 0 : prev + 1))
  }

  return (
    <section className="py-24 bg-gradient-to-br from-primary/5 via-accent/30 to-secondary/20 relative overflow-hidden">
      {/* Background Animation - Temporarily disabled */}
      {/* <div className="absolute inset-0 opacity-10 pointer-events-none">
        <DotLottieReact src="https://lottie.host/embed/body-analysis.json" loop autoplay className="w-full h-full" />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance section-title">Bioimpedância InBody</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed text-pretty">
            Utilizamos a tecnologia InBody para uma análise corporal precisa e detalhada, permitindo um acompanhamento
            mais eficaz dos seus resultados.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div data-aos="fade-up" className="bg-card rounded-3xl p-8 md:p-12 shadow-xl mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">O que o exame avalia:</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {metrics.map((metric, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-accent/30 hover:bg-accent/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <metric.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{metric.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-primary text-primary-foreground rounded-3xl p-8 md:p-12 text-center"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-pretty">
              Com dados precisos sobre sua composição corporal, consigo criar estratégias mais assertivas e acompanhar
              sua evolução de forma objetiva e motivadora.
            </p>
          </motion.div>

          {/* Evolution Photos Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-3xl font-bold text-foreground text-center mb-8">Evoluções Reais com InBody</h3>
            
            {/* Desktop Grid - Hidden on mobile */}
            <div className="hidden md:grid md:grid-cols-3 gap-8">
              {evolutionPhotos.map((photo, index) => (
                <motion.div
                  key={photo.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-80">
                    <Image
                      src={photo.image}
                      alt={photo.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1200px) 50vw, 33vw"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.jpg";
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-center text-muted-foreground font-medium">
                      {photo.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Mobile Carousel - Visible only on mobile */}
            <div className="md:hidden relative">
              <div className="bg-card rounded-2xl overflow-hidden shadow-lg">
                <div className="relative h-80">
                  <Image
                    src={evolutionPhotos[currentPhotoIndex].image}
                    alt={evolutionPhotos[currentPhotoIndex].alt}
                    fill
                    className="object-cover"
                    sizes="100vw"
                    onError={(e) => {
                      // Fallback to placeholder if image doesn't exist
                      const target = e.target as HTMLImageElement;
                      target.src = "/placeholder.jpg";
                    }}
                  />
                </div>
                <div className="p-6">
                  <p className="text-center text-muted-foreground font-medium">
                    {evolutionPhotos[currentPhotoIndex].description}
                  </p>
                </div>
              </div>

              {/* Carousel Navigation */}
              <div className="flex justify-between items-center mt-4">
                <IconButton
                  onClick={handlePrevPhoto}
                  sx={{
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                      opacity: 0.9,
                    },
                  }}
                >
                  <ChevronLeft />
                </IconButton>

                {/* Dots Indicator */}
                <div className="flex gap-2">
                  {evolutionPhotos.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentPhotoIndex(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentPhotoIndex ? "bg-primary w-6" : "bg-primary/30"
                      }`}
                    />
                  ))}
                </div>

                <IconButton
                  onClick={handleNextPhoto}
                  sx={{
                    backgroundColor: "var(--primary)",
                    color: "var(--primary-foreground)",
                    "&:hover": {
                      backgroundColor: "var(--primary)",
                      opacity: 0.9,
                    },
                  }}
                >
                  <ChevronRight />
                </IconButton>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
