"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MdOutlineForwardToInbox } from "react-icons/md";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-5 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <>
      <div className="max-w-5xl relative mx-auto py-20 md:py-40 px-4 w-full -mt-72 left-0 top-0">
        <div className=" space-y-16 md:space-y-24 font-bold w-full ">
          <div className=" flex w-full gap-14">
          <div className="gap-3">
            <div className="flex items-center gap-4">
              <MdOutlineForwardToInbox className="bg-black text-[#06B6D4] w-8 h-8 md:w-12 md:h-12 flex-shrink-0" />
              <h1 className="text-lg md:text-5xl font-bold dark:text-white mb-4">
                Email Automation
              </h1>
            </div>
            <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#737373] font-bold mb-8">
              With our best-in-class email automation, you can automate your
              entire emailing process.
            </p>
          </div>

          <div className="gap-3">
            <div className="flex gap-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-[#2B2B2B] rounded-lg"
              >
                <defs>
                  <filter
                    id="glow"
                    x="-50%"
                    y="-50%"
                    width="200%"
                    height="200%"
                  >
                    <feGaussianBlur stdDeviation="1.5" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <rect width="64" height="64" rx="8" fill="black" />
                <g filter="url(#glow)" stroke="#06B6D4" strokeWidth="2">
                  <circle cx="32" cy="32" r="6" />
                  <circle cx="20" cy="44" r="3" />
                  <circle cx="44" cy="44" r="3" />
                  <circle cx="32" cy="20" r="3" />
                  <line x1="27.17" y1="36.83" x2="22.83" y2="41.17" />
                  <line x1="36.83" y1="36.83" x2="41.17" y2="41.17" />
                  <path d="M32 26 L32 23" />
                </g>
              </svg>
              <h1 className="text-xl md:text-5xl font-bold dark:text-white mb-4">
                Cross Platform <br /> Marketing
              </h1>
            </div>
            <p className="max-w-2xl text-base md:text-xl mt-2 text-[#737373] font-bold mb-8">
              With our cross-platform marketing, you can reach your audience on
              all the platforms they use.
            </p>
          </div>
          </div>
          <div className=" flex w-full gap-14">
          <div className="gap-3">
            <div className="flex gap-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-black rounded-lg"
              >
                <rect width="64" height="64" rx="8" fill="black" />
                <text
                  x="16"
                  y="40"
                  fontSize="32"
                  fontFamily="monospace"
                  fill="#06B6D4"
                >
                  &gt;_
                </text>
              </svg>
              <h1 className="text-xl md:text-5xl font-bold dark:text-white mb-4">
                Managed CRM
              </h1>
            </div>
            <p className="max-w-2xl text-base md:text-xl mt-2 text-[#737373] font-bold mb-8">
              With our managed CRM, you can manage your leads and contacts in
              one place.
            </p>
          </div>

          <div className="gap-3">
            <div className="flex gap-4">
              <svg
                width="64"
                height="64"
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="bg-black rounded-lg"
              >
                <rect width="64" height="64" rx="8" fill="black" />
                <text
                  x="16"
                  y="40"
                  fontSize="32"
                  fontFamily="monospace"
                  fill="#06B6D4"
                >
                  &gt;_
                </text>
              </svg>
              <h1 className="text-xl md:text-5xl font-bold dark:text-white mb-4">
                Apps Automation
              </h1>
            </div>
            <p className="max-w-2xl text-base md:text-xl mt-2 text-[#737373] font-bold mb-8">
              We have cloned Zapier and built our very own apps automation
              platform.
            </p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const ProductCard = ({ product, translate }) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0 "
    >
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-left-top absolute h-full w-full inset-0"
        alt={product.title}
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      
    </motion.div>
  );
};
