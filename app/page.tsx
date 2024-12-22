'use client'
import { AnimatedPinDemo } from "@/components/AnimatedPinDemo";
import { BentoGridThirdDemo } from "@/components/BentoGridThirdDemo";
import { CodeBlockDemo } from "@/components/CodeBlockDemo";
import { FloatingNavDemo } from "@/components/FloatingNavDemo";
import Footer from "@/components/Footer";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import { AnimatedTestimonialsDemo } from "@/components/Testimonial";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const body = document.body;

      if (scrollPosition > 100) {
        body.classList.add('bg-custom-dark');
        body.classList.remove('bg-custom-light');
      } else {
        body.classList.add('bg-custom-light');
        body.classList.remove('bg-custom-dark');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <>
      <FloatingNavDemo />

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
    </>
  );
}
