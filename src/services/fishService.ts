import { http } from './http'

export type WaterData = any
export type FishingForecast = any
export type FishingReport = any

const useMocks = true

export const fishService = {
  async getWaterConditions(locationId: string): Promise<WaterData> {
    if (useMocks) {
      const { mockWaterData } = await import('../data/mockData')
      return mockWaterData[0]
    }
    return http.get<WaterData>(`/water/${locationId}`)
  },
  async getForecast(locationId: string): Promise<FishingForecast[]> {
    if (useMocks) {
      const { mockForecasts } = await import('../data/mockData')
      return mockForecasts
    }
    return http.get<FishingForecast[]>(`/forecast/${locationId}`)
  },
  async getReports(locationId: string): Promise<FishingReport[]> {
    if (useMocks) {
      const { mockReports } = await import('../data/mockData')
      return mockReports
    }
    return http.get<FishingReport[]>(`/reports/${locationId}`)
  }
}
