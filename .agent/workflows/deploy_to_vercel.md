---
description: Deploy the project to Vercel
---

# Deploy to Vercel

## Prerequisite: Root Directory Setup
You **MUST** set the **Root Directory** in Vercel to `anime-urdu-landing` before deploying.
1.  **Vercel Dashboard** > **Settings** > **General** > **Root Directory** > Edit > `anime-urdu-landing`.

## Deployment Steps

1.  **Navigate to the REPOSITORY root**:
    If you are currently in `anime-urdu-landing`, go back one folder:
    ```powershell
    cd ..
    ```
    You should be in `D:\CODING_DATA\Anime-Urdu`.

2.  **Run the deploy command**:
    ```powershell
    npx vercel
    ```
    
    *Why?* Since you told Vercel the project is in `anime-urdu-landing`, running the command from the *parent* folder allows Vercel to find it correctly. If you run it *inside* the folder, Vercel looks for `anime-urdu-landing/anime-urdu-landing`, which fails.

3.  **Confirm Settings**:
    If asked, keep default settings:
    - **Framework**: Vite
    - **Build Command**: `vite build`
    - **Output Directory**: `dist`

4.  **Production Deploy**:
    To publish the live version:
    ```powershell
    npx vercel --prod
    ```