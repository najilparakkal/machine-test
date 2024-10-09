"use client";
import React, { useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Ensure this is correctly imported
import { faPlay } from "@fortawesome/free-solid-svg-icons"; // Ensure this is correctly imported
import "./secondsection.css";
export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[90rem] md:h-[85rem] flex items-center justify-center relative"
      ref={containerRef}
    >
      <div className="absolute inset-x-0 bottom-0 bg-black h-28 z-10" />
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black to-transparent  z-20 h-72" />

      <div
        className="py-20 md:py-60 w-full h-full relative "
        style={{
          perspective: "1500px",
        }}
      >
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          className="h-[500px] "
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-7xl mx-auto text-center text-3xl md:text-5xl font-bold"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({ rotate, scale, children }) => {
  const [isOpen, setIsOpen] = useState(false); 

  const handlePlayClick = () => {
    setIsOpen(true); 
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.25)", 
      }}
      className="relative max-w-6xl mx-auto md:h-[65rem] w-full  border-4 rounded-[30px] border-gray-900 bg-black  card-with-animated-border"
    >
      <div className="w-full h-full bg-black rounded-[30px] p-6 ">
        <div className="h-full w-full overflow-hidden rounded-[30px] dark:bg-zinc-900 relative">
          <img
            src="/seondSection/first.png"
            alt="Card Image"
            className="h-[1100px] -mt-24 w-full object-cover rounded-2xl "
          />

          <button
            onClick={handlePlayClick}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="flex items-center justify-center bg-gray-500 rounded-full w-20 h-20">
              <FontAwesomeIcon icon={faPlay} className="text-white text-3xl" />
            </div>
          </button>

          {children}
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
          <div className="relative w-full h-full md:w-3/4 md:h-3/4 lg:w-2/3 lg:h-2/3">
            <iframe
              title="YouTube Video"
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&fullscreen=1"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
            ></iframe>
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 m-4 text-green-700 text-2xl"
            >
              X
            </button>
          </div>
        </div>
      )}
    </motion.div>
  );
};
