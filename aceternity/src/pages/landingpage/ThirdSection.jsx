import React from "react";
import Card from "./acertenityComponents/Card";
import "./thirdSection.css";

const ThirdSection = () => {
  const cardsData = [
    {
      image: "/packs card/hero-sections.webp",
      quantity: 7,
      title: "Hero Sections",
      crossedAmount: "$18",
      realAmount: "$12",
      description:
        "A collection of hero sections that are modern and stand out",
    },
    {
      image: "/packs card/logo-clouds.webp",
      quantity: 3,
      title: "Logo Clouds",
      crossedAmount: "$16",
      realAmount: "$10",
      description:
        "A collection of logo clouds with micro interactions and minimal animations",
    },
    {
      image: "/packs card/features-section.webp",
      quantity: 4,
      title: "Feature Sections",
      crossedAmount: "$14",
      realAmount: "$9",
      description:
        "A set of feature sections ranging from bento grids to simple layouts",
    },
    {
      image: "/packs card/features-section.webp",
      quantity: 1,
      title: "Binto Grids",
      crossedAmount: "$18",
      realAmount: "$12",
      description:
        "A collection of hero sections that are modern and stand out",
    },
    {
      image: "/packs card/blog-content-sections.webp",
      quantity: 3,
      title: "Blog Content Sections",
      crossedAmount: "$18",
      realAmount: "$12",
      description:
        "A collection of hero sections that are modern and stand out",
    },
    {
      image: "/packs card/blog-sections.webp",
      quantity: 2,
      title: "Blog Sections",
      crossedAmount: "$15",
      realAmount: "$9",
      description:
        "A collection of hero sections that are modern and stand out",
    },
  ];

  return (
    <div className="w-full bg-black min-h-screen relative z-20">
      <div className="p-7">
        <h3 className="text-[#A855F7] font-bold text-xl">Component Packs</h3>
        <p className="text-[#C9CACB] mt-4">
          A growing collection of building blocks for your website.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8 bg-black">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            image={card.image}
            title={card.title}
            quantity={card.quantity}
            crossedAmount={card.crossedAmount}
            realAmount={card.realAmount}
            description={card.description}
          />
        ))}
      </div>

      <div className="w-full h-[200px] mt-[-150px] sm:mt-[-200px] lg:mt-[-250px] mb-[100px] z-30 relative flex justify-center gradient-large bg-gradient-to-t from-black to-transparent">
        <button className="px-14 mt-[150px] bg-white rounded-lg font-semibold">
          Show More
        </button>
      </div>
    </div>
  );
};

export default React.memo(ThirdSection);
