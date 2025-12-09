import type { Metadata } from "next"
import { LegalPageLayout } from "@/components/legal/legal-page-layout"

export const metadata: Metadata = {
  title: "Termeni și Condiții (SOL) | Loli Construct",
  description:
    "Termeni și condiții de utilizare pentru serviciile Loli Construct. Informații despre contractare, plăți, garanții și responsabilități.",
  robots: {
    index: false,
    follow: true,
  },
}

export default function SOLPage() {
  return (
    <LegalPageLayout title="Termeni și Condiții (SOL)" lastUpdated="Decembrie 2024">
      <h2>1. Informații Generale</h2>

      <p>
        Prezentul document stabilește termenii și condițiile de utilizare a serviciilor oferite de Loli Construct SRL
        (denumită în continuare "Compania", "Noi"), cu sediul în Timișoara, România.
      </p>

      <p>
        Prin solicitarea serviciilor noastre sau prin utilizarea acestui website, sunteți de acord cu prezentele Termeni
        și Condiții.
      </p>

      <h2>2. Serviciile Oferite</h2>

      <p>Loli Construct oferă următoarele categorii de servicii:</p>

      <ul>
        <li>Montaj acoperișuri noi (țiglă metalică, ceramică, tablă, șindrilă)</li>
        <li>Reparații și întreținere acoperișuri</li>
        <li>Lucrări de dulgherie pentru structuri de acoperiș</li>
        <li>Montaj accesorii (jgheaburi, burlane, ferestre mansardă)</li>
        <li>Consultanță și evaluare tehnică</li>
      </ul>

      <h2>3. Procesul de Contractare</h2>

      <h3>3.1 Solicitarea Ofertei</h3>
      <p>
        Clientul poate solicita o ofertă prin telefon, email sau prin intermediul formularului de pe website. Evaluarea
        la fața locului este gratuită în zona Timișoara și 100km rază.
      </p>

      <h3>3.2 Oferta de Preț</h3>
      <p>
        În urma evaluării, vom furniza o ofertă detaliată care include: descrierea lucrărilor, materialele propuse,
        prețul total (manoperă + materiale), termenul de execuție și condițiile de garanție.
      </p>

      <h3>3.3 Acceptarea Ofertei</h3>
      <p>
        Oferta este valabilă 30 de zile de la data emiterii. Acceptarea se face prin semnarea contractului de prestări
        servicii și achitarea avansului (dacă este cazul).
      </p>

      <h2>4. Prețuri și Modalități de Plată</h2>

      <h3>4.1 Prețuri</h3>
      <p>
        Prețurile prezentate în ofertă sunt finale și includ TVA (dacă este aplicabil). Prețurile pot fi modificate doar
        prin acord scris între părți, în cazul unor lucrări suplimentare solicitate de client.
      </p>

      <h3>4.2 Modalități de Plată</h3>
      <ul>
        <li>Numerar</li>
        <li>Transfer bancar</li>
        <li>Plata se poate efectua în tranșe, conform contractului</li>
      </ul>

      <h3>4.3 Termene de Plată</h3>
      <p>
        De regulă, se solicită un avans de 30% la semnarea contractului, iar restul sumei la finalizarea lucrărilor.
        Termenii exacți sunt specificați în contract.
      </p>

      <h2>5. Execuția Lucrărilor</h2>

      <h3>5.1 Programare</h3>
      <p>
        Data de începere a lucrărilor este stabilită de comun acord și confirmată în scris. Ne rezervăm dreptul de a
        reprograma în cazul condițiilor meteo nefavorabile.
      </p>

      <h3>5.2 Acces la Proprietate</h3>
      <p>
        Clientul va asigura accesul echipei noastre la proprietate în perioada convenită. De asemenea, va asigura un
        spațiu pentru depozitarea materialelor.
      </p>

      <h3>5.3 Modificări în Timpul Execuției</h3>
      <p>
        Orice modificare față de specificațiile inițiale trebuie convenită în scris și poate afecta prețul și termenul
        de finalizare.
      </p>

      <h2>6. Garanții</h2>

      <h3>6.1 Garanție Manoperă</h3>
      <p>Oferim garanție pentru manoperă conform următoarelor termene:</p>
      <ul>
        <li>Montaj acoperiș nou: 5-10 ani</li>
        <li>Reparații: 2-5 ani</li>
        <li>Lucrări dulgherie: 5-10 ani</li>
        <li>Montaj accesorii: 2-3 ani</li>
      </ul>

      <h3>6.2 Garanție Materiale</h3>
      <p>
        Materialele beneficiază de garanția producătorului. Vom furniza toate certificatele și documentele de garanție
        la predarea lucrării.
      </p>

      <h3>6.3 Excluderi din Garanție</h3>
      <p>Garanția nu acoperă:</p>
      <ul>
        <li>Daunele cauzate de calamități naturale</li>
        <li>Modificările efectuate de terți</li>
        <li>Lipsa întreținerii conform recomandărilor</li>
        <li>Uzura normală</li>
      </ul>

      <h2>7. Responsabilități</h2>

      <h3>7.1 Responsabilitățile Companiei</h3>
      <ul>
        <li>Executarea lucrărilor conform standardelor profesionale</li>
        <li>Utilizarea materialelor convenite</li>
        <li>Respectarea termenelor asumate</li>
        <li>Asigurarea securității șantierului</li>
        <li>Curățenia după finalizarea lucrărilor</li>
      </ul>

      <h3>7.2 Responsabilitățile Clientului</h3>
      <ul>
        <li>Furnizarea de informații corecte despre proprietate</li>
        <li>Asigurarea accesului la locația lucrărilor</li>
        <li>Efectuarea plăților la termenele convenite</li>
        <li>Obținerea autorizațiilor necesare (dacă este cazul)</li>
      </ul>

      <h2>8. Anulare și Reziliere</h2>

      <h3>8.1 Anulare de către Client</h3>
      <p>
        Clientul poate anula contractul în scris. În cazul anulării după comandarea materialelor, clientul va suporta
        costul acestora.
      </p>

      <h3>8.2 Reziliere</h3>
      <p>
        Oricare dintre părți poate rezilia contractul în cazul nerespectării obligațiilor de către cealaltă parte, cu o
        notificare scrisă de 7 zile.
      </p>

      <h2>9. Forța Majoră</h2>

      <p>
        Niciuna dintre părți nu va fi responsabilă pentru neîndeplinirea obligațiilor cauzată de evenimente de forță
        majoră (calamități naturale, restricții legale etc.).
      </p>

      <h2>10. Litigii</h2>

      <p>
        Orice litigiu va fi soluționat pe cale amiabilă. În cazul în care acest lucru nu este posibil, litigiul va fi
        supus instanțelor competente din Timișoara, România.
      </p>

      <h2>11. Modificări ale Termenilor</h2>

      <p>
        Ne rezervăm dreptul de a modifica acești Termeni și Condiții. Modificările vor fi publicate pe website și vor
        intra în vigoare la 30 de zile de la publicare.
      </p>

      <h2>12. Contact</h2>

      <p>Pentru orice întrebări privind acești Termeni și Condiții, ne puteți contacta:</p>

      <ul>
        <li>
          <strong>Telefon:</strong> +40 759 614 930
        </li>
        <li>
          <strong>Email:</strong> 231321@gmail.com
        </li>
        <li>
          <strong>Program:</strong> Disponibili 24/7
        </li>
      </ul>
    </LegalPageLayout>
  )
}
