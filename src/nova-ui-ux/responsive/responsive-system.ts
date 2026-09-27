export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type InputMode = 'touch' | 'mouse' | 'keyboard' | 'pen' | 'mixed';

export interface ResponsivePolicy { breakpoints: Record<Breakpoint, number>; minTapTarget: number; safeArea: boolean; keyboardAware: boolean; orientationAware: boolean; textScalingSafe: boolean; }

export const defaultResponsivePolicy: ResponsivePolicy = { breakpoints: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1280, '2xl': 1536 }, minTapTarget: 44, safeArea: true, keyboardAware: true, orientationAware: true, textScalingSafe: true };

export function chooseLayout(width: number): Breakpoint {
  if (width >= 1536) return '2xl'; if (width >= 1280) return 'xl'; if (width >= 1024) return 'lg'; if (width >= 768) return 'md'; if (width >= 480) return 'sm'; return 'xs';
}
