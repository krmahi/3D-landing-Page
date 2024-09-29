import { Canvas } from "@react-three/fiber";
import React from "react";
import {
  DeviceOrientationControls,
  PerspectiveCamera,
} from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  ToneMapping,
} from "@react-three/postprocessing";
import { useMediaQuery } from "react-responsive";

import "./style.css";
import Scene from "./scene";
import ModelCamera from "./ModelCamera";

const App = () => {
  const isMobie = useMediaQuery({ maxWidth: 768 });
  return (
    <>
      <Canvas className="absolute top-0 left-0">
        <PerspectiveCamera makeDefault position={[0, 0, 40]} />
        <directionalLight position={[1, 1, 100]} intensity={0.5} />
        {/* <ambientLight intensity={0.5} //> */}
        {/* <DeviceOrientationControls /> */}
        <ModelCamera isMobie={isMobie}>
          <Scene scale={isMobie ? 5.5 : 6} />
        </ModelCamera>
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceThreshold={0.5}
            luminanceSmoothing={0.025}
            levels={8}
            intensity={4}
          />
          {/* <ToneMapping /> */}
        </EffectComposer>
      </Canvas>
      <div className=" absolute z-50">MY NAME IS MAHESH</div>
    </>
  );
};

export default App;
