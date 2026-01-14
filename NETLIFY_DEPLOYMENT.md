# SmartMealSaver - Netlify Deployment Guide

## Quick Start

Netlify makes deployment super easy! Here's how to get your site live:

### Option 1: Drag & Drop (Fastest)
1. **Prepare your files:**
   - Make sure all files are ready in your project folder
   - All images should be in the `images/` folder

2. **Deploy:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Log in or sign up
   - Drag and drop your entire `SmartMealSaver` folder onto the Netlify dashboard
   - Wait for deployment (usually 30-60 seconds)
   - Your site will be live at a random URL like `random-name-123.netlify.app`

3. **Add Custom Domain:**
   - In Netlify dashboard, go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Enter `smartmealsaver.ai`
   - Follow Netlify's DNS instructions to point your domain

### Option 2: Git Integration (Recommended for Updates)
1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin https://github.com/yourusername/smartmealsaver.git
   git push -u origin main
   ```

2. **Connect to Netlify:**
   - Go to [app.netlify.com](https://app.netlify.com)
   - Click **Add new site** → **Import an existing project**
   - Choose **GitHub** and authorize Netlify
   - Select your repository
   - Netlify will auto-detect settings (no build command needed for static sites)
   - Click **Deploy site**

3. **Auto-deployments:**
   - Every time you push to GitHub, Netlify will automatically redeploy
   - Perfect for updates!

## Netlify Configuration

### SSL/HTTPS
✅ **Automatic!** Netlify provides free SSL certificates automatically. Your site will be HTTPS by default.

### Custom Domain Setup

1. **In Namecheap (Domain Provider):**
   - Go to your domain management
   - Find DNS settings
   - Add these DNS records (Netlify will provide exact values):
     - **Type:** A Record
     - **Host:** @
     - **Value:** Netlify's IP (Netlify will show this)
     - **Type:** CNAME
     - **Host:** www
     - **Value:** your-site-name.netlify.app

2. **In Netlify:**
   - Go to **Site settings** → **Domain management**
   - Click **Add custom domain**
   - Enter `smartmealsaver.ai`
   - Netlify will verify DNS and issue SSL certificate (takes a few minutes)

### Build Settings (if using Git)
- **Build command:** (leave empty - static site)
- **Publish directory:** `/` (root)
- **Base directory:** (leave empty)

## Post-Deployment Checklist

### 1. Test Your Site
- [ ] Visit your Netlify URL
- [ ] Test all pages (home, terms, policies)
- [ ] Check all images load
- [ ] Test forms and interactions
- [ ] Test on mobile devices

### 2. Custom Domain
- [ ] Domain is connected
- [ ] SSL certificate is active (green lock icon)
- [ ] Both `smartmealsaver.ai` and `www.smartmealsaver.ai` work
- [ ] Redirect www to non-www (or vice versa) if preferred

### 3. Performance
- [ ] Test page speed: [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check Netlify Analytics (if enabled)
- [ ] Verify lazy loading works

### 4. SEO
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags: [Facebook Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards: [Twitter Validator](https://cards-dev.twitter.com/validator)

### 5. Analytics
- [ ] Google Analytics is tracking (if configured)
- [ ] Test event tracking

## Netlify Features You Can Use

### 1. Form Handling (Future)
If you want to collect waitlist emails directly:
- Netlify has built-in form handling
- No backend needed
- Free tier includes 100 submissions/month

### 2. Netlify Analytics (Optional)
- Paid feature ($9/month)
- Provides detailed analytics
- Alternative to Google Analytics

### 3. Environment Variables
- Store sensitive data (like API keys) securely
- Access via `process.env.VARIABLE_NAME` in build

### 4. Deploy Previews
- Every Git branch gets a preview URL
- Perfect for testing before going live

## File Structure for Netlify

Your project structure should look like this:
```
SmartMealSaver/
├── index.html
├── terms.html
├── policies.html
├── styles.css
├── script.js
├── images/
│   ├── Your-ai-food-plug.png
│   ├── AI-Twin-new1.png
│   └── (all other images)
└── (optional config files)
```

## Troubleshooting

### Images Not Loading
- Check file paths are relative (e.g., `images/file.png`)
- Verify images are uploaded
- Check browser console for 404 errors

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records in Namecheap match Netlify's requirements
- Check Netlify's domain status page

### SSL Certificate Issues
- Usually resolves automatically within 24 hours
- Check Netlify's SSL status in domain settings
- Contact Netlify support if issues persist

### Build Errors
- Check Netlify build logs
- Verify all file paths are correct
- Ensure no syntax errors in HTML/CSS/JS

## Quick Commands (if using Git)

```bash
# Initial setup
git init
git add .
git commit -m "Initial commit"

# Connect to GitHub
git remote add origin https://github.com/yourusername/smartmealsaver.git
git branch -M main
git push -u origin main

# Future updates
git add .
git commit -m "Update description"
git push
# Netlify auto-deploys!
```

## Support

- **Netlify Docs:** https://docs.netlify.com
- **Netlify Support:** https://www.netlify.com/support/
- **Community:** https://answers.netlify.com

---

**Your site will be live at:** `https://smartmealsaver.ai` (once domain is connected)

Good luck with your launch! 🚀
