import { productConfig } from './product.config';

export const repositoryUrl = productConfig.product.links.repositoryUrl!;
const primaryRelease = productConfig.releases.find(release => release.isPrimaryForPlatform)!;
export const currentRelease = {
  version: primaryRelease.version,
  filename: primaryRelease.filename,
  size: primaryRelease.fileSize,
  date: primaryRelease.releaseDate,
  updated: '21 Oktober 2026',
  url: primaryRelease.downloadUrl,
  sha256: primaryRelease.checksumSha256!,
};
