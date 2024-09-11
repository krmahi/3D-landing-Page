import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { easing } from "maath";

const ModelCamera = ({ children, isMobile }) => {
  const groupref = useRef();

  useFrame((state, delta) => {
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);
    if (!isMobile)
      easing.dampE(
        groupref.current.rotation,
        [-state.pointer.y / 5, state.pointer.x / 1, 0],
        0.25,
        delta
      );
  });
  return <group ref={groupref}>{children}</group>;
};

export default ModelCamera;
