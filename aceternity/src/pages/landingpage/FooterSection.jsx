import React from "react";
import { TextHoverEffect } from "./acertenityComponents/FooterText";

const FooterSection = () => {
  return (
    <div className="w-full bg-[#171717] min-h-[400px]">
      <div className="w-full flex justify-center">
        <div className="w-[95%] border-b border-gray-700">
          <div className="w-full md:w-1/2 p-6">
            <div className="flex gap-3 mt-9 items-center">
              <img
              loading="lazy"
                src="/logo-dark.webp"
                alt="Aceternity UI Logo"
                className="h-6 w-6"
              />
              <span className="hidden md:block text-white text-lg font-bold">
                Aceternity UI
              </span>
              <p className="hidden md:block bg-[#171717] text-white border border-[#262626] text-xs font-bold px-2 h-6 rounded">
                pro
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-7">
              <p className="text-[#C9CACB]">
                Access an ever-growing collection of premium, meticulously
                crafted templates and component packs. Built by the founders of
                Aceternity UI.
              </p>
              <p className="text-[#C9CACB]">
                A product by <span className="underline">Aceternity</span>
              </p>
              <p className="text-[#C9CACB]">
                Building in public at{" "}
                <span className="underline">@mannupaaji</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-[#171717] text-white py-10">
        <div className="w-[95%] mx-auto border-b border-gray-700">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-16 mt-5">
            <div>
              <h3 className="text-lg font-bold mb-4">Components</h3>
              <ul className="space-y-5 text-[#C9CACB]">
                <li>Hero Sections</li>
                <li>Logo Clouds</li>
                <li>Bento Grids</li>
                <li>CTA Sections</li>
                <li>Testimonials</li>
                <li>Feature Sections</li>
                <li>Pricing Sections</li>
                <li>Cards</li>
                <li>Navbars</li>
                <li>Footers</li>
                <li>Login and Signup</li>
                <li>Contact sections</li>
                <li>Blog Sections</li>
                <li>Blog Content Sections</li>
                <li>FAQs</li>
                <li>Sidebars</li>
                <li>Stats Sections</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Templates</h3>
              <ul className="space-y-5 text-[#C9CACB]">
                <li>Startup Landing Page Template</li>
                <li>AI SaaS Template</li>
                <li>Proactiv Marketing Template</li>
                <li>Agenlabs Agency Template</li>
                <li>DevPro Portfolio Template</li>
                <li>Foxtrot Marketing Template</li>
                <li>Terms and Conditions</li>
                <li>Twitter</li>
                <li>Discord</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Pages</h3>
              <ul className="space-y-5 text-[#C9CACB]">
                <li>All Products</li>
                <li>Components</li>
                <li>Templates</li>
                <li>Categories</li>
                <li>Box Shadows</li>
                <li>Pricing</li>
                <li>Aceternity UI</li>
                <li>Aceternity Studio</li>
                <li>License</li>
                <li>Refunds</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-4">Modern Templates</h3>
              <ul className="space-y-5 text-[#C9CACB]">
                <li>Best Modern Design Templates</li>
                <li>Best AI SaaS Templates</li>
                <li>Best Marketing Templates</li>
                <li>Best Minimal Templates in React and Next.js</li>
                <li>Best components and templates with Framer Motion</li>
                <li>Amazing Tailwind CSS and Framer Motion Components</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="h-[40rem]  items-center justify-center">
        <h3 className="text-lg font-bold justify-start p-9 text-[#C9CACB]">
          © 2024 Aceternity Labs LLC. All Rights Reserved.
        </h3>
        <div className="w-full mt-22 text-center">
          <TextHoverEffect text="ACETERNITY" />
        </div>
      </div>
    </div>
  );
};

export default React.memo(FooterSection);
