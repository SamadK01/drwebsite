# Dr. Aneeta Kumari Website - Setup Guide

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Email Settings

Create a `.env.local` file in the root directory:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your email credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
DOCTOR_EMAIL=dr.aneetakumari@example.com
```

#### For Gmail Users:
1. Enable 2-Factor Authentication on your Google account
2. Go to https://myaccount.google.com/apppasswords
3. Create an "App Password" for "Mail"
4. Use this app password in the `.env.local` file

#### For Other Email Providers:
Update the email service in `/src/app/api/send-email/route.ts`:
```typescript
service: 'outlook', // or 'yahoo', etc.
```

### 3. Update Contact Information

Update the following files with actual contact details:

**`/src/components/Footer.tsx`** - Update footer contact info
**`/src/app/contact/page.tsx`** - Update contact details (lines 25-35)
**`/src/app/page.tsx`** - Update phone and WhatsApp links

Search for `+91XXXXXXXXXX` and replace with actual phone number.
Search for `dr.aneetakumari@example.com` and replace with actual email.

### 4. Add Professional Photo

1. Add Dr. Aneeta Kumari's professional photo to `/public/doctor-photo.jpg`
2. Recommended size: 800x1000 pixels
3. See `/public/IMAGE_INSTRUCTIONS.md` for details

### 5. Customize Content

#### About Page (`/src/app/about/page.tsx`):
- Update education details (lines 80-120)
- Update professional experience (lines 125-160)
- Update specializations (lines 165-180)
- Update professional memberships (lines 220-240)

#### Home Page (`/src/app/page.tsx`):
- Update tagline and description
- Update services list
- Update statistics (patients treated, years of experience)

#### Contact Page (`/src/app/contact/page.tsx`):
- Update clinic address
- Update clinic hours
- Add Google Maps embed (line 280)

### 6. Add Google Maps (Optional)

In `/src/app/contact/page.tsx`, replace the placeholder map section with:

```jsx
<iframe
  src="YOUR_GOOGLE_MAPS_EMBED_URL"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>
```

To get the embed URL:
1. Go to Google Maps
2. Search for your clinic address
3. Click "Share" → "Embed a map"
4. Copy the iframe src URL

### 7. Run Development Server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

### 8. Build for Production

```bash
npm run build
npm start
```

## Features Overview

### ✅ Home Page
- Professional hero section with doctor's photo
- Service highlights
- Call-to-action buttons
- Quick contact options (Phone, WhatsApp)

### ✅ About Page
- Detailed biography
- Education and qualifications
- Professional experience
- Areas of specialization
- Medical philosophy

### ✅ Contact Page
- Contact form with email integration
- Clickable phone number
- WhatsApp chat button
- Clinic location and hours
- Google Maps integration (placeholder)

### ✅ Appointment Booking
- Interactive calendar
- Time slot selection
- Patient information form
- Email confirmations
- Automatic validation

### ✅ Responsive Design
- Mobile-friendly layout
- Tablet optimization
- Desktop experience
- Touch-friendly navigation

## Customization Tips

### Change Color Scheme

Edit `/tailwind.config.ts` to change the primary color:

```typescript
primary: {
  600: '#0284c7', // Change this hex color
  700: '#0369a1', // Darker shade
}
```

### Modify Clinic Hours

Update in multiple locations:
- `/src/components/Footer.tsx`
- `/src/app/contact/page.tsx`
- `/src/app/appointments/page.tsx`

### Adjust Appointment Time Slots

Edit `/src/app/appointments/page.tsx` (line 25):

```typescript
const timeSlots = [
  '9:00 AM', '9:30 AM', // Add or remove slots
]
```

### Change Closed Days

Currently Sunday is closed. To modify, edit `/src/app/appointments/page.tsx`:

```typescript
const isSunday = (date: Date) => {
  return date.getDay() === 0 // 0 = Sunday, 6 = Saturday
}
```

## Troubleshooting

### Email Not Sending
1. Check `.env.local` file exists and has correct credentials
2. For Gmail, ensure you're using an App Password, not regular password
3. Check console for error messages
4. Verify email service configuration in API route

### Calendar Not Working
1. Ensure `react-calendar` CSS is imported
2. Check browser console for errors
3. Verify date selection is enabled

### Styling Issues
1. Run `npm install` to ensure all dependencies are installed
2. Clear browser cache
3. Check TailwindCSS configuration

### Build Errors
1. Run `npm run build` to see detailed errors
2. Check TypeScript errors: `npm run lint`
3. Ensure all required environment variables are set

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Go to https://vercel.com
3. Import your repository
4. Add environment variables in Vercel dashboard:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `DOCTOR_EMAIL`
5. Deploy!

### Deploy to Other Platforms

The website can be deployed to:
- Netlify
- AWS Amplify
- DigitalOcean App Platform
- Any Node.js hosting

Ensure environment variables are configured on your hosting platform.

## Support & Maintenance

### Regular Updates
- Keep dependencies updated: `npm update`
- Review security updates: `npm audit`
- Test contact forms and appointment booking regularly

### Content Updates
All content can be edited directly in the respective page files without technical knowledge of React. Just edit the text between the HTML-like tags.

### Backup
Regularly backup:
- Source code (use Git)
- Environment variables
- Any uploaded images

## Security Notes

- Never commit `.env.local` to version control
- Use App Passwords for email, not account passwords
- Keep dependencies updated
- Use HTTPS in production
- Validate all form inputs (already implemented)

## Contact for Technical Support

For technical issues or questions about this website, refer to the README.md file or contact your web developer.

---

**Website built with:**
- Next.js 14
- React 18
- TypeScript
- TailwindCSS
- Nodemailer
- React Calendar
