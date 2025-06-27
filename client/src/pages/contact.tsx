import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, User, Building } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        category: '',
        message: ''
      });
    }, 1500);
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      primary: "edic@tcetmumbai.in",
      secondary: "info@tcetmumbai.in",
      description: "Get in touch via email for any queries or support"
    },
    {
      icon: Phone,
      title: "Call Us",
      primary: "+91 22 2601 1101",
      secondary: "+91 22 2601 1102",
      description: "Reach us during office hours for immediate assistance"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      primary: "A-Block, Thakur Educational Campus",
      secondary: "Kandivali East, Mumbai - 400101",
      description: "Drop by our office for face-to-face consultations"
    },
    {
      icon: Clock,
      title: "Office Hours",
      primary: "Monday - Friday: 9:00 AM - 6:00 PM",
      secondary: "Saturday: 9:00 AM - 1:00 PM",
      description: "We're here to help during these hours"
    }
  ];

  const teamContacts = [
    {
      name: "Dr. Amit Sharma",
      role: "Faculty Coordinator",
      email: "amit.sharma@tcetmumbai.in",
      specialization: "Startup Mentoring & Technology Innovation",
      availability: "Mon-Fri 10:00 AM - 4:00 PM"
    },
    {
      name: "Arjun Kumar", 
      role: "Student President",
      email: "arjun.kumar@student.tcetmumbai.in",
      specialization: "Student Queries & Event Coordination",
      availability: "Mon-Fri 2:00 PM - 6:00 PM"
    },
    {
      name: "Sneha Gupta",
      role: "Vice President",
      email: "sneha.gupta@student.tcetmumbai.in", 
      specialization: "Workshop Organization & Partnerships",
      availability: "Tue, Thu, Sat 11:00 AM - 3:00 PM"
    }
  ];

  const faqs = [
    {
      question: "How can I join TCET EDIC?",
      answer: "You can join by filling out our registration form on the homepage or attending our orientation sessions held every month."
    },
    {
      question: "What support do you provide for startups?",
      answer: "We offer mentorship, workspace, funding guidance, networking opportunities, and technical support for developing your business ideas."
    },
    {
      question: "Are there any fees to join EDIC?",
      answer: "No, membership is completely free for all TCET students. We also provide free access to workshops and events."
    },
    {
      question: "Can alumni participate in EDIC activities?",
      answer: "Yes! Alumni are welcome to join as mentors, speakers, or advisors. We also have special alumni networking events."
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
              Get in Touch
            </h1>
            <p className="text-xl text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
              Have questions about entrepreneurship, need guidance for your startup, or want to join our community? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <info.icon className="w-8 h-8 text-[var(--tcet-blue)]" />
                  </div>
                  <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white">
                    {info.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="font-semibold text-[var(--tcet-dark)] dark:text-white text-sm">
                      {info.primary}
                    </div>
                    <div className="text-[var(--tcet-dark)]/70 dark:text-white/70 text-sm">
                      {info.secondary}
                    </div>
                    <div className="text-[var(--tcet-dark)]/60 dark:text-white/60 text-xs">
                      {info.description}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl text-[var(--tcet-dark)] dark:text-white flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-[var(--tcet-blue)]" />
                    Send us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                          placeholder="+91 12345 67890"
                        />
                      </div>
                      <div>
                        <Label htmlFor="category">Category *</Label>
                        <Select value={formData.category} onValueChange={(value) => handleChange('category', value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select category" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="membership">Membership</SelectItem>
                            <SelectItem value="mentorship">Mentorship</SelectItem>
                            <SelectItem value="events">Events & Workshops</SelectItem>
                            <SelectItem value="partnerships">Partnerships</SelectItem>
                            <SelectItem value="media">Media & Press</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="subject">Subject *</Label>
                      <Input
                        id="subject"
                        type="text"
                        required
                        value={formData.subject}
                        onChange={(e) => handleChange('subject', e.target.value)}
                        placeholder="Brief subject of your message"
                      />
                    </div>

                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        required
                        value={formData.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Map and Location */}
            <div className="space-y-6">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white flex items-center">
                    <MapPin className="w-5 h-5 mr-2 text-[var(--tcet-blue)]" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-100 dark:bg-gray-700 h-64 rounded-lg flex items-center justify-center mb-4">
                    <div className="text-center text-[var(--tcet-dark)]/60 dark:text-white/60">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive Map</p>
                      <p className="text-sm">Thakur Educational Campus</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <Building className="w-4 h-4 mr-2 mt-0.5 text-[var(--tcet-blue)]" />
                      <div>
                        <div className="font-medium text-[var(--tcet-dark)] dark:text-white">
                          Thakur College of Engineering & Technology
                        </div>
                        <div className="text-[var(--tcet-dark)]/70 dark:text-white/70">
                          A-Block, Thakur Educational Campus<br />
                          Shyamnarayan Thakur Marg, Thakur Village<br />
                          Kandivali East, Mumbai - 400101, Maharashtra
                        </div>
                      </div>
                    </div>
                  </div>
                  <Button className="w-full mt-4" variant="outline">
                    Get Directions
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl text-[var(--tcet-dark)] dark:text-white">
                    Need Immediate Help?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-green-700 dark:text-green-300">WhatsApp Support</div>
                        <div className="text-sm text-green-600 dark:text-green-400">Instant responses</div>
                      </div>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">
                        Chat Now
                      </Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div>
                        <div className="font-medium text-blue-700 dark:text-blue-300">Schedule a Meeting</div>
                        <div className="text-sm text-blue-600 dark:text-blue-400">Book consultation</div>
                      </div>
                      <Button size="sm" variant="outline">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Contacts */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Direct Team Contacts
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Reach out directly to our team members for specific queries and support
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {teamContacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="w-16 h-16 bg-[var(--tcet-blue)]/10 dark:bg-[var(--tcet-blue)]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <User className="w-8 h-8 text-[var(--tcet-blue)]" />
                  </div>
                  <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white">
                    {contact.name}
                  </CardTitle>
                  <CardDescription className="text-[var(--tcet-blue)] font-medium">
                    {contact.role}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-[var(--tcet-dark)]/70 dark:text-white/70">
                      <strong>Specialization:</strong><br />
                      {contact.specialization}
                    </div>
                    <div className="text-sm text-[var(--tcet-dark)]/60 dark:text-white/60">
                      <strong>Available:</strong><br />
                      {contact.availability}
                    </div>
                    <Button 
                      className="w-full bg-[var(--tcet-blue)] hover:bg-blue-700"
                      asChild
                    >
                      <a href={`mailto:${contact.email}`}>
                        <Mail className="w-4 h-4 mr-2" />
                        Email {contact.name.split(' ')[0]}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--tcet-dark)] dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[var(--tcet-dark)]/70 dark:text-white/70 max-w-2xl mx-auto">
              Quick answers to common questions about TCET EDIC
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-lg text-[var(--tcet-dark)] dark:text-white">
                    {faq.question}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-[var(--tcet-dark)]/70 dark:text-white/70 leading-relaxed">
                    {faq.answer}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-[var(--tcet-dark)]/60 dark:text-white/60 mb-4">
              Don't see your question here?
            </p>
            <Button variant="outline" className="px-8">
              View All FAQs
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}