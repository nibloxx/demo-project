"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function AnimatedButton({ children, className, onClick, variant = "default" }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        // Base styles using semantic tokens
        "relative overflow-hidden px-8 py-4 rounded-lg font-bold text-base tracking-wide",
        "transition-all duration-300 ease-out",
        "transform ",
        // Variant styles
        variant === "default" && [
          "bg-black text-white",
          "hover:bg-[#ff4726] hover:text-white",
          "hover:shadow-lg hover:shadow-[#ff4726]/25",
        ],
        variant === "secondary" && [
          "bg-gray-200 text-gray-800",
          "hover:bg-gray-300 hover:text-gray-900",
          "hover:shadow-lg hover:shadow-gray-300/25",
        ],
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-700 ease-out" />

      {/* Text container with animation */}
      <span className="relative block overflow-hidden">
        <span
          className={cn(
            "block transition-all duration-300 ease-out text-center w-full",
            isHovered ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100",
          )}
        >
          {children}
        </span>
        <span
          className={cn(
            "absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center transition-all duration-300 ease-out text-center w-full",
            isHovered ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0",
          )}
          style={{
            textShadow: isHovered ? "0 2px 4px rgba(0, 0, 0, 0.2)" : "none",
          }}
        >
          {children}
        </span>
      </span>

      {/* Ripple effect on click */}
      <div className="absolute inset-0 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-accent/20 to-transparent animate-pulse" />
      </div>
    </button>
  )
}
