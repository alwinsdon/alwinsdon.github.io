import React from "react";
import ProjectDetail from "./ProjectDetail";
import mock10 from '../../assets/images/mock10.png';

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
      images={[mock10]}
      githubLink="https://github.com/alwinsdon"
      liveLink="#"
    >
      <section className="project-section">
        <h2>Technical Highlights</h2>
        <p>
          The core innovation lies in the sensor fusion system that combines LiDAR and camera data for
          robust obstacle detection. The tank-track design provides exceptional traction on slopes and
          uneven terrain, while the differential drive system enables precise maneuvering in tight spaces.
          The system uses ROS for modular architecture, allowing easy integration of new sensors and
          capabilities.
        </p>
        <p>
          The SLAM implementation enables the robot to map its environment in real-time and plan efficient
          mowing paths. YOLO object detection runs on the Raspberry Pi to identify obstacles like trees,
          people, and pets, triggering appropriate avoidance maneuvers.
        </p>
      </section>

      <section className="project-section">
        <h2>Hardware Architecture</h2>
        <ul className="features-list">
          <li><strong>Chassis:</strong> Custom steel tank-track base designed in Autodesk Inventor, fabricated for durability</li>
          <li><strong>Motors:</strong> Dual high-torque motors with RoboClaw motor controller for differential drive</li>
          <li><strong>Compute:</strong> Raspberry Pi 4 for high-level processing, Arduino for low-level motor control</li>
          <li><strong>Sensors:</strong> 2D LiDAR for mapping, RGB camera for vision, GPS for positioning, IMU for orientation</li>
          <li><strong>Power:</strong> High-capacity battery system providing ~5 hours of runtime</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Software Stack</h2>
        <p>
          The software architecture is built on ROS, providing a distributed system for sensor integration,
          navigation, and control. Key nodes include:
        </p>
        <ul className="features-list">
          <li><strong>Teleoperation:</strong> 100% complete - full remote control capability</li>
          <li><strong>SLAM Node:</strong> ~70% complete - real-time mapping and localization</li>
          <li><strong>Object Detection:</strong> YOLO v5 running on Raspberry Pi for real-time obstacle detection</li>
          <li><strong>Sensor Fusion:</strong> Custom algorithm combining LiDAR and camera data</li>
          <li><strong>Path Planning:</strong> Implements standard ROS navigation stack</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Performance Metrics</h2>
        <ul className="features-list">
          <li>Top speed: 28 km/h (17.4 mph)</li>
          <li>Battery runtime: ~5 hours continuous operation</li>
          <li>Base weight: Approximately 200 lbs</li>
          <li>Typical mower payload: ~100 lbs</li>
          <li>Maximum payload capacity: 200 lbs</li>
          <li>Target production cost: Under $1,000</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Public Demonstration</h2>
        <p>
          The autonomous lawnmower was demonstrated at Ingenuity Cleveland, a major innovation showcase event.
          The demonstration attracted attention from 50+ industry participants, engineers, and potential
          stakeholders. Feedback was overwhelmingly positive, with particular interest in the cost-effective
          design and robust all-terrain capabilities. The event provided valuable networking opportunities
          and insights for future development.
        </p>
      </section>

      <section className="project-section">
        <h2>Challenges & Solutions</h2>
        <p>
          <strong>Challenge 1 - Terrain Handling:</strong> Standard wheels struggled on slopes and uneven ground.
          <br/>
          <strong>Solution:</strong> Implemented tank-track system with high torque motors, providing superior
          traction and stability on various terrain types.
        </p>
        <p>
          <strong>Challenge 2 - Sensor Fusion:</strong> Individual sensors had limitations (LiDAR misses thin
          objects, camera struggles with lighting).
          <br/>
          <strong>Solution:</strong> Developed custom sensor fusion algorithm that combines LiDAR spatial data
          with camera visual recognition for comprehensive obstacle detection.
        </p>
        <p>
          <strong>Challenge 3 - Cost Optimization:</strong> Initial design exceeded budget significantly.
          <br/>
          <strong>Solution:</strong> Optimized mechanical and electrical design, selected cost-effective
          components without compromising functionality, achieving target price under $1,000.
        </p>
      </section>

      <section className="project-section">
        <h2>Current Status & Future Development</h2>
        <ul className="features-list">
          <li><strong>Teleoperation:</strong> Fully operational - complete remote control via ROS</li>
          <li><strong>SLAM Mapping:</strong> 70% complete - continues to improve accuracy and reliability</li>
          <li><strong>Next Steps:</strong> Complete SLAM integration, improve path planning efficiency</li>
          <li><strong>Future Features:</strong> Weather resistance upgrades, mobile app control, cloud connectivity</li>
          <li><strong>Commercialization:</strong> Exploring options for production and market entry</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Skills Demonstrated</h2>
        <ul className="features-list">
          <li>Mechanical design and fabrication (CAD, welding, assembly)</li>
          <li>Robotics software development (ROS, Python, C++)</li>
          <li>Computer vision and machine learning (YOLO, OpenCV)</li>
          <li>Sensor integration and fusion algorithms</li>
          <li>Embedded systems programming (Arduino, Raspberry Pi)</li>
          <li>System integration and testing</li>
          <li>Cost optimization and design for manufacturing</li>
          <li>Public demonstration and communication</li>
        </ul>
      </section>
    </ProjectDetail>
  );
}

export default AutonomousLawnmowerProject;

