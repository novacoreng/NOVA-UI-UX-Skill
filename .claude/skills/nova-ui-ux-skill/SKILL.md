---
name: nova-ui-ux-skill
description: "Production UI/UX design intelligence for web, mobile, and desktop. Use when designing, building, reviewing, or fixing interfaces, including pages, components, design systems, accessibility, interaction, responsive layout, typography, color, charts, and stack-specific UI implementation."
---

# Nova UI/UX Skill - Design Intelligence

Use this skill for UI structure, visual design decisions, interaction patterns, accessibility, responsive behavior, design systems, implementation guidance, and production-quality UX verification.

## Nova design philosophy

Build interfaces that feel **custom, ultra-clean, breathable, intentional, and product-specific** rather than generic template UI.

Do not interpret this as permission to sacrifice usability, accessibility, performance, platform conventions, or maintainability for visual novelty. Distinctive design must remain functional.

### Visual design

- Build custom design systems with explicit color tokens, typography scales, spacing rhythm, radii, elevation, borders, motion, and semantic states.
- Avoid cookie-cutter templates and arbitrary one-off values.
- Use typography intentionally: font pairing, weight contrast, tracking, display/body hierarchy, readable line length, and responsive type scales.
- Prefer licensed/project-approved fonts. Use Google Fonts or other approved sources when appropriate; never assume a premium font is legally available.
- Apply color theory through tonal surfaces, light/dark/tinted/saturated variants, semantic colors, and accessible contrast.
- Treat imagery as part of the product system: art direction, focal-point cropping, responsive image sources, aspect ratios, loading behavior, and meaningful alternatives.
- Use generated imagery or curated photography when it strengthens the product; do not add decorative imagery merely to fill space.

### Layout and composition

- Give content breathing room. Whitespace is structural, not leftover space.
- Use responsive grids and fluid constraints from narrow phones through large desktop displays.
- Establish hierarchy through size, weight, color, position, grouping, and progressive disclosure.
- Design information architecture before polishing individual components.
- Keep pages focused and navigation predictable.
- Preserve the user's existing locked design decisions unless the user explicitly authorizes a redesign.

### Motion and interaction

- Use motion to communicate state, hierarchy, continuity, and cause/effect.
- Support Framer Motion, Reanimated, GSAP, CSS transitions, and platform-native animation systems according to the detected stack.
- Define entrance/exit, layout, spring, hover, focus, press, loading, modal/drawer, accordion, and page-transition behavior intentionally.
- Micro-interactions should provide useful feedback rather than visual noise.
- Skeletons, progress indicators, success feedback, and celebration effects such as confetti are optional enhancements and must not block core flows.
- Respect reduced-motion preferences and provide equivalent non-animated state changes.

### Component craft

- Prefer established primitives when they meet the product requirement; customize them through the design system rather than forcing generic defaults.
- For React/web projects, shadcn/ui can provide accessible primitives for buttons, dialogs, dropdowns, tabs, tooltips, command palettes, data tables, and related patterns.
- Build custom components when the product requires behavior or visual treatment that a primitive cannot provide. Keep components focused and maintainable.
- For forms, consider react-hook-form or the stack's equivalent when it improves validation, field state, performance, and maintainability.
- Support inline validation, disabled-while-submitting, server validation, OTP flows, multi-step wizards, recovery, and accessible error summaries where applicable.
- For data visualization, use the project's existing charting system; Recharts is an option for React when appropriate.
- For maps, use the project's established mapping library; react-leaflet is an option for React web projects when appropriate.
- For drag-and-drop, use a maintained accessible library or platform primitive; @hello-pangea/dnd is one option for React projects where its model fits.
- Do not introduce a dependency merely because it is listed here. Detect the stack and choose the smallest appropriate tool.

### Accessibility and polish

- Keyboard navigation and focus management are first-class requirements.
- Use semantic elements, accessible names, descriptions, labels, roles, states, and announcements.
- Never rely on color alone to communicate state.
- Every data flow needs an intentional loading, empty, error, and recovery experience; never leave a blank screen when the user needs feedback.
- Support graceful fallbacks for missing media, network failures, permissions, and partial data.
- Support RTL layouts when the product requires Arabic, Hebrew, or another RTL locale.

### Platform-aware behavior

- Design touch targets, safe areas, bottom sheets, swipe gestures, keyboard behavior, and mobile navigation intentionally.
- For web projects, verify SEO and metadata requirements when public discovery matters: page titles, descriptions, canonical behavior, Open Graph, favicons, structured data where applicable, and crawlability.
- For Expo/React Native, account for platform differences rather than assuming web CSS behavior maps directly to native.
- For transient notification surfaces and Dynamic Island-style UI, consult `docs/external-patterns/EXPO-DYNAMIC-NOTIFICATIONS.md` when relevant.

## Production-quality rule

For real applications, treat UI as a product contract between the user, frontend, backend, device, and accessibility technology.

**Required:** read `references/production-readiness.md` for implementation work, redesigns, production fixes, or final QA.

The implementation must account for complete UI states, real backend behavior, responsive behavior, accessibility, localization, performance, security/privacy UX, visual QA, design-system integrity, and an explicit Definition of Done.

Never mark a screen finished because it looks correct in one screenshot.

## Workflow

### 1. Analyze requirements

Extract:
- Product type and user context
- Primary success action
- Authentication/account/role differences
- Data ownership and permissions
- Platforms, browsers, devices, locales, and input methods
- Business-critical states
- Existing product decisions that must be preserved

Detect the implementation stack from the repository. Never silently assume a stack.

### 2. Build a product state matrix

For each critical surface, account for applicable:
- Loading
- Empty
- Populated
- Partial data
- Validation
- Error
- Permission/forbidden
- Session expired
- Offline/degraded
- Success
- Disabled
- Destructive confirmation
- Long/overflow
- First-use/returning-user

### 3. Generate a coherent design system

For new pages or projects, use the local search engine with `--design-system`.

```bash
python "${CLAUDE_PLUGIN_ROOT}/.claude/skills/nova-ui-ux-skill/scripts/search.py" "<product> <industry> <keywords>" --design-system
```

Persist project decisions only with explicit output paths. Existing Master design-system decisions are the source of truth unless the user authorizes replacement.

### 4. Supplement with targeted searches

Use explicit domains for focused questions:

- `product` — product patterns
- `style` — visual style
- `color` — palette
- `typography` — font pairing
- `google-fonts` — font selection
- `chart` — data visualization
- `ux` — UX/accessibility
- `landing` — page structure
- `icons` — icon guidance
- `gsap` — motion
- `react` — React performance
- `web` — app/native/web implementation guidance

Use stack searches for React, Next.js, Vue, Svelte, Astro, Nuxt, Angular, Laravel, SwiftUI, React Native, Expo, Flutter, Jetpack Compose, Tailwind, shadcn/ui, Three.js, JavaFX, WPF, WinUI, Avalonia, Uno, and UWP.

For Expo/React Native transient notification surfaces, consult `docs/external-patterns/EXPO-DYNAMIC-NOTIFICATIONS.md` when the project needs Dynamic Island-style overlays, gesture-dismissible cards, native blur/Skia effects, or animation choreography.

### 5. Apply production gates

Before completion:
1. Run available build/type/lint/test checks.
2. Verify critical flows against real or configured backend services.
3. Inspect narrow mobile, tablet, desktop, and wide desktop layouts.
4. Exercise loading, empty, error, permission, success, disabled, and long-content states.
5. Verify keyboard/focus and screen-reader semantics for critical interactions.
6. Check reduced motion, zoom/text scaling, and localization-sensitive layouts.
7. Check console/runtime errors, routes, assets, and network failures.
8. Confirm no secrets/private implementation details are exposed.
9. Reuse design tokens/components instead of arbitrary patches.
10. Record remaining limitations.

Never claim checks that were not actually performed.

## Search behavior

Use the smallest search mode that fits the task. For a new system use `--design-system`; for a targeted issue use one explicit domain; for implementation use the detected stack.

Use 2–5 meaningful terms and one useful constraint. If a search returns zero results, retry once with a narrower query or explicit domain/stack. Do not fabricate database matches.

For accessibility, search the observable outcome first, then component-specific and stack-specific implementation guidance.

For compact UI/text bugs, search the semantic UX outcome first, then the detected stack.

## Universal principles

- Prefer semantic HTML/native controls.
- Preserve visible focus.
- Never rely on color alone.
- Minimum practical touch target: 44×44px.
- Design for keyboard, touch, pointer, and screen readers.
- Respect reduced motion.
- Prevent layout shift.
- Design long/translated content intentionally.
- Do not fake successful backend operations.
- Keep authoritative state on the server when data is critical.
- Protect sensitive data and never expose secrets.
- Reuse design tokens and component variants.
- Test the rendered product, not only source code.
- Never use emoji as interface icons when a proper icon system is available.
- Do not force a preferred library when the project's existing stack provides a better fit.

For complete universal production requirements, read `references/production-readiness.md`.

For detailed rules, use `references/quick-reference.md` and `references/pro-rules.md`.
