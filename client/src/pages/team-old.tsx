import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { User, Mail, Linkedin, Github, Award, Calendar, Users as UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Team() {
  const facultyCoordinators = [
    {
      name: "Dr. Sukruti Kaulgud",
      role: "Faculty Head - EDIC",
      department: "Computer Engineering",
      specialization: "Innovation Management, Startup Ecosystem Development",
      email: "sukruti.kaulgud@tcetmumbai.in"
    },
    {
      name: "Dr. Vinitkumar Dongre", 
      role: "Dean R&D",
      department: "Research & Development",
      specialization: "Research Strategy, Innovation Policy, Technology Transfer",
      email: "vinitkumar.dongre@tcetmumbai.in"
    },
    {
      name: "Prof. Ashish Shirke",
      role: "Faculty Mentor",
      department: "Information Technology",
      specialization: "Software Development, Mentorship Programs",
      email: "ashish.shirke@tcetmumbai.in"
    },
    {
      name: "Dr. Rahul Deshmukh",
      role: "Faculty Coordinator",
      department: "Electronics & Telecommunication",
      specialization: "IoT, Embedded Systems, Hardware Innovation",
      email: "rahul.deshmukh@tcetmumbai.in"
    },
    {
      name: "Prof. Neha Srivastava",
      role: "Faculty Coordinator",
      department: "Computer Engineering",
      specialization: "Data Science, Machine Learning Applications",
      email: "neha.srivastava@tcetmumbai.in"
    },
    {
      name: "Dr. Vijay Katkar",
      role: "Faculty Coordinator",
      department: "Mechanical Engineering",
      specialization: "Product Design, Manufacturing Innovation",
      email: "vijay.katkar@tcetmumbai.in"
    },
    {
      name: "Prof. Anjali Patil",
      role: "Faculty Coordinator",
      department: "Civil Engineering",
      specialization: "Sustainable Technology, Green Innovation",
      email: "anjali.patil@tcetmumbai.in"
    },
    {
      name: "Dr. Rajesh Thakur",
      role: "Faculty Coordinator",
      department: "Chemical Engineering",
      specialization: "Process Innovation, Industrial Applications",
      email: "rajesh.thakur@tcetmumbai.in"
    },
    {
      name: "Prof. Pooja Sharma",
      role: "Faculty Coordinator",
      department: "Information Technology",
      specialization: "Web Technologies, Digital Innovation",
      email: "pooja.sharma@tcetmumbai.in"
    },
    {
      name: "Dr. Manoj Kumar",
      role: "Faculty Coordinator",
      department: "Electronics & Communication",
      specialization: "Communication Systems, Technology Transfer",
      email: "manoj.kumar@tcetmumbai.in"
    },
    {
      name: "Prof. Sanjay Gupta",
      role: "Faculty Coordinator",
      department: "Automobile Engineering",
      specialization: "Automotive Innovation, Sustainable Mobility",
      email: "sanjay.gupta@tcetmumbai.in"
    },
    {
      name: "Dr. Kavita Jain",
      role: "Faculty Coordinator",
      department: "Biomedical Engineering",
      specialization: "Healthcare Technology, Medical Device Innovation",
      email: "kavita.jain@tcetmumbai.in"
    }
  ];

  const coreTeam = [
    {
      name: "Ayush Pardeshi",
      role: "CEO",
      year: "Final Year",
      branch: "Computer Engineering",
      skills: ["Leadership", "Strategic Planning", "Innovation Management"],
      email: "ayush.pardeshi@student.tcetmumbai.in",
      projects: ["EDIC Digital Platform", "Startup Incubation Program", "Industry Partnership Initiative"]
    },
    {
      name: "Shreya Malik",
      role: "CTO",
      year: "Final Year",
      branch: "Information Technology",
      skills: ["Technology Strategy", "Software Architecture", "Team Leadership"],
      email: "shreya.malik@student.tcetmumbai.in",
      projects: ["EDIC Web Portal", "Resource Management System", "Innovation Tracking Platform"]
    },
    {
      name: "Rohan Desai",
      role: "COO",
      year: "Third Year",
      branch: "Computer Engineering",
      skills: ["Operations Management", "Process Optimization", "Event Coordination"],
      email: "rohan.desai@student.tcetmumbai.in",
      projects: ["Event Management System", "Resource Allocation Platform", "Operations Dashboard"]
    },
    {
      name: "Priya Shah",
      role: "CMO",
      year: "Third Year",
      branch: "Electronics & Telecommunication",
      skills: ["Marketing Strategy", "Brand Management", "Digital Marketing"],
      email: "priya.shah@student.tcetmumbai.in",
      projects: ["EDIC Brand Campaign", "Social Media Strategy", "Outreach Programs"]
    },
    {
      name: "Arjun Patil",
      role: "Head of Innovation",
      year: "Final Year",
      branch: "Mechanical Engineering",
      skills: ["Product Development", "Design Thinking", "Research & Development"],
      email: "arjun.patil@student.tcetmumbai.in",
      projects: ["Innovation Lab Setup", "Prototype Development", "Design Thinking Workshops"]
    },
    {
      name: "Kavya Nair",
      role: "Head of Partnerships",
      year: "Third Year",
      branch: "Information Technology",
      skills: ["Business Development", "Stakeholder Management", "Communication"],
      email: "kavya.nair@student.tcetmumbai.in",
      projects: ["Industry Partnerships", "Alumni Network", "Mentorship Program"]
    },
    {
      name: "Siddharth Kumar",
      role: "Finance Head",
      year: "Second Year",
      branch: "Computer Engineering",
      skills: ["Financial Planning", "Budget Management", "Analytics"],
      email: "siddharth.kumar@student.tcetmumbai.in",
      projects: ["Budget Tracking System", "Financial Reports", "Resource Planning"]
    },
    {
      name: "Ananya Joshi",
      role: "Events Head",
      year: "Second Year",
      branch: "Electronics & Communication",
      skills: ["Event Planning", "Project Management", "Team Coordination"],
      email: "ananya.joshi@student.tcetmumbai.in",
      projects: ["Startup Day", "Innovation Showcase", "Workshop Series"]
    }
  ];

  const achievements = [
    {
      title: "Best Innovation Cell Award",
      year: "2024",
      description: "Recognized by Mumbai University for outstanding contribution to student entrepreneurship"
    },
    {
      title: "Successful Startup Incubation",
      year: "2024", 
      description: "3 student startups successfully launched with external funding"
    },
    {
      title: "Industry Partnership Excellence",
      year: "2024",
      description: "Established partnerships with 10+ leading companies for mentorship and internships"
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
              Meet Our Team
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              Passionate individuals dedicated to fostering innovation and entrepreneurship at TCET
            </p>
          </div>
        </div>
      </section>

      {/* Faculty Coordinators */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Faculty Coordinators
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Dedicated faculty members from all departments supporting student entrepreneurship
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {facultyCoordinators.map((coordinator, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-12 h-12 text-[var(--tcet-blue)]" />
                  </div>
                  <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-2">{advisor.name}</h3>
                  <div className="text-[var(--tcet-blue)] font-semibold mb-1">{advisor.role}</div>
                  <div className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm">{advisor.department}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-1">Education</h4>
                    <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">{advisor.education}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-1">Experience</h4>
                    <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">{advisor.experience}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-1">Specialization</h4>
                    <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">{advisor.specialization}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Key Achievements</h4>
                    <ul className="space-y-1">
                      {advisor.achievements.map((achievement, i) => (
                        <li key={i} className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm flex items-start">
                          <Award className="w-3 h-3 text-[var(--tcet-blue)] mr-2 mt-1 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-600">
                  <a 
                    href={`mailto:${advisor.email}`}
                    className="flex items-center justify-center text-[var(--tcet-blue)] hover:text-blue-700 transition-colors duration-200"
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Core Team Members
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Student leaders driving innovation and entrepreneurship initiatives
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {coreTeam.map((member, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="text-center mb-6">
                  <div className="w-20 h-20 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-10 h-10 text-[var(--tcet-blue)]" />
                  </div>
                  <h3 className="text-lg font-bold text-[var(--tcet-dark)] dark:text-white mb-1">{member.name}</h3>
                  <div className="text-[var(--tcet-blue)] font-semibold mb-1">{member.role}</div>
                  <div className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm">{member.year} • {member.department}</div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, i) => (
                        <span key={i} className="px-3 py-1 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 text-[var(--tcet-blue)] rounded-full text-xs font-medium">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Notable Projects</h4>
                    <ul className="space-y-1">
                      {member.projects.map((project, i) => (
                        <li key={i} className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">
                          • {project}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600 flex justify-center space-x-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="text-[var(--tcet-dark)]/60 dark:text-white/60 hover:text-[var(--tcet-blue)] transition-colors duration-200"
                    title="Send Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                  {member.github && (
                    <a 
                      href={`https://github.com/${member.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--tcet-dark)]/60 dark:text-white/60 hover:text-[var(--tcet-blue)] transition-colors duration-200"
                      title="GitHub Profile"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
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
        </div>
      </section>

      {/* Team Achievements */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Team Achievements
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Recognizing our collective success and impact
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="w-8 h-8 text-[var(--tcet-blue)]" />
                </div>
                <h3 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white mb-2">{achievement.title}</h3>
                <div className="text-[var(--tcet-blue)] font-semibold mb-4">{achievement.year}</div>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Team CTA */}
      <section className="py-20 bg-[var(--tcet-blue)] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <UsersIcon className="w-16 h-16 mx-auto mb-6 text-white/90" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              We're always looking for passionate students and faculty members who share our vision of fostering entrepreneurship and innovation at TCET.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-white text-[var(--tcet-blue)] hover:bg-gray-100 px-8 py-3 font-semibold">
                Apply to Join
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[var(--tcet-blue)] px-8 py-3 font-semibold">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}