import React, { useState } from 'react';
import { Eye, Download, Map as MapIcon, Layers, Maximize2, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { VillageMapGraphic } from './VillageMapGraphic';

interface MapCardProps {
  onOpenPreview: () => void;
  onDownloadMap: () => void;
}

export const MapCard: React.FC<MapCardProps> = ({ onOpenPreview, onDownloadMap }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  const handleDownloadClick = () => {
    onDownloadMap();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 mb-10 md:mb-14">
      {/* Outer Card Wrapper */}
      <div className="bg-white rounded-lg p-3 sm:p-5 md:p-6 shadow-xs border border-[#e5eeff]">
        {/* Map Display Container */}
        <div 
          onClick={onOpenPreview}
          className="cursor-pointer group relative rounded-md overflow-hidden bg-[#fcfdff] border border-[#dce9ff]"
        >
          {/* Map Vector Graphic */}
          <VillageMapGraphic interactive={false} className="w-full" />

          {/* Hover Overlay for Preview hint */}
          <div className="absolute inset-0 bg-[#001e40]/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="bg-[#001e40]/90 backdrop-blur-xs text-white px-4 py-2 rounded-md shadow-lg flex items-center gap-2 text-xs md:text-sm font-medium transform translate-y-2 group-hover:translate-y-0 transition-transform">
              <Maximize2 className="w-4 h-4 text-[#a7c8ff]" />
              <span>Klik untuk perbesar & telusuri peta</span>
            </div>
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center justify-center gap-4 mt-6">
          <button
            onClick={onOpenPreview}
            className="flex items-center gap-2 px-5 py-2.5 rounded border border-[#001e40] text-[#001e40] hover:bg-[#eff4ff] font-medium text-sm transition-all shadow-2xs hover:shadow-xs active:scale-98"
          >
            <Eye className="w-4 h-4" />
            <span>Preview Peta</span>
          </button>
          
          <button
            onClick={handleDownloadClick}
            className="flex items-center gap-2 px-6 py-2.5 rounded bg-[#001e40] hover:bg-[#003366] text-white font-medium text-sm transition-all shadow-xs hover:shadow active:scale-98"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-4 h-4 text-[#a3f69c]" />
                <span>Peta Terunduh!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Unduh Peta</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Detail & Action Card (Matching Image 4) */}
        <div className="sm:hidden mt-5 pt-5 border-t border-[#eff4ff]">
          <div className="flex items-center gap-2 text-[#001e40] mb-2.5">
            <div className="p-1.5 rounded bg-[#eff4ff] text-[#003366]">
              <MapIcon className="w-5 h-5" />
            </div>
            <h2 className="font-display font-bold text-base text-[#001e40]">
              Peta Administrasi & Bahaya Bencana
            </h2>
          </div>
          <p className="text-xs text-[#43474f] leading-relaxed mb-4">
            Peta ini menyajikan batas wilayah administratif, tata letak
            infrastruktur penting, serta pemetaan potensi risiko bencana alam di
            area Desa Korowelang Kulon sebagai panduan mitigasi dan pembangunan.
          </p>

          <div className="flex flex-col gap-2">
            <button
              onClick={handleDownloadClick}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded bg-[#001e40] hover:bg-[#003366] text-white font-medium text-xs shadow-xs"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-4 h-4 text-[#a3f69c]" />
                  <span>File PDF Siap Diunduh</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Unduh Peta (PDF)</span>
                </>
              )}
            </button>
            <button
              onClick={onOpenPreview}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded border border-[#001e40] text-[#001e40] font-medium text-xs hover:bg-[#eff4ff]"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Buka Tampilan Penuh (Interaktif)</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
