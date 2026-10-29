import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Download, GitFork as Github, Database, Workflow, BookOpen, Check, Copy, Monitor, Maximize2, Code2, GitPullRequest, ShieldCheck, Plus, Terminal, Cpu, HardDrive } from 'lucide-react';
import { productConfig } from '../../config/product.config';
import type { FeatureItem } from '../../types/product.types';
import { ContentDialog } from './ContentDialog';
import { currentRelease, repositoryUrl } from '../../config/site.config';

const modules = [
  { id: 'dataset-profiling', title: 'Kenali data Anda.', text: 'Buka CSV, Excel, JSON, atau Parquet. Pahami tipe kolom, distribusi, dan kualitas data sebelum melangkah lebih jauh.', icon: Database, label: 'Dataset & profiling' },
  { id: 'node-editor-graph', title: 'Rangkai eksperimen.', text: 'Hubungkan node menjadi pipeline machine learning. Validasi alurnya, jalankan eksperimen, lalu ekspor hasilnya.', icon: Workflow, label: 'Visual machine learning' },
  { id: 'academic-research', title: 'Temukan konteksnya.', text: 'Jelajahi literatur ilmiah dan susun landasan penelitian. Hubungkan temuan data dengan pertanyaan yang lebih besar.', icon: BookOpen, label: 'Riset literatur' },
];

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
  const [previewIndex, setPreviewIndex] = useState(0);
  const [imageOpen, setImageOpen] = useState(false);
  const [imageTarget, setImageTarget] = useState<'hero' | 'gallery'>('gallery');
  const [guideTab, setGuideTab] = useState<'installer' | 'source'>('installer');
  const [helpOpen, setHelpOpen] = useState(false);
  const { features, previews, systemRequirements, installationGuides, faqList } = productConfig;
  const activePreview = previews[previewIndex];
  const guide = installationGuides[guideTab === 'installer' ? 0 : 1];
  const requirements = systemRequirements[0];
  const openPreview = (target: 'hero' | 'gallery') => { setImageTarget(target); setImageOpen(true); };

  return <>
    <section id="hero" className="new-hero">
      <div className="hero-light" aria-hidden="true" />
      <div className="site-container hero-inner">
        <a className="release-link" href={`${repositoryUrl}/releases/tag/${currentRelease.version}`} target="_blank" rel="noopener noreferrer"><span className="release-dot" />DORA {currentRelease.version}<span className="release-divider" />Kenali rilis terbaru<ArrowUpRight size={14} /></a>
        <h1>Dari data mentah,<br />menjadi <span>arah riset.</span></h1>
        <p className="hero-lead">Eksplorasi dataset, rangkai eksperimen machine learning,<br className="desktop-break" /> dan temukan literatur. Dalam satu ruang kerja desktop.</p>
        <div className="hero-actions"><a className="button primary" href="#downloads"><Download size={17} />Unduh untuk Windows</a><a className="button secondary" href="#preview">Lihat aplikasinya<ArrowRight size={16} /></a></div>
        <div className="hero-caption"><span>Windows 10/11 · x64</span><span className="caption-dot" />Pemrosesan dataset lokal<span className="caption-dot" /><a href={`${repositoryUrl}/blob/main/LICENSE`} target="_blank" rel="noopener noreferrer">Lisensi MIT</a></div>
        <div className="hero-product-frame"><div className="product-frame-top"><span><img src="/brand/about-brand-mark.png" width="18" height="18" alt="" />DORA workspace</span><button onClick={() => openPreview('hero')} aria-label="Perbesar screenshot Overview"><Maximize2 size={14} /><span>Perbesar</span></button></div><div className="hero-screenshot"><Screenshot src="/screenshots/overview.png" title="Tampilan asli Overview aplikasi desktop DORA" eager /></div></div>
      </div>
    </section>

    <div className="capability-strip site-container"><span>Ruang untuk seluruh proses riset Anda</span><div><span><Database size={17} />Data profiling</span><span><Workflow size={17} />Visual ML</span><span><Code2 size={17} />Python notebook</span><span><BookOpen size={17} />Academic research</span></div></div>

    <section id="features" className="site-container content-section">
      <div className="section-heading"><div><span className="eyebrow">Satu alur. Banyak kemungkinan.</span><h2>Lebih sedikit berpindah.<br /><span>Lebih banyak menemukan.</span></h2></div><p>Dari memahami data sampai menyusun argumen ilmiah. DORA menghubungkan alat yang Anda perlukan dalam satu aplikasi.</p></div>
      <div className="module-grid">{modules.map((module, index) => { const Icon = module.icon; const item = features.find(f => f.id === module.id); return <article className="module-card" key={module.id}><div className="module-top"><Icon size={25} /><span>0{index + 1}</span></div><span className="module-label">{module.label}</span><h3>{module.title}</h3><p>{module.text}</p>{item && <button className="text-button" onClick={() => setFeature(item)}>Jelajahi modul<Plus size={16} /></button>}</article>; })}</div>
      <details className="all-features"><summary>Semua kemampuan DORA<span>{features.length} modul<Plus size={18} /></span></summary><div className="feature-directory">{features.map(item => <button key={item.id} onClick={() => setFeature(item)}>{cleanProductText(item.title)}<ArrowUpRight size={16} /></button>)}</div></details>
    </section>

    <section className="workflow-section"><div className="site-container workflow-layout"><div className="workflow-copy"><span className="eyebrow">Eksperimen, dengan alur yang jelas</span><h2>Susun idenya.<br /><span>Hubungkan nodenya.</span></h2><p>Visual Node Editor membantu Anda merancang pipeline machine learning tanpa kehilangan gambaran besarnya.</p><ul className="check-list"><li><Check size={16} />Deteksi task dan validasi graph</li><li><Check size={16} />Pemrosesan di latar belakang & cache analisis</li><li><Check size={16} />Ekspor Python, notebook, model, CSV, dan ZIP</li></ul><button className="text-button" onClick={() => setFeature(features.find(f => f.id === 'node-editor-graph') || null)}>Kenali Node Editor<ArrowUpRight size={17} /></button></div><div className="workflow-image"><div className="image-caption"><Workflow size={16} /><span>Visual Node Editor</span><span className="caption-spacer" />DORA desktop</div><Screenshot src="/screenshots/node-editor.png" title="Screenshot asli Visual Node Editor DORA dengan kanvas pipeline machine learning" /></div></div></section>

    <section id="preview" className="site-container content-section preview-section">
      <div className="section-heading centered-heading"><span className="eyebrow">Lihat sebelum mengunduh</span><h2>Bukan sekadar cerita.<br /><span>Ini ruang kerjanya.</span></h2><p>Tangkapan layar asli DORA. Pilih tampilan untuk menjelajahi alur kerja aplikasi.</p></div>
      <div className="preview-picker"><label htmlFor="preview-select">Jelajahi tampilan</label><select id="preview-select" value={previewIndex} onChange={event => setPreviewIndex(Number(event.target.value))}>{previews.map((item, index) => <option value={index} key={item.id}>{item.tag || item.title}</option>)}</select><button className="icon-button" onClick={() => openPreview('gallery')} aria-label="Perbesar screenshot terpilih"><Maximize2 size={18} /></button></div>
      <div className="gallery-frame"><Screenshot key={activePreview.id} src={activePreview.imageSrc || '/screenshots/overview.png'} title={cleanProductText(activePreview.title)} /></div>
      <div className="gallery-caption"><span><strong>{activePreview.tag}</strong>{cleanProductText(activePreview.caption)}</span><span>{String(previewIndex + 1).padStart(2, '0')} / {previews.length}</span></div>
    </section>

    <section id="downloads" className="download-section"><div className="site-container download-layout"><div><span className="eyebrow">Ruang kerja berikutnya, di desktop Anda</span><h2>Siap menemukan<br /><span>cerita di balik data?</span></h2><p>Unduh installer resmi DORA dari GitHub Releases. Untuk Windows 10 dan 11, arsitektur 64-bit.</p><div className="download-facts"><span><Monitor size={17} />Windows x64</span><span><HardDrive size={17} />{currentRelease.size}</span><span><Code2 size={17} />MIT License</span></div><a className="inline-link" href={`${repositoryUrl}/releases`} target="_blank" rel="noopener noreferrer">Lihat semua rilis dan source code<ArrowUpRight size={16} /></a></div><div className="download-card"><div className="download-card-heading"><span className="download-icon"><Download size={24} /></span><span><strong>DORA untuk Windows</strong><small>Installer resmi · {currentRelease.version}</small></span><span className="release-label">Rilis terbaru</span></div><div className="download-file">{currentRelease.filename}</div><dl className="release-facts"><div><dt>Versi</dt><dd>{currentRelease.version}</dd></div><div><dt>Ukuran</dt><dd>{currentRelease.size}</dd></div><div><dt>Aset diperbarui</dt><dd>{currentRelease.updated}</dd></div></dl><a className="button primary full-width" href={currentRelease.url}><Download size={17} />Unduh installer Windows<ArrowUpRight size={16} /></a><p className="download-origin"><ShieldCheck size={14} />File disediakan oleh GitHub Releases</p><details className="checksum-details"><summary>Verifikasi integritas file<Plus size={16} /></summary><CopyControl value={currentRelease.sha256} label="SHA256" /><CopyControl value={`Get-FileHash -Algorithm SHA256 "${currentRelease.filename}"`} label="Perintah verifikasi PowerShell" /><p>Cocokkan hasil perintah dengan SHA256 di atas sebelum menjalankan installer.</p></details><button className="download-help" onClick={() => setHelpOpen(true)}>Muncul peringatan saat mengunduh?</button></div></div></section>

    <section id="requirements" className="site-container requirements-section-new"><div><span className="eyebrow">Sebelum mulai</span><h2>Pastikan perangkat<br />Anda siap.</h2><p>Spesifikasi dasar dari dokumentasi produk.</p></div><div className="spec-grid"><div><Monitor size={20} /><span>Sistem operasi</span><strong>Windows 10 / 11</strong><small>64-bit · Windows 10 build 19041+</small></div><div><Cpu size={20} /><span>Memori</span><strong>{requirements.ramMinimum}</strong><small>8 GB atau lebih disarankan</small></div><div><HardDrive size={20} /><span>Penyimpanan</span><strong>500 MB</strong><small>Ditambah ruang untuk dataset Anda</small></div><div><Code2 size={20} /><span>Runtime</span><strong>Siap dari installer</strong><small>Tidak perlu memasang Python terpisah</small></div></div></section>

    <section id="installation" className="site-container content-section installation-new"><div className="section-heading"><div><span className="eyebrow">Dari unduh ke eksplorasi</span><h2>Mulai dari sini.</h2></div><p>Pilih installer untuk langsung memakai DORA, atau jalankan source code di lingkungan pengembangan Anda.</p></div><div className="segmented-control" role="group" aria-label="Metode instalasi"><button aria-pressed={guideTab === 'installer'} onClick={() => setGuideTab('installer')}><Monitor size={16} />Windows Installer</button><button aria-pressed={guideTab === 'source'} onClick={() => setGuideTab('source')}><Terminal size={16} />Dari source code</button></div><ol className="installation-steps">{guide.steps.map((step, index) => <li key={`${guideTab}-${step.step}`}><span className="step-index">0{index + 1}</span><div><h3>{cleanProductText(step.title)}</h3><p>{index === 2 && guideTab === 'installer' ? 'Ikuti setup wizard sampai selesai. Installer menyiapkan aplikasi, shortcut, dan uninstaller di perangkat Anda.' : cleanProductText(step.description)}</p>{guideTab === 'source' && index === 1 && <CopyControl value="cd Data-Overview-Research-Assistant" label="Masuk direktori proyek" />}{step.codeSnippet && <CopyControl value={step.codeSnippet} label={`Perintah langkah ${index + 1}`} />}</div></li>)}</ol><p className="installation-note"><ShieldCheck size={18} />Analisis dataset utama berlangsung di perangkat. Pencarian online dan fitur Gemini opsional membutuhkan koneksi internet.</p></section>

    <section id="github" className="site-container repository-section"><div className="repository-panel"><div className="repo-heading"><Github size={32} /><span>Kode terbuka. Ruang kolaborasi.</span></div><div className="repo-layout"><div><h2>Kenali yang bekerja<br /><span>di balik layar.</span></h2><p>Jelajahi kode DORA, ikuti perubahannya, atau bantu membuatnya lebih baik. Semuanya dimulai dari repositori yang sama.</p><a className="button secondary" href={repositoryUrl} target="_blank" rel="noopener noreferrer"><Github size={17} />Buka repositori<ArrowUpRight size={17} /></a></div><div className="repo-links"><a href={`${repositoryUrl}/releases`} target="_blank" rel="noopener noreferrer"><span><Download size={20} /><span><strong>Catatan rilis</strong><small>Lihat perubahan di setiap versi</small></span></span><ArrowUpRight size={19} /></a><a href={`${repositoryUrl}/issues`} target="_blank" rel="noopener noreferrer"><span><GitPullRequest size={20} /><span><strong>Masukan & kendala</strong><small>Diskusikan lewat GitHub Issues</small></span></span><ArrowUpRight size={19} /></a><a href="/tim"><span><Code2 size={20} /><span><strong>Tim pengembang</strong><small>Kenali orang di balik DORA</small></span></span><ArrowUpRight size={19} /></a></div></div><div className="repo-path"><span>NezzyGremory / Data-Overview-Research-Assistant</span><span>Public repository · MIT</span></div></div></section>

    <section id="faq" className="site-container faq-new"><div><span className="eyebrow">Hal yang mungkin Anda tanyakan</span><h2>Sebelum melangkah<br />lebih jauh.</h2><p>Informasi penggunaan, privasi, dan dukungan DORA.</p><a className="inline-link" href={`${repositoryUrl}/issues`} target="_blank" rel="noopener noreferrer">Ada pertanyaan lain?<ArrowUpRight size={16} /></a></div><div className="faq-list">{faqList.map(faq => <details key={faq.id}><summary>{cleanProductText(faq.question)}<Plus size={18} /></summary><p>{cleanProductText(faq.answer)}</p></details>)}</div></section>

    {feature && <ContentDialog title={cleanProductText(feature.title)} onClose={() => setFeature(null)}><span className="dialog-scope">{feature.executionScope}</span><p>{cleanProductText(feature.description)}</p><ul className="dialog-capabilities">{feature.capabilities?.map(item => <li key={item}><Check size={16} /><span>{cleanProductText(item)}</span></li>)}</ul></ContentDialog>}
    {imageOpen && <ContentDialog title={imageTarget === 'hero' ? 'Overview · DORA desktop' : cleanProductText(activePreview.title)} onClose={() => setImageOpen(false)} wide><Screenshot src={imageTarget === 'hero' ? '/screenshots/overview.png' : activePreview.imageSrc || '/screenshots/overview.png'} title={imageTarget === 'hero' ? 'Overview DORA' : cleanProductText(activePreview.title)} eager /></ContentDialog>}
    {helpOpen && <ContentDialog title="Memeriksa unduhan DORA" onClose={() => setHelpOpen(false)}><p>Installer yang belum dikenal browser atau Windows dapat menampilkan peringatan. Periksa sumber dan integritas file sebelum melanjutkan.</p><ol className="help-steps"><li>Pastikan file berasal dari repositori resmi <strong>NezzyGremory/Data-Overview-Research-Assistant</strong>.</li><li>Cocokkan nama file dan versi dengan aset di GitHub Releases.</li><li>Hitung SHA256 menggunakan perintah di bawah, lalu bandingkan hasilnya dengan checksum yang tercantum.</li><li>Jika hash berbeda atau Anda ragu, jangan jalankan file. Laporkan melalui GitHub Issues.</li></ol><CopyControl value={`Get-FileHash -Algorithm SHA256 "${currentRelease.filename}"`} label="Perintah PowerShell" /><a className="button secondary" href={`${repositoryUrl}/releases/tag/${currentRelease.version}`} target="_blank" rel="noopener noreferrer">Periksa rilis resmi<ArrowUpRight size={16} /></a></ContentDialog>}
  </>;
}
