import { useEffect, useRef, useState } from 'react';
import { Download, Menu, X, ArrowUpRight, Globe } from 'lucide-react';
import { doraWebUrl } from '../../config/site.config';
import { ThemeToggle } from './ThemeToggle';

export function Brand() {
  return <a href="/" className="site-brand" aria-label="DORA beranda"><img src="/brand/about-brand-mark.png" width="30" height="30" alt="" /><span>dora<span className="brand-dot">.</span></span></a>;
}

export function SiteHeader({ isTeam }: { isTeam: boolean }) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const before = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    const query = window.matchMedia('(min-width: 901px)');
    const onResize = () => { if (query.matches) setOpen(false); };
    document.addEventListener('keydown', onKey);
    query.addEventListener('change', onResize);
    return () => { document.body.style.overflow = before; document.removeEventListener('keydown', onKey); query.removeEventListener('change', onResize); };
  }, [open]);

  const links = [
    { href: '/#features', label: 'Fitur' },
    { href: '/#preview', label: 'Pratinjau' },
    { href: '/#addons', label: 'Add-ons' },
    { href: '/#github', label: 'Repositori' },
    { href: '/tim', label: 'Tim Pengembang' },
  ];

  return <header className="site-header"><div className="site-nav site-container">
    <Brand />
    <nav className="desktop-links" aria-label="Navigasi utama">
      {links.map(link => <a key={link.href} href={link.href} aria-current={isTeam && link.href === '/tim' ? 'page' : undefined}>{link.label}</a>)}
    </nav>
    <div className="nav-actions">
      <a className="nav-web-link" href={doraWebUrl} target="_blank" rel="noopener noreferrer" aria-label="Akses DORA Web Versi Beta (tab baru)" title="Akses DORA langsung via browser">
        <Globe size={15} />
        <span>DORA Web</span>
        <span className="badge-beta">Beta</span>
      </a>
      <ThemeToggle />
      <a href="/#downloads" className="button primary nav-download"><Download size={15} /><span>Unduh DORA</span></a>
      <button ref={toggleRef} className="icon-button mobile-toggle" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Tutup menu' : 'Buka menu'}>{open ? <X size={21} /> : <Menu size={21} />}</button>
    </div>
    {open && <nav className="mobile-navigation" id="mobile-navigation" aria-label="Navigasi seluler">
      {links.map(link => <a key={link.href} href={link.href} onClick={() => setOpen(false)} aria-current={isTeam && link.href === '/tim' ? 'page' : undefined}>{link.label}<ArrowUpRight size={17} /></a>)}
      <a href={doraWebUrl} target="_blank" rel="noopener noreferrer" onClick={() => setOpen(false)}>
        <span>Buka DORA Web</span>
        <span className="badge-beta">Beta</span>
        <ArrowUpRight size={17} />
      </a>
      <a href="/#installation" onClick={() => setOpen(false)}>Panduan instalasi<ArrowUpRight size={17} /></a>
      <a href="/#downloads" onClick={() => setOpen(false)}>Unduh untuk Windows<Download size={17} /></a>
    </nav>}
  </div></header>;
}

export function SiteFooter() {
  return <footer className="site-bottom"><div className="site-container"><div className="footer-main"><div><Brand /><p>Data Overview & Research Assistant.<br />Ruang kerja untuk rasa ingin tahu Anda.</p></div><div className="footer-link-group"><span>Produk</span><a href="/#features">Fitur DORA</a><a href="/#addons">Katalog Add-ons</a><a href="/#downloads">Unduh Windows</a><a href={doraWebUrl} target="_blank" rel="noopener noreferrer">DORA Web <span className="badge-beta">Beta</span></a><a href="/#requirements">Spesifikasi sistem</a></div><div className="footer-link-group"><span>Di balik DORA</span><a href="/tim">Tim pengembang</a><a href="/#github">Repositori utama & kode sumber</a><a href="/#addons">Katalog ekstensi resmi</a></div><div className="footer-link-group"><span>Informasi</span><a href="/#installation">Panduan instalasi</a><a href="/#faq">FAQ & privasi</a><a href="/#github">Catatan rilis & lisensi</a></div></div><div className="footer-baseline"><span>© 2026 Metriks Studio</span><span>Dibuat untuk eksplorasi. Dikembangkan bersama.</span><a href={typeof window !== 'undefined' && window.location.pathname === '/tim' ? '#main-content' : '/#hero'}>Kembali ke atas ↑</a></div></div></footer>;
}
