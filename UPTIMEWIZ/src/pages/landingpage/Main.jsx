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
import WhyTrustUs from "../components/WhyTrustUs";

const Main = () => {
  return (
    <>
      
      <div className="bg-black w-full h-fit font-monstera">
        <FirstSection />
        <HeroScrollDemo />
        <ThirdSection />
        <WhyTrustUs />
        <ForthSection />
        <FifthSection />
        <Pricing />
        <SeventhSection />
        <LastSection />
      </div>
    </>
  );
};

export default React.memo(Main);
