# Nova App Icon & Branding Requirements

This is a mandatory production requirement for applicable web/PWA builds.

## Required behavior

Nova must detect the project's framework first and implement the framework-native icon/metadata pipeline. Never add unused or conflicting declarations.

### Browser

Provide, where supported:

- `favicon.ico`
- `favicon-16x16.png`
- `favicon-32x32.png`

### iOS Home Screen

Provide:

- `apple-touch-icon.png` (recommended 180×180)
- `<link rel="apple-touch-icon">`
- Apple web-app title/capability/status-bar metadata where applicable

The Apple icon must be designed as a Home Screen icon using the approved brand mark and adequate safe padding.

### Android/PWA

When the website functions as a web app, provide a valid manifest with:

- `name`
- `short_name`
- `description`
- `start_url`
- `display: standalone`
- `theme_color`
- `background_color`
- 192×192 icon
- 512×512 icon
- maskable icon where appropriate

### Social

Provide Open Graph title, description, image, URL, type and site name. Provide Twitter/X card, title, description and image. Prefer a 1200×630 sharing image.

### Asset rules

Use the actual approved project logo. Do not distort it. Maintain recognizable padding and create appropriate variants for favicon, iOS, Android/PWA and social sharing.

### Verification

Before completion, verify actual browser rendering and generated asset wiring. Confirm manifest/icon requests succeed, paths are valid, metadata exists, no conflicting declarations remain, and social preview assets are present.

## Definition of Done

The build is not complete if branding works only in the browser tab. The complete applicable icon, app-install and social-branding surface must be wired and verified.