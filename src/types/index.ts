// src/types/index.ts

export interface Conditions {
  waterTempF?: number;
  flowCfs?: number;
  windMph?: number;
  sky?: string;
  pressureMb?: number;
}

export interface StrainPairing {
  timeOfDay: string;
  species: string;
  tip?: string;
}

export interface FishingForecast {
  location: string;
  date: string | Date;
  score?: number;
  recommendation?: string;
  conditions?: Conditions;
  strainPairing?: StrainPairing[];
  notes?: string;
}

export interface User {
  id?: string;
  username: string;
  avatar: string;
  tier?: 'pro' | 'premium' | string;
}

export interface ReportComment {
  id: string;
  user: User;
  content: string;
  timestamp: string | Date;
}

export interface FishingReport {
  id: string;
  // allow a plain string or an object with optional geo
  location: string | { name?: string; lat?: number; lng?: number };
  date: string;
  text?: string;
  description?: string;
  user: User;
  images?: string[];
  species?: string;
  // some code uses a simple shape here
  conditions?: { temperature?: number; waterClarity?: string; flowRate?: number } | Conditions;
  gear?: string;
  likes?: number;
  comments?: ReportComment[];
}

export interface WaterData {
  locationId: string;
  flowCfs: number;
  temperatureF?: number;
  updatedAt?: string;
}

export type SearchHit =
  | { kind: 'forecast'; item: FishingForecast }
  | { kind: 'report'; item: FishingReport };
