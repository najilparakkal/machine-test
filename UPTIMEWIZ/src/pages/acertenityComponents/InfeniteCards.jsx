"use client";

import { cn } from "../../../src/utils";
import React, { useEffect, useState } from "react";

export default function InfiniteMovingCards({
  items,
  direction = "right",
  speed = "slow",
  pauseOnHover = true,
  className = "",
}) {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  useEffect(() => {
    addAnimation();
  }, []);

  const [start, setStart] = useState(false);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "right") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "slow") {
        containerRef.current.style.setProperty("--animation-duration", "200s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "130s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "150s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
      >
        {items.map((item, idx) => (
          <li
            key={item.name}
            className="w-full max-w-[90vw] sm:max-w-[300px] md:max-w-[350px] lg:max-w-[450px] h-auto relative mx-auto rounded-2xl border border-slate-700 px-8 py-6 flex flex-col justify-between" // Responsive width fixed
            style={{
              background:
                "linear-gradient(180deg, rgba(39,39,39,1) 0%, rgba(39,39,39,0.5) 100%)",
            }}
          >
            <blockquote className="flex-grow">
              <div
                aria-hidden="true"
                className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%+4px)] w-[calc(100%+4px)] rounded-[inherit]"
              ></div>
              <span className="relative z-20 text-sm leading-[1.6] text-gray-100 font-normal">
                {item.quote}
              </span>
            </blockquote>

            <div className="relative z-20 mt-6 flex items-center">
              <img
                loading="lazy"
                src={item.image}
                alt={`${item.name}'s avatar`}
                className="w-10 h-10 rounded-full mr-4"
              />
              <span className="flex flex-col gap-1">
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.name}
                </span>
                <span className="text-sm leading-[1.6] text-gray-500 font-normal">
                  {item.title}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
