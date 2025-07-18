
import React from "react";
import { Canvas } from "@react-three/fiber";
import { Float, Text3D, OrbitControls } from "@react-three/drei";
import FloatingCube from "./FloatingCube";

const HeroCanvas = () => {
  return (
    <Canvas
      shadows // Enable shadows in the scene
      camera={{ position: [10, 1.5, 7], fov: 60 }} // Adjusted camera position and FOV
    >
      <ambientLight intensity={0.5} /> {/* Adjusted ambient light */}
      <directionalLight // Added directional light for better definition
        position={[3, 5, 4]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
      <pointLight // Main interactive light
        position={[-3, 3, -4]}
        intensity={1.8}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <Float
        speed={3} // Adjusted float animation
        rotationIntensity={1}
        floatIntensity={1.2}
      >
        <Text3D
          font="/fonts/Inter_Bold.json"
          size={0.75} // Slightly adjusted size
          height={0.15} // Thinner text for subtlety
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.025} // Subtle bevel
          bevelSize={0.015}
          bevelOffset={0}
          bevelSegments={5}
          position={[-2.3, 0.3, 0]} // Adjusted position
          rotation={[0, 0.1, 0]} // Slight rotation for dynamic look
          castShadow // Text casts shadows
          receiveShadow // Text can receive shadows
        >
          Portfolio
          <meshStandardMaterial
            color="#8B5CF6"
            metalness={0.6}
            roughness={0.17}
            envMapIntensity={1.2}
          />
        </Text3D>
      </Float>
      <FloatingCube />
      <OrbitControls
        enableZoom={false}
        enablePan={false} // Disable panning
        minPolarAngle={Math.PI / 3.5} // Limit vertical rotation
        maxPolarAngle={Math.PI / 1.9} // Limit vertical rotation
        minAzimuthAngle={-Math.PI / 5} // Limit horizontal rotation
        maxAzimuthAngle={Math.PI / 5}
        target={[0, 0.5, 0]} // Pan target slightly up
      />
    </Canvas>
  );
};

export default HeroCanvas;
