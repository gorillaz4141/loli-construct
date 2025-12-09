import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal/legal-page-layout"
import { ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "ANPC - Protecția Consumatorilor | Loli Construct",
  description:
    "Informații despre drepturile consumatorilor și Autoritatea Națională pentru Protecția Consumatorilor. Loli Construct respectă toate reglementările ANPC.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function ANPCPage() {
  return (
    <LegalPageLayout title="Protecția Consumatorilor (ANPC)" lastUpdated="Decembrie 2024">
      <h2>Autoritatea Națională pentru Protecția Consumatorilor</h2>

      <p>
        Loli Construct SRL respectă drepturile consumatorilor conform legislației în vigoare din România, inclusiv
        prevederile Autorității Naționale pentru Protecția Consumatorilor (ANPC).
      </p>

      <h3>Drepturile Dumneavoastră ca și Consumator</h3>

      <p>În calitate de client al serviciilor noastre, aveți următoarele drepturi:</p>

      <ul>
        <li>
          <strong>Dreptul la informare</strong> - Aveți dreptul să primiți informații complete și corecte despre
          serviciile noastre, prețuri, materiale utilizate și termene de execuție.
        </li>
        <li>
          <strong>Dreptul la calitate</strong> - Toate lucrările executate de Loli Construct respectă standardele de
          calitate și sunt realizate cu materiale certificate.
        </li>
        <li>
          <strong>Dreptul la garanție</strong> - Oferim garanție pentru manoperă și materiale conform contractului
          încheiat.
        </li>
        <li>
          <strong>Dreptul la reclamație</strong> - Puteți depune reclamații privind calitatea serviciilor sau
          nerespectarea termenilor contractuali.
        </li>
        <li>
          <strong>Dreptul la despăgubire</strong> - În cazul în care serviciile nu corespund standardelor convenite,
          aveți dreptul la remediere sau despăgubire.
        </li>
      </ul>

      <h3>Soluționarea Alternativă a Litigiilor (SAL)</h3>

      <p>
        Conform Regulamentului (UE) nr. 524/2013 și a OUG nr. 38/2015, consumatorii pot recurge la mecanisme de
        soluționare alternativă a litigiilor.
      </p>

      <p>
        Platforma europeană de Soluționare Online a Litigiilor (SOL) poate fi accesată la adresa:{" "}
        <a
          href="https://ec.europa.eu/consumers/odr"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1"
        >
          ec.europa.eu/consumers/odr
          <ExternalLink className="w-4 h-4" />
        </a>
      </p>

      <h3>Contact ANPC</h3>

      <p>
        Pentru sesizări sau reclamații privind protecția consumatorilor, puteți contacta ANPC sau Comisariatul Județean
        pentru Protecția Consumatorilor Timiș:
      </p>

      <div className="bg-[#e5e5e5]/50 rounded-xl p-6 not-prose my-6">
        <h4 className="font-serif font-semibold text-[#242f40] mb-4">Comisariatul Județean Timiș</h4>
        <ul className="space-y-2 text-[#363636]">
          <li>
            <strong>Adresă:</strong> Str. Memorandului nr. 14, Timișoara, Timiș
          </li>
          <li>
            <strong>Telefon:</strong> 0256-407.987
          </li>
          <li>
            <strong>Program:</strong> Luni - Vineri: 08:00 - 16:00
          </li>
        </ul>
      </div>

      <div className="bg-[#e5e5e5]/50 rounded-xl p-6 not-prose my-6">
        <h4 className="font-serif font-semibold text-[#242f40] mb-4">ANPC Central</h4>
        <ul className="space-y-2 text-[#363636]">
          <li>
            <strong>Website:</strong>{" "}
            <a
              href="https://anpc.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cca43b] hover:underline"
            >
              www.anpc.ro
            </a>
          </li>
          <li>
            <strong>InfoCons:</strong>{" "}
            <a
              href="https://infocons.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cca43b] hover:underline"
            >
              www.infocons.ro
            </a>
          </li>
        </ul>
      </div>

      <h3>Procedura de Reclamație la Loli Construct</h3>

      <p>Înainte de a contacta ANPC, vă încurajăm să ne contactați direct pentru soluționarea oricărei probleme:</p>

      <ol>
        <li>
          <strong>Pasul 1:</strong> Contactați-ne telefonic la{" "}
          <a href="tel:+40759614930" className="text-[#cca43b]">
            +40 759 614 930
          </a>{" "}
          sau prin email la{" "}
          <a href="mailto:231321@gmail.com" className="text-[#cca43b]">
            231321@gmail.com
          </a>
        </li>
        <li>
          <strong>Pasul 2:</strong> Descrieți problema în detaliu, inclusiv numărul contractului (dacă există)
        </li>
        <li>
          <strong>Pasul 3:</strong> Vom analiza situația și vom răspunde în termen de 5 zile lucrătoare
        </li>
        <li>
          <strong>Pasul 4:</strong> Vom propune o soluție echitabilă pentru ambele părți
        </li>
      </ol>

      <h3>Angajamentul Nostru</h3>

      <p>
        La Loli Construct, ne angajăm să oferim servicii de cea mai înaltă calitate și să respectăm toate drepturile
        consumatorilor. Satisfacția clienților noștri este prioritatea numărul unu, iar orice problemă va fi tratată cu
        seriozitate și profesionalism.
      </p>
    </LegalPageLayout>
  )
}
