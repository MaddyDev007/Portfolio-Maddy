
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { link } from 'fs';

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Responsive digitalbank landing page',
    image: 'Project1.webp',
    tags: ['HTML', 'CSS', 'JavaScript'],
    link:"https://github.com/MaddyDev007/digitalbank-landing-page-master"
  },
  {
    id: 2,
    title: 'To-Do Application',
    description: 'A clean and intuitive To-Do application, designed to help users organize their daily tasks efficiently.',
    image: 'Project3.webp',
    tags: ['Flutter', 'Dart'],
    link: "https://github.com/MaddyDev007/Todo"
    
  },
  {
    id: 3,
    title: 'Animated Website',
    description: 'A web app that uses scroll triggers to generate animations.',
    image: 'Project2.webp',
    tags: ['ScrollTrigger', 'Animation', 'Tailwind Css'],
    link: "https://github.com/MaddyDev007/Tail"
  },
  {
    id: 4,
    title: 'Contact Form',
    description: 'Contact form that validates the user input',
    image: 'Project4.webp',
    tags: ['JavaScript', 'CSS'],
    link: "https://github.com/MaddyDev007/Contact-form"
  }
];

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const tl = gsap.timeline();

    // Title animation
    tl.fromTo(titleRef.current, 
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 0.8 }
    );

    // Projects stagger animation
    tl.fromTo(projectRefs.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out"
      },
      "-=0.4"
    );
  }, []);

  const handleProjectHover = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: -10,
      boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 8px 10px -6px rgba(139, 92, 246, 0.2)",
      duration: 0.3
    });
  };

  const handleImageHover = (e: React.MouseEvent<HTMLImageElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      duration: 0.1,
      ease: "power2.out"
    });
  }
  const handleImageLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      duration: 0.1,
      ease: "power2.out"
    });
  };

  const handleProjectLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      y: 0,
      boxShadow: "none",
      duration: 0.3
    });
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
  };

  return (
    <div ref={sectionRef} className="min-h-screen py-24 px-4 md:px-8 overflow-y-auto">
      <div className="max-w-6xl mx-auto">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="transition-colors duration-300 text-5xl font-bold bg-clip-text text-transparent pb-2 dark:bg-gradient-to-r dark:from-purple-500 dark:to-blue-500 bg-gradient-to-r from-purple-700 to-blue-700">
            My Projects
          </h2>
          <p className="transition-colors duration-300 mt-6 text-xl text-gray-700 dark:text-gray-400 max-w-2xl mx-auto ">
            Selected works showcasing my skills and experience in creating digital solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => { projectRefs.current[index] = el; }}
              className="bg-white/70 dark:bg-white/10  rounded-2xl overflow-hidden backdrop-blur-lg border border-black/20 dark:border-white/20 cursor-pointer transition-colors duration-300"
              onMouseEnter={handleProjectHover}
              onMouseLeave={handleProjectLeave}
            >
              <div className="relative overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                  onMouseEnter={handleImageHover}
                  onMouseLeave={handleImageLeave}
                    src={project.image} 
                    alt={project.title}
                    className="object-cover w-full h-full transition duration-500"
                  />
                  
                </div>
              </div>
              <div className="p-6">
                <h3 className="transition-colors duration-300 text-2xl font-bold mb-2 text-black dark:text-white">{project.title}</h3>
                <p className="transition-colors duration-300 text-gray-700 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="transition-colors duration-300 inline-block px-3 py-1 text-sm dark:bg-white/10 rounded-full text-blue-700 dark:text-blue-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                  <a href={project.link} className='w-full'>
                <button
                  className="mt-6 px-5 py-2 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full text-white font-medium shadow-lg shadow-purple-600/20 hover:shadow-purple-600/40"
                  onMouseEnter={handleButtonHover}
                  onMouseLeave={handleButtonLeave}
                >
                  View Project
                </button>
                  </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsSection;
