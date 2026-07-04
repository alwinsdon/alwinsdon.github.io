import React from "react";
import ProjectDetail from "./ProjectDetail";
import csrSortingSetup from '../../assets/images/projects/csr/CSR - Sorting setup view.jpeg';
import csrDofbotSide from '../../assets/images/projects/csr/CSR - DOFBOT side view.jpeg';
import csrIgnitionLauncher from '../../assets/images/projects/csr/CSR - Ignition design launcher.jpeg';
import csrIgnitionLogs from '../../assets/images/projects/csr/CSR - Ignition gateway logs.jpeg';
import csrMqttDashboard from '../../assets/images/projects/csr/CSR-dofbot mqtt dashboard.jpeg';
import csrMqttSuccess from '../../assets/images/projects/csr/CSR-dofbot mqtt success.jpeg';
import csrChromeLaunch from '../../assets/images/projects/csr/CSR- chrome launch.jpeg';
import csrInductiveUniversity from '../../assets/images/projects/csr/CSR- Inductive University .jpeg';
import csrDemoFrontend from '../../assets/images/projects/csr/CSR- colour sorting demo frontend.mp4';
import csrDemoBackend from '../../assets/images/projects/csr/CSR- colour sorting demo backend.mp4';

function ColorSortingRobotProject() {
  return (
    <ProjectDetail
      title="Autonomous Color-Sorting Robot with Ignition HMI"
      timeline="2025"
      background="This project was built to demonstrate end-to-end integration of robotics, computer vision, and industrial HMI design. The goal was to create a fully autonomous pick-and-place system that identifies colored blocks (blue, green, red, yellow) using a USB camera, picks them up with a 5-DOF Yahboom DOFBOT arm, and places them in a designated drop zone — all orchestrated through an Ignition Perspective HMI dashboard."
      description="Built an end-to-end robotic system combining computer vision, inverse kinematics, MQTT communication, and industrial HMI design. A Raspberry Pi bridge script receives commands from an Ignition Perspective dashboard, searches four corners of the workspace, visually identifies the requested color, picks the block, and places it in the center — all without human intervention. The system includes live status feedback and survived real-world failures including USB camera dropouts, I2C bus issues, and MoveIt planning dead-ends."
      technologies={[
        "Raspberry Pi",
        "Yahboom DOFBOT (5-DOF)",
        "OpenCV",
        "ROS Noetic",
        "MoveIt",
        "Python",
        "MQTT / Mosquitto",
        "Ignition Perspective HMI",
        "Arm_Lib Direct Control",
        "Inverse Kinematics",
        "HSV Color Detection",
        "Inductive Automation"
      ]}
      features={[
        "Autonomous color detection and sorting (blue, green, red, yellow)",
        "5-DOF Yahboom DOFBOT arm with bus servo direct control",
        "OpenCV HSV color detection with ROI and workspace filtering",
        "Ignition Perspective HMI dashboard with live status feedback",
        "MQTT bridge between Ignition Gateway and Raspberry Pi",
        "Raw socket MQTT publishing to bypass Jython limitations",
        "Safe high-transit motion strategy to prevent collisions",
        "USB camera auto-detection across port indices 0–9",
        "Threaded arm control for non-blocking operation",
        "Pixel-to-world calibration for accurate pick coordinates"
      ]}
      images={[
        csrSortingSetup,
        csrDofbotSide,
        csrIgnitionLauncher,
        csrMqttDashboard,
        csrMqttSuccess,
        csrIgnitionLogs,
        csrChromeLaunch,
        csrInductiveUniversity
      ]}
      githubLink="https://github.com/alwinsdon"
    >
      <section className="project-section">
        <h2>System Architecture</h2>
        <p>
          The system is organized into three layers: an Ignition Perspective HMI for operator control,
          an MQTT broker for lightweight messaging, and a Python bridge on the Raspberry Pi that handles
          computer vision and arm control. When an operator presses a color button on the dashboard (Find Blue,
          Green, Red, Yellow, Home, or Stop), a tag change script on the Ignition Gateway publishes an MQTT
          command. The Pi bridge receives it, scans the workspace corners, identifies the target block, and
          executes a pick-and-place sequence — reporting status back to the HMI in real time.
        </p>
        <ul className="features-list">
          <li><strong>HMI Layer:</strong> Ignition Perspective dashboard with color command buttons and live status tags</li>
          <li><strong>Communication:</strong> Mosquitto MQTT broker with raw socket publishing from Ignition Gateway scripts</li>
          <li><strong>Compute:</strong> Raspberry Pi running Python bridge with threaded arm control</li>
          <li><strong>Perception:</strong> USB camera with OpenCV HSV detection and pixel-to-world calibration</li>
          <li><strong>Actuation:</strong> Yahboom DOFBOT 5-DOF arm via Arm_Lib direct servo control</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Computer Vision Pipeline</h2>
        <p>
          Color detection uses OpenCV with HSV color space thresholds for blue, green, red, and yellow blocks.
          A region of interest (ROI) restricts detection to the table surface, and a workspace filter
          (0.10 &lt; X &lt; 0.35, -0.15 &lt; Y &lt; 0.15) rejects coordinates outside the physical workspace.
          Pixel-to-world calibration maps camera coordinates to arm frame coordinates, enabling accurate
          pick positioning. A minimum block area threshold filters noise and false positives from walls or
          ceiling reflections.
        </p>
      </section>

      <section className="project-section">
        <h2>Robotics & Motion Control</h2>
        <p>
          The project began with ROS Noetic and MoveIt for motion planning, including MoveGroupCommander,
          OMPL/KDL planners, and kinematics.yaml tuning with position_only_ik enabled. When MoveIt
          planning timeouts persisted due to the 5-DOF arm's inability to satisfy full 6-DOF pose targets,
          the approach pivoted to direct servo control via Arm_Lib — a practical decision driven by real
          hardware constraints.
        </p>
        <p>
          A safe high-transit strategy prevents collisions during search: the arm always lifts to a clearance
          pose (shoulder 80°, elbow 50°) before rotating the base, then descends vertically. This eliminated
          the problem of the arm sweeping sideways and knocking blocks off the table during corner scans.
        </p>
      </section>

      <section className="project-section">
        <h2>Ignition HMI Integration</h2>
        <p>
          The Ignition Perspective dashboard provides operator-facing controls and real-time feedback.
          Because Ignition's Jython environment cannot import paho-mqtt (a C-based library), MQTT publishing
          was implemented using raw socket connections from Gateway Tag Change scripts — sending properly
          formatted MQTT CONNECT/PUBLISH bytes directly to the Mosquitto broker. This bypassed the library
          limitation while keeping the architecture clean and reliable.
        </p>
        <p>
          Training from Inductive University provided the foundational knowledge for Ignition tags, Perspective
          views, and Gateway scripting that made the HMI possible.
        </p>
      </section>

      <section className="project-section">
        <h2>Demo Videos</h2>
        <div className="project-gallery">
          <div>
            <p><strong>Frontend — Ignition HMI Dashboard</strong></p>
            <video controls width="100%" style={{ borderRadius: '10px' }}>
              <source src={csrDemoFrontend} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div>
            <p><strong>Backend — Robot Sorting Operation</strong></p>
            <video controls width="100%" style={{ borderRadius: '10px' }}>
              <source src={csrDemoBackend} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <section className="project-section">
        <h2>Challenges & Solutions</h2>
        <p>
          <strong>Camera Instability ("Zombie Camera"):</strong> The USB camera kept bouncing between
          /dev/video0, /dev/video1, and /dev/video2 after crashes, or disappeared entirely.
          <br />
          <strong>Solution:</strong> Implemented auto-detection scanning indices 0–9 with automatic reopen,
          combined with sudo modprobe -r uvcvideo reloads for USB reset resilience.
        </p>
        <p>
          <strong>I2C Communication Failures:</strong> The servo board didn't respond — /dev/i2c-1 was
          missing and Arm_serial_servo_write6 threw I2C errors.
          <br />
          <strong>Solution:</strong> Enabled I2C in raspi-config and /boot/firmware/config.txt, loaded
          i2c-bcm2835 and i2c-dev modules, and manually created the device node with mknod. Traced to a
          missing kernel driver.
        </p>
        <p>
          <strong>MoveIt Planning Timeouts:</strong> Every MoveIt go() call failed because the 5-DOF arm
          couldn't satisfy a full 6-DOF pose target (position + fixed orientation).
          <br />
          <strong>Solution:</strong> Switched to set_position_target([x, y, z]) with position_only_ik: True
          in kinematics.yaml. Later abandoned MoveIt for direct servo control when the fake controller in
          demo.launch never executed on real hardware.
        </p>
        <p>
          <strong>Arm Hitting Blocks During Search:</strong> While scanning corners, the arm swept sideways
          and knocked blocks off the table.
          <br />
          <strong>Solution:</strong> Implemented safe high-transit strategy — always lift to clearance pose
          before rotating base, then descend vertically.
        </p>
        <p>
          <strong>False Color Detections on Walls:</strong> The camera occasionally spotted colors on walls
          or ceiling while moving.
          <br />
          <strong>Solution:</strong> Applied table ROI and workspace coordinate filter; increased minimum
          block area threshold to filter noise.
        </p>
        <p>
          <strong>Ignition MQTT Integration:</strong> Ignition's Jython environment cannot import paho-mqtt.
          <br />
          <strong>Solution:</strong> Used raw socket MQTT publishing from Gateway Tag Change scripts,
          sending properly formatted CONNECT/PUBLISH bytes directly to the broker.
        </p>
      </section>

      <section className="project-section">
        <h2>Results</h2>
        <ul className="features-list">
          <li>Achieved fully autonomous operation: Pi bridge receives Ignition commands, searches corners, identifies color, picks, and places — no human intervention</li>
          <li>Built live HMI dashboard with Find Blue/Green/Red/Yellow, Home, and Stop buttons plus real-time status feedback</li>
          <li>System survived USB camera dropout, I2C bus failures, MoveIt planning dead-ends, and network-induced MQTT quirks</li>
          <li>Learned to pivot between ROS/MoveIt and direct-control approaches based on real-world hardware constraints</li>
        </ul>
      </section>

      <section className="project-section">
        <h2>Skills Demonstrated</h2>
        <ul className="features-list">
          <li>Computer vision with OpenCV (HSV detection, ROI, calibration)</li>
          <li>Robotic arm control and inverse kinematics (5-DOF constraints)</li>
          <li>ROS Noetic and MoveIt configuration and tuning</li>
          <li>Industrial HMI design with Ignition Perspective</li>
          <li>MQTT protocol implementation (including raw socket publishing)</li>
          <li>System integration across HMI, broker, and embedded compute</li>
          <li>Hardware debugging (I2C, USB camera, servo communication)</li>
          <li>Safe motion planning and collision avoidance strategies</li>
        </ul>
      </section>
    </ProjectDetail>
  );
}

export default ColorSortingRobotProject;
