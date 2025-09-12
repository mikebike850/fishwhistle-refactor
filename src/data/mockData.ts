// src/data/mockData.ts
import type {
  FishingForecast,
  FishingReport,
  WaterData,
  Conditions,
  StrainPairing,
  User,
} from '../types';

const userMike: User = {
  username: 'Mike',
  avatar: 'https://i.pravatar.cc/100?u=mike',
  tier: 'premium',
};

const userGuide: User = {
  username: 'RiverGuide',
  avatar: 'https://i.pravatar.cc/100?u=guide',
  tier: 'pro',
};

export const mockWaterData: WaterData[] = [
  {
    locationId: 'chattahoochee',
    flowCfs: 200,
    temperatureF: 54,
    updatedAt: new Date().toISOString(),
  },
  {
    locationId: 'bow-river',
    flowCfs: 120,
    temperatureF: 50,
    updatedAt: new Date().toISOString(),
  },
  {
    locationId: 'madison',
    flowCfs: 380,
    temperatureF: 57,
    updatedAt: new Date().toISOString(),
  },
];

const baseCond: Conditions = {
  waterTempF: 54,
  flowCfs: 200,
  windMph: 5,
  sky: 'partly cloudy',
  pressureMb: 1016,
};

const pairings: StrainPairing[] = [
  { timeOfDay: 'early morning', species: 'trout', tip: 'small nymphs' },
  { timeOfDay: 'evening', species: 'trout', tip: 'emergers' },
];

export const mockForecasts: FishingForecast[] = [
  {
    location: 'Chattahoochee River',
    date: new Date().toISOString(),
    score: 7,
    recommendation: 'Fish the seams and slower edges',
    conditions: baseCond,
    strainPairing: pairings,
    notes: 'Flow stable, good clarity',
  },
  {
    location: 'Bow River',
    date: new Date().toISOString(),
    score: 6,
    recommendation: 'Work riffles with streamers, switch to nymphs mid-day',
    conditions: { ...baseCond, flowCfs: 120, waterTempF: 50, sky: 'clear' },
    strainPairing: [{ timeOfDay: 'midday', species: 'trout', tip: 'size 18 pheasant tail' }],
  },
  {
    location: 'Madison River',
    date: new Date().toISOString(),
    score: 8,
    recommendation: 'Dry-dropper near banks and pockets',
    conditions: { ...baseCond, flowCfs: 380, waterTempF: 57, windMph: 8 },
    strainPairing: [{ timeOfDay: 'afternoon', species: 'trout', tip: 'hopper-dropper' }],
  },
];

export const mockReports: FishingReport[] = [
  {
    id: 'r-1',
    location: { name: 'Chattahoochee River', lat: 33.8, lng: -84.3 },
    date: new Date().toISOString(),
    description: 'Caught two browns on size 18 pheasant tail near the bend.',
    user: userMike,
    images: ['https://picsum.photos/seed/catch1/1200/600'],
    species: 'brown trout',
    conditions: { temperature: 54, waterClarity: 'clear', flowRate: 200 },
    gear: '9ft 5wt, 5x tippet',
    likes: 3,
    comments: [
      {
        id: 'c-1',
        user: userGuide,
        content: 'Nice work. Try the upper run at dusk.',
        timestamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 'r-2',
    location: { name: 'Bow River', lat: 51.05, lng: -114.07 },
    date: new Date().toISOString(),
    description: 'Good streamer bite early. Nymphs were better after 11am.',
    user: userGuide,
    images: ['https://picsum.photos/seed/catch2/1200/600'],
    species: 'rainbow trout',
    conditions: { temperature: 50, waterClarity: 'slightly stained', flowRate: 120 },
    gear: '7wt with sinking tip',
    likes: 10,
    comments: [],
  },
  {
    id: 'r-3',
    location: { name: 'Madison River', lat: 44.6, lng: -111.7 },
    date: new Date().toISOString(),
    description: 'Hopper-dropper produced along the banks. Wind picked up.',
    user: userMike,
    images: ['https://picsum.photos/seed/catch3/1200/600'],
    species: 'brown trout',
    conditions: { temperature: 57, waterClarity: 'clear', flowRate: 380 },
    gear: 'Hopper with size 16 dropper',
    likes: 6,
    comments: [],
  },
];
