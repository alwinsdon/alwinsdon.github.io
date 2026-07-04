import React from "react";
import ProjectDetail from "./ProjectDetail";
import oraRoboticArm from '../../assets/images/projects/ora/ORA-roboticarm.jpg';
import oraCadModel from '../../assets/images/projects/ora/ORA-cadmodel.jpg';
import oraGazeboSim from '../../assets/images/projects/ora/ORA-Gazebosim.jpg';

function OpenManipulatorProject() {
  return (
    <ProjectDetail
      title="OpenManipulator Robotic Arm"
      timeline="2024"
      background="This project was initiated to gain hands-on experience with industrial robotic manipulation, kinematics, and motion planning. The OpenManipulator arm serves as an educational platform for understanding forward/inverse kinematics, trajectory planning, and ROS-based control of multi-degree-of-freedom systems. The goal was to build a functional 6-DOF arm capable of precise pick-and-place operations."
      description="Constructed a 6-DOF (six degrees of freedom) robotic arm featuring 3D-printed joints, metal structural components for stability, and servo-based actuation. Integrated with ROS (Robot Operating System) for high-level control, MoveIt for motion planning, and Gazebo for realistic simulation. Programmed custom inverse kinematics solvers and PID controllers in Python and C++ to achieve precise end-effector positioning for manipulation tasks."
      technologies={[
        "ROS (Robot Operating System)",
        "MoveIt Motion Planning",
        "Gazebo Simulation",
        "Python",
        "C++",
        "Inverse Kinematics (IK)",
        "Forward Kinematics (FK)",
        "PID Control",
        "Autodesk Inventor",
        "3D Printing",
        "Metal Fabrication",
        "Servo Motors",
        "URDF (Unified Robot Description Format)",
        "Trajectory Planning"
      ]}
      features={[
        "6 degrees of freedom for versatile manipulation",
        "Custom CAD design with 3D-printed joints and metal base",
        "ROS integration for modular software architecture",
        "MoveIt motion planning for collision-free trajectories",
        "Gazebo simulation environment for testing and validation",
        "Custom inverse kinematics solver for end-effector control",
        "PID control loops for each joint servo",
        "URDF model defining robot geometry and kinematics",
        "Payload capacity of approximately 1 kg",
        "Validated pick-and-place operations in simulation and hardware",
        "Python and C++ API for programming manipulation tasks"
      ]}
      images={[oraRoboticArm, oraCadModel, oraGazeboSim]}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default OpenManipulatorProject;


