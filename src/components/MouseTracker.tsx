
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';

const MouseTracker: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // Initial off-screen position
  const isMobile = useIsMobile();

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isMobile]);

  if (isMobile) {
    return null; // Don't render on mobile
  }

  return (
    <motion.div
      className="fixed top-0 left-0 w-8 h-8 rounded-full bg-purple-500/50 pointer-events-none z-[9999] border-2 border-purple-300"
      style={{
        translateX: '-50%',
        translateY: '-50%',
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: 'spring', stiffness: 300, damping: 25, mass: 0.5 }}
    />
  );
};

export default MouseTracker;
