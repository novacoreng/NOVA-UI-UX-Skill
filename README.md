# Nova UI/UX Skill

An AI skill for professional UI/UX design, implementation guidance, accessibility, responsive behavior, design systems, advanced visual effects, and production-quality interface verification.

## Core capabilities

Nova combines a production UI/UX workflow with reference patterns for:

- Custom design systems, typography, color, imagery, layout and information architecture
- Responsive web and native/mobile UX
- Accessibility, localization, forms, backend states and production QA
- 3D/WebGL and React Three Fiber patterns
- Liquid Glass and refractive surface patterns
- Shader Gradient and ambient shader systems
- Scroll-driven cinematic worlds
- Liquid/shader identity treatments
- Expo/React Native interaction and dynamic-notification patterns
- Stack-appropriate motion systems
- Production readiness and Definition-of-Done gates

> **Package status:** the earlier reference package contained larger searchable catalogs and assets. The current GitHub repository contains the Nova workflow/reference layer and is **not yet a byte-for-byte mirror of that historical package**. See `docs/AUDIT-2026-09-27.md`.

## PRD/TRD design checkpoint

Before a significant build, Nova reads the PRD/TRD and identifies the visual directions that actually fit the product. When multiple directions are valid, Nova asks which design language should lead before locking the design system.

Possible directions: **Clean Premium, Liquid Glass, 3D/WebGL, Shader Gradient, Scroll World, Liquid Identity, or Hybrid**.

See `docs/PRD-TRD-DESIGN-SELECTION.md`, `docs/EXTERNAL-REFERENCE-COVERAGE.md`, and `docs/EXTERNAL-REFERENCE-MATRIX.md`.

## Quick integration prompts

### Full workflow
> **Use Nova UI/UX Skill for this build. Read the PRD/TRD, existing design system, and repository first. Build the UI/UX, implementation, responsive states, accessibility, backend states, and production QA using the full Nova workflow.**

### Visual direction
> **Read the PRD/TRD and propose the relevant visual directions before building. Ask me which direction to use if more than one fits: Clean Premium, Liquid Glass, 3D/WebGL, Shader Gradient, Scroll World, Liquid Identity, or Hybrid.**

### Design system
> **Create a Nova Master Design System: colors, semantic tokens, typography, spacing, radii, elevation, borders, components, states, motion, icons, imagery, responsive rules, themes, and accessibility.**

### 3D/WebGL
> **Use Nova 3D/WebGL guidance. Evaluate React Three Fiber or another appropriate renderer, define the scene, interactions, performance budget, responsive behavior, accessibility fallback, loading strategy, and dependency compatibility before implementation.**

### Liquid Glass
> **Apply Nova Liquid Glass guidance selectively. Use translucency, refraction, blur, tint and depth only where useful, while preserving contrast, focus, touch targets, reduced motion, fallbacks and performance.**

### Shader Gradient
> **Use Nova shader-gradient guidance for an intentional animated background or hero layer. Control speed, strength, density, pixel density and camera/light settings, keep content readable, lazy-load heavy rendering, respect reduced motion, and provide a fallback.**

### Scroll World
> **Use Nova Scroll World guidance. Map the PRD journey into scenes, choose camera language, require frame-identical seams, budget the media pipeline, and create a deliberate mobile composition instead of simply cropping desktop.**

### Liquid Identity
> **Use Nova Liquid Identity guidance. Preserve the canonical logo and legibility, use shader/liquid animation as an enhancement, provide a static fallback, and check asset licensing.**

### Expo/React Native
> **Use Nova Expo/React Native guidance. Make the experience platform-aware with safe areas, touch targets, gestures, keyboard behavior, native-feeling navigation, animation, loading/error states and performance-aware rendering.**

### Dynamic notifications
> **Use Nova Dynamic Notification guidance for transient overlays, Dynamic Island-style surfaces, queues, gestures, animation lifecycle, safe areas, accessibility and reduced-motion behavior.**

### Responsive audit
> **Run the Nova responsive audit across narrow mobile, large mobile, tablet, desktop and wide desktop. Fix overflow, wrapping, spacing, navigation, fixed/sticky collisions, keyboard-open states, safe areas and long-content behavior.**

### Accessibility audit
> **Run the Nova accessibility audit. Check semantics, keyboard navigation, focus management, accessible names, ARIA, contrast, non-color states, reduced motion, text scaling, screen readers, forms, errors and gesture alternatives.**

### Complete states
> **Apply Nova state-completeness rules to every important data flow: loading, skeleton, empty, populated, partial, validation, error, retry, permission, session expiry, offline/degraded, success, disabled, destructive confirmation and long-content states where applicable.**

### Backend UX
> **Apply Nova backend-state UX rules. Use authoritative server state, handle loading/error/retry/pagination/stale data/concurrency/permissions, preserve user input on recoverable failures, and never show fake success.**

### Performance
> **Run a Nova performance UX pass. Check layout shift, media sizing, lazy loading, virtualization, pagination, request frequency, unnecessary re-renders, animation cost, WebGL/GPU cost, memory and mobile battery impact.**

### Production QA
> **Run the full Nova production-readiness check before calling this build complete. Verify critical flows, responsive layouts, accessibility, UI states, backend behavior, assets/routes, runtime errors, security/privacy UX, performance and remaining limitations.**

### Preserve approved design
> **Treat the existing approved design/reference as the Nova source of truth. Do not change structure, placement, navigation, visual language or locked components unless I explicitly request a redesign.**

### Build from PRD/TRD
> **Read the PRD/TRD completely before implementation. Convert requirements into information architecture, user flows, state matrices, design-system decisions, component inventory, responsive rules, accessibility requirements, technical constraints and a phased implementation plan. Ask about unresolved visual-direction choices before locking the UI.**

### Audit Nova itself
> **Audit the Nova UI/UX Skill repository line by line. Check every referenced path, package metadata, README claim, external-reference coverage, broken link, missing script, duplicate rule and stale instruction. Fix all issues, run available validation, and commit the corrections.**

## Recommended one-line prompt

> **Use the Nova UI/UX Skill for this build. Read the PRD/TRD and existing repo first, identify the appropriate design direction and ask me to choose when needed, then implement the approved design with complete states, responsive behavior, accessibility, real backend behavior, performance and production QA.**

## Skill location

`.claude/skills/nova-ui-ux-skill/`
