"use client"

import { useCallback, useEffect, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"
import type { Engine } from "tsparticles-engine"

export default function ParticleBackground() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine)
  }, [])

  if (!mounted) return null

  const getParticleConfig = () => {
    // Base configurations for different themes
    const themeConfigs = {
      space: {
        color: "#6c5ce7",
        shape: "circle",
        opacity: 0.5,
        size: 3,
        lineColor: "#6c5ce7",
        speed: 1,
      },
      neural: {
        color: "#fd79a8",
        shape: "polygon",
        opacity: 0.5,
        size: 3,
        lineColor: "#fd79a8",
        speed: 1,
      },
      light: {
        color: "#3b82f6",
        shape: "circle",
        opacity: 0.3,
        size: 2,
        lineColor: "#3b82f6",
        speed: 0.8,
      },
      dark: {
        color: "#4f46e5",
        shape: "circle",
        opacity: 0.5,
        size: 2.5,
        lineColor: "#4f46e5",
        speed: 0.8,
      },
    }

    // Get current theme config
    const currentTheme = themeConfigs[theme as keyof typeof themeConfigs] || themeConfigs.space

    return {
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            value_area: 800,
          },
        },
        color: {
          value: currentTheme.color,
        },
        shape: {
          type: currentTheme.shape,
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 6,
          },
        },
        opacity: {
          value: currentTheme.opacity,
          random: true,
          anim: {
            enable: true,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: currentTheme.size,
          random: true,
          anim: {
            enable: true,
            speed: 2,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: currentTheme.lineColor,
          opacity: 0.4,
          width: 1,
        },
        move: {
          enable: true,
          speed: currentTheme.speed,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "grab",
          },
          onclick: {
            enable: true,
            mode: "push",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1,
            },
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    }
  }

  // For light theme, use a subtle gradient background instead of particles
  if (theme === "light") {
    return (
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-indigo-50"></div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 -z-10">
      <Particles id="tsparticles" init={particlesInit} options={getParticleConfig()} />
    </div>
  )
}
