"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"

interface GoogleReviewsWidgetProps {
  className?: string
}

export default function GoogleReviewsWidget({ 
  className = "" 
}: GoogleReviewsWidgetProps) {

  useEffect(() => {
    // Carrega o script do Elfsight se não estiver carregado
    const script = document.createElement("script")
    script.src = "https://elfsightcdn.com/platform.js"
    script.async = true
    
    // Verifica se o script já foi carregado
    if (!document.querySelector('script[src="https://elfsightcdn.com/platform.js"]')) {
      document.head.appendChild(script)
    }

    return () => {
      // Cleanup se necessário
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full ${className}`}
    >
      {/* Widget do Elfsight */}
      <div 
        className="elfsight-app-919cd5ca-97e0-4423-8464-03ac0764e780" 
        data-elfsight-app-lazy
        style={{
          width: "100%",
          minHeight: "400px"
        }}
      >
        {/* Fallback para quando o widget está carregando */}
        <div className="flex items-center justify-center h-64 bg-card rounded-lg border-2 border-dashed border-border">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Carregando reviews do Google...</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}