import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from '@/components/layouts/Navigation';
import { ASSETS } from '@/config/assets';
import { Footer } from '@/components/layouts/Footer';

interface Component {
  id: string;
  tag: string;
  label: string;
  hint: string;
  callout: string;
  desc: string;
  ax: number;
  ay: number;
  lx: number;
  ly: number;
}

const COMPONENTS: Component[] = [
  {
    id: "compute",
    tag: "BİLGİSAYAR",
    label: "Taktik YZ Motoru",
    hint: "15ms altı gecikme · Sinir çıkarım hızlandırıcı",
    callout: "TEMEL YZ YIĞıNı",
    desc: "Gerçek zamanlı sensör füzyonunu 15ms altı gecikmeyle işleyen askeri sınıf görev bilgisayarı. Sinir çıkarım hızlandırıcısı LIDAR, kamera ve termal veri akışlarını eş zamanlı yönetir. MIL-STD-810H sertifikalı.",
    ax: 47.8,
    ay: 29.9,
    lx: 64.0,
    ly: 8.0
  },
  {
    id: "suspension",
    tag: "KORUMA & ALGILAMA",
    label: "Süspansiyon & Zırh Sistemi",
    hint: "18\" strok · STANAG Seviye-3 zırh",
    callout: "GECE VARLIK SİSTEMİ",
    desc: "Termal görüntüleme ve aktif LIDAR dizileri gece görüşü ve 360° çevre haritalaması sağlar. 18 inçlik stroklu çift salıncaklı süspansiyon ve kritik düğümlerde STANAG 4569 Seviye-3 balistik zırh.",
    ax: 59.1,
    ay: 49.3,
    lx: 72.0,
    ly: 28.0
  },
  {
    id: "power",
    tag: "İTKİ SİSTEMİ",
    label: "Hibrit Güç Yönetimi",
    hint: "80km elektrik · 600km hibrit menzil",
    callout: "HİBRİT SÜRÜŞ SİSTEMİ",
    desc: "Elektrik ve yanmalı çift modlu itki sistemi elektrikle 80 km sessiz menzil, hibrit modda 600 km'ye uzar. 48V LiFePO₄ akü paketi tüm otonom sensörleri ve aktüatörleri aynı anda besler.",
    ax: 54.0,
    ay: 53.1,
    lx: 72.0,
    ly: 50.0
  },
  {
    id: "dbw",
    tag: "SÜRÜŞ SİSTEMİ",
    label: "Drive-by-Wire Kontrolü",
    hint: "CAN-BUS evrensel · 50ms komut tepkisi",
    callout: "CAN-BUS SÜRÜŞ ARAYÜZÜ",
    desc: "CAN-BUS tam elektronik drive-by-wire arayüzü otonom veya uzaktan operasyona olanak tanır. 50ms altı komut tepkisi ve fail-safe çift kanal yedekleme ile her koşulda güvenilir kontrol.",
    ax: 37.9,
    ay: 53.1,
    lx: 64.0,
    ly: 70.0
  }
];

const SystemComponentsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const svgRef = useRef<SVGSVGElement>(null);
  const autoTimerRef = useRef<NodeJS.Timeout | null>(null);
  const manualTimerRef = useRef<NodeJS.Timeout | null>(null);

  const px = (p: number) => (p / 100) * 2000;
  const py = (p: number) => (p / 100) * 848;

  const selectComponent = (index: number, manual: boolean) => {
    setActiveIndex(index);

    if (manual) {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
      
      manualTimerRef.current = setTimeout(() => {
        startAutoRotation();
      }, 9000);
    }
  };

  const startAutoRotation = () => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    
    autoTimerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % COMPONENTS.length);
    }, 3800);
  };

  useEffect(() => {
    startAutoRotation();
    
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
    };
  }, []);

  const activeComponent = COMPONENTS[activeIndex];

  return (
    <div className="min-h-screen bg-[#060809] text-[#f5eedc]">
      <Navigation />
      
      <div className="pt-20">
        {/* Hero Section with Interactive Component Display */}
        <div className="relative w-full" style={{ aspectRatio: '2000 / 848' }}>
          {/* Background Image */}
          <img
            src={ASSETS.vehicles.vanguard}
            alt="System Components"
            className="absolute inset-0 w-full h-full object-cover"
          />
          
          {/* Overlay Gradients */}
          <div 
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              background: `
                linear-gradient(to right, rgba(6,8,9,.97) 0%, rgba(6,8,9,.88) 14%, rgba(6,8,9,.18) 34%, transparent 50%),
                linear-gradient(to top, rgba(6,8,9,.75) 0%, transparent 30%)
              `
            }}
          />

          {/* Highlight Overlays */}
          {COMPONENTS.map((comp, i) => (
            <div
              key={comp.id}
              className={`absolute inset-0 w-full h-full object-cover pointer-events-none z-[3] transition-opacity duration-400 ${
                i === activeIndex ? 'opacity-100 animate-pulse' : 'opacity-0'
              }`}
              style={{
                background: `radial-gradient(circle at ${comp.ax}% ${comp.ay}%, rgba(212,200,74,0.15) 0%, transparent 20%)`
              }}
            />
          ))}

          {/* SVG Callouts */}
          <svg
            ref={svgRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-[8] overflow-visible"
            viewBox="0 0 2000 848"
            preserveAspectRatio="xMidYMid slice"
          >
            <defs>
              <filter id="sc-neon" x="-40%" y="-40%" width="180%" height="180%">
                <feMorphology operator="dilate" radius="1" in="SourceGraphic" result="thick"/>
                <feFlood floodColor="#000" floodOpacity="0.8" result="dk"/>
                <feComposite in="dk" in2="thick" operator="in" result="shadow"/>
                <feGaussianBlur in="shadow" stdDeviation="1.2" result="sb"/>
                <feGaussianBlur in="SourceGraphic" stdDeviation="4" result="g1"/>
                <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="g2"/>
                <feMerge>
                  <feMergeNode in="sb"/>
                  <feMergeNode in="g2"/>
                  <feMergeNode in="g1"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            {COMPONENTS.map((comp, i) => {
              const ax = px(comp.ax);
              const ay = py(comp.ay);
              const lx = px(comp.lx);
              const ly = py(comp.ly);
              const ey = ly + 14;

              return (
                <g
                  key={comp.id}
                  className={`transition-opacity duration-400 ${
                    i === activeIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: i === activeIndex ? '100ms' : '0ms' }}
                >
                  {/* Connection Line */}
                  <path
                    d={`M${ax},${ay} L${ax},${ey} L${lx},${ey}`}
                    stroke="#D4C84A"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx={ax} cy={ey} r="3" fill="#D4C84A" />

                  {/* Animated Rings */}
                  <circle cx={ax} cy={ay} r="10" fill="none" stroke="rgba(210,196,70,.2)" strokeWidth="1.5">
                    <animate attributeName="r" values="8;14;8" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values=".35;.04;.35" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx={ax} cy={ay} r="6" fill="none" stroke="#D4C84A" strokeWidth="1.2">
                    <animate attributeName="r" values="5;8;5" dur="2s" repeatCount="indefinite"/>
                    <animate attributeName="stroke-opacity" values=".9;.28;.9" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx={ax} cy={ay} r="3" fill="#D4C84A">
                    <animate attributeName="r" values="2.5;4;2.5" dur="2s" repeatCount="indefinite"/>
                  </circle>

                  {/* Shadow Text */}
                  <text
                    x={lx}
                    y={ly}
                    fontSize="17"
                    fontWeight="700"
                    fontFamily="Helvetica Neue,Arial,sans-serif"
                    letterSpacing="1.8"
                    textAnchor="start"
                    fill="rgba(0,0,0,0.75)"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="5"
                    strokeLinejoin="round"
                    paintOrder="stroke"
                  >
                    {comp.callout}
                  </text>

                  {/* Neon Text */}
                  <text
                    x={lx}
                    y={ly}
                    fontSize="17"
                    fontWeight="700"
                    fontFamily="Helvetica Neue,Arial,sans-serif"
                    letterSpacing="1.8"
                    textAnchor="start"
                    fill="#D4C84A"
                    filter="url(#sc-neon)"
                  >
                    {comp.callout}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Left Panel */}
          <div className="absolute top-0 left-0 bottom-0 w-[clamp(190px,22%,260px)] px-[clamp(16px,2.5%,36px)] py-[clamp(18px,3%,40px)] flex flex-col justify-between z-10">
            <div>
              <h1 className="text-[clamp(16px,2.1vw,32px)] font-black uppercase tracking-[-1.5px] leading-[0.95] text-[#e8e2d6] mb-[clamp(12px,1.8%,22px)]">
                Sistem<br />
                <em className="text-[#c5ae79] not-italic block">Bileşenleri</em>
              </h1>
            </div>

            <div className="flex flex-col flex-1 overflow-hidden justify-between">
              {COMPONENTS.map((comp, i) => (
                <button
                  key={comp.id}
                  onClick={() => selectComponent(i, true)}
                  className={`
                    bg-transparent border-none border-l-2 text-left cursor-pointer
                    transition-all duration-200 flex flex-col gap-[2px] flex-1 justify-center min-h-0
                    px-[clamp(7px,1vw,12px)] py-[clamp(5px,0.8vw,10px)]
                    ${
                      i === activeIndex
                        ? 'bg-[rgba(197,174,121,0.11)] border-l-[#c5ae79] text-[#e8e2d6]'
                        : 'border-l-[rgba(197,174,121,0.1)] text-[rgba(255,255,255,0.3)] hover:text-[rgba(255,255,255,0.62)] hover:bg-[rgba(197,174,121,0.06)] hover:border-l-[rgba(197,174,121,0.3)]'
                    }
                  `}
                >
                  <span className={`text-[7px] tracking-[3px] uppercase font-bold ${
                    i === activeIndex ? 'text-[#c5ae79]' : 'text-[rgba(197,174,121,0.35)]'
                  }`}>
                    {comp.tag}
                  </span>
                  <span className={`text-[clamp(8px,0.82vw,11px)] uppercase tracking-[0.4px] ${
                    i === activeIndex ? 'font-bold' : 'font-normal'
                  }`}>
                    {comp.label}
                  </span>
                  <span className={`text-[clamp(6px,0.6vw,8.5px)] mt-[1px] ${
                    i === activeIndex ? 'text-[rgba(197,174,121,0.52)]' : 'text-[rgba(197,174,121,0.28)]'
                  }`}>
                    {comp.hint}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Bar */}
        <div className="bg-[#060809] border-t border-[rgba(255,255,255,0.06)] px-[clamp(28px,4vw,56px)] py-[clamp(18px,2.2vw,32px)] grid grid-cols-[auto_1fr_auto] items-center gap-[clamp(20px,3vw,52px)]">
          {/* Left: Number + Tag */}
          <div className="flex flex-col items-start gap-[6px] flex-shrink-0">
            <div className="text-[7px] tracking-[5px] text-[#c5ae79] uppercase flex items-center gap-[7px]">
              <span className="w-[4px] h-[4px] rounded-full bg-[#c5ae79] shadow-[0_0_6px_rgba(197,174,121,0.9)] inline-block animate-pulse" />
              {activeComponent.tag}
            </div>
            <div className="text-[clamp(28px,4vw,58px)] font-black text-[rgba(197,174,121,0.12)] tracking-[-3px] leading-none">
              {String(activeIndex + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Middle: Title + Description */}
          <div className="flex flex-col gap-[10px] border-l border-[rgba(255,255,255,0.07)] pl-[clamp(20px,3vw,52px)]">
            <h3 
              key={`title-${activeIndex}`}
              className="text-[clamp(14px,1.6vw,22px)] font-black uppercase text-[#e8e2d6] tracking-[0.8px] m-0 animate-[sc-text-in_0.3s_ease_both]"
            >
              {activeComponent.label}
            </h3>
            <p 
              key={`desc-${activeIndex}`}
              className="text-[clamp(12px,1vw,15px)] leading-[1.8] text-[rgba(232,226,214,0.55)] m-0 max-w-[68ch] animate-[sc-text-in_0.3s_ease_both]"
            >
              {activeComponent.desc}
            </p>
          </div>

          {/* Right: Progress Bars */}
          <div className="flex flex-col gap-[4px] items-end flex-shrink-0">
            {COMPONENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => selectComponent(i, true)}
                className={`
                  h-[1.5px] bg-[rgba(197,174,121,0.14)] border-none cursor-pointer
                  py-[5px] bg-clip-content transition-all duration-300
                  ${i === activeIndex ? 'w-[30px] bg-[#c5ae79]' : 'w-[18px]'}
                `}
              />
            ))}
          </div>
        </div>
      </div>

      <Footer />

      <style>{`
        @keyframes sc-text-in {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default SystemComponentsPage;
