import React, { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// Floating particles that drift and glow
function Particles({ count = 600, mouse }) {
  const mesh = useRef();
  const light = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const speeds = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Spread particles across a large area
      positions[i * 3] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 30;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

      // Purple-to-cyan gradient colors
      const t = Math.random();
      if (t < 0.4) {
        // Deep purple
        colors[i * 3] = 0.51 + Math.random() * 0.1;
        colors[i * 3 + 1] = 0.27 + Math.random() * 0.1;
        colors[i * 3 + 2] = 0.93 + Math.random() * 0.07;
      } else if (t < 0.7) {
        // Bright purple
        colors[i * 3] = 0.66;
        colors[i * 3 + 1] = 0.33;
        colors[i * 3 + 2] = 0.97;
      } else {
        // Cyan accent
        colors[i * 3] = 0.3 + Math.random() * 0.2;
        colors[i * 3 + 1] = 0.6 + Math.random() * 0.3;
        colors[i * 3 + 2] = 1.0;
      }

      sizes[i] = Math.random() * 3 + 0.5;
      speeds[i] = Math.random() * 0.5 + 0.1;
    }

    return { positions, colors, sizes, speeds };
  }, [count]);

  useFrame((state) => {
    if (!mesh.current) return;
    const time = state.clock.getElapsedTime();
    const posArray = mesh.current.geometry.attributes.position.array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      const speed = particles.speeds[i];

      // Gentle floating motion
      posArray[i3 + 1] += Math.sin(time * speed + i) * 0.002;
      posArray[i3] += Math.cos(time * speed * 0.5 + i) * 0.001;
      posArray[i3 + 2] += Math.sin(time * speed * 0.3 + i * 0.5) * 0.001;

      // Wrap particles that drift too far
      if (posArray[i3 + 1] > 15) posArray[i3 + 1] = -15;
      if (posArray[i3 + 1] < -15) posArray[i3 + 1] = 15;
    }

    mesh.current.geometry.attributes.position.needsUpdate = true;

    // Subtle mouse parallax on entire particle system
    if (mouse.current) {
      mesh.current.rotation.y = THREE.MathUtils.lerp(
        mesh.current.rotation.y,
        mouse.current[0] * 0.1,
        0.02
      );
      mesh.current.rotation.x = THREE.MathUtils.lerp(
        mesh.current.rotation.x,
        mouse.current[1] * 0.05,
        0.02
      );
    }

    // Slow global rotation
    mesh.current.rotation.z += 0.0003;
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={count}
          array={particles.colors}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-size"
          count={count}
          array={particles.sizes}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

// Glowing orbs that float slowly
function GlowOrbs({ count = 5 }) {
  const orbs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 8 - 3,
      ],
      scale: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.3 + 0.1,
      color: i % 2 === 0 ? '#8245ec' : '#6366f1',
    }));
  }, [count]);

  return (
    <>
      {orbs.map((orb, i) => (
        <FloatingOrb key={i} {...orb} index={i} />
      ))}
    </>
  );
}

function FloatingOrb({ position, scale, speed, color, index }) {
  const meshRef = useRef();

  useFrame((state) => {
    if (!meshRef.current) return;
    const time = state.clock.getElapsedTime();
    meshRef.current.position.y =
      position[1] + Math.sin(time * speed + index * 2) * 2;
    meshRef.current.position.x =
      position[0] + Math.cos(time * speed * 0.7 + index) * 1.5;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <sphereGeometry args={[0.5, 16, 16]} />
      <meshBasicMaterial color={color} transparent opacity={0.12} />
    </mesh>
  );
}

// Animated connecting lines between nearby particles
function ConnectionLines() {
  const lineRef = useRef();
  const lineCount = 40;

  const linePositions = useMemo(() => {
    const positions = new Float32Array(lineCount * 6);
    for (let i = 0; i < lineCount; i++) {
      const i6 = i * 6;
      positions[i6] = (Math.random() - 0.5) * 20;
      positions[i6 + 1] = (Math.random() - 0.5) * 20;
      positions[i6 + 2] = (Math.random() - 0.5) * 10;
      positions[i6 + 3] = positions[i6] + (Math.random() - 0.5) * 4;
      positions[i6 + 4] = positions[i6 + 1] + (Math.random() - 0.5) * 4;
      positions[i6 + 5] = positions[i6 + 2] + (Math.random() - 0.5) * 2;
    }
    return positions;
  }, [lineCount]);

  useFrame((state) => {
    if (!lineRef.current) return;
    const time = state.clock.getElapsedTime();
    lineRef.current.rotation.y = Math.sin(time * 0.05) * 0.1;
    lineRef.current.rotation.x = Math.cos(time * 0.03) * 0.05;
  });

  return (
    <lineSegments ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={lineCount * 2}
          array={linePositions}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial color="#8245ec" transparent opacity={0.08} />
    </lineSegments>
  );
}

export default function ThreeBackground() {
  const mouse = useRef([0, 0]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current = [
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1,
      ];
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 10], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.3} />
        <Particles count={500} mouse={mouse} />
        <GlowOrbs count={6} />
        <ConnectionLines />
      </Canvas>
    </div>
  );
}
