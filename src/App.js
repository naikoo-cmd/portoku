import React, { useEffect, useState } from 'react';
import Sidebar from './components/Sidebar';
import './App.css';

const sections = [
  { id: 'about', label: 'about' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Project' },
];

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 120;
      let current = 'about';
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          current = sections[i].id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-root">
      <Sidebar activeSection={activeSection} />
      <main className="main-content">
        <section id="about">
          <h2>About</h2>
          <p>
            Nico Aramy is a versatile professional with a diploma in Computer Engineering and a strong foundation in administration, IT support, and full-stack web development. With a career spanning educational institutions and private businesses, he has built a diverse skill set that includes managing school operations, designing digital forms and automations with Google Workspace, and handling student and staff data through national education platforms. His adaptability and organizational strength are backed by solid communication and problem-solving abilities.
          </p>
          <p>
            In addition to his administrative role, Nico has engaged in freelance full-stack development using Laravel and Next.js, focusing on user-friendly, responsive web applications. He has experience with API integration, authentication systems, and deployment, showing a commitment to building functional digital tools. His background also includes creative marketing support—designing promotional materials and coordinating events at a vehicle dealership in Banda Aceh.
          </p>
          <p>
            Beyond his tech and office roles, Nico is an entrepreneur running a small bakery business, where he applies strategic thinking in product management, customer service, and marketing. His technical proficiency, entrepreneurial mindset, and dedication to continuous learning make him a valuable asset across both tech-driven and operational environments.
          </p>
        </section>
        <section id="experience">
  <h2>Experience</h2>
  <div className="experience-list">
    <div className="experience-card">
      <div className="experience-card-left">
        <div className="experience-card-date">2024 - Present</div>
        <img 
          src="https://via.placeholder.com/90x90.png?text=Logo" 
          alt="Company/Project Logo" 
          className="experience-card-image"
        />
      </div>
      <div className="experience-card-right">
        <div className="experience-card-title-row">
          <span className="experience-card-title">Senior Front End</span>
          <span className="experience-card-location">Jakarta</span>
        </div>
        <div className="experience-card-desc">
          Responsible for developing scalable frontend architecture and leading a team of engineers to deliver high-quality web applications.
        </div>
        <div className="experience-card-skills">
          <span className="experience-skill">JavaScript</span>
          <span className="experience-skill">React</span>
          <span className="experience-skill">Laravel</span>
          <span className="experience-skill">Next.js</span>
        </div>
      </div>
    </div>
    {/* Tambah card berikutnya dengan struktur serupa */}
    <div className="experience-card">
      <div className="experience-card-left">
        <div className="experience-card-date">2022 - 2024</div>
        <img 
          src="https://via.placeholder.com/90x90.png?text=Logo2" 
          alt="Company/Project Logo" 
          className="experience-card-image"
        />
      </div>
      <div className="experience-card-right">
        <div className="experience-card-title-row">
          <span className="experience-card-title">Web Developer</span>
          <span className="experience-card-location">Remote</span>
        </div>
        <div className="experience-card-desc">
          Developed and maintained full-stack web solutions for clients, focusing on performance and modern UX.
        </div>
        <div className="experience-card-skills">
          <span className="experience-skill">PHP</span>
          <span className="experience-skill">Laravel</span>
          <span className="experience-skill">MySQL</span>
          <span className="experience-skill">Bootstrap</span>
        </div>
      </div>
    </div>
    {/* Tambah card berikutnya dengan struktur serupa */}
    <div className="experience-card">
      <div className="experience-card-left">
        <div className="experience-card-date">2020 - 2022</div>
        <img 
          src="https://via.placeholder.com/90x90.png?text=Logo2" 
          alt="Company/Project Logo" 
          className="experience-card-image"
        />
      </div>
      <div className="experience-card-right">
        <div className="experience-card-title-row">
          <span className="experience-card-title">Android Developer</span>
          <span className="experience-card-location">Medan</span>
        </div>
        <div className="experience-card-desc">
          Developed and maintained Android applications, focusing on performance and modern UX.
        </div>
        <div className="experience-card-skills">
          <span className="experience-skill">Java</span>
          <span className="experience-skill">Kotlin</span>
          <span className="experience-skill">Android SDK</span>
          <span className="experience-skill">Firebase</span>
        </div>
      </div>
    </div>
  </div>
</section>
        <section id="projects">
          <h2>Project</h2>
          <p>Daftar proyek yang pernah kamu kerjakan...</p>
        </section>
      </main>
    </div>
  );
}

export default App;