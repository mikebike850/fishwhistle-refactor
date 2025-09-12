// src/components/ForecastCard.tsx
import { Calendar, TrendingUp, MapPin, Thermometer, Wind, Waves, CloudSun } from 'lucide-react';
import type { FishingForecast, StrainPairing } from '../types';

type Props = { forecast: FishingForecast };

function fmtDate(iso: string | Date | undefined) {
  if (!iso) return 'Unknown date';
  const d = iso instanceof Date ? iso : new Date(iso);
  return d.toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' });
}

function scoreLabel(score?: number) {
  const s = typeof score === 'number' ? score : 0;
  if (s >= 8) return 'Great';
  if (s >= 6) return 'Good';
  if (s >= 4) return 'Fair';
  if (s > 0) return 'Tough';
  return 'Unrated';
}

export default function ForecastCard({ forecast }: Props) {
  const { location, date, score, recommendation, conditions, strainPairing, notes } = forecast;

  const waterTempF = conditions?.waterTempF;
  const flowCfs = conditions?.flowCfs;
  const windMph = conditions?.windMph;
  const sky = conditions?.sky;
  const pressureMb = conditions?.pressureMb;

  const pct = Math.max(0, Math.min(10, typeof score === 'number' ? score : 0)) * 10;

  return (
    <article className="rounded-xl border p-4 space-y-3">
      {/* Header */}
      <header className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MapPin size={16} aria-hidden />
          <span className="font-medium text-gray-900">{location}</span>
        </div>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar size={16} aria-hidden />
          <time>{fmtDate(date)}</time>
        </div>
      </header>

      {/* Score */}
      <div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <TrendingUp size={16} aria-hidden />
            <span className="font-medium">Forecast</span>
          </div>
          <span className="text-gray-600">{scoreLabel(score)}</span>
        </div>
        <div className="mt-2 h-2 w-full rounded-full bg-gray-200">
          <div
            className="h-2 rounded-full bg-emerald-500 transition-all"
            style={{ width: `${pct}%` }}
            aria-label="forecast score"
          />
        </div>
      </div>

      {/* Conditions */}
      {(waterTempF !== undefined ||
        flowCfs !== undefined ||
        windMph !== undefined ||
        sky ||
        pressureMb !== undefined) && (
        <section className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
          {waterTempF !== undefined && (
            <div className="flex items-center gap-2">
              <Thermometer size={16} aria-hidden />
              <span>Water {waterTempF} °F</span>
            </div>
          )}
          {flowCfs !== undefined && (
            <div className="flex items-center gap-2">
              <Waves size={16} aria-hidden />
              <span>Flow {flowCfs} cfs</span>
            </div>
          )}
          {windMph !== undefined && (
            <div className="flex items-center gap-2">
              <Wind size={16} aria-hidden />
              <span>Wind {windMph} mph</span>
            </div>
          )}
          {pressureMb !== undefined && (
            <div className="flex items-center gap-2">
              {/* Using CloudSun icon set above, but Gauge would also be fine if you added it */}
              <CloudSun size={16} aria-hidden />
              <span>Pressure {pressureMb} mb</span>
            </div>
          )}
          {sky && (
            <div className="flex items-center gap-2">
              <CloudSun size={16} aria-hidden />
              <span>Sky {sky}</span>
            </div>
          )}
        </section>
      )}

      {/* Recommendation */}
      {recommendation && (
        <section className="rounded-lg bg-emerald-50 border border-emerald-200 p-3">
          <p className="text-sm text-emerald-800">{recommendation}</p>
        </section>
      )}

      {/* Strain Pairing */}
      {Array.isArray(strainPairing) && strainPairing.length > 0 && (
        <section className="rounded-lg bg-gray-50 border p-3">
          <h4 className="text-sm font-semibold mb-2">Suggested pairings</h4>
          <ul className="space-y-1 text-sm">
            {strainPairing.map((sp: StrainPairing, i: number) => (
              <li key={i} className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1">
                  <CloudSun size={14} aria-hidden />
                  <span className="text-gray-700">{sp.timeOfDay}</span>
                </span>
                <span className="text-gray-500">•</span>
                <span className="text-gray-700">{sp.species}</span>
                {sp.tip ? (
                  <>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-700">{sp.tip}</span>
                  </>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Notes */}
      {notes && <p className="text-sm text-gray-700">{notes}</p>}
    </article>
  );
}
