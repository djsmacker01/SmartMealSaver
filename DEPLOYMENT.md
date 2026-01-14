# SmartMealSaver - Production Deployment Guide

## Pre-Deployment Checklist

### 1. Domain Configuration
- [ ] Update all URLs in `index.html` with your actual domain name
  - Line 17: Canonical URL
  - Line 21: Open Graph URL
  - Line 25: Open Graph image URL
  - Line 40: Twitter Card URL
  - Line 44: Twitter Card image URL
  - Line 48: Apple touch icon URL

**Current placeholder:** `https://smartmealsaver.com`
**Action:** Replace with your actual domain (e.g., `https://yourdomain.com`)

### 2. Google Analytics Setup
- [ ] Get your Google Analytics 4 Measurement ID from [Google Analytics](https://analytics.google.com/)
- [ ] Replace `G-XXXXXXXXXX` in `index.html` (lines 55 and 60) with your actual GA4 ID
- [ ] Test that analytics events are being tracked

### 3. File Verification
- [ ] Verify all images exist in the `images/` folder
- [ ] Check that all image paths are correct (relative paths like `images/filename.png`)
- [ ] Ensure `terms.html` and `policies.html` are complete and accurate

### 4. Performance Optimization
- [x] Lazy loading implemented for images
- [x] Resource hints (preconnect, dns-prefetch) added
- [x] Critical images have `fetchpriority="high"`

### 5. SEO & Meta Tags
- [x] Meta tags configured
- [x] Open Graph tags for social sharing
- [x] Twitter Card tags
- [x] Structured data (JSON-LD)
- [ ] Update canonical URLs with actual domain

### 6. Security
- [x] HTTPS ready (ensure SSL certificate is configured on hosting)
- [x] Analytics anonymize IP enabled
- [x] Secure cookie flags set

### 7. Accessibility
- [x] ARIA attributes implemented
- [x] Keyboard navigation support
- [x] Screen reader support
- [x] Focus indicators
- [x] Mobile responsive design

## Deployment Steps

### Option 1: Namecheap Hosting (cPanel)
1. **Upload Files:**
   - Connect via FTP or use cPanel File Manager
   - Upload all files to `public_html/` directory:
     - `index.html`
     - `terms.html`
     - `policies.html`
     - `styles.css`
     - `script.js`
     - `images/` folder (with all images)

2. **Configure Domain:**
   - In Namecheap, point your domain to the hosting server
   - Wait for DNS propagation (24-48 hours)

3. **SSL Certificate:**
   - Enable SSL/HTTPS in cPanel
   - Namecheap often provides free SSL via Let's Encrypt

### Option 2: Static Site Hosting (Recommended)
1. **Netlify:**
   - Drag and drop your project folder
   - Auto-deploys on git push
   - Free SSL included
   - Custom domain support

2. **Vercel:**
   - Connect GitHub repository
   - Auto-deploys
   - Free SSL included
   - Global CDN

3. **GitHub Pages:**
   - Push to GitHub repository
   - Enable GitHub Pages in settings
   - Free SSL included

### Option 3: Cloud Storage (AWS S3, Cloudflare Pages, etc.)
- Upload files to bucket/CDN
- Configure custom domain
- Enable HTTPS

## Post-Deployment Verification

### 1. Test All Pages
- [ ] Homepage loads correctly
- [ ] Terms page accessible
- [ ] Policies page accessible
- [ ] All images load properly
- [ ] Forms work correctly
- [ ] FAQ accordions function
- [ ] Mobile layout works on various devices

### 2. Performance Testing
- [ ] Test page speed with [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Verify lazy loading works
- [ ] Check mobile performance

### 3. SEO Verification
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
- [ ] Test Twitter Cards with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
- [ ] Verify structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)

### 4. Analytics Verification
- [ ] Confirm Google Analytics is tracking
- [ ] Test event tracking (button clicks, form submissions)
- [ ] Verify real-time data in GA4 dashboard

### 5. Security Checks
- [ ] HTTPS is enabled and working
- [ ] No mixed content warnings
- [ ] Security headers configured (if possible)

### 6. Accessibility Testing
- [ ] Test with keyboard navigation
- [ ] Test with screen reader (NVDA/VoiceOver)
- [ ] Run [WAVE Accessibility Checker](https://wave.webaim.org/)
- [ ] Test at 200% zoom

## Important Files to Update Before Deployment

### index.html
- Line 17: Update canonical URL
- Line 21: Update Open Graph URL
- Line 25: Update Open Graph image URL
- Line 40: Update Twitter Card URL
- Line 44: Update Twitter Card image URL
- Line 55: Update Google Analytics ID
- Line 60: Update Google Analytics ID

## Support & Maintenance

### Regular Updates
- Monitor Google Analytics for user behavior
- Update content as needed
- Keep dependencies updated
- Regular security audits

### Backup
- Keep local copies of all files
- Use version control (Git)
- Regular backups of hosting account

## Troubleshooting

### Images Not Loading
- Check file paths (case-sensitive on Linux servers)
- Verify images are uploaded to correct directory
- Check file permissions

### Analytics Not Working
- Verify GA4 ID is correct
- Check browser console for errors
- Ensure ad blockers aren't interfering

### SSL Issues
- Verify SSL certificate is installed
- Check for mixed content (HTTP resources on HTTPS page)
- Clear browser cache

## Contact
For deployment assistance, refer to your hosting provider's documentation or support.
