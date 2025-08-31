"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

export function LearnMoreButton({ children, className, onClick, icon: Icon }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <button
      className={cn(
        "relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl border border-gray-200 transition-all duration-300 ease-out",
        "text-gray-700 hover:text-[#ff4726] ",
        className,
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >


      {/* Content container */}
      <div className="relative flex items-center justify-center">
        {/* Icon with animation */}
        {Icon && (
          <div className={cn(
            "mr-2 transition-all duration-300 ease-out",
            isHovered ? "text-gray-700" : "text-gray-700"
          )}>
            {Icon}
          </div>
        )}
        
        {/* Text with animation */}
        <span className="relative block overflow-hidden">
          <span
            className={cn(
              "block transition-all duration-300 ease-out",
              isHovered ? "transform -translate-y-full opacity-0" : "transform translate-y-0 opacity-100",
            )}
          >
            {children}
          </span>
          <span
            className={cn(
              "absolute inset-0 flex items-center justify-center transition-all duration-300 ease-out",
              isHovered ? "transform translate-y-0 opacity-100" : "transform translate-y-full opacity-0",
            )}
          >
            {children}
          </span>
        </span>
      </div>


    </button>
  )
}
