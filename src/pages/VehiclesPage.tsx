import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Target, Zap, Eye } from 'lucide-react';
import { Navigation } from '@/components/layouts/Navigation';
import { ASSETS } from '@/config/assets';
import { Footer } from '@/components/layouts/Footer';

const fleetVehicles = [
  {
    name: "Vanguard Scout MK-IV",
    type: "Hafif Sınıf Keşif Platformu",
    desc: "Yüksek hızlı, düşük akustik izli keşif platformu. Gizli operasyonlar için optimize edilmiştir.",
    img: ASSETS.vehicles.vanguard,
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
    img: ASSETS.vehicles.atlas,
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
    img: ASSETS.vehicles.sentinel,
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

const VehiclesPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden min-h-[60vh] flex items-center bg-secondary/5">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 uppercase tracking-widest text-xs">
              Otonom Filo
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Araç <span className="text-primary italic">Kataloğu</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Neosis'in ileri teknoloji otonom araç filosunu keşfedin. Her platform, zorlu muharebe koşullarında üstün performans için tasarlanmıştır.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Vehicles Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
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
                {/* Vehicle Image */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/0 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                      <img 
                        src={vehicle.img} 
                        alt={vehicle.name} 
                        className="w-full aspect-[4/3] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                      />
                    </div>
                  </div>
                </div>

                {/* Technical Specs */}
                <div className="flex-1 w-full">
                  <div className="mb-8">
                    <Badge className="bg-primary/20 text-primary border-primary/30 mb-3 uppercase tracking-widest text-[10px]">{vehicle.type}</Badge>
                    <h3 className="text-3xl font-black uppercase tracking-tighter mb-3">{vehicle.name}</h3>
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
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Section */}
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
                 <Button size="lg" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                   className="bg-primary text-primary-foreground hover:bg-primary/90 px-10 py-8 text-lg font-bold uppercase tracking-widest rounded-none">
                    Filo Danışmanı ile Görüş
                 </Button>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Karşılaştırma tablosu */}
      <section className="py-24 bg-secondary/5 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 uppercase tracking-widest text-[10px]">Platform Seçim Rehberi</Badge>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Platform <span className="text-primary italic">Karşılaştırması</span></h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/50">
                  <th className="text-left py-4 pr-8 text-xs uppercase tracking-widest text-muted-foreground font-bold">Özellik</th>
                  {["Vanguard", "Atlas", "Sentinel"].map(n => (
                    <th key={n} className="py-4 px-6 text-center text-xs uppercase tracking-widest font-black text-primary">{n}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  ["Sınıf", "Hafif Keşif", "Ağır Lojistik", "Muharebe"],
                  ["Menzil", "800 km", "1.200 km", "600 km"],
                  ["Yük Kapasitesi", "150 kg", "5.000 kg", "200 kg"],
                  ["Zırh Seviyesi", "Seviye 2", "Seviye 2", "Seviye 4"],
                  ["Otonom", "Level 5", "Level 4", "Level 5"],
                  ["Gece Operasyon", "✓", "✓", "✓"],
                ].map(([feat, ...vals], ri) => (
                  <tr key={ri} className={`border-b border-border/20 ${ri % 2 === 0 ? 'bg-secondary/5' : ''}`}>
                    <td className="py-4 pr-8 text-xs uppercase tracking-widest text-muted-foreground font-bold">{feat}</td>
                    {vals.map((v, vi) => (
                      <td key={vi} className="py-4 px-6 text-center font-semibold">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Kabiliyetler */}
      <section className="py-24 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 uppercase tracking-widest text-[10px]">Platform DNA</Badge>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-8 leading-tight">
                Her Araçta <span className="text-primary italic">Ortak Mimari</span>
              </h2>
              <div className="space-y-6">
                {[
                  { label: "Otonom Navigasyon", pct: 100 },
                  { label: "Siber Güvenlik Katmanı", pct: 100 },
                  { label: "Çapraz Platform Yazılım Uyumu", pct: 100 },
                  { label: "Sahada Hızlı Güncelleme", pct: 100 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs uppercase tracking-widest font-bold">{item.label}</span>
                      <span className="text-xs text-primary font-bold">{item.pct}%</span>
                    </div>
                    <div className="h-[2px] bg-secondary/30 w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="h-full bg-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { val: "< 15ms", label: "Sensör Yanıt Süresi" },
                { val: "AES-256", label: "Şifreleme Standardı" },
                { val: "IP67", label: "Koruma Sınıfı" },
                { val: "MIL-810H", label: "Dayanıklılık Cert." },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="border border-border/50 bg-card p-6 hover:border-primary/40 transition-colors"
                >
                  <p className="text-2xl md:text-3xl font-black text-primary mb-1">{stat.val}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default VehiclesPage;
