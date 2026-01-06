"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function WorkSection() {
  const scrollerRef = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: scrollerRef.current,
            start: "top 85%",
            end: "top 70%",
            scrub: 0.5,
          },
        },
      )

      // Horizontal scroll effect
      gsap.to(scrollerRef.current, {
        x: -1000,
        scrollTrigger: {
          trigger: scrollerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
          markers: false,
        },
      })
    }, scrollerRef)

    return () => ctx.revert()
  }, [])

  const works = [
    { title: "Creative Campaign", type: "Video" },
    { title: "Brand Identity", type: "Design" },
    { title: "Product Launch", type: "Strategy" },
    { title: "Digital Experience", type: "Development" },
    { title: "Community Growth", type: "Marketing" },
  ]

  return (
    <section className="relative py-24 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/70 z-10" /> {/* Overlay for readability */}
        <img
          src="/bgimg.jpeg"
          alt="Work Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto mb-16">
        <h2 ref={titleRef} className="text-4xl md:text-5xl font-bold text-gray-900 text-center">
          Our Stories & Achievements
        </h2>
      </div>

      <div className="relative">
        <div className="overflow-hidden">
          <div ref={scrollerRef} className="flex gap-8 pb-8" style={{ width: "fit-content" }}>
            {works.map((work, index) => (
              <div
                key={index}
                className="min-w-80 backdrop-blur-xl bg-gradient-to-br from-white/60 to-white/40 border border-gray-200/50 rounded-xl p-12 hover:bg-white/80 transition-all duration-300 cursor-pointer group"
              >
                <div className="aspect-video bg-gray-100 rounded-lg mb-6 group-hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center">
                  <div className="text-gray-400 text-sm font-light">{work.type}</div>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{work.title}</h3>
                <p className="text-xs text-gray-500 font-light">{work.type}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
