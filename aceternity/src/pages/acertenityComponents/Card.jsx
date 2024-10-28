import React from "react";
import { CardBody, CardContainer, CardItem } from "./CardConfig";

const Card = ({
  image,
  title,
  quantity,
  crossedAmount,
  realAmount,
  description,
}) => {
  return (
    <CardContainer className="inter-var mt-[-80px] ">
      <CardBody className="bg-[#171717] relative group/card rounded-2xl border border-gray-800 hover:shadow-lg hover:shadow-black/30 w-full h-[480px] sm:h-[370px]">
        <div className="flex flex-col h-full justify-between">
          <CardItem translateZ="100" className="w-full h-2/3  rounded-2xl">
            <img
              loading="lazy"
              src={image}
              className="h-full w-full object-cover rounded-3xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>

          <div className="p-4 text-center h-1/3 bg-[#171717] rounded-b-2xl">
            <div className="flex justify-between items-center mb-2">
              <div className="flex gap-4">
                <CardItem as="h2" className="text-lg font-semibold text-white">
                  {title}
                </CardItem>
                <span className="bg-[#262626] border text-[15px] border-gray-600  text-white py-1 px-1  h-7 rounded-3xl">
                  {quantity}
                </span>
              </div>

              <div className="flex items-center  space-x-4 mt-1 mb-3">
                <span className="text-gray-500 text-base line-through">
                  {crossedAmount}
                </span>
                <span className="text-white text-xl font-bold">
                  {realAmount}
                </span>
              </div>
            </div>

            <CardItem
              as="p"
              className="text-gray-400 w-3/4 text-sm mt-2 text-center"
            >
              {description}
            </CardItem>
          </div>
        </div>
      </CardBody>
    </CardContainer>
  );
};

export default Card;
