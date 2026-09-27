export interface PerformancePolicy { maxDevicePixelRatio: number; lazyLoadHeavyVisuals: boolean; preferDemandRendering: boolean; maxConcurrentMedia: number; virtualizeLargeLists: boolean; reserveMediaSpace: boolean; respectSaveData: boolean; }
export const defaultPerformancePolicy: PerformancePolicy = { maxDevicePixelRatio: 2, lazyLoadHeavyVisuals: true, preferDemandRendering: true, maxConcurrentMedia: 3, virtualizeLargeLists: true, reserveMediaSpace: true, respectSaveData: true };

export interface EffectBudget { blur: 'none' | 'light' | 'medium' | 'heavy'; shader: 'none' | 'ambient' | 'interactive' | 'cinematic'; canvasCount: number; }
export const defaultEffectBudget: EffectBudget = { blur: 'light', shader: 'ambient', canvasCount: 1 };
