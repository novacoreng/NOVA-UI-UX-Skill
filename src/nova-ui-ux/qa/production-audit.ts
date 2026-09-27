export interface ProductionAudit { routes: boolean; states: boolean; responsive: boolean; accessibility: boolean; backend: boolean; performance: boolean; security: boolean; localization: boolean; visualQA: boolean; errors: boolean; }

export function productionReady(audit: ProductionAudit): boolean { return Object.values(audit).every(Boolean); }

export const requiredChecks = [
  'routes and deep links', 'loading/empty/populated/error/offline/forbidden/success states', 'responsive viewports and orientation',
  'keyboard/focus/screen reader path', 'contrast and reduced motion', 'real backend and permission states', 'network failure and retry',
  'long content/localization/RTL', 'image/media/layout-shift', 'GPU/CPU/memory budget for visual effects', 'security/privacy UX',
  'console and runtime errors', 'critical end-to-end flows'
] as const;
