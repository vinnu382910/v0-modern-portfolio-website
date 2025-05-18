"use client"

import { useState, useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ExternalLink, Github, ArrowRight } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { projects } from "@/data/projects"

export default function Projects() {
  const [filter, setFilter] = useState("All")
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })
  const router = useRouter()

  const filteredProjects = filter === "All" ? projects : projects.filter((project) => project.type === filter)

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        My Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="flex justify-center mb-8"
      >
        <div className="flex gap-2 p-1 bg-white/5 rounded-full">
          {["All", "Frontend", "FullStack"].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`px-4 py-2 rounded-full transition-all duration-300 ${
                filter === type ? "bg-gradient-to-r from-primary to-secondary text-white" : "hover:bg-white/10"
              }`}
            >
              {type}
            </button>
          ))}
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="glass-card overflow-hidden group"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.name}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-2 right-2">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    project.type === "Frontend" ? "bg-primary/80" : "bg-secondary/80"
                  }`}
                >
                  {project.type}
                </span>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-white/70 mb-4 h-20 overflow-hidden">{project.description}</p>

              <div className="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2 hover:bg-primary/20 border-primary/50 hover:border-primary"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github size={16} />
                  GitHub
                </Button>
                <Button
                  size="sm"
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => window.open(project.liveDemo, "_blank")}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
              </div>

              <Button
                variant="ghost"
                className="w-full mt-4 text-primary hover:bg-primary/10"
                onClick={() => router.push(`/projects/${project.id}`)}
              >
                View Details
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
