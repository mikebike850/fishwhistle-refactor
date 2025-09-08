import { useWaterConditions } from '../hooks/useWaterConditions'

export default function HomePage() {
  const { data, loading, error } = useWaterConditions('chattahoochee')
  return (
    <div className="space-y-6 p-4">
      {loading && <p>Loading water conditions...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}
