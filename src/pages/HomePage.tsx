import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import WaterConditionsCard from '../components/WaterConditionsCard';
import ForecastCard from '../components/ForecastCard';
import FeedCard from '../components/FeedCard';
import { fishService } from '../services/fishService';
import { useSearch } from '../context/SearchContext';
import type { WaterData, FishingForecast, FishingReport } from '../types';

export default function HomePage() {
  const { query } = useSearch();
  const [loading, setLoading] = useState(true);
  const [water, setWater] = useState<WaterData[]>([]);
  const [forecasts, setForecasts] = useState<FishingForecast[]>([]);
  const [reports, setReports] = useState<FishingReport[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    setLoading(true);
    setError(null);

    Promise.all([
      fishService.getWaterConditions(),
      fishService.getForecasts(),
      fishService.getReports(),
    ])
      .then(([w, f, r]) => {
        if (!alive) return;
        setWater(w);
        setForecasts(f);
        setReports(r);
      })
      .catch((e) => {
        if (!alive) return;
        setError(e instanceof Error ? e.message : 'Failed to load data');
      })
      .finally(() => {
        if (!alive) return;
        setLoading(false);
      });

    return () => {
      alive = false;
    };
  }, []);

  const q = query.trim().toLowerCase();
  const waterFiltered = q ? water.filter((w) => w.locationId.toLowerCase().includes(q)) : water;
  const forecastsFiltered = q
    ? forecasts.filter((f) => {
        const hay = [f.location, f.recommendation ?? '', f.notes ?? '', f.conditions?.sky ?? '']
          .join(' ')
          .toLowerCase();
        return hay.includes(q);
      })
    : forecasts;
  const reportsFiltered = q
    ? reports.filter((r) => {
        const loc = typeof r.location === 'string' ? r.location : (r.location.name ?? '');
        const text = r.text ?? r.description ?? '';
        const user = r.user?.username ?? '';
        const species = r.species ?? '';
        const gear = r.gear ?? '';
        return [loc, text, user, species, gear].some((s) => s.toLowerCase().includes(q));
      })
    : reports;

  return (
    <Layout>
      {loading && <p className="text-gray-600">Loading data…</p>}
      {error && <p className="text-red-600">Problem loading data. {error}</p>}

      {!loading && !error && (
        <div className="space-y-10">
          <section>
            <h2 className="section-title">Water Conditions</h2>
            {waterFiltered.length === 0 ? (
              <p className="text-sm text-gray-600">No matches.</p>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {waterFiltered.map((w) => (
                  <div key={w.locationId} className="card p-4">
                    <WaterConditionsCard data={w} />
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="section-title">Forecasts</h2>
            {forecastsFiltered.length === 0 ? (
              <p className="text-sm text-gray-600">No matches.</p>
            ) : (
              <div className="grid gap-4 md:grid-cols-2">
                {forecastsFiltered.map((f, i) => (
                  <div key={i} className="card p-4">
                    <ForecastCard forecast={f} />
                  </div>
                ))}
              </div>
            )}
          </section>

          <section>
            <h2 className="section-title">Recent Reports</h2>
            {reportsFiltered.length === 0 ? (
              <p className="text-sm text-gray-600">No matches.</p>
            ) : (
              <div className="space-y-4">
                {reportsFiltered.map((r) => (
                  <div key={r.id} className="card">
                    <FeedCard report={r} />
                  </div>
                ))}
              </div>
            )}
          </section>
        </div>
      )}
    </Layout>
  );
}
