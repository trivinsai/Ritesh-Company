"use client"

import { motion } from "framer-motion"
import ProductCard from "@/components/product-card"
import { Package, Zap, Layers, Tag, AlertCircle, Scissors } from "lucide-react"

export default function ProductsPage() {
  const productCategories = [
    {
      icon: Package,
      title: "Envelopes",
      description: "Premium quality envelopes in various sizes and materials",
      features: ["Custom sizes", "Bubble envelopes", "Kraft envelopes", "Specialty options"],
      specs: "Available in all standard and custom sizes",
      image: "/envelop.jpg",
    },
    {
      icon: Zap,
      title: "Adhesive Tapes",
      description: "Reliable tapes for all your packaging needs",
      features: ["Clear tapes", "Brown tapes", "Printed logo tapes", "Waterproof options"],
      specs: "High-strength adhesive, various widths",
      image: "/tape.jpg",
    },
    {
      icon: Layers,
      title: "Stretch Films",
      description: "Industrial-grade stretch and wrap films",
      features: ["Pallet wrap", "Industrial grade", "Heavy-duty", "Eco-friendly options"],
      specs: "Premium quality for maximum protection",
      image: "/strech-films.jpg",
    },
    {
      icon: Tag,
      title: "Cartons",
      description: "Durable corrugated and folding cartons",
      features: ["Custom printing", "Various sizes", "Eco-friendly", "Fast turnaround"],
      specs: "Professional packaging solutions",
      image: "/cartons.jpg",
    },
    {
      icon: AlertCircle,
      title: "Labels",
      description: "High-quality adhesive and pressure-sensitive labels",
      features: ["Custom design", "Waterproof", "Food-grade", "Durable"],
      specs: "Perfect for branding and product identification",
      image: "/labels.jpg",
    },
    {
      icon: Scissors,
      title: "Shrink Wrap",
      description: "Professional shrink wrapping materials",
      features: ["Clear shrink film", "Colored options", "High strength", "Custom sizes"],
      specs: "Ideal for product bundling and protection",
      image: "/shrink-wrap.jpg",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Page Header */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Products</h1>
            <p className="text-xl text-white/80">Explore our complete range of quality packaging solutions</p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {productCategories.map((product, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Why Our Products?</h2>
            <p className="text-lg text-muted-foreground">Superior quality at competitive prices</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Quality Assured", desc: "All products meet international quality standards" },
              { title: "Affordable Pricing", desc: "Best prices without compromising on quality" },
              { title: "Fast Delivery", desc: "Efficient logistics ensuring timely delivery" },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Need Custom Solutions?
          </motion.h2>
          <p className="text-xl text-white/80 mb-8">
            Contact us for bulk orders, custom packaging, or special requirements.
          </p>
          <motion.a
            href="https://wa.me/919876543210"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors"
          >
            Contact via WhatsApp
          </motion.a>
        </div>
      </section>
    </main>
  )
}
