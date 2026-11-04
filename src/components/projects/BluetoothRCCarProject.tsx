import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgTopView from '../../assets/images/projects/brc/BRC - car top view.jpeg';
import imgCircuit from '../../assets/images/projects/brc/BRC - circuit diagram.png';
import vidDemoTest from '../../assets/images/projects/brc/BRC - demo test.mp4';

function BluetoothRCCarProject() {
  const images: ProjectImage[] = [
    { src: vidDemoTest, caption: "RC car obstacle navigation.", type: 'video' },
    { src: imgTopView, caption: "Chassis and electronics layout." },
    { src: imgCircuit, caption: "Motor driver circuit diagram." }
  ];

  return (
    <ProjectDetail
      title="Bluetooth RC Car"
      timeline="2022"
      background="A fast, responsive remote-controlled vehicle built from scratch."
      description="Arduino-based RC car with HC-05 Bluetooth, L298N motor drivers, and differential steering — controlled entirely from a smartphone app."
      technologies={[
        "Arduino",
        "C++",
        "Bluetooth (HC-05)",
        "L298N Motor Driver",
        "DC Motors"
      ]}
      features={[
        "Wireless control via smartphone over Bluetooth",
        "Differential steering for agile turning",
        "Custom soldered circuit board for durability"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default BluetoothRCCarProject;
