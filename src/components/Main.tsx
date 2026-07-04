import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profilePhoto from '../assets/images/alwins-photo.png';

function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePhoto} alt="Alwins Mathews Don Davidson Daniel" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alwinsdon" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h1>Alwins Mathews Don Davidson Daniel</h1>
          <p>Mechatronics Engineering Student | Robotics Researcher</p>

          <button className="fancy-button" onClick={() => {
            const projectsElement = document.getElementById("projects");
            if (projectsElement) {
              projectsElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}>
            View My Projects
          </button>

          <div className="mobile_social_icons">
            <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="https://www.linkedin.com/in/alwinsdon" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;