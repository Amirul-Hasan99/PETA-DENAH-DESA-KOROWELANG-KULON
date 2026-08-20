import React from 'react';
import { X, Users, Award, Compass, ShieldCheck } from 'lucide-react';
import { VILLAGE_INFO } from '../data/villageData';
import { KendalLogo } from './KendalLogo';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#001e40]/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden shadow-2xl border border-[#d3e4fe]">
        {/* Header */}
        <div className="bg-[#001e40] text-white px-5 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3.5">
            <div className="p-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <KendalLogo size="sm" className="w-8 h-10" />
            </div>
            <div>
              <h2 className="font-display font-bold text-base sm:text-lg text-white">
                Profil Desa Korowelang Kulon
              </h2>
              <p className="text-xs text-[#a7c8ff]">
                Kecamatan Cepiring, Kabupaten Kendal, Provinsi Jawa Tengah
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

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-7 space-y-6 text-sm text-[#43474f]">
          {/* Visi & Misi */}
          <div className="bg-[#eff4ff] p-5 rounded-lg border border-[#d3e4fe]">
            <h3 className="font-display font-bold text-base text-[#001e40] mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-[#003366]" />
              <span>Visi & Misi Desa (2020 - 2026)</span>
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#003366] italic mb-3">
              "Terwujudnya Desa Korowelang Kulon yang Maju, Sejahtera, Mandiri berbasis Pertanian & Perikanan yang Berkeadilan serta Berakhlak Mulia."
            </p>
            <div className="space-y-1.5 text-xs text-[#43474f]">
              <p>• Meningkatkan kualitas tata kelola pemerintahan desa yang transparan, akuntabel, dan berbasis digital.</p>
              <p>• Memperkuat ketahanan pangan melalui modernisasi irigasi sawah dan tambak perikanan pesisir.</p>
              <p>• Mengembangkan kapasitas sumber daya manusia serta pemberdayaan ekonomi perempuan dan UMKM desa.</p>
              <p>• Membangun infrastruktur desa yang tangguh terhadap potensi bencana dan perubahan iklim.</p>
            </div>
          </div>

          {/* Demografi & Penduduk */}
          <div>
            <h3 className="font-display font-bold text-base text-[#001e40] mb-3 flex items-center gap-2">
              <Users className="w-5 h-5 text-[#1b6d24]" />
              <span>Demografi Penduduk</span>
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="bg-white p-3 rounded border border-[#e5eeff] text-center shadow-2xs">
                <span className="text-xs text-[#737780]">Total Penduduk</span>
                <p className="font-bold text-lg text-[#001e40] mt-0.5">3.428 Jiwa</p>
              </div>
              <div className="bg-white p-3 rounded border border-[#e5eeff] text-center shadow-2xs">
                <span className="text-xs text-[#737780]">Kepala Keluarga</span>
                <p className="font-bold text-lg text-[#001e40] mt-0.5">982 KK</p>
              </div>
              <div className="bg-white p-3 rounded border border-[#e5eeff] text-center shadow-2xs">
                <span className="text-xs text-[#737780]">Jumlah Dusun</span>
                <p className="font-bold text-lg text-[#001e40] mt-0.5">4 Dusun</p>
              </div>
              <div className="bg-white p-3 rounded border border-[#e5eeff] text-center shadow-2xs">
                <span className="text-xs text-[#737780]">Rukun Tetangga (RT)</span>
                <p className="font-bold text-lg text-[#001e40] mt-0.5">18 RT / 4 RW</p>
              </div>
            </div>
          </div>

          {/* Struktur Pemerintahan Desa */}
          <div>
            <h3 className="font-display font-bold text-base text-[#001e40] mb-3 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#003366]" />
              <span>Perangkat Desa</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded border border-[#e5eeff] bg-[#f8f9ff]">
                <span className="font-bold text-[#001e40] block">Kepala Desa (Kades)</span>
                <span className="text-[#43474f]">Pemerintah Desa Korowelang Kulon</span>
              </div>
              <div className="p-3 rounded border border-[#e5eeff] bg-[#f8f9ff]">
                <span className="font-bold text-[#001e40] block">Sekretaris Desa (Sekdes)</span>
                <span className="text-[#43474f]">Koordinator Urusan Administrasi & Tata Usaha</span>
              </div>
              <div className="p-3 rounded border border-[#e5eeff] bg-[#f8f9ff]">
                <span className="font-bold text-[#001e40] block">Kaur Keuangan & Perencanaan</span>
                <span className="text-[#43474f]">Pengelolaan APBDes & RKPDes</span>
              </div>
              <div className="p-3 rounded border border-[#e5eeff] bg-[#f8f9ff]">
                <span className="font-bold text-[#001e40] block">Kasi Pelayanan & Kesejahteraan</span>
                <span className="text-[#43474f]">Layanan PATEN, Bansos, & Pemberdayaan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-[#f8f9ff] px-5 py-3 border-t border-[#e5eeff] flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#001e40] hover:bg-[#003366] text-white px-5 py-1.5 rounded text-sm font-medium transition-colors"
          >
            Tutup
          </button>
        </div>
      </div>
    </div>
  );
};
