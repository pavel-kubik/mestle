// Variant A explorations — 3 map controls × richer per-attribute guess rows.
// Each guess now shows distance / population / region / direction individually,
// each colored far (red) / close (amber) / got-it (green).

// ─────────────────────────────────────────────────────────
// Shared data (same demo guesses, with per-attribute tones)
// ─────────────────────────────────────────────────────────
// Each attribute now carries a tone + (for pop/dist) an arrow signalling
// whether the target is above or below the guess. 'same' = match.
const A_GUESSES = [
  { n: 1, name: 'Pardubice',       x: 215, y: 82,  dist: { v: '218 km', tone: 'hot',  arrow: 'down' },
    pop: { v: '92 319',  tone: 'hot',  arrow: 'down' }, region: { v: 'Pardubický',  tone: 'hot'  }, dir: { bearing: 255, tone: 'hot'  } },
  { n: 2, name: 'Karlovy Vary',    x: 72,  y: 72,  dist: { v: '41 km',  tone: 'warm', arrow: 'down' },
    pop: { v: '49 073',  tone: 'warm', arrow: 'down' }, region: { v: 'Karlovarský', tone: 'correct' }, dir: { bearing: 200, tone: 'warm' } },
];
const A_WIN = [
  ...A_GUESSES,
  { n: 3, name: 'Mariánské Lázně', x: 58, y: 95, dist: { v: '11 km', tone: 'warm', arrow: 'down' },
    pop: { v: '13 162', tone: 'warm', arrow: 'down' }, region: { v: 'Karlovarský', tone: 'correct' }, dir: { bearing: 210, tone: 'warm' } },
  { n: 4, name: 'Planá',           x: 62, y: 112, dist: { v: '0 km', tone: 'correct', arrow: 'same' },
    pop: { v: '5 408',  tone: 'correct', arrow: 'same' }, region: { v: 'Plzeňský', tone: 'correct' }, dir: { bearing: 0, tone: 'correct' } },
];

const toneColor = (t) => t === 'correct' ? M.correct : t === 'warm' ? M.warm : M.hot;

// ─────────────────────────────────────────────────────────
// Rich guess row — per-attribute tones
// ─────────────────────────────────────────────────────────
function ArrowGlyph({ arrow, tone }) {
  if (!arrow || arrow === 'same') return null;
  const c = toneColor(tone);
  const up = arrow === 'up';
  return (
    <span title={up ? 'target is higher' : 'target is lower'} style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: 12, height: 12, color: c, fontWeight: 900, fontSize: 11, lineHeight: 1,
    }}>{up ? '▲' : '▼'}</span>
  );
}

function AttrChip({ label, value, tone, icon, arrow }) {
  const c = toneColor(tone);
  return (
    <div style={{
      border: `1.2px solid ${M.line}`, borderRadius: 6, padding: '4px 6px',
      background: c + '22', display: 'flex', flexDirection: 'column', alignItems: 'stretch',
      minWidth: 0, flex: 1,
    }}>
      <div style={{
        fontFamily: M.mono, fontSize: 8, color: M.muted, textTransform: 'uppercase', letterSpacing: 0.4,
        display: 'flex', alignItems: 'center', gap: 3,
      }}>
        {icon}<span>{label}</span>
      </div>
      <div style={{
        fontFamily: M.display, fontSize: 12, fontWeight: 700, color: M.ink, lineHeight: 1.1,
        whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', marginTop: 1,
        display: 'flex', alignItems: 'center', gap: 3,
      }}>
        <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>{value}</span>
        <ArrowGlyph arrow={arrow} tone={tone} />
      </div>
    </div>
  );
}

function GuessRowRich({ g, lang }) {
  const headTone = g.dist.tone === 'correct' ? M.correct
    : (g.dist.tone === 'warm' || g.pop.tone === 'warm' || g.region.tone === 'correct') ? M.warm : M.hot;
  const L = lang === 'CZ'
    ? { dist: 'vzdál.', pop: 'obyv.', region: 'kraj', dir: 'směr' }
    : { dist: 'dist',   pop: 'pop',   region: 'region', dir: 'dir' };
  return (
    <SketchBox style={{ marginBottom: 8 }} radius={8}>
      <div style={{ padding: '8px 10px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
          <div style={{
            width: 22, height: 22, borderRadius: '50%', background: headTone, color: '#fff',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: M.sans, fontWeight: 800, fontSize: 11, border: `1.5px solid ${M.line}`, flexShrink: 0,
          }}>{g.n}</div>
          <div style={{ fontFamily: M.display, fontSize: 14, fontWeight: 700, color: M.ink, flex: 1, lineHeight: 1.1 }}>{g.name}</div>
          {g.dist.tone === 'correct' && (
            <div style={{ fontFamily: M.sketch, fontSize: 13, color: M.correct }}>✓ {lang === 'CZ' ? 'správně' : 'correct'}</div>
          )}
        </div>
        <div style={{ display: 'flex', gap: 4 }}>
          <AttrChip label={L.dist}   value={g.dist.v}   tone={g.dist.tone}   arrow={g.dist.arrow} />
          <AttrChip label={L.pop}    value={g.pop.v}    tone={g.pop.tone}    arrow={g.pop.arrow} />
          <AttrChip label={L.region} value={g.region.v} tone={g.region.tone} />
          <div style={{
            border: `1.2px solid ${M.line}`, borderRadius: 6, padding: 2,
            background: toneColor(g.dir.tone) + '22', width: 38, display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            {g.dir.tone === 'correct'
              ? <div style={{ fontFamily: M.display, fontWeight: 700, color: M.correct }}>✓</div>
              : <Compass bearing={g.dir.bearing} size={28} tone={g.dir.tone} />}
          </div>
        </div>
      </div>
    </SketchBox>
  );
}

// ─────────────────────────────────────────────────────────
// Map with variable height (shared)
// ─────────────────────────────────────────────────────────
function MapHero({ pins, height }) {
  return (
    <div style={{ position: 'relative', height, background: M.paperDim, borderBottom: `1.5px solid ${M.line}`, overflow: 'hidden' }}>
      <CzechBlob width={360} height={Math.max(height, 80)} style={{ position: 'absolute', inset: 0 }} />
      {height > 40 && pins.map(p => <MapPin key={p.n} x={p.x} y={p.y * (height / 200)} n={p.n} tone={p.dist.tone} />)}
      {height > 60 && (
        <div style={{ position: 'absolute', bottom: 6, right: 8, display: 'flex', gap: 6, fontFamily: M.mono, fontSize: 9, color: M.muted }}>
          <Dot c={M.hot}/>far <Dot c={M.warm}/>close <Dot c={M.correct}/>got it
        </div>
      )}
    </div>
  );
}
function Dot2({ c }) {
  return <span style={{ width: 8, height: 8, borderRadius: '50%', background: c, border: `1px solid ${M.line}`, display: 'inline-block', marginRight: 2 }} />;
}

// ─────────────────────────────────────────────────────────
// A1 · Slider control (on-screen range input for map height)
// ─────────────────────────────────────────────────────────
function VariantA_Slider({ lang = 'EN', scope = 'mid' }) {
  const showWin = scope === 'win';
  const pins = showWin ? A_WIN : A_GUESSES;
  const [mapH, setMapH] = React.useState(200);

  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <TargetPrompt lang={lang} />
      <MapHero pins={pins} height={mapH} />
      {/* Slider strip */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8, padding: '6px 12px',
        background: M.paperDim, borderBottom: `1.5px solid ${M.line}`,
      }}>
        <div style={{ fontFamily: M.mono, fontSize: 9, color: M.muted, textTransform: 'uppercase' }}>
          {lang === 'CZ' ? 'mapa' : 'map'}
        </div>
        <input
          type="range" min={60} max={360} value={mapH}
          onChange={(e) => setMapH(Number(e.target.value))}
          style={{ flex: 1, accentColor: M.cz1, cursor: 'pointer' }}
        />
        <div style={{ fontFamily: M.mono, fontSize: 10, color: M.ink, width: 28, textAlign: 'right' }}>
          {Math.round((mapH / 360) * 100)}%
        </div>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '8px 10px' }}>
        {pins.slice().reverse().map(g => <GuessRowRich key={g.n} g={g} lang={lang} />)}
      </div>
      {showWin ? <WinFooterA_NEW lang={lang} /> : <GuessInput lang={lang} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// A2 · Collapse toggle (chevron button — map ↔ no map)
// ─────────────────────────────────────────────────────────
function VariantA_Collapse({ lang = 'EN', scope = 'mid' }) {
  const showWin = scope === 'win';
  const pins = showWin ? A_WIN : A_GUESSES;
  const [expanded, setExpanded] = React.useState(true);
  const height = expanded ? 220 : 0;

  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <TargetPrompt lang={lang} />
      <div style={{ transition: 'height .25s', height, overflow: 'hidden', position: 'relative' }}>
        <MapHero pins={pins} height={220} />
      </div>
      {/* Toggle strip — always visible, acts as the collapsed-map header */}
      <div
        onClick={() => setExpanded(e => !e)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
          background: M.paperDim, borderBottom: `1.5px solid ${M.line}`, cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        <div style={{
          width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform .25s',
          fontFamily: M.mono, fontSize: 12, color: M.ink,
        }}>▾</div>
        <div style={{ fontFamily: M.display, fontWeight: 700, fontSize: 13, color: M.ink, flex: 1 }}>
          {lang === 'CZ' ? 'Mapa ČR' : 'Czech map'}
        </div>
        {!expanded && (
          <div style={{ fontFamily: M.mono, fontSize: 10, color: M.muted }}>
            {pins.length} {lang === 'CZ' ? 'špendlíků' : 'pins'}
          </div>
        )}
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '8px 10px' }}>
        {pins.slice().reverse().map(g => <GuessRowRich key={g.n} g={g} lang={lang} />)}
      </div>
      {showWin ? <WinFooterA_NEW lang={lang} /> : <GuessInput lang={lang} />}
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// A3 · Drag handle (original, kept for comparison)
// ─────────────────────────────────────────────────────────
function VariantA_Drag({ lang = 'EN', scope = 'mid' }) {
  const showWin = scope === 'win';
  const pins = showWin ? A_WIN : A_GUESSES;
  const [mapH, setMapH] = React.useState(200);
  const onDragStart = (e) => {
    e.preventDefault();
    const startY = e.clientY;
    const startH = mapH;
    const move = (ev) => {
      const next = Math.max(60, Math.min(360, startH + (ev.clientY - startY)));
      setMapH(next);
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <TargetPrompt lang={lang} />
      <MapHero pins={pins} height={mapH} />
      <div
        onPointerDown={onDragStart}
        title={lang === 'CZ' ? 'Táhni pro změnu velikosti mapy' : 'Drag to resize map'}
        style={{
          height: 14, background: M.paperDim, borderBottom: `1.5px solid ${M.line}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          cursor: 'ns-resize', touchAction: 'none', userSelect: 'none',
        }}
      >
        <div style={{ width: 34, height: 3, borderRadius: 2, background: M.line, opacity: 0.5 }} />
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '8px 10px' }}>
        {pins.slice().reverse().map(g => <GuessRowRich key={g.n} g={g} lang={lang} />)}
      </div>
      {showWin ? <WinFooterA_NEW lang={lang} /> : <GuessInput lang={lang} />}
    </div>
  );
}

function WinFooterA_NEW({ lang }) {
  return (
    <div style={{ padding: '10px 14px 14px', borderTop: `1.5px solid ${M.line}`, background: M.paperDim }}>
      <div style={{ fontFamily: M.sketch, fontSize: 14, color: M.ink, textAlign: 'center', marginBottom: 8 }}>
        {lang === 'CZ' ? '🎉 Další město za 05:04:13' : '🎉 Next city in 05:04:13'}
      </div>
      <button style={{
        width: '100%', border: `1.5px solid ${M.line}`, background: M.correct, color: '#fff',
        padding: '10px', borderRadius: 8, fontFamily: M.display, fontWeight: 700, fontSize: 15,
        boxShadow: '2px 2px 0 ' + M.line, cursor: 'pointer',
      }}>{lang === 'CZ' ? 'Sdílet výsledek' : 'Share result'}</button>
    </div>
  );
}

// ─────────────────────────────────────────────────────────
// A2 · Landing screen with inline How-to-play
// A condensed 3-step explainer sits where the list would be,
// so first-time players see the rules without opening a modal.
// ─────────────────────────────────────────────────────────
function VariantA_CollapseLanding({ lang = 'EN' }) {
  const [expanded, setExpanded] = React.useState(true);
  const height = expanded ? 180 : 0;
  const t = lang === 'CZ'
    ? {
        steps: [
          ['1', 'Napiš město', 'Začni jakýmkoli českým městem.'],
          ['2', 'Čti nápovědy', 'Vzdálenost, obyvatelé, kraj, směr.'],
          ['3', 'Zužuj okruh', 'Barvy a šipky ukazují, kam dál.'],
        ],
        legend: 'Barvy',
        colors: [['daleko', M.hot], ['blízko', M.warm], ['správně', M.correct]],
        arrowNote: '▲ / ▼ = cíl je větší / menší',
        attempts: '6 pokusů · nové město každý den',
      }
    : {
        steps: [
          ['1', 'Type a city', 'Start with any Czech town.'],
          ['2', 'Read the hints', 'Distance, population, region, direction.'],
          ['3', 'Narrow it down', 'Colors + arrows point the way.'],
        ],
        legend: 'Colors',
        colors: [['far', M.hot], ['close', M.warm], ['correct', M.correct]],
        arrowNote: '▲ / ▼ = target is higher / lower',
        attempts: '6 guesses · a new city every day',
      };

  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <TargetPrompt lang={lang} />
      <div style={{ transition: 'height .25s', height, overflow: 'hidden' }}>
        <MapHero pins={[]} height={180} />
      </div>
      <div
        onClick={() => setExpanded(e => !e)}
        style={{
          display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px',
          background: M.paperDim, borderBottom: `1.5px solid ${M.line}`, cursor: 'pointer', userSelect: 'none',
        }}
      >
        <div style={{
          width: 18, height: 18, display: 'flex', alignItems: 'center', justifyContent: 'center',
          transform: expanded ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform .25s',
          fontFamily: M.mono, fontSize: 12, color: M.ink,
        }}>▾</div>
        <div style={{ fontFamily: M.display, fontWeight: 700, fontSize: 13, color: M.ink, flex: 1 }}>
          {lang === 'CZ' ? 'Mapa ČR' : 'Czech map'}
        </div>
      </div>

      {/* Inline how-to */}
      <div style={{ flex: 1, overflow: 'auto', padding: '14px 14px 8px' }}>
        <div style={{ fontFamily: M.display, fontSize: 17, fontWeight: 700, color: M.ink, marginBottom: 2 }}>
          {lang === 'CZ' ? 'Jak hrát' : 'How to play'}
        </div>
        <div style={{ fontFamily: M.sketch, fontSize: 13, color: M.muted, marginBottom: 12 }}>{t.attempts}</div>

        {t.steps.map(([n, h, b]) => (
          <div key={n} style={{ display: 'flex', gap: 10, marginBottom: 10, alignItems: 'flex-start' }}>
            <div style={{
              width: 22, height: 22, borderRadius: 11, background: M.ink, color: M.paper,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: M.display, fontWeight: 700, fontSize: 12, flexShrink: 0,
            }}>{n}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: M.display, fontSize: 13, fontWeight: 700, color: M.ink, lineHeight: 1.15 }}>{h}</div>
              <div style={{ fontFamily: M.sans, fontSize: 11, color: M.muted, marginTop: 1, lineHeight: 1.3 }}>{b}</div>
            </div>
          </div>
        ))}

        {/* Demo row to ground the rules in a real example */}
        <div style={{ fontFamily: M.mono, fontSize: 9, color: M.muted, textTransform: 'uppercase', margin: '12px 0 4px' }}>
          {lang === 'CZ' ? 'Příklad' : 'Example'}
        </div>
        <GuessRowRich lang={lang} g={{
          n: 1, name: 'Karlovy Vary',
          dist:   { v: '41 km',  tone: 'warm', arrow: 'down' },
          pop:    { v: '49 073', tone: 'warm', arrow: 'down' },
          region: { v: lang === 'CZ' ? 'Karlovarský' : 'Karlovy V.', tone: 'correct' },
          dir:    { bearing: 200, tone: 'warm' },
        }} />

        <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginTop: 8, flexWrap: 'wrap' }}>
          <div style={{ fontFamily: M.mono, fontSize: 9, color: M.muted, textTransform: 'uppercase' }}>{t.legend}</div>
          {t.colors.map(([n, c]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              <div style={{ width: 11, height: 11, borderRadius: 6, background: c, border: `1px solid ${M.line}` }} />
              <span style={{ fontFamily: M.sketch, fontSize: 12, color: M.ink }}>{n}</span>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: M.sketch, fontSize: 12, color: M.muted, marginTop: 6 }}>
          {t.arrowNote}
        </div>
      </div>

      <GuessInput lang={lang} />
    </div>
  );
}

Object.assign(window, {
  VariantA_Slider, VariantA_Collapse, VariantA_CollapseLanding, VariantA_Drag, GuessRowRich,
});
