
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
    <div ref={imageRef} className="flex pb-10 justify-center w-full">
      <img className="w-[250px] aspect-square md:w-[350px]" src="/face1.webp" alt="Mathavan" />
    </div>
  );
};

export default HeroImage;
