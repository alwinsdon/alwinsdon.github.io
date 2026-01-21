# Portfolio Website Setup Guide

Welcome to your personal portfolio website! This guide will help you customize and deploy your site.

## 📋 Prerequisites

Before you begin, make sure you have:
1. ✅ **Node.js** installed (download from https://nodejs.org/)
2. ✅ **Git** installed
3. ✅ A **GitHub account** (username: alwinsdon)

## 🚀 Quick Start

### 1. Install Dependencies

First, install all required packages:

```bash
npm install
```

### 2. Run Development Server

Start the local development server:

```bash
npm start
```

The site will open at `http://localhost:3000`

## ✏️ Customization Guide

### Main Profile Section (`src/components/Main.tsx`)

Update your personal information:

- **Line 12**: Change avatar image URL to your own photo
- **Line 16**: Update GitHub link to `https://github.com/alwinsdon`
- **Line 17**: Update LinkedIn profile link
- **Line 19**: Change name from "Yuji Sato" to your name
- **Line 20**: Update job title (e.g., "Full Stack Engineer", "Software Developer", etc.)

### Expertise Section (`src/components/Expertise.tsx`)

Customize your skills:

- **Lines 8-20**: `labelsFirst` - Frontend/backend technologies
- **Lines 22-32**: `labelsSecond` - DevOps & infrastructure tools
- **Lines 34-42**: `labelsThird` - AI/ML or other specialized skills
- **Lines 52-53**: Update the section descriptions
- **Lines 63-65**: Update second expertise area title and description
- **Lines 75-77**: Update third expertise area title and description

### Career History (`src/components/Timeline.tsx`)

Add your work experience:

- Update each `<VerticalTimelineElement>` with your job history
- Change dates, titles, companies, and descriptions
- Add or remove timeline elements as needed

### Projects Section (`src/components/Project.tsx`)

Showcase your projects:

- Replace project URLs, images, titles, and descriptions
- Update image files in `src/assets/images/` folder
- Add or remove project blocks as needed

### Contact Section (`src/components/Contact.tsx`)

The contact form is ready to use. If you want email functionality:
- Uncomment lines 30-49
- Sign up for EmailJS (https://www.emailjs.com/)
- Add your EmailJS credentials

## 📦 Building for Production

Create an optimized production build:

```bash
npm run build
```

## 🌐 Deployment to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to https://github.com/new
2. Repository name: **`alwinsdon.github.io`**
3. Keep it **public**
4. Don't initialize with README (we already have files)
5. Click "Create repository"

### Step 2: Connect Your Local Repository

```bash
git add .
git commit -m "Initial commit - portfolio website"
git branch -M main
git remote add origin https://github.com/alwinsdon/alwinsdon.github.io.git
git push -u origin main
```

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
- Build your site
- Create/update the `gh-pages` branch
- Deploy to GitHub Pages

### Step 4: Configure GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select branch: **gh-pages**
4. Click **Save**

🎉 Your site will be live at: **https://alwinsdon.github.io/alwinsdon.github.io/**

## 🔄 Making Updates

After making changes to your portfolio:

1. Test locally: `npm start`
2. Build: `npm run build`
3. Commit changes: `git add . && git commit -m "Update portfolio"`
4. Push to GitHub: `git push`
5. Deploy: `npm run deploy`

## 📝 Tips

- Replace the avatar image with your own professional photo
- Add real project screenshots to make your portfolio stand out
- Keep your skills section up-to-date
- Write clear, concise project descriptions
- Test on mobile devices to ensure responsiveness

## 🆘 Troubleshooting

**Node.js not found?**
- Download and install from https://nodejs.org/
- Restart your terminal after installation

**npm install fails?**
- Try running: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

**Deployment fails?**
- Make sure `gh-pages` package is installed
- Check that you've committed all changes
- Verify your GitHub repository exists

## 📚 Resources

- [React Documentation](https://react.dev/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Material-UI Components](https://mui.com/)
- [Font Awesome Icons](https://fontawesome.com/)

---

Good luck with your portfolio! 🚀

