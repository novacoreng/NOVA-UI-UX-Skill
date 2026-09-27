# Nova UI/UX Engine

This directory contains Nova-owned implementations written independently from general engineering concepts and publicly observable behaviors of modern UI systems.

The goal is not to reproduce third-party source. The goal is to provide a unified, reusable master UI/UX engineering toolkit.

## Modules

- `visual/liquid-glass.ts` — configurable glass/refraction model and CSS/WebGL-ready parameter contract.
- `visual/shader-gradient.ts` — procedural gradient parameter model and GLSL fragment generator.
- `visual/scroll-world.ts` — scroll scene timeline, camera choreography, seam and responsive planning.
- `visual/liquid-identity.ts` — brand-mark material animation model.
- `three/scene.ts` — renderer-agnostic 3D scene composition contract.
- `notifications/dynamic-notifications.ts` — transient notification queue/state machine.
- `motion/motion-system.ts` — shared motion tokens and reduced-motion policy.
- `design/design-direction.ts` — PRD/TRD-driven visual direction selection.

All modules are intentionally dependency-light. Framework adapters belong in platform-specific packages.
