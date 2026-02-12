/**
 * Experience.tsx - 3D Hero Scene (Phase 2)
 *
 * - Canvas with dpr={[1, 2]}, Suspense fallback
 * - Central Icosahedron with MeshDistortMaterial (liquid/tech feel)
 * - Float from drei for gentle hover
 * - Spotlight following mouse cursor for depth
 * - Background #0a0a0a
 */
import { Suspense, useMemo } from 'react'
import { usePortfolio } from '../context/PortfolioContext'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { Canvas, useFrame } from '@react-three/fiber'
import { Float, MeshDistortMaterial, SpotLight } from '@react-three/drei'
import * as THREE from 'three'

const SCENE_BG = '#0a0a0a'
const ACCENT = '#00ff88'

function HeroObject({
  isHovered,
  scale = 1,
  detail = 2,
}: {
  isHovered: boolean
  scale?: number
  detail?: number
}) {
  return (
    <Float
      speed={isHovered ? 4 : 2}
      rotationIntensity={isHovered ? 0.4 : 0.2}
      floatIntensity={isHovered ? 0.8 : 0.5}
    >
      <mesh scale={[scale, scale, scale]}>
        <icosahedronGeometry args={[1.2, detail]} />
        <MeshDistortMaterial
          color={ACCENT}
          distort={isHovered ? 0.7 : 0.4}
          speed={isHovered ? 5 : 2.5}
          roughness={0.2}
          metalness={0.8}
          emissive={ACCENT}
          emissiveIntensity={isHovered ? 0.3 : 0.15}
        />
      </mesh>
    </Float>
  )
}

function MouseSpotlight() {
  const target = useMemo(() => new THREE.Object3D(), [])

  useFrame(({ pointer }) => {
    const range = 2.5
    target.position.set(pointer.x * range, pointer.y * range, 0)
  })

  return (
    <>
      <primitive object={target} />
      <SpotLight
        castShadow
        target={target}
        penumbra={0.5}
        angle={0.6}
        attenuation={5}
        anglePower={4}
        intensity={80}
        color={ACCENT}
        position={[3, 3, 3]}
      />
    </>
  )
}

function Scene({
  isProjectHovered,
  heroScale = 1,
  heroDetail = 2,
}: {
  isProjectHovered: boolean
  heroScale?: number
  heroDetail?: number
}) {
  return (
    <>
      <color attach="background" args={[SCENE_BG]} />
      <ambientLight intensity={0.15} />
      <pointLight position={[10, 10, 10]} intensity={0.5} color={ACCENT} />
      <MouseSpotlight />
      <HeroObject
        isHovered={isProjectHovered}
        scale={heroScale}
        detail={heroDetail}
      />
    </>
  )
}

function Loader() {
  return (
    <div
      className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-[#0a0a0a]"
      style={{ background: SCENE_BG }}
    >
      <div
        className="h-12 w-12 animate-spin rounded-full border-2 border-white/10 border-t-accent"
        aria-hidden
      />
      <p className="text-sm text-white/50">Loading experience...</p>
    </div>
  )
}

export function Experience() {
  const { isProjectHovered } = usePortfolio()
  const isMobile = useMediaQuery('(max-width: 768px)')
  const heroScale = isMobile ? 0.5 : 1
  const heroDetail = isMobile ? 1 : 2

  return (
    <div className="absolute inset-0">
      <Suspense fallback={<Loader />}>
        <Canvas
          dpr={[1, 2]}
          camera={{ position: [0, 0, 4], fov: 50 }}
          gl={{
            antialias: !isMobile,
            alpha: false,
            powerPreference: 'high-performance',
          }}
        >
          <Scene
            isProjectHovered={isProjectHovered}
            heroScale={heroScale}
            heroDetail={heroDetail}
          />
        </Canvas>
      </Suspense>
    </div>
  )
}
