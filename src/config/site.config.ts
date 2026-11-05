import { productConfig } from './product.config';

export const repositoryUrl = productConfig.product.links.repositoryUrl!;
export const websiteRepositoryUrl = 'https://github.com/AHTURRR/Website-Profiling-DORA.';
export const doraWebUrl = 'https://data-overview-research-and-assistant.netlify.app';

export const releases = productConfig.releases;
const primaryRelease = productConfig.releases[0];

export const currentRelease = {
  version: primaryRelease.version,
  filename: primaryRelease.filename,
  size: primaryRelease.fileSize,
  date: primaryRelease.releaseDate,
  updated: '1 November 2026',
  url: primaryRelease.downloadUrl,
  sha256: primaryRelease.checksumSha256!,
  notes: primaryRelease.notes,
};
