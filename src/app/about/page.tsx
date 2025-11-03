import { GraduationCap, Award, Briefcase, Heart, Users, Star } from 'lucide-react'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              About Dr. Aneeta Kumari
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated to providing exceptional medical care with compassion, expertise, and a patient-centered approach.
            </p>
          </div>
        </div>
      </section>

      {/* Main Bio Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Photo Column */}
            <div className="md:col-span-1">
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl overflow-hidden shadow-xl">
                  <div className="aspect-[3/4] flex items-center justify-center p-8">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                        <Award className="h-20 w-20 text-primary-600" />
                      </div>
                      <p className="text-gray-600 text-sm">
                        Professional Photo
                        <br />
                        <span className="text-xs">Add to /public/doctor-photo.jpg</span>
                      </p>
                    </div>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-6 bg-white rounded-xl shadow-lg p-6 space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-blue-100 p-2 rounded-lg">
                      <Briefcase className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Experience</p>
                      <p className="font-semibold text-gray-900">10+ Years</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-green-100 p-2 rounded-lg">
                      <Users className="h-5 w-5 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Patients Treated</p>
                      <p className="font-semibold text-gray-900">1000+</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-100 p-2 rounded-lg">
                      <Star className="h-5 w-5 text-yellow-600" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Patient Rating</p>
                      <p className="font-semibold text-gray-900">4.9/5.0</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="md:col-span-2 space-y-8">
              {/* Introduction */}
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Welcome to My Practice
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  I am Dr. Aneeta Kumari, a dedicated medical professional committed to providing comprehensive, 
                  compassionate healthcare to my patients. With over a decade of experience in the medical field, 
                  I believe in treating each patient as an individual, understanding their unique health needs, 
                  and working collaboratively to achieve optimal health outcomes.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  My approach to medicine combines evidence-based practices with a deep understanding of the 
                  human aspect of healthcare. I strive to create a comfortable, welcoming environment where 
                  patients feel heard, respected, and empowered to take charge of their health.
                </p>
              </div>

              {/* Education */}
              <div className="bg-gradient-to-br from-blue-50 to-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-600 p-3 rounded-xl mr-4">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Education & Training</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      MBBS (Bachelor of Medicine, Bachelor of Surgery)
                    </h3>
                    <p className="text-gray-600 mb-2">
                      [Medical College Name], [Year]
                    </p>
                    <p className="text-gray-700">
                      Completed comprehensive medical education with distinction, focusing on patient care 
                      and clinical excellence.
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      MD/Specialization (if applicable)
                    </h3>
                    <p className="text-gray-600 mb-2">
                      [Institution Name], [Year]
                    </p>
                    <p className="text-gray-700">
                      Advanced training in [Specialization Area], with focus on [specific areas of expertise].
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Continuing Medical Education
                    </h3>
                    <p className="text-gray-700">
                      Regular participation in medical conferences, workshops, and training programs to stay 
                      current with the latest medical advances and best practices.
                    </p>
                  </div>
                </div>
              </div>

              {/* Professional Experience */}
              <div className="bg-gradient-to-br from-green-50 to-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-green-600 p-3 rounded-xl mr-4">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Professional Experience</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Current Practice
                    </h3>
                    <p className="text-gray-600 mb-2">
                      [Clinic/Hospital Name] • [Year - Present]
                    </p>
                    <p className="text-gray-700">
                      Providing comprehensive medical care including general consultations, preventive care, 
                      chronic disease management, and patient education. Building long-term relationships with 
                      patients and their families.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      Previous Positions
                    </h3>
                    <p className="text-gray-600 mb-2">
                      [Institution Name] • [Years]
                    </p>
                    <p className="text-gray-700">
                      Gained extensive experience in [specific areas], working with diverse patient populations 
                      and complex medical cases.
                    </p>
                  </div>
                </div>
              </div>

              {/* Specializations & Expertise */}
              <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-purple-600 p-3 rounded-xl mr-4">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Areas of Specialization</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'General Medicine',
                    'Preventive Healthcare',
                    'Chronic Disease Management',
                    'Women&apos;s Health',
                    'Pediatric Care',
                    'Geriatric Medicine',
                    'Lifestyle Medicine',
                    'Health & Wellness Counseling'
                  ].map((specialty, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Award className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="text-gray-700 font-medium">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gradient-to-br from-pink-50 to-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="bg-pink-600 p-3 rounded-xl mr-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">My Philosophy</h2>
                </div>
                
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Patient-Centered Care:</strong> Every patient is unique, 
                    and I believe in tailoring treatment plans to individual needs, preferences, and circumstances.
                  </p>
                  <p>
                    <strong className="text-gray-900">Preventive Focus:</strong> I emphasize preventive care 
                    and early intervention to help patients maintain optimal health and prevent disease.
                  </p>
                  <p>
                    <strong className="text-gray-900">Clear Communication:</strong> I ensure patients fully 
                    understand their health conditions and treatment options, empowering them to make informed decisions.
                  </p>
                  <p>
                    <strong className="text-gray-900">Holistic Approach:</strong> I consider the physical, 
                    emotional, and social aspects of health to provide comprehensive care.
                  </p>
                  <p>
                    <strong className="text-gray-900">Continuous Learning:</strong> Medicine is constantly 
                    evolving, and I stay updated with the latest research and best practices to provide the 
                    highest quality care.
                  </p>
                </div>
              </div>

              {/* Professional Memberships */}
              <div className="bg-gray-50 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Professional Memberships & Certifications
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Member, Indian Medical Association (IMA)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Registered Medical Practitioner, Medical Council of India</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Certified in Advanced Life Support (ACLS)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-600 mr-3 mt-1">•</span>
                    <span className="text-gray-700">Member, [Relevant Medical Societies/Organizations]</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience Quality Healthcare?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Schedule an appointment today and let&apos;s work together towards your health goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/appointments"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-xl"
            >
              Book Appointment
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary-700 text-white border-2 border-white rounded-lg font-semibold hover:bg-primary-800 transition-all"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
