"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function AboutSection() {
  return (
    <section id="sobre" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div className="relative order-2 lg:order-1">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/30 to-primary/20 rounded-full transform -rotate-6"></div>
              <Image
                src="/about_me_image_1.jpg"
                alt="Rafaella Oliveira"
                fill
                className="object-cover rounded-full shadow-xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 text-balance section-title">Sobre Mim</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Olá! Sou <strong className="text-foreground">Rafaella Oliveira</strong>, nutricionista clínica com
                especialização em Nutrição Esportiva.
              </p>
              <p>
                Ao longo da minha carreira, realizei cursos nas áreas de{" "}
                <strong className="text-foreground">Emagrecimento e Hipertrofia</strong>,{" "}
                <strong className="text-foreground">Nutrição Comportamental</strong>,{" "}
                <strong className="text-foreground">Nutrição na Saúde da Mulher</strong> e{" "}
                <strong className="text-foreground">Suplementação Avançada e Exames Laboratoriais</strong>.
              </p>
              <p>
                Como profissional da área da saúde, meu maior comprometimento é estar em{" "}
                <strong className="text-primary">constante evolução</strong> para oferecer um atendimento completo,
                atualizado e baseado em evidências.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
