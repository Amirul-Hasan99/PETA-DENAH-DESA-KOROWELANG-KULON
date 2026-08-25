import {
  VillageInfo,
  VillageStatCard,
  GalleryItem,
  MapLayer,
  VillageOfficial,
  VillageVisionMission,
  VillageHistoryData,
  PopulationYearStat,
  AgeGroupStat,
  EducationStat,
  SchoolStat,
  OccupationStat,
  LandUseStat,
  SocialWelfareStat,
} from '../types';

export const VILLAGE_INFO: VillageInfo = {
  name: 'Desa Korowelang Kulon',
  subdistrict: 'Cepiring',
  district: 'Kendal',
  province: 'Jawa Tengah',
  postalCode: '51352',
  operationalHours: 'Senin - Jumat (08:00 - 15:00)',
  whatsapp: '+62 812-3456-7890',
  email: 'pemdes@korowelangkulon.desa.id',
  address: 'Kantor Balai Desa Korowelang Kulon, Jl. Raya Korowelang Kulon, Kec. Cepiring, Kab. Kendal, Jawa Tengah 51352',
  officialWebsite: 'https://korowelangkulon.kendalkab.go.id',
  distanceToSubdistrict: '±5 km (15 menit berkendara)',
  distanceToDistrict: '±13 km (30 menit berkendara)',
  totalArea: '162,447 Ha',
  totalPopulation: 3252,
  malePopulation: 1558,
  femalePopulation: 1694,
  totalFamilies: 1124,
  dusunCount: 3,
  rtCount: 26,
  dusunNames: ['Dusun Welangsari', 'Dusun Tambaksari', 'Dusun Rejosari'],
  boundaries: {
    utara: 'Wilayah Desa Korowelanganyar, Kec. Cepiring',
    timur: 'Wilayah Sungai Bodri / Desa Wonosari, Desa Kumpulrejo, dan Desa Magersari (Kec. Patebon)',
    selatan: 'Wilayah Desa Kalirandugede, Kec. Cepiring',
    barat: 'Wilayah Desa Kalirandugede, Kec. Cepiring',
  },
  socials: {
    facebook: 'https://web.facebook.com/profile.php?id=61579130750798',
    instagram: 'https://www.instagram.com/desa_korowelangkulon',
    twitter: 'https://x.com/korowelangkln',
    tiktok: 'https://www.tiktok.com/@desa_korowelangkulon',
    youtube: 'https://www.youtube.com/@DesaKorowelangKulon',
  },
};

export const VILLAGE_VISION_MISSION: VillageVisionMission = {
  vision: 'TERWUJUDNYA DESA KOROWELANGKULON YANG SEJAHTERA, TERTIB, MANDIRI, AMAN, DAN RAPI.',
  visionPeriod: '2020 - 2026',
  visionPillars: [
    {
      name: 'Sejahtera',
      meaning:
        'Mampu mewujudkan kondisi masyarakat yang terpenuhi hak-hak dasarnya baik dari aspek kesehatan, pendidikan dan ekonomi yang ditandai dengan meningkatnya angka Indeks Pembangunan Manusia (IPM) yang didukung dengan terwujudnya kebebasan kehidupan beragama dan bernegara. Meningkatnya tingkat kesejahteraan dapat ditunjukkan dengan terjadinya penurunan angka kemiskinan dan jumlah keluarga Pra Sejahtera.',
    },
    {
      name: 'Tertib',
      meaning:
        'Mampu mewujudkan perilaku aparatur pemerintah dan masyarakat yang selalu berpegang pada aturan dan norma-norma yang berlaku dalam kehidupan bermasyarakat dan bernegara. Perilaku tertib dapat ditunjukkan dengan menurunnya angka pelanggaran hukum baik oleh aparat pemerintah maupun masyarakat.',
    },
    {
      name: 'Mandiri',
      meaning:
        'Mampu mewujudkan kehidupan yang sejajar, sederajat serta saling berinteraksi dengan desa lain dengan mengandalkan pada kemampuan dan kekuatan sendiri. Kemandirian mengenal konsep saling ketergantungan melalui kerjasama yang saling mendukung dan menguntungkan dalam kehidupan bermasyarakat baik secara vertikal maupun horizontal.',
    },
    {
      name: 'Aman',
      meaning:
        'Mampu mewujudkan kehidupan yang kondusif, aman tentram tanpa ada suatu gejolak, baik politik maupun lainnya.',
    },
    {
      name: 'Rapi',
      meaning:
        'Mampu mewujudkan wilayah yang rapi dengan tata letak keindahan yang sesuai dengan konsep tata ruang yang baik.',
    },
  ],
  missions: [
    'Meningkatkan kualitas SDM yang beriman dan bertaqwa kepada Tuhan YME, berbudaya serta menguasai ilmu pengetahuan dan teknologi.',
    'Mewujudkan lingkungan yang aman dan kondusif dengan cara mendorong dan memaksimalkan peran dan fungsi linmas dan penjagaan keamanan lingkungan.',
    'Mewujudkan masyarakat yang sehat, cerdas, kreatif, beriman dan bertaqwa kepada Tuhan Yang Maha Esa serta berbudaya dan menguasai ilmu pengetahuan dan teknologi, sehingga dapat menciptakan lapangan kerja dan memiliki kemampuan untuk bersaing dalam memperoleh pekerjaan. Guna keperluan tersebut perlu didukung dengan ketersediaan sarana dan prasarana dasar pendidikan, kesehatan, lingkungan perumahan dan permukiman yang memadai.',
    'Menciptakan pemerintahan yang maju dan modern dengan meningkatkan kualitas SDM perangkat dan memaksimalkan teknologi berbasis online.',
    'Mendorong terciptanya pengelolaan sumberdaya alam dan lingkungan hidup dengan tetap menjaga kelestariannya, sehingga tercipta kerapian dan keindahan sesuai dengan konsep tata ruang. Potensi sumberdaya alam yang besar dan beraneka ragam harus dapat dikelola secara benar dengan tetap mengedepankan asas keseimbangan lingkungan, efisiensi dan terjaga kelestariannya.',
  ],
};

export const VILLAGE_HISTORY: VillageHistoryData = {
  originYear: '± 1803 Masehi',
  founder: 'Mbah Srengono (Asal Lumajang, Jawa Timur)',
  youtubeUrl: 'https://www.youtube.com/watch?v=y3lR13fQEM0',
  story:
    'Menurut perkiraan, Desa Korowelangkulon mulai dibuka sekitar tahun ± 1803 pada masa penjajahan Belanda. Tokoh pendiri desa adalah Mbah Srengono yang berasal dari Lumajang, Jawa Timur yang melakukan perjalanan penjelajahan ke arah barat menyusuri pesisir pantai utara Jawa. Saat tiba di sebuah hutan belantara (alas) dan membuka lahan tersebut, beliau menemukan Tanaman Koro yang merambat dan melingkar dari bagian bawah hingga ujung batang Pohon Dhurjan. Bersamaan saat membuka alas, Mbah Srengono melihat seekor Ular Welang bercorak hitam putih dengan kepala ular menghadap ke arah barat. Peristiwa alamiah tersebut mengilhami beliau untuk menamai wilayah baru ini dengan sebutan Korowelangkulon.',
  kupuTarungStory:
    'Di Desa Korowelang Kulon juga terdapat sejarah unik mengenai nama tempat pemakaman umum (TPU) "Kupu Tarung" yang terletak membentang di sisi barat dan timur serta dipisahkan oleh akses jalan menuju Sungai Bodri. Penamaan Kupu Tarung berawal dari fenomena alam yang unik: terdapat dua pohon, yaitu Pohon Waru dan Pohon Ketapeng yang tumbuh di sisi berlawanan saling bertolak dan batangnya bertemu di atas jalan seperti sedang berlaga atau bertarung. Titik persilangan ranting dan dahan kedua pohon tersebut membentuk siluet menyerupai sayap kupu-kupu raksasa, sehingga pemakaman umum tersebut dinamakan Makam Kupu Tarung.',
  leaders: [
    { id: 1, name: 'Srengono', period: '1803 s.d 1833', duration: '30 Tahun' },
    { id: 2, name: 'Katem', period: '1833 s.d 1858', duration: '25 Tahun' },
    { id: 3, name: 'Kasman', period: '1858 s.d 1879', duration: '21 Tahun' },
    { id: 4, name: 'Kardan', period: '1879 s.d 1892', duration: '13 Tahun' },
    { id: 5, name: 'Sastro Entok', period: '1892 s.d 1902', duration: '10 Tahun' },
    { id: 6, name: 'Karjoyo', period: '1902 s.d 1917', duration: '15 Tahun' },
    { id: 7, name: 'Sudarmo', period: '1917 s.d 1923', duration: '6 Tahun' },
    { id: 8, name: 'Reso Usup', period: '1923 s.d 1946', duration: '23 Tahun' },
    { id: 9, name: 'Karjono', period: '1946 s.d 1949', duration: '3 Tahun' },
    { id: 10, name: 'Sumari', period: '1949 s.d 1952', duration: '3 Tahun', isActing: true },
    { id: 11, name: 'Karjono', period: '1952 s.d 1963', duration: '11 Tahun' },
    { id: 12, name: 'Sunardi', period: '1963 s.d 1964', duration: '1 Tahun', isActing: true },
    { id: 13, name: 'Sunardi', period: '1964 s.d 1972', duration: '8 Tahun' },
    { id: 14, name: 'Suparmo', period: '1972 s.d 1988', duration: '16 Tahun' },
    { id: 15, name: 'Musrip', period: '1988 s.d 1989', duration: '1 Tahun', isActing: true },
    { id: 16, name: 'Djaelani', period: '1989 s.d 1997', duration: '8 Tahun' },
    { id: 17, name: 'Fauzan', period: '1997 s.d 1999', duration: '2 Tahun', isActing: true },
    { id: 18, name: 'Djaelani', period: '1999 s.d 2007', duration: '8 Tahun' },
    { id: 19, name: 'Gunoto', period: '2007 s.d 2007', duration: '3 Bulan', isActing: true },
    { id: 20, name: 'Triyono', period: '2007 s.d 2019', duration: '12 Tahun' },
    { id: 21, name: 'Dyna Puspasari', period: '2019 s.d 2020', duration: '8 Bulan', isActing: true },
    { id: 22, name: 'Gunoto', period: '2020 s.d Sekarang', duration: 'Menjabat' },
  ],
};

export const MAP_LAYERS: MapLayer[] = [
  {
    id: 'admin',
    name: 'Batas Administrasi & 3 Dusun',
    color: '#001e40',
    description: 'Batas wilayah desa terbagi 3 Dusun: Welangsari, Tambaksari, Rejosari (26 RT)',
    visible: true,
  },
  {
    id: 'sawah',
    name: 'Sawah Irigasi Teknis (105,447 Ha)',
    color: '#16a34a',
    description: 'Area persawahan irigasi produktif seluas 105,447 Ha (64,9% luas desa)',
    visible: true,
  },
  {
    id: 'pekarangan',
    name: 'Pekarangan & Bangunan (39,897 Ha)',
    color: '#d97706',
    description: 'Zona permukiman warga dan tanah kering seluas 39,897 Ha',
    visible: true,
  },
  {
    id: 'tegalan',
    name: 'Tegal / Kebun (34,227 Ha)',
    color: '#854d0e',
    description: 'Lahan tegalan dan perkebunan warga seluas 34,227 Ha',
    visible: true,
  },
  {
    id: 'tambak',
    name: 'Kawasan Tambak & Pesisir (17,223 Ha)',
    color: '#0284c7',
    description: 'Area budidaya tambak perikanan payau seluas 17,223 Ha',
    visible: true,
  },
  {
    id: 'fasum',
    name: 'Fasilitas Umum & Kelembagaan',
    color: '#dc2626',
    description: 'Balai Desa, Polindes/PKD, 2 SD/MI, 3 TK/PAUD, 8 Tempat Ibadah, 1 TPI, Makam Kupu Tarung',
    visible: true,
  },
  {
    id: 'sungai',
    name: 'Sungai Bodri & Saluran Irigasi',
    color: '#06b6d4',
    description: 'Sungai Bodri di perbatasan timur serta saluran irigasi tersier 105,447 Ha',
    visible: true,
  },
];

export const STAT_CARDS: VillageStatCard[] = [
  {
    id: 'geografi',
    title: 'Kondisi Geografis & Batas',
    iconType: 'map',
    bgColor: 'bg-[#eff4ff]',
    iconColor: 'text-[#003366]',
    description:
      'Terletak di Kecamatan Cepiring dengan posisi strategis di dataran rendah pantai utara, berjarak ±5 km dari Kantor Kecamatan dan 13 km dari Ibukota Kabupaten Kendal.',
    detail:
      'Batas Wilayah: Sebelah Utara dengan Desa Korowelanganyar (Kec. Cepiring); Sebelah Timur dengan Sungai Bodri / Desa Wonosari, Desa Kumpulrejo, dan Desa Magersari (Kec. Patebon); Sebelah Selatan dengan Desa Kalirandugede (Kec. Cepiring); Sebelah Barat dengan Desa Kalirandugede (Kec. Cepiring). Wilayah terbagi menjadi 3 Dusun (Welangsari, Tambaksari, Rejosari) dan 26 RT.',
    subStats: [
      { label: 'Batas Timur', value: 'Sungai Bodri' },
      { label: 'Pembagian', value: '3 Dusun / 26 RT' },
      { label: 'Jarak Ke Kendal', value: '±13 Km' },
    ],
  },
  {
    id: 'luas',
    title: 'Tata Guna Lahan (162,447 Ha)',
    iconType: 'area',
    bgColor: 'bg-[#eaf8ea]',
    iconColor: 'text-[#1b6d24]',
    description:
      'Total luas wilayah mencapai 162,447 Ha, didominasi oleh tanah persawahan irigasi teknis yang subur dan kawasan budidaya tambak perikanan.',
    detail:
      'Perincian Pola Tata Guna Lahan: Tanah Sawah Irigasi Teknis seluas 105,447 Ha (64,9%), Tanah Kering Pekarangan/Bangunan 39,897 Ha (24,5%), Tegalan/Kebun 34,227 Ha (21,0%), Kawasan Tambak 17,223 Ha (10,6%), serta Makam Kupu Tarung & lainnya seluas 0,800 Ha.',
    subStats: [
      { label: 'Sawah Irigasi', value: '105,447 Ha' },
      { label: 'Pekarangan/Hunian', value: '39,897 Ha' },
      { label: 'Kawasan Tambak', value: '17,223 Ha' },
    ],
  },
  {
    id: 'potensi',
    title: 'Demografi & Ekonomi',
    iconType: 'potential',
    bgColor: 'bg-[#fff5eb]',
    iconColor: 'text-[#b45309]',
    description:
      'Memiliki populasi 3.252 jiwa (1.124 KK) dengan mata pencaharian unggulan di sektor perikanan bahari (895 nelayan), pertanian sawah (437 petani & buruh tani), dan wirausaha.',
    detail:
      'Komposisi Penduduk: 1.558 jiwa laki-laki (47%) dan 1.694 jiwa perempuan (53%). Sektor perekonomian ditopang oleh 895 orang nelayan dengan sarana 1 unit Tempat Pelelangan Ikan (TPI), 55 unit perahu motor tempel, 308 buruh tani, 139 tukang bangunan, 129 petani, 125 wirausaha, serta 13 unit industri kecil dan rumah tangga.',
    subStats: [
      { label: 'Total Penduduk', value: '3.252 Jiwa (1.124 KK)' },
      { label: 'Sektor Nelayan', value: '895 Orang' },
      { label: 'Sarana Nelayan', value: '1 TPI / 55 Perahu' },
    ],
  },
];

export const VILLAGE_OFFICIALS: VillageOfficial[] = [
  {
    id: 1,
    name: 'Gunoto',
    position: 'Kepala Desa',
    birthDate: '09/03/1964',
    education: 'SMA/SMK/MA/Sederajat',
    skNumber: 'No. 141/254/2020',
    skDate: '28-04-2020',
  },
  {
    id: 2,
    name: 'R Nurhadi Arif Zuliyanto',
    position: 'Sekretaris Desa',
    birthDate: '22/07/1983',
    education: 'Strata 1 (S-1)',
    skNumber: 'No. 141/1/2018',
    skDate: '05-01-2018',
  },
  {
    id: 3,
    name: 'Setiawan',
    position: 'Kaur Tata Usaha & Umum',
    birthDate: '09/09/1971',
    education: 'SMA/SMK/MA/Sederajat',
    skNumber: 'No. 141/5/2017',
    skDate: '31-01-2017',
  },
  {
    id: 4,
    name: 'Khaeroni',
    position: 'Kaur Keuangan',
    birthDate: '04/04/1963',
    education: 'SMA/SMK/MA/Sederajat',
    skNumber: 'No. 141/5/2017',
    skDate: '31-01-2017',
  },
  {
    id: 5,
    name: 'Edi Mulyono',
    position: 'Kaur Perencanaan',
    birthDate: '31/12/1976',
    education: 'SMA/SMK/MA/Sederajat',
    skNumber: 'No. 141/5/2017',
    skDate: '31-01-2017',
  },
  {
    id: 6,
    name: 'Gusiyo',
    position: 'Kasi Pemerintahan',
    birthDate: '05/03/1961',
    education: 'SMA/SMK/MA/Sederajat',
    skNumber: 'No. 141/5/2017',
    skDate: '31-01-2017',
  },
  {
    id: 7,
    name: 'Siti Khotijah Titik Wahyuni',
    position: 'Kasi Kesejahteraan & Pelayanan',
    birthDate: '30/06/1967',
    education: 'SMA/SMK/MA/Sederajat',
    skNumber: 'No. 141/5/2017',
    skDate: '31-01-2017',
  },
  {
    id: 8,
    name: 'Trady Kasmun',
    position: 'Kepala Dusun I',
    birthDate: '06/07/1967',
    education: 'SMA/SMK/MA/Sederajat',
    skNumber: 'No. 141/5/2017',
    skDate: '31-01-2017',
  },
];

export const POPULATION_GROWTH: PopulationYearStat[] = [
  { year: 2016, male: 1495, female: 1667, total: 3162 },
  { year: 2017, male: 1527, female: 1684, total: 3211 },
  { year: 2018, male: 1541, female: 1682, total: 3223 },
  { year: 2019, male: 1555, female: 1693, total: 3248 },
  { year: 2020, male: 1558, female: 1694, total: 3252 },
];

export const AGE_STRUCTURE: AgeGroupStat[] = [
  { ageGroup: '0 - 4 tahun', male: 121, female: 138, total: 259, percentage: '8%' },
  { ageGroup: '5 - 9 tahun', male: 129, female: 137, total: 266, percentage: '8%' },
  { ageGroup: '10 - 14 tahun', male: 131, female: 140, total: 271, percentage: '8%' },
  { ageGroup: '15 - 19 tahun', male: 125, female: 137, total: 262, percentage: '8%' },
  { ageGroup: '20 - 24 tahun', male: 127, female: 143, total: 270, percentage: '8%' },
  { ageGroup: '25 - 29 tahun', male: 139, female: 142, total: 281, percentage: '9%' },
  { ageGroup: '30 - 34 tahun', male: 151, female: 148, total: 299, percentage: '9%' },
  { ageGroup: '35 - 39 tahun', male: 135, female: 132, total: 267, percentage: '8%' },
  { ageGroup: '40 - 44 tahun', male: 111, female: 124, total: 235, percentage: '7%' },
  { ageGroup: '45 - 49 tahun', male: 113, female: 125, total: 238, percentage: '7%' },
  { ageGroup: '50 - 54 tahun', male: 98, female: 105, total: 203, percentage: '6%' },
  { ageGroup: '55 - 59 tahun', male: 69, female: 100, total: 169, percentage: '5%' },
  { ageGroup: '60 - 64 tahun', male: 45, female: 59, total: 104, percentage: '3%' },
  { ageGroup: '65 - 69 tahun', male: 25, female: 27, total: 52, percentage: '2%' },
  { ageGroup: '70 - 74 tahun', male: 26, female: 21, total: 47, percentage: '1%' },
  { ageGroup: '> 75 tahun', male: 13, female: 16, total: 29, percentage: '1%' },
];

export const EDUCATION_DATA: EducationStat[] = [
  { level: 'Non Formal / Belum Sekolah', count2018: 1401, count2019: 1086, count2020: 259 },
  { level: 'Tamat SD / Sederajat', count2018: 768, count2019: 815, count2020: 963 },
  { level: 'Tamat SLTP / Sederajat', count2018: 564, count2019: 776, count2020: 911 },
  { level: 'Tamat SMU / SMK / MA', count2018: 432, count2019: 511, count2020: 1012 },
  { level: 'Akademi / D-I / D-II / D-III', count2018: 27, count2019: 21, count2020: 61 },
  { level: 'Strata 1 (S-1)', count2018: 31, count2019: 39, count2020: 46 },
];

export const SCHOOL_FACILITIES: SchoolStat[] = [
  { level: 'TK / PAUD', schools: 3, students: 97 },
  { level: 'SD / MI', schools: 2, students: 624 },
  { level: 'SMP / MTs', schools: 0, students: 0 },
  { level: 'SMU / SMK / MA', schools: 0, students: 0 },
];

export const OCCUPATION_DATA: OccupationStat[] = [
  { occupation: 'Nelayan', count2018: 870, count2019: 880, count2020: 895 },
  { occupation: 'Buruh Tani', count2018: 384, count2019: 305, count2020: 308 },
  { occupation: 'Tukang Bangunan', count2018: 134, count2019: 135, count2020: 139 },
  { occupation: 'Petani', count2018: 106, count2019: 127, count2020: 129 },
  { occupation: 'Wirausaha', count2018: 105, count2019: 113, count2020: 125 },
  { occupation: 'Pedagang', count2018: 92, count2019: 93, count2020: 95 },
  { occupation: 'Karyawan Swasta', count2018: 39, count2019: 43, count2020: 49 },
  { occupation: 'PNS / TNI / Polri', count2018: 26, count2019: 26, count2020: 26 },
  { occupation: 'Pensiunan', count2018: 10, count2019: 10, count2020: 10 },
  { occupation: 'Tukang Kayu / Ukir', count2018: 9, count2019: 9, count2020: 10 },
  { occupation: 'Peternakan', count2018: 2, count2019: 2, count2020: 3 },
  { occupation: 'Lain-lain / Pekerja Lepas', count2018: 1298, count2019: 1366, count2020: 1463 },
];

export const LAND_USE_DATA: LandUseStat[] = [
  { name: 'Sawah Irigasi Teknis', areaHa: 105.447, percentage: 64.9 },
  { name: 'Tanah Kering / Pekarangan / Bangunan', areaHa: 39.897, percentage: 24.5 },
  { name: 'Tegalan / Kebun', areaHa: 34.227, percentage: 21.0 },
  { name: 'Kawasan Tambak Perikanan', areaHa: 17.223, percentage: 10.6 },
  { name: 'Lain-lain / Makam Kupu Tarung', areaHa: 0.8, percentage: 0.5 },
];

export const HEALTH_FACILITIES = [
  { label: 'Polindes / Poskesdes (PKD)', count: '1 Unit', detail: 'Pelayanan kesehatan tingkat desa' },
  { label: 'Tenaga Medis di Polindes', count: '1 Orang', detail: 'Tenaga kesehatan medis siaga' },
  { label: 'Bidan Desa', count: '1 Orang', detail: 'Layanan kebidanan & KIA' },
  { label: 'Mantri Kesehatan', count: '2 Orang', detail: 'Pelayanan pengobatan dasar' },
  { label: 'Posyandu Terpadu', count: '3 Unit', detail: 'Tersebar di 3 dusun' },
  { label: 'Jarak ke Puskesmas Terdekat', count: '5 Km (15 Menit)', detail: 'Puskesmas Kecamatan Cepiring' },
  { label: 'Jarak ke Rumah Sakit Terdekat', count: '30 Menit', detail: 'RSUD dr. H. Soewondo Kendal' },
];

export const RELIGIOUS_FACILITIES = {
  religion: 'Islam (100%)',
  totalBelievers: '3.252 Jiwa',
  placesOfWorship: '8 Tempat Ibadah (Masjid & Mushola)',
};

export const SOCIAL_WELFARE_DATA: SocialWelfareStat[] = [
  { category: 'Keluarga Miskin (KK)', count2018: 786, count2019: 769, count2020: 780 },
  { category: 'Penyandang Disabilitas / Cacat', count2018: 9, count2019: 8, count2020: 6 },
  { category: 'Lanjut Usia Terlantar', count2018: 7, count2019: 4, count2020: 2 },
  { category: 'Anak Terlantar', count2018: 3, count2019: 2, count2020: 1 },
  { category: 'Tuna Susila', count2018: 2, count2019: 2, count2020: 1 },
];

export const INFRASTRUCTURE_FACILITIES = [
  { name: 'Jalan Beraspal', value: '3,0 Km', status: 'Kondisi Baik' },
  { name: 'Jalan Berbatu / Tanah', value: '5,1 Km', status: 'Perlu Pemeliharaan' },
  { name: 'Jembatan Sedang / Besar', value: '1 Unit', status: 'Kondisi Baik' },
  { name: 'Jembatan Kecil', value: '2 Unit', status: 'Kondisi Baik' },
  { name: 'Jaringan Irigasi Tersier', value: '105,447 Ha', status: 'Aktif Mengalir' },
];

export const ECONOMIC_ASSETS = [
  { name: 'Tempat Pelelangan Ikan (TPI)', count: '1 Unit' },
  { name: 'Perahu Motor Tempel Nelayan', count: '55 Unit' },
  { name: 'Kios & Warung Usaha', count: '13 Unit' },
  { name: 'Industri Rumah Tangga', count: '9 Unit' },
  { name: 'Industri Kecil', count: '4 Unit' },
  { name: 'Sepeda Motor Warga', count: '801 Unit' },
  { name: 'Mobil Angkutan', count: '19 Unit' },
  { name: 'Mobil Pribadi', count: '11 Unit' },
  { name: 'Oplet Colt', count: '7 Unit' },
  { name: 'Truk & Becak', count: '12 Unit' },
  { name: 'Populasi Ternak Unggas (Ayam/Itik)', count: '778 Ekor' },
  { name: 'Populasi Kambing & Kuda', count: '47 Ekor' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Kantor Balai Desa Korowelang Kulon',
    category: 'Pelayanan Publik',
    subtitle: 'Pusat pelayanan administrasi & tata kelola pemerintahan desa',
    imageUrl: '/gallery/balai-desa.jpg',
    description:
      'Kantor Balai Desa Korowelang Kulon sebagai pusat pelayanan terpadu administrasi kependudukan (PATEN), pelayanan surat menyurat warga, serta balai musyawarah pembangunan bagi 3 dusun (Welangsari, Tambaksari, Rejosari).',
    date: '2026',
  },
  {
    id: '2',
    title: 'Gapura Landmark Desa Korowelang Kulon',
    category: 'Infrastruktur Publik',
    subtitle: 'Pintu gerbang ikonik selamat datang di Desa Korowelang Kulon',
    imageUrl: '/gallery/gapura-desa.jpg',
    description:
      'Gapura landmark desa dengan ornamen ikan marlin dan tiang kayu vertikal bernuansa modern yang menjadi batas gerbang masuk utama menuju kawasan pemukiman warga Desa Korowelang Kulon.',
    date: '2026',
  },
  {
    id: '3',
    title: 'Kawasan Persawahan Irigasi Teknis (105,447 Ha)',
    category: 'Potensi Pertanian',
    subtitle: 'Hamparan sawah irigasi subur tulang punggung ketahanan pangan',
    imageUrl: '/gallery/persawahan-desa.jpg',
    description:
      'Lahan persawahan produktif beririgasi teknis seluas 105,447 Ha yang dialiri oleh saluran irigasi Sungai Bodri, digarap oleh 437 petani dan buruh tani desa penopang ketahanan pangan lokal.',
    date: '2026',
  },
  {
    id: '4',
    title: 'Tempat Pelelangan Ikan (TPI) & Nelayan Pesisir',
    category: 'Perikanan Pesisir',
    subtitle: 'Pusat pendaratan 55 perahu motor dan lelang ikan hasil tangkapan laut',
    imageUrl: '/gallery/tpi-desa.jpg',
    description:
      'Pusat pendaratan dan lelang ikan hasil tangkapan laut nelayan pesisir Desa Korowelang Kulon dengan 55 unit armada perahu motor tempel serta perikanan budidaya tambak seluas 17,223 Ha.',
    date: '2026',
  },
  {
    id: '5',
    title: 'Masjid Baitul Muttaqien Korowelang Kulon',
    category: 'Sarana Ibadah',
    subtitle: 'Pusat peribadatan dan kegiatan keagamaan umat Islam',
    imageUrl: '/gallery/masjid-baitul-muttaqien.jpg',
    description:
      'Masjid megah Baitul Muttaqien dengan arsitektur menara ganda dan serambi luas, menjadi sentra ibadah salat berjamaah, pengajian rutin, serta perayaan hari besar Islam masyarakat desa.',
    date: '2026',
  },
  {
    id: '6',
    title: 'SD Negeri 01 Korowelang Kulon',
    category: 'Pendidikan',
    subtitle: 'Lembaga pendidikan dasar formal di Dusun Welangsari',
    imageUrl: '/gallery/sdn-1-korowelangkulon.jpg',
    description:
      'SD Negeri 01 Korowelang Kulon dengan sarana ruang kelas representatif, halaman upacara luas, serta lingkungan belajar asri untuk mendidik generasi muda desa yang cerdas dan berakhlak mulia.',
    date: '2026',
  },
  {
    id: '7',
    title: 'SD Negeri 02 & TK Tunas Bangsa',
    category: 'Pendidikan',
    subtitle: 'Kompleks pendidikan dasar & taman kanak-kanak desa',
    imageUrl: '/gallery/sdn-2-korowelangkulon.jpg',
    description:
      'Kompleks sarana pendidikan SD Negeri 02 Korowelang Kulon dan TK Tunas Bangsa yang dilengkapi jembatan akses serta pagar hijau asri untuk pembelajaran anak usia dini dan sekolah dasar.',
    date: '2026',
  },
  {
    id: '8',
    title: 'Posyandu Desa Korowelang Kulon',
    category: 'Kesehatan',
    subtitle: 'Pusat pelayanan kesehatan ibu, anak balita, dan lansia',
    imageUrl: '/gallery/posyandu-desa.jpg',
    description:
      'Pos Pelayanan Terpadu (Posyandu) desa yang secara berkala menyelenggarakan penimbangan balita, pemantauan gizi, imunisasi dasar, serta pemeriksaan kesehatan lansia secara gratis.',
    date: '2026',
  },
  {
    id: '9',
    title: 'Kantor BUMDes Desa Korowelang Kulon',
    category: 'Ekonomi Warga',
    subtitle: 'Lembaga penggerak perekonomian dan unit usaha desa mandiri',
    imageUrl: '/gallery/kantor-bumdes.jpg',
    description:
      'Kantor Badan Usaha Milik Desa (BUMDes) sebagai motor penggerak usaha ekonomi produktif masyarakat, pengelolaan aset desa, dan kemitraan perdagangan warga untuk kemandirian ekonomi desa.',
    date: '2026',
  },
];

export const VILLAGE_SERVICES = [
  {
    code: 'SKTM',
    name: 'Surat Keterangan Tidak Mampu',
    time: '15 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP Pemohon (Asli & Fotokopi)', 'Kartu Keluarga (KK)', 'Pengantar RT/RW'],
  },
  {
    code: 'SKU',
    name: 'Surat Keterangan Usaha (UMKM)',
    time: '15 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK Pemohon', 'Foto Lokasi/Produk Usaha', 'Surat Pengantar RT/RW'],
  },
  {
    code: 'SKD',
    name: 'Surat Keterangan Domisili',
    time: '10 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK', 'Surat Pengantar RT/RW'],
  },
  {
    code: 'SKCK',
    name: 'Surat Pengantar SKCK',
    time: '15 Menit',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK', 'Pas Foto 4x6 (2 lembar)', 'Pengantar RT/RW'],
  },
  {
    code: 'NA',
    name: 'Pengantar Nikah (Model N1 - N4)',
    time: '1 - 2 Hari',
    fee: 'Gratis (Rp 0)',
    reqs: ['KTP & KK Calon Pengantin & Orang Tua', 'Akta Kelahiran / Ijazah', 'Surat Pengantar RT/RW', 'Pas Foto Berdampingan'],
  },
];
