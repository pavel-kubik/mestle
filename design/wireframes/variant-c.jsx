// Direction C — Timeline. Vertical list, newest at top, with a thin line
// connecting guesses. Feedback: arrows + numeric deltas (no colors). Very
// editorial / Czech-postcard feel via the display font + postage-stamp badge.

function VariantC({ lang = 'EN', scope = 'mid' }) {
  const showWin = scope === 'win';
  const data = [
    { n: 1, name: 'Pardubice', distDelta: '+218 km', popArrow: '▼', popText: '−100k', regionArrow: '✗', dirArrow: '↖' },
    { n: 2, name: 'Karlovy Vary', distDelta: '+41 km', popArrow: '▼', popText: '−44k', regionArrow: '≈', dirArrow: '↘' },
  ];
  const winData = [
    ...data,
    { n: 3, name: 'Mariánské Lázně', distDelta: '+11 km', popArrow: '▼', popText: '−9k', regionArrow: '≈', dirArrow: '↘' },
    { n: 4, name: 'Planá', distDelta: '0 km', popArrow: '✓', popText: '', regionArrow: '✓', dirArrow: '✓', correct: true },
  ];
  const list = showWin ? winData : data;

  return (
    <div style={{ background: M.paper, height: '100%', display: 'flex', flexDirection: 'column', fontFamily: M.sans }}>
      <MestleHeader lang={lang} />
      <StampPrompt lang={lang} />
      <div style={{ flex: 1, overflow: 'auto', padding: '0 14px' }}>
        <div style={{ position: 'relative', paddingLeft: 30, paddingTop: 12 }}>
          {/* timeline spine */}
          <div style={{ position: 'absolute', left: 14, top: 12, bottom: 12, width: 2, background: M.line, opacity: 0.4 }} />
          {list.slice().reverse().map((g, i) => <TimelineRowC key={g.n} g={g} isFirst={i === 0} />)}
        </div>
      </div>
      {showWin ? <StampShareC lang={lang} /> : <GuessInput lang={lang} />}
    </div>
  );
}

function StampPrompt({ lang }) {
  return (
    <div style={{ padding: '14px 14px 10px', background: M.paper, display: 'flex', gap: 12, alignItems: 'center' }}>
      <div style={{
        width: 70, height: 84, border: `2px dashed ${M.line}`, position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center', background: M.paperDim,
      }}>
        <div style={{ fontFamily: M.sketch, fontSize: 10, color: M.muted, textAlign: 'center', lineHeight: 1.1 }}>
          coat<br/>of arms<br/>placeholder
        </div>
        <div style={{
          position: 'absolute', top: -8, right: -8, background: M.cz1, color: '#fff',
          fontFamily: M.mono, fontSize: 9, padding: '2px 5px', transform: 'rotate(6deg)',
          border: `1px solid ${M.line}`,
        }}>#1437</div>
      </div>
      <div style={{ flex: 1 }}>
        <div style={{ fontFamily: M.display, fontSize: 15, fontWeight: 700, color: M.ink, lineHeight: 1.2 }}>
          {lang === 'CZ' ? 'Dnešní město nosí tento znak' : "Today's city wears this badge"}
        </div>
        <div style={{ fontFamily: M.sketch, fontSize: 12, color: M.muted, marginTop: 4 }}>
          {lang === 'CZ' ? 'kdo je to?' : 'who is it?'}
        </div>
      </div>
    </div>
  );
}

function TimelineRowC({ g, isFirst }) {
  const tone = g.correct ? M.correct : M.ink;
  return (
    <div style={{ position: 'relative', marginBottom: 14 }}>
      {/* node */}
      <div style={{
        position: 'absolute', left: -22, top: 4, width: 16, height: 16,
        borderRadius: '50%', background: g.correct ? M.correct : M.paper,
        border: `2px solid ${M.line}`, zIndex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: M.mono, fontSize: 8, fontWeight: 800, color: g.correct ? '#fff' : M.ink,
      }}>{g.correct ? '✓' : g.n}</div>
      {/* content */}
      <div>
        <div style={{ fontFamily: M.display, fontSize: 17, fontWeight: 700, color: tone, lineHeight: 1.1 }}>
          {g.name}
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 4, flexWrap: 'wrap', fontFamily: M.mono, fontSize: 11, color: M.muted }}>
          <span><b style={{ color: M.ink }}>{g.distDelta}</b></span>
          <span>pop {g.popArrow}{g.popText}</span>
          <span>region {g.regionArrow}</span>
          <span>dir {g.dirArrow}</span>
        </div>
        {isFirst && !g.correct && (
          <div style={{ fontFamily: M.sketch, fontSize: 12, color: M.muted, marginTop: 2 }}>
            ← your latest guess
          </div>
        )}
      </div>
    </div>
  );
}

function StampShareC({ lang }) {
  return (
    <div style={{ padding: '14px', borderTop: `1.5px solid ${M.line}`, background: M.paperDim }}>
      <SketchBox style={{ background: M.paper, padding: 12 }} radius={8}>
        <div style={{ fontFamily: M.display, fontSize: 15, fontWeight: 700, color: M.ink, textAlign: 'center' }}>
          {lang === 'CZ' ? 'Hotovo za 4/6' : 'Solved in 4/6'}
        </div>
        <div style={{ fontFamily: M.sketch, fontSize: 12, color: M.muted, textAlign: 'center', marginTop: 2 }}>
          {lang === 'CZ' ? 'další město za 05:04:13' : 'next city in 05:04:13'}
        </div>
        <button style={{
          width: '100%', marginTop: 10, border: `1.5px solid ${M.line}`, background: M.ink, color: M.paper,
          padding: '10px', borderRadius: 8, fontFamily: M.display, fontWeight: 700, fontSize: 14,
          boxShadow: '2px 2px 0 ' + M.line, cursor: 'pointer',
        }}>{lang === 'CZ' ? 'Zkopírovat a sdílet' : 'Copy & share'}</button>
      </SketchBox>
    </div>
  );
}

Object.assign(window, { VariantC });
