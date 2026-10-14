import React, { useState, useEffect, useMemo } from 'react';
import { productConfig } from './config/product.config';
import { detectUserOS } from './utils/platformDetector';
import { fetchLiveReleases } from './services/githubReleases';
import { Navbar } from './components/common/Navbar/Navbar';
import { Hero } from './components/sections/Hero/Hero';
import { Features } from './components/sections/Features/Features';
import { Preview } from './components/sections/Preview/Preview';
import { DownloadCenter } from './components/sections/DownloadCenter/DownloadCenter';
import { SystemRequirements } from './components/sections/SystemRequirements/SystemRequirements';
import { InstallationGuide } from './components/sections/InstallationGuide/InstallationGuide';
import { FAQ } from './components/sections/FAQ/FAQ';
import { Footer } from './components/common/Footer/Footer';

export const App: React.FC = () => {
  const { product, features, previews, systemRequirements, installationGuides, faqList } = productConfig;
  const [releases, setReleases] = useState(productConfig.releases);

  useEffect(() => {
    fetchLiveReleases(productConfig.releases).then((liveReleases) => {
      setReleases(liveReleases);
    });
  }, []);

  // Detect visitor's operating system
  const userOSInfo = useMemo(() => detectUserOS(), []);

  // Find primary recommended release for visitor's OS
  const recommendedRelease = useMemo(() => {
    return (
      releases.find((rel) => rel.os === userOSInfo.os && rel.isPrimaryForPlatform) ||
      releases.find((rel) => rel.os === userOSInfo.os) ||
      releases[0]
    );
  }, [releases, userOSInfo.os]);

  const latestVersion = releases[0]?.version || 'v1.0.0';

  return (
    <div className="app-layout">
      {/* Accessibility Skip Link */}
      <a href="#main-content" className="skip-link">
        Loncat langsung ke konten utama
      </a>

      {/* Top Navigation */}
      <Navbar product={product} latestVersion={latestVersion} />

      {/* Main Content Landmarks */}
      <main id="main-content">
        <Hero product={product} detectedOS={userOSInfo} recommendedRelease={recommendedRelease} />
        <Features features={features} />
        <Preview previews={previews} />
        <DownloadCenter product={product} releases={releases} userOS={userOSInfo.os} />
        <SystemRequirements requirements={systemRequirements} />
        <InstallationGuide guides={installationGuides} initialOS={userOSInfo.os} />
        <FAQ faqList={faqList} product={product} />
      </main>

      {/* Footer */}
      <Footer product={product} latestVersion={latestVersion} />
    </div>
  );
};

export default App;
