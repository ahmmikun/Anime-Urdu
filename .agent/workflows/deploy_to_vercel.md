---
description: Deploy the project to Vercel
---

# Deploy to Vercel

You can deploy this project to Vercel using the Vercel CLI.

1.  **Install Vercel CLI** (if not already installed):
    ```powershell
    npm install -g vercel
    ```

2.  **Login to Vercel**:
    ```powershell
    vercel login
    ```

3.  **Deploy**:
    Run the following command in the project root (`anime-urdu-landing` directory):
    ```powershell
    // turbo
    vercel
    ```
    - Follow the prompts (Keep default settings mostly).
    - For `directory in which your code is located?`, ensure it is set to `./`.
    - For `Want to modify these settings?`, say `No` (since `vercel.json` and auto-detection handle it).

4.  **Production Deployment**:
    Once satisfied with the preview, deploy to production:
    ```powershell
    vercel --prod
    ```
