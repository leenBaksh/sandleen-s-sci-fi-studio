import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, ContactShadows, Environment } from "@react-three/drei";
import { Suspense, useRef, useState } from "react";
import type * as THREE from "three";

type Palette = {
  hair: string;
  accent: string;
  eye: string;
};

const HAIR_OPTIONS = [
  { label: "Silver", value: "#dfe3ea" },
  { label: "Platinum", value: "#f1eef4" },
  { label: "Ash", value: "#b9bec7" },
  { label: "Plum", value: "#3b1f4a" },
  { label: "Rose", value: "#b14a6b" },
];

const ACCENT_OPTIONS = [
  { label: "Cyan", value: "#22d3ee" },
  { label: "Aqua", value: "#5eead4" },
  { label: "Violet", value: "#a855f7" },
  { label: "Lime", value: "#a3e635" },
  { label: "Pink", value: "#ec4899" },
];

const EYE_OPTIONS = [
  { label: "Blue", value: "#3b82f6" },
  { label: "Cyan", value: "#22d3ee" },
  { label: "Emerald", value: "#34d399" },
  { label: "Violet", value: "#a855f7" },
  { label: "Gold", value: "#fbbf24" },
];

function Chibi({ palette }: { palette: Palette }) {
  const group = useRef<THREE.Group>(null!);
  const head = useRef<THREE.Group>(null!);
  const halo = useRef<THREE.Mesh>(null!);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (group.current) group.current.position.y = Math.sin(t * 1.4) * 0.05;
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.6) * 0.2;
      head.current.rotation.z = Math.sin(t * 0.9) * 0.03;
    }
    if (halo.current) {
      halo.current.rotation.z = t * 0.6;
    }
  });

  const skin = "#ffe2cf";
  const { hair, accent, eye } = palette;
  const eyeWhite = "#ffffff";
  const eyePupil = "#0b1226";
  const cheek = "#ffa6bb";
  const jacket = "#0e1a33";
  const shirt = "#f5f7fb";
  const earInner = "#2a2330";

  return (
    <group ref={group} position={[0, -0.9, 0]}>
      {/* Body — navy jacket */}
      <mesh position={[0, 0.32, 0]} castShadow>
        <capsuleGeometry args={[0.46, 0.4, 8, 24]} />
        <meshStandardMaterial color={jacket} roughness={0.55} />
      </mesh>
      {/* White shirt panel */}
      <mesh position={[0, 0.34, 0.18]}>
        <boxGeometry args={[0.42, 0.55, 0.18]} />
        <meshStandardMaterial color={shirt} roughness={0.5} />
      </mesh>
      {/* Scarf — wrap */}
      <mesh position={[0, 0.72, 0]}>
        <torusGeometry args={[0.36, 0.09, 16, 36]} />
        <meshStandardMaterial color={accent} roughness={0.7} />
      </mesh>
      {/* Scarf — dangling end */}
      <mesh position={[0.05, 0.4, 0.32]} rotation={[0.1, 0, 0.05]}>
        <boxGeometry args={[0.16, 0.6, 0.04]} />
        <meshStandardMaterial color={accent} roughness={0.7} />
      </mesh>
      <mesh position={[0.05, 0.55, 0.34]} rotation={[0.1, 0, 0.05]}>
        <boxGeometry args={[0.17, 0.05, 0.045]} />
        <meshStandardMaterial color="#0a1a2a" roughness={0.6} />
      </mesh>

      {/* Arms */}
      <mesh position={[-0.58, 0.38, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.12, 0.4, 6, 16]} />
        <meshStandardMaterial color={jacket} roughness={0.55} />
      </mesh>
      <mesh position={[0.58, 0.38, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.12, 0.4, 6, 16]} />
        <meshStandardMaterial color={jacket} roughness={0.55} />
      </mesh>
      {/* Green gloves */}
      <mesh position={[-0.78, 0.16, 0]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#22c55e" roughness={0.4} />
      </mesh>
      <mesh position={[0.78, 0.16, 0]}>
        <sphereGeometry args={[0.13, 24, 24]} />
        <meshStandardMaterial color="#22c55e" roughness={0.4} />
      </mesh>

      <group ref={head} position={[0, 1.38, 0]}>
        {/* Head */}
        <mesh castShadow>
          <sphereGeometry args={[0.7, 64, 64]} />
          <meshStandardMaterial color={skin} roughness={0.45} />
        </mesh>

        {/* Hair cap */}
        <mesh position={[0, 0.06, -0.04]} scale={[1.1, 1.06, 1.1]}>
          <sphereGeometry args={[0.72, 48, 48]} />
          <meshStandardMaterial color={hair} roughness={0.55} />
        </mesh>
        {/* Bangs */}
        <mesh position={[0, 0.32, 0.46]} rotation={[0.45, 0, 0]}>
          <sphereGeometry args={[0.55, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={hair} roughness={0.55} />
        </mesh>
        {/* Side hair — short bob */}
        <mesh position={[-0.6, -0.1, 0.05]} rotation={[0, 0, 0.25]}>
          <capsuleGeometry args={[0.22, 0.55, 8, 16]} />
          <meshStandardMaterial color={hair} roughness={0.55} />
        </mesh>
        <mesh position={[0.6, -0.1, 0.05]} rotation={[0, 0, -0.25]}>
          <capsuleGeometry args={[0.22, 0.55, 8, 16]} />
          <meshStandardMaterial color={hair} roughness={0.55} />
        </mesh>

        {/* Cat ears */}
        <group position={[-0.32, 0.62, -0.05]} rotation={[0, 0, 0.15]}>
          <mesh>
            <coneGeometry args={[0.16, 0.42, 4]} />
            <meshStandardMaterial color={hair} roughness={0.55} />
          </mesh>
          <mesh position={[0, -0.02, 0.04]} scale={[0.6, 0.7, 0.6]}>
            <coneGeometry args={[0.16, 0.42, 4]} />
            <meshStandardMaterial color={earInner} roughness={0.6} />
          </mesh>
        </group>
        <group position={[0.32, 0.62, -0.05]} rotation={[0, 0, -0.15]}>
          <mesh>
            <coneGeometry args={[0.16, 0.42, 4]} />
            <meshStandardMaterial color={hair} roughness={0.55} />
          </mesh>
          <mesh position={[0, -0.02, 0.04]} scale={[0.6, 0.7, 0.6]}>
            <coneGeometry args={[0.16, 0.42, 4]} />
            <meshStandardMaterial color={earInner} roughness={0.6} />
          </mesh>
        </group>

        {/* X hairclip */}
        <group position={[0.42, 0.28, 0.5]} rotation={[0, 0, Math.PI / 4]}>
          <mesh>
            <boxGeometry args={[0.16, 0.035, 0.02]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.6} />
          </mesh>
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <boxGeometry args={[0.16, 0.035, 0.02]} />
            <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.6} />
          </mesh>
        </group>

        {/* Halo */}
        <mesh ref={halo} position={[0, 0.95, -0.1]} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[0.32, 0.018, 12, 48]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={1.2} toneMapped={false} />
        </mesh>
        <mesh position={[0, 0.95, -0.1]} rotation={[Math.PI / 2.4, 0, 0]}>
          <torusGeometry args={[0.42, 0.008, 8, 48]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.9} transparent opacity={0.6} toneMapped={false} />
        </mesh>

        {/* Eyes */}
        {[-0.22, 0.22].map((x) => (
          <group key={x} position={[x, 0.0, 0.6]}>
            <mesh>
              <sphereGeometry args={[0.13, 32, 32]} />
              <meshStandardMaterial color={eyeWhite} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.01, 0.08]}>
              <sphereGeometry args={[0.095, 32, 32]} />
              <meshStandardMaterial
                color={eye}
                emissive={eye}
                emissiveIntensity={0.8}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[0, -0.01, 0.14]}>
              <sphereGeometry args={[0.05, 24, 24]} />
              <meshStandardMaterial color={eyePupil} />
            </mesh>
            <mesh position={[0.03, 0.04, 0.17]}>
              <sphereGeometry args={[0.02, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        ))}

        {/* Cheeks */}
        <mesh position={[-0.32, -0.18, 0.58]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshBasicMaterial color={cheek} transparent opacity={0.55} />
        </mesh>
        <mesh position={[0.32, -0.18, 0.58]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshBasicMaterial color={cheek} transparent opacity={0.55} />
        </mesh>
        {/* Smile */}
        <mesh position={[0, -0.3, 0.63]} rotation={[0, 0, Math.PI]}>
          <torusGeometry args={[0.04, 0.011, 8, 16, Math.PI]} />
          <meshBasicMaterial color="#7a1f3a" />
        </mesh>
      </group>
    </group>
  );
}

function Swatches({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: { label: string; value: string }[];
  value: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="flex items-center justify-between gap-3">
      <span className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </span>
      <div className="flex gap-1.5">
        {options.map((o) => {
          const active = o.value === value;
          return (
            <button
              key={o.value}
              type="button"
              onClick={() => onChange(o.value)}
              aria-label={`${label} ${o.label}`}
              title={o.label}
              className={`h-5 w-5 rounded-full border transition-all ${
                active
                  ? "scale-110 border-foreground ring-2 ring-foreground/40"
                  : "border-white/20 hover:scale-105"
              }`}
              style={{ background: o.value }}
            />
          );
        })}
      </div>
    </div>
  );
}

export function AnimeAvatar() {
  const [hair, setHair] = useState(HAIR_OPTIONS[0].value);
  const [accent, setAccent] = useState(ACCENT_OPTIONS[0].value);
  const [eye, setEye] = useState(EYE_OPTIONS[0].value);

  return (
    <div className="relative h-full w-full">
      <Canvas
        shadows
        camera={{ position: [0, 0.4, 3.6], fov: 35 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[3, 4, 3]} intensity={1.2} color="#ffffff" castShadow />
          <pointLight position={[-3, 1, 2]} intensity={0.9} color={accent} />
          <pointLight position={[3, -1, 2]} intensity={0.6} color={eye} />

          <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.35}>
            <Chibi palette={{ hair, accent, eye }} />
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

      <div className="glass absolute -bottom-2 left-1/2 w-[18rem] -translate-x-1/2 space-y-2 rounded-2xl border border-white/10 p-3 backdrop-blur-xl">
        <Swatches label="Hair" options={HAIR_OPTIONS} value={hair} onChange={setHair} />
        <Swatches label="Accents" options={ACCENT_OPTIONS} value={accent} onChange={setAccent} />
        <Swatches label="Eye Glow" options={EYE_OPTIONS} value={eye} onChange={setEye} />
      </div>
    </div>
  );
}
