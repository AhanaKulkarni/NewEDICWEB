import { Target, Users, Award, TrendingUp } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
            About TCET EDIC
          </h2>
          <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-3xl mx-auto">
            Our mission is to cultivate an entrepreneurial mindset among students and provide them with the necessary tools, resources, and guidance to transform innovative ideas into successful ventures.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Our Mission</h3>
            <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              To foster entrepreneurship and innovation among students by providing comprehensive support, mentorship, and resources that enable them to transform their ideas into viable business ventures and contribute to economic growth.
            </p>
          </div>

          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Our Vision</h3>
            <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              To become a leading entrepreneurship development center that produces innovative entrepreneurs who create sustainable businesses, generate employment, and drive technological advancement in society.
            </p>
          </div>
        </div>

        {/* Key Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">50+</div>
            <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Active Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">25+</div>
            <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Workshops Conducted</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">15+</div>
            <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Startup Ideas</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-[var(--tcet-blue)] mb-2">10+</div>
            <div className="text-[var(--tcet-dark)] dark:text-white font-medium">Industry Mentors</div>
          </div>
        </div>

        {/* What We Offer */}
        <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6 text-center">What We Offer</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-[var(--tcet-blue)]" />
              </div>
              <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Incubation Support</h4>
              <p className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">End-to-end support for startup development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-[var(--tcet-blue)]" />
              </div>
              <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Skill Development</h4>
              <p className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">Workshops and training programs</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-[var(--tcet-blue)]" />
              </div>
              <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Networking</h4>
              <p className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">Connect with peers and industry experts</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}