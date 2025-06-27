import { User, Mail, Linkedin } from "lucide-react";

export default function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Amit Sharma",
      role: "Faculty Coordinator",
      department: "Computer Engineering",
      email: "amit.sharma@tcetmumbai.in",
      image: null
    },
    {
      name: "Prof. Priya Patel",
      role: "Innovation Mentor",
      department: "Information Technology",
      email: "priya.patel@tcetmumbai.in",
      image: null
    },
    {
      name: "Arjun Kumar",
      role: "President",
      department: "Final Year Computer Engineering",
      email: "arjun.kumar@student.tcetmumbai.in",
      image: null
    },
    {
      name: "Sneha Gupta",
      role: "Vice President",
      department: "Third Year Information Technology",
      email: "sneha.gupta@student.tcetmumbai.in",
      image: null
    },
    {
      name: "Rohit Singh",
      role: "Technical Head",
      department: "Final Year Computer Engineering",
      email: "rohit.singh@student.tcetmumbai.in",
      image: null
    },
    {
      name: "Ananya Verma",
      role: "Event Coordinator",
      department: "Third Year Electronics Engineering",
      email: "ananya.verma@student.tcetmumbai.in",
      image: null
    }
  ];

  return (
    <section id="team" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
            Our Team
          </h2>
          <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
            Meet the dedicated team members who drive innovation and entrepreneurship at TCET
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg text-center hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              {/* Avatar */}
              <div className="w-24 h-24 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-12 h-12 text-[var(--tcet-blue)]" />
              </div>
              
              {/* Member Info */}
              <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-2">
                {member.name}
              </h3>
              <div className="text-[var(--tcet-blue)] font-semibold mb-2">
                {member.role}
              </div>
              <div className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm mb-4">
                {member.department}
              </div>
              
              {/* Contact */}
              <div className="flex justify-center space-x-3">
                <a 
                  href={`mailto:${member.email}`}
                  className="text-[var(--tcet-dark)]/60 dark:text-white/60 hover:text-[var(--tcet-blue)] transition-colors duration-200"
                  title="Send Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
                <a 
                  href="#"
                  className="text-[var(--tcet-dark)]/60 dark:text-white/60 hover:text-[var(--tcet-blue)] transition-colors duration-200"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-[var(--tcet-blue)]/5 dark:bg-[var(--tcet-blue)]/10 p-8 rounded-lg">
            <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Want to Join Our Team?
            </h3>
            <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              We're always looking for passionate students and faculty members to join our mission of fostering entrepreneurship at TCET.
            </p>
            <button className="bg-[var(--tcet-blue)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
              Apply to Join
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}