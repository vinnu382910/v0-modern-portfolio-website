"use client"

// Create a new component for fallback 3D objects
import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import type { MeshProps } from "@react-three/fiber"

export function LaptopFallback() {
  const baseRef = useRef<MeshProps>()
  const screenRef = useRef<MeshProps>()

  useFrame((state) => {
    if (baseRef.current && screenRef.current) {
      baseRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      screenRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1 + 0.2
    }
  })

  return (
    <group position={[0, 0, 0]}>
      {/* Base */}
      <mesh ref={baseRef} position={[0, -0.1, 0]}>
        <boxGeometry args={[2, 0.1, 1.5]} />
        <meshStandardMaterial color="#6c5ce7" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Screen */}
      <mesh ref={screenRef} position={[0, 0.5, -0.5]} rotation={[0.2, 0, 0]}>
        <boxGeometry args={[1.8, 1.2, 0.1]} />
        <meshStandardMaterial color="#6c5ce7" metalness={0.5} roughness={0.2} />
      </mesh>

      {/* Screen Display */}
      <mesh position={[0, 0.5, -0.45]} rotation={[0.2, 0, 0]}>
        <planeGeometry args={[1.6, 1]} />
        <meshStandardMaterial color="#1e1e2e" emissive="#6c5ce7" emissiveIntensity={0.2} />
      </mesh>

      {/* Keyboard */}
      <mesh position={[0, -0.04, 0.2]}>
        <planeGeometry args={[1.8, 1.2]} />
        <meshStandardMaterial color="#2d2d3a" />
      </mesh>
    </group>
  )
}

export function ProjectFallback({ type }: { type: string }) {
  const groupRef = useRef<any>()

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.3
    }
  })

  // Different fallbacks based on project type
  if (type === "Frontend") {
    return (
      <group ref={groupRef}>
        <mesh position={[0, 0, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#6c5ce7" wireframe />
        </mesh>
        <mesh position={[0, 0, 0]} scale={0.8}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#6c5ce7" opacity={0.3} transparent />
        </mesh>
      </group>
    )
  }

  // FullStack fallback
  return (
    <group ref={groupRef}>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="#fd79a8" wireframe />
      </mesh>
      <mesh position={[0, 0, 0]} scale={0.8}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#fd79a8" opacity={0.3} transparent />
      </mesh>
    </group>
  )
}
