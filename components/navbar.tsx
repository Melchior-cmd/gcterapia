"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Início", href: "#" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Pagamento", href: "#pagamento" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }

    return () => {
      document.body.style.overflow = ""
    }
  }, [isMobileMenuOpen])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("keydown", handleEsc)
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/95 shadow-sm py-4 md:backdrop-blur-md" 
          : "bg-background/95 md:bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="relative z-50">
            <span className={cn(
              "font-serif text-2xl font-medium tracking-tight transition-colors",
              isScrolled || isMobileMenuOpen ? "text-foreground" : "text-foreground md:text-white"
            )}>
              GCTERAPIA
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:opacity-70",
                  isScrolled ? "text-foreground" : "text-white"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              asChild
              className={cn(
                "rounded-full px-6 transition-all",
                isScrolled 
                  ? "bg-foreground text-background hover:bg-foreground/90" 
                  : "bg-white text-foreground hover:bg-white/90"
              )}
            >
              <a 
                href="https://wa.me/5561996304986?text=Olá! Gostaria de agendar uma sessão."
                target="_blank"
                rel="noopener noreferrer"
              >
                Agendar
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative z-50"
            aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-foreground" />
            ) : (
              <Menu className={cn(
                "h-6 w-6 transition-colors",
                isScrolled ? "text-foreground" : "text-foreground md:text-white"
              )} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 z-40 md:hidden bg-[#f5f3ef] transition-all duration-300",
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        )}
      >
        <nav className="relative flex min-h-screen flex-col items-center justify-center gap-8 px-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif text-2xl text-foreground hover:text-accent transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button
            asChild
            className="rounded-full px-8 py-6 mt-4 bg-foreground text-background hover:bg-foreground/90"
          >
            <a 
              href="https://wa.me/5561996304986?text=Olá! Gostaria de agendar uma sessão."
              target="_blank"
              rel="noopener noreferrer"
            >
              Agendar Sessão
            </a>
          </Button>
        </nav>
      </div>
    </header>
  )
}
