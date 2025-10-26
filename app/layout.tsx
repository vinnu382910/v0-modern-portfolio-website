import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Kalva Vinay - Full Stack Developer",
  description:
    "Full Stack Developer specializing in MERN Stack development. B.Tech graduate from Ganapathy Engineering College with expertise in React, Node.js, MongoDB, and modern web technologies.",
  keywords: "Full Stack Developer, MERN Stack, React, Node.js, MongoDB, JavaScript, Web Development, Kalva Vinay",
  authors: [{ name: "Kalva Vinay" }],
  creator: "Kalva Vinay",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </head>
      <body className={`${spaceGrotesk.variable} ${poppins.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="space"
          enableSystem={false}
          themes={["space", "neural", "light", "dark"]}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
