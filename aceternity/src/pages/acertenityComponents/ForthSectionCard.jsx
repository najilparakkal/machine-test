"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { MdOutlineForwardToInbox } from "react-icons/md";
import { TbFidgetSpinner } from "react-icons/tb";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 60, bounce: 100 };

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
      className="h-[300vh]  py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:600px] [transform-style:preserve-3d]"
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
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-5 ">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row space-x-5 ">
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
      <div className="max-w-5xl relative mx-auto py-20 md:py-40 px-4 w-full -mt-48">
        <div className="space-y-16 md:space-y-24 font-bold w-full">
          <div className="flex flex-col md:flex-row w-full gap-14">
            {/* First Card */}
            <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 bg-gray-900/5 flex flex-col items-center h-60">
              <div className="flex flex-col items-center justify-center h-full">
                <MdOutlineForwardToInbox className="text-[#06B6D4] w-16 h-16 flex-shrink-0 bg-black rounded-lg p-2" />{" "}
                {/* Icon with black background */}
                <h1 className="text-lg md:text-4xl font-bold dark:text-white mb-2 text-center">
                  Email Automation
                </h1>
                <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#737373] font-bold mb-8 text-center">
                  With our best-in-class email automation, you can automate your
                  entire emailing process.
                </p>
              </div>
            </div>

            {/* Second Card */}
            <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 bg-gray-900/5 flex flex-col items-center h-60">
              <div className="flex flex-col items-center justify-center h-full">
              <TbFidgetSpinner className="text-[#06B6D4] w-16 h-16 flex-shrink-0 bg-black rounded-lg p-2" />{" "}

                <h1 className="text-lg md:text-4xl font-bold dark:text-white mb-2  text-center">
                  Cross Platform Marketing
                </h1>
                <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#737373] font-bold mb-8 text-center">
                  With our cross-platform marketing, you can reach your audience
                  on all the platforms use.
                </p>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="flex flex-col md:flex-row w-full gap-14">
            {/* Third Card */}
            <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 bg-gray-900/5 flex flex-col items-center h-60">
              <div className="flex flex-col items-center justify-center h-full">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-black rounded-lg"
                >
                  <rect width="64" height="64" rx="8" fill="black" />{" "}
                  {/* Added black background */}
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
                <h1 className="text-lg md:text-4xl font-bold dark:text-white mb-2 text-center">
                  Managed CRM
                </h1>
                <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#737373] font-bold mb-8 text-center">
                  With our managed CRM, you can manage your leads and contacts
                  in one place.
                </p>
              </div>
            </div>

            {/* Fourth Card */}
            <div className="flex-1 gap-3 z-10 rounded-lg p-4 backdrop-blur-sm bg-opacity-50 bg-gray-900/5 flex flex-col items-center h-60">
              <div className="flex flex-col items-center justify-center h-full">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="bg-black rounded-lg"
                >
                  <rect width="64" height="64" rx="8" fill="black" />{" "}
                  {/* Added black background */}
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
                <h1 className="text-lg md:text-4xl font-bold dark:text-white mb-2 text-center">
                  Apps Automation
                </h1>
                <p className="max-w-2xl text-sm md:text-xl mt-2 text-[#737373] font-bold mb-8 text-center">
                  We have cloned Zapier and built our very own apps automation
                  platform.
                </p>
              </div>
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
