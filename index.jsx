import React, { useState } from 'react';

// --- Recreação do Logotipo em SVG (Baseado na imagem enviada) ---
const DirecertoLogo = ({ className = "h-12", isDark = false }) => (
  <div className={`flex items-center gap-3 ${className}`}>
    <svg viewBox="0 0 200 100" className="h-full w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Speed lines top */}
      <line x1="90" y1="20" x2="110" y2="20" stroke="#71713e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="115" y1="25" x2="130" y2="25" stroke="#71713e" strokeWidth="2" strokeLinecap="round"/>
      {/* Car Body */}
      <path d="M55 45 C65 40, 80 35, 100 35 C120 35, 135 40, 145 42 L155 42 L150 50 L150 58 C150 62, 145 65, 140 65 L60 65 C55 65, 50 62, 50 58 L50 48 Z" stroke="#71713e" strokeWidth="2.5" strokeLinejoin="round"/>
      {/* Windows */}
      <path d="M98 38 L98 50 M98 38 C115 38, 130 42, 138 43 L138 50 L98 50" stroke="#71713e" strokeWidth="1.5"/>
      {/* Wheels */}
      <circle cx="65" cy="65" r="7" fill="white" stroke="#71713e" strokeWidth="2"/>
      <circle cx="135" cy="65" r="7" fill="white" stroke="#71713e" strokeWidth="2"/>
      {/* Speed lines bottom */}
      <line x1="60" y1="75" x2="110" y2="75" stroke="#71713e" strokeWidth="2" strokeLinecap="round"/>
      <line x1="115" y1="75" x2="135" y2="75" stroke="#71713e" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <div className="flex font-black text-2xl tracking-tighter italic">
      <span className={isDark ? "text-slate-100" : "text-slate-900"}>DIRE</span>
      <span className="text-[#71713e]">CERTO</span>
    </div>
  </div>
);

const IconSearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
);
const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-yellow-600"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
);
const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
);

const App = () => {
  const [step, setStep] = useState('home');

  const instructors = [
    { id: 1, name: "Carlos Silva", rating: "4.9", price: "85", cat: "Categoria B", local: "Cambuí, Campinas", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" },
    { id: 2, name: "Maria Oliveira", rating: "5.0", price: "100", cat: "Categoria A e B", local: "Taquaral, Campinas", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" },
    { id: 3, name: "Roberto Souza", rating: "4.8", price: "75", cat: "Categoria B", local: "Barão Geraldo, Campinas", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
      {/* Header com Logotipo Oficial Recreado */}
      <header className="bg-white border-b border-slate-200 px-6 py-2 flex justify-between items-center sticky top-0 z-50">
        <div className="cursor-pointer" onClick={() => setStep('home')}>
          <DirecertoLogo className="h-14" />
        </div>
        <nav className="hidden md:flex gap-8 text-sm font-bold text-slate-500 uppercase tracking-tighter">
          <button className="hover:text-blue-600">Como funciona</button>
          <button className="hover:text-blue-600">Sou Instrutor</button>
        </nav>
        <button className="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-black transition shadow-sm">
          Acessar
        </button>
      </header>

      {step === 'home' ? (
        <main>
          <section className="bg-white pt-16 pb-24 px-6 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
                <DirecertoLogo className="h-96 -rotate-12 translate-x-32" />
            </div>

            <div className="max-w-4xl mx-auto text-center relative z-10">
              <h1 className="text-5xl md:text-7xl font-black text-slate-900 leading-tight mb-6">
                Sua CNH começa <br/><span className="text-blue-600">Direto e Certo.</span>
              </h1>
              <p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-medium">
                A plataforma de Campinas que conecta você aos melhores instrutores credenciados pelo Detran.
              </p>

              {/* Barra de Pesquisa */}
              <div className="bg-white p-2 rounded-3xl shadow-2xl border border-slate-100 flex flex-col md:flex-row gap-2 max-w-3xl mx-auto">
                <div className="flex-1 flex items-center px-6 py-4 gap-3 border-b md:border-b-0 md:border-r border-slate-100">
                  <span className="text-blue-600"><IconMapPin /></span>
                  <input type="text" defaultValue="Campinas, SP" className="w-full outline-none text-slate-700 font-bold text-lg" />
                </div>
                <div className="flex-1 flex items-center px-6 py-4 gap-3">
                  <select className="w-full outline-none text-slate-700 bg-transparent font-medium">
                    <option>Categoria B (Carro)</option>
                    <option>Categoria A (Moto)</option>
                    <option>Habilitação PCD</option>
                  </select>
                </div>
                <button 
                  onClick={() => setStep('search')}
                  className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 transition shadow-lg shadow-blue-200"
                >
                  Buscar
                </button>
              </div>
            </div>
          </section>

          <section className="py-12 bg-slate-50 border-t border-slate-100">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                 <div className="text-center">
                    <p className="text-3xl font-black text-slate-900">100%</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">Credenciados Detran</p>
                 </div>
                 <div className="hidden md:block h-8 w-px bg-slate-200"></div>
                 <div className="text-center">
                    <p className="text-3xl font-black text-slate-900">+50</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">Instrutores em Campinas</p>
                 </div>
                 <div className="hidden md:block h-8 w-px bg-slate-200"></div>
                 <div className="text-center">
                    <p className="text-3xl font-black text-slate-900">4.9/5</p>
                    <p className="text-xs font-bold text-slate-400 uppercase">Avaliação Média</p>
                 </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="max-w-5xl mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-8 border-b pb-6 border-slate-200">
            <div>
              <h2 className="text-3xl font-black text-slate-900">Resultados em <span className="text-blue-600">Campinas</span></h2>
              <p className="text-slate-500 font-medium">Encontramos 3 instrutores disponíveis hoje.</p>
            </div>
            <button onClick={() => setStep('home')} className="bg-slate-100 text-slate-600 px-4 py-2 rounded-xl font-bold text-sm hover:bg-slate-200 transition">Voltar</button>
          </div>
          
          <div className="grid gap-6">
            {instructors.map(ins => (
              <div key={ins.id} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-8 items-center hover:shadow-xl hover:border-blue-100 transition-all">
                <div className="relative">
                    <img src={ins.img} className="w-24 h-24 rounded-3xl object-cover border-4 border-slate-50 shadow-inner" alt={ins.name} />
                    <div className="absolute -bottom-2 -right-2 bg-yellow-400 text-slate-900 text-[10px] font-black px-2 py-1 rounded-lg shadow-sm">TOP</div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center gap-3 mb-2">
                    <h3 className="text-2xl font-black text-slate-800">{ins.name}</h3>
                    <div className="flex items-center justify-center gap-1 bg-blue-50 px-3 py-1 rounded-full text-blue-700 text-xs font-black uppercase">
                      <IconStar /> {ins.rating}
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-center md:justify-start gap-4 text-slate-400 text-sm font-bold">
                    <span className="flex items-center gap-1"><IconMapPin /> {ins.local}</span>
                    <span className="text-slate-200">|</span>
                    <span>{ins.cat}</span>
                  </div>
                </div>
                <div className="text-center md:text-right md:pl-8 border-t md:border-t-0 md:border-l border-slate-100 pt-6 md:pt-0 min-w-[180px]">
                  <p className="text-3xl font-black text-slate-900">R$ {ins.price}<span className="text-sm font-medium text-slate-400">/aula</span></p>
                  <button className="mt-4 w-full bg-blue-600 text-white px-6 py-3 rounded-2xl font-black text-sm hover:bg-blue-700 transition shadow-lg shadow-blue-100">
                    Agendar Aula
                  </button>
                </div>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Rodapé Claro Atualizado */}
      <footer className="bg-slate-100 text-slate-600 py-16 px-6 mt-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 justify-between items-center gap-12 mb-12 border-b border-slate-200 pb-12">
            <div>
              <div className="mb-4">
                <DirecertoLogo className="h-10" />
              </div>
              <p className="text-sm max-w-sm leading-relaxed font-medium">Simplificando a jornada para a sua habilitação com tecnologia e segurança jurídica.</p>
            </div>
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-xs font-black uppercase tracking-widest text-slate-800">
              <span className="hover:text-blue-600 cursor-pointer transition">Privacidade</span>
              <span className="hover:text-blue-600 cursor-pointer transition">ESG</span>
              <span className="hover:text-blue-600 cursor-pointer transition">Instrutores</span>
              <span className="hover:text-blue-600 cursor-pointer transition">Detran-SP</span>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between gap-4 text-[10px] font-bold uppercase opacity-60">
            <p>DIRECERTO INTERMEDIAÇÃO DIGITAL LTDA • CAMPINAS - SP</p>
            <p>© 2026 TODOS OS DIREITOS RESERVADOS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;