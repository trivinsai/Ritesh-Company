"use client"
import { motion, useViewportScroll, useTransform } from "framer-motion"

/**
 * Utility hook for parallax scrolling effects
 * Usage: const y = useParallax(0.5)
 */
export function useParallax(speed: number) {
  const { scrollY } = useViewportScroll()
  return useTransform(scrollY, (value) => value * speed)
}

/**
 * Component for scroll-triggered animations
 * Used throughout the site for fade-in effects
 */
export const ScrollFadeIn = motion.div
