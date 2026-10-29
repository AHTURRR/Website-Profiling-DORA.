import { useEffect } from 'react';
import { SiteHeader, SiteFooter } from './components/site/SiteChrome';
import { HomePage } from './components/site/HomePage';
import { TeamPage } from './components/site/TeamPage';
import { useSiteMotion } from './components/site/useSiteMotion';
import './styles/site.css';
import './styles/themes-motion.css';

export default function App() {
  useSiteMotion();
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  const isTeam = path === '/tim';
  const isNotFound = path !== '/' && !isTeam;

  useEffect(() => {
    document.title = isTeam ? 'Tim Pengembang | DORA · Metriks Studio' : isNotFound ? 'Halaman tidak ditemukan | DORA' : 'DORA · Dari data, menjadi arah riset';
    document.querySelector('meta[name="description"]')?.setAttribute('content', isTeam
      ? 'Kenali tim Metriks Studio di balik DORA. Nama dan peran bersumber dari kredit resmi aplikasi.'
      : 'DORA: aplikasi desktop untuk eksplorasi dataset, pipeline machine learning visual, dan riset literatur. Unduh installer Windows dari repositori resmi.');
  }, [isTeam, isNotFound]);

  return <div className="dora-site">
    <a className="skip-link" href="#main-content">Langsung ke konten</a>
    <SiteHeader isTeam={isTeam} />
    <main id="main-content">
      {isNotFound ? <section className="site-container not-found"><span className="eyebrow">404</span><h1>Halaman ini belum ada.</h1><a className="button primary" href="/">Kembali ke beranda</a></section> : isTeam ? <TeamPage /> : <HomePage />}
    </main>
    <SiteFooter />
  </div>;
}
