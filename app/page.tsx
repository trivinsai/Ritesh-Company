"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Zap, Leaf, TrendingUp } from "lucide-react"
import HeroSection from "@/components/hero-section"
import ProductHighlights from "@/components/product-highlights"
import ProductShowcase from "@/components/product-showcase"

export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <HeroSection />
      <ProductHighlights />
      <ProductShowcase />

      {/* Features Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2
              className="font-bold text-foreground mb-4"
              style={{
                fontSize: "clamp(1.75rem, 5vw, 2.5rem)", // Responsive font size
              }}
            >
              Why Choose Us?
            </h2>
            <p
              className="text-muted-foreground mx-auto"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.125rem)",
                maxWidth: "36rem",
              }}
            >
              We deliver excellence in every packaging solution
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                icon: Zap,
                title: "Fast Delivery",
                description: "Timely delivery of all orders without compromising quality.",
              },
              {
                icon: Leaf,
                title: "Eco-Friendly",
                description: "Sustainable packaging solutions that care for the environment.",
              },
              {
                icon: TrendingUp,
                title: "Best Value",
                description: "Affordable pricing with premium quality guaranteed.",
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-6 sm:p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow flex flex-col items-center text-center"
              >
                <feature.icon className="w-10 h-10 sm:w-12 sm:h-12 text-accent mb-4" />
                <h3
                  className="font-bold text-foreground mb-2"
                  style={{ fontSize: "clamp(1.125rem, 3vw, 1.25rem)" }}
                >
                  {feature.title}
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "clamp(0.9rem, 2.5vw, 1rem)" }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white text-center">
        <div className="max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2
              className="font-bold mb-4"
              style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="text-white/80 mb-8 mx-auto"
              style={{
                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                maxWidth: "38rem",
              }}
            >
              Explore our full range of packaging solutions and find the perfect fit for your business.
            </p>

            <Link href="/products">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto bg-accent text-primary px-8 py-4 rounded-lg font-bold flex items-center justify-center gap-2 mx-auto hover:bg-accent/90 transition-colors"
              >
                Explore Products <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
