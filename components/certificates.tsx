"use client"

import { useState, useRef, useEffect } from "react"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"
import { motion } from "framer-motion"
import "./certificates.css"

const imagesList = [
  {
    id: 0,
    imageUrl: "https://media-content.ccbp.in/certificates/share/CFBFHVESXG.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/CFBFHVESXG.png",
    imageAltText: "Certificate Of Identity",
    thumbnailAltText: "Certificate Of Identity thumbnail",
  },
  {
    id: 1,
    imageUrl: "https://media-content.ccbp.in/certificates/share/FIOKQMBSFZ.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/FIOKQMBSFZ.png",
    imageAltText: "Certificate Of Developer Foundation",
    thumbnailAltText: "Certificate Of Developer Foundation thumbnail",
  },
  {
    id: 2,
    imageUrl: "https://media-content.ccbp.in/certificates/share/YZVMOICWYD.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/YZVMOICWYD.png",
    imageAltText: "Certificate Of Javascript Essentials",
    thumbnailAltText: "Certificate Of Javascript Essentials thumbnail",
  },
  {
    id: 3,
    imageUrl: "https://media-content.ccbp.in/certificates/share/IKDLFWAUBP.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/IKDLFWAUBP.png",
    imageAltText: "Certificate Of Python",
    thumbnailAltText: "Certificate Of Python thumbnail",
  },
  {
    id: 4,
    imageUrl: "https://media-content.ccbp.in/certificates/share/ZWEAJAIDDJ.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/ZWEAJAIDDJ.png",
    imageAltText: "Certificate Of Static Website",
    thumbnailAltText: "Certificate Of Static Website thumbnail",
  },
  {
    id: 5,
    imageUrl: "https://media-content.ccbp.in/certificates/share/HQETMNXPMN.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/HQETMNXPMN.png",
    imageAltText: "Certificate Of SQL",
    thumbnailAltText: "Certificate Of SQL thumbnail",
  },
  {
    id: 6,
    imageUrl: "https://media-content.ccbp.in/certificates/share/XUEDNFZMLU.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/XUEDNFZMLU.png",
    imageAltText: "Certificate Of Bootstrap",
    thumbnailAltText: "Certificate Of Bootstrap thumbnail",
  },
  {
    id: 7,
    imageUrl: "https://media-content.ccbp.in/certificates/share/FFLGZTZLLT.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/FFLGZTZLLT.png",
    imageAltText: "Certificate Of Dynamic Web Applications",
    thumbnailAltText: "Certificate Of Dynamic Web Applications thumbnail",
  },
  {
    id: 8,
    imageUrl: "https://media-content.ccbp.in/certificates/share/CBDWZQVFKL.png",
    thumbnailUrl: "https://media-content.ccbp.in/certificates/share/CBDWZQVFKL.png",
    imageAltText: "Certificate Of Flexbox",
    thumbnailAltText: "Certificate Of Flexbox thumbnail",
  },
]

// Certificate Item Component
const CertificateItem = ({
  imageDetails,
  onChangeImg,
  isActive,
}: {
  imageDetails: any
  onChangeImg: (id: number) => void
  isActive: boolean
}) => {
  const { id, thumbnailUrl, thumbnailAltText } = imageDetails

  const onClickImg = () => {
    onChangeImg(id)
  }

  return (
    <li className={`certificate-item ${isActive ? "active" : ""}`}>
      <button type="button" className="img-btn" onClick={onClickImg}>
        <Image
          src={thumbnailUrl || "/placeholder.svg"}
          alt={thumbnailAltText}
          width={100}
          height={70}
          className={`thumbnail-img ${isActive ? "active" : ""}`}
        />
      </button>
    </li>
  )
}

export default function Certificates() {
  const [activeThumbNailId, setActiveThumbNailId] = useState(0)
  const { theme } = useTheme()
  const certificatesRef = useRef(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (certificatesRef.current) {
      observer.observe(certificatesRef.current)
    }

    return () => {
      if (certificatesRef.current) {
        observer.unobserve(certificatesRef.current)
      }
    }
  }, [])

  const onChangeImg = (id: number) => {
    setActiveThumbNailId(id)
  }

  const { imageUrl, imageAltText } = imagesList[activeThumbNailId]

  // Set theme-specific classes
  const themeClass = `theme-${theme}`

  return (
    <div className={`certificates-container ${themeClass}`} id="certificates" ref={certificatesRef}>
      <motion.h2
        className="certificates-heading"
        initial={{ opacity: 0, y: 20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        My <span>Certificates</span>
      </motion.h2>

      <motion.div
        className="certificates-content"
        initial={{ opacity: 0, y: 30 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="main-image-container">
          <div className="image-wrapper">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={imageAltText}
              width={800}
              height={600}
              className="main-certificate-image"
            />
          </div>
          <div className="certificate-title">
            <h3>{imageAltText}</h3>
          </div>
        </div>

        <div className="thumbnails-container">
          <ul className="thumbnails-list">
            {imagesList.map((imageDetails) => (
              <CertificateItem
                key={imageDetails.id}
                imageDetails={imageDetails}
                onChangeImg={onChangeImg}
                isActive={activeThumbNailId === imageDetails.id}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  )
}
