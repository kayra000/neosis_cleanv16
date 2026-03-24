import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { Navigation } from '@/components/layouts/Navigation';
import { Footer } from '@/components/layouts/Footer';
import { ASSETS } from '@/config/assets';

interface SystemComponent {
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

const SYSTEM_COMPONENTS: SystemComponent[] = [
  {
    id: "compute",
    tag: "BİLGİSAYAR",
    label: "Taktik YZ Motoru",
    hint: "15ms altı gecikme · Sinir çıkarım hızlandırıcı",
    callout: "TEMEL YZ YIĞINI",
    desc: "Gerçek zamanlı sensör füzyonunu 15ms altı gecikmeyle işleyen askeri sınıf görev bilgisayarı. Sinir çıkarım hızlandırıcısı LIDAR, kamera ve termal veri akışlarını eş zamanlı yönetir. MIL-STD-810H sertifikalı.",
    ax: 47.8, ay: 29.9, lx: 64.0, ly: 8.0
  },
  {
    id: "suspension",
    tag: "KORUMA & ALGILAMA",
    label: "Süspansiyon & Zırh Sistemi",
    hint: "18\" strok · STANAG Seviye-3 zırh",
    callout: "GECE VARLIK SİSTEMİ",
    desc: "Termal görüntüleme ve aktif LIDAR dizileri gece görüşü ve 360° çevre haritalaması sağlar. 18 inçlik stroklu çift salıncaklı süspansiyon ve kritik düğümlerde STANAG 4569 Seviye-3 balistik zırh.",
    ax: 59.1, ay: 49.3, lx: 72.0, ly: 28.0
  },
  {
    id: "power",
    tag: "İTKİ SİSTEMİ",
    label: "Hibrit Güç Yönetimi",
    hint: "80km elektrik · 600km hibrit menzil",
    callout: "HİBRİT SÜRÜŞ SİSTEMİ",
    desc: "Elektrik ve yanmalı çift modlu itki sistemi elektrikle 80 km sessiz menzil, hibrit modda 600 km'ye uzar. 48V LiFePO₄ akü paketi tüm otonom sensörleri ve aktüatörleri aynı anda besler.",
    ax: 54.0, ay: 53.1, lx: 72.0, ly: 50.0
  },
  {
    id: "dbw",
    tag: "SÜRÜŞ SİSTEMİ",
    label: "Drive-by-Wire Kontrolü",
    hint: "CAN-BUS evrensel · 50ms komut tepkisi",
    callout: "CAN-BUS SÜRÜŞ ARAYÜZÜ",
    desc: "CAN-BUS tam elektronik drive-by-wire arayüzü otonom veya uzaktan operasyona olanak tanır. 50ms altı komut tepkisi ve fail-safe çift kanal yedekleme ile her koşulda güvenilir kontrol.",
    ax: 37.9, ay: 53.1, lx: 64.0, ly: 70.0
  }
];

const ComponentsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const autoTimerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const manualTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const px = (p: number) => (p / 100) * 2000;
  const py = (p: number) => (p / 100) * 848;

  const selectComponent = (index: number, manual: boolean) => {
    setActiveIndex(index);
    setAnimKey(k => k + 1);
    if (manual) {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
      manualTimerRef.current = setTimeout(() => startAutoRotation(), 9000);
    }
  };

  const startAutoRotation = () => {
    if (autoTimerRef.current) clearInterval(autoTimerRef.current);
    autoTimerRef.current = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % SYSTEM_COMPONENTS.length);
      setAnimKey(k => k + 1);
    }, 3800);
  };

  useEffect(() => {
    startAutoRotation();
    return () => {
      if (autoTimerRef.current) clearInterval(autoTimerRef.current);
      if (manualTimerRef.current) clearTimeout(manualTimerRef.current);
    };
  }, []);

  const activeComponent = SYSTEM_COMPONENTS[activeIndex];

  // hotspot görsel haritası
  const hotspotMap: Record<string, string> = {
    compute:    ASSETS.hotspots.compute,
    suspension: ASSETS.hotspots.suspension,
    power:      ASSETS.hotspots.power,
    dbw:        ASSETS.hotspots.dbw,
  };

  return (
    <div className="min-h-screen bg-[#060809] text-[#f5eedc]">
      <Navigation />

      <div className="pt-20">
        {/* ── Diagram ── */}
        <div className="relative w-full" style={{ aspectRatio: '2000 / 848' }}>

          {/* Araç arka plan görseli */}
          <img
            src={ASSETS.vehicleDiagram}
            alt="Sistem Bileşenleri"
            className="absolute inset-0 w-full h-full object-contain object-center"
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 pointer-events-none z-[2]"
            style={{
              background: `
                linear-gradient(to right, rgba(6,8,9,.97) 0%, rgba(6,8,9,.88) 14%, rgba(6,8,9,.18) 34%, transparent 50%),
                linear-gradient(to top, rgba(6,8,9,.75) 0%, transparent 30%)
              `
            }}
          />

          {/* ── Hotspot PNG katmanları ── */}
          {SYSTEM_COMPONENTS.map((comp, i) => (
            <img
              key={comp.id}
              src={hotspotMap[comp.id]}
              alt=""
              className="absolute inset-0 w-full h-full object-contain object-center pointer-events-none z-[3]"
              style={{
                opacity: i === activeIndex ? 1 : 0,
                transition: 'opacity 0.5s ease',
                mixBlendMode: 'screen',
              }}
              onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
            />
          ))}

          {/* ── SVG Callouts ── */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-[8] overflow-visible"
            viewBox="0 0 2000 848"
            preserveAspectRatio="xMidYMid meet"
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

            {SYSTEM_COMPONENTS.map((comp, i) => {
              const ax = px(comp.ax);
              const ay = py(comp.ay);
              const lx = px(comp.lx);
              const ly = py(comp.ly);
              const ey = ly + 14;

              return (
                <g
                  key={comp.id}
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    transition: 'opacity 0.4s ease 0.1s',
                  }}
                >
                  {/* L-şekli bağlantı çizgisi */}
                  <path
                    d={`M${ax},${ay} L${ax},${ey} L${lx},${ey}`}
                    stroke="#D4C84A"
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx={ax} cy={ey} r="3" fill="#D4C84A" />

                  {/* Animasyonlu halkalar */}
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

                  {/* Callout text — shadow katmanı */}
                  <text
                    x={lx} y={ly}
                    fontSize="17" fontWeight="700"
                    fontFamily="Helvetica Neue, Arial, sans-serif"
                    letterSpacing="1.8" textAnchor="start"
                    fill="rgba(0,0,0,0.75)"
                    stroke="rgba(0,0,0,0.55)"
                    strokeWidth="5" strokeLinejoin="round"
                    paintOrder="stroke"
                  >
                    {comp.callout}
                  </text>

                  {/* Callout text — neon katmanı */}
                  <text
                    x={lx} y={ly}
                    fontSize="17" fontWeight="700"
                    fontFamily="Helvetica Neue, Arial, sans-serif"
                    letterSpacing="1.8" textAnchor="start"
                    fill="#D4C84A"
                    filter="url(#sc-neon)"
                  >
                    {comp.callout}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* ── Sol panel (selector) ── */}
          <div className="absolute top-0 left-0 bottom-0 w-[clamp(190px,22%,260px)] px-[clamp(16px,2.5%,36px)] py-[clamp(18px,3%,40px)] flex flex-col justify-between z-10">
            <div>
              <h1 className="text-[clamp(16px,2.1vw,32px)] font-black uppercase tracking-[-1.5px] leading-[0.95] text-[#e8e2d6] mb-[clamp(12px,1.8%,22px)]">
                Sistem<br />
                <em className="text-[#c5ae79] not-italic block">Bileşenleri</em>
              </h1>
            </div>
            <div className="flex flex-col flex-1 overflow-hidden justify-between">
              {SYSTEM_COMPONENTS.map((comp, i) => (
                <button
                  key={comp.id}
                  onClick={() => selectComponent(i, true)}
                  className="bg-transparent border-none text-left cursor-pointer transition-all duration-200 flex flex-col gap-[2px] flex-1 justify-center min-h-0"
                  style={{
                    borderLeft: i === activeIndex ? '2px solid #c5ae79' : '2px solid rgba(197,174,121,0.1)',
                    background: i === activeIndex ? 'rgba(197,174,121,0.11)' : 'transparent',
                    color: i === activeIndex ? '#e8e2d6' : 'rgba(255,255,255,0.3)',
                    padding: 'clamp(5px,0.8vw,10px) clamp(7px,1vw,12px)',
                  }}
                >
                  <span style={{
                    fontSize: 7, letterSpacing: 3, textTransform: 'uppercase', fontWeight: 700,
                    color: i === activeIndex ? '#c5ae79' : 'rgba(197,174,121,0.35)'
                  }}>
                    {comp.tag}
                  </span>
                  <span style={{
                    fontSize: 'clamp(8px,0.82vw,11px)', textTransform: 'uppercase', letterSpacing: 0.4,
                    fontWeight: i === activeIndex ? 700 : 400
                  }}>
                    {comp.label}
                  </span>
                  <span style={{
                    fontSize: 'clamp(6px,0.6vw,8.5px)', marginTop: 1,
                    color: i === activeIndex ? 'rgba(197,174,121,0.52)' : 'rgba(197,174,121,0.28)'
                  }}>
                    {comp.hint}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* ── Info bar ── */}
        <div
          className="bg-[#060809] border-t border-[rgba(255,255,255,0.06)]"
          style={{
            padding: 'clamp(18px,2.2vw,32px) clamp(28px,4vw,56px)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: 'clamp(20px,3vw,52px)',
          }}
        >
          {/* Sol: numara + tag */}
          <div className="flex flex-col items-start gap-[6px] flex-shrink-0">
            <div className="text-[7px] tracking-[5px] text-[#c5ae79] uppercase flex items-center gap-[7px]">
              <span className="w-[4px] h-[4px] rounded-full bg-[#c5ae79] inline-block animate-pulse"
                style={{ boxShadow: '0 0 6px rgba(197,174,121,0.9)' }} />
              {activeComponent.tag}
            </div>
            <div className="font-black text-[rgba(197,174,121,0.12)] tracking-[-3px] leading-none"
              style={{ fontSize: 'clamp(28px,4vw,58px)' }}>
              {String(activeIndex + 1).padStart(2, '0')}
            </div>
          </div>

          {/* Orta: başlık + açıklama */}
          <div
            className="flex flex-col gap-[10px]"
            style={{ borderLeft: '1px solid rgba(255,255,255,0.07)', paddingLeft: 'clamp(20px,3vw,52px)' }}
          >
            <h3
              key={`title-${animKey}`}
              className="font-black uppercase text-[#e8e2d6] m-0"
              style={{
                fontSize: 'clamp(14px,1.6vw,22px)',
                letterSpacing: 0.8,
                animation: 'sc-text-in 0.3s ease both',
              }}
            >
              {activeComponent.label}
            </h3>
            <p
              key={`desc-${animKey}`}
              className="leading-[1.8] text-[rgba(232,226,214,0.55)] m-0 max-w-[68ch]"
              style={{
                fontSize: 'clamp(12px,1vw,15px)',
                animation: 'sc-text-in 0.3s ease both',
              }}
            >
              {activeComponent.desc}
            </p>
          </div>

          {/* Sağ: progress bar'lar */}
          <div className="flex flex-col gap-[4px] items-end flex-shrink-0">
            {SYSTEM_COMPONENTS.map((_, i) => (
              <button
                key={i}
                onClick={() => selectComponent(i, true)}
                style={{
                  height: '1.5px',
                  width: i === activeIndex ? 30 : 18,
                  background: i === activeIndex ? '#c5ae79' : 'rgba(197,174,121,0.14)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '5px 0',
                  backgroundClip: 'content-box',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>
      </div>


      {/* ── Teknik Altyapı Özellikleri ── */}
      <section className="py-20 border-t border-[rgba(255,255,255,0.06)] bg-[#06080b]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5ae79] mb-3">Platform Altyapısı</p>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-[#e8e2d6]">
              Her Bileşende <span className="text-[#c5ae79] italic">Ortak DNA</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-[rgba(255,255,255,0.05)]">
            {[
              { val: "< 15ms", label: "Sensör Tepki Süresi", sub: "Tüm kanallarda" },
              { val: "AES-256", label: "Veri Şifreleme", sub: "NATO uyumlu" },
              { val: "IP67", label: "Koruma Sınıfı", sub: "Su & toz geçirmez" },
              { val: "MIL-810H", label: "Darbe Sertifikası", sub: "Askeri standart" },
            ].map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-[#060809] p-8 flex flex-col gap-2 hover:bg-[#0c0e11] transition-colors">
                <p className="text-3xl md:text-4xl font-black text-[#c5ae79]">{s.val}</p>
                <p className="text-xs font-bold uppercase tracking-widest text-[#e8e2d6]">{s.label}</p>
                <p className="text-[10px] text-[rgba(232,226,214,0.4)] uppercase tracking-wider">{s.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kabiliyetler progress bar ── */}
      <section className="py-20 border-t border-[rgba(255,255,255,0.06)]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[10px] uppercase tracking-[0.4em] text-[#c5ae79] mb-3">Entegrasyon Seviyeleri</p>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[#e8e2d6] mb-10 leading-tight">
                Bileşen <span className="text-[#c5ae79] italic">Olgunluk</span> Matrisi
              </h2>
              <div className="space-y-7">
                {[
                  { label: "Taktik YZ Motoru", pct: 100 },
                  { label: "Hibrit Güç Sistemi", pct: 100 },
                  { label: "Drive-by-Wire Kontrol", pct: 100 },
                  { label: "Süspansiyon & Zırh", pct: 100 },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between mb-2">
                      <span className="text-[11px] uppercase tracking-widest font-bold text-[#e8e2d6]">{item.label}</span>
                      <span className="text-[11px] text-[#c5ae79] font-black">{item.pct}%</span>
                    </div>
                    <div className="h-[1.5px] bg-[rgba(197,174,121,0.1)] w-full">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.pct}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.1, delay: i * 0.1, ease: "easeOut" }}
                        className="h-full bg-[#c5ae79]"
                        style={{ boxShadow: '0 0 6px rgba(197,174,121,0.5)' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: "⚡", title: "Gerçek Zamanlı Füzyon", desc: "LIDAR, termal ve optik kanallar aynı anda işlenir" },
                { icon: "🛡", title: "Fail-Safe Çift Kanal", desc: "Kritik aktuatörlerde yedek devre her an hazır" },
                { icon: "📡", title: "Mesh Ağ Desteği", desc: "Araç-araç haberleşmesi 2km menzilde şifreli" },
                { icon: "🔄", title: "OTA Güncelleme", desc: "Saha koşullarında firmware kablosuz güncellenir" },
              ].map((f, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="border border-[rgba(197,174,121,0.12)] bg-[#06080a] p-5 hover:border-[rgba(197,174,121,0.35)] transition-colors">
                  <div className="text-2xl mb-3">{f.icon}</div>
                  <h4 className="text-xs font-black uppercase tracking-wider text-[#e8e2d6] mb-2">{f.title}</h4>
                  <p className="text-[10px] text-[rgba(232,226,214,0.45)] leading-relaxed">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        @keyframes sc-text-in {
          from { opacity: 0; transform: translateY(4px); }
          to   { opacity: 1; transform: none; }
        }
      `}</style>
    </div>
  );
};

export default ComponentsPage;
