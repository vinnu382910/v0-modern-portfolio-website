"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Download, Github, Instagram, Linkedin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment, Float } from "@react-three/drei"
import { Suspense } from "react"
import { LaptopFallback } from "@/components/3d-fallback"

function Model() {
  return <LaptopFallback />
}

export default function Hero() {
  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/vinay-kalva-0a1360247/",
    },
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/vinnu382910",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/vinay_mern/",
    },
    {
      name: "LeetCode",
      icon: <Code className="w-5 h-5" />,
      url: "https://leetcode.com/u/vinay572/",
    },
  ]

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center text-center">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 md:order-1"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Hi there, I am{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Vinay</span>
          </h1>
          <h2 className="text-xl md:text-2xl mb-6 text-white/80">
            I&apos;m a{" "}
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "Backend Developer",
                1000,
                "MERN Stack Developer",
                1000,
                "Android Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-primary font-semibold"
              repeat={Number.POSITIVE_INFINITY}
            />
          </h2>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}>
            <Button
              className="btn-primary group"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1Bk9x3uqJiBDTdKj60-na9Uux6rsMMFY_/view?usp=sharing",
                  "_blank",
                )
              }
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex justify-center gap-4 mt-8"
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary/20 transition-all duration-300 hover:scale-110"
                whileHover={{ y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + index * 0.1, duration: 0.5 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="order-1 md:order-2 h-[300px] md:h-[400px]"
        >
          <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
            <ambientLight intensity={0.5} />
            <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
            <pointLight position={[-10, -10, -10]} />
            <Suspense fallback={null}>
              <Float speed={1.5} rotationIntensity={1} floatIntensity={2}>
                <Model />
              </Float>
              <Environment preset="city" />
            </Suspense>
            <OrbitControls enableZoom={false} autoRotate />
          </Canvas>
        </motion.div>
      </div>
    </div>
  )
}
