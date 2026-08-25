import React, { useState } from 'react';
import { Landmark, Menu, X, ChevronRight, Map, GraduationCap, Image as ImageIcon } from 'lucide-react';
import { ActiveTab } from '../types';
import { VILLAGE_INFO } from '../data/villageData';
import { KendalLogo } from './KendalLogo';

interface NavbarProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onSelectTab }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode }[] = [
    { id: 'geografi', label: 'Peta & Wilayah', icon: <Map className="w-4 h-4" /> },
    { id: 'profil', label: 'Profil Desa & Monografi', icon: <Landmark className="w-4 h-4" /> },
    { id: 'galeri', label: 'Galeri & Fasilitas', icon: <ImageIcon className="w-4 h-4" /> },
  ];

  const handleNavClick = (tab: ActiveTab) => {
    onSelectTab(tab);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white border-b border-[#e5eeff] sticky top-0 z-40 shadow-xs transition-all">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-16 md:h-18 flex items-center justify-between">
        {/* Brand Logo & Name */}
        <button
          onClick={() => handleNavClick('geografi')}
          className="flex items-center gap-3 text-left group focus:outline-hidden cursor-pointer"
        >
          <div className="flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <KendalLogo size="md" className="w-9 h-11 md:w-10 md:h-12" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-display font-bold text-base md:text-lg text-[#001e40] tracking-tight group-hover:text-[#003366] transition-colors block">
                {VILLAGE_INFO.name}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#eff4ff] text-[#003366] text-[10px] font-bold border border-[#cbdbf5] hidden lg:inline-flex">
                <GraduationCap className="w-3 h-3 text-[#003366]" />
                <span>KKN 14 UNWAHAS 2026</span>
              </span>
            </div>
            <span className="text-[11px] text-[#737780] font-medium hidden sm:block">
              Portal Peta Wilayah • Kec. Cepiring, Kab. Kendal
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-[#43474f]">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 font-medium transition-colors hover:text-[#001e40] cursor-pointer flex items-center gap-2 ${
                  isActive ? 'text-[#001e40] font-semibold' : 'text-[#43474f]'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#001e40] rounded-full" />
                )}
              </button>
            );
          })}

          <div className="pl-2 border-l border-[#e2e8f0] hidden lg:flex items-center gap-1.5 text-xs text-[#003366] font-semibold bg-[#f8faff] px-3 py-1.5 rounded-lg border">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>KKN Kelompok 14 UNWAHAS</span>
          </div>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex md:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md text-[#001e40] hover:bg-[#eff4ff] transition-colors"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e5eeff] px-4 pt-2 pb-4 space-y-1.5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="py-1.5 px-3 bg-[#eff4ff] rounded-lg text-xs font-semibold text-[#003366] flex items-center gap-1.5 mb-1">
            <GraduationCap className="w-4 h-4 text-[#003366]" />
            <span>KKN Kelompok 14 UNWAHAS 2026</span>
          </div>

          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-[#eff4ff] text-[#001e40] font-semibold'
                    : 'text-[#43474f] hover:bg-[#f8f9ff]'
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className={isActive ? 'text-[#001e40]' : 'text-[#737780]'}>
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                <ChevronRight className="w-4 h-4 text-[#c3c6d1]" />
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
};
