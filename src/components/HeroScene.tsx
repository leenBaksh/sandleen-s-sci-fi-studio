import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.4, 96, 96]}>
        <MeshDistortMaterial
          color="#a855f7"
          emissive="#22d3ee"
          emissiveIntensity={0.35}
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.9}
        />
      </Sphere>
    </Float>
  );
}

function Ring({ radius, speed, color }: { radius: number; speed: number; color: string }) {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((s) => {
    if (!ref.current) return;
    ref.current.rotation.x = s.clock.elapsedTime * speed;
    ref.current.rotation.y = s.clock.elapsedTime * speed * 0.6;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[radius, 0.012, 16, 128]} />
      <meshBasicMaterial color={color} transparent opacity={0.55} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]}>
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.2} color="#22d3ee" />
        <pointLight position={[-10, -10, -5]} intensity={1} color="#a855f7" />
        <Core />
        <Ring radius={2.2} speed={0.25} color="#22d3ee" />
        <Ring radius={2.6} speed={-0.18} color="#a855f7" />
        <Ring radius={3.0} speed={0.12} color="#22d3ee" />
        <Stars radius={50} depth={50} count={2500} factor={3} fade speed={1} />
      </Suspense>
    </Canvas>
  );
}
