import { Badge } from "@mui/material"
import { Card } from "@mui/material"
import {
  Apple,
  ArrowUpRight,
  Briefcase,
  Building2,
  Globe,
  GraduationCap,
  PenTool,
  Users,
} from "lucide-react"

export default function PricingBtn() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8">
        {/* WEBFLOW FOR Section */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-muted-foreground">WEBFLOW FOR</h2>
          <div className="space-y-8">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <h3 className="font-semibold text-xl">Enterprise</h3>
              </div>
              <p className="text-muted-foreground">Built for world-class organizations</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <h3 className="font-semibold text-xl">Agencies</h3>
              </div>
              <p className="text-muted-foreground">Accelerate your agency's growth</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <PenTool className="w-5 h-5" />
                <h3 className="font-semibold text-xl">Freelancers</h3>
              </div>
              <p className="text-muted-foreground">Build custom sites for clients</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <h3 className="font-semibold text-xl">Global alliances</h3>
              </div>
              <p className="text-muted-foreground">Unlock enterprise-level partnership</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                <h3 className="font-semibold text-xl">Startups</h3>
              </div>
              <p className="text-muted-foreground">Move faster with Webflow</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5" />
                <h3 className="font-semibold text-xl">Classrooms</h3>
              </div>
              <p className="text-muted-foreground">Register to use Webflow for free</p>
            </div>
          </div>
        </div>

        {/* COMPARE Section */}
        <div className="space-y-6">
          <h2 className="text-sm font-semibold text-muted-foreground">COMPARE</h2>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contentful</h3>
            <h3 className="text-xl font-semibold">Sitecore</h3>
            <h3 className="text-xl font-semibold">WordPress</h3>
          </div>
        </div>

        {/* Customer Story Section */}
        <div className="space-y-6">
          <Card className="bg-black text-white overflow-hidden">
            <div className="p-6 space-y-6">
              <div className="flex justify-between items-start">
                <Badge className="bg-blue-600 hover:bg-blue-700 text-white">CUSTOMER STORY</Badge>
                <ArrowUpRight className="w-5 h-5" />
              </div>
              <h3 className="text-4xl font-bold leading-tight">
                How Dropbox Sign transformed collaboration with Webflow
              </h3>
              <div className="space-y-2">
                <div className="text-6xl font-bold">67%</div>
                <div className="text-gray-400 uppercase text-sm tracking-wider">Decrease in dev ticketing</div>
              </div>
            </div>
          </Card>
          <div className="flex items-center gap-2">
            <Apple className="w-5 h-5" />
            <h3 className="font-semibold text-xl">Customer stories</h3>
          </div>
          <p className="text-muted-foreground">Browse Webflow success stories</p>
        </div>
      </div>
    </div>
  )
}