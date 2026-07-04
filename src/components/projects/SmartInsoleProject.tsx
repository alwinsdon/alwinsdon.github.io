import React from "react";
import ProjectDetail from "./ProjectDetail";
import ssiFinalPrototype from '../../assets/images/projects/ssi/SSI-finalprototype.jpg';
import ssiCadModel from '../../assets/images/projects/ssi/SSI-cadmodel.png';
import ssiPlantarDistribution from '../../assets/images/projects/ssi/SSI-plantardistribution.png';
import ssiPublicDemo from '../../assets/images/projects/ssi/SSI-Publicdemo1.jpg';
import ssiCompPlacement from '../../assets/images/projects/ssi/SSI-compplacement.jpg';

function SmartInsoleProject() {
  return (
    <ProjectDetail
      title="Smart Insole"
      timeline="2024"
      background="The Smart Insole project was conceived as a wearable IoT solution to track fitness metrics and provide real-time feedback to users. The motivation was to create an accurate step-tracking platform with anti-cheat detection for crypto-based fitness incentive systems, while also exploring biomechanics sensing and haptic feedback technologies."
      description="Engineered a comprehensive wearable sensing platform embedded in an insole, featuring ESP32 microcontroller, force-sensitive resistors (FSRs), IMU, magnetometer, and haptic actuators. The system tracks footsteps, measures pressure distribution, monitors orientation, and provides zero-latency haptic feedback. Includes machine learning-based anti-cheat detection algorithms to ensure reliable step counting for incentive-based applications."
      technologies={[
        "ESP32 Microcontroller",
        "Python",
        "C/C++",
        "FSR (Force Sensitive Resistors)",
        "IMU (Inertial Measurement Unit)",
        "Magnetometer",
        "LRA Haptic Actuators",
        "KiCad (PCB Design)",
        "Autodesk Inventor",
        "Machine Learning",
        "Sensor Fusion Algorithms",
        "Wi-Fi & Bluetooth",
        "Wireless Charging"
      ]}
      features={[
        "Real-time step counting with 75-80% accuracy",
        "Four FSR sensors for pressure mapping",
        "IMU + magnetometer for orientation and gait analysis",
        "Zero-latency haptic feedback via LRA actuators",
        "Machine learning-based anti-cheat detection system",
        "Wi-Fi and Bluetooth wireless communication",
        "Wireless charging capability",
        "Approximately 5-hour battery runtime",
        "Custom PCB design optimized for insole form factor",
        "Sensor fusion algorithms for improved accuracy",
        "Real-time data transmission to mobile app/cloud"
      ]}
      images={[ssiFinalPrototype, ssiCadModel, ssiPlantarDistribution, ssiPublicDemo, ssiCompPlacement]}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default SmartInsoleProject;


