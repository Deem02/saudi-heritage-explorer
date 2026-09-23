export type HeritageCategoryId = 'regions' | 'crafts' | 'food' | 'architecture';

export interface HeritageCategory {
  id: HeritageCategoryId;
  title: string;
  description: string;
  image: string;
}

export interface FeaturedHeritageItem {
  id: string;
  title: string;
  description: string;
  category: HeritageCategoryId;
  location: string;
  image: string;
}

export interface SaudiRegion {
  id: string;
  title: string;
  description: string;
  image: string;
}
