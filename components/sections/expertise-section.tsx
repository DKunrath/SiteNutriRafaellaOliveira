"use client"

import { motion } from "framer-motion"
import { Dumbbell, Trophy, Pill, Activity, AlertCircle, Battery, Utensils, Heart } from "lucide-react"
import Image from "next/image"

const expertise = [
  {
    icon: Dumbbell,
    title: "Hipertrofia e Emagrecimento",
  },
  {
    icon: Trophy,
    title: "Performance Esportiva",
  },
  {
    icon: Pill,
    title: "Deficiência de Vitaminas e Minerais",
  },
  {
    icon: Activity,
    title: "Doenças Crônicas",
  },
  {
    icon: AlertCircle,
    title: "Alergias e Intolerâncias Alimentares",
  },
  {
    icon: Battery,
    title: "Mais Energia e Disposição",
  },
  {
    icon: Utensils,
    title: "Reeducação Alimentar",
  },
  {
    icon: Heart,
    title: "Saúde Intestinal",
  },
]

export default function ExpertiseSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance section-title">
            Experiência em Diferentes Objetivos
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Atendo pacientes com os mais diversos objetivos e necessidades nutricionais
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {expertise.map((item, index) => (
            <motion.div key={index} className="group">
              <div className="bg-card rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 h-full flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <item.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-foreground text-balance">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 max-w-md mx-auto"
        >
          <div className="relative w-full aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent z-10"></div>
            <Image
              src="/experiencia_em_diferentes_objetivos.jpg"
              alt="Experiência em Diferentes Objetivos - Rafaella Oliveira Nutricionista"
              fill
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
