'use client'
import { useState } from 'react'
import conjugaison from '@/data/conjugaison.json'
import Sidebar from '@/app/components/Sidebar'

export default function ConjugaisonPage() {
  const [verbActif, setVerbActif] = useState(conjugaison[0].id)
  const [tempsActif, setTempsActif] = useState('Présent')

  const verbe = conjugaison.find(v => v.id === verbActif)!
  const temps = verbe.temps.find(t => t.nom === tempsActif)!

  return (
    <div className="flex min-h-screen bg-[#faf9f6]">
      <Sidebar leconActive="" />
      <main className="flex-1 px-6 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-[#1c1c1a] mb-2">Conjugaison</h1>
        <p className="text-[#6b6b66] mb-8">Les verbes essentiels du libanais conjugués.</p>

        <div className="flex gap-2 mb-8 flex-wrap">
          {conjugaison.map((v) => (
            <button
              key={v.id}
              onClick={() => setVerbActif(v.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                v.id === verbActif
                  ? 'bg-[#1a6b4a] text-white'
                  : 'bg-white border border-[#e0ddd6] text-[#6b6b66] hover:border-[#1a6b4a]'
              }`}
            >
              {verbe.id === v.id ? v.verbe : v.verbe} — {v.traduction}
            </button>
          ))}
        </div>

        <div className="bg-white border border-[#e0ddd6] rounded-xl p-6 mb-6">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-2xl font-bold text-[#1c1c1a]">{verbe.verbe}</h2>
            <span className="text-[#6b6b66]">—</span>
            <span className="text-[#6b6b66]">{verbe.traduction}</span>
            <span className="text-xl" dir="rtl">{verbe.arabe}</span>
          </div>

          <div className="flex gap-2 mb-6">
            {verbe.temps.map((t) => (
              <button
                key={t.nom}
                onClick={() => setTempsActif(t.nom)}
                className={`px-4 py-1.5 rounded-lg text-sm transition-colors ${
                  t.nom === tempsActif
                    ? 'bg-[#e8f5ef] text-[#1a6b4a] font-medium'
                    : 'text-[#6b6b66] hover:bg-[#f4f2ed]'
                }`}
              >
                {t.nom}
              </button>
            ))}
          </div>

          <div className="space-y-2">
            {temps.formes.map((forme, i) => (
              <div key={i} className="flex gap-4 items-baseline py-2 border-b border-[#f0ede6] last:border-0">
                <span className="text-sm text-[#6b6b66] w-36 shrink-0">{forme.pronom}</span>
                <span className="font-semibold text-[#1c1c1a] w-32">{forme.forme}</span>
                <span className="text-sm text-[#1a6b4a]">{forme.phonetique}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}