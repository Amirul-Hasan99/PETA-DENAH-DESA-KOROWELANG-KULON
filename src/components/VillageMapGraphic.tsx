import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Info, MapPin } from 'lucide-react';

interface VillageMapGraphicProps {
  interactive?: boolean;
  activeLayers?: string[];
  onToggleLayer?: (layerId: string) => void;
  className?: string;
}

export const VillageMapGraphic: React.FC<VillageMapGraphicProps> = ({
  interactive = true,
  activeLayers = ['admin', 'sawah', 'pekarangan', 'tegalan', 'tambak', 'fasum', 'sungai'],
  onToggleLayer,
  className = '',
}) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [pan, setPan] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!interactive) return;
    setIsDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !interactive) return;
    setPan({
      x: e.clientX - dragStart.x,
      y: e.clientY - dragStart.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const resetView = () => {
    setZoomLevel(1);
    setPan({ x: 0, y: 0 });
    setSelectedZone(null);
  };

  // Helper layer visibility checks
  const showAdmin = !activeLayers || activeLayers.includes('admin');
  const showSawah = !activeLayers || activeLayers.includes('sawah');
  const showPekarangan = !activeLayers || activeLayers.includes('pekarangan');
  const showTegalan = !activeLayers || activeLayers.includes('tegalan');
  const showTambak = !activeLayers || activeLayers.includes('tambak');
  const showFasum = !activeLayers || activeLayers.includes('fasum');
  const showSungai = !activeLayers || activeLayers.includes('sungai');

  return (
    <div className={`relative overflow-hidden bg-white border border-[#d3e4fe]/80 rounded-md select-none ${className}`}>
      {/* Map Control Buttons (if interactive) */}
      {interactive && (
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-xs p-1.5 rounded border border-[#c3c6d1]/60 shadow-xs">
          <button
            onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors cursor-pointer"
            title="Perbesar Peta (+)"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors cursor-pointer"
            title="Perkecil Peta (-)"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={resetView}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors cursor-pointer"
            title="Reset Tampilan"
            aria-label="Reset View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Info Badge if Zone Selected */}
      {selectedZone && (
        <div className="absolute top-3 left-3 z-20 bg-[#001e40] text-white px-3.5 py-2 rounded text-xs shadow-lg max-w-sm flex items-start gap-2.5 animate-in fade-in">
          <Info className="w-4 h-4 shrink-0 text-[#799dd6] mt-0.5" />
          <div>
            <p className="font-semibold text-white">{selectedZone}</p>
            <p className="text-[11px] text-[#eff4ff]/80">Klik area atau simbol lain untuk detail informasi spasial desa.</p>
          </div>
          <button onClick={() => setSelectedZone(null)} className="text-white/60 hover:text-white ml-1 cursor-pointer">✕</button>
        </div>
      )}

      {/* Interactive Map Canvas / SVG Container */}
      <div
        className="w-full h-full min-h-[440px] md:min-h-[520px] flex items-center justify-center p-2 bg-[#fcfdff] cursor-grab active:cursor-grabbing"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg
          viewBox="0 0 700 960"
          className="w-full h-auto max-h-[850px] transition-transform duration-75 origin-center"
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoomLevel})`,
          }}
        >
          {/* Background & Outer Border */}
          <rect x="5" y="5" width="690" height="950" fill="#ffffff" stroke="#1f2937" strokeWidth="2.5" />
          <rect x="12" y="12" width="676" height="936" fill="none" stroke="#4b5563" strokeWidth="1" />

          {/* TOP HEADER TITLE */}
          <g id="map-header">
            <rect x="20" y="20" width="660" height="46" fill="#ffffff" />
            <text x="350" y="42" textAnchor="middle" fill="#111827" fontSize="13" fontWeight="800" letterSpacing="0.5" fontFamily="Plus Jakarta Sans, sans-serif">
              PETA ADMINISTRASI, TATA GUNA LAHAN & DENAH DESA KOROWELANG KULON
            </text>
            <text x="350" y="58" textAnchor="middle" fill="#003366" fontSize="10" fontWeight="700" fontFamily="Work Sans, sans-serif">
              KECAMATAN CEPIRING, KABUPATEN KENDAL, PROVINSI JAWA TENGAH (LUAS: 162,447 Ha)
            </text>
            <line x1="20" y1="68" x2="680" y2="68" stroke="#111827" strokeWidth="1.5" />
          </g>

          {/* MAP CANVAS INNER FRAME */}
          <g id="map-content">
            <rect x="20" y="74" width="660" height="645" fill="#f8fafc" stroke="#374151" strokeWidth="1.2" />

            {/* Coordinate Grid Lines */}
            <g stroke="#cbd5e1" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.7">
              <line x1="150" y1="74" x2="150" y2="719" />
              <line x1="300" y1="74" x2="300" y2="719" />
              <line x1="450" y1="74" x2="450" y2="719" />
              <line x1="600" y1="74" x2="600" y2="719" />
              <line x1="20" y1="180" x2="680" y2="180" />
              <line x1="20" y1="320" x2="680" y2="320" />
              <line x1="20" y1="460" x2="680" y2="460" />
              <line x1="20" y1="600" x2="680" y2="600" />
            </g>

            {/* Adjacent Boundaries Labels (Batas Resmi Wilayah) */}
            <g fill="#475569" fontSize="8.5" fontWeight="700">
              {/* UTARA: Desa Korowelanganyar */}
              <rect x="230" y="80" width="240" height="18" fill="#ffffff" opacity="0.9" rx="2" stroke="#94a3b8" strokeWidth="0.5" />
              <text x="350" y="93" textAnchor="middle" letterSpacing="0.8" fill="#1e293b">
                UTARA: DESA KOROWELANGANYAR (KEC. CEPIRING)
              </text>

              {/* TIMUR: Sungai Bodri & Kec. Patebon */}
              <g transform="translate(650, 360) rotate(90)">
                <rect x="-180" y="-18" width="360" height="18" fill="#ffffff" opacity="0.9" rx="2" stroke="#94a3b8" strokeWidth="0.5" />
                <text x="0" y="-5" textAnchor="middle" letterSpacing="0.8" fill="#0369a1">
                  TIMUR: SUNGAI BODRI / DESA WONOSARI, KUMPULREJO & MAGERSARI (PATEBON)
                </text>
              </g>

              {/* SELATAN: Desa Kalirandugede */}
              <rect x="220" y="695" width="260" height="18" fill="#ffffff" opacity="0.9" rx="2" stroke="#94a3b8" strokeWidth="0.5" />
              <text x="350" y="708" textAnchor="middle" letterSpacing="0.8" fill="#1e293b">
                SELATAN: DESA KALIRANDUGEDE (KEC. CEPIRING)
              </text>

              {/* BARAT: Desa Kalirandugede */}
              <g transform="translate(35, 360) rotate(-90)">
                <rect x="-150" y="-18" width="300" height="18" fill="#ffffff" opacity="0.9" rx="2" stroke="#94a3b8" strokeWidth="0.5" />
                <text x="0" y="-5" textAnchor="middle" letterSpacing="0.8" fill="#1e293b">
                  BARAT: DESA KALIRANDUGEDE (KEC. CEPIRING)
                </text>
              </g>
            </g>

            {/* THEMATIC MAP POLYGONS (Tata Guna Lahan Resmi) */}
            <g id="territory-polygons">
              {/* 1. KAWASAN TAMBAK (17,223 Ha) - Area Utara & Timur Muara */}
              {showTambak && (
                <g id="layer-tambak">
                  <path
                    d="M 180 120 C 260 110, 380 115, 480 125 C 530 145, 560 190, 540 240 C 490 250, 420 220, 350 210 C 280 200, 200 210, 180 170 Z"
                    fill="#38bdf8"
                    stroke="#0284c7"
                    strokeWidth="1.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Kawasan Tambak Air Payau (Luas: 17,223 Ha / Sektor Budidaya Ikan & Udang)')}
                  />
                  <path
                    d="M 480 200 C 530 210, 570 240, 580 290 C 560 330, 520 340, 470 310 C 460 270, 460 230, 480 200 Z"
                    fill="#0284c7"
                    opacity="0.8"
                    stroke="#0369a1"
                    strokeWidth="1"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Sentra Tambak Bandeng & Muara Pesisir Utara (Dusun Tambaksari)')}
                  />
                </g>
              )}

              {/* 2. TANAH SAWAH IRIGASI TEKNIS (105,447 Ha) - Terluas (64.9%) */}
              {showSawah && (
                <g id="layer-sawah">
                  {/* Sawah Blok Barat & Tengah */}
                  <path
                    d="M 120 220 C 180 200, 260 210, 320 230 C 310 320, 240 360, 190 380 C 140 370, 110 300, 120 220 Z"
                    fill="#86efac"
                    stroke="#16a34a"
                    strokeWidth="1.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Tanah Sawah Irigasi Teknis Blok Barat (Total Sawah Desa: 105,447 Ha)')}
                  />
                  {/* Sawah Blok Tengah & Timur */}
                  <path
                    d="M 320 230 C 400 220, 480 250, 500 320 C 480 390, 420 410, 340 400 C 310 350, 310 280, 320 230 Z"
                    fill="#4ade80"
                    stroke="#15803d"
                    strokeWidth="1.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Tanah Sawah Irigasi Teknis Subur Blok Dusun Welangsari')}
                  />
                  {/* Sawah Blok Selatan (Dusun Rejosari) */}
                  <path
                    d="M 160 480 C 240 460, 340 460, 400 480 C 440 540, 420 620, 360 660 C 280 670, 200 650, 160 580 Z"
                    fill="#86efac"
                    stroke="#16a34a"
                    strokeWidth="1.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Tanah Sawah Irigasi Teknis Blok Dusun Rejosari (Dialiri Irigasi Tersier)')}
                  />
                  <path
                    d="M 400 480 C 470 470, 540 500, 550 580 C 530 650, 450 670, 380 650 C 420 590, 420 530, 400 480 Z"
                    fill="#4ade80"
                    stroke="#15803d"
                    strokeWidth="1.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Persawahan Irigasi Teknis Produktif Blok Timur Batas Bodri')}
                  />
                </g>
              )}

              {/* 3. TEGAL / KEBUN (34,227 Ha) */}
              {showTegalan && (
                <g id="layer-tegalan">
                  <path
                    d="M 190 380 C 250 370, 310 380, 330 430 C 290 470, 210 470, 170 440 C 160 410, 170 390, 190 380 Z"
                    fill="#fef08a"
                    stroke="#ca8a04"
                    strokeWidth="1.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Lahan Tegalan & Kebun Produktif Warga (Total Tegalan: 34,227 Ha)')}
                  />
                  <path
                    d="M 440 370 C 500 360, 560 380, 580 440 C 540 480, 470 470, 430 440 C 420 400, 430 380, 440 370 Z"
                    fill="#fde047"
                    stroke="#ca8a04"
                    strokeWidth="1.2"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Tegalan & Kebun Palawija Dusun Tambaksari (34,227 Ha)')}
                  />
                </g>
              )}

              {/* 4. TANAH KERING / PEKARANGAN & BANGUNAN (39,897 Ha) - Zona Permukiman 3 Dusun */}
              {showPekarangan && (
                <g id="layer-pekarangan">
                  {/* Pemukiman Dusun Welangsari */}
                  <path
                    d="M 260 260 C 330 250, 390 270, 400 330 C 370 370, 290 370, 250 340 C 240 300, 240 280, 260 260 Z"
                    fill="#fed7aa"
                    stroke="#ea580c"
                    strokeWidth="1.3"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Zona Permukiman & Pekarangan DUSUN WELANGSARI (Luas Pekarangan Desa: 39,897 Ha)')}
                  />
                  {/* Pemukiman Dusun Tambaksari */}
                  <path
                    d="M 420 250 C 470 240, 520 260, 530 310 C 500 350, 440 350, 410 320 C 400 290, 410 265, 420 250 Z"
                    fill="#fdba74"
                    stroke="#ea580c"
                    strokeWidth="1.3"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Zona Permukiman & Pekarangan DUSUN TAMBAKSARI (Pesisir & Nelayan)')}
                  />
                  {/* Pemukiman Dusun Rejosari */}
                  <path
                    d="M 280 470 C 360 460, 420 480, 430 540 C 390 580, 300 580, 260 550 C 250 510, 260 485, 280 470 Z"
                    fill="#fed7aa"
                    stroke="#ea580c"
                    strokeWidth="1.3"
                    className="cursor-pointer hover:opacity-90 transition-opacity"
                    onClick={() => setSelectedZone('Zona Permukiman & Pekarangan DUSUN REJOSARI (Pusat Balai Desa & Pelayanan)')}
                  />
                </g>
              )}

              {/* 5. MAKAM KUPU TARUNG (0,800 Ha) */}
              <g
                id="layer-makam"
                transform="translate(205, 395)"
                className="cursor-pointer"
                onClick={() =>
                  setSelectedZone(
                    'Makam Kupu Tarung (TPU Bersejarah Desa Korowelang Kulon seluas 0,800 Ha, terbentang di barat-timur akses jalan menuju Sungai Bodri dengan fenomena pertemuan dahan Pohon Waru & Ketapeng)'
                  )
                }
              >
                <rect x="0" y="0" width="72" height="20" fill="#cbd5e1" stroke="#475569" strokeWidth="1" rx="3" />
                <text x="36" y="13" textAnchor="middle" fontSize="7.5" fontWeight="800" fill="#0f172a">
                  Makam Kupu Tarung
                </text>
              </g>
            </g>

            {/* DUSUN BOUNDARY DIVISIONS & TEXT LABELS */}
            {showAdmin && (
              <g id="dusun-labels" pointerEvents="none">
                {/* Dusun Welangsari */}
                <rect x="235" y="275" width="130" height="24" fill="#ffffff" rx="3" stroke="#001e40" strokeWidth="1" opacity="0.9" />
                <text x="300" y="291" textAnchor="middle" fontSize="10" fontWeight="800" fill="#001e40" fontFamily="Plus Jakarta Sans, sans-serif">
                  DUSUN WELANGSARI
                </text>

                {/* Dusun Tambaksari */}
                <rect x="420" y="205" width="135" height="24" fill="#ffffff" rx="3" stroke="#0284c7" strokeWidth="1" opacity="0.9" />
                <text x="487" y="221" textAnchor="middle" fontSize="10" fontWeight="800" fill="#0369a1" fontFamily="Plus Jakarta Sans, sans-serif">
                  DUSUN TAMBAKSARI
                </text>

                {/* Dusun Rejosari */}
                <rect x="270" y="505" width="125" height="24" fill="#ffffff" rx="3" stroke="#16a34a" strokeWidth="1" opacity="0.9" />
                <text x="332" y="521" textAnchor="middle" fontSize="10" fontWeight="800" fill="#166534" fontFamily="Plus Jakarta Sans, sans-serif">
                  DUSUN REJOSARI
                </text>
              </g>
            )}

            {/* SUNGAI BODRI & JARINGAN IRIGASI (105,447 Ha) */}
            {showSungai && (
              <g id="layer-sungai">
                {/* Sungai Bodri (Border on East flowing North to Java Sea) */}
                <path
                  d="M 590 100 C 610 220, 580 340, 600 460 C 610 560, 580 650, 595 719"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="14"
                  opacity="0.8"
                />
                <path
                  d="M 590 100 C 610 220, 580 340, 600 460 C 610 560, 580 650, 595 719"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="8"
                />
                {/* Text along Bodri River */}
                <text x="615" y="280" transform="rotate(90 615 280)" fontSize="9" fontWeight="800" fill="#075985" letterSpacing="1">
                  ALIRAN SUNGAI BODRI → LAUT JAWA
                </text>

                {/* Saluran Irigasi Tersier (105,447 Ha Irigasi Teknis) */}
                <path d="M 580 230 Q 450 260 320 250 T 180 240" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="6 2" />
                <path d="M 590 420 Q 460 440 330 430 T 190 430" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="6 2" />
                <path d="M 590 560 Q 480 570 380 580 T 220 590" fill="none" stroke="#06b6d4" strokeWidth="2.5" strokeDasharray="6 2" />
                <path d="M 330 250 L 330 650" fill="none" stroke="#0891b2" strokeWidth="2" />
              </g>
            )}

            {/* JARINGAN JALAN UTAMA & LINGKUNGAN DESA */}
            <g id="road-network">
              {/* Jalan Utama Desa Beraspal (3,0 Km) */}
              <path d="M 120 480 L 230 475 L 340 480 L 460 475 L 580 470" fill="none" stroke="#b91c1c" strokeWidth="3" />
              <path d="M 340 120 L 340 280 L 340 480 L 340 680" fill="none" stroke="#b91c1c" strokeWidth="3" />

              {/* Jalan Lingkungan Berbatu / Tanah (5,1 Km) */}
              <path d="M 230 260 L 230 475 L 230 630" fill="none" stroke="#64748b" strokeWidth="1.6" strokeDasharray="5 2" />
              <path d="M 460 250 L 460 475 L 460 620" fill="none" stroke="#64748b" strokeWidth="1.6" strokeDasharray="5 2" />
              <path d="M 140 280 L 340 280 L 540 270" fill="none" stroke="#64748b" strokeWidth="1.4" strokeDasharray="4 2" />
            </g>

            {/* FASILITAS PUBLIK & TITIK PENTING DESA */}
            {showFasum && (
              <g id="facility-markers">
                {/* 1. Kantor Balai Desa Korowelang Kulon */}
                <g transform="translate(340, 480)" className="cursor-pointer" onClick={() => setSelectedZone('Kantor Balai Desa Korowelang Kulon (Pusat Pemerintahan & Layanan PATEN)')}>
                  <circle cx="0" cy="0" r="8" fill="#dc2626" stroke="#ffffff" strokeWidth="2" />
                  <circle cx="0" cy="0" r="3" fill="#ffffff" />
                  <rect x="12" y="-10" width="135" height="20" fill="#ffffff" rx="3" stroke="#111827" strokeWidth="0.8" opacity="0.95" />
                  <text x="17" y="4" fontSize="8.5" fontWeight="800" fill="#991b1b">Balai Desa Korowelang Kulon</text>
                </g>

                {/* 2. Polindes / Poskesdes (PKD) & Posyandu */}
                <g transform="translate(270, 480)" className="cursor-pointer" onClick={() => setSelectedZone('Polindes / Poskesdes Desa (1 Bidan Desa, 2 Mantri Kesehatan, 3 Posyandu)')}>
                  <circle cx="0" cy="0" r="6" fill="#16a34a" stroke="#ffffff" strokeWidth="1.5" />
                  <rect x="-85" y="-18" width="80" height="16" fill="#ffffff" rx="2" stroke="#15803d" strokeWidth="0.8" opacity="0.9" />
                  <text x="-80" y="-7" fontSize="7.5" fontWeight="700" fill="#15803d">Polindes / Poskesdes</text>
                </g>

                {/* 3. Tempat Pelelangan Ikan (TPI) & Dermaga Perahu */}
                <g transform="translate(520, 220)" className="cursor-pointer" onClick={() => setSelectedZone('Tempat Pelelangan Ikan (TPI) & Sentra 55 Perahu Motor Tempel Nelayan')}>
                  <circle cx="0" cy="0" r="6.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.5" />
                  <rect x="-105" y="-18" width="100" height="16" fill="#ffffff" rx="2" stroke="#0284c7" strokeWidth="0.8" opacity="0.9" />
                  <text x="-100" y="-7" fontSize="7.5" fontWeight="700" fill="#0369a1">TPI & Sentra Nelayan (55 Perahu)</text>
                </g>

                {/* 4. Sekolah Dasar (SD/MI) - 2 Unit, 624 Siswa */}
                <g transform="translate(370, 310)" className="cursor-pointer" onClick={() => setSelectedZone('Sarana Pendidikan SD/MI (2 Unit Sekolah, 624 Siswa Aktif)')}>
                  <circle cx="0" cy="0" r="5.5" fill="#2563eb" stroke="#ffffff" strokeWidth="1.5" />
                  <rect x="10" y="-8" width="85" height="16" fill="#ffffff" rx="2" stroke="#2563eb" strokeWidth="0.8" opacity="0.9" />
                  <text x="14" y="3" fontSize="7.5" fontWeight="700" fill="#1d4ed8">SD / MI Korowelang</text>
                </g>

                {/* 5. Masjid Jami & Tempat Ibadah (8 Unit) */}
                <g transform="translate(300, 340)" className="cursor-pointer" onClick={() => setSelectedZone('Masjid Jami & Tempat Ibadah (Total 8 Unit Sarana Ibadah di 3 Dusun)')}>
                  <circle cx="0" cy="0" r="5.5" fill="#0d9488" stroke="#ffffff" strokeWidth="1.5" />
                  <rect x="-85" y="8" width="80" height="16" fill="#ffffff" rx="2" stroke="#0d9488" strokeWidth="0.8" opacity="0.9" />
                  <text x="-80" y="19" fontSize="7.5" fontWeight="700" fill="#0f766e">Masjid Jami Desa</text>
                </g>

                {/* 6. TK / PAUD - 3 Unit, 97 Siswa */}
                <g transform="translate(290, 540)" className="cursor-pointer" onClick={() => setSelectedZone('Lembaga Pendidikan TK/PAUD (3 Unit, 97 Siswa)')}>
                  <circle cx="0" cy="0" r="5" fill="#8b5cf6" stroke="#ffffff" strokeWidth="1.5" />
                  <rect x="8" y="-6" width="65" height="14" fill="#ffffff" rx="2" stroke="#8b5cf6" strokeWidth="0.6" opacity="0.9" />
                  <text x="12" y="4" fontSize="7" fontWeight="700" fill="#6d28d9">TK / PAUD</text>
                </g>
              </g>
            )}

            {/* NORTH COMPASS ROSE (Arah Mata Angin) */}
            <g transform="translate(100, 135)">
              <circle cx="0" cy="0" r="22" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" opacity="0.95" />
              <polygon points="0,-18 4,-4 18,0 4,4 0,18 -4,4 -18,0 -4,-4" fill="#ffffff" stroke="#1f2937" strokeWidth="0.8" />
              <polygon points="0,-18 4,-4 0,0" fill="#001e40" />
              <polygon points="18,0 4,4 0,0" fill="#001e40" />
              <polygon points="0,18 -4,4 0,0" fill="#001e40" />
              <polygon points="-18,0 -4,-4 0,0" fill="#001e40" />
              <text x="0" y="-21" textAnchor="middle" fontSize="9" fontWeight="900" fill="#001e40">U</text>
            </g>

            {/* SCALE BAR (Skala Grafis 1:25.000) */}
            <g transform="translate(45, 175)">
              <rect x="0" y="0" width="115" height="22" fill="#ffffff" stroke="#374151" strokeWidth="0.8" opacity="0.95" />
              <text x="57" y="8.5" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#111827">SKALA 1 : 25.000</text>
              <rect x="8" y="11" width="24" height="4" fill="#111827" />
              <rect x="32" y="11" width="24" height="4" fill="#ffffff" stroke="#111827" strokeWidth="0.5" />
              <rect x="56" y="11" width="24" height="4" fill="#111827" />
              <rect x="80" y="11" width="24" height="4" fill="#ffffff" stroke="#111827" strokeWidth="0.5" />
              <text x="8" y="20" fontSize="5.5" fill="#111827">0</text>
              <text x="56" y="20" fontSize="5.5" fill="#111827">1.25</text>
              <text x="100" y="20" fontSize="5.5" fill="#111827">2.5 Km</text>
            </g>

            {/* INSET MAP BOX (Peta Inset Kabupaten Kendal) */}
            <g transform="translate(500, 560)">
              <rect x="0" y="0" width="165" height="145" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />
              <rect x="4" y="4" width="157" height="16" fill="#f1f5f9" />
              <text x="82" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#001e40">PETA INSET KAB. KENDAL</text>
              {/* Inset Geography Canvas */}
              <rect x="6" y="24" width="153" height="115" fill="#e0f2fe" stroke="#94a3b8" strokeWidth="0.6" />
              <path d="M 10 32 L 150 32 L 150 115 L 10 115 Z" fill="#bbf7d0" stroke="#86efac" />
              {/* Kendal Coastline */}
              <path d="M 10 32 Q 60 40 100 35 T 150 32" stroke="#0284c7" strokeWidth="2" fill="none" />
              <text x="82" y="22" textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#0284c7">Laut Jawa</text>
              {/* Cepiring Marker */}
              <circle cx="65" cy="55" r="4" fill="#dc2626" stroke="#ffffff" strokeWidth="1" />
              <rect x="20" y="62" width="90" height="13" fill="#ffffff" rx="2" opacity="0.9" />
              <text x="65" y="71" textAnchor="middle" fontSize="6.5" fontWeight="800" fill="#991b1b">Kec. Cepiring (Desa Korkul)</text>
              <text x="115" y="90" fontSize="6" fontWeight="700" fill="#334155">Kota Kendal</text>
              <circle cx="110" cy="88" r="2.5" fill="#001e40" />
            </g>
          </g>

          {/* LOWER SECTION: OFFICIAL LEGEND & DETAILS (LEGENDA RESMI) */}
          <g id="map-legend" transform="translate(20, 725)">
            <rect x="0" y="0" width="660" height="215" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />

            {/* Column 1: Simbol Batas & Jalan */}
            <g transform="translate(15, 10)">
              <text x="0" y="12" fontSize="9.5" fontWeight="800" fill="#001e40" textDecoration="underline">LEGENDA PETA</text>

              <text x="0" y="30" fontSize="8" fontWeight="700" fill="#334155">Batas Administrasi:</text>
              <line x1="0" y1="42" x2="22" y2="42" stroke="#111827" strokeWidth="2" strokeDasharray="5 2" />
              <text x="28" y="45" fontSize="7.5" fill="#1f2937">Batas Desa Korowelang Kulon</text>

              <line x1="0" y1="58" x2="22" y2="58" stroke="#001e40" strokeWidth="1.2" strokeDasharray="3 2" />
              <text x="28" y="61" fontSize="7.5" fill="#1f2937">Batas Dusun (3 Dusun, 26 RT)</text>

              <text x="0" y="80" fontSize="8" fontWeight="700" fill="#334155">Jaringan Jalan & Air:</text>
              <line x1="0" y1="92" x2="22" y2="92" stroke="#b91c1c" strokeWidth="2.5" />
              <text x="28" y="95" fontSize="7.5" fill="#1f2937">Jalan Beraspal (3,0 Km)</text>

              <line x1="0" y1="108" x2="22" y2="108" stroke="#64748b" strokeWidth="1.5" strokeDasharray="4 2" />
              <text x="28" y="111" fontSize="7.5" fill="#1f2937">Jalan Batu / Tanah (5,1 Km)</text>

              <line x1="0" y1="124" x2="22" y2="124" stroke="#0284c7" strokeWidth="2.5" />
              <text x="28" y="127" fontSize="7.5" fill="#1f2937">Sungai Bodri & Irigasi (105,4 Ha)</text>
            </g>

            {/* Column 2: Tata Guna Lahan (162,447 Ha) */}
            <g transform="translate(165, 10)">
              <text x="0" y="12" fontSize="8.5" fontWeight="700" fill="#334155">Tata Guna Lahan (162,447 Ha):</text>

              <rect x="0" y="22" width="16" height="10" fill="#86efac" stroke="#16a34a" strokeWidth="0.8" />
              <text x="22" y="30" fontSize="7.5" fill="#1f2937">Sawah Irigasi Teknis (105,447 Ha)</text>

              <rect x="0" y="38" width="16" height="10" fill="#fed7aa" stroke="#ea580c" strokeWidth="0.8" />
              <text x="22" y="46" fontSize="7.5" fill="#1f2937">Pekarangan / Bangunan (39,897 Ha)</text>

              <rect x="0" y="54" width="16" height="10" fill="#fef08a" stroke="#ca8a04" strokeWidth="0.8" />
              <text x="22" y="62" fontSize="7.5" fill="#1f2937">Tegalan / Kebun (34,227 Ha)</text>

              <rect x="0" y="70" width="16" height="10" fill="#38bdf8" stroke="#0284c7" strokeWidth="0.8" />
              <text x="22" y="78" fontSize="7.5" fill="#1f2937">Tambak Perikanan (17,223 Ha)</text>

              <rect x="0" y="86" width="16" height="10" fill="#94a3b8" stroke="#475569" strokeWidth="0.8" />
              <text x="22" y="94" fontSize="7.5" fill="#1f2937">Lain-lain / Makam (0,800 Ha)</text>
            </g>

            {/* Column 3: Fasilitas & Sarana Publik */}
            <g transform="translate(340, 10)">
              <text x="0" y="12" fontSize="8.5" fontWeight="700" fill="#334155">Sarana & Fasilitas:</text>

              <circle cx="6" cy="27" r="4.5" fill="#dc2626" />
              <text x="18" y="30" fontSize="7.5" fill="#1f2937">Kantor Balai Desa</text>

              <circle cx="6" cy="43" r="4.5" fill="#16a34a" />
              <text x="18" y="46" fontSize="7.5" fill="#1f2937">Polindes / Poskesdes & Posyandu</text>

              <circle cx="6" cy="59" r="4.5" fill="#2563eb" />
              <text x="18" y="62" fontSize="7.5" fill="#1f2937">Sekolah SD/MI (2 Unit, 624 Siswa)</text>

              <circle cx="6" cy="75" r="4.5" fill="#8b5cf6" />
              <text x="18" y="78" fontSize="7.5" fill="#1f2937">TK / PAUD (3 Unit, 97 Siswa)</text>

              <circle cx="6" cy="91" r="4.5" fill="#0d9488" />
              <text x="18" y="94" fontSize="7.5" fill="#1f2937">Tempat Ibadah (8 Masjid/Mushola)</text>

              <circle cx="6" cy="107" r="4.5" fill="#0284c7" />
              <text x="18" y="110" fontSize="7.5" fill="#1f2937">TPI & Nelayan (55 Armada Perahu)</text>
            </g>

            {/* Column 4: Pengesahan & Sumber Metadata */}
            <g transform="translate(495, 10)">
              <text x="0" y="12" fontSize="8" fontWeight="700" fill="#334155">SUMBER DATA & REFERENSI:</text>
              <text x="0" y="26" fontSize="7" fill="#475569">1. Profil & Monografi Desa Korowelangkulon</text>
              <text x="0" y="38" fontSize="7" fill="#475569">2. Administrasi Pemdes Kec. Cepiring</text>
              <text x="0" y="50" fontSize="7" fill="#475569">3. Peta Rupa Bumi Indonesia (BIG)</text>
              <text x="0" y="62" fontSize="7" fill="#475569">4. Portal Resmi Kendalkab.go.id</text>

              <line x1="0" y1="72" x2="155" y2="72" stroke="#e2e8f0" strokeWidth="1" />

              <text x="0" y="86" fontSize="7.5" fontWeight="700" fill="#001e40">Diterbitkan Resmi Oleh:</text>
              <text x="0" y="98" fontSize="7.5" fontWeight="600" fill="#003366">Pemerintah Desa Korowelang Kulon</text>
              <text x="0" y="110" fontSize="6.5" fill="#64748b">Kecamatan Cepiring • Kabupaten Kendal</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Interactive Helper Footer */}
      {interactive && (
        <div className="bg-[#f8f9ff] border-t border-[#d3e4fe]/60 px-4 py-2 flex flex-wrap items-center justify-between text-xs text-[#43474f]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Peta Interaktif: Klik zona atau simbol untuk melihat statistik & perincian lahan.</span>
          </div>
          <span className="text-[11px] font-medium text-[#003366]">Luas: 162,447 Ha • 3 Dusun • 26 RT</span>
        </div>
      )}
    </div>
  );
};
