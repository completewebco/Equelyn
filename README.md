# Equelyn marketing website

Static landing page for the Moderator iOS app. It uses plain HTML, CSS, and a small amount of vanilla JavaScript; there is no build step or Node.js runtime.

## Preview locally

From this folder, run:

```sh
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Before launch

1. Confirm that `equelyn.com` is the production domain. If it is different, update the canonical URLs, Open Graph URLs, `robots.txt`, `sitemap.xml`, and `deploy/nginx.conf`.
2. Connect the waitlist form by setting `data-endpoint` on the form in `index.html` to an HTTPS endpoint that accepts `{ "email": "...", "source": "equelyn-landing-page" }` as JSON.
3. Replace the “Coming to the App Store” link and copy after approval.
4. Have counsel review `privacy.html` and `terms.html`; both pages are intentionally labelled as website-only drafts.
5. Add a 1200×630 raster social-sharing image and update `og:image` when one is available. The current app-icon fallback is valid but not ideal for large previews.

## DigitalOcean deployment

Copy the contents of this folder to `/var/www/equelyn` on the droplet. Install Nginx, copy `deploy/nginx.conf` to `/etc/nginx/sites-available/equelyn`, enable the site, test the Nginx configuration, and reload Nginx. Point the domain's A/AAAA records to the droplet and use Certbot to enable HTTPS.

The included configuration assumes `equelyn.com` and `www.equelyn.com`; update those names if needed.
