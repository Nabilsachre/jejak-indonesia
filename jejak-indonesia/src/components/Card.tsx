import { CardItem } from "@/src/data/cards-data";
import clsx from "clsx";
export default function Card({item,onClick,selected}:{item:CardItem;onClick:()=>void;selected:boolean;}){
 return(
 <button onClick={onClick} className="shrink-0 w-56 h-60 snap-start">
  <div className={clsx("w-full h-full rounded-lg p-4 flex flex-col justify-between transition border",
     selected? "border-white scale-105":"border-gold hover:scale-105")}>
    <h3 className="font-semibold">{item.name}</h3>
    <p className="text-xs opacity-70">{item.deskripsi}</p>
    <span className="text-[10px] opacity-50">{item.kategori}</span>
  </div>
 </button>);
}
