export interface Vec3 {x:number;y:number;z:number}
export interface Camera3D {position:Vec3;target:Vec3;fov:number;near:number;far:number}
export interface SceneObject3D {id:string;position:Vec3;rotation:Vec3;scale:Vec3;visible:boolean;interactive:boolean;metadata?:Record<string,unknown>}
export interface Scene3D {camera:Camera3D;objects:SceneObject3D[];pixelRatio:number;shadows:boolean;antialias:boolean;frameloop:'always'|'demand'|'never'}
export const defaultScene3D:Scene3D={camera:{position:{x:0,y:0,z:5},target:{x:0,y:0,z:0},fov:45,near:.1,far:1000},objects:[],pixelRatio:1,shadows:false,antialias:true,frameloop:'demand'};
export function clampPixelRatio(value:number,max=2){return Math.max(1,Math.min(max,value));}
export function lookAt(camera:Camera3D,target:Vec3){return {...camera,target};}
export function addObject(scene:Scene3D,object:SceneObject3D):Scene3D{return {...scene,objects:[...scene.objects.filter(o=>o.id!==object.id),object]};}
export function removeObject(scene:Scene3D,id:string):Scene3D{return {...scene,objects:scene.objects.filter(o=>o.id!==id)};}
