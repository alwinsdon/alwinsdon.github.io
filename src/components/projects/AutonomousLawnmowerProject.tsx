import React from "react";
import ProjectDetail from "./ProjectDetail";
import almFrame from '../../assets/images/projects/alm/ALM-frame.jpg';
import almWeldingFrame from '../../assets/images/projects/alm/ALM-weldingframe.jpg';
import almSlam from '../../assets/images/projects/alm/ALM-slam.jpeg';
import almLidar from '../../assets/images/projects/alm/ALM-Lidar.jpg';
import almPublicDemo from '../../assets/images/projects/alm/ALM-Publicdemo1.jpg';
import almPlan from '../../assets/images/projects/alm/ALM-plan1.jpg';

function AutonomousLawnmowerProject() {
  return (
    <ProjectDetail
      title="Autonomous Lawnmower"
      timeline="2024 - Present"
      background="This project was inspired by the need for an affordable, autonomous lawn maintenance solution for residential yards. The goal was to retrofit a standard push mower into an intelligent, all-terrain autonomous platform capable of handling uneven ground and obstacles while keeping production costs under $1,000."
      description="Designed and built a 200+ lb autonomous robotic platform featuring tank tracks for superior terrain handling and obstacle navigation. The system integrates advanced robotics technologies including ROS-based navigation, SLAM mapping, YOLO object detection, and LiDAR-camera sensor fusion to achieve reliable autonomous operation in complex outdoor environments."
      technologies={[
        "ROS (Robot Operating System)",
        "Python",
        "C++",
        "Arduino",
        "Raspberry Pi",
        "LiDAR",
        "Camera Vision",
        "GPS",
        "IMU",
        "YOLO Object Detection",
        "SLAM Mapping",
        "Autodesk Inventor",
        "RoboClaw Motor Controller"
      ]}
      features={[
        "Tank-track chassis design for all-terrain capability",
        "Dual-motor differential drive system",
        "ROS-based teleoperation and autonomous navigation",
        "SLAM mapping for environment understanding (~70% complete)",
        "YOLO-based object detection for obstacle recognition",
        "LiDAR-camera sensor fusion for enhanced perception",
        "GPS + IMU integration for positioning and stability",
        "200 lb base weight with 100-200 lb payload capacity",
        "Top speed of 28 km/h",
        "Approximately 5-hour battery runtime",
        "Steel fabricated chassis with custom CAD design"
      ]}
      images={[almFrame, almWeldingFrame, almSlam, almLidar, almPublicDemo, almPlan]}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default AutonomousLawnmowerProject;


