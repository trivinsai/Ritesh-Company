"use client"

import type React from "react"

import { motion } from "framer-motion"

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>
  title: string
  value: string
  link: string
  linkText: string
}

export default function ContactCard({ info }: { info: ContactInfo }) {
  const Icon = info.icon

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all border border-border"
    >
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ duration: 0.2 }} className="inline-block mb-4">
        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
          <Icon className="w-6 h-6 text-accent" />
        </div>
      </motion.div>

      <h3 className="text-lg font-bold text-foreground mb-2">{info.title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{info.value}</p>

      <motion.a
        href={info.link}
        whileHover={{ x: 4 }}
        transition={{ duration: 0.2 }}
        className="text-primary font-semibold text-sm hover:text-primary/80 transition-colors inline-flex items-center gap-1"
      >
        {info.linkText}
        <span>→</span>
      </motion.a>
    </motion.div>
  )
}
