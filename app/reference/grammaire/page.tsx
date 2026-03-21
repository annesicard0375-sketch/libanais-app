import grammaire from '@/data/grammaire.json'
import Sidebar from '@/app/components/Sidebar'

export default function GrammairePage() {
  return (
    <div className="flex min-h-screen bg-[#faf9f6]">
      <Sidebar leconActive="" />
      <main className="flex-1 px-6 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-[#1c1c1a] mb-2">Grammaire</h1>
        <p className="text-[#6b6b66] mb-10">Toutes les règles essentielles du libanais parlé.</p>
        <div className="space-y-8">
          {grammaire.map((fiche) => (
            <div key={fiche.id} className="bg-white border border-[#e0ddd6] rounded-xl p-6">
              <h2 className="text-xl font-semibold text-[#1c1c1a] mb-2">{fiche.titre}</h2>
              <p className="text-[#6b6b66] mb-4">{fiche.explication}</p>
              <div className="space-y-2">
                {fiche.exemples.map((ex, i) => (
                  <div key={i} className="flex gap-4 items-baseline py-2 border-b border-[#f0ede6] last:border-0">
                    <span className="text-sm text-[#6b6b66] w-40 shrink-0">{ex.francais}</span>
                    <span className="font-semibold text-[#1c1c1a]">{ex.libanais}</span>
                    <span className="text-sm text-[#1a6b4a]">{ex.phonetique}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}