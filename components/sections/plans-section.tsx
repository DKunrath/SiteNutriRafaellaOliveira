"use client"

import { motion } from "framer-motion"
import { Button, Card, CardContent } from "@mui/material"
import { Check } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"

const plans = [
  {
    name: "Presencial",
    description: "Atendimento no consultório com avaliação física e nutricional completa",
    features: [
      "Avaliação física e nutricional presencial",
      "Bioimpedância InBody",
      "Plano alimentar personalizado",
      "Orientações sobre suplementação",
      "Material educativo completo",
    ],
    highlight: true,
  },
  {
    name: "Online",
    description: "Praticidade e comodidade através do Google Meet",
    features: [
      "Consulta via Google Meet",
      "Avaliação nutricional completa",
      "Plano alimentar personalizado",
      "Acompanhamento por fotos e peso",
      "Orientações sobre suplementação",
      "Material educativo completo",
      "Suporte via WhatsApp",
    ],
    highlight: false,
  },
]

export default function PlansSection() {
  const getWhatsappLink = (planName: string) => {
    const message = encodeURIComponent(`Oi nutri, quero mais informações sobre a consulta ${planName}!`)
    return `https://wa.me/5551992450130?text=${message}`
  }

  return (
    <section id="planos" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance section-title">Escolha a Modalidade</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Selecione a modalidade que melhor se adapta aos seus objetivos e necessidades
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div key={index}>
              <Card
                sx={{
                  height: "100%",
                  backgroundColor: plan.highlight ? "var(--primary)" : "var(--card)",
                  borderRadius: "1.5rem",
                  boxShadow: plan.highlight ? "0 12px 40px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.08)",
                  transition: "all 0.3s ease",
                  transform: plan.highlight ? "scale(1.05)" : "scale(1)",
                  "&:hover": {
                    transform: plan.highlight ? "scale(1.08)" : "scale(1.03)",
                    boxShadow: "0 16px 48px rgba(0,0,0,0.2)",
                  },
                }}
              >
                <CardContent sx={{ padding: "2.5rem" }}>
                  {plan.highlight && (
                    <div className="bg-primary-foreground text-primary text-sm font-semibold px-4 py-1 rounded-full inline-block mb-4">
                      Mais Popular
                    </div>
                  )}
                  <h3
                    className={`text-2xl font-bold mb-2 ${
                      plan.highlight ? "text-primary-foreground" : "text-foreground"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className={`mb-6 ${plan.highlight ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                            plan.highlight ? "text-primary-foreground" : "text-primary"
                          }`}
                        />
                        <span className={plan.highlight ? "text-primary-foreground" : "text-foreground"}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant="contained"
                    fullWidth
                    href={getWhatsappLink(plan.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    startIcon={<FaWhatsapp />}
                    sx={{
                      backgroundColor: plan.highlight ? "var(--primary-foreground)" : "var(--primary)",
                      color: plan.highlight ? "var(--primary)" : "var(--primary-foreground)",
                      padding: "12px 24px",
                      fontSize: "1rem",
                      fontWeight: 600,
                      borderRadius: "100px",
                      textTransform: "none",
                      "&:hover": {
                        backgroundColor: plan.highlight ? "var(--primary-foreground)" : "var(--primary)",
                        opacity: 0.9,
                      },
                    }}
                  >
                    Quero este plano
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
