import React from 'react';
import { GraduationCap, MapPin, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-8 md:pt-12 pb-6 md:pb-8 px-4 text-center max-w-[900px] mx-auto">
      {/* Top Attribution Badge */}
      <div className="inline-flex flex-wrap items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-[#eff4ff] text-[#003366] text-xs font-semibold border border-[#cbdbf5] mb-3.5 shadow-2xs">
        <span className="flex items-center gap-1.5 text-[#002d5c]">
          <GraduationCap className="w-3.5 h-3.5 text-[#003366]" />
          <span>KKN Kelompok 14 UNWAHAS 2026</span>
        </span>
        <span className="text-[#94a3b8] hidden sm:inline">•</span>
        <span className="flex items-center gap-1 text-[#43474f]">
          <MapPin className="w-3 h-3 text-[#003366]" />
          <span>Kecamatan Cepiring, Kabupaten Kendal</span>
        </span>
      </div>

      {/* Main Title */}
      <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#001e40] tracking-tight mb-3 md:mb-4">
        Portal Peta Denah & Administrasi Desa Korowelang Kulon
      </h1>

      {/* Description & Credit */}
      <p className="text-sm md:text-base text-[#43474f] leading-relaxed max-w-2xl mx-auto">
        Portal informasi geospasial, peta denah batas wilayah administratif 3 dusun (Welangsari, Tambaksari, Rejosari), dan tata guna lahan seluas 162,447 Ha, dipersembahkan oleh <span className="font-semibold text-[#001e40]">Mahasiswa KKN Kelompok 14 Universitas Wahid Hasyim (UNWAHAS) Tahun 2026</span> bekerjasama dengan Pemerintah Desa Korowelang Kulon.
      </p>
    </section>
  );
};
