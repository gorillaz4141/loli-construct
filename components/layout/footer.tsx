import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin, Clock } from "lucide-react"

const services = [
  { name: "Montaj Acoperișuri", href: "/montaj-acoperisuri" },
  { name: "Reparații Acoperișuri", href: "/reparatii-acoperisuri" },
  { name: "Dulgherie Acoperiș", href: "/dulgherie-acoperis" },
  { name: "Accesorii Acoperiș", href: "/accesorii-acoperis" },
  { name: "Lucrări Realizate", href: "/lucrari" },
]

const serviceAreas = ["Timișoara", "Lugoj", "Arad", "Reșița", "Deva", "Buziaș", "Jimbolia", "Sânnicolau Mare"]

const legalLinks = [
  { name: "ANPC", href: "/anpc" },
  { name: "Termeni și Condiții (SOL)", href: "/sol" },
  { name: "Politica GDPR", href: "/gdpr" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-[#242f40] to-[#1a222d]">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 bg-white rounded-lg p-1">
                <Image src="/logo.png" alt="Loli Construct Logo" fill className="object-contain" />
              </div>
              <div>
                <h3 className="text-white font-serif text-xl font-bold">Loli Construct</h3>
                <p className="text-[#cca43b] text-sm">Servicii Complete</p>
              </div>
            </div>
            <p className="text-[#e5e5e5] text-sm leading-relaxed">
              Oferim servicii profesionale de montaj și reparații acoperișuri cu standarde germane de calitate.
              Experiență în proiecte rezidențiale și industriale în Germania, Austria și România.
            </p>
            <div className="flex items-center gap-2 text-[#cca43b]">
              <Clock className="w-4 h-4" />
              <span className="text-sm text-white">Disponibili 24/7</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#cca43b]"></span>
              Servicii
            </h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-[#e5e5e5] hover:text-[#cca43b] transition-colors text-sm"
                    data-gtm-event="click"
                    data-gtm-category="Footer"
                    data-gtm-action="service_link"
                    data-gtm-label={service.name}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#cca43b]"></span>
              Zone Deservite
            </h4>
            <ul className="grid grid-cols-2 gap-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-[#e5e5e5] text-sm flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#cca43b]" />
                  {area}
                </li>
              ))}
            </ul>
            <p className="text-[#cca43b] text-sm mt-4">+ 100km rază Timișoara</p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-serif text-lg font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-[#cca43b]"></span>
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+40759614930"
                  className="flex items-center gap-3 text-[#e5e5e5] hover:text-[#cca43b] transition-colors group"
                  data-gtm-event="click"
                  data-gtm-category="Contact"
                  data-gtm-action="phone_click"
                  data-gtm-label="footer_phone"
                >
                  <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 flex items-center justify-center group-hover:bg-[#cca43b]/30 transition-colors">
                    <Phone className="w-4 h-4 text-[#cca43b]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e5e5]/70">Telefon</p>
                    <p className="font-medium">+40 759 614 930</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:231321@gmail.com"
                  className="flex items-center gap-3 text-[#e5e5e5] hover:text-[#cca43b] transition-colors group"
                  data-gtm-event="click"
                  data-gtm-category="Contact"
                  data-gtm-action="email_click"
                  data-gtm-label="footer_email"
                >
                  <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 flex items-center justify-center group-hover:bg-[#cca43b]/30 transition-colors">
                    <Mail className="w-4 h-4 text-[#cca43b]" />
                  </div>
                  <div>
                    <p className="text-xs text-[#e5e5e5]/70">Email</p>
                    <p className="font-medium">231321@gmail.com</p>
                  </div>
                </a>
              </li>
              <li className="flex items-center gap-3 text-[#e5e5e5]">
                <div className="w-10 h-10 rounded-full bg-[#cca43b]/20 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#cca43b]" />
                </div>
                <div>
                  <p className="text-xs text-[#e5e5e5]/70">Locație</p>
                  <p className="font-medium">Timișoara, Timiș</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#363636]">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#e5e5e5]/70 text-sm text-center md:text-left">
              © {currentYear} Loli Construct. Toate drepturile rezervate.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {legalLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[#e5e5e5]/70 hover:text-[#cca43b] text-sm transition-colors"
                  data-gtm-event="click"
                  data-gtm-category="Footer"
                  data-gtm-action="legal_link"
                  data-gtm-label={link.name}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
