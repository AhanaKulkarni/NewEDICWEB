import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, Users, Award, TrendingUp, Lightbulb, Globe, Heart } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              About TCET EDIC
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              Fostering innovation and entrepreneurship among the next generation of leaders at Thakur College of Engineering & Technology
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-[var(--tcet-blue)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Our Mission</h2>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed mb-4">
                To foster entrepreneurship and innovation among students by providing comprehensive support, mentorship, and resources that enable them to transform their ideas into viable business ventures.
              </p>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                We aim to create an ecosystem where creativity meets opportunity, empowering students to become job creators rather than job seekers.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-[var(--tcet-blue)]" />
              </div>
              <h2 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Our Vision</h2>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed mb-4">
                To become a leading entrepreneurship development center that produces innovative entrepreneurs who create sustainable businesses, generate employment, and drive technological advancement.
              </p>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                We envision a future where TCET alumni are recognized globally as successful entrepreneurs and innovation leaders.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              The principles that guide our approach to entrepreneurship education and development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
                <Lightbulb className="w-10 h-10 text-[var(--tcet-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-3">Innovation</h3>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                Encouraging creative thinking and breakthrough solutions to address real-world challenges
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
                <Users className="w-10 h-10 text-[var(--tcet-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-3">Collaboration</h3>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                Building strong partnerships between students, faculty, industry experts, and the startup ecosystem
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
                <Award className="w-10 h-10 text-[var(--tcet-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-3">Excellence</h3>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                Maintaining high standards in all our programs and supporting students to achieve their full potential
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
                <Globe className="w-10 h-10 text-[var(--tcet-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-3">Impact</h3>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                Creating meaningful change in society through sustainable business solutions and social entrepreneurship
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
                <Heart className="w-10 h-10 text-[var(--tcet-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-3">Integrity</h3>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                Upholding ethical business practices and fostering responsible entrepreneurship
              </p>
            </div>

            <div className="text-center group">
              <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
                <TrendingUp className="w-10 h-10 text-[var(--tcet-blue)]" />
              </div>
              <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-3">Growth</h3>
              <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                Continuous learning and adaptation to evolving market needs and technological advances
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70">
                Building a legacy of innovation and entrepreneurship at TCET
              </p>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--tcet-blue)] mb-4">2023 - Foundation</h3>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                  TCET EDIC was established with the vision of creating a comprehensive entrepreneurship ecosystem within the college. Starting with a small group of passionate faculty and students, we laid the foundation for what would become a thriving innovation hub.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--tcet-blue)] mb-4">2024 - Growth & Recognition</h3>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                  Expanded our programs to include regular workshops, mentorship sessions, and pitch competitions. Established partnerships with industry leaders and successfully incubated our first student startup projects. Recognized by the college administration for outstanding contribution to student development.
                </p>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-[var(--tcet-blue)] mb-4">2025 - Expansion & Impact</h3>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                  Currently working on expanding our reach to other departments and establishing stronger industry connections. Planning to launch a student-led venture fund and create more opportunities for real-world entrepreneurial experience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-[var(--tcet-blue)] text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
            <p className="text-xl text-white/90">Making a difference in the entrepreneurial landscape</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-white/90">Active Members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">25+</div>
              <div className="text-white/90">Workshops Conducted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">15+</div>
              <div className="text-white/90">Startup Ideas Developed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10+</div>
              <div className="text-white/90">Industry Mentors</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}