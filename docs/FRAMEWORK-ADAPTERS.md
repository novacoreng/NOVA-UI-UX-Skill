# Framework Adapter Strategy

Nova core stays framework-neutral. Adapters translate the same design/behavior contracts into the target stack.

## Web

React, Next.js, Vue, Svelte, Astro and other web stacks should map tokens, primitives, routing, metadata and interaction semantics without changing the underlying design decisions.

## Native

React Native/Expo, SwiftUI and Jetpack Compose should preserve information architecture while adapting touch targets, safe areas, gestures, navigation conventions, keyboard behavior and platform controls.

## Advanced rendering

Three.js/React Three Fiber, WebGL and shader systems are progressive visual layers. Keep core content and interaction usable without the renderer whenever practical.