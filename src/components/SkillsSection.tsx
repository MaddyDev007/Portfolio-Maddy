import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const skills = [
  { name: 'JavaScript', level: 40 },
  { name: 'React.js', level: 35 },
  { name: 'Node.js', level: 40 },
  { name: 'TypeScript', level: 35 },
  { name: 'Three.js', level: 30 },
  { name: 'Python', level: 45 },
  { name: 'GraphQL', level: 45 },
  { name: 'UI/UX', level: 80 },
];

const SkillsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const leftColumnRef = useRef<HTMLDivElement>(null);
  const rightColumnRef = useRef<HTMLDivElement>(null);
  const otherTechRef = useRef<HTMLDivElement>(null);
  const techItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Title animation
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Skill columns animation
    tl.fromTo(leftColumnRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.6"
    );

    tl.fromTo(rightColumnRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 0.8 },
      "-=0.4"
    );

    // Animate skill bars
    skills.forEach((skill, index) => {
      const skillBar = document.querySelector(`[data-skill="${skill.name}"] .skill-bar`);
      if (skillBar) {
        gsap.fromTo(skillBar,
          { width: '0%' },
          { 
            width: `${skill.level}%`, 
            duration: 1.2, 
            delay: 0.4 + index * 0.2,
            ease: "power2.out"
          }
        );
      }
    });

    // Other technologies animation
    tl.fromTo(otherTechRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.2"
    );

    // Animate tech items with stagger
    gsap.fromTo(techItemsRef.current,
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        delay: 1,
        stagger: 0.1,
        ease: "back.out(1.7)"
      }
    );
  }, []);

  const handleTechItemHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.1,
      backgroundColor: "rgba(139, 92, 246, 0.3)",
      boxShadow: "0 0 15px rgba(139, 92, 246, 0.5)",
      duration: 0.3
    });
  };

  const handleTechItemLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      boxShadow: "none",
      duration: 0.3
    });
  };

  return (
    <div ref={sectionRef} className="min-h-screen py-24 px-4 md:px-8 flex items-center overflow-y-auto">
      <div className="max-w-6xl mx-auto w-full">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-5xl pb-2 font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
            My Skills
          </h2>
          <p className="mt-6 text-xl text-gray-400 max-w-2xl mx-auto">
            Technical expertise and competencies I've developed throughout my career.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div ref={leftColumnRef}>
            <div className="space-y-8">
              {skills.slice(0, 4).map((skill, index) => (
                <div key={index} className="space-y-2" data-skill={skill.name}>
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-white font-medium">{skill.name}</span>
                    <span className="text-lg text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="skill-bar h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div ref={rightColumnRef}>
            <div className="space-y-8">
              {skills.slice(4).map((skill, index) => (
                <div key={index} className="space-y-2" data-skill={skill.name}>
                  <div className="flex justify-between items-center">
                    <span className="text-xl text-white font-medium">{skill.name}</span>
                    <span className="text-lg text-blue-300">{skill.level}%</span>
                  </div>
                  <div className="h-3 w-full bg-gray-700 rounded-full overflow-hidden">
                    <div className="skill-bar h-full bg-gradient-to-r from-purple-500 to-blue-500 rounded-full" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div ref={otherTechRef} className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-white mb-6">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['AWS', 'Docker', 'REST APIs', 'MongoDB', 'PostgreSQL', 'Firebase', 'Redux', 'Next.js'].map((tech, index) => (
              <div
                key={index}
                ref={(el) => { techItemsRef.current[index] = el; }}
                className="px-6 py-3 bg-white/10 rounded-full text-white font-medium border border-white/20 backdrop-blur-sm cursor-pointer"
                onMouseEnter={handleTechItemHover}
                onMouseLeave={handleTechItemLeave}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
