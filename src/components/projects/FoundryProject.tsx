import React from "react";
import ProjectDetail, { ProjectImage } from "./ProjectDetail";

import imgCastMold from '../../assets/images/projects/fp/FP - Cast mold.jpeg';
import imgCleaningCast from '../../assets/images/projects/fp/FP - Cleaning the cast.jpeg';
import imgFinalCast from '../../assets/images/projects/fp/FP - Final cast.jpeg';
import imgForgingHot from '../../assets/images/projects/fp/FP - Forging hot metal.jpeg';
import imgMeltingMetal from '../../assets/images/projects/fp/FP - Melting metal for casting.jpeg';
import imgMouldingRaw from '../../assets/images/projects/fp/FP - Moulding Raw material.jpeg';
import imgForgedChisel2 from '../../assets/images/projects/fp/FP - forged chisel 2.jpeg';
import imgMouldedPiece from '../../assets/images/projects/fp/FP - moulded piece.jpeg';
import imgMouldingMould from '../../assets/images/projects/fp/FP - moulding mould.jpeg';
import imgMeltingMetal2 from '../../assets/images/projects/fp/FP-  melting metal.jpeg';
import imgForgedChisel1 from '../../assets/images/projects/fp/FP- forged chisel 1.jpeg';
import imgGasWelding from '../../assets/images/projects/fp/FP- gas welding.jpeg';
import imgPouring from '../../assets/images/projects/fp/FP- pouring for casting.jpeg';

function FoundryProject() {
  const images: ProjectImage[] = [
    { src: imgMeltingMetal, caption: "Melting aluminum in the crucible." },
    { src: imgMeltingMetal2, caption: "Monitoring furnace temperature." },
    { src: imgMouldingRaw, caption: "Preparing green sand mold." },
    { src: imgMouldingMould, caption: "Packing sand around the pattern." },
    { src: imgCastMold, caption: "Completed sand mold." },
    { src: imgPouring, caption: "Pouring molten metal." },
    { src: imgCleaningCast, caption: "Cleaning the rough cast." },
    { src: imgMouldedPiece, caption: "Raw casted piece." },
    { src: imgFinalCast, caption: "Finished aluminum casting." },
    { src: imgForgingHot, caption: "Heating steel in the forge." },
    { src: imgForgedChisel1, caption: "Hammering the chisel profile." },
    { src: imgForgedChisel2, caption: "Forged chisel after quenching." },
    { src: imgGasWelding, caption: "Oxy-acetylene gas welding." }
  ];

  return (
    <ProjectDetail
      title="Foundry & Forging"
      timeline="2026"
      background="Hands-on exploration of traditional metallurgical processes."
      description="Aluminum sand casting from a green sand mold, forging and tempering a high-carbon steel chisel, and oxy-acetylene gas welding."
      technologies={[
        "Sand Casting",
        "Crucible Furnace",
        "Blacksmithing",
        "Oxy-Acetylene Welding",
        "Metallurgy",
        "Metal Finishing"
      ]}
      features={[
        "Full green sand casting from scrap to finished part",
        "Forged a functional steel chisel with heat treatment",
        "Oxy-acetylene welding with filler rod"
      ]}
      images={images}
    />
  );
}

export default FoundryProject;
