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

import vidTestingDemo from '../../assets/images/projects/sbr/SBR-testingdemo.mp4';
import vidPIDFix from '../../assets/images/projects/sbr/SBR-tryingtofixthepidvalues.mp4';
import gifInverted from '../../assets/images/projects/sbr/SBR-inverted_pendulum.gif';

function SelfBalancingRobotProject() {
  const images: ProjectImage[] = [
    { src: vidTestingDemo, caption: "Balancing algorithm demo.", type: 'video' },
    { src: vidPIDFix, caption: "PID tuning session.", type: 'video' },
    { src: gifInverted, caption: "Inverted pendulum physics.", type: 'image' },
    { src: imgFBD, caption: "Free body diagram." },
    { src: imgCircuit, caption: "Circuit diagram." },
    { src: imgPCB, caption: "Custom perfboard assembly." },
    { src: imgWire2, caption: "Stepper motor wiring." },
    { src: imgWire1, caption: "MPU6050 IMU connection." },
    { src: imgCharging, caption: "12V LiPo charging." },
    { src: imgKalman, caption: "Kalman filter logic." },
    { src: imgPID, caption: "PID control algorithm." },
    { src: imgFinalPic, caption: "Final balanced robot." }
  ];

  return (
    <ProjectDetail
      title="Self-Balancing Robot"
      timeline="2023"
      background="A deep dive into control theory and inverted pendulum physics."
      description="Two-wheeled robot using an MPU6050 IMU with Kalman filtering and a custom PID loop to maintain balance via NEMA 17 stepper motors."
      technologies={[
        "C++",
        "Arduino",
        "PID Control",
        "Kalman Filter",
        "MPU6050 IMU",
        "Stepper Motors"
      ]}
      features={[
        "Custom high-frequency PID control loop",
        "Kalman filter fusing accelerometer and gyroscope data",
        "Custom soldered PCB integrating all components"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default SelfBalancingRobotProject;
