"use client"

import { useEffect, useRef } from "react"

interface BlurTextProps {
  text: string
  delay?: number
  animateBy?: "words" | "characters"
  direction?: "top" | "bottom"
  onAnimationComplete?: () => void
  className?: string
}

export default function BlurText({
  text,
  delay = 0,
  animateBy = "words",
  direction = "top",
  onAnimationComplete,
  className = "",
}: BlurTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const elements =
      animateBy === "words"
        ? containerRef.current.querySelectorAll(".blur-word")
        : containerRef.current.querySelectorAll(".blur-char")

    elements.forEach((el, index) => {
      const element = el as HTMLElement
      element.style.animation = `blurIn 0.6s ease-out ${delay + index * 50}ms forwards`
    })

    if (onAnimationComplete) {
      const lastDelay = delay + (elements.length - 1) * 50 + 600
      setTimeout(onAnimationComplete, lastDelay)
    }
  }, [text, delay, animateBy, onAnimationComplete])

  const renderText = () => {
    if (animateBy === "words") {
      return text.split(" ").map((word, idx) => (
        <span key={idx} className="blur-word inline-block opacity-0" style={{ marginRight: "0.25em" }}>
          {word}
        </span>
      ))
    } else {
      return text.split("").map((char, idx) => (
        <span key={idx} className="blur-char inline-block opacity-0">
          {char === " " ? "\u00A0" : char}
        </span>
      ))
    }
  }

  return (
    <div ref={containerRef} className={className}>
      <style>{`
        @keyframes blurIn {
          0% {
            opacity: 0;
            filter: blur(10px);
            transform: ${direction === "top" ? "translateY(-10px)" : "translateY(10px)"};
          }
          100% {
            opacity: 1;
            filter: blur(0);
            transform: translateY(0);
          }
        }
      `}</style>
      {renderText()}
    </div>
  )
}
