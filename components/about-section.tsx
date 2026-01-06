"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const containerRef = useRef(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardRefs.current.forEach((card, index) => {
        if (!card) return
        gsap.fromTo(
          card,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "top 60%",
              scrub: 0.5,
            },
          },
        )
      })
    }, containerRef)

    return () => ctx.revert()
  }, [])

  const cards = [
    {
      title: "Innovation",
      description: "Cutting-edge solutions that push creative boundaries",
    },
    {
      title: "Collaboration",
      description: "Connect with minds that think like you do",
    },
    {
      title: "Excellence",
      description: "Premium quality in every detail we deliver",
    },
  ]

  return (
    <section ref={containerRef} className="relative py-24 px-4 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-white/70 z-10" /> {/* Overlay for readability */}
        <img
          src="/bgimg.jpeg"
          alt="About Background"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">Why Choose CapScout</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className="backdrop-blur-xl bg-white/50 border border-gray-200/50 rounded-xl p-8 hover:bg-white/70 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{card.title}</h3>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
