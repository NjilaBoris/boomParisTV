import gsap from "gsap";

import CustomEase from "gsap/CustomEase";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import ReactLenis from "lenis/react";
import React from "react";
import Hero from "./sections/Hero";

gsap.registerPlugin(ScrollTrigger, SplitText, CustomEase, ScrollToPlugin);
const App = () => {
  return (
    <ReactLenis>
      <Hero />
    </ReactLenis>
  );
};

export default App;
