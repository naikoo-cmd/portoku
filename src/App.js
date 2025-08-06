import React, { useEffect, useState } from "react";
import ProjectCard from "./components/ProjectCard";
import Sidebar from "./components/Sidebar";
import Lightspot from "./components/Lightspot";
import ParticlesBackground from "./components/ParticlesBackground";

import "./App.css";

function App() {
  // State to track the active section based on scroll position
  const [activeSection, setActiveSection] = useState("about");
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "about", label: "about" },
        { id: "experience", label: "Experience" },
        { id: "projects", label: "Project" },
        { id: "education", label: "Education" },
      ];
      const scrollPos = window.scrollY + 120;
      let current = "about";
      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          current = sections[i].id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    // Jika sudah selesai load sebelum useEffect jalan
    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div className="app-root">
      {loading && (
        <div className="preloader">
          <div className="preloader-spinner"></div>
          <div className="preloader-intro">
            <span className="preloader-intro-text">Welcome to</span>
            <span className="preloader-intro-brand">nicoaramy.com</span>
          </div>
        </div>
      )}
      <Lightspot />
      <ParticlesBackground />
      <Sidebar activeSection={activeSection} />
      <main className="main-content">
        <section className="text-center py-4 px-6 max-w-4xl mx-auto" id="about">
  <h2>About</h2>
  <p>
    I was a junior developer with a background in Computer Engineering,
    working in a hospital IT department where I managed SIMRS,
    maintained servers, and supported day-to-day operations. I brought a strong
    mix of tech skills and adaptability — solving real-world problems
    under pressure while ensuring systems stayed reliable and efficient.
  </p>
  <p>
    My main focus was full-stack web development using JavaScript-based
    technologies like{" "}
    <span className="footer-highlight">React</span> for the frontend,{" "}
    <span className="footer-highlight">Node.js</span> and{" "}
    <span className="footer-highlight">Express</span> for the backend, and{" "}
    <span className="footer-highlight">MySQL</span> for database
    management. I built responsive, scalable, and user-friendly
    applications with clean code and efficient architecture. For styling,
    I relied on <span className="footer-highlight">Tailwind CSS</span>, and
    I often used tools like{" "}
    <span className="footer-highlight">Postman</span> for API testing and{" "}
    <span className="footer-highlight">Navicat</span> for managing
    databases. My workflow included version control with{" "}
    <span className="footer-highlight">Git</span>, and I was comfortable
    working in both local and cloud-based environments.
    While my core stack was JavaScript-based, I also had experience with 
    <span className="footer-highlight"> Laravel</span> and used it{" "} 
    to build full-featured web applications, especially when PHP was 
    preferred for server-side logic or integration with legacy systems.
  </p>
  <p>
    I had hands-on experience working with{" "}
    <span className="footer-highlight">Linux</span>-based servers,
    handling tasks like automated service setups, system monitoring, and
    optimization — ensuring performance and stability for local network
    systems.
  </p>
  <p>
    Outside of tech, I helped run a small family bakery, where I applied
    creative thinking in product management, customer service, and
    marketing. This blend of technical and business experience made me a
    flexible and well-rounded developer.
  </p>
  <p>
    I was passionate about learning, building, and growing — always looking
    for opportunities to level up and contribute to meaningful projects.
  </p>
</section>

        <section id="experience">
          <h2>Work Experience</h2>
          <div className="experience-list">
            <div className="experience-card">
              <div className="experience-card-left">
                <div className="experience-card-date">2025 - 2025</div>
                <img
                  src="/Paperlesslogo.png"
                  alt="Paperless Hospital Logo"
                  className="experience-card-image"
                />
              </div>
              <div className="experience-card-right">
                <div className="experience-card-title-row">
                  <div className="flex items-center gap-2">
                      <span className="experience-card-title">
                        Junior Developer 
                      </span>
                      <span className="sidebar-tagline text-gray-400 hover:text-white transition-colors duration-200"> 
                         (Short-term internship)
                      </span>
                    </div>
                  <span className="experience-card-location">Gayo Lues</span>
                </div>
                <span className="experience-card-workplace">
                  PT. Digital Kreasi Muslim (Paperless Hospital) | RSU Muhammad Ali Kasim
                </span>
                <div className="experience-card-desc">
                  <span className="footer-highlight">
                    Acted as on-site programmer {" "}
                  </span>
                  supporting SIMRS users, resolving issues, and developing features based on hospital needs. 
                  Also handled system setup, data backups, and documentation.
                </div>
                <div className="experience-card-skills">
                  <span className="experience-skill">Troubleshooting</span>
                  <span className="experience-skill">Development</span>
                  <span className="experience-skill">Linux</span>
                  <span className="experience-skill">Backup</span>
                  <span className="experience-skill">Documentation</span>
                  <span className="experience-skill">Communication</span>

                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-card-left">
                <div className="experience-card-date">2023 - Present</div>
                <img
                  src="/webdevlogo.png"
                  alt="Company/Project Logo"
                  className="experience-card-image"
                />
              </div>
              <div className="experience-card-right">
                <div className="experience-card-title-row">
                  <span className="experience-card-title">
                    Full-stack Web Developer
                  </span>
                  <span className="experience-card-location">Remote</span>
                </div>
                <div className="experience-card-desc">
                  <span className="footer-highlight">
                    Developed and maintained{" "}
                  </span>
                  internal web applications using Laravel and Next.js, featuring
                  secure user authentication, responsive interfaces, and
                  functionality tailored to organizational workflows.
                </div>
                <div className="experience-card-skills">
                  <span className="experience-skill">Laravel</span>
                  <span className="experience-skill">Next.js</span>
                  <span className="experience-skill">MySQL</span>
                  <span className="experience-skill">API</span>
                  <span className="experience-skill">Auth</span>
                  <span className="experience-skill">UI/UX</span>
                  <span className="experience-skill">Etc..</span>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-card-left">
                <div className="experience-card-date">2024 - Present</div>
                <img
                  src="/vanimommylogo.png"
                  alt="Mommy Vani Bakery Logo"
                  className="experience-card-image"
                />
              </div>
              <div className="experience-card-right">
                <div className="experience-card-title-row">
                  <span className="experience-card-title">Home Business Owner</span>
                  <span className="experience-card-location">Central Aceh</span>
                </div>
                <span className="experience-card-workplace">
                  Mommy and Vani Bakery
                </span>
                <div className="experience-card-desc">
                  <span className="footer-highlight">
                    Ran a small food and beverage business
                  </span>
                  , specializing in pastries and drinks; responsibilities included
                  product preparation, inventory tracking, order management, and
                  implementing strategies to optimize profits.
                </div>
                <div className="experience-card-skills">
                  <span className="experience-skill">Product Deployment</span>
                  <span className="experience-skill">Food Safety</span>
                  <span className="experience-skill">Inventory Management</span>
                  <span className="experience-skill">Marketing Strategy</span>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-card-left">
                <div className="experience-card-date">2022 - 2025</div>
                <img
                  src="/tkcendlogo.jpg"
                  alt="LogoTK IT Cendekia"
                  className="experience-card-image"
                />
              </div>
              <div className="experience-card-right">
                <div className="experience-card-title-row">
                  <span className="experience-card-title">School Operator</span>
                  <span className="experience-card-location">Central Aceh</span>
                </div>
                <span className="experience-card-workplace">TK IT Cendekia</span>
                <div className="experience-card-desc">
                  <span className="footer-highlight">
                    Oversaw school administrative operations
                  </span>
                  , including managing student and staff databases, handling
                  Dapodik system updates, organizing BOP budgeting, and offering
                  basic IT troubleshooting and support.
                </div>
                <div className="experience-card-skills">
                  <span className="experience-skill">Google Workspace</span>
                  <span className="experience-skill">AppScript</span>
                  <span className="experience-skill">Administration</span>
                  <span className="experience-skill">Networking</span>
                  <span className="experience-skill">IT Support</span>
                  <span className="experience-skill">Dapodik</span>
                  <span className="experience-skill">ARKAS</span>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-card-left">
                <div className="experience-card-date">2020 - 2021</div>
                <img
                  src="/suzukilogo.webp"
                  alt="PT. Armada Banda Jaya Logo"
                  className="experience-card-image"
                />
              </div>
              <div className="experience-card-right">
                <div className="experience-card-title-row">
                  <span className="experience-card-title">Designer</span>
                  <span className="experience-card-location">Banda Aceh</span>
                </div>
                <span className="experience-card-workplace">PT. Armada Banda Jaya</span>
                <div className="experience-card-desc">
                  <span className="footer-highlight">
                    Created marketing and promotional materials
                  </span>
                  {" for print and digital use, coordinated ad placements across multiple channels, supported company events, and handled visual documentation of organizational activities."}
                </div>
                <div className="experience-card-skills">
                  <span className="experience-skill">Adobe Photoshop</span>
                  <span className="experience-skill">CorelDRAW</span>
                  <span className="experience-skill">Billboard Ads</span>
                  <span className="experience-skill">Branding</span>
                </div>
              </div>
            </div>
            <div className="experience-card">
              <div className="experience-card-left">
                <div className="experience-card-date">2018 - 2019</div>
                <img
                  src="/lp3ilogo.png"
                  alt="Lp3i Logo"
                  className="experience-card-image"
                />
              </div>
              <div className="experience-card-right">
                <div className="experience-card-title-row">
                  <span className="experience-card-title">Lab Assistant</span>
                  <span className="experience-card-location">Banda Aceh</span>
                </div>
                <span className="experience-card-workplace">LP3I College</span>
                <div className="experience-card-desc">
                  <span className="footer-highlight">
                    Provided assistance in laboratory-based academic settings
                  </span>
                  , helping facilitate student experiments, ensuring proper use
                  and maintenance of lab equipment, and offering hands-on support
                  during practical sessions.
                </div>
                <div className="experience-card-skills">
                  <span className="experience-skill">Laboratory Skills</span>
                  <span className="experience-skill">Equipment Maintenance</span>
                  <span className="experience-skill">Student Support</span>
                  <span className="experience-skill">Data Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="projects-section" id="projects">
          <h2>My solo projects</h2>
          <ProjectCard
            title="Portoku Web"
            image="https://picsum.photos/seed/portoku/400"
            link="https://github.com/naiko-coder/portoku"
            description="Portoku is a personal portfolio website designed to showcase my professional experiences, skills, and projects in a modern and interactive way. Built with React and styled for a sleek user experience."
            skills={["React", "JavaScript", "CSS", "Responsive Design"]}
          />
          <ProjectCard
            title="New Student Registration System"
            image="https://picsum.photos/seed/studentregistration/400"
            link="https://github.com/naiko-coder/ppdb-nextjs"
            description="Student registration system with a modern Next.js and React interface, integrated with Google Workspace for seamless Google OAuth authentication, MySQL data management via REST API, and Google Drive document storage. Styled using Tailwind CSS for a responsive user experience."
            skills={[
              "Google Workspace",
              "Next.js",
              "React",
              "Tailwind CSS",
              "Google OAuth",
              "REST API",
              "MySQL",
              "Authentication",
              "Google Drive",
            ]}
          />
          <ProjectCard
            title="Worker Absence Management System"
            image="https://picsum.photos/seed/workerabsence/400"
            link="https://github.com/naiko-coder/under-development"
            description="A system designed to manage and track employee absences efficiently. Built with Laravel framework."
            skills={["Laravel", "PHP", "MySQL"]}
          />
          <ProjectCard
            title="To-do List with Today Moods"
            image="https://picsum.photos/seed/todolist/400"
            link="https://github.com/naiko-coder/under-development"
            description="A simple to-do list application that allows users to manage their tasks effectively. The app features a mood tracker to help users stay aware of their emotional well-being while working on tasks."
            skills={["React", "JavaScript", "CSS"]}
          />
          <div className="project-archive-link">
            <a
              href="https://github.com/naiko-coder/under-development"
              target="_blank"
              rel="noopener noreferrer"
            >
              View full project archive →
            </a>
          </div>
        </section>
        <section id="education">
          <h2>Education</h2>
          <div className="education-list">
            <div className="education-card">
              <div className="education-card-left">
                <div className="education-card-date">2019 - 2022</div>
                <img
                  src="https://www.pancabudi.ac.id/unpab/image/info/logo_unpab_4x.png"
                  alt="Unpab Logo"
                  className="education-card-image"
                />
              </div>
              <div className="education-card-right">
                <div className="education-card-title-row">
                  <span className="education-card-title">
                    Diploma III in Computer Engineering
                  </span>
                  <span className="education-card-location">Medan</span>
                </div>
                <span className="education-card-school">
                  Universitas Pembangunan Panca Budi
                </span>
                <div className="education-card-desc">
                  Specialized in computer engineering, networking, and fundamental
                  programming, with a strong foundation in both theoretical
                  knowledge and hands-on skills.
                </div>
              </div>
            </div>
            <div className="education-card">
              <div className="education-card-left">
                <div className="education-card-date">2017 - 2019</div>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSaLcDQrE6671nhi9U3QZAcPYqgXqX5yK5mg&s"
                  alt="LP3I College Logo"
                  className="education-card-image"
                />
              </div>
              <div className="education-card-right">
                <div className="education-card-title-row">
                  <span className="education-card-title">
                    Diploma II in Computer Engineering
                  </span>
                  <span className="education-card-location">Banda Aceh</span>
                </div>
                <span className="education-card-school">LP3I College</span>
                <div className="education-card-desc">
                  Focused on computer engineering, networking, and basic
                  programming. Graduated with strong practical and theoretical
                  skills.
                </div>
              </div>
            </div>
            <div className="education-card">
              <div className="education-card-left">
                <div className="education-card-date">2014 - 2017</div>
                <img
                  src="/smk1logo.jpg"
                  alt="SMK N 1 Takengon Logo"
                  className="education-card-image"
                />
              </div>
              <div className="education-card-right">
                <div className="education-card-title-row">
                  <span className="education-card-title">
                    Computer & Network Engineering
                  </span>
                  <span className="education-card-location">Central Aceh</span>
                </div>
                <span className="education-card-school">SMK N 1 Takengon</span>
                <div className="education-card-desc">
                  Emphasized hands-on training in computer hardware, network setup,
                  and troubleshooting, preparing students for real-world technical
                  challenges.
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer className="site-footer">
          <p></p>
          <div>
            <span>
              This site was crafted with{" "}
              <span className="footer-highlight">Visual Studio Code</span> and
              customized using{" "}
              <span className="footer-highlight">React</span> and{" "}
              <span className="footer-highlight">
                <b>CSS</b>
              </span>
              , then deployed via{" "}
              <span className="footer-highlight">Vercel</span>. All text is set
              in the <span className="footer-highlight">Inter</span> typeface.
            </span>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;