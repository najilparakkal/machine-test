"use client";
import React from "react";
import { ContainerScroll } from "./SecondSectionContainer";

export const HeroScrollDemo = () => {
  return (
    <div className="flex flex-col h-fit overflow-hidden bg-black    ">
      <ContainerScroll />
    </div>
  );
};
