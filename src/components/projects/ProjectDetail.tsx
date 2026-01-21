import React from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

interface ProjectDetailProps {
  title: string;
  timeline: string;
  background: string;
  description: string;
  technologies: string[];
  features?: string[];
  images?: string[];
  githubLink?: string;
  liveLink?: string;
  children?: React.ReactNode;
}

function ProjectDetail({
  title,
  timeline,
  background,
  description,
  technologies,
  features,
  images,
  githubLink,
  liveLink,
  children
}: ProjectDetailProps) {
  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        <Link to="/#projects" className="back-button">← Back to Portfolio</Link>
        
        <h1 className="project-title">{title}</h1>
        <p className="project-timeline">{timeline}</p>

        <section className="project-section">
          <h2>Project Background</h2>
          <p>{background}</p>
        </section>

        <section className="project-section">
          <h2>Project Description</h2>
          <p>{description}</p>
        </section>

        {features && features.length > 0 && (
          <section className="project-section">
            <h2>Key Features</h2>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        <section className="project-section">
          <h2>Technologies Used</h2>
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </section>

        {children}

        {images && images.length > 0 && (
          <section className="project-section">
            <h2>Gallery</h2>
            <div className="project-gallery">
              {images.map((image, index) => (
                <img key={index} src={image} alt={`${title} screenshot ${index + 1}`} />
              ))}
            </div>
          </section>
        )}

        {(githubLink || liveLink) && (
          <section className="project-section">
            <h2>Project Links</h2>
            <div className="project-links">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer" className="project-link-button">
                  📂 GitHub Repository
                </a>
              )}
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer" className="project-link-button">
                  🌐 Live Demo
                </a>
              )}
            </div>
          </section>
        )}

        <Link to="/#projects" className="back-button-bottom">← Back to Portfolio</Link>
      </div>
    </div>
  );
}

export default ProjectDetail;

