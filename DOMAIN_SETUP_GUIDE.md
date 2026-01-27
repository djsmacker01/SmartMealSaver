# Domain Setup Guide - Fixing ERR_TIMED_OUT

## The Problem
Your domain `smartmealsaver.ai` is showing "ERR_TIMED_OUT" because:
- The domain DNS hasn't been pointed to Netlify yet, OR
- The site hasn't been deployed to Netlify yet, OR
- DNS changes are still propagating

## Step-by-Step Solution

### Step 1: Deploy Your Site to Netlify First

**Before connecting your domain, you need to deploy your site:**

1. **Go to Netlify:**
   - Visit: https://app.netlify.com
   - Sign in or create an account

2. **Deploy Your Site:**
   - **Option A (Drag & Drop):**
     - Drag your entire `SmartMealSaver` folder onto the Netlify dashboard
     - Wait for deployment (30-60 seconds)
     - You'll get a URL like: `random-name-123.netlify.app`
   
   - **Option B (Git - Recommended):**
     - Push your code to GitHub first
     - In Netlify: "Add new site" → "Import from Git"
     - Connect your GitHub repo
     - Deploy

3. **Verify Deployment:**
   - Click on your site in Netlify dashboard
   - Visit the `.netlify.app` URL
   - Make sure your site loads correctly

### Step 2: Connect Your Domain in Netlify

1. **In Netlify Dashboard:**
   - Go to your site
   - Click **"Site settings"** (top right)
   - Click **"Domain management"** in the left sidebar
   - Click **"Add custom domain"**

2. **Enter Your Domain:**
   - Type: `smartmealsaver.ai`
   - Click **"Verify"** or **"Add domain"**

3. **Netlify will show you DNS instructions:**
   - You'll see DNS records you need to add
   - **IMPORTANT:** Write down or screenshot these values

### Step 3: Configure DNS in Namecheap

1. **Log into Namecheap:**
   - Go to: https://www.namecheap.com
   - Sign in to your account
   - Go to **"Domain List"**

2. **Find Your Domain:**
   - Click **"Manage"** next to `smartmealsaver.ai`

3. **Go to DNS Settings:**
   - Click on **"Advanced DNS"** tab
   - You'll see current DNS records

4. **Update DNS Records:**
   
   **Option A: Use Netlify's Nameservers (Easiest)**
   - In Namecheap, go to **"Nameservers"** section
   - Select **"Custom DNS"**
   - Add Netlify's nameservers (Netlify will show these):
     - `dns1.p01.nsone.net`
     - `dns2.p01.nsone.net`
     - `dns3.p01.nsone.net`
     - `dns4.p01.nsone.net`
   - Click **"Save"**
   - **This is the easiest method!**

   **Option B: Use A Record and CNAME (If you want to keep Namecheap nameservers)**
   - In **"Advanced DNS"**, add these records:
   
   **A Record:**
   - Type: `A Record`
   - Host: `@`
   - Value: `75.2.60.5` (Netlify's IP - verify in Netlify dashboard)
   - TTL: `Automatic` or `30 min`
   
   **CNAME Record:**
   - Type: `CNAME Record`
   - Host: `www`
   - Value: `smartmealsaver-xyz.netlify.app` (your Netlify site URL)
   - TTL: `Automatic` or `30 min`
   
   **Remove any conflicting records:**
   - Delete any existing A records pointing to other IPs
   - Delete any existing CNAME records for www

5. **Save Changes:**
   - Click **"Save"** or **"Add Record"**
   - Changes may take a few minutes to save

### Step 4: Wait for DNS Propagation

1. **DNS Propagation Time:**
   - Usually takes: **15 minutes to 48 hours**
   - Most common: **1-4 hours**
   - Can check status in Netlify dashboard

2. **Check Status in Netlify:**
   - Go to **"Domain management"** in Netlify
   - You'll see the status of your domain
   - It will show "Pending" → "Active" when ready

3. **Test Your Domain:**
   - Wait at least 15-30 minutes
   - Try visiting: `https://smartmealsaver.ai`
   - If still not working, wait longer (up to 48 hours)

### Step 5: SSL Certificate (Automatic)

- Netlify automatically issues SSL certificates
- Once DNS is configured, SSL will be issued automatically
- Usually takes 1-24 hours after DNS is active
- You'll see a green lock icon when ready

## Troubleshooting

### Still Getting ERR_TIMED_OUT After 24 Hours?

1. **Check DNS Propagation:**
   - Use: https://www.whatsmydns.net
   - Search for: `smartmealsaver.ai`
   - Check if A record shows Netlify's IP

2. **Verify DNS Records in Namecheap:**
   - Make sure records are saved correctly
   - Check for typos in IP addresses
   - Ensure TTL is set correctly

3. **Check Netlify Domain Status:**
   - Go to Netlify → Domain management
   - Look for error messages
   - Netlify will show what's wrong

4. **Clear Browser Cache:**
   - Try incognito/private browsing
   - Clear DNS cache: `ipconfig /flushdns` (Windows)

5. **Try Different Network:**
   - Test on mobile data
   - Test on different WiFi network
   - DNS might be cached on your network

### Common Issues

**Issue: "Domain not verified"**
- Solution: Make sure DNS records are correct
- Wait for DNS propagation

**Issue: "SSL certificate pending"**
- Solution: Wait 1-24 hours after DNS is active
- Netlify issues SSL automatically

**Issue: "Site not deployed"**
- Solution: Deploy your site first before adding domain

## Quick Checklist

- [ ] Site deployed to Netlify (working on .netlify.app URL)
- [ ] Domain added in Netlify dashboard
- [ ] DNS records updated in Namecheap
- [ ] Waited at least 15-30 minutes for DNS propagation
- [ ] Checked DNS propagation status
- [ ] Tested domain in browser (try incognito mode)

## Need Help?

- **Netlify Support:** https://www.netlify.com/support/
- **Namecheap Support:** https://www.namecheap.com/support/
- **DNS Checker:** https://www.whatsmydns.net

---

**Remember:** DNS changes can take up to 48 hours, but usually work within 1-4 hours. Be patient! 🚀
