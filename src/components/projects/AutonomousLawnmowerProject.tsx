import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgLidar from '../../assets/images/projects/alm/ALM-Lidar.jpg';
import imgPublicdemo1 from '../../assets/images/projects/alm/ALM-Publicdemo1.jpg';
import imgPublicdemo2 from '../../assets/images/projects/alm/ALM-Publicdemo2.jpg';
import imgPublicdemo3 from '../../assets/images/projects/alm/ALM-Publicdemo3.jpg';
import imgCadModel from '../../assets/images/projects/alm/ALM-cad-model.png';
import imgCadModel2 from '../../assets/images/projects/alm/ALM-cad-model2.png';
import imgChoosingLidars from '../../assets/images/projects/alm/ALM-choosinglidars.jpg';
import imgEncoderReading from '../../assets/images/projects/alm/ALM-encoderreading.jpg';
import imgFrame from '../../assets/images/projects/alm/ALM-frame.jpg';
import imgPlan1 from '../../assets/images/projects/alm/ALM-plan1.jpg';
import imgPlan2 from '../../assets/images/projects/alm/ALM-plan2.jpg';
import imgPlan3 from '../../assets/images/projects/alm/ALM-plan3.jpg';
import imgPlan4 from '../../assets/images/projects/alm/ALM-plan4.jpg';
import imgPlan5 from '../../assets/images/projects/alm/ALM-plan5.jpg';
import imgRoboclawTest from '../../assets/images/projects/alm/ALM-roboclawtest.jpg';
import imgSlam from '../../assets/images/projects/alm/ALM-slam.jpeg';
import imgWeldingFrame from '../../assets/images/projects/alm/ALM-weldingframe.jpg';

import vidDemo1 from '../../assets/images/projects/alm/ALM-demo1.mp4';
import vidDemo2 from '../../assets/images/projects/alm/ALM-demo2.mp4';
import vidDemo3 from '../../assets/images/projects/alm/ALM-Demo3.mp4';
import vidTeleop from '../../assets/images/projects/alm/ALM-Teleoptest.mp4';
import vidEncoder from '../../assets/images/projects/alm/ALM-encodertest.mp4';
import vidLidar from '../../assets/images/projects/alm/ALM-lidardemo.mp4';
import vidTrack from '../../assets/images/projects/alm/ALM-tanktracktest.mp4';

function AutonomousLawnmowerProject() {
  const images: ProjectImage[] = [
    { src: vidDemo1, caption: "Autonomous navigation demo navigating the yard.", type: 'video' },
    { src: vidDemo2, caption: "Following a pre-mapped trajectory.", type: 'video' },
    { src: vidDemo3, caption: "Testing obstacle avoidance algorithms.", type: 'video' },
    { src: vidTeleop, caption: "Teleoperation test using manual controls.", type: 'video' },
    { src: vidEncoder, caption: "Verifying encoder odometry ticks.", type: 'video' },
    { src: vidLidar, caption: "Visualizing the 2D LiDAR scan data.", type: 'video' },
    { src: vidTrack, caption: "Testing the tank track mobility on grass.", type: 'video' },
    { src: imgPlan1, caption: "Initial conceptual sketch and blueprint planning." },
    { src: imgPlan2, caption: "Detailed system architecture and wiring diagram layout." },
    { src: imgPlan3, caption: "Hardware integration plan for sensors and motor controllers." },
    { src: imgPlan4, caption: "Software node planning for ROS integration." },
    { src: imgPlan5, caption: "Finalized design schematics before construction." },
    { src: imgCadModel, caption: "3D CAD model showcasing the chassis design." },
    { src: imgCadModel2, caption: "Alternative angle of the CAD model highlighting sensor placement." },
    { src: imgWeldingFrame, caption: "Fabrication process: welding the robust metal frame." },
    { src: imgFrame, caption: "The completed raw metal frame structure." },
    { src: imgChoosingLidars, caption: "Evaluating different LiDAR sensors for optimal mapping." },
    { src: imgLidar, caption: "The selected LiDAR module mounted and ready for testing." },
    { src: imgEncoderReading, caption: "Testing and calibrating wheel encoder telemetry." },
    { src: imgRoboclawTest, caption: "Initial diagnostics on the RoboClaw motor controller." },
    { src: imgSlam, caption: "Successful SLAM mapping generated during a test run." },
    { src: imgPublicdemo1, caption: "The fully assembled autonomous lawnmower in action." },
    { src: imgPublicdemo2, caption: "Showcasing the robot to the public during a live demonstration." },
    { src: imgPublicdemo3, caption: "Another view of the successful public demo event." }
  ];

  return (
    <ProjectDetail
      title="Autonomous Lawnmower (ROS 2)"
      timeline="2023 - 2024"
      background="Designed and built a fully autonomous robotic lawnmower from scratch. The goal was to create a robust outdoor mobile robot capable of navigating unstructured environments, mapping its surroundings, and performing autonomous coverage."
      description="Engineered a custom differential drive robot using a welded aluminum chassis, wheelchair motors, and a RoboClaw motor controller. The software stack was built on ROS 2 (Humble) running on a Jetson Orin Nano, utilizing 2D LiDAR (RPLidar) and an IMU for SLAM (Cartographer) and autonomous navigation (Nav2)."
      technologies={[
        "ROS 2 (Humble)",
        "Nav2 & Cartographer",
        "Python & C++",
        "Jetson Orin Nano",
        "LiDAR & IMU",
        "RoboClaw Motor Controller",
        "SolidWorks",
        "MIG Welding"
      ]}
      features={[
        "Autonomous navigation in outdoor environments using Nav2",
        "Real-time 2D mapping and localization with Cartographer SLAM",
        "Custom differential drive kinematics with closed-loop PID control",
        "Robust welded chassis capable of carrying a 50lb payload"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon/autonomous-lawnmower"
    />
  );
}

export default AutonomousLawnmowerProject;
