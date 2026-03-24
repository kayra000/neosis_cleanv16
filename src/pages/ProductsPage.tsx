import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';
import { ASSETS } from '@/config/assets';
import { ChevronRight, Shield, Eye, Zap, Radio, Crosshair, Cpu } from 'lucide-react';

const PRODUCTS = [
  { id: "thermal",     name: "Termal Hedef Sistemi T-9X",             tagline: "Gece Görmede Sınır Tanımaz",             desc: "Yüksek çözünürlüklü soğutmasız termal kamera dizisi ve yapay zeka destekli hedef tanıma motoruyla donatılmış, gece ve olumsuz hava koşullarında kesintisiz gözetleme sağlayan saha çözümü.", img: ASSETS.products.thermal,     icon: Eye,      tags: ["Termal", "Gece Görüş", "AI Hedefleme"] },
  { id: "armor",       name: "Modüler Zırh Kiti MAK-5",               tagline: "Sahaya Hazır Ballistik Koruma",           desc: "STANAG 4569 Seviye 4 balistik koruma sunan, hafif kompozit panel sistemiyle mevcut araçlara 4 saatte monte edilebilen modüler zırh çözümü. IED ve RPG tehditlerine karşı optimize edilmiştir.",   img: ASSETS.products.armor,       icon: Shield,   tags: ["Ballistik", "IED", "Modüler"] },
  { id: "surveillance",name: "Saha Gözetleme Ağı SGN-360",            tagline: "360° Sürekli Alan Hakimiyeti",            desc: "Çoklu sensör füzyonuyla çalışan, yapay zeka anomali tespiti ve otomatik alarm sistemiyle donatılmış dağıtık gözetleme ağı. Komuta merkezine şifreli gerçek zamanlı görüntü aktarımı sağlar.",  img: ASSETS.products.surveillance,icon: Radio,    tags: ["Gözetleme", "Sensör Füzyonu", "Ağ"] },
  { id: "uav",         name: "Otonom İHA Platformu UAX-7",            tagline: "Keşiften Müdahaleye Tek Platform",        desc: "Hibrit dikey kalkış kapasiteli, yapay zeka güdümlü otonom insansız hava aracı. Uzun menzilli keşif, elektronik harp ve gerektiğinde manevra kabiliyetiyle çok görevli operasyon profili sunar.", img: ASSETS.products.uav,         icon: Zap,      tags: ["İHA", "Otonom", "Hibrit VTOL"] },
  { id: "weapon",      name: "Uzaktan Kumandalı Silah İstasyonu UKSI-12", tagline: "Personel Riske Atmadan Ateş Üstünlüğü", desc: "Tam stabilize, açık istasyonlu uzaktan kumandalı silah sistemi. Milimetrik hedefleme radarı, termal kanal ve çoklu silah konfigürasyonuyla her ortamda etkin çözüm.", img: ASSETS.products.weapon, icon: Crosshair, tags: ["UKSS", "Termal", "Çift Kanal"] },
  { id: "c2",          name: "Taktik Komuta Sistemi TKS-X",            tagline: "Sahayı Gerçek Zamanlı Yönet",             desc: "Tüm Neosis platformlarını tek ekrandan yöneten taktik komuta ve kontrol yazılımı. AI destekli durum değerlendirmesi, otonom görev planlama ve güvenli çok kanallı iletişim altyapısıyla saha hakimiyeti sağlar.", img: ASSETS.products.c2, icon: Cpu, tags: ["C2", "Yazılım", "Otonom"] },
];

const ProductsPage = () => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero */}
      <header className="relative pt-32 pb-20 overflow-hidden min-h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img src={ASSETS.productsHero} alt="" className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #060809 0%, #0e0b04 40%, rgba(197,174,121,0.08) 70%, #060809 100%)' }} />
        </div>
        <div className="absolute top-32 right-20 w-48 h-48 border border-primary/10 rotate-45 pointer-events-none" />
        <div className="absolute top-40 right-28 w-32 h-32 border border-primary/5 rotate-45 pointer-events-none" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 uppercase tracking-widest text-[10px]">Savunma Sistemleri</Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
              Ürün <br /><span className="text-primary italic">Kataloğu</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Termal sistemlerden zırhlı korumaya, insansız platformlardan komuta çözümlerine kadar tam spektrum savunma teknolojileri.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Ürünler — spotlight accordion layout */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="space-y-4">
            {PRODUCTS.map((product, i) => {
              const isActive = active === product.id;
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setActive(isActive ? null : product.id)}
                  className={`group cursor-pointer border transition-all duration-500 overflow-hidden ${
                    isActive ? 'border-primary/60 bg-card' : 'border-border/40 bg-card/50 hover:border-primary/30'
                  }`}
                >
                  <div className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Resim */}
                    <div className={`relative overflow-hidden flex-shrink-0 transition-all duration-500 ${isActive ? 'md:w-1/2' : 'md:w-2/5'}`}>
                      <div className={`transition-all duration-500 ${isActive ? 'h-72 md:h-full md:min-h-[300px]' : 'h-48 md:h-full md:min-h-[180px]'}`}>
                        <img
                          src={product.img}
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/20" />
                        <div className="absolute top-4 left-4 w-9 h-9 bg-black/50 backdrop-blur-sm rounded-lg flex items-center justify-center text-primary border border-primary/30">
                          <product.icon size={17} />
                        </div>
                      </div>
                    </div>

                    {/* İçerik */}
                    <div className="flex-1 p-8 flex flex-col justify-center min-w-0">
                      <p className="text-[10px] text-primary uppercase tracking-[0.3em] mb-2">{product.tagline}</p>
                      <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight mb-3">{product.name}</h3>

                      <AnimatePresence>
                        {isActive ? (
                          <motion.p
                            key="full"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-muted-foreground leading-relaxed mb-5 text-sm md:text-base overflow-hidden"
                          >
                            {product.desc}
                          </motion.p>
                        ) : (
                          <p className="text-muted-foreground text-sm leading-relaxed mb-5 line-clamp-2">{product.desc}</p>
                        )}
                      </AnimatePresence>

                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex flex-wrap gap-1.5">
                          {product.tags.map(t => (
                            <span key={t} className="text-[9px] px-2 py-0.5 border border-border/50 text-muted-foreground uppercase tracking-wider">{t}</span>
                          ))}
                        </div>
                        <ChevronRight size={18} className={`text-primary flex-shrink-0 ml-4 transition-transform duration-300 ${isActive ? 'rotate-90' : ''}`} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border/30" style={{ background: 'linear-gradient(135deg, rgba(197,174,121,0.05) 0%, transparent 60%)' }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
            Özel <span className="text-primary italic">Konfigürasyon</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
            Operasyonel ihtiyaçlarınıza özel ürün konfigürasyonu ve entegrasyon çözümleri için teknik ekibimizle iletişime geçin.
          </p>
          <Button size="lg" className="rounded-none px-10 py-7 font-bold uppercase tracking-widest text-lg">
            Teklif İste <ChevronRight className="ml-2" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
