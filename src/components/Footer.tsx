import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Footer.scss'

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><GitHubIcon/></a>
        <a href="https://www.linkedin.com/in/alwinsdon" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
      </div>
      <p>by Alwins Don</p>
    </footer>
  );
}

export default Footer;