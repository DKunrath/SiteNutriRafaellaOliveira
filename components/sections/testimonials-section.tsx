"use client"

import { motion } from "framer-motion"
import GoogleReviewsWidget from "@/components/google-reviews-widget"

export default function TestimonialsSection() {

  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance section-title">O que Falam Sobre Mim</h2>
        </motion.div>

        {/* Google Reviews Widget */}
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GoogleReviewsWidget 
              className="rounded-3xl overflow-hidden shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
