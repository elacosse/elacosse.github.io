import { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const ref = useRef<THREE.Points>(null!);
  const { mouse, viewport } = useThree();
  
  const count = 3000;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 12;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 12;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.y = time * 0.02;
    ref.current.rotation.x = time * 0.01;

    const targetX = (mouse.x * viewport.width) / 4;
    const targetY = (mouse.y * viewport.height) / 4;
    
    ref.current.position.x += (targetX - ref.current.position.x) * 0.05;
    ref.current.position.y += (targetY - ref.current.position.y) * 0.05;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.012}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function CognitiveCore() {
  const meshRef = useRef<THREE.Mesh>(null!);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.z = time * 0.2;
    meshRef.current.rotation.y = time * 0.1;
    
    // Pulse effect
    const scale = 1 + Math.sin(time * 2) * 0.05;
    meshRef.current.scale.set(scale, scale, scale);
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere
        ref={meshRef}
        args={[1, 64, 64]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <MeshDistortMaterial
          color={hovered ? "#ffffff" : "#444444"}
          speed={2}
          distort={0.4}
          radius={1}
          transparent
          opacity={0.6}
          wireframe
        />
      </Sphere>
    </Float>
  );
}

function NeuralLines() {
  const ref = useRef<THREE.Group>(null!);
  const count = 25;
  
  const lines = useMemo(() => {
    return Array.from({ length: count }).map(() => {
      const points = [];
      const radius = 2 + Math.random() * 3;
      const phi = Math.random() * Math.PI * 2;
      const theta = Math.random() * Math.PI;
      
      const start = new THREE.Vector3().setFromSphericalCoords(radius, phi, theta);
      points.push(start);
      
      for (let i = 0; i < 4; i++) {
        points.push(new THREE.Vector3(
          start.x + (Math.random() - 0.5) * 3,
          start.y + (Math.random() - 0.5) * 3,
          start.z + (Math.random() - 0.5) * 3
        ));
      }
      
      return new THREE.CatmullRomCurve3(points).getPoints(50);
    });
  }, []);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
  });

  return (
    <group ref={ref}>
      {lines.map((points, i) => (
        <line key={i}>
          <bufferGeometry attach="geometry">
            <bufferAttribute
              attach="attributes-position"
              count={points.length}
              array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
              itemSize={3}
            />
          </bufferGeometry>
          <lineBasicMaterial attach="material" color="#ffffff" transparent opacity={0.08} />
        </line>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="w-full h-full bg-[#0a0a0a]">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <CognitiveCore />
        <ParticleField />
        <NeuralLines />
      </Canvas>
    </div>
  );
}
