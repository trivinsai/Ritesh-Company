"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50) // adjust scroll distance
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsOpen(false)
  }

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" onClick={scrollToTop} className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                  isScrolled ? "bg-primary" : "bg-white/20"
                }`}
              >
                <span
                  className={`font-bold text-sm ${
                    isScrolled ? "text-white" : "text-primary"
                  }`}
                >
                  RC
                </span>
              </div>
              <span
                className={`text-xl font-bold hidden sm:inline transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                Ritesh & Company
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollToTop}
                className={`font-medium text-sm transition-colors ${
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-white hover:text-accent"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden transition-colors ${
              isScrolled ? "text-foreground" : "text-white"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Links */}
        {isOpen && (
          <div
            className={`md:hidden pb-4 space-y-2 transition-all ${
              isScrolled ? "bg-white/90" : "bg-black/40 backdrop-blur-sm"
            } rounded-md`}
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={scrollToTop}
                className={`block px-4 py-2 rounded-md transition-colors ${
                  isScrolled
                    ? "text-foreground hover:bg-muted"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
