import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata: Metadata = {
  title:
    "Reparații Acoperișuri Timișoara - Servicii Urgente 24/7 | Loli Construct",
  description:
    "Reparații acoperișuri în Timișoara și împrejurimi. Infiltrații, țigle sparte, probleme jgheaburi. Intervenții urgente 24/7. Echipă profesionistă. Solicită evaluare gratuită!",
  keywords: [
    "reparații acoperiș Timișoara",
    "infiltrații acoperiș",
    "țigle sparte",
    "urgențe acoperiș",
    "reparații jgheaburi",
    "etanșare acoperiș",
    "renovare acoperiș",
  ],
  openGraph: {
    title:
      "Reparații Acoperișuri Timișoara - Servicii Urgente 24/7 | Loli Construct",
    description:
      "Reparații acoperișuri în Timișoara. Infiltrații, țigle sparte, probleme jgheaburi. Intervenții urgente 24/7.",
    url: "https://loliconstruct.ro/reparatii-acoperisuri",
    type: "website",
  },
  alternates: {
    canonical: "https://loliconstruct.ro/reparatii-acoperisuri",
  },
};

const features = [
  {
    title: "Reparații Infiltrații",
    description:
      "Identificăm și eliminăm sursele de infiltrații rapid și eficient. Folosim tehnologii moderne de detectare și materiale de etanșare premium.",
  },
  {
    title: "Înlocuire Țigle",
    description:
      "Înlocuim țiglele sparte sau deteriorate cu piese identice sau compatibile. Intervenim rapid pentru a preveni daune suplimentare.",
  },
  {
    title: "Reparații Jgheaburi",
    description:
      "Reparăm sau înlocuim jgheaburile și burlanele deteriorate. Asigurăm scurgerea corectă a apei pluviale și protecția fațadei.",
  },
  {
    title: "Etanșări",
    description:
      "Etanșăm zonele problematice: coamă, streașină, racorduri la horn și ferestre de mansardă. Materiale de calitate germană.",
  },
  {
    title: "Reparații Urgente",
    description:
      "Intervenții de urgență 24/7 pentru situații critice: furtuni, grindină, căderi de copaci. Suntem pregătiți oricând.",
  },
  {
    title: "Întreținere Preventivă",
    description:
      "Oferim servicii de inspecție și întreținere periodică pentru a preveni problemele costisitoare pe termen lung.",
  },
];

const benefits = [
  "Disponibilitate 24/7 pentru urgențe - suntem mereu pregătiți să intervenim",
  "Diagnostic precis cu echipamente moderne de detectare a infiltrațiilor",
  "Reparații durabile, nu soluții temporare - rezolvăm cauza, nu doar efectul",
  "Prețuri corecte și transparente, fără costuri ascunse",
  "Intervenție rapidă în maximum 24 de ore în zona Timișoara",
  "Garanție pentru toate lucrările de reparații efectuate",
];

const process = [
  {
    step: 1,
    title: "Apel Urgență",
    description:
      "Ne contactați telefonic și descrieți problema. Suntem disponibili 24/7.",
  },
  {
    step: 2,
    title: "Diagnostic",
    description:
      "Venim la fața locului pentru a evalua situația și a identifica cauza exactă.",
  },
  {
    step: 3,
    title: "Soluție",
    description:
      "Propunem cea mai bună soluție și oferim o estimare clară a costurilor.",
  },
  {
    step: 4,
    title: "Reparație",
    description:
      "Executăm reparația profesional și verificăm rezultatul final împreună.",
  },
];

export default function ReparatiiAcoperisuri() {
  return (
    <ServicePageLayout
      title="Reparații Acoperișuri"
      subtitle="Intervenții Urgente 24/7"
      description="Rezolvăm rapid orice problemă a acoperișului: infiltrații, țigle sparte, defecțiuni jgheaburi. Echipă pregătită pentru intervenții de urgență, disponibilă non-stop."
      heroImage="/acop-tabla-cutata-2.jpeg"
      icon="Wrench"
      features={features}
      benefits={benefits}
      process={process}
    />
  );
}
