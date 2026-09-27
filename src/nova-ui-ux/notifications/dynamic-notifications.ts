export type NotificationPhase='idle'|'entering'|'visible'|'exiting'|'dismissed';
export interface DynamicNotification {id:string;title:string;body?:string;icon?:string;duration:number;priority:number;phase:NotificationPhase;createdAt:number;action?:()=>void;}
export class NotificationQueue {
  private items:DynamicNotification[]=[];
  private maxVisible:number;
  constructor(maxVisible=1){this.maxVisible=Math.max(1,maxVisible);}
  push(item:Omit<DynamicNotification,'phase'|'createdAt'>){
    const next={...item,phase:'entering' as NotificationPhase,createdAt:Date.now()};
    this.items=[...this.items.filter(x=>x.id!==item.id),next].sort((a,b)=>b.priority-a.priority);
    return this.snapshot();
  }
  show(id:string){this.items=this.items.map(x=>x.id===id?{...x,phase:'visible' as NotificationPhase}:x);return this.snapshot();}
  dismiss(id:string){this.items=this.items.map(x=>x.id===id?{...x,phase:'exiting' as NotificationPhase}:x);return this.snapshot();}
  remove(id:string){this.items=this.items.filter(x=>x.id!==id);return this.snapshot();}
  visible(){return this.items.filter(x=>x.phase!=='dismissed').slice(0,this.maxVisible);}
  snapshot(){return [...this.items];}
}
export function notificationDuration(ms:number,min=1200,max=12000){return Math.max(min,Math.min(max,ms));}
