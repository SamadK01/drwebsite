import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { type } = body

    // Configure your email settings here
    // For Gmail: Use App Password (not regular password)
    // For other providers: Use their SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'gmail', // Change to your email service (gmail, outlook, etc.)
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Set in .env.local
        pass: process.env.EMAIL_PASSWORD || 'your-app-password', // Set in .env.local
      },
    })

    // Email to doctor
    const doctorEmail = process.env.DOCTOR_EMAIL || 'dr.aneetakumari@example.com'

    let mailOptions
    let confirmationMailOptions

    if (type === 'contact') {
      // Contact form submission
      const { name, email, phone, subject, message } = body

      mailOptions = {
        from: process.env.EMAIL_USER,
        to: doctorEmail,
        subject: `New Contact Form Submission: ${subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0284c7;">New Contact Form Submission</h2>
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
              <p><strong>Subject:</strong> ${subject}</p>
            </div>
            <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
              <h3 style="color: #374151;">Message:</h3>
              <p style="color: #4b5563; line-height: 1.6;">${message}</p>
            </div>
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              This message was sent from the contact form on Dr. Aneeta Kumari's website.
            </p>
          </div>
        `,
      }

      confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for contacting Dr. Aneeta Kumari',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0284c7;">Thank You for Reaching Out</h2>
            <p>Dear ${name},</p>
            <p>Thank you for contacting Dr. Aneeta Kumari. We have received your message and will respond to you as soon as possible.</p>
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151;">Your Message:</h3>
              <p><strong>Subject:</strong> ${subject}</p>
              <p style="color: #4b5563; line-height: 1.6;">${message}</p>
            </div>
            <p>If you need immediate assistance, please call us at +91 XXX XXX XXXX.</p>
            <p style="margin-top: 30px;">Best regards,<br><strong>Dr. Aneeta Kumari's Office</strong></p>
          </div>
        `,
      }
    } else if (type === 'appointment') {
      // Appointment booking submission
      const { name, email, phone, date, time, reason, notes } = body

      mailOptions = {
        from: process.env.EMAIL_USER,
        to: doctorEmail,
        subject: `New Appointment Request: ${name} - ${date} at ${time}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0284c7;">New Appointment Request</h2>
            <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151;">Patient Information:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Phone:</strong> ${phone}</p>
            </div>
            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151;">Appointment Details:</h3>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Time:</strong> ${time}</p>
              <p><strong>Reason:</strong> ${reason}</p>
            </div>
            ${notes ? `
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
                <h3 style="color: #374151;">Additional Notes:</h3>
                <p style="color: #4b5563; line-height: 1.6;">${notes}</p>
              </div>
            ` : ''}
            <p style="color: #6b7280; font-size: 14px; margin-top: 20px;">
              Please confirm this appointment with the patient.
            </p>
          </div>
        `,
      }

      confirmationMailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Appointment Request Received - Dr. Aneeta Kumari',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #0284c7;">Appointment Request Received</h2>
            <p>Dear ${name},</p>
            <p>Thank you for requesting an appointment with Dr. Aneeta Kumari. We have received your request and will confirm your appointment shortly.</p>
            <div style="background-color: #dbeafe; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151;">Requested Appointment:</h3>
              <p><strong>Date:</strong> ${date}</p>
              <p><strong>Time:</strong> ${time}</p>
              <p><strong>Reason:</strong> ${reason}</p>
            </div>
            <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <p style="margin: 0; color: #92400e;">
                <strong>⏰ Please Note:</strong> This is a request confirmation. We will contact you within 24 hours to confirm your appointment.
              </p>
            </div>
            <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #374151;">What to Bring:</h3>
              <ul style="color: #4b5563;">
                <li>Valid ID proof</li>
                <li>Previous medical records (if any)</li>
                <li>List of current medications</li>
                <li>Insurance information (if applicable)</li>
              </ul>
            </div>
            <p>If you need to make any changes or have questions, please contact us:</p>
            <p>
              <strong>Phone:</strong> +91 XXX XXX XXXX<br>
              <strong>Email:</strong> ${doctorEmail}
            </p>
            <p style="margin-top: 30px;">We look forward to seeing you!<br><strong>Dr. Aneeta Kumari's Office</strong></p>
          </div>
        `,
      }
    } else {
      return NextResponse.json(
        { error: 'Invalid request type' },
        { status: 400 }
      )
    }

    // Send email to doctor
    await transporter.sendMail(mailOptions)

    // Send confirmation email to user
    if (confirmationMailOptions) {
      await transporter.sendMail(confirmationMailOptions)
    }

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    )
  }
}
