import Link from "next/link"
import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-0">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-sm">RC</span>
              </div>
              <h3 className="text-lg font-bold">Ritesh & Company</h3>
            </div>
            <p className="text-white/80 text-sm">Your trusted partner in smart packaging solutions.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-accent transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex gap-2 items-start">
                <Phone size={16} className="flex-shrink-0 mt-1" />
                <span>+91 9876543210</span>
              </div>
              <div className="flex gap-2 items-start">
                <Mail size={16} className="flex-shrink-0 mt-1" />
                <span>info@riteshcompany.com</span>
              </div>
              <div className="flex gap-2 items-start">
                <MapPin size={16} className="flex-shrink-0 mt-1" />
                <span>123 Packaging Street, Business City, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-white/20 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-white/80">&copy; 2025 Ritesh & Company. All rights reserved.</p>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <a href="#" className="hover:text-accent transition-colors">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-accent transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="https://wa.me/919876543210" className="hover:text-accent transition-colors">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
