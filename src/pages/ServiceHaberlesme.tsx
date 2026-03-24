import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';
import { ASSETS } from '@/config/assets';
import { Radio, Wifi } from 'lucide-react';


const ITEMS = [
  {
    icon: Radio,
    tag: "01 — Mesh",
    title: "Taktik Mesh Ağ Sistemleri",
    subtitle: "Kesintisiz Saha İletişimi",
    desc: "Araç-araç ve araç-komuta merkezi arası AES-256 şifreli, GPS bağımsız çalışabilen taktik mesh haberleşme sistemleri kuruyoruz. 2km menzilde adaptif frekans atlama özelliği ile gürültülü RF ortamlarında güvenilir iletişim sağlıyoruz.",
    points: ["2km şifreli mesh haberleşme", "GPS bağımsız çalışma", "Adaptif frekans atlama", "256 eş zamanlı node desteği"],
    img: ASSETS.services.haberlesme.img1,
  },
  {
    icon: Wifi,
    tag: "02 — SATCOM",
    title: "SATCOM & Uzun Menzil İletişim",
    subtitle: "Global Bağlantı",
    desc: "Uydu haberleşme sistemleri entegrasyonu ile saha birlikleri ve komuta merkezi arasında küresel ölçekte güvenli veri ve ses iletişimi sağlıyoruz. NATO STANAG uyumlu protokollerle mevcut altyapıya entegre oluruz.",
    points: ["SATCOM entegrasyonu", "NATO STANAG uyumlu", "Şifreli ses ve veri", "Redundant bağlantı mimarisi"],
    img: ASSETS.services.haberlesme.img2,
  },
];

const ServiceHaberlesme = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />

    <header className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img src={ASSETS.services.haberlesme.hero} alt="" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] uppercase tracking-[0.4em] text-primary">Hizmetler</span>
            <span className="w-8 h-px bg-primary/50" />
            <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Haberleşme</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Haberleşme <br /><span className="text-primary italic">Sistemleri</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Taktik mesh ağlardan uydu haberleşmesine kadar kesintisiz saha iletişim altyapısı.
          </p>
        </motion.div>
      </div>
    </header>

    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="space-y-32">
          {ITEMS.map((item, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
              <div className="relative group">
                <div className="absolute -inset-2 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative border border-border/40 overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-primary/80 border border-primary/30 px-3 py-1">{item.tag}</span>
                  </div>
                </div>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary/15 border border-primary/20 flex items-center justify-center text-primary mb-6"><item.icon size={22} /></div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary mb-3">{item.subtitle}</p>
                <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">{item.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{item.desc}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {item.points.map((p, pi) => (
                    <div key={pi} className="flex items-center gap-3 border border-border/30 px-4 py-3 bg-secondary/5">
                      <span className="w-1 h-4 bg-primary flex-shrink-0" />
                      <span className="text-xs uppercase tracking-wider font-medium">{p}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default ServiceHaberlesme;
