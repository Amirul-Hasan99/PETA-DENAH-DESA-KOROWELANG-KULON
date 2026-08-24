import React, { useState } from 'react';
import { X, Download, Printer, Info, Check, ShieldCheck, MapPin, Compass, FileImage, FileText } from 'lucide-react';
import { VillageMapGraphic } from './VillageMapGraphic';
import { VILLAGE_INFO, LAND_USE_DATA } from '../data/villageData';
import { KendalLogo } from './KendalLogo';
import { downloadMapAsPng, printMapAsPdf } from '../utils/mapExportUtils';

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MapModal: React.FC<MapModalProps> = ({ isOpen, onClose }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState(false);
  const [isPrinting, setIsPrinting] = useState(false);
  const [showInfoPanel, setShowInfoPanel] = useState(true);

  if (!isOpen) return null;

  const handleDownloadPng = async () => {
    setIsDownloading(true);
    await downloadMapAsPng();
    setIsDownloading(false);
    setDownloadSuccess(true);
    setTimeout(() => setDownloadSuccess(false), 3000);
  };

  const handlePrintPdf = () => {
    setIsPrinting(true);
    printMapAsPdf();
    setTimeout(() => setIsPrinting(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#001e40]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl w-full max-w-6xl h-[95vh] md:h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#d3e4fe]">
        {/* Top Modal Header */}
        <div className="bg-[#001e40] text-white px-3.5 sm:px-6 py-3 sm:py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="p-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <KendalLogo size="sm" className="w-7 h-9 sm:w-8 sm:h-10" />
            </div>
            <div>
              <h2 className="font-display font-bold text-xs sm:text-base text-white line-clamp-1">
                Peta Denah & Administrasi Desa Korowelang Kulon
              </h2>
              <p className="text-[10px] sm:text-[11px] text-[#a7c8ff]">
                Kecamatan Cepiring • Kabupaten Kendal • Jawa Tengah
              </p>
            </div>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <button
              onClick={() => setShowInfoPanel(!showInfoPanel)}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer ${
                showInfoPanel
                  ? 'bg-[#003366] text-white border border-[#799dd6]/40'
                  : 'bg-white/10 text-white/90 hover:bg-white/20'
              }`}
              title="Informasi Peta & Lahan"
            >
              <Info className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Info Lahan</span>
            </button>

            <button
              onClick={handleDownloadPng}
              disabled={isDownloading}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-[#003366] hover:bg-[#004080] border border-white/20 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer active:scale-98"
              title="Unduh Peta PNG Resolusi Tinggi"
            >
              {downloadSuccess ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#a3f69c]" />
                  <span className="hidden sm:inline">PNG Terunduh!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">Unduh PNG</span>
                </>
              )}
            </button>

            <button
              onClick={handlePrintPdf}
              disabled={isPrinting}
              className="px-2.5 sm:px-3.5 py-1.5 rounded-lg bg-[#1b6d24] hover:bg-[#165a1e] text-white text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-2xs cursor-pointer active:scale-98"
              title="Cetak Peta atau Simpan sebagai PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">{isPrinting ? 'Membuka...' : 'Cetak PDF'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-white/20 text-white/80 hover:text-white transition-colors ml-1 cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body: Responsive Layout */}
        <div className="flex-1 flex flex-col md:flex-row overflow-y-auto md:overflow-hidden relative bg-[#f4f7fb]">
          {/* Main Map Viewer Area */}
          <div className="w-full md:flex-1 h-[55vh] md:h-full p-2 sm:p-4 flex flex-col items-center justify-center shrink-0">
            <div className="w-full h-full max-w-5xl flex items-center justify-center">
              <VillageMapGraphic
                interactive={true}
                className="w-full h-full shadow-lg"
              />
            </div>
          </div>

          {/* Sidebar Panel (Metadata, Land Use, Quick Export Actions) */}
          {showInfoPanel && (
            <div className="w-full md:w-84 bg-white border-t md:border-t-0 md:border-l border-[#e5eeff] p-4 sm:p-5 flex flex-col shrink-0 md:overflow-y-auto">
              <div className="flex items-center justify-between mb-3.5">
                <h3 className="font-display font-bold text-sm text-[#001e40] flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#003366]" />
                  <span>Metadata & Informasi Wilayah</span>
                </h3>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#1b5e20] bg-[#e8f5e9] px-2 py-0.5 rounded">
                  <ShieldCheck className="w-3 h-3" />
                  <span>Resmi</span>
                </span>
              </div>

              {/* Quick Export Action Buttons in Sidebar */}
              <div className="bg-[#eff4ff] p-3 rounded-lg border border-[#cbdbf5] mb-4">
                <p className="text-[11px] font-semibold text-[#001e40] mb-2 flex items-center gap-1.5">
                  <Download className="w-3.5 h-3.5 text-[#003366]" />
                  <span>Opsi Ekspor Dokumen:</span>
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={handleDownloadPng}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-white hover:bg-[#f1f5f9] text-[#001e40] border border-[#cbdbf5] rounded-md font-semibold text-xs transition-all cursor-pointer shadow-2xs"
                  >
                    <FileImage className="w-3.5 h-3.5 text-[#003366]" />
                    <span>Unduh PNG</span>
                  </button>
                  <button
                    onClick={handlePrintPdf}
                    className="flex items-center justify-center gap-1.5 py-2 px-2.5 bg-[#1b6d24] hover:bg-[#155d1d] text-white rounded-md font-semibold text-xs transition-all cursor-pointer shadow-2xs"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Cetak PDF</span>
                  </button>
                </div>
              </div>

              {/* Land Use Section */}
              <div className="space-y-2 mb-4">
                <p className="text-xs font-bold text-[#001e40] uppercase tracking-wider text-[11px]">
                  Rincian Tata Guna Lahan (162,447 Ha)
                </p>
                {LAND_USE_DATA.map((land, idx) => {
                  const colors = ['#2e7d32', '#ed6c02', '#0288d1', '#00796b', '#78909c'];
                  const color = colors[idx % colors.length];
                  return (
                    <div
                      key={idx}
                      className="flex items-center justify-between p-2 rounded-lg bg-[#f8f9ff] border border-[#eef2f6] text-xs"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          className="w-2.5 h-2.5 rounded-full inline-block shrink-0"
                          style={{ backgroundColor: color }}
                        />
                        <span className="font-medium text-[#1e293b]">{land.name}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-[#001e40]">{land.areaHa} Ha</span>
                        <span className="text-[10px] text-[#64748b] ml-1.5">({land.percentage}%)</span>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Geographic Coordinates & Projection Box */}
              <div className="mt-auto bg-[#f8f9ff] p-3.5 rounded-lg border border-[#e5eeff] text-xs text-[#43474f] space-y-1.5">
                <div className="flex items-center gap-1.5 font-bold text-[#001e40]">
                  <Info className="w-3.5 h-3.5 text-[#003366]" />
                  <span>Informasi Geospasial:</span>
                </div>
                <div className="flex justify-between text-[11px] pt-1">
                  <span className="text-[#737780]">Luas Wilayah:</span>
                  <span className="font-semibold text-[#001e40]">{VILLAGE_INFO.totalArea}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Pembagian:</span>
                  <span className="font-semibold text-[#001e40]">3 Dusun • 26 RT</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Datum / Proyeksi:</span>
                  <span className="font-semibold text-[#001e40]">WGS 84 / UTM 49S</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#737780]">Skala Dokumen:</span>
                  <span className="font-semibold text-[#001e40]">1 : 25.000</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
