
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Github, Instagram, Linkedin } from "lucide-react";

interface HeroTextProps {
  onSectionChange: (section: string) => void;
}

const HeroText = ({ onSectionChange }: HeroTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 });
    
    // Staggered animation for all elements
    tl.fromTo(
      [titleRef.current, subtitleRef.current, descriptionRef.current, buttonRef.current, socialRef.current],
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out" }
    );
  }, []);

  const handleConnectClick = () => {
    onSectionChange('contact');
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      boxShadow: "0 0 25px rgba(139, 92, 246, 0.6)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.3)",
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleSocialHover = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.2,
      rotation: 5,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const handleSocialLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      rotation: 0,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div ref={containerRef}>
      <div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          Mathavan
        </h1>
      </div>
      <div>
        <p ref={subtitleRef} className="text-2xl md:text-3xl mt-4 text-gray-300">
          Full Stack Developer
        </p>
      </div>
      <div>
        <p ref={descriptionRef} className="pt-6 md:text-xl max-w-lg text-gray-400">
          I craft interactive experiences and digital solutions that
          solve real-world problems. Passionate about creating
          beautiful, functional software.
        </p>
      </div>
      <div className="mt-8">
        <button
          ref={buttonRef}
          onClick={handleConnectClick}
          onMouseEnter={handleButtonHover}
          onMouseLeave={handleButtonLeave}
          className="px-8 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium text-lg shadow-lg shadow-purple-600/30 hover:shadow-purple-600/50"
        >
          Let's Connect
        </button>
      </div>
      <div ref={socialRef} className="pt-10 flex items-center space-x-6">
        <a
          href="https://github.com/MaddyDev007"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleSocialHover}
          onMouseLeave={handleSocialLeave}
          className="text-gray-400 hover:drop-shadow-glow hover:text-white transition-colors duration-300"
        >
          <Github size={24} />
        </a>
        <a
          href="https://instagram.com/_red__ruby"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleSocialHover}
          onMouseLeave={handleSocialLeave}
          className="text-gray-400 hover:drop-shadow-glow hover:text-white transition-colors duration-300"
        >
          <Instagram size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/mathavan-s-38555b367"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={handleSocialHover}
          onMouseLeave={handleSocialLeave}
          className="text-gray-400 hover:drop-shadow-glow hover:text-white transition-colors duration-300"
        >
          <Linkedin size={24} />
        </a>
      </div>
    </div>
  );
};

export default HeroText;
