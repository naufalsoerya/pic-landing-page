"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import Feature from "@/components/Features";
import WhyUs from "@/components/WhyUs";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import { AnimateIn } from "@/components/ui/animate-in";

export default function Home() {
  return (
    <>
      <AnimateIn variant="fade-up">
        <Hero />
      </AnimateIn>
      <AnimateIn variant="fade-up">
        <AboutSection />
      </AnimateIn>
      <AnimateIn variant="fade-up">
        <Feature />
      </AnimateIn>
      <AnimateIn variant="fade-up">
        <WhyUs />
      </AnimateIn>
      <AnimateIn variant="fade-up">
        <Testimonial />
      </AnimateIn>
      <AnimateIn variant="fade-up">
        <CTA />
      </AnimateIn>
      <AnimateIn variant="fade-up">
        <FAQ />
      </AnimateIn>
    </>
  );
}
