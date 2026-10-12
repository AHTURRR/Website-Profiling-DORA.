import React, { useState } from 'react';
import { Download, Copy, Check, Shield, FileCode, Calendar, HardDrive, ExternalLink } from 'lucide-react';
import type { ReleasePackage, ProductInfo } from '../../../types/product.types';
import './DownloadCenter.css';

interface DownloadCenterProps {
  product: ProductInfo;
  releases: ReleasePackage[];
  userOS: string;
}

export const DownloadCenter: React.FC<DownloadCenterProps> = ({ product, releases }) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'installer' | 'source'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredReleases =
    selectedFilter === 'all'
      ? releases
      : selectedFilter === 'installer'
      ? releases.filter((rel) => rel.filename.endsWith('.exe'))
      : releases.filter((rel) => rel.filename.endsWith('.zip') || rel.filename.endsWith('.tar.gz'));

  const copyChecksum = (checksum: string, id: string) => {
    navigator.clipboard.writeText(checksum);
    setCopiedId(id);
    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  return (
    <section id="downloads" className="section download-center-section">
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-tag">
            <Download size={14} />
            <span>Pusat Unduhan Resmi</span>
          </div>
          <h2 className="section-title">Unduh Installer Resmi Terverifikasi</h2>
          <p className="section-subtitle">
            Dapatkan paket rilis resmi {product.name} langsung dari server distribusi resmi. Seluruh file dilengkapi
            checksum SHA256 untuk verifikasi integritas biner.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="download-filter-bar">
          <div className="filter-buttons" role="group" aria-label="Filter Berdasarkan Paket Rilis">
            <button
              type="button"
              className={`filter-btn ${selectedFilter === 'all' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('all')}
            >
              Semua Paket Rilis ({releases.length})
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedFilter === 'installer' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('installer')}
            >
              Windows Setup (.exe)
            </button>
            <button
              type="button"
              className={`filter-btn ${selectedFilter === 'source' ? 'active' : ''}`}
              onClick={() => setSelectedFilter('source')}
            >
              Source Code (.zip)
            </button>
          </div>

          {product.links.releaseNotes && (
            <a
              href={product.links.releaseNotes}
              target="_blank"
              rel="noopener noreferrer"
              className="changelog-link"
            >
              <ExternalLink size={14} />
              <span>Changelog & Catatan Rilis</span>
            </a>
          )}
        </div>

        {/* Releases Cards Grid */}
        <div className="releases-grid">
          {filteredReleases.map((release) => (
            <div
              key={release.id}
              className={`release-card ${release.isPrimaryForPlatform ? 'release-recommended' : ''}`}
              id={`release-${release.id}`}
            >
              {release.isPrimaryForPlatform && (
                <div className="release-badge-tag">Rekomendasi Utama Windows</div>
              )}

              <div className="release-card-header">
                <div>
                  <h3 className="release-title">{release.osName}</h3>
                  <div className="release-arch-pill">{release.architecture}</div>
                </div>
                <div className="release-version-pill">{release.version}</div>
              </div>

              {/* Release Metadata */}
              <div className="release-meta-list">
                <div className="meta-item">
                  <FileCode size={14} className="meta-icon" />
                  <span className="meta-label">Nama File:</span>
                  <code className="meta-code">{release.filename}</code>
                </div>
                <div className="meta-item">
                  <HardDrive size={14} className="meta-icon" />
                  <span className="meta-label">Ukuran:</span>
                  <span className="meta-value">{release.fileSize}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={14} className="meta-icon" />
                  <span className="meta-label">Tanggal Rilis:</span>
                  <span className="meta-value">{release.releaseDate}</span>
                </div>
              </div>

              {release.notes && <p className="release-notes-text">{release.notes}</p>}

              {/* SHA256 Checksum */}
              {release.checksumSha256 && (
                <div className="checksum-container">
                  <div className="checksum-header">
                    <span className="checksum-title">
                      <Shield size={12} />
                      <span>SHA256 Checksum:</span>
                    </span>
                    <button
                      type="button"
                      className="copy-checksum-btn"
                      onClick={() => copyChecksum(release.checksumSha256!, release.id)}
                      title="Salin checksum ke clipboard"
                      aria-label="Salin checksum SHA256"
                    >
                      {copiedId === release.id ? (
                        <>
                          <Check size={12} />
                          <span>Tersalin!</span>
                        </>
                      ) : (
                        <>
                          <Copy size={12} />
                          <span>Salin Hash</span>
                        </>
                      )}
                    </button>
                  </div>
                  <div className="checksum-hash" title={release.checksumSha256}>
                    {release.checksumSha256}
                  </div>
                </div>
              )}

              {/* Download Action */}
              <div className="release-action">
                <a
                  href={release.downloadUrl}
                  className="download-pkg-btn"
                  id={`btn-download-${release.id}`}
                  download
                >
                  <Download size={18} />
                  <span>Download {release.filename}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Verification Notice */}
        <div className="download-security-notice">
          <Shield size={20} className="notice-icon" />
          <div className="notice-content">
            <h4>Jaminan Integritas & Keamanan Unduhan</h4>
            <p>
              Seluruh berkas installer resmi didistribusikan langsung melalui rilis GitHub resmi Metriks Studio.
              Verifikasi kesesuaian nilai SHA256 hash di Windows PowerShell menggunakan perintah:{' '}
              <code>Get-FileHash [nama_file] -Algorithm SHA256</code> atau di Command Prompt{' '}
              <code>certutil -hashfile [nama_file] SHA256</code>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
