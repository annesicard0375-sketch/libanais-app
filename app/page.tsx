export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #f5f0e8 0%, #e8f5ef 50%, #f5f0e8 100%)' }}>

      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none select-none">
        <span style={{ fontSize: '40vw', lineHeight: 1 }}>🇱🇧</span>
      </div>

      <div className="absolute top-6 left-6 opacity-20 pointer-events-none select-none">
        <span style={{ fontSize: '8rem' }}>🇱🇧</span>
      </div>
      <div className="absolute bottom-6 right-6 opacity-20 pointer-events-none select-none">
        <span style={{ fontSize: '8rem' }}>🇱🇧</span>
      </div>

      <div className="relative max-w-2xl w-full text-center z-10">

        <p className="text-xs uppercase tracking-widest text-[#1a6b4a] font-semibold mb-6">
          Plateforme d'apprentissage du libanais
        </p>

        <h1 className="font-bold text-[#1c1c1a] mb-4 leading-tight"
          style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}>
          Parle libanais.
        </h1>

        <p className="text-[#6b6b66] text-lg mb-3 max-w-lg mx-auto">
          Du A1 au B1 — leçons, quiz, conjugaison et dictionnaire.<br />
          Le vrai libanais parlé, celui des rues de Beyrouth.
        </p>

        <div className="my-8 border-l-4 border-[#1a6b4a] pl-4 text-left max-w-md mx-auto">
          <p className="text-[#1c1c1a] text-lg italic font-medium">
            "Marhaba bil Lebnen —<br />bienvenue au Liban."
          </p>
          <p className="text-sm text-[#6b6b66] mt-1" dir="rtl">
            مرحبا بالبنان
          </p>
        </div>

        <a href="/lecon/01"
          className="inline-block bg-[#1a6b4a] text-white px-10 py-4 rounded-full text-base font-medium hover:bg-[#155a3d] transition-colors mt-4">
          Accéder à la plateforme
        </a>

        <div className="mt-12 grid grid-cols-3 gap-4 max-w-lg mx-auto">
          <div className="bg-white bg-opacity-70 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#1a6b4a]">20</p>
            <p className="text-xs text-[#6b6b66] mt-1">leçons A1</p>
          </div>
          <div className="bg-white bg-opacity-70 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#1a6b4a]">3</p>
            <p className="text-xs text-[#6b6b66] mt-1">niveaux</p>
          </div>
          <div className="bg-white bg-opacity-70 rounded-xl p-4 text-center">
            <p className="text-2xl font-bold text-[#1a6b4a]">100%</p>
            <p className="text-xs text-[#6b6b66] mt-1">libanais parlé</p>
          </div>
        </div>

      </div>
    </main>
  )
}