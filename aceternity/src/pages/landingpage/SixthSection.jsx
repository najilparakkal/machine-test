import { Button, Switch } from "@mui/material";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { HiClipboardList } from "react-icons/hi";

const SixthSection = () => {
  const [isYearly, setIsYearly] = useState(false);

  // Monthly and Yearly price details
  const monthlyTiers = [
    {
      name: "Hobby",
      price: "$0 / month",
      description: "For individuals trying out the product",
      features: [
        "Access to all tools for 14 days",
        "No credit card required",
        "Community Support",
        "Access to Aceternity UI",
      ],
      cta: "Get Started",
    },
    {
      name: "Starter",
      price: "$20 / month",
      description: "For serious founders",
      features: [
        "Everything in Hobby +",
        "Access to Proactiv AI",
        "Priority tools access",
        "Support for Slack and Twitter",
        "Priority support",
        "99.67% Uptime SLA",
        "Access to Aceternity UI Templates",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$30 / month",
      description: "For small to large businesses",
      features: [
        "Everything in Starter +",
        "Access to our dev team",
        "Coffee with the CEO",
        "Access to Aceternity UI",
        "Request tools",
        "Advanced analytics",
        "Customizable dashboards",
        "24/7 customer support",
        "Unlimited data storage",
        "Enhanced security features",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale businesses",
      features: [
        "Everything in Pro +",
        "HIPAA and SOC2 compliance",
        "Bulk email support",
        "Customizable dashboards",
        "24/7 customer support",
      ],
      cta: "Book a demo",
    },
  ];

  const yearlyTiers = [
    {
      name: "Hobby",
      price: "$0 / year",
      description: "For individuals trying out the product",
      features: [
        "Access to all tools for 14 days",
        "No credit card required",
        "Community Support",
        "Access to Aceternity UI",
      ],
      cta: "Get Started",
    },
    {
      name: "Starter",
      price: "$100 / year",
      description: "For serious founders ",
      features: [
        "Everything in Hobby +",
        "Access to Proactiv AI",
        "Priority tools access",
        "Support for Slack and Twitter",
        "Priority support",
        "99.67% Uptime SLA",
        "Access to Aceternity UI Templates",
      ],
      cta: "Get Started",
    },
    {
      name: "Pro",
      price: "$150 / year",
      description: "For small to large businesses ",
      features: [
        "Everything in Starter +",
        "Access to our dev team",
        "Coffee with the CEO",
        "Access to Aceternity UI",
        "Request tools",
        "Advanced analytics",
        "Customizable dashboards",
        "24/7 customer support",
        "Unlimited data storage",
        "Enhanced security features",
      ],
      cta: "Get Started",
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large scale businesses",
      features: [
        "Everything in Pro +",
        "HIPAA and SOC2 compliance",
        "Bulk email support",
        "Customizable dashboards",
        "24/7 customer support",
      ],
      cta: "Book a demo",
    },
  ];

  // Toggle between monthly and yearly tiers based on the switch state
  const tiers = isYearly ? yearlyTiers : monthlyTiers;

  return (
    <div className="bg-black min-h-screen">
      <div className="h-[500px] flex flex-col items-center justify-center text-white p-4">
        <div className="inline-block mb-8 p-[4px] bg-[#2B2B2B] rounded-lg">
          <HiClipboardList className="bg-black text-[#06B6D4] p-3 w-8 h-8 md:w-12 md:h-12 flex-shrink-0" />
        </div>
        <h1 className="text-5xl font-bold mb-4 text-center">Simple pricing</h1>
        <p className="text-xl text-gray-400 mb-8 text-center max-w-2xl">
          Simple pricing for startups, small businesses, medium scale
          businesses, and enterprises.
        </p>
        <div className="flex items-center space-x-2">
          <span
            className={`text-sm ${!isYearly ? "text-white" : "text-gray-400"}`}
          >
            monthly
          </span>

          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={isYearly}
              onChange={() => setIsYearly(!isYearly)}
              className="sr-only peer"
            />
            <div className="w-9 h-5 border bg-black peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-transparent rounded-full peer dark:bg-black border-gray-600 peer-checked:bg-black transition-all"></div>
            <div className="absolute left-[6px] top-[4px] bg-white w-3 h-3 rounded-full transition-transform peer-checked:translate-x-full"></div>
          </label>

          <span
            className={`text-sm ${isYearly ? "text-white" : "text-gray-400"}`}
          >
            yearly
          </span>
        </div>
      </div>

      <div className="w-full bg-black text-[#A3A3A3] p-6">
        <div className="max-w-7xl mx-auto p-8">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div
                key={tier.name}
                className={`rounded-lg p-6 flex flex-col justify-between ${
                  tier.highlighted
                    ? "h-full relative overflow-hidden bg-gradient-to-b from-[#151515] to-black"
                    : "bg-transparent h-full"
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-0 w-full card-with-animated-border" />
                )}
                <div>
                  <h2 className="text-white mb-4">{tier.name}</h2>
                  <p className="text-[19px] font-semibold mb-4">{tier.price}</p>
                  <p className="text-gray-200 text-sm mb-6">
                    {tier.description}
                  </p>
                  <ul className="space-y-4 mb-6 text-sm">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-[#A3A3A3] mr-2 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-start items-start mt-auto">
                  <button
                    className={`w-1/2 py-2 rounded-lg ${
                      tier.highlighted
                        ? "bg-[#00FFFF] text-black"
                        : "hover:bg-[#171717] bg-[#1C1C1C] text-white border-2 border-t-gray-800 border-transparent"
                    }`}
                  >
                    {tier.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(SixthSection);
