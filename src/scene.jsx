import React, { useRef } from "react";
import { Float, Sparkles, useTexture } from "@react-three/drei";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

const Scene = (props) => {
  const meshRef = useRef();
  const color = "#ff0000";

  useFrame((state, delta) => {
    meshRef.current.rotation.y += 0.01;
  });

  let texture = useTexture("./group.png");
  return (
    <Float floatIntensity={2}>
      <mesh ref={meshRef} {...props}>
        <cylinderGeometry args={[1, 1, 1, 60, 60, true]} />
        <meshStandardMaterial
          map={texture}
          color={[30, 30, 30]}
          transparent
          side={THREE.DoubleSide}
          toneMapped={false}
        />
      </mesh>
    </Float>
  );
};

export default Scene;
