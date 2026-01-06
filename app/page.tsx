"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import WorkSection from "@/components/work-section"
import Footer from "@/components/footer"

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const pageRef = useRef(null)

  useEffect(() => {
    ScrollTrigger.refresh()
  }, [])

  return (
    <main ref={pageRef} className="bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <WorkSection />
      <Footer />
    </main>
  )
}
