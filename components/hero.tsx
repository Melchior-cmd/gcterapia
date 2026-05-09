"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Hero() {
  const whatsappLink = "https://wa.me/5561996304986?text=Olá! Gostaria de agendar uma sessão."

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Ambiente de spa relaxante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6">
          Bem-estar e Qualidade de Vida
        </p>
        
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight mb-6">
          GCTERAPIA
        </h1>
        
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-4 font-light">
          Massoterapia e Fisioterapia Especializada
        </p>
        
        <p className="text-white/70 text-base max-w-xl mx-auto mb-10 leading-relaxed">
          Atendimento humanizado com foco no alívio de dores, redução do estresse
          e promoção do bem-estar físico e emocional.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-foreground hover:bg-white/90 rounded-full px-8 py-6 text-base font-medium"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              Agendar Sessão
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-base font-medium bg-transparent"
          >
            <a href="#servicos">
              Ver Serviços
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/80 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
