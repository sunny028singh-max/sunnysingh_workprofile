# 🎯 Complete Setup Guide for Your Portfolio

## 📸 **Step 1: Add Your Photos**

### **Photo Locations:**
```
ui/public/
├── saswat-headshot.jpg    # Your main profile photo
└── saswat-resume.pdf      # Your CV/Resume
```

### **Photo Requirements:**
- **Format**: JPG, PNG, or WebP
- **Size**: At least 400x400 pixels (square recommended)
- **Quality**: High resolution, professional headshot
- **File size**: Under 1MB for optimal loading

### **Where Photos Appear:**
1. **Hero Section** (Home page) - Small circular photo
2. **About Me Section** - Large circular photo with your details

---

## 📄 **Step 2: Add Your Resume/CV**

### **Resume File:**
- **Format**: PDF (recommended) or DOCX
- **File name**: `saswat-resume.pdf`
- **Location**: `ui/public/saswat-resume.pdf`
- **File size**: Under 5MB

### **Resume Download Buttons:**
The site has resume download buttons in:
- ✅ About Me page (already added)
- ✅ Contact page (already added)

---

## 🔧 **Step 3: Customize Your Content**

### **A. Update Personal Information**

**File**: `ui/src/components/AboutMePage.tsx`
**Lines to update**: 6-50

```tsx
// Update these sections with your real information:
const experiences = [
  {
    year: "2023 - Present",
    title: "Your Job Title",
    company: "Your Company",
    description: "Your job description",
    skills: ["Your", "Skills", "Here"]
  },
  // Add more experiences...
];

const education = [
  {
    degree: "Your Degree",
    school: "Your University",
    year: "2023",
    description: "Your specialization"
  },
  // Add more education...
];
```

### **B. Update Projects**

**File**: `ui/src/components/ProjectsPage.tsx`
**Lines to update**: 6-60

```tsx
const projects = [
  {
    title: "Your Project Name",
    description: "Your project description",
    tech: ["React", "Node.js", "Your Tech Stack"],
    image: "🤖", // You can change the emoji
    category: "AI/ML", // or "Web App", "Blockchain", "Productivity"
    link: "https://your-project-url.com",
    featured: true // Set to true for featured projects
  },
  // Add more projects...
];
```

### **C. Update Skills**

**File**: `ui/src/components/SkillsPage.tsx`
**Lines to update**: 6-50

```tsx
const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", level: 95, icon: "⚛️", color: "from-blue-500 to-cyan-500" },
      // Update with your skills and proficiency levels
    ]
  },
  // Update other categories...
];
```

### **D. Update Contact Information**

**File**: `ui/src/components/ContactPage.tsx`
**Lines to update**: 10-30

```tsx
const contactInfo = [
  {
    title: "Email",
    value: "your.email@example.com",
    icon: "📧",
    color: "from-blue-500 to-cyan-500",
    link: "mailto:your.email@example.com"
  },
  // Update with your real contact info...
];
```

### **E. Update Hobbies/Interests**

**File**: `ui/src/components/FunPage.tsx`
**Lines to update**: 6-40

```tsx
const hobbies = [
  {
    title: "Your Hobby",
    description: "Description of your hobby",
    icon: "🎸",
    color: "from-purple-500 to-pink-500",
    details: ["Detail 1", "Detail 2", "Detail 3"]
  },
  // Add your real hobbies...
];
```

---

## 🚀 **Step 4: Make Resume Download Functional**

**File**: `ui/src/components/AboutMePage.tsx`
**Add this function** (around line 50):

```tsx
const handleResumeDownload = () => {
  const link = document.createElement('a');
  link.href = '/saswat-resume.pdf';
  link.download = 'Saswat_Patro_Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
```

**Then update the button** (around line 120):
```tsx
<button 
  onClick={handleResumeDownload}
  className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
>
  📄 Download Resume
</button>
```

**Do the same for ContactPage.tsx** (around line 250).

---

## 🎨 **Step 5: Customize Colors (Optional)**

**Main color scheme**: Purple to Pink gradients
**Files to modify**:
- `ui/src/components/ToukoumWebsite.tsx`
- `ui/src/components/AboutMePage.tsx`
- `ui/src/components/ProjectsPage.tsx`
- `ui/src/components/SkillsPage.tsx`
- `ui/src/components/FunPage.tsx`
- `ui/src/components/ContactPage.tsx`

---

## ✅ **Step 6: Test Everything**

1. **Photos**: Check both hero and about sections
2. **Resume**: Test download buttons
3. **Content**: Verify all information is correct
4. **Links**: Test all contact links work
5. **Responsive**: Check on mobile and desktop

---

## 📁 **Final File Structure**

```
ui/
├── public/
│   ├── saswat-headshot.jpg    # Your photo
│   ├── saswat-resume.pdf      # Your CV
│   └── ... (other files)
├── src/
│   └── components/
│       ├── AboutMePage.tsx    # Update experience/education
│       ├── ProjectsPage.tsx   # Update projects
│       ├── SkillsPage.tsx     # Update skills
│       ├── ContactPage.tsx    # Update contact info
│       ├── FunPage.tsx        # Update hobbies
│       └── ToukoumWebsite.tsx # Main layout
└── SETUP_GUIDE.md             # This file
```

---

## 🆘 **Need Help?**

If you need help with any specific section or have questions about customizing content, just let me know! I can help you update any specific component or add new features.
