import React from "react";
import mock01 from '../assets/images/mock01.png';
import mock02 from '../assets/images/mock02.png';
import mock03 from '../assets/images/mock03.png';
import mock04 from '../assets/images/mock04.png';
import mock05 from '../assets/images/mock05.png';
import mock06 from '../assets/images/mock06.png';
import mock07 from '../assets/images/mock07.png';
import mock08 from '../assets/images/mock08.png';
import mock09 from '../assets/images/mock09.png';
import mock10 from '../assets/images/mock10.png';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock10} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>E-Commerce Platform</h2></a>
                <p>Built a full-stack e-commerce application with product catalog, shopping cart, and secure checkout. Technologies: React, Node.js, MongoDB, and Stripe API integration.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock09} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Task Management App</h2></a>
                <p>Developed a collaborative task management application with real-time updates, user authentication, and team workspaces. Built with React, Firebase, and Material-UI.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock08} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Weather Dashboard</h2></a>
                <p>Created a responsive weather dashboard that displays current conditions and forecasts using third-party APIs. Features include location search and data visualization with Chart.js.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock07} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Blog Platform</h2></a>
                <p>Designed and developed a full-featured blogging platform with markdown support, comments, and user profiles. Tech stack: React, Express.js, PostgreSQL, and JWT authentication.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock06} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Recipe Finder</h2></a>
                <p>Built a recipe discovery app that allows users to search, save, and share their favorite recipes. Features include ingredient-based search and nutritional information display.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock05} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Expense Tracker</h2></a>
                <p>Developed a personal finance tracker with budget management, expense categorization, and visual analytics. Built with React, TypeScript, and local storage for data persistence.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock04} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Portfolio Website</h2></a>
                <p>Created a responsive portfolio website to showcase projects and skills. Implemented with React, TypeScript, and SCSS, featuring smooth animations and dark/light mode toggle.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock03} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Chat Application</h2></a>
                <p>Built a real-time chat application with multiple rooms and direct messaging. Technologies include React, Socket.io, Node.js, and MongoDB for message persistence.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock02} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Music Player</h2></a>
                <p>Designed and developed a web-based music player with playlist management, shuffle, and repeat features. Built with vanilla JavaScript and Web Audio API.</p>
            </div>
            <div className="project">
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><img src={mock01} className="zoom" alt="thumbnail" width="100%"/></a>
                <a href="https://github.com/alwinsdon" target="_blank" rel="noreferrer"><h2>Quiz App</h2></a>
                <p>Created an interactive quiz application with multiple categories, score tracking, and timer functionality. Features a clean UI built with React and CSS animations.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;