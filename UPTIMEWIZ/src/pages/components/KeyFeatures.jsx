import {
    AppWindow,
    ArrowUpRight,
    Box,
    Database,
    Edit3,
    Globe,
    LineChart,
    Lock,
    MousePointer2,
    Puzzle,
    Search,
    Settings,
    Sparkles,
    LayoutGrid,
    Layers,
  } from "lucide-react";
  import { Card, CardContent, Typography } from "@mui/material";
  
  export default function KeyFeatures() {
    return (
      <div className="p-8 max-w-7xl mx-auto bg-white rounded-lg md:mt-16">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-gray-600">BUILD</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MousePointer2 className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Design</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Build high-performing sites
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Edit3 className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Edit mode</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Empower your content team
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Interactions</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Craft immersive experiences
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Page building</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Launch simple landing pages quickly and easily
                </p>
              </div>
            </div>
          </div>
  
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-gray-600">MANAGE</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">CMS</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Manage content at scale
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Box className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Hosting</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Host and scale your site without the hassle
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Globe className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Localization</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Customize your site for a worldwide audience
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Lock className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Security</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Ensure your site stays safe
                </p>
              </div>
            </div>
          </div>
  
          {/* OPTIMIZE Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-gray-600">OPTIMIZE</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LineChart className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Analyze</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Understand how your site performs
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Optimize</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Maximize conversions with testing and personalization
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Search className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">SEO</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Grow your reach with fine-tuned controls
                </p>
              </div>
            </div>
          </div>
  
          {/* EXTEND Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-gray-600">EXTEND</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Puzzle className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Apps</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Connect your site to apps like HubSpot, Adobe Express, and more
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <AppWindow className="w-5 h-5 text-gray-700" />
                  <h3 className="font-semibold text-gray-800">Figma to Webflow</h3>
                </div>
                <p className="text-sm text-gray-600">
                  Turn static designs into clean, production-ready code
                </p>
              </div>
            </div>
          </div>
        </div>
  
        {/* Bottom Cards */}
        <div className="grid md:grid-cols-2 gap-4 mt-8">
          <Card className="bg-gray-100 text-gray-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Layers className="w-6 h-6 text-gray-700" />
                    <h3 className="text-xl font-semibold">Platform overview</h3>
                  </div>
                  <p className="text-gray-600">
                    Explore the power of the Webflow Platform
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-700" />
              </div>
            </CardContent>
          </Card>
  
          <Card className="bg-gray-100 text-gray-800">
            <CardContent className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-6 h-6 text-gray-700" />
                    <h3 className="text-xl font-semibold">AI at Webflow</h3>
                  </div>
                  <p className="text-gray-600">
                    Elevate your site with the power of AI
                  </p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-gray-700" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
  