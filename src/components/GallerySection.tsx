import React from 'react';
import { ArrowRight, Image as ImageIcon, Sparkles, Building2, CheckCircle2 } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/villageData';

interface GallerySectionProps {
  onOpenGallery: () => void;
}

export const GallerySection: React.FC<GallerySectionProps> = ({ onOpenGallery }) => {
  const primaryItem = GALLERY_ITEMS[0];

  return (
    <section className="max-w-[1200px] mx-auto px-4 md:px-8 mb-14 md:mb-20">
      {/* Outer Banner Card Container (Desktop: 2 Columns, Mobile: Stacked Cards) */}
      <div className="bg-[#eff4ff] rounded-xl p-6 sm:p-8 md:p-10 border border-[#d3e4fe]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Column: Heading & Action */}
          <div className="space-y-4 md:space-y-5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white text-[#003366] text-xs font-semibold border border-[#d3e4fe] shadow-2xs">
              <Building2 className="w-3.5 h-3.5" />
              <span>Infrastruktur & Fasilitas Publik</span>
            </div>

            <h2 className="font-display font-bold text-2xl sm:text-3xl text-[#001e40] tracking-tight">
              Galeri & Fasilitas Desa
            </h2>

            <p className="text-sm md:text-base text-[#43474f] leading-relaxed">
              Melihat lebih dekat fasilitas pelayanan dan kegiatan warga Desa
              Korowelang Kulon. Kami terus berupaya meningkatkan kenyamanan dan
              aksesibilitas untuk seluruh lapisan masyarakat.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenGallery}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded border border-[#001e40] text-[#001e40] bg-white hover:bg-[#001e40] hover:text-white font-medium text-sm transition-all duration-200 shadow-2xs group"
              >
                <span>Lihat Galeri Desa</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Right Column: Visual Photo Card with Civic Badge */}
          <div 
            onClick={onOpenGallery}
            className="cursor-pointer group relative rounded-lg overflow-hidden border border-[#c3c6d1]/60 shadow-md bg-white transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Main Facility Photo */}
            <div className="relative aspect-4/3 sm:aspect-16/10 overflow-hidden bg-slate-100">
              <img
                src={primaryItem.imageUrl}
                alt="Balai Desa Korowelang Kulon"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001e40]/90 via-[#001e40]/30 to-transparent flex flex-col justify-end p-5 md:p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#a7c8ff] mb-1">
                  Kantor Pelayanan Terpadu
                </span>
                <h3 className="font-display font-bold text-lg md:text-xl text-white">
                  Balai Desa Korowelang Kulon
                </h3>
                <p className="text-xs text-[#eff4ff]/90 mt-1">
                  Pusat layanan administrasi & musyawarah masyarakat
                </p>
              </div>
            </div>

            {/* Quick Feature Badges Bar */}
            <div className="bg-white p-3.5 px-5 flex items-center justify-between text-xs text-[#43474f]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#1b6d24]" />
                <span className="font-medium text-[#001e40]">Standar Pelayanan Prima (PATEN)</span>
              </div>
              <span className="text-[#003366] font-semibold flex items-center gap-1 group-hover:underline">
                6 Dokumentasi Foto →
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
