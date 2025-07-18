
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import HeroCanvas from "./HeroCanvas";
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

interface HeroSectionProps {
  onSectionChange: (section: string) => void;
}

const HeroSection = ({ onSectionChange }: HeroSectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={sectionRef} className="relative md:h-screen md:overflow-hidden">
      <div className="-z-10 hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
       { <HeroCanvas />}
      </div>

      <div className="min-h-screen flex flex-col justify-center">
        <div className="max-w-6xl mx-auto px-10 py-20 md:py-32 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-7 lg:gap-12 items-center">
            <HeroImage />
            <HeroText onSectionChange={onSectionChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
