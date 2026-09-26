# Nova UI/UX Skill — Design Philosophy & Toolkit

## Guiding principle

Create interfaces that feel **ultra-clean, breathable, minimal, custom-styled, and product-specific**. Avoid generic stock UI and template-looking compositions while preserving usability, accessibility, performance, platform conventions, and maintainability.

## Visual design

### Custom design systems
- Define bespoke color tokens, typography scales, spacing rhythm, radii, elevation, borders, motion, and semantic states.
- Avoid arbitrary values and cookie-cutter templates.
- Keep design tokens consistent across screens and components.

### Typography
- Use deliberate font pairing, weight contrast, tracking, display/body hierarchy, readable line lengths, and responsive type scales.
- Prefer project-approved or properly licensed fonts.
- Google Fonts are an option when appropriate.
- Never assume a premium font is licensed merely because it is available on a user's machine or design reference.

### Color
- Build tonal palettes and intentional light/dark/tinted/saturated surfaces.
- Define semantic colors for destructive, warning, success, accent, info, muted, and disabled states.
- Verify contrast and never communicate meaning through color alone.

### Imagery
- Use AI-generated imagery, curated stock photography, illustrations, or product assets when they strengthen the product.
- Define focal-point cropping and aspect ratios.
- Use responsive image sources such as `srcset` on the web where appropriate.
- Reserve image space to prevent layout shift.
- Provide meaningful alternatives for informative media.

## Layout & composition

- Use whitespace as a structural design tool.
- Build responsive grids that move naturally from narrow phones to large desktop screens.
- Use size, weight, color, position, grouping, and spacing to establish visual hierarchy.
- Define information architecture before polishing individual components.
- Use focused pages and progressive disclosure to reduce cognitive load.
- Preserve locked product decisions unless the user explicitly requests a redesign.

## Motion & interaction

- Support the motion system native to the detected stack: Framer Motion, React Native Reanimated, GSAP, CSS transitions, or platform-native animation APIs.
- Define hover, focus, pressed, loading, entrance, exit, layout, spring, modal/drawer, accordion, and page-transition states intentionally.
- Use micro-interactions to provide feedback, not decoration for its own sake.
- Skeleton loaders, progress indicators, success feedback, and optional celebration effects can improve perceived quality.
- Respect reduced-motion preferences and provide equivalent state changes without animation.

## Component craft

- Prefer accessible primitives and existing project components when they fit.
- For React/web, shadcn/ui is an optional primitive source for buttons, dialogs, dropdowns, tabs, tooltips, command palettes, and data tables.
- Build custom components when the product needs behavior or visuals that primitives cannot provide.
- Keep custom components focused, testable, and reusable.
- For forms, react-hook-form is an optional React tool for field state and validation.
- For charts, Recharts is an optional React choice when appropriate.
- For maps, react-leaflet is an optional React web choice when appropriate.
- For drag-and-drop, @hello-pangea/dnd is an optional React choice when appropriate.
- Never introduce a library solely because it appears in this document; detect the project stack first.

## Form UX

Every important form should account for:
- Labels and descriptions
- Required/optional status
- Input types and autofill
- Paste and password-manager compatibility
- Inline validation
- Server-side validation
- Disabled-while-submitting
- Loading and retry
- OTP and verification flows
- Multi-step progression
- Recovery and session expiry
- Accessible error summaries where useful

## Data visualization

Choose a chart based on the question being answered, not appearance alone. Provide loading, empty, error, no-data, tooltip/focus, responsive, and accessible states. Avoid misleading axes, unnecessary decoration, and color-only legends.

## Accessibility & polish

- Keyboard navigation and focus management are mandatory for interactive web surfaces.
- Use semantic HTML/native controls where possible.
- Provide accessible names, descriptions, states, and announcements.
- Support RTL when the product/locales require it.
- Design every data flow with intentional loading, empty, error, and recovery states.
- Use graceful fallbacks for missing media, permissions, network failures, and partial data.

## Platform-aware design

### Web
Consider touch/pointer/keyboard interaction, responsive breakpoints, browser zoom, text scaling, SEO, metadata, Open Graph, favicons, structured data where relevant, and crawlability for public pages.

### Expo / React Native
Consider safe areas, device cutouts, touch targets, platform-specific navigation, keyboard behavior, gesture handlers, reduced motion, Android/iOS differences, and native performance constraints.

### Dynamic notifications
For transient notification surfaces, consult `docs/external-patterns/EXPO-DYNAMIC-NOTIFICATIONS.md`. Use the reference as an implementation pattern, not as permission to copy third-party code without respecting its license.

## Quality bar

A polished screen is not complete until its responsive, interactive, asynchronous, accessibility, content, and failure states have been considered and the implemented result has been verified.
