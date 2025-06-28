import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import AboutSection from "@/components/AboutSection";
import TeamSection from "@/components/TeamSection";
import EventsSection from "@/components/EventsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header />
      <Hero />
      <QuickInfo />
      <AboutSection />
      <TeamSection />
      <EventsSection />
      <Footer />
    </div>
  );
}
