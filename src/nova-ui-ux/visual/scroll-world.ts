export interface WorldScene {
  id:string; duration:number; camera:{position:[number,number,number]; target:[number,number,number]};
  enter?: (progress:number)=>void; exit?: (progress:number)=>void;
}
export interface ScrollWorldPlan {
  scenes:WorldScene[]; mobileMode:'reflow'|'native-sequence'|'simplify'; scrubSmoothing:number;
  maxDevicePixelRatio:number; lazyScenes:boolean; reducedMotion:'freeze'|'fade'|'simplify';
}

export function sceneAt(plan:ScrollWorldPlan, progress:number){
  const total=plan.scenes.reduce((n,s)=>n+s.duration,0);
  let cursor=0;
  for(const scene of plan.scenes){
    const next=cursor+scene.duration/total;
    if(progress<=next){
      const local=(progress-cursor)/(next-cursor||1);
      return {scene, local:Math.max(0,Math.min(1,local)), index:plan.scenes.indexOf(scene)};
    }
    cursor=next;
  }
  const last=plan.scenes[plan.scenes.length-1];
  return {scene:last,local:1,index:plan.scenes.length-1};
}

export function smoothScroll(previous:number,target:number,smoothing=.12){
  return previous+(target-previous)*Math.max(.001,Math.min(1,smoothing));
}

export function seamProgress(a:WorldScene,b:WorldScene,t:number){
  const s=Math.max(0,Math.min(1,t));
  const ease=s*s*(3-2*s);
  return {
    position:[a.camera.position[0]+(b.camera.position[0]-a.camera.position[0])*ease,
      a.camera.position[1]+(b.camera.position[1]-a.camera.position[1])*ease,
      a.camera.position[2]+(b.camera.position[2]-a.camera.position[2])*ease] as [number,number,number],
    target:[a.camera.target[0]+(b.camera.target[0]-a.camera.target[0])*ease,
      a.camera.target[1]+(b.camera.target[1]-a.camera.target[1])*ease,
      a.camera.target[2]+(b.camera.target[2]-a.camera.target[2])*ease] as [number,number,number],
  };
}

export function mobileWorldPlan(plan:ScrollWorldPlan):ScrollWorldPlan{
  if(plan.mobileMode==='simplify') return {...plan,scenes:plan.scenes.map(s=>({...s,enter:undefined,exit:undefined}))};
  return plan;
}
