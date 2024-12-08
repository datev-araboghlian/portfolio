import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { easing } from 'maath';

const HeroCamera = ({ isMobile, children }) => {
  const group = useRef();
  const time = useRef(0);

  useFrame((state, delta) => {
    time.current += delta;

    // Camera movement
    easing.damp3(state.camera.position, [0, 0, 20], 0.25, delta);

    if (!isMobile) {
      // More pronounced rotation based on mouse movement
      easing.dampE(group.current.rotation, 
        [
          -state.pointer.y / 2,  // Increased vertical movement
          state.pointer.x / 3,   // Reduced horizontal movement
          Math.sin(time.current) * 0.05  // Added subtle oscillation
        ], 
        0.25, 
        delta
      );

      // Add subtle bobbing/breathing effect
      const breathingEffect = Math.sin(time.current * 0.5) * 0.02;
      group.current.position.y = breathingEffect;
      group.current.position.x = Math.cos(time.current * 0.3) * 0.01;
    }
  });

  return <group ref={group}>{children}</group>;
};

export default HeroCamera;
