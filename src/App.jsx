import "./styles.css";
import image from "./luckypics.jpeg";

const skills = ["HTML5", "CSS3", "JavaScript", "React", "Node.js", "PHP", "RESTful APIs", "MySQL", "SEO"];
const projects = [
  { n:"01", title:"Business Management Platform", type:"FULL-STACK APPLICATION", desc:"A web app concept for managing customers, records and everyday business workflows.", tags:["React","Node.js","MySQL"], tone:"violet" },
  { n:"02", title:"REST API Service", type:"BACKEND DEVELOPMENT", desc:"A structured API concept focused on clear endpoints, reliable data handling and maintainable code.", tags:["PHP","RESTful API","MySQL"], tone:"blue" },
  { n:"03", title:"Optimized Landing Page", type:"FRONTEND / SEO", desc:"A responsive landing page concept focused on usability, semantic structure and search visibility.", tags:["HTML","CSS","JavaScript","SEO"], tone:"green" }
];
const socials = [["GitHub","https://github.com/"],["LinkedIn","https://www.linkedin.com/"]];
const Arrow = () => <span aria-hidden="true">↗</span>;

export default function App() {
  return <main>
    <nav className="nav wrap"><a className="logo" href="#home">TL<span>.</span></a><div className="nav-links"><a href="#about">About</a><a href="#skills">Skills</a><a href="#work">Projects</a><a className="nav-cta" href="#contact">Contact <Arrow/></a></div></nav>
    <section className="hero wrap" id="home">
      <div className="hero-main">
         <center className="center"><span className="availability"><i/> OPEN TO OPPORTUNITIES</span></center>
        <img className="profile" src={image} alt="Professional Photo" />
        <p className="overline">HELLO, I'M TOCHUKWU LUCKY</p>
        <h1>Full-Stack<br/><span>Developer</span><b>.</b></h1>
        <p className="summary">I build modern web experiences from front end to back end technologies — combining clean interfaces, dependable backend systems and thoughtful performance.</p>
        <div className="hero-buttons"><a className="btn primary" href="#work">Explore my work <Arrow/></a><a className="btn quiet" href="#contact">Let's talk <Arrow/></a></div>
        <div className="hero-meta"><span><big>FOCUS</big>WEB DEVELOPMENT</span><span><big>STACK</big>FRONTEND + BACKEND</span></div>
      </div>
      <div className="hero-art"><div className="glow"/><div className="orbit orbit-a"/><div className="orbit orbit-b"/>
        <div className="code-card"><div className="code-top"><span className="dots">● ● ●</span> developer.js <span>●</span></div>
          <div className="code"><p><i>01</i> <b>const</b> developer = {'{'}</p><p><i>02</i> &nbsp;name: <strong>'Tochukwu Lucky'</strong>,</p><p><i>03</i> &nbsp;role: <strong>'Full-Stack Developer'</strong>,</p><p><i>04</i> &nbsp;frontend: [<em>'React'</em>, <em>'JS'</em>],</p><p><i>05</i> &nbsp;backend: [<em>'Node'</em>, <em>'PHP'</em>],</p><p><i>06</i> &nbsp;database: <strong>'MySQL'</strong></p><p><i>07</i> {'}'};</p><p className="comment"><i>08</i> // always building what's next</p></div>
          <div className="code-foot"><span>● SYSTEM READY</span><span>UTF-8 · JS</span></div>
        </div><div className="chip chip-a">✳ FRONTEND</div><div className="chip chip-b">⌘ BACKEND</div>
      </div>
      <div className="hero-bottom"><span>PORTFOLIO / 2026</span><a href="#about">SCROLL TO DISCOVER ↓</a></div>
    </section>
    <section className="section wrap" id="about"><div className="label"><span>01</span> ABOUT ME</div><div className="two-col about-grid"><h2>Building for the<br/><span>whole picture.</span></h2><div className="body-copy"><p className="lead">I’m Tochukwu Lucky, a Full-Stack Developer passionate about creating useful, well-crafted digital products.</p><p>I work across the stack: shaping responsive user interfaces, building backend functionality, connecting RESTful APIs and working with databases. I also value the details that help websites perform well, including accessibility, speed and SEO.</p><p>I enjoy learning, solving practical problems and turning ideas into reliable web experiences.</p><a className="inline-link" href="#contact">Have a project in mind? <Arrow/></a></div></div></section>
    <section className="section skills-section" id="skills"><div className="wrap"><div className="label"><span>02</span> TECHNICAL TOOLKIT</div><div className="section-heading"><h2>The tools behind<br/><span>the work.</span></h2><p>From the browser to the database, I bring the pieces together to build complete web solutions.</p></div><div className="skill-grid">{skills.map((s,i)=><div className="skill" key={s}><small>0{i+1}</small><div><strong>{s}</strong><span>{i<4?"Frontend":i<8?"Backend":"Optimization"}</span></div><Arrow/></div>)}</div></div></section>
    <section className="section wrap" id="work"><div className="label"><span>03</span> SELECTED PROJECTS</div><div className="section-heading"><h2>Ideas into<br/><span>experiences.</span></h2><p>Representative project concepts. Replace these with your real builds, screenshots, live demos and source-code links.</p></div><div className="projects">{projects.map(p=><article className="project" key={p.n}><a className={`project-art ${p.tone}`} href="#contact"><small>{p.n} / CONCEPT</small><div className="mock"><div className="mock-top">TL. <span>● ● ●</span></div><div className="mock-body"><i>{p.type}</i><b>{p.title}</b><hr/><hr/><em>EXPLORE ↗</em></div></div><span className="open">↗</span></a><div className="project-type">{p.type}</div><h3>{p.title}</h3><p className="project-desc">{p.desc}</p><div className="tags">{p.tags.map(t=><span key={t}>{t}</span>)}</div></article>)}</div></section>
    <section className="section wrap"><div className="label"><span>04</span> HOW I WORK</div><div className="two-col approach"><h2>Thoughtful code.<br/><span>Useful outcomes.</span></h2><div className="steps">{[["01","Understand","Start with the goal, the people using the product and the problem to solve."],["02","Build","Create a clear interface and connect it to maintainable backend functionality."],["03","Refine","Test, improve responsiveness and performance, and pay attention to the details."]].map(x=><div key={x[0]}><small>{x[0]}</small><section><b>{x[1]}</b><p>{x[2]}</p></section></div>)}</div></div></section>
    <section className="contact" id="contact"><div className="wrap"><div className="label"><span>05</span> GET IN TOUCH</div><p className="overline">HAVE AN IDEA? LET'S BUILD IT.</p><h2>Let's create<br/><span>something solid.</span></h2><p className="contact-copy">Have a project, opportunity or collaboration in mind? I’d be glad to hear from you.</p><a className="btn primary" href="mailto:luckytochukwu02@gmail.com ">luckytochukwu02@gmail.com <Arrow/></a><div className="socials">{socials.map(([n,u])=><a href={u} key={n} target="_blank" rel="noreferrer">{n} <Arrow/></a>)}</div></div></section>
    <footer className="footer wrap"><a className="logo" href="#home">TL<span>.</span></a><span>© 2026 TOCHUKWU LUCKY. BUILT WITH PURPOSE.</span><a href="#home">BACK TO TOP ↑</a></footer>
  </main>;
}
