import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Target = (props) => {
  const targetRef = useRef();

  useGSAP(() => {
    gsap.to(targetRef.current.position, {
      y: targetRef.current.position.y + 0.5,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
    });
  });

  return (
    <group {...props} ref={targetRef}>
      {/* Base stand */}
      <mesh position={[0, -0.5, 0]}>
        <cylinderGeometry args={[0.5, 0.7, 0.2, 32]} />
        <meshStandardMaterial color="#333333" metalness={0.3} roughness={0.7} />
      </mesh>
      {/* Pole */}
      <mesh position={[0, 0.3, 0]}>
        <cylinderGeometry args={[0.05, 0.05, 1.4, 16]} />
        <meshStandardMaterial color="#4a3728" metalness={0.1} roughness={0.9} />
      </mesh>
      {/* Target rings */}
      <mesh position={[0, 0.9, 0.05]} rotation={[0, 0, 0]}>
        <cylinderGeometry args={[0.4, 0.4, 0.05, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.9, 0.06]}>
        <cylinderGeometry args={[0.3, 0.3, 0.05, 32]} />
        <meshStandardMaterial color="#cc3333" metalness={0} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.9, 0.07]}>
        <cylinderGeometry args={[0.2, 0.2, 0.05, 32]} />
        <meshStandardMaterial color="#ffffff" metalness={0} roughness={0.5} />
      </mesh>
      <mesh position={[0, 0.9, 0.08]}>
        <cylinderGeometry args={[0.1, 0.1, 0.05, 32]} />
        <meshStandardMaterial color="#cc3333" metalness={0} roughness={0.5} />
      </mesh>
    </group>
  );
};

export default Target;
