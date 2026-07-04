import React from "react";
import ProjectDetail from "./ProjectDetail";
import sbrFinalPic from '../../assets/images/projects/sbr/SBR-finalpic.jpeg';
import sbrInvertedPendulum from '../../assets/images/projects/sbr/SBR-inverted_pendulum.gif';
import sbrPidAlgo from '../../assets/images/projects/sbr/SBR-PIDalgo.png';
import sbrKalmanFilter from '../../assets/images/projects/sbr/SBR-kalmanfilterimu.png';
import sbrPcb from '../../assets/images/projects/sbr/SBR-PCB.jpeg';

function SelfBalancingRobotProject() {
  return (
    <ProjectDetail
      title="Self-Balancing Robot"
      timeline="2024"
      background="This project was undertaken to deeply understand control systems theory and real-time embedded programming. The self-balancing robot serves as an excellent testbed for PID control, sensor fusion, and system dynamics. The goal was to design and build a robot that could maintain upright balance autonomously, recovering from disturbances and demonstrating stable control performance."
      description="Designed and constructed a two-wheeled self-balancing robot featuring a custom MIG-welded metal chassis, Arduino-based control system, and Kalman-filtered IMU sensor fusion. Implemented PID control algorithms to maintain vertical stability, achieving 3-5 minutes of continuous balancing with the ability to compensate for tilt disturbances up to 10 degrees. The project included both hardware fabrication and software simulation for controller tuning."
      technologies={[
        "Arduino",
        "C/C++",
        "Python",
        "MATLAB",
        "MPU-6050 IMU",
        "Kalman Filter",
        "PID Control",
        "Pygame (Simulation)",
        "DC Motors",
        "Encoder Feedback",
        "Bluetooth Telemetry",
        "MIG Welding",
        "Metal Fabrication"
      ]}
      features={[
        "Custom MIG-welded metal frame for structural rigidity",
        "Kalman filter-based IMU data fusion for accurate tilt measurement",
        "PID control loop running at high frequency (~100Hz) for responsive balancing",
        "Dual DC motors with encoder feedback for precise wheel control",
        "Bluetooth wireless telemetry for real-time monitoring and tuning",
        "Pygame-based simulation environment for controller development",
        "MATLAB/Python tools for PID parameter tuning and analysis",
        "Balances for 3-5 minutes continuously",
        "Compensates for external disturbances up to 10° tilt",
        "Autonomous self-recovery from mild pushes"
      ]}
      images={[sbrFinalPic, sbrInvertedPendulum, sbrPidAlgo, sbrKalmanFilter, sbrPcb]}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default SelfBalancingRobotProject;


