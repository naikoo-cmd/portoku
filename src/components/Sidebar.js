import React from 'react';
import './Sidebar.css';

function Sidebar({ activeSection }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-content">
        <h1 className="sidebar-title">I'm Nico Aramy</h1>
        <p className="sidebar-subtitle">Web Developer | Frontend Enthusiast</p>
        <p className="sidebar-tagline">Make something amazing.</p>
        <nav className="sidebar-nav">
          <a
            href="#about"
            className={`sidebar-nav-link${activeSection === 'about' ? ' active' : ''}`}
          >about</a>
          <a
            href="#experience"
            className={`sidebar-nav-link${activeSection === 'experience' ? ' active' : ''}`}
          >Experience</a>
          <a
            href="#projects"
            className={`sidebar-nav-link${activeSection === 'projects' ? ' active' : ''}`}
          >Project</a>
        </nav>
        {/* Social icons */}
        <div className="sidebar-social">
          <a
            href="https://www.linkedin.com/in/nico-aramy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="sidebar-social-link"
          >
            {/* LinkedIn SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="sidebar-social-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 8a6 6 0 0 1 6 6v6" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <circle cx="8" cy="8" r="1" />
              <line x1="16" y1="11" x2="16" y2="16" />
              <path d="M16 16v-3a2 2 0 0 0-4 0v3" />
            </svg>
          </a>
          <a
            href="https://www.instagram.com/nico_aramy"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="sidebar-social-link"
          >
            {/* Instagram SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="sidebar-social-icon">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37Z" />
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
            </svg>
          </a>
          <a
            href="https://github.com/naiko-coder"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="sidebar-social-link"
          >
            {/* GitHub SVG */}
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              className="sidebar-social-icon">
              <path d="M12 2C6.476 2 2 6.484 2 12.021c0 4.428 2.865 8.186 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.031 1.532 1.031.892 1.53 2.341 1.089 2.91.833.092-.647.35-1.089.636-1.34-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.254-.447-1.274.098-2.656 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.91-1.296 2.75-1.025 2.75-1.025.546 1.382.202 2.402.1 2.656.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.339-.012 2.423-.012 2.753 0 .267.18.578.688.48A10.02 10.02 0 0022 12.021C22 6.484 17.523 2 12 2z" />
            </svg>
          </a>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;