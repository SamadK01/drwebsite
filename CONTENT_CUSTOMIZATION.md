# Content Customization Guide

This guide helps you customize the website content without technical knowledge. Simply find the file and section mentioned below, and edit the text.

## 🏠 Home Page Content

**File:** `/src/app/page.tsx`

### Main Heading & Tagline
**Line 17-25:** Change the main heading and tagline
```jsx
<h1>Dr. Aneeta Kumari</h1>
<p>Compassionate Healthcare with Excellence and Expertise</p>
<p>Providing personalized medical care...</p>
```

### Services List
**Line 123-130:** Update the services offered
```jsx
'General Health Consultations',
'Preventive Care & Wellness',
// Add or modify services here
```

### Statistics
**Line 75:** Update patient count
```jsx
<p>1000+</p>
<p>Happy Patients</p>
```

---

## 👤 About Page Content

**File:** `/src/app/about/page.tsx`

### Introduction
**Line 70-85:** Edit the welcome message and introduction

### Education Section
**Line 95-125:** Update education details
```jsx
<h3>MBBS (Bachelor of Medicine, Bachelor of Surgery)</h3>
<p>[Medical College Name], [Year]</p>
<p>Description of education...</p>
```

Add more education entries by copying the same structure.

### Professional Experience
**Line 135-165:** Update work experience
```jsx
<h3>Current Practice</h3>
<p>[Clinic/Hospital Name] • [Year - Present]</p>
<p>Description...</p>
```

### Specializations
**Line 175-185:** Modify areas of expertise
```jsx
'General Medicine',
'Preventive Healthcare',
// Add or remove specializations
```

### Professional Memberships
**Line 225-240:** Update memberships and certifications

---

## 📞 Contact Page Content

**File:** `/src/app/contact/page.tsx`

### Contact Information
**Line 25-35:** Update all contact details
```javascript
const contactInfo = {
  phone: '+91XXXXXXXXXX',        // Update phone number
  whatsapp: '91XXXXXXXXXX',      // Update WhatsApp number
  email: 'dr.aneetakumari@example.com',  // Update email
  address: 'Clinic Address, City, State, PIN Code',  // Update address
  hours: [
    { days: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
    { days: 'Saturday', time: '9:00 AM - 2:00 PM' },
    { days: 'Sunday', time: 'Closed' }
  ]
}
```

### Contact Form Subjects
**Line 180-186:** Modify dropdown options
```jsx
<option value="general">General Inquiry</option>
<option value="appointment">Appointment Request</option>
// Add or modify options
```

---

## 📅 Appointments Page Content

**File:** `/src/app/appointments/page.tsx`

### Available Time Slots
**Line 20-24:** Modify appointment times
```javascript
const timeSlots = [
  '9:00 AM', '9:30 AM', '10:00 AM',
  // Add or remove time slots
]
```

### Clinic Hours Display
**Line 340-350:** Update displayed clinic hours

### Appointment Reasons
**Line 265-271:** Modify visit reasons
```jsx
<option value="general">General Consultation</option>
<option value="followup">Follow-up Visit</option>
// Add or modify reasons
```

---

## 🦶 Footer Content

**File:** `/src/components/Footer.tsx`

### About Text
**Line 15-19:** Update footer description

### Contact Information
**Line 45-65:** Update footer contact details
```jsx
<span>+91 XXX XXX XXXX</span>
<span>dr.aneetakumari@example.com</span>
<span>Clinic Address, City, State</span>
<span>Mon-Sat: 9:00 AM - 6:00 PM</span>
```

---

## 🎨 Color Scheme

**File:** `/tailwind.config.ts`

### Primary Color
**Line 12-22:** Change the main blue color
```typescript
primary: {
  600: '#0284c7',  // Main color - change this hex code
  700: '#0369a1',  // Darker shade
}
```

Popular medical color options:
- Blue (Trust): `#0284c7` (current)
- Teal (Calm): `#14b8a6`
- Green (Health): `#10b981`
- Purple (Care): `#8b5cf6`

---

## 📧 Email Configuration

**File:** `.env.local` (create from `.env.local.example`)

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
DOCTOR_EMAIL=dr.aneetakumari@example.com
```

**File:** `/src/app/api/send-email/route.ts`

### Email Templates
**Line 30-60:** Customize contact form email template
**Line 85-130:** Customize appointment confirmation email

---

## 🖼️ Images

### Doctor's Photo
1. Save professional photo as `/public/doctor-photo.jpg`
2. Recommended size: 800x1000 pixels
3. See `/public/IMAGE_INSTRUCTIONS.md` for details

### Clinic Logo (Optional)
1. Save logo as `/public/logo.png`
2. Update navigation to use logo instead of icon

---

## 📱 WhatsApp & Phone Links

### Format for Phone Numbers
```jsx
href="tel:+919876543210"  // For clickable phone
```

### Format for WhatsApp
```jsx
href="https://wa.me/919876543210"  // Country code without +
```

**Update in these files:**
- `/src/app/page.tsx` (lines 40, 60)
- `/src/app/contact/page.tsx` (lines 25-35)
- `/src/components/Footer.tsx` (line 50)

---

## 🗺️ Google Maps Integration

**File:** `/src/app/contact/page.tsx`

**Line 280-295:** Replace placeholder with actual Google Maps embed

1. Go to Google Maps
2. Search for your clinic
3. Click "Share" → "Embed a map"
4. Copy the iframe code
5. Replace the placeholder div with the iframe

---

## 📝 Meta Tags (SEO)

**File:** `/src/app/layout.tsx`

**Line 10-14:** Update page metadata
```typescript
title: 'Dr. Aneeta Kumari - Medical Professional',
description: 'Professional medical services...',
keywords: 'doctor, medical, healthcare...',
```

---

## ⏰ Closed Days Configuration

**File:** `/src/app/appointments/page.tsx`

**Line 70-75:** Modify which days are closed
```javascript
const isSunday = (date: Date) => {
  return date.getDay() === 0  // 0=Sunday, 1=Monday, ..., 6=Saturday
}
```

To close multiple days:
```javascript
const isClosedDay = (date: Date) => {
  const day = date.getDay()
  return day === 0 || day === 6  // Closes Sunday and Saturday
}
```

---

## 🎯 Quick Checklist for Launch

- [ ] Update all phone numbers (search for `+91XXXXXXXXXX`)
- [ ] Update all email addresses (search for `@example.com`)
- [ ] Update clinic address in all locations
- [ ] Add doctor's professional photo
- [ ] Update education and experience details
- [ ] Configure email settings in `.env.local`
- [ ] Test contact form
- [ ] Test appointment booking
- [ ] Add Google Maps embed
- [ ] Update clinic hours in all locations
- [ ] Customize color scheme (optional)
- [ ] Update meta tags for SEO
- [ ] Test on mobile devices
- [ ] Test all links (phone, WhatsApp, email)

---

## 💡 Tips

1. **Always test after making changes:** Run `npm run dev` and check the website
2. **Keep backups:** Save original files before major edits
3. **Consistent information:** Ensure phone numbers, emails, and hours are the same everywhere
4. **Mobile testing:** Check how changes look on mobile devices
5. **Ask for help:** If unsure about any change, consult with a developer

---

## 🆘 Need Help?

If you're unsure about editing any file:
1. Make a copy of the file first
2. Edit small sections at a time
3. Test frequently
4. Refer to SETUP_GUIDE.md for technical details
5. Contact your web developer for complex changes
