# NOVA PWA Installation Implementation Standard

**Task:** Upgrade an existing eligible website to an installable Progressive Web App without rebuilding or changing approved UI, branding, logo, features, integrations, or technology stack. Preserve responsive mobile, tablet and desktop behavior. Installability is browser/platform dependent and always requires a user action.

## 1. Inspect first
Identify framework, router, hosting, HTTPS, current manifest, existing service workers, approved logo assets, caching, auth, payments, privacy restrictions, and existing install controls. Reuse components and conventions, avoid unnecessary dependencies, and do not overwrite an existing service worker without analyzing its behavior.

## 2. Manifest and icons
Create or correct a linked web app manifest with appropriate `name`, `short_name`, `start_url`, `scope`, `display: standalone`, `theme_color`, `background_color`, and correctly typed icons. Supply 192x192 and 512x512 PNG icons, suitable maskable Android icons, Apple Touch Icon, and favicon assets as needed. Generate icons exclusively from the official approved brand logo, with appropriate padding/cropping. Never substitute a generic or AI-created logo. Check all paths and MIME types. Use HTTPS in production.

## 3. Install App action
Provide a clearly labeled, accessible Install App control in an appropriate existing navigation, mobile menu, footer or dedicated installation page. Match existing design. Do not show a broken, fake or nonfunctional native install button. Capture `beforeinstallprompt` where supported, defer it, and invoke `prompt()` only after a user click. Handle user acceptance or dismissal without nagging. Listen for `appinstalled` where supported. Detect standalone mode with `display-mode: standalone` and applicable iOS signals; avoid claiming that this always proves the app is installed on every browser. Provide helpful instructions if native prompting is unavailable.

## 4. Android
Support eligible Android browsers, native browser installation prompts where exposed, successful-install detection where available, and clear manual installation steps for other supported browsers. Never assume all Android browsers expose `beforeinstallprompt`.

## 5. iPhone and iPad
Show browser/version-appropriate instructions for using the Share or browser menu and Add to Home Screen. Explain how to confirm installation and launch from the home screen. Do not claim iOS supports automatic PWA installation or that all browser menus look alike. Respect iPad desktop-class user agents and browser differences.

## 6. Windows and macOS
Support compatible browsers such as Chrome and Edge where available and Safari where supported. Use native prompts only when offered by the browser; otherwise provide accurate browser-menu instructions. Verify standalone window behavior where supported, correct icon/name, session behavior, navigation and resizing. Never promise identical installation experiences on all platforms.

## 7. Dedicated /install page
Add a branded `/install` route using existing layout and components. Include official logo, app name, brief factual description, actionable install control when supported, device/browser-specific guidance and troubleshooting. Avoid forced redirects, intrusive overlays and app-store links unless the brand has an official app.

## 8. Offline and service worker
Register a correctly scoped service worker using framework-native or minimal existing tooling. Use conservative, versioned caching for safe static resources, with offline navigation fallback. Never indiscriminately cache authenticated HTML, private API responses, user profiles, financial data, payment flows, credentials, auth tokens or transactions. Use network-only policies for sensitive endpoints. Respect cache headers and prevent cross-user leakage. Do not claim network-dependent functions work offline.

## 9. Updates
Handle service worker lifecycle and update detection without breaking in-flight forms, transactions or sessions. When appropriate, show a nonintrusive update-available action and refresh only with safe user intent. Avoid permanently stale resources, cache poisoning and uncontrolled `skipWaiting` during critical workflows.

## 10. Security and privacy
Require production HTTPS, restrict worker scope, protect session cookies and existing authentication, avoid unnecessary permissions and third-party tracking, respect privacy/consent settings and preserve secure payment processing. Do not expose personal information in cache storage or install analytics.

## 11. Responsive experience
Preserve existing design and functionality on phones, tablets and desktops, including portrait/landscape and resized standalone windows. Respect iPhone Dynamic Island, notches, home indicators, Android system bars and safe-area CSS insets. Ensure keyboard navigation, screen-reader labels, contrast, and touch targets.

## 12. Verification and completion
Test manifest syntax and retrieval; icon and maskable rendering; HTTPS; service worker registration/scope; installation eligibility and user-gesture prompts; Android installation; iOS/iPadOS instructions; desktop install where supported; standalone detection; offline fallback; no sensitive caching; auth persistence; payments; update behavior; navigation; orientation; accessibility; and regression coverage of existing features. Use browser developer tools and automated tests where available, plus real device/browser testing when accessible.

Run the project's build and available tests. Report files added/modified, successful checks with evidence, untested platforms, known browser limitations and manual install test steps. Do not claim real-device verification when none was performed.

## Mandatory constraints
- No redesign, rebranding, logo changes, removed features, fake prompts or unsupported app-store redirects.
- Reuse existing framework, components and conventions.
- Do not change working auth, payments or third-party integrations.
- Installation is an optional user choice, not a blocking popup.
- Never use the em dash character in project copy.
- For native-only apps or projects where installability is unsuitable, mark Not Applicable with a reason rather than forcing PWA infrastructure.

## Reusable execution prompt
> Inspect this existing website and implement the NOVA PWA Installation Implementation Standard in `docs/PWA-INSTALLATION-IMPLEMENTATION.md`. Preserve all approved UI, logos, routes, authentication, payments, integrations and functionality. Add correct manifest/icons, safe service worker and offline fallback, accessible Install App controls, a branded /install page, accurate device-specific guidance, and update handling. Test the build and installation behavior as far as the environment allows. Report actual results and limitations without inventing verification.
