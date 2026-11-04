import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgIsaacLab from '../../assets/images/projects/furuta/FRP-isaac-lab-training.jpeg';
import imgMotorLimits from '../../assets/images/projects/furuta/FRP-hardware-test-motor-limits.jpeg';
import imgWiring from '../../assets/images/projects/furuta/FRP-electrical-wiring.jpeg';
import imgFEAStress from '../../assets/images/projects/furuta/FRP-FEA-stress.jpeg';
import imgFEADisplacement from '../../assets/images/projects/furuta/FRP-FEA-displacement.jpeg';

import vidDemo from '../../assets/images/projects/furuta/FRP-demo.mp4';
import vidFEA from '../../assets/images/projects/furuta/FRP-FEA-simulation.mp4';

function FurutaPendulumProject() {
  const images: ProjectImage[] = [
    { src: vidDemo, caption: "First real-world balance test: the RL policy running on the ESP32.", type: 'video' },
    { src: imgIsaacLab, caption: "PPO policy replay in Isaac Lab (training ran 4,096 pendulums in parallel)." },
    { src: imgMotorLimits, caption: "Browser-based hardware test mapping the stepper's real speed and acceleration limits." },
    { src: imgWiring, caption: "Arduino Nano ESP32 and A4988 stepper driver wiring." },
    { src: imgFEAStress, caption: "SolidWorks SimulationXpress: von Mises stress on the PLA part (min FOS 18.2)." },
    { src: imgFEADisplacement, caption: "FEA displacement: 0.18 mm peak deflection." },
    { src: vidFEA, caption: "FEA deformation animation.", type: 'video' }
  ];

  return (
    <ProjectDetail
      title="Reinforcement Learning Furuta Pendulum"
      timeline="2026 — Present"
      background="Can a policy trained entirely in simulation balance a real, low-cost rotary pendulum? A sim-to-real study in reinforcement learning."
      description="Rotary inverted (Furuta) pendulum designed in SolidWorks and balanced by a PPO policy trained in NVIDIA Isaac Lab, then exported to C and run at 60 Hz on an Arduino Nano ESP32 driving a NEMA 17 stepper. The simulation models the real hardware: stepper torque limits, lost steps, encoder resolution, motor delay, and randomized physics."
      technologies={[
        "Isaac Lab",
        "Isaac Sim",
        "PPO (RSL-RL)",
        "PyTorch",
        "Python",
        "C++",
        "ESP32",
        "Stepper Motor (A4988)",
        "Rotary Encoder",
        "SolidWorks",
        "FEA",
        "URDF"
      ]}
      features={[
        "Trained four PPO tasks in Isaac Lab, from ideal physics up to a full stepper-motor model with domain randomization",
        "Found motor delay to be the key sim-to-real gap: a 33 ms delay dropped success to 0%, and giving the policy its last 2 actions brought it back to 100%",
        "Final hardware-model policy survives 99.7% of randomized 10 s episodes, and 99.3% with pushes 3× more often than in training",
        "Exported the network to C for the ESP32: outputs match PyTorch to 1e-6, with inference well under 1 ms",
        "Measured the real motor's limits (~50 rad/s², 9 rad/s) with a custom hardware test and retrained the policy within them",
        "First real-world balance held for up to 11.2 s; an encoder zero-offset fix and swing-up are next"
      ]}
      images={images}
      githubLink="https://github.com/alwinsdon"
    />
  );
}

export default FurutaPendulumProject;
