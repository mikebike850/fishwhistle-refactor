// src/services/fishService.ts
import type { FishingForecast, FishingReport, WaterData, SearchHit } from '../types';
import { mockForecasts, mockReports, mockWaterData } from '../data/mockData';

const sleep = (ms: number) => new Promise((res) => setTimeout(res, ms));

export async function loadWaterData(): Promise<WaterData[]> {
  await sleep(100);
  return mockWaterData;
}

export async function loadForecasts(): Promise<FishingForecast[]> {
  await sleep(100);
  return mockForecasts;
}

export async function loadReports(): Promise<FishingReport[]> {
  await sleep(100);
  return mockReports;
}

export async function searchEverything(query: string): Promise<SearchHit[]> {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  const forecastHits: SearchHit[] = mockForecasts
    .filter((f) => {
      const haystack = [f.location, f.notes ?? '', f.recommendation ?? '', f.conditions?.sky ?? '']
        .join(' ')
        .toLowerCase();
      return haystack.includes(q);
    })
    .map((f) => ({ kind: 'forecast', item: f }));

  const reportHits: SearchHit[] = mockReports
    .filter((r) => {
      const loc = typeof r.location === 'string' ? r.location : (r.location.name ?? '');
      const text = r.text ?? r.description ?? '';
      const user = r.user?.username ?? '';
      const species = r.species ?? '';
      return [loc, text, user, species].some((s) => s.toLowerCase().includes(q));
    })
    .map((r) => ({ kind: 'report', item: r }));

  return [...forecastHits, ...reportHits];
}

export function reportLabel(r: FishingReport): string {
  const loc = typeof r.location === 'string' ? r.location : (r.location.name ?? 'Unknown');
  const who = r.user?.username ?? 'Anonymous';
  return `${loc} • ${who}`;
}

// Aliases for older call sites
export async function getWaterConditions() {
  return loadWaterData();
}
export async function getForecasts() {
  return loadForecasts();
}
export async function getReports() {
  return loadReports();
}

// Grouped service for legacy imports
export const fishService = {
  loadWaterData,
  getWaterConditions,
  loadForecasts,
  getForecasts,
  loadReports,
  getReports,
  searchEverything,
  reportLabel,
};
