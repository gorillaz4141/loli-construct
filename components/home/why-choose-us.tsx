"use client";

import { useEffect, useRef, useState } from "react";
import { Shield, Award, Clock, Users, CheckCircle, Wrench } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Standarde Germane",
    description:
      "Echipa noastră a lucrat ani de zile în Germania și Austria, aducând cele mai înalte standarde de calitate în România.",
  },
  {
    icon: Shield,
    title: "Garanție Extinsă",
    description:
      "Oferim garanție de până la 10 ani pentru lucrările noastre, demonstrând încrederea în calitatea muncii efectuate.",
  },
  {
    icon: Clock,
    title: "Disponibilitate 24/7",
    description:
      "Înțelegem că urgențele nu au program. Suntem disponibili oricând pentru situații critice legate de acoperiș.",
  },
  {
    icon: Users,
    title: "Echipă Profesionistă",
    description:
      "Meșteri calificați cu experiență vastă în toate tipurile de acoperișuri, de la rezidențial la industrial.",
  },
  {
    icon: CheckCircle,
    title: "Materiale Premium",
    description:
      "Folosim exclusiv materiale de cea mai înaltă calitate, certificate și cu garanție de la producători de renume.",
  },
  {
    icon: Wrench,
    title: "Echipamente Moderne",
    description:
      "Investim constant în echipamente și tehnologii moderne pentru rezultate impecabile și termene respectate.",
  },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div
            className={`relative ${
              isVisible ? "animate-slide-in-left" : "opacity-0"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/fronton-3.jpeg"
                alt="Echipa Loli Construct la lucru"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#242f40]/40 to-transparent" />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-8 -right-8 bg-white rounded-xl shadow-xl p-6 max-w-xs">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#cca43b] to-[#d4b55a] flex items-center justify-center flex-shrink-0">
                  <Award className="w-7 h-7 text-white" />
                </div>
                <div>
                  <p className="text-2xl font-serif font-bold text-[#242f40]">
                    15+ Ani
                  </p>
                  <p className="text-[#363636] text-sm">
                    Experiență în domeniu
                  </p>
                </div>
              </div>
            </div>
            {/* Decorative element */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-4 border-[#cca43b]/30 rounded-2xl -z-10" />
          </div>

          {/* Right - Content */}
          <div
            className={`${isVisible ? "animate-slide-in-right" : "opacity-0"}`}
          >
            <span className="text-[#cca43b] text-sm font-semibold tracking-wider uppercase">
              De Ce Noi?
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#242f40] mt-4 mb-6">
              Excelență și{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#b8922f]">
                Profesionalism
              </span>{" "}
              la Fiecare Proiect
            </h2>
            <p className="text-[#363636] leading-relaxed mb-8">
              Cu o experiență dobândită în țări cu cele mai ridicate standarde
              în construcții, aducem în România servicii de acoperiș care
              rivalizează cu cele din Germania și Austria. Fiecare proiect este
              tratat cu aceeași atenție la detalii și dedicare.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div
                  key={reason.title}
                  className={`flex gap-4 ${
                    isVisible
                      ? `animate-fade-in-up stagger-${index + 1}`
                      : "opacity-0"
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-[#e5e5e5] flex items-center justify-center flex-shrink-0 group-hover:bg-[#cca43b]/20 transition-colors">
                    <reason.icon className="w-6 h-6 text-[#cca43b]" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#242f40] mb-1">
                      {reason.title}
                    </h3>
                    <p className="text-sm text-[#363636]">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
