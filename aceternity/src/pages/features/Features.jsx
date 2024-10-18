import React from "react";
import NavBar from "../components/NavBar";
import FirstSection from "./FirstSection";
import { FeaturesSectionDemo } from "./TherdSection";
import EnterprenurSection from "../components/EnterprenurSection";
import LastSection from "../components/LastSection";

const Features = () => {
  return (
    <div className="bg-black h-fit w-full">
      <NavBar />
      <FirstSection />
      <div className="mt-40">
        <FeaturesSectionDemo />
      </div>
      <div className="">
        <EnterprenurSection />
      </div>
      <LastSection/>
    </div>
  );
};

export default Features;
