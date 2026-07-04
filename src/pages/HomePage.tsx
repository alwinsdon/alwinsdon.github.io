import React from "react";
import {
  Main,
  Expertise,
  Project,
} from "../components";
import FadeIn from '../components/FadeIn';

function HomePage() {
  return (
    <FadeIn transitionDuration={700}>
      <Main/>
      <Expertise/>
      <Project/>
    </FadeIn>
  );
}

export default HomePage;

