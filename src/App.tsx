import { useState } from 'react';

const brandMark = '/DireCerto.png';
const brandLockup = '/DireCerto2.png';

const categoryOptions = [
  { value: 'B', label: 'Categoria B (Carro)' },
  { value: 'A', label: 'Categoria A (Moto)' },
  { value: 'AB', label: 'Categoria A e B' },
  { value: 'PCD', label: 'Atendimento PCD' },
] as const;

const featuredInstructors = [
  {
    id: 1,
    featured: true,
    name: 'Carlos Silva',
    rating: '4.9',
    price: '85',
    categories: ['B'],
    categoryLabel: 'Categoria B',
    region: 'Cambuí, Campinas',
    availability: 'Hoje, 18h30',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=320&h=320&fit=crop',
    highlight: 'Especialista em primeira habilitação',
  },
  {
    id: 2,
    featured: true,
    name: 'Maria Oliveira',
    rating: '5.0',
    price: '100',
    categories: ['A', 'B'],
    categoryLabel: 'Categoria A e B',
    region: 'Taquaral, Campinas',
    availability: 'Amanhã, 09h00',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=320&h=320&fit=crop',
    highlight: 'Atendimento premium para agenda corrida',
  },
  {
    id: 3,
    featured: false,
    name: 'Roberto Souza',
    rating: '4.8',
    price: '75',
    categories: ['B'],
    categoryLabel: 'Categoria B',
    region: 'Barão Geraldo, Campinas',
    availability: 'Hoje, 20h15',
    image:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=320&h=320&fit=crop',
    highlight: 'Paciência e foco em alunos inseguros',
  },
  {
    id: 4,
    featured: true,
    name: 'Fernanda Costa',
    rating: '4.9',
    price: '92',
    categories: ['A'],
    categoryLabel: 'Categoria A',
    region: 'Swift, Campinas',
    availability: 'Hoje, 17h00',
    image:
      'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=320&h=320&fit=crop',
    highlight: 'Especialista em moto para alunos iniciantes.',
  },
  {
    id: 5,
    featured: true,
    name: 'Juliana Martins',
    rating: '5.0',
    price: '110',
    categories: ['PCD'],
    categoryLabel: 'Atendimento PCD',
    region: 'Nova Campinas, Campinas',
    availability: 'Amanhã, 14h30',
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=320&h=320&fit=crop',
    highlight: 'Atendimento adaptado com foco em acolhimento e acessibilidade.',
  },
  {
    id: 6,
    featured: false,
    name: 'André Lima',
    rating: '4.7',
    price: '78',
    categories: ['B'],
    categoryLabel: 'Categoria B',
    region: 'Centro, Campinas',
    availability: 'Hoje, 19h45',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=320&h=320&fit=crop',
    highlight: 'Treinos urbanos para quem quer ganhar confiança no trânsito.',
  },
  {
    id: 7,
    featured: true,
    name: 'Patrícia Ramos',
    rating: '4.9',
    price: '95',
    categories: ['A', 'B'],
    categoryLabel: 'Categoria A e B',
    region: 'Mansões Santo Antônio, Campinas',
    availability: 'Sexta, 08h30',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=320&h=320&fit=crop',
    highlight: 'Perfeita para quem quer unificar aulas de carro e moto.',
  },
  {
    id: 8,
    featured: false,
    name: 'Leandro Nunes',
    rating: '4.8',
    price: '88',
    categories: ['A'],
    categoryLabel: 'Categoria A',
    region: 'Jardim Chapadão, Campinas',
    availability: 'Hoje, 21h00',
    image:
      'https://images.unsplash.com/photo-1504593811423-6dd665756598?w=320&h=320&fit=crop',
    highlight: 'Aulas práticas para moto com foco em equilíbrio e segurança.',
  },
  {
    id: 9,
    featured: false,
    name: 'Renata Almeida',
    rating: '4.9',
    price: '105',
    categories: ['PCD', 'B'],
    categoryLabel: 'PCD e Categoria B',
    region: 'Taquaral, Campinas',
    availability: 'Quinta, 10h15',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=320&h=320&fit=crop',
    highlight: 'Experiência com adaptação veicular e rotinas personalizadas.',
  },
];

const trustPoints = [
  {
    title: 'Curadoria local',
    description: 'Instrutores credenciados e ativos na região de Campinas.',
  },
  {
    title: 'Agenda transparente',
    description: 'Valores, disponibilidade e categorias exibidos antes do contato.',
  },
  {
    title: 'Menos atrito',
    description: 'Você escolhe melhor, sem depender de grupos ou indicações soltas.',
  },
];

const steps = [
  {
    number: '01',
    title: 'Escolha a categoria',
    description: 'Filtre por carro, moto ou perfis especializados.',
  },
  {
    number: '02',
    title: 'Compare instrutores',
    description: 'Veja reputação, bairro, faixa de preço e ritmo de atendimento.',
  },
  {
    number: '03',
    title: 'Agende com segurança',
    description: 'Fale com quem combina com a sua rotina e objetivo.',
  },
];

const IconArrowRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

const IconStar = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const IconMapPin = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconShield = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
  </svg>
);

const IconCalendar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M8 2v4" />
    <path d="M16 2v4" />
    <rect width="18" height="18" x="3" y="4" rx="2" />
    <path d="M3 10h18" />
  </svg>
);

function App() {
  const [step, setStep] = useState<'home' | 'search'>('home');
  const [selectedCategory, setSelectedCategory] = useState<(typeof categoryOptions)[number]['value']>('B');
  const [locationQuery, setLocationQuery] = useState('Campinas, SP');

  const normalizedLocation = locationQuery.trim().toLowerCase();

  const filteredInstructors = featuredInstructors.filter((instructor) => {
    if (selectedCategory === 'AB') {
      if (!(instructor.categories.includes('A') && instructor.categories.includes('B'))) {
        return false;
      }
    } else if (!instructor.categories.includes(selectedCategory)) {
      return false;
    }

    if (!normalizedLocation) {
      return true;
    }

    return instructor.region.toLowerCase().includes(normalizedLocation) || 'campinas, sp'.includes(normalizedLocation);
  });

  const featuredMatches = filteredInstructors.filter((instructor) => instructor.featured);
  const regularMatches = filteredInstructors.filter((instructor) => !instructor.featured);
  const highlightedInstructors = featuredMatches.length > 0 ? featuredMatches : regularMatches;

  const selectedCategoryLabel =
    categoryOptions.find((option) => option.value === selectedCategory)?.label ?? categoryOptions[0].label;

  const scrollToSection = (sectionId: string) => {
    const runScroll = () => {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    if (step !== 'home') {
      setStep('home');
      window.setTimeout(runScroll, 80);
      return;
    }

    runScroll();
  };

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,#f4f7fb_0%,#eef3f9_45%,#f8fafc_100%)] text-slate-900">
      <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <button className="shrink-0" onClick={() => setStep('home')} aria-label="Voltar para a home">
            <img src={brandLockup} alt="DireCerto" className="brand-lockup-fade h-12 w-auto md:h-14" />
          </button>

          <nav className="hidden items-center gap-8 text-sm font-semibold text-slate-600 lg:flex">
            <a href="#como-funciona" className="transition hover:text-slate-950">
              Como funciona
            </a>
            <a href="#instrutores" className="transition hover:text-slate-950">
              Instrutores
            </a>
            <a href="#seguranca" className="transition hover:text-slate-950">
              Segurança
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollToSection('instrutores')}
              className="hidden rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-950 md:block"
            >
              Sou instrutor
            </button>
            <button
              onClick={() => scrollToSection('hero-busca')}
              className="rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_12px_30px_rgba(15,23,42,0.16)] transition hover:bg-slate-800"
            >
              Acessar
            </button>
          </div>
        </div>
      </header>

      {step === 'home' ? (
        <main>
          <section id="hero-busca" className="relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.16),transparent_32%),radial-gradient(circle_at_top_left,rgba(14,165,233,0.12),transparent_30%)]" />
            <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-14 pt-8 md:px-8 md:pb-20 md:pt-12 lg:grid-cols-[1.12fr_0.88fr] lg:items-center lg:gap-14 lg:pb-24 lg:pt-18">
              <div className="relative z-10">
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-sky-200 bg-white/90 px-3 py-2 text-sm font-medium text-sky-900 shadow-sm md:mb-6 md:px-4">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  <span className="md:hidden">Instrutores credenciados em Campinas</span>
                  <span className="hidden md:inline">Plataforma para conectar alunos e instrutores credenciados</span>
                </div>

                <h1 className="max-w-3xl text-[3.25rem] font-black leading-[0.9] tracking-[-0.06em] text-slate-950 md:text-7xl md:leading-[0.95]">
                  Sua habilitação começa com a escolha certa.
                </h1>

                <p className="mt-4 max-w-xl text-base leading-7 text-slate-600 md:hidden">
                  Encontre instrutores credenciados com menos ruído e mais clareza.
                </p>

                <p className="mt-6 hidden max-w-2xl text-lg leading-8 text-slate-600 md:block md:text-xl">
                  A DireCerto organiza a busca por instrutores credenciados em Campinas com visual mais claro,
                  agenda mais objetiva e uma experiência que transmite confiança desde o primeiro clique.
                </p>

                <div className="mt-7 grid gap-3 rounded-[2rem] border border-slate-200 bg-white/90 p-3 shadow-[0_30px_90px_rgba(15,23,42,0.08)] backdrop-blur md:mt-10 md:gap-4 md:p-4 md:grid-cols-[1.1fr_1fr_auto] md:items-center">
                  <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      <IconMapPin />
                      Onde você vai dirigir
                    </div>
                    <input
                      type="text"
                      value={locationQuery}
                      onChange={(event) => setLocationQuery(event.target.value)}
                      className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                    />
                  </div>

                  <div className="rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-4 md:px-5">
                    <div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
                      <IconShield />
                      Tipo de atendimento
                    </div>
                    <select
                      value={selectedCategory}
                      onChange={(event) => setSelectedCategory(event.target.value as (typeof categoryOptions)[number]['value'])}
                      className="w-full bg-transparent text-lg font-semibold text-slate-900 outline-none"
                    >
                      {categoryOptions.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={() => setStep('search')}
                    className="inline-flex items-center justify-center gap-2 rounded-[1.4rem] bg-sky-600 px-7 py-4 text-lg font-bold text-white shadow-[0_20px_50px_rgba(2,132,199,0.28)] transition hover:bg-sky-700 md:py-5"
                  >
                    Buscar agora
                    <IconArrowRight />
                  </button>
                </div>

                <div className="mt-8 hidden flex-wrap items-center gap-4 text-sm text-slate-500 md:flex">
                  <span className="rounded-full bg-slate-950 px-4 py-2 font-semibold text-white">Mais de 50 instrutores em Campinas</span>
                  <span className="rounded-full border border-slate-300 px-4 py-2 font-semibold">Verificação de credenciamento</span>
                  <span className="rounded-full border border-slate-300 px-4 py-2 font-semibold">Comparação de perfis</span>
                </div>
              </div>

              <div className="relative z-10 hidden lg:block">
                <div className="relative overflow-hidden rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(145deg,#0f172a_0%,#10244a_55%,#1d4ed8_100%)] p-6 shadow-[0_35px_110px_rgba(15,23,42,0.28)] md:p-8">
                  <div className="absolute -right-12 top-8 h-40 w-40 rounded-full bg-sky-400/20 blur-3xl" />
                  <div className="absolute -left-10 bottom-6 h-36 w-36 rounded-full bg-cyan-300/10 blur-3xl" />

                  <div className="relative flex items-start justify-between gap-6">
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-100/70">Marca em destaque</p>
                      <h2 className="mt-3 max-w-xs text-3xl font-black leading-tight text-white">
                        Presença visual forte para gerar confiança logo no primeiro contato.
                      </h2>
                    </div>
                    <div className="rounded-[1.7rem] bg-white/12 p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-sm">
                      <img
                        src={brandMark}
                        alt="Selo DireCerto"
                        className="h-20 w-20 rounded-[1.2rem] bg-white p-2 object-contain shadow-[0_10px_30px_rgba(15,23,42,0.18)] md:h-24 md:w-24"
                      />
                    </div>
                  </div>

                  <div className="relative mt-8 rounded-[1.8rem] bg-white/95 p-5 text-slate-900 shadow-2xl">
                    <img src={brandLockup} alt="DireCerto Instrutores Credenciados" className="h-16 w-auto" />
                    <div className="mt-5 grid gap-4 md:grid-cols-3">
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-3xl font-black text-slate-950">100%</p>
                        <p className="mt-2 text-sm font-medium text-slate-500">Instrutores com apresentação mais profissional.</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-3xl font-black text-slate-950">4.9</p>
                        <p className="mt-2 text-sm font-medium text-slate-500">Média de satisfação nos perfis em destaque.</p>
                      </div>
                      <div className="rounded-2xl bg-slate-50 p-4">
                        <p className="text-3xl font-black text-slate-950">24h</p>
                        <p className="mt-2 text-sm font-medium text-slate-500">Resposta esperada para os contatos mais quentes.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="como-funciona" className="mx-auto max-w-7xl px-5 py-6 md:px-8">
            <div className="grid gap-6 md:grid-cols-3">
              {steps.map((item) => (
                <div key={item.number} className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
                  <p className="text-sm font-black tracking-[0.35em] text-sky-600">{item.number}</p>
                  <h3 className="mt-5 text-2xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section id="seguranca" className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <div className="grid gap-10 rounded-[2.5rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.06)] lg:grid-cols-[0.9fr_1.1fr] lg:p-10">
              <div className="rounded-[2rem] bg-[linear-gradient(160deg,#e0f2fe_0%,#eff6ff_40%,#ffffff_100%)] p-8">
                <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-700">Por que funciona</p>
                <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] text-slate-950">
                  Menos improviso, mais clareza para decidir quem vai te acompanhar.
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
                  A home agora conversa melhor com a proposta da marca: uma experiência mais premium, mais confiável
                  e com identidade visual coerente entre selo, logotipo e interface.
                </p>
                <div className="mt-8 flex items-center gap-4 rounded-3xl border border-slate-200 bg-white p-4">
                  <img src={brandMark} alt="Emblema DireCerto" className="h-16 w-16 rounded-2xl object-contain" />
                  <div>
                    <p className="font-black text-slate-950">DireCerto em primeiro plano</p>
                    <p className="text-sm leading-6 text-slate-500">A imagem da marca agora participa da composição, e não só do favicon.</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-4">
                {trustPoints.map((point) => (
                  <div key={point.title} className="rounded-[1.7rem] border border-slate-200 bg-slate-50 p-6">
                    <div className="mb-4 inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                      <IconShield />
                    </div>
                    <h3 className="text-2xl font-black text-slate-950">{point.title}</h3>
                    <p className="mt-3 text-base leading-7 text-slate-600">{point.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="instrutores" className="mx-auto max-w-7xl px-5 py-4 md:px-8">
            <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-700">Perfis em destaque</p>
                <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950">Exemplos de como a busca pode parecer mais valiosa.</h2>
              </div>
              <button
                onClick={() => setStep('search')}
                className="inline-flex items-center gap-2 self-start rounded-full border border-slate-300 bg-white px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
              >
                Ver resultados
                <IconArrowRight />
              </button>
            </div>

            <div className="grid gap-6 xl:grid-cols-3">
              {highlightedInstructors.slice(0, 4).map((instructor) => (
                <article
                  key={instructor.id}
                  className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.06)] transition hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(15,23,42,0.12)]"
                >
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={instructor.image}
                      alt={instructor.name}
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                    <div className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                      Credenciado
                    </div>
                    <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white">
                      <div>
                        <p className="text-2xl font-black">{instructor.name}</p>
                        <p className="mt-1 text-sm font-medium text-white/80">{instructor.highlight}</p>
                      </div>
                      <div className="rounded-full bg-white/15 px-3 py-2 text-sm font-black backdrop-blur">
                        R$ {instructor.price}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-5 p-6">
                    <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
                      <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-amber-700">
                        <IconStar />
                        {instructor.rating}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-2">{instructor.categoryLabel}</span>
                    </div>

                    <div className="space-y-3 text-sm font-medium text-slate-600">
                      <div className="flex items-center gap-2">
                        <IconMapPin />
                        {instructor.region}
                      </div>
                      <div className="flex items-center gap-2">
                        <IconCalendar />
                        Próxima janela: {instructor.availability}
                      </div>
                    </div>

                    <button
                      onClick={() => setStep('search')}
                      className="inline-flex w-full items-center justify-center gap-2 rounded-[1.2rem] bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:bg-sky-700"
                    >
                      Quero esse perfil
                      <IconArrowRight />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mx-auto max-w-7xl px-5 py-16 md:px-8">
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[linear-gradient(135deg,#082f49_0%,#0f172a_35%,#1d4ed8_100%)] p-8 text-white shadow-[0_30px_100px_rgba(15,23,42,0.24)] md:p-10">
              <div className="absolute -right-14 -top-14 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl" />
              <div className="absolute -bottom-20 left-10 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
              <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
                <div>
                  <p className="text-sm font-black uppercase tracking-[0.35em] text-sky-100/80">Pronto para crescer</p>
                  <h2 className="mt-4 max-w-3xl text-4xl font-black leading-tight tracking-[-0.04em] text-white md:text-5xl">
                    Uma interface mais forte ajuda a marca a parecer tão confiável quanto a proposta.
                  </h2>
                  <p className="mt-5 max-w-2xl text-lg leading-8 text-sky-50/85">
                    Esse redesenho aproveita os ativos da DireCerto e deixa o produto mais apresentável para usar em domínio próprio, anúncios e validação com usuários.
                  </p>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
                  <button
                    onClick={() => scrollToSection('instrutores')}
                    className="rounded-full bg-white px-6 py-3 text-sm font-bold text-slate-950 transition hover:bg-sky-50"
                  >
                    Ver instrutores
                  </button>
                  <button
                    onClick={() => scrollToSection('hero-busca')}
                    className="rounded-full border border-white/30 px-6 py-3 text-sm font-bold text-white transition hover:bg-white/10"
                  >
                    Falar com um instrutor
                  </button>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : (
        <main className="mx-auto max-w-7xl px-5 py-12 md:px-8">
          <div className="mb-8 flex flex-col gap-4 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.06)] md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.3em] text-sky-700">
                Resultados em {locationQuery || 'Campinas'}
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-slate-950">
                {filteredInstructors.length} instrutores disponíveis para {selectedCategoryLabel.toLowerCase()}.
              </h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
                Compare localização, faixa de preço e próxima agenda livre com base no filtro selecionado.
              </p>
            </div>

            <button
              onClick={() => scrollToSection('hero-busca')}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-bold text-slate-800 transition hover:border-slate-950 hover:text-slate-950"
            >
              Voltar para home
            </button>
          </div>

          <div className="grid gap-6">
            {[...featuredMatches, ...regularMatches].map((instructor) => (
              <article
                key={instructor.id}
                className="grid gap-6 rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:grid-cols-[220px_1fr_auto] md:items-center"
              >
                <div className="relative overflow-hidden rounded-[1.6rem]">
                  <img src={instructor.image} alt={instructor.name} className="h-56 w-full object-cover md:h-52" />
                  {instructor.featured ? (
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-black uppercase tracking-[0.2em] text-sky-700">
                      Destaque
                    </div>
                  ) : null}
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-3xl font-black text-slate-950">{instructor.name}</h3>
                    <span className="inline-flex items-center gap-2 rounded-full bg-amber-50 px-3 py-2 text-sm font-black text-amber-700">
                      <IconStar />
                      {instructor.rating}
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{instructor.highlight}</p>

                  <div className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-slate-600">
                    <span className="rounded-full bg-slate-100 px-4 py-2">{instructor.categoryLabel}</span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                      <IconMapPin />
                      {instructor.region}
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2">
                      <IconCalendar />
                      {instructor.availability}
                    </span>
                  </div>
                </div>

                <div className="rounded-[1.6rem] bg-slate-50 p-5 text-center md:min-w-[200px]">
                  <p className="text-sm font-black uppercase tracking-[0.25em] text-slate-400">Valor por aula</p>
                  <p className="mt-3 text-4xl font-black text-slate-950">R$ {instructor.price}</p>
                  <p className="mt-2 text-sm text-slate-500">Perfil verificado e com agenda recente.</p>
                  <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-[1.1rem] bg-sky-600 px-5 py-4 text-sm font-bold text-white transition hover:bg-sky-700">
                    Agendar conversa
                    <IconArrowRight />
                  </button>
                </div>
              </article>
            ))}
          </div>
        </main>
      )}

      <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:px-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <img src={brandLockup} alt="DireCerto" className="h-14 w-auto rounded-md bg-white px-3 py-2" />
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-400">
              Uma presença digital mais forte para a jornada de quem quer encontrar instrutores credenciados com mais contexto, mais segurança e menos fricção.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <span className="rounded-full border border-slate-700 px-4 py-2">Privacidade</span>
            <span className="rounded-full border border-slate-700 px-4 py-2">Instrutores</span>
            <span className="rounded-full border border-slate-700 px-4 py-2">Campinas</span>
            <span className="rounded-full border border-slate-700 px-4 py-2">Detran-SP</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
