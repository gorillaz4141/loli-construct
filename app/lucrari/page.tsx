import type { Metadata } from "next";
import { ProjectSection } from "@/components/lucrari/project-section";
import { Phone } from "lucide-react";
import { GTMButton } from "@/components/ui/gtm-button";

export const metadata: Metadata = {
  title:
    "Lucrări Realizate - Portofoliu Acoperișuri | Loli Construct Timișoara",
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
    title:
      "Lucrări Realizate - Portofoliu Acoperișuri | Loli Construct Timișoara",
    description:
      "Vizualizați proiectele noastre de montaj și reparații acoperișuri. Galerie foto cu înainte și după.",
    url: "https://loliconstruct.ro/lucrari",
    type: "website",
  },
  alternates: {
    canonical: "https://loliconstruct.ro/lucrari",
  },
};

const projects = [
  {
    title: "Renovare acoperiș 640 m² – Sistem complet țiglă metalică",
    description:
      "Am realizat renovarea completă a unui acoperiș de 640 m², prin decopertarea integrală a învelitorii existente și instalarea unui sistem modern din țiglă metalică, inclusiv toate accesoriile tehnice necesare. Lucrarea a inclus: pregătirea și repararea structurii de lemn; montarea foliei anticondens și a sistemului de șipci și contrașipci pentru ventilație optimă; instalarea țiglei metalice și a elementelor de finisaj; implementarea sistemului pluvial complet pentru scurgerea apei.",
    location: "Timișoara, Zona Aradului",
    duration: "14 zile lucrătoare",

    images: [
      {
        src: "/reno-acop-31.jpeg",
        alt: "Acoperiș vechi deteriorat",
        label: "Înainte",
      },
      {
        src: "/reno-acop-32.jpeg",
        alt: "Demontare acoperiș",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/reno-acop-33.jpeg",
        alt: "Montaj izolație",
        label: "Rezultat final",
      },
    ],
  },
  {
    title: "Renovare acoperiș 40 m² – Montaj tablă peste șindrilă bituminoasă",
    description:
      "Am modernizat un acoperiș de 40 m² prin montarea unei învelitori noi din tablă profilată peste șindrila bituminoasă existentă, fără demontare. Lucrarea a inclus instalarea foliei anticondens, montarea șipcilor și contrașipcilor pentru ventilare, apoi montarea de tablă și a accesoriilor.",
    location: "Lugoj, Timiș",
    duration: "6 zile lucrătoare",

    images: [
      {
        src: "/reno-acop-01.jpeg",
        alt: "Pod neutilizat",
        label: "Înainte",
      },
      {
        src: "/reno-acop-02.jpeg",
        alt: "Structură șarpantă",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/reno-acop-03.jpeg",
        alt: "Montaj ferestre Velux",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title:
      "Renovare acoperiș 372 m² – Decopertare țiglă veche și montaj țiglă metalică",
    description:
      "Am realizat renovarea completă a unui acoperiș de 372 m², prin decopertarea întregii învelitori din țiglă ceramică veche și instalarea unui nou sistem de acoperiș din țiglă metalică, împreună cu toate accesoriile necesare. Lucrarea a inclus: decopertarea completă a țiglei vechi și curățarea suportului; repararea și pregătirea structurii din lemn acolo unde a fost necesar; montarea foliei anticondens, șipci și contrașipci pentru o ventilație corectă; instalarea țiglei metalice și a tuturor elementelor de finisaj; montarea a 4 ferestre de mansardă Velux cu rame de etanșare; construirea și îmbrăcarea unui horn în tablă fălțuită, pentru protecție și durabilitate; instalarea sistemului pluvial complet: jgheaburi, burlane și accesorii.",
    location: "Arad, Zona Centrală",
    duration: "12 zile lucrătoare",

    images: [
      {
        src: "/reno-acop-21.jpeg",
        alt: "Daune furtună",
        label: "Înainte",
      },
      {
        src: "/reno-acop-20.jpeg",
        alt: "Securizare zonă",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/reno-acop-22.jpeg",
        alt: "Acoperiș reparat",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title: "Sistem de jgheaburi 25 metri",
    description:
      "Am realizat renovarea completă a unui sistem de jgheaburi de 25 metri, incluzând înlocuirea jgheaburilor și burlanelor, fixarea accesoriilor și etanșarea completă a îmbinărilor.",
    location: "Timișoara, Zona Girocului",
    duration: "2 zile lucrătoare",

    images: [
      {
        src: "/sist-jgheab1.jpeg",
        alt: "Structură metalică hală",
        label: "Înainte",
      },

      {
        src: "/sists-jgheab2.jpeg",
        alt: "Hală finalizată",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title:
      "Terasă 15 m² – Structură cu policarbonat și sistem pluvial din aluminiu",
    description:
      "Am realizat o terasă de 15 m², lipită de peretele casei, cu structură completă din grinzi și acoperiș din policarbonat transparent, asigurând atât protecție, cât și luminozitate naturală. Lucrarea a inclus instalarea unui sistem pluvial din aluminiu pentru colectarea eficientă a apei de ploaie. Rezultat: o terasă modernă, rezistentă și durabilă, cu întreținere minimă și protecție completă împotriva intemperiilor.",
    location: "Timișoara, Zona Dumbrăvița",
    duration: "4 zile lucrătoare",

    images: [
      {
        src: "/terasa1.jpeg",
        alt: "Consolidare structură",
        label: "Pe Parcursul Lucrării",
      },

      {
        src: "/terasa2.jpeg",
        alt: "Casă renovată",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title: "Terasă și carport 65 m² – Structură completă cu acoperiș protejat",
    description:
      "Am realizat o terasă și carport de 65 m², cu structură completă din grinzi, acoperiș din tablă și placare cu lambriu, asigurând rezistență, durabilitate și aspect estetic uniform. Lucrarea a inclus și sistem pluvial complet, pentru colectarea eficientă a apei de ploaie.Rezultat: spațiu funcțional și protejat, durabil, estetic și cu întreținere minimă. ",
    location: "Deva, Zona Industrială",
    duration: "9 zile lucrătoare",

    images: [
      {
        src: "/carport01.jpeg",
        alt: "Clădiri fără sistem pluvial",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/carport02.jpeg",
        alt: "Montaj jgheaburi",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/carport03.jpeg",
        alt: "Conectare burlane",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/carport1.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
      {
        src: "/carport2.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
    ],
  },
  {
    title: "Fronton acoperit – Tablă peste lambriu vechi",
    description:
      "Am renovat un fronton existent, montând tablă direct peste lambriul vechi, cu protecție inclusiv pentru laterale. Lucrarea asigură durabilitate sporită, etanșeitate și un aspect estetic uniform. ",
    location: "Reșița, Zona Centrală",
    duration: "3 zile lucrătoare",

    images: [
      {
        src: "/fronton-1.jpeg",
        alt: "Clădiri fără sistem pluvial",
        label: "Pe Parcursul Lucrării",
      },
      {
        src: "/fronton-2.jpeg",
        alt: "Montaj jgheaburi",
        label: "Pe Parcursul Lucrării",
      },

      {
        src: "/fronton-3.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
      {
        src: "/fronton-4.jpeg",
        alt: "Sistem finalizat",
        label: "Rezultat Final",
      },
    ],
  },
];

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
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cca43b] to-[#d4b55a]">
              Noastre
            </span>
          </h1>
          <p className="text-lg md:text-xl text-[#e5e5e5] max-w-3xl mx-auto leading-relaxed">
            Fiecare proiect spune o poveste de transformare. Explorați galeria
            noastră de lucrări finalizate și descoperiți cum am ajutat clienții
            să își protejeze casele cu acoperișuri de calitate superioară.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">
                500+
              </p>
              <p className="text-sm text-white/70">Proiecte Finalizate</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">
                15+
              </p>
              <p className="text-sm text-white/70">Ani Experiență</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg px-6 py-3 border border-white/20">
              <p className="text-2xl font-serif font-bold text-[#cca43b]">
                100%
              </p>
              <p className="text-sm text-white/70">Clienți Mulțumiți</p>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-[#242f40] mb-6">
            Transparență și <span className="text-[#cca43b]">Calitate</span>{" "}
            Dovedită
          </h2>
          <p className="text-[#363636] leading-relaxed">
            Credem în transparență totală. De aceea, documentăm fiecare proiect
            de la început până la final. În galeria de mai jos veți vedea
            imagini{" "}
            <strong className="text-[#242f40]">
              înainte de intervenție, pe parcursul lucrării
            </strong>{" "}
            și <strong className="text-[#242f40]">rezultatul final</strong>.
            Navigați prin imagini folosind săgețile sau glisând pe dispozitivele
            mobile.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20 bg-[#e5e5e5]/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`${
                  index > 0 ? "pt-16 border-t border-[#e5e5e5]" : ""
                }`}
              >
                <ProjectSection
                  title={project.title}
                  description={project.description}
                  images={project.images}
                  reversed={index % 2 !== 0}
                  location={project.location}
                  duration={project.duration}
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
            Vreți un Acoperiș ca în{" "}
            <span className="text-[#cca43b]">Imaginile de Sus</span>?
          </h2>
          <p className="text-[#e5e5e5] text-lg mb-8">
            Contactați-ne astăzi pentru o evaluare gratuită. Vă garantăm aceeași
            calitate și atenție la detalii pentru proiectul dumneavoastră.
          </p>
          <GTMButton
            gtmLabel="lucrari_cta_call"
            gtmCategory="Portfolio CTA"
            className="bg-gradient-to-r from-[#cca43b] to-[#d4b55a] hover:from-[#b8922f] hover:to-[#cca43b] text-white px-10 py-5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            asChild
          >
            <a
              href="tel:+40759614930"
              className="flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              Solicită Ofertă Gratuită
            </a>
          </GTMButton>
        </div>
      </section>
    </>
  );
}
