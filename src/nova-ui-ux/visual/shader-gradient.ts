export type GradientGeometry = 'plane' | 'sphere' | 'blob' | 'torus';

export interface ShaderGradientConfig {
  geometry: GradientGeometry;
  colors: [string, string, string];
  speed: number;
  strength: number;
  density: number;
  frequency: number;
  amplitude: number;
  rotation: { x:number; y:number; z:number };
  camera: { fov:number; distance:number; x:number; y:number; z:number };
  light: { x:number; y:number; z:number; intensity:number };
  reflection: number;
  grain: number;
  pixelRatio: number;
  transparent: boolean;
}

export const defaultShaderGradient: ShaderGradientConfig = {
  geometry:'sphere', colors:['#1b1b2f','#4f46e5','#22d3ee'], speed:.35,
  strength:.7, density:1.2, frequency:1.1, amplitude:.7,
  rotation:{x:0,y:0,z:0}, camera:{fov:45,distance:4,x:0,y:0,z:4},
  light:{x:1,y:1,z:2,intensity:1}, reflection:.35, grain:.04,
  pixelRatio:1, transparent:true,
};

export function shaderGradientUniforms(c: ShaderGradientConfig) {
  return {
    uTime: 0, uSpeed:c.speed, uStrength:c.strength, uDensity:c.density,
    uFrequency:c.frequency, uAmplitude:c.amplitude, uReflection:c.reflection,
    uGrain:c.grain, uColors:c.colors, uLight:c.light,
  };
}

export const gradientFragmentShader = `
precision highp float;
uniform float uTime,uSpeed,uStrength,uDensity,uFrequency,uAmplitude,uReflection,uGrain;
uniform vec3 uColors[3];
varying vec2 vUv;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.0-2.0*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
void main(){
  vec2 p=vUv-.5;
  float t=uTime*uSpeed;
  float n=noise(p*uDensity*4.0+vec2(t,t*.7));
  float wave=sin((p.x+p.y+t)*uFrequency*6.2831)*.5+.5;
  float f=clamp(n*uAmplitude+wave*uStrength,0.0,1.0);
  vec3 c=mix(uColors[0],uColors[1],smoothstep(0.0,.55,f));
  c=mix(c,uColors[2],smoothstep(.45,1.0,f));
  c+= (hash(gl_FragCoord.xy)-.5)*uGrain;
  gl_FragColor=vec4(c,1.0);
}`;
