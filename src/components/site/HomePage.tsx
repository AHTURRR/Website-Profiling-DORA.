import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Download, GitFork as Github, Database, Workflow, BookOpen, Check, Copy, Monitor, Maximize2, Code2, GitPullRequest, ShieldCheck, Plus, Terminal, Cpu, HardDrive, Layers, Puzzle, FileCode2, Wrench, ChevronLeft, ChevronRight, Activity } from 'lucide-react';
import { productConfig } from '../../config/product.config';
import type { FeatureItem } from '../../types/product.types';
import { ContentDialog } from './ContentDialog';
import { currentRelease, repositoryUrl, websiteRepositoryUrl } from '../../config/site.config';
import { addonCategories, verifiedAddons, addonsCatalogMeta, type AddonCategoryId } from '../../config/addons.config';

const modules = [
  { id: 'dataset-profiling', title: 'Kenali data Anda.', text: 'Buka CSV, Excel, JSON, atau Parquet. Pahami tipe kolom, distribusi, dan kualitas data sebelum melangkah lebih jauh.', icon: Database, label: 'Dataset & profiling' },
  { id: 'node-editor-graph', title: 'Rangkai eksperimen.', text: 'Hubungkan node menjadi pipeline machine learning. Validasi alurnya, jalankan eksperimen, lalu ekspor hasilnya.', icon: Workflow, label: 'Visual machine learning' },
  { id: 'academic-research', title: 'Temukan konteksnya.', text: 'Jelajahi literatur ilmiah dan susun landasan penelitian. Hubungkan temuan data dengan pertanyaan yang lebih besar.', icon: BookOpen, label: 'Riset literatur' },
];

const heroViews = [
  {
    id: 'overview',
    label: 'Overview',
    stage: '01 · Memuat & memantau data',
    src: '/screenshots/overview.png',
    title: 'Overview · Ruang kerja utama DORA',
    summary: 'Ringkasan kesiapan dataset aktif, daftar periksa alur riset 5 tahap, dan pintasan langsung ke modul analisis.',
  },
  {
    id: 'dataset',
    label: 'Dataset',
    stage: '02 · Memahami struktur data',
    src: '/screenshots/dataset-preview.png',
    title: 'Dataset · Pratinjau tabel & profil kolom',
    summary: 'Pemeriksaan baris tabel interaktif, deteksi tipe kolom, nilai kosong, outlier, serta sidik jari SHA-256 lokal.',
  },
  {
    id: 'node-editor',
    label: 'Node Editor',
    stage: '03 · Merangkai eksperimen ML',
    src: '/screenshots/node-editor.png',
    title: 'Node Editor · Pipeline machine learning visual',
    summary: 'Kanvas blok visual untuk menyusun pra-pemrosesan, validasi silang, pelatihan model, dan ekspor 5 format.',
  },
  {
    id: 'research',
    label: 'Research',
    stage: '04 · Menelusuri literatur & laporan',
    src: '/screenshots/academic-research.png',
    title: 'Academic Research · Penelusuran paper & SINTA/DOAJ',
    summary: 'Pencarian publikasi ilmiah berbasis konteks dataset dengan pemeriksaan akreditasi SINTA 1-6 dan indeks DOAJ/Scopus.',
  },
] as const;

const researchFlowSteps = [
  { step: '01', label: 'Memuat data', detail: 'CSV, Excel, JSON, Parquet, atau katalog Kaggle & Hugging Face', viewIndex: 0 },
  { step: '02', label: 'Memahami data', detail: 'Profil kolom, audit missing value vs angka 0, outlier & korelasi', viewIndex: 1 },
  { step: '03', label: 'Merangkai eksperimen', detail: 'Visual Node Editor, notebook Python interaktif & kandidat ML', viewIndex: 2 },
  { step: '04', label: 'Menelusuri literatur', detail: 'Pencarian paper akademik, indeks SINTA/Scopus & celah riset', viewIndex: 3 },
  { step: '05', label: 'Menyusun hasil', detail: 'Kompilasi temuan data, model, dan literatur ke laporan PDF A4', viewIndex: 3 },
] as const;

const categoryIcons: Record<AddonCategoryId, typeof Puzzle> = {
  plugin: Puzzle,
  integration: Layers,
  template: FileCode2,
  companion: Wrench,
};

const previewCategories = [
  { id: 'all', label: 'Semua (14)' },
  { id: 'workspace', label: 'Workspace', tags: ['Overview', 'Scale', 'Privacy'] },
  { id: 'data', label: 'Dataset & Profiling', tags: ['Search', 'Loader', 'Dataset', 'Missing', 'Outlier', 'Distribution', 'Cleaning'] },
  { id: 'ml', label: 'Machine Learning', tags: ['Node Editor', 'Intelligence', 'Editor'] },
  { id: 'research', label: 'Riset Literatur', tags: ['Research'] },
] as const;

type PreviewCategoryId = (typeof previewCategories)[number]['id'];

const cleanProductText = (text: string) => text.replace(/v2\.0\.0/g, currentRelease.version).replace(/v2\.0\b/g, 'v6.0');

function CopyControl({ value, label }: { value: string; label: string }) {
  const [status, setStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const copy = async () => {
    try { await navigator.clipboard.writeText(value); setStatus('copied'); }
    catch { setStatus('error'); }
  };
  return <div className="copy-control"><div className="copy-heading"><span>{label}</span><button onClick={copy} className="copy-button" aria-label={`Salin ${label}`}>{status === 'copied' ? <Check size={15} /> : <Copy size={15} />}{status === 'copied' ? 'Tersalin' : 'Salin'}</button></div><code tabIndex={0}>{value}</code><span className="copy-status" role="status">{status === 'error' ? 'Tidak dapat menyalin. Pilih teks di atas dan salin secara manual.' : status === 'copied' ? `${label} berhasil disalin.` : ''}</span></div>;
}

function Screenshot({ src, title, eager = false }: { src: string; title: string; eager?: boolean }) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement>(null);
  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth > 0) setLoaded(true);
  }, [src]);
  return failed ? <div className="image-fallback"><Monitor size={32} /><p>Pratinjau belum dapat dimuat.</p><a href={repositoryUrl} target="_blank" rel="noopener noreferrer">Lihat aplikasi di repositori</a></div> : <div className={`screenshot-content ${loaded ? 'is-loaded' : ''}`}><img ref={imageRef} src={src} alt={title} width="1920" height="1080" loading={eager ? 'eager' : 'lazy'} onLoad={() => setLoaded(true)} onError={() => setFailed(true)} />{!loaded && <span className="screenshot-loading" role="status">Memuat pratinjau aplikasi…</span>}</div>;
}

export function HomePage() {
  const [feature, setFeature] = useState<FeatureItem | null>(null);
  const [heroViewIndex, setHeroViewIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
  const [previewIndex, setPreviewIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState<PreviewCategoryId>('all');
  const [scanPulse, setScanPulse] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [imageTarget, setImageTarget] = useState<'hero' | 'gallery'>('gallery');
  const [guideTab, setGuideTab] = useState<'installer' | 'source'>('installer');
  const [helpOpen, setHelpOpen] = useState(false);
  const { features, previews, systemRequirements, installationGuides, faqList } = productConfig;
  const activeHeroView = heroViews[heroViewIndex];
  const activePreview = previews[previewIndex];
  const guide = installationGuides[guideTab === 'installer' ? 0 : 1];
  const requirements = systemRequirements[0];
  const openPreview = (target: 'hero' | 'gallery') => { setImageTarget(target); setImageOpen(true); };

  const prevPreview = () => {
    setPreviewIndex(prev => (prev > 0 ? prev - 1 : previews.length - 1));
    setScanPulse(p => p + 1);
  };

  const nextPreview = () => {
    setPreviewIndex(prev => (prev < previews.length - 1 ? prev + 1 : 0));
    setScanPulse(p => p + 1);
  };

  const handleCategorySelect = (catId: PreviewCategoryId) => {
    setActiveCategory(catId);
    if (catId === 'all') return;
    const cat = previewCategories.find(c => c.id === catId);
    if (!cat || !('tags' in cat)) return;
    const firstMatch = previews.findIndex(p => (cat.tags as readonly string[]).includes(p.tag));
    if (firstMatch !== -1) {
      setPreviewIndex(firstMatch);
      setScanPulse(p => p + 1);
    }
  };

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (document.activeElement?.tagName === 'INPUT' || document.activeElement?.tagName === 'TEXTAREA' || document.activeElement?.tagName === 'SELECT') return;
      if (e.key === 'ArrowLeft') {
        setPreviewIndex(prev => (prev > 0 ? prev - 1 : previews.length - 1));
        setScanPulse(p => p + 1);
      }
      if (e.key === 'ArrowRight') {
        setPreviewIndex(prev => (prev < previews.length - 1 ? prev + 1 : 0));
        setScanPulse(p => p + 1);
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [previews.length]);

  return <>
    <section id="hero" className="new-hero">
      <div className="hero-light" aria-hidden="true" />
      <div className="hero-orbital-backdrop" aria-hidden="true">
        <div className="hero-reticle hero-reticle-left">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" opacity="0.22" className="hero-reticle-spin" />
            <circle cx="200" cy="200" r="130" stroke="currentColor" strokeWidth="1" strokeDasharray="14 12" opacity="0.32" className="hero-reticle-rev" />
            <circle cx="200" cy="200" r="80" stroke="currentColor" strokeWidth="0.8" strokeDasharray="2 6" opacity="0.18" />
            <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.2" />
            <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.2" />
          </svg>
        </div>
        <div className="hero-reticle hero-reticle-right">
          <svg viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="0.8" strokeDasharray="6 10" opacity="0.22" className="hero-reticle-rev" />
            <circle cx="200" cy="200" r="120" stroke="currentColor" strokeWidth="1" strokeDasharray="16 8" opacity="0.3" className="hero-reticle-spin" />
            <circle cx="200" cy="200" r="60" stroke="currentColor" strokeWidth="0.8" opacity="0.2" />
            <line x1="200" y1="10" x2="200" y2="390" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.2" />
            <line x1="10" y1="200" x2="390" y2="200" stroke="currentColor" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.2" />
          </svg>
        </div>

        {/* HUD Telemetry Accents */}
        <div className="hero-telemetry-tag tag-top-left">
          <span className="telemetry-bracket">[</span>
          <span className="telemetry-dot" />
          <code>ENGINE: AIRGAPPED LOCAL</code>
          <span className="telemetry-bracket">]</span>
        </div>
        <div className="hero-telemetry-tag tag-top-right">
          <span className="telemetry-bracket">[</span>
          <span className="telemetry-dot" />
          <code>RUNTIME: PYTORCH · SKLEARN</code>
          <span className="telemetry-bracket">]</span>
        </div>
        <div className="hero-telemetry-tag tag-bottom-left">
          <span className="telemetry-bracket">[</span>
          <code>GRAPH: REACTIVE PIPELINE</code>
          <span className="telemetry-bracket">]</span>
        </div>
        <div className="hero-telemetry-tag tag-bottom-right">
          <span className="telemetry-bracket">[</span>
          <code>PRIVACY: ZERO-TELEMETRY</code>
          <span className="telemetry-bracket">]</span>
        </div>
      </div>
      <div className="site-container hero-inner">
        <a className="release-link" href={`${repositoryUrl}/releases/tag/${currentRelease.version}`} target="_blank" rel="noopener noreferrer"><span className="release-dot" />DORA {currentRelease.version}<span className="release-divider" />Kenali rilis terbaru<ArrowUpRight size={14} /></a>
        <h1>Dari data mentah,<br />menjadi <span className="headline-gradient">arah riset.</span></h1>
        <p className="hero-lead">Eksplorasi dataset, rangkai eksperimen machine learning,<br className="desktop-break" /> dan temukan literatur ilmiah. Dalam satu ruang kerja desktop.</p>
        <div className="hero-actions"><a className="button primary" href="#downloads"><Download size={17} />Unduh untuk Windows</a><a className="button secondary" href="#preview">Jelajahi {productConfig.previews.length} tampilan<ArrowRight size={16} /></a></div>
        <div className="hero-caption"><span>Windows 10/11 · x64</span><span className="caption-dot" />Pemrosesan dataset lokal<span className="caption-dot" /><a href={`${repositoryUrl}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">Lisensi MIT</a></div>

        <div className="hero-product-stage">
          <div className="hero-view-bar" role="toolbar" aria-label="Pilih tampilan ruang kerja DORA di hero">
            <div className="hero-view-pill-cluster">
              <div className="hero-view-cluster-label">
                <span className="cluster-beacon" aria-hidden="true" />
                <span>Ruang Kerja:</span>
              </div>
              <div className="hero-view-cluster-divider" aria-hidden="true" />
              <div className="hero-view-tabs">
                {heroViews.map((view, idx) => (
                  <button
                    key={view.id}
                    type="button"
                    className="hero-view-tab"
                    aria-pressed={heroViewIndex === idx}
                    onClick={() => { setHeroViewIndex(idx); setActiveStep(idx); }}
                  >
                    <span className="hero-view-tab-num">0{idx + 1}</span>
                    <span>{view.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-product-frame">
            <div className="hero-frame-border-beam" aria-hidden="true" />
            <div className="product-frame-top">
              <div className="frame-window-title">
                <span className="frame-decor-dots" aria-hidden="true">
                  <i className="dot-red" />
                  <i className="dot-yellow" />
                  <i className="dot-green" />
                </span>
                <img src="/brand/about-brand-mark.png" width="16" height="16" alt="" />
                <strong>DORA Desktop</strong>
                <span className="frame-version-pill">v{currentRelease.version}</span>
                <span className="frame-stage-badge">{activeHeroView.stage}</span>
              </div>
              <button type="button" onClick={() => openPreview('hero')} aria-label={`Perbesar screenshot ${activeHeroView.label}`}>
                <Maximize2 size={13} />
                <span>Perbesar layar</span>
              </button>
            </div>
            <div className="hero-screenshot">
              <div className="hero-scan-beam" key={heroViewIndex} aria-hidden="true" />
              <Screenshot key={activeHeroView.id} src={activeHeroView.src} title={activeHeroView.title} eager />
            </div>
            <div className="product-frame-footer">
              <p><strong>{activeHeroView.label}:</strong> {activeHeroView.summary}</p>
              <span>Tangkapan layar asli DORA {currentRelease.version}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="flow-strip-section" aria-label="Ilustrasi alur kerja riset di DORA">
      <div className="site-container flow-strip-inner">
        <div className="flow-strip-header">
          <span className="flow-context-tag">Ilustrasi alur kerja konseptual di DORA</span>
          <p>Pilih tahap untuk melihat contoh tampilan ruang kerja yang berkaitan di atas.</p>
        </div>
        <ol className="flow-steps-grid">
          {researchFlowSteps.map((item, idx) => {
            const isHighlighted = activeStep === idx;
            return (
              <li key={item.step} className={`flow-step-item ${isHighlighted ? 'is-active' : ''}`}>
                <button
                  type="button"
                  className="flow-step-trigger"
                  aria-pressed={isHighlighted}
                  onClick={() => { setHeroViewIndex(item.viewIndex); setActiveStep(idx); }}
                  aria-label={`Tampilkan ruang kerja untuk tahap ${item.label}`}
                >
                  <span className="flow-step-num">{item.step}</span>
                  <strong>{item.label}</strong>
                  <small>{item.detail}</small>
                </button>
              </li>
            );
          })}
        </ol>
      </div>
    </section>

    <section id="features" className="site-container content-section">
      <div className="section-heading"><div><span className="eyebrow">Satu alur. Banyak kemungkinan.</span><h2>Lebih sedikit berpindah.<br /><span>Lebih banyak menemukan.</span></h2></div><p>Dari memahami data sampai menyusun argumen ilmiah. DORA menghubungkan alat yang Anda perlukan dalam satu aplikasi.</p></div>
      <div className="module-grid">{modules.map((module, index) => { const Icon = module.icon; const item = features.find(f => f.id === module.id); return <article className="module-card" key={module.id}><div className="module-top"><Icon size={25} /><span>0{index + 1}</span></div><span className="module-label">{module.label}</span><h3>{module.title}</h3><p>{module.text}</p>{item && <button className="text-button" onClick={() => setFeature(item)}>Jelajahi modul<Plus size={16} /></button>}</article>; })}</div>
      <details className="all-features"><summary>Semua kemampuan bawaan DORA<span>{features.length} modul utama<Plus size={18} /></span></summary><div className="feature-directory">{features.map(item => <button key={item.id} onClick={() => setFeature(item)}>{cleanProductText(item.title)}<ArrowUpRight size={16} /></button>)}</div></details>
    </section>

    <section className="workflow-section">
      <div className="site-container">
        {/* Motion Graphic SVG Pipeline Banner */}
        <div className="node-pipeline-motion-banner" aria-hidden="true">
          <div className="pipeline-banner-header">
            <span className="pipeline-live-tag"><span className="pulse-dot" /> DORA VISUAL GRAPH ENGINE // PIPELINE TOPOLOGY</span>
            <span className="pipeline-latency">LATENCY: 0ms · 100% LOCAL COMPUTE</span>
          </div>
          <svg className="pipeline-graph-svg" viewBox="0 0 960 110" fill="none" preserveAspectRatio="xMidYMid meet">
            {/* Animated Laser Connections */}
            <path d="M 180 55 C 240 55, 240 55, 300 55" className="wire-track" />
            <path d="M 180 55 C 240 55, 240 55, 300 55" className="wire-laser wire-laser-1" />

            <path d="M 440 55 C 500 55, 500 55, 560 55" className="wire-track" />
            <path d="M 440 55 C 500 55, 500 55, 560 55" className="wire-laser wire-laser-2" />

            <path d="M 700 55 C 760 55, 760 55, 820 55" className="wire-track" />
            <path d="M 700 55 C 760 55, 760 55, 820 55" className="wire-laser wire-laser-3" />

            {/* Node 1: Ingestion */}
            <g className="node-group" transform="translate(40, 20)">
              <rect width="140" height="70" rx="8" className="node-box" />
              <circle cx="18" cy="24" r="4.5" className="node-port" />
              <text x="32" y="28" className="node-title">01 · DATASET</text>
              <text x="18" y="50" className="node-sub">CSV, Excel, Parquet</text>
            </g>

            {/* Node 2: Preprocess */}
            <g className="node-group" transform="translate(300, 20)">
              <rect width="140" height="70" rx="8" className="node-box" />
              <circle cx="18" cy="24" r="4.5" className="node-port" />
              <text x="32" y="28" className="node-title">02 · PROFILING</text>
              <text x="18" y="50" className="node-sub">Missing, Outlier, Split</text>
            </g>

            {/* Node 3: Model */}
            <g className="node-group" transform="translate(560, 20)">
              <rect width="140" height="70" rx="8" className="node-box active-node" />
              <circle cx="18" cy="24" r="4.5" className="node-port active-port" />
              <text x="32" y="28" className="node-title">03 · ML ENGINE</text>
              <text x="18" y="50" className="node-sub">XGBoost, RF, Sklearn</text>
            </g>

            {/* Node 4: Export */}
            <g className="node-group" transform="translate(820, 20)">
              <rect width="140" height="70" rx="8" className="node-box" />
              <circle cx="18" cy="24" r="4.5" className="node-port" />
              <text x="32" y="28" className="node-title">04 · REPORT</text>
              <text x="18" y="50" className="node-sub">PDF A4, Notebook</text>
            </g>
          </svg>
        </div>

        <div className="workflow-layout">
          <div className="workflow-copy">
            <span className="eyebrow">Eksperimen, dengan alur yang jelas</span>
            <h2>Susun idenya.<br /><span>Hubungkan nodenya.</span></h2>
            <p>Visual Node Editor membantu Anda merancang pipeline machine learning tanpa kehilangan gambaran besarnya.</p>
            <ul className="check-list">
              <li><Check size={16} />Deteksi task dan validasi graph</li>
              <li><Check size={16} />Pemrosesan di latar belakang & cache analisis</li>
              <li><Check size={16} />Ekspor Python, notebook, model, CSV, dan ZIP</li>
            </ul>
            <button className="text-button" onClick={() => setFeature(features.find(f => f.id === 'node-editor-graph') || null)}>Kenali Node Editor<ArrowUpRight size={17} /></button>
          </div>
          <div className="workflow-image">
            <div className="image-caption"><Workflow size={16} /><span>Visual Node Editor</span><span className="caption-spacer" />DORA desktop</div>
            <Screenshot src="/screenshots/node-editor.png" title="Screenshot asli Visual Node Editor DORA dengan kanvas pipeline machine learning" />
          </div>
        </div>
      </div>
    </section>

    <section id="preview" className="site-container content-section preview-section" aria-labelledby="preview-heading">
      <div className="section-heading centered-heading">
        <span className="eyebrow"><Activity size={13} className="motion-pulse-icon" /> Teater Eksplorasi Visual</span>
        <h2 id="preview-heading">Bukan sekadar cerita.<br /><span>Ini ruang kerjanya.</span></h2>
        <p>Tangkapan layar asli resolusi penuh dari DORA. Jelajahi 14 ruang kerja dan modul analisis secara interaktif.</p>
      </div>

      <div className="preview-theater">
        {/* Category filtering chips */}
        <div className="preview-filter-strip" role="tablist" aria-label="Kategori pratinjau DORA">
          {previewCategories.map(cat => (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={activeCategory === cat.id}
              className={`preview-filter-pill ${activeCategory === cat.id ? 'is-active' : ''}`}
              onClick={() => handleCategorySelect(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Cybernetic Motion Graphic Frame */}
        <div className="preview-hud-wrapper" key={scanPulse}>
          <div className="hud-corner top-left" aria-hidden="true" />
          <div className="hud-corner top-right" aria-hidden="true" />
          <div className="hud-corner bottom-left" aria-hidden="true" />
          <div className="hud-corner bottom-right" aria-hidden="true" />
          <div className="preview-scanline-laser" aria-hidden="true" />

          {/* HUD Top Bar */}
          <div className="preview-hud-top">
            <div className="hud-stream-status">
              <span className="hud-beacon" aria-hidden="true" />
              <span className="hud-code-label">STREAM // VIEW [{String(previewIndex + 1).padStart(2, '0')}/{String(previews.length).padStart(2, '0')}]</span>
            </div>
            <div className="hud-center-title">
              <span className="hud-tag-pill">{activePreview.tag}</span>
              <strong>{cleanProductText(activePreview.title)}</strong>
            </div>
            <div className="hud-actions">
              <span className="hud-metric">1920×1080 NATIVE</span>
              <button
                type="button"
                className="hud-expand-btn"
                onClick={() => openPreview('gallery')}
                aria-label={`Perbesar screenshot ${activePreview.title} layar penuh`}
              >
                <Maximize2 size={14} />
                <span>Perbesar</span>
              </button>
            </div>
          </div>

          {/* Main Screenshot Screen */}
          <div className="preview-screen-viewport">
            <Screenshot key={activePreview.id} src={activePreview.imageSrc || '/screenshots/overview.png'} title={cleanProductText(activePreview.title)} />
          </div>

          {/* HUD Controls Bottom Bar */}
          <div className="preview-hud-bottom">
            <button
              type="button"
              className="hud-nav-btn prev"
              onClick={prevPreview}
              aria-label="Tampilan sebelumnya (Panah Kiri)"
            >
              <ChevronLeft size={18} />
              <span>Sebelumnya</span>
            </button>

            <div className="hud-progress-track" aria-hidden="true">
              <div
                className="hud-progress-fill"
                style={{ width: `${((previewIndex + 1) / previews.length) * 100}%` }}
              />
            </div>

            <button
              type="button"
              className="hud-nav-btn next"
              onClick={nextPreview}
              aria-label="Tampilan berikutnya (Panah Kanan)"
            >
              <span>Berikutnya</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Thumbnail Selector Ribbon */}
        <div className="preview-thumb-strip" role="tablist" aria-label="Daftar thumbnail screenshot">
          {previews.map((item, index) => {
            const isCurrent = previewIndex === index;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isCurrent}
                className={`preview-thumb-btn ${isCurrent ? 'is-active' : ''}`}
                onClick={() => {
                  setPreviewIndex(index);
                  setScanPulse(p => p + 1);
                }}
                title={item.title}
              >
                <span className="thumb-index">{String(index + 1).padStart(2, '0')}</span>
                <span className="thumb-label">{item.tag || item.title}</span>
              </button>
            );
          })}
        </div>

        {/* Details & Telemetry Specs */}
        <div className="preview-meta-panel">
          <div className="preview-meta-copy">
            <span className="preview-badge-lead">{activePreview.badge || 'Modul DORA'}</span>
            <p>{cleanProductText(activePreview.caption)}</p>
          </div>
          {activePreview.details && activePreview.details.length > 0 && (
            <ul className="preview-capabilities-chips">
              {activePreview.details.map((detail, idx) => (
                <li key={idx}><Check size={13} /><span>{detail}</span></li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>

    <section id="addons" className="addons-section" aria-labelledby="addons-heading">
      <div className="site-container">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Ekstensi & ekosistem opsional</span>
            <h2 id="addons-heading">Add-ons.<br /><span>Perluas saat dibutuhkan.</span></h2>
          </div>
          <p>DORA dirancang lengkap sejak instalasi pertama. Katalog Add-ons menampung paket opsional yang terverifikasi untuk kebutuhan riset khusus.</p>
        </div>

        <div className="addons-category-strip" aria-label="Jenis Add-ons yang didukung">
          {addonCategories.map(cat => {
            const Icon = categoryIcons[cat.id];
            return (
              <div key={cat.id} className="addon-category-item">
                <div className="addon-category-head">
                  <Icon size={18} />
                  <strong>{cat.label}</strong>
                </div>
                <p>{cat.description}</p>
                <span className="addon-format-tag">{cat.exampleFormat}</span>
              </div>
            );
          })}
        </div>

        {verifiedAddons.length > 0 ? (
          <div className="addons-catalog-grid">
            {verifiedAddons.map(item => (
              <article key={item.id} className="addon-card">
                <div className="addon-card-top">
                  <span className="addon-type-badge">{item.category}</span>
                  <span className="addon-compat">DORA {item.doraVersionCompatibility}</span>
                </div>
                <h3>{item.name}</h3>
                <p>{item.summary}</p>
                <div className="addon-usage">
                  <strong>Cara penggunaan:</strong>
                  <span>{item.usageGuide}</span>
                </div>
                <div className="addon-actions">
                  <a className="button secondary" href={item.repositoryUrl} target="_blank" rel="noopener noreferrer">
                    Repositori resmi<ArrowUpRight size={15} />
                  </a>
                  {item.guideUrl && (
                    <a className="inline-link" href={item.guideUrl} target="_blank" rel="noopener noreferrer">
                      Panduan<ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="addons-empty-state" role="region" aria-label="Status katalog Add-ons">
            <div className="addons-empty-main">
              <span className="addons-status-pill">Status katalog · Diperiksa {addonsCatalogMeta.lastChecked}</span>
              <h3>Belum ada Add-ons eksternal terverifikasi saat ini.</h3>
              <p>
                Kami memeriksa repositori publik pengembang dan dokumentasi rilis secara langsung. Hingga saat ini belum ada repositori plugin, integrasi, template, atau perangkat pendamping terpisah yang diterbitkan sebagai paket add-on DORA mandiri.
              </p>
              <p className="addons-builtin-note">
                Seluruh fitur utama seperti pencarian dataset <strong>Kaggle & Hugging Face</strong>, literatur <strong>OpenAlex / Crossref / Semantic Scholar / Scopus / SINTA / DOAJ</strong>, serta dukungan pustaka opsional di Node Editor dan Notebook (<code>xgboost</code>, <code>lightgbm</code>, <code>imbalanced-learn</code>, <code>optuna</code>, <code>shap</code>) sudah tersedia langsung di dalam aplikasi desktop DORA tanpa perlu mengunduh add-on terpisah.
              </p>
              <div className="addons-empty-actions">
                <a className="button secondary" href={addonsCatalogMeta.mainRepositoryUrl} target="_blank" rel="noopener noreferrer">
                  <Github size={16} />Periksa repositori utama<ArrowUpRight size={15} />
                </a>
                <a className="inline-link" href={addonsCatalogMeta.submissionIssuesUrl} target="_blank" rel="noopener noreferrer">
                  Usulkan atau daftarkan add-on melalui GitHub Issues<ArrowUpRight size={15} />
                </a>
              </div>
            </div>
            <div className="addons-verification-box">
              <h4>Kriteria verifikasi katalog</h4>
              <p>Setiap item baru wajib melewati empat pemeriksaan sebelum ditampilkan di katalog:</p>
              <ul className="check-list">
                {addonsCatalogMeta.verificationCriteria.map(criterion => (
                  <li key={criterion}><Check size={15} /><span>{criterion}</span></li>
                ))}
              </ul>
              <dl className="addons-schema-preview">
                <div><dt>Skema data katalog</dt><dd>Nama · Kegunaan · Jenis · Kompatibilitas versi · Panduan · Tautan resmi</dd></div>
                <div><dt>Sumber diperiksa</dt><dd>GitHub NezzyGremory & dokumentasi DORA {currentRelease.version}</dd></div>
              </dl>
            </div>
          </div>
        )}
      </div>
    </section>

    <section id="downloads" className="download-section"><div className="site-container download-layout"><div><span className="eyebrow">Ruang kerja berikutnya, di desktop Anda</span><h2>Siap menemukan<br /><span>cerita di balik data?</span></h2><p>Unduh installer resmi DORA dari GitHub Releases. Untuk Windows 10 dan 11, arsitektur 64-bit.</p><div className="download-facts"><span><Monitor size={17} />Windows x64</span><span><HardDrive size={17} />{currentRelease.size}</span><span><Code2 size={17} />MIT License</span></div><a className="inline-link" href={`${repositoryUrl}/releases`} target="_blank" rel="noopener noreferrer">Lihat semua rilis dan source code<ArrowUpRight size={16} /></a></div><div className="download-card"><div className="download-card-heading"><span className="download-icon"><Download size={24} /></span><span><strong>DORA untuk Windows</strong><small>Installer resmi · {currentRelease.version}</small></span><span className="release-label">Rilis terbaru</span></div><div className="download-file">{currentRelease.filename}</div><dl className="release-facts"><div><dt>Versi</dt><dd>{currentRelease.version}</dd></div><div><dt>Ukuran</dt><dd>{currentRelease.size}</dd></div><div><dt>Aset diperbarui</dt><dd>{currentRelease.updated}</dd></div></dl><a className="button primary full-width" href={currentRelease.url}><Download size={17} />Unduh installer Windows<ArrowUpRight size={16} /></a><p className="download-origin"><ShieldCheck size={14} />File disediakan oleh GitHub Releases</p><details className="checksum-details"><summary>Verifikasi integritas file<Plus size={16} /></summary><CopyControl value={currentRelease.sha256} label="SHA256" /><CopyControl value={`Get-FileHash -Algorithm SHA256 "${currentRelease.filename}"`} label="Perintah verifikasi PowerShell" /><p>Cocokkan hasil perintah dengan SHA256 di atas sebelum menjalankan installer.</p></details><button className="download-help" onClick={() => setHelpOpen(true)}>Muncul peringatan saat mengunduh?</button></div></div></section>

    <section id="requirements" className="site-container requirements-section-new"><div><span className="eyebrow">Sebelum mulai</span><h2>Pastikan perangkat<br />Anda siap.</h2><p>Spesifikasi dasar dari dokumentasi produk.</p></div><div className="spec-grid"><div><Monitor size={20} /><span>Sistem operasi</span><strong>Windows 10 / 11</strong><small>64-bit · Windows 10 build 19041+</small></div><div><Cpu size={20} /><span>Memori</span><strong>{requirements.ramMinimum}</strong><small>8 GB atau lebih disarankan</small></div><div><HardDrive size={20} /><span>Penyimpanan</span><strong>500 MB</strong><small>Ditambah ruang untuk dataset Anda</small></div><div><Code2 size={20} /><span>Runtime</span><strong>Siap dari installer</strong><small>Tidak perlu memasang Python terpisah</small></div></div></section>

    <section id="installation" className="site-container content-section installation-new"><div className="section-heading"><div><span className="eyebrow">Dari unduh ke eksplorasi</span><h2>Mulai dari sini.</h2></div><p>Pilih installer untuk langsung memakai DORA, atau jalankan source code di lingkungan pengembangan Anda.</p></div><div className="segmented-control" role="group" aria-label="Metode instalasi"><button aria-pressed={guideTab === 'installer'} onClick={() => setGuideTab('installer')}><Monitor size={16} />Windows Installer</button><button aria-pressed={guideTab === 'source'} onClick={() => setGuideTab('source')}><Terminal size={16} />Dari source code</button></div><ol className="installation-steps">{guide.steps.map((step, index) => <li key={`${guideTab}-${step.step}`}><span className="step-index">0{index + 1}</span><div><h3>{cleanProductText(step.title)}</h3><p>{index === 2 && guideTab === 'installer' ? 'Ikuti setup wizard sampai selesai. Installer menyiapkan aplikasi, shortcut, dan uninstaller di perangkat Anda.' : cleanProductText(step.description)}</p>{guideTab === 'source' && index === 1 && <CopyControl value="cd Data-Overview-Research-Assistant" label="Masuk direktori proyek" />}{step.codeSnippet && <CopyControl value={step.codeSnippet} label={`Perintah langkah ${index + 1}`} />}</div></li>)}</ol><p className="installation-note"><ShieldCheck size={18} />Analisis dataset utama berlangsung di perangkat. Pencarian online dan fitur Gemini opsional membutuhkan koneksi internet.</p></section>

    <section id="github" className="site-container repository-section">
      <div className="repository-panel">
        <div className="repo-heading">
          <Github size={32} />
          <span>Repositori Utama DORA · Kode sumber aplikasi desktop</span>
        </div>
        <div className="repo-layout">
          <div>
            <h2>Kenali yang bekerja<br /><span>di balik layar.</span></h2>
            <p>
              Bagian ini menautkan langsung ke repositori inti aplikasi desktop DORA (Python & PySide6), terpisah dari katalog Add-ons opsional. Jelajahi arsitektur modul, pelajari perubahan tiap rilis, atau laporkan temuan Anda.
            </p>
            <div className="repo-primary-actions">
              <a className="button primary" href={repositoryUrl} target="_blank" rel="noopener noreferrer"><Github size={17} />Buka repositori aplikasi<ArrowUpRight size={17} /></a>
              <a className="button secondary" href="/tim">Profil tim pengembang<ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="repo-links">
            <a href={repositoryUrl} target="_blank" rel="noopener noreferrer">
              <span><Code2 size={20} /><span><strong>Kode sumber utama</strong><small>Modul analyzer, ML graph engine, riset literatur, dan UI PySide6</small></span></span>
              <ArrowUpRight size={19} />
            </a>
            <a href={`${repositoryUrl}/releases`} target="_blank" rel="noopener noreferrer">
              <span><Download size={20} /><span><strong>Catatan rilis & installer</strong><small>Riwayat versi, perubahan fitur, dan paket unduhan resmi ({currentRelease.version})</small></span></span>
              <ArrowUpRight size={19} />
            </a>
            <a href={`${repositoryUrl}/issues`} target="_blank" rel="noopener noreferrer">
              <span><GitPullRequest size={20} /><span><strong>Pelaporan masalah (Issues)</strong><small>Sampaikan bug, kendala instalasi, atau usulan fitur baru</small></span></span>
              <ArrowUpRight size={19} />
            </a>
            <a href="/tim">
              <span><BookOpen size={20} /><span><strong>Tim pengembang Metriks Studio</strong><small>Kenali kontributor dan sumber kredit resmi di balik DORA</small></span></span>
              <ArrowRight size={19} />
            </a>
          </div>
        </div>
        <div className="repo-distinction-bar">
          <div>
            <span className="repo-distinction-label">Repositori Aplikasi Desktop (Inti)</span>
            <strong>NezzyGremory / Data-Overview-Research-Assistant</strong>
            <small>Python 3.13 · PySide6 · Lisensi MIT · Rilis {currentRelease.version}</small>
          </div>
          <div>
            <span className="repo-distinction-label">Repositori Website Profil Ini</span>
            <a href={websiteRepositoryUrl} target="_blank" rel="noopener noreferrer">
              AHTURRR / Website-Profiling-DORA.<ArrowUpRight size={14} />
            </a>
            <small>React 19 · TypeScript · Pusat informasi, pratinjau, dan dokumentasi web</small>
          </div>
        </div>
      </div>
    </section>

    <section id="faq" className="site-container faq-new"><div><span className="eyebrow">Hal yang mungkin Anda tanyakan</span><h2>Sebelum melangkah<br />lebih jauh.</h2><p>Informasi penggunaan, privasi, dan dukungan DORA.</p><a className="inline-link" href={`${repositoryUrl}/issues`} target="_blank" rel="noopener noreferrer">Ada pertanyaan lain?<ArrowUpRight size={16} /></a></div><div className="faq-list">{faqList.map(faq => <details key={faq.id}><summary>{cleanProductText(faq.question)}<Plus size={18} /></summary><p>{cleanProductText(faq.answer)}</p></details>)}</div></section>

    {feature && <ContentDialog title={cleanProductText(feature.title)} onClose={() => setFeature(null)}><span className="dialog-scope">{feature.executionScope}</span><p>{cleanProductText(feature.description)}</p><ul className="dialog-capabilities">{feature.capabilities?.map(item => <li key={item}><Check size={16} /><span>{cleanProductText(item)}</span></li>)}</ul></ContentDialog>}
    {imageOpen && <ContentDialog title={imageTarget === 'hero' ? activeHeroView.title : cleanProductText(activePreview.title)} onClose={() => setImageOpen(false)} wide><Screenshot src={imageTarget === 'hero' ? activeHeroView.src : activePreview.imageSrc || '/screenshots/overview.png'} title={imageTarget === 'hero' ? activeHeroView.title : cleanProductText(activePreview.title)} eager /></ContentDialog>}
    {helpOpen && <ContentDialog title="Memeriksa unduhan DORA" onClose={() => setHelpOpen(false)}><p>Installer yang belum dikenal browser atau Windows dapat menampilkan peringatan. Periksa sumber dan integritas file sebelum melanjutkan.</p><ol className="help-steps"><li>Pastikan file berasal dari repositori resmi <strong>NezzyGremory/Data-Overview-Research-Assistant</strong>.</li><li>Cocokkan nama file dan versi dengan aset di GitHub Releases.</li><li>Hitung SHA256 menggunakan perintah di bawah, lalu bandingkan hasilnya dengan checksum yang tercantum.</li><li>Jika hash berbeda atau Anda ragu, jangan jalankan file. Laporkan melalui GitHub Issues.</li></ol><CopyControl value={`Get-FileHash -Algorithm SHA256 "${currentRelease.filename}"`} label="Perintah PowerShell" /><a className="button secondary" href={`${repositoryUrl}/releases/tag/${currentRelease.version}`} target="_blank" rel="noopener noreferrer">Periksa rilis resmi<ArrowUpRight size={16} /></a></ContentDialog>}
  </>;
}
