import { useEffect, useState } from 'react'
import { fishService } from '../services/fishService'

export function useWaterConditions(locationId: string) {
  const [data, setData] = useState<any | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  async function load() {
    setLoading(true); setError(null)
    try { setData(await fishService.getWaterConditions(locationId)) }
    catch (e: any) { setError(e?.message || 'Failed to load') }
    finally { setLoading(false) }
  }

  useEffect(() => { load() }, [locationId])

  return { data, loading, error, reload: load }
}
