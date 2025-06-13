export interface CardItem{
 id:string;
 level:number;
 parentId:string|null;
 name:string;
 deskripsi:string;
 kategori:string;
}
const cardsData:CardItem[]=[
 {id:"reg_jawa",level:1,parentId:null,name:"Jawa",deskripsi:"Pulau Jawa",kategori:"Region"},
 {id:"prov_jatim",level:2,parentId:"reg_jawa",name:"Jawa Timur",deskripsi:"Provinsi",kategori:"Provinsi"},
 {id:"city_surabaya",level:3,parentId:"prov_jatim",name:"Surabaya",deskripsi:"Kota",kategori:"Kota"},
 {id:"cult_lontong",level:4,parentId:"city_surabaya",name:"Lontong Balap",deskripsi:"Kuliner Surabaya",kategori:"Kuliner"},
 {id:"prov_jabar",level:2,parentId:"reg_jawa",name:"Jawa Barat",deskripsi:"Provinsi",kategori:"Provinsi"},
 {id:"city_bandung",level:3,parentId:"prov_jabar",name:"Bandung",deskripsi:"Kota",kategori:"Kota"},
 {id:"cult_angklung",level:4,parentId:"city_bandung",name:"Angklung",deskripsi:"Alat Musik Bambu",kategori:"Musik"},
 {id:"reg_bali",level:1,parentId:null,name:"Bali",deskripsi:"Pulau Dewata",kategori:"Region"},
 {id:"prov_bali",level:2,parentId:"reg_bali",name:"Provinsi Bali",deskripsi:"Provinsi",kategori:"Provinsi"},
 {id:"city_ubud",level:3,parentId:"prov_bali",name:"Ubud",deskripsi:"Kota",kategori:"Kota"},
 {id:"cult_kecak",level:4,parentId:"city_ubud",name:"Tari Kecak",deskripsi:"Tari ritual api",kategori:"Tari"},
 {id:"reg_sumatra",level:1,parentId:null,name:"Sumatra",deskripsi:"Pulau Sumatra",kategori:"Region"},
 {id:"prov_sumbar",level:2,parentId:"reg_sumatra",name:"Sumatera Barat",deskripsi:"Provinsi",kategori:"Provinsi"},
 {id:"city_padang",level:3,parentId:"prov_sumbar",name:"Padang",deskripsi:"Kota",kategori:"Kota"},
 {id:"cult_rendang",level:4,parentId:"city_padang",name:"Rendang",deskripsi:"Masakan daging dunia",kategori:"Kuliner"},
 {id:"cult_tari_piring",level:4,parentId:"city_padang",name:"Tari Piring",deskripsi:"Tarian piring Minangkabau",kategori:"Tari"},
 {id:"reg_kalimantan",level:1,parentId:null,name:"Kalimantan",deskripsi:"Pulau Kalimantan",kategori:"Region"},
 {id:"prov_kalbar",level:2,parentId:"reg_kalimantan",name:"Kalimantan Barat",deskripsi:"Provinsi",kategori:"Provinsi"},
 {id:"city_pontianak",level:3,parentId:"prov_kalbar",name:"Pontianak",deskripsi:"Kota",kategori:"Kota"},
 {id:"cult_bubur_pedas",level:4,parentId:"city_pontianak",name:"Bubur Pedas",deskripsi:"Kuliner Melayu Sambas",kategori:"Kuliner"},
 {id:"cult_festival_meriam",level:4,parentId:"city_pontianak",name:"Festival Meriam Karbit",deskripsi:"Tradisi Ramadhan",kategori:"Festival"}
];
export default cardsData;
