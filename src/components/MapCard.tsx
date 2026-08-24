import React, { useState } from 'react';
import { Eye, Download, Printer, Map as MapIcon, Maximize2, Check, ShieldCheck, GraduationCap } from 'lucide-react';
import { VillageMapGraphic } from './VillageMapGraphic';
import { downloadMapAsPng, printMapAsPdf } from '../utils/mapExportUtils';

interface MapCardProps {
  onOpenPreview: () => void;
  onDownloadMap?: () => void;
}

export const MapCard: React.FC<MapCardProps> = ({ onOpenPreview }) => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);

  const handleDownloadPng = async () => {
    await downloadMapAsPng();
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrintPdf = () => {
    setIsPrinting(true);
    printMapAsPdf();
    setTimeout(() => setIsPrinting(false), 1500);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 mb-10 md:mb-14">
      {/* Outer Card Wrapper */}
      <div className="bg-white rounded-xl p-3 sm:p-5 md:p-6 shadow-sm border border-[#e5eeff]">
        {/* Top Header / Badge Bar inside Card */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3 px-1">
          <div className="flex items-center gap-2 text-[#001e40]">
            <div className="p-1.5 rounded-md bg-[#eff4ff] text-[#003366]">
              <MapIcon className="w-4 h-4" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm sm:text-base text-[#001e40] leading-tight">
                Peta Administrasi & Tata Guna Lahan
              </h2>
              <p className="text-[11px] text-[#737780] hidden sm:block">
                Kecamatan Cepiring, Kabupaten Kendal (Luas Wilayah: 162,447 Ha)
              </p>
            </div>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#eff4ff] text-[#003366] text-[11px] font-bold border border-[#cbdbf5]">
              <GraduationCap className="w-3.5 h-3.5" />
              <span>KKN 14 UNWAHAS 2026</span>
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#e8f5e9] text-[#1b5e20] text-[11px] font-semibold border border-[#c8e6c9]">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Peta Resmi Pemdes</span>
            </span>
          </div>
        </div>

        {/* Map Display Container */}
        <div
          onClick={onOpenPreview}
          className="cursor-pointer group relative rounded-lg overflow-hidden bg-[#fcfdff] border border-[#dce9ff] transition-all hover:border-[#003366]/40 hover:shadow-md"
        >
          {/* Map Vector/Image Graphic */}
          <VillageMapGraphic interactive={false} className="w-full" />

          {/* Hover Overlay for Preview hint */}
          <div className="absolute inset-0 bg-[#001e40]/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
            <div className="bg-[#001e40]/90 backdrop-blur-xs text-white px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 text-xs md:text-sm font-semibold transform translate-y-2 group-hover:translate-y-0 transition-transform border border-white/20">
              <Maximize2 className="w-4 h-4 text-[#a7c8ff]" />
              <span>Klik untuk perbesar & telusuri peta interaktif</span>
            </div>
          </div>
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center justify-center gap-3 mt-6">
          <button
            onClick={onOpenPreview}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg border border-[#001e40] text-[#001e40] hover:bg-[#eff4ff] font-semibold text-sm transition-all shadow-2xs hover:shadow-xs active:scale-98 cursor-pointer"
          >
            <Eye className="w-4 h-4 text-[#003366]" />
            <span>Pratinjau Interaktif</span>
          </button>

          <button
            onClick={handleDownloadPng}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#001e40] hover:bg-[#003366] text-white font-semibold text-sm transition-all shadow-xs hover:shadow active:scale-98 cursor-pointer"
          >
            {downloadSuccess ? (
              <>
                <Check className="w-4 h-4 text-[#a3f69c]" />
                <span>PNG Terunduh!</span>
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                <span>Unduh Peta (PNG)</span>
              </>
            )}
          </button>

          <button
            onClick={handlePrintPdf}
            className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#1b6d24] hover:bg-[#155d1d] text-white font-semibold text-sm transition-all shadow-xs hover:shadow active:scale-98 cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            <span>{isPrinting ? 'Membuka Dokumen...' : 'Cetak / Unduh PDF'}</span>
          </button>
        </div>

        {/* Mobile Detail & Action Card */}
        <div className="sm:hidden mt-4 pt-4 border-t border-[#eff4ff]">
          <p className="text-xs text-[#43474f] leading-relaxed mb-3.5">
            Peta menyajikan batas wilayah administratif 3 dusun (Welangsari, Tambaksari, Rejosari), tata letak
            lahan persawahan teknis (105,447 Ha), tambak (17,223 Ha), dan sarana umum Desa Korowelang Kulon.
          </p>

          <div className="grid grid-cols-1 gap-2">
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={handleDownloadPng}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#001e40] hover:bg-[#003366] text-white font-semibold text-xs shadow-xs active:scale-98 cursor-pointer"
              >
                {downloadSuccess ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#a3f69c]" />
                    <span>Terunduh!</span>
                  </>
                ) : (
                  <>
                    <Download className="w-3.5 h-3.5" />
                    <span>Unduh PNG</span>
                  </>
                )}
              </button>

              <button
                onClick={handlePrintPdf}
                className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-[#1b6d24] hover:bg-[#155d1d] text-white font-semibold text-xs shadow-xs active:scale-98 cursor-pointer"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Cetak PDF</span>
              </button>
            </div>

            <button
              onClick={onOpenPreview}
              className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg border border-[#001e40] text-[#001e40] font-semibold text-xs hover:bg-[#eff4ff] active:scale-98 cursor-pointer"
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
