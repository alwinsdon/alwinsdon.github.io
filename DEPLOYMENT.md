# 🚀 Quick Deployment Instructions

## Before You Deploy

Make sure you have completed these steps:
- [ ] Node.js is installed (`node -v` to check)
- [ ] Dependencies are installed (`npm install`)
- [ ] You've customized your portfolio (name, projects, skills, etc.)
- [ ] You've tested locally (`npm start`)

## Step-by-Step Deployment

### 1️⃣ Create GitHub Repository

Go to: https://github.com/new

- **Repository name**: `alwinsdon.github.io` (this EXACT name is important!)
- **Visibility**: Public
- **Do NOT** check "Initialize with README"
- Click **Create repository**

### 2️⃣ Connect Local Repository to GitHub

Open PowerShell in your project folder and run these commands one by one:

```powershell
# Stage all files
git add .

# Commit your changes
git commit -m "Initial commit - My portfolio website"

# Set the main branch
git branch -M main

# Add GitHub remote (this links your local folder to GitHub)
git remote add origin https://github.com/alwinsdon/alwinsdon.github.io.git

# Push to GitHub
git push -u origin main
```

### 3️⃣ Deploy to GitHub Pages

```powershell
npm run deploy
```

This single command will:
- Build your website
- Create a `gh-pages` branch
- Deploy your site to GitHub Pages

### 4️⃣ Enable GitHub Pages (First Time Only)

1. Go to: https://github.com/alwinsdon/alwinsdon.github.io
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under "Source":
   - Branch: **gh-pages**
   - Folder: **/ (root)**
5. Click **Save**

⏱️ Wait 2-3 minutes for GitHub to deploy your site.

### 5️⃣ Visit Your Live Site! 🎉

Your portfolio will be live at:

**https://alwinsdon.github.io/alwinsdon.github.io/**

---

## 🔄 Future Updates

Whenever you make changes to your portfolio:

```powershell
# 1. Test locally first
npm start

# 2. Commit your changes
git add .
git commit -m "Update: describe what you changed"

# 3. Push to GitHub
git push

# 4. Deploy the updates
npm run deploy
```

Your site will update in 2-3 minutes!

---

## ⚠️ Troubleshooting

### "npm is not recognized"
- Install Node.js from https://nodejs.org/
- Restart PowerShell after installation

### "git is not recognized"
- Install Git from https://git-scm.com/
- Restart PowerShell after installation

### "remote origin already exists"
- Run: `git remote remove origin`
- Then try the `git remote add origin` command again

### Deployment fails
- Make sure all changes are committed: `git status`
- Verify gh-pages is installed: Check `package.json` devDependencies
- Try: `npm install gh-pages --save-dev`

### Site shows 404 error
- Check GitHub Pages settings (Settings → Pages)
- Make sure branch is set to `gh-pages`
- Wait a few more minutes - it can take up to 10 minutes

---

## 📞 Need Help?

- GitHub Pages Documentation: https://docs.github.com/en/pages
- Check repository settings at: https://github.com/alwinsdon/alwinsdon.github.io/settings/pages

Good luck! 🚀

