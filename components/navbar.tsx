"use client"

import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Link as ScrollLink } from "react-scroll"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"

const navItems = [
  { name: "Home", to: "home", href: "/" },
  { name: "About", to: "about", href: "/#about" },
  { name: "Experience", to: "experience", href: "/#experience" },
  { name: "Skills", to: "skills", href: "/#skills" },
  { name: "Projects", to: "projects", href: "/#projects" },
  { name: "Certificates", to: "certificates", href: "/#certificates" },
  { name: "Blog", to: "blog", href: "/blog" },
  { name: "Contact", to: "contact", href: "/#contact" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-background/80 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center" role="navigation">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          <Link href="/" aria-label="Kalva Vinay - Full Stack Developer Portfolio">
            Kalva Vinay
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          {navItems.map((item, index) => {
            if (item.name === "Blog") {
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-white hover:text-primary cursor-pointer transition-colors duration-300 group"
                  aria-label={`Navigate to ${item.name}`}
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
                </Link>
              )
            }

            return (
              <ScrollLink
                key={item.to}
                to={item.to}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                className="relative text-white hover:text-primary cursor-pointer transition-colors duration-300 group"
                activeClass="text-primary"
                aria-label={`Navigate to ${item.name} section`}
              >
                {item.name}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            )
          })}
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => {
                if (item.name === "Blog") {
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-white hover:text-primary py-2 border-b border-white/10"
                      onClick={() => setIsOpen(false)}
                      aria-label={`Navigate to ${item.name}`}
                    >
                      {item.name}
                    </Link>
                  )
                }

                return (
                  <ScrollLink
                    key={item.to}
                    to={item.to}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="text-white hover:text-primary py-2 border-b border-white/10"
                    activeClass="text-primary"
                    onClick={() => setIsOpen(false)}
                    aria-label={`Navigate to ${item.name} section`}
                  >
                    {item.name}
                  </ScrollLink>
                )
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
