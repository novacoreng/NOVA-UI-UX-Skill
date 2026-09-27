export interface A11yPolicy {
  minTouchTarget: number;
  minContrastText: number;
  minContrastLargeText: number;
  keyboardRequired: boolean;
  reducedMotion: 'reduce' | 'simplify' | 'preserve';
  announceAsyncChanges: boolean;
  rtl: boolean;
}

export const defaultA11yPolicy: A11yPolicy = { minTouchTarget: 44, minContrastText: 4.5, minContrastLargeText: 3, keyboardRequired: true, reducedMotion: 'reduce', announceAsyncChanges: true, rtl: true };

export function accessibleName(fallback: string, ariaLabel?: string, visibleText?: string): string {
  return ariaLabel?.trim() || visibleText?.trim() || fallback;
}

export function shouldAnimate(prefersReducedMotion: boolean, essential = false): boolean {
  return essential ? true : !prefersReducedMotion;
}
