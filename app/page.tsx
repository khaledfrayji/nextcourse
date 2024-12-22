import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";
import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo";
import Chatbot from "@/components/Chatbot";
import { CodeBlockDemo } from "@/components/CodeBlockDemo";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";

export default function Home() {
  return (
    <>
      <Navbar />
      <div id="home">
        <SpotlightPreview />
      </div>

      <div id="about">
        <BentoGridThirdDemo />
      </div>

      <div id="projects">
        <AnimatedPinDemo />
      </div>

      <div id="experience">
        <CodeBlockDemo />
      </div>

      <div id="testimonial">
        <AnimatedTestimonialsDemo />
      </div>
      <div id="contact">
        <Footer />
      </div>
      <Chatbot />
    </>
  );
}
