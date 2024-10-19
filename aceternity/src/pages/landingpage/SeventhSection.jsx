import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SeventhSection = () => {
  const [hoveredLogo, setHoveredLogo] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  const logos = [
    { name: "Google", url: "/seventhSection/google.webp" },
    { name: "Meta", url: "/seventhSection/meta.webp" },
    { name: "OnlyFans", url: "/seventhSection/onlyfans.webp" },
    { name: "NETFLIX", url: "/seventhSection/netflix.webp" },
    { name: "Google", url: "/seventhSection/google.webp" },
    { name: "Meta", url: "/seventhSection/meta.webp" },
    { name: "OnlyFans", url: "/seventhSection/onlyfans.webp" },
    { name: "NETFLIX", url: "/seventhSection/netflix.webp" },
  ];

  const faqs = [
    {
      question: "What is Proactic?",
      answer:
        "Proactic is a social media management tool that helps businesses streamline their online presence.",
    },
    {
      question: "How does Proactic work?",
      answer:
        "Proactic integrates with various social media platforms, allowing users to manage multiple accounts from a single dashboard.",
    },
    {
      question: "Which social media platforms does Proactic support?",
      answer:
        "Proactic supports major platforms including Facebook, Twitter, Instagram, LinkedIn, and more.",
    },
    {
      question: "Can I schedule posts in advance with Proactic?",
      answer:
        "Yes, Proactic allows you to schedule posts in advance across multiple platforms, helping you maintain a consistent online presence.",
    },
    {
      question: "Does Proactic provide analytics?",
      answer:
        "Yes, Proactic is designed to be user-friendly and scalable, making it suitable for businesses of all sizes.",
    },
    {
      question: "Is Proactic suitable for small businesses?",
      answer:
        "Yes, Proactic allows you to schedule posts in advance across multiple platforms, helping you maintain a consistent online presence.",
    },
    {
      question: "Does Proactic offer customer support?",
      answer:
        "Yes, Proactic provides customer support to assist you with any questions or issues you may encounter.",
    },
    {
      question: "Is there a free trial available for Proactic?",
      answer:
        "Proactic offers a free trial so you can explore its features and see how it can benefit your social media marketing efforts.",
    },
    {
      question: "How can I get started with Proactic?",
      answer:
        "To get started with Proactic, simply sign up on our website and follow the onboarding process to set up your account.",
    },
  ];

  const settings = {
    dots: false, 
    infinite: true, 
    speed: 5000, 
    slidesToShow: 8, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 0, 
    pauseOnHover: false, 
    pauseOnFocus: false, 
    cssEase: "linear", 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5, 
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4, 
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="bg-black h-fit w-full">
    <div className="w-full p-4 md:p-12 h-64 md:h-72 relative">
      <h2 className="text-lg md:text-xl text-center mb-4 md:mb-6 mt-8 md:mt-12 text-gray-300">
        Trusted by big industries
      </h2>
  
      <div className="absolute left-0 top-0 bottom-0 w-1/4 md:w-1/2 bg-gradient-to-r from-black to-transparent pointer-events-none z-20"></div>
      <div className="absolute right-0 top-0 bottom-0 w-1/4 md:w-1/2 bg-gradient-to-l from-black to-transparent pointer-events-none z-20"></div>
  
      <div className="relative overflow-hidden">
        <Slider {...settings}>
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 transition-all  duration-300 ease-in-out p-2"
              onMouseEnter={() => setHoveredLogo(logo.name)}
              onMouseLeave={() => setHoveredLogo("")}
            >
              <img
                src={logo.url}
                alt={logo.name}
                className={`w-full h-full object-contain transition-all duration-300 ${
                  hoveredLogo === logo.name ? "filter-none" : "filter grayscale"
                }`}
                style={{ width: "80px", height: "40px" }} 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  
    <div className="h-full flex flex-col items-center justify-center p-4">
      <h2 className="text-white text-2xl md:text-4xl lg:text-5xl mt-16 md:mt-28 mb-16 md:mb-24 text-center">
        Frequently Asked Questions
      </h2>
  
      <div className="w-full max-w-xl md:max-w-2xl font-bold text-white space-y-6 md:space-y-11 mb-16 md:mb-32">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#171717] rounded-lg overflow-hidden transition-all duration-300 cursor-pointer"
            onClick={() => toggleQuestion(index)}
          >
            <div className="w-full text-left p-3 md:p-4">
              <div className="flex justify-between items-center">
                <h3 className="text-white text-md md:text-lg font-bold">
                  {faq.question}
                </h3>
              </div>
            </div>
            <div
              className={`overflow-hidden transition-all duration-700 ${
                openIndex === index ? "max-h-96" : "max-h-0"
              }`}
            >
              <p className="text-[#A3A3A3] font-normal p-3 md:p-4">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  
  );
};

export default React.memo(SeventhSection);
