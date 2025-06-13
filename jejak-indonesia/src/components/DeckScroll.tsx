import { ReactNode } from "react";
export default function DeckScroll({children}:{children:ReactNode}){
 return <div className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pl-4 md:pl-8 pb-4">
   <span className="shrink-0 w-4" aria-hidden></span>{children}</div>;
}
