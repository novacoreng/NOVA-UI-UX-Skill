# Nova UI/UX Skill

An AI skill for professional UI/UX design, implementation guidance, accessibility, responsive behavior, design systems, advanced visual effects, and production-quality interface verification.

## Core capabilities

- 79 searchable UI styles
- 192 product palettes and reasoning profiles
- 74 typography pairings
- 119 UX guidelines
- 105 curated icons
- 17 GSAP presets
- 25 chart types
- 22 technology-stack guides
- Custom design-system and visual-direction guidance
- 3D/WebGL, React Three Fiber, shader, liquid-glass, liquid-identity, and scroll-world patterns
- Expo/React Native interaction and dynamic-notification patterns
- Production readiness and Definition-of-Done gates
- Responsive, accessibility, localization, backend-state, performance, security, and visual-QA guidance

## Production rule

A UI is not complete because it looks correct in one screenshot. Nova UI/UX Skill requires complete state coverage, real backend behavior, responsive verification, accessibility, content resilience, performance, security/privacy UX, and explicit verification before work is considered finished.

## PRD/TRD design checkpoint

Before a significant build, Nova reads the PRD/TRD and identifies the visual directions that actually fit the product. When multiple directions are valid, Nova asks which design language should lead before locking the design system.

Possible directions include **Clean Premium, Liquid Glass, 3D/WebGL, Shader Gradient, Scroll World, Liquid Identity, or Hybrid**. The skill does not force these effects; it selects them according to the PRD/TRD, platform, performance budget, accessibility, and product goals.

See:
- `docs/PRD-TRD-DESIGN-SELECTION.md`
- `docs/EXTERNAL-REFERENCE-MATRIX.md`
- `docs/NOVA-DESIGN-PHILOSOPHY.md`
- `docs/PRODUCTION-READINESS.md`

## Quick integration prompts

Use these short prompts in a build request when you want Nova to activate a specific part of the skill.

### 1. Activate the full Nova workflow

> **Use Nova UI/UX Skill for this build. Read the PRD/TRD, existing design system, and repository first. Build the UI/UX, implementation, responsive states, accessibility, backend states, and production QA using the full Nova workflow.**

### 2. Ask for the right visual direction

> **Read the PRD/TRD and propose the relevant visual directions before building. Ask me which direction to use if more than one fits: Clean Premium, Liquid Glass, 3D/WebGL, Shader Gradient, Scroll World, Liquid Identity, or Hybrid.**

### 3. Add a complete design system

> **Create a Nova Master Design System for this project: colors, semantic tokens, typography, spacing, radii, elevation, borders, components, states, motion, icons, imagery, responsive rules, dark/light themes, and accessibility rules.**

### 4. Upgrade an existing UI

> **Audit the existing UI with Nova UI/UX Skill. Keep approved product structure and functionality, then improve hierarchy, spacing, typography, color, components, states, responsiveness, accessibility, and visual consistency without introducing unnecessary redesign.**

### 5. Add advanced visual effects

> **Based on the PRD/TRD, identify where advanced visuals could improve the experience. Recommend only relevant options from 3D/WebGL, Liquid Glass, Shader Gradient, Scroll World, Liquid Identity, or Hybrid, then wait for my choice before locking the effect.**

### 6. Add 3D/WebGL

> **Use Nova's 3D/WebGL guidance for this feature. Evaluate whether React Three Fiber or another stack-appropriate renderer is justified, define the 3D scene, interaction, performance budget, responsive behavior, accessibility fallback, and loading strategy before implementation.**

### 7. Add Liquid Glass

> **Apply Nova Liquid Glass guidance selectively to the surfaces that benefit from translucency, refraction, blur, tint, and depth. Keep text contrast, focus states, touch targets, reduced motion, and low-performance fallbacks intact.**

### 8. Add Shader Gradient / ambient visuals

> **Use Nova shader-gradient guidance to create an intentional animated background or hero layer. Keep content readable, control speed/intensity, respect reduced motion, lazy-load heavy rendering, and provide a graceful fallback.**

### 9. Add cinematic scroll storytelling

> **Use Nova Scroll World guidance for this landing/product story. Map the PRD journey into scenes, define camera and transition language, plan assets and performance, and create a deliberate mobile composition instead of simply cropping desktop.**

### 10. Add liquid/animated branding

> **Use Nova Liquid Identity guidance for the brand moment. Preserve the canonical logo and legibility, and treat shader/liquid animation as an enhancement rather than replacing the core identity.**

### 11. Add Expo/React Native polish

> **Use Nova Expo/React Native guidance. Make the experience platform-aware with native-feeling navigation, safe areas, touch targets, gestures, keyboard behavior, animation, loading/error states, and performance-aware rendering.**

### 12. Add dynamic notifications

> **Use Nova Dynamic Notification guidance for transient notifications, floating overlays, Dynamic Island-style surfaces, queues, gestures, animation lifecycle, safe areas, and reduced-motion/accessibility behavior.**

### 13. Make it responsive

> **Run the Nova responsive audit across narrow mobile, large mobile, tablet, desktop, and wide desktop. Fix overflow, wrapping, spacing, navigation, fixed/sticky collisions, keyboard-open states, safe areas, and long-content behavior.**

### 14. Make it accessible

> **Run the Nova accessibility audit. Check semantics, keyboard navigation, focus management, accessible names, ARIA, contrast, non-color states, reduced motion, text scaling, screen readers, forms, errors, and gesture alternatives.**

### 15. Complete all UI states

> **Apply Nova's state-completeness rules to every important data flow: loading, skeleton, empty, populated, partial, validation, error, retry, permission, session expiry, offline/degraded, success, disabled, destructive confirmation, and long-content states where applicable. Never leave a blank screen.**

### 16. Connect real backend behavior

> **Apply Nova backend-state UX rules. Use authoritative server state, handle loading/error/retry/pagination/stale data/concurrency/permissions, preserve user input on recoverable failures, and never show fake success.**

### 17. Performance pass

> **Run a Nova performance UX pass. Check layout shift, media sizing, lazy loading, virtualization, pagination, request frequency, unnecessary re-renders, animation cost, WebGL/GPU cost, memory, and mobile battery impact.**

### 18. Production QA / Definition of Done

> **Run the full Nova production-readiness check before calling this build complete. Verify critical flows, responsive layouts, accessibility, UI states, backend behavior, assets/routes, console/runtime errors, security/privacy UX, performance, and remaining limitations.**

### 19. Preserve an approved design

> **Treat the existing approved design/reference as the Nova source of truth. Do not change structure, placement, navigation, visual language, or locked components unless I explicitly request a redesign. Improve implementation quality around the approved direction.**

### 20. Build from a PRD/TRD

> **Read the PRD/TRD completely before implementation. Convert its requirements into information architecture, user flows, state matrices, design-system decisions, component inventory, responsive rules, accessibility requirements, technical constraints, and a phased implementation plan. Ask me about unresolved visual-direction choices before locking the UI.**

## Recommended one-line prompt

For most projects, this is enough:

> **Use the Nova UI/UX Skill for this build. Read the PRD/TRD and existing repo first, identify the appropriate design direction and ask me to choose when needed, then implement the approved design with complete states, responsive behavior, accessibility, real backend behavior, performance, and production QA.**

## Skill location

The primary Claude skill is:

`.claude/skills/nova-ui-ux-skill/`

See `.claude/skills/nova-ui-ux-skill/SKILL.md` for the workflow and searchable guidance.
