'use client';
import { CardItem } from "@/src/data/cards-data";
import { useState } from "react";

export default function FilterSidebar({data,onChange}:{data:CardItem[];onChange:(f:Set<string>)=>void;}){
 const cats=Array.from(new Set(data.filter(d=>d.level===4).map(d=>d.kategori)));
 const [active,setActive]=useState<Set<string>>(new Set());
 function toggle(cat:string){
   const n=new Set(active);
   n.has(cat)? n.delete(cat): n.add(cat);
   setActive(n);
   onChange(n);
 }
 return(
  <aside className="w-48 border-r border-gold/20 p-4 space-y-2">
   <h3 className="font-semibold mb-2">Kategori</h3>
   {cats.map(c=>(
    <label key={c} className="flex items-center gap-2 text-sm cursor-pointer">
      <input type="checkbox" checked={active.has(c)} onChange={()=>toggle(c)} className="accent-gold"/>
      {c}
    </label>
   ))}
   <button onClick={()=>{const n=new Set<string>();setActive(n);onChange(n)}} className="text-xs underline mt-2">Reset</button>
  </aside>);
}
