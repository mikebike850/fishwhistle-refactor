import { renderHook, waitFor } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

vi.mock('../../services/fishService', () => ({
fishService: {
getWaterConditions: vi.fn().mockResolvedValue({
locationId: 'chattahoochee',
flowCfs: 200,
temperatureF: 54
})
}
}))

import { useWaterConditions } from '../useWaterConditions'

describe('useWaterConditions', () => {
it('loads water data', async () => {
const { result } = renderHook(() => useWaterConditions('chattahoochee'))
await waitFor(() => {
expect(result.current.loading).toBe(false)
expect(result.current.error).toBeNull()
expect(result.current.data).toEqual({
locationId: 'chattahoochee',
flowCfs: 200,
temperatureF: 54
})
})
})
})