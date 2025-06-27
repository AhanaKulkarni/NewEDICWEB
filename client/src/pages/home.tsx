import Header from "@/components/Header";
import Hero from "@/components/Hero";
import QuickInfo from "@/components/QuickInfo";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <QuickInfo />
      <Footer />
    </div>
  );
}
