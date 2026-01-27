# Google Analytics 4 (GA4) Setup Guide for SmartMealSaver

## Step 1: Create Google Analytics Account

1. **Go to Google Analytics:**
   - Visit: https://analytics.google.com/
   - Sign in with your Google account

2. **Create an Account:**
   - Click "Start measuring" or "Create Account"
   - Enter Account name: `SmartMealSaver` (or your preferred name)
   - Configure account data sharing settings (optional)
   - Click "Next"

3. **Create a Property:**
   - Property name: `SmartMealSaver Website`
   - Reporting time zone: Select your timezone (e.g., London, UK)
   - Currency: GBP (or your preferred currency)
   - Click "Next"

4. **Business Information:**
   - Industry category: Select "Technology" or "Food & Drink"
   - Business size: Select appropriate size
   - How you intend to use Google Analytics: Select options
   - Click "Create"

5. **Accept Terms:**
   - Accept Google Analytics Terms of Service
   - Accept Data Processing Terms

## Step 2: Get Your Measurement ID

1. **After creating the property, you'll see:**
   - A "Data Streams" setup screen
   - Click "Add stream" → "Web"

2. **Configure Web Stream:**
   - Website URL: `https://smartmealsaver.ai`
   - Stream name: `SmartMealSaver Website`
   - Click "Create stream"

3. **Copy Your Measurement ID:**
   - You'll see a Measurement ID like: `G-XXXXXXXXXX`
   - **Copy this ID** - you'll need it in the next step
   - Format: Always starts with `G-` followed by 10 characters

## Step 3: Update Your Website

Once you have your Measurement ID, provide it to update the code, or:

1. Open `index.html`
2. Find line 55: `<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>`
3. Replace `G-XXXXXXXXXX` with your actual Measurement ID
4. Find line 60: `gtag('config', 'G-XXXXXXXXXX', {`
5. Replace `G-XXXXXXXXXX` with your actual Measurement ID
6. Save the file

## Step 4: Verify It's Working

1. **Deploy your site to Netlify**
2. **Visit your live site**
3. **Check Google Analytics:**
   - Go back to Google Analytics dashboard
   - Navigate to "Reports" → "Realtime"
   - Visit your website in another browser/incognito window
   - You should see your visit appear in Realtime reports within 30 seconds

## What's Already Tracked

Your website is already set up to track:
- ✅ Page views (automatic)
- ✅ Button clicks (Join Waitlist buttons)
- ✅ Form submissions (Waitlist form)
- ✅ FAQ interactions (FAQ opens/closes)
- ✅ Modal interactions (Waitlist modal)
- ✅ Scroll depth
- ✅ Time on page
- ✅ Section views

## Event Tracking Details

The following custom events are tracked:

| Event Name | Description | Trigger |
|------------|-------------|---------|
| `page_view` | Page load | Automatic |
| `join_waitlist_click` | Waitlist button clicked | User clicks "Join Waitlist" |
| `waitlist_modal_open` | Modal opened | Waitlist modal appears |
| `waitlist_modal_close` | Modal closed | User closes modal |
| `waitlist_form_submit` | Form submitted | User submits waitlist form |
| `faq_open` | FAQ item opened | User expands FAQ |
| `faq_close` | FAQ item closed | User collapses FAQ |
| `scroll_depth` | User scrolls | At 25%, 50%, 75%, 100% |
| `time_on_page` | Time tracking | Every 30 seconds |
| `section_view` | Section viewed | Section enters viewport |

## Privacy & GDPR Compliance

✅ **Already configured:**
- IP anonymization enabled
- Secure cookie flags set
- GDPR-compliant setup

## Troubleshooting

### Analytics Not Showing Data
- Wait 24-48 hours for data to appear (Realtime works immediately)
- Check that your Measurement ID is correct
- Verify the code is deployed to your live site
- Check browser console for errors

### Events Not Tracking
- Open browser Developer Tools (F12)
- Check Console tab for errors
- Verify `gtag` function is defined
- Test in incognito mode (ad blockers may interfere)

### Still Need Help?
- Google Analytics Help: https://support.google.com/analytics
- GA4 Documentation: https://developers.google.com/analytics/devguides/collection/ga4

---

**Once you have your Measurement ID, I can update the code for you!**
