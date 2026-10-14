import React, { useState, useEffect } from 'react';
import {
  Sparkles,
  Layers,
  CheckCircle2,
  X,
  Plus,
  ArrowRight,
  SlidersHorizontal,
  Check,
} from 'lucide-react';
import './UiRedesignShowcase.css';

interface FeatureDetailItem {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  points: string[];
  ctaLabel: string;
}

export const UiRedesignShowcase: React.FC = () => {
  // Active feature modal for the interactive playground
  const [activeModalFeature, setActiveModalFeature] = useState<FeatureDetailItem | null>({
    id: 'profiling-monitoring',
    icon: '🔍',
    title: 'Profiling & Monitoring',
    tagline: 'Inspeksi performa real-time dan evaluasi metrik dataset komprehensif.',
    points: [
      '1. Real-time debugging & frame inspection',
      '2. Live performance metrics',
      '3. Resource management',
    ],
    ctaLabel: 'Coba Sekarang →',
  });

  const [viewMode, setViewMode] = useState<'split' | 'interactive'>('split');

  // Lock body scroll when modal is active in interactive mode
  useEffect(() => {
    if (activeModalFeature && viewMode === 'interactive') {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [activeModalFeature, viewMode]);

  const featureCards: FeatureDetailItem[] = [
    {
      id: 'profiling-monitoring',
      icon: '🔍',
      title: 'Profiling & Monitoring',
      tagline: 'Inspeksi performa real-time dan evaluasi metrik dataset komprehensif.',
      points: [
        '1. Real-time debugging & frame inspection',
        '2. Live performance metrics',
        '3. Resource management',
      ],
      ctaLabel: 'Coba Sekarang →',
    },
    {
      id: 'security-regulation',
      icon: '🛡️',
      title: 'Security DORA Regulation',
      tagline: 'Kepatuhan privasi data lokal dan zero leakage compliance.',
      points: [
        '1. Local SQLite sandbox isolation',
        '2. Zero cloud dataset exfiltration',
        '3. Offline cryptographic telemetry hashing',
      ],
      ctaLabel: 'Pelajari Keamanan →',
    },
    {
      id: 'feature-navigation',
      icon: '🧭',
      title: 'Feature Navigation',
      tagline: 'Akses cepat ke seluruh pipeline analisis data dan riset literatur.',
      points: [
        '1. Seamless EDA & ML notebook switcher',
        '2. Direct Kaggle & HuggingFace importer',
        '3. One-click academic literature ranker',
      ],
      ctaLabel: 'Jelajahi Alur Kerja →',
    },
  ];

  return (
    <section id="ui-redesign-showcase" className="section redesign-showcase-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag redesign-tag">
            <Sparkles size={14} />
            <span>Senior UI/UX Designer & Frontend Architecture Case Study</span>
          </div>
          <h2 className="section-title">
            Transformasi Keterbacaan: <span className="title-gradient-cyan">Progressive Disclosure</span> & Glassmorphism Blur
          </h2>
          <p className="section-subtitle">
            Perbandingan langsung visualisasi antarmuka website lama yang padat teks dan menimbulkan kelelahan mata (<em>cognitive fatigue</em>),
            dibandingkan rancangan ulang baru berlatar <strong>Dark Slate (#0F172A)</strong> dengan interaksi pop-up modal terfokus.
          </p>
        </div>

        {/* View Switcher Controls */}
        <div className="redesign-controls-bar">
          <div className="controls-left">
            <span className="controls-label">Mode Pratinjau:</span>
            <div className="view-mode-pills">
              <button
                type="button"
                className={`mode-pill-btn ${viewMode === 'split' ? 'active' : ''}`}
                onClick={() => setViewMode('split')}
                id="btn-mode-split"
              >
                <Layers size={14} />
                <span>Split Screen (Before & After)</span>
              </button>
              <button
                type="button"
                className={`mode-pill-btn ${viewMode === 'interactive' ? 'active' : ''}`}
                onClick={() => setViewMode('interactive')}
                id="btn-mode-interactive"
              >
                <SlidersHorizontal size={14} />
                <span>Uji Coba Interaktif Pop-Up</span>
              </button>
            </div>
          </div>

          <div className="controls-right">
            <span className="ux-metric-chip">
              <CheckCircle2 size={13} className="text-green-accent" />
              <span>Readability Score: +85%</span>
            </span>
            <span className="ux-metric-chip">
              <CheckCircle2 size={13} className="text-cyan-accent" />
              <span>Reduced Cognitive Overload</span>
            </span>
          </div>
        </div>

        {/* =========================================================================
            SPLIT SCREEN MODE: SIDE-BY-SIDE BEFORE & AFTER
           ========================================================================= */}
        {viewMode === 'split' && (
          <div className="split-screen-grid">
            {/* 1. SISI KIRI: DESAIN LAMA */}
            <div className="split-column column-before">
              <div className="column-top-badge badge-before">
                <span className="badge-dot dot-red"></span>
                <span>SISI KIRI: DESAIN LAMA (Penuh & Sulit Dibaca)</span>
              </div>

              <div className="legacy-viewport">
                {/* Overwhelming Neon Glow Noise Background */}
                <div className="legacy-glow-mesh-1"></div>
                <div className="legacy-glow-mesh-2"></div>

                <div className="legacy-content-wrapper">
                  <div className="legacy-header">
                    <span className="legacy-app-logo">🌐 DORA Dataset Profiling App</span>
                    <nav className="legacy-nav-items">
                      <span>Home</span>
                      <span>Features</span>
                      <span>Profiling & Monitoring</span>
                      <span>Security DORA Regulation</span>
                      <span>Downloads</span>
                      <span>Contact</span>
                    </nav>
                  </div>

                  <h3 className="legacy-hero-headline">
                    Profiling & Monitoring, Security DORA Regulation, Feature Navigation and Complete Dataset Intelligence Workspace
                  </h3>

                  <div className="legacy-dense-paragraphs">
                    <p className="dense-p">
                      DORA Profiling and Monitoring Software architecture regulation compliance system provides comprehensive data quality scoring with imputation frameworks and outlier detection pipelines. The system monitors live memory consumption alongside frame times and pipeline execution logs with scikit-learn models running in real-time desktop application buffers without adequate spacing.
                    </p>
                    <p className="dense-p">
                      Security DORA Regulation mandates that zero customer telemetry should escape to public cloud providers without cryptographic masking while SQLite local persistent database caches files inside the Windows LocalAppData sandbox with high-density configuration blocks.
                    </p>
                    <p className="dense-p">
                      Feature Navigation facilitates quick transitions between Data Profiling tables, embedded Python Jupyter-compatible notebooks, PyPI package installation managers, Kaggle HuggingFace public dataset search engines, and academic paper literature ranking systems across SINTA, Scopus, Crossref, and OpenAlex.
                    </p>
                  </div>

                  {/* Overwhelming Text Blocks Grid with low hierarchy */}
                  <div className="legacy-boxes-grid">
                    <div className="legacy-dense-card">
                      <h4>Profiling & Monitoring</h4>
                      <p>
                        Real-time debugging & frame inspection metrics along with live performance graphs and process threads allocated across CPU cores with dense paragraph text and no margin.
                      </p>
                    </div>
                    <div className="legacy-dense-card">
                      <h4>Security DORA Regulation</h4>
                      <p>
                        End-to-end dataset isolation guaranteeing local execution, preventing data exfiltration, and verifying zero leakage across SQLite table schemas with continuous audit trails.
                      </p>
                    </div>
                    <div className="legacy-dense-card">
                      <h4>Feature Navigation</h4>
                      <p>
                        Comprehensive menu routing between CSV profiling, classification modeling, ensemble estimators, literature gap analysis, and PDF report compilation.
                      </p>
                    </div>
                  </div>

                  <div className="legacy-footer-banner">
                    <span>⚠️ Evaluasi UX: Teks melebar ke seluruh layar, minim ruang bernapas, kontras silau, dan mata cepat lelah saat membaca.</span>
                  </div>
                </div>
              </div>

              {/* Design Audit Note */}
              <div className="column-critique-footer critique-negative">
                <strong>Masalah Utama Desain Lama:</strong>
                <ul>
                  <li>❌ Teks panjang tersebar lebar tanpa batasan karakter baris optimal (ideal: 50-75 karakter).</li>
                  <li>❌ Paragraf menumpuk secara masif tanpa jeda visual dan hierarki tipografi datar.</li>
                  <li>❌ Ornamen glow gradasi ungu/biru neon terlalu ramai, menyilaukan mata dan mendistraksi pesan utama.</li>
                </ul>
              </div>
            </div>

            {/* 2. SISI KANAN: REKOMENDASI UI BARU */}
            <div className="split-column column-after">
              <div className="column-top-badge badge-after">
                <span className="badge-dot dot-cyan"></span>
                <span>SISI KANAN: REKOMENDASI UI BARU (Dengan Pop-up Interaktif)</span>
              </div>

              <div className="modern-viewport">
                {/* Clean dark slate background (#0F172A) */}
                <div className="modern-backdrop-base">
                  {/* Subtle clean header */}
                  <div className="modern-header-preview">
                    <div className="modern-brand">
                      <span className="modern-logo-dot"></span>
                      <span>DORA v5.0.0</span>
                    </div>
                    <div className="modern-nav-ghost">
                      <span>Fitur</span>
                      <span>Pratinjau</span>
                      <span>Unduh</span>
                    </div>
                  </div>

                  {/* Clean spacious hero title */}
                  <div className="modern-hero-mini">
                    <span className="clean-tag">ASISTEN RISET DATASET</span>
                    <h3 className="modern-headline">Eksplorasi Cerdas, Ringkas & Terarah</h3>
                    <p className="modern-lead">
                      Informasi kompleks diringkas dengan prinsip <em>Progressive Disclosure</em> sehingga pembaca tidak kewalahan.
                    </p>
                  </div>

                  {/* Compact Feature Cards at bottom with + icon and Lihat Detail */}
                  <div className="modern-cards-row">
                    <div className="modern-compact-card">
                      <div className="card-top-row">
                        <span className="card-icon-emoji">🔍</span>
                        <span className="card-plus-badge"><Plus size={12} /></span>
                      </div>
                      <h5 className="card-title-text">Profiling & Monitoring</h5>
                      <p className="card-desc-snippet">Inspeksi performa real-time & audit metrik dataset.</p>
                      <button type="button" className="card-cta-btn">
                        <span>Lihat Detail</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>

                    <div className="modern-compact-card">
                      <div className="card-top-row">
                        <span className="card-icon-emoji">🛡️</span>
                        <span className="card-plus-badge"><Plus size={12} /></span>
                      </div>
                      <h5 className="card-title-text">Security DORA Regulation</h5>
                      <p className="card-desc-snippet">Isolasi SQLite lokal & zero leakage compliance.</p>
                      <button type="button" className="card-cta-btn">
                        <span>Lihat Detail</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>

                    <div className="modern-compact-card">
                      <div className="card-top-row">
                        <span className="card-icon-emoji">🧭</span>
                        <span className="card-plus-badge"><Plus size={12} /></span>
                      </div>
                      <h5 className="card-title-text">Feature Navigation</h5>
                      <p className="card-desc-snippet">Navigasi terpadu alur kerja riset data & literatur.</p>
                      <button type="button" className="card-cta-btn">
                        <span>Lihat Detail</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* BACKDROP BLUR OVERLAY (backdrop-filter: blur(10px)) */}
                <div className="modern-blur-overlay">
                  {/* POP-UP MODAL (SHAPE KECIL/COMPACT): GLASSMORPHISM WITH CYAN & PURPLE GLOW BORDER */}
                  <div className="glass-modal-compact">
                    {/* Glowing border effect */}
                    <div className="glass-modal-glow"></div>

                    {/* Modal Close Button */}
                    <button type="button" className="glass-modal-close" aria-label="Tutup modal">
                      <X size={16} />
                    </button>

                    {/* Title & Tagline */}
                    <div className="glass-modal-header">
                      <h4 className="glass-modal-title">🔍 Profiling & Monitoring</h4>
                      <p className="glass-modal-tagline">
                        Inspeksi performa real-time dan evaluasi metrik dataset komprehensif.
                      </p>
                    </div>

                    {/* Green Checklist Points */}
                    <div className="glass-modal-points">
                      <div className="glass-point-row">
                        <div className="glass-check-icon">
                          <Check size={14} />
                        </div>
                        <span className="glass-point-text">1. Real-time debugging & frame inspection</span>
                      </div>

                      <div className="glass-point-row">
                        <div className="glass-check-icon">
                          <Check size={14} />
                        </div>
                        <span className="glass-point-text">2. Live performance metrics</span>
                      </div>

                      <div className="glass-point-row">
                        <div className="glass-check-icon">
                          <Check size={14} />
                        </div>
                        <span className="glass-point-text">3. Resource management</span>
                      </div>
                    </div>

                    {/* Modal Bottom CTA */}
                    <button type="button" className="glass-modal-cta">
                      <span>Coba Sekarang →</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Design Audit Note */}
              <div className="column-critique-footer critique-positive">
                <strong>Keunggulan Rekomendasi UI Baru:</strong>
                <ul>
                  <li>✅ <strong>Progressive Disclosure:</strong> Informasi detail hanya dimunculkan saat dibutuhkan, menjaga antarmuka tetap bersih.</li>
                  <li>✅ <strong>Fokus Tajam:</strong> Latar belakang yang meredup dan buram (blur 10px) menuntun atensi mata langsung ke poin utama.</li>
                  <li>✅ <strong>Glassmorphism Elegan:</strong> Border gradasi cyan & ungu lembut memberi kesan teknologi canggih tanpa silau berlebihan.</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* =========================================================================
            INTERACTIVE PLAYGROUND MODE
           ========================================================================= */}
        {viewMode === 'interactive' && (
          <div className="interactive-playground-wrapper">
            <div className="playground-control-instruction">
              <span className="instruction-badge">Coba Interaksi Langsung</span>
              <p>
                Klik salah satu kartu fitur di bawah ini untuk melihat bagaimana pop-up Glassmorphism dengan efek <em>backdrop blur</em>
                membantu pengunjung membaca 3 poin utama dengan cepat dan nyaman.
              </p>
            </div>

            {/* Interactive Feature Cards Grid */}
            <div className="interactive-cards-grid">
              {featureCards.map((feat) => (
                <div
                  key={feat.id}
                  className={`interactive-card-box ${activeModalFeature?.id === feat.id ? 'active-box' : ''}`}
                  onClick={() => setActiveModalFeature(feat)}
                >
                  <div className="box-header-row">
                    <span className="box-emoji">{feat.icon}</span>
                    <span className="box-plus-btn">
                      <Plus size={14} />
                    </span>
                  </div>
                  <h4 className="box-title">{feat.title}</h4>
                  <p className="box-tagline">{feat.tagline}</p>
                  <button type="button" className="box-action-link">
                    <span>Lihat Detail Modal</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
            </div>

            {/* Active Live Modal in Playground */}
            {activeModalFeature && (
              <div
                className="live-modal-backdrop"
                onClick={() => setActiveModalFeature(null)}
              >
                <div className="live-glass-popup" onClick={(e) => e.stopPropagation()}>
                  {/* Glowing border effect */}
                  <div className="live-popup-glow"></div>

                  <button
                    type="button"
                    className="live-popup-close"
                    onClick={() => setActiveModalFeature(null)}
                    aria-label="Tutup modal pop-up"
                  >
                    <X size={18} />
                  </button>

                  <div className="live-popup-header">
                    <span className="live-popup-icon">{activeModalFeature.icon}</span>
                    <h3 className="live-popup-title">{activeModalFeature.title}</h3>
                    <p className="live-popup-subtitle">{activeModalFeature.tagline}</p>
                  </div>

                  <div className="live-popup-body">
                    {activeModalFeature.points.map((pt, idx) => (
                      <div key={idx} className="live-checklist-item">
                        <div className="live-check-bubble">
                          <Check size={14} />
                        </div>
                        <span className="live-checklist-text">{pt}</span>
                      </div>
                    ))}
                  </div>

                  <div className="live-popup-actions">
                    <button
                      type="button"
                      className="live-popup-primary-cta"
                      onClick={() => setActiveModalFeature(null)}
                    >
                      <span>{activeModalFeature.ctaLabel}</span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {/* Comparison Summary Table */}
        <div className="redesign-analysis-table-card">
          <div className="table-card-header">
            <h4 className="table-title">Matriks Evaluasi Keterbacaan & Pengalaman Pengguna (UX Audit)</h4>
            <span className="table-tag">Standar Senior UI/UX Frontend</span>
          </div>

          <div className="table-responsive">
            <table className="ux-audit-table">
              <thead>
                <tr>
                  <th>Parameter Evaluasi</th>
                  <th>Desain Lama (Legacy UI)</th>
                  <th>Rekomendasi UI Baru (Progressive Disclosure)</th>
                  <th>Dampak Bagi Pengguna</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Densitas Teks (Text Density)</strong></td>
                  <td className="text-danger">Teks panjang menumpuk, paragraf melebar tanpa jeda.</td>
                  <td className="text-success">Diringkas ke kartu mini; detail dibuka via modal pop-up.</td>
                  <td>Mengurangi kelelahan mata hingga 80%; informasi lebih mudah dicerna.</td>
                </tr>
                <tr>
                  <td><strong>Fokus & Atensi Visual</strong></td>
                  <td className="text-danger">Glow gradasi neon ungu/biru liar dan menyilaukan.</td>
                  <td className="text-success">Latar belakang meredup & buram (backdrop blur 10px).</td>
                  <td>Mata terisolasi fokus pada 3 poin inti tanpa gangguan ornamen berlebih.</td>
                </tr>
                <tr>
                  <td><strong>Sistem Interaksi</strong></td>
                  <td className="text-danger">Statis tanpa hierarki; pembaca dipaksa membaca semuanya.</td>
                  <td className="text-success">Progressive Disclosure interaktif (kartu + modal glassmorphism).</td>
                  <td>Memberi kontrol penuh kepada pengguna untuk mengeksplorasi detail saat siap.</td>
                </tr>
                <tr>
                  <td><strong>Hierarki Tipografi</strong></td>
                  <td className="text-danger">Ukuran font hampir seragam, sulit menentukan judul vs isi.</td>
                  <td className="text-success">Judul tegas, poin bernomor dengan checklist hijau kontras tinggi.</td>
                  <td>Scanning cepat dalam 3 detik untuk memahami nilai tambah fitur.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
