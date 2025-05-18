import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Poppins } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import CustomCursor from "@/components/custom-cursor"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Kalva Vinay | MERN Stack Developer",
  description:
    "Portfolio website of Kalva Vinay, a MERN Stack Developer specializing in frontend, backend, and Android development.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} ${poppins.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="space"
          enableSystem={false}
          themes={["space", "neural", "light", "dark"]}
        >
          <CustomCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
