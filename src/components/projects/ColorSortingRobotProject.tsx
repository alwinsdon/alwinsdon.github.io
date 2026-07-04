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

function ColorSortingRobotProject() {
  const images: ProjectImage[] = [
    { src: imgSetupView, caption: "Overview of the color sorting workspace and camera setup." },
    { src: imgSideView, caption: "Side view of the 5-DOF Yahboom DOFBOT arm in position." },
    { src: imgInductive, caption: "Certification and training modules completed via Inductive University." },
    { src: imgIgnitionLauncher, caption: "Ignition Perspective design launcher interface." },
    { src: imgChromeLaunch, caption: "Launching the HMI dashboard through the web browser." },
    { src: imgMqttDash, caption: "MQTT dashboard layout for real-time monitoring and control." },
    { src: imgMqttSuccess, caption: "Successful MQTT message transmission logs." },
    { src: imgIgnitionLogs, caption: "Gateway logs verifying robust backend communication." }
  ];

  return (
    <ProjectDetail
      title="Autonomous Color-Sorting Robot"
      timeline="2024"
      background="This project was built to demonstrate end-to-end integration of robotics, computer vision, and industrial HMI design. The goal was to create a fully autonomous pick-and-place system that identifies colored blocks (blue, green, red, yellow) using a USB camera, picks them up with a 5-DOF Yahboom DOFBOT arm, and places them in a designated drop zone — all orchestrated through an Ignition Perspective HMI dashboard."
      description="Built an end-to-end robotic system combining computer vision, inverse kinematics, MQTT communication, and industrial HMI design. A Raspberry Pi bridge script receives commands from an Ignition Perspective dashboard, searches four corners of the workspace, visually identifies the requested color, picks the block, and places it in the center — all without human intervention. The system includes live status feedback and survived real-world failures including USB camera dropouts, I2C bus issues, and MoveIt planning dead-ends."
      technologies={[
        "Python",
        "OpenCV",
        "Ignition Perspective",
        "MQTT",
        "Inverse Kinematics",
        "Raspberry Pi",
        "Yahboom DOFBOT (5-DOF)"
      ]}
      features={[
        "Developed custom OpenCV color-detection pipeline (HSV filtering) with contour area thresholds.",
        "Programmed a custom Inverse Kinematics (IK) solver to translate 2D pixel coordinates into 3D joint angles.",
        "Built a bidirectional MQTT bridge connecting the physical robot to an industrial SCADA/HMI backend.",
        "Designed a responsive Ignition Perspective dashboard for remote control and live telemetry monitoring."
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default ColorSortingRobotProject;
