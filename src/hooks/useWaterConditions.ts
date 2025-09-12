import { useEffect, useState, useCallback } from 'react';
import { fishService } from '../services/fishService';
import type { WaterData } from '../types';

function getErrorMessage(e: unknown): string {
  if (typeof e === 'string') return e;
  if (e && typeof e === 'object' && 'message' in e) {
    const msg = (e as { message: unknown }).message;
    return typeof msg === 'string' ? msg : 'Failed to load';
  }
  return 'Failed to load';
}

export function useWaterConditions(locationId: string) {
  const [data, setData] = useState<WaterData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const load = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fishService.getWaterConditions(locationId);
      setData(res);
    } catch (e) {
      setError(getErrorMessage(e));
    } finally {
      setLoading(false);
    }
  }, [locationId]);

  useEffect(() => {
    void load();
  }, [load]);

  return { data, loading, error, reload: load };
}
