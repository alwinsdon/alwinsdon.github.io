import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot, faMicrochip, faCube } from '@fortawesome/free-solid-svg-icons';
import Chip from '@mui/material/Chip';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "ROS2",
    "Python",
    "C++",
    "SLAM",
    "LiDAR",
    "Computer Vision",
    "YOLO",
    "Sensor Fusion",
    "IMU",
    "GPS",
    "Nav2"
];

const labelsSecond = [
    "Arduino",
    "ESP32",
    "Raspberry Pi",
    "PID Control",
    "Kalman Filter",
    "PCB Design",
    "KiCad",
    "PLC Programming",
    "I2C/SPI/UART"
];

const labelsThird = [
    "Autodesk Inventor",
    "CAD",
    "3D Printing",
    "MIG Welding",
    "MoveIt",
    "Gazebo",
    "MATLAB",
    "Unity/VR",
    "Rapid Prototyping"
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
                            <Chip key={index} className='chip' label={label} />
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
                            <Chip key={index} className='chip' label={label} />
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