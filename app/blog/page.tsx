"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User, ArrowRight } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "My Journey at Ganapathy Engineering College: From Student to Full Stack Developer",
    excerpt: "Discover how my time at Ganapathy Engineering College shaped my career as a Full Stack Developer.",
    author: "Kalva Vinay",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["Career", "Education", "MERN Stack"],
    slug: "ganapathy-engineering-college-journey",
  },
  {
    id: 2,
    title: "Building Modern Web Applications with MERN Stack: A Complete Guide",
    excerpt: "Learn how to build scalable web applications using MongoDB, Express.js, React, and Node.js.",
    author: "Kalva Vinay",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/placeholder.svg?height=300&width=600",
    tags: ["MERN Stack", "Tutorial", "Web Development"],
    slug: "mern-stack-complete-guide",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Blog</span>
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mx-auto">
            Insights and tutorials on Full Stack Development and MERN Stack.
          </p>
        </header>

        <div className="grid gap-8 md:gap-12">
          {blogPosts.map((post) => (
            <article key={post.id} className="glass-card overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-1">
                  <div className="relative h-48 md:h-full min-h-[200px]">
                    <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                  </div>
                </div>
                <div className="md:col-span-2 p-6">
                  <div className="flex items-center gap-4 text-sm text-white/60 mb-3">
                    <div className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString()}</time>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl md:text-3xl font-bold mb-3 hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  <p className="text-white/80 mb-4 leading-relaxed">{post.excerpt}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors font-medium"
                  >
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
