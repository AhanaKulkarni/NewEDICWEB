import { Calendar, Clock, MapPin, Users, ExternalLink } from "lucide-react";

export default function EventsSection() {
  const upcomingEvents = [
    {
      title: "Startup Pitch Competition",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "TCET Auditorium",
      description: "Present your startup ideas to industry experts and compete for exciting prizes and mentorship opportunities.",
      attendees: "50+ expected",
      status: "registration-open"
    },
    {
      title: "Entrepreneurship Workshop Series",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM", 
      location: "A-Block Seminar Hall",
      description: "Learn the fundamentals of starting a business, from idea validation to market research and business planning.",
      attendees: "30+ expected",
      status: "registration-open"
    },
    {
      title: "Industry Mentorship Meet",
      date: "April 5, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "TCET Conference Room",
      description: "Network with successful entrepreneurs and industry leaders. Get personalized guidance for your startup journey.",
      attendees: "25+ expected",
      status: "coming-soon"
    }
  ];

  const pastEvents = [
    {
      title: "Innovation Showcase 2024",
      date: "December 10, 2024",
      description: "Students presented innovative solutions to real-world problems",
      participants: "40 teams"
    },
    {
      title: "Business Plan Competition",
      date: "November 15, 2024", 
      description: "Comprehensive business plan presentations and evaluations",
      participants: "25 teams"
    },
    {
      title: "Startup Success Stories",
      date: "October 20, 2024",
      description: "Alumni entrepreneurs shared their startup journey experiences",
      participants: "100+ attendees"
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
            Events & Activities
          </h2>
          <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
            Stay updated with our upcoming events and see what we've accomplished together
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-8 text-center">Upcoming Events</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-bold text-[var(--tcet-dark)] dark:text-white">{event.title}</h4>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    event.status === 'registration-open' 
                      ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                      : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                  }`}>
                    {event.status === 'registration-open' ? 'Register Now' : 'Coming Soon'}
                  </span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-[var(--tcet-dark)]/70 dark:text-white/70">
                    <Calendar className="w-4 h-4 mr-3 text-[var(--tcet-blue)]" />
                    <span className="text-sm">{event.date}</span>
                  </div>
                  <div className="flex items-center text-[var(--tcet-dark)]/70 dark:text-white/70">
                    <Clock className="w-4 h-4 mr-3 text-[var(--tcet-blue)]" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-[var(--tcet-dark)]/70 dark:text-white/70">
                    <MapPin className="w-4 h-4 mr-3 text-[var(--tcet-blue)]" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-[var(--tcet-dark)]/70 dark:text-white/70">
                    <Users className="w-4 h-4 mr-3 text-[var(--tcet-blue)]" />
                    <span className="text-sm">{event.attendees}</span>
                  </div>
                </div>
                
                <p className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <button 
                  className={`w-full py-2 px-4 rounded-lg font-medium text-sm transition-colors duration-200 ${
                    event.status === 'registration-open' 
                      ? 'bg-[var(--tcet-blue)] text-white hover:bg-blue-700' 
                      : 'bg-gray-200 text-gray-600 dark:bg-gray-700 dark:text-gray-400 cursor-not-allowed'
                  }`}
                  disabled={event.status !== 'registration-open'}
                >
                  {event.status === 'registration-open' ? 'Register Now' : 'Registration Opens Soon'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-8 text-center">Past Events</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {pastEvents.map((event, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg">
                <h4 className="text-lg font-bold text-[var(--tcet-dark)] dark:text-white mb-2">{event.title}</h4>
                <div className="flex items-center text-[var(--tcet-dark)]/70 dark:text-white/70 mb-3">
                  <Calendar className="w-4 h-4 mr-2 text-[var(--tcet-blue)]" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <p className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-sm mb-3">
                  {event.description}
                </p>
                <div className="flex items-center text-[var(--tcet-blue)] text-sm font-medium">
                  <Users className="w-4 h-4 mr-2" />
                  {event.participants}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Resources Section */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Resources & Learning Materials</h3>
            <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-6 max-w-2xl mx-auto">
              Access comprehensive resources including startup guides, business plan templates, and educational materials
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[var(--tcet-blue)] text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center">
                <ExternalLink className="w-4 h-4 mr-2" />
                Access Resources
              </button>
              <button className="bg-gray-200 dark:bg-gray-700 text-[var(--tcet-dark)] dark:text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors duration-200">
                Download Templates
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}