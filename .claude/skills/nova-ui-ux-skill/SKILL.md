---
name: nova-ui-ux-skill
description: "Production UI/UX design intelligence for web, mobile, and desktop. Use when designing, building, reviewing, or fixing interfaces, including pages, components, design systems, accessibility, interaction, responsive layout, typography, color, charts, and stack-specific UI implementation."
---

# Nova UI/UX Skill - Design Intelligence

Use this skill for UI structure, visual design decisions, interaction patterns, accessibility, responsive behavior, design systems, implementation guidance, and production-quality UX verification.

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

Use stack searches for React, Next.js, Vue, Svelte, Astro, Nuxt, Angular, Laravel, SwiftUI, React Native, Flutter, Jetpack Compose, Tailwind, shadcn/ui, Three.js, JavaFX, WPF, WinUI, Avalonia, Uno, and UWP.

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

For complete universal production requirements, read `references/production-readiness.md`.

For detailed rules, use `references/quick-reference.md` and `references/pro-rules.md`.
