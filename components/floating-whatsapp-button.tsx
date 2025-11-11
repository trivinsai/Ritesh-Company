"use client"

import { MessageCircle } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function FloatingWhatsAppButton() {
  const [isHovering, setIsHovering] = useState(false)

  return (
    <>
      {/* Floating Button */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed bottom-6 right-6 z-40"
      >
        <motion.a
          href="https://wa.me/919876543210?text=Hi%20Ritesh%20%26%20Company%2C%20I%27d%20like%20to%20inquire%20about%20your%20packaging%20solutions"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="relative flex items-center justify-center w-14 h-14 bg-accent rounded-full shadow-lg hover:shadow-xl transition-all group"
        >
          {/* Pulse Background */}
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="absolute inset-0 bg-accent rounded-full opacity-20"
          />

          {/* Icon */}
          <MessageCircle className="w-6 h-6 text-primary relative z-10" />

          {/* Tooltip */}
          {isHovering && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: -10 }}
              animate={{ opacity: 1, y: 0, x: -20 }}
              exit={{ opacity: 0, y: 10, x: -10 }}
              className="absolute right-full mr-4 whitespace-nowrap bg-foreground text-white px-3 py-2 rounded-lg text-sm font-semibold bottom-0"
            >
              Chat with us
              {/* Arrow */}
              <div className="absolute left-full top-1/2 -translate-y-1/2 border-8 border-transparent border-l-foreground"></div>
            </motion.div>
          )}
        </motion.a>
      </motion.div>

      {/* Scroll-to-Top Integration (bonus) */}
      <ScrollToTop />
    </>
  )
}

// Scroll to Top Button Component
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (typeof window !== "undefined") {
      setIsVisible(window.scrollY > 300)
    }
  }

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", toggleVisibility)
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={isVisible ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 bg-primary rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center text-white hover:bg-primary/90"
      aria-label="Scroll to top"
    >
      <motion.span animate={{ y: [0, -4, 0] }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}>
        ↑
      </motion.span>
    </motion.button>
  )
}
