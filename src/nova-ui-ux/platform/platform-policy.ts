export type Platform = 'web' | 'nextjs' | 'react-native' | 'expo' | 'ios' | 'android' | 'desktop';
export interface PlatformPolicy { platform: Platform; safeAreas: boolean; keyboardAvoidance: boolean; gestures: boolean; haptics: boolean; ssr: boolean; seo: boolean; featureFallbacks: boolean; }
export const platformDefaults: Record<Platform, PlatformPolicy> = {
  web: { platform: 'web', safeAreas: true, keyboardAvoidance: false, gestures: true, haptics: false, ssr: false, seo: true, featureFallbacks: true },
  nextjs: { platform: 'nextjs', safeAreas: true, keyboardAvoidance: false, gestures: true, haptics: false, ssr: true, seo: true, featureFallbacks: true },
  'react-native': { platform: 'react-native', safeAreas: true, keyboardAvoidance: true, gestures: true, haptics: true, ssr: false, seo: false, featureFallbacks: true },
  expo: { platform: 'expo', safeAreas: true, keyboardAvoidance: true, gestures: true, haptics: true, ssr: false, seo: false, featureFallbacks: true },
  ios: { platform: 'ios', safeAreas: true, keyboardAvoidance: true, gestures: true, haptics: true, ssr: false, seo: false, featureFallbacks: true },
  android: { platform: 'android', safeAreas: true, keyboardAvoidance: true, gestures: true, haptics: true, ssr: false, seo: false, featureFallbacks: true },
  desktop: { platform: 'desktop', safeAreas: false, keyboardAvoidance: false, gestures: true, haptics: false, ssr: false, seo: false, featureFallbacks: true }
};
