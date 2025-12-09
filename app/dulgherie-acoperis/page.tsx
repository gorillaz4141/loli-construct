import type { Metadata } from "next"
import { Building2 } from "lucide-react"
import { ServicePageLayout } from "@/components/services/service-page-layout"

export const metadata: Metadata = {
  title: "Dulgherie Acoperiș Timișoara - Șarpante și Structuri Lemn | Loli Construct",
  description:
    "Servicii profesionale de dulgherie pentru acoperișuri în Timișoara. Șarpante tradiționale și moderne, mansardări, grinzi. Meșteri cu experiență. Solicită ofertă!",
  keywords: [
    "dulgherie acoperiș Timișoara",
    "șarpantă lemn",
    "structură acoperiș",
    "mansardare",
    "căpriori",
    "grinzi acoperiș",
    "dulgheri profesioniști",
  ],
  openGraph: {
    title: "Dulgherie Acoperiș Timișoara - Șarpante și Structuri Lemn | Loli Construct",
    description: "Servicii profesionale de dulgherie pentru acoperișuri. Șarpante tradiționale și moderne, mansardări.",
    url: "https://loliconstruct.ro/dulgherie-acoperis",
    type: "website",
  },
  alternates: {
    canonical: "https://loliconstruct.ro/dulgherie-acoperis",
  },
}

const features = [
  {
    title: "Șarpante Tradiționale",
    description:
      "Construim șarpante tradiționale din lemn masiv, folosind tehnici consacrate și îmbinări clasice pentru durabilitate maximă.",
  },
  {
    title: "Șarpante Moderne",
    description:
      "Realizăm structuri moderne cu ferme prefabricate, optimizate pentru eficiență structurală și spații mansardate.",
  },
  {
    title: "Mansardări",
    description:
      "Transformăm podul casei în spațiu locuibil. Proiectăm și executăm mansardări complete, de la structură la finisaje.",
  },
  {
    title: "Consolidări",
    description:
      "Consolidăm și reparăm structuri existente deteriorate. Înlocuim elementele compromise și întărim structura.",
  },
  {
    title: "Tratamente Lemn",
    description: "Aplicăm tratamente ignifuge și împotriva dăunătorilor. Protejăm investiția dvs. pe termen lung.",
  },
  {
    title: "Proiecte Speciale",
    description:
      "Realizăm structuri complexe pentru turle, foișoare, pergole și alte construcții din lemn cu design personalizat.",
  },
]

const benefits = [
  "Meșteri dulgheri cu peste 15 ani experiență în construcții din lemn",
  "Folosim exclusiv lemn de brad și molid uscat, certificat și tratat",
  "Calcule structurale profesionale pentru siguranță maximă",
  "Experiență în proiecte complexe din Germania și Austria",
  "Respectăm normativele românești și europene de construcții",
  "Oferim soluții personalizate pentru orice tip de acoperiș",
]

const process = [
  {
    step: 1,
    title: "Măsurători",
    description: "Realizăm măsurători precise și analizăm cerințele structurale ale proiectului.",
  },
  {
    step: 2,
    title: "Proiectare",
    description: "Elaborăm planurile detaliate cu calcule de rezistență și liste de materiale.",
  },
  {
    step: 3,
    title: "Prefabricare",
    description: "Pregătim elementele în atelier pentru montaj rapid și precis pe șantier.",
  },
  {
    step: 4,
    title: "Montaj",
    description: "Asamblăm structura pe șantier cu atenție la fiecare detaliu și îmbinare.",
  },
]

const materials = [
  {
    name: "Lemn de Brad",
    description: "Lemn de brad uscat la umiditate optimă, ideal pentru căpriori și grinzi secundare.",
  },
  {
    name: "Lemn de Molid",
    description: "Molid de calitate superioară pentru grinzi principale și structuri portante.",
  },
  {
    name: "Lemn Stratificat",
    description: "Grinzi din lemn lamelar încleiat pentru deschideri mari și solicitări speciale.",
  },
  {
    name: "Conectori Metalici",
    description: "Plăcuțe și conectori de îmbinare de la producători europeni de renume.",
  },
  {
    name: "Tratamente",
    description: "Soluții ignifuge și fungicide pentru protecția completă a lemnului.",
  },
  {
    name: "OSB și Astriș",
    description: "Plăci OSB și scândură pentru astriș de la producători certificați.",
  },
]

export default function DulgherieAcoperis() {
  return (
    <ServicePageLayout
      title="Dulgherie Acoperiș"
      subtitle="Structuri din Lemn"
      description="Construim șarpante și structuri din lemn de cea mai înaltă calitate. Meșteri dulgheri cu experiență vastă în proiecte rezidențiale și comerciale."
      heroImage="/placeholder.svg?height=800&width=1920"
      icon={Building2}
      features={features}
      benefits={benefits}
      process={process}
      materials={materials}
    />
  )
}
