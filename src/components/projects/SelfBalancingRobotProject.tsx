import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgCircuit from '../../assets/images/projects/sbr/SBR-Circuitdiagram.png';
import imgFBD from '../../assets/images/projects/sbr/SBR-Freebodydiagram.png';
import imgPCB from '../../assets/images/projects/sbr/SBR-PCB.jpeg';
import imgPID from '../../assets/images/projects/sbr/SBR-PIDalgo.png';
import imgCharging from '../../assets/images/projects/sbr/SBR-charging12vlipo.jpeg';
import imgFinalPic from '../../assets/images/projects/sbr/SBR-finalpic.jpeg';
import imgKalman from '../../assets/images/projects/sbr/SBR-kalmanfilterimu.png';
import imgWire1 from '../../assets/images/projects/sbr/SBR-wireconnection2.jpeg';
import imgWire2 from '../../assets/images/projects/sbr/SBR-wiresconnection.jpeg';

function SelfBalancingRobotProject() {
  const images: ProjectImage[] = [
    { src: imgFBD, caption: "Free body diagram analyzing the inverted pendulum physics." },
    { src: imgCircuit, caption: "Custom circuit diagram designed for the motor drivers and Arduino." },
    { src: imgPCB, caption: "Assembling the components onto the custom perfboard PCB." },
    { src: imgWire2, caption: "Wiring the stepper motors to the motor driver modules." },
    { src: imgWire1, caption: "Connecting the MPU6050 IMU for precise tilt measurements." },
    { src: imgCharging, caption: "Charging the 12V LiPo battery pack used to power the system." },
    { src: imgKalman, caption: "Kalman filter implementation logic for noise reduction on the IMU." },
    { src: imgPID, caption: "The PID control algorithm structure used to calculate motor response." },
    { src: imgFinalPic, caption: "The finalized self-balancing robot successfully maintaining its upright position." }
  ];

  return (
    <ProjectDetail
      title="Self-Balancing Robot"
      timeline="2023"
      background="Fascinated by control theory and inverted pendulum physics, I set out to build a two-wheeled self-balancing robot. This project served as a deep dive into sensor fusion, PID controllers, and raw Arduino programming."
      description="Engineered a two-wheeled robot that uses an MPU6050 IMU to measure tilt angles and NEMA 17 stepper motors for rapid counter-movements. Implemented a Kalman Filter in C++ to smooth noisy accelerometer and gyroscope data. Developed a custom PID loop to calculate the exact motor speeds required to maintain a perfect center of gravity."
      technologies={[
        "C++",
        "Arduino",
        "PID Control",
        "Kalman Filter",
        "MPU6050 IMU",
        "Stepper Motors"
      ]}
      features={[
        "Custom PID control loop running at high frequency to maintain stability.",
        "Implementation of a Kalman filter to fuse accelerometer and gyroscope data.",
        "Precise motor control using NEMA 17 stepper motors and A4988 drivers.",
        "Custom soldered PCB integrating the microcontroller, IMU, and motor drivers."
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default SelfBalancingRobotProject;
