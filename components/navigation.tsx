"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import gsap from "gsap"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export default function Navigation() {
  const navRef = useRef(null)
  const [activeMenu, setActiveMenu] = useState("home")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    gsap.fromTo(navRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" })
  }, [])

  const menuItems = [
    { name: "Home", id: "home", href: "/" },
    { name: "For Startups", id: "startups", href: "#" },
    { name: "For Investors", id: "investors", href: "#" },
  ]

  return (
    <>
      <nav ref={navRef} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <div className="backdrop-blur-md bg-white/70 border border-white/40 rounded-full px-6 py-3 shadow-sm hover:shadow-md transition-shadow duration-300 w-full max-w-4xl flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gray-900 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm group-hover:bg-gray-800 transition-colors">
              C
            </div>
            <span className="font-bold text-gray-900 tracking-tight">CapScout</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveMenu(item.id)}
                className={`text-sm font-medium transition-colors duration-200 relative group py-1 ${activeMenu === item.id ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                  }`}
              >
                {item.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transform origin-left transition-transform duration-300 ${activeMenu === item.id ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`} />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/auth">
              <Button variant="ghost" className="text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100/50 rounded-full px-5">
                Log in
              </Button>
            </Link>
            <Link href="/auth">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium rounded-full px-5 shadow-sm">
                Sign up
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white/95 backdrop-blur-sm pt-28 px-6 md:hidden animate-in fade-in slide-in-from-top-10 duration-200">
          <div className="flex flex-col gap-6 items-center text-center">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => {
                  setActiveMenu(item.id)
                  setIsMobileMenuOpen(false)
                }}
                className="text-xl font-medium text-gray-800"
              >
                {item.name}
              </a>
            ))}
            <hr className="w-full border-gray-100" />
            <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full text-lg">Log in</Button>
            </Link>
            <Link href="/auth" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full text-lg bg-gray-900 text-white py-6">Sign up</Button>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}
