'use client'

import { Diamond } from "lucide-react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/' || pathname === ''
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    if (isHomePage) {
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isHomePage])

  const headerClasses = `

    fixed top-0 left-0 right-0 z-50 
    flex items-center justify-between p-6 
    transition-all duration-300 ease-in-out
    ${isHomePage 
      ? isScrolled 
        ? 'bg-white/90 backdrop-blur-md shadow-sm' 
        : 'bg-transparent'
      : 'bg-white shadow-sm border-b border-gray-100'
    }
  `

  return (
    <header className={headerClasses}>
      <div className="max-w-5xl mx-auto flex items-center justify-between w-full px-6">
        <div className="flex items-center gap-2 ">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <Diamond className="w-4 h-4 text-white fill-white" />
          </div>
          <span className="text-xl font-bold text-gray-900">Funnelz</span>
        </div>
        <Button className={`
          shadow hover:shadow-md px-4 py-6 rounded-xl flex items-center gap-3 border-none transition-all duration-300
          ${isHomePage && !isScrolled 
            ? 'bg-white/90 border border-white/20 hover:bg-white' 
            : 'bg-white hover:bg-gray-50'
          }
        `}>
          <div className="w-6 h-6 rounded-full border border-gray-200 flex items-center justify-center">
            <span className="text-gray-600 text-sm font-semibold">👤</span>
          </div>
          <span className="font-bold text-black">Book a call</span>
        </Button>
      </div>
    </header>
  )
}