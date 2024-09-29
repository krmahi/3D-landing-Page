import React, { useRef } from "react";
import { Float, Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Scene = (props) => {
  const meshRef = useRef();

  useFrame((state, delta) => {
    meshRef.current.rotation.y += 0.003;
  });

  let texture = useTexture("./model.png");
  return (
    <Float floatIntensity={2}>
      <mesh ref={meshRef} {...props} position={[0, 2.5, 0]}>
        {" "}
        {/* Modify the position here */}
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={texture}
          color={[5, 5, 5]}
          transparent
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
};

export default Scene;
