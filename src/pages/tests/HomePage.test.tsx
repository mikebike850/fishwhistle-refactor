import { render, screen } from '@testing-library/react'
import { vi, describe, it, expect } from 'vitest'

vi.mock('../../services/fishService', () => ({
fishService: {
getWaterConditions: vi.fn().mockResolvedValue({ locationId: 'chattahoochee', flowCfs: 200 })
}
}))

import HomePage from '../HomePage'

describe('HomePage', () => {
it('shows loading then data', async () => {
render(<HomePage />)
expect(screen.getByText(/Loading water conditions/i)).toBeInTheDocument()
const dataNode = await screen.findByText(/"flowCfs": 200/)
expect(dataNode).toBeInTheDocument()
})
})