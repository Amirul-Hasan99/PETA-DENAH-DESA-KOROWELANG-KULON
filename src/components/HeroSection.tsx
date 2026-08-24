import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-8 md:pt-12 pb-6 md:pb-8 px-4 text-center max-w-[860px] mx-auto">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#eff4ff] text-[#003366] text-xs font-semibold border border-[#cbdbf5] mb-3">
        <span>Kecamatan Cepiring • Kabupaten Kendal • Jawa Tengah</span>
      </div>
      <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#001e40] tracking-tight mb-3 md:mb-4">
        Peta Denah & Administrasi Desa Korowelang Kulon
      </h1>
      <p className="text-sm md:text-base text-[#43474f] leading-relaxed max-w-2xl mx-auto">
        Portal resmi informasi geospasial, tata guna lahan seluas 162,447 Ha, pembagian 3 dusun (Welangsari, Tambaksari, Rejosari), potensi perikanan dan pertanian, serta fasilitas pelayanan masyarakat Desa Korowelang Kulon.
      </p>
    </section>
  );
};
