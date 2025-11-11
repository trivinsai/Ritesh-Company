import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "Ritesh & Company - Smart Packaging Solutions",
  description:
    "Reliable, sustainable, and affordable packaging materials including envelopes, adhesive tapes, stretch films, and custom packaging solutions.",
  keywords: "packaging, envelopes, adhesive tape, stretch film, sustainable packaging",
  openGraph: {
    title: "Ritesh & Company - Smart Packaging Solutions",
    description: "Your trusted partner in smart packaging solutions",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${poppins.className} font-sans antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppButton />
        <Analytics />
      </body>
    </html>
  )
}
