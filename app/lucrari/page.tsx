import type { Metadata } from "next"
import { ProjectSection } from "@/components/lucrari/project-section"
import { Phone } from "lucide-react"
import { GTMButton } from "@/components/ui/gtm-button"

export const metadata: Metadata = {
  title: "Lucrări Realizate - Portofoliu Acoperișuri | Loli Construct Timișoara",
  description:
    "Vizualizați proiectele noastre de montaj și reparații acoperișuri în Timișoara și împrejurimi. Galerie foto cu lucrări înainte, pe parcurs și rezultate finale.",
  keywords: [
    "lucrări acoperișuri Timișoara",
    "portofoliu acoperișuri",
    "proiecte finalizate",
    "galerie foto acoperișuri",
    "exemple lucrări acoperiș",
  ],
  openGraph: {
    title: "Lucrări Realizate - Portofoliu Acoperișuri | Loli Construct Timișoara",
    description: "Vizualizați proiectele noastre de montaj și reparații acoperișuri. Galerie foto cu înainte și după.",
    url: "https://loliconstruct.ro/lucrari",
    type: "website",
  },
  alternates: {
    canonical: "https://loliconstruct.ro/lucrari",
  },
}

const projects = [
  {
    title: "Înlocuire Completă Acoperiș - Vila Modernă",
    description:
      "Proiect complex de înlocuire completă a acoperișului pentru o vilă modernă din Timișoara. Am demontat acoperișul vechi din tablă deteriorată și am montat un sistem nou cu țiglă metalică Lindab, incluzând izolație termică completă, barieră de vapori și sistem pluvial integrat. Rezultatul: un acoperiș elegant și eficient energetic.",
    location: "Timișoara, Zona Lipovei",
    duration: "12 zile lucrătoare",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Acoperiș vechi deteriorat", label: "Înainte" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Demontare acoperiș", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Montaj izolație", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Acoperiș finalizat", label: "Rezultat Final" },
    ],
  },
  {
    title: "Mansardare Casă Veche - Proiect de Renovare",
    description:
      "Transformare spectaculoasă a unui pod neutilizat într-un spațiu locuibil modern. Am realizat structura de rezistență, am montat ferestre Velux pentru iluminare naturală și am executat toate lucrările de dulgherie. Proprietarul a câștigat 60mp de spațiu locuibil de calitate superioară.",
    location: "Lugoj, Timiș",
    duration: "18 zile lucrătoare",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Pod neutilizat", label: "Înainte" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Structură șarpantă", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Montaj ferestre Velux", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Mansardă finalizată", label: "Rezultat Final" },
    ],
  },
  {
    title: "Reparații Urgente După Furtună",
    description:
      "Intervenție de urgență după o furtună puternică care a deteriorat semnificativ acoperișul unei case din Arad. Am securizat zona în primele ore, am înlocuit țiglele sparte, am reparat structura de lemn afectată și am refăcut sistemul de jgheaburi. Clientul a fost protejat de alte daune.",
    location: "Arad, Zona Centrală",
    duration: "5 zile lucrătoare",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Daune furtună", label: "Înainte" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Securizare zonă", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Reparații structură", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Acoperiș reparat", label: "Rezultat Final" },
    ],
  },
  {
    title: "Acoperiș Hală Industrială",
    description:
      "Proiect de anvergură pentru o hală industrială de 2000mp în zona Deva. Am montat un sistem de acoperiș cu panouri sandwich pentru izolare termică optimă, sistem de ventilație industrială și jgheaburi de mari dimensiuni. Lucrarea a respectat toate normele de siguranță industrială.",
    location: "Deva, Zona Industrială",
    duration: "25 zile lucrătoare",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Structură metalică hală", label: "Înainte" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Montaj panouri", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Sistem ventilație", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Hală finalizată", label: "Rezultat Final" },
    ],
  },
  {
    title: "Renovare Acoperiș Casă Tradițională",
    description:
      "Renovare completă a acoperișului unei case tradiționale bănățene din Recaș. Am păstrat caracterul autentic al construcției utilizând țiglă ceramică tradițională, în timp ce am modernizat structura și izolația. Un echilibru perfect între tradiție și eficiență modernă.",
    location: "Recaș, Timiș",
    duration: "14 zile lucrătoare",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Acoperiș vechi tradițional", label: "Înainte" },
      {
        src: "/placeholder.svg?height=600&width=800",
        alt: "Consolidare structură",
        label: "Pe Parcursul Lucrării",
      },
      { src: "/placeholder.svg?height=600&width=800", alt: "Montaj țiglă ceramică", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Casă renovată", label: "Rezultat Final" },
    ],
  },
  {
    title: "Sistem Pluvial Complet - Complex Rezidențial",
    description:
      "Instalare sistem pluvial complet pentru un complex rezidențial nou din Timișoara. Am montat jgheaburi și burlane Lindab pentru 8 clădiri, asigurând drenajul eficient al apelor pluviale și protecția fațadelor. Proiect realizat în colaborare cu dezvoltatorul imobiliar.",
    location: "Timișoara, Zona Girocului",
    duration: "10 zile lucrătoare",
    images: [
      { src: "/placeholder.svg?height=600&width=800", alt: "Clădiri fără sistem pluvial", label: "Înainte" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Montaj jgheaburi", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Conectare burlane", label: "Pe Parcursul Lucrării" },
      { src: "/placeholder.svg?height=600&width=800", alt: "Sistem finalizat", label: "Rezultat Final" },
    ],
  },
]

export default function LucrariPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-b from-[#242f40] to-[#1a222d] overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-[#cca43b]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#cca43b]/5 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <span className="inline-block text-[#cca43b] text-sm font-semibold tracking-wider uppercase mb-4">
            Portofoliu
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">
            Lucrările{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">Noastre</span>
          </h1>
          <p className="text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto leading-relaxed">
            Fiecare proiect spune o poveste de transformare. Explorați galeria noastră de lucrări finalizate și
            descoperiți cum am ajutat clienții să își protejeze casele cu acoperișuri de calitate superioară.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">500+</p>
              <p className="text-sm text-white/70">Proiecte Finalizate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">15+</p>
              <p className="text-sm text-white/70">Ani Experiență</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">100%</p>
              <p className="text-sm text-white/70">Clienți Mulțumiți</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242f40] mb-6">
            Transparență și <span className="text-[#cca43b]">Calitate</span> Dovedită
          </h2>
          <p className="text-[#363636] leading-relaxed">
            Credem în transparență totală. De aceea, documentăm fiecare proiect de la început până la final. În galeria
            de mai jos veți vedea imagini{" "}
            <strong className="text-[#242f40]">înainte de intervenție, pe parcursul lucrării</strong> și{" "}
            <strong className="text-[#242f40]">rezultatul final</strong>. Navigați prin imagini folosind săgețile sau
            glisând pe dispozitivele mobile.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#e5e5e5]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div key={project.title} className={`${index > 0 ? "pt-16 border-t border-[#e5e5e5]" : ""}`}>
                <ProjectSection
                  title={project.title}
                  description={project.description}
                  location={project.location}
                  duration={project.duration}
                  images={project.images}
                  reversed={index % 2 !== 0}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#242f40] to-[#1a222d]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">
            Vreți un Acoperiș ca în <span className="text-[#cca43b]">Imaginile de Sus</span>?
          </h2>
          <p className="text-[#e5e5e5] text-lg mb-8">
            Contactați-ne astăzi pentru o evaluare gratuită. Vă garantăm aceeași calitate și atenție la detalii pentru
            proiectul dumneavoastră.
          </p>
          <GTMButton
            gtmLabel="lucrari_cta_call"
            gtmCategory="Portfolio CTA"
            className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-10 py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a href="tel:+40759614930" className="flex items-center justify-center gap-3">
              <Phone className="w-5 h-5" />
              Solicită Ofertă Gratuită
            </a>
          </GTMButton>
        </div>
      </section>
    </>
  )
}
