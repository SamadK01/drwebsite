# Quick Start Guide - Dr. Aneeta Kumari Website

## Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
cd "/Users/user2024/Documents/Dr Website"
npm install
```

### Step 2: Configure Email (Optional for testing)
```bash
cp .env.local.example .env.local
```
Then edit `.env.local` with your email credentials. You can skip this for now and test the website without email functionality.

### Step 3: Run the Website
```bash
npm run dev
```

Open your browser and go to: **http://localhost:3000**

---

## What You'll See

✅ **Home Page** - Professional landing page with doctor info  
✅ **About Page** - Detailed biography and credentials  
✅ **Contact Page** - Contact form with phone/WhatsApp buttons  
✅ **Appointments Page** - Interactive calendar booking system  

---

## Next Steps

1. **Customize Content**: See `CONTENT_CUSTOMIZATION.md`
2. **Add Doctor's Photo**: Place `doctor-photo.jpg` in `/public` folder
3. **Update Contact Info**: Replace placeholder phone numbers and emails
4. **Setup Email**: Configure `.env.local` for working contact forms
5. **Deploy**: See `SETUP_GUIDE.md` for deployment instructions

---

## Need Help?

- **Content Changes**: Read `CONTENT_CUSTOMIZATION.md`
- **Technical Setup**: Read `SETUP_GUIDE.md`
- **General Info**: Read `README.md`

---

**Enjoy your new professional medical website! 🏥**
