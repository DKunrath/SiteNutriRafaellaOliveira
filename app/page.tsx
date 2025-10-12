"use client"

import { useState, useEffect } from "react"
// import AOS from "aos"
// import "aos/dist/aos.css"
import { NextSeo } from "next-seo"
import SplashScreen from "@/components/splash-screen"
import HeroSection from "@/components/sections/hero-section"
import AboutSection from "@/components/sections/about-section"
import ApproachSection from "@/components/sections/approach-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import PlansSection from "@/components/sections/plans-section"
import ConsultationStepsSection from "@/components/sections/consultation-steps-section"
import InBodySection from "@/components/sections/inbody-section"
import ExpertiseSection from "@/components/sections/expertise-section"
import CtaSection from "@/components/sections/cta-section"
import LocationSection from "@/components/sections/location-section"
import Footer from "@/components/sections/footer"

export default function Home() {
  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    // Temporarily disable AOS to fix context error
    // AOS.init({
    //   duration: 1000,
    //   once: true,
    //   easing: "ease-out-cubic",
    // })
  }, [])

  const handleSplashComplete = () => {
    setShowSplash(false)
  }

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />
  }

  return (
    <>
      <NextSeo
        title="Rafaella Oliveira - Nutricionista Especialista em Nutrição Esportiva"
        description="Nutricionista clínica com especialização em Nutrição Esportiva. Atendimento personalizado, acolhedor e baseado em evidências científicas."
        openGraph={{
          type: "website",
          locale: "pt_BR",
          url: "https://rafaellaoliveira.com.br",
          siteName: "Rafaella Oliveira Nutricionista",
          title: "Rafaella Oliveira - Nutricionista Especialista em Nutrição Esportiva",
          description:
            "Nutricionista clínica com especialização em Nutrição Esportiva. Atendimento personalizado, acolhedor e baseado em evidências.",
        }}
      />
      <main className="overflow-x-hidden">
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <TestimonialsSection />
        <PlansSection />
        <ConsultationStepsSection />
        <InBodySection />
        <ExpertiseSection />
        <CtaSection />
        <LocationSection />
        <Footer />
      </main>
    </>
  )
}
