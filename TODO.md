# Equelyn website launch checklist

This file is the working source of truth for launching and maintaining the Equelyn marketing website.

## Status key

- [x] Complete
- [ ] Not started
- [~] In progress or waiting for review
- [!] Blocked by a decision, account, credential, or external approval

## Completed

- [x] Create a separate static website folder.
- [x] Convert the marketing design into standard HTML, CSS, and JavaScript.
- [x] Add responsive desktop and mobile layouts.
- [x] Add local Equelyn logos, app icon, screenshot, and fonts.
- [x] Add accessible navigation, labels, focus states, and reduced-motion support.
- [x] Add initial search metadata, `robots.txt`, and `sitemap.xml`.
- [x] Add website-only privacy and terms drafts.
- [x] Add an Nginx configuration for DigitalOcean.
- [x] Verify that the pages, scripts, styles, and local assets respond successfully.

## Tasks Codex can complete

These tasks can be completed in the project files without access to your private accounts.

- [ ] Perform a visual review of the landing page at desktop, tablet, and mobile sizes.
- [ ] Fix any visual, responsive, accessibility, or copy issues found during review.
- [ ] Create and add a 1200×630 social-sharing image.
- [ ] Update Open Graph and social metadata to use the final sharing image.
- [ ] Update the canonical URLs, sitemap, and Nginx configuration if the production domain is not `equelyn.com`.
- [ ] Connect the waitlist form after an endpoint and request format are provided.
- [ ] Add privacy-friendly analytics after a provider and site/account identifier are provided.
- [ ] Add the final App Store link and update launch copy after the listing is available.
- [ ] Prepare the final upload package for the DigitalOcean server.
- [ ] Update this checklist as work is completed.

## Tasks requiring your action

These items require your decision, approval, account access, payment method, legal review, or control of an external service. Codex cannot complete them independently.

### Product and content decisions

- [!] Confirm that `equelyn.com` is the production domain.
- [!] Review and approve the landing-page design and written copy.
- [!] Confirm the public support/contact email. The current site uses `hello@equelyn.com`.
- [!] Decide whether the launch waitlist should remain on the website.
- [!] Choose where waitlist email addresses will be stored or provide an existing API endpoint.
- [!] Decide whether website analytics are wanted and, if so, approve a provider.

### Legal and policy review

- [!] Have qualified counsel review and approve `privacy.html`.
- [!] Have qualified counsel review and approve `terms.html`.
- [!] Provide any required business name, mailing address, jurisdiction, or regulatory disclosures.
- [!] Confirm that the final policies accurately describe the iOS app's data collection, retention, deletion, subprocessors, and account-removal process before App Store submission.

### Accounts and infrastructure

- [!] Create or select the DigitalOcean account and droplet.
- [!] Confirm the droplet's operating system and public IP address.
- [!] Provide authorized server access or perform the deployment commands yourself.
- [!] Control the domain registrar/DNS account and point the domain records to the droplet.
- [!] Approve any DigitalOcean, domain, email-service, analytics, or form-service charges.
- [!] Create or authorize the waitlist/email-service account if an external service is used.

### App Store

- [!] Complete the Apple Developer and App Store Connect requirements for the iOS app.
- [!] Provide the final public App Store URL after Apple approves the listing.
- [!] Confirm the supported iOS version, pricing, availability, and final product claims shown on the website.

## Shared launch steps

These steps combine project-file work from Codex with approval, credentials, or verification from you.

### 1. Review the local website

- [ ] Codex: run the website locally and complete a visual review.
- [ ] Codex: resolve identified layout, accessibility, and content issues.
- [ ] You: review the completed desktop and mobile experience.
- [ ] You: approve the design and copy or provide requested revisions.

### 2. Finalize domain and metadata

- [ ] You: confirm the production domain.
- [ ] Codex: update all canonical URLs, social metadata, `robots.txt`, `sitemap.xml`, and Nginx settings.
- [ ] Codex: create and install the social-sharing image.
- [ ] You: approve the final search and social preview copy.

### 3. Connect the waitlist

- [ ] You: select or approve the service that will receive email addresses.
- [ ] You: create the service account and provide the required endpoint or public integration details.
- [ ] Codex: connect the form without exposing private credentials in browser code.
- [ ] Codex: add success, validation, error, spam-prevention, and privacy behavior.
- [ ] You: submit a real test address and confirm that it appears in the destination system.

### 4. Finalize legal pages

- [ ] You: obtain legal review of the privacy and terms drafts.
- [ ] You: provide approved changes and required company information.
- [ ] Codex: apply the approved legal copy and verify every policy link.
- [ ] You: give final approval for publication.

### 5. Deploy to DigitalOcean

- [ ] You: create or select the droplet and provide its IP address and approved access method.
- [ ] Codex or you: install and configure Nginx on the droplet.
- [ ] Codex or you: upload the website to `/var/www/equelyn`.
- [ ] You: update the domain's DNS records.
- [ ] Codex or you: enable HTTPS with a valid certificate after DNS resolves.
- [ ] Codex: verify live pages, assets, redirects, headers, and HTTPS behavior.
- [ ] You: approve the live production website.

### 6. Connect the App Store listing

- [ ] You: provide the approved App Store URL and final availability details.
- [ ] Codex: replace the prelaunch buttons and copy with the live download link.
- [ ] Codex: remove or update the waitlist if it is no longer needed.
- [ ] You: test the App Store link on an iPhone.

## Optional improvements after launch

- [ ] Add privacy-friendly traffic analytics.
- [ ] Add uptime monitoring for the website and certificate.
- [ ] Add automated deployment from a Git repository.
- [ ] Add a branded `404.html` page.
- [ ] Add additional real product screenshots when approved for public use.
- [ ] Add press, support, or frequently asked questions pages if needed.
- [ ] Review performance, accessibility, and search results after launch.

## Decisions and notes

Record decisions here so they are not lost between work sessions.

- Production domain: **Awaiting confirmation (`equelyn.com` is currently assumed).**
- Contact email: **Awaiting confirmation (`hello@equelyn.com` is currently used).**
- Waitlist destination: **Not selected.**
- Analytics provider: **Not selected; analytics are currently disabled.**
- DigitalOcean droplet: **Not created or not yet documented here.**
- App Store URL: **Not yet available.**
- Privacy and terms approval: **Pending legal review.**

## Next recommended action

Complete the local visual review, then approve or revise the landing-page design and copy before connecting external services or deploying it.
