import lecons from '@/data/lecons.json'

export default function Lecon01() {
  const lecon = lecons[0]
  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-12">
      <div className="max-w-xl mx-auto">
        <a href="/" className="text-sm text-[#1a6b4a] mb-8 inline-block">Retour</a>
        <h1 className="text-3xl font-bold text-[#1c1c1a] mb-2">{lecon.titre}</h1>
        <p className="text-[#6b6b66] mb-10">Le vrai libanais parle, pas arabe scolaire.</p>

        <h2 className="text-lg font-semibold text-[#1c1c1a] mb-4">Vocabulaire</h2>
        <div className="space-y-3 mb-12">
          {lecon.mots.map((mot) => (
            <div key={mot.id} className="bg-white border border-[#e0ddd6] rounded-xl p-4">
              <p className="text-xs text-[#1a6b4a] uppercase tracking-wide mb-1">{mot.francais}</p>
              <p className="text-xl font-semibold text-[#1c1c1a]">{mot.libanais}</p>
              <p className="text-sm text-[#6b6b66]">{mot.phonetique}</p>
              <p className="text-lg text-[#1c1c1a] text-right mt-1" dir="rtl">{mot.arabe}</p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-[#1c1c1a] mb-4">Phrases types</h2>
        <div className="space-y-3 mb-12">
          {lecon.phrases.map((phrase) => (
            <div key={phrase.id} className="bg-white border border-[#e0ddd6] rounded-xl p-4">
              <p className="text-sm text-[#6b6b66] mb-1">{phrase.francais}</p>
              <p className="text-lg font-semibold text-[#1c1c1a]">{phrase.libanais}</p>
              <p className="text-sm text-[#1a6b4a]">{phrase.phonetique}</p>
              <p className="text-lg text-[#1c1c1a] text-right mt-1" dir="rtl">{phrase.arabe}</p>
            </div>
          ))}
        </div>

        <h2 className="text-lg font-semibold text-[#1c1c1a] mb-4">{lecon.grammaire.titre}</h2>
        <div className="bg-[#e8f5ef] rounded-xl p-5 mb-12">
          <p className="text-[#1c1c1a] mb-4">{lecon.grammaire.explication}</p>
          <div className="space-y-2">
            {lecon.grammaire.exemples.map((ex, i) => (
              <div key={i} className="flex gap-4 text-sm">
                <span className="font-semibold text-[#1a6b4a]">{ex.masculin}</span>
                <span className="font-semibold text-[#1a6b4a]">{ex.feminin}</span>
                <span className="text-[#6b6b66]">— {ex.traduction}</span>
              </div>
            ))}
          </div>
        </div>

        <a href="/lecon/01/quiz" className="inline-block bg-[#1a6b4a] text-white px-8 py-4 rounded-full text-base font-medium">
          Passer au quiz
        </a>
      </div>
    </main>
  )
}