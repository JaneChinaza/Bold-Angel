# Automatic deployment to Hostinger

Repository: https://github.com/JaneChinaza/Bold-Angel

Production branch: `main`

## Hostinger Web App hosting

Connect the repository through the GitHub integration in hPanel and select `main`.
Use these build settings:

| Setting | Value |
| --- | --- |
| Framework | Vite / React |
| Root directory | Repository root |
| Node.js | 24 |
| Install command (if requested) | `npm ci` |
| Build command | `npm run build` |
| Output directory | `dist` |

Before deploying, add `VITE_WEB3FORMS_ACCESS_KEY` in the app's environment variables,
using the key registered to `info@boldangel.org`. This variable is needed at build
time. `.env.local` is intentionally excluded from Git, so it is not sent to GitHub.

Use the authenticated GitHub integration for automatic deployment, rather than
uploading a ZIP. Confirm automatic deployment is enabled for `main` in hPanel.
Build the app successfully on its preview address before assigning the live domain.

The app uses hash routes, so no server rewrite rules are required.

## Publishing future changes

```powershell
git add .
git commit -m "Describe your changes"
git push origin main
```

A local commit does not publish the site. Hostinger rebuilds and deploys after
the commit is pushed to the connected branch. Check the deployment log in hPanel.

## Existing regular web hosting

If your plan only provides File Manager / `public_html`, the source repository
must be built before deployment. Do not deploy `src` directly to `public_html`.
Use a GitHub Actions build and upload workflow configured for your hosting
account, or connect a supported Web App hosting setup as described above.

Official guide: https://www.hostinger.com/support/how-to-deploy-a-nodejs-website-in-hostinger/
