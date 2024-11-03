import { Command, GithubIcon } from "lucide-react";
import { useState } from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { BiCommand } from "react-icons/bi";
import { gradientStyle } from "../../utils";

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
        <div className="grid gap-6 items-center justify-items-center">
          <h1
            style={gradientStyle}
            className="md:text-5xl sm:text-2xl font-bold w-full sm:w-3/4 text-center py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white"
          >
            Proactive Uptime Monitoring for Your Peace of Mind
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            UptimeWiz delivers round-the-clock monitoring to ensure your website
            or app stays online. We catch issues before they become problems,
            helping you maintain a seamless digital experience for your users.
          </p>
        </div>
      </div>

      <div className="w-full max-w-7xl space-y-8">
        <div className="p-1 sm:p-2 md:p-4 border border-gray-800 rounded-xl shadow-lg">
          <h2 className="text-sm text-gray-400 sm:text-base md:text-lg font-semibold mb-2">
            Real-Time Monitoring
          </h2>
          <p className="text-gray-400 mb-3 text-xs sm:text-sm md:text-base">
            Our platform tracks your website's health 24/7, providing instant
            notifications for outages and performance slowdowns, so you can take
            action fast.
          </p>

          <div className="relative p-1 sm:p-2 md:p-4 rounded-lg overflow-hidden h-32 sm:h-48 md:h-64 lg:h-80">
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

              <circle
                cx="110"
                cy="53"
                r="6"
                fill="#4294E6"
                className="transition-transform transform hover:scale-125"
              />
              <foreignObject
                x="102"
                y="45"
                width="16"
                height="16"
                onMouseEnter={() => setHoveredPoint(1)}
                onMouseLeave={() => setHoveredPoint(null)}
              >
                <div className="bg-[#1C2937] rounded-full w-full h-full flex items-center justify-center">
                  <MdOutlineAutoGraph className="h-2 w-2 text-[#4294E6]" />
                </div>
              </foreignObject>

              <circle
                cx="250"
                cy="50"
                r="6"
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
              <div className="absolute top-[27%] left-[48%] md:left-[52%] bg-[#1C2937] border border-gray-600 p-1 rounded-md text-xs transition-opacity duration-300 opacity-100">
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
            <h2 className="text-xl text-gray-400  font-semibold mb-2">
              Scalable Solutions
            </h2>
            <p className="text-gray-400 mb-4">
              UptimeWiz scales with your needs, whether you’re monitoring a
              single site or multiple complex applications across different
              regions.
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
          <div className="border border-gray-800 p-2 sm:p-4 rounded-xl shadow-lg w-full max-w-full">
            <h2 className="text-sm sm:text-lg font-semibold text-white">
              Instant Alerts
            </h2>
            <p className="text-gray-400 mb-2 sm:mb-3 text-xs sm:text-sm">
              Get notified via email, SMS, or Call the moment an issue arises—no
              surprises, just timely alerts.
            </p>
            <div className="relative bg-gradient-to-bl from-black to-transparent -mt-2 sm:-mt-4 p-3 sm:p-4 rounded-lg overflow-hidden h-32 sm:h-40">
              <div
                className="bg-gray-600 h-8 sm:h-12 w-8 sm:w-12 p-[1px] rounded-lg absolute top-1/2 left-1/2 z-10"
                style={{
                  transform: `rotate(40deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              >
                <Command
                  className="text-white p-[8px] sm:p-[10px] h-[36px] sm:h-[48px] w-[36px] sm:w-[48px] rounded-lg bg-gradient-to-t from-gray-800 to-black"
                  size={30} // Reduced icon size for smaller screens
                />
              </div>

              <div
                className="bg-gray-700 h-[1px] ml-32 sm:ml-44 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(40deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-r from-gray-700 to-transparent h-[1px] mt-6 sm:mt-8 ml-28 sm:ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-r from-gray-700 to-transparent h-[1px] mt-8 sm:mt-12 ml-28 sm:ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />
              <div
                className="bg-gradient-to-bl from-gray-700 to-transparent h-[1px] mt-8 sm:mt-12 ml-28 sm:ml-36 w-full"
                style={{
                  transform: `translate(-50%, -50%) rotate(130deg)`,
                  animation: `3s ease-in-out infinite alternate`,
                }}
              />

              {labels.map((label, index) => (
                <div
                  key={label.text}
                  className={`absolute px-1 sm:px-2 py-[1px] sm:py-1 rounded-full text-[8px] sm:text-xs text-white whitespace-nowrap ${
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
