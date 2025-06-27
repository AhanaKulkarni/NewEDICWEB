import { Mail, Phone, MapPin, Linkedin, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[var(--tcet-dark)] dark:bg-gray-800 text-white py-12 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h4 className="text-xl font-semibold mb-4 text-[var(--tcet-blue)]">TCET EDIC</h4>
            <p className="text-white/70 leading-relaxed mb-4">
              Fostering entrepreneurship and innovation among students at Thakur College of Engineering & Technology. Join us in building the next generation of innovators.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-[var(--tcet-blue)] transition-colors duration-200">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--tcet-blue)] transition-colors duration-200">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-[var(--tcet-blue)] transition-colors duration-200">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Contact Us</h5>
            <div className="space-y-3">
              <div className="flex items-center text-white/70">
                <Mail className="w-4 h-4 mr-3 text-[var(--tcet-blue)]" />
                <span className="text-sm">edic@tcetmumbai.in</span>
              </div>
              <div className="flex items-center text-white/70">
                <Phone className="w-4 h-4 mr-3 text-[var(--tcet-blue)]" />
                <span className="text-sm">+91 22 2601 1101</span>
              </div>
              <div className="flex items-start text-white/70">
                <MapPin className="w-4 h-4 mr-3 mt-0.5 text-[var(--tcet-blue)]" />
                <span className="text-sm">Thakur College of Engineering & Technology<br />A-Block, Thakur Educational Campus<br />Shyamnarayan Thakur Marg, Thakur Village<br />Kandivali East, Mumbai - 400101</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="text-lg font-semibold mb-4">Quick Links</h5>
            <div className="space-y-2">
              <a href="#about" className="block text-white/70 hover:text-[var(--tcet-blue)] transition-colors duration-200 text-sm">About EDIC</a>
              <a href="#team" className="block text-white/70 hover:text-[var(--tcet-blue)] transition-colors duration-200 text-sm">Our Team</a>
              <a href="#events" className="block text-white/70 hover:text-[var(--tcet-blue)] transition-colors duration-200 text-sm">Events & Workshops</a>
              <a href="#resources" className="block text-white/70 hover:text-[var(--tcet-blue)] transition-colors duration-200 text-sm">Resources</a>
              <a href="https://tcetmumbai.in" target="_blank" rel="noopener noreferrer" className="block text-white/70 hover:text-[var(--tcet-blue)] transition-colors duration-200 text-sm">TCET Website</a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6 text-center">
          <p className="text-white/60 text-sm">
            © 2025 TCET Entrepreneurship Development and Innovation Cell. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
