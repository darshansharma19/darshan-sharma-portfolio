# 🚀 Darshan Sharma - Portfolio Website

[![Live Demo](https://img.shields.io/badge/Live%20Demo-00F0FF?style=for-the-badge&logo=vercel&logoColor=black)](https://vmb4xpl7lbvcg.ok.kimi.link)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)

> A fully animated, next-level personal portfolio website showcasing my skills, experience, and projects as a Full Stack Developer & AI Engineer.

![Portfolio Preview](./public/profile.jpeg)

---

## ✨ Features

- 🎨 **Cyber-Noir Dark Theme** with neon cyan & magenta accents
- ✨ **Smooth Scroll Animations** with intersection observer
- 🖱️ **Custom Cursor** with hover effects
- 🌌 **Interactive Particle Background** that reacts to mouse movement
- 📱 **Fully Responsive** design for all devices
- ⚡ **Fast Performance** optimized with Vite
- 🎯 **SEO Optimized** structure
- 🎭 **Terminal-style Loading Screen** with typewriter effect
- 📊 **Animated Skill Bars** with progress indicators
- 🛤️ **Interactive Timeline** for work experience
- 🖼️ **Project Gallery** with modal popups
- 📬 **Contact Form** with terminal aesthetic

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | React 19 + TypeScript |
| **Build Tool** | Vite 7 |
| **Styling** | Tailwind CSS 3.4 |
| **UI Components** | shadcn/ui |
| **Icons** | Lucide React |
| **Animations** | CSS Keyframes + Intersection Observer |
| **Canvas** | HTML5 Canvas API |

---

## 📸 Screenshots

### Hero Section
![Hero](https://via.placeholder.com/800x400/050505/00F0FF?text=Hero+Section+with+Animated+Name)

### About Section
![About](https://via.placeholder.com/800x400/050505/FF0055?text=About+Section+with+Profile)

### Skills Section
![Skills](https://via.placeholder.com/800x400/050505/00F0FF?text=Skills+with+Progress+Bars)

### Projects Section
![Projects](https://via.placeholder.com/800x400/050505/FFB800?text=Project+Cards+Gallery)

---

## 🚀 Live Demo

**🌐 [View Live Portfolio](https://vmb4xpl7lbvcg.ok.kimi.link)**

---

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Clone & Setup

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/darshan-sharma-portfolio.git

# Navigate to project folder
cd darshan-sharma-portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

The development server will start at `http://localhost:5173`

---

## 🔧 Build for Production

```bash
# Create optimized production build
npm run build

# Preview production build locally
npm run preview
```

The production files will be in the `dist/` folder.

---

## 🌐 Deployment

### Option 1: Vercel (Recommended - Easiest)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

### Option 2: Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

### Option 3: GitHub Pages

1. Push code to GitHub repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `gh-pages` branch or use GitHub Actions

See detailed guide: [GitHub Pages Deployment](#github-pages-deployment)

---

## 📁 Project Structure

```
darshan-sharma-portfolio/
├── public/                  # Static assets
│   ├── profile.jpeg        # Profile image
│   ├── graduation.jpg      # Graduation photo
│   └── speaking.jpg        # Speaking event photo
├── src/
│   ├── components/         # Reusable components
│   │   ├── LoadingScreen.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Navigation.tsx
│   │   └── ParticleBackground.tsx
│   ├── sections/           # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Experience.tsx
│   │   ├── Projects.tsx
│   │   ├── Achievements.tsx
│   │   └── Contact.tsx
│   ├── App.tsx            # Main app component
│   ├── index.css          # Global styles
│   └── main.tsx           # Entry point
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🎨 Customization

### Changing Colors

Edit `src/index.css` and modify the CSS variables:

```css
:root {
  --neon-cyan: #00F0FF;      /* Primary accent */
  --neon-magenta: #FF0055;   /* Secondary accent */
  --deep-black: #050505;     /* Background */
  --surface: #111111;        /* Card backgrounds */
}
```

### Updating Content

1. **Personal Info**: Edit `src/sections/About.tsx`
2. **Skills**: Edit `src/sections/Skills.tsx`
3. **Experience**: Edit `src/sections/Experience.tsx`
4. **Projects**: Edit `src/sections/Projects.tsx`
5. **Contact**: Edit `src/sections/Contact.tsx`

### Adding Images

Place images in the `public/` folder and reference them with `/filename.ext`

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Description |
|------------|-------|-------------|
| Mobile | < 640px | Single column layout |
| Tablet | 640px - 1024px | Two column grids |
| Desktop | > 1024px | Full layout with all effects |

---

## ⚡ Performance Optimizations

- ✅ Lazy loading for images
- ✅ Code splitting with Vite
- ✅ Optimized particle count based on device
- ✅ CSS animations instead of JS where possible
- ✅ Intersection Observer for scroll animations
- ✅ Touch device detection for custom cursor

---

## 🔗 Connect With Me

[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://linkedin.com/in/darshan-sharma-323422237/)
[![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://github.com/darshansharma19)
[![Email](https://img.shields.io/badge/Email-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:darshusharma9755@gmail.com)

---

## 📄 License

This project is licensed under the MIT License - feel free to use it as a template for your own portfolio!

```
MIT License

Copyright (c) 2024 Darshan Sharma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI Library
- [Vite](https://vitejs.dev/) - Build Tool
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI Components
- [Lucide Icons](https://lucide.dev/) - Icons

---

## 📞 Support

If you found this portfolio template helpful, please consider giving it a ⭐ on GitHub!

For questions or collaboration opportunities, reach out at **darshusharma9755@gmail.com**

---

<p align="center">
  <strong>Built with ❤️ by Darshan Sharma</strong>
</p>

<p align="center">
  <img src="https://komarev.com/ghpvc/?username=darshansharma19&label=Profile%20Views&color=00F0FF&style=flat" alt="Profile Views" />
</p>
