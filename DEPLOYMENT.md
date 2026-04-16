# 🚀 Deployment Guide

This guide will help you deploy your portfolio to the internet quickly and easily.

## Quick Start - Choose Your Platform

### 🥇 Option 1: Vercel (Recommended - 5 minutes)

**Best for:** Automatic updates, custom domain, best performance

#### Steps:

1. **Create Vercel Account**
   - Go to [vercel.com](https://vercel.com)
   - Sign up with GitHub account

2. **Connect Repository**
   - Click "Import Project"
   - Choose "GitHub"
   - Select your repository

3. **Deploy**
   - Vercel will automatically build and deploy
   - Your site is live at `https://ved-maurya.vercel.app`

4. **Add Custom Domain** (Optional)
   - Go to Project Settings → Domains
   - Add your custom domain (e.g., vedmaurya.com)
   - Update DNS records as instructed

#### Benefits:
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ Lightning fast CDN
- ✅ Analytics included
- ✅ Easy custom domain

---

### 🥈 Option 2: GitHub Pages (Free - 10 minutes)

**Best for:** No extra account needed, completely free

#### Steps:

1. **Prepare repository**
   ```bash
   # Make sure you're on main branch
   git checkout main
   git pull origin main
   ```

2. **Update configuration**
   - Edit `next.config.js`:
   
   ```javascript
   // For custom domain (vedmaurya.com)
   const nextConfig = {
     output: 'export',
     basePath: '',
   }
   
   // OR for GitHub Pages domain
   const nextConfig = {
     output: 'export',
     basePath: '/ved-maurya', // your repo name
   }
   ```

3. **Build project**
   ```bash
   npm run export
   # Creates 'out' folder with static files
   ```

4. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin main
   ```

5. **Enable GitHub Pages**
   - Go to repository → Settings → Pages
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/` (root)
   - Click Save

6. **Access your site**
   - Wait 2-3 minutes for build
   - Visit: `https://yourusername.github.io`

#### Benefits:
- ✅ 100% free
- ✅ No additional accounts
- ✅ Git-based workflow
- ✅ Version control integration

#### Custom Domain with GitHub Pages:
1. **Add domain to GitHub**
   - Settings → Pages → Custom domain
   - Enter: `vedmaurya.com`
   - Commit CNAME file

2. **Update DNS**
   - Go to domain registrar (GoDaddy, Namecheap, etc.)
   - Add CNAME record pointing to: `yourusername.github.io`

---

### 🥉 Option 3: Netlify (Free - 5 minutes)

**Best for:** Easy setup, good performance

#### Steps:

1. **Connect GitHub**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Choose GitHub and select repository

2. **Configure Build**
   - Leave defaults (Netlify auto-detects Next.js)
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Click Deploy
   - Site is live at `https://yoursite.netlify.app`

4. **Add Custom Domain**
   - Site settings → Domain management
   - Add custom domain

#### Benefits:
- ✅ Free hosting
- ✅ Automatic deployments
- ✅ Netlify Forms available
- ✅ Lambda functions supported

---

## Detailed Vercel Deployment

### Step 1: Push Code to GitHub

```bash
git add .
git commit -m "Initial portfolio commit"
git push origin main
```

### Step 2: Go to Vercel

1. Visit [vercel.com](https://vercel.com)
2. Sign up → Login with GitHub
3. Click "New Project"
4. Choose repository: `ved-maurya`
5. Click "Import"

### Step 3: Project Settings

Most settings are auto-detected. Verify:

- **Framework**: Next.js ✓
- **Build Command**: `npm run build` ✓
- **Output Directory**: `.next` ✓
- **Node Version**: LTS ✓

### Step 4: Deploy

- Click "Deploy"
- Wait for build (~2 minutes)
- Visit your live site!

### Step 5: Custom Domain

1. **Prepare domain**
   - Buy domain from registrar (GoDaddy, Namecheap, etc.)

2. **Connect to Vercel**
   - Project Settings → Domains
   - Add custom domain: `vedmaurya.com`
   - Note the DNS records Vercel provides

3. **Update DNS**
   - Login to domain registrar
   - Find DNS settings
   - Add Vercel's DNS records:
     - A record: `76.76.19.163`
     - Or use nameservers (easier)

4. **Verify**
   - Takes 24-48 hours for DNS propagation
   - Check: `https://vedmaurya.com`

---

## Detailed GitHub Pages Deployment

### Step 1: Configure for Export

Edit `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '', // empty for custom domain
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  swcMinify: true,
};

module.exports = nextConfig;
```

### Step 2: Export Build

```bash
npm run export
```

This creates the `out` folder with static HTML files.

### Step 3: Push to GitHub

```bash
git add .
git commit -m "Prepare for GitHub Pages deployment"
git push origin main
```

### Step 4: Enable Pages

1. Go to GitHub repository
2. Settings → Pages
3. Build and deployment:
   - Source: Deploy from a branch
   - Branch: `main`
   - Folder: `/` (root)
4. Click Save

### Step 5: Add Custom Domain

1. **In GitHub**
   - Settings → Pages → Custom domain
   - Enter: `vedmaurya.com`
   - Check "Enforce HTTPS"

2. **In Registrar**
   - Add CNAME record: `yourusername.github.io`

---

## Environment Variables

### Across All Platforms

1. **Create `.env.local`**
   ```bash
   # Example for contact form
   NEXT_PUBLIC_FORM_ENDPOINT=https://formspree.io/f/YOUR_ID
   ```

2. **In Vercel Dashboard**
   - Project Settings → Environment Variables
   - Add same variables

3. **Push to GitHub**
   ```bash
   git add .env.local
   git commit -m "Add environment variables"
   git push
   ```

---

## Testing Before Deployment

### Local Production Build

```bash
npm run build
npm start
```

Visit `http://localhost:3000` and test everything.

### Performance Check

```bash
npm run build
```

Check the build output:
- Look for page sizes
- Check for optimization warnings
- Verify no critical errors

---

## Post-Deployment Checklist

- ✅ Visit your live site
- ✅ Test all navigation links
- ✅ Check mobile responsiveness
- ✅ Test contact form
- ✅ Verify social media links
- ✅ Check favicon loads
- ✅ Test animations
- ✅ Verify resume download
- ✅ Check project links
- ✅ Test smooth scrolling

---

## Updating Your Site

### When you make changes:

```bash
# Make changes to files
git add .
git commit -m "Update portfolio"
git push origin main
```

**Vercel**: Automatically redeploys (1-2 minutes)
**GitHub Pages**: Automatically rebuilds (2-5 minutes)
**Netlify**: Automatically redeploys (1-2 minutes)

---

## Troubleshooting

### GitHub Pages shows 404

**Solution:**
- Check `basePath` in `next.config.js`
- It should be `/ved-maurya` if repo is `ved-maurya`
- Run `npm run export` again
- Ensure `out` folder exists in root

### Vercel deployment fails

**Solution:**
1. Check build locally: `npm run build`
2. Look at Vercel build logs
3. Common issues:
   - Wrong Node version → Set to LTS
   - Missing environment variables → Add in Settings
   - TypeScript errors → Fix locally first

### Contact form not working

**Solution:**
- Update `components/Contact.tsx`
- Add your Formspree ID
- Test locally with `npm run dev`
- Or use alternative service

### Custom domain not working

**Solution:**
- DNS changes take 24-48 hours
- Check DNS records are correct
- Use [DNS checker](https://dnschecker.org)
- Verify CNAME/A records point to hosting

---

## Maintenance

### Regular Updates

```bash
# Check for updates
npm outdated

# Update packages
npm update

# Major updates (be careful)
npm install [package]@latest
```

### Monitoring

**Vercel:**
- Dashboard → Analytics
- Check performance metrics
- Monitor error rates

**GitHub Pages:**
- Repository → Insights
- Check deployment history

---

## Need Help?

- 📚 [Next.js Docs](https://nextjs.org/docs)
- 🚀 [Vercel Docs](https://vercel.com/docs)
- 📖 [GitHub Pages Docs](https://docs.github.com/en/pages)
- 💬 [GitHub Issues](https://github.com/vedmaurya/ved-maurya/issues)

---

Good luck! 🚀
