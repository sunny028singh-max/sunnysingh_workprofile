# 🤖 AI Chat Setup Guide

## 📋 **Step 1: Update AI Chat Data with Your Real Information**

**File**: `ui/src/components/AIChatInterface.tsx`
**Lines to update**: 15-100 (websiteData object)

### **A. Personal Information**
```tsx
personal: {
  name: "Saswat Patro",
  title: "AI Portfolio", // Update with your actual title
  email: "your.real.email@example.com", // From your CV
  linkedin: "linkedin.com/in/your-actual-profile", // From your CV
  github: "github.com/your-actual-username", // From your CV
  portfolio: "your-portfolio-url.com" // Your actual portfolio
}
```

### **B. Experience (From your CV)**
```tsx
experience: [
  {
    year: "2023 - Present", // Update with actual dates
    title: "Your Actual Job Title", // From CV
    company: "Your Actual Company", // From CV
    description: "Your actual job description from CV",
    skills: ["Skill1", "Skill2", "Skill3"] // Technologies you used
  },
  // Add all your work experience from CV
]
```

### **C. Education (From your CV)**
```tsx
education: [
  {
    degree: "Your Actual Degree", // From CV
    school: "Your Actual University", // From CV
    year: "2023", // Actual graduation year
    description: "Your specialization/major from CV"
  },
  // Add all your education from CV
]
```

### **D. Projects (From your CV)**
```tsx
projects: [
  {
    title: "Your Actual Project Name", // From CV
    description: "Your actual project description from CV",
    tech: ["React", "Node.js", "Your Actual Tech Stack"], // From CV
    category: "AI/ML", // or "Web App", "Mobile", etc.
    featured: true // Set to true for your best projects
  },
  // Add all your projects from CV
]
```

### **E. Skills (From your CV)**
```tsx
skills: {
  frontend: ["React", "Your Actual Frontend Skills"], // From CV
  backend: ["Node.js", "Your Actual Backend Skills"], // From CV
  ai_ml: ["TensorFlow", "Your Actual AI/ML Skills"], // From CV
  tools: ["Git", "Your Actual Tools"] // From CV
}
```

### **F. Hobbies (Optional)**
```tsx
hobbies: [
  "🎸 Your Actual Hobby 1",
  "🎮 Your Actual Hobby 2",
  // Add your real hobbies
]
```

---

## 🔧 **Step 2: Test the AI Chat**

1. **Start the development server**: `pnpm dev`
2. **Open the website**: http://localhost:6001
3. **Click the floating AI button** (🤖) in the bottom right
4. **Test these questions**:
   - "What is Saswat's experience?"
   - "Tell me about Saswat's projects"
   - "What are Saswat's skills?"
   - "How can I contact Saswat?"
   - "What is Saswat's education?"

---

## 🎯 **Step 3: AI Chat Features**

### **What the AI Can Answer:**
✅ Experience and work history  
✅ Project details and technologies  
✅ Skills and technical expertise  
✅ Education and qualifications  
✅ Contact information  
✅ Hobbies and interests  
✅ General questions about Saswat  

### **What the AI Will NOT Answer:**
❌ Questions outside Saswat's portfolio scope  
❌ Personal questions not related to professional info  
❌ Questions about other people or companies  
❌ Requests for external information  

### **AI Response Examples:**
- **"What is Saswat's experience?"** → Lists all work experience from CV
- **"Tell me about his projects"** → Shows project details and tech stack
- **"How can I contact him?"** → Provides email, LinkedIn, GitHub links
- **"What are his skills?"** → Lists all technical skills by category

---

## 🚀 **Step 4: Advanced Customization**

### **Add More Response Patterns:**
In the `generateAIResponse` function, you can add more specific response patterns:

```tsx
// Add this to the generateAIResponse function
if (input.includes('salary') || input.includes('compensation')) {
  return "I don't have information about salary or compensation details. Please contact Saswat directly for such inquiries.";
}

if (input.includes('availability') || input.includes('freelance')) {
  return "For availability and freelance opportunities, please reach out to Saswat through the contact page or LinkedIn.";
}
```

### **Connect to Real ChatGPT API (Optional):**
To make it even more intelligent, you can integrate with OpenAI's API:

1. **Get an OpenAI API key**
2. **Install axios**: `pnpm add axios`
3. **Update the generateAIResponse function** to call OpenAI API
4. **Add your API key** to environment variables

---

## 📱 **Step 5: Mobile Responsiveness**

The AI chat is fully responsive and works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones
- ✅ All screen sizes

---

## 🎨 **Step 6: Customize Chat Appearance**

**File**: `ui/src/components/AIChatInterface.tsx`

### **Change Colors:**
```tsx
// Update these classes for different colors
className="bg-gradient-to-r from-purple-500 to-pink-500" // Header gradient
className="bg-gradient-to-r from-purple-500 to-pink-500" // User message gradient
```

### **Change Chat Button:**
```tsx
// In ToukoumWebsite.tsx, update the floating button
<span className="text-xl">🤖</span> // Change emoji
```

---

## ✅ **Step 7: Final Checklist**

- [ ] Updated personal information with real data from CV
- [ ] Added all work experience from CV
- [ ] Added all education from CV
- [ ] Added all projects from CV
- [ ] Updated skills with actual tech stack from CV
- [ ] Tested AI chat responses
- [ ] Verified contact information is correct
- [ ] Checked mobile responsiveness

---

## 🆘 **Need Help?**

If you need help updating any specific section or want to add more advanced features to the AI chat, just let me know! I can help you customize it further.
