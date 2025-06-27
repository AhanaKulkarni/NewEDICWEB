import { CheckCircle, Users, Star } from "lucide-react";

export default function QuickInfo() {
  return (
    <section id="quick-info" className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--tcet-dark)] mb-2">Innovation Support</h3>
            <p className="text-[var(--tcet-dark)]/70">Comprehensive platform for idea development and startup incubation</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--tcet-dark)] mb-2">Expert Mentorship</h3>
            <p className="text-[var(--tcet-dark)]/70">Connect with experienced faculty and industry professionals</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-[var(--tcet-blue)]" />
            </div>
            <h3 className="text-lg font-semibold text-[var(--tcet-dark)] mb-2">Educational Resources</h3>
            <p className="text-[var(--tcet-dark)]/70">Access workshops, training programs, and learning materials</p>
          </div>
        </div>
      </div>
    </section>
  );
}
