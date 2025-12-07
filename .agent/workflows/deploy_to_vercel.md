---
description: Deploy the project to Vercel
---

# Deploy to Vercel

## ⚠️ Crucial Limitation
You **cannot** specify the project's **Root Directory** inside `vercel.json`. Vercel needs to know where the project lives *before* it reads any configuration. **You MUST set this in the Vercel Dashboard.**

## Step 1: Configure Root Directory (Once)
1.  Go to **Vercel Dashboard** > Select your project.
2.  Click **Settings** > **General**.
3.  Find **Root Directory**.
4.  Click **Edit** and set it to: `anime-urdu-landing`.
5.  Click **Save**.

## Step 2: Deploy
Run the following command in the **root** folder (`d:\CODING_DATA\Anime-Urdu`):
```powershell
// turbo
vercel
```

## Step 3: Verify Settings (Auto-Detected)
Once the Root Directory is set correctly, Vercel will automatically detect:
- **Framework Preset**: Vite
- **Build Command**: `vite build`
- **Output Directory**: `dist`

If it asks, confirm these settings.

## `vercel.json`
I have added a `vercel.json` file to the project. It handles **Rewrites** (ensuring the site works if you add more pages later).
**Note:** It *cannot* control the Build Settings or Root Directory. Those remain in the Dashboard.