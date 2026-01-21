# 📝 Complete Customization Guide
## How to Change Pictures, Videos, and Text

This guide will show you **exactly** how to customize your portfolio with your own images, videos, and content.

---

## 🖼️ Part 1: Adding Your Own Images

### Step 1: Save Your Images

1. Save your project photos/screenshots in this folder:
   ```
   c:\Users\alwin\Documents\portfolio website\src\assets\images\
   ```

2. **Naming Convention** (recommended):
   ```
   lawnmower-main.png
   lawnmower-demo.png
   lawnmower-chassis.png
   insole-pcb.png
   insole-assembled.png
   balancing-robot-1.png
   robot-arm-pick-place.png
   ```

3. **Supported Formats**: `.png`, `.jpg`, `.jpeg`, `.gif`, `.webp`

---

### Step 2: Import Images in Your Project Files

**Example for Autonomous Lawnmower:**

Open: `src/components/projects/AutonomousLawnmowerProject.tsx`

**Current line 3:**
```typescript
import mock10 from '../../assets/images/mock10.png';
```

**Change to YOUR image:**
```typescript
import lawnmowerMain from '../../assets/images/lawnmower-main.png';
import lawnmowerDemo from '../../assets/images/lawnmower-demo.png';
import lawnmowerChassis from '../../assets/images/lawnmower-chassis.png';
```

---

### Step 3: Use Your Images

**Find this line (around line 75):**
```typescript
images={[mock10]}
```

**Change to:**
```typescript
images={[lawnmowerMain, lawnmowerDemo, lawnmowerChassis]}
```

**That's it!** Your images will now appear in the gallery section.

---

### Step 4: Update Homepage Thumbnail

**Open:** `src/components/Project.tsx`

**Find (around line 20):**
```typescript
import mock10 from '../assets/images/mock10.png';
```

**Add your image:**
```typescript
import lawnmowerThumb from '../assets/images/lawnmower-thumb.png';
```

**Then find (around line 24):**
```typescript
<Link to="/project/autonomous-lawnmower"><img src={mock10} ...
```

**Change to:**
```typescript
<Link to="/project/autonomous-lawnmower"><img src={lawnmowerThumb} ...
```

---

## 🎬 Part 2: Adding Videos

### Option A: YouTube Embed (Recommended)

**Step 1:** Upload your video to YouTube

**Step 2:** Get the embed code:
- Click "Share" → "Embed"
- Copy the `<iframe>` code

**Step 3:** Add to your project page

**Open:** `src/components/projects/AutonomousLawnmowerProject.tsx`

**Add this section ANYWHERE between `<ProjectDetail>` tags:**

```typescript
<section className="project-section">
  <h2>Video Demonstration</h2>
  <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
    <iframe 
      style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
      src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen>
    </iframe>
  </div>
</section>
```

**Replace `YOUR_VIDEO_ID`** with your actual video ID from YouTube URL.

---

### Option B: Local Video File

**Step 1:** Save video in:
```
src/assets/images/lawnmower-demo.mp4
```

**Step 2:** Import it:
```typescript
import demoVideo from '../../assets/images/lawnmower-demo.mp4';
```

**Step 3:** Add video player:
```typescript
<section className="project-section">
  <h2>Video Demonstration</h2>
  <video width="100%" controls>
    <source src={demoVideo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
</section>
```

---

## ✏️ Part 3: Changing Text Content

### Changing Project Title

**Open:** `src/components/projects/AutonomousLawnmowerProject.tsx`

**Find (around line 8):**
```typescript
title="Autonomous Lawnmower"
```

**Change to whatever you want:**
```typescript
title="My Custom Project Name"
```

---

### Changing Timeline

**Find:**
```typescript
timeline="2024 - Present"
```

**Change to:**
```typescript
timeline="January 2024 - March 2024"
```

---

### Changing Background Story

**Find:**
```typescript
background="This project was inspired by..."
```

**Change to your own story:**
```typescript
background="I built this because... [your story here]"
```

---

### Changing Description

**Find:**
```typescript
description="Designed and built a 200+ lb..."
```

**Change to:**
```typescript
description="Your project description here. What it does, how it works, etc."
```

---

### Changing Technologies List

**Find:**
```typescript
technologies={[
  "ROS (Robot Operating System)",
  "Python",
  "C++",
  ...
]}
```

**Add/Remove/Change technologies:**
```typescript
technologies={[
  "Your Technology 1",
  "Your Technology 2",
  "Your Technology 3"
]}
```

---

### Changing Features List

**Find:**
```typescript
features={[
  "Tank-track chassis design for all-terrain capability",
  "Dual-motor differential drive system",
  ...
]}
```

**Add/Remove/Change features:**
```typescript
features={[
  "Your Feature 1",
  "Your Feature 2",
  "Your Feature 3"
]}
```

---

### Adding Custom Sections

You can add ANY custom section between the `<ProjectDetail>` opening and closing tags.

**Example - Adding "Lessons Learned" section:**

```typescript
<section className="project-section">
  <h2>Lessons Learned</h2>
  <p>
    Throughout this project, I learned...
  </p>
  <ul className="features-list">
    <li>Lesson 1: What I discovered...</li>
    <li>Lesson 2: Challenge I overcame...</li>
    <li>Lesson 3: Skill I developed...</li>
  </ul>
</section>
```

**You can add sections like:**
- Video Demonstration
- Lessons Learned
- Team Members
- Acknowledgments
- Press Coverage
- Awards & Recognition
- Future Plans
- Budget Breakdown
- Whatever you want!

---

### Changing GitHub/Live Links

**Find:**
```typescript
githubLink="https://github.com/alwinsdon"
liveLink="#"
```

**Change to:**
```typescript
githubLink="https://github.com/alwinsdon/lawnmower-project"
liveLink="https://youtu.be/your-demo-video"
```

**To remove links entirely:**
```typescript
githubLink={undefined}
liveLink={undefined}
```

---

## 📸 Part 4: Changing Your Profile Picture

### Step 1: Save Your Photo

Save your professional photo as:
```
src/assets/images/profile-photo.jpg
```

### Step 2: Update Main Component

**Open:** `src/components/Main.tsx`

**Find (line 12):**
```typescript
<img src="https://my-aws-assets.s3.us-west-2.amazonaws.com/portfolio-img/avatar_circle.jpeg" alt="Avatar" />
```

**Option A - Use Local Image:**
```typescript
import profilePhoto from '../assets/images/profile-photo.jpg';

// Then in the component:
<img src={profilePhoto} alt="Avatar" />
```

**Option B - Use Online Image URL:**
```typescript
<img src="https://your-image-url.com/photo.jpg" alt="Avatar" />
```

---

## 🎨 Part 5: Quick Reference - All 4 Projects

### Your 4 Project Files:

1. **Autonomous Lawnmower:**  
   `src/components/projects/AutonomousLawnmowerProject.tsx`

2. **Smart Insole:**  
   `src/components/projects/SmartInsoleProject.tsx`

3. **Self-Balancing Robot:**  
   `src/components/projects/SelfBalancingRobotProject.tsx`

4. **OpenManipulator Arm:**  
   `src/components/projects/OpenManipulatorProject.tsx`

### To customize EACH project, edit its file and change:
- `title` - Project name
- `timeline` - When you built it
- `background` - Why you built it
- `description` - What it does
- `technologies` - Tech stack array
- `features` - Features list array
- `images` - Image array
- `githubLink` - GitHub URL
- `liveLink` - Demo/video URL
- `<section>` blocks - Custom content

---

## 🔄 Testing Your Changes

After making changes:

### Step 1: Test Locally
```cmd
cd "c:\Users\alwin\Documents\portfolio website"
npm start
```

### Step 2: Check Your Browser
- Go to `http://localhost:3000`
- Click on your project cards
- Verify images, text, videos appear correctly

### Step 3: Fix Any Issues
- If images don't show: Check file path and import statement
- If text is wrong: Edit the text in the `.tsx` file
- If layout breaks: Make sure you didn't delete any `}` or `>` characters

### Step 4: Deploy
```cmd
git add .
git commit -m "Update project content with my images and info"
git push
npm run deploy
```

---

## 💡 Pro Tips

### Image Optimization:
- **Resize large images** to 1920px width max (use Paint, Photoshop, or online tools)
- **Compress images** to reduce file size (use TinyPNG or similar)
- **Use `.jpg` for photos**, `.png` for diagrams/screenshots

### Content Writing:
- **Be specific** with numbers and metrics (speeds, accuracy, runtime)
- **Tell a story** in the background section (why you built it)
- **Show problem-solving** in Challenges & Solutions sections
- **Highlight impact** in Results/Performance sections

### Video Best Practices:
- **YouTube is better** than local files (faster loading, no file size issues)
- **Keep videos short** (1-3 minutes ideal)
- **Show the project in action**, not just talking
- **Add captions** if you can't speak clearly in video

---

## 🆘 Common Issues & Fixes

### Issue: "Image not showing"
**Fix:** Check these:
1. Is the image in `src/assets/images/` folder?
2. Is the import path correct? (count the `../`)
3. Is the filename spelled exactly right? (case-sensitive!)
4. Did you save the file after editing?

### Issue: "Page is blank"
**Fix:** You probably have a syntax error.
- Check for missing `}` or `>`
- Look in browser console (F12) for error messages
- Compare your code to the original template

### Issue: "Video not playing"
**Fix:**
- Use YouTube embed instead of local files
- Make sure video URL is correct
- Check that `src=` attribute has the right URL

---

## 📞 Need Help?

If you get stuck:
1. **Check the error message** in terminal or browser console (F12)
2. **Compare to original files** - did you accidentally delete something?
3. **Test with one change at a time** - don't change everything at once
4. **Ask me** - I can help debug!

---

## ✅ Checklist for Each Project

- [ ] Updated title and timeline
- [ ] Changed background story to my own
- [ ] Updated description with my project details
- [ ] Listed correct technologies used
- [ ] Added my feature list
- [ ] Imported my project images
- [ ] Added images to gallery
- [ ] Updated GitHub link (or removed it)
- [ ] Added live demo/video link (or removed it)
- [ ] Added custom sections (lessons learned, etc.)
- [ ] Tested locally with `npm start`
- [ ] Verified all images show correctly
- [ ] Checked text for typos
- [ ] Deployed with `npm run deploy`

---

**You now have complete control over your portfolio!** 🚀

Make it uniquely yours with your real projects, photos, and story!

