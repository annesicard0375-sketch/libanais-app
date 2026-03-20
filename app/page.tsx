export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf9f6] flex flex-col items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <p className="text-sm uppercase tracking-widest text-[#1a6b4a] font-medium mb-4">
          Apprends le libanais
        </p>
        <h1 className="text-4xl font-bold text-[#1c1c1a] mb-4 leading-tight">
          Parle libanais, pas arabe scolaire.
        </h1>
        <p className="text-[#6b6b66] text-lg mb-10">
          Des lecons courtes pour francophones. Le vrai libanais parle, avec audio.
        </p>
        <a href="/lecon/01" className="inline-block bg-[#1a6b4a] text-white px-8 py-4 rounded-full text-base font-medium">
          Commencer
        </a>
      </div>
    </main>
  )
}