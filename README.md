# Nova UI/UX Skill

An AI skill for professional UI/UX design, implementation guidance, accessibility, responsive behavior, design systems, advanced visual effects, debugging, and production-quality interface verification.

## Core capabilities

Nova combines a production UI/UX workflow with reference patterns for:

- Custom design systems, typography, color, imagery, layout and information architecture
- Responsive web and native/mobile UX
- Accessibility, localization, forms, backend states and production QA
- Recurring debugging and deployment-failure diagnosis patterns
- 3D/WebGL and React Three Fiber patterns
- Liquid Glass and refractive surface patterns
- Shader Gradient and ambient shader systems
- Scroll-driven cinematic worlds
- Liquid/shader identity treatments
- Expo/React Native interaction and dynamic-notification patterns
- Stack-appropriate motion systems
- Production readiness and Definition-of-Done gates
- Complete production app icon, favicon, PWA, iOS and social-branding setup

## Debugging knowledge

Nova includes reusable debugging lessons from prior application builds in `docs/DEBUGGING-KNOWLEDGE.md`. The debugging workflow covers Vercel/Next.js, monorepos, Supabase, environment variables, OpenAI server boundaries, Expo/React Native/Android, Gradle/JDK, CI/package management, API/backend integration, payments, ORM/database failures, UI runtime issues and visual debugging.

**Debugging rule:** never claim a fix is complete from source edits alone. Trace the root cause, validate the relevant build/runtime behavior, inspect deployment output when applicable, and record recurring lessons.

> **Package status:** the earlier reference package contained larger searchable catalogs and assets. The current GitHub repository contains the Nova workflow/reference layer and is **not yet a byte-for-byte mirror of that historical package**. See `docs/AUDIT-2026-09-27.md`.

## PRD/TRD design checkpoint

Before a significant build, Nova reads the PRD/TRD and identifies the visual directions that actually fit the product. When multiple directions are valid, Nova asks which design language should lead before locking the design system.

Possible directions: **Clean Premium, Liquid Glass, 3D/WebGL, Shader Gradient, Scroll World, Liquid Identity, or Hybrid**.

See `docs/PRD-TRD-DESIGN-SELECTION.md`, `docs/EXTERNAL-REFERENCE-COVERAGE.md`, and `docs/EXTERNAL-REFERENCE-MATRIX.md`.

## Mandatory app icon & branding requirement

**Every website/app generated with Nova must have a complete, production-ready application icon and branding setup by default. A favicon alone is never considered complete.**

Before declaring a project complete, Nova must:

1. **Identify the framework first** — Next.js, React/Vite, Vue, Angular, plain HTML/CSS/JS, React Native/Expo, or another stack — and use that framework's actual conventions rather than creating unused files.
2. **Configure desktop favicons** with at least `favicon.ico`, `favicon-16x16.png`, and `favicon-32x32.png` where the target platform supports browser favicon files.
3. **Configure iOS Home Screen branding** with `apple-touch-icon.png` at approximately 180×180 and the correct Apple Touch Icon metadata. Do not rely only on SVG/favicon assets for iOS.
4. **Configure Android/PWA branding** when the site functions as a web app, including a valid web manifest with `name`, `short_name`, `description`, `start_url`, `display: standalone`, `theme_color`, `background_color`, and icons including at least 192×192 and 512×512 PNG assets. Provide `any`/`maskable` purposes where appropriate.
5. **Configure document/head metadata** for favicon, Apple Touch Icon, theme color, mobile-web-app-capable, Apple mobile-web-app-capable, Apple status-bar style, Apple web-app title, and manifest reference as applicable to the framework.
6. **Configure social sharing** with Open Graph `og:title`, `og:description`, `og:image`, `og:url`, `og:type`, and `og:site_name`, plus Twitter/X card, title, description and image metadata. Prefer a 1200×630 social image.
7. **Use the project's actual approved brand/logo.** Never invent a replacement logo when a project logo exists. Preserve proportions, safe padding, legibility and transparent-background variants.
8. **Organize assets clearly** using the framework's public/static convention. A typical web structure is `/public/icons/` for icon files, `/public/images/` for social assets, and `/public/manifest.webmanifest` for the manifest.
9. **Verify the actual implementation**, not just the source files: browser favicon, iOS Home Screen icon, Android/PWA icon, manifest loading, HTTP 200 icon paths, social metadata, social image, application name, and absence of conflicting favicon/manifest declarations.
10. **Do not finish with a claim that icons were added unless the wiring was actually inspected and verified.**

## Quick integration prompts

### Full workflow
> **Use Nova UI/UX Skill for this build. Read the PRD/TRD, existing design system, and repository first. Build the UI/UX, implementation, responsive states, accessibility, backend states, branding/icon setup, debugging validation, and production QA using the full Nova workflow.**

### Debugging
> **Run the Nova debugging workflow. Read the complete error/build/runtime logs, identify the first root-cause failure, inspect the affected dependency/import/configuration chain, make the smallest correct fix, run available validation and production build checks, verify the deployed behavior, and document any reusable debugging lesson. Do not claim success without verification.**

### Vercel/Next.js
> **Debug the complete Vercel/Next.js log from the first actionable error. Check framework detection, workspace/install topology, aliases, client/server boundaries, Suspense requirements, environment variables, API routes, build output and generated routes. Fix the root cause, rebuild, then verify deployment behavior.**

### Expo/Android
> **Debug the Expo/React Native/Android failure by separating Java/JDK, Android SDK, Gradle, dependency, network, native configuration and application-code failures. Verify the compatible toolchain before changing source code, then rebuild and test the affected flow.**

### Supabase/API
> **Trace the Supabase/API failure end-to-end: environment variables, browser/server boundary, auth, authorization, CORS, request payload, server validation, database/provider configuration and response handling. Fix the earliest root cause and verify both API and UI behavior.**

### Production QA
> **Run the full Nova production-readiness check before calling this build complete. Verify critical flows, responsive layouts, accessibility, UI states, backend behavior, assets/routes, runtime errors, debugging regressions, security/privacy UX, performance and remaining limitations.**

## Skill location

`.claude/skills/nova-ui-ux-skill/`
