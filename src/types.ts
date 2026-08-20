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

export type ActiveTab = 'geografi' | 'profil' | 'galeri';
