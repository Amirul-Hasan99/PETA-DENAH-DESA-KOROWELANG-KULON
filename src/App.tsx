import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MapCard } from './components/MapCard';
import { StatsGrid } from './components/StatsGrid';
import { Footer } from './components/Footer';
import { MapModal } from './components/MapModal';
import { ProfileModal } from './components/ProfileModal';
import { downloadMapAsPng } from './utils/mapExportUtils';
import { ActiveTab } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('geografi');
  const [isMapModalOpen, setIsMapModalOpen] = useState<boolean>(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState<boolean>(false);

  const handleSelectTab = (tab: ActiveTab) => {
    setActiveTab(tab);
    if (tab === 'profil') setIsProfileModalOpen(true);
    if (tab === 'geografi') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleDownloadMap = () => {
    downloadMapAsPng();
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
      </main>

      {/* 3. Footer with Attribution & Links */}
      <Footer
        onSelectTab={handleSelectTab}
      />

      {/* Interactive Modals */}
      <MapModal
        isOpen={isMapModalOpen}
        onClose={() => setIsMapModalOpen(false)}
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
