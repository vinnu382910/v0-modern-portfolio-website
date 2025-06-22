"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Briefcase, Calendar, MapPin } from "lucide-react"

export default function Experience() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const experiences = [
    {
      title: "Full Stack Developer Internship",
      company: "Bharat Intern",
      type: "Virtual Internship",
      duration: "December 2023",
      location: "Remote",
      description: "Developed multiple web applications focusing on full-stack development skills.",
      achievements: [
        "Built a Calculator App using HTML, CSS, JavaScript, and React",
        "Developed a Currency Converter App using HTML, CSS and JavaScript",
        "Enhanced user experience with responsive design principles",
      ],
    },
    {
      title: "Web Developer",
      company: "Codes on Bytes",
      type: "Virtual Internship",
      duration: "October 2023",
      location: "Remote",
      description: "Focused on frontend development and API integration projects.",
      achievements: [
        "Created a Weather App using HTML, CSS, JavaScript and API integration",
        "Developed a Countdown Timer App with dynamic functionality",
        "Enhanced a Quiz App with interactive features and improved UX",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        ref={ref}
      >
        Experience
      </motion.h2>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
            className="glass-card p-6 md:p-8"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="text-primary" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                  <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
                  <p className="text-white/70 mb-2">{exp.description}</p>
                </div>
              </div>
              <div className="flex flex-col items-start md:items-end gap-2 text-sm text-white/60">
                <div className="flex items-center gap-1">
                  <Calendar size={14} />
                  <span>{exp.duration}</span>
                </div>
                <div className="flex items-center gap-1">
                  <MapPin size={14} />
                  <span>{exp.location}</span>
                </div>
                <span className="px-2 py-1 bg-secondary/20 text-secondary rounded-full text-xs">{exp.type}</span>
              </div>
            </div>

            <div className="ml-16">
              <h5 className="font-semibold mb-2 text-white/90">Key Achievements:</h5>
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start gap-2 text-white/80">
                    <span className="text-primary mt-1">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
