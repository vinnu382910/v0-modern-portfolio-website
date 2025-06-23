"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { ArrowLeft, Github, ExternalLink, Calendar, Tag, Info } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { projects } from "@/data/projects"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { ProjectFallback } from "@/components/3d-fallback"

// Dynamically import Canvas to avoid SSR issues
const Canvas = dynamic(() => import("@react-three/fiber").then((mod) => mod.Canvas), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg animate-pulse" />
  ),
})

const OrbitControls = dynamic(() => import("@react-three/drei").then((mod) => mod.OrbitControls), { ssr: false })
const Environment = dynamic(() => import("@react-three/drei").then((mod) => mod.Environment), { ssr: false })

// Replace the Model component with this simplified version
function Model({ projectType }: { projectType: string }) {
  return <ProjectFallback type={projectType} />
}

export default function ProjectDetails() {
  const params = useParams()
  const router = useRouter()
  const [project, setProject] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

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

            {/* Update the 3D model section in the component to include error handling */}
            <div className="mt-8 h-[300px] glass-card overflow-hidden rounded-xl">
              {isClient ? (
                <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
                  <pointLight position={[-10, -10, -10]} />
                  <Suspense fallback={null}>
                    <Model projectType={project.type} />
                    <Environment preset="city" />
                  </Suspense>
                  <OrbitControls autoRotate />
                </Canvas>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg animate-pulse flex items-center justify-center">
                  <div className="text-primary/60">Loading 3D Model...</div>
                </div>
              )}
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
