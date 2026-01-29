# TechFest 2026 - Cyber Event Website

A futuristic, immersive event website for a technical fest featuring multiple competitive events with a cyberpunk aesthetic.

## 🎨 Design Features

- **Cyber-themed UI** with neon cyan, magenta, and purple accents
- **Interactive animations** using Framer Motion and GSAP
- **Smooth scroll-based storytelling** for an immersive experience
- **Mission-based journey** with event roadmaps and interactive elements
- **Responsive design** optimized for all devices

## 🏗️ Project Structure

```
src/
├── components/
│   ├── Starfield.tsx          # Animated background particles
│   ├── Hero.tsx               # Landing hero section
│   ├── Roadmap.tsx            # Event roadmap visualization
│   ├── DSAMasters.tsx         # DSA Masters event section
│   ├── EthiTechMania.tsx      # Ethical Tech Mania event
│   ├── Cipherville.tsx        # Mystery investigation event
│   ├── Registration.tsx       # Multi-step registration form
│   ├── Team.tsx               # Team showcase
│   └── Footer.tsx             # Footer with links
├── pages/
│   └── Home.tsx               # Main home page
├── App.tsx                    # Root component
├── main.tsx                   # Entry point
└── index.css                  # Global styles & animations
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Key Sections

### 1. Hero Section
- Full-screen animated hero with typewriter effect
- Glowing CTA buttons with hover animations
- Particle-based starfield background

### 2. Event Roadmap
- Visual representation of all three events
- Animated path that draws as you scroll
- Interactive event nodes with information

### 3. DSA Masters
- Tree-based visualization of algorithmic difficulty progression
- Three-round challenge system (Easy → Medium → Hard)
- Evaluation criteria with animated progress bars

### 4. Ethi Tech Mania
- Timeline-based event structure with expandable stages
- Interactive scenario cards for ethical decision-making
- Core principles section highlighting ethical focus

### 5. Cipherville
- Mystery investigation-themed event
- Two rounds: Physical and Database investigations
- Winner selection metrics with animated performance meters

### 6. Registration
- Multi-step wizard form (3 steps)
- Team information, contact details, and event selection
- Progress indicator with smooth transitions
- Success confirmation animation

### 7. Team & Footer
- Team member showcase with hover animations
- Social media links with pulse effects
- Footer with quick links and contact information

## 🎨 Color Palette

- **Deep Dark**: `#0A0E27` (Primary background)
- **Neon Cyan**: `#00F3FF` (Primary accent)
- **Neon Magenta**: `#FF006E` (Secondary accent)
- **Cyber Violet**: `#9D4EDD` (Tertiary accent)
- **Dark Panel**: `#1A1F3A` (Card backgrounds)

## 📦 Dependencies

- **React** - UI framework
- **Framer Motion** - Component animations
- **GSAP** - Advanced scroll animations
- **Three.js** - 3D graphics (optional)
- **Tailwind CSS** - Utility-first styling

## 🎮 Interactive Features

- ✨ Parallax scrolling effects
- 🎬 Smooth section transitions
- 🎯 Hover-triggered animations
- 🔄 Loading state animations
- 💫 Glowing neon effects
- 📊 Progress indicators
- 🎪 Form validation with feedback

## 🔧 Customization

### Change Colors
Edit `tailwind.config.js` in the `colors` section:
```js
colors: {
  'neon-cyan': '#YOUR_COLOR',
  'neon-magenta': '#YOUR_COLOR',
  // ...
}
```

### Modify Content
Update component content in:
- `src/components/*.tsx` - Event details
- `src/pages/Home.tsx` - Page structure

### Adjust Animations
- **Framer Motion**: Use `initial`, `animate`, `whileHover` props
- **GSAP**: Modify scroll trigger timelines
- **CSS**: Edit `src/index.css` for custom keyframes

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🚀 Deployment

```bash
# Build for production
npm run build

# The 'dist' folder is ready to be deployed
```

Deploy to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## 📝 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues or pull requests.

---

**Made with ♥ in Cyber Space** 🌌
