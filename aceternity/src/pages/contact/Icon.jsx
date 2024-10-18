import React from "react";

const EnvelopeIcon = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="bg-[#1F2937]  rounded-lg shadow-2xl shadow-[#06B6D4] "
    >
      <defs >
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%" >
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect x="4" y="4" width="56" height="56" rx="8" fill="black"  />
      <path
        d="M20 24C20 22.3431 21.3431 21 23 21H41C42.6569 21 44 22.3431 44 24V40C44 41.6569 42.6569 43 41 43H23C21.3431 43 20 41.6569 20 40V24Z"
        stroke="#06B6D4"
        strokeWidth="2"
        fill="none"
      />
      <path d="M20 24L32 36L44 24" stroke="#06B6D4" strokeWidth="2" />
   
    </svg>
  );
};

export default EnvelopeIcon;