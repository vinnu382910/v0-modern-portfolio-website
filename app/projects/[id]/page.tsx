"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Info } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"

// Simple 2D project visualization instead of 3D
function ProjectVisualization({ type }: { type: string }) {
  const getVisualization = () => {
    if (type === "Frontend") {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg">
          <motion.div
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 6,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="w-24 h-24 border-4 border-blue-400 rounded-lg flex items-center justify-center">
              <span className="text-3xl">🎨</span>
            </div>
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-purple-500 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
          </motion.div>
        </div>
      )
    }

    // FullStack visualization
    return (
      <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-green-500/20 to-blue-500/20 rounded-lg">
        <motion.div
          animate={{
            y: [-10, 10, -10],
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="relative"
        >
          <div className="w-24 h-24 border-4 border-green-400 rounded-full flex items-center justify-center">
            <span className="text-3xl">⚡</span>
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-xs">🔧</span>
          </div>
          <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-500 rounded-full animate-ping"></div>
        </motion.div>
      </div>
    )
  }

  return getVisualization()
}

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.id) {
      const foundProject = projects.find((p) => p.id.toString() === params.id)
      if (foundProject) {
        setProject(foundProject)
      }
      setLoading(false)
    }
  }, [params.id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
        <Button onClick={() => router.push("/#projects")}>Back to Projects</Button>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <Button variant="ghost" className="mb-8 hover:bg-white/10" onClick={() => router.push("/#projects")}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Projects
        </Button>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="glass-card overflow-hidden rounded-xl">
              <div className="h-[300px] relative">
                <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" />
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-600/90 text-white">
                    {project.type}
                  </span>
                </div>
              </div>
            </div>

            {/* Project visualization */}
            <div className="mt-8 h-[300px] glass-card overflow-hidden rounded-xl">
              <ProjectVisualization type={project.type} />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.name}</h1>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.technologies?.map((tech: string, index: number) => (
                  <span key={index} className="px-3 py-1 rounded-full text-xs font-medium bg-white/10">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Project Overview</h3>
                    <p className="text-white/80 leading-relaxed">{project.description}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Tag className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Key Features</h3>
                    <ul className="list-disc list-inside text-white/80 space-y-2">
                      {project.features?.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Timeline</h3>
                    <p className="text-white/80">{project.timeline || "2023"}</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <Button
                  className="flex items-center gap-2 bg-gradient-to-r from-primary to-secondary hover:opacity-90"
                  onClick={() => window.open(project.liveDemo, "_blank")}
                >
                  <ExternalLink size={16} />
                  Live Demo
                </Button>
                <Button
                  variant="outline"
                  className="flex items-center gap-2 hover:bg-primary/20 border-primary/50 hover:border-primary"
                  onClick={() => window.open(project.github, "_blank")}
                >
                  <Github size={16} />
                  View Code
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
