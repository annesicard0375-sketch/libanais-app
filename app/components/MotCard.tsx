type Props = {
  francais: string
  libanais: string
  phonetique: string
  arabe: string
}

export default function MotCard({ francais, libanais, phonetique, arabe }: Props) {
  return (
    <div className="bg-white border border-[#e0ddd6] rounded-xl p-4">
      <p className="text-xs text-[#1a6b4a] uppercase tracking-wide mb-1">{francais}</p>
      <p className="text-xl font-semibold text-[#1c1c1a]">{libanais}</p>
      <p className="text-sm text-[#6b6b66]">{phonetique}</p>
      <p className="text-lg text-[#1c1c1a] text-right mt-1" dir="rtl">{arabe}</p>
    </div>
  )
}