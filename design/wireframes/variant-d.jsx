// Direction D — Split view with mini-map + progress bars filling toward correct.
// Emphasizes map context for every guess; progress bars show how close you are.

function VariantD({ lang = 'EN', scope = 'mid' }) {
  const showWin = scope === 'win';
  const data = [
    { n: 1, name: 'Pardubice', distPct: 0.10, popPct: 0.35, regionPct: 0, dir: 135, x: 215, y: 82 },
    { n: 2, name: 'Karlovy Vary', distPct: 0.82, popPct: 0.55, regionPct: 0.5, dir: 225, x: 72, y: 72 },
  ];
  const winData = [
    ...data,
    { n: 3, name: 'Mariánské Lázně', distPct: 0.95, popPct: 0.85, regionPct: 0.5, dir: 210, x: 58, y: 95 },
    { n: 4, name: 'Planá', distPct: 1, popPct: 1, regionPct: 1, dir: 0, x: 62, y: 112, correct: true },
  ];
  const list = showWin ? winData : data;

  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <TargetPrompt lang={lang} />
      {/* mini map strip */}
      <div style={{ position: 'relative', height: 120, background: M.paperDim, borderBottom: `1.5px solid ${M.line}` }}>
        <CzechBlob width={360} height={120} style={{ position: 'absolute', inset: 0 }} />
        {list.map(p => (
          <MapPin key={p.n} x={p.x * 0.95} y={p.y * 0.65} n={p.n}
            tone={p.correct ? 'correct' : p.distPct > 0.7 ? 'warm' : 'hot'} size={20} />
        ))}
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '10px 12px' }}>
        {list.slice().reverse().map(g => <ProgressRowD key={g.n} g={g} lang={lang} />)}
      </div>
      {showWin ? <ShareD lang={lang} /> : <GuessInput lang={lang} />}
    </div>
  );
}

function ProgressRowD({ g, lang }) {
  return (
    <SketchBox style={{ marginBottom: 8, background: M.paper }} radius={8}>
      <div style={{ padding: 10 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
          <div style={{
            width: 22, height: 22, borderRadius: 4, border: `1.5px solid ${M.line}`,
            background: g.correct ? M.correct : M.paperDim, color: g.correct ? '#fff' : M.ink,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: M.mono, fontSize: 11, fontWeight: 800,
          }}>{g.n}</div>
          <div style={{ fontFamily: M.display, fontSize: 15, fontWeight: 700, color: M.ink, flex: 1 }}>{g.name}</div>
          <Compass bearing={g.dir} size={24} tone={g.correct ? 'correct' : g.distPct > 0.7 ? 'warm' : 'hot'} />
        </div>
        <Bar label={lang === 'CZ' ? 'vzdálenost' : 'distance'} pct={g.distPct} />
        <Bar label={lang === 'CZ' ? 'obyvatelé' : 'population'} pct={g.popPct} />
        <Bar label={lang === 'CZ' ? 'kraj' : 'region'} pct={g.regionPct} discrete />
      </div>
    </SketchBox>
  );
}

function Bar({ label, pct, discrete }) {
  const c = pct >= 0.99 ? M.correct : pct >= 0.6 ? M.warm : pct >= 0.3 ? M.warm : M.hot;
  return (
    <div style={{ marginBottom: 4 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: M.mono, fontSize: 9, color: M.muted, marginBottom: 2 }}>
        <span style={{ textTransform: 'uppercase' }}>{label}</span>
        <span>{Math.round(pct * 100)}%</span>
      </div>
      <div style={{ height: 8, border: `1.2px solid ${M.line}`, borderRadius: 4, background: M.paperDim, overflow: 'hidden' }}>
        <div style={{ width: `${pct * 100}%`, height: '100%', background: c, transition: 'width .3s' }} />
      </div>
    </div>
  );
}

function ShareD({ lang }) {
  return (
    <div style={{ padding: 12, borderTop: `1.5px solid ${M.line}`, background: M.paperDim }}>
      <button style={{
        width: '100%', border: `1.5px solid ${M.line}`, background: M.correct, color: '#fff',
        padding: 12, borderRadius: 8, fontFamily: M.display, fontWeight: 700, fontSize: 15,
        boxShadow: '2px 2px 0 ' + M.line, cursor: 'pointer',
      }}>
        {lang === 'CZ' ? '🏆 Sdílet (4/6)' : '🏆 Share (4/6)'}
      </button>
    </div>
  );
}

// How-to-play modal, shared across variants
function HowToPlay({ lang = 'EN' }) {
  const t = lang === 'CZ'
    ? {
        title: 'Jak hrát',
        sub: 'Uhodni dnešní české město.',
        steps: [
          ['1', 'Napiš název města', 'Začni jakýmkoli městem v ČR.'],
          ['2', 'Přečti nápovědy', 'Vzdálenost, směr, kraj, obyvatelé.'],
          ['3', 'Zužuj okruh', 'Barvy ukazují, jak blízko jsi.'],
          ['4', 'Máš 6 pokusů', 'Každý den jedno nové město.'],
        ],
        legend: 'Barvy',
        colors: [['Studená', M.hot, 'daleko'], ['Blízko', M.warm, 'sousední'], ['Správně!', M.correct, 'to je ono']],
        cta: 'Začít',
      }
    : {
        title: 'How to play',
        sub: 'Guess today\'s Czech city.',
        steps: [
          ['1', 'Type a city name', 'Start with any Czech town.'],
          ['2', 'Read the hints', 'Distance, direction, region, population.'],
          ['3', 'Narrow it down', 'Colors tell you how close you are.'],
          ['4', 'You have 6 guesses', 'A new city every day.'],
        ],
        legend: 'Colors',
        colors: [['Cold', M.hot, 'far away'], ['Warm', M.warm, 'neighbour'], ['Correct!', M.correct, 'got it']],
        cta: 'Start',
      };
  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <div style={{ padding: '14px', borderBottom: `1.5px solid ${M.line}`, display: 'flex', alignItems: 'center' }}>
        <div style={{ fontFamily: M.display, fontSize: 22, fontWeight: 700, flex: 1 }}>{t.title}</div>
        <button style={{
          width: 32, height: 32, borderRadius: 16, border: `1.5px solid ${M.line}`,
          background: M.paper, fontFamily: M.sans, fontSize: 16, cursor: 'pointer', padding: 0,
        }}>×</button>
      </div>
      <div style={{ flex: 1, overflow: 'auto', padding: '14px' }}>
        <div style={{ fontFamily: M.sketch, fontSize: 16, color: M.ink, marginBottom: 14 }}>{t.sub}</div>

        {/* Mini demo */}
        <SketchBox style={{ background: M.paperDim, marginBottom: 16, padding: 10 }} radius={8}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <div style={{ width: 20, height: 20, borderRadius: 10, background: M.warm, border: `1.5px solid ${M.line}`, color: '#fff', fontFamily: M.sans, fontWeight: 800, fontSize: 10, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>2</div>
            <div style={{ fontFamily: M.display, fontSize: 14, fontWeight: 700 }}>Karlovy Vary</div>
            <div style={{ flex: 1 }} />
            <Compass bearing={225} size={22} tone="warm" />
            <div style={{ fontFamily: M.mono, fontSize: 11, color: M.ink }}>41 km</div>
          </div>
          <div style={{ fontFamily: M.sketch, fontSize: 11, color: M.muted, marginTop: 6 }}>
            {lang === 'CZ' ? '↑ 41 km jihozápadně, blízko!' : '↑ 41 km southwest — getting warm!'}
          </div>
        </SketchBox>

        {t.steps.map(([n, h, b], i) => (
          <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 10 }}>
            <div style={{
              width: 26, height: 26, borderRadius: 13, background: M.ink, color: M.paper,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: M.display, fontWeight: 700, fontSize: 13, flexShrink: 0,
            }}>{n}</div>
            <div>
              <div style={{ fontFamily: M.display, fontSize: 14, fontWeight: 700, color: M.ink }}>{h}</div>
              <div style={{ fontFamily: M.sans, fontSize: 12, color: M.muted, marginTop: 1 }}>{b}</div>
            </div>
          </div>
        ))}

        <div style={{ fontFamily: M.mono, fontSize: 10, color: M.muted, textTransform: 'uppercase', marginTop: 14, marginBottom: 6 }}>{t.legend}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          {t.colors.map(([n, c, d]) => (
            <div key={n} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 16, height: 16, borderRadius: 8, background: c, border: `1.5px solid ${M.line}` }} />
              <div style={{ fontFamily: M.display, fontSize: 13, fontWeight: 700 }}>{n}</div>
              <div style={{ fontFamily: M.sans, fontSize: 12, color: M.muted }}>— {d}</div>
            </div>
          ))}
        </div>
      </div>
      <div style={{ padding: 12, borderTop: `1.5px solid ${M.line}` }}>
        <button style={{
          width: '100%', border: `1.5px solid ${M.line}`, background: M.ink, color: M.paper,
          padding: 12, borderRadius: 8, fontFamily: M.display, fontWeight: 700, fontSize: 15,
          boxShadow: '2px 2px 0 ' + M.line, cursor: 'pointer',
        }}>{t.cta}</button>
      </div>
    </div>
  );
}

Object.assign(window, { VariantD, HowToPlay });
