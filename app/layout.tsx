export const metadata: Metadata = {
  title: "Prayer Times App",
  description: "View accurate prayer times for any location",
  manifest: "/manifest.json",
}

import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    
  <html lang="en" className={inter.variable}>
    <head>
      <link rel="manifest" href="/manifest.json" />
      <meta name="theme-color" content="#000000" />
    </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
