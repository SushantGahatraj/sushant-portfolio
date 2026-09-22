const Arrow = () => <span aria-hidden="true">↗</span>;

const skillGroups = [
  { label: "Business", skills: ["Financial analysis", "Taxation", "ERP systems", "Business operations"] },
  { label: "Technical", skills: ["SQL", "Python", "Data analysis", "Microsoft Excel"] },
  { label: "Strengths", skills: ["Research", "Problem solving", "Collaboration", "Communication"] },
];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap">
        <a className="monogram" href="#top" aria-label="Home">SG<span>.</span></a>
        <div className="nav-links"><a href="#about">About</a><a href="#experience">Experience</a><a href="#skills">Skills</a></div>
        <a className="nav-contact" href="mailto:sgahatraj@caldwell.edu">Let&apos;s talk <Arrow /></a>
      </nav>

      <section className="hero wrap" id="top">
        <div className="hero-copy">
          <p className="eyebrow"><i /> Available for opportunities</p>
          <h1>Curious mind.<br /><em>Clear impact.</em></h1>
          <p className="intro">I&apos;m Sushant Gahatraj, a business-minded problem solver who brings structure to complex work through thoughtful analysis, technology, and collaboration.</p>
          <div className="hero-actions"><a className="button dark" href="mailto:sgahatraj@caldwell.edu">Get in touch <Arrow /></a><a className="text-link" href="#experience">Explore my work <span>↓</span></a></div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb orb-one" /><div className="orb orb-two" /><div className="orbit orbit-one" /><div className="orbit orbit-two" />
          <div className="initials">SG</div><p>Business<br />&amp; Technology</p>
        </div>
      </section>

      <section className="marquee"><div>ANALYZE <b>✦</b> BUILD <b>✦</b> IMPROVE <b>✦</b> LEARN <b>✦</b> ANALYZE <b>✦</b> BUILD <b>✦</b> IMPROVE <b>✦</b></div></section>

      <section className="about wrap" id="about">
        <p className="section-label">01 / ABOUT</p>
        <div><h2>Grounded in details.<br />Driven by <em>possibility.</em></h2><p className="body-copy">My work sits at the intersection of business and technology. I enjoy turning information into practical direction, finding better ways to work, and contributing with care to every team I join.</p></div>
      </section>

      <section className="experience wrap" id="experience">
        <div className="section-heading"><p className="section-label">02 / EXPERIENCE</p><p>Selected focus areas and capabilities developed through academic and professional work.</p></div>
        <div className="experience-list">
          <article><span className="number">01</span><div><h3>Business analysis</h3><p>Connecting financial and operational information to support clear, well-reasoned decisions.</p></div><span className="plus">+</span></article>
          <article><span className="number">02</span><div><h3>Data &amp; systems</h3><p>Using SQL, Excel, and ERP tools to organize data, identify patterns, and improve processes.</p></div><span className="plus">+</span></article>
          <article><span className="number">03</span><div><h3>Continuous learning</h3><p>Building practical technical fluency while staying focused on the people and outcomes behind the work.</p></div><span className="plus">+</span></article>
        </div>
      </section>

      <section className="skills" id="skills"><div className="wrap"><p className="section-label">03 / TOOLKIT</p><h2>A versatile<br /><em>working set.</em></h2><div className="skill-grid">{skillGroups.map((group) => <div className="skill-card" key={group.label}><p>{group.label}</p><ul>{group.skills.map((skill) => <li key={skill}>{skill}<span>↗</span></li>)}</ul></div>)}</div></div></section>

      <section className="education wrap"><p className="section-label">04 / EDUCATION</p><div className="education-line"><div><p className="degree">Caldwell University</p><p>Academic foundation in business, finance, and technology.</p></div><a href="mailto:sgahatraj@caldwell.edu" className="round-link" aria-label="Email Sushant"><Arrow /></a></div></section>

      <footer><div className="wrap footer-inner"><p>Have a role or project in mind?</p><a href="mailto:sgahatraj@caldwell.edu">Let&apos;s make it count. <Arrow /></a><div className="footer-bottom"><span>© 2026 Sushant Gahatraj</span><a href="mailto:sgahatraj@caldwell.edu">sgahatraj@caldwell.edu</a></div></div></footer>
    </main>
  );
}
