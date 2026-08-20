import React from 'react';

export const HeroSection: React.FC = () => {
  return (
    <section className="pt-8 md:pt-12 pb-6 md:pb-8 px-4 text-center max-w-[860px] mx-auto">
      <h1 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-[#001e40] tracking-tight mb-3 md:mb-4">
        Peta Denah Desa Korowelang Kulon
      </h1>
      <p className="text-sm md:text-base text-[#43474f] leading-relaxed max-w-2xl mx-auto">
        Desa Korowelang Kulon berlokasi di kecamatan Cepiring, Kabupaten Kendal,
        Jawa Tengah. Desa ini memiliki area pertanian yang luas dan berbatasan
        langsung dengan desa-desa sekitarnya.
      </p>
    </section>
  );
};
