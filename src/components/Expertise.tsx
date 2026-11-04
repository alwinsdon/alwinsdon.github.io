import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMicrochip, faCube } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    { name: "ROS2", link: "/project/autonomous-lawnmower" },
    { name: "Python", link: "/project/autonomous-lawnmower" },
    { name: "C++", link: "/project/autonomous-lawnmower" },
    { name: "SLAM", link: "/project/autonomous-lawnmower" },
    { name: "LiDAR", link: "/project/autonomous-lawnmower" },
    { name: "Computer Vision", link: "/project/autonomous-lawnmower" },
    { name: "YOLO", link: "/project/autonomous-lawnmower" },
    { name: "Sensor Fusion", link: "/project/autonomous-lawnmower" },
    { name: "Nav2", link: "/project/autonomous-lawnmower" }
];

const labelsSecond = [
    { name: "Arduino", link: "/project/self-balancing-robot" },
    { name: "ESP32", link: "/project/smart-insole" },
    { name: "Raspberry Pi", link: "/project/autonomous-lawnmower" },
    { name: "PID Control", link: "/project/self-balancing-robot" },
    { name: "Kalman Filter", link: "/project/self-balancing-robot" },
    { name: "PCB Design", link: "/project/smart-insole" },
    { name: "KiCad", link: "/project/smart-insole" },
    { name: "PLC", link: "/project/color-sorting-robot" }
];

const labelsThird = [
    { name: "Autodesk Inventor", link: "/project/autonomous-lawnmower" },
    { name: "3D Printing", link: "/project/smart-insole" },
    { name: "MIG Welding", link: "/project/autonomous-lawnmower" },
    { name: "MoveIt", link: "/project/openmanipulator-arm" },
    { name: "Gazebo", link: "/project/openmanipulator-arm" },
    { name: "MATLAB", link: "/project/self-balancing-robot" },
    { name: "Unity / VR", link: "#projects" }
];

function Expertise() {
    return (
        <div className="container" id="expertise">
            <div className="skills-container">
                <h1>Expertise</h1>
                <div className="skills-grid">
                    <div className="skill">
                        <FontAwesomeIcon icon={faRobot} size="3x" />
                        <h3>Robotics & Autonomous Systems</h3>
                        <div className="flex-chips">
                            {labelsFirst.map((label, index) => (
                                <Link key={index} to={label.link} className="tech-pill">{label.name}</Link>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faMicrochip} size="3x" />
                        <h3>Embedded Systems & Control</h3>
                        <div className="flex-chips">
                            {labelsSecond.map((label, index) => (
                                <Link key={index} to={label.link} className="tech-pill">{label.name}</Link>
                            ))}
                        </div>
                    </div>

                    <div className="skill">
                        <FontAwesomeIcon icon={faCube} size="3x" />
                        <h3>Mechanical Design & Simulation</h3>
                        <div className="flex-chips">
                            {labelsThird.map((label, index) => (
                                <Link key={index} to={label.link} className="tech-pill">{label.name}</Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Expertise;