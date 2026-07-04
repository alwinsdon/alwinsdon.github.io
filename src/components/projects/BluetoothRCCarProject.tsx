import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgTopView from '../../assets/images/projects/brc/BRC - car top view.jpeg';
import imgCircuit from '../../assets/images/projects/brc/BRC - circuit diagram.png';
import vidDemoTest from '../../assets/images/projects/brc/BRC - demo test.mp4';

function BluetoothRCCarProject() {
  const images: ProjectImage[] = [
    { src: vidDemoTest, caption: "Live demo test of the Bluetooth-controlled RC car navigating obstacles.", type: 'video' },
    { src: imgTopView, caption: "Top-down view of the assembled car chassis and electronic layout." },
    { src: imgCircuit, caption: "Circuit diagram detailing the motor driver and microcontroller connections." }
  ];

  return (
    <ProjectDetail
      title="Bluetooth RC Car"
      timeline="2022"
      background="An entry into remote-controlled robotics, focusing on mobile app integration with hardware. The goal was to build a fast, responsive, and robust remote-controlled vehicle from scratch."
      description="Engineered a custom remote-controlled car utilizing an Arduino microcontroller and a Bluetooth module for wireless teleoperation. Designed the circuit to integrate L298N motor drivers with high-speed DC motors, allowing for differential steering and rapid acceleration. The vehicle is controlled via a custom smartphone interface."
      technologies={[
        "Arduino",
        "C++",
        "Bluetooth (HC-05)",
        "L298N Motor Driver",
        "DC Motors"
      ]}
      features={[
        "Wireless remote control via a smartphone app over a Bluetooth connection.",
        "Differential steering mechanics for sharp, agile turning.",
        "Custom soldered circuit board ensuring robust connections during high-speed collisions.",
        "Modular chassis design allowing for easy battery replacement and hardware upgrades."
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default BluetoothRCCarProject;
