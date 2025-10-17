"use client"

import { motion } from "framer-motion"
import { MapPin, Clock } from "lucide-react"

export default function LocationSection() {
  return (
    <section id="localizacao" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance section-title">Localização</h2>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <motion.div data-aos="fade-right" className="rounded-3xl overflow-hidden shadow-xl h-[400px] lg:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3466.2834866578105!2d-51.12961752446014!3d-29.682559675107854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x951943baaaf0e765%3A0x73506c36c61cf50e!2sJoaquim%20Pedro%20Soares%2C%20500%20-%20sala%2063%20-%20Centro%2C%20Novo%20Hamburgo%20-%20RS%2C%2093510-320!5e0!3m2!1spt-BR!2sbr!4v1760225605728!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          {/* Info */}
          <motion.div data-aos="fade-left" className="space-y-8">
            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Endereço do Consultório</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Rua Joaquim Pedro Soares, 500 - Sala 63
                    <br />
                    Centro, Novo Hamburgo - RS
                    <br />
                    CEP: 93510-320
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-lg">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">Horário de Atendimento</h3>
                  <div className="text-muted-foreground space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p className="text-sm mt-2 italic">*Atendimento mediante agendamento prévio</p>
                    <p className="text-sm mt-2 italic">*Disponibilidade para agendamentos em horários estendidos (após o horário comercial) e aos sábados, mediante consulta prévia.</p>
                  </div>
                </div>
              </div>
            </div>

            {/*<div className="bg-primary/10 rounded-2xl p-6 text-center">
              <p className="text-foreground font-medium">Estacionamento conveniado disponível no edifício</p>
            </div>*/}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
