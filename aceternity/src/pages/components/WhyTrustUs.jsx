import React from "react";

const WhyTrustUs = () => {
  return (
    <div className="text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
          Why trust us?
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-3xl mx-auto">
          In today's fast-paced digital landscape, ensuring reliable uptime is
          more important than ever. Many monitoring services fall short, but we
          provide an industry-leading solution to keep your systems online and
          performing optimally.
        </p>

        <div className="space-y-16">
          <Section
            title="API Integration"
            items={[
              {
                title: "Discussions Monitoring",
                description:
                  "Monitor your collaboration tools and forums to ensure smooth, uninterrupted communication, maintaining uptime and data security.",
              },
              {
                title: "Team views",
                description:
                  "Enable your team to have customized monitoring dashboards with access to real-time system health and uptime statistics.",
              },
              {
                title: "Powerful search",
                description:
                  "Quickly identify and troubleshoot issues with our powerful search functionality, designed to locate performance bottlenecks and downtime causes.",
              },
            ]}
          />

          <Section
            title="System Management"
            items={[
              {
                title: "Analytics",
                description:
                  "Get deep insights into system performance with advanced analytics, helping you understand downtime causes and optimize uptime.",
              },
              {
                title: "Notifications",
                description:
                  "Receive real-time alerts for any downtime or performance issues, ensuring you're always ahead of the problem.",
              },
              {
                title: "Integrations",
                description:
                  "Seamlessly integrate with other platforms to consolidate your monitoring tools and improve system efficiency.",
              },
            ]}
          />

          <Section
            title="Advanced Security"
            items={[
              {
                title: "Privacy",
                description:
                  "Our uptime monitoring tools are built with data privacy in mind, ensuring that your sensitive information is always secure.",
              },
              {
                title: "Data export",
                description:
                  "Easily export data for in-depth analysis, audits, or compliance requirements, all while maintaining the security of your data.",
              },
              {
                title: "Real-time sync",
                description:
                  "Keep your data synchronized across multiple monitoring tools, ensuring real-time accuracy for a complete view of your system's health.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, items }) => (
  <div>
    <h3 className="text-xl sm:text-2xl font-semibold mb-6">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index}>
          <h4 className="text-lg font-medium mb-2">{item.title}</h4>
          <p className="text-gray-400 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
    <div className="bg-gradient-to-r from-gray-500 to-black mt-8 w-full h-[1px]" />
  </div>
);

export default WhyTrustUs;
