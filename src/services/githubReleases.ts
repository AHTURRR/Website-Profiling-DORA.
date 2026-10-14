import type { ReleasePackage } from '../types/product.types';

interface GitHubAsset {
  name: string;
  browser_download_url: string;
  size: number;
  digest?: string;
}

interface GitHubReleaseResponse {
  tag_name: string;
  name: string;
  published_at: string;
  assets: GitHubAsset[];
  zipball_url: string;
}

const GITHUB_REPO = 'NezzyGremory/Dataset-Research';
const GITHUB_LATEST_API = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;

/**
 * Mengambil informasi rilis terbaru secara real-time langsung dari GitHub Repository
 * Fallback otomatis ke default static config jika offline atau limit API tercapai.
 */
export async function fetchLiveReleases(
  defaultReleases: ReleasePackage[]
): Promise<ReleasePackage[]> {
  try {
    const response = await fetch(GITHUB_LATEST_API, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
      },
    });

    if (!response.ok) {
      return defaultReleases;
    }

    const data: GitHubReleaseResponse = await response.json();
    if (!data || !data.assets || !Array.isArray(data.assets)) {
      return defaultReleases;
    }

    // Cari aset installer Windows (.exe)
    const exeAsset = data.assets.find((a) => a.name.toLowerCase().endsWith('.exe'));

    return defaultReleases.map((rel) => {
      if (rel.id === 'win-installer-v5' && exeAsset) {
        const sizeMb = (exeAsset.size / (1024 * 1024)).toFixed(1) + ' MB';
        const sha = exeAsset.digest ? exeAsset.digest.replace(/^sha256:/i, '') : rel.checksumSha256;

        return {
          ...rel,
          version: data.tag_name || rel.version,
          filename: exeAsset.name,
          downloadUrl: exeAsset.browser_download_url,
          fileSize: sizeMb,
          checksumSha256: sha,
        };
      }

      if (rel.id === 'source-zip-v5') {
        return {
          ...rel,
          version: data.tag_name || rel.version,
          downloadUrl: `https://github.com/${GITHUB_REPO}/archive/refs/tags/${data.tag_name}.zip`,
        };
      }

      return rel;
    });
  } catch (error) {
    console.warn('[DORA] Menggunakan data rilis lokal (GitHub API offline/rate limit):', error);
    return defaultReleases;
  }
}
