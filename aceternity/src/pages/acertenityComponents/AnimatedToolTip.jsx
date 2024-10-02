import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";

const getRandomValues = () => ({
  rotate: Math.random() * 10 - 5, 
  translateY: Math.random() * 10 - 5, 
  scale: Math.random() * 0.1 + 0.9,
});

export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);

  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex items-center justify-center space-x-4">
      {items.map((item, idx) => {
        const { rotate: randomRotate, translateY, scale } = getRandomValues();

        return (
          <motion.div
            key={item.id}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(item.id)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              marginLeft: idx !== 0 ? "-20px" : "0",
              zIndex: hoveredIndex === item.id ? 10 : 1,  // bring hovered image forward
            }}
            animate={{ rotate: randomRotate, y: translateY, scale }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          >
            <AnimatePresence>
              {hoveredIndex === item.id && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.6 }}
                  animate={{
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    transition: {
                      type: "spring",
                      stiffness: 260,
                      damping: 10,
                    },
                  }}
                  exit={{ opacity: 0, y: 20, scale: 0.6 }}
                  style={{
                    translateX: translateX,
                    rotate: rotate,
                    whiteSpace: "nowrap",
                  }}
                  className="absolute -top-16 left-1/2 -translate-x-1/2 flex text-xs flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
                >
                  <div className="absolute bottom-0 w-full h-[2px] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                  
                  <div className="font-bold text-white relative z-30 text-base">
                    {item.name}
                  </div>
                  <div className="text-white text-xs">{item.designation}</div>
                </motion.div>
              )}
            </AnimatePresence>

            <motion.img
              onMouseMove={handleMouseMove}
              height={80}
              width={80}
              src={item.image}
              alt={item.name}
              className="object-cover rounded-2xl h-16 w-16 border-2 border-white group-hover:scale-105 transition-transform duration-500"
              style={{ zIndex: hoveredIndex === item.id ? 10 : 1 }} 
              whileHover={{ scale: 1.1 }}
            />
          </motion.div>
        );
      })}
    </div>
  );
};
