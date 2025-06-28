import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, TrendingUp, Users, Lightbulb, Award, BookOpen, Network, ExternalLink } from "lucide-react";
import { useState } from "react";
import RegistrationForm from "@/components/RegistrationForm";

export default function Home() {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 transition-colors duration-300">
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6 leading-tight">
                Entrepreneurship Development & Innovation Cell
              </h1>
              <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8 leading-relaxed">
                Empowering TCET students to transform innovative ideas into successful ventures through mentorship, resources, and industry connections.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button 
                  size="lg" 
                  className="bg-[var(--tcet-blue)] hover:bg-blue-700 px-8 py-4 text-lg font-semibold"
                  onClick={() => setShowRegistrationForm(true)}
                >
                  Join EDIC Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[var(--tcet-blue)] text-[var(--tcet-blue)] hover:bg-[var(--tcet-blue)] hover:text-white px-8 py-4 text-lg font-semibold"
                  onClick={() => window.location.href = "/about"}
                >
                  Learn More
                </Button>
              </div>
            </div>
            <div className="flex-1">
              <div className="relative">
                <div className="w-full h-96 bg-gradient-to-br from-[var(--tcet-blue)]/10 to-blue-100 dark:from-[var(--tcet-blue)]/20 dark:to-blue-900/30 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Lightbulb className="w-24 h-24 text-[var(--tcet-blue)] mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-2">Innovation Starts Here</h3>
                    <p className="text-[var(--tcet-dark)]/60 dark:text-white/60">Transform your ideas into reality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">50+</div>
              <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">25+</div>
              <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Workshops</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">15+</div>
              <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Startup Ideas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">10+</div>
              <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Industry Partners</div>
            </div>
          </div>
        </div>
      </section>

      {/* About TCET EDIC */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              About TCET EDIC
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-3xl mx-auto">
              Our mission is to cultivate an entrepreneurial mindset among students and provide them with the necessary tools, resources, and guidance to transform innovative ideas into successful ventures.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mb-4">
                  <Target className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-2xl text-[var(--tcet-dark)] dark:text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                  To foster entrepreneurship and innovation among students by providing comprehensive support, mentorship, and resources that enable them to transform their ideas into viable business ventures and contribute to economic growth.
                </p>
              </CardContent>
            </Card>

            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-2xl text-[var(--tcet-dark)] dark:text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                  To become a leading entrepreneurship development center that produces innovative entrepreneurs who create sustainable businesses, generate employment, and drive technological advancement in society.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Join TCET EDIC */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Why You Should Join TCET EDIC
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-3xl mx-auto">
              Discover the unique advantages and opportunities that await you as a member of our entrepreneurship community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">Expert Mentorship</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70">
                  Get guided by experienced faculty coordinators from all departments and successful alumni entrepreneurs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">Access to Resources</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70">
                  Utilize 50+ laboratory facilities with comprehensive equipment for prototyping and research
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Network className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">Industry Connections</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70">
                  Network with industry leaders through events like TCS & Capgemini Industry Connect and CEO Talks
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">Competition Opportunities</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70">
                  Participate in Ideathons, Startup Days, and various innovation competitions with prizes and recognition
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">Innovation Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70">
                  From idea validation to prototype development, get comprehensive support for your innovative projects
                </p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">Skill Development</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70">
                  Enhance your leadership, business, and technical skills through workshops and hands-on experiences
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-[var(--tcet-blue)]/10 to-blue-100 dark:from-[var(--tcet-blue)]/20 dark:to-blue-900/30 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
                Ready to Start Your Entrepreneurial Journey?
              </h3>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
                Join TCET EDIC today and become part of a community that transforms ideas into successful ventures. Your innovation journey starts here!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-[var(--tcet-blue)] hover:bg-blue-700 px-8 py-4 font-semibold"
                  onClick={() => setShowRegistrationForm(true)}
                >
                  Join EDIC Now
                  <ExternalLink className="w-4 h-4 ml-2" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-[var(--tcet-blue)] text-[var(--tcet-blue)] hover:bg-[var(--tcet-blue)] hover:text-white px-8 py-4 font-semibold"
                  onClick={() => window.location.href = "/contact"}
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <RegistrationForm 
        isOpen={showRegistrationForm}
        onClose={() => setShowRegistrationForm(false)}
      />
    </div>
  );
}