"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Sparkles, Zap } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getThemeIcon = () => {
    switch (theme) {
      case "space":
        return <Sparkles className="text-primary w-5 h-5" />
      case "neural":
        return <Zap className="text-primary w-5 h-5" />
      case "light":
        return <Sun className="text-primary w-5 h-5" />
      case "dark":
        return <Moon className="text-primary w-5 h-5" />
      default:
        return <Sparkles className="text-primary w-5 h-5" />
    }
  }

  const handleThemeChange = (newTheme: "space" | "neural" | "light" | "dark") => {
    setTheme(newTheme)
    setIsOpen(false)
  }

  const themes = [
    { key: "space", label: "Space", icon: Sparkles },
    { key: "neural", label: "Neural", icon: Zap },
    { key: "light", label: "Light", icon: Sun },
    { key: "dark", label: "Dark", icon: Moon },
  ]

  return (
    <div className="relative">
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
      >
        {getThemeIcon()}
      </motion.button>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute bottom-full right-0 mb-2 bg-background/90 backdrop-blur-md border border-white/10 rounded-lg shadow-xl overflow-hidden"
        >
          {themes.map((themeOption) => {
            const IconComponent = themeOption.icon
            return (
              <button
                key={themeOption.key}
                onClick={() => handleThemeChange(themeOption.key as any)}
                className={`flex items-center gap-2 px-4 py-2 w-full text-left hover:bg-primary/20 transition-colors ${
                  theme === themeOption.key ? "bg-primary/10 text-primary" : ""
                }`}
              >
                <IconComponent className="h-4 w-4" />
                <span className="text-sm">{themeOption.label}</span>
              </button>
            )
          })}
        </motion.div>
      )}

      {/* Backdrop to close dropdown */}
      {isOpen && <div className="fixed inset-0 z-[-1]" onClick={() => setIsOpen(false)} />}
    </div>
  )
}
