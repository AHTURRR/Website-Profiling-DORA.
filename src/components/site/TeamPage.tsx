import { ArrowUpRight, GitFork as Github, Code2, PenTool, BookOpen } from 'lucide-react';
import { creditSource, teamMembers, specialThanks } from '../../config/team.config';
import { repositoryUrl } from '../../config/site.config';

export function TeamPage() {
  return <>
    <section className="team-intro site-container">
      <a href="/" className="back-link">← Kembali ke DORA</a>
      <div className="eyebrow"><span className="small-line" />Metriks Studio</div>
      <h1>Rasa ingin tahu.<br /><span>Kerja bersama.</span></h1>
      <p>Di balik setiap alur riset, ada orang-orang yang merancang, membangun, dan mempertanyakan cara yang lebih baik.</p>
      <div className="team-intro-bottom"><span>Tim di balik DORA</span><a href={creditSource} target="_blank" rel="noopener noreferrer">Lihat kredit resmi<ArrowUpRight size={16} /></a></div>
    </section>
    <section className="site-container team-section" aria-labelledby="team-heading">
      <div className="section-heading"><div><span className="eyebrow">Orang di balik produknya</span><h2 id="team-heading">Berbeda keahlian.<br />Satu ruang eksplorasi.</h2></div><p>Nama dan peran mengikuti kredit resmi aplikasi. Bio di bawah adalah <strong>data dummy</strong> untuk pratinjau tata letak.</p></div>
      <div className="team-grid">{teamMembers.map((member, index) => <article className="team-card" key={member.name}>
        <div className={`member-visual member-visual-${index % 3}`} aria-hidden="true"><span className="member-discipline">{member.discipline}</span><span className="member-initials">{member.initials}</span><span className="member-index">0{index + 1} / Metriks Studio</span></div>
        <div className="member-copy"><h3>{member.name}</h3><span className="member-role">{member.role}</span><div className="dummy-label">Bio dummy</div><p>{member.draftBio}</p></div>
      </article>)}</div>
      <div className="team-source-note"><BookOpen size={20} /><p>Nama dan peran disalin dari <a href={creditSource} target="_blank" rel="noopener noreferrer">credits.json pada repositori DORA</a>. Monogram menggantikan foto; tidak ada foto atau tautan personal rekaan.</p></div>
    </section>
    <section className="team-principles site-container"><div><span className="eyebrow">Cara kami berkontribusi</span><h2>Dari berbagai sudut,<br />untuk satu produk.</h2></div><div className="principle-list"><div><Code2 size={22} /><h3>Engineering</h3><p>Menghubungkan dataset, analisis, dan pipeline di dalam aplikasi desktop.</p></div><div><PenTool size={22} /><h3>Design</h3><p>Menyusun pengalaman visual dan interaksi untuk ruang kerja riset.</p></div><div><BookOpen size={22} /><h3>Research</h3><p>Membawa perspektif penulisan ilmiah dan pendampingan akademik.</p></div></div></section>
    <section className="thanks-section site-container"><span className="eyebrow">Special thanks</span><h2>{specialThanks}</h2><p>Dicantumkan sesuai bagian Special Thanks dalam kredit aplikasi.</p></section>
    <section className="site-container"><div className="team-invitation"><div><span className="eyebrow">Ikut membangun</span><h2>Ide bagus bisa<br />datang dari siapa saja.</h2><p>Temukan kode sumber, pelajari proyeknya, atau sampaikan masukan melalui GitHub.</p></div><a className="button primary" href={repositoryUrl} target="_blank" rel="noopener noreferrer"><Github size={19} />Kunjungi repositori<ArrowUpRight size={17} /></a></div></section>
  </>;
}
