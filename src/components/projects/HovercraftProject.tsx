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
    { src: vidDemoRun, caption: "Live demo run of the hovercraft on the obstacle course.", type: 'video' },
    { src: vidTesting, caption: "Testing the hovercraft lift and maneuvering capabilities.", type: 'video' },
    { src: hcpAngle, caption: "Angled profile shot showcasing the custom balsa wood shrouds." },
    { src: hcpFront, caption: "Front view highlighting the lift mechanism and aerodynamic design." },
    { src: hcpCircuit, caption: "Detailed circuit diagram for the electronic speed controllers and servos." },
    { src: hcpMotor, caption: "Close-up of the high-RPM brushless motor used for lift and propulsion." },
    { src: hcpServo, caption: "Servo motor assembly used for precise rudder control." },
    { src: hcpTransmitter, caption: "Spektrum DX8E transmitter used for remote teleoperation." }
  ];

  return (
    <ProjectDetail
      title="RC Hovercraft"
      timeline="Spring 2025"
      background="Designed and constructed a hovercraft capable of gliding and maneuvering along the ground to complete an obstacle course for ENGR 11002. Requirements included remote controllability, overcoming 1/4 inch obstacles, capturing and delivering a golf ball, and incorporating an animal theme, all while adhering to a strict weight limit (800g) and budget (600 Gils)."
      description="Built a propeller-driven hovercraft with brushless motors and custom shrouds. The craft integrated standard servos for rudders and shrouds, a 16-gauge wire power system, and 40-amp ESCs. Fabricated using balsa wood and corrugated cardboard within a strictly allocated budget, and fully controllable via a Spektrum DX8E transmitter."
      technologies={[
        "Brushless Motors",
        "40-amp ESCs",
        "Standard Servos",
        "Propellers",
        "Balsa Wood Fabrication",
        "RC Transmitter (Spektrum DX8E)",
        "Electronics Integration"
      ]}
      features={[
        "Remotely controllable via Spektrum DX8E with 6 channels",
        "Capable of overcoming 1/4 inch obstacles and executing reliable turns",
        "Animal-themed aesthetic design",
        "Custom golf-ball capture, maneuver, and delivery mechanism",
        "Ducted propellers with custom bent balsa wood shrouds",
        "Kept under 800g maximum vehicle mass limit",
        "Developed comprehensive manufacturing plan and weight/cost estimates"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default HovercraftProject;
