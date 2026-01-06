"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import BlurText from "./blur-text"



export default function HeroSection() {
  const containerRef = useRef(null)
  const descRef = useRef(null)
  const buttonRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap
        .timeline()
        .fromTo(descRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }, 0.8)
        .fromTo(
          buttonRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 0.8, ease: "back.out" },
          1,
        )
    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden">
      {/* Background Image */}
      
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/60 z-10" /> {/* Overlay for readability */}
        <img
          src="/bgimg.jpeg"
          alt="Hero Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <BlurText
          text="Where Visionaries Meet Venture"
          delay={0}
          animateBy="words"
          direction="top"
          className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
        />
        <p ref={descRef} className="text-lg md:text-xl text-gray-700 mb-10 font-normal leading-relaxed max-w-2xl mx-auto">
          CapScout connects ambitious startups with world-class investors.
          Bridge the gap between your groundbreaking idea and the capital to scale it.
        </p>
        <div ref={buttonRef}>
          <Link href="/auth">
            <Button
              size="lg"
              className="bg-gray-900 hover:bg-gray-800 text-white text-base font-medium rounded-full px-10 py-6 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 ring-offset-2 hover:ring-2 ring-gray-900/50"
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
