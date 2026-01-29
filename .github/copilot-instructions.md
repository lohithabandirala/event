# TechFest 2026 Website - Development Guide

## Project Overview
A futuristic, cyber-themed event website for a technical fest with:
- Interactive animations (Framer Motion + GSAP)
- Three competitive events with unique designs
- Responsive multi-step registration form
- Dark theme with neon accents
- Smooth scroll-based storytelling

## Tech Stack
- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion, GSAP
- **3D (Optional)**: Three.js

## Architecture

### Components
1. **Starfield** - Canvas-based particle background
2. **Hero** - Landing section with animations
3. **Roadmap** - Event overview with SVG path animations
4. **DSAMasters** - Algorithm event with tree visualization
5. **EthiTechMania** - Ethics event with timeline
6. **Cipherville** - Mystery event with expandable rounds
7. **Registration** - Multi-step form wizard
8. **Team** - Team showcase
9. **Footer** - Navigation and social links

### Styling System
- **Colors**: Neon cyan (#00F3FF), magenta (#FF006E), violet (#9D4EDD)
- **Fonts**: Orbitron (headings), Inter (body), JetBrains Mono (code)
- **Custom Utilities**: `.cyber-button`, `.hud-card`, `.glow-text`

## Key Files
- `src/index.css` - Global styles and animations
- `tailwind.config.js` - Color & animation configuration
- `src/pages/Home.tsx` - Main page composition
- `src/components/*.tsx` - Individual sections

## Development Guidelines

### Adding New Sections
1. Create component in `src/components/`
2. Import in `src/pages/Home.tsx`
3. Add to main render
4. Use consistent styling patterns

### Animating Elements
**Framer Motion** (component-level):
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ scale: 1.05 }}
/>
```

**GSAP** (scroll-based):
```tsx
gsap.to(element, {
  scrollTrigger: { trigger, start, end, scrub: 1 },
  // animation properties
})
```

### Color Usage
- Primary accent: `text-neon-cyan`, `border-neon-cyan`
- Secondary: `text-neon-magenta`, `border-neon-magenta`
- Tertiary: `text-cyber-violet`, `border-cyber-violet`

## Common Tasks

### Modify Event Details
Edit the relevant component in `src/components/`
- Event titles, descriptions in JSX
- Metrics and stages in data arrays
- Colors using Tailwind classes

### Update Colors
1. `tailwind.config.js` - Change hex values
2. `src/index.css` - Update custom animations
3. Components will auto-update via Tailwind classes

### Add New Event
1. Create `src/components/NewEvent.tsx`
2. Add event card to `Roadmap.tsx`
3. Import and render in `src/pages/Home.tsx`

### Customize Registration
Edit form steps, fields, and validation in `src/components/Registration.tsx`

## Performance Tips
- Lazy load components with `React.lazy()`
- Memoize expensive components with `React.memo`
- Use `whileInView` for scroll-triggered animations
- Optimize images and animations for performance

## Deployment Checklist
- [ ] All images optimized
- [ ] Build runs without errors
- [ ] Animations smooth on target devices
- [ ] Forms properly validated
- [ ] Links and navigation working
- [ ] Mobile responsive verified

## Troubleshooting

**Animations not smooth?**
- Check browser GPU acceleration
- Reduce particle count in Starfield
- Profile with Chrome DevTools

**GSAP timeline issues?**
- Verify ScrollTrigger plugin is registered
- Check for conflicting animations
- Use `gsap.set()` for initial states

**Tailwind classes not applying?**
- Ensure file paths in `content` array are correct
- Clear build cache: `rm -rf node_modules/.vite`
- Restart dev server

## Future Enhancements
- Add Three.js background mesh
- Implement WebGL particle system
- Add leaderboard section
- Integrate payment gateway
- Add countdown timer
