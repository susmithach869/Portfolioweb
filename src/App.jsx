
import "./App.css";

const skills = [
  {
    name: "HTML",
    icon: "5",
    category: "STRUCTURE",
    description: "Building semantic, accessible web pages.",
    status: "Learning & building",
  },
  {
    name: "CSS",
    icon: "3",
    category: "DESIGN",
    description: "Responsive layouts, styling and animations.",
    status: "Learning & building",
  },
  {
    name: "JavaScript",
    icon: "JS",
    category: "INTERACTION",
    description: "Creating dynamic behavior and useful features.",
    status: "Learning & building",
  },
  {
    name: "React",
    icon: "⚛",
    category: "COMPONENTS",
    description: "Building reusable components and interfaces.",
    status: "Learning & building",
  },
];

const projects = [
  {
    number: "01",
    name: "Project One",
    description: "Replace this text with a description of your first project.",
    technologies: ["HTML", "CSS", "JavaScript"],
    image:"",
    demo: "",
    source: "",
    status: "Coming soon",
  },
  {
    number: "02",
    name: "Project Two",
    description: "Describe the problem your project solves when it is ready.",
    technologies: ["React", "JavaScript"],
    image:"/Images/Anya.jpg",
    demo: "https://github.com/susmithach869",
    source: "",
    status: "Coming soon",
  },
  {
    number: "03",
    name: "Project Three",
    description: "Add your next project and its key features here.",
    technologies: ["React", "CSS"],
    image:"",
    demo: "",
    source: "",
    status: "Coming soon",
  },
];

function SectionHeading({ label, title, description }) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

function Navbar() {
  return (
    <header className="navbar">
      <a className="logo" href="#home" aria-label="Home">
        S<span>.</span>
      </a>

      <nav aria-label="Main navigation">
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#about">About</a>
        <a className="nav-contact" href="#contact">
          Let's connect ↗
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero section" id="home">
      <div className="hero-content">
        <div className="availability">
          <span className="status-dot" />
          STUDENT · ASPIRING DEVELOPER
        </div>

        <h1>
          Turning ideas
          <br />
          into <span className="gradient-text">digital</span>
          <br />
          experiences.
        </h1>

        <p className="hero-description">
          Hi, I'm Susmitha. I'm learning to build modern,
          responsive web experiences with HTML, CSS, JavaScript
          and React, while growing toward full-stack development.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="button primary-button">
            Explore my work <span>↗</span>
          </a>
          <a href="#about" className="button outline-button">
            About me
          </a>
        </div>

        <div className="hero-note">
          <span>⌘</span> Learn continuously
          <span>✦</span> Build thoughtfully
        </div>
      </div>

      {/* Hero code illustration */}
      <div className="hero-visual">
        <div className="glow-orb" />

        <div className="code-window">
          <div className="window-header">
            <div className="window-dots">
              <i />
              <i />
              <i />
            </div>
            <span>developer.jsx</span>
          </div>

          <div className="code-content">
            <p>
              <span className="code-purple">const</span> developer = {"{"}
            </p>
            <p className="indent">
              name: <span className="code-green">"Susmitha"</span>,
            </p>
            <p className="indent">
              role: <span className="code-green">"Full-Stack Developer"</span>,
            </p>
            <p className="indent">
              learning: <span className="code-yellow">true</span>,
            </p>
            <p className="indent">
              aiAssisted: <span className="code-yellow">true</span>,
            </p>
            <p className="indent">
              mindset: <span className="code-green">"Never stop building"</span>
            </p>
            <p>{"};"}</p>
            <br />
            <p>
              <span className="code-purple">function</span>{" "}
              <span className="code-blue">buildFuture</span>() {"{"}
            </p>
            <p className="indent">
              return <span className="code-green">"Keep creating!"</span>;
            </p>
            <p>{"}"}</p>
          </div>

          <div className="code-footer">
            <span>● Ready to learn</span>
            <span>React · JavaScript</span>
          </div>
        </div>

        <div className="floating-card floating-top">
          <span>✦</span>
          <div>
            <strong>Creative thinking</strong>
            <small>Ideas into interfaces</small>
          </div>
        </div>

        <div className="floating-card floating-bottom">
          <span>⌘</span>
          <div>
            <strong>AI + human judgment</strong>
            <small>Build smarter, learn deeper</small>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ skill }) {
  return (
    <article className="skill-card">
      <div className="skill-card-top">
        <span className="skill-icon">{skill.icon}</span>
        <span className="skill-category">{skill.category}</span>
      </div>

      <h3>{skill.name}</h3>
      <p>{skill.description}</p>

      <div className="skill-card-bottom">
        <span className="skill-indicator" />
        {skill.status}
      </div>
    </article>
  );
}

function Skills() {
  return (
    <section className="section" id="skills">
      <SectionHeading
        label="MY TOOLKIT"
        title="The tools behind my ideas."
        description="My growing toolkit for building modern web experiences."
      />

      <div className="horizontal-track" aria-label="Scrollable skills">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>

      <p className="scroll-hint">
        <span>←</span> SCROLL TO EXPLORE <span>→</span>
      </p>
    </section>
  );
}

function ProjectCard({ project }) {
  const hasDemo = Boolean(project.demo.trim());
  const hasSource = Boolean(project.source.trim());

  return (
    <article className="project-card">
      
        <div className={`project-preview ${project.image ? "has-image" : ""}`}>
          {project.image ? (
            <img
              className="project-image"
              src={project.image}
              alt={`${project.name} project preview`}
              loading="lazy"
            />
          ) : (
            <div className="preview-placeholder">
              <span className="preview-symbol">✳</span>
              <div className="preview-line long" />
              <div className="preview-line medium" />
              <div className="preview-blocks">
                <i />
                <i />
                <i />
              </div>
            </div>
          )}

          <span className="project-status">{project.status}</span>
        </div>


      <div className="project-card-content">
        <span className="project-number">PROJECT {project.number}</span>
        <h3>{project.name}</h3>
        <p>{project.description}</p>

        <div className="tags">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-actions">
          {hasDemo ? (
            <a href={project.demo} target="_blank" rel="noreferrer">
              Live demo ↗
            </a>
          ) : (
            <span className="project-link-disabled">
              Live demo · Coming soon
            </span>
          )}

          {hasSource ? (
            <a href={project.source} target="_blank" rel="noreferrer">
              Source code ↗
            </a>
          ) : (
            <span className="project-link-disabled">
              GitHub · Coming soon
            </span>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <SectionHeading
        label="MY PROJECTS"
        title="Ideas become experiences."
        description="A space for the projects I'll build, improve and share."
      />

      <div className="horizontal-track project-track" aria-label="Scrollable projects">
        {projects.map((project) => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

      <p className="scroll-hint">
        <span>←</span> MORE PROJECTS, MORE TO EXPLORE <span>→</span>
      </p>
    </section>
  );
}

function AIWorkflow() {
  return (
    <section className="section" id="ai">
      <div className="ai-card">
        <div className="ai-content">
          <span className="section-label">MY DEVELOPMENT APPROACH</span>
          <h2>AI is my coding co-pilot.</h2>

          <p className="ai-statement">
            I don't just ask AI for code.
            <span> I guide it, test it, and make it work.</span>
          </p>

          <p>
            I use AI-assisted development to explore solutions, understand
            concepts and work through problems. I review generated code,
            test the results and learn how things work instead of blindly
            copying answers.
          </p>
        </div>

        <div className="workflow">
          {[
            "Define the problem",
            "Collaborate with AI",
            "Review and understand",
            "Test, debug and improve",
          ].map((step, index) => (
            <div className="workflow-row" key={step}>
              <span>0{index + 1}</span>
              <p>{step}</p>
              <b>{["✓", "✦", "⌘", "↗"][index]}</b>
            </div>
          ))}
          <div className="workflow-result">
            ✦ Human judgment stays in control.
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section" id="about">
      <SectionHeading
        label="GET TO KNOW ME"
        title="The person behind the code."
        description="A little about my journey and what I'm working toward."
      />

      <div className="about-grid">
        <div className="about-highlight">
          <span className="about-symbol">S.</span>
          <h3>
            Curious by nature.
            <br />
            Developer by choice.
          </h3>
          <p>Learning today. Building for tomorrow.</p>
        </div>

        <div className="about-details">
          <p>
            I'm a final-year diploma student interested in web development
            and creating user-friendly digital experiences. I'm strengthening
            my skills in HTML, CSS, JavaScript and React while preparing to
            explore backend development.
          </p>

          <div className="education-card">
            <span className="education-icon">⌂</span>
            <div>
              <span className="section-label">EDUCATION</span>
              <h3>AANM &amp; VVRSR Polytechnic College</h3>
              <p>Diploma · 2024–2027</p>
            </div>
          </div>

          <div className="education-card">
            <span className="education-icon">↗</span>
            <div>
              <span className="section-label">CURRENT FOCUS</span>
              <h3>Growing toward full-stack development</h3>
              <p>Learning fundamentals and building real projects.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="section contact-section" id="contact">
      <span className="section-label">LET'S CONNECT</span>
      <h2>
        Every great developer
        <br />
        starts <span className="gradient-text">somewhere.</span>
      </h2>
      <p>
        I'm ready to learn, collaborate and grow.
        Let's connect and build something meaningful.
      </p>

      <div className="hero-buttons">
        <a
          className="button primary-button"
          href="https://github.com/susmithach869"
          target="_blank"
          rel="noreferrer"
        >
          Explore my GitHub ↗
        </a>
        <a className="button outline-button" href="#home">
          Back to top ↑
        </a>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="site-shell">
      <div className="container">
        <Navbar />

        <main>
          <Hero />
          <Skills />
          <Projects />
          <AIWorkflow />
          <About />
          <Contact />
        </main>

        <footer className="footer">
          <a className="logo" href="#home">
            S<span>.</span>
          </a>
          <p>Designed with curiosity. Built with intention.</p>
          <a
            href="https://github.com/susmithach869"
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <span>© {new Date().getFullYear()} Susmitha</span>
        </footer>
      </div>
    </div>
  );
}

export default App;
