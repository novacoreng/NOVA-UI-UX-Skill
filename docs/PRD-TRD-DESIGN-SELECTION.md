# PRD/TRD-Driven Design Selection

## Purpose

Nova should not jump directly from a PRD/TRD to implementation. When the product supports multiple legitimate visual directions, Nova must surface the relevant design possibilities and ask the user which direction should lead before locking the design system.

## Selection sequence

### 1. Parse the PRD/TRD

Identify:

- product type and core user journey
- primary conversion/success action
- platforms and devices
- content density
- brand personality
- functional versus experiential surfaces
- motion requirements
- data visualization requirements
- 3D/spatial requirements
- performance constraints
- accessibility and reduced-motion requirements
- SEO/SSR requirements
- required integrations and technical stack

### 2. Generate only relevant visual candidates

Possible candidates include:

**A. Clean premium**
For products that need clarity, trust, dense workflows, dashboards, commerce, SaaS, admin tools or content-heavy flows.

**B. Liquid Glass**
For premium controls, floating panels, media controls, operating-system-inspired interfaces, or branded surfaces where translucency and depth reinforce hierarchy.

**C. 3D/WebGL**
For product visualization, immersive brand storytelling, spatial navigation, technical demonstrations or interactive objects.

**D. Shader Gradient**
For atmospheric hero backgrounds, ambient visual depth, abstract technology/creative products, and lightweight motion behind readable content.

**E. Scroll World**
For highly experiential landing pages where the PRD specifically benefits from a cinematic story told as the user scrolls through connected scenes.

**F. Liquid Identity**
For logos, marks and hero identity moments where a material/shader transformation communicates premium craft without redefining the core brand.

**G. Hybrid**
A restrained combination of the above, used only when each effect has a clear role.

### 3. Ask the user before visual commitment

Use a concise question such as:

> Based on the PRD/TRD, I can build this in one of these directions: Clean Premium, Liquid Glass, 3D/WebGL, Shader Gradient, Scroll World, Liquid Identity, or a Hybrid. Which direction should be the primary visual language?

Then add a brief one-line explanation for only the 2–4 options that actually fit the product.

### 4. Translate the choice into the design system

After the user chooses, lock:

- visual language
- surface treatment
- motion language
- typography hierarchy
- color strategy
- spacing rhythm
- component treatment
- media treatment
- responsive behavior
- performance budget
- accessibility adaptations

The chosen direction becomes part of the project's Master design-system decision unless the user explicitly changes it later.

## When not to ask

Do not ask when:

- the PRD/TRD already explicitly specifies the visual direction
- an existing locked design system is the source of truth
- a design reference has already been approved
- the task is a targeted bug fix where changing visual direction would be unrelated

## Implementation constraints

The choice is a design direction, not permission to ignore production requirements.

Always preserve:

- readable contrast
- focus visibility
- touch target sizing
- semantic structure
- reduced-motion behavior
- keyboard/screen-reader support
- responsive layouts
- loading/empty/error/success states
- graceful fallback when WebGL or advanced effects are unavailable
- lazy-loading and performance budgets for heavy visual layers

## Example mapping

| PRD signal | Candidate directions |
|---|---|
| SaaS dashboard / operations | Clean Premium, restrained Glass |
| Premium consumer product | Clean Premium, Glass, 3D |
| Developer/AI product landing page | Shader Gradient, 3D, Clean Premium |
| Luxury/creative brand | Liquid Identity, Glass, Shader Gradient |
| Product launch storytelling | Scroll World, 3D, Hybrid |
| Interactive 3D configurator | 3D/WebGL |
| Media or music interface | Glass, Shader Gradient |
| Mobile app with native-feeling transient surfaces | Glass, native motion patterns |

## Required final decision record

For significant builds, record the approved choice and rationale in the project design-system output:

`visualDirection.primary`

`visualDirection.secondary`

`visualDirection.reason`

`visualDirection.motion`

`visualDirection.performanceBudget`

`visualDirection.fallback`

This makes the visual decision explicit and prevents later screens from drifting into unrelated styles.
