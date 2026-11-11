# Automatic deployment to Hostinger regular web hosting

Every push to `main` runs `.github/workflows/deploy-hostinger.yml`, builds the
React app, and uploads only `dist/` to your configured FTP directory using FTPS.
A local commit alone does not publish the site.

## One-time setup

1. In Hostinger hPanel, open your website's **Dashboard → Files → FTP Accounts**.
   Find the FTP server hostname, username, and password. Prefer a dedicated FTP
   account scoped to this website's `public_html` directory.
2. In GitHub, open **JaneChinaza/Bold-Angel → Settings → Secrets and variables →
   Actions → New repository secret** and add these five secrets:

| Secret | Value |
| --- | --- |
| `HOSTINGER_FTP_HOST` | FTP server hostname only, without `ftp://` or a path. Use the hostname matching the server TLS certificate. |
| `HOSTINGER_FTP_USERNAME` | FTP username from hPanel |
| `HOSTINGER_FTP_PASSWORD` | FTP account password |
| `HOSTINGER_FTP_DIRECTORY` | Existing website directory as seen after FTP login; commonly `/public_html/`, or `/` if the FTP account is already scoped to it |
| `VITE_WEB3FORMS_ACCESS_KEY` | Web3Forms key registered to `info@boldangel.org`; same value as your local `.env.local` |

Do not guess the directory. It must point to this website's document root, where
its live `index.html` belongs. Check it through an FTP client if unsure. Back up
your current website in hPanel before the first deployment: matching build
filenames, including `index.html`, will be replaced.

3. Open **Actions → Deploy to Hostinger → Run workflow**, choosing `main`.
4. Check that the build and upload succeed, then open your live website.

No Hostinger Git integration is necessary. The uploader uses explicit FTP over
TLS on port 21 and validates the server certificate. It will not fall back to
unencrypted FTP. If the server rejects TLS, confirm its supported connection
details before changing the deployment method.

## Future updates

```powershell
git add .
git commit -m "Describe your changes"
git push origin main
```

The workflow installs dependencies with `npm ci`, uses Node 24, builds with
`npm run build`, and uploads `dist`. Source files and `.env.local` are not uploaded.
The uploader preserves unrelated server files, including `.htaccess`, and old
assets. It uploads assets first and replaces `index.html` last. Old hashed assets
can be cleaned up later after old browser sessions no longer need them.

Changes to repository secrets apply to the next workflow run. If email delivery
configuration changes, rerun the workflow because Vite embeds it at build time.

The app uses hash routes, so no new server rewrite rules are required. If an old
WordPress `index.php` takes priority, check the document-root configuration in
hPanel before removing or changing existing server files.

References:
- https://www.hostinger.com/support/1714427-how-to-find-ftp-details-on-hostinger-dashboard-at-hostinger/
- https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets
