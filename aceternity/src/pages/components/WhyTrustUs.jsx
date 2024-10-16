import React from "react";

const WhyTrustUs = () => {
  return (
    <div className=" text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Why trust us ?</h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          In today's fast-paced digital landscape, ensuring reliable uptime is
          more important than ever. Many monitoring services fall short, but we
          provide an industry-leading solution to keep your systems online and
          performing optimally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div>
            <h3 className="text-xl font-semibold mb-4">API Integration</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Discussions Monitoring</h4>
                <p className="text-gray-400 text-sm">
                  Monitor your collaboration tools and forums to ensure smooth,
                  uninterrupted communication, maintaining uptime and data
                  security.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Team views</h4>
                <p className="text-gray-400 text-sm">
                  Enable your team to have customized monitoring dashboards with
                  access to real-time system health and uptime statistics.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Powerful search</h4>
                <p className="text-gray-400 text-sm">
                  Quickly identify and troubleshoot issues with our powerful
                  search functionality, designed to locate performance
                  bottlenecks and downtime causes.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">System Management</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Analytics</h4>
                <p className="text-gray-400 text-sm">
                  Get deep insights into system performance with advanced
                  analytics, helping you understand downtime causes and optimize
                  uptime.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Notifications</h4>
                <p className="text-gray-400 text-sm">
                  Receive real-time alerts for any downtime or performance
                  issues, ensuring you're always ahead of the problem.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Integrations</h4>
                <p className="text-gray-400 text-sm">
                  Seamlessly integrate with other platforms to consolidate your
                  monitoring tools and improve system efficiency.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Advanced Security</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-medium mb-2">Privacy</h4>
                <p className="text-gray-400 text-sm">
                  Our uptime monitoring tools are built with data privacy in
                  mind, ensuring that your sensitive information is always
                  secure.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Data export</h4>
                <p className="text-gray-400 text-sm">
                  Easily export data for in-depth analysis, audits, or
                  compliance requirements, all while maintaining the security of
                  your data.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Real-time sync</h4>
                <p className="text-gray-400 text-sm">
                  Keep your data synchronized across multiple monitoring tools,
                  ensuring real-time accuracy for a complete view of your
                  system's health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyTrustUs;
