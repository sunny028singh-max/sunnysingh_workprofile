# Toukoum-Style Website Clone

This is a replica of the [Toukoum website](https://www.toukoum.fr/) built with React, TypeScript, Tailwind CSS, and Framer Motion.

## Features

### 🎨 **Fluid Animations**
- Mouse-following color gradients that create fluid color effects
- Floating particles and animated grid background
- Smooth transitions and hover effects

### 💬 **Interactive Chat Interface**
- Click on any navigation icon to open a chat interface
- Pre-applied AI responses for each section
- Typing indicators and smooth animations
- Different responses for: Me, Projects, Skills, Fun, Contact

### 🧭 **Navigation**
- Bottom navigation with animated icons
- Smooth section transitions
- Active state indicators

### 🎭 **Animations**
- Hero section with staggered text animations
- Smooth page transitions
- Interactive hover effects
- Responsive design

## Customization

### Personal Information
Edit the following files to customize your portfolio:

1. **Hero Section** - `src/components/ToukoumWebsite.tsx`
   - Change the name from "Raphael" to your name
   - Update the title and description
   - Modify the emoji avatar

2. **Chat Responses** - `src/components/ChatInterface.tsx`
   - Update the `chatResponses` object with your own information
   - Customize responses for each section

3. **Colors & Theme** - `src/components/FluidBackground.tsx`
   - Modify the gradient colors in the fluid background
   - Adjust animation speeds and effects

### Styling
- All styling is done with Tailwind CSS classes
- Custom animations use Framer Motion
- Color scheme can be modified in the CSS variables

## Running the Website

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

## Tech Stack

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **Vite** - Build tool

## File Structure

```
src/
├── components/
│   ├── ToukoumWebsite.tsx    # Main website component
│   ├── FluidBackground.tsx   # Animated background
│   └── ChatInterface.tsx     # Chat functionality
├── App.tsx                   # App entry point
└── main.tsx                  # React entry point
```

## Browser Support

- Modern browsers with ES6+ support
- CSS Grid and Flexbox support required
- WebGL not required (CSS-only animations)

## Performance

- Optimized animations with Framer Motion
- Lazy loading of chat responses
- Efficient mouse tracking
- Minimal bundle size

## License

This is a clone for educational purposes. The original design belongs to Toukoum.
