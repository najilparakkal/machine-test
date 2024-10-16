import { GithubIcon } from "lucide-react"

export default function TherdSection() {
  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center p-8 space-y-10">
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-2">Faster. Smarter. Reliable Monitoring</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Many services promise reliability, but not all of them deliver. Our uptime monitoring solution 
          is designed to ensure that your website or application stays online and responsive, with minimal disruption.
        </p>
      </div>

      <div className="w-full max-w-7xl space-y-8">
        <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-2">Optimized for performance</h2>
          <p className="text-gray-400 mb-4">
            Optimize your system's uptime and user experience. Our monitoring platform helps you catch 
            issues before they affect your users, offering detailed metrics and real-time alerts.
          </p>
          <div className="relative p-6 bg-gray-800 rounded-lg overflow-hidden h-60">
            <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="none">
              <polyline
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2"
                points="0,80 40,70 80,90 120,50 160,60 200,30"
              />
            </svg>
            <div className="absolute top-4 left-4 bg-blue-600 p-2 rounded-md text-sm">
              <span className="mr-2">⚡</span>
              Alert - The login page has mobile issues.
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg flex flex-col">
            <h2 className="text-xl font-semibold mb-2">Scalability</h2>
            <p className="text-gray-400 mb-4">
              Our monitoring service balances performance and flexibility, adapting to your system's growth 
              and evolving needs without compromising on reliability or security.
            </p>
            <div className="flex-grow flex items-center justify-center">
              <div className="bg-gray-800 p-10 rounded-full">
                <GithubIcon className="w-16 h-16 text-white" />
              </div>
            </div>
          </div>

          {/* Alerts & Notifications Card */}
          <div className="bg-gray-900 p-6 rounded-xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">Alerts & Notifications</h2>
            <p className="text-gray-400 mb-4">
              Receive real-time notifications as soon as any downtime or performance degradation is detected.
            </p>
            <div className="relative bg-gray-800 p-4 rounded-lg overflow-hidden h-40">
              {/* Floating labels */}
              {['Transactional', 'Registration', 'Downtime', 'Anonymous User', 'Social Integration', 'Privacy & Security'].map((label, index) => (
                <div 
                  key={label}
                  className="absolute bg-blue-600 p-2 rounded-md text-xs text-white"
                  style={{
                    top: `${Math.random() * 70}%`,
                    left: `${Math.random() * 70}%`,
                    animation: `float 3s ease-in-out ${index * 0.5}s infinite alternate`
                  }}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}