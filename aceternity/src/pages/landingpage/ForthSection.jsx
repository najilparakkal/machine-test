import React from "react";
import "./thirdSection.css";

const ForthSection = () => {


  
  const firstLine = [
    {
      image: "/tamplats/startup-1.webp",
    },
    {
      image: "/tamplats/startup-2.webp",
    },
    {
      image: "/tamplats/startup-3.webp",
    },
  ];
  const secondLine = [
    {
      image: "/tamplats/ai-saas-1.webp",
    },
    {
      image: "/tamplats/ai-saas-2.webp",
    },
    {
      image: "/tamplats/ai-saas.webp",
    },
  ];
  const thirdline = [
    {
      image: "/packs card/hero-sections.webp",
    },
    {
      image: "/packs card/logo-clouds.webp",
    },
    {
      image: "/packs card/features-section.webp",
    },
  ];

  return (
    <div className="w-full bg-black mt-[-100px]  h-auto">
      <div className="p-7 ">
        <h3 className="text-[#A855F7] mt-4 font-bold text-xl md:text-2xl">Templates</h3>
        <p className="text-[#C9CACB] mt-4 text-sm md:text-base">
          Modern and minimalist templates for building your next product.
        </p>
      </div>

      {/* First Line */}
      <div className="w-full flex justify-center bg-black">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="bg-black rounded-lg p-4 flex flex-col items-start">
            <p className="text-white mb-2 font-bold text-sm md:text-base lg:text-lg">
              Startup Landing Page Template
            </p>
            <p className="text-[#C9CACB] mb-2 font-normal text-xs md:text-sm lg:text-base">
              A simple, clean, modern and minimalistic landing page template for
              startups. Filled with microinteractions to keep your users engaged.
            </p>
            <button className="px-4 py-2 bg-white mt-2 font-semibold rounded-lg text-sm md:text-base">
              Buy now $49
            </button>
          </div>
          {firstLine.map((card, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Line */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="bg-black rounded-lg p-4 flex flex-col items-start">
            <p className="text-white mb-2 font-bold text-sm md:text-base lg:text-lg">
              AI SaaS Template
            </p>
            <p className="text-[#C9CACB] mb-2 font-normal text-xs md:text-sm lg:text-base">
              Every AI SaaS template is a multi-page template focused on AI
              applications offering SaaS solutions.
            </p>
            <button className="px-4 py-2 bg-white mt-2 font-semibold rounded-lg text-sm md:text-base">
              Buy now $49
            </button>
          </div>
          {secondLine.map((card, index) => (
            <div key={index} className="bg-gray-800 rounded-lg overflow-hidden">
              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex justify-center bg-black ">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
          <div className="relative rounded-lg p-4 flex flex-col items-start">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black gradient-large to-transparent rounded-lg"></div>

            <div className="relative z-0">
              <p className="text-white mb-2 font-bold text-sm md:text-base lg:text-lg">
                Proactiv Marketing Template
              </p>
              <p className="text-[#C9CACB] mb-2 font-normal text-xs md:text-sm lg:text-base">
                Proactiv is a marketing template designed for SaaS companies
                focusing on marketing tools for social media.
              </p>
              <button className="px-4 py-2 bg-white mt-2 font-semibold rounded-lg text-sm md:text-base">
                Buy now $59
              </button>
            </div>
          </div>

          {thirdline.map((card, index) => (
            <div
              key={index}
              className="relative bg-gray-800 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 z-10 bg-black opacity-50 gradient-large group-hover:opacity-70 transition-opacity duration-300"></div>

              <img
                src={card.image}
                alt={`Card ${index + 1}`}
                className="w-full h-auto relative z-0"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="w-full bg-black flex justify-center py-4">
        <button className="px-8 md:px-12 py-2 bg-white rounded-lg font-semibold shadow-lg text-sm md:text-base">
          Show More
        </button>
      </div>
    </div>
  );
};

export default React.memo(ForthSection);
