"use client"

import { motion } from "framer-motion"
import { Heart, Sparkles, TrendingUp } from "lucide-react"
import { Card, CardContent } from "@mui/material"

const approaches = [
  {
    icon: Heart,
    title: "Acolhimento e individualidade",
    description:
      "Cada paciente é único — por isso, meu atendimento respeita sua história, rotina, preferências e fase da vida.",
  },
  {
    icon: Sparkles,
    title: "Leveza no processo",
    description:
      "Não acredito em dietas rígidas ou extremas. A nutrição pode (e deve) ser leve, prazerosa e possível de manter no dia a dia.",
  },
  {
    icon: TrendingUp,
    title: "Atualização constante",
    description: "Me mantenho em constante evolução profissional para te oferecer o que há de mais seguro e eficaz.",
  },
]

export default function ApproachSection() {
  return (
    <section className="py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance section-title">Minha Abordagem</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {approaches.map((approach, index) => (
            <motion.div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: "var(--card)",
                  borderRadius: "1.5rem",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-8px)",
                    boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                  },
                }}
              >
                <CardContent sx={{ padding: "2.5rem" }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                      <approach.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-4 text-balance">{approach.title}</h3>
                    <p className="text-muted-foreground leading-relaxed text-pretty">{approach.description}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
