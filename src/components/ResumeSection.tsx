
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { useState } from 'react';

const ResumeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);
  const noteRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    // Main section animation
    tl.fromTo(
      sectionRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.1, ease: "power3.out" }
    );

    // Staggered animations for content
    tl.fromTo(
      [titleRef.current, descriptionRef.current, buttonRef.current, noteRef.current],
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.5, stagger: 0.2, ease: "power2.out" }
    );
  }, []);

  const handleButtonHover = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  const [isDownloading, setIsDownloading] = useState(false);
  const handleDownload = () => {
    setIsDownloading(true);
    

    // Simulate download delay
    setTimeout(() => {
      setIsDownloading(false);
    }, 1500);
  };

  const handleButtonLeave = (e: React.MouseEvent) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <section
      ref={sectionRef}
      id="resume"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4 md:px-8 text-center relative z-10"
    >
      <h2 
        ref={titleRef}
        className="pb-2 text-5xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500"
      >
        My Resume
      </h2>
      <p 
        ref={descriptionRef}
        className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12"
      >
        Interested in learning more about my professional experience and skills? Download my resume to get a comprehensive overview.
      </p>
      <div 
        ref={buttonRef}
        onMouseEnter={handleButtonHover}
        onMouseLeave={handleButtonLeave}
      >
        <Button
          onClick={handleDownload}
          asChild
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-500 text-white font-semibold hover:from-purple-700 hover:to-blue-600 transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <a
            href="/resume.pdf"
            download="Mathavan_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
        className="flex items-center"
        
      >
        {isDownloading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              ></path>
            </svg>
            Downloading...
          </>
        ) : (
          <>
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </>
        )}
      </div>
          </a>
        </Button>
      </div>
      <p 
        ref={noteRef}
        className="mt-8 text-sm text-gray-500"
      >
        (PDF Format)
      </p>
    </section>
  );
};

export default ResumeSection;
