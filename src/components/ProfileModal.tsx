import React, { useState } from 'react';
import {
  X,
  Users,
  Award,
  Compass,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  HeartPulse,
  Building2,
  PieChart,
  MapPin,
  Landmark,
  ExternalLink,
  ChevronRight,
  Sparkles,
  BookOpen,
  History,
  CheckCircle2,
  PlayCircle,
  HelpCircle,
  Clock,
} from 'lucide-react';
import {
  VILLAGE_INFO,
  VILLAGE_VISION_MISSION,
  VILLAGE_HISTORY,
  VILLAGE_OFFICIALS,
  POPULATION_GROWTH,
  AGE_STRUCTURE,
  EDUCATION_DATA,
  SCHOOL_FACILITIES,
  OCCUPATION_DATA,
  LAND_USE_DATA,
  HEALTH_FACILITIES,
  RELIGIOUS_FACILITIES,
  SOCIAL_WELFARE_DATA,
  INFRASTRUCTURE_FACILITIES,
  ECONOMIC_ASSETS,
} from '../data/villageData';
import { KendalLogo } from './KendalLogo';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type ProfileTab = 'visimisi' | 'sejarah' | 'geografi' | 'demografi' | 'pemerintahan' | 'ekonomi' | 'sosial';

export const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  const [activeSubTab, setActiveSubTab] = useState<ProfileTab>('visimisi');

  if (!isOpen) return null;

  const tabs: { id: ProfileTab; label: string; icon: React.ReactNode }[] = [
    { id: 'visimisi', label: 'Visi & Misi', icon: <Award className="w-4 h-4" /> },
    { id: 'sejarah', label: 'Sejarah & 22 Kades', icon: <History className="w-4 h-4" /> },
    { id: 'geografi', label: 'Geografi & Lahan', icon: <Compass className="w-4 h-4" /> },
    { id: 'demografi', label: 'Demografi & Usia', icon: <Users className="w-4 h-4" /> },
    { id: 'pemerintahan', label: 'Aparatur & SOTK', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'ekonomi', label: 'Ekonomi & Usaha', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'sosial', label: 'Pendidikan & Kesehatan', icon: <GraduationCap className="w-4 h-4" /> },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-[#001e40]/80 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4 md:p-6 animate-in fade-in duration-200">
      <div className="bg-white rounded-xl w-full max-w-5xl h-[92vh] flex flex-col overflow-hidden shadow-2xl border border-[#d3e4fe]">
        {/* Modal Top Header */}
        <div className="bg-[#001e40] text-white px-4 sm:px-6 py-3.5 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-1 rounded-lg bg-white/10 border border-white/20 backdrop-blur-xs flex items-center justify-center shrink-0">
              <KendalLogo size="sm" className="w-7 h-9 sm:w-8 sm:h-10" />
            </div>
            <div>
              <h2 className="font-display font-bold text-sm sm:text-lg text-white">
                Profil & Monografi Desa Korowelang Kulon
              </h2>
              <p className="text-[11px] sm:text-xs text-[#a7c8ff]">
                Kecamatan Cepiring • Kabupaten Kendal • Provinsi Jawa Tengah
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={VILLAGE_INFO.officialWebsite}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1 px-3 py-1.5 rounded bg-white/10 hover:bg-white/20 text-[#d5e3ff] hover:text-white text-xs font-medium transition-colors"
            >
              <span>Web Resmi DOKAR</span>
              <ExternalLink className="w-3 h-3" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded hover:bg-white/20 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Tutup"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-[#f8f9ff] border-b border-[#e5eeff] px-4 sm:px-6 flex items-center gap-1.5 overflow-x-auto shrink-0 py-2">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                activeSubTab === tab.id
                  ? 'bg-[#001e40] text-white shadow-xs'
                  : 'bg-white text-[#43474f] hover:bg-[#e5eeff] border border-[#e5eeff]'
              }`}
            >
              {tab.icon}
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6 text-sm text-[#43474f] bg-[#fafcff]">
          {/* TAB 1: VISI & MISI RESMI (2020-2026) */}
          {activeSubTab === 'visimisi' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Visi Statement Card */}
              <div className="bg-gradient-to-br from-[#eff4ff] to-[#e0edff] p-5 sm:p-6 rounded-xl border border-[#cbdbf5] shadow-xs">
                <div className="flex items-center gap-2 text-[#003366] mb-2 font-semibold text-xs uppercase tracking-wider">
                  <Award className="w-4 h-4 text-[#003366]" />
                  <span>Visi Pembangunan Jangka Menengah Desa ({VILLAGE_VISION_MISSION.visionPeriod})</span>
                </div>
                <h3 className="font-display font-extrabold text-base sm:text-xl text-[#001e40] leading-snug tracking-tight mb-3">
                  "{VILLAGE_VISION_MISSION.vision}"
                </h3>
                <p className="text-xs text-[#43474f] leading-relaxed">
                  Ditetapkan oleh Pemerintah Desa Korowelang Kulon dengan mempertimbangkan kondisi, permasalahan, serta kebutuhan strategis masyarakat untuk periode 2020–2026.
                </p>
              </div>

              {/* 5 Nilai Visi Desa (Sejahtera, Tertib, Mandiri, Aman, Rapi) */}
              <div>
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#b45309]" />
                  <span>Makna 5 Pilar Visi Desa Korowelang Kulon</span>
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
                  {VILLAGE_VISION_MISSION.visionPillars.map((pillar, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-4 rounded-xl border border-[#e5eeff] shadow-xs hover:border-[#cbdbf5] transition-all flex flex-col justify-between"
                    >
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className="w-6 h-6 rounded-full bg-[#eff4ff] text-[#003366] text-xs font-bold flex items-center justify-center shrink-0 border border-[#cbdbf5]">
                            {idx + 1}
                          </span>
                          <h5 className="font-display font-bold text-sm text-[#001e40]">
                            {pillar.name}
                          </h5>
                        </div>
                        <p className="text-xs text-[#43474f] leading-relaxed">
                          {pillar.meaning}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* 5 Butir Misi Desa */}
              <div className="bg-white p-5 rounded-xl border border-[#e5eeff] shadow-xs">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#16a34a]" />
                  <span>5 Misi Pembangunan Pemerintah Desa Korowelang Kulon</span>
                </h4>
                <div className="space-y-3">
                  {VILLAGE_VISION_MISSION.missions.map((mission, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-3 p-3 rounded-lg bg-[#f8f9ff] border border-[#e5eeff]"
                    >
                      <span className="w-5 h-5 rounded-full bg-[#001e40] text-white text-[11px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <p className="text-xs text-[#43474f] leading-relaxed font-medium">
                        {mission}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SEJARAH DESA & 22 KEPALA DESA */}
          {activeSubTab === 'sejarah' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Asal Usul Nama Korowelangkulon */}
              <div className="bg-white p-5 sm:p-6 rounded-xl border border-[#e5eeff] shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 mb-4 border-b border-[#f1f5f9]">
                  <div>
                    <span className="text-[11px] font-semibold text-[#003366] uppercase tracking-wider">
                      Asal-Usul & Babad Alas ({VILLAGE_HISTORY.originYear})
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#001e40] mt-0.5">
                      Sejarah Terbentuknya Nama Desa Korowelang Kulon
                    </h3>
                  </div>
                  <a
                    href={VILLAGE_HISTORY.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#dc2626] hover:bg-[#b91c1c] text-white text-xs font-semibold shadow-xs transition-colors shrink-0"
                  >
                    <PlayCircle className="w-3.5 h-3.5" />
                    <span>Tonton Video Sejarah (YouTube)</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#cbdbf5] text-xs">
                    <span className="text-[#003366] font-bold block mb-1">Tokoh Pendiri (Babad Alas):</span>
                    <p className="font-semibold text-[#001e40]">{VILLAGE_HISTORY.founder}</p>
                    <span className="text-[11px] text-[#737780]">Perjalanan pesisir pantai utara Jawa</span>
                  </div>
                  <div className="p-3 bg-[#fef08a]/40 rounded-lg border border-[#ca8a04]/40 text-xs">
                    <span className="text-[#854d0e] font-bold block mb-1">Tanaman Koro di Pohon Dhurjan:</span>
                    <p className="text-[#43474f]">Tanaman Koro melingkar dari pangkal bawah hingga ujung batang Pohon Dhurjan.</p>
                  </div>
                  <div className="p-3 bg-[#fee2e2] rounded-lg border border-[#fca5a5] text-xs">
                    <span className="text-[#991b1b] font-bold block mb-1">Ular Welang Menghadap Barat:</span>
                    <p className="text-[#43474f]">Melihat Ular Welang bercorak hitam putih dengan kepala menghadap ke barat (*kulon*).</p>
                  </div>
                </div>

                <p className="text-xs text-[#43474f] leading-relaxed bg-[#f8f9ff] p-4 rounded-lg border border-[#e5eeff]">
                  {VILLAGE_HISTORY.story}
                </p>
              </div>

              {/* Sejarah Makam Kupu Tarung */}
              <div className="bg-[#eff4ff] p-5 rounded-xl border border-[#d3e4fe]">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-2 flex items-center gap-2">
                  <Landmark className="w-4 h-4 text-[#003366]" />
                  <span>Kisah Sejarah Pemakaman Umum "Kupu Tarung"</span>
                </h4>
                <p className="text-xs text-[#43474f] leading-relaxed">
                  {VILLAGE_HISTORY.kupuTarungStory}
                </p>
              </div>

              {/* Linimasa 22 Kepala Desa Sejak 1803 */}
              <div className="bg-white p-5 rounded-xl border border-[#e5eeff] shadow-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-3">
                  <h4 className="font-display font-bold text-sm text-[#001e40] flex items-center gap-2">
                    <History className="w-4 h-4 text-[#003366]" />
                    <span>Daftar Silsilah 22 Kepala Desa Korowelang Kulon (1803 - Sekarang)</span>
                  </h4>
                  <span className="text-xs text-[#737780]">Tercatat 22 Periode Kepemimpinan</span>
                </div>
                <div className="overflow-x-auto max-h-80">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead className="sticky top-0 bg-[#f8f9ff] text-[#001e40] border-b border-[#e5eeff]">
                      <tr>
                        <th className="p-2.5 font-bold text-center w-12">No</th>
                        <th className="p-2.5 font-bold">Nama Kepala Desa</th>
                        <th className="p-2.5 font-bold text-center">Masa Jabatan</th>
                        <th className="p-2.5 font-bold text-right">Lama Menjabat</th>
                        <th className="p-2.5 font-bold text-center">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {VILLAGE_HISTORY.leaders.map(kades => {
                        const isCurrent = kades.id === 22;
                        return (
                          <tr
                            key={kades.id}
                            className={`hover:bg-[#fafcff] transition-colors ${
                              isCurrent ? 'bg-[#eaf8ea] font-bold text-[#0f5132]' : ''
                            }`}
                          >
                            <td className="p-2.5 text-center font-semibold text-[#737780]">{kades.id}</td>
                            <td className="p-2.5 font-bold text-[#001e40]">
                              {kades.name}
                              {isCurrent && (
                                <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] bg-[#16a34a] text-white">
                                  Sedang Menjabat
                                </span>
                              )}
                            </td>
                            <td className="p-2.5 text-center font-medium">{kades.period}</td>
                            <td className="p-2.5 text-right font-semibold text-[#003366]">{kades.duration}</td>
                            <td className="p-2.5 text-center">
                              {kades.isActing ? (
                                <span className="px-2 py-0.5 rounded text-[10px] bg-[#fef08a] text-[#854d0e] font-semibold">
                                  Ymt / Pj.
                                </span>
                              ) : (
                                <span className="px-2 py-0.5 rounded text-[10px] bg-[#eff4ff] text-[#003366] font-semibold">
                                  Definitif
                                </span>
                              )}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: GEOGRAFI & WILAYAH */}
          {activeSubTab === 'geografi' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Batas Wilayah & 3 Dusun */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Batas Wilayah */}
                <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                  <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#003366]" />
                    <span>Batas Wilayah Administratif</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    <li className="p-2 rounded bg-[#f8f9ff] border border-[#e5eeff] flex justify-between">
                      <span className="font-semibold text-[#001e40]">Sebelah Utara:</span>
                      <span className="text-right text-[#43474f] font-medium">{VILLAGE_INFO.boundaries.utara}</span>
                    </li>
                    <li className="p-2 rounded bg-[#f8f9ff] border border-[#e5eeff] flex justify-between">
                      <span className="font-semibold text-[#001e40]">Sebelah Timur:</span>
                      <span className="text-right text-[#43474f] font-medium max-w-[240px]">{VILLAGE_INFO.boundaries.timur}</span>
                    </li>
                    <li className="p-2 rounded bg-[#f8f9ff] border border-[#e5eeff] flex justify-between">
                      <span className="font-semibold text-[#001e40]">Sebelah Selatan:</span>
                      <span className="text-right text-[#43474f] font-medium">{VILLAGE_INFO.boundaries.selatan}</span>
                    </li>
                    <li className="p-2 rounded bg-[#f8f9ff] border border-[#e5eeff] flex justify-between">
                      <span className="font-semibold text-[#001e40]">Sebelah Barat:</span>
                      <span className="text-right text-[#43474f] font-medium">{VILLAGE_INFO.boundaries.barat}</span>
                    </li>
                  </ul>
                </div>

                {/* Pembagian Dusun & Aksesibilitas */}
                <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs space-y-4">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#001e40] mb-2.5 flex items-center gap-2">
                      <Landmark className="w-4 h-4 text-[#1b6d24]" />
                      <span>Pembagian 3 Wilayah Dusun (26 RT)</span>
                    </h4>
                    <div className="grid grid-cols-3 gap-2">
                      {VILLAGE_INFO.dusunNames.map((dusun, idx) => (
                        <div key={idx} className="p-2.5 bg-[#eaf8ea] text-center rounded border border-[#c3e6cb]">
                          <span className="text-[11px] text-[#1b6d24] font-semibold block">Dusun {idx + 1}</span>
                          <span className="text-xs font-bold text-[#0f5132] mt-0.5 block">{dusun.replace('Dusun ', '')}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#f1f5f9]">
                    <span className="text-xs font-bold text-[#001e40] block mb-1.5">Jarak & Aksesibilitas:</span>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-2 bg-[#f8f9ff] rounded border border-[#e5eeff]">
                        <span className="text-[#737780] block text-[11px]">Ke Ibukota Kecamatan:</span>
                        <span className="font-bold text-[#001e40]">±5 km (15 Menit)</span>
                      </div>
                      <div className="p-2 bg-[#f8f9ff] rounded border border-[#e5eeff]">
                        <span className="text-[#737780] block text-[11px]">Ke Ibukota Kab. Kendal:</span>
                        <span className="font-bold text-[#001e40]">±13 km (30 Menit)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tata Guna Lahan Tabel */}
              <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <PieChart className="w-4 h-4 text-[#b45309]" />
                    <span>Pola Tata Guna Lahan (Total Luas: 162,447 Ha)</span>
                  </span>
                  <span className="text-xs font-normal text-[#737780]">Sumber: Monografi Desa</span>
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f8f9ff] text-[#001e40] border-b border-[#e5eeff]">
                        <th className="p-2.5 font-bold">No</th>
                        <th className="p-2.5 font-bold">Peruntukan Lahan</th>
                        <th className="p-2.5 font-bold text-right">Luas (Ha)</th>
                        <th className="p-2.5 font-bold text-right">Persentase</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {LAND_USE_DATA.map((land, i) => (
                        <tr key={i} className="hover:bg-[#fafcff]">
                          <td className="p-2.5 font-medium">{i + 1}</td>
                          <td className="p-2.5 font-semibold text-[#001e40]">{land.name}</td>
                          <td className="p-2.5 text-right font-bold text-[#003366]">{land.areaHa.toFixed(3)} Ha</td>
                          <td className="p-2.5 text-right">{land.percentage}%</td>
                        </tr>
                      ))}
                      <tr className="bg-[#eff4ff] font-bold text-[#001e40]">
                        <td colSpan={2} className="p-2.5 text-right">TOTAL LUAS WILAYAH</td>
                        <td className="p-2.5 text-right text-[#003366]">162,447 Ha</td>
                        <td className="p-2.5 text-right">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: DEMOGRAFI & USIA */}
          {activeSubTab === 'demografi' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Highlight Kependudukan 2020 */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] text-center shadow-xs">
                  <span className="text-[11px] text-[#737780] block font-medium">Total Penduduk (2020)</span>
                  <p className="font-display font-bold text-xl sm:text-2xl text-[#001e40] mt-1">3.252</p>
                  <span className="text-[10px] text-[#1b6d24] font-semibold">Jiwa Tercatat</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] text-center shadow-xs">
                  <span className="text-[11px] text-[#737780] block font-medium">Jumlah Laki-laki</span>
                  <p className="font-display font-bold text-xl sm:text-2xl text-[#003366] mt-1">1.558</p>
                  <span className="text-[10px] text-[#003366] font-semibold">47% Total Penduduk</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] text-center shadow-xs">
                  <span className="text-[11px] text-[#737780] block font-medium">Jumlah Perempuan</span>
                  <p className="font-display font-bold text-xl sm:text-2xl text-[#b45309] mt-1">1.694</p>
                  <span className="text-[10px] text-[#b45309] font-semibold">53% Total Penduduk</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] text-center shadow-xs">
                  <span className="text-[11px] text-[#737780] block font-medium">Kepala Keluarga (KK)</span>
                  <p className="font-display font-bold text-xl sm:text-2xl text-[#1b6d24] mt-1">1.124</p>
                  <span className="text-[10px] text-[#1b6d24] font-semibold">KK Terdaftar</span>
                </div>
              </div>

              {/* Perkembangan Penduduk 2016-2020 */}
              <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center justify-between">
                  <span>Perkembangan Jumlah Penduduk Berdasarkan Jenis Kelamin (2016 - 2020)</span>
                  <span className="text-xs text-[#737780] font-normal">Sumber: Profil Desa</span>
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f8f9ff] text-[#001e40] border-b border-[#e5eeff]">
                        <th className="p-2.5 font-bold">Jenis Kelamin</th>
                        {POPULATION_GROWTH.map(p => (
                          <th key={p.year} className="p-2.5 font-bold text-center">Tahun {p.year}</th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      <tr>
                        <td className="p-2.5 font-semibold text-[#001e40]">Laki-laki (Jiwa)</td>
                        {POPULATION_GROWTH.map(p => (
                          <td key={p.year} className="p-2.5 text-center">{p.male.toLocaleString('id-ID')}</td>
                        ))}
                      </tr>
                      <tr>
                        <td className="p-2.5 font-semibold text-[#001e40]">Perempuan (Jiwa)</td>
                        {POPULATION_GROWTH.map(p => (
                          <td key={p.year} className="p-2.5 text-center">{p.female.toLocaleString('id-ID')}</td>
                        ))}
                      </tr>
                      <tr className="bg-[#eff4ff] font-bold text-[#001e40]">
                        <td className="p-2.5">JUMLAH TOTAL</td>
                        {POPULATION_GROWTH.map(p => (
                          <td key={p.year} className="p-2.5 text-center text-[#003366] font-bold">
                            {p.total.toLocaleString('id-ID')}
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Struktur Usia Penduduk (2020) */}
              <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-display font-bold text-sm text-[#001e40]">
                    Jumlah Penduduk Berdasarkan Struktur Usia (Tahun 2020)
                  </h4>
                  <span className="text-xs text-[#737780]">Kelompok Rentan Kesehatan (&gt;60 th): 7%</span>
                </div>
                <div className="overflow-x-auto max-h-72">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead className="sticky top-0 bg-[#f8f9ff] text-[#001e40] border-b border-[#e5eeff]">
                      <tr>
                        <th className="p-2 font-bold">No</th>
                        <th className="p-2 font-bold">Kelompok Usia</th>
                        <th className="p-2 font-bold text-center">Laki-laki (L)</th>
                        <th className="p-2 font-bold text-center">Perempuan (P)</th>
                        <th className="p-2 font-bold text-center">Jumlah</th>
                        <th className="p-2 font-bold text-right">Persentase</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {AGE_STRUCTURE.map((age, i) => (
                        <tr key={i} className="hover:bg-[#fafcff]">
                          <td className="p-2">{i + 1}</td>
                          <td className="p-2 font-semibold text-[#001e40]">{age.ageGroup}</td>
                          <td className="p-2 text-center">{age.male}</td>
                          <td className="p-2 text-center">{age.female}</td>
                          <td className="p-2 text-center font-bold text-[#003366]">{age.total}</td>
                          <td className="p-2 text-right font-medium">{age.percentage}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#eff4ff] font-bold text-[#001e40]">
                        <td colSpan={2} className="p-2">JUMLAH TOTAL</td>
                        <td className="p-2 text-center">1.558</td>
                        <td className="p-2 text-center">1.694</td>
                        <td className="p-2 text-center text-[#003366]">3.252</td>
                        <td className="p-2 text-right">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 5: PEMERINTAHAN & APARATUR DESA */}
          {activeSubTab === 'pemerintahan' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Pengantar & SOTK */}
              <div className="bg-[#eff4ff] p-4.5 rounded-xl border border-[#d3e4fe]">
                <h3 className="font-display font-bold text-base text-[#001e40] mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#003366]" />
                  <span>Susunan Organisasi & Tata Kerja (SOTK) Pemerintah Desa</span>
                </h3>
                <p className="text-xs text-[#43474f] leading-relaxed">
                  Pemerintah Desa Korowelang Kulon menyelenggarakan tata kelola pemerintahan yang berorientasi pada pelayanan masyarakat prima (PATEN), ketertiban umum, dan pengelolaan administrasi keuangan desa yang transparan.
                </p>
              </div>

              {/* Tabel Daftar Perangkat Desa Resmi */}
              <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center justify-between">
                  <span>Daftar Perangkat Desa Korowelang Kulon</span>
                  <span className="text-xs text-[#737780] font-normal">Sumber: Administrasi Pemdes Korowelang Kulon</span>
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-[#f8f9ff] text-[#001e40] border-b border-[#e5eeff]">
                        <th className="p-2.5 font-bold">No</th>
                        <th className="p-2.5 font-bold">Nama Lengkap</th>
                        <th className="p-2.5 font-bold">Jabatan</th>
                        <th className="p-2.5 font-bold">Pendidikan</th>
                        <th className="p-2.5 font-bold">Nomor & Tanggal SK</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {VILLAGE_OFFICIALS.map(official => (
                        <tr key={official.id} className="hover:bg-[#fafcff]">
                          <td className="p-2.5 font-medium">{official.id}</td>
                          <td className="p-2.5 font-bold text-[#001e40]">{official.name}</td>
                          <td className="p-2.5">
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#eff4ff] text-[#003366] border border-[#cbdbf5]">
                              {official.position}
                            </span>
                          </td>
                          <td className="p-2.5 text-[#43474f]">{official.education}</td>
                          <td className="p-2.5 text-[11px] text-[#737780]">
                            {official.skNumber} ({official.skDate})
                          </td>
                        </tr>
                      ))}
                      <tr className="hover:bg-[#fafcff] opacity-75">
                        <td className="p-2.5 font-medium">9</td>
                        <td className="p-2.5 font-bold text-[#737780]">- (Dalam Pengisian)</td>
                        <td className="p-2.5">
                          <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-[#f1f5f9] text-[#737780]">
                            Kepala Dusun II
                          </span>
                        </td>
                        <td className="p-2.5 text-[#737780]">-</td>
                        <td className="p-2.5 text-[11px] text-[#737780]">-</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Layanan Administrasi Publik */}
              <div className="bg-[#f8f9ff] p-4.5 rounded-xl border border-[#e5eeff]">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-2.5">
                  Standar Pelayanan Publik Desa (PATEN)
                </h4>
                <p className="text-xs text-[#43474f] leading-relaxed mb-3">
                  Balai Desa melayani pencatatan sipil, pengantar surat nikah, Surat Keterangan Tidak Mampu (SKTM), Surat Keterangan Usaha (SKU), pengantar SKCK, dan pengadministrasian perizinan usaha bagi masyarakat Korowelang Kulon.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                  <div className="p-2 bg-white rounded border border-[#e5eeff] text-center">
                    <span className="font-bold text-[#001e40] block">SKTM</span>
                    <span className="text-[10px] text-[#1b6d24]">15 Menit • Gratis</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#e5eeff] text-center">
                    <span className="font-bold text-[#001e40] block">SKU (UMKM)</span>
                    <span className="text-[10px] text-[#1b6d24]">15 Menit • Gratis</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#e5eeff] text-center">
                    <span className="font-bold text-[#001e40] block">Surat Domisili</span>
                    <span className="text-[10px] text-[#1b6d24]">10 Menit • Gratis</span>
                  </div>
                  <div className="p-2 bg-white rounded border border-[#e5eeff] text-center">
                    <span className="font-bold text-[#001e40] block">Pengantar Nikah</span>
                    <span className="text-[10px] text-[#1b6d24]">1-2 Hari • Gratis</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: EKONOMI & MATA PENCAHARIAN */}
          {activeSubTab === 'ekonomi' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Highlight Mata Pencaharian */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] shadow-xs text-center">
                  <span className="text-[11px] text-[#737780] block font-medium">Sektor Nelayan</span>
                  <p className="font-display font-bold text-xl text-[#0284c7] mt-1">895</p>
                  <span className="text-[10px] text-[#0284c7] font-semibold">Orang (55 Armada Perahu)</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] shadow-xs text-center">
                  <span className="text-[11px] text-[#737780] block font-medium">Buruh Tani</span>
                  <p className="font-display font-bold text-xl text-[#16a34a] mt-1">308</p>
                  <span className="text-[10px] text-[#16a34a] font-semibold">Orang Pekerja Sawah</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] shadow-xs text-center">
                  <span className="text-[11px] text-[#737780] block font-medium">Tukang Bangunan</span>
                  <p className="font-display font-bold text-xl text-[#b45309] mt-1">139</p>
                  <span className="text-[10px] text-[#b45309] font-semibold">Orang Konstruksi</span>
                </div>
                <div className="bg-white p-3.5 rounded-xl border border-[#e5eeff] shadow-xs text-center">
                  <span className="text-[11px] text-[#737780] block font-medium">Petani Pemilik</span>
                  <p className="font-display font-bold text-xl text-[#1b6d24] mt-1">129</p>
                  <span className="text-[10px] text-[#1b6d24] font-semibold">Orang Pengelola Sawah</span>
                </div>
              </div>

              {/* Tabel Mata Pencaharian Lengkap */}
              <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center justify-between">
                  <span>Perkembangan Penduduk Menurut Mata Pencaharian (2018 - 2020)</span>
                  <span className="text-xs text-[#737780] font-normal">Sumber: Monografi Desa</span>
                </h4>
                <div className="overflow-x-auto max-h-64">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead className="sticky top-0 bg-[#f8f9ff] text-[#001e40] border-b border-[#e5eeff]">
                      <tr>
                        <th className="p-2 font-bold">No</th>
                        <th className="p-2 font-bold">Bidang Pekerjaan</th>
                        <th className="p-2 font-bold text-center">Tahun 2018</th>
                        <th className="p-2 font-bold text-center">Tahun 2019</th>
                        <th className="p-2 font-bold text-center">Tahun 2020</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#f1f5f9]">
                      {OCCUPATION_DATA.map((occ, i) => (
                        <tr key={i} className="hover:bg-[#fafcff]">
                          <td className="p-2">{i + 1}</td>
                          <td className="p-2 font-semibold text-[#001e40]">{occ.occupation}</td>
                          <td className="p-2 text-center">{occ.count2018.toLocaleString('id-ID')}</td>
                          <td className="p-2 text-center">{occ.count2019.toLocaleString('id-ID')}</td>
                          <td className="p-2 text-center font-bold text-[#003366]">{occ.count2020.toLocaleString('id-ID')}</td>
                        </tr>
                      ))}
                      <tr className="bg-[#eff4ff] font-bold text-[#001e40]">
                        <td colSpan={2} className="p-2">JUMLAH TOTAL</td>
                        <td className="p-2 text-center">3.075</td>
                        <td className="p-2 text-center">3.109</td>
                        <td className="p-2 text-center text-[#003366]">3.252</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Aset & Sarana Perekonomian */}
              <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                <h4 className="font-display font-bold text-sm text-[#001e40] mb-3">
                  Sarana Perekonomian & Kepemilikan Aset Warga (2020)
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {ECONOMIC_ASSETS.map((asset, i) => (
                    <div key={i} className="p-2.5 bg-[#f8f9ff] rounded-lg border border-[#e5eeff]">
                      <span className="text-[11px] text-[#737780] block truncate">{asset.name}</span>
                      <span className="font-bold text-xs text-[#001e40] mt-0.5 block">{asset.count}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 7: SOSIAL, PENDIDIKAN & KESEHATAN */}
          {activeSubTab === 'sosial' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              {/* Pendidikan Terakhir & Lembaga Sekolah */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Tingkat Pendidikan */}
                <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                  <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-[#003366]" />
                    <span>Tingkat Pendidikan Penduduk (2020)</span>
                  </h4>
                  <ul className="space-y-2 text-xs">
                    {EDUCATION_DATA.map((edu, i) => (
                      <li key={i} className="p-2 bg-[#f8f9ff] rounded border border-[#e5eeff] flex justify-between">
                        <span className="text-[#43474f] font-medium">{edu.level}</span>
                        <span className="font-bold text-[#001e40]">{edu.count2020} Jiwa</span>
                      </li>
                    ))}
                    <li className="p-2 bg-[#eaf8ea] rounded border border-[#c3e6cb] flex justify-between text-[#0f5132] font-bold">
                      <span>Angka Putus Sekolah (SD, SMP, SMA 2020)</span>
                      <span>0 Kasus</span>
                    </li>
                  </ul>
                </div>

                {/* Fasilitas Sekolah & Sarana Pendidikan */}
                <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs space-y-4">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#001e40] mb-3">
                      Lembaga Pendidikan di Desa
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div className="p-3 bg-[#eff4ff] rounded-lg border border-[#cbdbf5]">
                        <span className="font-bold text-[#003366] block">TK / PAUD</span>
                        <p className="text-lg font-bold text-[#001e40] mt-0.5">3 Unit</p>
                        <span className="text-[11px] text-[#737780]">97 Siswa Aktif</span>
                      </div>
                      <div className="p-3 bg-[#eaf8ea] rounded-lg border border-[#c3e6cb]">
                        <span className="font-bold text-[#1b6d24] block">SD / MI</span>
                        <p className="text-lg font-bold text-[#001e40] mt-0.5">2 Unit</p>
                        <span className="text-[11px] text-[#737780]">624 Siswa Aktif</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#f1f5f9]">
                    <h5 className="font-bold text-xs text-[#001e40] mb-2">Keagamaan & Tempat Ibadah:</h5>
                    <div className="p-2.5 bg-[#f8f9ff] rounded border border-[#e5eeff] text-xs space-y-1">
                      <div className="flex justify-between">
                        <span className="text-[#737780]">Agama Mayoritas:</span>
                        <span className="font-bold text-[#001e40]">{RELIGIOUS_FACILITIES.religion}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#737780]">Sarana Ibadah:</span>
                        <span className="font-bold text-[#003366]">{RELIGIOUS_FACILITIES.placesOfWorship}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sarana Kesehatan & PMKS */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Sarana Kesehatan */}
                <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs">
                  <h4 className="font-display font-bold text-sm text-[#001e40] mb-3 flex items-center gap-2">
                    <HeartPulse className="w-4 h-4 text-[#dc2626]" />
                    <span>Sarana & Tenaga Kesehatan</span>
                  </h4>
                  <div className="space-y-2 text-xs">
                    {HEALTH_FACILITIES.map((h, i) => (
                      <div key={i} className="p-2 bg-[#f8f9ff] rounded border border-[#e5eeff] flex justify-between items-center">
                        <div>
                          <span className="font-semibold text-[#001e40] block">{h.label}</span>
                          <span className="text-[11px] text-[#737780]">{h.detail}</span>
                        </div>
                        <span className="font-bold text-[#003366] shrink-0">{h.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Infrastruktur & Kesejahteraan Sosial (PMKS) */}
                <div className="bg-white p-4.5 rounded-xl border border-[#e5eeff] shadow-xs space-y-4">
                  <div>
                    <h4 className="font-display font-bold text-sm text-[#001e40] mb-2.5">
                      Infrastruktur & Sarana Prasarana (2020)
                    </h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {INFRASTRUCTURE_FACILITIES.map((infra, i) => (
                        <div key={i} className="p-2 bg-[#f8f9ff] rounded border border-[#e5eeff]">
                          <span className="text-[#737780] block text-[10px]">{infra.name}</span>
                          <span className="font-bold text-[#001e40] block mt-0.5">{infra.value}</span>
                          <span className="text-[10px] text-[#1b6d24]">{infra.status}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-[#f1f5f9]">
                    <h5 className="font-bold text-xs text-[#001e40] mb-2">Penyandang Masalah Kesejahteraan Sosial (PMKS):</h5>
                    <div className="grid grid-cols-2 gap-1.5 text-xs">
                      {SOCIAL_WELFARE_DATA.map((pmks, i) => (
                        <div key={i} className="p-1.5 bg-[#fff5eb] rounded border border-[#fbd38d] flex justify-between">
                          <span className="text-[11px] text-[#744210] truncate">{pmks.category}:</span>
                          <span className="font-bold text-[#744210] ml-1">{pmks.count2020}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer Bar */}
        <div className="bg-[#f8f9ff] px-4 sm:px-6 py-3 border-t border-[#e5eeff] flex flex-col sm:flex-row items-center justify-between gap-2 shrink-0">
          <div className="text-xs text-[#737780] text-center sm:text-left">
            <span>Diterbitkan Resmi oleh Pemerintah Desa Korowelang Kulon • Kecamatan Cepiring, Kendal</span>
          </div>
          <button
            onClick={onClose}
            className="bg-[#001e40] hover:bg-[#003366] text-white px-6 py-1.5 rounded text-xs font-semibold transition-colors cursor-pointer w-full sm:w-auto"
          >
            Tutup Profil
          </button>
        </div>
      </div>
    </div>
  );
};
