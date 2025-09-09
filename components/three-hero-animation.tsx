"use client"

import { useEffect, useRef } from "react"

export function ThreeHeroAnimation() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    let scene: any,
      camera: any,
      renderer: any,
      particles: any[] = []
    let animationId: number

    const init = async () => {
      // Dynamically import Three.js
      const THREE = await import("three")

      // Scene setup
      scene = new THREE.Scene()
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })

      if (mountRef.current) {
        renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight)
        renderer.setClearColor(0x000000, 0) // Transparent background
        mountRef.current.appendChild(renderer.domElement)
      }

      // Create floating particles
      const particleGeometry = new THREE.SphereGeometry(0.02, 8, 8)
      const particleMaterials = [
        new THREE.MeshBasicMaterial({ color: 0x00ffff, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0x0080ff, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0x8000ff, transparent: true, opacity: 0.6 }),
        new THREE.MeshBasicMaterial({ color: 0xff0080, transparent: true, opacity: 0.6 }),
      ]

      // Create 50 floating particles
      for (let i = 0; i < 50; i++) {
        const particle = new THREE.Mesh(
          particleGeometry,
          particleMaterials[Math.floor(Math.random() * particleMaterials.length)],
        )

        particle.position.x = (Math.random() - 0.5) * 10
        particle.position.y = (Math.random() - 0.5) * 6
        particle.position.z = (Math.random() - 0.5) * 5

        // Add random velocity for floating effect
        particle.userData = {
          velocity: {
            x: (Math.random() - 0.5) * 0.003,
            y: (Math.random() - 0.5) * 0.003,
            z: (Math.random() - 0.5) * 0.003,
          },
          originalY: particle.position.y,
          floatSpeed: Math.random() * 0.005 + 0.003,
        }

        scene.add(particle)
        particles.push(particle)
      }

      // Create geometric shapes
      const shapes = []

      // Floating rings
      for (let i = 0; i < 3; i++) {
        const ringGeometry = new THREE.RingGeometry(0.5, 0.7, 16)
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: [0x00ffff, 0x0080ff, 0x8000ff][i],
          transparent: true,
          opacity: 0.3,
          side: THREE.DoubleSide,
        })
        const ring = new THREE.Mesh(ringGeometry, ringMaterial)

        ring.position.x = (Math.random() - 0.5) * 8
        ring.position.y = (Math.random() - 0.5) * 4
        ring.position.z = (Math.random() - 0.5) * 3

        ring.userData = {
          rotationSpeed: {
            x: (Math.random() - 0.5) * 0.005,
            y: (Math.random() - 0.5) * 0.005,
            z: (Math.random() - 0.5) * 0.005,
          },
        }

        scene.add(ring)
        shapes.push(ring)
      }

      camera.position.z = 5

      // Animation loop
      const animate = () => {
        animationId = requestAnimationFrame(animate)

        // Animate particles
        particles.forEach((particle) => {
          // Floating motion
          particle.position.y = particle.userData.originalY + Math.sin(Date.now() * particle.userData.floatSpeed) * 0.5

          // Drift motion
          particle.position.x += particle.userData.velocity.x
          particle.position.z += particle.userData.velocity.z

          // Boundary check - reset position if too far
          if (Math.abs(particle.position.x) > 6) {
            particle.position.x = (Math.random() - 0.5) * 10
          }
          if (Math.abs(particle.position.z) > 4) {
            particle.position.z = (Math.random() - 0.5) * 5
          }

          // Rotate particles
          particle.rotation.x += 0.003
          particle.rotation.y += 0.003
        })

        // Animate shapes
        shapes.forEach((shape) => {
          shape.rotation.x += shape.userData.rotationSpeed.x
          shape.rotation.y += shape.userData.rotationSpeed.y
          shape.rotation.z += shape.userData.rotationSpeed.z
        })

        renderer.render(scene, camera)
      }

      animate()
    }

    init()

    // Handle resize
    const handleResize = () => {
      if (camera && renderer && mountRef.current) {
        camera.aspect = mountRef.current.offsetWidth / mountRef.current.offsetHeight
        camera.updateProjectionMatrix()
        renderer.setSize(mountRef.current.offsetWidth, mountRef.current.offsetHeight)
      }
    }

    window.addEventListener("resize", handleResize)

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
      if (mountRef.current && renderer) {
        mountRef.current.removeChild(renderer.domElement)
      }
      if (renderer) {
        renderer.dispose()
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none" style={{ zIndex: 1 }} />
}
