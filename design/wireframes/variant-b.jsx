// Direction B — Card per guess. Each guess is a small card with a mini-map
// preview and 4 metric chips. Feedback via HEAT GRADIENT (cold blue → hot red).

function VariantB({ lang = 'EN', scope = 'mid' }) {
  const showWin = scope === 'win';
  const data = [
    { n: 1, name: 'Pardubice', dist: 218, pop: -1, region: 'far', dir: 135, heat: 0.85 },
    { n: 2, name: 'Karlovy Vary', dist: 41, pop: -1, region: 'neighbor', dir: 225, heat: 0.35 },
  ];
  const winData = [
    ...data,
    { n: 3, name: 'Mariánské Lázně', dist: 11, pop: -1, region: 'neighbor', dir: 200, heat: 0.12 },
    { n: 4, name: 'Planá', dist: 0, pop: 0, region: 'same', dir: 0, heat: 0, correct: true },
  ];
  const list = showWin ? winData : data;

  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <TargetPrompt lang={lang} />
      <div style={{ flex: 1, overflow: 'auto', padding: '10px 12px', background: M.paperDim }}>
        {list.slice().reverse().map(g => <GuessCardB key={g.n} g={g} lang={lang} />)}
      </div>
      {showWin ? <ShareStripB lang={lang} /> : <GuessInput lang={lang} />}
    </div>
  );
}

// heat 0 (cold) → 1 (hot). Blend blue → amber → red.
function heatColor(h) {
  if (h <= 0.001) return M.correct;
  if (h < 0.4) {
    const t = h / 0.4;
    return mix(M.cold, M.warm, t);
  }
  const t = (h - 0.4) / 0.6;
  return mix(M.warm, M.hot, t);
}
function mix(a, b, t) {
  const pa = parseHex(a), pb = parseHex(b);
  const r = Math.round(pa[0] + (pb[0]-pa[0])*t);
  const g = Math.round(pa[1] + (pb[1]-pa[1])*t);
  const bl = Math.round(pa[2] + (pb[2]-pa[2])*t);
  return `rgb(${r},${g},${bl})`;
}
function parseHex(h) {
  const x = h.replace('#','');
  return [parseInt(x.slice(0,2),16), parseInt(x.slice(2,4),16), parseInt(x.slice(4,6),16)];
}

function GuessCardB({ g, lang }) {
  const c = g.correct ? M.correct : heatColor(g.heat);
  return (
    <SketchBox style={{ marginBottom: 10, background: M.paper }} radius={10}>
      <div style={{ padding: 10 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 8 }}>
          <div style={{ fontFamily: M.mono, fontSize: 11, color: M.muted }}>#{g.n}</div>
          <div style={{ fontFamily: M.display, fontSize: 17, fontWeight: 700, color: M.ink, flex: 1 }}>{g.name}</div>
          {/* Heat bar */}
          <div style={{
            width: 60, height: 10, borderRadius: 5, border: `1px solid ${M.line}`,
            background: `linear-gradient(to right, ${M.cold}, ${M.warm}, ${M.hot})`, position: 'relative',
          }}>
            <div style={{
              position: 'absolute', left: `${g.heat*100}%`, top: -3, width: 3, height: 16,
              background: M.ink, transform: 'translateX(-50%)',
            }} />
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 6 }}>
          <MetricChip label={lang === 'CZ' ? 'km' : 'km'} value={g.dist === 0 ? '0' : g.dist} tone={c} />
          <MetricChip label={lang === 'CZ' ? 'obyv.' : 'pop'} value={g.pop === -1 ? '↓' : g.pop === 0 ? '=' : '↑'} tone={c} />
          <MetricChip label={lang === 'CZ' ? 'kraj' : 'region'} value={g.region === 'same' ? '=' : g.region === 'neighbor' ? '≈' : '✗'} tone={c} />
          <CompassChip bearing={g.dir} tone={c} correct={g.correct} />
        </div>
      </div>
    </SketchBox>
  );
}

function MetricChip({ label, value, tone }) {
  return (
    <div style={{
      border: `1.2px solid ${M.line}`, borderRadius: 6, padding: '6px 4px',
      background: tone + '22', textAlign: 'center',
    }}>
      <div style={{ fontFamily: M.mono, fontSize: 9, color: M.muted, textTransform: 'uppercase' }}>{label}</div>
      <div style={{ fontFamily: M.display, fontSize: 14, fontWeight: 700, color: M.ink, lineHeight: 1.1 }}>{value}</div>
    </div>
  );
}

function CompassChip({ bearing, tone, correct }) {
  return (
    <div style={{
      border: `1.2px solid ${M.line}`, borderRadius: 6, padding: '4px',
      background: tone + '22', display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {correct
        ? <div style={{ fontFamily: M.display, fontSize: 16, fontWeight: 700, color: M.correct }}>✓</div>
        : <Compass bearing={bearing} size={28} tone={tone === M.hot ? 'hot' : tone === M.warm ? 'warm' : 'cold'} />}
    </div>
  );
}

function ShareStripB({ lang }) {
  return (
    <div style={{ padding: '10px 12px', borderTop: `1.5px solid ${M.line}`, background: M.paper, display: 'flex', gap: 8, alignItems: 'center' }}>
      <div style={{ fontFamily: M.sketch, fontSize: 13, color: M.ink, flex: 1 }}>
        {lang === 'CZ' ? '4/6 · příští: 05:04:13' : '4/6 · next: 05:04:13'}
      </div>
      <button style={{
        border: `1.5px solid ${M.line}`, background: M.ink, color: M.paper,
        padding: '8px 14px', borderRadius: 8, fontFamily: M.display, fontWeight: 700, fontSize: 13,
        boxShadow: '2px 2px 0 ' + M.line, cursor: 'pointer',
      }}>{lang === 'CZ' ? 'Sdílet' : 'Share'}</button>
    </div>
  );
}

Object.assign(window, { VariantB, heatColor });
