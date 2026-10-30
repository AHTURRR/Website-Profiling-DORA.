import { productConfig } from './product.config';

export const repositoryUrl = productConfig.product.links.repositoryUrl!;
export const websiteRepositoryUrl = 'https://github.com/AHTURRR/Website-Profiling-DORA.';
export const doraWebUrl = 'https://data-overview-research-and-assistant.netlify.app';

export const releases = productConfig.releases;
const primaryRelease = productConfig.releases.find(release => release.isPrimaryForPlatform)!;
const previousRelease = productConfig.releases.find(release => !release.isPrimaryForPlatform)!;

export const currentRelease = {
  version: primaryRelease.version,
  filename: primaryRelease.filename,
  size: primaryRelease.fileSize,
  date: primaryRelease.releaseDate,
  updated: '30 Oktober 2026',
  url: primaryRelease.downloadUrl,
  sha256: primaryRelease.checksumSha256!,
  notes: primaryRelease.notes,
};

export const legacyRelease = {
  version: previousRelease.version,
  filename: previousRelease.filename,
  size: previousRelease.fileSize,
  date: previousRelease.releaseDate,
  updated: '21 Oktober 2026',
  url: previousRelease.downloadUrl,
  sha256: previousRelease.checksumSha256!,
  notes: previousRelease.notes,
};
