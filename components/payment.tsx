import { CreditCard, Home, Percent, Banknote, Check } from "lucide-react"

export function Payment() {
  const paymentMethods = [
    { icon: Banknote, label: "Pix", highlight: true },
    { icon: CreditCard, label: "Cartão de Crédito" },
    { icon: CreditCard, label: "Cartão de Débito" },
  ]

  const benefits = [
    { icon: Check, text: "Parcelamento em até 3x sem juros nos cartões" },
    { icon: Percent, text: "10% de desconto no Pix ou Espécie" },
    { icon: Home, text: "Atendimento à domicílio disponível" },
  ]

  return (
    <section id="pagamento" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm tracking-[0.2em] uppercase mb-4 font-medium">
            Facilidade
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-6">
            Formas de Pagamento
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Diversas opções para sua comodidade
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Payment Methods */}
            <div className="bg-card rounded-2xl p-8 border border-border/50">
              <h3 className="font-serif text-xl text-foreground mb-6">
                Métodos Aceitos
              </h3>
              <div className="space-y-4">
                {paymentMethods.map((method) => (
                  <div
                    key={method.label}
                    className="flex items-center gap-4 p-4 bg-secondary/50 rounded-xl"
                  >
                    <div className="w-12 h-12 bg-foreground/10 rounded-full flex items-center justify-center">
                      <method.icon className="w-5 h-5 text-foreground" />
                    </div>
                    <span className="text-foreground font-medium">{method.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-foreground rounded-2xl p-8 text-background">
              <h3 className="font-serif text-xl mb-6">
                Benefícios
              </h3>
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <benefit.icon className="w-4 h-4 text-foreground" />
                    </div>
                    <p className="text-background/90 leading-relaxed">{benefit.text}</p>
                  </div>
                ))}
              </div>

              {/* Disclaimer */}
              <div className="mt-8 pt-6 border-t border-background/20">
                <p className="text-background/60 text-sm italic">
                  *Valores não incluem taxa de deslocamento para atendimento à domicílio
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
