"use client"

import { motion } from "framer-motion"
import { Award, Users, Target, Heart } from "lucide-react"

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality",
      description: "We maintain the highest standards in all our packaging materials and services.",
    },
    {
      icon: Heart,
      title: "Sustainability",
      description: "Committed to eco-friendly solutions that protect our environment.",
    },
    {
      icon: Users,
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We listen and adapt to your needs.",
    },
    {
      icon: Target,
      title: "Reliability",
      description: "Consistent delivery and exceptional service you can count on.",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">About Ritesh & Company</h1>
            <p className="text-xl text-white/80">Your trusted partner in smart packaging solutions since day one</p>
          </motion.div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Founded with a passion for excellence, Ritesh & Company has been delivering premium packaging solutions
                to businesses across India. We understand that quality packaging is not just about protection—it's about
                representation and sustainability.
              </p>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                Our journey began with a simple mission: to provide reliable, affordable, and sustainable packaging
                materials that help businesses grow. Over the years, we've earned the trust of thousands of satisfied
                clients through our commitment to quality, timely delivery, and exceptional customer service.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Today, we take pride in being one of the most trusted packaging suppliers in the region, continuing to
                innovate and improve our offerings to meet the evolving needs of modern businesses.
              </p>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src="/about.jpg"
                alt="Ritesh & Company facility"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the most reliable and affordable packaging partner for businesses of all sizes, delivering
                sustainable solutions that exceed expectations and drive growth.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-lg p-8 shadow-md"
            >
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To revolutionize the packaging industry by combining innovation, sustainability, and customer-centric
                solutions that create lasting value for all stakeholders.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">These principles guide everything we do</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-all text-center"
              >
                <motion.div whileHover={{ scale: 1.1, rotate: 5 }} className="flex justify-center mb-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-accent" />
                  </div>
                </motion.div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
            <p className="text-lg text-muted-foreground">Dedicated professionals committed to excellence</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ritesh Sharma", role: "Founder & CEO", specialty: "Business Strategy" },
              { name: "Priya Patel", role: "Operations Manager", specialty: "Supply Chain" },
              { name: "Amit Kumar", role: "Sales Director", specialty: "Customer Relations" },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all"
              >
                <div className="h-40 bg-gradient-to-br from-primary to-accent"></div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.specialty}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="text-center mt-6 text-sm">
           this is prototype version 
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16  px-4 sm:px-6 lg:px-8 bg-primary text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }}>
            <h2 className="text-4xl font-bold mb-6">Join Our Growing Family</h2>
            <p className="text-xl text-white/80 mb-8">
              Experience the difference quality and reliability can make for your business.
            </p>
            <motion.a
              href="https://wa.me/919876543210"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors"
            >
              Get in Touch Today
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
