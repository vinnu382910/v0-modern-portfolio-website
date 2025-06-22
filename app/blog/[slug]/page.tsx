"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"

const blogPosts = [
  {
    id: 1,
    title: "My Journey at Ganapathy Engineering College: From Student to Full Stack Developer",
    excerpt: "Discover how my time at Ganapathy Engineering College shaped my career as a Full Stack Developer.",
    content: `My journey at Ganapathy Engineering College has been transformative in shaping my career as a Full Stack Developer.

The Beginning at Ganapathy Engineering College

Ganapathy Engineering College provided me with a solid foundation in computer science fundamentals. The curriculum was comprehensive, covering everything from basic programming concepts to advanced topics in cybersecurity.

Discovering Full Stack Development

The turning point came when I joined Nxt Wave in 2022. This platform introduced me to the world of frontend development, and I was immediately hooked. I spent countless hours learning HTML, CSS, JavaScript, and eventually React.

MERN Stack Mastery

As I progressed in my studies, I began exploring backend technologies. Node.js and Express.js opened up a whole new world of possibilities. Combined with MongoDB for database management, I had discovered the MERN Stack.

Looking Forward

I'm grateful for the foundation that Ganapathy Engineering College has provided. The combination of formal education and self-directed learning has prepared me for a successful career in Full Stack Development.`,
    author: "Kalva Vinay",
    date: "2024-01-15",
    readTime: "8 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["Career", "Education", "MERN Stack"],
    slug: "ganapathy-engineering-college-journey",
  },
  {
    id: 2,
    title: "Building Modern Web Applications with MERN Stack: A Complete Guide",
    excerpt: "Learn how to build scalable web applications using MongoDB, Express.js, React, and Node.js.",
    content: `The MERN Stack has become one of the most popular technology stacks for building modern web applications.

What is the MERN Stack?

MERN is an acronym that stands for:
- MongoDB: A NoSQL database for storing application data
- Express.js: A web application framework for Node.js
- React: A JavaScript library for building user interfaces
- Node.js: A JavaScript runtime for server-side development

Why Choose MERN Stack?

JavaScript Everywhere - One of the biggest advantages is using JavaScript for both frontend and backend development.

Rich Ecosystem - Each component has a vast ecosystem of libraries and tools.

Scalability - MERN Stack applications can scale horizontally and vertically.

Best Practices

1. Project Structure - Organize your code with clear separation
2. Environment Variables - Use environment variables for sensitive information
3. Error Handling - Implement comprehensive error handling

Conclusion

The MERN Stack provides a powerful foundation for building modern web applications. My journey from learning these technologies to implementing them in real-world projects has been incredibly rewarding.`,
    author: "Kalva Vinay",
    date: "2024-01-10",
    readTime: "12 min read",
    image: "/placeholder.svg?height=400&width=800",
    tags: ["MERN Stack", "Tutorial", "Web Development"],
    slug: "mern-stack-complete-guide",
  },
]

export default function BlogPost() {
  const params = useParams()
  const [post, setPost] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (params.slug) {
      const foundPost = blogPosts.find((p) => p.slug === params.slug)
      setPost(foundPost || null)
      setLoading(false)
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center pt-24">
        <h1 className="text-3xl font-bold mb-4">Post Not Found</h1>
        <Link href="/blog" className="btn-primary">
          Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <main className="min-h-screen pt-24 pb-16">
      <article className="container mx-auto px-4 max-w-4xl">
        <header className="mb-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-primary hover:text-secondary transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>

          <div className="relative h-64 md:h-96 mb-8 rounded-xl overflow-hidden">
            <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60 mb-4">
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

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">{post.title}</h1>

          <div className="flex flex-wrap gap-2 mb-6">
            {post.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary/20 text-primary text-sm rounded-full border border-primary/30"
              >
                {tag}
              </span>
            ))}
          </div>
        </header>

        <div className="prose prose-lg prose-invert max-w-none">
          <div className="text-white/90 leading-relaxed whitespace-pre-line">{post.content}</div>
        </div>

        <footer className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">About the Author</h3>
            <p className="text-white/80">
              <strong>Kalva Vinay</strong> is a Full Stack Developer specializing in MERN Stack development.
            </p>
          </div>
        </footer>
      </article>
    </main>
  )
}
