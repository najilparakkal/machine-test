import { Button, Rating } from "@mui/material";
import { AnimatedTooltip } from "../acertenityComponents/AnimatedToolTip";
import Footer from "./Footer";
import WhyTrustUs from "./WhyTrustUs";
import { gradientStyle } from "../../utils";

export default function LastSection() {
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
    <div className="bg-black text-white min-h-fit items-center p-8 md:p-16">
      <div className="w-full  max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-xl mb-10  ">
          <h1
            style={gradientStyle}
            className="text-2xl font-bold md:text-4xl mb-6   mx-auto text-start relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          >
            Uptimewiz is best-in-class
          </h1>
          {/* <p className="text-[#A3A3A3] mb-10 text-sm md:text-base">
            Proactiv houses the best in class software tools to <br /> kickstart
            your marketing journey. Join 127,000+ other users <br /> to get
            started.
          </p> */}
          <p className="text-[#A3A3A3] mb-10 text-sm  md:text-base">
            Uptimewiz is best-in-class of software tools to kickstart your
            marketing journey. Join 127,000+ other users to get started.
          </p>

          <div className="flex flex-col items-center md:flex-row gap-3 md:gap-6">
            <AnimatedTooltip items={items} />
          </div>
          <div className="flex mt-5 gap-5">
            <p className="text-xs md:text-sm font-semibold text-[#737373] mt-3">
              Trusted by Hundreds of Companies Worldwide
            </p>
            <Rating name="" value={5} readOnly className="mt-5 md:mt-0" />
          </div>
        </div>

        <div className="lg:ml-8 flex justify-center lg:justify-end">
          <button className="bg-[#34B1D9] mt-10 lg:mt-0 text-black font-semibold py-3 px-[2px]  text-sm md:text-base rounded-lg w-44 transition-colors mx-auto flex items-center justify-center">
            Schedule a Demo
            <span className="ml-2">
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

      <Footer />
    </div>
  );
}
