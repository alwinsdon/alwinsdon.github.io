import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgGazebo from '../../assets/images/projects/ora/ORA-Gazebosim.jpg';
import imgCadModel from '../../assets/images/projects/ora/ORA-cadmodel.jpg';
import imgRoboticArm from '../../assets/images/projects/ora/ORA-roboticarm.jpg';

import vidTesting from '../../assets/images/projects/ora/ORA-Testing.mp4';

function OpenManipulatorProject() {
  const images: ProjectImage[] = [
    { src: vidTesting, caption: "Testing the robotic arm with custom trajectories.", type: 'video' },
    { src: imgCadModel, caption: "CAD model defining the kinematic chain and joint limits." },
    { src: imgGazebo, caption: "Gazebo simulation environment verifying the URDF and MoveIt planning." },
    { src: imgRoboticArm, caption: "The physical OpenManipulator-X arm executing planned trajectories." }
  ];

  return (
    <ProjectDetail
      title="OpenManipulator-X Robotic Arm (ROS 2)"
      timeline="2023"
      background="Explored robotic manipulation by programming the OpenManipulator-X arm. The objective was to understand the complexities of inverse kinematics, trajectory planning, and hardware-software bridging in a modern ROS 2 environment."
      description="Configured and simulated a 4-DOF robotic arm using a custom URDF in Gazebo. Developed Python scripts utilizing MoveIt 2 to calculate inverse kinematics and execute smooth trajectory plans. Deployed the tested software onto the physical hardware, allowing the arm to perform precise pick-and-place maneuvers."
      technologies={[
        "ROS 2 (Humble)",
        "MoveIt 2",
        "Gazebo",
        "Python",
        "URDF",
        "Inverse Kinematics"
      ]}
      features={[
        "Developed an accurate URDF model for physics simulation in Gazebo.",
        "Integrated MoveIt 2 for collision-free motion planning and inverse kinematics.",
        "Created Python scripts to programmatically command joint angles and end-effector poses.",
        "Bridged simulation with real hardware for 1:1 real-world execution."
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default OpenManipulatorProject;
