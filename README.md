# 🚀 Quick Start Guide

Get your portfolio up and running in minutes!

## 5-Minute Quick Start

### 1️⃣ Install Dependencies
```bash
npm install
```

### 2️⃣ Run Development Server
```bash
npm run dev
```
Open http://localhost:3000 in your browser.

### 3️⃣ Customize Content
Edit these files with YOUR information:
- `components/Hero.tsx` - Your name, title, tagline
- `components/Projects.tsx` - Your projects
- `components/Experience.tsx` - Your work history
- `components/Skills.tsx` - Your skills
- `components/Contact.tsx` - Your email

### 4️⃣ Deploy
Choose one option:

**Option A: Vercel (Easiest)**
```bash
git push origin main
# Go to vercel.com → Import project → Done!
```

**Option B: GitHub Pages**
```bash
npm run export
git push origin main
# Go to repo Settings → Pages → Done!
```

**Option C: Netlify**
- Connect GitHub to netlify.com
- Select your repo
- Auto deploys on push

---

## Project Structure

```
ved-maurya/
├── 📄 app/
│   ├── layout.tsx         ← Global layout & metadata
│   ├── page.tsx           ← Main portfolio page
│   └── globals.css        ← Global styles
│
├── 🧩 components/         ← Reusable React components
│   ├── Navbar.tsx         ← Top navigation
│   ├── Hero.tsx           ← Welcome section
│   ├── Projects.tsx       ← Featured projects
│   ├── ProjectCard.tsx    ← Project card component
│   ├── Experience.tsx     ← Work experience timeline
│   ├── Skills.tsx         ← Skills & tech stack
│   ├── Achievements.tsx   ← Awards & achievements
│   ├── Blog.tsx           ← Blog section
│   ├── Contact.tsx        ← Contact form
│   └── Footer.tsx         ← Footer
│
├── 📦 public/             ← Static assets
│   └── resume.pdf         ← Your resume (add this)
│
├── ⚙️ Configuration
│   ├── package.json       ← Dependencies & scripts
│   ├── next.config.js     ← Next.js settings
│   ├── tailwind.config.ts ← Tailwind settings
│   ├── tsconfig.json      ← TypeScript settings
│   └── .eslintrc.json     ← ESLint settings
│
└── 📚 Documentation
    ├── README.md                    ← Project info
    ├── DEPLOYMENT.md                ← Deployment guide
    └── CUSTOMIZATION_CHECKLIST.md   ← What to customize
```

---

## What You Need to Customize

### 1. Hero Section (`components/Hero.tsx`)
```typescript
// Change these:
"Ved Prakash Maurya"          → Your Name
"ML & Systems Engineer"        → Your Title
"@ IIIT Hyderabad"            → Your School/Company
"Building scalable AI..."     → Your Tagline
```

### 2. Projects (`components/Projects.tsx`)
```typescript
// Add your 3-4 best projects with:
- Title
- Problem description
- Solution description
- Impact statement
- Technology stack
- GitHub link
```

### 3. Experience (`components/Experience.tsx`)
```typescript
// Update timeline with:
- Role & Company
- Period (dates)
- Description
- Highlights/Technologies
```

### 4. Skills (`components/Skills.tsx`)
```typescript
// Update skill categories:
- ML & AI
- Backend
- Systems
- Databases
- Tools & DevOps
```

### 5. Contact (`components/Contact.tsx`)
```typescript
// Update:
- Your email
- GitHub username
- LinkedIn username
- Contact form endpoint
```

### 6. Add Resume
```bash
# Place your resume PDF here:
public/resume.pdf
```

### 7. Add Favicon
```bash
# Follow instructions:
public/FAVICON_SETUP.md
```

---

## Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static site (for GitHub Pages)
npm run export

# Run linting
npm lint
```

---

## Key Features

✨ **Modern Design**
- Dark theme (#0f172a)
- Clean, minimal UI
- Professional styling

⚡ **Performance**
- Static generation
- Optimized images
- Fast loading

🎭 **Animations**
- Smooth transitions
- Subtle hover effects
- Scroll animations

📱 **Responsive**
- Mobile optimized
- Tablet friendly
- Desktop perfect

🚀 **Ready to Deploy**
- Works on Vercel
- Works on GitHub Pages
- Works on Netlify

---

## Deployment Comparison

| Feature | Vercel | GitHub Pages | Netlify |
|---------|--------|--------------|---------|
| **Setup Time** | 2 mins | 5 mins | 2 mins |
| **Cost** | Free | Free | Free |
| **Auto Deploy** | ✅ | ✅ | ✅ |
| **Custom Domain** | ✅ | ✅ | ✅ |
| **Best For** | Recommended | Git-based | Easy setup |

**Recommendation:** Use Vercel for best performance and ease of use.

---

## Common Customizations

### Change Color Theme
Edit `tailwind.config.ts`:
```typescript
colors: {
  'dark': {
    'bg': '#0f172a',      // Main background
    'card': '#1a1f3a',    // Card background
    'muted': '#475569',   // Muted text
  },
},
```

### Change Fonts
Edit `app/layout.tsx`:
```typescript
// Currently: Inter, Poppins
// Try: Roboto, Lato, Playfair, Open Sans
```

### Add/Remove Sections
Edit `app/page.tsx`:
```typescript
// Comment out sections you don't need:
{/* <Blog /> */}
{/* <Blog /> */}
```

### Update Social Links
Search and replace:
- `vedmaurya` → Your GitHub username
- `vedmaurya@iiit.ac.in` → Your email

---

## Troubleshooting

### Port Already in Use
```bash
# Use different port
npm run dev -- -p 3001
```

### Dependencies Not Installing
```bash
# Clear cache
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Check TypeScript
npm run build

# Check specific errors in terminal
```

### Animations Too Fast/Slow
Edit animation duration in components:
```typescript
transition={{ duration: 0.8 }} // Increase for slower
```

---

## Performance Tips

✅ **Already Optimized:**
- Static generation
- CSS minification
- Image optimization settings
- Smooth animations

📈 **Check Performance:**
```bash
npm run build
# Check build output for file sizes
```

🎯 **Target Metrics:**
- Lighthouse: 90+
- First Contentful Paint: < 1.2s
- Page load: < 2s

---

## SEO Setup

✅ **Already Configured:**
- Meta tags in `app/layout.tsx`
- Open Graph tags
- Mobile viewport
- Fast loading

📝 **To Improve:**
1. Add sitemap (optional)
2. Add robots.txt (optional)
3. Update meta description
4. Use descriptive alt text

---

## Next Steps After Deployment

1. ✅ Share your portfolio
   - Add to resume/CV
   - Share on LinkedIn
   - Add to GitHub profile bio
   - Share on Twitter/social media

2. ✅ Keep it Updated
   - Add new projects
   - Update experience
   - Add blog posts
   - Share achievements

3. ✅ Monitor Performance
   - Check analytics
   - Get feedback
   - Track visitors
   - Iterate design

4. ✅ Continuous Improvement
   - Add new features
   - Improve copy
   - Get testimonials
   - Build personal brand

---

## Need More Help?

📚 **Documentation:**
- [README.md](README.md) - Full project info
- [DEPLOYMENT.md](DEPLOYMENT.md) - Detailed deployment guide
- [CUSTOMIZATION_CHECKLIST.md](CUSTOMIZATION_CHECKLIST.md) - All customization options

🔗 **Resources:**
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)

💬 **Community:**
- GitHub Issues
- Stack Overflow
- Dev Community

---

## Quick Commands Cheat Sheet

```bash
# Development
npm run dev              # Start dev server
npm run lint            # Check code quality

# Production
npm run build           # Build for production
npm start               # Run production build
npm run export          # Export static files

# Deployment
git add .              # Stage changes
git commit -m "msg"    # Commit
git push origin main   # Push to GitHub
```

---

## You're All Set! 🎉

Your modern developer portfolio is ready to customize and deploy.

**Next Steps:**
1. Follow [CUSTOMIZATION_CHECKLIST.md](CUSTOMIZATION_CHECKLIST.md)
2. Updates all files with your information
3. Test with `npm run dev`
4. Deploy using [DEPLOYMENT.md](DEPLOYMENT.md)
5. Share your portfolio!

**Good luck! 🚀**

---

*Questions? Check the documentation files or visit the GitHub repository.*
