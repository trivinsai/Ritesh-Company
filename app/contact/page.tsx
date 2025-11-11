"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import ContactCard from "@/components/contact-card"

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9876543210",
      link: "tel:+919876543210",
      linkText: "Call Now",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@riteshcompany.com",
      link: "mailto:info@riteshcompany.com",
      linkText: "Send Email",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "123 Packaging Street, Business City, India",
      link: "#",
      linkText: "View on Map",
    },
    {
      icon: Clock,
      title: "Business Hours",
      value: "Mon - Fri: 9:00 AM - 6:00 PM IST",
      link: "#",
      linkText: "More Info",
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-white/80">
              Get in touch with our team for inquiries, bulk orders, or partnerships
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Multiple ways to reach us</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <ContactCard info={info} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* WhatsApp Chat Card */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Left Side - Info */}
              <div className="flex flex-col justify-center">
                <h2 className="text-3xl font-bold text-foreground mb-4">Chat With Us on WhatsApp</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Have questions about our products or need a custom quote? Reach out to us directly via WhatsApp for
                  instant support.
                </p>
                <ul className="space-y-3 text-muted-foreground mb-8">
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Quick response time</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Direct chat with our team</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Share images and documents</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent font-bold">✓</span>
                    <span>Available on mobile and desktop</span>
                  </li>
                </ul>
                <motion.a
                  href="https://wa.me/919876543210?text=Hi%20Ritesh%20%26%20Company%2C%20I%27d%20like%20to%20inquire%20about%20your%20packaging%20solutions"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-accent/90 transition-colors w-fit"
                >
                  <MessageCircle size={20} />
                  Start WhatsApp Chat
                </motion.a>
              </div>

              {/* Right Side - Visual */}
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
                  className="w-full h-96 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg flex items-center justify-center"
                >
                  <div className="text-center">
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="text-6xl mb-4"
                    >
                      <MessageCircle className="w-24 h-24 text-accent" />
                    </motion.div>
                    <p className="text-lg font-bold text-foreground">Available Now</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Find Us</h2>
            <p className="text-lg text-muted-foreground">Visit our headquarters</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="rounded-xl overflow-hidden shadow-lg h-96"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.5820850256316!2d77.39391!3d28.613949!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3b5b5b5b5b5%3A0x5b5b5b5b5b5b5b5b!2sNew%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ritesh & Company Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      {/* FAQ-like Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-foreground mb-4">Quick Responses</h2>
            <p className="text-lg text-muted-foreground">Common inquiries we handle daily</p>
          </motion.div>

          <div className="space-y-6">
            {[
              {
                q: "What is the minimum order quantity?",
                a: "We accept bulk orders starting from 100 units. For smaller quantities, please contact us for special requests.",
              },
              {
                q: "How long does delivery take?",
                a: "Standard delivery within India takes 3-7 business days depending on location. Express shipping available on request.",
              },
              {
                q: "Do you offer customization?",
                a: "Yes, we specialize in custom packaging solutions. Contact us with your requirements for a personalized quote.",
              },
              {
                q: "What payment methods do you accept?",
                a: "We accept bank transfers, cheques, and online payments. Bulk customers can request credit terms.",
              },
            ].map((faq, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-md"
              >
                <h3 className="text-lg font-bold text-foreground mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
