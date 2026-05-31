import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type * as THREE from "three";

/**
 * Stylized chibi-anime avatar built entirely from primitives —
 * no external GLB required. Big head, big sparkly eyes, twin
 * tails hair, tiny body. Idle bob + subtle head tracking.
 */
function Chibi() {
  const group = useRef<THREE.Group>(null!);
  const head = useRef<THREE.Group>(null!);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (group.current) {
      group.current.position.y = Math.sin(t * 1.4) * 0.05;
    }
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.6) * 0.25;
      head.current.rotation.z = Math.sin(t * 0.9) * 0.04;
    }
  });

  const skin = "#ffe0c9";
  const hair = "#3b1f4a";
  const hairHi = "#a855f7";
  const eyeWhite = "#ffffff";
  const eyeIris = "#22d3ee";
  const eyePupil = "#0b0b1a";
  const cheek = "#ff9bb3";
  const outfit = "#1b1430";
  const outfitTrim = "#a855f7";

  return (
    <group ref={group} position={[0, -0.9, 0]}>
      {/* Body */}
      <mesh position={[0, 0.35, 0]} castShadow>
        <capsuleGeometry args={[0.42, 0.35, 8, 24]} />
        <meshStandardMaterial color={outfit} roughness={0.6} />
      </mesh>
      {/* Collar trim */}
      <mesh position={[0, 0.78, 0]}>
        <torusGeometry args={[0.34, 0.04, 12, 32]} />
        <meshStandardMaterial color={outfitTrim} emissive={outfitTrim} emissiveIntensity={0.4} />
      </mesh>
      {/* Arms */}
      <mesh position={[-0.55, 0.4, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.11, 0.35, 6, 16]} />
        <meshStandardMaterial color={outfit} roughness={0.6} />
      </mesh>
      <mesh position={[0.55, 0.4, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.11, 0.35, 6, 16]} />
        <meshStandardMaterial color={outfit} roughness={0.6} />
      </mesh>
      {/* Hands */}
      <mesh position={[-0.78, 0.18, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color={skin} roughness={0.5} />
      </mesh>
      <mesh position={[0.78, 0.18, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color={skin} roughness={0.5} />
      </mesh>

      {/* Head group */}
      <group ref={head} position={[0, 1.35, 0]}>
        {/* Head */}
        <mesh castShadow>
          <sphereGeometry args={[0.7, 64, 64]} />
          <meshStandardMaterial color={skin} roughness={0.45} />
        </mesh>

        {/* Hair back dome */}
        <mesh position={[0, 0.05, -0.05]} scale={[1.08, 1.05, 1.08]}>
          <sphereGeometry args={[0.72, 48, 48]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>

        {/* Front bangs — clipped sphere */}
        <mesh position={[0, 0.32, 0.45]} rotation={[0.4, 0, 0]}>
          <sphereGeometry args={[0.55, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        {/* Side bangs */}
        <mesh position={[-0.5, 0.05, 0.3]} rotation={[0, 0, 0.6]}>
          <coneGeometry args={[0.18, 0.6, 16]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        <mesh position={[0.5, 0.05, 0.3]} rotation={[0, 0, -0.6]}>
          <coneGeometry args={[0.18, 0.6, 16]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>

        {/* Twin tails */}
        <mesh position={[-0.7, 0.1, -0.2]} rotation={[0.3, 0, 0.8]}>
          <coneGeometry args={[0.22, 0.9, 20]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        <mesh position={[0.7, 0.1, -0.2]} rotation={[0.3, 0, -0.8]}>
          <coneGeometry args={[0.22, 0.9, 20]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>

        {/* Hair highlight ribbon */}
        <mesh position={[0, 0.55, 0.05]} rotation={[0.2, 0, 0]}>
          <torusGeometry args={[0.45, 0.025, 8, 48, Math.PI]} />
          <meshStandardMaterial color={hairHi} emissive={hairHi} emissiveIntensity={0.7} />
        </mesh>

        {/* Eyes */}
        {[-0.22, 0.22].map((x) => (
          <group key={x} position={[x, 0.02, 0.6]}>
            <mesh>
              <sphereGeometry args={[0.13, 32, 32]} />
              <meshStandardMaterial color={eyeWhite} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.01, 0.08]}>
              <sphereGeometry args={[0.09, 32, 32]} />
              <meshStandardMaterial
                color={eyeIris}
                emissive={eyeIris}
                emissiveIntensity={0.6}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[0, -0.01, 0.14]}>
              <sphereGeometry args={[0.05, 24, 24]} />
              <meshStandardMaterial color={eyePupil} />
            </mesh>
            {/* sparkle */}
            <mesh position={[0.03, 0.04, 0.17]}>
              <sphereGeometry args={[0.018, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        ))}

        {/* Cheeks */}
        <mesh position={[-0.32, -0.15, 0.58]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshBasicMaterial color={cheek} transparent opacity={0.55} />
        </mesh>
        <mesh position={[0.32, -0.15, 0.58]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshBasicMaterial color={cheek} transparent opacity={0.55} />
        </mesh>

        {/* Mouth */}
        <mesh position={[0, -0.28, 0.63]} rotation={[0, 0, 0]}>
          <torusGeometry args={[0.04, 0.012, 8, 16, Math.PI]} />
          <meshBasicMaterial color="#7a1f3a" />
        </mesh>
      </group>
    </group>
  );
}

export function AnimeAvatar() {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0.4, 3.6], fov: 35 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.55} />
        <directionalLight
          position={[3, 4, 3]}
          intensity={1.2}
          color="#ffffff"
          castShadow
        />
        <pointLight position={[-3, 1, 2]} intensity={0.8} color="#a855f7" />
        <pointLight position={[3, -1, 2]} intensity={0.6} color="#22d3ee" />

        <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.4}>
          <Chibi />
        </Float>

        <ContactShadows
          position={[0, -1.1, 0]}
          opacity={0.45}
          blur={2.4}
          scale={4}
          far={2}
          color="#0b0b1a"
        />
        <Environment preset="city" />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 2.4}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Suspense>
    </Canvas>
  );
}
