# Production UI/UX Readiness — Universal Gate

Use this reference for any UI that will be implemented, shipped, tested, or handed to another agent.

## 1. Product and user contract
Establish the primary user, job-to-be-done, success action, account/role differences, permissions, destructive boundaries, target platforms, locales, and business-critical states.

## 2. Screen/state completeness
Account for loading, skeleton/progressive loading, empty, populated, partial-data, validation, inline error, API/network error, permission, forbidden, session-expired, offline/degraded, success, destructive confirmation, disabled, overflow, onboarding, and returning-user states where applicable.

## 3. Responsive behavior
Verify 320–375px, 390–430px, 768px, 1024px, 1280–1440px, and 1920px where relevant. Also verify orientation, 200% zoom, text scaling, keyboard-open mobile states, safe areas, fixed UI collisions, horizontal overflow, and mobile data/table strategies.

## 4. Accessibility
Target WCAG 2.2 AA unless a stricter documented requirement applies. Check keyboard access, visible focus, logical focus order, semantics, accessible names, labels/descriptions, error association, contrast, non-color cues, reduced motion, zoom/text scaling, dynamic announcements, gesture alternatives, meaningful media alternatives, password-manager compatibility, paste, and autofill.

## 5. Interaction state model
Where applicable define: default → hover → focus → pressed → loading → success/error → disabled. Async actions must prevent accidental duplicate submission, preserve input on recoverable failures, provide explicit retry, and leave semantic state correct even when animations are interrupted.

## 6. Forms/authentication
Define labels, types, constraints, required status, examples, client/server validation, autofill, password managers, paste, loading, success, recovery, session expiry, verification, password recovery, rate limits, and provider errors where applicable.

## 7. Real backend behavior
UI state must derive from authoritative server responses. Never replace failed calls with fake success. Distinguish optimistic from confirmed state. Handle stale/concurrent data, pagination, deleted/missing/unauthorized records, schema changes, and safe error mapping.

## 8. Localization/content resilience
Support text expansion, locale-aware numbers/dates/currencies/units/plurals, RTL readiness where relevant, missing translations, long labels, URLs, IDs, names, and user-generated content.

## 9. Performance
Reserve media dimensions, lazy-load appropriate content, virtualize genuinely large lists, paginate, control high-frequency requests, minimize blocking work, avoid unnecessary re-renders, and ensure motion does not become a bottleneck.

## 10. Motion
Animation must communicate change, context, next action, or attention. Use shared timing/easing tokens, respect reduced motion, and prefer transform/opacity over layout reflow.

## 11. Design-system integrity
Prefer existing primitive → semantic token → component variant → existing pattern before adding a new one-off style. Maintain typography, spacing, radius, elevation, motion, focus, and theme tokens.

## 12. Visual QA
Check alignment, spacing, hierarchy, wrapping, contrast, icon consistency, image cropping, responsive reflow, overflow, loading/error/empty states, themes, focus, browser/device differences, console errors, broken assets, and network failures.

## 13. Security/privacy UX
Clearly communicate permissions, confirm sensitive actions, mask sensitive values, support session/device management where relevant, and never expose secrets, tokens, stack traces, or private identifiers.

## 14. Observability
For important flows consider screen entry, conversion, validation failure, API failure, retry, success, and abandonment events while respecting privacy.

## 15. Public-web SEO
When SEO is a real requirement, verify title/meta, headings, canonical behavior, descriptive links, social metadata, icons, structured data, crawlability, and performance.

## 16. Handoff
Document source of truth, component inventory, state matrix, responsive behavior, interaction rules, accessibility requirements, API assumptions, asset/licensing notes, known limitations, and verification performed.

## 17. Definition of Done
- [ ] Design direction and tokens are intentional
- [ ] Required states are designed and implemented
- [ ] Responsive behavior is defined and checked
- [ ] Keyboard/screen-reader paths work
- [ ] Focus and contrast are verified
- [ ] Real backend states are handled
- [ ] No fake success, broken routes, or runtime errors
- [ ] No secrets are committed
- [ ] Long content and unusual data are tested
- [ ] Critical flows are tested end-to-end
- [ ] Remaining gaps are documented
