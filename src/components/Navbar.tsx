import React, { useState } from 'react';
import { Landmark, Menu, X, ChevronRight, Map, Image as ImageIcon } from 'lucide-react';
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
    { id: 'profil', label: 'Profil Desa', icon: <Landmark className="w-4 h-4" /> },
    { id: 'geografi', label: 'Geografi & Peta', icon: <Map className="w-4 h-4" /> },
    { id: 'galeri', label: 'Galeri Wilayah', icon: <ImageIcon className="w-4 h-4" /> },
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
            <span className="font-display font-bold text-base md:text-lg text-[#001e40] tracking-tight group-hover:text-[#003366] transition-colors block">
              {VILLAGE_INFO.name}
            </span>
            <span className="text-[11px] text-[#737780] font-medium hidden sm:block">
              Kecamatan Cepiring • Kab. Kendal
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#43474f]">
          {navItems.map(item => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`relative py-2 font-medium transition-colors hover:text-[#001e40] cursor-pointer ${
                  isActive ? 'text-[#001e40] font-semibold' : 'text-[#43474f]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2.5px] bg-[#001e40] rounded-full" />
                )}
              </button>
            );
          })}
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
        <div className="md:hidden bg-white border-b border-[#e5eeff] px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top-2 duration-200">
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
