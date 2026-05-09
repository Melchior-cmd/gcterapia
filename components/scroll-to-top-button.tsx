"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"
import { cn } from "@/lib/utils"

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 220)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao início"
      className={cn(
        "fixed bottom-6 right-4 z-50 rounded-full bg-foreground p-3 text-background shadow-lg transition-all duration-300 hover:scale-105 hover:bg-foreground/90 md:right-6",
        isVisible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-3 opacity-0"
      )}
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  )
}
