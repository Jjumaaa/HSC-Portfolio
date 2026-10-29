import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HSCRecognition from "@/components/HSCRecognition";
import Biography from "@/components/Biography";
import Achievements from "@/components/Achievements";
import Timeline from "@/components/Timeline";
import Gallery from "@/components/Gallery";
import Documents from "@/components/Documents";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main" tabIndex={-1} className="focus:outline-none">
        <Hero />
        <HSCRecognition />
        <Biography />
        <Achievements />
        <Timeline />
        <Gallery />
        <Documents />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
