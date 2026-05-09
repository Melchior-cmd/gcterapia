"use client"

import { useState } from "react"
import { ServiceCard } from "./service-card"
import { cn } from "@/lib/utils"

const categories = [
  { id: "massagens", label: "Massagens" },
  { id: "terapias", label: "Terapias Manuais" },
  { id: "estetica", label: "Estética" },
]

const allServices = {
  massagens: [
    {
      title: "Massagem Relaxante",
      description:
        "A massagem relaxante usa movimentos suaves no corpo para aliviar tensões, reduzir o estresse e promover bem-estar, melhorando a circulação e proporcionando relaxamento.",
      price: "120,00",
      imageUrl: "/images/massagem-relaxante.jpg",
    },
    {
      title: "Massagem com Pedras Quentes",
      description:
        "Técnica relaxante que usa pedras galvânicas aquecidas sobre o corpo e movimentos suaves para aliviar tensões, melhorar a circulação e promover um relaxamento profundo.",
      price: "180,00",
      imageUrl: "/images/massagem-pedras.jpg",
    },
    {
      title: "Massagem com Velas",
      description:
        "Feita com cera morna derretida como óleo para fazer movimentos suaves no corpo, ajudando a relaxar, hidratar a pele e aliviar tensões.",
      price: "180,00",
      imageUrl: "/images/massagem-velas.jpg",
    },
    {
      title: "Reflexologia Podal",
      description:
        "Técnica que estimula pontos específicos dos pés que correspondem a órgãos e sistemas do corpo, ajudando a relaxar, aliviar dores e equilibrar o organismo.",
      price: "120,00",
      imageUrl: "/images/reflexologia.jpg",
    },
    {
      title: "Massagem com Velas e Pedras",
      description:
        "Combina o calor das pedras e da cera morna das velas para relaxar profundamente o corpo, aliviar tensões musculares e proporcionar bem-estar.",
      price: "250,00",
      imageUrl: "/images/massagem-velas-pedras.jpg",
    },
    {
      title: "Massagem Premium",
      description:
        "Combina pedras quentes, velas terapêuticas e escalda-pés para proporcionar um relaxamento profundo, alívio de tensões e cuidado completo do corpo.",
      price: "300,00",
      imageUrl: "/images/massagem-premium.jpg",
    },
  ],
  terapias: [
    {
      title: "Liberação Miofacial",
      description:
        "Técnica que usa pressão em pontos de tensão nos músculos e fáscias para aliviar dores, melhorar a mobilidade e reduzir rigidez corporal.",
      price: "100,00",
      imageUrl: "/images/liberacao-miofacial.jpg",
    },
    {
      title: "Ventosaterapia",
      description:
        "Utiliza ventosas para criar sucção na pele, ajudando a melhorar a circulação, aliviar dores musculares e reduzir tensões no corpo.",
      price: "90,00",
      imageUrl: "/images/ventosaterapia.jpg",
    },
    {
      title: "Dry Needling",
      description:
        "Técnica que utiliza agulhas finas em pontos de tensão muscular para aliviar dores, reduzir contraturas e melhorar a função muscular.",
      price: "100,00",
      imageUrl: "/images/dry-needling.jpg",
    },
  ],
  estetica: [
    {
      title: "Massagem Modeladora",
      description:
        "Técnica mais intensa que utiliza movimentos firmes e rápidos para ajudar na redução de medidas, ativar a circulação e melhorar o contorno corporal.",
      price: "100,00",
      imageUrl: "/images/massagem-modeladora.jpg",
    },
    {
      title: "Massagem Modeladora Turbinada",
      description:
        "Versão mais intensa da modeladora tradicional, com manobras firmes e rápidas para potencializar a ativação da circulação e redução de medidas.",
      price: "120,00",
      imageUrl: "/images/massagem-turbinada.jpg",
    },
    {
      title: "Drenagem Linfática",
      description:
        "Massagem suave que estimula o sistema linfático, ajudando a reduzir inchaços, eliminar toxinas e melhorar a retenção de líquidos no corpo.",
      price: "100,00",
      imageUrl: "/images/drenagem-linfatica.jpg",
    },
  ],
}

export function Services() {
  const [activeCategory, setActiveCategory] = useState("massagens")

  return (
    <section id="servicos" className="py-24 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Nossos Serviços
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Tratamentos Especializados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Oferecemos uma variedade de tratamentos para cuidar do seu bem-estar físico e emocional
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-3 rounded-full text-sm font-medium transition-all",
                activeCategory === category.id
                  ? "bg-foreground text-background"
                  : "bg-card text-foreground hover:bg-foreground/10 border border-border"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {allServices[activeCategory as keyof typeof allServices].map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              price={service.price}
              imageUrl={service.imageUrl}
              imageAlt={service.title}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
