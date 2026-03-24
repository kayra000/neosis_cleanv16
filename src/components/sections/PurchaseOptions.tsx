import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CheckCircle, ChevronRight, Wrench, Cpu } from 'lucide-react';

export const PurchaseOptions = () => {
  return (
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
  );
};
