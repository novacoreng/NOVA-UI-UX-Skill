# External Reference Coverage — Five Repositories

## Important distinction

Nova UI/UX Skill does **not** copy these repositories wholesale. It extracts reusable engineering, UX, visual, architectural, testing, performance, and workflow knowledge and records it as Nova guidance. Upstream code/assets remain upstream and must retain their licenses when directly reused.

This coverage document is the audit checklist for the five requested repositories.

## 1. pmndrs/react-three-fiber

### Covered patterns
- React renderer architecture for Three.js.
- Declarative scene composition.
- Canvas as the rendering boundary.
- React-driven object and scene composition.
- R3F hooks/context concepts and render-loop awareness.
- Pointer/event handling for 3D objects.
- Object lifecycle and disposal awareness.
- TypeScript integration.
- Testing strategy for 3D components.
- Advanced pitfalls and scaling-performance concerns.
- Dependency/version compatibility as a first-class implementation check.
- Separation between ordinary UI and the 3D rendering surface.

### Nova rules
- Use R3F only when real 3D creates product value.
- Keep ordinary HTML/native UI outside the canvas when appropriate.
- Reuse geometry/materials and avoid unnecessary per-frame React state updates.
- Use frame-loop work for animation rather than causing high-frequency React re-renders.
- Dispose large resources and watch texture/geometry/material memory.
- Test GPU/CPU cost and degraded fallbacks.
- Verify React, R3F, Three.js and framework compatibility before installing versions.

### Audit references
The upstream tree includes dedicated API documentation for Canvas, events, hooks, objects, testing and TypeScript, plus advanced pitfalls and scaling-performance guidance. See the upstream repository before implementing a complex 3D feature.

## 2. dashersw/liquid-glass-js

### Covered patterns
- WebGL 2.0 glass rendering.
- Rounded, circle and pill shapes.
- Real-time refraction.
- Nested glass where child elements sample parent output.
- Live rendering controls/uniforms.
- Shape-aware normals.
- Edge, rim and base distortion layers.
- Gaussian blur sampling.
- Page capture/sampling via html2canvas.
- Tint opacity and gradient control.
- Responsive sizing and viewport adaptation.
- Explicit browser/WebGL requirements.
- CSS separation between glass surface and content.

### Parameters Nova should reason about
- edgeIntensity
- rimIntensity
- baseIntensity
- edgeDistance
- rimDistance
- baseDistance
- cornerBoost
- rippleEffect
- blurRadius
- tintOpacity

### Nova rules
- Glass is a selective surface treatment, not the default for every component.
- Content must remain readable over refracted backgrounds.
- Preserve focus indicators and touch targets.
- Provide a non-WebGL fallback.
- Respect reduced motion and device performance.
- Avoid excessive nested glass because every additional surface increases rendering cost.
- Treat page capture and blur as performance-sensitive operations.

## 3. oso95/scroll-world

### Covered patterns
- Scroll position drives a continuous pre-rendered camera journey.
- Scene-by-scene story planning from the product/brand value chain.
- Shared art-direction preamble for visual cohesion.
- Explicit camera-language selection.
- Continuous connector clips rather than hard cuts.
- Frame-identical seam requirement.
- Desktop and independently composed native 9:16 mobile chains.
- Mobile is not automatically a center crop of desktop.
- Scene stills, dive clips and connector clips as separate production assets.
- Scrub engine as a framework-agnostic layer.
- Asset extraction/knockout considerations for floating scenes.
- ffmpeg/ffprobe media processing.
- Preview/draft versus final render budgeting.
- Credit/cost estimation before generation.
- Retry/re-roll and cross-provider seam verification.
- Mobile seek coalescing and iOS video priming considerations.
- Interview-first workflow for subject, brand kit, art direction, camera, journey, mobile and budget.

### Nova rules
- Ask about the story and camera language before generating a scroll world.
- Lock the shared style preamble before producing scenes.
- Never accept a visible seam between clips.
- Treat mobile as a separate composition when requested.
- Budget heavy visual generation before spending.
- Keep the scrub engine separate from the framework.
- Provide a reduced-motion/static alternative.
- Do not make a scroll cinematic the primary information architecture for an operational product unless the PRD actually calls for it.

## 4. paper-design/liquid-logo

### Covered patterns
- Shader-driven logo/material treatment.
- Liquid or metallic identity effects as a brand moment.
- SVG/logo asset input as the canonical source.
- React/Next.js implementation pattern.
- Shader-based rendering through Paper's shader ecosystem.
- Modern component composition around the visual treatment.
- Toast/feedback patterns for interactive tooling.
- Upload/share-oriented product workflow concepts.
- Dependency compatibility checks for Next.js, React and shader packages.

### Nova rules
- Never replace the canonical logo with an effect-only approximation.
- Preserve the mark's silhouette and legibility.
- Use liquid identity for hero/brand moments, not every navigation icon.
- Keep a static SVG/image fallback.
- Check licensing for any example logos/assets before reusing them.
- Treat shader rendering as progressive enhancement.

## 5. ruucm/shadergradient

### Covered patterns
- Configurable animated 3D shader gradients.
- React and Vue renderer architecture.
- Canvas wrapper and renderer separation.
- Plane, sphere and water-plane forms.
- Animation, speed, strength, density, frequency and amplitude controls.
- Camera distance, azimuth, polar angle and zoom controls.
- Color triplets and reflection.
- Wireframe and shader mode options.
- Environment/light controls.
- Grain and grain blending.
- Query-string-driven configurations.
- Transition/camera-update callbacks.
- Pixel density and FOV controls.
- WebGL power preferences and drawing-buffer configuration.
- Lazy loading with threshold/rootMargin.
- React 18/19 and R3F/Three compatibility considerations.
- Vue/Nuxt and SSR-safe canvas considerations.
- Separate renderer and stateless UI packages.

### Nova rules
- Use shader gradients as configurable visual layers rather than opaque one-off effects.
- Keep content above the effect readable.
- Tune pixel density for device class.
- Lazy-load below-the-fold canvases.
- Prefer low-cost shader settings on mobile.
- Respect reduced motion by disabling or reducing animation.
- Verify framework and R3F/Three versions before installation.
- Use query/state serialization when reproducible visual presets are useful.

## Cross-repository capabilities now expected from Nova

### Visual-direction selection
Nova should map PRD/TRD signals to the relevant visual system before implementation:
- Clean Premium
- Liquid Glass
- 3D/WebGL
- Shader Gradient
- Scroll World
- Liquid Identity
- Hybrid

### Effect budget
Every advanced visual must have:
- purpose
- target surfaces
- motion level
- device target
- GPU/CPU budget
- fallback
- reduced-motion behavior
- accessibility treatment
- loading strategy

### Design-to-implementation contract
Record the selected visual direction and implementation constraints in the project Master Design System. Do not silently introduce a new effect later.

## What is intentionally NOT copied

- Full upstream repositories.
- Upstream demo applications.
- Upstream branding or ownership claims.
- Third-party example logos and media as Nova assets.
- Upstream credentials, API keys or provider accounts.
- Generated media that is not licensed for redistribution.

For direct code reuse, consult the upstream LICENSE and preserve required attribution. The referenced repositories include MIT-licensed projects, but individual assets/examples can have separate rights.
