# External Reference Matrix

Nova UI/UX Skill uses the following public repositories as **reference sources and pattern libraries**, not as automatic code-copy targets. Implementations must respect each upstream repository's license and attribution requirements.

## Sources

| Source | Reference domain | Nova integration |
|---|---|---|
| pmndrs/react-three-fiber | React renderer architecture for Three.js, declarative 3D scene composition, React/Three integration, test/typecheck/release discipline | 3D scenes, product visualizers, spatial interfaces, WebGL effects |
| dashersw/liquid-glass-js | WebGL liquid-glass effects, nested glass composition, refraction, blur, tint, shape-aware rendering, live parameters | Glass UI, premium surfaces, refractive cards/buttons, visual effects |
| oso95/scroll-world | Scroll-scrubbed cinematic worlds, scene sequencing, camera architecture, frame-locked connectors, responsive/mobile variants, asset budget planning | Immersive landing pages, product storytelling, cinematic brand experiences |
| paper-design/liquid-logo | Shader-driven liquid-metal logo treatment, parameterized logo rendering, upload/share workflow concepts | Brand/logo moments, hero treatments, premium identity animation |
| ruucm/shadergradient | Configurable 3D animated shader gradients, controllable camera/light/material properties, React/Vue/Figma/Framer packaging, lazy loading | Backgrounds, hero canvases, ambient motion, visual depth |

## Design-selection rule

Before implementation of a visually ambitious feature, Nova should inspect the PRD/TRD and explicitly ask which visual direction the user wants to use **when multiple valid approaches exist**.

The question should be based on the product's actual requirements and should present relevant choices such as:

- **Standard premium UI** — restrained gradients, typography, spacing, conventional components
- **Liquid Glass** — translucent/refractive surfaces, glass buttons/cards, controlled blur
- **3D / WebGL** — interactive objects, spatial product visualization, shader-based depth
- **Shader Gradient** — animated ambient backgrounds or hero surfaces
- **Scroll World** — cinematic scroll-driven journey through scenes
- **Liquid Logo / Identity FX** — special branding treatment for logos or hero moments
- **Hybrid** — a restrained combination where the PRD/TRD clearly benefits from it

Do not present every option mechanically. Filter the options using the product type, platform, performance budget, content hierarchy, accessibility needs, and implementation stack.

## Decision prompts

For a build/design kickoff, Nova should ask:

1. What is the primary experience the PRD/TRD requires?
2. Which visual language should lead: standard premium, liquid glass, 3D/WebGL, shader gradient, scroll world, liquid identity, or a hybrid?
3. Where should the effect be used: hero only, selected sections, navigation/controls, product visualization, branding, or throughout?
4. Should motion be subtle, expressive, or cinematic?
5. What are the mobile/performance constraints?
6. Are there accessibility or reduced-motion requirements that limit the effect?
7. Does the chosen visual system need to work across web, iOS, Android, or desktop?

## Production guardrails

- Effects are progressive enhancement, not substitutes for information architecture.
- Preserve readable contrast and focus visibility over glass/shader/3D backgrounds.
- Provide static or simplified fallbacks when WebGL/GPU features are unavailable.
- Respect reduced-motion preferences.
- Lazy-load heavy canvases and media when the surface is below the fold.
- Avoid applying expensive shaders to every component when one composited layer is sufficient.
- Keep interaction targets usable independent of the visual effect.
- Test CPU/GPU load, memory, thermals and battery impact on representative devices.
- For scroll-cinematic experiences, prefer frame-locked transitions and explicit mobile composition rather than simply cropping desktop output.
- For 3D/GL libraries, verify the exact React/React DOM/renderer compatibility before adding dependencies.
- For imported/upstream code, preserve license and attribution requirements.

## Repository-specific implementation notes

### React Three Fiber
Treat R3F as a rendering architecture, not as a default requirement. Use it when the product benefit comes from real-time 3D or spatial rendering. Keep 3D state and React UI responsibilities separated, and verify dependency compatibility before implementation. The upstream repository uses automated linting, type checking, tests, formatting and package validation as part of its development workflow.

### Liquid Glass
Use liquid glass selectively for high-value surfaces. The upstream project exposes shape types (rounded, circle, pill), nested glass composition, refraction, blur, tint, and live rendering parameters. Parameterize the effect instead of hard-coding a single visual strength.

### Scroll World
Treat the scroll journey as a storytelling system. Define scenes from the PRD/TRD journey, lock the camera language before generation, maintain visual cohesion across scenes, and explicitly decide whether a native 9:16 mobile chain is required. Do not silently assume that a desktop crop is an acceptable mobile experience.

### Liquid Logo
Use liquid-metal/shader logo treatments as a brand moment. Keep the base logo legible, preserve the canonical mark, and treat animated liquid treatment as an enhancement rather than a replacement identity.

### Shader Gradient
Use shader gradients as configurable visual layers. Keep renderer, controls and application state separable. Configure camera, colors, speed, strength, density, frequency, reflection, lighting and grain intentionally, and lazy-load when appropriate.

## What Nova should not do

- Do not copy entire upstream repositories into the Nova skill.
- Do not present third-party implementation as Nova-owned technology.
- Do not force a visual effect merely because it is available.
- Do not sacrifice usability, accessibility or performance for visual spectacle.
- Do not claim a specific effect is supported on a platform until it has been tested in the target stack.

