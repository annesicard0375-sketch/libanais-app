import lecons from '@/data/lecons.json'

type Props = {
  leconActive: string
}

export default function Sidebar({ leconActive }: Props) {
  return (
    <aside className="w-56 min-h-screen bg-white border-r border-[#e0ddd6] px-4 py-12 hidden md:block">
      <p className="text-xs uppercase tracking-widest text-[#1a6b4a] font-medium mb-6">Lecons</p>
      <nav className="space-y-1">
        {lecons.map((lecon) => {
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
    </aside>
  )
}