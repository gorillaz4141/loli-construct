import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal/legal-page-layout"

export const metadata: Metadata = {
  title: "Politica de Confidențialitate GDPR | Loli Construct",
  description:
    "Politica de confidențialitate și protecția datelor personale conform GDPR. Află cum Loli Construct colectează și protejează datele tale.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function GDPRPage() {
  return (
    <LegalPageLayout title="Politica de Confidențialitate (GDPR)" lastUpdated="Decembrie 2024">
      <h2>1. Introducere</h2>

      <p>
        Loli Construct SRL (denumită în continuare "Compania", "Noi") se angajează să protejeze confidențialitatea
        datelor dumneavoastră personale în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) -
        Regulamentul (UE) 2016/679.
      </p>

      <p>
        Această politică descrie modul în care colectăm, utilizăm, stocăm și protejăm datele dumneavoastră personale
        atunci când utilizați website-ul nostru sau solicitați serviciile noastre.
      </p>

      <h2>2. Operatorul de Date</h2>

      <div className="bg-[#e5e5e5]/50 rounded-xl p-6 not-prose my-6">
        <ul className="space-y-2 text-[#363636]">
          <li>
            <strong>Denumire:</strong> Loli Construct SRL
          </li>
          <li>
            <strong>Sediu:</strong> Timișoara, Timiș, România
          </li>
          <li>
            <strong>Email:</strong> 231321@gmail.com
          </li>
          <li>
            <strong>Telefon:</strong> +40 759 614 930
          </li>
        </ul>
      </div>

      <h2>3. Datele Personale Colectate</h2>

      <p>Colectăm următoarele categorii de date personale:</p>

      <h3>3.1 Date furnizate direct de dumneavoastră:</h3>
      <ul>
        <li>Nume și prenume</li>
        <li>Adresa de email</li>
        <li>Număr de telefon</li>
        <li>Adresa proprietății (pentru evaluare și execuție)</li>
        <li>Date de facturare</li>
      </ul>

      <h3>3.2 Date colectate automat:</h3>
      <ul>
        <li>Adresa IP</li>
        <li>Tipul browserului și dispozitivului</li>
        <li>Paginile vizitate pe site</li>
        <li>Data și ora accesării</li>
        <li>Cookie-uri (conform politicii de cookie-uri)</li>
      </ul>

      <h2>4. Scopurile și Temeiurile Legale ale Prelucrării</h2>

      <table className="w-full border-collapse my-6">
        <thead>
          <tr className="bg-[#e5e5e5]/50">
            <th className="border border-[#e5e5e5] p-3 text-left text-[#242f40]">Scop</th>
            <th className="border border-[#e5e5e5] p-3 text-left text-[#242f40]">Temei Legal</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-[#e5e5e5] p-3">Furnizarea serviciilor solicitate</td>
            <td className="border border-[#e5e5e5] p-3">Executarea contractului</td>
          </tr>
          <tr>
            <td className="border border-[#e5e5e5] p-3">Emiterea facturilor și documentelor fiscale</td>
            <td className="border border-[#e5e5e5] p-3">Obligație legală</td>
          </tr>
          <tr>
            <td className="border border-[#e5e5e5] p-3">Comunicare privind serviciile</td>
            <td className="border border-[#e5e5e5] p-3">Interes legitim</td>
          </tr>
          <tr>
            <td className="border border-[#e5e5e5] p-3">Trimiterea ofertelor și noutăților</td>
            <td className="border border-[#e5e5e5] p-3">Consimțământ</td>
          </tr>
          <tr>
            <td className="border border-[#e5e5e5] p-3">Îmbunătățirea website-ului</td>
            <td className="border border-[#e5e5e5] p-3">Interes legitim</td>
          </tr>
        </tbody>
      </table>

      <h2>5. Partajarea Datelor</h2>

      <p>Datele dumneavoastră pot fi partajate cu:</p>

      <ul>
        <li>
          <strong>Furnizori de servicii:</strong> companii care ne ajută în desfășurarea activității (contabilitate, IT)
        </li>
        <li>
          <strong>Autorități publice:</strong> atunci când legea ne obligă (ANAF, instanțe)
        </li>
        <li>
          <strong>Parteneri de afaceri:</strong> furnizori de materiale (doar informații necesare livrării)
        </li>
      </ul>

      <p>
        <strong>Nu vindem și nu închiriem datele dumneavoastră personale terților.</strong>
      </p>

      <h2>6. Durata Stocării</h2>

      <p>Păstrăm datele dumneavoastră pentru următoarele perioade:</p>

      <ul>
        <li>
          <strong>Date contractuale:</strong> pe durata contractului + 10 ani (obligație fiscală)
        </li>
        <li>
          <strong>Date de contact (clienți):</strong> 5 ani de la ultima interacțiune
        </li>
        <li>
          <strong>Date de marketing:</strong> până la retragerea consimțământului
        </li>
        <li>
          <strong>Date de navigare:</strong> maximum 2 ani
        </li>
      </ul>

      <h2>7. Drepturile Dumneavoastră</h2>

      <p>Conform GDPR, aveți următoarele drepturi:</p>

      <ul>
        <li>
          <strong>Dreptul de acces:</strong> Puteți solicita o copie a datelor pe care le deținem despre dumneavoastră
        </li>
        <li>
          <strong>Dreptul la rectificare:</strong> Puteți corecta datele inexacte sau incomplete
        </li>
        <li>
          <strong>Dreptul la ștergere ("dreptul de a fi uitat"):</strong> Puteți solicita ștergerea datelor în anumite
          condiții
        </li>
        <li>
          <strong>Dreptul la restricționarea prelucrării:</strong> Puteți limita modul în care vă folosim datele
        </li>
        <li>
          <strong>Dreptul la portabilitatea datelor:</strong> Puteți primi datele într-un format structurat
        </li>
        <li>
          <strong>Dreptul de opoziție:</strong> Vă puteți opune prelucrării în anumite situații
        </li>
        <li>
          <strong>Dreptul de a retrage consimțământul:</strong> În orice moment, fără a afecta legalitatea prelucrării
          anterioare
        </li>
      </ul>

      <p>
        Pentru exercitarea acestor drepturi, contactați-ne la{" "}
        <a href="mailto:231321@gmail.com" className="text-[#cca43b]">
          231321@gmail.com
        </a>
        . Vom răspunde în termen de 30 de zile.
      </p>

      <h2>8. Cookie-uri</h2>

      <p>Website-ul nostru utilizează cookie-uri pentru:</p>

      <ul>
        <li>
          <strong>Cookie-uri necesare:</strong> Esențiale pentru funcționarea site-ului
        </li>
        <li>
          <strong>Cookie-uri analitice:</strong> Ne ajută să înțelegem cum utilizați site-ul (Google Analytics)
        </li>
        <li>
          <strong>Cookie-uri de marketing:</strong> Pentru reclame personalizate (Google Ads)
        </li>
      </ul>

      <p>
        Puteți gestiona preferințele cookie-uri prin banner-ul afișat la prima vizită sau prin setările browserului
        dumneavoastră.
      </p>

      <h2>9. Securitatea Datelor</h2>

      <p>Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră:</p>

      <ul>
        <li>Criptare SSL/TLS pentru transmisia datelor</li>
        <li>Acces restricționat la date (doar personalul autorizat)</li>
        <li>Backup-uri regulate și securizate</li>
        <li>Actualizări de securitate periodice</li>
      </ul>

      <h2>10. Transferul Datelor</h2>

      <p>
        Datele dumneavoastră sunt stocate și procesate în Uniunea Europeană. În cazul în care ar fi necesară
        transferarea datelor în afara UE, vom asigura protecții adecvate conform GDPR.
      </p>

      <h2>11. Plângeri</h2>

      <p>
        Dacă considerați că prelucrarea datelor dumneavoastră încalcă GDPR, aveți dreptul de a depune o plângere la
        autoritatea de supraveghere:
      </p>

      <div className="bg-[#e5e5e5]/50 rounded-xl p-6 not-prose my-6">
        <h4 className="font-serif font-semibold text-[#242f40] mb-4">
          Autoritatea Națională de Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP)
        </h4>
        <ul className="space-y-2 text-[#363636]">
          <li>
            <strong>Adresă:</strong> B-dul G-ral. Gheorghe Magheru nr. 28-30, Sector 1, București
          </li>
          <li>
            <strong>Telefon:</strong> +40 318 059 211
          </li>
          <li>
            <strong>Website:</strong>{" "}
            <a
              href="https://www.dataprotection.ro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cca43b] hover:underline"
            >
              www.dataprotection.ro
            </a>
          </li>
        </ul>
      </div>

      <h2>12. Modificări ale Politicii</h2>

      <p>
        Ne rezervăm dreptul de a actualiza această politică. Orice modificare semnificativă va fi comunicată prin email
        sau printr-o notificare pe website.
      </p>

      <h2>13. Contact</h2>

      <p>Pentru orice întrebări privind protecția datelor personale:</p>

      <ul>
        <li>
          <strong>Email:</strong> 231321@gmail.com
        </li>
        <li>
          <strong>Telefon:</strong> +40 759 614 930
        </li>
        <li>
          <strong>Subiect email:</strong> "Solicitare GDPR - [Numele dumneavoastră]"
        </li>
      </ul>
    </LegalPageLayout>
  )
}
