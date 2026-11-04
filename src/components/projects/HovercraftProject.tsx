import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import hcpAngle from '../../assets/images/projects/hcp/HCP - Angle view.jpeg';
import hcpCircuit from '../../assets/images/projects/hcp/HCP - Circuit diagram.jpeg';
import hcpFront from '../../assets/images/projects/hcp/HCP - front view.jpeg';
import hcpMotor from '../../assets/images/projects/hcp/HCP- motor used.jpeg';
import hcpServo from '../../assets/images/projects/hcp/HCP- servo and motor used.jpeg';
import hcpTransmitter from '../../assets/images/projects/hcp/HCP - Transmitter.jpeg';

import vidDemoRun from '../../assets/images/projects/hcp/HCP - Demo run.mp4';
import vidTesting from '../../assets/images/projects/hcp/HCP - Testing.mp4';

function HovercraftProject() {
  const images: ProjectImage[] = [
    { src: vidDemoRun, caption: "Obstacle course demo run.", type: 'video' },
    { src: vidTesting, caption: "Lift and maneuver testing.", type: 'video' },
    { src: hcpAngle, caption: "Custom balsa wood shrouds." },
    { src: hcpFront, caption: "Front lift mechanism." },
    { src: hcpCircuit, caption: "ESC and servo circuit." },
    { src: hcpMotor, caption: "Brushless motor close-up." },
    { src: hcpServo, caption: "Rudder servo assembly." },
    { src: hcpTransmitter, caption: "Spektrum DX8E transmitter." }
  ];

  return (
    <ProjectDetail
      title="RC Hovercraft"
      timeline="Spring 2025"
      background="Propeller-driven hovercraft for an engineering obstacle course challenge."
      description="Custom-built hovercraft with brushless motors, balsa wood shrouds, and servo rudders. Remotely controlled via Spektrum DX8E, designed under strict weight and budget constraints."
      technologies={[
        "Brushless Motors",
        "40-amp ESCs",
        "Standard Servos",
        "Propellers",
        "Balsa Wood",
        "RC Transmitter (DX8E)"
      ]}
      features={[
        "Overcomes 1/4 inch obstacles with reliable turns",
        "Custom golf-ball capture and delivery mechanism",
        "Built under 800g weight limit on a strict budget"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default HovercraftProject;
