import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';
import { ASSETS } from '@/config/assets';
import { Award, CheckCircle, Flag, Zap, Globe, Shield } from 'lucide-react';

const MILESTONES = [
  { year: "2019", title: "Kuruluş", desc: "Neosis Savunma A.Ş. Ankara'da kuruldu. Savunma Sanayii Başkanlığı'ndan geliştirici lisansı alındı.", icon: Flag, highlight: false, img: null },
  { year: "2020", title: "İlk Proje — ATLAS Şasesi", desc: "SSB destekli ilk otonom şasi prototipi tamamlandı. Kapalı alan sürüş testleri başarıyla geçildi.", icon: CheckCircle, highlight: false, img: null },
  { year: "2021", title: "Saha Testi & STANAG Sertifikası", desc: "MAK-5 zırh kiti STANAG 4569 Seviye 4 sertifikasını aldı. Açık arazi testlerinde 1.200 km kat edildi.", icon: Shield, highlight: false, img: null },
  { year: "2022", title: "İlk İhracat Anlaşması", desc: "İki Körfez ülkesiyle otonom araç sistemi tedarik anlaşması imzalandı. Toplam değer 42 milyon USD.", icon: Globe, highlight: true, img: ASSETS.milestones.y2022 },
  { year: "2023", title: "Taktik YZ Motoru — NATO Değerlendirmesi", desc: "Taktik YZ Motoru NATO DTA Programı'na kabul edildi. Brüksel'de teknik sunum gerçekleştirildi.", icon: Zap, highlight: false, img: null },
  { year: "2024", title: "IDEF & SOFEX Çift Ödülü", desc: "IDEF'te 'En İnovatif Platform', SOFEX'te 'Saha Hazırlığı' ödülleri kazanıldı. Filo 7 ülkeye ulaştı.", icon: Award, highlight: true, img: ASSETS.milestones.y2024 },
  { year: "2025", title: "Sürü Zekası Prototipi", desc: "10 araçlık otonom sürü zekası prototipi kapalı alanda test edildi. %94 görev başarı oranı elde edildi.", icon: Zap, highlight: false, img: null },
  { year: "2026", title: "Yeni Nesil Platform — UAX-7", desc: "Hibrit VTOL İHA platformu UAX-7 sahaya sürüldü. Üç ülkeyle ön mutabakat muhtırası imzalandı.", icon: Flag, highlight: true, img: ASSETS.milestones.y2026 },
];

const MorePage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />

    {/* Hero */}
    <header className="relative pt-32 pb-20 min-h-[55vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={ASSETS.moreBg} alt="" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 uppercase tracking-widest text-[10px]">2019 — 2026</Badge>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Başarı <br /><span className="text-primary italic">Hikayeleri</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Kuruluşumuzdan bu yana geçen 7 yılda yazdığımız kilometre taşları ve sahaya taşınan teknolojiler.
          </p>
        </motion.div>
      </div>
    </header>

    {/* Timeline */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[2px] bg-border/50 -translate-x-1/2" />

            {MILESTONES.map((m, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.05 }}
                  className={`relative flex items-start gap-8 mb-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
                >
                  {/* Nokta */}
                  <div className="absolute left-[20px] md:left-1/2 -translate-x-1/2 mt-1 z-10">
                    <div className={`w-[18px] h-[18px] rounded-full border-2 ${m.highlight ? 'bg-primary border-primary shadow-[0_0_12px_rgba(197,174,121,0.6)]' : 'bg-background border-border'}`} />
                  </div>

                  {/* İçerik */}
                  <div className={`pl-14 md:pl-0 md:w-[calc(50%-32px)] ${isLeft ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`inline-flex items-center gap-2 mb-2 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                      <span className={`text-xs uppercase tracking-[0.25em] font-bold ${m.highlight ? 'text-primary' : 'text-muted-foreground'}`}>{m.year}</span>
                      <div className={`w-5 h-5 rounded flex items-center justify-center ${m.highlight ? 'bg-primary text-primary-foreground' : 'bg-secondary text-muted-foreground'}`}>
                        <m.icon size={11} />
                      </div>
                    </div>
                    <h3 className="text-lg font-black uppercase tracking-tight mb-2">{m.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{m.desc}</p>

                    {/* Milestone görseli — sadece highlight olanlarda */}
                    {m.img && (
                      <div className={`overflow-hidden border border-border/40 ${isLeft ? 'md:ml-auto' : ''}`} style={{ maxWidth: 280 }}>
                        <img src={m.img} alt={m.title} className="w-full h-36 object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                      </div>
                    )}
                  </div>

                  {/* Boş taraf */}
                  <div className="hidden md:block md:w-[calc(50%-32px)]" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default MorePage;
