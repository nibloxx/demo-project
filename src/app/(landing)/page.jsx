import { ClientCallList } from "@/components/ClientCallList"
import { Button } from "@/components/ui/button"
import { Diamond, FramerIcon, TrendingUp, VideoIcon } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen font-open-runde">
     

      <main className="flex flex-col lg:flex-row items-start justify-between p-3 sm:p-4 md:p-6 gap-4 sm:gap-6 lg:gap-8 my-6 sm:my-8 lg:my-10">
        {/* Left Column - Hero Section */}
        <div className="w-full lg:max-w-2xl lg:flex-1 order-2 lg:order-1">
          {/* Availability Badge */}
          <div className="flex justify-start mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 text-green-500 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-500">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs font-bold">AVAILABLE FOR JUNE</span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-gray-900 leading-tight text-balance">
              Fuelling{" "}
              <span className="inline-flex items-center gap-1 sm:gap-2">
                <span className="rotate-[15deg] bg-orange-500 shadow-lg shadow-orange-500 text-white p-2 sm:p-3 rounded-lg sm:rounded-xl inline-flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8" />
                </span>
                growth
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">with every click</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 max-w-xl leading-relaxed">
            From landing pages to automation, we craft lead{" "}
            <br className="hidden sm:block" />
            funnels that grow your business on autopilot.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-12 sm:mb-16">
            <Button
              size="lg"
              className="bg-gray-900 shadow-lg shadow-gray-400 hover:bg-gray-800 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl shadow-lg w-full sm:w-auto"
            >
              Drive results now
            </Button>
            <Button
              variant="ghost"
              size="lg"
              className="text-gray-700 hover:text-gray-900 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-medium rounded-lg sm:rounded-xl border border-gray-200 hover:bg-gray-50 w-full sm:w-auto"
            >
              <VideoIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Learn more
            </Button>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
            {/* Trusted Partners */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-2 sm:mb-3">TRUSTED PARTNERS</p>
              <div className="flex items-center space-x-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-semibold">A</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-red-400 to-red-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-semibold">B</span>
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-semibold">C</span>
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm font-semibold">D</span>
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-[1px] bg-gray-200"></div>
            {/* Rating */}
            <div>
              <p className="text-xs font-bold text-gray-400 mb-2 sm:mb-3">RATED EXCELLENT: 5/5</p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <span className="text-yellow-400 text-xl sm:text-2xl font-bold">★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Client Call List */}
        <div className="hidden lg:block w-full lg:w-auto order-1 lg:order-2">
          <ClientCallList />
        </div>
      </main>

      <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 flex flex-col gap-2 sm:gap-3 z-50">
        <Button className="bg-gray-800 hover:bg-gray-800 text-sm sm:text-md font-bold text-white px-3 sm:px-4 py-4 sm:py-6 rounded-lg sm:rounded-xl shadow-xl w-auto">
          Buy template
        </Button>
        
        <Button className="bg-white hover:bg-white text-black px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-lg w-auto">
          <FramerIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" /> Made in Framer
        </Button>
      </div>
    </div>
  )
}
