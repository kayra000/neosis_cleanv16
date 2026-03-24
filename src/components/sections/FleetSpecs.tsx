import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';

const fleetVehicles = [
  {
    name: "Vanguard Scout MK-IV",
    type: "Hafif Sınıf Keşif Platformu",
    desc: "Yüksek hızlı, düşük akustik izli keşif platformu. Gizli operasyonlar için optimize edilmiştir.",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_c255628f-916f-4ea9-8886-cdd518c3114a.jpg",
    details: "Vanguard serisi, ordumuzun 'gözü ve kulağı' olması için tasarlanmıştır. Sessiz elektrik motoru ve radar sönümleyici gövdesi ile düşman hatları arkasında fark edilmeden görev yapar.",
    specs: [
      { label: "Menzil", value: "800 KM" },
      { label: "Maks. Hız", value: "110 KM/S" },
      { label: "Zırh", value: "Level 2 Kompozit" },
      { label: "Otonomi", value: "Level 5 Full" },
      { label: "Ağırlık", value: "2.5 Ton" },
      { label: "Sensör", value: "LIDAR + IR" }
    ]
  },
  {
    name: "Atlas Logistics Heavy",
    type: "Ağır Sınıf Lojistik Taşıyıcı",
    desc: "Zorlu arazi koşullarında yüksek kapasiteli yük taşıma ve ikmal aracı.",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_797f5e3f-97ec-4069-b61c-f050f5cdfda9.jpg",
    details: "Atlas, lojistik zincirinin en kritik halkasıdır. 5 tona kadar yük taşıyabilen bu dev, otonom konvoy yeteneği sayesinde tek bir operatörle onlarca aracın sevk edilmesini sağlar.",
    specs: [
      { label: "Yük Kapasitesi", value: "5,000 KG" },
      { label: "Menzil", value: "1,200 KM" },
      { label: "Motor", value: "Hibrit Dizel-E" },
      { label: "Tırmanma", value: "%45 Eğim" },
      { label: "Su Geçiş", value: "1.2 Metre" },
      { label: "Güç Çıkışı", value: "500 kW" }
    ]
  },
  {
    name: "Sentinel Guardian X1",
    type: "Orta Sınıf Muharebe Platformu",
    desc: "Modüler silah istasyonu ve otonom savunma sistemi. Tam donanımlı savaşçı.",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_07e92782-6f07-4188-98a4-5f0ed4053eac.jpg",
    details: "Sentinel, sıcak çatışma bölgeleri için geliştirilmiştir. UKSS (Uzaktan Komutalı Silah Sistemi) ve aktif koruma kalkanları ile hem savunma hem taarruz görevlerinde üstünlük sağlar.",
    specs: [
      { label: "Ana Silah", value: "12.7mm UKSS" },
      { label: "İkincil Silah", value: "Anti-Tank Füzesi" },
      { label: "Zırh Seviyesi", value: "STANAG Level 4" },
      { label: "AI Reaksiyon", value: "< 10ms" },
      { label: "Görüntüleme", value: "360° Termal" },
      { label: "İletişim", value: "SATCOM + Radio" }
    ]
  }
];

export const FleetSpecs = () => {
  return (
    <section id="specs" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary text-primary px-3 py-1 uppercase tracking-widest text-xs font-bold">Teknoloji ve Güç</Badge>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-4 italic">Geleceğin <span className="text-primary">Otonom Filosu</span></h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Neosis platformları, en zorlu muharebe koşullarında bile kesintisiz performans göstermek üzere tasarlanmıştır. Gücünü mühendisliğinden alan araçlarımızı keşfedin.
          </p>
        </div>

        <div className="space-y-32">
          {fleetVehicles.map((vehicle, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-24 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/0 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative bg-secondary/10 border border-border/50 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src={vehicle.img} 
                      alt={vehicle.name} 
                      className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    />
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                      <div className="bg-black/40 backdrop-blur-sm p-8 border border-white/10 rounded-2xl shadow-2xl text-center max-w-[90%] transform group-hover:scale-105 transition-transform duration-500">
                         <Badge className="bg-primary text-primary-foreground mb-3">{vehicle.type}</Badge>
                         <h3 className="text-3xl font-black uppercase tracking-tighter mb-2 text-white">{vehicle.name}</h3>
                         <p className="text-sm text-gray-200 leading-relaxed">{vehicle.details}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full">
                <div className="mb-8">
                  <h4 className="text-xl font-bold uppercase tracking-widest text-primary mb-4 flex items-center gap-2">
                    <div className="w-8 h-[2px] bg-primary"></div>
                    Teknik Spesifikasyonlar
                  </h4>
                  <p className="text-muted-foreground text-lg mb-8">{vehicle.desc}</p>
                </div>

                <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                  {vehicle.specs.map((spec, si) => (
                    <div key={si} className="group cursor-default">
                      <p className="text-[10px] uppercase font-bold text-muted-foreground tracking-[0.25em] mb-1 group-hover:text-primary transition-colors">{spec.label}</p>
                      <p className="text-2xl font-black uppercase text-foreground border-b border-border/20 pb-2 group-hover:border-primary transition-colors">{spec.value}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                   <Button className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 font-bold uppercase tracking-widest rounded-none">Teknik Broşür</Button>
                   <Button variant="outline" className="border-border hover:bg-secondary/20 px-8 py-6 font-bold uppercase tracking-widest rounded-none">Konfigüratör</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 p-12 md:p-20 bg-primary/10 border border-primary/20 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-10 text-primary opacity-5 group-hover:opacity-10 transition-opacity">
             <Shield size={300} strokeWidth={1} />
          </div>
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 italic">Sizin İçin <span className="text-primary">Mükemmelleştirildi</span></h3>
            <p className="text-xl text-muted-foreground mb-10 leading-relaxed">
              Platformlarımızın tamamı modüler bir mimariye sahiptir. Operasyonel ihtiyaçlarınıza göre zırh seviyesi, sensör paketi ve silah sistemlerini özelleştirebilirsiniz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
               <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 text-lg font-bold uppercase tracking-widest rounded-none">
                  Filo Danışmanı ile Görüş
               </Button>
               <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-10 py-8 text-lg font-bold uppercase tracking-widest rounded-none">
                  Sanal Tanıtım İste
               </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
