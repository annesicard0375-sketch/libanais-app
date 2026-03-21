'use client'
import { useState, useEffect } from 'react'
import lecons from '@/data/lecons.json'

export default function Quiz01() {
  const lecon = lecons[0]
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [choix, setChoix] = useState<string | null>(null)
  const [termine, setTermine] = useState(false)
  const [options, setOptions] = useState<string[]>([])

  useEffect(() => {
    const mot = lecon.mots[index]
    const opts = [
      mot.libanais,
      lecon.mots[(index + 1) % 10].libanais,
      lecon.mots[(index + 2) % 10].libanais,
      lecon.mots[(index + 3) % 10].libanais,
    ].sort(() => Math.random() - 0.5)
    setOptions(opts)
  }, [index])

  const mot = lecon.mots[index]

  function repondre(option: string) {
    if (choix) return
    setChoix(option)
    if (option === mot.libanais) setScore(s => s + 1)
  }

  function suivant() {
    if (index + 1 >= lecon.mots.length) {
      setTermine(true)
    } else {
      setIndex(i => i + 1)
      setChoix(null)
    }
  }

  if (termine) return (
    <main className="min-h-screen bg-[#faf9f6] flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <p className="text-5xl font-bold text-[#1a6b4a] mb-4">{score}/10</p>
        <p className="text-[#6b6b66] mb-8">Quiz termine !</p>
        <a href="/lecon/01" className="inline-block bg-[#1a6b4a] text-white px-8 py-4 rounded-full">
          Revoir la lecon
        </a>
      </div>
    </main>
  )

  return (
    <main className="min-h-screen bg-[#faf9f6] px-6 py-12">
      <div className="max-w-xl mx-auto">
        <p className="text-sm text-[#6b6b66] mb-8">Question {index + 1} / {lecon.mots.length}</p>
        <h2 className="text-2xl font-bold text-[#1c1c1a] mb-8">Comment dit-on "{mot.francais}" en libanais ?</h2>
        <div className="space-y-3 mb-8">
          {options.map((option) => (
            <button
              key={option}
              onClick={() => repondre(option)}
              className={`w-full text-left px-5 py-4 rounded-xl border text-base transition-colors text-[#1c1c1a] ${
                choix === null ? 'bg-white border-[#e0ddd6] hover:border-[#1a6b4a]' :
                option === mot.libanais ? 'bg-[#e8f5ef] border-[#1a6b4a] text-[#1a6b4a] font-semibold' :
                option === choix ? 'bg-[#fde8e8] border-red-300 text-red-600' :
                'bg-white border-[#e0ddd6] opacity-50'
              }`}
            >
              {option}
            </button>
          ))}
        </div>
        {choix && (
          <button onClick={suivant} className="inline-block bg-[#1a6b4a] text-white px-8 py-4 rounded-full">
            {index + 1 >= lecon.mots.length ? 'Voir le score' : 'Suivant'}
          </button>
        )}
      </div>
    </main>
  )
}