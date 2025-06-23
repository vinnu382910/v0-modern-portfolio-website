"use client"

import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { Download, Github, Instagram, Linkedin, Code } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

// Simple 2D fallback component instead of 3D
function SimpleHeroGraphic() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.div
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="relative w-48 h-48 md:w-64 md:h-64"
      >
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full border-4 border-primary/30"></div>

        {/* Middle ring */}
        <motion.div
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          className="absolute inset-4 rounded-full border-2 border-secondary/50"
        ></motion.div>

        {/* Inner circle */}
        <div className="absolute inset-8 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
          <motion.div
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="text-4xl md:text-6xl"
          >
            💻
          </motion.div>
        </div>

        {/* Floating dots */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              rotate: [0, 360],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 6 + i,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.5,
            }}
            className="absolute w-2 h-2 bg-primary rounded-full"
            style={{
              top: `${20 + Math.sin((i * 60 * Math.PI) / 180) * 30}%`,
              left: `${50 + Math.cos((i * 60 * Math.PI) / 180) * 40}%`,
            }}
          ></motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default function Hero() {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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
            {isClient && (
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
            )}
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
          <SimpleHeroGraphic />
        </motion.div>
      </div>
    </div>
  )
}
