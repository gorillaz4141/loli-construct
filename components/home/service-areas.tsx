"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Phone } from "lucide-react"
import { GTMButton } from "@/components/ui/gtm-button"

const areas = [
  { name: "Timișoara", distance: "Sediu central", featured: true },
  { name: "Lugoj", distance: "~60 km" },
  { name: "Arad", distance: "~55 km" },
  { name: "Reșița", distance: "~100 km" },
  { name: "Deva", distance: "~150 km" },
  { name: "Buziaș", distance: "~35 km" },
  { name: "Jimbolia", distance: "~40 km" },
  { name: "Sânnicolau Mare", distance: "~60 km" },
  { name: "Făget", distance: "~50 km" },
  { name: "Recaș", distance: "~20 km" },
  { name: "Deta", distance: "~45 km" },
  { name: "Gătaia", distance: "~55 km" },
]

export function ServiceAreas() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-[#e5e5e5]/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Map placeholder */}
          <div className={`relative ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <div className="relative rounded-2xl overflow-hidden shadow-xl bg-[#242f40] aspect-square">
              <img
                src="/placeholder.svg?height=600&width=600"
                alt="Hartă zone deservite Timișoara"
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#242f40]/80 to-transparent" />

              {/* Center marker */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-[#cca43b] flex items-center justify-center shadow-lg animate-pulse">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute -inset-4 rounded-full border-2 border-[#cca43b]/50 animate-ping" />
                </div>
              </div>

              {/* Radius indicator */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <p className="text-white text-center font-medium">
                  <span className="text-[#cca43b] text-2xl font-serif font-bold">100 km</span>
                  <br />
                  <span className="text-sm text-white/80">rază de acoperire din Timișoara</span>
                </p>
              </div>
            </div>
          </div>

          {/* Right - Areas list */}
          <div className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}>
            <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Zone Deservite</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4 mb-6">
              Acoperim{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#b8922f]">
                Vestul României
              </span>
            </h2>
            <p className="text-[#363636] leading-relaxed mb-8">
              Cu sediul în Timișoara, oferim servicii de montaj și reparații acoperișuri în întreg vestul țării. Echipa
              noastră se deplasează în toate localitățile din raza de 100 km, asigurând aceeași calitate și
              profesionalism.
            </p>

            {/* Areas grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-8">
              {areas.map((area, index) => (
                <div
                  key={area.name}
                  className={cn(
                    "flex items-center gap-2 p-3 rounded-lg transition-all duration-300",
                    area.featured
                      ? "bg-gradient-to-r from-[#cca43b] to-[#d4b55a] text-white"
                      : "bg-white hover:bg-[#e5e5e5] border border-[#e5e5e5]",
                    isVisible ? `animate-fade-in stagger-${(index % 6) + 1}` : "opacity-0",
                  )}
                >
                  <MapPin className={cn("w-4 h-4 flex-shrink-0", area.featured ? "text-white" : "text-[#cca43b]")} />
                  <div>
                    <p className={cn("text-sm font-medium", area.featured ? "text-white" : "text-[#242f40]")}>
                      {area.name}
                    </p>
                    <p className={cn("text-xs", area.featured ? "text-white/80" : "text-[#363636]")}>{area.distance}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GTMButton
                gtmLabel="areas_call_now"
                gtmCategory="Service Areas"
                className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white"
                asChild
              >
                <a href="tel:+40759614930" className="flex items-center justify-center gap-2">
                  <Phone className="w-4 h-4" />
                  Solicită Deplasare Gratuită
                </a>
              </GTMButton>
            </div>

            <p className="text-sm text-[#363636] mt-4">
              Nu ești în listă? Contactează-ne pentru a verifica dacă acoperim zona ta.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: (string | boolean | undefined)[]) {
  return classes.filter(Boolean).join(" ")
}
