import { ChevronDown, Shield } from "lucide-react";
import teamPhotoPath from "@assets/WhatsApp Image 2025-06-27 at 23.43.51_001b3ada_1751048055531.jpg";

export default function Hero() {
  const handleScrollToInfo = () => {
    const element = document.querySelector('#quick-info');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const handleJoinEDIC = () => {
    // TODO: Navigate to registration/application form
    console.log('Join EDIC clicked');
  };

  const handleLearnMore = () => {
    // TODO: Scroll to about section or navigate to detailed info
    const element = document.querySelector('#quick-info');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <main 
      className="hero-bg min-h-screen flex items-center justify-center relative bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(${teamPhotoPath})`
      }}
    >
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Institution Logo/Badge */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-[var(--tcet-blue)]/10 rounded-full mb-6">
              <Shield className="w-10 h-10 text-[var(--tcet-blue)]" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--tcet-dark)] mb-6 leading-tight">
            TCET's Entrepreneurship<br />
            <span className="text-[var(--tcet-blue)]">Development and Innovation Cell</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-[var(--tcet-dark)]/80 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
            Empowering student entrepreneurs at Thakur College of Engineering & Technology through innovation, mentorship, and comprehensive support
          </p>

          {/* Institution Badge */}
          <div className="inline-flex items-center bg-white/90 rounded-full px-6 py-3 shadow-lg backdrop-blur-sm mb-12">
            <span className="text-[var(--tcet-dark)] font-medium">Thakur College of Engineering & Technology</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleJoinEDIC}
              className="bg-[var(--tcet-blue)] text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 shadow-lg"
            >
              Join EDIC
            </button>
            <button 
              onClick={handleLearnMore}
              className="bg-white/90 text-[var(--tcet-dark)] px-8 py-4 rounded-lg font-semibold hover:bg-white transition-colors duration-200 shadow-lg backdrop-blur-sm"
            >
              Learn More
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button onClick={handleScrollToInfo}>
          <ChevronDown className="w-6 h-6 text-[var(--tcet-dark)]/60" />
        </button>
      </div>
    </main>
  );
}
