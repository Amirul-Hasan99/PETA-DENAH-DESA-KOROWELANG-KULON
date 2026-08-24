export interface VillageInfo {
  name: string;
  subdistrict: string;
  district: string;
  province: string;
  postalCode: string;
  operationalHours: string;
  whatsapp: string;
  email: string;
  address: string;
  officialWebsite: string;
  distanceToSubdistrict: string;
  distanceToDistrict: string;
  totalArea: string;
  totalPopulation: number;
  malePopulation: number;
  femalePopulation: number;
  totalFamilies: number;
  dusunCount: number;
  rtCount: number;
  dusunNames: string[];
  boundaries: {
    utara: string;
    timur: string;
    selatan: string;
    barat: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
    tiktok?: string;
    youtube?: string;
  };
}

export interface VillageOfficial {
  id: number;
  name: string;
  position: string;
  birthDate: string;
  education: string;
  skNumber: string;
  skDate: string;
}

export interface VillageLeaderHistory {
  id: number;
  name: string;
  period: string;
  duration: string;
  isActing?: boolean;
}

export interface VisionValuePillar {
  name: string;
  meaning: string;
}

export interface VillageVisionMission {
  vision: string;
  visionPeriod: string;
  visionPillars: VisionValuePillar[];
  missions: string[];
}

export interface VillageHistoryData {
  originYear: string;
  founder: string;
  story: string;
  kupuTarungStory: string;
  youtubeUrl: string;
  leaders: VillageLeaderHistory[];
}

export interface PopulationYearStat {
  year: number;
  male: number;
  female: number;
  total: number;
}

export interface AgeGroupStat {
  ageGroup: string;
  male: number;
  female: number;
  total: number;
  percentage: string;
}

export interface EducationStat {
  level: string;
  count2018: number;
  count2019: number;
  count2020: number;
}

export interface SchoolStat {
  level: string;
  schools: number;
  students: number;
}

export interface OccupationStat {
  occupation: string;
  count2018: number;
  count2019: number;
  count2020: number;
}

export interface LandUseStat {
  name: string;
  areaHa: number;
  percentage: number;
}

export interface SocialWelfareStat {
  category: string;
  count2018: number;
  count2019: number;
  count2020: number;
}

export interface MapLayer {
  id: string;
  name: string;
  color: string;
  description: string;
  visible: boolean;
}

export interface VillageStatCard {
  id: string;
  title: string;
  iconType: 'map' | 'area' | 'potential';
  bgColor: string;
  iconColor: string;
  description: string;
  detail?: string;
  subStats?: { label: string; value: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  imageUrl: string;
  description: string;
  date?: string;
}

export type ActiveTab = 'geografi' | 'profil';
