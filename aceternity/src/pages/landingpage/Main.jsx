import React from "react";
import NavBar from "../components/NavBar";
import FirstSection from "./FirstSection";
import { HeroScrollDemo } from "../acertenityComponents/SecondSection";
import ThirdSection from "../components/FasterSmarterSection";
import ForthSection from "./ForthSection";
import FifthSection from "../components/EnterprenurSection";
import Pricing from "../components/Pricing";
import SeventhSection from "./SeventhSection";
import LastSection from "../components/LastSection";

const Main = () => {
  return (
    <div className="bg-black w-full h-screen font-monstera">
      <FirstSection />
      <HeroScrollDemo />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <Pricing />
      <SeventhSection/>
      <LastSection/>
    </div>
  );
};

export default React.memo(Main);
