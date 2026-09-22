const Arrow = () => <span aria-hidden="true">↗</span>;

const tools = ["SQL", "Python", "Excel", "ERP systems", "Data analysis", "AI tools"];

export default function Home() {
  return (
    <main>
      <nav className="nav wrap"><a className="signature" href="#top">sushant<span>.</span></a><div className="nav-links"><a href="#about">about</a><a href="#notes">notes</a><a href="#toolbox">toolbox</a></div><a className="mail-pill" href="mailto:sgahatraj@caldwell.edu">say hello <Arrow /></a></nav>
      <section className="hero wrap" id="top">
        <div className="hero-side"><p className="tiny-label">SUSHANT GAHATRAJ</p><p className="vertical-note">BUSINESS × TECH × CURIOSITY</p></div>
        <div className="hero-main"><p className="availability"><i /> open to new opportunities</p><h1>Hey, I&apos;m<br /><em>Sushant.</em></h1><p className="hero-blurb">I&apos;m interested in the quiet work behind good decisions: finding the pattern, asking a better question, and making the next step feel obvious.</p><a className="jump-link" href="#about">a little more about me <span>↓</span></a></div>
        <div className="hero-sticker" aria-label="A personal mark"><span>curious<br />by default</span><b>✦</b></div>
      </section>
      <section className="scroll-strip"><div className="strip-inner"><span>making sense of data</span><b>✦</b><span>learning in public</span><b>✦</b><span>always building</span><b>✦</b><span>making sense of data</span><b>✦</b></div></section>
      <section className="about wrap" id="about"><div className="section-intro"><p className="section-no">01 / THE SHORT VERSION</p><h2>Part analyst.<br />Part <em>maker.</em></h2></div><div className="about-copy"><p>I&apos;m a student and early-career professional exploring where business thinking and technology overlap. I enjoy work that takes a messy problem and gives it shape.</p><p>Whether I&apos;m digging into a spreadsheet, learning a new tool, or working through a process with a team, I&apos;m happiest when there&apos;s something useful to figure out.</p><a href="mailto:sgahatraj@caldwell.edu">Let&apos;s connect <Arrow /></a></div></section>
      <section className="snapshot wrap" id="notes"><p className="section-no">02 / RIGHT NOW</p><div className="snapshot-grid"><article className="big-note"><span className="scribble">currently</span><h3>Growing a toolkit<br />for <em>practical</em> impact.</h3><div className="doodle"><i /><i /><i /></div></article><article className="small-note dark-note"><p>THINKING ABOUT</p><h4>How can data make work simpler?</h4><span>01</span></article><article className="small-note lime-note"><p>STUDYING AT</p><h4>Caldwell<br />University</h4><span>02</span></article><article className="small-note paper-note"><p>REACH ME AT</p><a href="mailto:sgahatraj@caldwell.edu">sgahatraj<br />@caldwell.edu <Arrow /></a><span>03</span></article></div></section>
      <section className="toolbox" id="toolbox"><div className="wrap"><p className="section-no">03 / MY TOOLBOX</p><div className="toolbox-top"><h2>Things I&apos;m<br /><em>getting good at.</em></h2><p>Not a static list. This is the collection I&apos;m actively using, improving, and adding to.</p></div><div className="tool-list">{tools.map((tool, index) => <div className="tool" key={tool}><span>0{index + 1}</span><strong>{tool}</strong><i>↗</i></div>)}</div></div></section>
      <section className="contact wrap"><p className="section-no">04 / SAY HELLO</p><h2>Got something<br />interesting in mind?</h2><a href="mailto:sgahatraj@caldwell.edu" className="contact-mail">sgahatraj@caldwell.edu <Arrow /></a></section>
      <footer className="wrap"><a className="signature" href="#top">sushant<span>.</span></a><p>© 2026 — made with curiosity</p><a href="#top">back to top ↑</a></footer>
    </main>
  );
}
