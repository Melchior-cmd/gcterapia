import Image from "next/image"

export function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 xl:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-[2rem] border border-border/60 bg-card p-4 shadow-xl">
              <div className="aspect-[4/5] relative overflow-hidden rounded-[1.5rem]">
                <Image
                  src="/images/giovanna-about.png"
                  alt="Giovanna Costa - Fisioterapeuta e Massoterapeuta"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 42vw"
                  priority
                />
              </div>
            </div>
            <div className="absolute -bottom-5 right-4 rounded-2xl border border-border bg-background/95 px-5 py-3 shadow-lg backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Experiência</p>
              <p className="font-serif text-2xl text-foreground">+5 anos</p>
            </div>
            <div className="absolute -z-10 -left-4 top-12 h-28 w-28 rounded-full bg-accent/20 blur-xl" />
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-accent text-sm tracking-[0.24em] uppercase mb-4 font-medium">
              Sobre mim
            </p>

            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-3">
              Giovanna Costa
            </h2>
            <p className="text-lg text-foreground/90 mb-6">
              Fisioterapeuta e Massoterapeuta
            </p>

            <p className="text-muted-foreground leading-relaxed mb-8">
              Uno técnicas manuais e acolhimento para aliviar dores, reduzir o estresse e restaurar
              o equilíbrio do corpo. Cada sessão é personalizada para você se sentir bem de forma
              leve, segura e consistente.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-border bg-card px-5 py-4">
                <p className="font-serif text-3xl text-foreground">+500</p>
                <p className="text-sm text-muted-foreground">Clientes atendidos</p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-5 py-4">
                <p className="font-serif text-3xl text-foreground">+5</p>
                <p className="text-sm text-muted-foreground">Anos de experiência</p>
              </div>
              <div className="rounded-2xl border border-border bg-card px-5 py-4">
                <p className="font-serif text-3xl text-foreground">12</p>
                <p className="text-sm text-muted-foreground">Técnicas terapêuticas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
