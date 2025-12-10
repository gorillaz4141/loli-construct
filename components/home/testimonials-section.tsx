"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { cn } from "@/lib/utils"

const testimonials = [
  {
    name: "Andrei Popescu",
    location: "Timișoara",
    rating: 5,
    text: "Am colaborat cu Acoperiș la Gata pentru înlocuirea completă a acoperișului casei mele. Profesionalismul echipei m-a impresionat de la prima întâlnire. Lucrarea a fost finalizată în termenul promis, iar calitatea este excepțională. Recomand cu încredere!",
    project: "Înlocuire acoperiș complet",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Maria Ionescu",
    location: "Lugoj",
    rating: 5,
    text: "După mai multe infiltrații în acoperiș, am apelat la Acoperiș la Gata. Au identificat rapid problema și au reparat totul într-o singură zi. Sunt foarte mulțumită de rapiditatea și calitatea serviciilor. Prețuri corecte și transparente.",
    project: "Reparații infiltrații",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Ioan Munteanu",
    location: "Arad",
    rating: 5,
    text: "Am ales Acoperiș la Gata pentru construcția acoperișului halei mele industriale. Experiența lor în Germania se vede în fiecare detaliu. Structura este solidă, iar finisajele impecabile. Partenerul ideal pentru proiecte de anvergură.",
    project: "Acoperiș hală industrială",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Elena Dragomir",
    location: "Deva",
    rating: 5,
    text: "Mansardarea casei a fost un vis devenit realitate datorită echipei Acoperiș la Gata. Au transformat podul într-un spațiu locuibil superb. Dulgheria este de o calitate rară în România. Mulțumim pentru profesionalism!",
    project: "Mansardare completă",
    image: "/placeholder.svg?height=80&width=80",
  },
  {
    name: "Gheorghe Stanciu",
    location: "Reșița",
    rating: 5,
    text: "Am apelat la ei pentru montarea jgheaburilor și burlanelor. Lucrare aparent simplă, dar executată perfect. Niciun strop de apă nu mai ajunge pe fațadă. Echipă serioasă, punctuală și foarte curată după terminarea lucrării.",
    project: "Sistem pluvial complet",
    image: "/placeholder.svg?height=80&width=80",
  },
]

export function TestimonialsSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({ delay: 5000, stopOnInteraction: true }),
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi])

  useEffect(() => {
    if (!emblaApi) return
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap())
    emblaApi.on("select", onSelect)
    return () => {
      emblaApi.off("select", onSelect)
    }
  }, [emblaApi])

  return (
    <section className="py-20 bg-gradient-to-b from-[#242f40] to-[#1a222d] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-[#cca43b]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#cca43b]/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">Testimoniale</span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mt-4">
            Ce Spun{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">
              Clienții Noștri
            </span>
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="flex-[0_0_100%] md:flex-[0_0_50%] lg:flex-[0_0_33.333%] min-w-0 px-4">
                  <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 h-full">
                    {/* Quote icon */}
                    <Quote className="w-10 h-10 text-[#cca43b]/30 mb-4" />

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-[#cca43b] text-[#cca43b]" />
                      ))}
                    </div>

                    {/* Text */}
                    <p className="text-white/80 leading-relaxed mb-6 text-sm">{testimonial.text}</p>

                    {/* Project tag */}
                    <span className="inline-block text-xs px-3 py-1 bg-[#cca43b]/20 text-[#cca43b] rounded-full mb-6">
                      {testimonial.project}
                    </span>

                    {/* Author */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                      <img
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className="text-white font-semibold">{testimonial.name}</p>
                        <p className="text-white/60 text-sm">{testimonial.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white text-white/80 z-10"
            aria-label="Anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white text-white/80 z-10"
            aria-label="Următor"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-2 h-2 rounded-full transition-all duration-300",
                selectedIndex === index ? "bg-[#cca43b] w-6" : "bg-white/30 hover:bg-white/50",
              )}
              aria-label={`Testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
