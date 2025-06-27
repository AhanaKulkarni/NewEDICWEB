import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { BookOpen, Download, ExternalLink, Video, FileText, Users, Lightbulb, TrendingUp, Award, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function Resources() {
  const businessPlanTemplates = [
    {
      title: "Lean Canvas Template",
      description: "One-page business model template for rapid iteration and validation",
      type: "PDF Template",
      category: "Business Planning",
      downloadUrl: "#",
      featured: true
    },
    {
      title: "Comprehensive Business Plan",
      description: "Detailed 30-page business plan template with financial projections",
      type: "Word Document",
      category: "Business Planning", 
      downloadUrl: "#"
    },
    {
      title: "Pitch Deck Template",
      description: "Professional presentation template for investor pitches",
      type: "PowerPoint",
      category: "Presentations",
      downloadUrl: "#",
      featured: true
    },
    {
      title: "Financial Model Template",
      description: "Excel template for startup financial planning and projections",
      type: "Excel Spreadsheet",
      category: "Finance",
      downloadUrl: "#"
    }
  ];

  const learningMaterials = [
    {
      title: "Introduction to Entrepreneurship",
      description: "Fundamentals of starting and running a successful business",
      type: "Course Material",
      category: "Fundamentals",
      url: "#",
      duration: "4 weeks"
    },
    {
      title: "Market Research & Validation",
      description: "Learn to validate your business ideas and understand market needs",
      type: "Workshop Recording",
      category: "Research",
      url: "#",
      duration: "2 hours"
    },
    {
      title: "Product Development Lifecycle",
      description: "From idea to market: complete product development guide",
      type: "Video Series",
      category: "Product",
      url: "#",
      duration: "6 hours"
    },
    {
      title: "Startup Legal Basics",
      description: "Essential legal knowledge for new entrepreneurs",
      type: "Guide",
      category: "Legal",
      url: "#",
      duration: "1 hour read"
    }
  ];

  const toolsAndPlatforms = [
    {
      name: "Canva for Business",
      description: "Design professional marketing materials and presentations",
      category: "Design",
      type: "Free/Premium",
      url: "https://canva.com",
      logo: "🎨"
    },
    {
      name: "Google Workspace",
      description: "Collaborative productivity suite for teams",
      category: "Productivity",
      type: "Free for students",
      url: "https://workspace.google.com",
      logo: "📊"
    },
    {
      name: "Notion",
      description: "All-in-one workspace for planning and organization",
      category: "Organization",
      type: "Free/Premium",
      url: "https://notion.so",
      logo: "📝"
    },
    {
      name: "Zoom",
      description: "Video conferencing for team meetings and investor calls",
      category: "Communication",
      type: "Free/Premium",
      url: "https://zoom.us",
      logo: "📹"
    },
    {
      name: "Mailchimp",
      description: "Email marketing and customer communication platform",
      category: "Marketing",
      type: "Free/Premium",
      url: "https://mailchimp.com",
      logo: "✉️"
    },
    {
      name: "Stripe",
      description: "Payment processing for online businesses",
      category: "Finance",
      type: "Pay per transaction",
      url: "https://stripe.com",
      logo: "💳"
    }
  ];

  const fundingResources = [
    {
      title: "Government Startup Schemes",
      description: "Information about government funding and support programs",
      type: "Resource Guide",
      category: "Government",
      url: "#"
    },
    {
      title: "Angel Investor Network",
      description: "Connect with potential angel investors and mentors",
      type: "Directory",
      category: "Angel Investors",
      url: "#"
    },
    {
      title: "Venture Capital Guide",
      description: "Understanding VC funding and how to approach investors",
      type: "Guide",
      category: "VC Funding",
      url: "#"
    },
    {
      title: "Crowdfunding Platforms",
      description: "List of popular crowdfunding platforms and best practices",
      type: "Directory",
      category: "Crowdfunding", 
      url: "#"
    }
  ];

  const successStories = [
    {
      title: "TechStart Solutions",
      founder: "Rahul Mehta (TCET Alumni 2022)",
      description: "AI-powered customer service platform serving 50+ companies",
      achievement: "₹2 Crore funding raised",
      category: "Technology"
    },
    {
      title: "EcoGreen Innovations",
      founder: "Priya Sharma (Current Final Year)",
      description: "Sustainable packaging solutions for e-commerce companies",
      achievement: "Pre-revenue stage, 5 pilot customers",
      category: "Sustainability"
    },
    {
      title: "EduTech Platform",
      founder: "Amit Gupta (TCET Alumni 2023)",
      description: "Online learning platform for technical skills",
      achievement: "10,000+ active users",
      category: "Education"
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              Resources & Tools
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed mb-8">
              Everything you need to start, grow, and scale your entrepreneurial venture
            </p>
            
            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input 
                placeholder="Search resources..." 
                className="pl-10 py-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="templates" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-5 mb-12">
              <TabsTrigger value="templates">Templates</TabsTrigger>
              <TabsTrigger value="learning">Learning</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
              <TabsTrigger value="funding">Funding</TabsTrigger>
              <TabsTrigger value="stories">Success Stories</TabsTrigger>
            </TabsList>

            {/* Business Plan Templates */}
            <TabsContent value="templates">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Business Templates</h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Ready-to-use templates to accelerate your business planning process
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {businessPlanTemplates.map((template, index) => (
                  <Card key={index} className={`hover:shadow-lg transition-all duration-300 ${template.featured ? 'ring-2 ring-[var(--tcet-blue)] ring-opacity-50' : ''}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white mb-2">
                            {template.title}
                            {template.featured && (
                              <span className="ml-2 px-2 py-1 bg-[var(--tcet-blue)] text-white text-xs rounded-full">Featured</span>
                            )}
                          </CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-[var(--tcet-dark)] dark:text-white text-xs rounded">
                              {template.category}
                            </span>
                            <span className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-xs">
                              {template.type}
                            </span>
                          </div>
                        </div>
                        <FileText className="w-6 h-6 text-[var(--tcet-blue)]" />
                      </div>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700">
                        <Download className="w-4 h-4 mr-2" />
                        Download Template
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Learning Materials */}
            <TabsContent value="learning">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Learning Materials</h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Comprehensive educational resources to build your entrepreneurial skills
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {learningMaterials.map((material, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white mb-2">
                            {material.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-[var(--tcet-dark)] dark:text-white text-xs rounded">
                              {material.category}
                            </span>
                            <span className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-xs">
                              {material.duration}
                            </span>
                          </div>
                        </div>
                        <BookOpen className="w-6 h-6 text-[var(--tcet-blue)]" />
                      </div>
                      <CardDescription>{material.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex gap-2">
                        <Button className="flex-1 bg-[var(--tcet-blue)] hover:bg-blue-700">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Access Material
                        </Button>
                        <Button variant="outline" size="icon">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Tools & Platforms */}
            <TabsContent value="tools">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Recommended Tools</h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Essential tools and platforms to build and grow your startup
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {toolsAndPlatforms.map((tool, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white mb-2 flex items-center">
                            <span className="text-2xl mr-3">{tool.logo}</span>
                            {tool.name}
                          </CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-[var(--tcet-dark)] dark:text-white text-xs rounded">
                              {tool.category}
                            </span>
                            <span className="text-[var(--tcet-blue)] text-xs font-medium">
                              {tool.type}
                            </span>
                          </div>
                        </div>
                      </div>
                      <CardDescription>{tool.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700" asChild>
                        <a href={tool.url} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Visit Platform
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Funding Resources */}
            <TabsContent value="funding">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Funding Resources</h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Information and connections for startup funding opportunities
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {fundingResources.map((resource, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white mb-2">
                            {resource.title}
                          </CardTitle>
                          <div className="flex items-center gap-2 mb-2">
                            <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-[var(--tcet-dark)] dark:text-white text-xs rounded">
                              {resource.category}
                            </span>
                            <span className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-xs">
                              {resource.type}
                            </span>
                          </div>
                        </div>
                        <TrendingUp className="w-6 h-6 text-[var(--tcet-blue)]" />
                      </div>
                      <CardDescription>{resource.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Explore Resource
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Success Stories */}
            <TabsContent value="stories">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Success Stories</h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Inspiring stories from TCET entrepreneurs who made it big
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {successStories.map((story, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white mb-2">
                            {story.title}
                          </CardTitle>
                          <div className="text-[var(--tcet-blue)] font-medium text-sm mb-2">
                            {story.founder}
                          </div>
                          <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-[var(--tcet-dark)] dark:text-white text-xs rounded">
                            {story.category}
                          </span>
                        </div>
                        <Award className="w-6 h-6 text-[var(--tcet-blue)]" />
                      </div>
                      <CardDescription>{story.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg mb-4">
                        <div className="text-green-700 dark:text-green-300 font-medium text-sm">
                          🎉 {story.achievement}
                        </div>
                      </div>
                      <Button variant="outline" className="w-full">
                        Read Full Story
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Resource Request */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <Lightbulb className="w-16 h-16 mx-auto mb-6 text-[var(--tcet-blue)]" />
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              Need Something Specific?
            </h2>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8 leading-relaxed">
              Can't find what you're looking for? Request specific resources or suggest new additions to our library.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[var(--tcet-blue)] hover:bg-blue-700 px-8 py-3 font-semibold">
                Request Resource
              </Button>
              <Button variant="outline" className="px-8 py-3 font-semibold">
                Suggest Addition
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}