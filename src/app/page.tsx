import Link from 'next/link'
import { Calendar, Phone, MessageCircle, Award, Heart, Users, Clock, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-50 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-block">
                <span className="bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium">
                  Professional Medical Care
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Dr. Aneeta Kumari
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Compassionate Healthcare with Excellence and Expertise
              </p>
              
              <p className="text-lg text-gray-600">
                Providing personalized medical care focused on your health, wellness, and peace of mind.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link
                  href="/appointments"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Link>
                
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-all"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Contact Us
                </Link>
              </div>

              {/* Quick Contact */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                <a
                  href="tel:+91XXXXXXXXXX"
                  className="flex items-center text-gray-700 hover:text-primary-600 transition-colors"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  <span className="font-medium">Call Now</span>
                </a>
                <a
                  href="https://wa.me/91XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-gray-700 hover:text-green-600 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  <span className="font-medium">WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[3/4] bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                  {/* Placeholder for doctor's photo */}
                  <div className="text-center p-8">
                    <div className="w-48 h-48 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                      <Award className="h-24 w-24 text-primary-600" />
                    </div>
                    <p className="text-gray-600 text-sm">
                      Replace this with Dr. Aneeta Kumari&apos;s professional photo
                      <br />
                      <span className="text-xs">(Add image to /public/doctor-photo.jpg)</span>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-4 hidden md:block">
                <div className="flex items-center space-x-3">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">1000+</p>
                    <p className="text-sm text-gray-600">Happy Patients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Dr. Aneeta Kumari?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience healthcare that puts you first with personalized attention and expert care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Award className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Expert Care
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Years of experience and continuous learning ensure you receive the highest quality medical care.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-green-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Heart className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Compassionate Approach
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Every patient is treated with empathy, respect, and personalized attention to their unique needs.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-purple-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Convenient Scheduling
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Easy online appointment booking and flexible hours to accommodate your busy schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Medical Services
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Offering a wide range of medical services tailored to meet your healthcare needs with professionalism and care.
              </p>
              
              <ul className="space-y-4">
                {[
                  'General Health Consultations',
                  'Preventive Care & Wellness',
                  'Chronic Disease Management',
                  'Health Screenings & Diagnostics',
                  'Patient Education & Counseling',
                  'Follow-up Care & Monitoring'
                ].map((service, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{service}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/about"
                className="inline-flex items-center mt-8 text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                Learn More About Dr. Kumari
                <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl p-8 shadow-xl">
                <div className="bg-white rounded-xl p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Ready to Get Started?
                  </h3>
                  <p className="text-gray-600">
                    Schedule your appointment today and take the first step towards better health.
                  </p>
                  
                  <div className="space-y-4">
                    <Link
                      href="/appointments"
                      className="block w-full text-center px-6 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
                    >
                      Book an Appointment
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="block w-full text-center px-6 py-4 bg-white text-primary-600 border-2 border-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
                    >
                      Contact for Inquiries
                    </Link>
                  </div>

                  <div className="pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-600 mb-3">Quick Contact:</p>
                    <div className="space-y-2">
                      <a href="tel:+91XXXXXXXXXX" className="flex items-center text-gray-700 hover:text-primary-600">
                        <Phone className="h-4 w-4 mr-2" />
                        <span>+91 XXX XXX XXXX</span>
                      </a>
                      <a href="https://wa.me/91XXXXXXXXXX" className="flex items-center text-gray-700 hover:text-green-600">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        <span>WhatsApp Chat</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Your Health is Our Priority
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Experience professional medical care in a welcoming and comfortable environment.
          </p>
          <Link
            href="/appointments"
            className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl transform hover:-translate-y-0.5"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Your Visit Today
          </Link>
        </div>
      </section>
    </div>
  )
}
