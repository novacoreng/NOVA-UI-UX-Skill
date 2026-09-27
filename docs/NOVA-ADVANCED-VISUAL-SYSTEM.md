# Nova Advanced Visual System

This is the independent Nova implementation blueprint for the capabilities represented by the five supplied projects. It deliberately describes behavior and engineering requirements rather than copying their source code.

## 1. 3D / React scene system

### Capability set
- Declarative scene composition
- Camera, object, light and material state
- Render-loop modes: continuous, demand-driven, disabled
- Pointer and gesture interaction mapped to scene objects
- Raycast-style object picking
- Scene graph hierarchy
- Reusable primitives and custom objects
- Asset loading with preload/cache boundaries
- Animation/tick lifecycle
- Suspense/loading boundaries
- Error boundaries for 3D surfaces
- Type-safe object/material props
- Responsive canvas sizing
- Device pixel-ratio limits
- Shadow and antialiasing controls
- Performance instrumentation
- Testable scene state without requiring a real GPU

### Nova rules
- Use 3D only where it improves the product's job-to-be-done.
- Keep UI state separate from render-loop state.
- Default to demand rendering for mostly static scenes.
- Clamp DPR and disable expensive effects on constrained devices.
- Use semantic HTML overlays for controls whenever possible.
- Make canvas regions keyboard-accessible through equivalent DOM controls.

## 2. Liquid glass system

### Capability set
- Rounded, circular, pill and custom shapes
- Translucent tint
- Backdrop blur
- Saturation/brightness adjustment
- Edge highlight/border
- Shadow and elevation
- Refraction-like UV displacement
- Chromatic dispersion
- Surface distortion
- Nested glass composition
- Shape masks
- Background sampling strategy
- Responsive resizing
- Live parameter tuning
- CSS fallback
- WebGL enhancement path

### Nova rendering model
1. Render background content.
2. Establish a bounded glass surface.
3. Resolve shape/mask geometry.
4. Sample or approximate the background.
5. Apply blur and color treatment.
6. Apply bounded refraction/distortion.
7. Add edge highlight and elevation.
8. Composite foreground content above the effect.

Never make text itself refractive. The surface may be expressive; content must remain stable and readable.

## 3. Shader gradient system

### Capability set
- Plane/sphere/blob/torus geometry
- Three-color gradient blending
- Procedural noise
- Time-based animation
- Speed
- Strength
- Density
- Frequency
- Amplitude
- Rotation
- Camera FOV/distance/position
- Lighting position/intensity
- Reflection amount
- Grain
- Transparency
- Pixel-density control
- Responsive resize
- Preset serialization
- Lazy loading
- Reduced-motion freeze/simplification

### Performance strategy
- Cap pixel ratio.
- Pause or simplify when off-screen.
- Prefer one full-viewport shader over many overlapping canvases.
- Keep controls outside the render loop.
- Avoid unnecessary React state updates every frame.

## 4. Scroll world system

### Capability set
- Storyboard-driven scene sequence
- Scroll-to-progress mapping
- Smooth scrub interpolation
- Camera path and target path
- Scene-local progress
- Scene transitions
- Seam continuity
- Layered foreground/midground/background composition
- Lazy scene loading
- Asset pre-processing and compression planning
- Desktop composition
- Native mobile composition
- Reduced-motion alternative
- Loading/progress state
- Scroll progress indicator
- Touch/trackpad/wheel input normalization
- Section fallback when WebGL is unavailable

### Scene design contract
Every scene should define:
- narrative purpose
- entry state
- exit state
- camera position
- camera target
- focal object
- duration/share of scroll range
- assets
- lighting/material strategy
- desktop composition
- mobile composition
- transition seam
- fallback

Do not simply crop a desktop cinematic scene into a phone viewport when the story depends on composition.

## 5. Liquid identity system

### Capability set
- Canonical logo/mark preservation
- Material transformation
- metallic response
- roughness
- highlight sweep
- controlled distortion
- fluidity
- reflection
- grain
- rotation/scale choreography
- intro/outro state
- static fallback
- transparent background support

Use it for identity moments rather than every logo instance in an application.

## 6. Dynamic notification system

### Capability set
- Notification queue
- Priority
- Replacement by ID
- Enter/visible/exit lifecycle
- Auto-dismiss timers
- Manual dismissal
- Tap action
- Icon/media
- Progress state
- Safe-area positioning
- Gesture dismissal
- Interruption handling
- Reduced-motion mode
- Accessibility announcement
- Platform-specific surface adapters

The notification state machine must survive interrupted animation and avoid duplicate timers or duplicate submissions.

## 7. Cross-system production rules

- Every advanced effect has a non-WebGL fallback.
- Every animated system has a reduced-motion path.
- Every interactive canvas has a DOM/keyboard equivalent where an equivalent action exists.
- Heavy assets are lazy-loaded and preloaded only when justified.
- GPU-heavy work is budgeted per viewport, not per component.
- Effects never reduce text contrast below the product accessibility target.
- Mobile is composed intentionally rather than treated as a cropped desktop.
- State remains authoritative outside animation state.
- Visual parameters are tokenized and serializable.
- Every effect can be disabled independently for diagnostics.
- Production builds must expose no debug controls or internal shader diagnostics.

## 8. Nova implementation philosophy

The five supplied projects are not dependencies of the Nova skill. Nova owns the interfaces, abstractions, algorithms, design rules and platform adapters written here. Implementations may use an existing third-party library when the project's license and technical fit permit it, but Nova's design intelligence does not depend on any single vendor.
