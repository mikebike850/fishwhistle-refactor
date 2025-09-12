import { useEffect, useState } from 'react';
import { useSearch } from '../context/useSearch';
import { fishService } from '../services/fishService';
import type { SearchHit } from '../types';
import ForecastCard from '../components/ForecastCard';

export default function SearchResults() {
  const { debouncedQuery } = useSearch();
  const [hits, setHits] = useState<SearchHit[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!debouncedQuery) {
      setHits([]);
      return;
    }
    setLoading(true);
    setError(null);
    fishService
      .searchAll(debouncedQuery)
      .then(setHits)
      .catch((e) => setError(e instanceof Error ? e.message : 'Search failed'))
      .finally(() => setLoading(false));
  }, [debouncedQuery]);

  if (!debouncedQuery) return <p className="text-sm text-gray-600">Enter a search</p>;
  if (loading) return <p>Searching…</p>;
  if (error) return <p>{error}</p>;
  if (!hits.length) return <p>No results</p>;

  return (
    <div className="space-y-4">
      {hits.map((h, i) =>
        h.kind === 'forecast' ? (
          <ForecastCard key={`f-${i}`} forecast={h.item} />
        ) : (
          <div key={`r-${i}`} className="rounded-xl border p-4">
            <div className="text-xs text-gray-500">{h.item.date}</div>
            <div className="font-medium">{h.item.location}</div>
            <p className="text-sm mt-1">{h.item.text}</p>
          </div>
        ),
      )}
    </div>
  );
}
