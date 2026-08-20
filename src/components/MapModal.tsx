import React, { useState } from 'react';
import { X, Download, ZoomIn, ZoomOut, RotateCcw, Layers, MapPin, Printer, Shield, Check, Info } from 'lucide-react';
import { VillageMapGraphic } from './VillageMapGraphic';
import { MAP_LAYERS, VILLAGE_INFO } from '../data/villageData';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  const [layers, setLayers] = useState(MAP_LAYERS);
  const [isExporting, setIsExporting] = useState(false);
  const [showLayerPanel, setShowLayerPanel] = useState(true);

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
    // Simulate high resolution PDF download trigger
    setTimeout(() => {
      const link = document.createElement('a');
      link.href = '#';
      link.setAttribute('download', 'PETA_DESA_KOROWELANG_KULON_2024.pdf');
      document.body.appendChild(link);
      alert('Peta Berhasil Diproses! Mengunduh dokumen resolusi tinggi PETA_DESA_KOROWELANG_KULON.pdf...');
      setIsExporting(false);
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#001e40]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl w-full max-w-6xl h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#d3e4fe]">
        {/* Top Modal Header */}
        <div className="bg-[#001e40] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded bg-[#003366] text-[#d5e3ff]">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm sm:text-base text-white">
                Pratinjau Peta Denah Wilayah & Administrasi
              </h2>
              <p className="text-[11px] text-[#a7c8ff]">
                {VILLAGE_INFO.name}, Kec. Cepiring, Kab. Kendal
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowLayerPanel(!showLayerPanel)}
              className={`px-3 py-1.5 rounded text-xs font-medium flex items-center gap-1.5 transition-colors ${
                showLayerPanel
                  ? 'bg-[#003366] text-white border border-[#799dd6]/40'
                  : 'bg-white/10 text-white/90 hover:bg-white/20'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Layer Peta</span>
            </button>

            <button
              onClick={handlePrint}
              className="p-1.5 rounded bg-white/10 hover:bg-white/20 text-white transition-colors"
              title="Cetak Peta (Print)"
            >
              <Printer className="w-4 h-4" />
            </button>

            <button
              onClick={handleDownload}
              disabled={isExporting}
              className="px-3.5 py-1.5 rounded bg-[#1b6d24] hover:bg-[#165a1e] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isExporting ? 'Memproses...' : 'Unduh PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/20 text-white/80 hover:text-white transition-colors ml-2"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Map + Sidebar Layer Panel */}
        <div className="flex-1 flex overflow-hidden relative">
          {/* Main Map Viewer Area */}
          <div className="flex-1 h-full bg-[#f4f7fb] overflow-auto p-2 sm:p-4 flex items-center justify-center">
            <div className="w-full max-w-4xl h-full flex items-center justify-center">
              <VillageMapGraphic
                interactive={true}
                activeLayers={layers.filter(l => l.visible).map(l => l.id)}
                className="w-full max-h-full shadow-lg"
              />
            </div>
          </div>

          {/* Layer & Metadata Sidebar */}
          {showLayerPanel && (
            <div className="w-72 md:w-80 bg-white border-l border-[#e5eeff] p-4 flex flex-col shrink-0 overflow-y-auto">
              <h3 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#003366]" />
                <span>Lapisan Data Spasial</span>
              </h3>

              <div className="space-y-2 mb-6">
                {layers.map(layer => (
                  <label
                    key={layer.id}
                    onClick={() => toggleLayer(layer.id)}
                    className={`flex items-start gap-2.5 p-2 rounded-md border cursor-pointer transition-all ${
                      layer.visible
                        ? 'bg-[#eff4ff] border-[#cbdbf5]'
                        : 'bg-white border-[#f1f5f9] opacity-60'
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={layer.visible}
                      onChange={() => {}}
                      className="mt-1 rounded text-[#001e40] focus:ring-[#001e40]"
                    />
                    <div className="text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-[#001e40]">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block"
                          style={{ backgroundColor: layer.color }}
                        />
                        <span>{layer.name}</span>
                      </div>
                      <p className="text-[11px] text-[#737780] mt-0.5">
                        {layer.description}
                      </p>
                    </div>
                  </label>
                ))}
              </div>

              {/* Geographic Coordinates & Projection Box */}
              <div className="mt-auto bg-[#f8f9ff] p-3.5 rounded-md border border-[#e5eeff] text-xs text-[#43474f] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#001e40]">
                  <Info className="w-3.5 h-3.5 text-[#003366]" />
                  <span>Metadata Geospasial:</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Datum:</span>
                  <span className="font-medium text-[#001e40]">WGS 1984</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Proyeksi:</span>
                  <span className="font-medium text-[#001e40]">UTM Zone 49S</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Skala Induk:</span>
                  <span className="font-medium text-[#001e40]">1 : 25.000</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Tahun Pemutakhiran:</span>
                  <span className="font-medium text-[#001e40]">2024</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
