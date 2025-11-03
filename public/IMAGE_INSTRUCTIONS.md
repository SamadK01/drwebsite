# Image Setup Instructions

## Doctor's Professional Photo

To add Dr. Aneeta Kumari's professional photo to the website:

1. **Prepare the photo:**
   - Use a high-quality professional headshot
   - Recommended size: 800x1000 pixels (portrait orientation)
   - Format: JPG or PNG
   - File size: Keep under 500KB for optimal loading

2. **Add to the website:**
   - Save the photo as `doctor-photo.jpg` in this `/public` folder
   - The photo will automatically appear on the Home and About pages

3. **Optional: Update the code to use the image:**
   - In `/src/app/page.tsx`, replace the placeholder div with:
     ```jsx
     <Image
       src="/doctor-photo.jpg"
       alt="Dr. Aneeta Kumari"
       width={800}
       height={1000}
       className="w-full h-full object-cover"
       priority
     />
     ```
   - Do the same in `/src/app/about/page.tsx`

## Clinic Photos (Optional)

You can also add:
- `clinic-exterior.jpg` - Outside view of the clinic
- `clinic-interior.jpg` - Waiting room or consultation room
- `clinic-logo.png` - Official clinic logo

These can be used to enhance the website's visual appeal.
