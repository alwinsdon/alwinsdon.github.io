import React from "react";
import { Link } from "react-router-dom";
import lawnmowerThumb from '../assets/images/projects/alm/ALM-frame.jpg';
import insoleThumb from '../assets/images/projects/ssi/SSI-finalprototype.jpg';
import balancingRobotThumb from '../assets/images/projects/sbr/SBR-finalpic.jpeg';
import roboticArmThumb from '../assets/images/projects/ora/ORA-roboticarm.jpg';
import colorSortingThumb from '../assets/images/projects/csr/CSR - Sorting setup view.jpeg';
import '../assets/styles/Project.scss';

function Project() {
    return(
    <div className="projects-container" id="projects">
        <h1>Personal Projects</h1>
        <div className="projects-grid">
            <div className="project">
                <Link to="/project/autonomous-lawnmower"><img src={lawnmowerThumb} className="zoom" alt="Autonomous Lawnmower" width="100%"/></Link>
                <Link to="/project/autonomous-lawnmower"><h2>Autonomous Lawnmower</h2></Link>
                <p>Designed a 200+ lb autonomous robotic platform with tank tracks, ROS-based navigation, SLAM mapping, YOLO object detection, and LiDAR-camera sensor fusion. Top speed 28 km/h, 5-hour runtime, sub-$1k cost.</p>
            </div>
            <div className="project">
                <Link to="/project/smart-insole"><img src={insoleThumb} className="zoom" alt="Smart Insole" width="100%"/></Link>
                <Link to="/project/smart-insole"><h2>Smart Insole</h2></Link>
                <p>Engineered a wearable sensing platform with ESP32, FSR sensors, IMU, and haptic actuators for step tracking. Features sensor fusion algorithms and ML-based anti-cheat detection with 75-80% accuracy.</p>
            </div>
            <div className="project">
                <Link to="/project/self-balancing-robot"><img src={balancingRobotThumb} className="zoom" alt="Self-Balancing Robot" width="100%"/></Link>
                <Link to="/project/self-balancing-robot"><h2>Self-Balancing Robot</h2></Link>
                <p>Built a two-wheel balancing robot with MIG-welded metal chassis, Kalman-filtered IMU, and PID control on Arduino. Achieves 3-5 minutes stable balancing, compensating for 10° tilt disturbances.</p>
            </div>
            <div className="project">
                <Link to="/project/openmanipulator-arm"><img src={roboticArmThumb} className="zoom" alt="OpenManipulator Robotic Arm" width="100%"/></Link>
                <Link to="/project/openmanipulator-arm"><h2>OpenManipulator Robotic Arm</h2></Link>
                <p>Constructed a 6-DOF robotic arm with 3D-printed joints and ROS integration. Programmed motion planning using MoveIt, Gazebo, and custom PID/IK controllers. Validated pick-and-place with ~1kg payload.</p>
            </div>
            <div className="project">
                <Link to="/project/color-sorting-robot"><img src={colorSortingThumb} className="zoom" alt="Autonomous Color-Sorting Robot" width="100%"/></Link>
                <Link to="/project/color-sorting-robot"><h2>Autonomous Color-Sorting Robot</h2></Link>
                <p>Built an end-to-end pick-and-place system with OpenCV color detection, a 5-DOF DOFBOT arm, and an Ignition Perspective HMI dashboard. Autonomous sorting controlled via MQTT with live status feedback.</p>
            </div>
        </div>
    </div>
    );
}

export default Project;
