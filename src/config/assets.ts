// ╔══════════════════════════════════════════════════════════════╗
//  NEOSIS — GÖRSEL YÖNETİMİ (TEK NOKTA)
//
//  Kendi görselini eklemek için:
//  1. public/assets/images/ klasörüne aynı adda dosyayı at
//  2. Kaydet → site anında güncellenir
//
//  public/assets/images/
//  ├── hero.jpg                 → heroImage
//  ├── turnkey.jpg              → turnkeyImage
//  ├── kits.jpg                 → kitsImage
//  ├── usage-border.jpg         → usageAreas.border
//  ├── usage-convoy.jpg         → usageAreas.convoy
//  ├── usage-medical.jpg        → usageAreas.medical
//  ├── usage-eod.jpg            → usageAreas.eod
//  ├── vehicle-vanguard.jpg     → vehicles.vanguard
//  ├── vehicle-atlas.jpg        → vehicles.atlas
//  ├── vehicle-sentinel.jpg     → vehicles.sentinel
//  ├── vehicle-diagram.jpg      → vehicleDiagram  (2000×848 ideal)
//  ├── hs-compute.png           → hotspots.compute
//  ├── hs-suspension.png        → hotspots.suspension
//  ├── hs-power.png             → hotspots.power
//  ├── hs-dbw.png               → hotspots.dbw
//  ├── product-thermal.jpg      → products.thermal
//  ├── product-armor.jpg        → products.armor
//  ├── product-surveillance.jpg → products.surveillance
//  ├── product-uav.jpg          → products.uav
//  ├── product-weapon.jpg       → products.weapon
//  ├── product-c2.jpg           → products.c2
//  ├── about-bg.jpg             → aboutBg
//  ├── more-bg.jpg              → moreBg
//  ├── team-1.jpg               → team[0].img
//  ├── team-2.jpg               → team[1].img
//  └── team-3.jpg               → team[2].img
// ╚══════════════════════════════════════════════════════════════╝

export const ASSETS = {
  // ── VİDEOLAR ───────────────────────────────────────────────
  // public/assets/videos/hero.mp4              → hero arkaplan
  // public/assets/videos/usage-border.mp4      → hover: sınır güvenliği
  // public/assets/videos/usage-convoy.mp4      → hover: konvoy
  // public/assets/videos/usage-medical.mp4     → hover: tıbbi tahliye
  // public/assets/videos/usage-eod.mp4         → hover: EOD
  heroVideo: "/assets/videos/hero.mp4",

  // ── ANA SAYFA ──────────────────────────────────────────────
  heroImage: "/assets/images/hero.jpg",
  turnkeyImage: "/assets/images/turnkey.jpg",
  kitsImage: "/assets/images/kits.jpg",

  usageAreas: {
    border: "/assets/images/usage-border.jpg",
    convoy: "/assets/images/usage-convoy.jpg",
    medical: "/assets/images/usage-medical.jpg",
    eod: "/assets/images/usage-eod.jpg",
  },

  // ── ARAÇLAR ────────────────────────────────────────────────
  vehicles: {
    vanguard: "/assets/images/vehicle-vanguard.jpg",
    atlas: "/assets/images/vehicle-atlas.jpg",
    sentinel: "/assets/images/vehicle-sentinel.jpg",
  },

  // ── SİSTEM BİLEŞENLERİ ────────────────────────────────────
  vehicleDiagram: "/assets/images/vehicle-diagram.png",
  hotspots: {
    compute: "/assets/images/hs-compute.png",
    suspension: "/assets/images/hs-suspension.png",
    power: "/assets/images/hs-power.png",
    dbw: "/assets/images/hs-dbw.png",
    comms: "/assets/images/hs-comms.png",
  },

  // ── ÜRÜNLER HERO
  productsHero: "/assets/images/products-hero.jpg",

  // ── ÜRÜNLER ────────────────────────────────────────────────
  products: {
    thermal: "/assets/images/product-thermal.jpg",
    armor: "/assets/images/product-armor.jpg",
    surveillance: "/assets/images/product-surveillance.jpg",
    uav: "/assets/images/product-uav.jpg",
    weapon: "/assets/images/product-weapon.jpg",
    c2: "/assets/images/product-c2.jpg",
  },

  // ── PARTNER LOGOLARI (kayan şerit) ────────────────────────
  // public/assets/images/logo-1.png ... logo-8.png
  // → kendi firma logolarınızla değiştirin (beyaz veya şeffaf PNG ideal)
  logos: [
    "/assets/images/logo-1.png",
    "/assets/images/logo-2.png",
    "/assets/images/logo-3.png",
    "/assets/images/logo-4.png",
    "/assets/images/logo-5.png",
    "/assets/images/logo-6.png",
    "/assets/images/logo-7.png",
    "/assets/images/logo-8.png",
  ],

  // ── HAKKIMIZDA ─────────────────────────────────────────────
  aboutBg: "/assets/images/about-bg.jpg",
  team: [
    "/assets/images/team-1.jpg",
    "/assets/images/team-2.jpg",
    "/assets/images/team-3.jpg",
  ],

  // ── BAŞARILAR — TIMELINE GÖRSELLERİ ────────────────────
  // Yıldönümü/milestone fotoğrafları — public/assets/images/ klasörüne koy
  milestones: {
    y2022: "/assets/images/milestone-2022.jpg",
    y2024: "/assets/images/milestone-2024.jpg",
    y2026: "/assets/images/milestone-2026.jpg",
  },

  // ── HİZMET SAYFALARI ──────────────────────────────────────
  // Her hizmet için hero + 2 içerik görseli
  // Dosya adlarını koru, kendi görselini üstüne at
  services: {
    bilisim: {
      hero: "/assets/images/service-bilisim-hero.jpg",
      img1: "/assets/images/service-bilisim-1.jpg",
      img2: "/assets/images/service-bilisim-2.jpg",
    },
    saha: {
      hero: "/assets/images/service-saha-hero.jpg",
      img1: "/assets/images/service-saha-1.jpg",
      img2: "/assets/images/service-saha-2.jpg",
    },
    haberlesme: {
      hero: "/assets/images/service-haberlesme-hero.jpg",
      img1: "/assets/images/service-haberlesme-1.jpg",
      img2: "/assets/images/service-haberlesme-2.jpg",
    },
  },

  // ── REFERANSLAR (hakkımızda sayfası) ─────────────────────
  refs: [
    "/assets/images/ref-1.png",
    "/assets/images/ref-2.png",
    "/assets/images/ref-3.png",
  ],

  // ── DAHA FAZLASI ───────────────────────────────────────────
  moreBg: "/assets/images/more-bg.jpg",
} as const;
