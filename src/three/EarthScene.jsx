import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Line, Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function Globe() {
  const meshRef = useRef();
  const glowRef = useRef();

  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.1;
    }
    if (glowRef.current) {
      glowRef.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <group>
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          color="#3939d4"
          emissive="#1d4ed8"
          emissiveIntensity={0.3}
          wireframe={false}
          transparent
          opacity={0.9}
        />
      </Sphere>
      <Sphere ref={glowRef} args={[2.1, 32, 32]}>
        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
}

function ConnectionLines() {
  const points = useMemo(() => {
    const lines = [];
    const numLines = 30;
    for (let i = 0; i < numLines; i++) {
      const startLat = (Math.random() - 0.5) * Math.PI;
      const startLng = Math.random() * Math.PI * 2;
      const endLat = (Math.random() - 0.5) * Math.PI;
      const endLng = Math.random() * Math.PI * 2;
      
      const start = new THREE.Vector3(
        2.1 * Math.cos(startLat) * Math.cos(startLng),
        2.1 * Math.sin(startLat),
        2.1 * Math.cos(startLat) * Math.sin(startLng)
      );
      const end = new THREE.Vector3(
        2.1 * Math.cos(endLat) * Math.cos(endLng),
        2.1 * Math.sin(endLat),
        2.1 * Math.cos(endLat) * Math.sin(endLng)
      );
      
      const mid = new THREE.Vector3().addVectors(start, end).multiplyScalar(0.5);
      const dist = start.distanceTo(end);
      mid.normalize().multiplyScalar(2.1 + dist * 0.3);
      
      const curve = new THREE.QuadraticBezierCurve3(start, mid, end);
      const curvePoints = curve.getPoints(20);
      lines.push(curvePoints);
    }
    return lines;
  }, []);

  return (
    <group>
      {points.map((linePoints, i) => (
        <Line
          key={i}
          points={linePoints}
          color="#60a5fa"
          lineWidth={1}
          transparent
          opacity={0.3 + Math.random() * 0.3}
        />
      ))}
    </group>
  );
}

function AidParticles() {
  const count = 100;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 3;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  const meshRef = useRef();
  useFrame(({ clock }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#10b981"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function DisasterZones() {
  const zones = useMemo(() => {
    const locations = [
      { lat: 0.5, lng: -1.2, color: '#ef4444', intensity: 1 },
      { lat: -0.3, lng: 2.1, color: '#f59e0b', intensity: 0.8 },
      { lat: 0.8, lng: 1.5, color: '#ef4444', intensity: 0.9 },
      { lat: -0.6, lng: -0.8, color: '#f59e0b', intensity: 0.7 },
      { lat: 0.2, lng: 2.5, color: '#ef4444', intensity: 0.6 },
    ];
    return locations.map((loc) => {
      const x = 2.2 * Math.cos(loc.lat) * Math.cos(loc.lng);
      const y = 2.2 * Math.sin(loc.lat);
      const z = 2.2 * Math.cos(loc.lat) * Math.sin(loc.lng);
      return { position: [x, y, z], ...loc };
    });
  }, []);

  return (
    <group>
      {zones.map((zone, i) => (
        <Float key={i} speed={2} floatIntensity={0.5}>
          <mesh position={zone.position}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshBasicMaterial color={zone.color} />
          </mesh>
          <mesh position={zone.position}>
            <ringGeometry args={[0.1, 0.2, 32]} />
            <meshBasicMaterial
              color={zone.color}
              transparent
              opacity={0.3}
              side={THREE.DoubleSide}
            />
          </mesh>
        </Float>
      ))}
    </group>
  );
}

export default function EarthScene() {
  return (
    <div className="absolute inset-0">
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
        
        <Globe />
        <ConnectionLines />
        <AidParticles />
        <DisasterZones />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.5}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}
