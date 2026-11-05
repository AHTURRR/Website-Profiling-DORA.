import { ArrowUpRight, ArrowRight, GitFork as Github, Code2, PenTool, BookOpen, Globe, Workflow } from 'lucide-react';
import { creditSource, studioCredits, teamMembers, specialThanks, type TeamMember } from '../../config/team.config';

const roleIcons: Record<string, typeof Code2> = {
  'Academic Supervisor': BookOpen,
  'Software Development': Code2,
  'UI/UX Design': PenTool,
  'Design & Web Development': Globe,
  'Design Analysis': Workflow,
};

export function TeamPage() {
  return <>
    <section className="team-intro site-container">
      <a href="/" className="back-link">← Kembali ke DORA</a>
      <div className="eyebrow"><span className="small-line" />{studioCredits.intro}</div>
      <h1>Rasa ingin tahu.<br /><span>Kerja bersama.</span></h1>
      <p>
        Metriks Studio mengembangkan <strong>{studioCredits.app} ({studioCredits.tagline})</strong> sebagai ruang kerja desktop yang menyatukan eksplorasi dataset, eksperimen machine learning visual, dan penelusuran literatur ilmiah.
      </p>
      <div className="team-intro-bottom">
        <span>Tim pengembang berdasarkan berkas kredit resmi aplikasi</span>
        <div className="team-intro-links">
          <a href={creditSource} target="_blank" rel="noopener noreferrer">Sumber credits.json<ArrowUpRight size={15} /></a>
          <a href="/#github">Bagian Repositori DORA<ArrowRight size={15} /></a>
        </div>
      </div>
    </section>
    <section className="site-container team-section" aria-labelledby="team-heading">
      <div className="section-heading">
        <div>
          <span className="eyebrow">Orang di balik produknya</span>
          <h2 id="team-heading">Berbeda keahlian.<br />Satu ruang eksplorasi.</h2>
        </div>
        <p>Nama, peran, dan pembagian tugas (jobdesk) bersumber langsung dari kredit resmi aplikasi DORA (<code>credits.json</code>) bersama tim pengembang Metriks Studio.</p>
      </div>
      <div className="team-grid">
        {teamMembers.map((member: TeamMember, index: number) => {
          const RoleIcon = roleIcons[member.role] || Code2;
          return (
            <article className="team-card" key={member.name}>
              <div className={`member-visual member-visual-${index % 3}`}>
                {/* Motion Graphic Orbital Gyro Canvas */}
                <div className="member-ambient-graphic" aria-hidden="true">
                  <svg className="member-gyro-canvas" viewBox="0 0 320 320" fill="none">
                    <circle cx="160" cy="160" r="142" stroke="currentColor" strokeWidth="0.8" strokeDasharray="4 8" className="gyro-ring-cw" />
                    <circle cx="160" cy="160" r="108" stroke="currentColor" strokeWidth="1" strokeDasharray="16 10 4 10" className="gyro-ring-ccw" />
                    <circle cx="160" cy="160" r="74" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 6" opacity="0.4" className="gyro-ring-cw" />
                    <line x1="160" y1="12" x2="160" y2="308" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.25" />
                    <line x1="12" y1="160" x2="308" y2="160" stroke="currentColor" strokeWidth="0.6" strokeDasharray="4 6" opacity="0.25" />
                    <circle cx="160" cy="52" r="3" fill="currentColor" className="gyro-dot-pulse" />
                    <circle cx="268" cy="160" r="3" fill="currentColor" className="gyro-dot-pulse" />
                  </svg>
                  <div className="member-ambient-glow" />
                </div>

                <img
                  src={member.photo}
                  alt={`Foto profil ${member.name}`}
                  className="member-photo"
                  style={member.photoPosition ? { objectPosition: member.photoPosition } : undefined}
                  loading="lazy"
                />

                <div className="member-photo-overlay" aria-hidden="true" />
                <div className="member-scan-beam" aria-hidden="true" />

                {/* Floating HUD Indicators */}
                <div className="member-visual-hud">
                  <div className="member-discipline-pill">
                    <span className="member-live-beacon" aria-hidden="true" />
                    <span>{member.discipline}</span>
                  </div>
                  <span className="member-index-tag">0{index + 1}</span>
                </div>
              </div>

              <div className="member-copy">
                <div className="member-meta-top">
                  <span className="member-role-badge">
                    <RoleIcon size={13} className="member-role-icon" />
                    <span>{member.role}</span>
                  </span>
                </div>
                <h3>{member.name}</h3>
                <p className="member-jobdesk-text">{member.jobdesk}</p>

                {/* Interactive Dynamic Waveform & Track Line */}
                <div className="member-card-footer">
                  <span className="member-studio-tag">Metriks Studio · DORA</span>
                  <div className="member-wave-bars" aria-hidden="true">
                    <span className="wave-bar bar-1" />
                    <span className="wave-bar bar-2" />
                    <span className="wave-bar bar-3" />
                    <span className="wave-bar bar-4" />
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
    <section className="team-principles site-container"><div><span className="eyebrow">Cara kami berkontribusi</span><h2>Dari berbagai sudut,<br />untuk satu produk.</h2></div><div className="principle-list"><div><Code2 size={22} /><h3>Engineering</h3><p>Menghubungkan dataset, analisis, dan pipeline di dalam aplikasi desktop.</p></div><div><PenTool size={22} /><h3>Design</h3><p>Menyusun pengalaman visual dan interaksi untuk ruang kerja riset.</p></div><div><BookOpen size={22} /><h3>Research</h3><p>Membawa perspektif penulisan ilmiah dan pendampingan akademik.</p></div></div></section>
    <section className="thanks-section site-container"><span className="eyebrow">Special thanks</span><h2>{specialThanks}</h2><p>Dicantumkan sesuai bagian Special Thanks dalam kredit resmi aplikasi DORA.</p></section>
    <section className="site-container">
      <div className="team-invitation">
        <div>
          <span className="eyebrow">Ikut membangun & menjelajah</span>
          <h2>Ide bagus bisa<br />datang dari siapa saja.</h2>
          <p>Kembali ke ikhtisar fitur DORA, pelajari kode sumber aplikasi desktop di GitHub, atau temukan informasi rilis resmi terbaru.</p>
        </div>
        <div className="team-invitation-actions">
          <a className="button primary" href="/#github"><Github size={18} />Bagian Repositori DORA<ArrowRight size={16} /></a>
          <a className="button secondary" href="/">Kembali ke beranda DORA<ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  </>;
}
