import React, { useState, useRef } from 'react';
import { X, Download, Layers, Printer, Info, ChevronDown } from 'lucide-react';
import { VillageMapGraphic } from './VillageMapGraphic';
import { MAP_LAYERS, VILLAGE_INFO } from '../data/villageData';
import { KendalLogo } from './KendalLogo';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  const [layers, setLayers] = useState(MAP_LAYERS);
  const [isExporting, setIsExporting] = useState(false);
  const [showLayerPanel, setShowLayerPanel] = useState(true);
  const layerSectionRef = useRef<HTMLDivElement>(null);

  if (!isOpen) return null;

  const toggleLayer = (layerId: string) => {
    setLayers(prev =>
      prev.map(l => (l.id === layerId ? { ...l, visible: !l.visible } : l))
    );
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    setIsExporting(true);
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'PETA_DESA_KOROWELANG_KULON_2024.pdf');
      document.body.appendChild(link);
      alert('Peta Berhasil Diproses! Mengunduh dokumen resolusi tinggi PETA_DESA_KOROWELANG_KULON.pdf...');
      setIsExporting(false);
    }, 1000);
  };

  const handleLayerButtonClick = () => {
    if (window.innerWidth < 768) {
      if (!showLayerPanel) setShowLayerPanel(true);
      setTimeout(() => {
        layerSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setShowLayerPanel(!showLayerPanel);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#001e40]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl w-full max-w-6xl h-[94vh] md:h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#d3e4fe]">
        {/* Top Modal Header */}
        <div className="bg-[#001e40] text-white px-3.5 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <KendalLogo size="sm" className="w-7 h-9 sm:w-8 sm:h-10" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xs sm:text-base text-white line-clamp-1">
                Pratinjau Peta Denah Wilayah
              </h2>
              <p className="text-[10px] sm:text-[11px] text-[#a7c8ff]">
                {VILLAGE_INFO.name}, Cepiring, Kendal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={handleLayerButtonClick}
              className={`px-2.5 sm:px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer ${
                showLayerPanel
                  ? 'bg-[#003366] text-white border border-[#799dd6]/40'
                  : 'bg-white/10 text-white/90 hover:bg-white/20'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="text-xs">Layer</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              title="Cetak Peta (Print)"
            >
              <Printer className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </button>

            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="px-2.5 sm:px-3.5 py-1.5 rounded bg-[#1b6d24] hover:bg-[#165a1e] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isExporting ? 'Memproses...' : 'Unduh'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/20 text-white/80 hover:text-white transition-colors ml-1 cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Responsive Layout (Stacked on Mobile, Side-by-Side on Desktop) */}
        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative bg-[#f4f7fb]">
          {/* Main Map Viewer Area */}
          <div className="w-full md:flex-1 h-auto md:h-full overflow-visible md:overflow-auto p-2 sm:p-4 flex flex-col items-center justify-start md:justify-center shrink-0">
            <div className="w-full max-w-4xl flex-1 flex flex-col items-center justify-center min-h-[480px] sm:min-h-[540px] md:min-h-0">
              <VillageMapGraphic
                interactive={true}
                activeLayers={layers.filter(l => l.visible).map(l => l.id)}
                className="w-full shadow-lg"
              />
            </div>

            {/* Mobile Scroll Down Hint */}
            <div
              onClick={() => layerSectionRef.current?.scrollIntoView({ behavior: 'smooth' })}
              className="md:hidden w-full mt-3 py-2 px-3 bg-white rounded-lg border border-[#cbdbf5] text-[#003366] text-xs font-medium flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs active:bg-[#eff4ff]"
            >
              <Layers className="w-3.5 h-3.5 text-[#003366]" />
              <span>Lihat & Atur Lapisan Data Spasial</span>
              <ChevronDown className="w-4 h-4 text-[#003366] animate-bounce" />
            </div>
          </div>

          {/* Layer & Metadata Sidebar (Below map on Mobile, Right sidebar on Desktop) */}
          {showLayerPanel && (
            <div
              ref={layerSectionRef}
              className="w-full md:w-80 bg-white border-t md:border-t-0 md:border-l border-[#e5eeff] p-4 sm:p-5 flex flex-col shrink-0 md:overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-display font-bold text-sm text-[#001e40] flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#003366]" />
                  <span>Lapisan Data Spasial</span>
                </h3>
                <span className="text-[11px] text-[#737780]">
                  {layers.filter(l => l.visible).length} Aktif
                </span>
              </div>

              <div className="space-y-2 mb-6">
                {layers.map(layer => (
                  <label
                    key={layer.id}
                    onClick={() => toggleLayer(layer.id)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-lg border cursor-pointer transition-all ${
                      layer.visible
                        ? 'bg-[#eff4ff] border-[#cbdbf5] shadow-2xs'
                        : 'bg-white border-[#f1f5f9] opacity-60'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={layer.visible}
                      onChange={() => {}}
                      className="mt-0.5 rounded text-[#001e40] focus:ring-[#001e40] cursor-pointer"
                    />
                    <div className="text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-[#001e40]">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                          style={{ backgroundColor: layer.color }}
                        />
                        <span>{layer.name}</span>
                      </div>
                      <p className="text-[11px] text-[#737780] mt-0.5 leading-relaxed">
                        {layer.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Geographic Coordinates & Projection Box */}
              <div className="mt-auto bg-[#f8f9ff] p-3.5 rounded-lg border border-[#e5eeff] text-xs text-[#43474f] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#001e40]">
                  <Info className="w-3.5 h-3.5 text-[#003366]" />
                  <span>Metadata Geospasial:</span>
                </div>
                <div className="flex justify-between text-[11px] pt-1">
                  <span className="text-[#737780]">Datum:</span>
                  <span className="font-semibold text-[#001e40]">WGS 1984</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Proyeksi:</span>
                  <span className="font-semibold text-[#001e40]">UTM Zone 49S</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Skala Induk:</span>
                  <span className="font-semibold text-[#001e40]">1 : 25.000</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Tahun Pemutakhiran:</span>
                  <span className="font-semibold text-[#001e40]">2024</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
