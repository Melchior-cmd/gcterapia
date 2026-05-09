"use client"

import { Button } from "@/components/ui/button"
import { Instagram, Phone, MapPin, Clock, ArrowRight } from "lucide-react"

export function Contact() {
  const whatsappLink = "https://wa.me/5561996304986?text=Olá! Gostaria de agendar uma sessão."
  const instagramLink = "https://instagram.com/Gcterapia"

  return (
    <section id="contato" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Fale Conosco
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Agende sua Sessão
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Entre em contato para agendar seu horário ou tirar dúvidas sobre nossos serviços
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {/* WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-card hover:bg-card/80 rounded-2xl p-6 transition-all group border border-border/50 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <p className="text-lg font-medium text-foreground">(61) 9 9630-4986</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={instagramLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-5 bg-card hover:bg-card/80 rounded-2xl p-6 transition-all group border border-border/50 hover:shadow-lg"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F77737] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                  <p className="text-lg font-medium text-foreground">@Gcterapia</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-5 bg-card rounded-2xl p-6 border border-border/50">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Atendimento</p>
                  <p className="text-lg font-medium text-foreground">Brasília - DF</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-center gap-5 bg-card rounded-2xl p-6 border border-border/50">
                <div className="w-14 h-14 bg-accent/20 rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Horário</p>
                  <p className="text-lg font-medium text-foreground">Seg - Sáb: 8h às 20h</p>
                </div>
              </div>
            </div>

            {/* CTA Card */}
            <div className="bg-foreground rounded-2xl p-8 md:p-10 text-background flex flex-col justify-center">
              <h3 className="font-serif text-2xl md:text-3xl mb-4">
                Pronta para relaxar?
              </h3>
              <p className="text-background/70 mb-8 leading-relaxed">
                Agende sua sessão agora mesmo e experimente os benefícios das nossas terapias. 
                Atendimento personalizado e focado no seu bem-estar.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-foreground rounded-full px-8 py-6 text-base font-medium w-full sm:w-auto"
              >
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  Agendar pelo WhatsApp
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
