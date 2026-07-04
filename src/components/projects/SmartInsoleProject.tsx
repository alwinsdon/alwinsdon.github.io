import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import img3dprint from '../../assets/images/projects/ssi/SSI-3Dprint.jpg';
import img3dprinting from '../../assets/images/projects/ssi/SSI-3Dprinting.png';
import imgElectronics from '../../assets/images/projects/ssi/SSI-ElectronicsComponents.jpg';
import imgPrototype1 from '../../assets/images/projects/ssi/SSI-Prototype1.jpg';
import imgPublicdemo1 from '../../assets/images/projects/ssi/SSI-Publicdemo1.jpg';
import imgPublicdemo2 from '../../assets/images/projects/ssi/SSI-Publicdemo2.jpg';
import imgPublicdemo3 from '../../assets/images/projects/ssi/SSI-Publicdemo3.jpg';
import imgCadmodel from '../../assets/images/projects/ssi/SSI-cadmodel.png';
import imgCompPlacement from '../../assets/images/projects/ssi/SSI-compplacement.jpg';
import imgFinalPrototype from '../../assets/images/projects/ssi/SSI-finalprototype.jpg';
import imgPlantar from '../../assets/images/projects/ssi/SSI-plantardistribution.png';
import imgSensorConn from '../../assets/images/projects/ssi/SSI-sensorconnection.jpg';
import imgTesting1 from '../../assets/images/projects/ssi/SSI-testing1.png';
import imgTestingFSR from '../../assets/images/projects/ssi/SSI-testingfsr.jpg';


function SmartInsoleProject() {
  const images: ProjectImage[] = [
    { src: imgPlantar, caption: "Research on human plantar pressure distribution to optimize sensor placement." },
    { src: imgCadmodel, caption: "CAD model designed in SolidWorks for the custom ergonomic insole." },
    { src: img3dprinting, caption: "Slicing the 3D model for printing with flexible TPU filament." },
    { src: img3dprint, caption: "The 3D printed TPU insole base fresh off the printer." },
    { src: imgElectronics, caption: "Selection of miniature electronics: ESP32, battery, and FSRs." },
    { src: imgCompPlacement, caption: "Strategic layout and placement of the electronic components inside the insole." },
    { src: imgSensorConn, caption: "Soldering and connecting the delicate Force Sensitive Resistors (FSRs)." },
    { src: imgPrototype1, caption: "Initial bare-bones prototype testing the hardware integration." },
    { src: imgTestingFSR, caption: "Calibrating the pressure sensitivity of the FSRs using serial output." },
    { src: imgTesting1, caption: "Live telemetry dashboard showing real-time foot pressure data." },
    { src: imgFinalPrototype, caption: "The final encapsulated smart shoe insole prototype." },
    { src: imgPublicdemo1, caption: "Demonstrating the smart insole functionality at the project showcase." },
    { src: imgPublicdemo2, caption: "Users testing the mobile companion app built with Flutter." },
    { src: imgPublicdemo3, caption: "Explaining the BLE communication stack and data analysis features." }
  ];

  return (
    <ProjectDetail
      title="Smart Shoe Insole for Gait Analysis"
      timeline="2024"
      background="Designed to help athletes and physical therapy patients monitor their walking patterns. This project bridges wearable hardware, wireless communication, and mobile app development to provide real-time biomechanical feedback."
      description="Developed a 3D-printed flexible TPU insole embedded with Force Sensitive Resistors (FSRs) and an ESP32 microcontroller. The system reads plantar pressure distribution and transmits the data via Bluetooth Low Energy (BLE) to a custom Flutter mobile application, allowing users to visualize their gait in real-time."
      technologies={[
        "C++",
        "ESP32",
        "Flutter & Dart",
        "Bluetooth Low Energy (BLE)",
        "SolidWorks",
        "3D Printing (TPU)"
      ]}
      features={[
        "Ergonomic insole designed in SolidWorks and 3D printed with flexible TPU.",
        "Embedded FSR sensors to accurately map foot pressure distribution.",
        "ESP32-based hardware for localized data processing and low-power BLE transmission.",
        "Cross-platform Flutter app for real-time visualization and gait analysis."
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default SmartInsoleProject;
