/**
 * Product Data Type Definitions
 * Sesuai arsitektur config-driven PRD
 */

export type SupportedOS = 'windows' | 'macos' | 'linux';

export interface ProductInfo {
  name: string;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  developer: {
    name: string;
    url?: string;
    copyrightYear: number;
  };
  license: {
    name: string;
    url?: string;
    isFree: boolean;
  };
  links: {
    repository?: string;
    documentation?: string;
    issues?: string;
    privacyPolicy?: string;
    releaseNotes?: string;
  };
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  benefitBadge?: string;
  executionScope?: 'Lokal (Offline)' | 'Lokal (Privat)' | 'Online (Internet)' | 'Hybrid (Lokal + Online)';
  icon: 'zap' | 'shield' | 'layers' | 'cpu' | 'sparkles' | 'sliders' | 'check-circle' | 'database' | 'search' | 'book-open' | 'file-text' | 'bar-chart' | 'globe';
}

export interface ProductPreviewImage {
  id: string;
  title: string;
  caption: string;
  aspectRatio: string;
  badge?: string;
  imageSrc?: string;
  tag: string;
  details: string[];
}

export interface ReleasePackage {
  id: string;
  os: SupportedOS;
  osName: string;
  architecture: string; // e.g. "x64 (64-bit)" | "ARM64" | "Universal"
  version: string;
  releaseDate: string;
  fileSize: string;
  filename: string;
  downloadUrl: string;
  checksumSha256?: string;
  isPrimaryForPlatform?: boolean;
  notes?: string;
  buttonLabel?: string;
}

export interface SystemRequirementsItem {
  osKey: SupportedOS;
  osName: string;
  minimumOs: string;
  recommendedOs: string;
  cpu: string;
  ramMinimum: string;
  ramRecommended: string;
  storage: string;
  network?: string;
  extraRuntime?: string;
}

export interface InstallationGuideByOS {
  os: SupportedOS;
  osName: string;
  steps: {
    step: number;
    title: string;
    description: string;
    codeSnippet?: string;
    warningNote?: string;
  }[];
  firstRunTip: string;
  troubleshootingTip: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'general' | 'installation' | 'support';
}

export interface ProductConfig {
  product: ProductInfo;
  features: FeatureItem[];
  previews: ProductPreviewImage[];
  releases: ReleasePackage[];
  systemRequirements: SystemRequirementsItem[];
  installationGuides: InstallationGuideByOS[];
  faqList: FaqItem[];
}
