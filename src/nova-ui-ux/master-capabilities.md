# Nova Master UI/UX Capability Matrix

Nova is a complete product-interface engineering system. Every build should combine the capabilities below according to the PRD/TRD rather than treating visual polish as the whole skill.

## 1. Product intelligence
- Parse PRD/TRD into users, jobs, permissions, entities, journeys, success actions, constraints and acceptance criteria.
- Identify platform, viewport, input method, network, authentication and backend dependencies.
- Generate route map, information architecture, component inventory and state matrix before implementation.
- Identify which visual systems are appropriate and ask the user to choose when multiple valid directions exist.

## 2. Design system
- Semantic color tokens, surfaces, borders, focus, status and data-viz palettes.
- Typography families, scale, weight, tracking, line-height, numerals and content hierarchy.
- Spacing rhythm, sizing, radii, elevation, z-index, density and motion tokens.
- Light, dark, tinted, high-contrast and system-theme variants.
- Component variants and states must be token-driven.

## 3. Layout and information architecture
- Responsive grid, container, stack, cluster, sidebar, split-view, dashboard, master-detail and full-bleed patterns.
- Progressive disclosure and focused navigation.
- Mobile bottom navigation, desktop side navigation, command palettes, breadcrumbs and contextual actions.
- Safe-area, keyboard, orientation, browser zoom and text scaling handling.

## 4. Component engineering
- Buttons, links, inputs, selects, comboboxes, checkboxes, radios, switches, sliders, date/time controls.
- Dialogs, drawers, sheets, popovers, menus, tooltips, toasts, banners and confirmation flows.
- Tables, lists, cards, trees, timelines, calendars, tabs, accordions and command interfaces.
- Skeleton, empty, error, success, partial and disabled states.
- Form validation, OTP, password/reset, multi-step wizards and autosave.

## 5. Advanced visual systems
- 2D premium UI.
- Liquid glass and layered translucent surfaces.
- Procedural shader gradients and ambient canvases.
- 3D/WebGL scenes, product viewers and spatial interfaces.
- Scroll-driven cinematic worlds and scene timelines.
- Liquid/metallic identity treatments.
- Dynamic notification and transient-surface systems.
- Effects are progressive enhancement and never replace usable information architecture.

## 6. Motion
- Spring, tween, keyframe and gesture models.
- Enter/exit/layout transitions, shared-element concepts, page transitions and modal choreography.
- Hover, press, focus, drag, swipe, pull, loading and progress feedback.
- Animation cancellation and interruption recovery.
- Reduced-motion and low-power modes.

## 7. Accessibility
- Semantic HTML/native semantics.
- Keyboard navigation and roving focus where appropriate.
- Focus trapping/restoration for overlays.
- Screen-reader names, descriptions, errors and announcements.
- WCAG 2.2 AA-oriented contrast and non-color cues.
- Touch target sizing, gesture alternatives and motion safety.
- RTL and bidirectional text.

## 8. Data and backend UX
- Loading, stale, empty, partial, optimistic, conflict, retry, offline and degraded states.
- Pagination, cursor loading, virtualization and infinite scrolling.
- Filters, search, sort, bulk actions and saved views.
- Real server state; never fabricate success or balances.
- Permission-aware UI and session-expiry handling.

## 9. Data visualization
- Charts, KPI cards, sparklines, tables and geographic maps.
- Correct scales, legends, units, tooltips and accessible summaries.
- Responsive chart resizing and data-density adaptation.
- Empty/error/loading states and downloadable data when required.

## 10. Media and imagery
- Image art direction, focal-point cropping, responsive sources and aspect-ratio stability.
- Video poster, preload policy, captions and reduced-motion alternatives.
- SVG/icon strategy, optimization and semantic labels.
- AI-generated imagery may be used only where it supports the product narrative.

## 11. Internationalization
- Translation keys rather than hard-coded UI copy.
- Plurals, dates, numbers, currencies and time zones.
- Text expansion, long names, long URLs and user-generated content.
- RTL mirroring and locale-specific interaction conventions.

## 12. Platform systems
- Web, Next.js, React, React Native, Expo, iOS, Android and desktop adaptations.
- Native-feeling gestures, safe areas, haptics where available, keyboard handling and platform conventions.
- SSR/SEO metadata and Open Graph on web.
- Graceful feature detection and fallbacks.

## 13. Performance
- Route/code splitting, lazy loading and prefetching.
- Virtualization and pagination for large datasets.
- Image/video optimization and layout-shift prevention.
- GPU-aware rendering, DPR limits and demand rendering for WebGL.
- Effect budgets for blur, filters, shadows, shaders and canvases.
- Avoid unnecessary renders, listeners, timers and network requests.

## 14. Security and privacy UX
- Never expose secrets, tokens, stack traces or internal IDs unnecessarily.
- Explicit permissions and consent.
- Safe destructive actions and recovery.
- Sensitive-data masking and clipboard/share considerations.
- Authentication, authorization and session-state UX.

## 15. QA and delivery
- Route verification, visual regression, interaction tests and accessibility checks.
- Test critical flows on representative viewport/device classes.
- Verify console/network errors, broken assets, focus order and degraded states.
- Document known limitations and unresolved assumptions.
- Do not call a build production-ready until the Definition of Done is satisfied.

## 16. Five-source functionality coverage
The Nova rewrite incorporates the observable engineering concepts that matter from the five requested systems: declarative 3D composition and render control; glass/refraction and layered surfaces; cinematic scroll scene sequencing and mobile-specific composition; shader-based liquid identity; and configurable procedural shader gradients. These are implemented as Nova-owned contracts rather than copied source.
