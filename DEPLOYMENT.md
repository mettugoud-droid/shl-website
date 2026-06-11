# Sri Harinath Logistics – Deployment Guide

## Prerequisites

- Node.js 18+ installed
- PostgreSQL database (local or cloud)
- SMTP email account configured
- Domain: sriharinathlogistics.com

---

## 1. Local Development Setup

```bash
# Clone the project
cd shl-website

# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Edit .env with your actual credentials
nano .env

# Generate Prisma client
npx prisma generate

# Push database schema
npx prisma db push

# Start development server
npm run dev
```

Visit: http://localhost:3000

---

## 2. Environment Variables (.env)

```env
# Database (PostgreSQL)
DATABASE_URL="postgresql://username:password@localhost:5432/shl_logistics?schema=public"

# SMTP Email (Namecheap/cPanel)
SMTP_HOST=mail.sriharinathlogistics.com
SMTP_PORT=465
SMTP_USER=quotes@sriharinathlogistics.com
SMTP_PASSWORD=your_secure_password
EMAIL_TO=quotes@sriharinathlogistics.com
EMAIL_CC=info@sriharinathlogistics.com

# Site
NEXT_PUBLIC_SITE_URL=https://sriharinathlogistics.com
NEXT_PUBLIC_WHATSAPP_NUMBER=917075742929
NEXT_PUBLIC_PHONE_NUMBER=+917075742929

# Admin Panel
ADMIN_EMAIL=admin@sriharinathlogistics.com
ADMIN_PASSWORD=your_strong_admin_password

# Rate Limiting
RATE_LIMIT_MAX=5
RATE_LIMIT_WINDOW=60000
```

---

## 3. Database Setup (PostgreSQL)

### Option A: Local PostgreSQL
```bash
# Create database
createdb shl_logistics

# Push schema
npx prisma db push
```

### Option B: Cloud (Supabase/Railway/Neon)
1. Create a free PostgreSQL database
2. Copy the connection string
3. Update DATABASE_URL in .env
4. Run: `npx prisma db push`

---

## 4. Email Setup (Namecheap/cPanel)

### Step 1: Create Email Accounts in cPanel
1. Login to cPanel → Email Accounts
2. Create: `quotes@sriharinathlogistics.com`
3. Create: `info@sriharinathlogistics.com`

### Step 2: Get SMTP Settings
- **Host:** mail.sriharinathlogistics.com
- **Port:** 465 (SSL) or 587 (TLS)
- **Username:** quotes@sriharinathlogistics.com
- **Password:** (your email password)

### Step 3: SPF & DKIM Records
Add these DNS records for email deliverability:
```
TXT  @   v=spf1 +a +mx +ip4:YOUR_SERVER_IP include:_spf.google.com ~all
```

---

## 5. Deployment Options

### Option A: Vercel (Recommended – Easiest)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set environment variables in Vercel dashboard
# Settings → Environment Variables → Add all from .env

# Production deploy
vercel --prod
```

**Vercel Settings:**
- Framework: Next.js
- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

### Option B: VPS Hosting (DigitalOcean/AWS/Hostinger)

```bash
# 1. SSH into your server
ssh root@your-server-ip

# 2. Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | bash -
apt-get install -y nodejs

# 3. Install PM2 (process manager)
npm install -g pm2

# 4. Clone/upload your project
cd /var/www
git clone your-repo-url shl-website
cd shl-website

# 5. Install dependencies & build
npm install
npx prisma generate
npx prisma db push
npm run build

# 6. Start with PM2
pm2 start npm --name "shl-website" -- start
pm2 save
pm2 startup

# 7. Setup Nginx reverse proxy
```

**Nginx Configuration:**
```nginx
server {
    listen 80;
    server_name sriharinathlogistics.com www.sriharinathlogistics.com;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### Option C: cPanel/Namecheap Hosting (Node.js Application)

```bash
# 1. Build locally
npm run build

# 2. Upload to cPanel via File Manager or FTP:
#    - All project files EXCEPT node_modules
#    - Upload to: /home/username/shl-website/

# 3. In cPanel → Setup Node.js App
#    - Node.js version: 18+
#    - Application mode: Production
#    - Application root: /home/username/shl-website
#    - Application URL: sriharinathlogistics.com
#    - Application startup file: node_modules/.bin/next start
#    OR use custom server.js

# 4. Click "Run NPM Install"
# 5. Add environment variables in cPanel Node.js app settings
# 6. Click "Restart"
```

**Custom server.js for cPanel:**
```javascript
const { createServer } = require('http');
const { parse } = require('url');
const next = require('next');

const dev = false;
const hostname = '0.0.0.0';
const port = process.env.PORT || 3000;

const app = next({ dev, hostname, port });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    await handle(req, res, parsedUrl);
  }).listen(port, () => {
    console.log(`> SHL Website running on port ${port}`);
  });
});
```

---

## 6. SSL Certificate Setup

### Vercel: Automatic (included)

### VPS with Certbot:
```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d sriharinathlogistics.com -d www.sriharinathlogistics.com
```

### Namecheap: 
1. cPanel → SSL/TLS → Install Certificate
2. Or use AutoSSL (free with hosting)

---

## 7. DNS Configuration (Namecheap)

```
Type    Host    Value                       TTL
A       @       YOUR_SERVER_IP              Automatic
A       www     YOUR_SERVER_IP              Automatic
CNAME   www     sriharinathlogistics.com    Automatic
MX      @       mail.sriharinathlogistics.com  Priority: 0
TXT     @       v=spf1 +a +mx ~all         Automatic
```

For Vercel deployment:
```
CNAME   @       cname.vercel-dns.com        Automatic
CNAME   www     cname.vercel-dns.com        Automatic
```

---

## 8. Post-Deployment Checklist

- [ ] Website loads at https://sriharinathlogistics.com
- [ ] SSL certificate is active (green padlock)
- [ ] All pages load without errors
- [ ] Contact form submits and sends email
- [ ] Quote form submits and sends email
- [ ] Customer receives auto-response email
- [ ] Admin panel works at /admin/leads
- [ ] WhatsApp button opens correct chat
- [ ] Phone links work on mobile
- [ ] Mobile responsive design verified
- [ ] Google PageSpeed score checked
- [ ] sitemap.xml accessible
- [ ] robots.txt accessible
- [ ] Schema markup validated (schema.org validator)
- [ ] Google Search Console setup
- [ ] Google Analytics connected (optional)

---

## 9. Maintenance Commands

```bash
# Update dependencies
npm update

# Database migrations
npx prisma migrate dev --name description
npx prisma db push (for quick schema changes)

# View database
npx prisma studio

# Rebuild & restart
npm run build
pm2 restart shl-website

# View logs
pm2 logs shl-website
```

---

## 10. Performance Optimization

The website is pre-optimized with:
- Server-side rendering (SSR)
- Image optimization (Next.js Image)
- Font optimization (next/font)
- Code splitting (automatic)
- Security headers
- Gzip compression
- CSS purging (Tailwind)

Expected scores:
- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

---

## Support

For deployment assistance:
- Email: info@sriharinathlogistics.com
- Phone: +91 70757 42929
