import lecons from '@/data/lecons.json'

type Props = {
  leconActive: string
}

export default function Sidebar({ leconActive }: Props) {
  const niveaux = ['A1', 'A2', 'B1']

  return (
    <aside className="w-56 min-h-screen bg-white border-r border-[#e0ddd6] px-4 py-12 hidden md:block">
      <a href="/" className="text-xs uppercase tracking-widest text-[#1a6b4a] font-medium mb-8 block">
        Accueil
      </a>
      {niveaux.map((niveau) => {
        const leconsNiveau = lecons.filter(l => l.niveau === niveau)
        if (leconsNiveau.length === 0) return null
        return (
          <div key={niveau} className="mb-6">
            <p className="text-xs uppercase tracking-widest text-[#1c1c1a] font-semibold mb-2 px-3">
              {niveau}
            </p>
            <nav className="space-y-1">
              {leconsNiveau.map((lecon) => {
                const isActive = lecon.id === leconActive
                const url = '/lecon/' + lecon.id
                const base = 'block px-3 py-2 rounded-lg text-sm transition-colors '
                const style = isActive
                  ? base + 'bg-[#e8f5ef] text-[#1a6b4a] font-medium'
                  : base + 'text-[#6b6b66] hover:bg-[#f4f2ed] hover:text-[#1c1c1a]'
                return (
                  <a key={lecon.id} href={url} className={style}>
                    {lecon.id}. {lecon.titre}
                  </a>
                )
              })}
            </nav>
          </div>
        )
      })}
      <div className="mt-4 pt-4 border-t border-[#e0ddd6] space-y-1">
        <p className="text-xs uppercase tracking-widest text-[#1c1c1a] font-semibold mb-2 px-3">
          Référence
        </p>
        <a href="/reference/grammaire" className="block px-3 py-2 rounded-lg text-sm text-[#6b6b66] hover:bg-[#f4f2ed] hover:text-[#1c1c1a] transition-colors">
          Grammaire
        </a>
        <a href="/reference/conjugaison" className="block px-3 py-2 rounded-lg text-sm text-[#6b6b66] hover:bg-[#f4f2ed] hover:text-[#1c1c1a] transition-colors">
          Conjugaison
        </a>
        <a href="/reference/dictionnaire" className="block px-3 py-2 rounded-lg text-sm text-[#6b6b66] hover:bg-[#f4f2ed] hover:text-[#1c1c1a] transition-colors">
          Dictionnaire
        </a>
      </div>
    </aside>
  )
}