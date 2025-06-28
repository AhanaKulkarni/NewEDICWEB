import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Users, Lightbulb, UserCheck, Wrench, ExternalLink, GraduationCap, Linkedin } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import InvoiceGenerator from "@/components/InvoiceGenerator";

export default function StudentsCorner() {
  const { toast } = useToast();

  const forms = [
    {
      id: "registration",
      title: "EDIC Student Registration",
      description: "Join the TCET EDIC community and start your entrepreneurial journey with us",
      icon: Users,
      color: "bg-blue-500",
      fields: ["Personal Information", "Academic Details", "Areas of Interest", "Why EDIC?"]
    },
    {
      id: "startup-idea",
      title: "Submit Startup Idea",
      description: "Share your innovative startup idea and get feedback from our mentors",
      icon: Lightbulb,
      color: "bg-yellow-500",
      fields: ["Idea Overview", "Problem Statement", "Solution Approach", "Market Analysis"]
    },
    {
      id: "mentorship",
      title: "Request Mentorship",
      description: "Connect with experienced mentors for guidance on your entrepreneurial journey",
      icon: UserCheck,
      color: "bg-green-500",
      fields: ["Current Project", "Mentorship Area", "Preferred Mentor", "Goals & Expectations"]
    },
    {
      id: "lab-resources",
      title: "Request Lab Resources",
      description: "Submit your lab resource request after downloading invoice from Resources page",
      icon: Wrench,
      color: "bg-purple-500",
      requiresInvoice: true,
      fields: ["Invoice Number (from Resources page)", "Faculty Approval Status", "Project Purpose", "Submission Details"]
    }
  ];

  const alumniNetwork = [
    {
      name: "Rajesh Sharma",
      batch: "2019",
      company: "TechStart Solutions",
      position: "Founder & CEO",
      expertise: "AI/ML, SaaS Platforms",
      linkedin: "#"
    },
    {
      name: "Priya Patel",
      batch: "2020",
      company: "GreenTech Innovations",
      position: "Co-Founder",
      expertise: "Sustainable Technology, IoT",
      linkedin: "#"
    },
    {
      name: "Amit Kumar",
      batch: "2018",
      company: "FinNext",
      position: "CTO",
      expertise: "Blockchain, Fintech",
      linkedin: "#"
    },
    {
      name: "Sneha Gupta",
      batch: "2021",
      company: "EduLearn Platform",
      position: "Product Manager",
      expertise: "EdTech, Product Strategy",
      linkedin: "#"
    },
    {
      name: "Rohit Singh",
      batch: "2017",
      company: "HealthCare Pro",
      position: "Founder",
      expertise: "Healthcare Tech, Mobile Apps",
      linkedin: "#"
    },
    {
      name: "Ananya Verma",
      batch: "2020",
      company: "Digital Marketing Hub",
      position: "Creative Director",
      expertise: "Digital Marketing, Branding",
      linkedin: "#"
    }
  ];

  const handleFormAccess = (formId: string) => {
    if (formId === "lab-resources") {
      // For lab resources, redirect to Resources page first
      toast({
        title: "Invoice Required",
        description: "Please download your invoice from the Resources page first, then return to submit this form.",
      });
      // In a real app, you would navigate to /resources
      window.location.href = "/resources";
    } else {
      // This would navigate to the actual form or open a modal
      console.log(`Accessing form: ${formId}`);
      toast({
        title: "Form Access",
        description: "Form functionality will be available soon.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              Student's Corner
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              Your gateway to entrepreneurship resources, mentorship, and community connections
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="forms" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-12">
              <TabsTrigger value="forms">Forms & Applications</TabsTrigger>
              <TabsTrigger value="alumni">Alumni Network</TabsTrigger>
            </TabsList>

            {/* Forms Section */}
            <TabsContent value="forms">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
                  Forms & Applications
                </h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Access all the forms you need for your entrepreneurial journey at TCET EDIC
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {forms.map((form, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 group">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-4">
                          <div className={`w-12 h-12 ${form.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <form.icon className="w-6 h-6 text-white" />
                          </div>
                          <div>
                            <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">
                              {form.title}
                            </CardTitle>
                          </div>
                        </div>
                      </div>
                      <CardDescription className="mt-4 leading-relaxed">
                        {form.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-3">Form Sections:</h4>
                          <div className="grid grid-cols-1 gap-2">
                            {form.fields.map((field, i) => (
                              <div key={i} className="flex items-center text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">
                                <div className="w-2 h-2 bg-[var(--tcet-blue)] rounded-full mr-3"></div>
                                {field}
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="pt-4 border-t border-gray-200 dark:border-gray-600">
                          <Button 
                            className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700"
                            onClick={() => handleFormAccess(form.id)}
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Access Form
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Quick Stats */}
              <div className="mt-16 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
                <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6 text-center">
                  Student Engagement Stats
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--tcet-blue)] mb-2">150+</div>
                    <div className="text-[var(--tcet-dark)] dark:text-white text-sm">Registered Students</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--tcet-blue)] mb-2">45+</div>
                    <div className="text-[var(--tcet-dark)] dark:text-white text-sm">Startup Ideas Submitted</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--tcet-blue)] mb-2">80+</div>
                    <div className="text-[var(--tcet-dark)] dark:text-white text-sm">Mentorship Sessions</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[var(--tcet-blue)] mb-2">120+</div>
                    <div className="text-[var(--tcet-dark)] dark:text-white text-sm">Lab Resource Requests</div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Alumni Network */}
            <TabsContent value="alumni">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
                  Connect with Alumni
                </h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Learn from successful TCET entrepreneurs and get guidance from industry experts
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {alumniNetwork.map((alumni, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300 group">
                    <CardHeader className="text-center">
                      <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
                        <GraduationCap className="w-10 h-10 text-[var(--tcet-blue)]" />
                      </div>
                      <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white">
                        {alumni.name}
                      </CardTitle>
                      <div className="text-[var(--tcet-blue)] font-medium text-sm">
                        Batch of {alumni.batch}
                      </div>
                    </CardHeader>

                    <CardContent>
                      <div className="space-y-3 text-center">
                        <div>
                          <div className="font-semibold text-[var(--tcet-dark)] dark:text-white text-sm">
                            {alumni.position}
                          </div>
                          <div className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm">
                            {alumni.company}
                          </div>
                        </div>

                        <div className="bg-gray-50 dark:bg-gray-700 p-3 rounded-lg">
                          <div className="text-xs text-[var(--tcet-dark)]/70 dark:text-white/70 mb-1">
                            Expertise:
                          </div>
                          <div className="text-sm font-medium text-[var(--tcet-dark)] dark:text-white">
                            {alumni.expertise}
                          </div>
                        </div>

                        <Button 
                          variant="outline" 
                          className="w-full group-hover:bg-[var(--tcet-blue)] group-hover:text-white transition-colors duration-300"
                          asChild
                        >
                          <a href={alumni.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="w-4 h-4 mr-2" />
                            Connect on LinkedIn
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Alumni CTA */}
              <div className="mt-16 bg-[var(--tcet-blue)] text-white p-8 rounded-xl text-center">
                <h3 className="text-2xl font-bold mb-4">Are you a TCET Alumni?</h3>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                  Join our alumni network and help mentor the next generation of entrepreneurs at TCET EDIC.
                </p>
                <Button className="bg-white text-[var(--tcet-blue)] hover:bg-gray-100">
                  Join Alumni Network
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
}