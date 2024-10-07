import React from "react";

const ThunderIcon = () => {
  return (
      <svg
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="bg-[#2B2B2B] rounded-lg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <rect x="4" y="4" width="56" height="56" rx="8" fill="black" />
        <path
          d="M32 12L26 28H36L30 52L44 32H34L40 12H32Z"
          fill="#06B6D4"
        />
      </svg>
  );
};

export default ThunderIcon;
