"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Moon, Sun, Sparkles, Zap } from "lucide-react"
import { useTheme } from "@/components/theme-provider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const getThemeIcon = () => {
    switch (theme) {
      case "space":
        return <Sparkles className="text-primary" />
      case "neural":
        return <Zap className="text-primary" />
      case "light":
        return <Sun className="text-primary" />
      case "dark":
        return <Moon className="text-primary" />
      default:
        return <Sparkles className="text-primary" />
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/20"
        >
          {getThemeIcon()}
        </motion.button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-background/80 backdrop-blur-md border border-white/10">
        <DropdownMenuItem onClick={() => setTheme("space")} className="flex items-center gap-2 cursor-pointer">
          <Sparkles className="h-4 w-4" />
          <span>Space</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("neural")} className="flex items-center gap-2 cursor-pointer">
          <Zap className="h-4 w-4" />
          <span>Neural</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("light")} className="flex items-center gap-2 cursor-pointer">
          <Sun className="h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="flex items-center gap-2 cursor-pointer">
          <Moon className="h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
