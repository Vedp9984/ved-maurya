# Setup Guide for Favicon

To add a favicon to your portfolio:

## Option 1: Use favicon.io (Recommended)

1. Go to [favicon.io](https://favicon.io)
2. Choose "Text" tab
3. Enter: "V" (first letter of your name)
4. Customize colors (match your theme)
5. Download the generated files
6. Extract to `public/` folder

## Option 2: Use Your Own Image

1. Take a square image (512x512px minimum)
2. Go to [favicon-converter.com](https://favicon-converter.com)
3. Upload image
4. Download favicon pack
5. Extract to `public/` folder

## What Files to Place in `public/`

After extraction, you should have:
- `favicon.ico` - Main favicon file
- `favicon-16x16.png` - Small size
- `favicon-32x32.png` - Medium size
- `apple-touch-icon.png` - For iOS
- `android-chrome-*.png` - For Android
- `manifest.json` - Web app manifest

## Already Configured

The `app/layout.tsx` already has this line:
```tsx
<link rel="icon" href="/favicon.ico" />
```

So just place your favicon.ico in the `public/` folder and you're good to go!

## Verify It Works

After adding the files:
1. Run `npm run dev`
2. Visit http://localhost:3000
3. Check the browser tab - you should see your favicon

---

Need help? Visit [favicon.io docs](https://favicon.io/)
