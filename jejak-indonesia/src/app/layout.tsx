import "@/src/app/globals.css";
import Link from "next/link";
export default function RootLayout({children}:{children:React.ReactNode}){
 return(<html lang="id" className="bg-black text-gold"><body className="min-h-screen flex flex-col">
  <header className="border-b border-gold/30">
   <nav className="max-w-6xl mx-auto flex gap-6 p-4 items-center">
     <Link href="/" className="font-bold text-xl">Jejak<span className="text-white">Indonesia</span></Link>
     <Link className="hover:text-white" href="/">Jelajahi</Link>
     <Link className="hover:text-white" href="/kontribusi">Kontribusi</Link>
     <Link className="hover:text-white" href="/tentang">Tentang</Link>
   </nav>
  </header>
  <main className="flex-grow">{children}</main>
  <footer className="text-center text-xs py-4 border-t border-gold/30">© 2025 Jejak Indonesia</footer>
 </body></html>);
}
