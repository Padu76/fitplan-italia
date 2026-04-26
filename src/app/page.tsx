import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-900 to-gray-900 px-4 py-20">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              FitPlan Italia
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Il software completo per personal trainer e centri fitness. Genera piani di allenamento e nutrizione personalizzati con l'AI.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Link 
                href="/signup" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 px-8 py-4 rounded-xl text-lg font-semibold transition-all transform hover:scale-105"
              >
                Inizia Gratis
              </Link>
              <a 
                href="#funzionalita" 
                className="border border-gray-700 hover:border-gray-600 px-8 py-4 rounded-xl text-lg font-semibold transition-all"
              >
                Scopri di Più
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="funzionalita" className="px-4 py-20 bg-gray-900">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Funzionalità Innovative</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Piani Workout AI</h3>
                <p className="text-gray-400">Genera automaticamente piani di allenamento personalizzati basati su obiettivi, livello e preferenze del cliente.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Database Alimenti Italiano</h3>
                <p className="text-gray-400">Oltre 5000 alimenti tipici italiani con valori nutrizionali certificati per piani alimentari accurati.</p>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl mb-6 flex items-center justify-center">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-4">Tracking Progressi</h3>
                <p className="text-gray-400">Monitora i progressi dei clienti con grafici dettagliati, misurazioni e statistiche avanzate.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="prezzi" className="px-4 py-20 bg-gray-950">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Piani Semplici e Trasparenti</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Personal Trainer</h3>
                <div className="text-4xl font-bold mb-6">€29<span className="text-lg font-normal text-gray-400">/mese</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fino a 50 clienti
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Piani workout illimitati
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Database alimenti
                  </li>
                </ul>
                <Link href="/signup" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-center py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all">
                  Inizia Prova Gratuita
                </Link>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl border-2 border-blue-500 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 py-1 rounded-full text-sm font-semibold">
                  Più Popolare
                </div>
                <h3 className="text-2xl font-bold mb-4">Centro Fitness</h3>
                <div className="text-4xl font-bold mb-6">€69<span className="text-lg font-normal text-gray-400">/mese</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Fino a 200 clienti
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Multi-trainer
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Analytics avanzati
                  </li>
                </ul>
                <Link href="/signup" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-center py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all">
                  Inizia Prova Gratuita
                </Link>
              </div>
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <div className="text-4xl font-bold mb-6">€99<span className="text-lg font-normal text-gray-400">/mese</span></div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Clienti illimitati
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    API personalizzate
                  </li>
                  <li className="flex items-center">
                    <svg className="w-5 h-5 mr-3 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    Support prioritario
                  </li>
                </ul>
                <Link href="/signup" className="block w-full bg-gradient-to-r from-blue-600 to-purple-600 text-center py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-purple-500 transition-all">
                  Inizia Prova Gratuita
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="px-4 py-20 bg-gray-900">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">Domande Frequenti</h2>
            <div className="space-y-8">
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Come funziona la generazione automatica dei piani?</h3>
                <p className="text-gray-400">Utilizziamo intelligenza artificiale avanzata che analizza profilo, obiettivi e preferenze del cliente per creare piani personalizzati seguendo le linee guida fitness italiane.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Il database alimenti è aggiornato?</h3>
                <p className="text-gray-400">Sì, manteniamo aggiornato un database di oltre 5000 alimenti tipici italiani con valori nutrizionali certificati dal Ministero della Salute.</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl border border-gray-700">
                <h3 className="text-xl font-semibold mb-3">Posso cancellare in qualsiasi momento?</h3>
                <p className="text-gray-400">Certamente! Non ci sono vincoli contrattuali. Puoi cancellare il tuo abbonamento in qualsiasi momento dalla sezione impostazioni.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}