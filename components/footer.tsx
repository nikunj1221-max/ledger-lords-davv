"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 85%",
            end: "top 70%",
            scrub: 0.5,
          },
        },
      )
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-white border-t border-gray-200/50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="backdrop-blur-xl bg-white/50 border border-gray-200/50 rounded-xl p-12 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 mb-6">CapScout</h3>
              <p className="text-xs text-gray-600 font-light leading-relaxed">
                Empowering creative minds to achieve their dreams through innovative solutions.
              </p>
            </div>

            {/* Product */}
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-4">Product</p>
              <ul className="space-y-3">
                {["Features", "Pricing", "Security", "Status"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-600 hover:text-gray-900 font-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-4">Company</p>
              <ul className="space-y-3">
                {["About", "Blog", "Careers", "Press"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-600 hover:text-gray-900 font-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <p className="text-xs font-semibold text-gray-900 mb-4">Legal</p>
              <ul className="space-y-3">
                {["Privacy", "Terms", "Cookies", "Contact"].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-xs text-gray-600 hover:text-gray-900 font-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-gray-500 font-light">© 2026 CapScout. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
