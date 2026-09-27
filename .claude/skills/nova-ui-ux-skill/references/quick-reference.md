# Nova UI/UX Quick Reference

## Before build
- Read PRD/TRD and existing repository.
- Identify users, primary action, roles, platforms, constraints and critical states.
- Check for locked visual/design decisions.
- If multiple visual directions fit, ask the user to choose before locking the design system.

## Visual direction
- Clean Premium
- Liquid Glass
- 3D/WebGL
- Shader Gradient
- Scroll World
- Liquid Identity
- Hybrid

Choose only directions justified by the product.

## Every important surface
- Loading
- Empty
- Populated
- Partial
- Validation
- Error/retry
- Permission
- Session expiry
- Offline/degraded
- Success
- Disabled
- Destructive confirmation
- Long content

## Responsive
Check narrow mobile, large mobile, tablet, desktop and wide desktop. Also check orientation, safe areas, keyboard-open states, zoom/text scaling, fixed/sticky collisions and long translated content.

## Accessibility
Use semantic controls, visible focus, keyboard access, accessible names, correct error association, contrast, non-color cues, reduced motion, screen-reader announcements and gesture alternatives.

## Advanced visual effects
Every 3D, shader, glass or cinematic effect needs a purpose, performance budget, fallback, reduced-motion behavior, accessibility treatment and loading strategy.

## Backend UX
Never fake success. Use authoritative server state for critical data. Preserve input on recoverable errors. Handle retries, pagination, permissions, stale data and concurrency.

## Finish
Run build/type/lint/test checks available in the project, verify critical flows, inspect runtime/network errors, and document remaining limitations.
