import lecons from '@/data/lecons.json'

export default function Lecon01() {
  const lecon = lecons[0]
  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-12">
      <div className="max-w-xl mx-auto">
        <a href="/" className="text-sm text-[#1a6b4a] mb-8 inline-block">Retour</a>
        <h1 className="text-3xl font-bold text-[#1c1c1a] mb-2">{lecon.titre}</h1>
        <p className="text-[#6b6b66] mb-10">10 mots essentiels pour te presenter en libanais.</p>
        <div className="space-y-4">
          {lecon.mots.map((mot) => (
            <div key={mot.id} className="bg-white border border-[#e0ddd6] rounded-xl p-4">
              <p className="text-xs text-[#1a6b4a] uppercase tracking-wide mb-1">{mot.francais}</p>
              <p className="text-xl font-semibold text-[#1c1c1a]">{mot.libanais}</p>
              <p className="text-sm text-[#6b6b66]">{mot.phonetique}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}