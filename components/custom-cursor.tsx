"use client"

import { useState, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import "./custom-cursor.css"

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [hidden, setHidden] = useState(true)
  const [clicked, setClicked] = useState(false)
  const [linkHovered, setLinkHovered] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return

    // Don't show custom cursor on touch devices
    const isTouchDevice = () => {
      return "ontouchstart" in window || navigator.maxTouchPoints > 0
    }

    if (isTouchDevice()) return

    const addEventListeners = () => {
      document.addEventListener("mousemove", onMouseMove)
      document.addEventListener("mouseenter", onMouseEnter)
      document.addEventListener("mouseleave", onMouseLeave)
      document.addEventListener("mousedown", onMouseDown)
      document.addEventListener("mouseup", onMouseUp)
      document.body.addEventListener("mouseover", onMouseOver)
    }

    const removeEventListeners = () => {
      document.removeEventListener("mousemove", onMouseMove)
      document.removeEventListener("mouseenter", onMouseEnter)
      document.removeEventListener("mouseleave", onMouseLeave)
      document.removeEventListener("mousedown", onMouseDown)
      document.removeEventListener("mouseup", onMouseUp)
      document.body.removeEventListener("mouseover", onMouseOver)
    }

    const onMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    const onMouseEnter = () => {
      setHidden(false)
    }

    const onMouseLeave = () => {
      setHidden(true)
    }

    const onMouseDown = () => {
      setClicked(true)
    }

    const onMouseUp = () => {
      setClicked(false)
    }

    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isLink =
        target.tagName.toLowerCase() === "a" ||
        target.tagName.toLowerCase() === "button" ||
        target.closest("a") ||
        target.closest("button") ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button"

      setLinkHovered(isLink)
    }

    // Hide default cursor
    document.body.classList.add("custom-cursor-active")

    addEventListeners()
    setHidden(false)

    return () => {
      removeEventListeners()
      document.body.classList.remove("custom-cursor-active")
    }
  }, [])

  if (hidden) return null

  const cursorClasses = `custom-cursor theme-${theme} ${clicked ? "clicked" : ""} ${linkHovered ? "link-hovered" : ""}`

  return (
    <>
      <div
        className={`${cursorClasses} cursor-dot`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
      <div
        className={`${cursorClasses} cursor-outline`}
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      />
    </>
  )
}
