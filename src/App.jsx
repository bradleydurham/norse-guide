import { useState } from 'react'
import { categories } from './data.js'

const focusConfig = {
  mythology: { label: 'Mythology',      color: '#9B7FD4', icon: '✦' },
  history:   { label: 'History',        color: '#6B9E8B', icon: '⊕' },
  both:      { label: 'Myth + History', color: '#C0922A', icon: '◈' },
}

const accuracyLabel = (n) => {
  if (n === 5) return 'Scholarly'
  if (n === 4) return 'Reliable'
  if (n === 3) return 'Mixed'
  return 'Dramatized'
}

const accuracyColor = (n) => {
  if (n === 5) return '#7DBF8E'
  if (n === 4) return '#A8C47A'
  if (n === 3) return '#D4A84B'
  return '#C06060'
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('primary')
  const [expandedItem, setExpandedItem] = useState(null)

  const category = categories.find((c) => c.id === activeCategory)

  return (
    <div style={{ minHeight: '100vh', background: '#0D0B08', fontFamily: "Georgia, 'Times New Roman', serif", color: '#E8DCC8', position: 'relative' }}>

      {/* Background glow */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, backgroundImage: 'radial-gradient(ellipse at 20% 20%, rgba(192,146,42,0.06) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(107,158,139,0.05) 0%, transparent 50%)' }} />

      {/* Header */}
      <header style={{ position: 'relative', zIndex: 1, padding: '48px 32px 32px', borderBottom: '1px solid rgba(192,146,42,0.2)', textAlign: 'center', background: 'linear-gradient(180deg, rgba(192,146,42,0.08) 0%, transparent 100%)' }}>
        <div style={{ fontSize: '26px', letterSpacing: '14px', color: 'rgba(192,146,42,0.45)', marginBottom: '16px' }}>ᚠ ᚢ ᚦ ᚨ ᚱ ᚲ</div>
        <h1 style={{ fontSize: 'clamp(28px, 5vw, 52px)', fontWeight: '400', letterSpacing: '4px', textTransform: 'uppercase', color: '#E8DCC8', margin: '0 0 8px', lineHeight: 1.1 }}>Norse & Viking</h1>
        <h2 style={{ fontSize: 'clamp(13px, 2vw, 17px)', fontWeight: '400', letterSpacing: '6px', textTransform: 'uppercase', color: '#C0922A', margin: '0 0 16px' }}>Self-Guided Learning Path</h2>
        <p style={{ maxWidth: '520px', margin: '0 auto', fontSize: '14px', lineHeight: '1.7', color: 'rgba(232,220,200,0.55)', letterSpacing: '0.5px' }}>
          Curated for historical and mythological accuracy. Each source is marked by reliability and whether it covers mythology, history, or both.
        </p>
      </header>

      {/* Category Nav */}
      <nav style={{ position: 'relative', zIndex: 1, display: 'flex', flexWrap: 'wrap', gap: '2px', borderBottom: '1px solid rgba(192,146,42,0.15)', background: 'rgba(0,0,0,0.3)' }}>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => { setActiveCategory(cat.id); setExpandedItem(null) }}
            style={{ flex: '1 1 auto', padding: '14px 10px', background: activeCategory === cat.id ? `rgba(${cat.rgb},0.15)` : 'transparent', border: 'none', borderBottom: activeCategory === cat.id ? `2px solid ${cat.color}` : '2px solid transparent', color: activeCategory === cat.id ? cat.color : 'rgba(232,220,200,0.4)', cursor: 'pointer', fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', fontFamily: 'inherit', transition: 'all 0.2s ease', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}
          >
            <span style={{ fontSize: '18px' }}>{cat.rune}</span>
            <span>{cat.label}</span>
          </button>
        ))}
      </nav>

      {/* Main content */}
      <main style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto', padding: '32px 20px 80px' }}>
        <div style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontSize: '32px', color: category.color, opacity: 0.7 }}>{category.rune}</span>
          <div>
            <h3 style={{ margin: 0, fontSize: '19px', fontWeight: 400, letterSpacing: '2px', textTransform: 'uppercase' }}>{category.label}</h3>
            <p style={{ margin: '2px 0 0', fontSize: '12px', color: 'rgba(232,220,200,0.35)', letterSpacing: '1px' }}>{category.items.length} sources</p>
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {category.items.map((item, i) => {
            const isOpen = expandedItem === i
            const fc = focusConfig[item.focus]
            return (
              <div
                key={i}
                onClick={() => setExpandedItem(isOpen ? null : i)}
                style={{ background: isOpen ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', border: `1px solid ${isOpen ? category.color + '40' : 'rgba(232,220,200,0.08)'}`, borderRadius: '2px', transition: 'all 0.2s ease', cursor: 'pointer', overflow: 'hidden' }}
              >
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'flex-start', gap: '16px', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    {/* Badges */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap', marginBottom: '6px' }}>
                      <span style={{ fontSize: '10px', letterSpacing: '1.5px', textTransform: 'uppercase', padding: '2px 8px', border: `1px solid ${category.color}55`, color: category.color, borderRadius: '1px' }}>{item.type}</span>
                      <span style={{ fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', padding: '2px 8px', background: `${fc.color}18`, border: `1px solid ${fc.color}50`, color: fc.color, borderRadius: '1px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                        <span>{fc.icon}</span>{fc.label}
                      </span>
                      {item.tag && <span style={{ fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(232,220,200,0.3)' }}>{item.tag}</span>}
                    </div>

                    <div style={{ fontWeight: 400, fontSize: '16px', marginBottom: '3px' }}>{item.title}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(232,220,200,0.45)' }}>{item.author} · {item.year}</div>
                  </div>

                  {/* Accuracy dots */}
                  <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '5px', paddingTop: '2px' }}>
                    <div style={{ display: 'flex', gap: '3px' }}>
                      {[1, 2, 3, 4, 5].map((n) => (
                        <div key={n} style={{ width: '6px', height: '6px', borderRadius: '50%', background: n <= item.accuracy ? accuracyColor(item.accuracy) : 'rgba(232,220,200,0.1)' }} />
                      ))}
                    </div>
                    <div style={{ fontSize: '9px', letterSpacing: '1px', textTransform: 'uppercase', color: accuracyColor(item.accuracy) }}>{accuracyLabel(item.accuracy)}</div>
                  </div>
                </div>

                {/* Expanded note + review */}
                {isOpen && (
                  <div style={{ borderTop: '1px solid rgba(232,220,200,0.07)' }}>
                    <div style={{ padding: '14px 20px', fontSize: '14px', lineHeight: '1.8', color: 'rgba(232,220,200,0.65)' }}>
                      {item.note}
                    </div>
                    {item.review && (
                      <div style={{ margin: '0 20px 20px', padding: '14px 16px', background: 'rgba(192,146,42,0.06)', borderLeft: '2px solid rgba(192,146,42,0.4)', borderRadius: '1px' }}>
                        <div style={{ fontSize: '9px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(192,146,42,0.6)', marginBottom: '8px' }}>My Review</div>
                        <div style={{ fontSize: '14px', lineHeight: '1.8', color: 'rgba(232,220,200,0.75)', fontStyle: 'italic' }}>{item.review}</div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </main>

      {/* Footer legend */}
      <footer style={{ position: 'relative', zIndex: 1, borderTop: '1px solid rgba(192,146,42,0.1)', padding: '20px 24px', display: 'flex', flexWrap: 'wrap', gap: '14px', justifyContent: 'center', alignItems: 'center' }}>
        <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(232,220,200,0.25)' }}>Accuracy</span>
        {[{ label: 'Scholarly', acc: 5 }, { label: 'Reliable', acc: 4 }, { label: 'Mixed', acc: 3 }, { label: 'Dramatized', acc: 2 }].map(({ label, acc }) => (
          <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <div style={{ display: 'flex', gap: '2px' }}>
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} style={{ width: '5px', height: '5px', borderRadius: '50%', background: n <= acc ? accuracyColor(acc) : 'rgba(232,220,200,0.1)' }} />
              ))}
            </div>
            <span style={{ fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(232,220,200,0.35)' }}>{label}</span>
          </div>
        ))}
        <span style={{ color: 'rgba(232,220,200,0.15)', fontSize: '12px' }}>|</span>
        <span style={{ fontSize: '10px', letterSpacing: '2px', textTransform: 'uppercase', color: 'rgba(232,220,200,0.25)' }}>Focus</span>
        {Object.values(focusConfig).map((fc) => (
          <div key={fc.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{ color: fc.color, fontSize: '11px' }}>{fc.icon}</span>
            <span style={{ fontSize: '10px', letterSpacing: '1px', textTransform: 'uppercase', color: 'rgba(232,220,200,0.35)' }}>{fc.label}</span>
          </div>
        ))}
      </footer>
    </div>
  )
}
