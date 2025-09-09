import { renderHook, waitFor } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

vi.mock('../../services/fishService', () => ({
fishService: {
getWaterConditions: vi.fn().mockRejectedValue(new Error('boom'))
}
}))

import { useWaterConditions } from '../useWaterConditions'

describe('useWaterConditions error', () => {
it('reports error and no data', async () => {
const { result } = renderHook(() => useWaterConditions('chattahoochee'))
await waitFor(() => {
expect(result.current.loading).toBe(false)
expect(result.current.data).toBeNull()
expect(result.current.error).toBe('boom')
})
})
})