import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-geist-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Rafaella Oliveira - Nutricionista Especialista em Nutrição Esportiva",
  description:
    "Nutricionista clínica com especialização em Nutrição Esportiva. Atendimento personalizado, acolhedor e baseado em evidências.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/rafaella_logo_circular_transparente.png",
        sizes: "32x32",
        type: "image/png",
      },
    ],
    shortcut: "/rafaella_logo_circular_transparente.png",
    apple: "/rafaella_logo_circular_transparente.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans ${poppins.variable} antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
