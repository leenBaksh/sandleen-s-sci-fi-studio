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
  { label: "Plum", value: "#3b1f4a" },
  { label: "Midnight", value: "#0b1029" },
  { label: "Rose", value: "#b14a6b" },
  { label: "Platinum", value: "#e6e1ea" },
  { label: "Ember", value: "#7a1f1f" },
];

const ACCENT_OPTIONS = [
  { label: "Violet", value: "#a855f7" },
  { label: "Cyan", value: "#22d3ee" },
  { label: "Lime", value: "#a3e635" },
  { label: "Pink", value: "#ec4899" },
  { label: "Amber", value: "#f59e0b" },
];

const EYE_OPTIONS = [
  { label: "Cyan", value: "#22d3ee" },
  { label: "Violet", value: "#a855f7" },
  { label: "Emerald", value: "#34d399" },
  { label: "Gold", value: "#fbbf24" },
  { label: "Rose", value: "#fb7185" },
];

function Chibi({ palette }: { palette: Palette }) {
  const group = useRef<THREE.Group>(null!);
  const head = useRef<THREE.Group>(null!);

  useFrame((s) => {
    const t = s.clock.elapsedTime;
    if (group.current) group.current.position.y = Math.sin(t * 1.4) * 0.05;
    if (head.current) {
      head.current.rotation.y = Math.sin(t * 0.6) * 0.25;
      head.current.rotation.z = Math.sin(t * 0.9) * 0.04;
    }
  });

  const skin = "#ffe0c9";
  const { hair, accent, eye } = palette;
  const eyeWhite = "#ffffff";
  const eyePupil = "#0b0b1a";
  const cheek = "#ff9bb3";
  const outfit = "#1b1430";

  return (
    <group ref={group} position={[0, -0.9, 0]}>
      <mesh position={[0, 0.35, 0]} castShadow>
        <capsuleGeometry args={[0.42, 0.35, 8, 24]} />
        <meshStandardMaterial color={outfit} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.78, 0]}>
        <torusGeometry args={[0.34, 0.04, 12, 32]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.5} />
      </mesh>
      <mesh position={[-0.55, 0.4, 0]} rotation={[0, 0, 0.5]}>
        <capsuleGeometry args={[0.11, 0.35, 6, 16]} />
        <meshStandardMaterial color={outfit} roughness={0.6} />
      </mesh>
      <mesh position={[0.55, 0.4, 0]} rotation={[0, 0, -0.5]}>
        <capsuleGeometry args={[0.11, 0.35, 6, 16]} />
        <meshStandardMaterial color={outfit} roughness={0.6} />
      </mesh>
      {/* Cuffs use accent */}
      <mesh position={[-0.72, 0.26, 0]} rotation={[0, 0, 0.5]}>
        <torusGeometry args={[0.12, 0.025, 10, 24]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[0.72, 0.26, 0]} rotation={[0, 0, -0.5]}>
        <torusGeometry args={[0.12, 0.025, 10, 24]} />
        <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.4} />
      </mesh>
      <mesh position={[-0.78, 0.18, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color={skin} roughness={0.5} />
      </mesh>
      <mesh position={[0.78, 0.18, 0]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial color={skin} roughness={0.5} />
      </mesh>

      <group ref={head} position={[0, 1.35, 0]}>
        <mesh castShadow>
          <sphereGeometry args={[0.7, 64, 64]} />
          <meshStandardMaterial color={skin} roughness={0.45} />
        </mesh>
        <mesh position={[0, 0.05, -0.05]} scale={[1.08, 1.05, 1.08]}>
          <sphereGeometry args={[0.72, 48, 48]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        <mesh position={[0, 0.32, 0.45]} rotation={[0.4, 0, 0]}>
          <sphereGeometry args={[0.55, 48, 48, 0, Math.PI * 2, 0, Math.PI / 2]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        <mesh position={[-0.5, 0.05, 0.3]} rotation={[0, 0, 0.6]}>
          <coneGeometry args={[0.18, 0.6, 16]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        <mesh position={[0.5, 0.05, 0.3]} rotation={[0, 0, -0.6]}>
          <coneGeometry args={[0.18, 0.6, 16]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        <mesh position={[-0.62, -0.25, -0.1]} rotation={[0.2, 0, 0.35]}>
          <capsuleGeometry args={[0.22, 1.2, 8, 16]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        <mesh position={[0.62, -0.25, -0.1]} rotation={[0.2, 0, -0.35]}>
          <capsuleGeometry args={[0.22, 1.2, 8, 16]} />
          <meshStandardMaterial color={hair} roughness={0.5} />
        </mesh>
        {/* Bow */}
        <mesh position={[0.5, 0.55, 0.1]} rotation={[0, 0, -0.3]}>
          <torusGeometry args={[0.11, 0.05, 12, 24]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.6} />
        </mesh>
        <mesh position={[0.5, 0.55, 0.12]}>
          <sphereGeometry args={[0.045, 16, 16]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.8} />
        </mesh>
        <mesh position={[0, 0.55, 0.05]} rotation={[0.2, 0, 0]}>
          <torusGeometry args={[0.45, 0.025, 8, 48, Math.PI]} />
          <meshStandardMaterial color={accent} emissive={accent} emissiveIntensity={0.7} />
        </mesh>

        {[-0.22, 0.22].map((x) => (
          <group key={x} position={[x, 0.02, 0.6]}>
            <mesh>
              <sphereGeometry args={[0.13, 32, 32]} />
              <meshStandardMaterial color={eyeWhite} roughness={0.2} />
            </mesh>
            <mesh position={[0, -0.01, 0.08]}>
              <sphereGeometry args={[0.09, 32, 32]} />
              <meshStandardMaterial
                color={eye}
                emissive={eye}
                emissiveIntensity={0.9}
                roughness={0.2}
              />
            </mesh>
            <mesh position={[0, -0.01, 0.14]}>
              <sphereGeometry args={[0.05, 24, 24]} />
              <meshStandardMaterial color={eyePupil} />
            </mesh>
            <mesh position={[0.03, 0.04, 0.17]}>
              <sphereGeometry args={[0.018, 16, 16]} />
              <meshBasicMaterial color="#ffffff" />
            </mesh>
          </group>
        ))}

        <mesh position={[-0.32, -0.15, 0.58]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshBasicMaterial color={cheek} transparent opacity={0.55} />
        </mesh>
        <mesh position={[0.32, -0.15, 0.58]}>
          <sphereGeometry args={[0.07, 24, 24]} />
          <meshBasicMaterial color={cheek} transparent opacity={0.55} />
        </mesh>
        <mesh position={[0, -0.28, 0.63]}>
          <torusGeometry args={[0.04, 0.012, 8, 16, Math.PI]} />
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
          <ambientLight intensity={0.55} />
          <directionalLight position={[3, 4, 3]} intensity={1.2} color="#ffffff" castShadow />
          <pointLight position={[-3, 1, 2]} intensity={0.8} color={accent} />
          <pointLight position={[3, -1, 2]} intensity={0.6} color={eye} />

          <Float speed={1.1} rotationIntensity={0.25} floatIntensity={0.4}>
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
