import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import EnvelopeIcon from "./Icon";

const Contact = () => {
  return (
    <div className="bg-black font-monstera">
      <NavBar />
      <div className="bg-black text-gray-300 min-h-screen flex items-center justify-center p-2 relative overflow-hidden">
        <div className="w-full max-w-7xl mt-32  rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
            <div className="md:w-1/2 p-8">
              <div className="w-fit p-[1px] rounded-lg ">
                <EnvelopeIcon />
              </div>
              <h2 className="text-[55px] font-semibold text-white mb-4">
                Contact us
              </h2>
              <p className="mb-8 text-gray-400">
                We are always looking for ways to improve our products and
                services. Contact us and let us know how we can help you.
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-cyan-400">Email</h3>
                  <p>contact@proactiv.ai</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-400">Phone</h3>
                  <p>+1 (800) 123 XX21</p>
                </div>
                <div>
                  <h3 className="font-semibold text-cyan-400">Support</h3>
                  <p>support@proactiv.ai</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-8 relative rounded-3xl bg-[#171717] bg-gradient-to-t from-black to-transparent">
              <div className="absolute top-0 right-0 h-[500px] w-1/2 grid rounded-2xl grid-cols-[repeat(15,1fr)] grid-rows-[repeat(15,1fr)] opacity-10">
                {[...Array(225)].map((_, i) => (
                  <div
                    key={i}
                    className={`border-[0.5px] border-gray-700 ${
                      i === 10 || i === 50 || i === 4 ? "bg-gray-700" : ""
                    }`}
                  ></div>
                ))}
              </div>

              <form className="space-y-6 w-full">
                <div>
                  <label
                    htmlFor="fullName"
                    className="block text-base font-medium text-gray-400 mb-2"
                  >
                    Full name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    className="w-full px-3 py-3 mb-4 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Manu Arora"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-medium text-gray-400 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-3 py-3 mb-4 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="contact@aceternity.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="company"
                    className="block font-medium text-gray-400 mb-2"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-3 py-3 mb-4 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-medium text-gray-400 mb-4"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full px-3 py-4 bg-black border border-gray-800 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Type your message here"
                  ></textarea>
                </div>
                <div>
                  <button
                    type="submit"
                    className="max-w-[18.3333%] w-full sm:w-full bg-[#262626] mt-4 text-white py-2 rounded-md hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default React.memo(Contact);
