"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  return (
    <section
      className="relative w-full flex items-center justify-center overflow-hidden px-3 sm:px-6 lg:px-8 min-h-screen"
    >
      {/* Background Image with overlay */}
      <div className="absolute inset-0 blur-lg -z-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "url(/hero.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
          }}
        />
        <div className="absolute inset-0 bg-white/50" />
      </div>

      <div className="max-w-4xl mx-auto text-center flex-shrink-0 py-10 sm:py-16 md:py-20 w-full flex flex-col justify-center">
        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-6xl font-bold text-foreground mb-4 md:mb-6 leading-snug sm:leading-tight px-2"
        >
          <span className="text-primary">Reliable.</span>{" "}
          <span className="text-accent">Sustainable.</span>{" "}
          <span className="text-primary">Affordable</span> Packaging Solutions
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-sm sm:text-base md:text-lg text-black mb-8 md:mb-10 max-w-2xl mx-auto px-3 leading-relaxed sm:leading-relaxed"
        >
          Your trusted partner in smart packaging solutions. Quality materials, timely delivery, and customer
          satisfaction guaranteed.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-3 justify-center px-2 sm:px-0 w-full"
        >
          <Link href="/products" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-primary text-white px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors text-sm sm:text-base"
            >
              Explore Products <ArrowRight size={16} className="hidden sm:inline" />
            </motion.button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full border-2 border-primary text-primary px-8 py-4 rounded-lg font-bold hover:bg-primary/5 transition-colors text-sm sm:text-base"
            >
              Contact Us
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
