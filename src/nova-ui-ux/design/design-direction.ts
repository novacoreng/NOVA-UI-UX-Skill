export type VisualDirection='clean-premium'|'liquid-glass'|'three-webgl'|'shader-gradient'|'scroll-world'|'liquid-identity'|'hybrid';
export interface ProductSignals{platforms:string[];productType:string;brandTone:string;interactive3D:boolean;cinematic:boolean;premiumSurfaces:boolean;ambientMotion:boolean;brandMoment:boolean;performanceBudget:'tight'|'balanced'|'high';accessibilityStrict:boolean;}
export function recommendDirections(s:ProductSignals):VisualDirection[]{
 const out:VisualDirection[]=[];
 if(s.productType.match(/dashboard|admin|saas|operations/i)) out.push('clean-premium');
 if(s.premiumSurfaces) out.push('liquid-glass');
 if(s.interactive3D) out.push('three-webgl');
 if(s.ambientMotion) out.push('shader-gradient');
 if(s.cinematic) out.push('scroll-world');
 if(s.brandMoment) out.push('liquid-identity');
 if(!out.length) out.push('clean-premium');
 if(s.performanceBudget==='tight') return out.filter(x=>x!=='three-webgl'&&x!=='scroll-world').slice(0,3);
 return [...new Set(out)].slice(0,4);
}
export interface DesignDecision{primary:VisualDirection;secondary?:VisualDirection[];reason:string;motion:'subtle'|'expressive'|'cinematic';performanceBudget:string;fallback:string;}
