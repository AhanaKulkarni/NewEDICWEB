import { CheckCircle, Users, Star, Lightbulb, Trophy, BookOpen } from "lucide-react";

export default function QuickInfo() {
  return (
    <section id="quick-info" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
            Why Join TCET EDIC?
          </h2>
          <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
            Discover the benefits of being part of our entrepreneurship ecosystem
          </p>
        </div>

        {/* Main Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
              <CheckCircle className="w-10 h-10 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--tcet-dark)] dark:text-white mb-3">Innovation Support</h3>
            <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">Comprehensive platform for idea development and startup incubation with hands-on guidance</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
              <Users className="w-10 h-10 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--tcet-dark)] dark:text-white mb-3">Expert Mentorship</h3>
            <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">Connect with experienced faculty and industry professionals who guide your entrepreneurial journey</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
              <Star className="w-10 h-10 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-xl font-semibold text-[var(--tcet-dark)] dark:text-white mb-3">Educational Resources</h3>
            <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">Access workshops, training programs, and comprehensive learning materials for entrepreneurs</p>
          </div>
        </div>

        {/* Additional Features */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
              <Lightbulb className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h4 className="text-lg font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Idea Incubation</h4>
            <p className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm">Transform your innovative ideas into viable business models</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
              <Trophy className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h4 className="text-lg font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Competitions</h4>
            <p className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm">Participate in startup competitions and pitch events</p>
          </div>

          <div className="text-center group hover:transform hover:scale-105 transition-all duration-300">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[var(--tcet-blue)]/20 dark:group-hover:bg-[var(--tcet-blue)]/30 transition-colors duration-300">
              <BookOpen className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h4 className="text-lg font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Learning Hub</h4>
            <p className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm">Continuous learning through workshops and skill development</p>
          </div>
        </div>
      </div>
    </section>
  );
}
