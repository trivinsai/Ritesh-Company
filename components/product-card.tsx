"use client"

import type React from "react"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

interface Product {
  icon: React.ComponentType<{ className?: string }>
  title: string
  description: string
  features: string[]
  specs: string
  image?: string
}

export default function ProductCard({ product }: { product: Product }) {
  const Icon = product.icon

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="h-full bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden border border-border flex flex-col"
    >
      {product.image && (
        <div className="relative h-48 w-full overflow-hidden bg-muted">
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      )}

      <div className="p-8 h-full flex flex-col">
        {/* Icon */}
        <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }} className="mb-4">
          <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
            <Icon className="w-8 h-8 text-accent" />
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-2">{product.title}</h3>

        {/* Description */}
        <p className="text-muted-foreground text-sm mb-6 flex-grow">{product.description}</p>

        {/* Features */}
        <div className="mb-6 space-y-2">
          {product.features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="flex items-center gap-2 text-sm text-muted-foreground"
            >
              <span className="w-1.5 h-1.5 bg-accent rounded-full"></span>
              {feature}
            </motion.div>
          ))}
        </div>

        {/* Specs */}
        <p className="text-xs text-primary font-semibold mb-6 pb-6 border-b border-border">{product.specs}</p>

        {/* CTA */}
        <motion.button
          whileHover={{ gap: 8 }}
          className="flex items-center gap-2 text-primary font-bold hover:text-primary/80 transition-colors"
        >
          Learn More
          <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
            <ArrowRight size={20} />
          </motion.span>
        </motion.button>
      </div>
    </motion.div>
  )
}
