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
    { src: imgMeltingMetal, caption: "Melting the raw aluminum in the crucible to prepare for casting." },
    { src: imgMeltingMetal2, caption: "Monitoring the furnace temperature during the melting process." },
    { src: imgMouldingRaw, caption: "Preparing the green sand and patterns for the mold." },
    { src: imgMouldingMould, caption: "Packing the sand tightly around the pattern to create the cavity." },
    { src: imgCastMold, caption: "The completed two-part sand mold ready for pouring." },
    { src: imgPouring, caption: "Carefully pouring the molten metal into the sprue hole." },
    { src: imgCleaningCast, caption: "Breaking away the sand and cleaning up the rough cast part." },
    { src: imgMouldedPiece, caption: "The raw casted piece before final machining and finishing." },
    { src: imgFinalCast, caption: "The final polished and finished cast aluminum part." },
    { src: imgForgingHot, caption: "Heating high-carbon steel in the forge until it reaches a glowing, malleable state." },
    { src: imgForgedChisel1, caption: "Hammering and shaping the heated steel into a chisel profile." },
    { src: imgForgedChisel2, caption: "The forged chisel after quenching and initial grinding." },
    { src: imgGasWelding, caption: "Practicing precise gas welding techniques on metal joints." }
  ];

  return (
    <ProjectDetail
      title="Foundry, Forging & Welding"
      timeline="2023"
      background="A hands-on manufacturing project exploring traditional metallurgical processes. The objective was to gain practical experience with green sand casting, blacksmithing/forging, and gas welding."
      description="Successfully completed a series of heavy manufacturing tasks. First, created a wooden pattern, packed a green sand mold, melted scrap aluminum in a crucible furnace, and poured a solid metal casting. Second, utilized a propane forge and anvil to heat, hammer, shape, and temper a high-carbon steel chisel. Finally, demonstrated proficiency in joining metals using oxy-acetylene gas welding."
      technologies={[
        "Sand Casting",
        "Crucible Furnace",
        "Blacksmithing / Forging",
        "Oxy-Acetylene Welding",
        "Metallurgy",
        "Metal Finishing"
      ]}
      features={[
        "Designed and executed a full green sand casting process from raw scrap to a finished aluminum part.",
        "Forged a functional steel chisel by heating, shaping, and quenching high-carbon steel.",
        "Created strong, localized welds using an oxy-acetylene torch and filler rod.",
        "Gained deep understanding of metal properties, heat treatment, and thermal expansion."
      ]}
      images={images}
    />
  );
}

export default FoundryProject;
