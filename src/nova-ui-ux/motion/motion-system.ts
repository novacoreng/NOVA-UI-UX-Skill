export type MotionMode='full'|'reduced'|'none';
export interface MotionTokens{fast:number;normal:number;slow:number;spring:{stiffness:number;damping:number;mass:number};ease:string;}
export const motionTokens:MotionTokens={fast:120,normal:220,slow:420,spring:{stiffness:220,damping:24,mass:1},ease:'cubic-bezier(.22,1,.36,1)'};
export function resolveMotion(mode:MotionMode,t=motionTokens){if(mode==='none')return{duration:0,ease:'linear'};if(mode==='reduced')return{duration:Math.min(t.fast,100),ease:'linear'};return{duration:t.normal,ease:t.ease};}
export function stagger(count:number,base=40,max=400){return Array.from({length:count},(_,i)=>Math.min(max,i*base));}
