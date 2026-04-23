// Direction A — Map-first. Full-height map with pinned guesses.
// Below the fold: compact pill rows. Feedback via red/amber/green traffic light.

function VariantA({ lang = 'EN', scope = 'mid' }) {
  const guesses = [
    { n: 1, name: 'Pardubice', x: 215, y: 82, tone: 'hot', dist: '218 km', pop: '92 319', region: 'hot' },
    { n: 2, name: 'Karlovy Vary', x: 72, y: 72, tone: 'warm', dist: '41 km', pop: '49 073', region: 'warm' },
  ];
  const showWin = scope === 'win';
  const winGuesses = [
    { n: 1, name: 'Pardubice', x: 215, y: 82, tone: 'hot' },
    { n: 2, name: 'Karlovy Vary', x: 72, y: 72, tone: 'warm' },
    { n: 3, name: 'Mariánské Lázně', x: 58, y: 95, tone: 'warm' },
    { n: 4, name: 'Planá', x: 62, y: 112, tone: 'correct' },
  ];
  const pins = showWin ? winGuesses : guesses;

  // Draggable split between map and list. Clamped so both remain usable.
  const [mapH, setMapH] = React.useState(200);
  const dragRef = React.useRef(null);
  const onDragStart = (e) => {
    e.preventDefault();
    const startY = e.clientY ?? e.touches?.[0]?.clientY;
    const startH = mapH;
    const move = (ev) => {
      const y = ev.clientY ?? ev.touches?.[0]?.clientY;
      const next = Math.max(120, Math.min(360, startH + (y - startY)));
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

      {/* Map as hero */}
      <div style={{ position: 'relative', height: mapH, background: M.paperDim, borderBottom: `1.5px solid ${M.line}`, transition: 'height .05s' }}>
        <CzechBlob width={360} height={mapH} style={{ position: 'absolute', inset: 0 }} />
        {pins.map(p => <MapPin key={p.n} x={p.x} y={p.y * (mapH / 200)} n={p.n} tone={p.tone} />)}
        {/* legend */}
        <div style={{ position: 'absolute', bottom: 6, right: 8, display: 'flex', gap: 6, fontFamily: M.mono, fontSize: 9, color: M.muted }}>
          <Dot c={M.hot}/>far <Dot c={M.warm}/>close <Dot c={M.correct}/>got it
        </div>
      </div>

      {/* Drag handle — resize map ↕ list */}
      <div
        ref={dragRef}
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

      {/* Scroll list below */}
      <div style={{ flex: 1, overflow: 'auto', padding: '8px 12px' }}>
        {pins.slice().reverse().map(g => <GuessPillA key={g.n} g={g} />)}
      </div>

      {showWin ? <WinFooterA lang={lang} /> : <GuessInput lang={lang} />}
    </div>
  );
}

function Dot({ c }) {
  return <span style={{ width: 8, height: 8, borderRadius: '50%', background: c, border: `1px solid ${M.line}`, display: 'inline-block', marginRight: 2 }} />;
}

function GuessPillA({ g }) {
  const tint = g.tone === 'correct' ? M.correct : g.tone === 'warm' ? M.warm : M.hot;
  return (
    <SketchBox style={{ marginBottom: 8 }} radius={8}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px' }}>
        <div style={{
          width: 26, height: 26, borderRadius: '50%', background: tint, color: '#fff',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: M.sans, fontWeight: 800, fontSize: 13, border: `1.5px solid ${M.line}`, flexShrink: 0,
        }}>{g.n}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: M.display, fontSize: 15, fontWeight: 700, color: M.ink, lineHeight: 1.1 }}>{g.name}</div>
          <div style={{ fontFamily: M.mono, fontSize: 10, color: M.muted, marginTop: 2, display: 'flex', gap: 8 }}>
            <span>{g.dist ?? '—'}</span>
            <span>pop {g.pop ?? '—'}</span>
          </div>
        </div>
        {g.tone !== 'correct' && <div style={{ fontFamily: M.sketch, fontSize: 11, color: tint }}>
          {g.tone === 'warm' ? '↑ warmer' : '↓ colder'}
        </div>}
        {g.tone === 'correct' && <div style={{ fontFamily: M.sketch, fontSize: 14, color: M.correct }}>✓ correct!</div>}
      </div>
    </SketchBox>
  );
}

function WinFooterA({ lang }) {
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

function EmptyA({ lang = 'EN' }) {
  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <TargetPrompt lang={lang} />
      <div style={{ position: 'relative', flex: 1, background: M.paperDim }}>
        <CzechBlob width={360} height={320} style={{ position: 'absolute', top: 40, left: 0 }} />
        <div style={{
          position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
          textAlign: 'center', fontFamily: M.sketch,
        }}>
          <div style={{ fontSize: 18, color: M.ink }}>{lang === 'CZ' ? 'Najdi dnešní město' : 'Find today\'s city'}</div>
          <div style={{ fontSize: 13, color: M.muted, marginTop: 4 }}>{lang === 'CZ' ? '6 pokusů' : '6 guesses'}</div>
        </div>
      </div>
      <GuessInput lang={lang} />
    </div>
  );
}

Object.assign(window, { VariantA, EmptyA });
