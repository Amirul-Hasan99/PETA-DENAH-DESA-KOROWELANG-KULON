import React from 'react';
import { ChevronRight } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';
import { ActiveTab } from '../types';
import { KendalLogo } from './KendalLogo';

interface FooterProps {
  onSelectTab: (tab: ActiveTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectTab }) => {
  return (
    <footer className="bg-[#001e40] text-white pt-12 pb-8 border-t border-[#003366]">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[#003366]/80">
          {/* Brand Column (Left 7 cols) */}
          <div className="md:col-span-7 space-y-4">
            <div className="flex items-center gap-3.5">
              <div className="p-1 rounded-lg bg-white/10 backdrop-blur-xs border border-white/15 shadow-sm flex items-center justify-center shrink-0">
                <KendalLogo size="lg" className="w-10 h-13 md:w-11 md:h-14" />
              </div>
              <div>
                <h2 className="font-display font-bold text-lg md:text-xl text-white tracking-tight">
                  {VILLAGE_INFO.name}
                </h2>
                <p className="text-xs text-[#a7c8ff]">Pemerintah Kabupaten Kendal • Jawa Tengah</p>
              </div>
            </div>

            <p className="text-xs md:text-sm text-[#d5e3ff]/80 leading-relaxed max-w-lg">
              Portal Geografis dan Peta Denah Wilayah Resmi Pemerintah Desa
              Korowelang Kulon, Kecamatan Cepiring, Kabupaten Kendal, Provinsi Jawa Tengah.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#a7c8ff]">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              <span>Pemerintah Desa Korowelang Kulon</span>
            </div>
          </div>

          {/* Quick Navigation Links Column (Right 5 cols) */}
          <div className="md:col-span-5 space-y-3.5 md:pl-8">
            <h3 className="font-display font-bold text-sm md:text-base text-white tracking-wide">
              Navigasi Wilayah
            </h3>

            <ul className="space-y-2.5 text-xs md:text-sm">
              <li>
                <button
                  onClick={() => onSelectTab('profil')}
                  className="flex items-center gap-1.5 text-[#d5e3ff]/80 hover:text-white transition-colors group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#799dd6] group-hover:translate-x-1 transition-transform" />
                  <span>Profil Desa</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('geografi')}
                  className="flex items-center gap-1.5 text-[#d5e3ff]/80 hover:text-white transition-colors group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#799dd6] group-hover:translate-x-1 transition-transform" />
                  <span>Geografi & Peta Denah</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectTab('galeri')}
                  className="flex items-center gap-1.5 text-[#d5e3ff]/80 hover:text-white transition-colors group cursor-pointer"
                >
                  <ChevronRight className="w-3.5 h-3.5 text-[#799dd6] group-hover:translate-x-1 transition-transform" />
                  <span>Galeri & Fasilitas Desa</span>
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-[#a7c8ff]/70 gap-3">
          <p>© 2024 Pemerintah Desa Korowelang Kulon. Hak Cipta Dilindungi.</p>
          <p className="text-[11px]">Kecamatan Cepiring • Kabupaten Kendal • Jawa Tengah</p>
        </div>
      </div>
    </footer>
  );
};
