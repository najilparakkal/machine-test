import React from "react";
import NavBar from "../components/NavBar";
import FirstSection from "./FirstSection";
import { HeroScrollDemo } from "../acertenityComponents/SecondSection";
import ThirdSection from "./ThirdSection";
import ForthSection from "./ForthSection";
import FifthSection from "./FifthSection";
import SixthSection from "./SixthSection";
import SeventhSection from "./SeventhSection";
import LastSection from "./LastSection";

const Main = () => {
  return (
    <div className="bg-black w-full h-screen font-monstera">
      <NavBar />
      <FirstSection />
      <HeroScrollDemo />
      <ThirdSection />
      <ForthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection/>
      <LastSection/>
      {/*   <FooterSection/> */}
    </div>
  );
};

export default Main;
