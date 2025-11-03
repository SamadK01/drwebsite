import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Dr. Aneeta Kumari</h3>
            <p className="text-sm leading-relaxed">
              Providing professional medical care with compassion and expertise. 
              Your health and well-being are our top priorities.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-primary-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  About Dr. Kumari
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/appointments" className="hover:text-primary-400 transition-colors">
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>+91 XXX XXX XXXX</span>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>dr.aneetakumari@example.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Clinic Address, City, State</span>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span>Mon-Sat: 9:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {currentYear} Dr. Aneeta Kumari. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
