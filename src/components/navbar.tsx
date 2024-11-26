"use client"

import * as React from "react"
import Link from "next/link"
import { Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "#about" },
  { name: "Roadmap", href: "#roadmap" },
  { name: "FAQs", href: "#faqs" },
  { name: "Contact Us", href: "#contact" },
]

export function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0B0F]/80 backdrop-blur-sm">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8" aria-label="Top">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Moon className="h-8 w-8 text-yellow-400" />
              <span className="text-xl font-bold">Moonex</span>
            </Link>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-6">
            {navigation.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-yellow-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-yellow-400 text-[#0A0B0F] hover:bg-yellow-500">
              Connect Wallet
            </Button>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0A0B0F] text-white">
                <div className="flex flex-col space-y-4 mt-8">
                  {navigation.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="text-lg font-medium hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </Link>
                  ))}
                  <Button className="bg-yellow-400 text-[#0A0B0F] hover:bg-yellow-500 w-full">
                    Connect Wallet
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  )
}

