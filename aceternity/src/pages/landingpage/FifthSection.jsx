import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./fifthSection.css";

const FifthSection = () => {
  const cardsData = [
    {
      image: "/packs card/hero-sections.webp",
      title: "Hero Sections",
      userName: "@hero-sections",
      description:
        "Upon my return from a short break every time,  I consistently find innovative additions by you✨🤌🏻",
    },

    {
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      title: "Feature Sections",
      userName: "@hero-sections",
      description:
        "amazing to see @calcom find its way into proper templates 🥳 excited to be powering the next thousands of startups and their demo calls!",
    },
    {
      image: "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      title: "Binto Grids",
      userName: "@hero-sections",
      description:
        "Keep going on guys 🔥🔥 we already used some on the future release of @RizenCity website and more to come in the coming weeks thanks for the work 🙌",
    },
    {
      image: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80",
      title: "Blog Content Sections",
      userName: "@hero-sections",
      description:
        "Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion",
    },
    {
      image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      title: "Blog Sections",
      userName: "@hero-sections",
      description:
        "✨ Aceternity UI is a complete collections of stunning effects ready to used for your website. It's shadcn/ui for magic effects. Can't believe it's free!👉 ui.aceternity.com ",
    },

    {
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      title: "Logo Clouds",
      userName: "@hero-sections",
      description:
        "Just checked out Aceternity (UX components), great work done by @mannupaaji Looks premium, top notch 🧨",
    },
    {
      image: "https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80",
      title: "Feature Sections",
      userName: "@hero-sections",
      description:
        "amazing to see @calcom find its way into proper templates 🥳 excited to be powering the next thousands of startups and their demo calls!",
    },

    {
      image: "/packs card/blog-content-sections.webp",
      title: "Blog Content Sections",
      userName: "@hero-sections",
      description:
        "Wow, this site is an ABSOLUTE GOLDMINE for design engineers.It's a huge collection of micro-interactions / animations, all with their respective source code for you to copy and paste.Love to see such an amazing display of my favorite package, framer-motion",
    },
    {
      image: "/packs card/blog-sections.webp",
      title: "Blog Sections",
      userName: "@hero-sections",
      description:
        "✨ Aceternity UI is a complete collections of stunning effects ready to used for your website. It's shadcn/ui for magic effects. Can't believe it's free!👉 ui.aceternity.com ",
    },

    {
      image: "/packs card/logo-clouds.webp",
      title: "Logo Clouds",
      userName: "@hero-sections",
      description:
        "Just checked out Aceternity (UX components), great work done by @mannupaaji Looks premium, top notch 🧨",
    },
    {
      image: "/packs card/features-section.webp",
      title: "Feature Sections",
      userName: "@hero-sections",
      description:
        "amazing to see @calcom find its way into proper templates 🥳 excited to be powering the next thousands of startups and their demo calls!",
    },
    {
      image: "/packs card/features-section.webp",
      title: "Binto Grids",
      userName: "@hero-sections",
      description:
        "Keep going on guys 🔥🔥 we already used some on the future release of @RizenCity website and more to come in the coming weeks thanks for the work 🙌",
    },

    {
      image: "/packs card/blog-sections.webp",
      title: "Blog Sections",
      userName: "@hero-sections",
      description:
        "✨ Aceternity UI is a complete collections of stunning effects ready to used for your website. It's shadcn/ui for magic effects. Can't believe it's free!👉 ui.aceternity.com ",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 9800,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const settings2 = {
    dots: false,
    infinite: true,
    speed: 10000,
    slidesToShow: 4,
    slidesToScroll: 2,
    vertical: true,
    verticalSwiping: true,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-black w-full relative">
    <div className="flex justify-center h-96 relative shadow-2xl z-20 overflow-visible">
      <div className="mt-40 text-center">
        <h1 className="text-white text-[2.5rem] md:text-[3rem] font-semibold">
          Loved by thousands of people
        </h1>
        <h4 className="text-white text-[1.25rem] md:text-[1.5rem] font-semibold">
          Here's what some of our users have to say about Aceternity UI.
        </h4>
      </div>
    </div>
  
    <div className="p-5 w-full flex relative shadow-2xl shadow-stone-950 z-20">
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black to-transparent z-10" />
  
      <div className="w-full md:w-2/6 relative">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index} className="p-4">
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-2xl shadow-lg bg-[#18181B] -z-10"></div>
                <div className="bg-[#18181B] border border-gray-800 rounded-2xl p-6 flex flex-col items-start w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                    <div className="mb-4">
                      <h2 className="text-lg text-white font-bold mb-1">
                        {card.title}
                      </h2>
                      <p className="text-white mt-[-3px]">{card.userName}</p>
                    </div>
                  </div>
                  <p className="text-white text-start">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      <div className="w-full md:w-2/6 relative">
        <Slider {...settings2}>
          {cardsData.map((card, index) => (
            <div key={index} className="p-4">
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-2xl shadow-lg bg-[#18181B] -z-10"></div>
                <div className="bg-[#18181B] border border-gray-800 rounded-2xl p-6 flex flex-col items-start w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                    <div className="mb-4">
                      <h2 className="text-lg text-white font-bold mb-1">
                        {card.title}
                      </h2>
                      <p className="text-white mt-[-3px]">{card.userName}</p>
                    </div>
                  </div>
                  <p className="text-white text-start">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      <div className="w-full md:w-2/6 relative">
        <Slider {...settings}>
          {cardsData.map((card, index) => (
            <div key={index} className="p-4">
              <div className="relative z-10">
                <div className="absolute inset-0 rounded-2xl shadow-lg bg-[#18181B] -z-10"></div>
                <div className="bg-[#18181B] border border-gray-800 rounded-2xl p-6 flex flex-col items-start w-full">
                  <div className="flex items-center gap-1">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-12 h-12 rounded-full mb-4"
                    />
                    <div className="mb-4">
                      <h2 className="text-lg text-white font-bold mb-1">
                        {card.title}
                      </h2>
                      <p className="text-white mt-[-3px]">{card.userName}</p>
                    </div>
                  </div>
                  <p className="text-white text-start">{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
  
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-10" />
    </div>
  </div>
  
  );
};

export default React.memo(FifthSection);
