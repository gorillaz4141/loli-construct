import type { Metadata } from "next";
import { ServicePageLayout } from "@/components/services/service-page-layout";

export const metadata: Metadata = {
  title:
    "Accesorii Acoperiș Timișoara - Jgheaburi, Burlane, Ferestre | Loli Construct",
  description:
    "Gamă completă de accesorii pentru acoperișuri în Timișoara: jgheaburi, burlane, ferestre mansardă, coamă. Produse premium, montaj profesional. Solicită ofertă!",
  keywords: [
    "accesorii acoperiș Timișoara",
    "jgheaburi",
    "burlane",
    "ferestre mansardă",
    "Velux",
    "coamă acoperiș",
    "sistem pluvial",
    "lucarne",
  ],
  openGraph: {
    title:
      "Accesorii Acoperiș Timișoara - Jgheaburi, Burlane, Ferestre | Loli Construct",
    description:
      "Gamă completă de accesorii pentru acoperișuri: jgheaburi, burlane, ferestre mansardă. Produse premium.",
    url: "https://loliconstruct.ro/accesorii-acoperis",
    type: "website",
  },
  alternates: {
    canonical: "https://loliconstruct.ro/accesorii-acoperis",
  },
};

const features = [
  {
    title: "Jgheaburi și Burlane",
    description:
      "Sisteme complete de colectare a apei pluviale. Jgheaburi semicirculare și pătrate, burlane în diverse diametre și culori.",
  },
  {
    title: "Ferestre Mansardă",
    description:
      "Montăm ferestre de mansardă Velux, Fakro și alte branduri premium. Diverse dimensiuni, sisteme de deschidere și accesorii.",
  },
  {
    title: "Coamă și Muchii",
    description:
      "Elemente de coamă și muchie pentru finisarea perfectă a acoperișului. Ventilație integrată și etanșare completă.",
  },
  {
    title: "Streașină",
    description:
      "Sisteme de streașină din PVC sau aluminiu. Protecție și ventilație pentru structura acoperișului.",
  },
  {
    title: "Lucarne și Tabachiere",
    description:
      "Construim lucarne pentru iluminarea naturală a mansardei și montăm tabachiere pentru acces pe acoperiș.",
  },
  {
    title: "Paratrăsnete",
    description:
      "Instalăm sisteme de protecție împotriva descărcărilor electrice, conform normativelor în vigoare.",
  },
];

const benefits = [
  "Produse de la branduri de renume: Lindab, Velux, Fakro, Wetterbest",
  "Montaj profesional cu garanție pentru manoperă și produse",
  "Consultanță pentru alegerea accesoriilor potrivite proiectului",
  "Gamă variată de culori și finisaje pentru orice stil arhitectural",
  "Soluții complete - de la proiectare la montaj și service",
  "Prețuri competitive pentru produse premium",
];

const process = [
  {
    step: 1,
    title: "Evaluare",
    description:
      "Analizăm acoperișul existent și identificăm accesoriile necesare.",
  },
  {
    step: 2,
    title: "Selecție",
    description:
      "Vă ajutăm să alegeți produsele potrivite din gama noastră variată.",
  },
  {
    step: 3,
    title: "Comandă",
    description:
      "Comandăm produsele și programăm montajul la o dată convenabilă.",
  },
  {
    step: 4,
    title: "Montaj",
    description:
      "Instalăm profesional toate accesoriile și verificăm funcționarea.",
  },
];

const materials = [
  {
    name: "Jgheaburi Lindab",
    description:
      "Sistem pluvial suedez din oțel, rezistent la coroziune și cu estetică premium.",
  },
  {
    name: "Ferestre Velux",
    description:
      "Ferestre de mansardă daneze, lider mondial în iluminare naturală și ventilație.",
  },
  {
    name: "Ferestre Fakro",
    description:
      "Alternative de calitate pentru ferestre de mansardă, cu diverse opțiuni de deschidere.",
  },
  {
    name: "Sistem Zambelli",
    description:
      "Jgheaburi și burlane din cupru sau zinc-titan pentru un aspect elegant și durabil.",
  },
  {
    name: "Coamă Ventilată",
    description:
      "Sisteme de coamă cu ventilație integrată pentru un acoperiș sănătos.",
  },
  {
    name: "Scări Acces",
    description:
      "Scări pliabile și fixe pentru acces la mansardă și pe acoperiș.",
  },
];

export default function AccesoriiAcoperis() {
  return (
    <ServicePageLayout
      title="Accesorii Acoperiș"
      subtitle="Produse Premium"
      description="Gamă completă de accesorii pentru finisarea și funcționalitatea perfectă a acoperișului. Produse de calitate germană și montaj profesional."
      heroImage="/terasa2.jpeg"
      icon="Package"
      features={features}
      benefits={benefits}
      process={process}
      materials={materials}
    />
  );
}
