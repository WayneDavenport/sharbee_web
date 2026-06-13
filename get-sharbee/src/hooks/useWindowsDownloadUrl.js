import { useEffect, useState } from 'react'
import { resolveWindowsDownloadUrl } from '@/lib/resolveWindowsDownload'

export function useWindowsDownloadUrl() {
  const [url, setUrl] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false

    resolveWindowsDownloadUrl()
      .then((resolvedUrl) => {
        if (!cancelled) setUrl(resolvedUrl)
      })
      .catch((err) => {
        if (!cancelled) setError(err)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return { url, loading: !url && !error, error }
}
