import React, { useState } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Layers, MapPin, ShieldAlert, Sparkles, Navigation, Info } from 'lucide-react';

interface VillageMapGraphicProps {
  interactive?: boolean;
  activeLayers?: string[];
  onToggleLayer?: (layerId: string) => void;
  className?: string;
}

export const VillageMapGraphic: React.FC<VillageMapGraphicProps> = ({
  interactive = true,
  activeLayers = ['admin', 'sawah', 'pemukiman', 'pesisir', 'fasum', 'mitigasi'],
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

  return (
    <div className={`relative overflow-hidden bg-white border border-[#d3e4fe]/80 rounded-md select-none ${className}`}>
      {/* Map Control Buttons (if interactive) */}
      {interactive && (
        <div className="absolute top-3 right-3 z-20 flex flex-col gap-1.5 bg-white/95 backdrop-blur-xs p-1.5 rounded border border-[#c3c6d1]/60 shadow-xs">
          <button
            onClick={() => setZoomLevel(prev => Math.min(prev + 0.25, 2.5))}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors"
            title="Perbesar Peta (+)"
            aria-label="Zoom In"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(prev => Math.max(prev - 0.25, 0.75))}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors"
            title="Perkecil Peta (-)"
            aria-label="Zoom Out"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <button
            onClick={resetView}
            className="p-1.5 rounded hover:bg-[#eff4ff] text-[#001e40] transition-colors"
            title="Reset Tampilan"
            aria-label="Reset View"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Info Badge if Zone Selected */}
      {selectedZone && (
        <div className="absolute top-3 left-3 z-20 bg-[#001e40] text-white px-3 py-1.5 rounded text-xs shadow-md max-w-xs flex items-start gap-2 animate-fade-in">
          <Info className="w-4 h-4 shrink-0 text-[#799dd6] mt-0.5" />
          <div>
            <p className="font-semibold">{selectedZone}</p>
            <p className="text-[11px] text-[#eff4ff]/80">Klik area lain untuk melihat info detail zona</p>
          </div>
          <button onClick={() => setSelectedZone(null)} className="text-white/60 hover:text-white ml-1">✕</button>
        </div>
      )}

      {/* Interactive Map Canvas / SVG Container */}
      <div
        className={`w-full h-full min-h-[420px] md:min-h-[500px] flex items-center justify-center p-2 bg-[#fcfdff] cursor-grab active:cursor-grabbing`}
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
            <rect x="20" y="20" width="660" height="42" fill="#ffffff" />
            <text x="350" y="46" textAnchor="middle" fill="#111827" fontSize="13.5" fontWeight="800" letterSpacing="0.5" fontFamily="Plus Jakarta Sans, sans-serif">
              PETA BAHAYA TANAH LONGSOR & DENAH WILAYAH DESA KOROWELANG KULON
            </text>
            <text x="350" y="60" textAnchor="middle" fill="#4b5563" fontSize="10.5" fontWeight="600" fontFamily="Work Sans, sans-serif">
              KECAMATAN CEPIRING, KABUPATEN KENDAL, PROVINSI JAWA TENGAH
            </text>
            <line x1="20" y1="68" x2="680" y2="68" stroke="#111827" strokeWidth="1.5" />
          </g>

          {/* MAP CANVAS INNER FRAME */}
          <g id="map-content">
            <rect x="20" y="74" width="660" height="645" fill="#f4f7fb" stroke="#374151" strokeWidth="1.2" />

            {/* Coordinate Grid Lines */}
            <g stroke="#9ca3af" strokeWidth="0.5" strokeDasharray="3 3" opacity="0.6">
              <line x1="150" y1="74" x2="150" y2="719" />
              <line x1="300" y1="74" x2="300" y2="719" />
              <line x1="450" y1="74" x2="450" y2="719" />
              <line x1="600" y1="74" x2="600" y2="719" />
              <line x1="20" y1="180" x2="680" y2="180" />
              <line x1="20" y1="320" x2="680" y2="320" />
              <line x1="20" y1="460" x2="680" y2="460" />
              <line x1="20" y1="600" x2="680" y2="600" />
            </g>

            {/* Adjacent District & Region Labels */}
            <g fill="#4b5563" fontSize="9" fontWeight="700" opacity="0.85">
              <text x="40" y="160" transform="rotate(-90 40 160)" letterSpacing="1">KABUPATEN PURWOREJO / PROV. JAWA TENGAH</text>
              <text x="560" y="240" letterSpacing="1">KABUPATEN SLEMAN</text>
              <text x="540" y="520" letterSpacing="0.8">KECAMATAN SENTOLO</text>
              <text x="140" y="670" letterSpacing="0.8">KECAMATAN TEMON</text>
              <text x="360" y="705" letterSpacing="0.8">KECAMATAN WATES</text>
            </g>

            {/* THEMATIC MAP POLYGONS (High, Moderate, Low Risk & Agriculture zones) */}
            <g id="territory-polygon" stroke="#262626" strokeWidth="1.2">
              {/* Base Land Boundary - Outer polygon contour */}
              {/* High Risk (Red / Danger zone) in Northern & Central Mountain Ridges */}
              <path
                d="M 280 120 C 330 110, 420 100, 480 115 C 540 130, 580 170, 560 230 C 540 280, 510 320, 480 340 C 440 370, 390 350, 340 330 C 300 310, 260 260, 270 200 Z"
                fill="#cc1f1a"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Kerawanan Tinggi / Lereng Atas (Tingkat Bahaya Tinggi)')}
              />
              <path
                d="M 280 290 C 330 280, 410 310, 440 370 C 400 410, 320 440, 270 420 C 220 400, 210 330, 280 290 Z"
                fill="#b91c1c"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Inti Bukit & Lereng Curam')}
              />
              <path
                d="M 180 500 C 220 470, 270 480, 280 540 C 250 590, 190 580, 160 550 C 150 530, 160 510, 180 500 Z"
                fill="#dc2626"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Rawan Longsor Pesisir / Tanggul')}
              />

              {/* Moderate Risk (Orange / Brownish zones) */}
              <path
                d="M 250 140 C 270 120, 300 110, 320 150 C 290 220, 240 260, 220 230 C 200 200, 220 160, 250 140 Z"
                fill="#d97706"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Kerawanan Sedang / Lereng Menengah (Tingkat Bahaya Sedang)')}
              />
              <path
                d="M 460 140 C 510 140, 560 170, 580 220 C 590 260, 570 310, 530 330 C 500 310, 480 270, 470 210 Z"
                fill="#ea580c"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Perbukitan Menengah Timur')}
              />
              <path
                d="M 230 350 C 290 340, 380 370, 400 450 C 370 510, 280 530, 240 480 C 200 440, 200 380, 230 350 Z"
                fill="#c2410c"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Kerawanan Sedang / Pemukiman Lereng')}
              />
              <path
                d="M 120 540 C 170 510, 240 520, 280 580 C 270 630, 210 650, 160 630 C 110 610, 90 570, 120 540 Z"
                fill="#d97706"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Transisi Pesisir & Pertanian')}
              />
              <path
                d="M 330 520 C 400 500, 480 520, 500 580 C 480 630, 390 650, 340 620 C 300 590, 300 540, 330 520 Z"
                fill="#b45309"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Perbukitan Selatan')}
              />

              {/* Low Risk / Agriculture & Settlement (Yellow & Greenish-Yellow zones) */}
              <path
                d="M 480 320 C 530 310, 580 340, 590 410 C 600 480, 550 560, 510 570 C 470 550, 460 480, 450 420 C 440 370, 460 340, 480 320 Z"
                fill="#eab308"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Dataran Rendah / Sawah Subur (Tingkat Bahaya Rendah)')}
              />
              <path
                d="M 440 480 C 490 470, 540 520, 520 600 C 480 660, 420 660, 380 630 C 380 580, 410 520, 440 480 Z"
                fill="#ca8a04"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Persawahan Selatan & Irigasi Teknis')}
              />
              <path
                d="M 230 630 C 280 610, 340 640, 330 700 C 300 730, 240 730, 210 690 C 200 660, 210 640, 230 630 Z"
                fill="#facc15"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Zona Dataran Alluvial & Muara')}
              />

              {/* Central Reservoir / Blue Water Body (Waduk Sermo / Saluran Irigasi Bodri) */}
              <path
                d="M 270 470 C 290 460, 310 470, 315 490 C 310 515, 280 520, 265 505 C 255 490, 260 475, 270 470 Z"
                fill="#0284c7"
                stroke="#0369a1"
                strokeWidth="1.5"
                className="cursor-pointer hover:opacity-90 transition-opacity"
                onClick={() => setSelectedZone('Waduk Penampung & Reservoir Irigasi Pertanian')}
              />
            </g>

            {/* River & Irrigation Streams */}
            <g stroke="#0284c7" strokeWidth="1.5" fill="none">
              <path d="M 285 120 Q 300 240 270 330 T 290 470 T 270 540 T 240 680" strokeWidth="2.2" />
              <path d="M 450 140 Q 480 230 460 360 T 430 520 T 360 680" strokeWidth="1.8" />
              <path d="M 315 490 Q 380 510 440 500 T 520 560" strokeWidth="1.6" />
            </g>

            {/* Road Networks & Transportation Lines */}
            <g stroke="#374151" strokeWidth="1.2" fill="none">
              <path d="M 120 540 L 230 490 L 320 480 L 450 490 L 580 430" stroke="#b91c1c" strokeWidth="1.8" />
              <path d="M 280 120 L 340 330 L 320 480 L 330 620 L 230 690" stroke="#1f2937" strokeWidth="1.5" strokeDasharray="6 2" />
              <path d="M 320 480 L 400 450 L 500 350 L 560 230" stroke="#4b5563" strokeWidth="1.2" />
            </g>

            {/* Key Facility Pins & Labels */}
            <g id="facility-markers">
              {/* Balai Desa */}
              <g transform="translate(320, 480)" className="cursor-pointer" onClick={() => setSelectedZone('Kantor Balai Desa Korowelang Kulon')}>
                <circle cx="0" cy="0" r="6" fill="#dc2626" stroke="#ffffff" strokeWidth="1.5" />
                <circle cx="0" cy="0" r="2" fill="#ffffff" />
                <rect x="8" y="-9" width="80" height="16" fill="#ffffff" rx="2" stroke="#1f2937" strokeWidth="0.8" opacity="0.9" />
                <text x="12" y="3" fontSize="8" fontWeight="700" fill="#111827">Kantor Balai Desa</text>
              </g>

              {/* Puskesmas & Fasilitas */}
              <g transform="translate(240, 490)" className="cursor-pointer" onClick={() => setSelectedZone('Poskesdes / Fasilitas Kesehatan')}>
                <circle cx="0" cy="0" r="4.5" fill="#16a34a" stroke="#ffffff" strokeWidth="1.2" />
                <rect x="-45" y="-18" width="55" height="14" fill="#ffffff" rx="2" stroke="#1f2937" strokeWidth="0.6" opacity="0.85" />
                <text x="-42" y="-8" fontSize="7" fontWeight="600" fill="#15803d">Poskesdes Desa</text>
              </g>

              {/* Sentra Pertanian & Irigasi */}
              <g transform="translate(460, 420)" className="cursor-pointer" onClick={() => setSelectedZone('Kawasan Sentra Padi & Lumbung Pangan')}>
                <circle cx="0" cy="0" r="4.5" fill="#ca8a04" stroke="#ffffff" strokeWidth="1.2" />
                <rect x="7" y="-7" width="75" height="14" fill="#ffffff" rx="2" stroke="#1f2937" strokeWidth="0.6" opacity="0.85" />
                <text x="10" y="3" fontSize="7" fontWeight="600" fill="#854d0e">Lumbung Pangan</text>
              </g>

              {/* Sentra Tambak & Nelayan */}
              <g transform="translate(180, 560)" className="cursor-pointer" onClick={() => setSelectedZone('Dermaga & Sentra Tambak Bandeng')}>
                <circle cx="0" cy="0" r="4.5" fill="#0284c7" stroke="#ffffff" strokeWidth="1.2" />
                <rect x="-70" y="4" width="65" height="14" fill="#ffffff" rx="2" stroke="#1f2937" strokeWidth="0.6" opacity="0.85" />
                <text x="-67" y="14" fontSize="7" fontWeight="600" fill="#0369a1">Sentra Tambak</text>
              </g>
            </g>

            {/* NORTH COMPASS ROSE (Arah Mata Angin) */}
            <g transform="translate(110, 140)">
              <circle cx="0" cy="0" r="24" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" opacity="0.9" />
              {/* Star / Compass Points */}
              <polygon points="0,-20 5,-5 20,0 5,5 0,20 -5,5 -20,0 -5,-5" fill="#ffffff" stroke="#1f2937" strokeWidth="1" />
              <polygon points="0,-20 5,-5 0,0" fill="#111827" />
              <polygon points="20,0 5,5 0,0" fill="#111827" />
              <polygon points="0,20 -5,5 0,0" fill="#111827" />
              <polygon points="-20,0 -5,-5 0,0" fill="#111827" />
              <text x="0" y="-23" textAnchor="middle" fontSize="9" fontWeight="900" fill="#111827">U</text>
            </g>

            {/* SCALE BAR (Skala Grafis) */}
            <g transform="translate(50, 185)">
              <rect x="0" y="0" width="120" height="22" fill="#ffffff" stroke="#374151" strokeWidth="0.8" opacity="0.9" />
              <text x="60" y="9" textAnchor="middle" fontSize="7" fontWeight="700" fill="#111827">SKALA 1 : 25.000</text>
              <rect x="10" y="12" width="25" height="4" fill="#111827" />
              <rect x="35" y="12" width="25" height="4" fill="#ffffff" stroke="#111827" strokeWidth="0.5" />
              <rect x="60" y="12" width="25" height="4" fill="#111827" />
              <rect x="85" y="12" width="25" height="4" fill="#ffffff" stroke="#111827" strokeWidth="0.5" />
              <text x="10" y="21" fontSize="6" fill="#111827">0</text>
              <text x="60" y="21" fontSize="6" fill="#111827">1.25</text>
              <text x="110" y="21" fontSize="6" fill="#111827">2.5 Km</text>
            </g>

            {/* INSET MAP BOX (Bottom Right Inset) */}
            <g transform="translate(500, 560)">
              <rect x="0" y="0" width="165" height="145" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />
              <rect x="4" y="4" width="157" height="16" fill="#f3f4f6" />
              <text x="82" y="15" textAnchor="middle" fontSize="8" fontWeight="800" fill="#111827">PETA INSET KABUPATEN</text>
              {/* Inset Geography */}
              <rect x="6" y="24" width="153" height="115" fill="#e0f2fe" stroke="#9ca3af" strokeWidth="0.6" />
              <path d="M 10 26 L 150 26 L 150 110 L 10 110 Z" fill="#86efac" />
              <path d="M 50 45 C 70 40 100 40 115 55 C 130 70 120 95 100 105 C 80 110 55 100 45 85 Z" fill="#dc2626" stroke="#991b1b" strokeWidth="1" />
              <text x="82" y="80" textAnchor="middle" fontSize="7" fontWeight="800" fill="#ffffff">Desa Korowelang</text>
              <text x="82" y="130" textAnchor="middle" fontSize="6" fontWeight="600" fill="#0369a1">Laut Jawa / Pesisir Kendal</text>
            </g>
          </g>

          {/* LOWER SECTION: OFFICIAL LEGEND & DETAILS (LEGENDA) */}
          <g id="map-legend" transform="translate(20, 725)">
            <rect x="0" y="0" width="660" height="215" fill="#ffffff" stroke="#1f2937" strokeWidth="1.2" />

            {/* Column 1: Simbol & Batas */}
            <g transform="translate(15, 10)">
              <text x="0" y="12" fontSize="10" fontWeight="800" fill="#111827" textDecoration="underline">LEGENDA</text>
              
              <text x="0" y="30" fontSize="8" fontWeight="700" fill="#374151">Batas Administrasi:</text>
              <line x1="0" y1="42" x2="25" y2="42" stroke="#111827" strokeWidth="1.8" strokeDasharray="5 2" />
              <text x="32" y="45" fontSize="7.5" fill="#1f2937">Batas Desa</text>

              <line x1="0" y1="58" x2="25" y2="58" stroke="#4b5563" strokeWidth="1.2" strokeDasharray="3 2" />
              <text x="32" y="61" fontSize="7.5" fill="#1f2937">Batas Dusun / RW</text>

              <text x="0" y="80" fontSize="8" fontWeight="700" fill="#374151">Jaringan Jalan & Perairan:</text>
              <line x1="0" y1="92" x2="25" y2="92" stroke="#b91c1c" strokeWidth="2" />
              <text x="32" y="95" fontSize="7.5" fill="#1f2937">Jalan Utama Desa</text>

              <line x1="0" y1="108" x2="25" y2="108" stroke="#374151" strokeWidth="1.2" />
              <text x="32" y="111" fontSize="7.5" fill="#1f2937">Jalan Lingkungan</text>

              <line x1="0" y1="124" x2="25" y2="124" stroke="#0284c7" strokeWidth="1.8" />
              <text x="32" y="127" fontSize="7.5" fill="#1f2937">Sungai & Saluran Irigasi</text>
            </g>

            {/* Column 2: Fasilitas & Titik Penting */}
            <g transform="translate(160, 10)">
              <text x="0" y="12" fontSize="8.5" fontWeight="700" fill="#374151">Fasilitas Publik:</text>

              <circle cx="6" cy="27" r="4" fill="#dc2626" />
              <text x="18" y="30" fontSize="7.5" fill="#1f2937">Kantor Balai Desa</text>

              <circle cx="6" cy="43" r="4" fill="#16a34a" />
              <text x="18" y="46" fontSize="7.5" fill="#1f2937">Poskesdes / Kesehatan</text>

              <circle cx="6" cy="59" r="4" fill="#2563eb" />
              <text x="18" y="62" fontSize="7.5" fill="#1f2937">Sekolah / Pendidikan</text>

              <circle cx="6" cy="75" r="4" fill="#0d9488" />
              <text x="18" y="78" fontSize="7.5" fill="#1f2937">Masjid & Tempat Ibadah</text>

              <circle cx="6" cy="91" r="4" fill="#ca8a04" />
              <text x="18" y="94" fontSize="7.5" fill="#1f2937">Lumbung Pangan / Sawah</text>

              <circle cx="6" cy="107" r="4" fill="#0284c7" />
              <text x="18" y="110" fontSize="7.5" fill="#1f2937">Kawasan Tambak Ikan</text>
            </g>

            {/* Column 3: Tingkat Bahaya / Zonasi Kerawanan */}
            <g transform="translate(300, 10)">
              <text x="0" y="12" fontSize="8.5" fontWeight="700" fill="#374151">Zonasi & Tingkat Bahaya:</text>

              <rect x="0" y="22" width="18" height="10" fill="#dc2626" />
              <text x="26" y="30" fontSize="7.5" fill="#1f2937">Kerawanan Tinggi (Lereng & Tanggul)</text>

              <rect x="0" y="38" width="18" height="10" fill="#d97706" />
              <text x="26" y="46" fontSize="7.5" fill="#1f2937">Kerawanan Sedang (Transisi)</text>

              <rect x="0" y="54" width="18" height="10" fill="#eab308" />
              <text x="26" y="62" fontSize="7.5" fill="#1f2937">Kerawanan Rendah (Dataran Rendah)</text>

              <rect x="0" y="70" width="18" height="10" fill="#0284c7" />
              <text x="26" y="78" fontSize="7.5" fill="#1f2937">Badan Air / Reservoir / Saluran</text>

              <line x1="0" y1="95" x2="18" y2="95" stroke="#9333ea" strokeWidth="2" strokeDasharray="3 1" />
              <text x="26" y="98" fontSize="7.5" fill="#1f2937">Jalur Evakuasi Bencana</text>
            </g>

            {/* Column 4: Pengesahan & Instansi Terkait */}
            <g transform="translate(490, 10)">
              <text x="0" y="12" fontSize="8" fontWeight="700" fill="#374151">KETERANGAN & SUMBER:</text>
              <text x="0" y="26" fontSize="7" fill="#4b5563">1. Peta Rupa Bumi Indonesia (BIG)</text>
              <text x="0" y="38" fontSize="7" fill="#4b5563">2. Citra Satelit Resolusi Tinggi 2024</text>
              <text x="0" y="50" fontSize="7" fill="#4b5563">3. Pemetaan Partisipatif Desa</text>
              <text x="0" y="62" fontSize="7" fill="#4b5563">4. BPBD Kabupaten Kendal</text>

              <line x1="0" y1="72" x2="150" y2="72" stroke="#e5e7eb" strokeWidth="1" />

              <text x="0" y="86" fontSize="7.5" fontWeight="700" fill="#111827">Diterbitkan Oleh:</text>
              <text x="0" y="98" fontSize="7.5" fontWeight="600" fill="#001e40">Pemerintah Desa Korowelang Kulon</text>
              <text x="0" y="110" fontSize="6.5" fill="#6b7280">Kecamatan Cepiring - Kendal</text>
            </g>
          </g>
        </svg>
      </div>

      {/* Interactive Helper Footer */}
      {interactive && (
        <div className="bg-[#f8f9ff] border-t border-[#d3e4fe]/60 px-4 py-2 flex flex-wrap items-center justify-between text-xs text-[#43474f]">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Peta Interaktif: Tarik mouse untuk geser (pan), gunakan scroll/tombol untuk zoom.</span>
          </div>
          <span className="text-[11px] font-medium text-[#003366]">Sistem Koordinat: UTM WGS 84</span>
        </div>
      )}
    </div>
  );
};
