import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MapCard } from './components/MapCard';
import { StatsGrid } from './components/StatsGrid';
import { GallerySection } from './components/GallerySection';
import { Footer } from './components/Footer';
import { MapModal } from './components/MapModal';
import { GalleryModal } from './components/GalleryModal';
import { ProfileModal } from './components/ProfileModal';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('geografi');
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);
  const [isGalleryModalOpen, setIsGalleryModalOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'profil') setIsProfileModalOpen(true);
    if (tab === 'galeri') setIsGalleryModalOpen(true);
    if (tab === 'geografi') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownloadMap = () => {
    // Generate simulated download trigger for static deployment
    const element = document.createElement('a');
    const file = new Blob([
      `PETA DENAH, ADMINISTRASI & TATA GUNA LAHAN DESA KOROWELANG KULON\n` +
      `Kecamatan Cepiring, Kabupaten Kendal, Provinsi Jawa Tengah\n\n` +
      `Sistem Koordinat: UTM WGS 84 Zone 49S\n` +
      `Skala Induk: 1 : 25.000\n` +
      `Luas Wilayah: 162,447 Ha\n` +
      `Pembagian Wilayah: 3 Dusun (Welangsari, Tambaksari, Rejosari) • 26 RT\n` +
      `Jumlah Penduduk: 3.252 Jiwa (1.558 L / 1.694 P) • 1.124 KK\n\n` +
      `Rincian Tata Guna Lahan:\n` +
      `- Tanah Sawah Irigasi Teknis: 105,447 Ha\n` +
      `- Tanah Kering Pekarangan/Bangunan: 39,897 Ha\n` +
      `- Tegal/Kebun: 34,227 Ha\n` +
      `- Kawasan Tambak: 17,223 Ha\n` +
      `- Makam/Lain-lain: 0,800 Ha\n\n` +
      `Batas Wilayah:\n` +
      `- Utara: Desa Korowelanganyar, Kec. Cepiring\n` +
      `- Timur: Sungai Bodri / Desa Wonosari, Desa Kumpulrejo, Desa Magersari (Patebon)\n` +
      `- Selatan: Desa Kalirandugede, Kec. Cepiring\n` +
      `- Barat: Desa Kalirandugede, Kec. Cepiring\n\n` +
      `Diterbitkan Resmi oleh Pemerintah Desa Korowelang Kulon (https://korowelangkulon.kendalkab.go.id).`
    ], { type: 'text/plain;charset=utf-8' });
    element.href = URL.createObjectURL(file);
    element.download = 'PETA_DESA_KOROWELANG_KULON_KENDAL.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9ff] text-[#0b1c30]">
      {/* 1. Top Header Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
      />

      {/* 2. Main Body Content */}
      <main className="flex-1">
        {/* Title / Hero Intro */}
        <HeroSection />

        {/* Primary Map Showcase Card */}
        <MapCard
          onOpenPreview={() => setIsMapModalOpen(true)}
          onDownloadMap={handleDownloadMap}
        />

        {/* 3 Stats & Potential Cards (Geografi, Luas Wilayah, Potensi Desa) */}
        <StatsGrid />

        {/* Village Gallery & Civic Facilities Banner */}
        <GallerySection
          onOpenGallery={() => setIsGalleryModalOpen(true)}
        />
      </main>

      {/* 3. Footer with Village Navigation Links */}
      <Footer
        onSelectTab={handleSelectTab}
      />

      {/* Interactive Modals */}
      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
      />

      <GalleryModal
        isOpen={isGalleryModalOpen}
        onClose={() => {
          setIsGalleryModalOpen(false);
          setActiveTab('geografi');
        }}
      />

      <ProfileModal
        isOpen={isProfileModalOpen}
        onClose={() => {
          setIsProfileModalOpen(false);
          setActiveTab('geografi');
        }}
      />
    </div>
  );
}
