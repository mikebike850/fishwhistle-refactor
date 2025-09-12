// src/components/LocationConditions.tsx
import { Thermometer, Wind, Waves, CloudSun, Gauge } from 'lucide-react';
import type { Conditions } from '../types';

// Support both your global Conditions shape and the simpler one used inside reports.
type LegacyReportConditions = { temperature?: number; waterClarity?: string; flowRate?: number };
type Props = { conditions: Conditions | LegacyReportConditions; title?: string };

function pickNumber(v: unknown): number | undefined {
  return typeof v === 'number' ? v : undefined;
}
function pickString(v: unknown): string | undefined {
  return typeof v === 'string' ? v : undefined;
}

export default function LocationConditions({ conditions, title = 'Conditions' }: Props) {
  // Normalize both shapes to one set of optional values
  const flowCfs =
    'flowCfs' in conditions
      ? pickNumber(conditions.flowCfs)
      : pickNumber((conditions as LegacyReportConditions).flowRate);
  const waterTempF =
    'waterTempF' in conditions
      ? pickNumber(conditions.waterTempF)
      : pickNumber((conditions as LegacyReportConditions).temperature);
  const windMph = 'windMph' in conditions ? pickNumber(conditions.windMph) : undefined;
  const pressureMb = 'pressureMb' in conditions ? pickNumber(conditions.pressureMb) : undefined;
  const sky =
    'sky' in conditions
      ? pickString(conditions.sky)
      : pickString((conditions as LegacyReportConditions).waterClarity);

  return (
    <section className="rounded-xl border p-4">
      <h3 className="font-semibold mb-2">{title}</h3>
      <ul className="grid grid-cols-2 gap-2 text-sm">
        {flowCfs !== undefined && (
          <li className="flex items-center gap-2">
            <Waves size={16} aria-hidden="true" />
            <span>Flow {flowCfs} cfs</span>
          </li>
        )}
        {waterTempF !== undefined && (
          <li className="flex items-center gap-2">
            <Thermometer size={16} aria-hidden="true" />
            <span>Water {waterTempF} °F</span>
          </li>
        )}
        {windMph !== undefined && (
          <li className="flex items-center gap-2">
            <Wind size={16} aria-hidden="true" />
            <span>Wind {windMph} mph</span>
          </li>
        )}
        {pressureMb !== undefined && (
          <li className="flex items-center gap-2">
            <Gauge size={16} aria-hidden="true" />
            <span>Pressure {pressureMb} mb</span>
          </li>
        )}
        {sky && (
          <li className="flex items-center gap-2">
            <CloudSun size={16} aria-hidden="true" />
            <span>Sky {sky}</span>
          </li>
        )}
      </ul>
    </section>
  );
}
