import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata: Metadata = {
  title:
    "Montaj Acoperișuri Timișoara - Instalare Profesională | Acoperiș la Gata",
  description:
    "Servicii profesionale de montaj acoperișuri în Timișoara și împrejurimi. Țiglă metalică, ceramică, tablă falțuită. Echipă cu experiență Germania/Austria. Garanție 10 ani. Solicită ofertă gratuită!",
  keywords: [
    "montaj acoperiș Timișoara",
    "instalare acoperiș",
    "acoperiș nou",
    "țiglă metalică",
    "țiglă ceramică",
    "tablă falțuită",
    "constructor acoperișuri",
    "firma montaj acoperiș",
  ],
  openGraph: {
    title:
      "Montaj Acoperișuri Timișoara - Instalare Profesională | Acoperiș la Gata",
    description:
      "Servicii profesionale de montaj acoperișuri în Timișoara. Țiglă metalică, ceramică, tablă falțuită. Garanție 10 ani.",
    url: "https://acoperislagata.ro/montaj-acoperisuri",
    type: "website",
  },
  alternates: {
    canonical: "https://acoperislagata.ro/montaj-acoperisuri",
  },
};

const features = [
  {
    title: "Țiglă Metalică",
    description:
      "Montaj profesional de țiglă metalică de la producători de renume. Durabilitate excepțională, aspect modern și rezistență la intemperii.",
  },
  {
    title: "Țiglă Ceramică",
    description:
      "Instalare expertă de țiglă ceramică tradițională sau modernă. Ideală pentru case clasice, oferă izolare termică superioară.",
  },
  {
    title: "Tablă Falțuită",
    description:
      "Montaj de acoperișuri din tablă falțuită pentru un aspect elegant și modern. Perfectă pentru clădiri rezidențiale și comerciale.",
  },
  {
    title: "Șindrilă Bituminoasă",
    description:
      "Instalare de șindrilă bituminoasă flexibilă, ideală pentru acoperișuri cu forme complexe și unghi redus de înclinație.",
  },
  {
    title: "Acoperișuri Industriale",
    description:
      "Soluții complete pentru hale și clădiri industriale. Panouri sandwich, tablă trapezoidală și sisteme de ventilație.",
  },
  {
    title: "Sisteme Complete",
    description:
      "Montăm sisteme complete incluzând izolație, barieră de vapori, astriș și toate accesoriile necesare pentru un acoperiș perfect.",
  },
];

const benefits = [
  "Echipă cu experiență în Germania și Austria, standarde europene de calitate",
  "Garanție extinsă de până la 10 ani pentru manoperă și materiale",
  "Utilizăm exclusiv materiale premium de la producători certificați",
  "Consultanță gratuită și evaluare la fața locului fără obligații",
  "Respectăm termenele de execuție și bugetul stabilit",
  "Curățenie completă după finalizarea lucrării",
];

const process = [
  {
    step: 1,
    title: "Consultație",
    description:
      "Discutăm nevoile dvs. și facem o evaluare detaliată a proiectului la fața locului.",
  },
  {
    step: 2,
    title: "Proiectare",
    description:
      "Elaborăm un plan detaliat cu specificații tehnice și o ofertă transparentă.",
  },
  {
    step: 3,
    title: "Execuție",
    description:
      "Echipa noastră realizează montajul respectând cele mai înalte standarde de calitate.",
  },
  {
    step: 4,
    title: "Predare",
    description:
      "Verificăm fiecare detaliu și predăm lucrarea cu toate documentele de garanție.",
  },
];

const materials = [
  {
    name: "Lindab",
    description:
      "Țiglă metalică suedeză premium, rezistentă la coroziune și cu finisaj de lungă durată.",
  },
  {
    name: "Bramac",
    description:
      "Țiglă din beton de cea mai înaltă calitate, cu garanție de 30 de ani de la producător.",
  },
  {
    name: "Tondach",
    description:
      "Țiglă ceramică tradițională austriacă, perfectă pentru case în stil clasic.",
  },
  {
    name: "Wetterbest",
    description:
      "Tablă pentru acoperiș românească de calitate, cu diverse profile și culori.",
  },
  {
    name: "Gerard",
    description:
      "Țiglă metalică acoperită cu piatră naturală, aspect premium și durabilitate excepțională.",
  },
  {
    name: "Tegola",
    description:
      "Șindrilă bituminoasă italiană, flexibilă și rezistentă la variații extreme de temperatură.",
  },
];

export default function MontajAcoperisuri() {
  return (
    <ServicePageLayout
      title="Montaj Acoperișuri"
      subtitle="Servicii de Instalare"
      description="Montăm acoperișuri noi cu materiale premium și tehnici moderne, garantând durabilitate și estetică superioară. Experiență dobândită în Germania și Austria."
      heroImage="/reno-acop-02.jpeg"
      icon="Hammer"
      features={features}
      benefits={benefits}
      process={process}
      materials={materials}
    />
  );
}
