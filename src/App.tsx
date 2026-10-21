import React, { useMemo, useEffect } from 'react';
import { productConfig } from './config/product.config';
import { detectUserOS } from './utils/platformDetector';
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
  const { product, features, previews, systemRequirements, installationGuides, faqList, releases } = productConfig;

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

  // Smooth scroll reveal observer across all sections
  useEffect(() => {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.08,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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
