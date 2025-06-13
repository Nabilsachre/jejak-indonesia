'use client';
import { useState } from "react";
import data from "@/src/data/cards-data";
import Card from "@/src/components/Card";
import DeckScroll from "@/src/components/DeckScroll";
import FilterSidebar from "@/src/components/FilterSidebar";

export default function Home(){
 const [stack,setStack]=useState<string|null>(null);
 const [filters,setFilters]=useState<Set<string>>(new Set());
 const [detail,setDetail]=useState<string|null>(null);

 function currentItems(){
   let items=data.filter(d=> stack? d.parentId===stack: d.level===1);
   if(filters.size && items[0]?.level===4){
     items=items.filter(i=>filters.has(i.kategori));
   }
   return items;
 }
 const show=currentItems();
 function drill(id:string, lvl:number){
   if(lvl===4){setDetail(id);return;}
   setStack(id); setDetail(null);
 }
 function back(){
   if(!stack) return;
   const parent=data.find(d=>d.id===stack)?.parentId||null;
   setStack(parent); setDetail(null);
 }
 const detailItem=data.find(d=>d.id===detail);

 return(
  <div className="flex">
    <FilterSidebar data={data} onChange={setFilters}/>
    <section className="flex-1 p-6">
      {stack&&<button onClick={back} className="underline mb-2 text-sm">← Kembali</button>}
      {detailItem&&(
        <div className="mb-4 border border-gold p-4 rounded max-w-md">
          <h3 className="font-semibold text-lg">{detailItem.name}</h3>
          <p className="text-sm opacity-80">{detailItem.deskripsi}</p>
        </div>
      )}
      <DeckScroll>
        {show.map(it=>(
          <Card key={it.id} item={it} onClick={()=>drill(it.id,it.level)} selected={detail===it.id}/>
        ))}
      </DeckScroll>
    </section>
  </div>
 );
}
