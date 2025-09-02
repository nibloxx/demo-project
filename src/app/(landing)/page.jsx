import { AnimatedButton } from "@/components/AnimatedButton";
import { ClientCallList } from "@/components/ClientCallList";
import FramerTextSVG from "@/components/Icons/FramerTextSVG";
import { LearnMoreButton } from "@/components/LearnMoreButton";
import { Button } from "@/components/ui/button";
import { FramerIcon, Play, PlaySquare, PlaySquareIcon, TrendingUp, VideoIcon } from "lucide-react";

export default function HomePage() {
  return (
    <div className=" h-fit border-b border-gray-200 overflow-hidden max-h-[740px] mb-2">
      <main className="relative flex flex-col lg:flex-row items-start justify-between px-12 gap-4 sm:gap-6 lg:gap-8 max-w-6xl mx-auto border-l border-r border-dotted border-gray-300 pt-24 pb-5">
        {/* Left Column - Hero Section */}
        <div className="w-full lg:max-w-2xl lg:flex-1 order-2 lg:order-1 pt-20">
          {/* Availability Badge */}
          <div className="flex justify-start font-open-runde mb-6 sm:mb-8">
            <div className="inline-flex items-center gap-2 text-green-500 bg-green-50 px-3 sm:px-4 py-2 rounded-full border border-green-500">
              <div className="relative flex justify-center items-center">
                {/* Smooth glowing wave */}
                <div className="w-3 h-3 bg-green-500/30 rounded-full animate-smoothPulse"></div>

                {/* Solid core dot */}
                <div className="absolute inset-0 w-2 h-2 bg-green-500 rounded-full m-auto"></div>
              </div>

              <span className="text-[10px] font-bold leading-[16px]">
                AVAILABLE FOR JUNE
              </span>
            </div>
          </div>

          {/* Main Headline */}
          <div className="mb-4 sm:mb-6">
            <h1 className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-[68px] font-open-runde font-medium text-gray-900 leading-tight text-balance">
              Fuelling{" "}
              <span className="inline-flex items-center gap-1 sm:gap-2">
                <span className="animate-growth-rotation  h-35 w-35 bg-[#ff4726] shadow-lg shadow-[#ff4726] text-white p-2 sm:p-3 rounded-lg sm:rounded-xl inline-flex items-center justify-center">
                  <TrendingUp className="w-10 h-10 sm:w-8 sm:h-8" />
                </span>
                growth
              </span>
              <br className="hidden sm:block" />
              <span className="block sm:inline">with every click</span>
            </h1>
          </div>

          {/* Subtitle */}
          <p className="text-base sm:text-lg font-open-runde text-gray-600 mb-6 sm:mb-8 max-w-xl leading-relaxed">
            From landing pages to automation, we craft lead{" "}
            <br className="hidden sm:block" />
            funnels that grow your business on autopilot.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row font-open-runde gap-3 sm:gap-4 mb-12 sm:mb-16">
            <AnimatedButton className="px-5 py-2.5 text-sm font-medium rounded-lg shadow-lg w-full sm:w-auto">
              Drive results now
            </AnimatedButton>
            <LearnMoreButton
              className="w-full  sm:w-auto"
              icon={<PlaySquare className="w-3.5 h-3.5" />}
            >
              Learn more
            </LearnMoreButton>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col font-open-runde sm:flex-row gap-4 sm:gap-8">
            {/* Trusted Partners */}
            <div>
              <p className="text-[10px] font-open-runde font-bold text-[#6E6E6E] mb-2 sm:mb-3">
                TRUSTED PARTNERS
              </p>
              <div className="flex items-center space-x-1">
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md overflow-hidden">
                  <img
                    src="/image_1.jpg"
                    alt="Partner 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md overflow-hidden">
                  <img
                    src="/image_2.jpg"
                    alt="Partner 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full shadow-md overflow-hidden">
                  <img
                    src="/image_3.jpg"
                    alt="Partner 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full shadow-md overflow-hidden">
                  <img
                    src="/image_1.jpg"
                    alt="Partner 4"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="hidden sm:block w-[1px] bg-gray-200"></div>
            {/* Rating */}
            <div>
              <p className="text-[10px]  font-open-runde font-bold text-[#6E6E6E] mb-2 sm:mb-3">
                RATED EXCELLENT: 5/5
              </p>
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex items-center justify-center">
                    <span className="text-yellow-400 text-xl sm:text-2xl font-bold">
                      ★
                    </span>
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
        <div className="absolute bottom-[500px] right-12 z-[20] h-[76px] w-[391px] overflow-hidden flex-none bg-[#f5f5f5] mask-gradient-b right-"></div>
        <div className="absolute right-[0px] top-0 z-[1] h-[60px] w-[392px] overflow-hidden flex-none bg-[#f5f5f5] mask-gradient-t"></div>
      </main>

      <div className="fixed bottom-3 sm:bottom-6 right-3 sm:right-6 flex flex-col gap-4 z-50">
        <Button
          className="bg-[#1c1c1c] text-[#f5f5f5] font-open-runde text-base font-semibold h-[49px]
                    tracking-[-0.01em] leading-[1.6em] px-[20px] py-[12px] 
                    rounded-[12px] shadow-fancy w-fit
                    transition-all duration-300 ease-out
                    hover:-translate-y-[4px] hover:bg-[#269AFF] hover:shadow-fancy-hover hover:opacity-100"
        >
          Buy template
        </Button>

        <Button className="bg-white hover:bg-white text-black rounded-[10px] shadow-framebtnShadow w-fit z-20 h-[36px] w-[142px]">
          <FramerIcon fill="black" className="w-[11px] h-[16px] mr-1 font-open-runde" /><FramerTextSVG className="!w-[92px] !h-[11px] text-[#231f20]" />
        </Button>
      </div>
    </div>
  );
}
