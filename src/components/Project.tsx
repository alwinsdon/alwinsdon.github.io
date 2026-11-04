import React from "react";
import { Link } from "react-router-dom";
import lawnmowerThumb from '../assets/images/projects/alm/ALM-Publicdemo1.jpg';
import insoleThumb from '../assets/images/projects/ssi/SSI-finalprototype.jpg';
import balancingRobotThumb from '../assets/images/projects/sbr/SBR-finalpic.jpeg';
import roboticArmThumb from '../assets/images/projects/ora/ORA-roboticarm.jpg';
import colorSortingThumb from '../assets/images/projects/csr/CSR - Sorting setup view.jpeg';
import hovercraftThumb from '../assets/images/projects/hcp/HCP - front view.jpeg';
import rcCarThumb from '../assets/images/projects/brc/BRC - car top view.jpeg';
import foundryThumb from '../assets/images/projects/fp/FP - Final cast.jpeg';
import furutaThumb from '../assets/images/projects/furuta/FRP-thumbnail.jpg';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Projects</h1>
            <div className="projects-grid">
                <Link to="/project/furuta-pendulum" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={furutaThumb} alt="Reinforcement Learning Furuta Pendulum" />
                    </div>
                    <div className="project-info">
                        <h2>RL Furuta Pendulum</h2>
                        <p>PPO policy trained in Isaac Lab, deployed on an ESP32 to balance a real pendulum.</p>
                    </div>
                </Link>
                <Link to="/project/autonomous-lawnmower" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={lawnmowerThumb} alt="Autonomous Lawnmower" />
                    </div>
                    <div className="project-info">
                        <h2>Autonomous Lawnmower</h2>
                        <p>200+ lb ROS2-powered robot with SLAM, LiDAR, and YOLO object detection.</p>
                    </div>
                </Link>
                <Link to="/project/smart-insole" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={insoleThumb} alt="Smart Insole" />
                    </div>
                    <div className="project-info">
                        <h2>Smart Insole</h2>
                        <p>ESP32-based wearable with FSR sensors and ML-powered gait analysis.</p>
                    </div>
                </Link>
                <Link to="/project/self-balancing-robot" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={balancingRobotThumb} alt="Self-Balancing Robot" />
                    </div>
                    <div className="project-info">
                        <h2>Self-Balancing Robot</h2>
                        <p>Two-wheel balancer with Kalman-filtered IMU and PID control.</p>
                    </div>
                </Link>
                <Link to="/project/openmanipulator-arm" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={roboticArmThumb} alt="OpenManipulator Robotic Arm" />
                    </div>
                    <div className="project-info">
                        <h2>Robotic Arm</h2>
                        <p>6-DOF arm with ROS2 MoveIt motion planning and Gazebo simulation.</p>
                    </div>
                </Link>
                <Link to="/project/color-sorting-robot" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={colorSortingThumb} alt="Color-Sorting Robot" />
                    </div>
                    <div className="project-info">
                        <h2>Color-Sorting Robot</h2>
                        <p>OpenCV pick-and-place system with MQTT and Ignition HMI dashboard.</p>
                    </div>
                </Link>
                <Link to="/project/autonomous-hovercraft" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={hovercraftThumb} alt="RC Hovercraft" />
                    </div>
                    <div className="project-info">
                        <h2>RC Hovercraft</h2>
                        <p>Custom-built propeller-driven hovercraft with balsa wood shrouds.</p>
                    </div>
                </Link>
                <Link to="/project/bluetooth-rc-car" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={rcCarThumb} alt="Bluetooth RC Car" />
                    </div>
                    <div className="project-info">
                        <h2>Bluetooth RC Car</h2>
                        <p>Arduino-powered RC vehicle controlled via smartphone over Bluetooth.</p>
                    </div>
                </Link>
                <Link to="/project/foundry-forging" className="project-card">
                    <div className="project-image-wrapper">
                        <img src={foundryThumb} alt="Foundry" />
                    </div>
                    <div className="project-info">
                        <h2>Foundry & Forging</h2>
                        <p>Aluminum sand casting, steel forging, and oxy-acetylene gas welding.</p>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Project;
