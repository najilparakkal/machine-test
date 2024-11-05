import { Badge } from "@mui/material";
import { Card } from "@mui/material";
import {
  Apple,
  ArrowUpRight,
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  PenTool,
  Users,
} from "lucide-react";

export default function PricingBtn() {
  return (
    <div className="p-8 max-w-5xl mt-16 rounded-lg  mx-auto bg-white">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="space-y-3">
          <h2 className="text-sm font-semibold text-gray-500">WEBFLOW FOR</h2>
          <div className="space-y-5">
            <div className="space-y-2 items-start">
              <div className="flex  gap-2">
                <Building2 className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-xl text-gray-800">
                  Enterprise
                </h3>
              </div>
              <p className="items-start text-gray-600">
                Built for world-class organizations
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-xl text-gray-800">
                  Agencies
                </h3>
              </div>
              <p className="text-gray-600">Accelerate your agency's growth</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-xl text-gray-800">
                  Freelancers
                </h3>
              </div>
              <p className="text-gray-600">Build custom sites for clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-xl text-gray-800">
                  Global alliances
                </h3>
              </div>
              <p className="text-gray-600">
                Unlock enterprise-level partnership
              </p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-xl text-gray-800">
                  Startups
                </h3>
              </div>
              <p className="text-gray-600">Move faster with Webflow</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-gray-700" />
                <h3 className="font-semibold text-xl text-gray-800">
                  Classrooms
                </h3>
              </div>
              <p className="text-gray-600">Register to use Webflow for free</p>
            </div>
          </div>
        </div>

        {/* COMPARE Section */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-gray-500">COMPARE</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-800">Contentful</h3>
            <h3 className="text-xl font-semibold text-gray-800">Sitecore</h3>
            <h3 className="text-xl font-semibold text-gray-800">WordPress</h3>
          </div>
        </div>

        {/* Customer Story Section */}
        <div className="space-y-6">
          <Card className="bg-gray-800 text-white overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <Badge className="bg-blue-600 text-white">CUSTOMER STORY</Badge>
                <ArrowUpRight className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-3xl font-bold leading-tight">
                How Dropbox Sign transformed collaboration with Webflow
              </h3>
              <div className="space-y-2">
                <div className="text-5xl font-bold">67%</div>
                <div className="text-gray-400 uppercase text-sm tracking-wider">
                  Decrease in dev ticketing
                </div>
              </div>
            </div>
          </Card>
          <div className="flex items-center gap-2">
            <Apple className="w-5 h-5 text-gray-700" />
            <h3 className="font-semibold text-xl text-gray-800">
              Customer stories
            </h3>
          </div>
          <p className="text-gray-600">Browse Webflow success stories</p>
        </div>
      </div>
    </div>
  );
}
