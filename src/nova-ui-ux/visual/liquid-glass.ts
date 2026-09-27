export type GlassShape = 'rounded' | 'circle' | 'pill' | 'custom';

export interface LiquidGlassConfig {
  shape: GlassShape;
  radius: number;
  tint: string;
  opacity: number;
  blur: number;
  refraction: number;
  dispersion: number;
  distortion: number;
  saturation: number;
  brightness: number;
  borderOpacity: number;
  shadowOpacity: number;
  shadowBlur: number;
  sampleRadius: number;
  nested: boolean;
}

export const defaultLiquidGlass: LiquidGlassConfig = {
  shape: 'rounded', radius: 24, tint: '#ffffff', opacity: 0.16,
  blur: 18, refraction: 0.28, dispersion: 0.04, distortion: 0.08,
  saturation: 1.12, brightness: 1.04, borderOpacity: 0.24,
  shadowOpacity: 0.18, shadowBlur: 32, sampleRadius: 8, nested: false,
};

export function normalizeGlass(input: Partial<LiquidGlassConfig>): LiquidGlassConfig {
  const n = (v: number | undefined, min: number, max: number, fallback: number) =>
    Math.min(max, Math.max(min, v ?? fallback));
  return {
    ...defaultLiquidGlass,
    ...input,
    opacity: n(input.opacity, 0, 1, defaultLiquidGlass.opacity),
    blur: n(input.blur, 0, 80, defaultLiquidGlass.blur),
    refraction: n(input.refraction, 0, 1, defaultLiquidGlass.refraction),
    dispersion: n(input.dispersion, 0, .5, defaultLiquidGlass.dispersion),
    distortion: n(input.distortion, 0, 1, defaultLiquidGlass.distortion),
    saturation: n(input.saturation, 0, 3, defaultLiquidGlass.saturation),
    brightness: n(input.brightness, .2, 2, defaultLiquidGlass.brightness),
  };
}

export function glassCss(config: LiquidGlassConfig): Record<string, string> {
  const c = normalizeGlass(config);
  const alpha = Math.round(c.opacity * 255).toString(16).padStart(2, '0');
  return {
    background: `${c.tint}${alpha}`,
    backdropFilter: `blur(${c.blur}px) saturate(${c.saturation})`,
    WebkitBackdropFilter: `blur(${c.blur}px) saturate(${c.saturation})`,
    border: `1px solid ${c.tint}${Math.round(c.borderOpacity * 255).toString(16).padStart(2, '0')}`,
    borderRadius: `${c.radius}px`,
    boxShadow: `0 ${Math.round(c.shadowBlur / 3)}px ${c.shadowBlur}px rgba(0,0,0,${c.shadowOpacity})`,
  };
}

export function refractUv(uv: {x:number;y:number}, normal: {x:number;y:number}, strength: number) {
  const k = Math.max(0, Math.min(1, strength));
  return { x: uv.x + normal.x * k, y: uv.y + normal.y * k };
}
