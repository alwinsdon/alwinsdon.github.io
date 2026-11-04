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
    { src: vidDemo1, caption: "Autonomous navigation demo.", type: 'video' },
    { src: vidDemo2, caption: "Following a pre-mapped trajectory.", type: 'video' },
    { src: vidDemo3, caption: "Obstacle avoidance testing.", type: 'video' },
    { src: vidTeleop, caption: "Teleoperation test.", type: 'video' },
    { src: vidEncoder, caption: "Encoder odometry verification.", type: 'video' },
    { src: vidLidar, caption: "2D LiDAR scan visualization.", type: 'video' },
    { src: vidTrack, caption: "Tank track mobility test.", type: 'video' },
    { src: imgPlan1, caption: "Initial blueprint planning." },
    { src: imgPlan2, caption: "System architecture layout." },
    { src: imgPlan3, caption: "Sensor integration plan." },
    { src: imgPlan4, caption: "ROS node planning." },
    { src: imgPlan5, caption: "Final design schematics." },
    { src: imgCadModel, caption: "3D CAD model — chassis design." },
    { src: imgCadModel2, caption: "CAD model — sensor placement." },
    { src: imgWeldingFrame, caption: "Welding the metal frame." },
    { src: imgFrame, caption: "Completed raw frame." },
    { src: imgChoosingLidars, caption: "Evaluating LiDAR sensors." },
    { src: imgLidar, caption: "LiDAR module mounted." },
    { src: imgEncoderReading, caption: "Calibrating wheel encoders." },
    { src: imgRoboclawTest, caption: "RoboClaw motor controller test." },
    { src: imgSlam, caption: "SLAM mapping output." },
    { src: imgPublicdemo1, caption: "Fully assembled robot in action." },
    { src: imgPublicdemo2, caption: "Public demonstration." },
    { src: imgPublicdemo3, caption: "Live demo event." }
  ];

  return (
    <ProjectDetail
      title="Autonomous Lawnmower"
      timeline="2023 — 2024"
      background="A fully autonomous robotic lawnmower built from scratch."
      description="Custom 200+ lb differential drive robot with a welded aluminum chassis, ROS 2 on Jetson Orin Nano, 2D LiDAR SLAM, and Nav2 autonomous navigation."
      technologies={[
        "ROS 2 (Humble)",
        "Nav2 & Cartographer",
        "Python & C++",
        "Jetson Orin Nano",
        "LiDAR & IMU",
        "RoboClaw",
        "SolidWorks",
        "MIG Welding"
      ]}
      features={[
        "Autonomous outdoor navigation using Nav2",
        "Real-time 2D SLAM with Cartographer",
        "Custom differential drive with closed-loop PID"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon/autonomous-lawnmower"
    />
  );
}

export default AutonomousLawnmowerProject;
