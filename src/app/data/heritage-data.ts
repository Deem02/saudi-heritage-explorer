import {
  HeritageCategory,
  FeaturedHeritageItem,
  SaudiRegion,
} from '../models/heritage.model';

const IMG = (name: string) => `assets/images/heritage/${name}`;

export const HERITAGE_CATEGORIES: HeritageCategory[] = [
  {
    id: 'regions',
    title: 'المناطق',
    description: 'من الرمال الذهبية إلى القمم الخضراء، تنوّعٌ جغرافي عريق.',
    image: IMG('category-regions.jpg'),
  },
  {
    id: 'crafts',
    title: 'الحِرف',
    description: 'أنامل صنعت السدو والفخار والخوص عبر أجيال متعاقبة.',
    image: IMG('category-crafts.jpg'),
  },
  {
    id: 'food',
    title: 'الأطعمة',
    description: 'نكهات أصيلة تروي حكاية الضيافة والكرم السعودي.',
    image: IMG('category-food.png'),
  },
  {
    id: 'architecture',
    title: 'العمارة',
    description: 'طينٌ وحجرٌ نُحتا ليحكيا فنون البناء في كل منطقة.',
    image: IMG('featured-najdi-house.jpg'),
  },
];

export const FEATURED_ITEMS: FeaturedHeritageItem[] = [
  {
    id: 'saudi-coffee',
    title: 'القهوة السعودية',
    description: 'مشروبٌ يرمز للكرم، يُقدَّم في مجالس الضيافة برائحة الهيل الفواحة.',
    category: 'food',
    location: 'جميع المناطق',
    image: IMG('featured-coffee.jpg'),
  },
  {
    id: 'sadu',
    title: 'السدو',
    description: 'نسيجٌ بخطوطٍ هندسية، توارثته النساء بحرفية عالية.',
    category: 'crafts',
    location: 'نجد والمناطق الصحراوية',
    image: IMG('category-crafts.jpg'),
  },
  {
    id: 'najdi-house',
    title: 'البيت النجدي',
    description: 'عمارة طينية تتميز بجدران سميكة وزخارف تحافظ على برودة الأجواء.',
    category: 'architecture',
    location: 'منطقة نجد',
    image: IMG('featured-najdi-house.jpg'),
  },
  {
    id: 'saudi-dagger',
    title: 'الخنجر السعودي',
    description: 'رمزٌ للهيبة والرجولة، يُصنع يدويًا بزخارف فضية دقيقة.',
    category: 'crafts',
    location: 'عسير والحجاز',
    image: IMG('featured-dagger.jpg'),
  },
];

export const SAUDI_REGIONS: SaudiRegion[] = [
  {
    id: 'najd',
    title: 'نجد',
    description: 'قلب الجزيرة العربية، موطن الطين الأصفر والتاريخ السياسي العريق.',
    image: IMG('region-najd.jpg'),
  },
  {
    id: 'hijaz',
    title: 'الحجاز',
    description: 'بوابة الحرمين الشريفين ومفترق الحضارات على ساحل البحر الأحمر.',
    image: IMG('region-hijaz.jpg'),
  },
  {
    id: 'asir',
    title: 'عسير',
    description: 'جبالٌ خضراء وقرى حجرية ملوّنة تُطل على غيوم السحاب.',
    image: IMG('region-asir.jpg'),
  },
  {
    id: 'eastern',
    title: 'المنطقة الشرقية',
    description: 'سواحل الخليج العربي ونخيل الأحساء وإرثٌ بحري عريق.',
    image: IMG('region-eastern.jpg'),
  },
];
