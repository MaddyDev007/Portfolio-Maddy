import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import ResumeSection from "@/components/ResumeSection";
import ParticlesBackground from "@/components/ParticlesBackground";
import MouseTracker from "@/components/MouseTracker";

const Portfolio = () => {
  const [currentSection, setCurrentSection] = useState("hero");
  const contentRef = useRef<HTMLDivElement>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const gradientRef1 = useRef<HTMLDivElement>(null);
  const gradientRef2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate gradient backgrounds
    if (gradientRef1.current && gradientRef2.current) {
      gsap.to(gradientRef1.current, {
        x: 100,
        y: -50,
        scale: 1.2,
        duration: 20,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });

      gsap.to(gradientRef2.current, {
        x: -80,
        y: 80,
        scale: 0.8,
        duration: 25,
        repeat: -1,
        yoyo: true,
        ease: "none",
      });
    }
  }, []);

  const handleSectionChange = (section: string) => {
    if (isTransitioning || section === currentSection) return;

    setIsTransitioning(true);

    if (contentRef.current) {
      // Exit animation for current section
      gsap.to(contentRef.current, {
        opacity: 0,
        y: -50,
        scale: 1.08,
        duration: 0.4,
        ease: "power2.in",
        onComplete: () => {
          // Change section after exit animation
          setCurrentSection(section);
        },
      });
    }

    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 30, scale: 1.02 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
          onComplete: () => {
            setIsTransitioning(false);
          },
        }
      );
    }
  };

  const sections = {
    hero: <HeroSection onSectionChange={handleSectionChange} />,
    projects: <ProjectsSection />,
    skills: <SkillsSection />,
    resume: <ResumeSection />,
    contact: <ContactSection />,
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black text-white overflow-hidden relative">
      <ParticlesBackground />
      <MouseTracker />

      <Navigation
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />

      <main className="relative z-10">
        <div ref={contentRef} className="min-h-screen">
          {sections[currentSection as keyof typeof sections]}
        </div>
      </main>
    </div>
  );
};

export default Portfolio;
