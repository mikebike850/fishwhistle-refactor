// src/components/WaterConditionsCard.tsx
import { Waves, Thermometer } from 'lucide-react';
import type { WaterData } from '../types';

type Props = { data: WaterData; title?: string };

export default function WaterConditionsCard({ data, title = 'Water conditions' }: Props) {
  const updated = data.updatedAt ? new Date(data.updatedAt).toLocaleString() : 'unknown';

  return (
    <div className="rounded-xl border p-4 space-y-2">
      <h3 className="font-semibold">{title}</h3>
      <div className="text-sm text-gray-600">Location {data.locationId}</div>
      <div className="flex items-center gap-2 text-sm">
        <Waves size={16} aria-hidden="true" />
        <span>Flow {data.flowCfs} cfs</span>
      </div>
      {data.temperatureF !== undefined && (
        <div className="flex items-center gap-2 text-sm">
          <Thermometer size={16} aria-hidden="true" />
          <span>Water {data.temperatureF} °F</span>
        </div>
      )}
      <div className="text-xs text-gray-500">Updated {updated}</div>
    </div>
  );
}
