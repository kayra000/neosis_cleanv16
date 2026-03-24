import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Wrench, Cog, HeadphonesIcon, GraduationCap, Shield, Zap } from 'lucide-react';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';

const ServicesPage = () => {
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
              Hizmetlerimiz
            </Badge>
            <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6">
              Kapsamlı <span className="text-primary italic">Destek</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Ürün teslimatından sonra da yanınızdayız. Bakım, eğitim ve teknik destek hizmetlerimizle operasyonel hazırlığınızı garanti altına alıyoruz.
            </p>
          </motion.div>
        </div>
      </header>

      {/* Services Grid */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: "Bakım ve Onarım",
                desc: "Periyodik bakım, arıza tespiti ve hızlı onarım hizmetleri ile araçlarınızın kesintisiz çalışmasını sağlıyoruz.",
                features: [
                  "7/24 Acil Müdahale",
                  "Yerinde Servis",
                  "Orijinal Yedek Parça",
                  "Önleyici Bakım Programları"
                ]
              },
              {
                icon: Cog,
                title: "Sistem Entegrasyonu",
                desc: "Mevcut sistemlerinize otonom çözümlerimizi sorunsuz entegre ediyor, özelleştirilmiş konfigürasyonlar sunuyoruz.",
                features: [
                  "Uyumluluk Analizi",
                  "Özel Yazılım Geliştirme",
                  "Test ve Doğrulama",
                  "Devreye Alma Desteği"
                ]
              },
              {
                icon: GraduationCap,
                title: "Eğitim Programları",
                desc: "Operatör ve teknisyen eğitimleri ile personelin sistem kullanımında tam yetkinlik kazanmasını sağlıyoruz.",
                features: [
                  "Teorik ve Pratik Eğitim",
                  "Simülatör Eğitimi",
                  "Sertifikasyon",
                  "Yenileme Kursları"
                ]
              },
              {
                icon: HeadphonesIcon,
                title: "Teknik Destek",
                desc: "Uzman ekibimiz, tüm sorularınız ve teknik sorunlarınız için 7/24 hizmetinizdedir.",
                features: [
                  "Telefon Desteği",
                  "Uzaktan Bağlantı",
                  "Dokümantasyon",
                  "Yazılım Güncellemeleri"
                ]
              },
              {
                icon: Shield,
                title: "Garanti ve Sigorta",
                desc: "Kapsamlı garanti paketleri ve sigorta seçenekleri ile yatırımınızı koruyoruz.",
                features: [
                  "5 Yıl Garanti",
                  "Genişletilmiş Garanti",
                  "Sigorta Danışmanlığı",
                  "Hasar Yönetimi"
                ]
              },
              {
                icon: Zap,
                title: "Modernizasyon",
                desc: "Mevcut araçlarınızı en son teknoloji ile güncelleyerek operasyonel ömürlerini uzatıyoruz.",
                features: [
                  "Donanım Yükseltme",
                  "Yazılım Güncelleme",
                  "Sensör Ekleme",
                  "Performans Optimizasyonu"
                ]
              }
            ].map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-secondary/5 border-border/50 hover:border-primary/50 transition-colors">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black uppercase mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.desc}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, fi) => (
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

      {/* Service Packages */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">
              Hizmet <span className="text-primary">Paketleri</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              İhtiyaçlarınıza uygun esnek hizmet paketleri
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Temel Paket",
                price: "Teklif Alın",
                features: [
                  "Yıllık Bakım (2 Ziyaret)",
                  "Telefon Desteği",
                  "Yazılım Güncellemeleri",
                  "Temel Eğitim"
                ]
              },
              {
                name: "Profesyonel Paket",
                price: "Teklif Alın",
                popular: true,
                features: [
                  "Yıllık Bakım (4 Ziyaret)",
                  "7/24 Teknik Destek",
                  "Öncelikli Servis",
                  "İleri Eğitim Programı",
                  "Yedek Parça İndirimi"
                ]
              },
              {
                name: "Kurumsal Paket",
                price: "Teklif Alın",
                features: [
                  "Sınırsız Bakım",
                  "Özel Destek Ekibi",
                  "Yerinde Teknisyen",
                  "Özelleştirilmiş Eğitimler",
                  "Genişletilmiş Garanti",
                  "Modernizasyon Desteği"
                ]
              }
            ].map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`p-8 h-full ${pkg.popular ? 'bg-primary/10 border-primary' : 'bg-background border-border/50'}`}>
                  {pkg.popular && (
                    <Badge className="bg-primary text-primary-foreground mb-4">En Popüler</Badge>
                  )}
                  <h3 className="text-2xl font-black uppercase mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-black text-primary mb-6">{pkg.price}</div>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, fi) => (
                      <li key={fi} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0"></div>
                        <span className="text-sm">{feature}</span>
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

export default ServicesPage;
