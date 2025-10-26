"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Mail, MapPin, Phone, GraduationCap, Award } from "lucide-react"
import Image from "next/image"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        About Me
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="group relative w-full max-w-sm aspect-square overflow-hidden rounded-xl md:rounded-2xl border border-white/20 shadow-2xl">
            <Image
              src="https://res.cloudinary.com/dgc9ugux7/image/upload/v1761478711/vinay572_cujxbc.jpg"
              alt="Kalva Vinay - Full Stack Developer"
              fill
              className="object-cover transition-all duration-500 filter group-hover:grayscale-0 grayscale"
              priority
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/0 transition-all duration-500"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="glass-card p-6 md:p-8"
        >
          <h3 className="text-2xl font-bold mb-2">Kalva Vinay</h3>
          <h4 className="text-xl text-primary mb-4">Full Stack Developer</h4>

          <p className="mb-6 text-white/80 leading-relaxed">
            👋 Hey there! I&apos;m Vinay, a passionate full-stack developer with expertise in building robust and
            user-friendly web applications. I&apos;m a B.Tech graduate in Computer Science Engineering with
            specialization in Cyber Security from Ganapathy Engineering College, Warangal (CGPA: 7.0/10).
          </p>

          <p className="mb-6 text-white/80 leading-relaxed">
            In 2022, I embarked on a transformative journey with Nxt Wave 🚀, where I earned an Industry Ready
            Certification in Full-stack Development. Since then, I&apos;ve been dedicated to expanding my expertise 📚
            and have completed virtual internships at Codes on Bytes and Bharat Intern, working on diverse projects from
            weather apps to e-commerce platforms.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2 text-white/80">
              <GraduationCap className="text-primary" size={18} />
              <div>
                <p className="text-sm font-medium">Education</p>
                <p className="text-xs">B.Tech CSE (Cyber Security)</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <Award className="text-primary" size={18} />
              <div>
                <p className="text-sm font-medium">Certification</p>
                <p className="text-xs">Full-stack Development</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 text-white/80">
            <div className="flex items-center gap-2">
              <Mail className="text-primary" size={18} />
              <a href="mailto:vinaykalva712@gmail.com" className="hover:text-primary transition-colors">
                vinaykalva712@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="text-primary" size={18} />
              <a href="tel:+917286945691" className="hover:text-primary transition-colors">
                +91 7286945691
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="text-primary" size={18} />
              <span>Warangal, Telangana, India</span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
