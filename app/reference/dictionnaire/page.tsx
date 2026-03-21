'use client'
import { useState } from 'react'
import dictionnaire from '@/data/dictionnaire.json'
import Sidebar from '@/app/components/Sidebar'

export default function DictionnairePage() {
  const [recherche, setRecherche] = useState('')
  const [categorie, setCategorie] = useState('tous')

  const categories = ['tous', 'salutations', 'verbes', 'lieux', 'adjectifs']

  const resultats = dictionnaire.filter((mot) => {
    const matchRecherche =
      mot.francais.toLowerCase().includes(recherche.toLowerCase()) ||
      mot.libanais.toLowerCase().includes(recherche.toLowerCase())
    const matchCategorie = categorie === 'tous' || mot.categorie === categorie
    return matchRecherche && matchCategorie
  })

  return (
    <div className="flex min-h-screen bg-[#faf9f6]">
      <Sidebar leconActive="" />
      <main className="flex-1 px-6 py-12 max-w-2xl">
        <h1 className="text-3xl font-bold text-[#1c1c1a] mb-2">Dictionnaire</h1>
        <p className="text-[#6b6b66] mb-8">Français — Libanais. Cherche un mot ou filtre par catégorie.</p>

        <input
          type="text"
          placeholder="Chercher un mot..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-[#e0ddd6] bg-white text-[#1c1c1a] mb-4 focus:outline-none focus:border-[#1a6b4a]"
        />

        <div className="flex gap-2 mb-8 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategorie(cat)}
              className={`px-4 py-1.5 rounded-full text-sm transition-colors capitalize ${
                cat === categorie
                  ? 'bg-[#1a6b4a] text-white'
                  : 'bg-white border border-[#e0ddd6] text-[#6b6b66] hover:border-[#1a6b4a]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <p className="text-sm text-[#6b6b66] mb-4">{resultats.length} mot{resultats.length > 1 ? 's' : ''}</p>

        <div className="space-y-2">
          {resultats.map((mot, i) => (
            <div key={i} className="bg-white border border-[#e0ddd6] rounded-xl px-5 py-3 flex items-baseline gap-4">
              <span className="text-sm text-[#6b6b66] w-36 shrink-0">{mot.francais}</span>
              <span className="font-semibold text-[#1c1c1a] w-32">{mot.libanais}</span>
              <span className="text-sm text-[#1a6b4a] w-28">{mot.phonetique}</span>
              <span className="text-base text-[#1c1c1a] ml-auto" dir="rtl">{mot.arabe}</span>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}