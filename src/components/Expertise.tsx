import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "React",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "PostgreSQL",
    "REST APIs"
];

const labelsSecond = [
    "Git",
    "GitHub",
    "Docker",
    "AWS",
    "CI/CD",
    "Linux",
    "Agile",
    "Testing",
    "Debugging"
];

const labelsThird = [
    "Problem Solving",
    "Team Collaboration",
    "Communication",
    "Code Review",
    "Documentation",
    "UI/UX Design",
    "Responsive Design"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>I build modern, responsive web applications using cutting-edge technologies. With expertise in both frontend and backend development, I create seamless user experiences and robust server-side solutions.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faDocker} size="3x"/>
                    <h3>DevOps & Best Practices</h3>
                    <p>Experienced in version control, containerization, and deployment workflows. I follow industry best practices to ensure code quality, maintainability, and efficient collaboration.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faPython} size="3x"/>
                    <h3>Professional Skills</h3>
                    <p>Strong communicator and team player with a passion for clean code and user-centered design. I thrive in collaborative environments and enjoy solving complex problems.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Soft Skills:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;