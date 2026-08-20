import React, { useState } from 'react';
import { X, Image as ImageIcon, Sparkles, Filter, Calendar, Tag } from 'lucide-react';
import { GALLERY_ITEMS } from '../data/villageData';
import { GalleryItem } from '../types';

interface GalleryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GalleryModal: React.FC<GalleryModalProps> = ({ isOpen, onClose }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [activePhoto, setActivePhoto] = useState<GalleryItem | null>(null);

  if (!isOpen) return null;

  const categories = ['Semua', 'Pelayanan Publik', 'Potensi Pertanian', 'Perikanan Pesisir', 'Fasilitas Warga', 'Kesehatan'];

  const filteredItems = selectedCategory === 'Semua'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCategory);

  return (
    <div className="fixed inset-0 z-50 bg-[#001e40]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl w-full max-w-5xl h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#d3e4fe]">
        {/* Header */}
        <div className="bg-[#001e40] text-white px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded bg-[#003366] text-[#d5e3ff]">
              <ImageIcon className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base sm:text-lg text-white">
                Galeri & Fasilitas Desa Korowelang Kulon
              </h2>
              <p className="text-xs text-[#a7c8ff]">
                Dokumentasi sarana prasarana, kegiatan masyarakat, dan potensi desa
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded hover:bg-white/20 text-white/80 hover:text-white transition-colors"
            aria-label="Tutup"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="bg-[#f8f9ff] px-5 py-3 border-b border-[#e5eeff] flex items-center gap-2 overflow-x-auto">
          <Filter className="w-4 h-4 text-[#737780] shrink-0" />
          <div className="flex items-center gap-1.5 whitespace-nowrap">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#001e40] text-white'
                    : 'bg-white text-[#43474f] hover:bg-[#e5eeff] border border-[#e5eeff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 bg-[#fafcff]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredItems.map(item => (
              <div
                key={item.id}
                onClick={() => setActivePhoto(item)}
                className="bg-white rounded-lg overflow-hidden border border-[#e5eeff] shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer flex flex-col"
              >
                <div className="relative aspect-16/10 overflow-hidden bg-slate-100">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <span className="absolute top-2.5 right-2.5 bg-[#001e40]/80 text-white px-2.5 py-0.5 rounded-full text-[10px] font-semibold backdrop-blur-xs">
                    {item.category}
                  </span>
                </div>

                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-sm text-[#001e40] group-hover:text-[#003366] transition-colors mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#737780] line-clamp-2">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-3 pt-2.5 border-t border-[#f1f5f9] flex items-center justify-between text-[11px] text-[#737780]">
                    <span>Tahun {item.date || '2024'}</span>
                    <span className="text-[#003366] font-semibold group-hover:underline">
                      Perbesar Foto →
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Single Photo Lightbox Modal */}
      {activePhoto && (
        <div
          className="fixed inset-0 z-60 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setActivePhoto(null)}
        >
          <div
            className="max-w-3xl w-full bg-white rounded-lg overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="relative aspect-16/10 bg-black">
              <img
                src={activePhoto.imageUrl}
                alt={activePhoto.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <button
                onClick={() => setActivePhoto(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="p-5 bg-white">
              <span className="inline-block bg-[#eff4ff] text-[#003366] text-xs font-semibold px-2.5 py-1 rounded mb-2">
                {activePhoto.category}
              </span>
              <h3 className="font-display font-bold text-lg text-[#001e40] mb-2">
                {activePhoto.title}
              </h3>
              <p className="text-sm text-[#43474f] leading-relaxed">
                {activePhoto.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
