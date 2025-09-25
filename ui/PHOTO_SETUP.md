# Photo and Resume Setup Guide

## Adding Your Photos

### 1. Profile Photo (Hero Section)
- Add your profile photo to the `ui/public/` folder
- Name it `saswat-headshot.jpg` (or update the code to use your preferred filename)
- Recommended size: 400x400 pixels or larger (square aspect ratio)
- Format: JPG, PNG, or WebP

### 2. About Me Photo
- The same photo will be used in the About Me section
- If you want a different photo, update the `AboutMePage.tsx` component
- Look for the image tag and update the `src` attribute

### 3. Photo Placeholders
Currently, the site shows "SP" initials as placeholders. To use your actual photos:

1. **For Hero Section** (`ToukoumWebsite.tsx`):
   ```tsx
   // Replace this:
   <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg mx-auto mb-6 bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
     <span className="text-4xl text-white font-bold">SP</span>
   </div>
   
   // With this:
   <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-purple-200 shadow-lg mx-auto mb-6">
     <img 
       src="/your-photo.jpg" 
       alt="Saswat Patro" 
       className="w-full h-full object-cover"
     />
   </div>
   ```

2. **For About Me Section** (`AboutMePage.tsx`):
   ```tsx
   // Replace this:
   <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-purple-200 shadow-2xl bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center">
     <span className="text-8xl text-white font-bold">SP</span>
   </div>
   
   // With this:
   <div className="w-80 h-80 mx-auto rounded-full overflow-hidden border-4 border-purple-200 shadow-2xl">
     <img 
       src="/your-photo.jpg" 
       alt="Saswat Patro - Professional Headshot" 
       className="w-full h-full object-cover"
     />
   </div>
   ```

## Adding Your Resume

### 1. Resume File
- Add your resume PDF to the `ui/public/` folder
- Name it `saswat-resume.pdf` (or update the code to use your preferred filename)

### 2. Resume Download Buttons
The site has resume download buttons in:
- About Me page
- Contact page

To make them functional, update the button onClick handlers:

```tsx
// Add this function to handle resume download
const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = '/saswat-resume.pdf';
  link.download = 'Saswat_Patro_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

// Then update the button:
<button 
  onClick={handleResumeDownload}
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
>
  📄 Download Resume
</button>
```

## File Structure
```
ui/public/
├── saswat-headshot.jpg    # Your profile photo
├── saswat-resume.pdf      # Your resume
└── ... (other existing files)
```

## Tips
- Use high-quality images (at least 400x400 pixels)
- Keep file sizes reasonable (under 1MB for photos, under 5MB for resume)
- Use professional photos for the best impression
- Test the download functionality after adding your resume
