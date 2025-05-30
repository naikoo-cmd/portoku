import React from "react";
import "./ProjectCard.css";

function ProjectCard({ title, image, link, description, skills = [] }) {
  return (
    <a
      className="project-card"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <div className="project-title-row">
          <span className="project-title">{title}</span>
          <span className="project-link-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="M14 3h7v7m0-7L10 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </div>
        <p className="project-desc">{description}</p>
        <div className="project-skills">
          {skills.map((skill, idx) => (
            <span className="project-skill-tag" key={idx}>{skill}</span>
          ))}
        </div>
      </div>
    </a>
  );
}

export default ProjectCard;