# 📁 Portfolio — File Structure

```
portfolio/
├── index.html   ← All HTML structure
├── style.css    ← All styling & animations
├── script.js    ← Cursor, scroll reveal & contact form (EmailJS)
└── README.md    ← This file
```

---

## ✉️ How to Connect the Contact Form to Your Gmail (FREE — 5 minutes)

The form uses **EmailJS** — a free service that sends emails directly from
your website with NO backend / server needed.

---

### STEP 1 — Create a Free EmailJS Account

1. Go to 👉 https://www.emailjs.com
2. Click **Sign Up** — use your Gmail to sign up (easier)
3. Confirm your email

---

### STEP 2 — Add an Email Service (connect your Gmail)

1. In the EmailJS dashboard, go to **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Click **Connect Account** → log in with your Gmail
4. Give it a name (e.g. `portfolio_gmail`) → click **Create Service**
5. Copy the **Service ID** (looks like `service_xxxxxxx`) — save it

---

### STEP 3 — Create an Email Template

1. Go to **Email Templates** → **Create New Template**
2. Paste this template (or customise it):

**Subject:**
```
New Portfolio Message: {{subject}}
```

**Body:**
```
You have a new message from your portfolio!

Name:    {{from_name}}
Email:   {{reply_to}}
Subject: {{subject}}

Message:
{{message}}
```

3. In **To Email** field, enter your Gmail address
4. Click **Save** → copy the **Template ID** (looks like `template_xxxxxxx`)

---

### STEP 4 — Get Your Public Key

1. Go to **Account** → **General** tab
2. Copy your **Public Key** (looks like `aBcDeFgHiJkL`)

---

### STEP 5 — Paste the 3 Keys into script.js

Open `script.js` and replace the three placeholders at the top:

```javascript
const EMAILJS_PUBLIC_KEY  = "paste_your_public_key_here";
const EMAILJS_SERVICE_ID  = "paste_your_service_id_here";
const EMAILJS_TEMPLATE_ID = "paste_your_template_id_here";
```

---

### STEP 6 — Test It!

Open `index.html` in your browser, fill in the contact form, and click
**Send Message**. You should receive an email in your Gmail within seconds!

---

## 🔧 Other Customisations

| What to change | Where |
|---|---|
| Your name / logo | `index.html` → nav `.nav-logo` and footer |
| Your Gmail address | `index.html` → contact section `mailto:` link |
| LinkedIn URL | `index.html` → contact section LinkedIn `<a>` |
| GitHub URL | `index.html` → contact section GitHub `<a>` |
| Project cards | `index.html` → `#projects` section |
| Colors / fonts | `style.css` → `:root` variables at the top |

---

## 🚀 How to Host It (Free)

**Option A — GitHub Pages (recommended):**
1. Create a GitHub account at github.com
2. Create a new repository named `yourusername.github.io`
3. Upload `index.html`, `style.css`, `script.js`
4. Your site goes live at `https://yourusername.github.io`

**Option B — Netlify (drag & drop):**
1. Go to https://netlify.com → Sign up free
2. Drag your portfolio folder onto the dashboard
3. Get a live URL instantly!

---

Free EmailJS plan = **200 emails/month** — more than enough for a portfolio.
