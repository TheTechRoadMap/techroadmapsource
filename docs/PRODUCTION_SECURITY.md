# Production security

## Developer-tools deterrent

In production builds, the app listens for F12, Ctrl+Shift+I/J/C, Ctrl+U, and the macOS Command+Option equivalents (including Command+Option+U for view source). A detected shortcut displays a full-screen black alert and makes the app root inert and hidden from assistive technology. The alert has no dismiss action and remains until the page is reloaded; detection state is not persisted.

This is only a casual-inspection deterrent. It cannot prevent access to browser developer tools, downloaded JavaScript bundles, network requests, or client-side source. It is not authentication, authorization, or an access-control mechanism.

## Production configuration review

- Vite production source maps are explicitly disabled in `vite.config.js`.
- The frontend source has no application configuration reads from `import.meta.env` or `process.env`; the deterrent only uses Vite's built-in `import.meta.env.PROD` build flag. The repository has no backend, credential store, or private API configuration. Public client-side data and browser `localStorage` are not confidential.
- The app is a static client-side application with no account system or private API. Route rendering is not a security boundary; any future protected data or sensitive operation must be enforced by an authenticated, authorized server/API.
- `public/_headers` supplies baseline content-type, referrer, framing, and permissions headers for static hosts that support this file format (including Netlify and Cloudflare Pages). The repository does not identify its production hosting provider, so confirm the deployed response headers; configure the equivalent rules in the actual host if it does not process `_headers`.
- A Content Security Policy is not imposed by this host-neutral static configuration. Define and test one at the production host after accounting for the app's Google Fonts, external news API, and remote images. Avoid treating this client-side deterrent or public environment configuration as a secret-management control.

Review the deployed response headers and production bundle as part of release validation. Never put API keys, passwords, private tokens, or other secrets in frontend source or `VITE_*` variables: Vite embeds client-exposed values in downloadable assets.
