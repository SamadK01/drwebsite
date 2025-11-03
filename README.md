# Dr. Aneeta Kumari - Professional Medical Website

A modern, responsive website for Dr. Aneeta Kumari featuring appointment booking, contact forms, and professional information.

## Features

- **Home Page**: Professional hero section with doctor's photo and tagline
- **About Page**: Detailed biography, education, and specialization
- **Contact Page**: Contact form with email, phone, and WhatsApp integration
- **Appointment Page**: Online booking calendar with email confirmations
- **Mobile Responsive**: Works perfectly on all devices
- **Modern UI**: Built with React, Next.js, and TailwindCSS

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Configuration

### Email Setup

To enable email functionality for contact forms and appointment confirmations:

1. Open `/src/app/api/send-email/route.ts`
2. Update the email configuration with your SMTP details:
   - Email service (Gmail, Outlook, etc.)
   - Email address
   - App password or SMTP credentials

### Content Customization

- **Doctor's Information**: Edit `/src/app/about/page.tsx`
- **Contact Details**: Update phone number and WhatsApp in `/src/app/contact/page.tsx`
- **Clinic Location**: Add Google Maps embed in contact page
- **Professional Photo**: Replace placeholder image in `/public/doctor-photo.jpg`

## Technology Stack

- **Framework**: Next.js 14 (React)
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Calendar**: React Calendar
- **Email**: Nodemailer
- **Language**: TypeScript

## File Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx          # Home page
│   │   ├── about/            # About page
│   │   ├── contact/          # Contact page
│   │   ├── appointments/     # Appointment booking
│   │   └── api/              # API routes for email
│   ├── components/           # Reusable components
│   └── lib/                  # Utility functions
├── public/                   # Static assets
└── package.json
```

## Support

For questions or issues, please contact the development team.
