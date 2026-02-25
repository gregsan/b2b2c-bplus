'use client'

// Три варіанти стилю логотипів для партнерів

// Варіант А — мінімалістичне коло з монограмою та акцентним кольором
function LogoStyleA({ name, color }: { name: string; color: string }) {
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <circle cx="40" cy="40" r="38" fill={color} opacity="0.15" />
      <circle cx="40" cy="40" r="38" stroke={color} strokeWidth="1.5" fill="none" opacity="0.4" />
      <text
        x="40" y="46"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="28"
        fontWeight="700"
        fill={color}
      >
        {name[0]}
      </text>
    </svg>
  )
}

// Варіант Б — квадрат з заокругленими кутами, градієнт + ініціали
function LogoStyleB({ name, color }: { name: string; color: string }) {
  const id = `grad-${name}`
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.8" />
          <stop offset="100%" stopColor={color} stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="72" height="72" rx="18" fill={`url(#${id})`} />
      <text
        x="40" y="46"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="26"
        fontWeight="800"
        fill="white"
        opacity="0.9"
      >
        {name.slice(0, 2).toUpperCase()}
      </text>
    </svg>
  )
}

// Варіант В — "таблетка" (pill shape) з назвою, як у сучасних фінтех брендів
function LogoStyleC({ name, color }: { name: string; color: string }) {
  const short = name.length > 5 ? name.slice(0, 4) + '.' : name
  return (
    <svg viewBox="0 0 120 50" className="w-full h-auto">
      <defs>
        <linearGradient id={`pillgrad-${name}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor={color} stopOpacity="0.3" />
          <stop offset="100%" stopColor={color} stopOpacity="0.05" />
        </linearGradient>
      </defs>
      <rect
        x="1" y="1" width="118" height="48" rx="24"
        fill={`url(#pillgrad-${name})`}
        stroke={color}
        strokeWidth="1"
        strokeOpacity="0.4"
      />
      <text
        x="60" y="32"
        textAnchor="middle"
        fontFamily="sans-serif"
        fontSize="18"
        fontWeight="700"
        fill="white"
        opacity="0.85"
      >
        {short}
      </text>
    </svg>
  )
}

// Демо — всі три варіанти поряд
const demoPartners = [
  { slug: 'rozetka',  name: 'Rozetka',           offer: 'Кешбек 10%', color: '#4ADE80' },
  { slug: 'comfy',    name: 'Comfy',              offer: 'Кешбек 8%',  color: '#60A5FA' },
  { slug: 'atb',      name: 'АТБ',                offer: 'Кешбек 12%', color: '#F87171' },
  { slug: 'varus',    name: 'Varus',              offer: 'Знижка 10%', color: '#FACC15' },
  { slug: 'apteka',   name: 'Аптека Низьких Цін', offer: 'Знижка 20%', color: '#C084FC' },
]

export function PromoPartnersDemoA() {
  return (
    <div>
      <p className="text-white/30 text-xs uppercase tracking-widest mb-6 px-12">Варіант А — монограма в колі</p>
      <div className="grid grid-cols-5 gap-4 px-12">
        {demoPartners.map((p) => (
          <div key={p.slug} className="rounded-3xl border border-white/10 p-6 flex flex-col items-center gap-3 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="w-16 h-16"><LogoStyleA name={p.name} color={p.color} /></div>
            <p className="font-semibold text-sm">{p.name}</p>
            <span className="px-3 py-1 rounded-xl text-xs font-bold text-black" style={{ backgroundColor: p.color }}>{p.offer}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PromoPartnersDemoB() {
  return (
    <div>
      <p className="text-white/30 text-xs uppercase tracking-widest mb-6 px-12">Варіант Б — градієнтний квадрат з ініціалами</p>
      <div className="grid grid-cols-5 gap-4 px-12">
        {demoPartners.map((p) => (
          <div key={p.slug} className="rounded-3xl border border-white/10 p-6 flex flex-col items-center gap-3 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="w-16 h-16"><LogoStyleB name={p.name} color={p.color} /></div>
            <p className="font-semibold text-sm">{p.name}</p>
            <span className="px-3 py-1 rounded-xl text-xs font-bold text-black" style={{ backgroundColor: p.color }}>{p.offer}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export function PromoPartnersDemoC() {
  return (
    <div>
      <p className="text-white/30 text-xs uppercase tracking-widest mb-6 px-12">Варіант В — таблетка з назвою</p>
      <div className="grid grid-cols-5 gap-4 px-12">
        {demoPartners.map((p) => (
          <div key={p.slug} className="rounded-3xl border border-white/10 p-8 flex flex-col items-center gap-3 text-center" style={{ background: 'rgba(255,255,255,0.04)' }}>
            <div className="w-full"><LogoStyleC name={p.name} color={p.color} /></div>
            <p className="font-semibold text-sm">{p.name}</p>
            <span className="px-3 py-1 rounded-xl text-xs font-bold text-black" style={{ backgroundColor: p.color }}>{p.offer}</span>
          </div>
        ))}
      </div>
    </div>
  )
}