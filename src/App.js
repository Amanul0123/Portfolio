import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Header Section with centered name and resume button */}
      <section id="header" className="header-section">
        <div className="header-content">
          <h1 className="header-name">Hey, I am Amanul Haque</h1>
          <a
            href="\Amanul_Haque_Java_Developer_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-button"
          >
            Resume
          </a>
        </div>
        <p>
          I'm a computer science engineering student in pursuit of becoming a productive professional with a keen interest in problem-solving and software development.
        </p>
      </section>

      {/* Education Section */}
      <section id="education">
        <h2>Education</h2>
      <div className="education-entry">
        <div className="edu-header">
          <h3>Chaudhary Charan Singh University</h3>
          <span className="edu-location">Meerut, Uttar Pradesh</span>
        </div>
        <div className="edu-details">
          <p className="edu-degree">B.Tech - Computer Science</p>
          <p className="edu-date">Jul 2021 - May 2025</p>
        </div>
      </div>
      <div className="education-entry">
        <div className="edu-header edu-header-b">
          <h3>St. Xavier's School</h3>
          <span className="edu-location">Belthara Road, Ballia, Uttar Pradesh</span>
        </div>
        <div className="edu-details">
          <p className="edu-degree">Class XII</p>
          <p className="edu-date">May 2021</p>
        </div>
      </div>
      </section>

      {/* Work Experience Section */}
     <section id="experience" className="experience-section">
        <h2>Work Experience</h2>
      <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-title">Safahomes</h3>
        <span className="experience-location">Remote</span>
      </div>
      <div className="experience-meta">
        <span className="experience-role">AI Engineer</span>
        <span className="experience-duration">Jan 2025 – Present</span>
      </div>
       <ul className="experience-list">
  <li>&bull;&nbsp; Built an AI-powered architecture platform for automated floor plan and residential design.</li>
  <li>&bull;&nbsp; Implemented prompt-driven AI workflows for architectural planning and visualization.</li>
  <li>&bull;&nbsp; Integrated REST APIs, backend services, and MongoDB for data management.</li>
  <li>&bull;&nbsp; Ensured application security, scalability, and performance optimization.</li>
  <li>&bull;&nbsp; Collaborated with founders and senior developers using Agile practices.</li>
</ul>
      </div>
      
      <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-title">Qspider</h3>
        <span className="experience-location">Noida</span>
      </div>
      <div className="experience-meta">
        <span className="experience-role">Java Full Stack Developer Intern</span>
        <span className="experience-duration">March 2024 – Aug 2024</span>
      </div>
        <ul className="experience-list">
        <li>&bull;&nbsp;Developed enterprise-level applications using Spring Boot and Hibernate ORM for Online Voting, Survey, and E-Commerce platforms supporting 500+ concurrent users.</li>

<li>&bull;&nbsp;Designed and implemented RESTful APIs using Spring MVC with JWT authentication and Spring Security for secure role-based access control.</li>

<li>&bull;&nbsp;Optimized MySQL database performance using Hibernate query tuning and indexing strategies, reducing query response time by 40%.</li>

<li>&bull;&nbsp;Implemented centralized exception handling, SLF4J logging, and JUnit unit testing to ensure robust and maintainable applications.</li>

        </ul>
      </div>

      <div className="experience-item">
      <div className="experience-header">
        <h3 className="experience-title">Indian Railways</h3>
        <span className="experience-location">Varanasi</span>
      </div>
      <div className="experience-meta">
        <span className="experience-role">Software Engineer Intern</span>
        <span className="experience-duration">Jul 2023 – Aug 2023</span>
      </div>
        <ul className="experience-list">
          <li>&bull;&nbsp; Developed a web application based on Library Information and Booking Management System.</li>
          <li>&bull;&nbsp; Integrate database like MongoDB and APIs for data-driven application.</li>
          <li>&bull;&nbsp; Ensure web application security, scalability, and performance.</li>
          <li>&bull;&nbsp; Assist in designing, developing, and testing other web applications with team.</li>
        </ul>
      </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
      <h2>Projects</h2>

      {/* Project 1 */}
      <div className="project-item">
        <div className="project-header">
          <h3 className="project-title">Online Voting & Survey Application</h3>
          <span className="project-links project-links-a">
          [ <a href="https://github.com/Amanul0123/online-voting-survey-frontend.git" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://online-voting-survey.netlify.app/" target="_blank" rel="noreferrer">Live Demo</a> ]
          </span>
          <span className="project-date">Nov 2024</span>
        </div>
        <div className="project-description">
          <p className="dot-line">Built a full-stack online voting and survey application enabling secure digital participation.</p>
          <p className="dot-line">Implemented authentication and duplicate-vote prevention to ensure fair and reliable results.</p>
          <p className="dot-line">Designed RESTful APIs in Spring Boot to handle user management, voting operations, and survey creation.</p>
          <p className="dot-line">Developed an interactive React.js frontend and integrated MySQL for persistent data storage and real-time
 result tracking.</p>
        </div>
      </div>

      {/* Project 2 */}
      <div className="project-item">
        <div className="project-header">
          <h3 className="project-title">Wikipedia Search Engine</h3>
          <span className="project-links project-links-b">
          [ <a href="https://github.com/Amanul0123/wikipedia-search-engine.git" target="_blank" rel="noreferrer">GitHub</a> | <a href="https://project-wikipedia.onrender.com/" target="_blank" rel="noreferrer">Live Demo</a> ]
          </span>
          <span className="project-date">Mar 2024</span>
        </div>

        <div className="project-description">
          <p className="dot-line">Built a dynamic app using HTML, CSS, JS to fetch data from Wikipedia API.</p>
          <p className="dot-line">Used asynchronous JavaScript for real-time search results.</p>
          <p className="dot-line">Designed a responsive UI using Bootstrap for mobile compatibility.</p>
          <p className="dot-line">Focused on real-time UX feedback and fast data delivery.</p>
        </div>
      </div>
      </section>

      


      {/* Skills Section */}
      <section id="skills">
        <h2>Languages</h2>
        <ul className="languages">
          <li>C</li>
          <li>JavaScript</li>
          <li>Java</li>
           <li>Python</li>
        </ul>
      </section>
      <section id="skills">
        <h2 className="tf">Technologies/Frameworks</h2>
        <ul className="tech">
          <li>HTML</li>
          <li>CSS</li>
          <li>Bootstrap</li>
          <li>Spring Boot</li>
          <li>Hibernate</li>
          <li>Express</li>
          <li>React</li>
          <li>NodeJS</li>
           <li>Gemini</li>
            <li>AI</li>
          <ul className="tech">
          <li>Redux</li>
          <li>Tailwind</li>
          <li>Git</li>
          </ul>
        </ul>
      </section>
      <section id="skills">
        <h2>Databases</h2>
        <ul className="data">
          <li>MongoDB</li>
          <li>MySQL</li>
        </ul>
      </section>
      <section id="skills">
        <h2>Tools</h2>
        <ul className="tool">
          <li>Terminal</li>
          <li>VS Code</li>
          <li>IntelliJ</li>
        </ul>
      </section>

      {/* Achievements Section */}
      <section id="achievements">
        <h2>Achievements</h2>
        <ul className="achievement-list">
          <li>
            <span className="achievement-text">&bull;&nbsp; Open Source Contributor - GSSoC (4+ pull requests accepted)</span>
            <span className="achievement-date">Oct 2024</span>
          </li>
          <li>
            <span className="achievement-text">&bull;&nbsp; Open Source Contributor - Hacktoberfest (4+ pull requests accepted)</span>
            <span className="achievement-date">Oct 2024</span>
          </li>
          <li>
            <span className="achievement-text">&bull;&nbsp; Open Source Contributor - DevFest (Rank 115 out of 1500)</span>
            <span className="achievement-date">Oct 2024</span>
          </li>
          <li>
            <span className="achievement-text">&bull;&nbsp; Problem Solving Certification - HackerRank</span>
            <span className="achievement-date">Apr 2024</span>
          </li>
          <li>
            <span className="achievement-text">&bull;&nbsp; Introduction to Generative AI Certification - Coursera</span>
            <span className="achievement-date">Oct 2023</span>
          </li>
          <li>
            <span className="achievement-text">&bull;&nbsp; Prompt Design in Vertex AI Certification - Google</span>
          </li>
          <li>
            <span className="achievement-text">&bull;&nbsp; Develop GenAI Apps with Gemini and Streamlit Certification - Google</span>
          </li>
        </ul>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <h2>Contact Me</h2>
        <ul className="contact-list">
          <li>
            <a href="tel:+91-7705010322" target="_blank">
            <i className="fas fa-phone"></i> +91-7705010322
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="mailto:amanulhaque376@gmail.com" target="_blank">
            <i className="fas fa-envelope"></i> amanulhaque376@gmail.com
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="https://www.linkedin.com/in/amanul-haque-321505228" target="_blank">
            <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <li>
            <a href="https://github.com/Amanul0123" target="_blank">
            <i className="fab fa-github"></i> GitHub
            </a>
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="foot">
        &copy; {new Date().getFullYear()} Amanul Haque &bull; All rights reserved
      </footer>
    </div>
  );
}

export default App;
