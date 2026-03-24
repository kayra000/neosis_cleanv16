import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Shield, Cpu, Zap, Radio, Globe, Mail, Phone, MapPin, ChevronRight, Menu, X, Target, Wrench, Crosshair, Truck, Activity, Eye, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [hoveredUsageIndex, setHoveredUsageIndex] = React.useState<number | null>(null);

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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-sm rotate-45 flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary-foreground -rotate-45" />
            </div>
            <span className="text-2xl font-bold tracking-tighter uppercase italic">Neosis</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            <a href="#vehicles" className="hover:text-primary transition-colors">Araçlar</a>
            <a href="#kits" className="hover:text-primary transition-colors">Kitler</a>
            <a href="#targets" className="hover:text-primary transition-colors">Hedef Sistemleri</a>
            <a href="#specs" className="hover:text-primary transition-colors">Teknik</a>
            <a href="#faq" className="hover:text-primary transition-colors">SSS</a>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground ml-4">
              İletişime Geç
            </Button>
          </div>

          <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 animate-fade-in z-50">
            <a href="#vehicles" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Araçlar</a>
            <a href="#kits" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Kitler</a>
            <a href="#targets" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Hedef Sistemleri</a>
            <a href="#specs" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">Teknik</a>
            <a href="#faq" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold">SSS</a>
            <Button className="w-full bg-primary text-primary-foreground">İletişime Geç</Button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="relative pt-32 pb-20 overflow-hidden min-h-[90vh] flex items-center">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
                İleri Savunma Teknolojileri
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                Otonom <span className="text-primary italic">Savaş</span> Alanı <br/>Çözümleri
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Neosis Defense; anahtar teslim otonom araçlardan modüler dönüşüm kitlerine ve termal hedef sistemlerine kadar ordular için kapsamlı ve yenilikçi savunma çözümleri sunar.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-7 rounded-none uppercase tracking-wider font-bold">
                  Çözümlerimiz <ChevronRight className="ml-2" />
                </Button>
                <div className="flex items-center gap-4 text-sm text-muted-foreground uppercase tracking-widest font-medium ml-4">
                  <span className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div> Sistem Aktif</span>
                  <span className="hidden md:inline">|</span>
                  <span className="hidden md:inline">Sürüm v4.2</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-full md:w-2/3 h-full -z-10 opacity-30 md:opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r md:bg-gradient-to-l from-background via-transparent to-background z-10"></div>
          {/* Using a high-quality image background to simulate video cinematic feel */}
          <img 
            src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_38bc4045-e2a4-42eb-a687-f0632748390a.jpg" 
            alt="Otonom Savunma Aracı"
            className="w-full h-full object-cover scale-105"
          />
          {/* Overlay elements to enhance cinematic look */}
          <div className="absolute bottom-10 right-10 text-primary/20 text-[200px] font-black leading-none select-none hidden lg:block">01</div>
        </div>
      </header>

      {/* Usage Areas Section (Kullanım Alanları) */}
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
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  onMouseLeave={() => setHoveredUsageIndex(null)}
                  className="w-full h-[550px] relative rounded-2xl overflow-hidden cursor-pointer shadow-2xl border border-primary/20"
                >
                  <img src={usageAreas[hoveredUsageIndex].img} alt={usageAreas[hoveredUsageIndex].title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent flex flex-col justify-end p-8 md:p-16">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
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
                      transition={{ delay: 0.3 }}
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

      {/* System Components (Sistem Bileşenleri) - Originally Features Bento Grid */}
      <section id="components" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-4">
            <div>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Gelişmiş <span className="text-primary">Sistem Bileşenleri</span></h2>
              <p className="text-muted-foreground max-w-2xl">
                Her Neosis aracı, görev başarısını ve operatör güvenliğini garanti altına alan entegre ileri teknoloji sistemleriyle donatılmıştır.
              </p>
            </div>
            <Button variant="outline" className="border-border hover:bg-background">Tüm Bileşenleri Gör</Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:grid-rows-2 h-auto md:h-[600px]">
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
        </div>
      </section>

      {/* Technical Specs & Fleet (Teknik Filo Tanıtımı) */}
      <section id="specs" className="py-24 bg-background relative overflow-hidden">
        {/* Background glow effect */}
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
                {/* Vehicle Presentation Card */}
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

                {/* Technical Specs List */}
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

          {/* Marketing Call-to-Action */}
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

      {/* Purchase Options (Satın Alma Seçenekleri) */}
      <section id="purchase" className="py-24 bg-background relative overflow-hidden">
        {/* Turnkey Solution - Flagship Section */}
        <div className="container mx-auto px-4 mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
               <img 
                src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_07e92782-6f07-4188-98a4-5f0ed4053eac.jpg" 
                alt="Anahtar Teslim Araç" 
                className="w-full h-auto object-cover rounded-lg shadow-2xl border border-border/50"
              />
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="bg-primary text-primary-foreground mb-4">Amiral Gemisi</Badge>
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6 leading-none">
                Anahtar Teslim <br/><span className="text-primary italic">Otonom Platform</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Operasyonel ihtiyaçlarınız için sıfırdan tasarlanmış, tam donanımlı ve göreve hazır askeri otonom araçlar. Zırh, silah sistemleri ve yapay zeka entegrasyonu tamamlanmış, sahada kanıtlanmış bir çözüm.
              </p>
              
              <ul className="space-y-4 mb-10">
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-foreground uppercase tracking-wider text-sm">Tam Entegre Sistem</strong>
                    <span className="text-sm text-muted-foreground">Şasi, güç grubu, sensörler ve yapay zeka tek bir vücut halinde çalışır.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-foreground uppercase tracking-wider text-sm">Ömür Boyu Destek</strong>
                    <span className="text-sm text-muted-foreground">5 yıl garanti, yedek parça ve 7/24 teknik servis desteği dahildir.</span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="mt-1 w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center shrink-0">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <strong className="block text-foreground uppercase tracking-wider text-sm">Sertifikalı Güvenlik</strong>
                    <span className="text-sm text-muted-foreground">NATO standartlarında balistik ve siber güvenlik testlerinden geçmiştir.</span>
                  </div>
                </li>
              </ul>
              
              <Button size="lg" className="w-full md:w-auto px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none">
                Araç Kataloğunu İncele <ChevronRight className="ml-2" />
              </Button>
            </div>
          </div>
        </div>

        {/* Modular Kit - Upgrade Section */}
        <div className="container mx-auto px-4">
          <div className="bg-secondary/5 border border-border/50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 border-primary text-primary px-3 py-1 uppercase tracking-widest text-xs">Filonuzu Modernize Edin</Badge>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                  Otonom Dönüşüm <span className="text-primary">Kitleri</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                  Mevcut envanterinizdeki konvansiyonel araçları emekliye ayırmak yerine akıllandırın. Marka bağımsız modüler kitlerimizle, standart bir aracı 48 saat içinde otonom bir savaşçiye dönüştürün.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div className="flex items-center gap-3 p-4 bg-background border border-border/50 rounded-lg">
                    <Wrench className="w-8 h-8 text-primary" />
                    <div>
                      <strong className="block text-sm uppercase">Hızlı Kurulum</strong>
                      <span className="text-xs text-muted-foreground">Sahada montaj imkanı</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-4 bg-background border border-border/50 rounded-lg">
                    <Cpu className="w-8 h-8 text-primary" />
                    <div>
                      <strong className="block text-sm uppercase">Evrensel Uyum</strong>
                      <span className="text-xs text-muted-foreground">Her araca entegre</span>
                    </div>
                  </div>
                </div>
                <Button variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-widest px-8 py-6 rounded-none">
                  Kit Özelliklerini Keşfet
                </Button>
              </div>
              <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full">
                <img 
                  src="https://miaoda-site-img.s3cdn.medo.dev/images/KLing_80214188-cfba-4344-b53a-f6007f50bd7d.jpg" 
                  alt="Dönüşüm Kiti" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-transparent lg:bg-gradient-to-l lg:from-secondary/5 lg:via-transparent lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center italic">Komuta Merkezi <span className="text-primary">Güveni</span></h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                {
                  quote: "Neosis'in otonom filosu lojistik operasyonlarımızı yeniden tanımladı. Zorlu çevre koşullarında güvenilirlik artık bir endişe kaynağı değil.",
                  author: "Alb. James Sterling",
                  org: "Taktik Operasyon Komutanlığı"
                },
                {
                  quote: "Keşif araçlarımıza entegre edilen Neosis yapay zekası, saha testleri sırasında operasyonel farkındalığı %40 artırdı.",
                  author: "Dr. Elena Vance",
                  org: "Savunma Araştırma Ajansı"
                }
              ].map((t, i) => (
                <div key={i} className="relative p-8 border-l-4 border-primary bg-background shadow-lg shadow-black/5">
                  <p className="text-xl italic mb-6 text-foreground/90">"{t.quote}"</p>
                  <div>
                    <h4 className="font-bold uppercase tracking-widest text-sm">{t.author}</h4>
                    <p className="text-xs text-primary font-medium">{t.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-12 text-center">Sıkça Sorulan <span className="text-primary">Sorular</span></h2>
          <Accordion type="single" collapsible className="w-full space-y-4">
            {[
              { q: "Elektrik modunda maksimum operasyon menzili nedir?", a: "Vanguard Gözcü, tam gizli elektrik modunda 150 km'ye kadar çalışabilir; yüksek verimli dizel jeneratör ile ek 1.000 km menzil sağlanır." },
              { q: "Bu araçlar GPS olmayan ortamlarda çalışabilir mi?", a: "Evet. Her Neosis aracı, uydu bağlantısı olmadan hassas navigasyon sağlayan görsel-ataletsel odometri ve arazi eşleştirme yapay zekası ile donatılmıştır." },
              { q: "Standart zırh koruma seviyesi nedir?", a: "Tüm araçlar standart olarak STANAG 4569 Seviye 2 koruma ile gelir, modüler kompozit seramik zırh kitlerimizle Seviye 4'e yükseltilebilir." },
              { q: "Uzaktan operasyon sistemleri için eğitim veriyor musunuz?", a: "Personelin komuta kontrol arayüzümüze hakim olması için kapsamlı 2 haftalık eğitim programları sunuyoruz, ancak araçlar %95 otonomi için tasarlanmıştır." },
              { q: "Isı yayan hedefler ne kadar süre çalışabilir?", a: "Hedef sistemlerimiz, harici güç kaynağına ihtiyaç duymadan dahili bataryalarıyla 12 saate kadar kesintisiz termal imza yayabilir." }
            ].map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 bg-card px-6 rounded-lg overflow-hidden">
                <AccordionTrigger className="text-left font-bold uppercase tracking-wider py-6 hover:text-primary transition-colors hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl font-black uppercase tracking-tighter mb-6 leading-none">Bağlantı <span className="text-primary italic">Kurun</span></h2>
              <p className="text-muted-foreground text-lg mb-12">Satınalma talepleri, teknik özellikler veya özelleştirilmiş filo çözümleri için savunma uzmanlarımızla iletişime geçin.</p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none border border-primary flex items-center justify-center group-hover:bg-primary transition-all">
                    <Mail className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">E-posta</p>
                    <p className="text-xl font-bold">iletisim@neosis-defense.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none border border-primary flex items-center justify-center group-hover:bg-primary transition-all">
                    <Phone className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Telefon</p>
                    <p className="text-xl font-bold">+90 (212) 555 0123</p>
                  </div>
                </div>
                <div className="flex items-center gap-6 group">
                  <div className="w-14 h-14 rounded-none border border-primary flex items-center justify-center group-hover:bg-primary transition-all">
                    <MapPin className="text-primary group-hover:text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase font-bold tracking-widest mb-1">Merkez Ofis</p>
                    <p className="text-xl font-bold">İleri Teknoloji Bölgesi, Ankara, TR</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="bg-secondary/10 border-border/50 p-8 md:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground px-1">Ad Soyad</label>
                    <Input placeholder="Ahmet Yılmaz" className="bg-background/50 border-border focus:border-primary rounded-none h-14" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground px-1">E-posta Adresi</label>
                    <Input placeholder="ahmet@savunma.gov.tr" className="bg-background/50 border-border focus:border-primary rounded-none h-14" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground px-1">Talep Türü</label>
                  <Input placeholder="Satınalma / Teknik Destek / İş Ortaklığı" className="bg-background/50 border-border focus:border-primary rounded-none h-14" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground px-1">Mesajınız</label>
                  <Textarea placeholder="Talebinizin detayları..." className="bg-background/50 border-border focus:border-primary rounded-none min-h-[150px] resize-none" />
                </div>
                <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 h-16 rounded-none text-lg font-bold uppercase tracking-widest">
                  İletiyi Gönder
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border/40 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-sm rotate-45 flex items-center justify-center">
                <Shield className="w-4 h-4 text-primary-foreground -rotate-45" />
              </div>
              <span className="text-xl font-bold tracking-tighter uppercase italic">Neosis</span>
            </div>
            
            <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-primary transition-colors">Hizmet Şartları</a>
              <a href="#" className="hover:text-primary transition-colors">Sertifikalar</a>
              <a href="#" className="hover:text-primary transition-colors">İhracat Kontrolü</a>
            </div>

            <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              &copy; 2026 Neosis Defense Systems. Tüm Hakları Saklıdır.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

function CheckCircle(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  )
}
