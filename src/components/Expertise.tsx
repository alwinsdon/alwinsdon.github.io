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
    { name: "IMU", link: "/project/autonomous-lawnmower" },
    { name: "GPS", link: "/project/autonomous-lawnmower" },
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
    { name: "PLC Programming", link: "/project/color-sorting-robot" },
    { name: "I2C/SPI/UART", link: "/project/smart-insole" }
];

const labelsThird = [
    { name: "Autodesk Inventor", link: "/project/autonomous-lawnmower" },
    { name: "CAD", link: "/project/autonomous-lawnmower" },
    { name: "3D Printing", link: "/project/smart-insole" },
    { name: "MIG Welding", link: "/project/autonomous-lawnmower" },
    { name: "MoveIt", link: "/project/openmanipulator-arm" },
    { name: "Gazebo", link: "/project/openmanipulator-arm" },
    { name: "MATLAB", link: "/project/self-balancing-robot" },
    { name: "Unity/VR", link: "#projects" },
    { name: "Rapid Prototyping", link: "/project/autonomous-lawnmower" }
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                <div className="skill">
                    <FontAwesomeIcon icon={faRobot} size="3x"/>
                    <h3>Robotics & Autonomous Systems</h3>
                    <p>I develop autonomous robotic platforms with ROS2-based navigation, SLAM mapping, sensor fusion, and computer vision. Experienced in building full autonomy stacks from LiDAR integration to path planning.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Link key={index} to={label.link} className="fancy-tech-tag">{label.name}</Link>
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faMicrochip} size="3x"/>
                    <h3>Embedded Systems & Control</h3>
                    <p>Experienced in designing and programming embedded systems with microcontrollers, implementing PID control loops, Kalman filters, and custom PCB designs for robotics and IoT applications.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsSecond.map((label, index) => (
                            <Link key={index} to={label.link} className="fancy-tech-tag">{label.name}</Link>
                        ))}
                    </div>
                </div>

                <div className="skill">
                    <FontAwesomeIcon icon={faCube} size="3x"/>
                    <h3>Mechanical Design & Simulation</h3>
                    <p>Proficient in CAD modeling, 3D printing, and fabrication techniques including MIG welding. I use simulation tools like Gazebo and MoveIt for validating robotic systems before physical builds.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsThird.map((label, index) => (
                            <Link key={index} to={label.link} className="fancy-tech-tag">{label.name}</Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;