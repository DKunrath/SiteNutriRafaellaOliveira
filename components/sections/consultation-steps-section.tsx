"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Calendar, Stethoscope, FileText, Monitor, MapPin, CheckCircle } from "lucide-react"
import { Button } from "@mui/material"

const presencialSteps = [
  {
    number: "01",
    icon: Calendar,
    title: "Definição do Plano e Agendamento",
    description:
      "Após escolher o plano ideal para você, agendamos sua primeira consulta em um horário que se encaixe na sua rotina.",
  },
  {
    number: "02",
    icon: Stethoscope,
    title: "Consulta",
    description:
      "Durante a consulta, conversamos sobre seus objetivos, histórico de saúde, rotina e preferências alimentares. Realizamos avaliação completa e, se necessário, bioimpedância InBody.",
  },
  {
    number: "03",
    icon: FileText,
    title: "Plano Alimentar e Pós Consulta",
    description:
      "Você recebe seu plano alimentar personalizado, orientações detalhadas e todo o suporte necessário para iniciar sua jornada de transformação.",
  },
]

const onlineSteps = [
  {
    number: "01",
    icon: Stethoscope,
    title: "Avaliação Física",
    description:
      "Na consulta online, a avaliação física não será realizada por mim. Em vez disso, você fará a avaliação física em uma academia próxima com um profissional. Caso não frequente academia, o acompanhamento da evolução poderá ser feito por peso + fotos, que serão orientados por mim.",
  },
  {
    number: "02",
    icon: Monitor,
    title: "Local de Atendimento",
    description:
      "No atendimento online, a consulta é realizada por meio de uma reunião via Google Meet, e o link será enviado antes da consulta pelo WhatsApp.",
  },
  {
    number: "03",
    icon: CheckCircle,
    title: "Quais os Benefícios",
    description:
      "O atendimento online oferece praticidade, acessibilidade e conforto, com menor custo devido à ausência de deslocamento.",
  },
  {
    number: "04",
    icon: FileText,
    title: "Há os Mesmos Resultados?",
    description:
      "Com certeza! A avaliação nutricional vai além da simples medição antropométrica. Ela inclui uma análise completa dos hábitos e estilo de vida do paciente, periodização de treinamento, saúde intestinal, suplementação, consumo alimentar, histórico médico, exames bioquímicos, presença de doenças e possíveis orientações para reeducação alimentar, além do seu plano alimentar personalizado e um acompanhamento próximo!",
  },
]

export default function ConsultationStepsSection() {
  const [activeTab, setActiveTab] = useState<'presencial' | 'online'>('presencial')
  
  const currentSteps = activeTab === 'presencial' ? presencialSteps : onlineSteps

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
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance section-title">Etapas da Consulta</h2>
        </motion.div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-card rounded-full p-2 shadow-lg">
            <Button
              onClick={() => setActiveTab('presencial')}
              variant={activeTab === 'presencial' ? 'contained' : 'text'}
              sx={{
                backgroundColor: activeTab === 'presencial' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'presencial' ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                padding: '12px 24px',
                borderRadius: '100px',
                textTransform: 'none',
                fontWeight: 600,
                marginRight: '8px',
                '&:hover': {
                  backgroundColor: activeTab === 'presencial' ? 'var(--primary)' : 'var(--muted)',
                },
              }}
            >
              <MapPin className="w-4 h-4 mr-2" />
              Presencial
            </Button>
            <Button
              onClick={() => setActiveTab('online')}
              variant={activeTab === 'online' ? 'contained' : 'text'}
              sx={{
                backgroundColor: activeTab === 'online' ? 'var(--primary)' : 'transparent',
                color: activeTab === 'online' ? 'var(--primary-foreground)' : 'var(--muted-foreground)',
                padding: '12px 24px',
                borderRadius: '100px',
                textTransform: 'none',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: activeTab === 'online' ? 'var(--primary)' : 'var(--muted)',
                },
              }}
            >
              <Monitor className="w-4 h-4 mr-2" />
              Online
            </Button>
          </div>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {currentSteps.map((step, index) => (
            <motion.div key={index} data-aos="fade-up" data-aos-delay={index * 100} className="relative">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Number and Icon */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="text-8xl font-bold text-primary/10">{step.number}</div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 bg-card rounded-2xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold text-foreground mb-4 text-balance">{step.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed text-pretty">{step.description}</p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < currentSteps.length - 1 && (
                <div className="hidden md:block absolute left-8 top-32 w-0.5 h-12 bg-primary/30" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div data-aos="fade-up" className="mt-16 max-w-3xl mx-auto text-center">
          <div className="bg-primary/10 rounded-3xl p-8 md:p-12">
            <p className="text-2xl md:text-3xl font-semibold text-primary italic text-balance">
              "Ter um acompanhamento próximo vai te ajudar, e muito, a se manter comprometido/a no processo!"
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
