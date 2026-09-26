# Expo Dynamic Notifications Pattern

## Source

Reference implementation: https://github.com/rit3zh/expo-dynamic-notifications

Repository: `rit3zh/expo-dynamic-notifications`

Use this as an **external reference pattern**, not as a copied/owned Nova implementation. The upstream repository is MIT-licensed and its LICENSE identifies Expo / 650 Industries, Inc. as the copyright holder. Preserve the upstream license and attribution if code is copied or adapted. fileciteturn12file0

## Why Nova UI/UX Skill references it

The project demonstrates a polished in-app, Dynamic Island-style notification surface for Expo/React Native. It is useful as a reference for transient notification UX, animation choreography, safe-area positioning, gesture dismissal, custom notification content, and native visual effects.

The current project package identifies an Expo SDK 57 / React Native 0.86 stack and uses React Native Skia, Reanimated 4, Worklets, Gesture Handler, Safe Area Context, Expo Blur, Expo Image, Expo Symbols, and Expo Router. fileciteturn13file0

## Patterns to learn

### 1. Notification overlay architecture

A root provider wraps the application and renders an overlay above the application tree. The source exposes `DynamicNotifications`, with `Overlay`, `Gooey`, `Content`, and `Body` subcomponents. fileciteturn17file0

Nova implementations should preserve the same conceptual separation:

- Root/provider — state and configuration
- Overlay — positioning and layering
- Visual effect layer — native/Skia effect
- Content layer — interaction and layout
- Body — default presentation
- Hook/controller — imperative trigger/dismiss API

### 2. Declarative notification API

The reference notification model supports a title, optional message, avatar, platform symbol, accent, duration, press handler, custom renderer, and identifier. fileciteturn24file0

When designing similar APIs, prefer a small typed notification contract and allow custom rendering without forcing consumers to fork the component.

### 3. Timeline-driven animation

The reference implementation separates notification lifecycle from visual components. It tracks the active notification, queued replacement, dismissal state, timers, and animation shared values, then coordinates spring/delay phases for drop, tint, expansion, reveal, and exit. fileciteturn21file0

Nova guidance:

- Keep lifecycle/state logic outside visual rendering.
- Cancel previous animations when a new notification enters.
- Clear timers on replacement and unmount.
- Prevent duplicate exits.
- Queue or replace notifications intentionally.
- Ensure completion callbacks run on the React Native side safely.

### 4. Gesture interaction

The reference combines pan and tap gestures. A swipe beyond a distance/velocity threshold dismisses; otherwise the card springs back. Taps invoke the optional action and dismiss. fileciteturn28file0

Nova guidance:

- Provide a non-gesture dismissal path.
- Do not make essential information accessible only through swipe gestures.
- Keep touch targets sufficiently large.
- Ensure gesture state and accessibility activation produce equivalent outcomes.
- Avoid gesture conflicts with navigation or system gestures.

### 5. Safe-area-aware responsive geometry

The reference calculates island/card positions from window width and safe-area top inset, constrains card width using available screen width, and derives the overlay canvas height from the resulting geometry. fileciteturn29file0

Nova guidance:

- Treat safe areas as layout inputs, not hard-coded offsets.
- Recompute geometry when window dimensions or insets change.
- Constrain notification width on narrow devices.
- Test orientation, Dynamic Island/notch devices, tablets, split-screen, and large text.

### 6. Layered native visual effects

The reference uses Skia blur/color-matrix composition for the gooey transition and a separate animated blur layer for content reveal. fileciteturn20file0 fileciteturn27file0

Nova guidance:

- Use native rendering only when it materially improves the interaction.
- Keep expensive effects isolated to the overlay.
- Provide reduced-motion/reduced-effects behavior where appropriate.
- Test low-end Android devices separately from iOS hardware.

### 7. Image and content resilience

The default body uses a fixed visual hierarchy with avatar, title, message, and symbol, and constrains title/message to one line. fileciteturn26file0

For production Nova implementations, do not blindly preserve one-line truncation. Check localization, accessibility text size, long names, missing avatars, slow image loading, broken image URLs, and content that needs more than one line.

## Production adaptations Nova requires

The reference is a visual/interaction implementation. When adapting it for production applications, add:

- Accessibility labels and roles.
- Screen-reader announcement strategy for important notifications.
- Reduced-motion behavior.
- Long-content and text-scaling handling.
- Localization/RTL support where applicable.
- Deterministic notification priority/queue policy.
- Duplicate-notification handling.
- Safe navigation after notification taps.
- Deep-link validation and authentication checks.
- Error handling for custom renderers and image loading.
- Analytics only where justified and privacy-compliant.
- Tests for mount/unmount, rapid triggers, queued replacement, dismissal, orientation, safe areas, and gesture cancellation.

## When to use this reference

Use it when a project needs:

- In-app transient notifications
- Dynamic Island-style UI
- Floating notification cards
- Animated top-of-screen alerts
- Gesture-dismissible overlays
- Native blur/Skia effects
- Rich notification content
- React Native/Expo animation choreography

Do not use it automatically. Prefer the simplest accessible platform-native notification pattern when the product does not need a custom visual treatment.

## Compatibility note

The upstream README currently documents Expo SDK 57 and the package lists Expo `~57.0.23`, React Native `0.86.3`, Reanimated `4.5.1`, Worklets `0.10.1`, and related native dependencies. Verify versions against the target application's installed Expo SDK before adopting the pattern; do not blindly copy dependency versions. fileciteturn11file0 fileciteturn13file0

## Attribution and licensing

This file documents the external repository as a reference. It does not relicense or claim ownership of upstream code. If source code is incorporated, retain the applicable MIT copyright notice and license text. fileciteturn12file0
