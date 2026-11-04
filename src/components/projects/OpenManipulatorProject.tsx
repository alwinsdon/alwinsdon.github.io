import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgGazebo from '../../assets/images/projects/ora/ORA-Gazebosim.jpg';
import imgCadModel from '../../assets/images/projects/ora/ORA-cadmodel.jpg';
import imgRoboticArm from '../../assets/images/projects/ora/ORA-roboticarm.jpg';

import vidTesting from '../../assets/images/projects/ora/ORA-Testing.mp4';

function OpenManipulatorProject() {
  const images: ProjectImage[] = [
    { src: vidTesting, caption: "Custom trajectory execution.", type: 'video' },
    { src: imgCadModel, caption: "Kinematic chain CAD model." },
    { src: imgGazebo, caption: "Gazebo simulation with MoveIt." },
    { src: imgRoboticArm, caption: "Physical arm executing trajectories." }
  ];

  return (
    <ProjectDetail
      title="OpenManipulator-X Robotic Arm"
      timeline="2023"
      background="Robotic manipulation with inverse kinematics and ROS 2."
      description="4-DOF robotic arm simulated in Gazebo with MoveIt 2 for collision-free motion planning, then deployed to physical hardware for pick-and-place tasks."
      technologies={[
        "ROS 2 (Humble)",
        "MoveIt 2",
        "Gazebo",
        "Python",
        "URDF",
        "Inverse Kinematics"
      ]}
      features={[
        "Accurate URDF model for Gazebo simulation",
        "MoveIt 2 collision-free motion planning",
        "Bridged simulation with real hardware 1:1"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default OpenManipulatorProject;
