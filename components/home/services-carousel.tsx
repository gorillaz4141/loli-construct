"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  ChevronLeft,
  ChevronRight,
  Hammer,
  Wrench,
  Building2,
  Package,
} from "lucide-react";
import { GTMButton } from "@/components/ui/gtm-button";
import { cn } from "@/lib/utils";

const services = [
  {
    icon: Hammer,
    title: "Montaj Acoperișuri",
    href: "/montaj-acoperisuri",
    description:
      "Instalare profesională de acoperișuri noi pentru construcții rezidențiale și industriale. Utilizăm materiale premium și tehnici moderne pentru rezultate durabile.",
    features: [
      "Țiglă metalică",
      "Țiglă ceramică",
      "Tablă falțuită",
      "Șindrilă bituminoasă",
    ],
    image: "/reno-acop-22.jpeg",
  },
  {
    icon: Wrench,
    title: "Reparații Acoperișuri",
    href: "/reparatii-acoperisuri",
    description:
      "Servicii de reparații rapide și eficiente pentru orice tip de acoperiș. Identificăm și rezolvăm problemele înainte să devină costisitoare.",
    features: ["Infiltrații", "Țigle sparte", "Jgheaburi", "Izolații"],
    image: "/reno-acop-21.jpeg",
  },
  {
    icon: Building2,
    title: "Dulgherie Acoperiș",
    href: "/dulgherie-acoperis",
    description:
      "Structuri din lemn de cea mai înaltă calitate pentru acoperișuri rezistente în timp. Meșteri dulgheri cu experiență în proiecte complexe.",
    features: ["Șarpante", "Căpriori", "Grinzi", "Mansardări"],
    image: "/reno-acop-31.jpeg",
  },
  {
    icon: Package,
    title: "Accesorii Acoperiș",
    href: "/accesorii-acoperis",
    description:
      "Gamă completă de accesorii pentru finisarea perfectă a acoperișului. Produse de calitate germană cu garanție extinsă.",
    features: ["Jgheaburi", "Burlane", "Coamă", "Ferestre mansardă"],
    image: "/sists-jgheab2.jpeg",
  },
];

export function ServicesCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section className="py-20 bg-[#e5e5e5]/30">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">
            Serviciile Noastre
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4 text-balance">
            Soluții Complete pentru{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#b8922f]">
              Acoperișul Tău
            </span>
          </h2>
          <p className="text-[#363636] mt-4 max-w-2xl mx-auto">
            De la montaj la reparații și întreținere, oferim servicii complete
            cu standarde de calitate germană.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex gap-6">
              {services.map((service, index) => (
                <div
                  key={service.title}
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_calc(33.333%-16px)] min-w-0"
                >
                  <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group h-full flex flex-col">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image || "/reno-acop-22.jpeg"}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#242f40]/60 to-transparent" />
                      <div className="absolute bottom-4 left-4">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#cca43b] to-[#d4b55a] flex items-center justify-center shadow-lg">
                          <service.icon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-serif font-bold text-[#242f40] mb-3">
                        {service.title}
                      </h3>
                      <p className="text-[#363636] text-sm leading-relaxed mb-4 flex-1">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {service.features.map((feature) => (
                          <span
                            key={feature}
                            className="text-xs px-3 py-1 bg-[#e5e5e5] text-[#363636] rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>

                      {/* CTA */}
                      <GTMButton
                        gtmLabel={`service_card_${service.title}`}
                        gtmCategory="Services"
                        className="w-full bg-[#242f40] hover:bg-[#cca43b] text-white transition-colors duration-300"
                        asChild
                      >
                        <a href={service.href}>Află Mai Multe</a>
                      </GTMButton>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white z-10",
              !canScrollPrev && "opacity-50 cursor-not-allowed"
            )}
            disabled={!canScrollPrev}
            aria-label="Anterior"
            data-gtm-event="click"
            data-gtm-category="Carousel"
            data-gtm-action="prev_click"
            data-gtm-label="services_carousel"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={scrollNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-[#cca43b] hover:text-white z-10",
              !canScrollNext && "opacity-50 cursor-not-allowed"
            )}
            disabled={!canScrollNext}
            aria-label="Următor"
            data-gtm-event="click"
            data-gtm-category="Carousel"
            data-gtm-action="next_click"
            data-gtm-label="services_carousel"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {services.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={cn(
                "w-3 h-3 rounded-full transition-all duration-300",
                selectedIndex === index
                  ? "bg-[#cca43b] w-8"
                  : "bg-[#e5e5e5] hover:bg-[#cca43b]/50"
              )}
              aria-label={`Slide ${index + 1}`}
              data-gtm-event="click"
              data-gtm-category="Carousel"
              data-gtm-action="dot_click"
              data-gtm-label={`services_dot_${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
