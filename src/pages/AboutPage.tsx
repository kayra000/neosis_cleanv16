import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';
import { ASSETS } from '@/config/assets';
import { Target, Eye, Shield, Globe } from 'lucide-react';

const VALUES = [
  { icon: Shield, title: "Güvenilirlik", desc: "Geliştirdiğimiz her sistem sahada insan hayatını koruyor. Tasarım ve testlerimizde sıfır tolerans ilkesini benimsiyoruz." },
  { icon: Target, title: "Hassasiyet", desc: "Milimetre toleranslar ve milisaniye gecikme süreleri bizim standartlarımızdır. Mühendislikte mükemmeliyetten taviz vermeyiz." },
  { icon: Eye, title: "Öngörü", desc: "Bugünün tehditlerine değil yarının çatışma ortamına çözüm üretiyoruz. Ar-Ge yatırımımız gelirlerimizin %18'ini oluşturuyor." },
  { icon: Globe, title: "Egemenlik", desc: "Yerli ve milli teknoloji stratejik zorunluluktur. Kritik bileşenlerimizin %87'si yurt içinde üretilmektedir." },
];

const STATS = [
  { value: "2019", label: "Kuruluş" }, { value: "340+", label: "Uzman" },
  { value: "87%", label: "Yerlilik" }, { value: "18%", label: "Ar-Ge" },
  { value: "12", label: "Patent" }, { value: "4", label: "Ülke" },
];

const CERTS = ["NATO STANAG 4569", "MIL-STD-810H", "ISO 9001:2015", "AQAP 2110", "ISO/IEC 27001", "SSB Onaylı"];

const REFS = [
  { quote: "Neosis'in otonom filosu sınır güvenliği operasyonlarımızı kökten dönüştürdü. Personel ihtiyacını üçte birine indirirken algılama kapasitesi iki katına çıktı.", name: "Brig. Gen. M. Arslan", title: "Taktik Operasyonlar Komutanlığı", img: ASSETS.refs[0] },
  { quote: "Yalnızca kit modeli mevcut araçlarımızı kısa sürede otonom platforma dönüştürdü. Entegrasyon ekibinin teknik desteği sahada son derece etkiliydi.", name: "Dr. K. Yıldırım", title: "Savunma Araştırma ve Geliştirme Dairesi", img: ASSETS.refs[1] },
  { quote: "Termal sistemler ve C2 yazılımı entegrasyonu ekibimizin durum farkındalığını dramatik biçimde artırdı. Sahada güvenilir ve sürdürülebilir bir çözüm.", name: "Kd. Alb. S. Doğan", title: "Muharebe Destek Komutanlığı", img: ASSETS.refs[2] },
];

const AboutPage = () => (
  <div className="min-h-screen bg-background text-foreground">
    <Navigation />

    {/* Hero */}
    <header className="relative pt-32 pb-20 min-h-[60vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img src={ASSETS.aboutBg} alt="" className="w-full h-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-background/30" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 uppercase tracking-widest text-[10px]">Kimiz</Badge>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
            Savunmanın <br /><span className="text-primary italic">Geleceğini</span><br />İnşa Ediyoruz
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Neosis Savunma, 2019'dan bu yana otonom sistemler ve yapay zeka teknolojilerini birleştirerek Türkiye'nin savunma kapasitesini küresel ölçekte konumlandırmaktadır.
          </p>
        </motion.div>
      </div>
    </header>

    {/* Stats */}
    <section className="py-16 border-y border-border/30 bg-secondary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8">
          {STATS.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="text-center">
              <p className="text-3xl md:text-4xl font-black text-primary mb-1">{s.value}</p>
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Misyon & Vizyon */}
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Target size={20} /></div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Misyonumuz</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">
              İnsan Hayatını Korumak İçin <span className="text-primary">Teknolojiyi Araçlaştırmak</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Otonom sistemler aracılığıyla personelin tehlikeli ortamlara maruziyetini minimuma indirmek, operasyonel etkinliği maksimuma çıkarmak. Bunu yaparken yerli teknolojiye ve insan merkezli tasarıma bağlı kalmak.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center text-primary"><Eye size={20} /></div>
              <span className="text-xs uppercase tracking-[0.3em] text-primary font-bold">Vizyonumuz</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-6 leading-tight">
              2030'da Global Savunmada <span className="text-primary">İlk 10</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Otonom muharebe teknolojisinde küresel referans noktası olmak. Türkiye'nin savunma ihracatına liderlik ederek müttefik ülkelere entegre sistem çözümleri sunan global bir oyuncu haline gelmek.
            </p>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Değerler */}
    <section className="py-24 bg-secondary/5 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Temel <span className="text-primary italic">Değerlerimiz</span></h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((v, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="border border-border/50 bg-card p-8 hover:border-primary/40 transition-colors">
              <div className="w-12 h-12 bg-primary/15 rounded-lg flex items-center justify-center text-primary mb-6"><v.icon size={24} /></div>
              <h3 className="text-lg font-black uppercase tracking-wider mb-3">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Referanslar */}
    <section className="py-24 border-t border-border/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 uppercase tracking-widest text-[10px]">Saha Deneyimleri</Badge>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">
            Referanslarımız & <span className="text-primary italic">Görüşler</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {REFS.map((ref, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="hover:border-primary/40 transition-colors group">
              <div className="h-40 overflow-hidden">
                <img src={ref.img} alt="" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6 relative border border-border/50 bg-card group-hover:border-primary/40 transition-colors">
                <div className="absolute left-6 -top-3 w-6 h-6 bg-primary rounded-full flex items-center justify-center text-black font-black text-xs">"</div>
                <p className="text-sm text-muted-foreground italic leading-relaxed mb-5 pt-2">{ref.quote}</p>
                <div className="border-t border-border/30 pt-4">
                  <p className="font-black uppercase text-sm tracking-wider">{ref.name}</p>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-widest mt-1">{ref.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Sertifikalar */}
    <section className="py-16 border-t border-border/30 bg-secondary/5">
      <div className="container mx-auto px-4">
        <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8">Akreditasyon & Sertifikalar</p>
        <div className="flex flex-wrap justify-center gap-4">
          {CERTS.map((cert, i) => (
            <div key={i} className="px-5 py-2.5 border border-border/50 text-xs uppercase tracking-widest font-bold text-muted-foreground hover:border-primary hover:text-primary transition-colors">{cert}</div>
          ))}
        </div>
      </div>
    </section>

    <Footer />
  </div>
);

export default AboutPage;
