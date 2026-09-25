# Nova UI/UX Skill — Production Readiness

A production UI is more than a visual composition. Nova UI/UX Skill treats the interface as a contract between the user, frontend, backend, device, browser, accessibility technology, and product rules.

## Required gates

1. Product/user contract and permissions.
2. Complete state matrix: loading, empty, populated, partial, validation, error, forbidden, session expiry, offline/degraded, success, disabled, destructive confirmation, overflow, onboarding and returning-user states as applicable.
3. Responsive behavior from narrow mobile through wide desktop, including orientation, safe areas, keyboard-open states, zoom/text scaling and fixed-element collisions.
4. WCAG 2.2 AA-oriented accessibility: semantics, keyboard/focus, names/descriptions, errors, contrast, reduced motion, dynamic announcements and gesture alternatives.
5. Real backend behavior: authoritative server state, safe optimistic updates, retries, stale/concurrent data, pagination and safe error mapping.
6. Localization/content resilience: expansion, plurals, RTL readiness, locale-aware formats, long names/URLs/IDs and user-generated content.
7. Performance: layout-shift prevention, responsive media, lazy loading, virtualization/pagination, controlled requests and efficient rendering.
8. Security/privacy UX: permissions, sensitive-data handling, destructive confirmations, no secrets/tokens/stack traces in client UI.
9. Visual/runtime QA: routes, assets, console errors, network failures, responsive reflow, theme variants and critical flows.
10. Handoff: source of truth, tokens, component inventory, state matrix, API assumptions, accessibility requirements, limitations and verification record.

## Definition of Done

- [ ] Design direction and tokens are intentional.
- [ ] Required states are designed and implemented.
- [ ] Responsive behavior is defined and checked.
- [ ] Keyboard and screen-reader paths work for critical interactions.
- [ ] Focus and contrast are verified.
- [ ] Real backend states are handled.
- [ ] No fake success, broken routes, or runtime errors remain.
- [ ] No secrets are committed.
- [ ] Long content and unusual data are tested.
- [ ] Critical flows are tested end-to-end.
- [ ] Remaining gaps are documented.
