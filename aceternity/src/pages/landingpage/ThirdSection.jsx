import React from "react";
import ThunderIcon from "../components/ThunderIcon";
import SocialMediaComponent from "../components/SocialMedia";
import { CardDemo } from "../acertenityComponents/Tools";

const ThirdSection = () => {
  return (
    <div className="min-h-screen bg-black text-white p-8">
      {/* <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 mt-36">
          <div className=" h-12 w-fit p-1 rounded-lg  mx-auto mb-6 flex items-center justify-center">
            <ThunderIcon />
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Automate your social media
          </h1>
          <p className="text-gray-400">
            Proactiv houses a rich set of features to automate your marketing
            efforts across all social medias
          </p>
        </div>
        <div className=" bg-red-500 h-auto  md:grid-cols-2 gap-8">
          <div className="w-2/3  h-fit">
          <SocialMediaComponent/>
          </div>
        </div>
      </div> */}
      <CardDemo/>
    </div>
  );
};

export default React.memo(ThirdSection);
