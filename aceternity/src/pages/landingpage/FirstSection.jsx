import React from "react";

import { Rating, Typography } from "@mui/material";
import { AnimatedTooltip } from "../acertenityComponents/AnimatedToolTip";
import { Sparkles } from "../acertenityComponents/Tools";

const FirstSection = () => {
  const items = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "  https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    },
    {
      id: 2,
      name: "Jane Smith",
      designation: "Product Manager",
      image:
        "  https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
      id: 3,
      name: "Alice Johnson",
      designation: "UX Designer",
      image:
        "  https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
      id: 4,
      name: "Bob Brown",
      designation: "Data Scientist",
      image:
        "  https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
    {
      id: 5,
      name: "Bob Brown",
      designation: "Data Scientist",
      image:
        "  https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
    },
    {
      id: 6,
      name: "Bob Brown",
      designation: "Data Scientist",
      image:
        "  https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
    },
  ];
  return (
    <div className="bg-black text-white min-h-screen w-full flex flex-col    items-center justify-center px-4 sm:px-8 md:px-16 lg:px-24">
      <Sparkles/>
      <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-8xl font-bold max-w-7xl mx-auto text-center mt-32 sm:mt-48 md:mt-64 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
        Transform Your <br /> Marketing with Proactiv
      </h1>

      <p className="text-lg md:text-xl  w-1/2 font-semibold mt-4 md:mt-7 text-gray-200 mb-6 text-center">
        Automate Campaigns, Engage Audiences, and Boost Lead Generation with Our
        All-in-One Marketing Solution
      </p>

      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 py-8">
        <div className="text-center">
          <div className="flex justify-center gap-3">
            <AnimatedTooltip items={items} />
            <Rating name="" value={5} readOnly className="mt-5" />
          </div>
          <p className="text-xs md:text-sm font-semibold text-[#737373] mt-3">
            Trusted by 27,000+ creators
          </p>
          <button className="bg-[#34B1D9] mt-20 text-black font-semibold py-3 px-2 text-[13px] rounded-lg w-36 hover:bg-gray-100 transition-colors mx-auto flex items-center justify-center">
            Book a demo
            <span className="">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 5l7 7m0 0l-7 7m7-7H6"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(FirstSection);
