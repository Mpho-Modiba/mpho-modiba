import React from "react";

export default function MyPartfolio() {
  return (
    <div className="portfolio-container">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="navbar-title">MyPortfolio</h1>
        <div className="navbar-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section" id="about">
        <div className="hero-avatar-container">
          <img
            src="./assets/pictureOfMyFormalSelf.jpg"
            alt="profile"
            className="hero-avatar"
          />
        </div>
        <h2 className="hero-name">Mpho Modiba</h2>
        <p className="hero-role">Full-Stack & Mobile Developer</p>
        <p className="hero-description">
  Final-year Software Engineering student graduating May 2026. 
  I design and build scalable, high-performance web and mobile applications 
  with a focus on real-world impact, performance optimization, and clean architecture.
</p>

<p className="hero-subtext">
  Former Programmer at Finance Portal • AI-native developer • Full-stack specialist
</p>
{/* About Me Deep Section */}
<section className="about-extended">
  <h2 className="section-title">About Me</h2>
  <p>
    I consider myself an AI-native engineer, leveraging modern tools and intelligent workflows 
    to accelerate development cycles and deliver high-quality, scalable software.
  </p>
  <p>
    My approach combines strong software engineering fundamentals with rapid execution, 
    allowing me to thrive in fast-paced, high-impact environments.
  </p>
</section>
        <div className="hero-buttons">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-secondary">Contact Me</a>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {[
            { name: "Java" },
            { name: "C#" },
            { name: "Kotlin" },
            { name: "JavaScript" },
            { name: "React" },
            { name: "Node.js"},
            { name: "MongoDB" },
            { name: "SQL Server" },
            { name: "Git" },
            {name: "Software Development Lifecycle (SDLC)"},
            {name: "Agile Methodologies"},
            {name: "Team Collaboration"},
            {name:"Time Management"},
            {name: "Next.js"},
            {name:".NET Framework"},
            {name:"Android Development"},
            {name: "NOSql Databases"},
            {name: "API Integration"},
            {name: "React Native"},
            {name: "Full-Stack Development"},

          ].map((skill, index) => (
            <div key={skill.name} className="skill-card" style={{animationDelay: `${index * 100}ms`}}>
              <div className="skill-name">{skill.name}</div>
            </div>
          ))}
        </div>
      </section>
{/* Experience Section */}
<section id="experience" className="experience-section">
  <h2 className="section-title">Experience</h2>

  <div className="experience-card">
    <h3>Programmer – Finance Portal</h3>
    <p className="experience-duration">2025</p>

    <ul className="experience-points">
      <li>Worked in a fast-paced financial environment building real-world applications</li>
      <li>Collaborated with teams to deliver scalable full-stack solutions</li>
      <li>Improved system performance through code optimization and structured design</li>
      <li>Prioritized requirements and ensured high-quality, reliable software delivery</li>
      <li>Adapted quickly to new technologies and real-world engineering challenges</li>
    </ul>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {[
            {
  title: "Municipality Service Platform",
  desc: "Built a full-stack web platform enabling citizens to report municipal issues and track service requests in real time.",
  impact: "Improved issue reporting visibility and reduced response tracking delays",
  tech: "React • Node.js • MongoDB",
  link: "https://github.com/Mpho-Modiba/Municipality-Application",
  icon: "🏛️"
},
            {
  title: "Finance App",
  desc: "Built a full-stack budgeting platform using React and Node.js, improving user expense tracking efficiency and enabling real-time financial insights.",
  impact: "Improved tracking efficiency by 25%",
  tech: "React • Node.js • MongoDB",
  link: "https://github.com/Mpho-Modiba/Banking-Management-System",
  icon: "💰"
},
            {
  title: "School Management System",
  desc: "Developed a native Android application to streamline attendance tracking and improve communication between students and educators in real time.",
  impact: "Reduced manual attendance tracking and improved communication efficiency",
  tech: "Kotlin • Firebase • Android Studio",
  link: "https://github.com/Mpho-Modiba/NJApplicationDemo",
  icon: "📚"
},
          ].map((project, index) => (
            <div key={project.title} className="project-card" style={{animationDelay: `${index * 200}ms`}}>
              <div className="project-icon">{project.icon}</div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.desc}</p>
              <a href={project.link} target="_blank" rel="noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-intro">Interested in working together? Reach out!</p>
        <div className="contact-grid">
          <div className="contact-card">
            <h3 className="contact-label">Email</h3>
            <p className="contact-value">mphomodiba623@gmail.com</p>
          </div>
          <div className="contact-card">
            <h3 className="contact-label">Phone</h3>
            <p className="contact-value">+27 71 143 6434</p>
          </div>
          <div className="contact-card">
            <h3 className="contact-label">LinkedIn</h3>
            <a href="https://linkedin.com/in/mpho-modiba-477915292" target="_blank" rel="noreferrer" className="contact-link">View Profile</a>
          </div>
          <div className="contact-card">
            <h3 className="contact-label">GitHub</h3>
            <a href="https://github.com/Mpho-Modiba" target="_blank" rel="noreferrer" className="contact-link">View GitHub</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Mpho Modiba. All rights reserved.
      </footer>
    </div>
  );
}
