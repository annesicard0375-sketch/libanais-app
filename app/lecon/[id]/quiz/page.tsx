'use client'
import { useState, useEffect } from 'react'
import { useProgression } from '@/app/components/useProgression'
import { useParams } from 'next/navigation'
import lecons from '@/data/lecons.json'
import Sidebar from '@/app/components/Sidebar'

export default function QuizPage() {
  const { id } = useParams() as { id: string }
  const lecon = lecons.find(l => l.id === id)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [choix, setChoix] = useState<string | null>(null)
  const [termine, setTermine] = useState(false)
  const [options, setOptions] = useState<string[]>([])
  const { sauvegarderScore } = useProgression()

  useEffect(() => {
    if (!lecon) return
    const mot = lecon.mots[index]
    const opts = [
      mot.libanais,
      lecon.mots[(index + 1) % lecon.mots.length].libanais,
      lecon.mots[(index + 2) % lecon.mots.length].libanais,
      lecon.mots[(index + 3) % lecon.mots.length].libanais,
    ].sort(() => Math.random() - 0.5)
    setOptions(opts)
  }, [index, id])

  if (!lecon) return <p>Lecon introuvable</p>

  const mot = lecon.mots[index]

  function repondre(option: string) {
    if (choix) return
    setChoix(option)
    if (option === mot.libanais) setScore(s => s + 1)
  }

  function suivant() {
    if (index + 1 >= lecon.mots.length) {
      sauvegarderScore(id, score)
      setTermine(true)
    } else {
      setIndex(i => i + 1)
      setChoix(null)
    }
  }

  if (termine) return (
    <div className="flex min-h-screen bg-[#faf9f6]">
      <Sidebar leconActive={id} />
      <main className="flex-1 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-5xl font-bold text-[#1a6b4a] mb-4">{score}/{lecon.mots.length}</p>
          <p className="text-[#6b6b66] mb-8">Quiz termine !</p>
          <a href={'/lecon/' + id} className="inline-block bg-[#1a6b4a] text-white px-8 py-4 rounded-full">
            Revoir la lecon
          </a>
        </div>
      </main>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-[#faf9f6]">
      <Sidebar leconActive={id} />
      <main className="flex-1 px-6 py-12 max-w-xl">
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
      </main>
    </div>
  )
}