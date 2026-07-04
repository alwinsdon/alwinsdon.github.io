import React from "react";
import {
  Main,
  Expertise,
  Project,
  Contact,
} from "../components";
import FadeIn from '../components/FadeIn';

function HomePage() {
  return (
    <FadeIn transitionDuration={700}>
      <Main/>
      <Expertise/>
      <Project/>
      <Contact/>
    </FadeIn>
  );
}

export default HomePage;

