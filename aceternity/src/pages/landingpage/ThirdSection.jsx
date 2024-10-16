import { GithubIcon } from "lucide-react";
import { useState } from "react";
import { MdOutlineAutoGraph } from "react-icons/md";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { Bell } from "lucide-react";
import { SparklesCore } from "../acertenityComponents/MainTextSpark";
import { Sparkles } from "../acertenityComponents/Tools";

export default function Component() {
  const [hoveredPoint, setHoveredPoint] = useState(null);
  const labels = [
    { text: "Transactional", blur: false, top: "10%", left: "15%" },
    { text: "Registration", blur: false, top: "5%", left: "60%" },
    { text: "Anonymous User", blur: false, top: "45%", left: "5%" },
    { text: "Social Integrations", blur: false, top: "40%", left: "70%" },
    { text: "Privacy & Security", blur: false, top: "55%", left: "30%" },
    { text: "Universal Log", blur: true, top: "75%", left: "30%" },
    { text: "Directory", blur: true, top: "80%", left: "10%" },
    { text: "Convenience", blur: true, top: "15%", left: "80%" },
    { text: "Downtime", blur: false, top: "30%", left: "50%" },
    { text: "Pro Features", blur: true, top: "26%", left: "25%" },
    { text: "Performance Metrics", blur: true, top: "65%", left: "70%" },
  ];

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8 space-y-10">
    {/* Title Section */}
    <div className="text-center mb-10">
      <h1 className="text-5xl font-bold mb-2">
        Faster. Smarter. Reliable Monitoring
      </h1>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto">
        Many services promise reliability, but not all of them deliver. Our uptime monitoring solution is designed to ensure that your website or application stays online and responsive, with minimal disruption.
      </p>
    </div>
  
    {/* Cards Section */}
    <div className="w-full max-w-7xl space-y-8">
      {/* Optimized for Performance Card */}
      <div className="p-6 border border-gray-800 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Optimized for performance</h2>
        <p className="text-gray-400 mb-4">
          Optimize your system's uptime and user experience. Our monitoring platform helps you catch issues before they affect your users, offering detailed metrics and real-time alerts.
        </p>
  
        {/* Enhanced Line Graph */}
        <div className="relative p-6 rounded-lg overflow-hidden h-80">
          <svg className="w-full h-full" viewBox="0 0 400 100" preserveAspectRatio="none">
            <defs>
              <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
  
            {/* Prominent horizontal lines */}
            <line x1="0" y1="25" x2="400" y2="25" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="0" y1="50" x2="400" y2="50" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
            <line x1="0" y1="75" x2="400" y2="75" stroke="rgba(255,255,255,0.2)" strokeWidth="0.5" />
  
            {/* Prominent vertical lines */}
            {Array.from({ length: 7 }).map((_, i) => (
              <line
                key={i}
                x1={i * 50}
                y1="0"
                x2={i * 50}
                y2="100"
                stroke="rgba(255,255,255,0.2)"
                strokeWidth="0.5"
              />
            ))}
  
            {/* Line graph animation */}
            <polyline
              fill="none"
              stroke="#06B6D4"
              strokeWidth="0.5"
              points="0,80 40,60 80,90 110,50 150,60 180,20 220,70 250,50 280,90 360,10 400,50"
            >
              <animate attributeName="stroke-dasharray" from="0,400" to="400,0" dur="2s" fill="freeze" />
            </polyline>
  
            {/* Circle 1 */}
            <circle cx="110" cy="53" r="10" fill="#06B6D4" className="transition-transform transform hover:scale-125" />
            <foreignObject
              x="101"
              y="44"
              width="18"
              height="18"
              onMouseEnter={() => setHoveredPoint(1)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <div className="bg-gray-900 rounded-full w-full h-full flex items-center justify-center">
                <MdOutlineAutoGraph className="h-2 w-2 text-[#06B6D4]" />
              </div>
            </foreignObject>
  
            {/* Circle 2 */}
            <circle cx="250" cy="50" r="10" fill="#06B6D4" className="transition-transform transform hover:scale-125" />
            <foreignObject
              x="241"
              y="41"
              width="18"
              height="18"
              onMouseEnter={() => setHoveredPoint(2)}
              onMouseLeave={() => setHoveredPoint(null)}
            >
              <div className="bg-gray-900 rounded-full w-full h-full flex items-center justify-center">
                <IoCheckmarkCircleSharp className="h-2 w-2 text-[#06B6D4]" />
              </div>
            </foreignObject>
          </svg>
  
          {/* Tooltip for Circle 1 */}
          {hoveredPoint === 1 && (
            <div className="absolute top-[30%] left-[18%] bg-blue-600 p-2 rounded-md text-sm transition-opacity duration-300 opacity-100">
              <span className="mr-2">⚡</span>
              Alert - The login page has mobile issues.
            </div>
          )}
  
          {/* Tooltip for Circle 2 */}
          {hoveredPoint === 2 && (
            <div className="absolute top-[27%] left-[52%] bg-blue-600 p-2 rounded-md text-sm transition-opacity duration-300 opacity-100">
              <span className="mr-2">⚡</span>
              Alert - The dashboard is experiencing latency.
            </div>
          )}
        </div>
      </div>
  
      {/* Lower Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative p-6 rounded-xl shadow-lg flex flex-col">
          <h2 className="text-xl font-semibold mb-2">Scalability</h2>
          <p className="text-gray-400 mb-4">
            Our monitoring service balances performance and flexibility, adapting to your system's growth and evolving needs without compromising on reliability or security.
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
            <div className="absolute w-60 h-60 rounded-full border-2 border-gray-900 animate-loopCircle delay-1000"></div>
          </div>
        </div>
  
        {/* Alerts & Notifications Card */}
        <div className="border border-gray-800 p-6 rounded-xl shadow-lg w-full max-w-full flex flex-col">
          <h2 className="text-xl font-semibold mb-2 text-white">Alerts & Notifications</h2>
          <p className="text-gray-400 mb-4 text-sm">
            Receive real-time notifications as soon as any downtime or performance degradation is detected.
          </p>
          <div className="relative bg-gradient-to-tr from-gray-900 to-transparent p-4 rounded-lg overflow-hidden h-48 flex-grow">
            <Bell
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-600"
              size={36}
            />
            {labels.map((label, index) => (
              <div
                key={label.text}
                className={`absolute px-2 py-1 rounded-full text-xs text-white whitespace-nowrap ${label.blur ? "bg-blue-900 backdrop-blur-lg" : "bg-blue-600"}`}
                style={{
                  top: label.top,
                  left: label.left,
                  animation: `float 3s ease-in-out ${index * 0.3}s infinite alternate`,
                  zIndex: label.blur ? 0 : 1,
                }}
              >
                {label.text}
              </div>
            ))}
          </div>
          <style jsx>{`
            @keyframes float {
              0% {
                transform: translate(0, 0);
              }
              100% {
                transform: translate(0, -5px);
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  </div>
  
  );
}
