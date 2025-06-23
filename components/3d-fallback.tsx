"use client"

export function LaptopFallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-primary/60">3D Model Placeholder</div>
    </div>
  )
}

export function ProjectFallback({ type }: { type: string }) {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="text-primary/60">{type} Project Visualization</div>
    </div>
  )
}
