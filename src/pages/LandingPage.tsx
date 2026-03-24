import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, CheckCircle, Wrench, Cpu, Eye, Truck, Activity, Crosshair } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navigation } from '@/components/layouts/Navigation';
import { ASSETS } from '@/config/assets';
import { Footer } from '@/components/layouts/Footer';

const LandingPage = () => {
  const [hoveredUsageIndex, setHoveredUsageIndex] = React.useState<number | null>(null);

  const videoRefs = React.useRef<HTMLVideoElement[]>([]);
  const expandedVideoRef = React.useRef<HTMLVideoElement | null>(null);

  const usageAreas = [
    {
      title: "Sınır Güvenliği ve Gözetleme",
      desc: "7/24 kesintisiz devriye ve tehdit tespiti ile sınır hatlarını güvence altına alır. Yapay zeka destekli analiz sistemleri ile insan hatasını sıfıra indirir.",
      img: ASSETS.usageAreas.border,
      video: "/assets/videos/usage-border.mp4",
      icon: Eye
    },
    {
      title: "Otonom Lojistik Konvoy",
      desc: "Tehlikeli bölgelerde personel riske atılmadan mühimmat ve ikmal sevkiyatı sağlar. Sürü zekası ile araçlar arası mesafe ve hız optimizasyonu yapar.",
      img: ASSETS.usageAreas.convoy,
      video: "/assets/videos/usage-convoy.mp4",
      icon: Truck
    },
    {
      title: "Tıbbi Tahliye / Yaralı Nakli",
      desc: "Sıcak çatışma bölgelerinden yaralı personelin güvenli ve hızlı tahliyesini gerçekleştirir. Dahili yaşam destek üniteleri ile otonom hastane görevi görür.",
      img: ASSETS.usageAreas.medical,
      video: "/assets/videos/usage-medical.mp4",
      icon: Activity
    },
    {
      title: "EOD / Tehlikeli Operasyonlar",
      desc: "Patlayıcı imha ve keşif görevlerinde insan hayatını riske atmadan müdahale imkanı sunar. Hassas robotik kollar ve çoklu sensör füzyonu ile çalışır.",
      img: ASSETS.usageAreas.eod,
      video: "/assets/videos/usage-eod.mp4",
      icon: Crosshair
    }
  ];

  const faqs = [
    { q: "Otonom araçlarınız hangi arazi koşullarında çalışabilir?", a: "Araçlarımız çöl, dağlık arazi, orman ve kentsel alan dahil tüm arazi tiplerinde çalışabilir. IP67 koruma seviyesi ile su geçişi ve toz ortamlarda sorunsuz çalışır." },
    { q: "Sistemleriniz siber saldırılara karşı ne kadar güvenli?", a: "Askeri seviye AES-256 şifreleme, çok katmanlı güvenlik duvarı ve sürekli güvenlik güncellemeleri ile maksimum siber güvenlik sağlıyoruz." },
    { q: "Eğitim süreci ne kadar sürer?", a: "Temel operatör eğitimi 2 hafta, ileri seviye teknisyen eğitimi 4 haftadır. Simülatör destekli eğitimlerimiz hızlı öğrenme sağlar." },
    { q: "Bakım ve destek hizmetleriniz nelerdir?", a: "7/24 teknik destek, periyodik bakım, yerinde servis ve orijinal yedek parça tedariki sunuyoruz. Farklı hizmet paketleri mevcuttur." },
    { q: "Mevcut araç filoma retrofit kit uygulanabilir mi?", a: "Evet. Modüler dönüşüm kitimiz geniş araç gamıyla uyumludur. Teknik ekibimiz sahada araç başına ortalama 4 saatte kurulum gerçekleştirir. Uyumluluk analizi için aracınızın teknik spesifikasyonlarını paylaşmanız yeterlidir." },
    { q: "Sistemleriniz GPS olmadan çalışabilir mi?", a: "Evet. Araçlarımız LIDAR tabanlı SLAM navigasyon ile GPS bağımsız olarak çalışabilir. Sinyal kesintisi durumunda otonom olarak son bilinen güzergaha devam eder veya güvenli konuma çekilir." },
    { q: "Termal sistemleriniz hangi hava koşullarında etkin?", a: "Termal kameralarımız sis, duman, karanlık ve ağır yağış dahil tüm olumsuz hava koşullarında -40°C ile +70°C arasında kesintisiz çalışır. Optik sistemlerden farklı olarak ışık gerektirmez." },
    { q: "İhracat ve uluslararası satış yapıyor musunuz?", a: "Evet. Hâlihazırda 4 ülkede aktif projemiz bulunmakta, SSB ve ilgili bakanlıkların izin süreçleri kapsamında ihracat gerçekleştiriyoruz. Uluslararası projeler için önce teknik görüşme talep edilmesi gerekmektedir." },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-primary-foreground font-sans">
      <Navigation />

      {/* Hero Section */}
      <header className="relative overflow-hidden h-screen flex items-center">
        {/* Hero Video / Fallback Image Arkaplan */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
            onError={(e) => {
              const vid = e.currentTarget;
              const img = document.createElement('img');
              img.src = ASSETS.heroImage;
              img.className = 'w-full h-full object-cover absolute inset-0';
              vid.parentNode?.insertBefore(img, vid);
              vid.style.display = 'none';
            }}
          >
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/40 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Badge variant="outline" className="mb-4 border-primary/50 text-primary px-4 py-1 rounded-full uppercase tracking-widest text-[10px]">
                Otonom Savunmanın Geleceği
              </Badge>
              <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 leading-[0.9]">
                Otonom <br/><span className="text-primary italic">Üstünlük</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
                Otonom kara araçlarından modüler dönüşüm kitlerine, termal algılama sistemlerinden ballistik zırh çözümlerine — Neosis Savunma, sahada insan hayatını koruyan yerli teknolojileri tek çatı altında üretiyor.
              </p>
              <div className="flex flex-col md:flex-row gap-4">
                <Link to="/products">
                  <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-7 rounded-none uppercase tracking-wider font-bold">
                    Ürünleri İncele <ChevronRight className="ml-2" />
                  </Button>
                </Link>
                <Link to="/vehicles">
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8 py-7 rounded-none uppercase tracking-wider font-bold">
                    Araçları Gör
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Usage Areas Section */}
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
                        <video
                          ref={el => { if (el) videoRefs.current[i] = el; }}
                          src={item.video}
                          muted
                          loop
                          playsInline
                          preload="metadata"
                          className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
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
                  <video
                    ref={el => { if (el) expandedVideoRef.current = el; }}
                    src={usageAreas[hoveredUsageIndex].video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent flex flex-col justify-end p-8 md:p-16">
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
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Turnkey Platform Section */}
      <section id="turnkey" className="py-24 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
               <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10 rounded-full"></div>
               <img 
                src={ASSETS.turnkeyImage}
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
              
              <Link to="/vehicles">
                <Button size="lg" className="w-full md:w-auto px-8 py-6 text-lg font-bold uppercase tracking-widest rounded-none">
                  Araçlarımızı İncele <ChevronRight className="ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Kits Section */}
      <section id="kits" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-secondary/5 border border-border/50 rounded-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-5">
              <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <Badge variant="outline" className="w-fit mb-4 border-primary text-primary px-3 py-1 uppercase tracking-widest text-xs">Filonuzu Modernize Edin</Badge>
                <h3 className="text-3xl md:text-4xl font-black uppercase tracking-tighter mb-4">
                  Otonom Dönüşüm <span className="text-primary">Kitleri</span>
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                  Mevcut envanterinizdeki konvansiyonel araçları emekliye ayırmak yerine akıllandırın. Marka bağımsız modüler kitlerimizle, standart bir aracı 48 saat içinde otonom bir savaşçıya dönüştürün.
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
                <Link to="/components">
                  <Button variant="outline" className="w-fit border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold uppercase tracking-widest px-8 py-6 rounded-none">
                    Bileşenleri Keşfet <ChevronRight className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="lg:col-span-2 relative min-h-[300px] lg:min-h-full">
                <img 
                  src={ASSETS.kitsImage} 
                  alt="Dönüşüm Kiti" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-transparent to-transparent lg:bg-gradient-to-l lg:from-secondary/5 lg:via-transparent lg:to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Logoları — Kayan Şerit */}
      <section id="references" className="border-y border-[#c5ae79]/20 overflow-hidden">
        <div className="container mx-auto px-4 pt-10 pb-3 text-center">
          <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Birlikte Çalıştığımız Kurumlar</p>
        </div>
        <div style={{ backgroundColor: 'rgba(197,174,121,0.07)' }} className="py-6 overflow-hidden">
        <div className="relative">
          {/* Sol ve sağ fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Kayan şerit — CSS animasyonu */}
          <div className="flex gap-12 items-center" style={{
            display: 'flex',
            width: 'max-content',
            animation: 'logo-scroll 28s linear infinite',
          }}>
            {/* İki kez tekrar — sonsuz döngü için */}
            {[...ASSETS.logos, ...ASSETS.logos].map((logo, i) => (
              <div key={i} className="flex-shrink-0 w-44 h-20 flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity grayscale hover:grayscale-0">
                <img src={logo} alt={`Partner ${(i % 8) + 1}`} className="max-w-full max-h-full object-contain" />
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>

      <style>{`
        @keyframes logo-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-4">Sıkça Sorulan <span className="text-primary">Sorular</span></h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Ürünlerimiz ve hizmetlerimiz hakkında merak edilenler
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="border border-border/50 rounded-lg px-6 bg-secondary/5">
                  <AccordionTrigger className="text-left font-bold hover:text-primary">
                    {faq.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;
