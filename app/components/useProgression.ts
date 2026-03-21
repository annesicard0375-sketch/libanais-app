'use client'
import { useEffect, useState } from 'react'

export function useProgression() {
  const [progression, setProgression] = useState<Record<string, number>>({})

  useEffect(() => {
    const saved = localStorage.getItem('libanais-progression')
    if (saved) setProgression(JSON.parse(saved))
  }, [])

  function sauvegarderScore(leconId: string, score: number) {
    const nouvelle = { ...progression, [leconId]: score }
    setProgression(nouvelle)
    localStorage.setItem('libanais-progression', JSON.stringify(nouvelle))
  }

  return { progression, sauvegarderScore }
}