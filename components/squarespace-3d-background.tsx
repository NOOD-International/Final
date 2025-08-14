"use client"

import { useEffect, useRef, useState, Suspense } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { Sphere, Box, Environment, Float } from "@react-three/drei"
import * as THREE from "three"

// Card component that floats around the sphere
function FloatingCard({
  position,
  rotation,
  delay = 0,
}: { position: [number, number, number]; rotation: [number, number, number]; delay?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const [hovered, setHovered] = useState(false)

  useFrame((state) => {
    if (meshRef.current) {
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + delay) * 0.2
      meshRef.current.rotation.x = rotation[0] + Math.sin(state.clock.elapsedTime * 0.5 + delay) * 0.1
      meshRef.current.rotation.y = rotation[1] + Math.cos(state.clock.elapsedTime * 0.3 + delay) * 0.1

      // Scale animation on hover
      const targetScale = hovered ? 1.1 : 1
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1)
    }
  })

  return (
    <Float speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
      <Box
        ref={meshRef}
        position={position}
        rotation={rotation}
        args={[0.8, 1.2, 0.05]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#4f46e5" : "#1e293b"}
          transparent
          opacity={0.8}
          roughness={0.1}
          metalness={0.2}
        />
      </Box>
    </Float>
  )
}

// Particle system around the sphere
function ParticleSystem() {
  const pointsRef = useRef<THREE.Points>(null)
  const particleCount = 1000

  const positions = new Float32Array(particleCount * 3)
  const colors = new Float32Array(particleCount * 3)

  for (let i = 0; i < particleCount; i++) {
    // Random positions in a sphere
    const radius = Math.random() * 8 + 2
    const theta = Math.random() * Math.PI * 2
    const phi = Math.acos(Math.random() * 2 - 1)

    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[i * 3 + 2] = radius * Math.cos(phi)

    // Random colors (blue to purple gradient)
    colors[i * 3] = Math.random() * 0.5 + 0.3 // R
    colors[i * 3 + 1] = Math.random() * 0.3 + 0.4 // G
    colors[i * 3 + 2] = Math.random() * 0.5 + 0.7 // B
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.1
      pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.2
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={particleCount} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={particleCount} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

// Central glowing sphere
function CentralSphere() {
  const sphereRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (sphereRef.current) {
      sphereRef.current.rotation.y = state.clock.elapsedTime * 0.2
      sphereRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1

      // Pulsing effect
      const scale = 1 + Math.sin(state.clock.elapsedTime * 2) * 0.05
      sphereRef.current.scale.setScalar(scale)
    }
  })

  return (
    <Sphere ref={sphereRef} args={[1, 64, 64]}>
      <meshStandardMaterial
        color="#4f46e5"
        emissive="#1e40af"
        emissiveIntensity={0.3}
        transparent
        opacity={0.7}
        roughness={0.1}
        metalness={0.8}
      />
    </Sphere>
  )
}

// Camera controller for smooth movement
function CameraController() {
  const { camera } = useThree()

  useFrame((state) => {
    // Smooth camera movement
    camera.position.x = Math.sin(state.clock.elapsedTime * 0.1) * 2
    camera.position.y = Math.cos(state.clock.elapsedTime * 0.15) * 1
    camera.lookAt(0, 0, 0)
  })

  return null
}

// Main 3D scene
function Scene() {
  return (
    <>
      <CameraController />

      {/* Lighting */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4f46e5" />

      {/* Environment */}
      <Environment preset="night" />

      {/* Central sphere */}
      <CentralSphere />

      {/* Particle system */}
      <ParticleSystem />

      {/* Floating cards */}
      <FloatingCard position={[3, 2, 1]} rotation={[0.2, 0.3, 0]} delay={0} />
      <FloatingCard position={[-2.5, 1.5, 2]} rotation={[0.1, -0.2, 0.1]} delay={1} />
      <FloatingCard position={[1.5, -2, 2.5]} rotation={[-0.1, 0.4, -0.1]} delay={2} />
      <FloatingCard position={[-3, -1, -1.5]} rotation={[0.3, -0.1, 0.2]} delay={3} />
      <FloatingCard position={[2, 3, -2]} rotation={[-0.2, 0.2, -0.1]} delay={4} />
      <FloatingCard position={[-1, -3, 1]} rotation={[0.1, -0.3, 0.1]} delay={5} />
      <FloatingCard position={[4, 0, 0]} rotation={[0, 0.5, 0]} delay={6} />
      <FloatingCard position={[-4, 2, -1]} rotation={[0.2, -0.4, 0]} delay={7} />
    </>
  )
}

// Loading fallback component
function LoadingFallback() {
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 animate-pulse">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    </div>
  )
}

export function SquareSpace3DBackground() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    // Simulate loading time and check for WebGL support
    const timer = setTimeout(() => {
      try {
        const canvas = document.createElement("canvas")
        const gl = canvas.getContext("webgl") || canvas.getContext("experimental-webgl")
        if (gl) {
          setIsLoaded(true)
        } else {
          setHasError(true)
        }
      } catch (error) {
        console.error("WebGL not supported:", error)
        setHasError(true)
      }
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  // Error boundary fallback
  if (hasError) {
    return (
      <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
      </div>
    )
  }

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      {/* Loading state */}
      {!isLoaded && <LoadingFallback />}

      {/* 3D Canvas */}
      {isLoaded && (
        <Suspense fallback={<LoadingFallback />}>
          <Canvas
            camera={{ position: [0, 0, 8], fov: 60 }}
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: "opacity 1s ease-in-out",
            }}
            gl={{
              antialias: true,
              alpha: true,
              powerPreference: "high-performance",
            }}
            onCreated={({ gl }) => {
              gl.setClearColor(0x000000, 0)
            }}
          >
            <Scene />
          </Canvas>
        </Suspense>
      )}

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 pointer-events-none" />
    </div>
  )
}
