
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';

interface NavigationProps {
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onSectionChange }) => {
  const navItems = [
    { id: 'hero', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'contact', label: 'Contact' }
  ];
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const activeIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (navRef.current) {
      gsap.fromTo(
        navRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );
    }
  }, []);

  useEffect(() => {
    // Animate active indicator
    const activeButton = buttonRefs.current.find((_, index) => navItems[index].id === currentSection);
    if (activeButton && activeIndicatorRef.current && !isMobile) {
      gsap.to(activeIndicatorRef.current, {
        x: activeButton.offsetLeft,
        width: activeButton.offsetWidth,
        duration: 0.6,
        ease: "power2.out"
      });
    }
  }, [currentSection, isMobile]);

  const handleSectionSelect = (section: string) => {
    onSectionChange(section);
    setIsSheetOpen(false);
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 });
  };

  const handleButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
  };

  const handleMenuButtonHover = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1.1, duration: 0.2 });
  };

  const handleMenuButtonLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, { scale: 1, duration: 0.2 });
  };

  if (isMobile) {
    return (
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 p-4">
        <div className="max-w-6xl mx-auto flex justify-end">
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <button
                className="p-3 bg-white/10 backdrop-blur-lg rounded-full border border-white/20 text-white"
                onMouseEnter={handleMenuButtonHover}
                onMouseLeave={handleMenuButtonLeave}
              >
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white/10 backdrop-blur-lg border-l-white/20 text-white p-6 w-[250px]">
              <div className="flex flex-col space-y-6 mt-10">
                {navItems.map((item, index) => (
                  <SheetClose asChild key={item.id}>
                    <button
                      ref={(el) => { buttonRefs.current[index] = el; }}
                      onClick={() => handleSectionSelect(item.id)}
                      className={`relative px-4 py-3 rounded-lg text-lg transition-colors duration-300 w-full text-left ${
                        currentSection === item.id
                          ? 'text-white bg-purple-600/80'
                          : 'text-white/80 hover:text-white hover:bg-white/10'
                      }`}
                      onMouseEnter={(e) => gsap.to(e.currentTarget, { x: 5, duration: 0.2 })}
                      onMouseLeave={(e) => gsap.to(e.currentTarget, { x: 0, duration: 0.2 })}
                    >
                      {item.label}
                    </button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    );
  }

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 p-6">
      <div className="max-w-6xl mx-auto flex justify-center">
        <div className="bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20 relative">
          <div 
            ref={activeIndicatorRef}
            className="absolute inset-y-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"
            style={{ top: '12px', bottom: '12px' }}
          />
          <div className="flex space-x-8 relative z-10">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                ref={(el) => { buttonRefs.current[index] = el; }}
                onClick={() => onSectionChange(item.id)}
                className={`relative px-4 py-2 rounded-full transition-colors duration-300 font-medium ${
                  currentSection === item.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
                onMouseEnter={handleButtonHover}
                onMouseLeave={handleButtonLeave}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
