"use client"

import { useEffect, useRef, useState } from "react"
import { Users, Home, Calendar, MapPin } from "lucide-react"

const stats = [
  {
    icon: Calendar,
    value: 15,
    suffix: "+",
    label: "Ani de Experiență",
    description: "În industria construcțiilor",
  },
  {
    icon: Home,
    value: 500,
    suffix: "+",
    label: "Proiecte Finalizate",
    description: "Rezidențiale și industriale",
  },
  {
    icon: Users,
    value: 100,
    suffix: "%",
    label: "Clienți Mulțumiți",
    description: "Recomandări garantate",
  },
  {
    icon: MapPin,
    value: 100,
    suffix: "km",
    label: "Zonă Acoperită",
    description: "În jurul Timișoarei",
  },
]

function useCountUp(end: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!start) return

    let startTime: number | null = null
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    requestAnimationFrame(animate)
  }, [end, duration, start])

  return count
}

export function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const counts = stats.map((stat) => useCountUp(stat.value, 2000, isVisible))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-[#242f40] to-[#1a222d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#cca43b] to-transparent" />
      <div className="absolute -top-20 right-0 w-80 h-80 bg-[#cca43b]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">De ce să ne alegeți</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
            Rezultate care{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">vorbesc</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const count = counts[index]
            return (
              <div
                key={stat.label}
                className={`text-center group ${isVisible ? `animate-fade-in-up stagger-${index + 1}` : "opacity-0"}`}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-[#cca43b]/20 to-[#cca43b]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-[#cca43b]" />
                </div>
                <p className="text-4xl md:text-5xl font-serif font-bold text-white">
                  {count}
                  <span className="text-[#cca43b]">{stat.suffix}</span>
                </p>
                <p className="text-white font-medium mt-2">{stat.label}</p>
                <p className="text-white/60 text-sm mt-1">{stat.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
