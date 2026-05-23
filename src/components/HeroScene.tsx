import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Stars, OrbitControls } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type * as THREE from "three";

function Core() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.25;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.4, 128, 128]}>
        <MeshDistortMaterial
          color="#a855f7"
          emissive="#22d3ee"
          emissiveIntensity={0.4}
          distort={0.45}
          speed={2}
          roughness={0.1}
          metalness={0.9}
        />
      </Sphere>
      {/* wireframe shell */}
      <Sphere args={[1.55, 32, 32]}>
        <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
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
      <torusGeometry args={[radius, 0.014, 16, 160]} />
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
        <Stars radius={60} depth={60} count={3500} factor={3} fade speed={1} />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.6}
        />
      </Suspense>
    </Canvas>
  );
}
