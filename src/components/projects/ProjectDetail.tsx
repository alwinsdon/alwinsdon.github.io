import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';

export interface ProjectImage {
  src: string;
  caption: string;
  type?: 'image' | 'video';
}

interface ProjectDetailProps {
  title: string;
  timeline: string;
  background: string;
  description: string;
  technologies: string[];
  features?: string[];
  images?: ProjectImage[];
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
  const [selectedMedia, setSelectedMedia] = useState<ProjectImage | null>(null);

  const closeModal = () => setSelectedMedia(null);

  return (
    <div className="project-detail-container">
      <div className="project-detail-content">
        <Link to="/" className="back-button">← Back to Projects</Link>
        
        <h1 className="project-title">{title}</h1>
        <p className="project-timeline">{timeline}</p>

        <section className="project-section">
          <h2>Background</h2>
          <p>{background}</p>
        </section>

        <section className="project-section">
          <h2>Description</h2>
          <p>{description}</p>
        </section>

        <section className="project-section">
          <h2>Technologies</h2>
          <div className="tech-stack">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-badge">{tech}</span>
            ))}
          </div>
        </section>

        {features && features.length > 0 && (
          <section className="project-section">
            <h2>Results</h2>
            <ul className="features-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {children}

        {images && images.length > 0 && (
          <section className="project-section">
            <h2>Gallery</h2>
            <div className="project-gallery">
              {images.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => setSelectedMedia(image)}>
                  {image.type === 'video' ? (
                    <video src={image.src} muted loop playsInline className="gallery-video-thumb" />
                  ) : (
                    <img src={image.src} alt={`${title} media ${index + 1}`} />
                  )}
                  <p className="gallery-caption">{image.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {(githubLink || liveLink) && (
          <section className="project-section">
            <h2>Links</h2>
            <div className="project-links">
              {githubLink && (
                <a href={githubLink} target="_blank" rel="noreferrer" className="project-link-button">
                  GitHub Repository
                </a>
              )}
              {liveLink && (
                <a href={liveLink} target="_blank" rel="noreferrer" className="project-link-button">
                  Live Demo
                </a>
              )}
            </div>
          </section>
        )}

        <Link to="/#projects" className="back-button-bottom">← Back to Portfolio</Link>
      </div>

      {selectedMedia && (
        <div className="lightbox-modal" onClick={closeModal}>
          <span className="close-button" onClick={closeModal}>&times;</span>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            {selectedMedia.type === 'video' ? (
              <video src={selectedMedia.src} controls autoPlay className="lightbox-media" />
            ) : (
              <img src={selectedMedia.src} alt="Enlarged view" className="lightbox-media" />
            )}
            <p className="lightbox-caption">{selectedMedia.caption}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectDetail;
