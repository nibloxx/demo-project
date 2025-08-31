import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"

const clientCalls = [
  {
    id: "1",
    clientName: "Sarah",
    avatarUrl: "/professional-woman-dark-hair.png",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    duration: "1hr",
    date: "TUE 19 JUL",
    rotation: "-8deg",
    cardRotation: "-3deg",
  },
  {
    id: "2",
    clientName: "Leah",
    avatarUrl: "/professional-blonde-woman.png",
    startTime: "12:45 PM",
    endTime: "1:15 AM",
    duration: "30m",
    date: "THU 25 JUL",
    rotation: "12deg",
    cardRotation: "3deg",
  },
  {
    id: "3",
    clientName: "Joshua",
    avatarUrl: "/professional-bearded-man.png",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    duration: "1hr",
    date: "THU 25 JUL",
    rotation: "-5deg",
    cardRotation: "-3deg",
  },
  {
    id: "4",
    clientName: "Edward",
    avatarUrl: "/professional-man-suit.png",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    duration: "1hr",
    date: "MON 25 JUL",
    rotation: "8deg",
    cardRotation: "-3deg",
  },
  {
    id: "5",
    clientName: "Mirielle",
    avatarUrl: "/professional-curly-hair-woman.png",
    startTime: "9:30 AM",
    endTime: "10:30 AM",
    duration: "1hr",
    date: "THU 28 JUL",
    rotation: "-10deg",
    cardRotation: "3deg",
  },
]

function groupCallsByDate(calls) {
  const grouped = calls.reduce(
    (acc, call) => {
      if (!acc[call.date]) {
        acc[call.date] = []
      }
      acc[call.date].push(call)
      return acc
    },
    {}
  )

  return Object.entries(grouped)
}

export function ClientCallList() {
  const groupedCalls = groupCallsByDate(clientCalls)

  return (
    <div className="max-w-full mx-auto min-h-screen" >
      <div className="space-y-8">
        {groupedCalls.map(([date, calls]) => (
          <div key={date} className="space-y-4 bg-white border border-gray-100 rounded-xl shadow-sm"
          style={{ transform: `rotate(${calls[0]?.cardRotation || '0deg'})` }}
          >
            {/* Date Header */}
            <div className="flex items-center justify-between border-b border-gray-100 px-2 py-3">
              <h2 className="text-sm font-bold text-gray-900 uppercase tracking-wide">{date.split(" ")[0]}</h2>
              <span className="text-xs text-gray-400 ">{date.split(" ").slice(1).join(" ")}</span>
            </div>

            {/* Single Card for All Day's Calls */}
            
              <div className="divide-y divide-gray-100">
                {calls.map((call, index) => (
                  <div key={call.id} className="px-2 py-2 flex items-center justify-between ">
                    <div className="flex items-center gap-3 mb-2">
                      <Avatar 
                        className="h-10 w-10 border-2 border-white shadow-sm" 
                        style={{ transform: `rotate(${call.rotation})` }}
                      >
                        <AvatarImage 
                          src={call.avatarUrl || "/placeholder.svg"} 
                          alt={call.clientName}
                          style={{ transform: `rotate(-${call.rotation})` }}
                          className="object-cover"
                        />
                        <AvatarFallback className="bg-primary/10 text-primary font-medium">
                          {call.clientName.charAt(0)}
                        </AvatarFallback>
                      </Avatar>

                      <div className="space-y-1">
                        <h3 className="font-bold text-gray-900 text-sm mb-0">
                          New client call: {call.clientName}
                        </h3>
                        <p className="text-xs text-gray-500">
                          {call.startTime} – {call.endTime}
                        </p>
                      </div>
                    </div>

                    <div className="text-xs text-gray-400 font-medium">{call.duration}</div>
                  </div>
                ))}
              </div>
         
          </div>
        ))}
      </div>
    </div>
  )
}
