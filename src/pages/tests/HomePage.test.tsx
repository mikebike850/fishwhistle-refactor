import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import HomePage from '../HomePage';
import { SearchProvider } from '../../context/SearchProvider';

vi.mock('../../services/fishService', () => ({
  fishService: {
    getWaterConditions: vi.fn().mockResolvedValue([
      {
        locationId: 'test-river',
        flowCfs: 123,
        temperatureF: 55,
        updatedAt: new Date().toISOString(),
      },
    ]),
    getForecasts: vi.fn().mockResolvedValue([
      {
        date: new Date().toISOString(),
        score: 7,
        recommendation: 'Good',
        conditions: { flow: 'stable', clarity: 'clear', tempTrend: 'rising' },
        strainPairing: [],
      },
    ]),
    getReports: vi.fn().mockResolvedValue([]),
  },
}));

describe('HomePage', () => {
  it('shows loading then data', async () => {
    render(
      <SearchProvider>
        <HomePage />
      </SearchProvider>,
    );

    // target the section H2 only, not the H3 inside the card
    const h2 = await screen.findByRole('heading', { level: 2, name: /Water Conditions/i });
    expect(h2).toBeInTheDocument();

    // sanity check that card content rendered
    expect(screen.getByText(/Flow/i)).toBeInTheDocument();
    expect(screen.getByText(/°F/)).toBeInTheDocument();
  });
});
