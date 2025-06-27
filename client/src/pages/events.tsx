import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, Clock, MapPin, Users, ExternalLink, Award, Star, Filter, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Events() {
  const upcomingEvents = [
    {
      id: 1,
      title: "Startup Pitch Competition 2025",
      date: "March 15, 2025",
      time: "10:00 AM - 4:00 PM",
      location: "TCET Auditorium",
      description: "Present your startup ideas to industry experts and compete for exciting prizes and mentorship opportunities. Top 3 teams will receive funding support and 6-month incubation.",
      attendees: "50+ expected",
      status: "registration-open",
      category: "Competition",
      registrationDeadline: "March 10, 2025",
      prizes: ["₹50,000 Cash Prize", "6-month Incubation", "Mentorship Program"],
      speakers: ["Mr. Rajesh Kumar (Angel Investor)", "Ms. Priya Shah (Startup Founder)", "Dr. Amit Verma (TCET)"],
      featured: true
    },
    {
      id: 2,
      title: "Entrepreneurship Workshop Series",
      date: "March 22, 2025",
      time: "2:00 PM - 5:00 PM",
      location: "A-Block Seminar Hall",
      description: "Learn the fundamentals of starting a business, from idea validation to market research and business planning. Interactive sessions with real-world case studies.",
      attendees: "30+ expected",
      status: "registration-open",
      category: "Workshop",
      registrationDeadline: "March 20, 2025",
      topics: ["Idea Validation", "Market Research", "Business Model Canvas", "Financial Planning"],
      prerequisites: "None - Open to all students"
    },
    {
      id: 3,
      title: "Industry Mentorship Meet",
      date: "April 5, 2025",
      time: "11:00 AM - 1:00 PM",
      location: "TCET Conference Room",
      description: "Network with successful entrepreneurs and industry leaders. Get personalized guidance for your startup journey through one-on-one mentoring sessions.",
      attendees: "25+ expected",
      status: "coming-soon",
      category: "Networking",
      registrationDeadline: "April 1, 2025",
      mentors: ["Tech Industry Leaders", "Successful Entrepreneurs", "Venture Capitalists"],
      format: "Speed Mentoring + Panel Discussion"
    },
    {
      id: 4,
      title: "Product Development Bootcamp",
      date: "April 18, 2025",
      time: "9:00 AM - 6:00 PM",
      location: "Innovation Lab, B-Block",
      description: "Intensive hands-on bootcamp covering product development lifecycle, prototyping, and user experience design. Build a working prototype by the end of the day.",
      attendees: "20+ expected",
      status: "coming-soon",
      category: "Bootcamp",
      registrationDeadline: "April 15, 2025",
      tools: ["Figma", "Arduino", "3D Printing", "Mobile App Development"],
      duration: "1 Full Day"
    }
  ];

  const pastEvents = [
    {
      title: "Innovation Showcase 2024",
      date: "December 10, 2024",
      description: "Students presented innovative solutions to real-world problems with industry judges providing feedback",
      participants: "40 teams participated",
      highlights: ["Best Innovation Award", "Audience Choice Award", "Industry Partnership Offers"],
      images: 15,
      feedback: "4.8/5 average rating"
    },
    {
      title: "Business Plan Competition",
      date: "November 15, 2024",
      description: "Comprehensive business plan presentations and evaluations with detailed feedback from expert judges",
      participants: "25 teams participated",
      highlights: ["₹25,000 Prize Pool", "Incubation Offers", "Investor Meetings"],
      images: 20,
      feedback: "4.9/5 average rating"
    },
    {
      title: "Startup Success Stories",
      date: "October 20, 2024",
      description: "Alumni entrepreneurs shared their startup journey experiences, challenges, and success strategies",
      participants: "100+ attendees",
      highlights: ["5 Alumni Speakers", "Q&A Sessions", "Networking Lunch"],
      images: 30,
      feedback: "4.7/5 average rating"
    },
    {
      title: "Tech Innovation Workshop",
      date: "September 25, 2024",
      description: "Deep dive into emerging technologies and their application in solving business problems",
      participants: "35 participants",
      highlights: ["AI/ML Workshop", "Blockchain Demo", "IoT Projects"],
      images: 12,
      feedback: "4.6/5 average rating"
    }
  ];

  const eventCategories = [
    { name: "All", count: upcomingEvents.length },
    { name: "Competition", count: upcomingEvents.filter(e => e.category === "Competition").length },
    { name: "Workshop", count: upcomingEvents.filter(e => e.category === "Workshop").length },
    { name: "Networking", count: upcomingEvents.filter(e => e.category === "Networking").length },
    { name: "Bootcamp", count: upcomingEvents.filter(e => e.category === "Bootcamp").length }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--tcet-dark)] dark:text-white mb-6">
              Events & Activities
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed mb-8">
              Join our exciting events designed to boost your entrepreneurial journey and connect with like-minded innovators
            </p>
            
            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  placeholder="Search events..." 
                  className="pl-10 py-3 bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                />
              </div>
              <Button variant="outline" className="px-6 py-3">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <Tabs defaultValue="upcoming" className="max-w-7xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="upcoming">Upcoming Events</TabsTrigger>
              <TabsTrigger value="past">Past Events</TabsTrigger>
              <TabsTrigger value="calendar">Event Calendar</TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-4 mb-8">
                {eventCategories.map((category, index) => (
                  <Badge 
                    key={index} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-[var(--tcet-blue)] hover:text-white transition-colors duration-200"
                  >
                    {category.name} ({category.count})
                  </Badge>
                ))}
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {upcomingEvents.map((event, index) => (
                  <Card key={index} className={`hover:shadow-xl transition-all duration-300 ${event.featured ? 'ring-2 ring-[var(--tcet-blue)] ring-opacity-50' : ''}`}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge className={`${
                              event.status === 'registration-open' 
                                ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300' 
                                : 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
                            }`}>
                              {event.status === 'registration-open' ? 'Registration Open' : 'Coming Soon'}
                            </Badge>
                            <Badge variant="outline">{event.category}</Badge>
                            {event.featured && (
                              <Badge className="bg-[var(--tcet-blue)] text-white">
                                <Star className="w-3 h-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white mb-2">
                            {event.title}
                          </CardTitle>
                        </div>
                      </div>
                      
                      <div className="space-y-2 mb-4">
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
                      
                      <CardDescription className="leading-relaxed">
                        {event.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      {/* Event Details */}
                      <div className="space-y-4 mb-6">
                        {event.prizes && (
                          <div>
                            <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Prizes & Benefits:</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.prizes.map((prize, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  🏆 {prize}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {event.topics && (
                          <div>
                            <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Topics Covered:</h4>
                            <div className="flex flex-wrap gap-2">
                              {event.topics.map((topic, i) => (
                                <Badge key={i} variant="outline" className="text-xs">
                                  {topic}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}

                        {event.speakers && (
                          <div>
                            <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Speakers:</h4>
                            <ul className="space-y-1">
                              {event.speakers.map((speaker, i) => (
                                <li key={i} className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">
                                  • {speaker}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      <div className="border-t border-gray-200 dark:border-gray-600 pt-4">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                            Registration Deadline: {event.registrationDeadline}
                          </div>
                        </div>
                        
                        <div className="flex gap-3">
                          <Button 
                            className={`flex-1 ${
                              event.status === 'registration-open' 
                                ? 'bg-[var(--tcet-blue)] hover:bg-blue-700' 
                                : 'bg-gray-400 cursor-not-allowed'
                            }`}
                            disabled={event.status !== 'registration-open'}
                          >
                            {event.status === 'registration-open' ? 'Register Now' : 'Registration Opens Soon'}
                          </Button>
                          <Button variant="outline">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Details
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">Past Events Gallery</h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8">
                  Highlights from our successful events and the impact they've made
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {pastEvents.map((event, index) => (
                  <Card key={index} className="hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white mb-2">
                            {event.title}
                          </CardTitle>
                          <div className="flex items-center text-[var(--tcet-dark)]/70 dark:text-white/70 mb-2">
                            <Calendar className="w-4 h-4 mr-2 text-[var(--tcet-blue)]" />
                            <span className="text-sm">{event.date}</span>
                          </div>
                        </div>
                        <Award className="w-6 h-6 text-[var(--tcet-blue)]" />
                      </div>
                      <CardDescription>{event.description}</CardDescription>
                    </CardHeader>
                    
                    <CardContent>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-[var(--tcet-blue)] font-medium">
                            <Users className="w-4 h-4 inline mr-1" />
                            {event.participants}
                          </span>
                          <span className="text-[var(--tcet-dark)]/60 dark:text-white/60">
                            ⭐ {event.feedback}
                          </span>
                        </div>

                        <div>
                          <h4 className="font-semibold text-[var(--tcet-dark)] dark:text-white mb-2">Event Highlights:</h4>
                          <div className="flex flex-wrap gap-2">
                            {event.highlights.map((highlight, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                ✨ {highlight}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-gray-200 dark:border-gray-600">
                          <span className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                            📸 {event.images} photos available
                          </span>
                          <Button variant="outline" size="sm">
                            View Gallery
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Event Calendar */}
            <TabsContent value="calendar">
              <div className="text-center py-20">
                <Calendar className="w-24 h-24 mx-auto mb-6 text-[var(--tcet-blue)]" />
                <h2 className="text-3xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
                  Interactive Event Calendar
                </h2>
                <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 mb-8 max-w-2xl mx-auto">
                  View all upcoming events in calendar format, set reminders, and sync with your personal calendar.
                </p>
                <Button className="bg-[var(--tcet-blue)] hover:bg-blue-700">
                  Launch Calendar View
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-[var(--tcet-blue)] text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Never Miss an Event</h2>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Subscribe to our newsletter and get notified about upcoming events, workshops, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 bg-white text-gray-900 border-0"
              />
              <Button className="bg-white text-[var(--tcet-blue)] hover:bg-gray-100 px-8 font-semibold">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}