import React from "react";
import { HeroParallax } from "../acertenityComponents/ForthSectionCard";
import { TbTool } from "react-icons/tb";

const ForthSection = () => {
  return (
    <div className="bg-black w-full">
      <div className="h-[300px] flex justify-center items-center bg-black shadow-2xl">
        <div className="flex flex-col items-center p-4 rounded mt-24">
          <div className="p-1 bg-[#222222] mb-4 rounded-md hover:shadow-lg transition-all duration-1000 transform hover:scale-95">
            <div className="p-3 bg-black rounded-md shadow-2xl shadow-[#06B6D4]">
              <TbTool className="text-[#06B6D4] h-6 w-6 transform transition-transform duration-300 hover:scale-125" />
            </div>
          </div>

          <h1 className="text-center text-transparent bg-gradient-to-b bg-clip-text from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white font-semibold text-4xl md:text-[50px]">
            Perfect Set of Tools
          </h1>
          <p className="text-center text-white mt-3 text-base md:text-lg lg:text-[20px]">
            Proactiv comes with perfect tools for the perfect jobs out there.
          </p>
        </div>
      </div>
      <HeroParallax products={products} />;
    </div>
  );
};
export const products = [
  {
    title: "Moonbeam",
    thumbnail: "/therdSection/first.png",
  },
  {
    title: "Cursor",
    thumbnail: "/therdSection/second-backup.webp",
  },
  {
    title: "Rogue",
    thumbnail: "/therdSection/fourth-backup.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/therdSection/third.webp",
  },
  {
    title: "Moonbeam",
    thumbnail: "/therdSection/first.png",
  },
  {
    title: "Cursor",
    thumbnail: "/therdSection/second-backup.webp",
  },
  {
    title: "Rogue",
    thumbnail: "/therdSection/fourth-backup.webp",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/therdSection/third.webp",
  },
  {
    title: "Moonbeam",
    thumbnail: "/therdSection/first.png",
  },
  {
    title: "Cursor",
    thumbnail: "/therdSection/second-backup.webp",
  },
  {
    title: "Rogue",
    thumbnail: "/therdSection/fourth-backup.webp",
  },
];

export default React.memo(ForthSection);
