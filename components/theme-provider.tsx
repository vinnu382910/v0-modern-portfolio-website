"use client"

import type * as React from "react"
import { createContext, useContext, useEffect, useState } from "react"

type Theme = "space" | "neural" | "light" | "dark"

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  themes?: Theme[]
  attribute?: string
  enableSystem?: boolean
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
  themes: Theme[]
}

const initialState: ThemeProviderState = {
  theme: "space",
  setTheme: () => null,
  themes: ["space", "neural", "light", "dark"],
}

const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = "space",
  themes = ["space", "neural", "light", "dark"],
  attribute = "class",
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return

    const root = window.document.documentElement

    // Remove all theme classes
    root.classList.remove("theme-space", "theme-neural", "theme-light", "theme-dark")

    // Add current theme class
    root.classList.add(`theme-${theme}`)

    // Also set data attribute for additional styling
    root.setAttribute("data-theme", theme)
  }, [theme, mounted])

  const value = {
    theme,
    setTheme: (newTheme: Theme) => {
      console.log("Setting theme to:", newTheme) // Debug log
      setTheme(newTheme)
    },
    themes,
  }

  if (!mounted) {
    return <>{children}</>
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
