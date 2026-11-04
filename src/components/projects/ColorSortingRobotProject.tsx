import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgSideView from '../../assets/images/projects/csr/CSR - DOFBOT side view.jpeg';
import imgIgnitionLauncher from '../../assets/images/projects/csr/CSR - Ignition design launcher.jpeg';
import imgIgnitionLogs from '../../assets/images/projects/csr/CSR - Ignition gateway logs.jpeg';
import imgSetupView from '../../assets/images/projects/csr/CSR - Sorting setup view.jpeg';
import imgInductive from '../../assets/images/projects/csr/CSR- Inductive University .jpeg';
import imgChromeLaunch from '../../assets/images/projects/csr/CSR- chrome launch.jpeg';
import imgMqttDash from '../../assets/images/projects/csr/CSR-dofbot mqtt dashboard.jpeg';
import imgMqttSuccess from '../../assets/images/projects/csr/CSR-dofbot mqtt success.jpeg';

import vidBackend from '../../assets/images/projects/csr/CSR- colour sorting demo backend.mp4';
import vidFrontend from '../../assets/images/projects/csr/CSR- colour sorting demo frontend.mp4';

function ColorSortingRobotProject() {
  const images: ProjectImage[] = [
    { src: vidFrontend, caption: "Robot sorting colored blocks.", type: 'video' },
    { src: vidBackend, caption: "Backend dashboard view.", type: 'video' },
    { src: imgSetupView, caption: "Sorting workspace overview." },
    { src: imgSideView, caption: "5-DOF DOFBOT arm." },
    { src: imgInductive, caption: "Inductive University training." },
    { src: imgIgnitionLauncher, caption: "Ignition Perspective launcher." },
    { src: imgChromeLaunch, caption: "HMI dashboard in browser." },
    { src: imgMqttDash, caption: "MQTT monitoring dashboard." },
    { src: imgMqttSuccess, caption: "MQTT transmission logs." },
    { src: imgIgnitionLogs, caption: "Gateway communication logs." }
  ];

  return (
    <ProjectDetail
      title="Autonomous Color-Sorting Robot"
      timeline="2024"
      background="End-to-end robotic pick-and-place with computer vision and industrial HMI."
      description="OpenCV-powered color detection with a 5-DOF DOFBOT arm, MQTT-orchestrated sorting, and an Ignition Perspective dashboard for remote control and live telemetry."
      technologies={[
        "Python",
        "OpenCV",
        "Ignition Perspective",
        "MQTT",
        "Inverse Kinematics",
        "Raspberry Pi",
        "DOFBOT (5-DOF)"
      ]}
      features={[
        "Custom OpenCV HSV color-detection pipeline",
        "Custom IK solver for pixel-to-joint-angle mapping",
        "Bidirectional MQTT bridge to Ignition SCADA/HMI"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default ColorSortingRobotProject;
