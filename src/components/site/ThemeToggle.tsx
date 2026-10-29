import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ThemeToggle() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() => document.documentElement.dataset.theme === 'light' ? 'light' : 'dark');
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'light' ? '#f7f6fb' : '#08090d');
    try { localStorage.setItem('dora-theme', theme); } catch { /* Pilihan tetap bekerja selama halaman terbuka ketika penyimpanan diblokir. */ }
  }, [theme]);
  const label = theme === 'dark' ? 'Aktifkan mode terang' : 'Aktifkan mode gelap';
  return <button className="icon-button theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={label} title={label} aria-pressed={theme === 'light'}><span className="theme-icon" key={theme}>{theme === 'dark' ? <Sun size={19} /> : <Moon size={19} />}</span></button>;
}
