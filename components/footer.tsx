import { Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Info */}
          <div className="text-center md:text-left">
            <h3 className="font-serif text-2xl mb-2">GCTERAPIA</h3>
            <p className="text-background/60 text-sm">
              Giovanna Costa - Fisioterapeuta e Massoterapeuta
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://wa.me/5561996304986"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="WhatsApp"
            >
              <Phone className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com/Gcterapia"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-background/10 hover:bg-background/20 rounded-full flex items-center justify-center transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/10 my-8" />

        {/* Copyright */}
        <p className="text-background/40 text-sm text-center">
          © {new Date().getFullYear()} GCTERAPIA. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
