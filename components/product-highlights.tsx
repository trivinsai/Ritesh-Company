"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Package, Zap, Layers, Tag } from "lucide-react"

export default function ProductHighlights() {
  const products = [
    {
      icon: Package,
      title: "Envelopes",
      description: "Custom sizes, bubble, kraft, and specialty envelopes for every need.",
      link: "/products",
    },
    {
      icon: Zap,
      title: "Adhesive Tapes",
      description: "Clear, brown, and printed logo tapes for secure packaging.",
      link: "/products",
    },
    {
      icon: Layers,
      title: "Stretch Films",
      description: "Industrial-grade pallet wrap and stretch films for protection.",
      link: "/products",
    },
    {
      icon: Tag,
      title: "Other Packaging",
      description: "Cartons, labels, shrink wrap, and custom packaging solutions.",
      link: "/products",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Products</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Complete range of packaging solutions for businesses of all sizes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, shadow: "lg" }}
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all cursor-pointer group"
            >
              <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="inline-block mb-4">
                <product.icon className="w-12 h-12 text-accent group-hover:text-primary transition-colors" />
              </motion.div>
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-muted-foreground mb-6">{product.description}</p>
              <Link
                href={product.link}
                className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all group/link"
              >
                Learn More
                <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
                  →
                </motion.span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
