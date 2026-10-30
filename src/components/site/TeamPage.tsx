import { ArrowUpRight, ArrowRight, GitFork as Github, Code2, PenTool, BookOpen } from 'lucide-react';
import { creditSource, studioCredits, teamMembers, specialThanks } from '../../config/team.config';

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
      <div className="section-heading"><div><span className="eyebrow">Orang di balik produknya</span><h2 id="team-heading">Berbeda keahlian.<br />Satu ruang eksplorasi.</h2></div><p>Nama dan peran mengikuti kredit resmi aplikasi. Bio di bawah adalah <strong>data dummy</strong> untuk pratinjau tata letak.</p></div>
      <div className="team-grid">{teamMembers.map((member, index) => <article className="team-card" key={member.name}>
        <div className={`member-visual member-visual-${index % 3}`} aria-hidden="true">
          <svg className="member-gyro" viewBox="0 0 100 100" fill="none" aria-hidden="true">
            <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.35" />
            <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="1" strokeDasharray="14 6" opacity="0.5" />
            <ellipse cx="50" cy="50" rx="46" ry="18" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
            <ellipse cx="50" cy="50" rx="18" ry="46" stroke="currentColor" strokeWidth="0.75" opacity="0.3" />
            <circle cx="50" cy="50" r="4" fill="currentColor" opacity="0.4" />
          </svg>
          <div className="member-hud-meta">
            <span className="member-discipline">{member.discipline}</span>
            <span className="member-hud-tag">[UNIT // 0{index + 1}]</span>
          </div>
          <span className="member-initials">{member.initials}</span>
          <span className="member-index">0{index + 1} / Metriks Studio</span>
        </div>
        <div className="member-copy"><h3>{member.name}</h3><span className="member-role">{member.role}</span><div className="dummy-label">Bio dummy</div><p>{member.draftBio}</p></div>
      </article>)}</div>
      <div className="team-source-note"><BookOpen size={20} /><p>Nama dan peran disalin langsung dari <a href={creditSource} target="_blank" rel="noopener noreferrer">app/ui/data/credits.json pada repositori DORA</a>. Monogram teks menggantikan foto karena sumber resmi tidak memuat foto profil; tidak ada foto, kontak, atau tautan personal rekaan.</p></div>
    </section>
    <section className="team-principles site-container"><div><span className="eyebrow">Cara kami berkontribusi</span><h2>Dari berbagai sudut,<br />untuk satu produk.</h2></div><div className="principle-list"><div><Code2 size={22} /><h3>Engineering</h3><p>Menghubungkan dataset, analisis, dan pipeline di dalam aplikasi desktop.</p></div><div><PenTool size={22} /><h3>Design</h3><p>Menyusun pengalaman visual dan interaksi untuk ruang kerja riset.</p></div><div><BookOpen size={22} /><h3>Research</h3><p>Membawa perspektif penulisan ilmiah dan pendampingan akademik.</p></div></div></section>
    <section className="thanks-section site-container"><span className="eyebrow">Special thanks</span><h2>{specialThanks}</h2><p>Dicantumkan sesuai bagian Special Thanks dalam kredit resmi aplikasi DORA.</p></section>
    <section className="site-container">
      <div className="team-invitation">
        <div>
          <span className="eyebrow">Ikut membangun & menjelajah</span>
          <h2>Ide bagus bisa<br />datang dari siapa saja.</h2>
          <p>Kembali ke ikhtisar fitur DORA, pelajari kode sumber aplikasi desktop di GitHub, atau tinjau repositori website profil ini.</p>
        </div>
        <div className="team-invitation-actions">
          <a className="button primary" href="/#github"><Github size={18} />Bagian Repositori DORA<ArrowRight size={16} /></a>
          <a className="button secondary" href="/">Kembali ke beranda DORA<ArrowRight size={16} /></a>
        </div>
      </div>
    </section>
  </>;
}
