export interface IdentityMaterial {
  base:string; highlight:string; roughness:number; metallic:number; fluidity:number;
  distortion:number; reflection:number; speed:number; grain:number;
}
export const defaultIdentityMaterial:IdentityMaterial={base:'#dfe7f2',highlight:'#ffffff',roughness:.18,metallic:.9,fluidity:.65,distortion:.2,reflection:.8,speed:.5,grain:.02};
export interface IdentityFrame { progress:number; distortion:number; highlight:number; rotation:number; scale:number; }
export function identityFrame(t:number,m=defaultIdentityMaterial):IdentityFrame{
  const p=Math.max(0,Math.min(1,t));
  const wave=Math.sin(p*Math.PI*2*m.speed);
  return {progress:p,distortion:m.distortion*(.5+.5*wave),highlight:.5+.5*Math.sin(p*Math.PI),rotation:p*Math.PI*2*m.speed,scale:1+.025*Math.sin(p*Math.PI*2)};
}
