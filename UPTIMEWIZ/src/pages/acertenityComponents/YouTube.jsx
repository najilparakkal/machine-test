import React from "react";

const YouTube = ({ image, text, gradientColor }) => {
  return (
    <div className="w-full p-6 md:p-10">
      <div
        className="flex flex-col md:flex-row rounded-2xl gap-8 md:gap-14"
        style={{
          background: `linear-gradient(to bottom, ${gradientColor} 65%, white 100%)`,
        }
      }
      >
        <div className="p-6 w-full md:w-1/2 flex-shrink-0">
          <img
            loading="lazy"
            src={image}
            alt=""
            className="w-full rounded-2xl h-[200px] md:h-[350px] object-cover"
          />
        </div>

        <div className="flex-grow">
          <h1 className="text-[24px] md:text-[30px] lg:text-[34px] text-white p-4 md:p-6 font-semibold">
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default YouTube;
