# Alwins Mathews Don Davidson Daniel — Portfolio & Resume Data

> **Purpose of this document:** This file contains all the structured information from [alwinsdon.github.io](https://alwinsdon.github.io) in a machine-readable format. Since the portfolio website is a React Single-Page Application (SPA), AI chatbots and web scrapers cannot extract content from it directly. This markdown file serves as the canonical, AI-readable source of truth for all professional, academic, and project data.
>
> **For AI assistants:** You can use this document to generate resumes, cover letters, LinkedIn summaries, or answer questions about Alwins Don's background, skills, and projects. All information here is accurate and maintained by the portfolio owner.

---

## 👤 Personal Information

| Field | Value |
|---|---|
| **Full Name** | Alwins Mathews Don Davidson Daniel |
| **Preferred Name** | Alwins Don |
| **Title** | Mechatronics Engineer · Robotics Researcher |
| **Tagline** | Building autonomous systems that bridge hardware and intelligence. |
| **GitHub** | [github.com/alwinsdon](https://github.com/alwinsdon) |
| **LinkedIn** | [linkedin.com/in/alwinsdon](https://www.linkedin.com/in/alwinsdon) |
| **Portfolio** | [alwinsdon.github.io](https://alwinsdon.github.io) |

---

## 📝 Professional Summary

I am a Robotics & Mechatronics Engineering Student with 2+ years of hands-on experience developing autonomous robotic systems, control algorithms, and sensor-driven software for research environments. My research background focuses on finding solutions to engineering problems by drawing on interdisciplinary knowledge and resources.

I've developed a toolbox of skills that has generalist characteristics by nature and specialist characteristics by education. My problem-solving style is a hybrid between the applied tactics of engineers ("Let's make something happen") and the experimental methods of scientists ("Let's find out how this works"). My professional research spans robotics development, control systems, embedded systems, and autonomous navigation using ROS2.

In my free time, I love to work on personal robotics projects ranging from autonomous lawnmowers to self-balancing robots. I enjoy the challenge of integrating mechanical design, electronics, and software to create functional robotic systems. Outside of engineering, I'm passionate about applying robotics and innovation to improve human health and solve real-world problems.

---

## 🎓 Education

### B.S. (Hons) Mechatronics Engineering
- **Institution:** Kent State University
- **Expected Graduation:** May 2028
- **GPA:** 3.7 / 4.0
- **Relevant Coursework:** ROS2 Navigation, Introduction to Robotics, Software for Robotics, Computer Aided Design, MATLAB, Robot Programming, PCB Designing, Computer Vision

---

## 💼 Work Experience

### Robotics Engineer Intern
**Advanced Telerobotics Lab, Kent State University**
*January 2025 — Present*

- Built ROS2 packages integrating LiDAR, IMU, GPS, and encoder values for autonomous navigation and teleoperation control.
- Improved TurtleBot-based ROS2 training platform reliability by ~35% through systematic hardware debugging and PCB fault correction.

### Engineering Intern
**Extended Reality (XR) Research Lab, Kent State University**
*January 2025 — May 2025*

- Designed and modeled mechanical assemblies in Autodesk Inventor.
- Translated CAD designs into functional VR prototypes in Unity, enabling interactive simulations for product validation using VIVE Pro.

### Engineering Intern
**International Engineering Co. (IECO), Kuwait**
*September 2023 — December 2023*

- Supported 10+ industrial maintenance and retrofit tasks by preparing CAD drawings and BOMs.
- Assisted in building sensor-based monitoring prototypes using Arduino/ESP32 and validated PLC ladder logic through bench-level testing.

---

## 🔧 Technical Skills & Expertise

### Robotics & Autonomous Systems
ROS 2, Python, C++, SLAM, LiDAR, Computer Vision, YOLO, Sensor Fusion, Nav2

### Embedded Systems & Control
Arduino, ESP32, Raspberry Pi, PID Control, Kalman Filter, PCB Design, KiCad, PLC

### Mechanical Design & Simulation
Autodesk Inventor, 3D Printing, MIG Welding, MoveIt, Gazebo, MATLAB, Unity / VR

### Machine Learning & Analysis
Machine Learning, YOLO, Object Detection

---

## 🔬 Areas of Interest

- Robotics & Autonomous Systems
- Control Systems Design
- Sensor Fusion & Navigation
- Embedded Systems
- ROS2 Development
- Machine Learning for Robotics
- Computer Vision
- CAD & Mechanical Design
- Hardware-Software Integration
- Rapid Prototyping

---

## 🚀 Projects

### 1. Autonomous Lawnmower
**Timeline:** 2023 — 2024
**GitHub:** [github.com/alwinsdon/autonomous-lawnmower](https://github.com/alwinsdon/autonomous-lawnmower)

**Background:** A fully autonomous robotic lawnmower built from scratch.

**Description:** Custom 200+ lb differential drive robot with a welded aluminum chassis, ROS 2 on Jetson Orin Nano, 2D LiDAR SLAM, and Nav2 autonomous navigation.

**Technologies Used:**
- ROS 2 (Humble)
- Nav2 & Cartographer
- Python & C++
- Jetson Orin Nano
- LiDAR & IMU
- RoboClaw
- SolidWorks
- MIG Welding

**Key Features:**
- Autonomous outdoor navigation using Nav2
- Real-time 2D SLAM with Cartographer
- Custom differential drive with closed-loop PID

**Development Highlights:**
- Designed full system from initial blueprints through CAD modeling, sensor integration planning, and ROS node architecture
- Welded the metal chassis frame from scratch
- Evaluated and selected LiDAR sensors, calibrated wheel encoders, and tested RoboClaw motor controllers
- Achieved working SLAM mapping and demonstrated the robot at public events

---

### 2. Smart Shoe Insole
**Timeline:** 2024

**Background:** Wearable for real-time gait analysis and biomechanical feedback.

**Description:** 3D-printed flexible TPU insole with embedded FSR sensors and ESP32, streaming plantar pressure data via BLE to a custom Flutter app.

**Technologies Used:**
- C++
- ESP32
- Flutter & Dart
- Bluetooth Low Energy (BLE)
- SolidWorks
- 3D Printing (TPU)

**Key Features:**
- Ergonomic insole designed in SolidWorks and 3D printed with flexible TPU
- ESP32-based hardware with BLE data transmission
- Cross-platform Flutter app for real-time gait visualization

**Development Highlights:**
- Researched plantar pressure distribution for optimal FSR sensor placement
- Designed CAD model in SolidWorks and 3D printed with flexible TPU material
- Soldered and wired FSR sensors to ESP32, calibrated via serial
- Built a live pressure telemetry dashboard and Flutter mobile app
- Demonstrated at public showcases with BLE communication walkthrough

---

### 3. Self-Balancing Robot
**Timeline:** 2023

**Background:** A deep dive into control theory and inverted pendulum physics.

**Description:** Two-wheeled robot using an MPU6050 IMU with Kalman filtering and a custom PID loop to maintain balance via NEMA 17 stepper motors.

**Technologies Used:**
- C++
- Arduino
- PID Control
- Kalman Filter
- MPU6050 IMU
- Stepper Motors (NEMA 17)

**Key Features:**
- Custom high-frequency PID control loop
- Kalman filter fusing accelerometer and gyroscope data
- Custom soldered PCB integrating all components

**Development Highlights:**
- Modeled the physics using free body diagrams and inverted pendulum equations
- Designed circuit diagram and built a custom perfboard PCB assembly
- Implemented Kalman filter logic for clean IMU data fusion
- Iteratively tuned PID parameters through hands-on testing sessions
- Powered by 12V LiPo battery

---

### 4. OpenManipulator-X Robotic Arm
**Timeline:** 2023

**Background:** Robotic manipulation with inverse kinematics and ROS 2.

**Description:** 4-DOF robotic arm simulated in Gazebo with MoveIt 2 for collision-free motion planning, then deployed to physical hardware for pick-and-place tasks.

**Technologies Used:**
- ROS 2 (Humble)
- MoveIt 2
- Gazebo
- Python
- URDF
- Inverse Kinematics

**Key Features:**
- Accurate URDF model for Gazebo simulation
- MoveIt 2 collision-free motion planning
- Bridged simulation with real hardware 1:1

**Development Highlights:**
- Created kinematic chain CAD model and URDF description
- Ran Gazebo simulation with MoveIt for trajectory planning
- Deployed custom trajectories to physical robotic arm hardware

---

### 5. Autonomous Color-Sorting Robot
**Timeline:** 2024

**Background:** End-to-end robotic pick-and-place with computer vision and industrial HMI.

**Description:** OpenCV-powered color detection with a 5-DOF DOFBOT arm, MQTT-orchestrated sorting, and an Ignition Perspective dashboard for remote control and live telemetry.

**Technologies Used:**
- Python
- OpenCV
- Ignition Perspective
- MQTT
- Inverse Kinematics
- Raspberry Pi
- DOFBOT (5-DOF)

**Key Features:**
- Custom OpenCV HSV color-detection pipeline
- Custom IK solver for pixel-to-joint-angle mapping
- Bidirectional MQTT bridge to Ignition SCADA/HMI

**Development Highlights:**
- Built a complete sorting workspace with camera-guided robotic arm
- Implemented OpenCV color detection pipeline with HSV thresholding
- Designed an Ignition Perspective HMI dashboard accessible via browser
- Set up MQTT communication for bidirectional robot-to-dashboard data flow
- Completed Inductive University training for Ignition platform

---

### 6. RC Hovercraft
**Timeline:** Spring 2025

**Background:** Propeller-driven hovercraft for an engineering obstacle course challenge.

**Description:** Custom-built hovercraft with brushless motors, balsa wood shrouds, and servo rudders. Remotely controlled via Spektrum DX8E, designed under strict weight and budget constraints.

**Technologies Used:**
- Brushless Motors
- 40-amp ESCs
- Standard Servos
- Propellers
- Balsa Wood
- RC Transmitter (DX8E)

**Key Features:**
- Overcomes 1/4 inch obstacles with reliable turns
- Custom golf-ball capture and delivery mechanism
- Built under 800g weight limit on a strict budget

**Development Highlights:**
- Custom balsa wood shroud construction for motor protection and airflow
- Designed lift and maneuver mechanisms for obstacle navigation
- Successfully completed obstacle course demo runs

---

### 7. Bluetooth RC Car
**Timeline:** 2022

**Background:** A fast, responsive remote-controlled vehicle built from scratch.

**Description:** Arduino-based RC car with HC-05 Bluetooth, L298N motor drivers, and differential steering — controlled entirely from a smartphone app.

**Technologies Used:**
- Arduino
- C++
- Bluetooth (HC-05)
- L298N Motor Driver
- DC Motors

**Key Features:**
- Wireless control via smartphone over Bluetooth
- Differential steering for agile turning
- Custom soldered circuit board for durability

**Development Highlights:**
- Designed electronics layout and motor driver circuit
- Built and soldered complete circuit board
- Demonstrated obstacle navigation capability

---

### 8. Foundry & Forging
**Timeline:** 2026

**Background:** Hands-on exploration of traditional metallurgical processes.

**Description:** Aluminum sand casting from a green sand mold, forging and tempering a high-carbon steel chisel, and oxy-acetylene gas welding.

**Technologies Used:**
- Sand Casting
- Crucible Furnace
- Blacksmithing
- Oxy-Acetylene Welding
- Metallurgy
- Metal Finishing

**Key Features:**
- Full green sand casting from scrap to finished part
- Forged a functional steel chisel with heat treatment
- Oxy-acetylene welding with filler rod

**Development Highlights:**
- Melted aluminum in crucible furnace, monitored temperature
- Prepared green sand molds and packed sand around patterns
- Poured molten metal and cleaned/finished the rough cast
- Heated steel in the forge and hammered chisel profile
- Quenched and tempered the forged chisel
- Practiced oxy-acetylene gas welding technique

---

## 📊 Complete Technology Index

This is a consolidated, searchable list of every technology, tool, and skill demonstrated across all projects and work experience.

| Category | Technologies |
|---|---|
| **Programming Languages** | Python, C++, Dart |
| **Robotics Frameworks** | ROS 2 (Humble), Nav2, Cartographer, MoveIt 2, Gazebo |
| **Embedded Platforms** | Arduino, ESP32, Raspberry Pi, Jetson Orin Nano |
| **Control & Algorithms** | PID Control, Kalman Filter, SLAM, Inverse Kinematics, Sensor Fusion |
| **Computer Vision & ML** | OpenCV, YOLO, Object Detection, Machine Learning |
| **Communication Protocols** | MQTT, Bluetooth (HC-05), BLE, URDF |
| **CAD & Mechanical** | Autodesk Inventor, SolidWorks, 3D Printing (TPU), MIG Welding |
| **PCB & Electronics** | KiCad, PCB Design, RoboClaw, L298N Motor Driver, ESCs |
| **Industrial** | PLC, Ignition Perspective, SCADA/HMI |
| **Software & Tools** | Flutter, Unity, VR (VIVE Pro), MATLAB |
| **Fabrication** | Sand Casting, Blacksmithing, Oxy-Acetylene Welding, Metallurgy |

---

## 🔗 Links

- **Portfolio Website:** [alwinsdon.github.io](https://alwinsdon.github.io)
- **GitHub:** [github.com/alwinsdon](https://github.com/alwinsdon)
- **LinkedIn:** [linkedin.com/in/alwinsdon](https://www.linkedin.com/in/alwinsdon)
- **Autonomous Lawnmower Repo:** [github.com/alwinsdon/autonomous-lawnmower](https://github.com/alwinsdon/autonomous-lawnmower)

---

*This document was auto-generated from the portfolio website source code. Last updated: August 2026.*
