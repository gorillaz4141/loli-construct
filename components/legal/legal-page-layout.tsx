import type React from "react"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface LegalPageLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export function LegalPageLayout({ title, lastUpdated, children }: LegalPageLayoutProps) {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-12 bg-gradient-to-b from-[#242f40] to-[#1a222d]">
        <div className="max-w-4xl mx-auto px-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-[#cca43b] hover:text-white transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Înapoi la pagina principală</span>
          </Link>
          <h1 className="text-3xl md:text-4xl font-serif font-bold text-white">{title}</h1>
          <p className="text-[#e5e5e5]/70 text-sm mt-2">Ultima actualizare: {lastUpdated}</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-[#242f40] prose-p:text-[#363636] prose-li:text-[#363636] prose-a:text-[#cca43b] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#242f40]">
            {children}
          </div>
        </div>
      </section>

      {/* Footer note */}
      <section className="py-8 bg-[#e5e5e5]/30 border-t border-[#e5e5e5]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-sm text-[#363636]">
            Pentru întrebări sau nelămuriri, contactați-ne la{" "}
            <a href="mailto:231321@gmail.com" className="text-[#cca43b] hover:underline">
              231321@gmail.com
            </a>{" "}
            sau telefonic la{" "}
            <a href="tel:+40759614930" className="text-[#cca43b] hover:underline">
              +40 759 614 930
            </a>
          </p>
        </div>
      </section>
    </>
  )
}
