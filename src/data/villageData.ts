import { VillageInfo, VillageStatCard, GalleryItem, MapLayer } from '../types';

export const VILLAGE_INFO: VillageInfo = {
  name: 'Desa Korowelang Kulon',
  subdistrict: 'Cepiring',
  district: 'Kendal',
  province: 'Jawa Tengah',
  postalCode: '51352',
  operationalHours: 'Senin - Jumat (08:00 - 15:00)',
  whatsapp: '+62 812-3456-7890',
  email: 'pemdes@korowelangkulon.desa.id',
  address: 'Jl. Raya Korowelang Kulon No. 1, Cepiring, Kendal, Jawa Tengah 51352',
};

export const MAP_LAYERS: MapLayer[] = [
  { id: 'admin', name: 'Batas Administrasi & Dusun', color: '#001e40', description: 'Garis batas wilayah desa dan 4 rukun dusun', visible: true },
  { id: 'sawah', name: 'Kawasan Pertanian & Sawah', color: '#16a34a', description: 'Area sawah irigasi teknis dan tadah hujan (±210 Ha)', visible: true },
  { id: 'pemukiman', name: 'Zona Permukiman Penduduk', color: '#d97706', description: 'Kawasan hunian warga dan pusat kegiatan RT/RW', visible: true },
  { id: 'pesisir', name: 'Kawasan Tambak & Pesisir', color: '#0284c7', description: 'Tambak udang, bandeng dan pesisir utara', visible: true },
  { id: 'fasum', name: 'Fasilitas Umum & Kantor Desa', color: '#dc2626', description: 'Balai desa, puskesmas pembantu, SD, masjid', visible: true },
  { id: 'mitigasi', name: 'Jalur Evakuasi & Mitigasi', color: '#9333ea', description: 'Jalur tanggap bencana dan titik kumpul aman', visible: false },
];

export const STAT_CARDS: VillageStatCard[] = [
  {
    id: 'geografi',
    title: 'Geografi',
    iconType: 'map',
    bgColor: 'bg-[#eff4ff]',
    iconColor: 'text-[#003366]',
    description: 'Terletak di dataran rendah pesisir utara, masuk dalam wilayah administratif Kecamatan Cepiring, Kabupaten Kendal, Provinsi Jawa Tengah.',
    detail: 'Topografi relatif datar dengan ketinggian 3 - 8 meter di atas permukaan laut. Berbatasan dengan Laut Jawa di sebelah utara, Desa Korowelang Anyar di timur, Desa Margorejo di selatan, dan Desa Pidodo Kulon di barat.',
    subStats: [
      { label: 'Ketinggian', value: '3 - 8 mdpl' },
      { label: 'Iklim', value: 'Tropis Pesisir' },
      { label: 'Suhu Rata-rata', value: '27° - 32°C' },
    ]
  },
  {
    id: 'luas',
    title: 'Luas Wilayah',
    iconType: 'area',
    bgColor: 'bg-[#eaf8ea]',
    iconColor: 'text-[#1b6d24]',
    description: 'Luas total wilayah mencapai kurang lebih 350 Hektar, mayoritas diperuntukkan bagi lahan pertanian produktif dan kawasan permukiman penduduk.',
    detail: 'Tata guna lahan didominasi oleh persawahan beririgasi teknis seluas 210 Ha, kawasan tambak perikanan 45 Ha, permukiman penduduk 75 Ha, dan fasilitas umum/infrastruktur 20 Ha.',
    subStats: [
      { label: 'Lahan Pertanian', value: '210 Ha (60%)' },
      { label: 'Permukiman', value: '75 Ha (21.4%)' },
      { label: 'Tambak & Perikanan', value: '45 Ha (12.8%)' },
    ]
  },
  {
    id: 'potensi',
    title: 'Potensi Desa',
    iconType: 'potential',
    bgColor: 'bg-[#fff5eb]',
    iconColor: 'text-[#b45309]',
    description: 'Memiliki potensi unggulan di sektor pertanian padi, tambak perikanan pesisir, serta UMKM olahan hasil laut yang menopang ekonomi warga.',
    detail: 'Komoditas utama meliputi padi varietas unggul, bandeng presto, terasi khas pesisir, serta industri rumahan olahan kerupuk ikan dan anyaman pandan.',
    subStats: [
      { label: 'Komoditas Padi', value: '± 1.400 Ton/Th' },
      { label: 'Produksi Bandeng', value: '± 180 Ton/Th' },
      { label: 'Unit UMKM Aktif', value: '42 Kelompok' },
    ]
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Balai Desa Korowelang Kulon',
    category: 'Pelayanan Publik',
    subtitle: 'Pusat layanan administrasi masyarakat',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    description: 'Kantor Balai Desa modern dengan loket Pelayanan Administrasi Terpadu Desa (PATEN) yang nyaman, dilengkapi fasilitas pendingin ruangan, ruang tunggu ramah anak dan lansia.',
    date: '2024'
  },
  {
    id: '2',
    title: 'Ruang Layanan Terpadu & Front Office',
    category: 'Pelayanan Publik',
    subtitle: 'Aparatur desa melayani kebutuhan warga dengan ramah dan cepat',
    imageUrl: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80',
    description: 'Pelayanan surat pengantar, KTP, KK, SKTM, serta perizinan usaha mikro dilayani secara transparan dan terkomputerisasi.',
    date: '2024'
  },
  {
    id: '3',
    title: 'Kawasan Persawahan Subur Cepiring',
    category: 'Potensi Pertanian',
    subtitle: 'Hamparan sawah padi organik dan irigasi teratur',
    imageUrl: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80',
    description: 'Pertanian padi menjadi tulang punggung perekonomian masyarakat dengan sistem irigasi teknis yang mengalir sepanjang tahun.',
    date: '2024'
  },
  {
    id: '4',
    title: 'Sentra Tambak Bandeng & Pesisir',
    category: 'Perikanan Pesisir',
    subtitle: 'Kawasan budidaya tambak perikanan pesisir utara',
    imageUrl: 'https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=1200&q=80',
    description: 'Petani tambak memproduksi bandeng berkualitas tinggi dan udang vaname untuk suplai pasar lokal Kendal dan Semarang.',
    date: '2024'
  },
  {
    id: '5',
    title: 'Gedung Serbaguna & Balai Pertemuan',
    category: 'Fasilitas Warga',
    subtitle: 'Pusat kegiatan musyawarah warga dan pembinaan UMKM',
    imageUrl: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=1200&q=80',
    description: 'Fasilitas serbaguna untuk Musrenbangdes, senam lansia, pembinaan karang taruna, dan pameran produk olahan UMKM desa.',
    date: '2024'
  },
  {
    id: '6',
    title: 'Pos Kesehatan Desa (Poskesdes) & Posyandu',
    category: 'Kesehatan',
    subtitle: 'Pemeriksaan kesehatan gratis dan balita sehat',
    imageUrl: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=1200&q=80',
    description: 'Pelayanan bidan desa, pemantauan gizi anak balita, imunisasi berkala, serta pengecekan tensi dan gula darah untuk lansia.',
    date: '2024'
  }
];

export const VILLAGE_SERVICES = [
  {
    code: 'SKTM',
    name: 'Surat Keterangan Tidak Mampu',
    time: '15 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP Pemohon (Asli & Fotokopi)', 'Kartu Keluarga (KK)', 'Pengantar RT/RW']
  },
  {
    code: 'SKU',
    name: 'Surat Keterangan Usaha (UMKM)',
    time: '15 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK Pemohon', 'Foto Lokasi/Produk Usaha', 'Surat Pengantar RT/RW']
  },
  {
    code: 'SKD',
    name: 'Surat Keterangan Domisili',
    time: '10 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK', 'Surat Pengantar RT/RW']
  },
  {
    code: 'SKCK',
    name: 'Surat Pengantar SKCK',
    time: '15 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK', 'Pas Foto 4x6 (2 lembar)', 'Pengantar RT/RW']
  },
  {
    code: 'NA',
    name: 'Pengantar Nikah (Model N1 - N4)',
    time: '1 - 2 Hari',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK Calon Pengantin & Orang Tua', 'Akta Kelahiran / Ijazah', 'Surat Pengantar RT/RW', 'Pas Foto Berdampingan']
  }
];

export const BUDGET_TRANSPARENCY = {
  year: '2024',
  totalRevenue: 'Rp 1.482.350.000',
  totalExpenditure: 'Rp 1.450.120.000',
  categories: [
    { name: 'Penyelenggaraan Pemerintahan Desa', amount: 'Rp 465.800.000', percentage: 32.1, color: '#003366' },
    { name: 'Pelaksanaan Pembangunan Desa (Fisik/Jalan/Irigasi)', amount: 'Rp 580.450.000', percentage: 40.0, color: '#16a34a' },
    { name: 'Pembinaan Kemasyarakatan', amount: 'Rp 145.200.000', percentage: 10.0, color: '#d97706' },
    { name: 'Pemberdayaan Masyarakat & UMKM', amount: 'Rp 188.670.000', percentage: 13.0, color: '#0284c7' },
    { name: 'Penanggulangan Bencana & Darurat', amount: 'Rp 70.000.000', percentage: 4.9, color: '#9333ea' },
  ]
};
