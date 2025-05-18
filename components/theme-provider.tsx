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
  enableSystem = false,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement

    root.classList.remove("theme-space", "theme-neural", "theme-light", "theme-dark")
    root.classList.add(`theme-${theme}`)

    if (attribute === "class") {
      root.classList.remove(...themes.map((t) => t))
      root.classList.add(theme)
    } else {
      root.setAttribute(attribute, theme)
    }
  }, [theme, attribute, themes])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      setTheme(theme)
    },
    themes,
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
