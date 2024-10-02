import React from "react";
import YouTube from "./acertenityComponents/YouTube";

const SixthSection = () => {
  return (
    <div className="bg-black min-h-screen">
      {/* Header Section */}
      <div className="flex justify-center h-96 relative z-20 overflow-visible">
        <div className="mt-40 text-center">
          <h1 className="text-white text-[35px] sm:text-[30px] text-center font-semibold">
            Featured by popular YouTubers
          </h1>
          <h4 className="text-white text-[20px] sm:text-[18px] font-semibold">
            See what the best YouTubers are saying about Aceternity UI.
          </h4>
        </div>
      </div>

      <div className="bg-black px-4 lg:px-20 py-10 space-y-2">
        <YouTube
          image="/youtube/images (1).jpeg"
          text="Jeff from Fireship talks about how Aceternity UI can help you build awesome landing pages with speed"
          gradientColor="#696DF2"
        />
        <YouTube
          image="/youtube/images.jpeg"
          text="Watch Web Dev Prodigies build an entire SaaS application from scratch with Aceternity UI"
          gradientColor="#ED509E"
        />
        <YouTube
          image="/youtube/images (2).jpeg"
          text="Josh from Josh Tried Coding talks about how Aceternity UI components can help your website stand out."
          gradientColor="#8E61F6"
        />
        <YouTube
          image="/youtube/download.jpeg"
          text="Watch Hitesh Choudhary build an entire website from scratch with Aceternity UI"
          gradientColor="#3F85F7"
        />
        <YouTube
          image="/youtube/download (3).jpeg"
          text="Adrian from Adrian Twarog talks about Aceternity UI and how to use the components efficiently"
          gradientColor="#28C863"
        />
        <YouTube
          image="/youtube/download (2).jpeg"
          text="Adrian from JavaScript Mastery creates an entire portfolio website with amazing details and beautiful UI with Aceternity UI"
          gradientColor="#3F85F6"
        />
        <YouTube
          image="/youtube/download (1).jpeg"
          text="Watch Raj Talks Tech walk through Aceternity UI components and teaches how to incorporate them into your website"
          gradientColor="#FF6347"
        />
      </div>
    </div>
  );
};

export default React.memo(SixthSection);
