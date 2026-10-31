import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, Menu, X, Code2, Cpu, Database, Layers3, Sparkles, Terminal, Download, ExternalLink, Trophy, Lightbulb, Search, Wrench, Rocket } from 'lucide-react'

const projects = [
  { n:'01', title:'Nephroscan', type:'AI / COMPUTER VISION', desc:'An AI-assisted kidney stone detection platform exploring object detection workflows with YOLOv8 and YOLOv10.', stack:['Python','YOLOv10','React','Django REST'], accent:'violet', mark:'N/', image:'/images/nephroscan.png' },
  { n:'02', title:'SPARK', type:'SMART MOBILITY', desc:'A camera-first smart parking system with vehicle number-plate recognition, slot tracking and booking flows.', stack:['YOLOv8','ByteTrack','PaddleOCR','FastAPI'], accent:'cyan', mark:'S_', image:'/images/spark.jpeg' },
  { n:'03', title:'JAI', type:'NLP / LEGAL TECH', desc:'A judicial assistance interface that uses semantic search and sentence embeddings to make legal information easier to explore.', stack:['Python','Streamlit','Embeddings','Semantic Search'], accent:'pink', mark:'J.', image:'/images/jai.jpeg' },
  { n:'04', title:'Adhikaar', type:'CIVIC TECH', desc:'A citizen eligibility portal concept designed to help people discover government benefit schemes that may apply to them.', stack:['Next.js','React','FastAPI','PostgreSQL'], accent:'cyan', mark:'A+', image:'/images/adhikaar.png' },
  { n:'05', title:'MIMG', type:'FULL-STACK WEB', desc:'A browser-based photo editing project built with Django, templates and a lightweight database-backed workflow.', stack:['Python','Django','SQLite','JavaScript'], accent:'pink', mark:'M*', image:'/images/mimg.jpeg' },
]
const skills = [
  { icon:Code2, title:'Languages', items:['Python','JavaScript','SQL','HTML / CSS'] },
  { icon:Layers3, title:'Frameworks', items:['Django','FastAPI','React','Tailwind CSS'] },
  { icon:Database, title:'Data & Storage', items:['PostgreSQL','MySQL','SQLite','Pandas'] },
  { icon:Cpu, title:'AI & Engineering', items:['YOLO','Computer Vision','CNNs','REST APIs'] },
]
const fade = { hidden:{opacity:0,y:24}, show:{opacity:1,y:0,transition:{duration:.65,ease:[.22,1,.36,1]}} }

function Reveal({children, className=''}) {
  const reduce = useReducedMotion()
  return <motion.div className={className} variants={fade} initial={reduce?'show':'hidden'} whileInView="show" viewport={{once:true,amount:.15}}>{children}</motion.div>
}

function App(){
  const [menuOpen,setMenuOpen] = useState(false)
  const [active,setActive] = useState('home')
  const nav = [['intro','Intro'],['technologies','Technologies'],['projects','Projects'],['achievements','Achievements'],['buildlog','Behind the Build']]
  const go = id => { setActive(id); setMenuOpen(false); document.getElementById(id)?.scrollIntoView({behavior:'smooth'}) }
  return <div className="site-shell">
    <div className="noise" aria-hidden="true" />
    <header className="topbar">
      <a className="brand" href="#home" onClick={e=>{e.preventDefault();go('home')}}><span className="brand-mark">M<span>.</span></span><span>MOHIL SHASTRI</span></a>
      <nav className={menuOpen?'nav-links open':'nav-links'} aria-label="Main navigation">{nav.map(([id,label])=><button key={id} className={active===id?'nav-active':''} onClick={()=>go(id)}>{label}</button>)}</nav>
      <a className="nav-cta" href="mailto:YOUR_EMAIL@example.com">LET'S TALK <ArrowUpRight size={14}/></a>
      <button className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen?<X/>:<Menu/>}</button>
    </header>

    <main>
      <section className="hero section-wrap" id="home">
        <div className="hero-gridline" aria-hidden="true" />
        <div className="hero-copy">
          <motion.div className="eyebrow" initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.15}}><span className="status-dot"/> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line"/></motion.div>
          <motion.p className="hero-kicker" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.25}}>HEY, I'M MOHIL — A DEVELOPER WHO BUILDS</motion.p>
          <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8,delay:.3,ease:[.22,1,.36,1]}}>IDEAS INTO<br/><span className="outline-word">REALITY<span className="hero-star">✳</span></span></motion.h1>
          <motion.p className="hero-description" initial={{opacity:0,y:15}} animate={{opacity:1,y:0}} transition={{delay:.65}}>Python developer. Full-stack builder. AI/ML enthusiast.<br/>I turn complex problems into clean, useful experiences.</motion.p>
          <motion.div className="hero-actions" initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.8}}><button className="button-primary" onClick={()=>go('projects')}>EXPLORE MY WORK <ArrowUpRight size={16}/></button><a className="text-link" href="mailto:YOUR_EMAIL@example.com">GET IN TOUCH <ArrowRight size={15}/></a></motion.div>
        </div>
        <motion.div className="hero-art" initial={{opacity:0,scale:.88,rotate:8}} animate={{opacity:1,scale:1,rotate:0}} transition={{duration:1.1,delay:.35,ease:[.16,1,.3,1]}}>
          <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
          <div className="core-glow"/><div className="core"><span>MS</span><i>DEVELOPER<br/>PORTFOLIO / 2026</i></div>
          <div className="float-tag tag-python"><span className="tag-icon">Py</span> PYTHON</div><div className="float-tag tag-ai"><Sparkles size={13}/> AI / ML</div><div className="float-tag tag-react"><span className="react-symbol">✳</span> REACT</div>
          <div className="art-coordinates">23°13' N<br/>72°38' E</div><div className="art-index">FIG. 001 — SYSTEM ONLINE</div>
        </motion.div>
        <div className="hero-bottom"><span>SCROLL TO DISCOVER <ArrowDown size={13}/></span><span className="hero-bottom-center">BUILDING WITH CURIOSITY <b>✳</b></span><span>01 / 05</span></div>
      </section>

      <section className="about section-wrap" id="intro">
        <Reveal><div className="section-label"><span>01 / INTRO</span><span className="label-rule"/><span>THE HUMAN BEHIND THE CODE</span></div></Reveal>
        <div className="about-layout">
          <Reveal className="about-heading"><h2>CURIOUS<br/>BY NATURE.<br/><em>BUILDER</em><br/>BY CHOICE.</h2><div className="about-stamp">THINK<br/>BUILD<br/>REPEAT <span>↗</span></div></Reveal>
          <Reveal className="about-text"><p className="lead">I’m a developer from Gujarat, India, driven by a simple idea: technology should solve real problems.</p><p>My journey moves between Python engineering, full-stack development and applied AI. I enjoy taking an idea from a rough sketch to a working product — shaping the backend, connecting the data and making the experience feel right.</p><p>I'm especially interested in intelligent systems, computer vision and building products that have a meaningful impact.</p><div className="about-facts"><div><strong>05</strong><small>SELECTED PROJECTS</small></div><div><strong>8.67</strong><small>CGPA · TOP 5</small></div><div><strong>∞</strong><small>THINGS TO LEARN</small></div></div></Reveal>
        </div>
      </section>

      <section className="stack section-wrap" id="technologies">
        <Reveal><div className="section-label"><span>02 / TECHNOLOGIES</span><span className="label-rule"/><span>MY DIGITAL WORKBENCH</span></div><div className="stack-intro"><h2>TOOLS OF<br/><em>THE TRADE.</em></h2><p>The right tool for the right problem.<br/>Always learning, always refining.</p></div></Reveal>
        <div className="skills-grid">{skills.map((s,i)=><Reveal key={s.title} className="skill-card"><div className="skill-head"><s.icon size={20}/><span>0{i+1}</span></div><h3>{s.title}</h3><div className="skill-tags">{s.items.map(item=><span key={item}>{item}</span>)}</div></Reveal>)}</div>
        <Reveal className="marquee-wrap"><div className="marquee"><span>BUILD WITH PURPOSE ✳ SHIP WITH CONFIDENCE ✳ STAY CURIOUS ✳ BUILD WITH PURPOSE ✳ SHIP WITH CONFIDENCE ✳ STAY CURIOUS ✳</span></div></Reveal>
      </section>

      <section className="work section-wrap" id="projects">
        <Reveal><div className="section-label"><span>03 / SELECTED PROJECTS</span><span className="label-rule"/><span>IDEAS MADE TANGIBLE</span></div><div className="work-intro"><h2>FEATURED<br/><span>PROJECTS<span className="purple-dot">.</span></span></h2><p>Five selected projects across AI, full-stack engineering<br/>and practical problem-solving.</p></div></Reveal>
        <div className="project-grid">{projects.map((p,i)=><Reveal key={p.title} className={`project-card ${p.accent}`}><div className="project-top"><span>{p.n} / 05</span><span>{p.type}</span></div><div className="project-visual"><img src={p.image} alt={`${p.title} project visual`} loading="lazy"/><span className="visual-caption">MOHIL.LAB / {p.n}</span></div><div className="project-info"><div><h3>{p.title}</h3><p>{p.desc}</p></div><button className="project-arrow" aria-label={`More about ${p.title}`} onClick={()=>document.getElementById('contact').scrollIntoView({behavior:'smooth'})}><ArrowUpRight size={19}/></button></div><div className="project-stack">{p.stack.map(s=><span key={s}>{s}</span>)}</div></Reveal>)}</div>
      </section>

      <section className="achievements section-wrap" id="achievements">
        <Reveal><div className="section-label"><span>04 / ACHIEVEMENTS</span><span className="label-rule"/><span>MILESTONES THAT MATTER</span></div><div className="achievement-heading"><h2>PROGRESS<br/><em>IN MOTION.</em></h2><p>Every milestone is proof of showing up, experimenting<br/>and learning something new.</p></div></Reveal>
        <div className="achievement-grid">
          <Reveal className="achievement-card featured-achievement"><div className="achievement-image"><img src="/images/academics.jpeg" alt="8.67 CGPA, top 5 in department" loading="lazy"/></div><div className="achievement-card-copy"><div className="achievement-icon"><Trophy size={23}/></div><span className="achievement-year">ACADEMIC EXCELLENCE</span><h3>8.67 CGPA<br/>Top 5 in Department</h3><p>Recognised among the top five students in the department during my B.E. in Information Technology.</p><span className="achievement-index">MILESTONE / 001</span></div></Reveal>
          <Reveal className="achievement-card"><div className="achievement-image"><img src="/images/sih.jpeg" alt="Smart India Hackathon national-level finalist" loading="lazy"/></div><div className="achievement-card-copy"><div className="achievement-icon"><Sparkles size={22}/></div><span className="achievement-year">2023 · NATIONAL LEVEL</span><h3>Smart India<br/>Hackathon Finalist</h3><p>Reached the national-level finale with a team-driven solution built around a real-world problem.</p><span className="achievement-index">MILESTONE / 002</span></div></Reveal>
          <Reveal className="achievement-card"><div className="achievement-image"><img src="/images/hackathon.jpeg" alt="First place at internal hackathon" loading="lazy"/></div><div className="achievement-card-copy"><div className="achievement-icon"><Trophy size={22}/></div><span className="achievement-year">2023 · CAMPUS</span><h3>Internal Hackathon<br/>— 1st Position</h3><p>Secured first place at the internal hackathon, turning an idea into a working solution under pressure.</p><span className="achievement-index">MILESTONE / 003</span></div></Reveal>
          <Reveal className="achievement-card"><div className="achievement-image"><img src="/images/degree.jpeg" alt="Bachelor of Engineering in Information Technology" loading="lazy"/></div><div className="achievement-card-copy"><div className="achievement-icon"><Code2 size={22}/></div><span className="achievement-year">2022 — 2026 · EDUCATION</span><h3>B.E. Information<br/>Technology</h3><p>LDRP Institute of Technology and Research, Gandhinagar.</p><span className="achievement-index">MILESTONE / 004</span></div></Reveal>
        </div>
      </section>

      <section className="buildlog section-wrap" id="buildlog">
        <Reveal><div className="section-label"><span>05 / BEHIND THE BUILD</span><span className="label-rule"/><span>HOW I TURN QUESTIONS INTO PRODUCTS</span></div><div className="buildlog-intro"><h2>THE THINKING<br/><em>IS THE WORK.</em></h2><p>Code is the output. The real work starts earlier —<br/>with curiosity, questions and a willingness to iterate.</p></div></Reveal>
        <div className="build-steps">
          <Reveal className="build-step"><span className="step-no">01</span><div className="step-icon"><Search size={21}/></div><div><h3>Find the real problem</h3><p>Start with the user, the friction and the context. Define what success should actually look like before choosing a technology.</p></div><span className="step-tag">DISCOVER</span></Reveal>
          <Reveal className="build-step"><span className="step-no">02</span><div className="step-icon"><Lightbulb size={21}/></div><div><h3>Explore the approach</h3><p>Break the challenge into smaller pieces, compare possible tools and test assumptions with quick experiments.</p></div><span className="step-tag">THINK</span></Reveal>
          <Reveal className="build-step"><span className="step-no">03</span><div className="step-icon"><Wrench size={21}/></div><div><h3>Build, connect, refine</h3><p>Bring the frontend, backend, data and intelligent components together. Iterate until the pieces work as one product.</p></div><span className="step-tag">CREATE</span></Reveal>
          <Reveal className="build-step"><span className="step-no">04</span><div className="step-icon"><Rocket size={21}/></div><div><h3>Ship and learn</h3><p>Test the experience, learn from what breaks and improve the next version. A project is a starting point, not a finish line.</p></div><span className="step-tag">ITERATE</span></Reveal>
        </div>
        <Reveal className="build-quote"><span>MY BUILD PHILOSOPHY</span><p>“Stay curious enough to ask better questions.<br/><em>Stay stubborn enough to build the answer.</em>”</p></Reveal>
      </section>

      <section className="contact section-wrap" id="contact">
        <Reveal><div className="section-label"><span>06 / CONTACT</span><span className="label-rule"/><span>HAVE A GOOD ONE IN MIND?</span></div><div className="contact-main"><div><p className="contact-kicker">THE NEXT GOOD THING STARTS WITH A CONVERSATION.</p><h2>LET'S MAKE<br/><span>IT HAPPEN<span className="purple-dot">.</span></span></h2></div><a className="contact-orb" href="mailto:mrshastri08@gmail.com"><span>START A<br/>CONVERSATION</span><ArrowUpRight size={25}/></a></div><a className="email-link" href="mailto:mrshastri08@gmail.com">mrshastri08@gmail.com <ArrowUpRight size={16}/></a></Reveal>
      </section>
    </main>

    <footer className="footer section-wrap"><a className="brand" href="#home" onClick={e=>{e.preventDefault();go('home')}}><span className="brand-mark">M<span>.</span></span><span>MOHIL SHASTRI</span></a><span>DESIGNED & BUILT WITH CURIOSITY <b>✳</b></span><div className="socials"><a href="https://github.com/Mohil7010" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={17}/></a><a href="https://linkedin.com/in/mohilshastri7010" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={17}/></a><a href="mailto:mrshastri08@gmail.com" aria-label="Email"><Mail size={17}/></a></div><small>© 2026 MOHIL SHASTRI. ALL RIGHTS RESERVED.</small></footer>
  </div>
}

export default App
