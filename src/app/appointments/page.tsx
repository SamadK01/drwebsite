'use client'

import { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import { Calendar as CalendarIcon, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export default function Appointments() {
  const [selectedDate, setSelectedDate] = useState<Value>(new Date())
  const [selectedTime, setSelectedTime] = useState('')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    reason: '',
    notes: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  // Available time slots
  const timeSlots = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '12:00 PM', '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM', '4:00 PM',
    '4:30 PM', '5:00 PM', '5:30 PM'
  ]

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!selectedDate || !selectedTime) {
      alert('Please select both date and time for your appointment')
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          type: 'appointment',
          date: selectedDate instanceof Date ? selectedDate.toLocaleDateString() : '',
          time: selectedTime,
          ...formData
        }),
      })

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({
          name: '',
          email: '',
          phone: '',
          reason: '',
          notes: ''
        })
        setSelectedTime('')
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  // Disable past dates
  const tileDisabled = ({ date }: { date: Date }) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  // Disable Sundays
  const isSunday = (date: Date) => {
    return date.getDay() === 0
  }

  const tileClassName = ({ date }: { date: Date }) => {
    if (isSunday(date)) {
      return 'sunday-disabled'
    }
    return null
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-600 rounded-full mb-4">
              <CalendarIcon className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-4">
              Book an Appointment
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule your visit with Dr. Aneeta Kumari. Select your preferred date and time, and we&apos;ll confirm your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Appointment Booking Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitStatus === 'success' ? (
            // Success Message
            <div className="max-w-2xl mx-auto">
              <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-12 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
                  <CheckCircle className="h-10 w-10 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Appointment Request Received!
                </h2>
                <p className="text-lg text-gray-700 mb-6">
                  Thank you for booking an appointment with Dr. Aneeta Kumari. We&apos;ve received your request and will send you a confirmation email shortly.
                </p>
                <div className="bg-white rounded-lg p-6 mb-6">
                  <p className="text-sm text-gray-600 mb-2">You'll receive confirmation at:</p>
                  <p className="text-lg font-semibold text-gray-900">{formData.email}</p>
                </div>
                <button
                  onClick={() => setSubmitStatus('idle')}
                  className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
                >
                  Book Another Appointment
                </button>
              </div>
            </div>
          ) : (
            // Booking Form
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column - Calendar and Time Selection */}
              <div className="space-y-8">
                {/* Calendar */}
                <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <CalendarIcon className="mr-3 h-6 w-6 text-primary-600" />
                    Select Date
                  </h2>
                  
                  <div className="appointment-calendar">
                    <Calendar
                      onChange={setSelectedDate}
                      value={selectedDate}
                      tileDisabled={tileDisabled}
                      tileClassName={tileClassName}
                      minDate={new Date()}
                      className="w-full border-0 rounded-lg"
                    />
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-800">
                        <strong>Note:</strong> Clinic is closed on Sundays. Please select a weekday or Saturday.
                      </p>
                  </div>
                </div>

                {/* Time Slots */}
                <div className="bg-white rounded-xl shadow-xl p-6 border border-gray-100">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <Clock className="mr-3 h-6 w-6 text-primary-600" />
                    Select Time
                  </h2>
                  
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setSelectedTime(time)}
                        className={`px-4 py-3 rounded-lg font-medium transition-all ${
                          selectedTime === time
                            ? 'bg-primary-600 text-white shadow-lg'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>

                  {selectedTime && (
                    <div className="mt-4 p-4 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Selected:</strong> {selectedDate instanceof Date ? selectedDate.toLocaleDateString() : ''} at {selectedTime}
                      </p>
                    </div>
                  )}
                </div>

                {/* Clinic Hours Info */}
                <div className="bg-gradient-to-br from-purple-50 to-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Clinic Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Monday - Friday</span>
                      <span className="text-gray-600">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Saturday</span>
                      <span className="text-gray-600">9:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700 font-medium">Sunday</span>
                      <span className="text-red-600">Closed</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Patient Information Form */}
              <div>
                <div className="bg-white rounded-xl shadow-xl p-8 border border-gray-100 sticky top-24">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <User className="mr-3 h-6 w-6 text-primary-600" />
                    Your Information
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                        placeholder="Your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">
                        Reason for Visit *
                      </label>
                      <select
                        id="reason"
                        name="reason"
                        required
                        value={formData.reason}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select reason</option>
                        <option value="general">General Consultation</option>
                        <option value="followup">Follow-up Visit</option>
                        <option value="checkup">Routine Check-up</option>
                        <option value="prescription">Prescription Refill</option>
                        <option value="symptoms">Specific Symptoms</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                        Additional Notes
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <textarea
                          id="notes"
                          name="notes"
                          value={formData.notes}
                          onChange={handleChange}
                          rows={4}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                          placeholder="Any specific concerns or information we should know..."
                        />
                      </div>
                    </div>

                    {submitStatus === 'error' && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <p className="text-red-800 font-medium text-sm">
                      ✗ Failed to submit appointment. Please try again or call us directly.
                      </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting || !selectedDate || !selectedTime}
                      className="w-full flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Submitting...
                        </>
                      ) : (
                        <>
                          <CalendarIcon className="mr-2 h-5 w-5" />
                          Request Appointment
                        </>
                      )}
                    </button>

                    <p className="text-sm text-gray-600 text-center">
                      * Required fields. You'll receive a confirmation email once we process your request.
                    </p>
                  </form>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CalendarIcon className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Easy Scheduling
              </h3>
                    <p className="text-gray-600 text-sm">
                      Choose your preferred date and time from available slots. We&apos;ll confirm your appointment within 24 hours.
                    </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Confirmation
              </h3>
              <p className="text-gray-600 text-sm">
                Receive instant email confirmation with appointment details and any preparation instructions.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Phone className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Need Help?
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                Have questions about booking? Contact us directly.
              </p>
              <a href="tel:+91XXXXXXXXXX" className="text-primary-600 font-medium text-sm hover:text-primary-700">
                Call: +91 XXX XXX XXXX
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Calendar Styles */}
      <style jsx global>{`
        .appointment-calendar .react-calendar {
          width: 100%;
          border: none;
          font-family: inherit;
        }
        
        .appointment-calendar .react-calendar__tile {
          padding: 1rem;
          border-radius: 0.5rem;
          transition: all 0.2s;
        }
        
        .appointment-calendar .react-calendar__tile:enabled:hover {
          background-color: #e0f2fe;
        }
        
        .appointment-calendar .react-calendar__tile--active {
          background-color: #0284c7 !important;
          color: white;
        }
        
        .appointment-calendar .react-calendar__tile--now {
          background-color: #f0f9ff;
        }
        
        .appointment-calendar .sunday-disabled {
          background-color: #fee2e2;
          color: #991b1b;
          cursor: not-allowed;
        }
        
        .appointment-calendar .react-calendar__tile:disabled {
          background-color: #f3f4f6;
          color: #9ca3af;
        }
        
        .appointment-calendar .react-calendar__navigation button {
          font-size: 1.125rem;
          font-weight: 600;
          color: #0284c7;
        }
        
        .appointment-calendar .react-calendar__navigation button:enabled:hover {
          background-color: #f0f9ff;
        }
      `}</style>
    </div>
  )
}
