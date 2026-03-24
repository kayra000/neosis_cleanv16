import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Crosshair, Eye, Thermometer } from 'lucide-react';
import { Navigation } from '@/components/layouts/Navigation';
import { ASSETS } from '@/config/assets';
import { Footer } from '@/components/layouts/Footer';

const ThermalTargetsPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden min-h-[70vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={ASSETS.thermalBg}
            alt="Thermal Targets"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <Badge variant="outline" className="mb-4 border-primary text-primary px-4 py-1 uppercase tracking-widest text-xs">
              Eğitim & Simülasyon
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Isı Yayan <span className="text-primary italic">Hedef Sistemleri</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
              Termal görüntüleme sistemlerinin testi ve personel eğitimi için kritik öneme sahip, gerçekçi ısı imzasına sahip hedef üretim ve kurulum hizmetleri.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Target Types */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Hedef <span className="text-primary">Kategorileri</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Farklı eğitim senaryoları için özel olarak tasarlanmış termal hedef sistemleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "İnsan Silueti Hedefler",
                desc: "Gerçek insan ısı imzasını taklit eden, ayakta, yatar pozisyon ve hareket halindeki hedefler.",
                features: [
                  "36.5°C - 37°C ısı aralığı",
                  "Değiştirilebilir pozisyonlar",
                  "Uzaktan kontrol desteği",
                  "Dayanıklı yapı"
                ]
              },
              {
                icon: Crosshair,
                title: "Araç Hedefleri",
                desc: "Hafif ve ağır araçların motor, egzoz ve gövde ısı imzalarını simüle eden hedefler.",
                features: [
                  "80°C - 150°C ısı aralığı",
                  "Çoklu ısı noktası",
                  "Gerçekçi boyutlar",
                  "Hareketli platform opsiyonu"
                ]
              },
              {
                icon: Thermometer,
                title: "Tank & Zırhlı Araç Hedefleri",
                desc: "Ağır zırhlı araçların karakteristik ısı dağılımını yansıtan büyük ölçekli hedefler.",
                features: [
                  "100°C - 200°C ısı aralığı",
                  "Motor ve egzoz simülasyonu",
                  "1:1 ölçek seçeneği",
                  "Modüler yapı"
                ]
              }
            ].map((target, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-background border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <target.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4">{target.title}</h3>
                  <p className="text-muted-foreground mb-6">{target.desc}</p>
                  <ul className="space-y-2">
                    {target.features.map((feature, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">
                Kullanım <span className="text-primary">Alanları</span>
              </h2>
              <div className="space-y-6">
                {[
                  {
                    title: "Termal Kamera Testi",
                    desc: "Yeni termal görüntüleme sistemlerinin kalibrasyonu ve performans testleri."
                  },
                  {
                    title: "Personel Eğitimi",
                    desc: "Termal görüntüleme cihazı kullanımında personel yetkinliğinin geliştirilmesi."
                  },
                  {
                    title: "Taktik Tatbikatlar",
                    desc: "Gerçekçi senaryolarda termal hedef tespiti ve takibi eğitimleri."
                  },
                  {
                    title: "Sistem Entegrasyonu",
                    desc: "Otonom araçlara entegre termal sensörlerin test ve doğrulaması."
                  }
                ].map((app, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 shrink-0"></div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{app.title}</h4>
                      <p className="text-muted-foreground">{app.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
              <img 
                src={ASSETS.thermalBg}
                alt="Thermal Target System"
                className="w-full h-auto rounded-lg shadow-2xl border border-border/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Teknik <span className="text-primary">Özellikler</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: "Isı Aralığı", value: "30°C - 250°C" },
              { label: "Hassasiyet", value: "±0.5°C" },
              { label: "Çalışma Süresi", value: "8+ Saat" },
              { label: "Güç Kaynağı", value: "Batarya / Şebeke" },
              { label: "Dayanıklılık", value: "IP65 Koruma" },
              { label: "Kontrol", value: "Kablolu / Kablosuz" }
            ].map((spec, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                viewport={{ once: true }}
                className="bg-background border border-border/50 p-6 rounded-lg"
              >
                <p className="text-xs uppercase font-bold text-muted-foreground tracking-widest mb-2">{spec.label}</p>
                <p className="text-3xl font-black text-primary">{spec.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-primary/10 border border-primary/20 rounded-3xl p-12 md:p-20 text-center">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6">
              Eğitim Sahanızı <span className="text-primary italic">Modernize Edin</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Termal hedef sistemlerimiz hakkında detaylı bilgi almak ve özel çözümler için bizimle iletişime geçin.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 px-12 py-8 text-lg font-bold uppercase tracking-widest rounded-none">
                Teklif Alın
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-12 py-8 text-lg font-bold uppercase tracking-widest rounded-none">
                Katalog İndirin
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ThermalTargetsPage;
