import React from 'react';
import { Mail, Phone, MapPin, Shield } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-secondary/10 border-t border-border/50 py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <img 
                src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9um4d73f6yo0/conv-9um4eigcrbpc/20260310/file-a5x8r1q3xdz4.png"
                alt="Neosis Logo"
                className="w-10 h-10 object-contain"
              />
              <span className="text-2xl font-bold tracking-tighter uppercase italic">Neosis</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Savunma sanayiinde otonom araç teknolojileri ve ileri sistem entegrasyonları konusunda öncü çözümler sunuyoruz.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">İletişim Bilgileri</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">E-posta</p>
                  <a href="mailto:info@neosis.com" className="text-foreground hover:text-primary transition-colors">
                    info@neosis.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Telefon</p>
                  <a href="tel:+902121234567" className="text-foreground hover:text-primary transition-colors">
                    +90 (212) 123 45 67
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
                <div>
                  <p className="text-sm text-muted-foreground">Adres</p>
                  <p className="text-foreground">
                    Teknoloji Geliştirme Bölgesi<br />
                    Ankara, Türkiye
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-6">Hızlı Bağlantılar</h3>
            <ul className="space-y-3">
              <li>
                <a href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/vehicles" className="text-muted-foreground hover:text-primary transition-colors">
                  Araçlarımız
                </a>
              </li>
              <li>
                <a href="/services/bilisim" className="text-muted-foreground hover:text-primary transition-colors">
                  Bilişim Hizmetleri
                </a>
              </li>
              <li>
                <a href="/services/saha" className="text-muted-foreground hover:text-primary transition-colors">
                  Saha Teknik Destek
                </a>
              </li>
              <li>
                <a href="/services/haberlesme" className="text-muted-foreground hover:text-primary transition-colors">
                  Haberleşme Sistemleri
                </a>
              </li>
              <li>
                <a href="/products" className="text-muted-foreground hover:text-primary transition-colors">
                  Ürünler
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-border/30 text-center">
          <p className="text-sm text-muted-foreground">
            © 2026 Neosis Defense. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
};
