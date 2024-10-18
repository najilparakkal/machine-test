import React, { useState } from "react";
import NavBar from "../components/NavBar";
import Pricing from "../components/Pricing";
import Slider from "react-slick";
import LastSection from "../components/LastSection";
import InfiniteMovingCards from "../acertenityComponents/InfeniteCards";

const PricingMain = () => {
  const [hoveredLogo, setHoveredLogo] = useState("");

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

  const testimonials = [
    {
      quote:
        "A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.",
      name: "Charles Dickens",
      title: "A Tale of Two Cities",
      image: "/pricing page infinite scroll/150(15).jpg",
    },
    {
      quote:
        "The support team is as impressive as the technology itself. They ensure we maximize the utility of the AI in our operations.",
      name: "William Shakespeare",
      title: "Hamlet",
      image: "/pricing page infinite scroll/150(16).jpg",
    },
    {
      quote:
        "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
      name: "Jack Brown",
      title: "Performance Manager",
      image: "/pricing page infinite scroll/150(16).jpg",
    },
    {
      quote:
        "It's the future, now. Adopting this AI has put us years ahead of the competition in terms of operational efficiency and innovation.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      image: "/pricing page infinite scroll/150(4).jpg",
    },
    {
      quote:
        "It has completely changed the way we operate. The AI's ability to analyze and optimize our processes is phenomenal.",
      name: "Jane Austen",
      title: "Pride and Prejudice",
      image: "/pricing page infinite scroll/150(5).jpg",
    },
    {
      quote:
        "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
      name: "Herman Melville",
      title: "Moby-Dick",
      image: "/pricing page infinite scroll/150(6).jpg",
    },
    {
      quote:
        "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
      name: "Kathy Adams",
      title: "Innovation Lead",
      image: "/pricing page infinite scroll/150(13).jpg",
    },
    {
      quote:
        "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
      name: "Mia Turner",
      title: "Systems Integrator",
      image: "/pricing page infinite scroll/150(12).jpg",
    },
    {
      quote:
        "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
      name: "Nathan Hill",
      title: "Investment Analyst",
      image: "/pricing page infinite scroll/150(11).jpg",
    },
    {
      quote:
        "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
      name: "Olivia Scott",
      title: "Quality Assurance Manager",
      image: "/pricing page infinite scroll/150(10).jpg",
    },
    {
      quote:
        "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
      name: "Peter White",
      title: "Strategic Planner",
      image: "/pricing page infinite scroll/150(9).jpg",
    },
    {
      quote:
        "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
      name: "Rachel Black",
      title: "Client Support Coordinator",
      image: "/pricing page infinite scroll/150(8).jpg",
    },
    {
      quote:
        "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
      name: "Samuel Lee",
      title: "Futurist",
      image: "/pricing page infinite scroll/150(7).jpg",
    },
    {
      quote:
        "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
      name: "Tina Brooks",
      title: "Process Analyst",
      image: "/pricing page infinite scroll/150(5).jpg",
    },
    {
      quote:
        "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
      name: "Manu Arora",
      title: "Tech Innovator & Entrepreneur",
      image: "/pricing page infinite scroll/150(3).jpg",
    },
    {
      quote:
        "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
      name: "Kathy Adams",
      title: "Innovation Lead",
      image: "/pricing page infinite scroll/150(2).jpg",
    },
    {
      quote:
        "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
      name: "Leo Carter",
      title: "Technology Strategist",
      image: "/pricing page infinite scroll/150(1).jpg",
    },
  ];
  const testimonials2 = [
      {
          quote:
          "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
          name: "Rachel Black",
          title: "Client Support Coordinator",
          image: "/pricing page infinite scroll/150(8).jpg",
      },
    {
      quote:
        "I can't imagine going back to how things were before this AI. It has not only improved my work efficiency but also my daily life.",
      name: "Olivia Scott",
      title: "Quality Assurance Manager",
      image: "/pricing page infinite scroll/150(10).jpg",
    },
    {
        quote:
        "It's like having a superpower! This AI tool has given us the ability to do things we never thought were possible in our field.",
        name: "Peter White",
        title: "Strategic Planner",
        image: "/pricing page infinite scroll/150(9).jpg",
    },
    {
        quote:
        "It's incredibly intuitive and easy to use. Even those without technical expertise can leverage its power to improve their workflows.",
        name: "Tina Brooks",
        title: "Process Analyst",
        image: "/pricing page infinite scroll/150(5).jpg",
    },
    {
        quote:
        "A seamless integration into our daily tasks. It has enhanced our productivity and allowed us to focus on more strategic initiatives.",
        name: "Charles Dickens",
        title: "A Tale of Two Cities",
        image: "/pricing page infinite scroll/150(15).jpg",
    },
    {
        quote:
        "A robust solution that fits perfectly into our workflow. It has enhanced our team's capabilities and allowed us to tackle more complex projects.",
        name: "Samuel Lee",
        title: "Futurist",
        image: "/pricing page infinite scroll/150(7).jpg",
    },
    {
      quote:
        "The results are always impressive. This AI has helped us to not only meet but exceed our performance targets.",
      name: "Manu Arora",
      title: "Tech Innovator & Entrepreneur",
      image: "/pricing page infinite scroll/150(3).jpg",
    },
    {
        quote:
        "It helps us achieve what was once thought impossible. The AI's capabilities are groundbreaking and have opened new avenues for us.",
        name: "Leo Carter",
        title: "Technology Strategist",
        image: "/pricing page infinite scroll/150(1).jpg",
    },
    {
      quote:
        "The efficiency it brings is unmatched. It's a vital tool that has helped us cut costs and improve our end product significantly.",
      name: "Kathy Adams",
      title: "Innovation Lead",
      image: "/pricing page infinite scroll/150(2).jpg",
    },
    {
      quote:
        "The support team is as impressive as the technology itself. They ensure we maximize the utility of the AI in our operations.",
      name: "William Shakespeare",
      title: "Hamlet",
      image: "/pricing page infinite scroll/150(16).jpg",
    },
    {
      quote:
        "It has saved us countless hours. Highly recommended for anyone looking to enhance their efficiency and productivity.",
      name: "Jack Brown",
      title: "Performance Manager",
      image: "/pricing page infinite scroll/150(16).jpg",
    },
    {
      quote:
        "It's the future, now. Adopting this AI has put us years ahead of the competition in terms of operational efficiency and innovation.",
      name: "Edgar Allan Poe",
      title: "A Dream Within a Dream",
      image: "/pricing page infinite scroll/150(4).jpg",
    },
    {
        quote:
        "What a fantastic AI Proactiv AI is, I just love it. It has completely transformed the way I approach problems and develop solutions.",
        name: "Herman Melville",
        title: "Moby-Dick",
        image: "/pricing page infinite scroll/150(6).jpg",
    },
    {
        quote:
        "It has completely changed the way we operate. The AI's ability to analyze and optimize our processes is phenomenal.",
        name: "Jane Austen",
      title: "Pride and Prejudice",
      image: "/pricing page infinite scroll/150(5).jpg",
    },
    {
        quote:
        "This AI has transformed the way I work! It's like having a brilliant assistant who knows exactly what I need before I even ask.",
        name: "Mia Turner",
      title: "Systems Integrator",
      image: "/pricing page infinite scroll/150(12).jpg",
    },
    {
      quote:
        "Absolutely revolutionary, a game-changer for our industry. It has streamlined our processes and enhanced our productivity dramatically.",
      name: "Nathan Hill",
      title: "Investment Analyst",
      image: "/pricing page infinite scroll/150(11).jpg",
    },
    {
        quote:
        "I made a soap with the help of AI, it was so easy to use. I'm so glad this happened because it revolutionized my entire business model and production process.",
        name: "Kathy Adams",
        title: "Innovation Lead",
        image: "/pricing page infinite scroll/150(13).jpg",
    },
  ];

  return (
    <div className="bg-black w-full h-fit">
      <NavBar />
      <Pricing />
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
                    hoveredLogo === logo.name
                      ? "filter-none"
                      : "filter grayscale"
                  }`}
                  style={{ width: "80px", height: "40px" }}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
        <InfiniteMovingCards
          items={testimonials2}
          direction="right"
          speed="slow"
        />
      </div>
      <LastSection />
    </div>
  );
};

export default PricingMain;
