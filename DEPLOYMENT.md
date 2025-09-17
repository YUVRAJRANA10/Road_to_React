# 🚀 Individual Project Deployment Guide

This guide explains how to deploy each React project from the monorepo as separate Vercel deployments.

## 📋 Prerequisites

1. **Install Vercel CLI globally:**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel:**
   ```bash
   vercel login
   ```

3. **Ensure all dependencies are installed:**
   ```bash
   npm run install:all
   ```

## 🎯 Deployment Strategy

Each project folder will be deployed as a **separate Vercel application** with its own domain:

- `React-router-site` → `https://react-router-site-xyz.vercel.app`
- `CurrencyConverter` → `https://currency-converter-xyz.vercel.app`
- `background-changer` → `https://background-changer-xyz.vercel.app`
- `password-generator` → `https://password-generator-xyz.vercel.app`
- `tailwind-props-react` → `https://tailwind-props-react-xyz.vercel.app`
- `02counter` → `https://counter-app-xyz.vercel.app`

## 📁 Per-Project Deployment

### Method 1: Manual Deployment (Recommended)

Navigate to each project folder and deploy individually:

```bash
# React Router Site
cd React-router-site
vercel --prod

# Currency Converter
cd ../CurrencyConverter
vercel --prod

# Background Changer
cd ../background-changer
vercel --prod

# Password Generator
cd ../password-generator
vercel --prod

# Tailwind Props
cd ../tailwind-props-react
vercel --prod

# Counter App
cd ../02counter
vercel --prod
```

### Method 2: Using Root Scripts

From the root directory, use the predefined scripts:

```bash
# Deploy specific projects
npm run deploy:router-site
npm run deploy:currency-converter
npm run deploy:background-changer
npm run deploy:password-generator
npm run deploy:tailwind-props
npm run deploy:counter
```

## 🔧 Vercel Configuration

Each project folder has its own `vercel.json` with:

```json
{
  "version": 2,
  "name": "project-name",
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": {
        "distDir": "dist"
      }
    }
  ],
  "routes": [
    {
      "handle": "filesystem"
    },
    {
      "src": "/(.*)",
      "dest": "/index.html"
    }
  ]
}
```

## 🌐 GitHub Integration (Recommended)

### Setup for Automatic Deployments:

1. **Push monorepo to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Road to React monorepo"
   git remote add origin https://github.com/YUVRAJRANA10/Road-to-React.git
   git push -u origin main
   ```

2. **Import each project folder to Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Import your GitHub repository
   - **Important:** Set the "Root Directory" to each project folder:
     - For React Router: Set root to `React-router-site`
     - For Currency Converter: Set root to `CurrencyConverter`
     - For Background Changer: Set root to `background-changer`
     - And so on...

3. **Configure Build Settings:**
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`

## 📊 Deployment Status Tracking

Create a deployment tracking file:

```bash
# Check deployment status
vercel ls

# Check specific project
cd React-router-site && vercel ls
```

## 🎯 Expected Live URLs

After deployment, your projects will be available at:

| Project | Repository Folder | Live URL |
|---------|------------------|----------|
| React Router Site | `React-router-site` | `https://react-router-site-[hash].vercel.app` |
| Currency Converter | `CurrencyConverter` | `https://currency-converter-[hash].vercel.app` |
| Background Changer | `background-changer` | `https://background-changer-[hash].vercel.app` |
| Password Generator | `password-generator` | `https://password-generator-[hash].vercel.app` |
| Tailwind Props | `tailwind-props-react` | `https://tailwind-props-react-[hash].vercel.app` |
| Counter App | `02counter` | `https://counter-app-[hash].vercel.app` |

## 🔄 Continuous Deployment

Once connected to GitHub:

1. **Push changes to specific folders**
2. **Vercel automatically detects changes**
3. **Only affected projects rebuild**
4. **Independent deployment cycles**

## 🛠️ Troubleshooting

### Common Issues:

1. **Build failures:**
   ```bash
   cd [project-folder]
   npm run build
   # Fix any errors, then redeploy
   vercel --prod
   ```

2. **Environment variables:**
   - Set via Vercel dashboard
   - Or use `.env.local` files in each project

3. **Routing issues (SPA):**
   - Each project has proper SPA routing configured in `vercel.json`

### Build Commands for Each Project:

All projects use standard Vite commands:
- **Dev:** `npm run dev`
- **Build:** `npm run build`
- **Preview:** `npm run preview`

## ✅ Verification Steps

After deployment:

1. ✅ Check all URLs are accessible
2. ✅ Verify routing works (for React Router project)
3. ✅ Test functionality on each deployed app
4. ✅ Check responsive design on mobile
5. ✅ Verify build artifacts in Vercel dashboard

---

**Pro Tip:** Use Vercel's preview deployments to test changes before pushing to production!