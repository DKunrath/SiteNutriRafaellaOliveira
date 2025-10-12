"use client"

import { FaInstagram, FaWhatsapp } from "react-icons/fa"
import { Mail, Phone } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <footer className="py-16" style={{ backgroundColor: '#8B2635' }}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="relative w-64 h-16 mb-4">
              <Image
                src="/rafaella_logo_comprida_transparente.png"
                alt="Rafaella Oliveira - Nutricionista"
                fill
                className="object-contain brightness-0 invert"
              />
            </div>
            <p className="text-white/90 leading-relaxed">Nutricionista Especialista em Nutrição Esportiva</p>
            <p className="text-white/90 mt-2">CRN2 19232</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("sobre")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Sobre Mim
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("planos")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Planos
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("localizacao")}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Localização
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Contato</h4>
            <div className="space-y-3">
              <a
                href="tel:+5511999999999"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>(51) 99245-0130</span>
              </a>
              {/*<a
                href="mailto:contato@rafaellaoliveira.com.br"
                className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>contato@rafaellaoliveira.com.br</span>
              </a>*/}
            </div>

            {/* Social Media */}
            <div className="flex gap-4 mt-6">
              <a
                href="https://www.instagram.com/nutrirafaellaoliveira"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <FaInstagram className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5551992450130"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors text-white"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-white/70 text-sm">
            © {currentYear} Rafaella Oliveira - Nutricionista. Todos os direitos reservados.
          </p>
          <p className="text-white/70 text-sm mt-2">
            Desenvolvido por{" "}
            <a
              href="https://www.instagram.com/dahor.mkt"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-white/80 underline transition-colors"
            >
              Dahor
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
