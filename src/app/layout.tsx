import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Moonex - Multi-Chain DEX Platform",
  description: "Trade, earn, and own crypto on the all-in-one multi-chain DEX",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={spaceGrotesk.className}>
        <div className="min-h-screen bg-[#0A0B0F] text-white">
          {children}
        </div>
      </body>
    </html>
  )
}

