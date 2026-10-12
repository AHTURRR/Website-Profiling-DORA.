import type { SupportedOS } from '../types/product.types';

export function detectUserOS(): { os: SupportedOS; displayName: string; defaultArch: string } {
  if (typeof window === 'undefined' || !navigator) {
    return { os: 'windows', displayName: 'Windows', defaultArch: 'x64' };
  }

  const userAgent = navigator.userAgent.toLowerCase();
  const platform = (navigator as unknown as { userAgentData?: { platform?: string } }).userAgentData?.platform?.toLowerCase() || navigator.platform.toLowerCase();

  if (platform.includes('mac') || userAgent.includes('macintosh') || userAgent.includes('mac os')) {
    return { os: 'macos', displayName: 'macOS', defaultArch: 'Universal' };
  }

  if (platform.includes('linux') || userAgent.includes('linux')) {
    return { os: 'linux', displayName: 'Linux', defaultArch: 'x86_64' };
  }

  // Default to Windows
  const isArm = userAgent.includes('arm') || userAgent.includes('arm64');
  return {
    os: 'windows',
    displayName: 'Windows',
    defaultArch: isArm ? 'ARM64' : 'x64',
  };
}
