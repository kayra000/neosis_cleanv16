import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Cpu, Shield, Zap, Radio } from 'lucide-react';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';

const ComponentsPage = () => {
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
              Modüler Sistemler
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Sistem <span className="text-primary italic">Bileşenleri</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Otonom dönüşüm kitlerimizin temelini oluşturan ileri teknoloji bileşenler. Her modül, mevcut araçlarınızı akıllı savaş platformlarına dönüştürmek için tasarlanmıştır.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Components Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-2 h-auto md:h-[600px] mb-16">
            <Card className="md:col-span-2 md:row-span-2 overflow-hidden bg-secondary/10 border-border/50 group relative">
              <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_fb27fe84-e078-43a0-be8f-6f68cce2c6dc.jpg" 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                alt="Tactical Autonomy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent p-8 flex flex-col justify-end">
                <Cpu className="text-primary mb-4 w-10 h-10" />
                <h3 className="text-3xl font-black uppercase mb-2">Taktik Yapay Zeka Motoru</h3>
                <p className="text-muted-foreground text-lg">GPS erişimi olmayan ortamlarda gerçek zamanlı rota planlama ve tehdit değerlendirme.</p>
              </div>
            </Card>

            <Card className="md:col-span-2 overflow-hidden bg-secondary/20 border-border/50 p-8 flex flex-col justify-center">
              <div className="flex items-start gap-4">
                <Shield className="text-primary w-12 h-12 shrink-0" />
                <div>
                  <h3 className="text-2xl font-black uppercase mb-2">Balistik Koruma</h3>
                  <p className="text-muted-foreground">Yüksek kalibreli tehditlere karşı maksimum hayatta kalma için Seviye 4 kompozit zırh kaplaması.</p>
                </div>
              </div>
            </Card>

            <Card className="bg-primary/10 border-primary/20 p-8 flex flex-col justify-center">
              <Zap className="text-primary mb-4 w-8 h-8" />
              <h3 className="text-xl font-black uppercase mb-2">Hibrit Güç</h3>
              <p className="text-sm text-muted-foreground">Sessiz gizlilik operasyonları için çift modlu elektrik/dizel itiş gücü.</p>
            </Card>

            <Card className="bg-secondary/20 border-border/50 p-8 flex flex-col justify-center">
              <Radio className="text-primary mb-4 w-8 h-8" />
              <h3 className="text-xl font-black uppercase mb-2">SATCOM Senkronizasyonu</h3>
              <p className="text-sm text-muted-foreground">Küresel uzaktan komuta için şifreli uydu iletişimleri.</p>
            </Card>
          </div>

          {/* Detailed Components */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-24">
            {[
              {
                title: "Otonom Sürüş Ünitesi",
                desc: "Seviye 5 tam otonom sürüş kabiliyeti. Tüm arazi koşullarında insan müdahalesi olmadan görev yürütme.",
                features: ["360° LIDAR Tarama", "Termal Görüntüleme", "Radar Füzyonu"]
              },
              {
                title: "Komuta Kontrol Sistemi",
                desc: "Merkezi kontrol istasyonundan veya mobil cihazlardan tam araç kontrolü ve görev yönetimi.",
                features: ["Gerçek Zamanlı Telemetri", "Şifreli İletişim", "Çoklu Araç Kontrolü"]
              },
              {
                title: "Güç Yönetim Modülü",
                desc: "Akıllı enerji dağıtımı ile maksimum operasyon süresi ve sistem güvenilirliği.",
                features: ["Hibrit Güç Desteği", "Yedekli Sistemler", "Hızlı Şarj"]
              },
              {
                title: "Sensör Füzyon Paketi",
                desc: "Çoklu sensör verilerini birleştirerek tam çevresel farkındalık sağlar.",
                features: ["LIDAR + Kamera", "Radar + Termal", "GPS + INS"]
              },
              {
                title: "Siber Güvenlik Kalkanı",
                desc: "Askeri seviye şifreleme ve saldırı tespit sistemleri ile tam siber koruma.",
                features: ["AES-256 Şifreleme", "Saldırı Tespiti", "Güvenli Boot"]
              },
              {
                title: "Modüler Silah Entegrasyonu",
                desc: "Çeşitli silah sistemlerinin hızlı entegrasyonu için standart arayüzler.",
                features: ["UKSS Desteği", "Füze Entegrasyonu", "Ateş Kontrol"]
              }
            ].map((component, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-secondary/5 border-border/50 hover:border-primary/50 transition-colors">
                  <h3 className="text-2xl font-black uppercase mb-4">{component.title}</h3>
                  <p className="text-muted-foreground mb-6">{component.desc}</p>
                  <ul className="space-y-2">
                    {component.features.map((feature, fi) => (
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

      <Footer />
    </div>
  );
};

export default ComponentsPage;
