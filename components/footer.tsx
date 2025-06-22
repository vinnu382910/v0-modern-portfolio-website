"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Instagram, Code, Mail, MapPin, Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/vinnu382910",
      description: "View my code repositories and open source contributions",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://www.linkedin.com/in/vinay-kalva-0a1360247/",
      description: "Connect with me professionally on LinkedIn",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://www.instagram.com/vinay_mern/",
      description: "Follow my journey on Instagram",
    },
    {
      name: "LeetCode",
      icon: <Code className="w-5 h-5" />,
      url: "https://leetcode.com/u/vinay572/",
      description: "Check out my coding solutions on LeetCode",
    },
  ]

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certificates", href: "#certificates" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <footer className="bg-background/95 backdrop-blur-md border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About Section */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Kalva Vinay
              </h3>
              <p className="text-white/80 mb-4 leading-relaxed">
                Full Stack Developer specializing in MERN Stack development. Graduate from Ganapathy Engineering College
                with expertise in React, Node.js, MongoDB, and modern web technologies. Passionate about creating
                innovative web solutions and contributing to open source projects.
              </p>
              <div className="flex items-center gap-4 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:vinaykalva712@gmail.com"
                    className="hover:text-primary transition-colors"
                    aria-label="Email Kalva Vinay"
                  >
                    vinaykalva712@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  <span>Telangana, India</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-primary transition-colors duration-300"
                      aria-label={`Navigate to ${link.name} section`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Social Links */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold mb-4">Connect With Me</h4>
              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-primary transition-all duration-300 group"
                    aria-label={link.description}
                  >
                    <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      {link.icon}
                    </div>
                    <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-white/60 text-sm">
            <p>
              © {currentYear} Kalva Vinay. All rights reserved. | Graduate of{" "}
              <span className="text-primary">Ganapathy Engineering College</span>
            </p>
          </div>
          <div className="flex items-center gap-2 text-white/60 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>using Next.js & React</span>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
