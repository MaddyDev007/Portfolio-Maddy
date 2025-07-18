
import React, { useRef } from "react";
import { Float } from "@react-three/drei";
import { Mesh } from "three"; // Import Mesh type for useRef

const FloatingCube = () => {
  const meshRef = useRef<Mesh>(null!); // Typed useRef

  return (
    <Float speed={2} rotationIntensity={1.2} floatIntensity={1.8}>
      <mesh
        ref={meshRef}
        position={[2.5, 0.2, 0]} // Adjusted position
        castShadow // Cube casts shadows
        receiveShadow // Cube can receive shadows
      >
        <boxGeometry args={[0.9, 0.9, 0.9]} /> {/* Slightly smaller cube */}
        <meshStandardMaterial
          color="#A78BFA" // Lighter, distinct purple
          metalness={0.7}
          roughness={0.3}
        />
      </mesh>
    </Float>
  );
};

export default FloatingCube;
