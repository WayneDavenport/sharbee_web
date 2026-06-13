import {
  GITHUB_RELEASES_REPO,
  STANDALONE_WINDOWS_EXE_SHA256,
} from '@/config/links'

const CACHE_KEY = 'sharbee:windows-download-url'

/**
 * Resolves the installer download URL from the release asset SHA256 digest.
 * GitHub exposes digests as `sha256:<hex>` on each release asset.
 */
export async function resolveWindowsDownloadUrl(
  sha256 = STANDALONE_WINDOWS_EXE_SHA256,
  repo = GITHUB_RELEASES_REPO,
) {
  const digest = `sha256:${sha256}`
  const cached = sessionStorage.getItem(CACHE_KEY)

  if (cached) {
    try {
      const { digest: cachedDigest, url } = JSON.parse(cached)
      if (cachedDigest === digest && url) return url
    } catch {
      sessionStorage.removeItem(CACHE_KEY)
    }
  }

  const response = await fetch(
    `https://api.github.com/repos/${repo}/releases?per_page=10`,
  )

  if (!response.ok) {
    throw new Error('Failed to fetch releases')
  }

  const releases = await response.json()

  for (const release of releases) {
    const asset = release.assets?.find((item) => item.digest === digest)
    if (asset?.browser_download_url) {
      sessionStorage.setItem(
        CACHE_KEY,
        JSON.stringify({ digest, url: asset.browser_download_url }),
      )
      return asset.browser_download_url
    }
  }

  throw new Error('No release asset found for the configured SHA256 digest')
}
