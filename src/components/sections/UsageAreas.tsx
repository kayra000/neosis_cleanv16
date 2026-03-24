import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye, Truck, Activity, Crosshair, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const usageAreas = [
  {
    title: "Sınır Güvenliği ve Gözetleme",
    desc: "7/24 kesintisiz devriye ve tehdit tespiti ile sınır hatlarını güvence altına alır. Yapay zeka destekli analiz sistemleri ile insan hatasını sıfıra indirir.",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_43e42e5d-e810-40a3-9a31-69b2bb809661.jpg",
    icon: Eye
  },
  {
    title: "Otonom Lojistik Konvoy",
    desc: "Tehlikeli bölgelerde personel riske atılmadan mühimmat ve ikmal sevkiyatı sağlar. Sürü zekası ile araçlar arası mesafe ve hız optimizasyonu yapar.",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_aeb973f7-2192-4d4a-9288-2b069f30b203.jpg",
    icon: Truck
  },
  {
    title: "Tıbbi Tahliye / Yaralı Nakli",
    desc: "Sıcak çatışma bölgelerinden yaralı personelin güvenli ve hızlı tahliyesini gerçekleştirir. Dahili yaşam destek üniteleri ile otonom hastane görevi görür.",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_3ba743f6-3c7d-4dba-9e68-5b7c0e9d0766.jpg",
    icon: Activity
  },
  {
    title: "EOD / Tehlikeli Operasyonlar",
    desc: "Patlayıcı imha ve keşif görevlerinde insan hayatını riske atmadan müdahale imkanı sunar. Hassas robotik kollar ve çoklu sensör füzyonu ile çalışır.",
    img: "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_02fa2ecd-2a1f-4705-a955-bdc2430d2230.jpg",
    icon: Crosshair
  }
];

export const UsageAreas = () => {
  const [hoveredUsageIndex, setHoveredUsageIndex] = React.useState<number | null>(null);

  return (
    <section className="py-24 bg-background border-b border-border/30 relative overflow-hidden min-h-[750px] flex flex-col justify-center">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Operasyonel <span className="text-primary">Kullanım Alanları</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Neosis otonom sistemleri, muharebe alanının değişen ihtiyaçlarına göre çok yönlü görev profilleri sunar.
          </p>
        </div>

        <div className="relative min-h-[500px]">
          <AnimatePresence mode="wait">
            {hoveredUsageIndex === null ? (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.4 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {usageAreas.map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -10 }}
                    onMouseEnter={() => setHoveredUsageIndex(i)}
                    className="group relative overflow-hidden rounded-lg bg-card border border-border/50 h-[450px] cursor-pointer"
                  >
                    <div className="absolute inset-0 z-0">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                    </div>
                    <div className="relative h-full flex flex-col justify-end p-6 z-10">
                      <div className="w-12 h-12 bg-primary/20 backdrop-blur-sm rounded-lg flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                        <item.icon size={24} />
                      </div>
                      <h3 className="text-xl font-bold uppercase text-white mb-2 leading-tight">{item.title}</h3>
                      <p className="text-sm text-gray-300 line-clamp-2">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                onMouseLeave={() => setHoveredUsageIndex(null)}
                className="w-full h-[450px] relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-primary/20"
              >
                <img src={usageAreas[hoveredUsageIndex].img} alt={usageAreas[hoveredUsageIndex].title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-6"
                  >
                    <div className="w-20 h-20 bg-primary rounded-2xl flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/20">
                      {React.createElement(usageAreas[hoveredUsageIndex].icon, { size: 40 })}
                    </div>
                    <div>
                      <Badge className="bg-primary text-primary-foreground mb-2 uppercase tracking-widest text-[10px]">Operasyonel Senaryo</Badge>
                      <h3 className="text-4xl md:text-6xl font-black uppercase text-white tracking-tighter leading-none">{usageAreas[hoveredUsageIndex].title}</h3>
                    </div>
                  </motion.div>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="text-xl md:text-2xl text-gray-300 max-w-4xl leading-relaxed"
                  >
                    {usageAreas[hoveredUsageIndex].desc}
                  </motion.p>
                  <div className="mt-8 flex gap-4">
                     <Button className="bg-primary text-primary-foreground rounded-none px-8 py-6 font-bold uppercase tracking-widest">Detaylı Bilgi</Button>
                     <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 py-6 font-bold uppercase tracking-widest">Vaka Analizi</Button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
