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

import vidFSRTesting from '../../assets/images/projects/ssi/SSI-FSRtesting.mp4';
import vidAppCrypto from '../../assets/images/projects/ssi/SSI-appcryptodemo.mp4';
import vidDemo from '../../assets/images/projects/ssi/SSI-demo.mp4';
import vidDemoCharging from '../../assets/images/projects/ssi/SSI-democharging.mp4';
import vidTestingFSR from '../../assets/images/projects/ssi/SSI-testingfsr.mp4';


function SmartInsoleProject() {
  const images: ProjectImage[] = [
    { src: vidDemo, caption: "Smart insole live demo.", type: 'video' },
    { src: vidAppCrypto, caption: "Flutter app connectivity test.", type: 'video' },
    { src: vidFSRTesting, caption: "Real-time FSR telemetry.", type: 'video' },
    { src: vidTestingFSR, caption: "FSR sensor response curves.", type: 'video' },
    { src: vidDemoCharging, caption: "Battery charging demo.", type: 'video' },
    { src: imgPlantar, caption: "Plantar pressure distribution research." },
    { src: imgCadmodel, caption: "SolidWorks CAD model." },
    { src: img3dprinting, caption: "3D print slicing (TPU)." },
    { src: img3dprint, caption: "3D printed TPU insole." },
    { src: imgElectronics, caption: "ESP32, battery, and FSR components." },
    { src: imgCompPlacement, caption: "Component placement layout." },
    { src: imgSensorConn, caption: "FSR soldering and wiring." },
    { src: imgPrototype1, caption: "Initial hardware prototype." },
    { src: imgTestingFSR, caption: "FSR calibration via serial." },
    { src: imgTesting1, caption: "Live pressure telemetry dashboard." },
    { src: imgFinalPrototype, caption: "Final encapsulated prototype." },
    { src: imgPublicdemo1, caption: "Project showcase demo." },
    { src: imgPublicdemo2, caption: "Mobile app testing." },
    { src: imgPublicdemo3, caption: "BLE communication walkthrough." }
  ];

  return (
    <ProjectDetail
      title="Smart Shoe Insole"
      timeline="2024"
      background="Wearable for real-time gait analysis and biomechanical feedback."
      description="3D-printed flexible TPU insole with embedded FSR sensors and ESP32, streaming plantar pressure data via BLE to a custom Flutter app."
      technologies={[
        "C++",
        "ESP32",
        "Flutter & Dart",
        "Bluetooth Low Energy",
        "SolidWorks",
        "3D Printing (TPU)"
      ]}
      features={[
        "Ergonomic insole designed in SolidWorks and 3D printed with flexible TPU",
        "ESP32-based hardware with BLE data transmission",
        "Cross-platform Flutter app for real-time gait visualization"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default SmartInsoleProject;
