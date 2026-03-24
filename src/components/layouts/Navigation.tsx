import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const SERVICES = [
  { label: "Bilişim Hizmetleri", to: "/services/bilisim" },
  { label: "Saha Teknik Destek", to: "/services/saha" },
  { label: "Haberleşme Sistemleri", to: "/services/haberlesme" },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const location = useLocation();
  const hoverTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const handleServicesEnter = () => {
    if (hoverTimer.current) clearTimeout(hoverTimer.current);
    setServicesOpen(true);
  };

  const handleServicesLeave = () => {
    hoverTimer.current = setTimeout(() => setServicesOpen(false), 150);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://miaoda-conversation-file.s3cdn.medo.dev/user-9um4d73f6yo0/conv-9um4eigcrbpc/20260310/file-a5x8r1q3xdz4.png"
            alt="Neosis Logo"
            className="w-12 h-12 object-contain"
            onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
          />
          <span className="text-2xl font-bold tracking-tighter uppercase italic">Neosis</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          {/* Ürünler */}
          <Link to="/products" className={`hover:text-primary transition-colors ${location.pathname === '/products' ? 'text-primary' : ''}`}>
            Ürünler
          </Link>

          {/* Hizmetler — hover dropdown */}
          <div className="relative" onMouseEnter={handleServicesEnter} onMouseLeave={handleServicesLeave}>
            <button className={`flex items-center gap-1 hover:text-primary transition-colors ${location.pathname.startsWith('/services') ? 'text-primary' : ''}`}>
              HİZMETLER <ChevronDown size={13} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-56 bg-background border border-border/60 shadow-2xl z-50"
                onMouseEnter={handleServicesEnter}
                onMouseLeave={handleServicesLeave}
              >
                <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-3 h-3 bg-background border-l border-t border-border/60 rotate-45" />
                {SERVICES.map(s => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setServicesOpen(false)}
                    className={`block px-5 py-3.5 text-xs uppercase tracking-widest hover:bg-primary/10 hover:text-primary transition-colors border-b border-border/20 last:border-0 ${location.pathname === s.to ? 'text-primary' : ''}`}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Hakkımızda */}
          <Link to="/about" className={`hover:text-primary transition-colors ${location.pathname === '/about' ? 'text-primary' : ''}`}>
            Hakkımızda
          </Link>

          {/* Başarılar */}
          <Link to="/more" className={`hover:text-primary transition-colors ${location.pathname === '/more' ? 'text-primary' : ''}`}>
            Başarılar
          </Link>

          <button
            onClick={scrollToContact}
            className="border border-primary text-primary hover:bg-primary hover:text-primary-foreground px-4 py-2 transition-colors text-xs uppercase tracking-widest font-bold"
          >
            İletişim
          </button>
        </div>

        <button className="md:hidden text-primary" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-6 flex flex-col gap-4 z-50">
          <Link to="/products" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold uppercase tracking-wider">Ürünler</Link>
          <div className="flex flex-col gap-2 pl-4 border-l border-border/50">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Hizmetler</p>
            {SERVICES.map(s => (
              <Link key={s.to} to={s.to} onClick={() => setIsMenuOpen(false)} className="text-sm font-semibold uppercase tracking-wider">{s.label}</Link>
            ))}
          </div>
          <Link to="/about" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold uppercase tracking-wider">Hakkımızda</Link>
          <Link to="/more" onClick={() => setIsMenuOpen(false)} className="text-lg font-semibold uppercase tracking-wider">Başarılar</Link>
          <Button onClick={scrollToContact} className="w-full bg-primary text-primary-foreground">İletişim</Button>
        </div>
      )}
    </nav>
  );
};
