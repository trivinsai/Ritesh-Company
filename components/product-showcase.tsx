"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  ArrowRight,
  Package,
  Zap,
  Layers,
  Tag,
  AlertCircle,
  Scissors,
} from "lucide-react"

const products = [
  {
    icon: Package,
    title: "Envelopes",
    description:
      "Premium quality envelopes in various sizes and materials. Custom sizes, bubble, and kraft options available.",
    image: "/envelop.jpg",
  },
  {
    icon: Zap,
    title: "Adhesive Tapes",
    description:
      "Reliable tapes for all your packaging needs. Clear, brown, and printed logo tapes with waterproof options.",
    image: "/tape.jpg",
  },
  {
    icon: Layers,
    title: "Stretch Films",
    description:
      "Industrial-grade stretch and wrap films. Pallet wrap and heavy-duty options for maximum protection.",
    image: "/strech-films.jpg",
  },
  {
    icon: Tag,
    title: "Cartons",
    description:
      "Durable corrugated and folding cartons. Custom printing, various sizes with fast turnaround.",
    image: "/cartons.jpg",
  },
  {
    icon: AlertCircle,
    title: "Labels",
    description:
      "High-quality adhesive and pressure-sensitive labels. Custom design, waterproof, food-grade options.",
    image: "/labels.jpg",
  },
  {
    icon: Scissors,
    title: "Shrink Wrap",
    description:
      "Professional shrink wrapping materials. Clear and colored options, perfect for product bundling.",
    image: "/shrink-wrap.jpg",
  },
]

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay },
  }),
}

export default function ProductShowcase() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Featured Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our wide range of high-quality packaging solutions
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.1 },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map(({ icon: Icon, title, description, image }, i) => (
            <motion.div
              key={title}
              variants={fadeUp}
              custom={i * 0.1}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={image || "/placeholder.svg"}
                  alt={title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileHover={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-16 h-16 text-white/80" />
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-2">
                  {description}
                </p>

                <Link href="/products" className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02, x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-primary text-white py-2 px-4 rounded-lg font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors"
                  >
                    Get Quote <ArrowRight size={16} />
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
