import React from "react";
import ProjectCard from "./ProjectCard";
import myProjectImg from "../assets/myproject.png";

const projects = [
  {
    title: "Aplikasi Kasir Sederhana",
    image: myProjectImg,
    link: "https://aplikasikasir.example.com"
  },
  // Tambah project lain di sini
];

function ProjectsSection() {
  return (
    <section>
      <h2>Projects</h2>
      {projects.map((proj, idx) => (
        <ProjectCard
          key={idx}
          title={proj.title}
          image={proj.image}
          link={proj.link}
        />
      ))}
    </section>
  );
}

export default ProjectsSection;