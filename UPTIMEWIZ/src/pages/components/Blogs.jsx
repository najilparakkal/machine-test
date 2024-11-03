import {
    BookOpen,
    Code2,
    FileText,
    GraduationCap,
    Grid,
    HeadphonesIcon,
    Layout,
    LayoutGrid,
    MessageSquare,
    Newspaper,
    Users,
    Users2,
  } from "lucide-react"
  
  export default function Blogs() {
    return (
      <div className="p-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          {/* GET STARTED Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-muted-foreground">GET STARTED</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Templates</h3>
                </div>
                <p className="text-muted-foreground">Website templates for any use case</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Layout className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Made in Webflow</h3>
                </div>
                <p className="text-muted-foreground">Find and clone inspiring sites</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Hire a Certified Partner</h3>
                </div>
                <p className="text-muted-foreground">Find a freelancer or agency to help with your next project</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Developers</h3>
                </div>
                <p className="text-muted-foreground">Submit an app, explore our APIs, get technical support, and more</p>
              </div>
            </div>
          </div>
  
          {/* LEARN Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-muted-foreground">LEARN</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Webflow University</h3>
                </div>
                <p className="text-muted-foreground">Learn web design and development for free</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Newspaper className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Blog</h3>
                </div>
                <p className="text-muted-foreground">Stories, insights, and advice for how you build for the web</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Resources</h3>
                </div>
                <p className="text-muted-foreground">Free ebooks, webinars, whitepapers, and reports</p>
              </div>
            </div>
          </div>
  
          {/* DISCOVER Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-muted-foreground">DISCOVER</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Customer stories</h3>
                </div>
                <p className="text-muted-foreground">Explore enterprise and agency success stories</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Grid className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Community</h3>
                </div>
                <p className="text-muted-foreground">Connect with the worldwide Webflow community</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Users2 className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Partner with Webflow</h3>
                </div>
                <p className="text-muted-foreground">Grow your business by becoming a Webflow partner</p>
              </div>
            </div>
          </div>
  
          {/* GET HELP Section */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold text-muted-foreground">GET HELP</h2>
            <div className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <HeadphonesIcon className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Support</h3>
                </div>
                <p className="text-muted-foreground">Jump into our product docs or connect with our Support team</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" />
                  <h3 className="font-semibold text-lg">Forum</h3>
                </div>
                <p className="text-muted-foreground">Ask questions and learn alongside other Webflow users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }