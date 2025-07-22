
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroImage = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 1, scale: 1, duration: 1.2, delay: 0.5, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <div ref={imageRef} className="flex relative pb-10 justify-center w-full">
      <img className="w-[200px] aspect-square rounded-full md:w-[300px]" src="/face5.webp" alt="Mathavan" />
      <span className="wave wave1 md:w-[300px] w-[200px]"></span>
      <span className="wave wave2 md:w-[300px] w-[200px]"></span>
      <span className="wave wave3 md:w-[300px] w-[200px]"></span>
    </div>
  );
};

export default HeroImage;
