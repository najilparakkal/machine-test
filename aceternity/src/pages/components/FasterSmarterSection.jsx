import { Command, GithubIcon } from "lucide-react";
import { useState } from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BiCommand } from "react-icons/bi";

export default function Component() {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const labels = [
    { text: "Performance", top: "-1%", left: "39%", rotate: "-50deg" },
    { text: "Downtime", top: "27%", left: "50%", rotate: "-50deg" },
    { text: "Error rates", top: "50%", left: "34%", rotate: "-50deg" },
    { text: "API latency", top: "75%", left: "75%", rotate: "-30deg" },
    { text: "User reports", top: "55%", left: "61%", rotate: "-50deg" },
    { text: "Server load", top: "15%", left: "5%", rotate: "30deg" },
    { text: "Database queries", top: "85%", left: "40%", rotate: "-50deg" },
    { text: "Network issues", top: "70%", left: "10%", rotate: "-20deg" },

    {
      text: "Pro Features",
      blur: true,
      top: "23%",
      left: "22%",
      rotate: "-50deg",
    },
    {
      text: "Performance Metrics",
      blur: true,
      top: "15%",
      left: "70%",
      rotate: "20deg",
    },
  ];

  return (
    <div className="bg-black  min-h-screen flex flex-col items-center justify-center p-8 space-y-10">
      <div className="text-center mb-10">
        <h1 className="md:text-5xl sm:text-2xl font-bold mb-2  text-center relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
          Faster. Smarter. Reliable Monitoring
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Many services promise reliability, but not all of them deliver. Our
          uptime monitoring solution is designed to ensure that your website or
          application stays online and responsive, with minimal disruption.
        </p>
      </div>

      <div className="w-full max-w-7xl space-y-8">
        <div className="p-2 sm:p-4 border border-gray-800 rounded-xl shadow-lg">
          <h2 className="text-base sm:text-lg font-semibold mb-2">
            Optimized for performance
          </h2>
          <p className="text-gray-400 mb-3 text-xs sm:text-sm">
            Optimize your system's uptime and user experience. Our monitoring
            platform helps you catch issues before they affect your users,
            offering detailed metrics and real-time alerts.
          </p>

          <div className="relative p-2 sm:p-4 rounded-lg overflow-hidden h-48 md:h-80 sm:h-64">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 100"
              preserveAspectRatio="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="20"
                  height="20"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 20 0 L 0 0 0 20"
                    fill="none"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="0.5"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              <line
                x1="0"
                y1="25"
                x2="400"
                y2="25"
                stroke="#1C2937"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="50"
                x2="400"
                y2="50"
                stroke="#1C2937"
                strokeWidth="0.5"
              />
              <line
                x1="0"
                y1="75"
                x2="400"
                y2="75"
                stroke="#1C2937"
                strokeWidth="0.5"
              />

              {Array.from({ length: 7 }).map((_, i) => (
                <line
                  key={i}
                  x1={i * 50}
                  y1="0"
                  x2={i * 50}
                  y2="100"
                  stroke="#1C2937"
                  strokeWidth="0.5"
                />
              ))}

              <polyline
                fill="none"
                stroke="#4294E6"
                strokeWidth="0.5"
                points="0,80 40,60 80,90 110,50 150,60 180,20 220,70 250,50 280,90 360,10 400,50"
              >
                <animate
                  attributeName="stroke-dasharray"
                  from="0,400"
                  to="400,0"
                  dur="2s"
                  fill="freeze"
                />
              </polyline>
                <div className="rounded-full shadow-2xl w-20 h-20 bg-red-500 shadow-[#06B6D4]"/>

              <circle
                cx="110"
                cy="53"
                r="8"
                fill="#4294E6"
                className="transition-transform transform hover:scale-125 "
              />
              <foreignObject
                x="102"
                y="45"
                width="16"
                height="16"
                onMouseEnter={() => setHoveredPoint(1)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className="bg-[#1C2937] rounded-full w-full h-full flex items-center justify-center ">
                  <MdOutlineAutoGraph className="h-2 w-2 text-[#4294E6]" />
                </div>
              </foreignObject>

              <circle
                cx="250"
                cy="50"
                r="8"
                fill="#4294E6"
                className="transition-transform transform hover:scale-125"
              />
              <foreignObject
                x="242"
                y="42"
                width="16"
                height="16"
                onMouseEnter={() => setHoveredPoint(2)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className="bg-[#1C2937] rounded-full w-full h-full flex items-center justify-center">
                  <IoCheckmarkCircleSharp className="h-2 w-2 text-[#4294E6]" />
                </div>
              </foreignObject>
            </svg>

            {/* Tooltip for Circle 1 */}
            {hoveredPoint === 1 && (
              <div className="absolute top-[30%] left-[18%] bg-[#1C2937] border border-gray-600 p-1 rounded-md text-xs transition-opacity duration-300 opacity-100">
                <span className="mr-1">⚡</span>
                Alert - The login page has mobile issues.
              </div>
            )}

            {/* Tooltip for Circle 2 */}
            {hoveredPoint === 2 && (
              <div className="absolute top-[27%]  md:left-[52%] sm:left-[12%] bg-[#1C2937] border border-gray-600 p-1 rounded-md text-xs transition-opacity duration-300 opacity-100">
                <span className="mr-1">⚡</span>
                Alert - The dashboard is experiencing latency.
              </div>
            )}
          </div>
        </div>

        {/* Lower Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Scalability Card */}
          <div className="relative p-6 rounded-xl shadow-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Scalability</h2>
            <p className="text-gray-400 mb-4">
              Our monitoring service balances performance and flexibility,
              adapting to your system's growth and evolving needs without
              compromising on reliability or security.
            </p>
            <div className="relative flex-grow flex items-center justify-center">
              <div className="bg-gradient-to-tr from-gray-900 to-transparent p-5 rounded-full z-10">
                <div className="p-5 rounded-full z-10">
                  <GithubIcon className="w-16 h-16 text-white" />
                </div>
              </div>

              <div className="absolute w-44 h-44 rounded-full border-2 border-gray-700 animate-loopCircle delay-0"></div>
              <div className="absolute w-52 h-52 rounded-full border-2 border-gray-800 animate-loopCircle delay-500"></div>
              <div className="absolute w-60 h-60 rounded-full border-2 border-gray-900 animate-loopCircle delay-1000"></div>
            </div>
          </div>

          {/* Alerts & Notifications Card */}
          <div className="border border-gray-800 p-4 sm:p-6 rounded-xl shadow-lg w-full max-w-full">
            <h2 className="text-lg sm:text-xl font-semibold text-white">
              Alerts & Notifications
            </h2>
            <p className="text-gray-400 mb-3 text-xs sm:text-sm">
              Receive real-time notifications as soon as any downtime or
              performance degradation is detected.
            </p>
            <div className="relative bg-gradient-to-bl from-black to-transparent -mt-4 p-4 rounded-lg overflow-hidden h-40 sm:h-48">
              <div
                className="bg-gray-600 h-12 w-12 p-[1px] rounded-lg absolute top-1/2 left-1/2 z-10"
                style={{
                  transform: `rotate(40deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              >
                <Command
                  className="text-white p-[10px] h-[48px] w-[48px] rounded-lg bg-gradient-to-t from-gray-800 to-black"
                  size={40}
                />
              </div>

              <div
                className="bg-gray-700 h-[1px] ml-44 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(40deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-r from-gray-700 to-transparent h-[1px] mt-8 ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-r from-gray-700 to-transparent h-[1px] mt-12 ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-bl from-gray-700 to-transparent h-[1px] mt-12 ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-bl from-gray-700 to-transparent h-[1px] mt-12 ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-bl from-gray-700 to-transparent h-[1px] mt-12 ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-bl from-gray-700 to-transparent h-[1px] mt-12 ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              {labels.map((label, index) => (
                <div
                  key={label.text}
                  className={`absolute px-2 py-1 rounded-full text-xs text-white whitespace-nowrap ${
                    index % 2 === 0
                      ? "bg-blue-600"
                      : "bg-blue-900/50 backdrop-blur-sm"
                  }`}
                  style={{
                    top: label.top,
                    left: label.left,
                    transform: `rotate(${label.rotate})`,
                    animation: `floatInclined${index} 3s ease-in-out ${
                      index * 0.3
                    }s infinite alternate`,
                  }}
                >
                  {label.text}
                </div>
              ))}
            </div>
            <style jsx>{`
              @keyframes floatIcon {
                0% {
                  transform: translate(0, 0) rotate(-10deg);
                }
                100% {
                  transform: translate(0, -5px) rotate(-10deg);
                }
              }

              ${labels.map(
                (label, index) => `
      @keyframes floatInclined${index} {
        0% {
          transform: translate(0, 0) rotate(${label.rotate});
        }
        100% {
          transform: translate(0, -5px) rotate(${label.rotate});
        }
      }
    `
              )}
            `}</style>
          </div>
        </div>
      </div>
    </div>
  );
}
