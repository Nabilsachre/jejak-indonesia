export default function Kontribusi(){
 return(<section className="max-w-xl mx-auto p-6 space-y-4">
  <h2 className="text-2xl font-bold">Kontribusi Budaya</h2>
  <p>Kirim usulan budaya baru melalui formulir di bawah.</p>
  <form className="space-y-3">
   <input type="text" placeholder="Nama Budaya" className="w-full p-2 bg-black/20 border border-gold rounded"/>
   <textarea placeholder="Deskripsi" className="w-full h-32 p-2 bg-black/20 border border-gold rounded"/>
   <button className="px-4 py-2 bg-gold text-black rounded">Kirim</button>
  </form>
 </section>);
}
