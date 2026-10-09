---
name: nova-ui-ux-skill
description: "Master UI/UX engineering intelligence for web, mobile, desktop, immersive 3D, motion, advanced visual effects, design systems, accessibility, responsive behavior, and production implementation."
---

# Nova UI/UX Skill — Master Design & UI Engineering System

Nova is a master UI/UX engineering system. It combines product reasoning, visual design, component architecture, motion, accessibility, responsive systems, advanced rendering, platform-aware implementation, and production verification.

The objective is not generic UI. Build interfaces that are custom, ultra-clean, breathable, intentional, product-specific, technically sound, and maintainable.

## Master build workflow

### 0. Read the PRD/TRD first

Extract product goals, users, roles, critical journeys, business rules, data model, platform targets, technical stack, performance constraints, accessibility requirements, SEO requirements, and brand constraints.

### 1. Ask for visual direction when appropriate

If the PRD/TRD does not already lock the visual language and multiple directions fit, ask the user which applicable direction should lead:

- Clean Premium
- Liquid Glass
- 3D/WebGL
- Shader Gradient
- Scroll World
- Liquid Identity
- Hybrid

Only present directions that fit the actual product. Explain the trade-offs briefly. Once chosen, record the decision as part of the Master design system.

### 2. Build the design system

Define color tokens, typography, spacing, grid, radius, elevation, borders, iconography, component variants, states, motion, imagery, themes, responsive breakpoints, accessibility rules, and content constraints.

### 3. Build the state system

Every important surface must account for loading, empty, populated, partial, validation, error, forbidden, session-expired, offline/degraded, success, disabled, destructive confirmation, overflow, first-use, and returning-user states where applicable.

### 4. Build the component system

Prefer semantic primitives and reusable variants. Keep custom components focused. Do not duplicate visually identical components under different names.

### 5. Build advanced visual systems only where justified

Nova contains independent implementations for:

- 3D scene composition
- liquid glass surfaces
- shader gradients
- scroll-driven cinematic worlds
- liquid identity/material effects
- dynamic transient notifications
- motion tokens and reduced-motion behavior

See `src/nova-ui-ux/` and `docs/NOVA-ADVANCED-VISUAL-SYSTEM.md`.

### 6. Adapt to the target platform

Detect the actual stack. For web, consider semantic HTML, CSS, SSR/SEO, hydration and browser capability. For Expo/React Native, account for native navigation, safe areas, gestures, platform differences, GPU limits and iOS/Android behavior. For desktop, account for window size, keyboard/mouse interaction and high-density layouts.

### 7. Production gate

Run build/type/lint/test checks available in the project. Verify real routes and APIs, responsive layouts, state coverage, keyboard/focus behavior, reduced motion, long content, localization, runtime errors, network failures, asset loading, performance and security/privacy UX.

Never claim a check was performed if it was not.

## Advanced visual engineering rules

### 3D/WebGL
Use scene graphs, camera state, object state, controlled render loops, pointer interaction, responsive canvas sizing, bounded device pixel ratio, lazy assets and GPU-aware fallbacks. Prefer demand rendering for mostly static scenes. Keep DOM UI controls outside the canvas when semantic interaction is possible.

### Liquid Glass
Treat glass as a bounded surface with shape, tint, opacity, blur, saturation, brightness, border, shadow, refraction, dispersion and distortion parameters. Support nested surfaces. Keep foreground text stable and readable. Provide a non-WebGL CSS fallback.

### Shader Gradient
Treat the shader as a configurable visual layer with geometry, colors, speed, strength, density, frequency, amplitude, rotation, camera, lighting, reflection, grain, transparency and pixel-density parameters. Pause or simplify when off-screen or under reduced-motion constraints.

### Scroll World
Model the experience as a sequence of scenes. Each scene has a narrative purpose, camera state, focal object, duration, assets, lighting, desktop composition, mobile composition, transition seam and fallback. Use smooth scroll progress, scene-local progress and continuous camera interpolation. Do not merely crop desktop cinematic composition for mobile.

### Liquid Identity
Preserve the canonical mark while animating material properties such as metallic response, roughness, highlights, distortion, fluidity, reflection and grain. Use identity effects as intentional brand moments, not as decoration everywhere.

### Dynamic Notifications
Use a state machine with queueing, priority, replacement, enter/visible/exit lifecycle, timers, dismissal, action callbacks, safe-area positioning, gesture support, interruption handling, accessibility announcements and reduced-motion behavior.

## Accessibility

Target WCAG 2.2 AA unless a stricter project requirement exists. Use semantic structure, accessible names, keyboard access, visible focus, logical focus order, associated errors, contrast, non-color cues, reduced motion, text scaling, zoom support, gesture alternatives and dynamic announcements.

## Universal principles

- Do not use visual effects to compensate for weak information architecture.
- Never fake backend success.
- Keep authoritative data state separate from animation state.
- Prevent duplicate async submissions.
- Preserve user input on recoverable failures.
- Use server state for business-critical information.
- Keep touch targets practical and accessible.
- Prevent layout shift.
- Design for long translations and user-generated content.
- Provide graceful fallbacks for unsupported browser/device capabilities.
- Respect reduced motion.
- Lazy-load expensive media and rendering surfaces.
- Cap GPU workload and device pixel ratio.
- Reuse tokens rather than adding arbitrary one-off values.
- Never expose secrets, tokens or internal diagnostics.
- Never use emoji as interface icons when a proper icon system is available.
- Do not introduce a dependency unless it solves a real project requirement.
- Test the rendered product, not only source code.

## Source-of-truth

Nova-owned implementations live under `src/nova-ui-ux/`. Detailed system contracts live under `docs/`. Historical external repository pointers are not runtime dependencies and must not be imported by new projects.

## Mandatory privacy and consumer protection gate

For every build, read `docs/PRIVACY-CONSUMER-PROTECTION-GATE.md` during PRD/TRD analysis and before production sign-off. Never implement spam marketing, missing opt-outs, leaky analytics, unnecessary biometric collection, missing privacy notices, unsafe children's data processing, fabricated reviews, obstructive subscription cancellation, or false AI/engagement claims. Verify server-side enforcement and request jurisdiction-specific legal review when necessary.

## Mandatory legal, privacy, accessibility and trust launch checklist

Read and enforce `docs/LEGAL-PRIVACY-ACCESSIBILITY-LAUNCH-CHECKLIST.md` for every applicable Nova project. Audit privacy policies, genuine reviews, terms, substantiated claims, refund policies, image alt text, cookies and consent, contrast, keyboard support, form consents, real business details, data minimization, children's data, third-party SDKs, unsubscribe, dark patterns, font/image licenses, transparent fees and data deletion requests. Record Pass/Fail/Not Applicable/Needs Legal Review with evidence before launch. Do not certify legal compliance or invent business/legal details. Never use the em dash character in generated project content.
