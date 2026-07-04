import React from "react";
import ProjectDetail from "./ProjectDetail";
import csrSortingSetup from '../../assets/images/projects/csr/CSR - Sorting setup view.jpeg';
import csrDofbotSide from '../../assets/images/projects/csr/CSR - DOFBOT side view.jpeg';
import csrIgnitionLauncher from '../../assets/images/projects/csr/CSR - Ignition design launcher.jpeg';
import csrIgnitionLogs from '../../assets/images/projects/csr/CSR - Ignition gateway logs.jpeg';
import csrMqttDashboard from '../../assets/images/projects/csr/CSR-dofbot mqtt dashboard.jpeg';
import csrMqttSuccess from '../../assets/images/projects/csr/CSR-dofbot mqtt success.jpeg';
import csrChromeLaunch from '../../assets/images/projects/csr/CSR- chrome launch.jpeg';
import csrInductiveUniversity from '../../assets/images/projects/csr/CSR- Inductive University .jpeg';
import csrDemoFrontend from '../../assets/images/projects/csr/CSR- colour sorting demo frontend.mp4';
import csrDemoBackend from '../../assets/images/projects/csr/CSR- colour sorting demo backend.mp4';

function ColorSortingRobotProject() {
  return (
    <ProjectDetail
      title="Autonomous Color-Sorting Robot with Ignition HMI"
      timeline="2025"
      background="This project was built to demonstrate end-to-end integration of robotics, computer vision, and industrial HMI design. The goal was to create a fully autonomous pick-and-place system that identifies colored blocks (blue, green, red, yellow) using a USB camera, picks them up with a 5-DOF Yahboom DOFBOT arm, and places them in a designated drop zone — all orchestrated through an Ignition Perspective HMI dashboard."
      description="Built an end-to-end robotic system combining computer vision, inverse kinematics, MQTT communication, and industrial HMI design. A Raspberry Pi bridge script receives commands from an Ignition Perspective dashboard, searches four corners of the workspace, visually identifies the requested color, picks the block, and places it in the center — all without human intervention. The system includes live status feedback and survived real-world failures including USB camera dropouts, I2C bus issues, and MoveIt planning dead-ends."
      technologies={[
        "Raspberry Pi",
        "Yahboom DOFBOT (5-DOF)",
        "OpenCV",
        "ROS Noetic",
        "MoveIt",
        "Python",
        "MQTT / Mosquitto",
        "Ignition Perspective HMI",
        "Arm_Lib Direct Control",
        "Inverse Kinematics",
        "HSV Color Detection",
        "Inductive Automation"
      ]}
      features={[
        "Autonomous color detection and sorting (blue, green, red, yellow)",
        "5-DOF Yahboom DOFBOT arm with bus servo direct control",
        "OpenCV HSV color detection with ROI and workspace filtering",
        "Ignition Perspective HMI dashboard with live status feedback",
        "MQTT bridge between Ignition Gateway and Raspberry Pi",
        "Raw socket MQTT publishing to bypass Jython limitations",
        "Safe high-transit motion strategy to prevent collisions",
        "USB camera auto-detection across port indices 0–9",
        "Threaded arm control for non-blocking operation",
        "Pixel-to-world calibration for accurate pick coordinates"
      ]}
      images={[
        csrSortingSetup,
        csrDofbotSide,
        csrIgnitionLauncher,
        csrMqttDashboard,
        csrMqttSuccess,
        csrIgnitionLogs,
        csrChromeLaunch,
        csrInductiveUniversity
      ]}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default ColorSortingRobotProject;

