export interface User {
  id: string;
  username: string;
  email: string;
  avatar?: string;
  tier: 'free' | 'premium' | 'pro';
  joinedAt: Date;
}

export interface FishingReport {
  id: string;
  userId: string;
  user: User;
  location: {
    name: string;
    lat: number;
    lng: number;
  };
  species: string;
  gear: string;
  conditions: {
    weather: string;
    temperature: number;
    waterClarity: 'clear' | 'murky' | 'muddy';
    flowRate: number;
  };
  strainPairing?: {
    name: string;
    reason: string;
  };
  images?: string[];
  description: string;
  timestamp: Date;
  likes: number;
  comments: Comment[];
}

export interface Comment {
  id: string;
  userId: string;
  user: User;
  content: string;
  timestamp: Date;
}

export interface WaterData {
  location: string;
  temperature: number;
  flowRate: number;
  clarity: 'clear' | 'murky' | 'muddy';
  barometricPressure: number;
  lastUpdated: Date;
}

export interface FishingForecast {
  location: string;
  date: Date;
  score: number; // 1-10
  conditions: string;
  recommendation: string;
  strainPairing?: {
    name: string;
    reason: string;
  };
}