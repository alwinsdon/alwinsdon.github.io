import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../../assets/styles/ProjectDetail.scss';
import ParallaxBackground from '../ParallaxBackground';

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

  // Use the first image/video as the hero
  const heroMedia = images && images.length > 0 ? images[0] : null;
  const galleryImages = images && images.length > 1 ? images.slice(1) : [];

  return (
    <div className="project-detail-container">
      <ParallaxBackground elementCount={12} />
      <div className="project-detail-content">
        <Link to="/" className="back-link">← Back to Projects</Link>
        
        <h1 className="project-title">{title}</h1>
        <span className="project-timeline">{timeline}</span>

        {/* Hero media */}
        {heroMedia && (
          <div className="project-hero-media" onClick={() => setSelectedMedia(heroMedia)}>
            {heroMedia.type === 'video' ? (
              <video src={heroMedia.src} muted loop autoPlay playsInline className="hero-media" />
            ) : (
              <img src={heroMedia.src} alt={`${title} hero`} className="hero-media" />
            )}
          </div>
        )}

        {/* Brief description */}
        <section className="project-brief">
          <p>{description}</p>
        </section>

        {/* Tech stack */}
        <div className="tech-stack-row">
          {technologies.map((tech, index) => (
            <span key={index} className="tech-badge">{tech}</span>
          ))}
        </div>

        {/* Key results */}
        {features && features.length > 0 && (
          <section className="project-results">
            <h2>Key Results</h2>
            <ul className="results-list">
              {features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {children}

        {/* Gallery */}
        {galleryImages.length > 0 && (
          <section className="project-gallery-section">
            <h2>Gallery</h2>
            <div className="project-gallery">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-item" onClick={() => setSelectedMedia(image)}>
                  {image.type === 'video' ? (
                    <video src={image.src} muted loop playsInline className="gallery-thumb" />
                  ) : (
                    <img src={image.src} alt={`${title} media ${index + 2}`} className="gallery-thumb" />
                  )}
                  <p className="gallery-caption">{image.caption}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Links */}
        {(githubLink || liveLink) && (
          <div className="project-links">
            {githubLink && (
              <a href={githubLink} target="_blank" rel="noreferrer" className="project-link-btn">
                GitHub Repository
              </a>
            )}
            {liveLink && (
              <a href={liveLink} target="_blank" rel="noreferrer" className="project-link-btn">
                Live Demo
              </a>
            )}
          </div>
        )}

        <Link to="/#projects" className="back-link back-link-bottom">← Back to Portfolio</Link>
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
